#!/usr/bin/env node
/**
 * Verification for sector equipment guides (`SectorContent.equipmentGuide`,
 * e.g. `data/sector-content/heavy-equipment-guide.ts`) — editorial,
 * manufacturer-neutral equipment-type content that must never turn into a
 * product listing, a brand page, or a page of unverified specifications.
 *
 * Fails (non-zero exit) on:
 *   - unknown category ids, or categories belonging to another sector
 *   - duplicate or malformed ids/anchors, or collisions with the page's own
 *     anchors (`request-quote`, …)
 *   - unresolved industry / related-equipment / project-equipment ids
 *   - a `linkedProductId` that doesn't exist or isn't in the same sector
 *     and category as the guide entry
 *   - missing or empty EN/AR text, empty required arrays, EN/AR arrays of
 *     different lengths, or a process that isn't exactly four steps
 *   - any manufacturer/brand identity (active denylist terms, the OEM brand
 *     slugs and sourcing values of the linked products, brand-derived
 *     generic terms) in rendered guide, hero override or FAQ/SEO text
 *   - any digit in rendered guide or hero override text (no invented
 *     numeric specifications)
 *   - prohibited business claims (authorized dealer, after-sales, genuine
 *     OEM parts, supplier network, certifications, spare parts, warranty,
 *     customs, stock claims, …), sector-specific claims (no used vehicles
 *     for commercial vehicles) and generic marketing superlatives
 *   - an image path that doesn't exist, or an image without EN/AR alt text
 *   - a breach of the sector's own policy (`SECTOR_POLICIES`: exact guide
 *     and application counts, excluded guides / families, replacement
 *     scope, FAQ count, no generic sections, non-public records, required
 *     cross-sector routing, …)
 *   - cross-sector routing entries that don't resolve to another real
 *     sector, are duplicated, or a project route with no routing entry
 * Exact customer-input / disclaimer phrases listed per sector in
 * `SECTOR_ALLOWED_PHRASES` are removed before the claim patterns run.
 * Reports (without failing) every entry whose technical or Arabic review is
 * not yet "verified". Pass `--require-verified` to make that a failure too.
 *
 * Run: node --experimental-strip-types scripts/verify-equipment-guides.mjs
 */
import fs from "node:fs";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(new URL("./ts-alias-loader.mjs", import.meta.url));

const root = pathToFileURL(`${process.cwd()}/`).href;
const load = (path) => import(new URL(path, root).href);

const { SECTORS } = await load("data/sectors.ts");
const { getSectorContent } = await load("data/sector-content/index.ts");
const { getCategoryById } = await load("data/product-categories.ts");
const { getProductById, getProductsBySector } = await load(
  "data/products/index.ts",
);
const { hasPublicIdentity } = await load("lib/products/public-product.ts");
const { getActiveDenylistTerms } = await load("data/manufacturers/denylist.ts");
// Page extras of the sectors rendered in the compact guide layout of
// `app/[locale]/sectors/[slug]/page.tsx` (hero CTAs, cross-sector routing,
// matrix route chips, compact-layout labels), by sector slug. Their text
// obeys the same rules as the guide itself.
const { COMPACT_GUIDE_PAGES: SECTOR_PAGE_EXTRAS } = await load(
  "data/sector-content/compact-guide-page.ts",
);

const REQUIRE_VERIFIED = process.argv.includes("--require-verified");
const RESERVED_ANCHORS = new Set([
  "request-quote",
  "main-content",
  "equipment-by-project",
  "quotation-checklist",
  "replacing-existing-equipment",
  "other-sector-requirements",
]);
// Prefix of the page's generated cross-sector routing anchors
// (`route-<sectorSlug>`) — no guide id may start with it.
const RESERVED_ANCHOR_PREFIX = "route-";
const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// Brand-derived generic terms used in the Egyptian market — never used as
// equipment or vehicle names. "هراس" is listed because it is ambiguous
// (commonly a roller) and must not be used for the hydraulic breaker;
// "هايس" (from a manufacturer's van model) must not be used for vans.
const BRAND_DERIVED_TERMS = [
  "بوكلين",
  "كلارك",
  "جي سي بي",
  "هراس",
  "هايس",
  "Bobcat",
  "Poclain",
];

// First tokens of multi-word brand slugs that are ordinary English words
// ("case" from "case-ce", "carrier" from "carrier-transicold"). The full
// slug is still matched; only the bare common word is exempt.
const COMMON_WORD_TOKENS = new Set(["case", "carrier"]);

// Brands whose name is an ordinary English word in lower case ("man"). They
// are matched case-sensitively, in their upper-case brand spelling only.
const CASE_SENSITIVE_BRANDS = new Map([["man", "MAN"]]);

const PROHIBITED_CLAIMS = [
  /\/products\//,
  /authori[sz]ed/i,
  /official (?:dealer|distributor|agent|representative)/i,
  /\bdealer(?:ship)?\b/i,
  /\bdistributor\b/i,
  /OEM representative/i,
  /after[- ]sales/i,
  /maintenance services?/i,
  /genuine/i,
  /\bOEM parts\b/i,
  /supplier network/i,
  /\bcertifi/i,
  /\b(?:ISO|EN|ASME|ANSI|NFPA|OSHA|DIN|BS)\s?\d/,
  /world[- ]class/i,
  /unmatched/i,
  /best quality/i,
  /leading supplier/i,
  /thousands of/i,
  /وكيل معتمد/,
  /موزع معتمد/,
  /الموزع الرسمي/,
  /الوكيل الرسمي/,
  /ما بعد البيع/,
  /خدمات? الصيانة/,
  /قطع غيار أصلية/,
  /شبكة موردين/,
  /معتمدة? من/,
  /الأفضل/,
  /رائدة?/,
  // No stock or availability claims, and no parts / warranty / customs /
  // licensing / government-approval claims.
  /\bin stock\b/i,
  /\bready stock\b/i,
  /spare parts/i,
  /warrant(?:y|ies)/i,
  /customs/i,
  /vehicle licensing/i,
  /Ministry of Health/i,
  /government approvals?/i,
  /tender documentation/i,
  /متوفرة? (?:في|بـ?)المخزن/,
  /قطع غيار/,
  /(?<!\p{L})(?:ال)?ضمانا?ت?(?!\p{L})/u,
  /تخليص جمركي/,
  /ترخيص المركبات/,
  /وزارة الصحة/,
  /وثائق المناقصات/,
];

// Claims that are valid for one sector but not another: heavy equipment can
// be sourced new or used, commercial vehicles are supplied new only.
const SECTOR_PROHIBITED_CLAIMS = {
  "commercial-vehicles": [
    /\bnew (?:and|or|&) used\b/i,
    /\bused (?:vehicles?|trucks?|vans?|pickups?|trailers?|tankers?|ambulances?|cars?)\b/i,
    /\bpre-?owned\b/i,
    /\bsecond[- ]hand\b/i,
    /مستعمل/,
  ],
  // Industrial equipment: approved scope is pumps, valves & actuators and air
  // compressors & systems, "available on request". No standards or
  // ratings, no spare-parts / seals supply, no stock or delivery promises,
  // no air-purity or hazardous-area certification wording, no packaged
  // pressure-boosting systems, and no relief-valve or gas-compressor guide.
  "industrial-equipment": [
    /\b(?:API|ISO|IEC|ASME|ANSI|PED|ATEX|NEMA|DIN|ASTM|AWWA)\b/,
    /\bIP ?rat/i,
    /\bclass zero\b|\bclass ?0\b/i,
    /\bseals\b/i,
    /\bseal kits?\b/i,
    /\bin stock\b|\bstocked items?\b|\bex[- ]stock\b/i,
    /\bimmediate(?:ly)? (?:delivery|available|availability|dispatch)\b/i,
    /\bguarantee/i,
    /\btrusted\b/i,
    /\bexplosion[- ]proof\b|\bhazardous[- ]area\b/i,
    /\b(?:food|pharma(?:ceutical)?|medical)[- ]grade\b/i,
    /\bbooster sets?\b|\bpackaged booster/i,
    /\b(?:pressure )?relief valves?\b|\bsafety valves?\b/i,
    /\bgas compressors?\b/i,
    /\binstallation services?\b|\bcommissioning\b/i,
    /أختام/,
    /مضمون/,
    /موثوق/,
    /أصلي/,
    /فور[يا]/,
    /متوفر(?:ة)? في المخزن|من المخزن/,
    /صمامات? (?:تنفيس|تخفيف) الضغط|صمامات? أمان|بلف أمان/,
    /ضواغط? (?:ال)?غاز/,
    /ذاتية التشغيل/,
    /محركات? تشغيل/,
    /مقاومة? للانفجار/,
    /شهاد(?:ة|ات)|اعتماد/,
  ],
  // Electrical & energy: equipment supply only, quoted against the
  // customer's own documents. Legitimate RFQ inputs (voltage, current,
  // frequency, phase, power, IP rating, voltage class, load schedule,
  // single-line diagram, BOQ) stay allowed; standards, approvals, design /
  // installation / commissioning / maintenance services, package-delivery
  // wording, stock and delivery promises, superlatives, hazardous-area
  // lighting and the rejected Arabic terms do not.
  "electrical-energy": [
    /\b(?:IEC|ISO|IEEE|UL|CE|NFPA|ATEX|IECEx|NEMA|ANSI|DIN|ASTM)\b/,
    /\bapprov/i,
    /\bEPC\b|\bturnkey\b|\bcommissioning\b/i,
    /\binstallation (?:services?|works?|contract)|\binstaller\b|\bwe install\b/i,
    /\b(?:we|GOLTENS) (?:design|designs|size|sizes|calculate|calculates|certify|certifies)\b/i,
    /\bdesign services?\b|\bengineering (?:services?|design|consultan)/i,
    /\bmaintenance\b/i,
    /complete electrical package|fully coordinated|single source for/i,
    /\bguarantee/i,
    /\btrusted\b|\breliable\b/i,
    /\bin stock\b|\bex[- ]stock\b/i,
    /\bimmediate(?:ly)? (?:delivery|available|availability|dispatch)\b/i,
    /\bexplosion[- ]proof\b|\bhazardous[- ]area\b/i,
    /المفاتيح الكهربائية/,
    /عاكسات?/,
    /القضبان الناقلة/,
    /مضمون/,
    /موثوق/,
    /أصلي/,
    /شهاد(?:ة|ات)|اعتماد/,
    /تسليم (?:ال)?مفتاح/,
    /الصيانة/,
    /التشغيل التجريبي/,
    /مقاومة? للانفجار|المناطق الخطرة/,
  ],
  // Fire protection: equipment supply only, against the customer's or
  // consultant's documents. GOLTENS never designs, sizes, calculates,
  // certifies, approves, lists, installs, tests, commissions or maintains,
  // and makes no system-package, trust, stock, delivery, support or
  // authority claims. Special-hazard suppression (clean agent, CO2, foam,
  // gas suppression) is out of scope. The few legitimate customer-input
  // and disclaimer uses of these words are exact phrases in
  // `SECTOR_ALLOWED_PHRASES` below — nothing else is exempt.
  "fire-protection": [
    /\bcertif/i,
    /\bapprov/i,
    /\blist(?:ed|ing)\b/i,
    /\bcomplete (?:fire protection|systems?|solutions?|packages?)\b/i,
    /\bsolutions?\b/i,
    /\btrusted\b|\breliable\b|\bguarantee/i,
    /technical support|supplier network|sourcing network/i,
    /\b(?:in |ex[- ])?stock(?:ed|s)?\b/i,
    /\bimmediate(?:ly)? (?:delivery|available|availability|dispatch)\b/i,
    /\bdesign/i,
    /\bsizing\b|\b(?:we|GOLTENS) size/i,
    /\bcalculat/i,
    /fire strategy/i,
    /\binstall/i,
    /\btest/i,
    /\bcommission/i,
    /\bmaintenance\b|\bmaintain(?:s|ing)?\b/i,
    /authority approval|civil defen[cs]e/i,
    /\b(?:NFPA|UL|FM|LPCB|VdS|EN|BS|ISO|CE|IEC)\b/,
    /clean[- ]agent|FM-?200|NOVEC|\bHFC\b|\bFK-|gas suppression|special[- ]hazard|\bCO2\b|suppression/i,
    /\bfoam (?:systems?|suppression|concentrates?)\b/i,
    /project references?|completed projects?|our projects|projects we serve/i,
    /technical catalogues?|coming soon/i,
    /تصميم|حساب|تركيب|اختبار|تشغيل تجريبي|صيانة/,
    /شهاد(?:ة|ات)|اعتماد|معتمد/,
    /مضمون|موثوق|أصلي/,
    /مخزن|المخزون|فوري/,
    /الدفاع المدني/,
    /الدعم الفني/,
    /حلول|متكامل/,
    /وكيل|موزع/,
    /صمام/,
    /الإخماد|الغاز النظيف|أنظمة (?:الإطفاء|الإخماد) (?:بالغاز|بثاني|بالرغوة)|أنظمة الرغوة/,
    /مشروعات (?:سابقة|منفذة)|مراجع المشروعات/,
    /الكتالوجات الفنية|قريبًا/,
  ],
  // Government procurement: GOLTENS prepares a quotation against the
  // customer's documents. No government affiliation, representation or
  // supplier-status wording, no tender preparation / submission or award
  // claims, no public-safety / law-enforcement scope, no compliance,
  // certification or approval claims, no standards, no design /
  // installation / testing / maintenance services, no package or trust
  // wording and no stock or delivery promises. The few legitimate
  // customer-input and disclaimer uses are exact phrases in
  // `SECTOR_ALLOWED_PHRASES` below — nothing else is exempt.
  "government-procurement": [
    /\b(?:government|governmental|public[- ]sector|registered|approved|accredited|official|qualified|pre-?qualified|listed) (?:suppliers?|vendors?|contractors?|partners?)\b/i,
    /\baffiliat|\bon behalf of\b|\brepresent/i,
    /\bsubmi(?:t|ts|tted|tting|ssion)\b/i,
    /\b(?:tender|bid) (?:preparation|management|services?|writing)\b|\bprepar\w* (?:the |your |tender )?(?:tenders?|bids?|documents?)\b/i,
    /\bguarantee|\bwin(?:s|ning)?\b|\baward/i,
    /law enforcement|\bpolice\b|\bmilitary\b|\barmed forces\b|\bdefen[cs]e\b|\bcourts?\b|\bprisons?\b/i,
    /\bradios?\b|\brescue\b|\bPPE\b|protective equipment|\bemergency\b/i,
    /\bcertif|\bapprov|\bcomplian|\bcomplies\b|\bcompliant\b/i,
    /\b(?:ISO|IEC|EN|BS|UL|CE|NEMA|ONVIF|NDAA|ANSI|BIFMA|ASTM|DIN|IK|IP)\b/,
    /\bdesign|\bcalculat|\binstall|\btest(?:s|ed|ing)?\b|\bcommission|\bmaintenance\b|\bmaintain/i,
    /\bsolutions?\b|\bcomplete\b|\btrusted\b|\breliable\b|\bleading\b|single[- ]source|one[- ]stop|turnkey/i,
    /\b(?:in |ex[- ])?stock(?:ed|s)?\b|\bimmediate/i,
    /nationwide|across Egypt|all governorates/i,
    /مورد (?:حكومي|معتمد|مسجل)|مسجلة? لدى|نيابة عن|تمثل|تمثيل|تابعة? للجهات/,
    /تقديم العطاء|تقديم العطاءات|إعداد المناقصة|(?:إعداد|تقديم) (?:مستندات|وثائق) المناقصة|تقديمها/,
    /مضمون|ترسية|الفوز/,
    /الشرطة|عسكري|القوات المسلحة|المحاكم|السجون|الجمارك/,
    /لاسلكي|إنقاذ|معدات الوقاية|الطوارئ/,
    /شهاد(?:ة|ات)|اعتماد|معتمد|الالتزام بشروط|مطابقة? للمعايير/,
    /تصميم|حساب|تركيب|اختبار|تشغيل تجريبي|صيانة/,
    /حلول|متكامل|موثوق|مصدر واحد/,
    /مخزن|المخزون|فوري/,
    /جميع المحافظات|كافة أنحاء|جميع أنحاء/,
  ],
  // Construction: a construction-material procurement and BOQ response
  // guide. GOLTENS quotes against the customer's documents — no design,
  // calculation, installation, testing, fabrication or execution of works,
  // no compliance, certification or approval claims, no standards, no
  // authenticity / quality / trust / package wording, no support, stock or
  // delivery promises, no project or client references, no contractor or
  // tender-documentation implication and no fire-performance claims. The
  // legitimate approved-equal, consultant-approval and design-disclaimer
  // uses are exact phrases in `SECTOR_ALLOWED_PHRASES` below.
  construction: [
    /\bcertif|\bapprov|\bcomplian|\bcomplies\b|\bcompliant\b|\bconform/i,
    /\b(?:ISO|IEC|EN|BS|ASTM|AASHTO|ACI|DIN|ECP|ANSI|UL|CE|SASO)\b/,
    /\bdesign|\bcalculat|\binstall|\btest(?:s|ed|ing)?\b|\bcommission|\bmaintenance\b|\bmaintain|\bexecut|\bfabricat|\bcut[- ]and[- ]bend|\bbending\b|\bcut[- ]to[- ]length/i,
    /\bgeneral contractor|\bturnkey\b|\bEPC\b|\bwe build\b|pre-?engineered/i,
    /\bgenuine|\boriginal\b|quality[- ]assured|high[- ]quality|\bpremium\b|\bguarantee|\btrusted\b|\breliable\b|\bleading\b|\bsolutions?\b|\bcomplete\b|single[- ]source|single supplier|one[- ]stop|full[- ]scope/i,
    /technical support|after[- ]sales|supplier network|sourcing network/i,
    /\b(?:in |ex[- ])?stock(?:ed|s)?\b|\bimmediate|\bfast\b|\bquick\b|nationwide|across Egypt|all governorates|on[- ]time/i,
    /project references?|completed projects?|our projects|our clients|clients include/i,
    /government (?:supplier|projects?)|approved supplier|registered supplier/i,
    /tender (?:documentation|submission|preparation)/i,
    /fire[- ]?(?:rated|resistant|proof)|non[- ]combustible/i,
    /أصلي|مضمون|موثوق|الجودة/,
    /شهاد(?:ة|ات)|اعتماد|معتمد|مطابقة? للمعايير/,
    /تصميم|حساب|تركيب|اختبار|تشغيل تجريبي|صيانة|تنفيذ|تصنيع|تقطيع/,
    /حلول|متكامل|مورد واحد/,
    /الدعم الفني|بعد البيع|شبكة موردين/,
    /مخزن|المخزون|فوري|سريع|جميع المحافظات|كافة أنحاء/,
    /مشروعات منفذة|مشروعاتنا|عملاؤنا|مقاول عام|تسليم مفتاح/,
    /مقاوم للحريق|غير قابل للاشتعال/,
  ],
};

// Exact customer-input and scope-disclaimer phrases that may contain an
// otherwise prohibited word (e.g. "approved project documentation",
// "installation location", the "remain with the customer…" disclaimer).
// They are removed from a string before the claim patterns run, so the
// same word anywhere else still fails. Only for the sector listed.
const SECTOR_ALLOWED_PHRASES = {
  "fire-protection": [
    "customer or consultant-approved documentation",
    "approved project documentation",
    "listing / approval criteria",
    "listing or approval requirements",
    "installation location",
    "Does GOLTENS design or calculate fire protection systems?",
    "System design, calculations, installation, testing, commissioning and final acceptance remain with the customer, consultant, contractor or responsible authority, as applicable.",
    "المستندات المعتمدة من العميل أو الاستشاري",
    "مستندات المشروع المعتمدة",
    "متطلبات الإدراج أو الاعتماد",
    "موقع التركيب",
    "هل تقوم GOLTENS بتصميم أنظمة مكافحة الحريق أو إجراء حساباتها؟",
    "ويظل تصميم النظام وحساباته وتركيبه واختباره وتشغيله وقبوله النهائي من مسؤولية العميل أو الاستشاري أو المقاول أو الجهة المسؤولة، بحسب الحالة.",
  ],
  "government-procurement": [
    "Does GOLTENS prepare or submit tender documents?",
    "No. GOLTENS prepares a quotation based on customer-provided documents; it does not prepare or submit the tender itself.",
    "Tender preparation, tender submission, compliance with tender conditions and final technical acceptance remain with the customer, bidder, consultant or contracting authority, as applicable.",
    "What if the tender specifies a manufacturer or approved brand?",
    "or the required or approved-brand list given in the tender",
    "Required or approved-brand list, only if stated by the customer",
    "Installation location as customer-provided information",
    "هل تقوم GOLTENS بإعداد مستندات المناقصة أو تقديمها؟",
    "لا، تُعد GOLTENS عرض السعر استنادًا إلى المستندات المقدمة من العميل، ولا تقوم بإعداد المناقصة أو تقديم العطاء.",
    "بينما تظل مسؤولية إعداد المناقصة وتقديم العطاء والالتزام بشروط المناقصة والقبول الفني النهائي على عاتق العميل أو مقدم العرض أو الاستشاري أو الجهة المتعاقدة، بحسب الحالة.",
    "ماذا لو حددت المناقصة مصنعًا معينًا أو علامة تجارية معتمدة؟",
    "أو قائمة العلامات المطلوبة أو المعتمدة الواردة في المناقصة",
    "قائمة العلامات المطلوبة أو المعتمدة إذا نص عليها العميل",
    "موقع التركيب كبيانات مقدمة من العميل",
  ],
  construction: [
    'What if the specification names a manufacturer or says "approved equal"?',
    "Specified manufacturer or approved-equal requirement, only if stated by customer",
    "Equivalence and approval of any proposed item remain with the consultant, engineer or customer, as applicable.",
    "Who handles consultant approval and submittals?",
    "Consultant approval and submittals remain with the customer or contractor.",
    "Does GOLTENS design, calculate, install or execute construction works?",
    "it does not design, calculate, install or execute construction works.",
    "Structural design, material selection, mix design, quantities, consultant approval and final technical acceptance remain with the customer, contractor, consultant or engineer of record, as applicable.",
    "ماذا لو حددت المواصفات مصنعًا معينًا أو نصت على «بديل معتمد مكافئ»؟",
    "المصنع المحدد أو اشتراط البديل المعتمد المكافئ، فقط إذا نص عليه العميل",
    "ويظل تأكيد التكافؤ واعتماد أي صنف مقترح من مسؤولية الاستشاري أو المهندس أو العميل، بحسب الحالة.",
    "من يتولى اعتماد الاستشاري ومستندات التقديم؟",
    "يظل اعتماد الاستشاري وتقديم المستندات من مسؤولية العميل أو المقاول.",
    "هل تقوم GOLTENS بالتصميم أو الحسابات أو التركيب أو تنفيذ أعمال الإنشاء؟",
    "ولا تقوم بالتصميم أو الحسابات أو التركيب أو تنفيذ أعمال الإنشاء.",
    "بينما تظل مسؤولية التصميم الإنشائي واختيار المواد وتصميم الخلطات والكميات واعتماد الاستشاري والقبول الفني النهائي على عاتق العميل أو المقاول أو الاستشاري أو المهندس المسؤول، بحسب الحالة.",
  ],
};

// Sector-specific structure rules, checked in addition to the shared ones.
const SECTOR_POLICIES = {
  "industrial-equipment": {
    categoryCounts: {
      "process-pumps": 4,
      "industrial-valves-actuators": 4,
      "air-compressors-systems": 4,
    },
    totalGuides: 12,
    forbiddenGuideIds: [
      "pressure-relief-valves",
      "gas-compressors",
      "centrifugal-pumps",
    ],
    forbiddenLinkedProductIds: [
      "pressure-relief-valves",
      "gas-compressors",
      "centrifugal-pumps",
    ],
    heroVisual: "neutral",
    availability: { en: "Available on request.", ar: "متاح حسب الطلب." },
    requireReplacement: true,
    requireSecondaryChecklist: true,
    linkedProductsNonPublic: true,
  },
  "electrical-energy": {
    categoryCounts: {
      "switchgear-distribution": 8,
      "standby-power-systems": 5,
      "industrial-lighting-solar": 4,
    },
    totalGuides: 17,
    applicationRows: 10,
    forbiddenGuideIds: ["explosion-proof-lighting", "hazardous-area-lighting"],
    forbiddenLinkedProductIds: ["explosion-proof-lighting"],
    heroVisual: "neutral",
    availability: { en: "Available on request.", ar: "متاح حسب الطلب." },
    requireReplacement: true,
    requireSecondaryChecklist: true,
    linkedProductsNonPublic: true,
    sectorProductsNonPublic: true,
    // Record-less supply categories: no linked record, and no invented
    // specifications (units, ratings or model wording) in their text.
    recordlessGuideIds: [
      "distribution-transformers",
      "power-cables-cable-management",
      "circuit-breakers-protection-devices",
    ],
    recordlessForbidden: [
      /\b(?:kVA|MVA|kV|kW|MW|kA|mm²|mm2|AWG|Hz)\b/i,
      /\bmodel(?:s)? [A-Z0-9]/,
      /\bseries\b/i,
    ],
    // Replacement guidance only for the approved families.
    replacementGroups_en: [
      "All equipment",
      "Generator sets & transfer switches",
      "UPS, stabilizers & chargers",
      "Sub-distribution boards",
      "Industrial & high-mast lighting",
    ],
    replacementForbidden: [
      /medium[- ]voltage|ring main|\bRMU\b|main low[- ]voltage|transformer|busbar|cable(?! entry)|circuit breaker|solar|energy storage|BESS/i,
      /الجهد المتوسط|الحلقة الرئيسية|اللوحات? الرئيسية|محولات? التوزيع|مجاري القضبان|كابلات القوى|القواطع وأجهزة|الطاقة الشمسية|تخزين الطاقة/,
    ],
    // Primary Arabic names: no market synonym or rejected term as the name.
    primaryNameForbidden_ar: [
      /جنريتور|ستابلايزر|يو بي إس|باص داكت|هاي ماست|كشافات هاي باي|خلايا ميديم|إنفرتر$/,
    ],
  },
  "fire-protection": {
    categoryCounts: {
      "fire-pumps": 4,
      valves: 6,
      sprinklers: 5,
      "fire-alarm": 6,
    },
    totalGuides: 21,
    applicationRows: 10,
    // Special-hazard suppression is excluded from this version: no guide,
    // no family and no link to its records.
    forbiddenGuideIds: [
      "clean-agent-systems",
      "clean-agent-suppression-systems",
      "fm200",
      "fm-200",
      "novec-1230",
      "gas-suppression",
      "co2-systems",
      "co2-suppression-systems",
      "foam-systems",
      "special-hazard-suppression",
    ],
    forbiddenLinkedProductIds: [
      "fm200",
      "novec-1230",
      "gas-suppression",
      "co2-systems",
      "foam-systems",
    ],
    forbiddenCategoryIds: ["fm200", "suppression-systems"],
    heroVisual: "neutral",
    availability: { en: "Available on request.", ar: "متاح حسب الطلب." },
    requireReplacement: true,
    requireSecondaryChecklist: true,
    linkedProductsNonPublic: true,
    sectorProductsNonPublic: true,
    requireHero: true,
    faqCount: 8,
    // No About / Industries / Advantages / Technical Catalogues / Projects /
    // How We Work sections on the guide page.
    noGenericSections: true,
    // The sector's own `data/sectors.ts` title, subtitle and description
    // (H1, cards, Service structured data) obey the same claim rules.
    scanSectorRecord: true,
    // Replacement guidance only for the approved families — never pumps,
    // controllers, drivers, fire alarm panels, detectors or sprinklers.
    replacementGroups_en: [
      "All equipment",
      "Valves & hydrants",
      "Hose reels, hoses & cabinets",
      "Portable fire extinguishers",
      "Emergency lighting & exit signs",
    ],
    replacementForbidden: [
      /pump|controller|driver|alarm panel|control panel|detector|sprinkler/i,
      /مضخ|محرك|لوحات? (?:التحكم|إنذار)|كواشف|كاشف|رشاش/,
    ],
    // Fire protection valves are «محابس» — never «صمامات» as the name.
    primaryNameForbidden_ar: [/صمام/],
  },
  "government-procurement": {
    categoryCounts: {
      "office-institutional-furniture": 5,
      "security-public-safety": 4,
      "public-lighting-power": 3,
    },
    totalGuides: 12,
    applicationRows: 10,
    // No public-safety / emergency-response, backup-power, UPS, generator
    // or solar-plant guide — power and solar are routed to Electrical &
    // Energy — and no link to the matching records.
    forbiddenGuideIds: [
      "public-safety-response-equipment",
      "public-backup-power-systems",
      "solar-power-public-facilities",
      "backup-power-systems",
      "ups-systems",
      "diesel-generator-sets",
      "solar-power-plants",
    ],
    forbiddenLinkedProductIds: [
      "public-safety-response-equipment",
      "public-backup-power-systems",
      "solar-power-public-facilities",
    ],
    // Excluded item types may be routed to another sector, but never named
    // as a guide or in a family's own text.
    guideForbidden: [
      /backup|generator|\bUPS\b|diesel|solar (?:power )?plant|photovoltaic|energy storage|\bradios?\b|rescue|emergency|protective equipment/i,
      /مولد|احتياطي|محطات? (?:الإنتاج )?(?:ال)?شمسي|تخزين الطاقة|لاسلكي|إنقاذ|طوارئ|معدات الوقاية/,
    ],
    heroVisual: "neutral",
    availability: { en: "Available on request.", ar: "متاح حسب الطلب." },
    requireReplacement: true,
    requireSecondaryChecklist: true,
    linkedProductsNonPublic: true,
    sectorProductsNonPublic: true,
    requireHero: true,
    faqCount: 8,
    noGenericSections: true,
    scanSectorRecord: true,
    // No SEO keywords at all (the old list carried supplier-status wording).
    noSeoKeywords: true,
    // Replacement guidance only for furniture & storage, CCTV cameras,
    // access readers, gate / barrier units, luminaires and traffic signal
    // heads — never whole platforms, solar plants or backup power.
    replacementGroups_en: [
      "All items",
      "Furniture & storage",
      "Security devices",
      "Luminaires & traffic signal heads",
    ],
    replacementForbidden: [
      /video management|platform|solar plant|backup|generator|\bUPS\b/i,
      /منصة|منصات|منظومات|محطات|الطاقة الاحتياطية|مولد/,
    ],
    // A real route, not an on-page anchor.
    heroSecondaryCtaHref: "/sectors",
    // Cross-sector routing to every sector a government BOQ commonly spans.
    requireRouting: [
      "industrial-equipment",
      "electrical-energy",
      "fire-protection",
      "commercial-vehicles",
      "heavy-equipment",
      "healthcare",
      "construction",
      "global-sourcing",
      "lubricants-oils",
      "industrial-chemicals",
    ],
  },
  construction: {
    categoryCounts: {
      "cement-concrete-materials": 5,
      "structural-waterproofing-materials": 5,
      "site-infrastructure-materials": 5,
    },
    totalGuides: 15,
    applicationRows: 10,
    // Exactly one guide per internal product record — no family or guide
    // without a record behind it.
    oneGuidePerRecord: true,
    forbiddenGuideIds: [
      "ready-mix-concrete",
      "hot-mix-asphalt",
      "tiles-flooring",
      "doors-windows-glazing",
      "hardware-tools",
      "construction-chemicals",
    ],
    forbiddenLinkedProductIds: [],
    // Unsupported families are never named anywhere on the page (guide,
    // routing, hero, FAQ, SEO, sector record) — they are routed generically
    // to Global Sourcing.
    excludedTerms: [
      /\btiles?\b|\btiling\b|flooring|\bdoors?\b|\bwindows?\b|glazing|\bhardware\b|\btools?\b|construction chemicals|ready[- ]mix|hot[- ]mix|asphalt/i,
      // «بلاط» (tiles) as a whole word, with or without attached prefix
      // letters (و / ف / ب / ل / ك, e.g. «والبلاط», «للبلاط») — «بلاطات»
      // (slabs) is allowed.
      /(?<!\p{L})[وفبلك]{0,3}(?:ال)?بلاط(?!\p{L})|سيراميك|أرضيات|أبواب|نوافذ|زجاج|عدد وأدوات|الكيماويات الإنشائية|خرسانة جاهزة|أسفلت/u,
    ],
    heroVisual: "neutral",
    availability: { en: "Available on request.", ar: "متاح حسب الطلب." },
    requireReplacement: true,
    requireSecondaryChecklist: true,
    linkedProductsNonPublic: true,
    sectorProductsNonPublic: true,
    requireHero: true,
    faqCount: 8,
    noGenericSections: true,
    scanSectorRecord: true,
    noSeoKeywords: true,
    heroSecondaryCtaHref: "/sectors",
    // "Specified Items & Equivalents": matching existing items only for
    // sanitary ware, manhole covers / gratings and pipe / plumbing fittings
    // — never structural or design-dependent materials.
    replacementGroups_en: [
      "All requests",
      "Sanitary ware",
      "Manhole covers & gratings",
      "Pipe & plumbing fittings",
    ],
    replacementForbidden: [
      /rebar|steel|structural|cement|concrete|admixture|membrane|insulation|sealant|bitumen|geotext|geomembr|precast|block|brick|aggregate/i,
      /حديد|إنشائي|أسمنت|خرسان|إضافات|أغشية|عزل|سيلانت|بيتومين|جيو|مسبقة الصب|بلوك|طوب|ركام/,
    ],
    requireRouting: [
      "industrial-equipment",
      "electrical-energy",
      "fire-protection",
      "heavy-equipment",
      "industrial-chemicals",
      "global-sourcing",
    ],
  },
};

let passed = 0;
let failed = 0;
const pendingReviews = [];

function report(name, ok, detail) {
  if (ok) {
    passed++;
    console.log(`  ok   ${name}`);
  } else {
    failed++;
    console.log(`  FAIL ${name}${detail ? `\n         ${detail}` : ""}`);
  }
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function wordPattern(term) {
  return new RegExp(
    `(?<![\\p{L}\\p{N}])${escapeRegExp(term).replace(/[- ]/g, "[- ]")}(?![\\p{L}\\p{N}])`,
    "iu",
  );
}

/** Every rendered string of a guide (and its page extras), with a path for error messages. */
function collectGuideStrings(guide, extras) {
  const out = [];
  const push = (path, value) => out.push([path, value]);
  for (const [key, value] of Object.entries(guide.intro)) {
    push(`intro.${key}`, value);
  }
  for (const key of [
    "projectsTitle_en",
    "projectsTitle_ar",
    "projectsIntro_en",
    "projectsIntro_ar",
  ]) {
    push(key, guide[key]);
  }
  for (const industry of guide.industries) {
    push(`industries.${industry.id}.label_en`, industry.label_en);
    push(`industries.${industry.id}.label_ar`, industry.label_ar);
  }
  for (const project of guide.projects) {
    for (const key of [
      "title_en",
      "title_ar",
      "description_en",
      "description_ar",
    ]) {
      push(`projects.${project.id}.${key}`, project[key]);
    }
  }
  for (const category of guide.categories) {
    for (const key of ["title_en", "title_ar", "intro_en", "intro_ar"]) {
      push(`categories.${category.categoryId}.${key}`, category[key]);
    }
    for (const item of category.equipment) {
      const base = `equipment.${item.id}`;
      for (const key of [
        "name_en",
        "name_ar",
        "summary_en",
        "summary_ar",
        "whatItIs_en",
        "whatItIs_ar",
        "usedFor_en",
        "usedFor_ar",
        "imageAlt_en",
        "imageAlt_ar",
      ]) {
        if (item[key] !== undefined) push(`${base}.${key}`, item[key]);
      }
      for (const key of [
        "applications_en",
        "applications_ar",
        "requestChecklist_en",
        "requestChecklist_ar",
      ]) {
        item[key].forEach((value, i) => push(`${base}.${key}[${i}]`, value));
      }
      item.selectionFactors.forEach((factor, i) => {
        for (const [key, value] of Object.entries(factor)) {
          push(`${base}.selectionFactors[${i}].${key}`, value);
        }
      });
    }
  }
  const request = guide.request;
  for (const key of [
    "title_en",
    "title_ar",
    "intro_en",
    "intro_ar",
    "processTitle_en",
    "processTitle_ar",
  ]) {
    push(`request.${key}`, request[key]);
  }
  request.checklist_en.forEach((v, i) => push(`request.checklist_en[${i}]`, v));
  request.checklist_ar.forEach((v, i) => push(`request.checklist_ar[${i}]`, v));
  request.steps.forEach((step, i) => {
    for (const [key, value] of Object.entries(step)) {
      push(`request.steps[${i}].${key}`, value);
    }
  });
  for (const key of [
    "checklistTitle_en",
    "checklistTitle_ar",
    "checklistNote_en",
    "checklistNote_ar",
  ]) {
    if (request[key] !== undefined) push(`request.${key}`, request[key]);
  }
  if (request.secondaryChecklist) {
    pushGroup("request.secondaryChecklist", request.secondaryChecklist);
  }
  for (const key of ["availability_en", "availability_ar"]) {
    if (guide[key] !== undefined) push(key, guide[key]);
  }
  const replacement = guide.replacement;
  if (replacement) {
    for (const [key, value] of Object.entries(replacement)) {
      if (typeof value === "string") push(`replacement.${key}`, value);
    }
    replacement.flow_en.forEach((v, i) => push(`replacement.flow_en[${i}]`, v));
    replacement.flow_ar.forEach((v, i) => push(`replacement.flow_ar[${i}]`, v));
    replacement.groups.forEach((group, i) =>
      pushGroup(`replacement.groups[${i}]`, group),
    );
  }
  const routing = extras?.routing;
  if (extras) {
    for (const key of ["heroPrimaryCta_en", "heroPrimaryCta_ar"]) {
      push(`extras.${key}`, extras[key]);
    }
    for (const key of ["label_en", "label_ar"]) {
      push(`extras.heroSecondaryCta.${key}`, extras.heroSecondaryCta[key]);
    }
    for (const [key, value] of Object.entries(extras.labels)) {
      push(`extras.labels.${key}`, value);
    }
  }
  if (routing) {
    for (const key of ["title_en", "title_ar", "intro_en", "intro_ar"]) {
      push(`routing.${key}`, routing[key]);
    }
    for (const route of routing.routes) {
      for (const key of ["title_en", "title_ar", "items_en", "items_ar"]) {
        push(`routing.routes.${route.sectorSlug}.${key}`, route[key]);
      }
    }
  }
  for (const [key, value] of Object.entries(guide.quote)) {
    push(`quote.${key}`, value);
  }
  return out;

  function pushGroup(base, group) {
    push(`${base}.title_en`, group.title_en);
    push(`${base}.title_ar`, group.title_ar);
    group.items_en.forEach((v, i) => push(`${base}.items_en[${i}]`, v));
    group.items_ar.forEach((v, i) => push(`${base}.items_ar[${i}]`, v));
  }
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

const sectorsWithGuides = SECTORS.filter(
  (sector) => getSectorContent(sector.slug).equipmentGuide,
);

console.log(
  `\nSectors with an equipment guide: ${sectorsWithGuides.map((s) => s.slug).join(", ") || "(none)"}\n`,
);
report(
  "at least one sector defines an equipment guide",
  sectorsWithGuides.length > 0,
);

for (const sector of sectorsWithGuides) {
  const content = getSectorContent(sector.slug);
  const guide = content.equipmentGuide;
  console.log(`\n== ${sector.slug}`);

  // --- Categories ---------------------------------------------------------
  const badCategories = guide.categories.filter(
    (c) => getCategoryById(c.categoryId)?.sectorId !== sector.id,
  );
  report(
    "every guide category is a real category of this sector",
    badCategories.length === 0,
    badCategories.map((c) => c.categoryId).join(", "),
  );
  const categoryIds = guide.categories.map((c) => c.categoryId);
  report(
    "no category appears twice",
    new Set(categoryIds).size === categoryIds.length,
  );
  report(
    "every category has at least one equipment guide",
    guide.categories.every((c) => c.equipment.length > 0),
  );

  // --- Ids / anchors --------------------------------------------------------
  const equipment = guide.categories.flatMap((c) =>
    c.equipment.map((item) => ({ ...item, categoryId: c.categoryId })),
  );
  const equipmentIds = equipment.map((e) => e.id);
  const duplicateIds = equipmentIds.filter(
    (id, i) => equipmentIds.indexOf(id) !== i,
  );
  report(
    `no duplicate equipment ids (${equipmentIds.length} guides)`,
    duplicateIds.length === 0,
    duplicateIds.join(", "),
  );
  const anchors = [...categoryIds, ...equipmentIds];
  const duplicateAnchors = anchors.filter((id, i) => anchors.indexOf(id) !== i);
  report(
    "no duplicate page anchors across categories and equipment",
    duplicateAnchors.length === 0,
    duplicateAnchors.join(", "),
  );
  const reservedHits = anchors.filter(
    (id) => RESERVED_ANCHORS.has(id) || id.startsWith(RESERVED_ANCHOR_PREFIX),
  );
  report(
    "no anchor collides with a reserved page anchor (request-quote, …)",
    reservedHits.length === 0,
    reservedHits.join(", "),
  );
  const malformed = [
    ...anchors,
    ...guide.projects.map((p) => p.id),
    ...guide.industries.map((i) => i.id),
  ].filter((id) => !ID_PATTERN.test(id));
  report(
    "all ids are kebab-case",
    malformed.length === 0,
    malformed.join(", "),
  );
  const projectIds = guide.projects.map((p) => p.id);
  report(
    "no duplicate project ids",
    new Set(projectIds).size === projectIds.length,
  );
  const industryIds = guide.industries.map((i) => i.id);
  report(
    "no duplicate industry ids",
    new Set(industryIds).size === industryIds.length,
  );

  // --- Relationships --------------------------------------------------------
  const equipmentIdSet = new Set(equipmentIds);
  const industryIdSet = new Set(industryIds);
  const badIndustryRefs = equipment.flatMap((e) =>
    e.industryIds
      .filter((id) => !industryIdSet.has(id))
      .map((id) => `${e.id}→${id}`),
  );
  report(
    "every equipment industry id resolves",
    badIndustryRefs.length === 0,
    badIndustryRefs.join(", "),
  );
  const badRelated = equipment.flatMap((e) =>
    (e.relatedEquipmentIds ?? [])
      .filter((id) => !equipmentIdSet.has(id) || id === e.id)
      .map((id) => `${e.id}→${id}`),
  );
  report(
    "every related-equipment id resolves (and is not self-referential)",
    badRelated.length === 0,
    badRelated.join(", "),
  );
  const badProjectRefs = guide.projects.flatMap((p) =>
    p.equipmentIds
      .filter((id) => !equipmentIdSet.has(id))
      .map((id) => `${p.id}→${id}`),
  );
  report(
    "every project equipment id resolves",
    badProjectRefs.length === 0,
    badProjectRefs.join(", "),
  );
  const extras = SECTOR_PAGE_EXTRAS[sector.slug];
  const projectRoutes = extras?.projectRoutes ?? {};
  report(
    "every project lists at least one equipment type or routed sector",
    guide.projects.every(
      (p) =>
        p.equipmentIds.length > 0 || (projectRoutes[p.id] ?? []).length > 0,
    ),
  );

  // --- Cross-sector routing -------------------------------------------------
  const routing = extras?.routing;
  const routeSlugs = (routing?.routes ?? []).map((r) => r.sectorSlug);
  if (routing) {
    const badRoutes = routeSlugs.filter(
      (slug, i) =>
        !SECTORS.some((s) => s.slug === slug) ||
        slug === sector.slug ||
        routeSlugs.indexOf(slug) !== i,
    );
    report(
      `every routing entry is another real sector, listed once (${routeSlugs.length} routes)`,
      routeSlugs.length > 0 && badRoutes.length === 0,
      badRoutes.join(", "),
    );
  }
  const badProjectRoutes = Object.entries(projectRoutes).flatMap(
    ([projectId, slugs]) =>
      projectIds.includes(projectId)
        ? slugs
            .filter((slug) => !routeSlugs.includes(slug))
            .map((slug) => `${projectId}→${slug}`)
        : [`${projectId} (no such project)`],
  );
  report(
    "every project route resolves to a routing entry",
    badProjectRoutes.length === 0,
    badProjectRoutes.join(", "),
  );

  // --- Linked products ------------------------------------------------------
  const linkedProducts = [];
  const badLinks = [];
  for (const e of equipment) {
    if (!e.linkedProductId) continue;
    const product = getProductById(e.linkedProductId);
    if (!product) {
      badLinks.push(`${e.id}→${e.linkedProductId} (missing)`);
    } else if (
      product.sectorId !== sector.id ||
      product.categoryId !== e.categoryId
    ) {
      badLinks.push(
        `${e.id}→${e.linkedProductId} (in ${product.sectorId}/${product.categoryId})`,
      );
    } else {
      linkedProducts.push(product);
    }
  }
  report(
    "every linkedProductId exists in the same sector and category",
    badLinks.length === 0,
    badLinks.join(", "),
  );

  // --- Completeness ---------------------------------------------------------
  const strings = collectGuideStrings(guide, extras);
  const emptyStrings = strings.filter(([, value]) => !isNonEmptyString(value));
  report(
    `no empty rendered string (${strings.length} checked)`,
    emptyStrings.length === 0,
    emptyStrings.map(([path]) => path).join(", "),
  );
  const pairProblems = [];
  for (const e of equipment) {
    for (const key of ["applications", "requestChecklist"]) {
      const en = e[`${key}_en`];
      const ar = e[`${key}_ar`];
      if (!en.length || !ar.length) pairProblems.push(`${e.id}.${key} empty`);
      if (en.length !== ar.length) {
        pairProblems.push(`${e.id}.${key} EN/AR length mismatch`);
      }
    }
    if (!e.industryIds.length) pairProblems.push(`${e.id}.industryIds empty`);
    if (!e.selectionFactors.length) {
      pairProblems.push(`${e.id}.selectionFactors empty`);
    }
  }
  if (guide.request.checklist_en.length !== guide.request.checklist_ar.length) {
    pairProblems.push("request.checklist EN/AR length mismatch");
  }
  if (!guide.request.checklist_en.length) {
    pairProblems.push("request.checklist empty");
  }
  report(
    "required arrays are non-empty and EN/AR arrays align",
    pairProblems.length === 0,
    pairProblems.join("; "),
  );
  report(
    "the request process has exactly four steps",
    guide.request.steps.length === 4,
  );
  const groupProblems = [];
  const checkGroup = (path, group) => {
    if (!group.items_en.length) groupProblems.push(`${path} empty`);
    if (group.items_en.length !== group.items_ar.length) {
      groupProblems.push(`${path} EN/AR length mismatch`);
    }
  };
  if (guide.request.secondaryChecklist) {
    checkGroup("request.secondaryChecklist", guide.request.secondaryChecklist);
  }
  if (guide.replacement) {
    if (guide.replacement.flow_en.length !== guide.replacement.flow_ar.length) {
      groupProblems.push("replacement.flow EN/AR length mismatch");
    }
    if (!guide.replacement.groups.length) {
      groupProblems.push("replacement.groups empty");
    }
    guide.replacement.groups.forEach((group, i) =>
      checkGroup(`replacement.groups[${i}]`, group),
    );
  }
  report(
    "optional checklist / replacement lists are non-empty and EN/AR aligned",
    groupProblems.length === 0,
    groupProblems.join("; "),
  );

  // --- Sector policy ---------------------------------------------------------
  const policy = SECTOR_POLICIES[sector.slug];
  if (policy) {
    const counts = Object.fromEntries(
      guide.categories.map((c) => [c.categoryId, c.equipment.length]),
    );
    report(
      `exact guide counts per category (${JSON.stringify(policy.categoryCounts)})`,
      JSON.stringify(counts) === JSON.stringify(policy.categoryCounts),
      JSON.stringify(counts),
    );
    report(
      `exactly ${policy.totalGuides} guides`,
      equipment.length === policy.totalGuides,
      `${equipment.length}`,
    );
    const forbiddenGuides = equipment.filter(
      (e) =>
        policy.forbiddenGuideIds.includes(e.id) ||
        policy.forbiddenLinkedProductIds.includes(e.linkedProductId),
    );
    report(
      `no guide for excluded records (${policy.forbiddenGuideIds.join(", ")})`,
      forbiddenGuides.length === 0,
      forbiddenGuides.map((e) => e.id).join(", "),
    );
    report(
      `hero visual is "${policy.heroVisual}"`,
      guide.heroVisual === policy.heroVisual,
      `${guide.heroVisual}`,
    );
    report(
      "availability wording is the approved text",
      guide.availability_en === policy.availability.en &&
        guide.availability_ar === policy.availability.ar,
      `${guide.availability_en} / ${guide.availability_ar}`,
    );
    report(
      "replacement / nameplate section exists",
      !policy.requireReplacement || Boolean(guide.replacement),
    );
    report(
      "two-part RFQ checklist exists (minimum + useful technical information)",
      !policy.requireSecondaryChecklist ||
        (guide.request.checklist_en.length > 0 &&
          Boolean(guide.request.secondaryChecklist?.items_en.length) &&
          isNonEmptyString(guide.request.checklistTitle_en)),
    );
    const publicLinks = linkedProducts.filter((p) => hasPublicIdentity(p));
    report(
      "every linked product stays non-public (0 product links on the page)",
      !policy.linkedProductsNonPublic || publicLinks.length === 0,
      publicLinks.map((p) => p.id).join(", "),
    );
    if (policy.applicationRows !== undefined) {
      report(
        `exactly ${policy.applicationRows} application rows`,
        guide.projects.length === policy.applicationRows,
        `${guide.projects.length}`,
      );
    }
    if (policy.sectorProductsNonPublic) {
      const publicRecords = getProductsBySector(sector.id).filter((p) =>
        hasPublicIdentity(p),
      );
      report(
        "no product record of this sector has a public identity",
        publicRecords.length === 0,
        publicRecords.map((p) => p.id).join(", "),
      );
    }
    if (policy.oneGuidePerRecord) {
      const recordIds = getProductsBySector(sector.id)
        .map((p) => p.id)
        .sort();
      const linkedIds = equipment
        .map((e) => e.linkedProductId)
        .filter(Boolean)
        .sort();
      report(
        `exactly one guide per product record of this sector (${recordIds.length} records)`,
        equipment.every((e) => e.linkedProductId) &&
          JSON.stringify(linkedIds) === JSON.stringify(recordIds),
        `linked: ${linkedIds.join(", ")}`,
      );
    }
    if (policy.recordlessGuideIds) {
      const unlinked = equipment.filter((e) => !e.linkedProductId);
      const unexpected = unlinked.filter(
        (e) => !policy.recordlessGuideIds.includes(e.id),
      );
      report(
        "only the approved record-less guides have no linked record",
        unexpected.length === 0 &&
          policy.recordlessGuideIds.every((id) =>
            unlinked.some((e) => e.id === id),
          ),
        unexpected.map((e) => e.id).join(", "),
      );
      const inventedSpecs = [];
      for (const e of unlinked) {
        for (const [path, value] of strings.filter(([p]) =>
          p.startsWith(`equipment.${e.id}.`),
        )) {
          for (const pattern of policy.recordlessForbidden) {
            if (pattern.test(value))
              inventedSpecs.push(`${path} matches ${pattern}`);
          }
        }
      }
      report(
        "record-less guides carry no invented specifications",
        inventedSpecs.length === 0,
        inventedSpecs.slice(0, 5).join("; "),
      );
    }
    if (policy.replacementGroups_en && guide.replacement) {
      const titles = guide.replacement.groups.map((g) => g.title_en);
      const extra = titles.filter(
        (t) => !policy.replacementGroups_en.includes(t),
      );
      const replacementText = strings.filter(
        ([p]) =>
          p.startsWith("replacement.groups") ||
          p.startsWith("replacement.flow"),
      );
      const excludedHits = [];
      for (const [path, value] of replacementText) {
        for (const pattern of policy.replacementForbidden) {
          if (pattern.test(value)) excludedHits.push(`${path}: "${value}"`);
        }
      }
      report(
        "replacement guidance covers only the approved families",
        extra.length === 0 && excludedHits.length === 0,
        [...extra, ...excludedHits].slice(0, 5).join("; "),
      );
    }
    if (policy.primaryNameForbidden_ar) {
      const badNames = equipment.filter((e) =>
        policy.primaryNameForbidden_ar.some((pattern) =>
          pattern.test(e.name_ar),
        ),
      );
      report(
        "Arabic primary names use the approved technical terms",
        badNames.length === 0,
        badNames.map((e) => `${e.id}: ${e.name_ar}`).join("; "),
      );
    }
    if (policy.forbiddenCategoryIds) {
      const hits = categoryIds.filter((id) =>
        policy.forbiddenCategoryIds.includes(id),
      );
      report(
        `no excluded family (${policy.forbiddenCategoryIds.join(", ")})`,
        hits.length === 0,
        hits.join(", "),
      );
    }
    if (policy.heroSecondaryCtaHref !== undefined) {
      report(
        `hero secondary CTA links to ${policy.heroSecondaryCtaHref}`,
        extras?.heroSecondaryCta?.href === policy.heroSecondaryCtaHref,
        `${extras?.heroSecondaryCta?.href}`,
      );
    }
    if (policy.requireRouting) {
      const missing = policy.requireRouting.filter(
        (slug) => !routeSlugs.includes(slug),
      );
      report(
        "cross-sector routing covers every required sector",
        Boolean(routing) && missing.length === 0,
        missing.join(", "),
      );
    }
    if (policy.guideForbidden) {
      const hits = [];
      for (const [path, value] of strings.filter(
        ([p]) =>
          p.startsWith("equipment.") || /^categories\.[^.]+\.title_/.test(p),
      )) {
        for (const pattern of policy.guideForbidden) {
          if (pattern.test(value)) hits.push(`${path}: "${value}"`);
        }
      }
      report(
        "no excluded item type (backup power, UPS, generators, solar plants, public-safety equipment) in guide text",
        hits.length === 0,
        hits.slice(0, 5).join("; "),
      );
    }
    if (policy.requireHero) {
      report(
        "sector hero copy is overridden on the guide page",
        Boolean(content.hero) &&
          ["subtitle_en", "subtitle_ar", "description_en", "description_ar"]
            .map((key) => content.hero[key])
            .every(isNonEmptyString),
      );
    }
    if (policy.faqCount !== undefined) {
      report(
        `exactly ${policy.faqCount} FAQs`,
        (content.faqs ?? []).length === policy.faqCount,
        `${(content.faqs ?? []).length}`,
      );
    }
    if (policy.noSeoKeywords) {
      report(
        "no SEO keywords",
        content.seo?.keywords_en === undefined &&
          content.seo?.keywords_ar === undefined,
      );
    }
    if (policy.noGenericSections) {
      const present = [
        "about",
        "applications",
        "advantages",
        "catalogues",
        "projects",
        "howWeWork",
      ].filter((key) => content[key] !== undefined);
      // `articles` is not checked: `getSectorContent` always derives it from
      // the Knowledge Center for the legacy article routes, and the sector
      // page never renders it.
      report(
        "no generic About / Industries / Advantages / Catalogues / Projects / How We Work content",
        present.length === 0,
        present.join(", "),
      );
    }
  }

  // --- Images ---------------------------------------------------------------
  const imageProblems = [];
  for (const e of equipment) {
    if (e.image === null) continue;
    if (!fs.existsSync(`public${e.image}`)) {
      imageProblems.push(`${e.id}: ${e.image} missing`);
    }
    if (!isNonEmptyString(e.imageAlt_en) || !isNonEmptyString(e.imageAlt_ar)) {
      imageProblems.push(`${e.id}: missing EN/AR alt text`);
    }
  }
  report(
    `images exist and have EN/AR alt text (${equipment.filter((e) => e.image).length} set)`,
    imageProblems.length === 0,
    imageProblems.join("; "),
  );

  // --- Manufacturer neutrality ---------------------------------------------
  const brandTerms = new Set(getActiveDenylistTerms().map((t) => t.term));
  // Every product of the sector — linked or not (an umbrella record, or one
  // deliberately left without a guide) — contributes its brand identity.
  const sectorProducts = new Map(
    [...getProductsBySector(sector.id), ...linkedProducts].map((p) => [
      p.id,
      p,
    ]),
  );
  for (const product of sectorProducts.values()) {
    for (const slug of product.relatedBrandSlugs ?? []) {
      brandTerms.add(slug.replace(/-/g, " "));
      const first = slug.split("-")[0];
      if (CASE_SENSITIVE_BRANDS.has(slug)) continue;
      if (first.length >= 3 && !COMMON_WORD_TOKENS.has(first)) {
        brandTerms.add(first);
      }
    }
    for (const value of Object.values(product.sourcing ?? {})) {
      if (isNonEmptyString(value)) brandTerms.add(value);
    }
  }
  for (const term of BRAND_DERIVED_TERMS) brandTerms.add(term);
  for (const slug of CASE_SENSITIVE_BRANDS.keys()) brandTerms.delete(slug);
  const brandPatterns = [...brandTerms].map((term) => [
    term,
    wordPattern(term),
  ]);
  for (const spelling of CASE_SENSITIVE_BRANDS.values()) {
    brandPatterns.push([
      spelling,
      new RegExp(`(?<![\\p{L}\\p{N}])${spelling}(?![\\p{L}\\p{N}])`, "u"),
    ]);
  }

  const faqAndSeoStrings = [
    ...(content.faqs ?? []).flatMap((faq, i) =>
      Object.entries(faq).map(([key, value]) => [`faqs[${i}].${key}`, value]),
    ),
    ...Object.entries(content.seo ?? {})
      .filter(([, value]) => typeof value === "string")
      .map(([key, value]) => [`seo.${key}`, value]),
  ];
  const heroStrings = Object.entries(content.hero ?? {}).map(([key, value]) => [
    `hero.${key}`,
    value,
  ]);
  const sectorRecordStrings = policy?.scanSectorRecord
    ? [
        "title_en",
        "title_ar",
        "subtitle_en",
        "subtitle_ar",
        "description_en",
        "description_ar",
      ]
        .filter((key) => typeof sector[key] === "string")
        .map((key) => [`sectors.${key}`, sector[key]])
    : [];
  const textToScan = [
    ...strings,
    ...heroStrings,
    ...faqAndSeoStrings,
    ...sectorRecordStrings,
  ];

  const brandHits = [];
  for (const [path, value] of textToScan) {
    for (const [term, pattern] of brandPatterns) {
      if (pattern.test(value)) brandHits.push(`${path} contains "${term}"`);
    }
  }
  report(
    `no manufacturer/brand identity in guide, hero, FAQ or SEO text (${brandPatterns.length} terms)`,
    brandHits.length === 0,
    brandHits.slice(0, 10).join("; "),
  );

  // --- No numeric specifications -------------------------------------------
  const digitHits = [...strings, ...heroStrings].filter(([, value]) =>
    /[0-9٠-٩۰-۹]/.test(value),
  );
  report(
    "no digits in rendered guide or hero text (no invented numeric specifications)",
    digitHits.length === 0,
    digitHits
      .slice(0, 10)
      .map(([path, value]) => `${path}: "${value}"`)
      .join("; "),
  );

  // --- Prohibited claims and marketing language -----------------------------
  const claimHits = [];
  const claimPatterns = [
    ...PROHIBITED_CLAIMS,
    ...(SECTOR_PROHIBITED_CLAIMS[sector.slug] ?? []),
  ];
  const allowedPhrases = SECTOR_ALLOWED_PHRASES[sector.slug] ?? [];
  for (const [path, value] of textToScan) {
    const scanned = allowedPhrases.reduce(
      (text, phrase) => text.split(phrase).join(" "),
      value,
    );
    for (const pattern of claimPatterns) {
      if (pattern.test(scanned)) claimHits.push(`${path} matches ${pattern}`);
    }
  }
  report(
    "no prohibited business claims or marketing superlatives",
    claimHits.length === 0,
    claimHits.slice(0, 10).join("; "),
  );
  if (policy?.excludedTerms) {
    const excludedHits = [];
    for (const [path, value] of textToScan) {
      for (const pattern of policy.excludedTerms) {
        if (pattern.test(value))
          excludedHits.push(`${path} matches ${pattern}`);
      }
    }
    report(
      "no unsupported material family is named anywhere on the page",
      excludedHits.length === 0,
      excludedHits.slice(0, 10).join("; "),
    );
  }

  // --- Review states --------------------------------------------------------
  const reviewables = [
    ...equipment.map((e) => [`equipment.${e.id}`, e.review]),
    ...guide.projects.map((p) => [`projects.${p.id}`, p.review]),
  ];
  const validStates = new Set(["draft", "needs-verification", "verified"]);
  const badStates = reviewables.filter(
    ([, review]) =>
      !review ||
      !validStates.has(review.technical) ||
      !validStates.has(review.arabic),
  );
  report(
    "every guide entry carries a valid review state",
    badStates.length === 0,
    badStates.map(([path]) => path).join(", "),
  );
  for (const [path, review] of reviewables) {
    if (review?.technical !== "verified" || review?.arabic !== "verified") {
      pendingReviews.push(
        `${sector.slug} ${path} — technical: ${review?.technical}, arabic: ${review?.arabic}${review?.notes ? ` (${review.notes})` : ""}`,
      );
    }
  }
}

if (pendingReviews.length) {
  console.log(
    `\nPending editorial review (${pendingReviews.length} entries not yet "verified"):`,
  );
  for (const line of pendingReviews) console.log(`  - ${line}`);
  if (REQUIRE_VERIFIED) {
    report("all entries verified (--require-verified)", false);
  }
}

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
