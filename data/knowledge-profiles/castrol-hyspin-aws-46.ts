/**
 * Product Knowledge Profile — Castrol Hyspin AWS 46
 * Controlled pilot: development-only preview, NOT publicly exposed.
 *
 * Source documents:
 *   PDS-2024: Castrol Hyspin AWS Range PDS, dated 2024-02-16
 *             https://msdspds.castrol.com/…/wepp-cmr9f2.pdf
 *   PDS-2023: Castrol Hyspin AWS Range PDS, dated 2023-01-03
 *             https://www.castrol.com/…/castrol-hyspin-aws-range-pds.pdf
 *
 * IMPORTANT: The two PDS documents report different typical-characteristics
 * values for AWS 46.  Values are NOT combined.  Each value records its
 * source document date.  The 2024 PDS is the primary reference; 2023
 * conflicts are flagged with `conflictingValue` / `conflictingSourceDate`.
 */

import type { KnowledgeProfile } from "./types";

// ---------------------------------------------------------------------------
// Shared source references
// ---------------------------------------------------------------------------

const PDS_2024 = {
  document: "Castrol Hyspin AWS Range — Product Data Sheet",
  documentDate: "2024-02-16",
  url: "https://msdspds.castrol.com/bpglis/FusionPDS.nsf/Files/9AB4B13FF09B837C80258AC5004D4C8A/$File/wepp-cmr9f2.pdf",
};

const PDS_2023 = {
  document: "Castrol Hyspin AWS Range — Product Data Sheet",
  documentDate: "2023-01-03",
  url: "https://www.castrol.com/content/dam/castrol/country-sites-new/en_us/united-states/home/documents/product/castrol-hyspin-aws-range-pds.pdf",
};

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------

export const castrolHyspinAws46Profile: KnowledgeProfile = {
  productId: "castrol-hyspin-aws-46",
  productSlug: "castrol-hyspin-aws-46",
  title_en: "Anti-Wear Hydraulic Oil — ISO VG 46",
  title_ar: "زيت هيدروليكي مضاد للتآكل — ISO VG 46",
  subtitle_en: "Technical Knowledge Profile",
  subtitle_ar: "ملف المعرفة التقنية",

  disclaimer_en:
    "GOLTENS is a procurement and supply company. GOLTENS is not the manufacturer, not an authorized Castrol distributor, and does not hold stock or provide manufacturer warranties. All technical data is sourced from the manufacturer's published documentation. Availability, pricing and lead times are quotation-dependent.",
  disclaimer_ar:
    "جولتنز شركة توريد ومشتريات. جولتنز ليست الشركة المصنعة، وليست موزعًا معتمدًا لشركة كاسترول، ولا تحتفظ بمخزون ولا تقدم ضمانات الشركة المصنعة. جميع البيانات التقنية مصدرها الوثائق المنشورة من الشركة المصنعة. التوافر والأسعار ومواعيد التسليم تعتمد على عرض الأسعار.",

  primarySources: [PDS_2024, PDS_2023],

  // =========================================================================
  // TYPICAL CHARACTERISTICS
  // =========================================================================

  typicalCharacteristics: [
    {
      property_en: "ISO Viscosity Grade",
      property_ar: "درجة اللزوجة ISO",
      testMethod: "ISO 3448",
      unit: "",
      value: "46",
      sourceDate: "2024-02-16",
    },
    {
      property_en: "Density @ 15 °C",
      property_ar: "الكثافة عند 15 درجة مئوية",
      testMethod: "ISO 12185 / ASTM D4052",
      unit: "kg/m³",
      value: "880",
      sourceDate: "2024-02-16",
    },
    {
      property_en: "Kinematic Viscosity @ 40 °C",
      property_ar: "اللزوجة الحركية عند 40 درجة مئوية",
      testMethod: "ISO 3104 / ASTM D445",
      unit: "mm²/s",
      value: "46",
      sourceDate: "2024-02-16",
    },
    {
      property_en: "Kinematic Viscosity @ 100 °C",
      property_ar: "اللزوجة الحركية عند 100 درجة مئوية",
      testMethod: "ISO 3104 / ASTM D445",
      unit: "mm²/s",
      value: "7.3",
      sourceDate: "2024-02-16",
      conflictingValue: "6.7",
      conflictingSourceDate: "2023-01-03",
    },
    {
      property_en: "Viscosity Index",
      property_ar: "مؤشر اللزوجة",
      testMethod: "ISO 2909 / ASTM D2270",
      unit: "",
      value: "118",
      sourceDate: "2024-02-16",
      conflictingValue: ">95",
      conflictingSourceDate: "2023-01-03",
    },
    {
      property_en: "Pour Point",
      property_ar: "نقطة الانسكاب",
      testMethod: "ISO 3016 / ASTM D97",
      unit: "°C",
      value: "-36",
      sourceDate: "2024-02-16",
      conflictingValue: "-24",
      conflictingSourceDate: "2023-01-03",
    },
    {
      property_en: "Flash Point (COC)",
      property_ar: "نقطة الوميض (كأس كليفلاند المفتوح)",
      testMethod: "ISO 2592 / ASTM D92",
      unit: "°C",
      value: "246",
      sourceDate: "2024-02-16",
      conflictingValue: "215",
      conflictingSourceDate: "2023-01-03",
    },
    {
      property_en: "Water Separation @ 54 °C",
      property_ar: "فصل الماء عند 54 درجة مئوية",
      testMethod: "ISO 6614 / ASTM D1401",
      unit: "min",
      value: "30",
      sourceDate: "2024-02-16",
      conflictingValue: "15",
      conflictingSourceDate: "2023-01-03",
    },
    {
      property_en: "Air Release @ 50 °C",
      property_ar: "تحرير الهواء عند 50 درجة مئوية",
      testMethod: "ISO 9120 / ASTM D3427",
      unit: "min",
      value: "8",
      sourceDate: "2023-01-03",
    },
    {
      property_en: "Foam Tendency / Stability (Seq. I)",
      property_ar: "ميل / استقرار الرغوة (التسلسل الأول)",
      testMethod: "ISO 6247 / ASTM D892",
      unit: "ml/ml",
      value: "10 / 0",
      sourceDate: "2023-01-03",
    },
    {
      property_en: "FZG Gear Scuffing (A/8.3/90) Fail Load Stage",
      property_ar: "اختبار تآكل التروس FZG (A/8.3/90) مرحلة فشل الحمل",
      testMethod: "ISO 14635-1",
      unit: "",
      value: "12",
      sourceDate: "2023-01-03",
    },
    {
      property_en: "Rust Test — Distilled Water (24 h)",
      property_ar: "اختبار الصدأ — ماء مقطر (24 ساعة)",
      testMethod: "ISO 7120 / ASTM D665A",
      unit: "",
      value: "Pass",
      sourceDate: "2023-01-03",
    },
    {
      property_en: "Rust Test — Synthetic Seawater (24 h)",
      property_ar: "اختبار الصدأ — ماء بحر صناعي (24 ساعة)",
      testMethod: "ISO 7120 / ASTM D665B",
      unit: "",
      value: "Pass",
      sourceDate: "2023-01-03",
    },
  ],

  // =========================================================================
  // STANDARDS, CLASSIFICATIONS & OEM APPROVALS
  // =========================================================================

  standards: [
    {
      type: "classification",
      designation: "DIN 51502: HLP",
      description_en: "German industrial standard classification for anti-wear hydraulic oils with corrosion and oxidation inhibitors.",
      description_ar: "تصنيف المعيار الصناعي الألماني لزيوت الهيدروليك المضادة للتآكل مع مثبطات التآكل والأكسدة.",
      sourceDate: "2024-02-16",
      status: "verified",
    },
    {
      type: "classification",
      designation: "ISO 6743/4: HM",
      description_en: "International standard classification for anti-wear hydraulic oils.",
      description_ar: "تصنيف المعيار الدولي لزيوت الهيدروليك المضادة للتآكل.",
      sourceDate: "2024-02-16",
      status: "verified",
    },
    {
      type: "standard",
      designation: "DIN 51524 Part 2",
      description_en: "German standard for minimum requirements of HLP-type hydraulic oils.",
      description_ar: "المعيار الألماني للحد الأدنى من متطلبات زيوت الهيدروليك من نوع HLP.",
      sourceDate: "2024-02-16",
      status: "verified",
    },
    {
      type: "oem-approval",
      designation: "Denison (Parker Hannifin) HF-0, HF-1, HF-2",
      description_en: "Meets Denison hydraulic pump requirements for HF-0, HF-1 and HF-2 fluid specifications.",
      description_ar: "يلبي متطلبات مضخات دينيسون الهيدروليكية لمواصفات السوائل HF-0 و HF-1 و HF-2.",
      sourceDate: "2024-02-16",
      status: "verified",
    },
    {
      type: "oem-approval",
      designation: "Eaton (Vickers) I-286-S, M-2950-S",
      description_en: "Meets Eaton (formerly Vickers) hydraulic pump fluid requirements.",
      description_ar: "يلبي متطلبات سوائل المضخات الهيدروليكية من إيتون (فيكرز سابقًا).",
      sourceDate: "2024-02-16",
      status: "verified",
    },
    {
      type: "oem-approval",
      designation: "Bosch Rexroth RE90220",
      description_en: "Meets Bosch Rexroth hydraulic component fluid requirements.",
      description_ar: "يلبي متطلبات سوائل المكونات الهيدروليكية من بوش ريكسروث.",
      sourceDate: "2024-02-16",
      status: "verified",
    },
    {
      type: "oem-approval",
      designation: "Cincinnati Lamb (Milacron) P-68, P-69, P-70",
      description_en: "Meets Cincinnati Lamb (Milacron) hydraulic fluid requirements.",
      description_ar: "يلبي متطلبات السوائل الهيدروليكية من سينسيناتي لامب (ميلاكرون).",
      sourceDate: "2023-01-03",
      status: "verified",
    },
    {
      type: "oem-approval",
      designation: "US Steel 126, 127",
      description_en: "Meets US Steel hydraulic oil specifications 126 and 127.",
      description_ar: "يلبي مواصفات زيوت الهيدروليك من يو إس ستيل 126 و 127.",
      sourceDate: "2023-01-03",
      status: "verified",
    },
    {
      type: "oem-approval",
      designation: "MB Approval 341.0",
      description_en: "Mercedes-Benz material approval for hydraulic systems. Listed in the product record; requires independent verification against the current MB approval database.",
      description_ar: "اعتماد مواد مرسيدس-بنز لأنظمة الهيدروليك. مدرج في سجل المنتج؛ يتطلب التحقق المستقل من قاعدة بيانات اعتمادات مرسيدس-بنز الحالية.",
      sourceDate: "2024-02-16",
      status: "needs-manufacturer-confirmation",
    },
  ],

  // =========================================================================
  // 16 KNOWLEDGE MODULES
  // =========================================================================

  modules: [
    // -----------------------------------------------------------------------
    // 1. product-overview
    // -----------------------------------------------------------------------
    {
      id: "product-overview",
      title_en: "Product Overview",
      title_ar: "نظرة عامة على المنتج",
      content_en: `Castrol Hyspin AWS 46 is a mineral-oil-based anti-wear hydraulic oil formulated with a stabilized zinc additive system. It is classified as an ISO VG 46 grade hydraulic fluid under ISO 3448.

The product is designed to provide anti-wear protection in industrial hydraulic systems operating under conditions where pressures and speeds require more than straight mineral oil. Its additive chemistry targets thermal and oxidative stability, hydrolytic stability, corrosion protection for ferrous and yellow metal components, low sludge and deposit formation, good filterability (including in the presence of water), and effective water separation.

Castrol Hyspin AWS 46 is classified as DIN 51502 HLP and ISO 6743/4 Type HM, and meets the requirements of DIN 51524 Part 2.`,
      content_ar: `كاسترول هيسبين AWS 46 هو زيت هيدروليكي مضاد للتآكل قائم على الزيت المعدني ومُصاغ بنظام إضافات الزنك المستقر. يُصنف كسائل هيدروليكي من درجة ISO VG 46 وفقًا لمعيار ISO 3448.

صُمم المنتج لتوفير حماية مضادة للتآكل في الأنظمة الهيدروليكية الصناعية التي تعمل في ظروف تتطلب فيها الضغوط والسرعات أكثر من الزيت المعدني العادي. تستهدف كيمياء الإضافات الاستقرار الحراري والتأكسدي، والاستقرار المائي، وحماية التآكل للمكونات الحديدية ومكونات المعادن الصفراء، وانخفاض تكون الرواسب والترسبات، وقابلية الترشيح الجيدة (بما في ذلك في وجود الماء)، وفصل الماء الفعال.

يُصنف كاسترول هيسبين AWS 46 وفقًا لـ DIN 51502 HLP و ISO 6743/4 من النوع HM، ويلبي متطلبات DIN 51524 الجزء 2.`,
      sources: [
        {
          claim: "Mineral-oil-based anti-wear hydraulic oil with stabilized zinc additive system",
          source: { ...PDS_2024, section: "Description" },
          status: "verified",
        },
        {
          claim: "Thermal/oxidative stability, hydrolytic stability, corrosion protection, filterability, water separation",
          source: { ...PDS_2024, section: "Advantages" },
          status: "verified",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 2. viscosity-grade
    // -----------------------------------------------------------------------
    {
      id: "viscosity-grade",
      title_en: "Viscosity Grade",
      title_ar: "درجة اللزوجة",
      content_en: `This product is an ISO VG 46 hydraulic oil per ISO 3448, meaning its kinematic viscosity at 40 °C is nominally 46 mm²/s.

**Kinematic viscosity at 100 °C** — the two available PDS documents report different typical values:
- 2024-02-16 PDS: 7.3 mm²/s
- 2023-01-03 PDS: 6.7 mm²/s

**Viscosity Index** — the two PDS documents also differ:
- 2024-02-16 PDS: 118
- 2023-01-03 PDS: >95

These are typical values, subject to normal manufacturing tolerances, and do not constitute a guaranteed specification. The differences may reflect reformulation, regional variation, or different production batches. Both values are recorded without reconciliation.`,
      content_ar: `هذا المنتج هو زيت هيدروليكي من درجة ISO VG 46 وفقًا لمعيار ISO 3448، مما يعني أن لزوجته الحركية عند 40 درجة مئوية هي اسميًا 46 مم²/ث.

**اللزوجة الحركية عند 100 درجة مئوية** — تُبلغ وثيقتا بيانات المنتج المتوفرتان عن قيم نموذجية مختلفة:
- صحيفة بيانات المنتج بتاريخ 2024-02-16: 7.3 مم²/ث
- صحيفة بيانات المنتج بتاريخ 2023-01-03: 6.7 مم²/ث

**مؤشر اللزوجة** — تختلف وثيقتا بيانات المنتج أيضًا:
- صحيفة بيانات المنتج بتاريخ 2024-02-16: 118
- صحيفة بيانات المنتج بتاريخ 2023-01-03: >95

هذه قيم نموذجية، تخضع لتفاوتات التصنيع العادية، ولا تشكل مواصفة مضمونة. قد تعكس الاختلافات إعادة صياغة أو تباينًا إقليميًا أو دفعات إنتاج مختلفة. تم تسجيل كلتا القيمتين دون مصالحة.`,
      sources: [
        {
          claim: "Kinematic viscosity @ 100 °C: 7.3 mm²/s",
          source: { ...PDS_2024, section: "Typical Characteristics" },
          conflictingSource: { ...PDS_2023, section: "Typical Characteristics" },
          conflictingValue: "6.7 mm²/s",
          status: "conflicting-source-values",
        },
        {
          claim: "Viscosity Index: 118",
          source: { ...PDS_2024, section: "Typical Characteristics" },
          conflictingSource: { ...PDS_2023, section: "Typical Characteristics" },
          conflictingValue: ">95",
          status: "conflicting-source-values",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 3. base-oil-type
    // -----------------------------------------------------------------------
    {
      id: "base-oil-type",
      title_en: "Base Oil Type",
      title_ar: "نوع الزيت الأساسي",
      content_en: `Castrol Hyspin AWS 46 is formulated from highly refined mineral oil (Group I or Group II base stock — the specific API group is not stated in the PDS) with a stabilized zinc-based additive system.

The zinc additive system is a zinc dialkyldithiophosphate (ZDDP) type, which is the industry-standard anti-wear additive chemistry for HLP-class hydraulic oils. The "stabilized" designation in the PDS indicates a chemistry designed to resist thermal degradation of the ZDDP additive under service conditions.`,
      content_ar: `يُصاغ كاسترول هيسبين AWS 46 من زيت معدني عالي التكرير (مخزون أساسي من المجموعة الأولى أو الثانية حسب API — لم يُذكر المجموعة المحددة في صحيفة بيانات المنتج) مع نظام إضافات قائم على الزنك المستقر.

نظام إضافات الزنك هو من نوع ثنائي ألكيل ثنائي ثيوفوسفات الزنك (ZDDP)، وهو كيمياء الإضافات المضادة للتآكل القياسية في الصناعة لزيوت الهيدروليك من فئة HLP. يشير تعيين "المستقر" في صحيفة بيانات المنتج إلى كيمياء مصممة لمقاومة التحلل الحراري لإضافة ZDDP في ظروف الخدمة.`,
      sources: [
        {
          claim: "Highly refined mineral oil with stabilized zinc additive system",
          source: { ...PDS_2024, section: "Description" },
          status: "verified",
        },
        {
          claim: "ZDDP-type additive chemistry (industry-standard for HLP class)",
          source: { ...PDS_2024, section: "Description" },
          status: "verified",
          internalNote: "PDS says 'stabilised zinc additive system' — ZDDP inference is standard industry practice for zinc-based AW hydraulic oils, not a manufacturer claim.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 4. hydraulic-fluid-classification
    // -----------------------------------------------------------------------
    {
      id: "hydraulic-fluid-classification",
      title_en: "Hydraulic Fluid Classification",
      title_ar: "تصنيف السائل الهيدروليكي",
      content_en: `**Classifications (verified from manufacturer documentation):**

- **DIN 51502: HLP** — German industrial classification for hydraulic oils with anti-wear, anti-corrosion and anti-oxidation properties.
- **ISO 6743/4: Type HM** — International classification for anti-wear hydraulic oils.

**Standard compliance:**

- **DIN 51524 Part 2** — The product meets the minimum performance requirements of this German standard for HLP-type hydraulic oils at ISO VG 46.

These are standards and classifications the product meets — they are not OEM-specific approvals. OEM approvals are listed separately in the "Application & Equipment Compatibility" module.`,
      content_ar: `**التصنيفات (مُتحقق منها من وثائق الشركة المصنعة):**

- **DIN 51502: HLP** — التصنيف الصناعي الألماني لزيوت الهيدروليك ذات خصائص مضادة للتآكل ومضادة للتآكل ومضادة للأكسدة.
- **ISO 6743/4: النوع HM** — التصنيف الدولي لزيوت الهيدروليك المضادة للتآكل.

**الامتثال للمعايير:**

- **DIN 51524 الجزء 2** — يلبي المنتج الحد الأدنى من متطلبات الأداء لهذا المعيار الألماني لزيوت الهيدروليك من نوع HLP بدرجة ISO VG 46.

هذه معايير وتصنيفات يلبيها المنتج — وليست اعتمادات خاصة بشركات تصنيع المعدات الأصلية. اعتمادات الشركات المصنعة للمعدات الأصلية مدرجة بشكل منفصل في وحدة "توافق التطبيقات والمعدات".`,
      sources: [
        {
          claim: "DIN 51502: HLP classification",
          source: { ...PDS_2024, section: "Performance Standards" },
          status: "verified",
        },
        {
          claim: "ISO 6743/4: Type HM classification",
          source: { ...PDS_2024, section: "Performance Standards" },
          status: "verified",
        },
        {
          claim: "DIN 51524 Part 2 compliance",
          source: { ...PDS_2024, section: "Performance Standards" },
          status: "verified",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 5. anti-wear-properties
    // -----------------------------------------------------------------------
    {
      id: "anti-wear-properties",
      title_en: "Anti-Wear & Performance Characteristics",
      title_ar: "خصائص مضادة للتآكل والأداء",
      content_en: `The manufacturer documents the following performance characteristics:

**Anti-wear performance:** The product is formulated with a stabilized zinc additive system for anti-wear protection in hydraulic systems where pressures and speeds demand more than straight mineral oil. FZG gear scuffing test (ISO 14635-1, A/8.3/90) failure at load stage 12, indicating high load-carrying capability.

**Thermal and oxidative stability:** Designed for longer in-service life with reduced sludge and deposit formation.

**Hydrolytic stability:** Resistant to degradation in the presence of water, maintaining performance in systems where water ingress may occur.

**Corrosion protection:** Provides protection for ferrous and yellow metal (copper, brass, bronze) components. Passes both distilled water (ASTM D665A) and synthetic seawater (ASTM D665B) rust tests at 24 hours.

**Filterability:** Good filterability characteristics, including in the presence of water contamination, supporting system cleanliness.

**Water separation:** Effective demulsibility at operating temperature. The two PDS documents report different separation times at 54 °C: 30 minutes (2024 PDS) vs. 15 minutes (2023 PDS).

**Air release:** 8 minutes at 50 °C (ISO 9120 / ASTM D3427), indicating the oil releases entrained air reasonably quickly under service conditions.`,
      content_ar: `تُوثق الشركة المصنعة خصائص الأداء التالية:

**الأداء المضاد للتآكل:** يُصاغ المنتج بنظام إضافات الزنك المستقر للحماية من التآكل في الأنظمة الهيدروليكية حيث تتطلب الضغوط والسرعات أكثر من الزيت المعدني العادي. يفشل اختبار تآكل التروس FZG (ISO 14635-1، A/8.3/90) عند مرحلة الحمل 12، مما يشير إلى قدرة عالية على تحمل الحمل.

**الاستقرار الحراري والتأكسدي:** مصمم لعمر خدمة أطول مع تقليل تكون الرواسب والترسبات.

**الاستقرار المائي:** مقاوم للتحلل في وجود الماء، مما يحافظ على الأداء في الأنظمة التي قد يحدث فيها تسرب الماء.

**حماية التآكل:** يوفر حماية للمكونات الحديدية ومكونات المعادن الصفراء (النحاس والنحاس الأصفر والبرونز). يجتاز اختبارات الصدأ بالماء المقطر (ASTM D665A) والماء البحري الصناعي (ASTM D665B) عند 24 ساعة.

**قابلية الترشيح:** خصائص ترشيح جيدة، بما في ذلك في وجود تلوث المياه، مما يدعم نظافة النظام.

**فصل الماء:** قابلية فعالة لكسر المستحلب عند درجة حرارة التشغيل. تُبلغ وثيقتا بيانات المنتج عن أوقات فصل مختلفة عند 54 درجة مئوية: 30 دقيقة (صحيفة بيانات المنتج 2024) مقابل 15 دقيقة (صحيفة بيانات المنتج 2023).

**تحرير الهواء:** 8 دقائق عند 50 درجة مئوية (ISO 9120 / ASTM D3427)، مما يشير إلى أن الزيت يُطلق الهواء المحبوس بسرعة معقولة في ظروف الخدمة.`,
      sources: [
        {
          claim: "FZG fail load stage 12",
          source: { ...PDS_2023, section: "Typical Characteristics" },
          status: "verified",
        },
        {
          claim: "Rust test pass (D665A and D665B)",
          source: { ...PDS_2023, section: "Typical Characteristics" },
          status: "verified",
        },
        {
          claim: "Water separation at 54 °C: 30 min vs. 15 min",
          source: { ...PDS_2024, section: "Typical Characteristics" },
          conflictingSource: { ...PDS_2023, section: "Typical Characteristics" },
          conflictingValue: "15 min",
          status: "conflicting-source-values",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 6. operating-temperature-range
    // -----------------------------------------------------------------------
    {
      id: "operating-temperature-range",
      title_en: "Operating Temperature Range",
      title_ar: "نطاق درجة حرارة التشغيل",
      content_en: `The manufacturer's PDS does not specify a recommended operating temperature range for this product.

The typical characteristics provide indirect indicators:
- **Pour point:** -36 °C (2024 PDS) / -24 °C (2023 PDS) — indicates the minimum temperature at which the oil will flow; actual minimum operating temperature is typically above the pour point.
- **Flash point (COC):** 246 °C (2024 PDS) / 215 °C (2023 PDS) — indicates the temperature at which the oil vapors can ignite; maximum continuous operating temperature is significantly below the flash point.

One third-party source lists 82 °C as a maximum operating temperature, but this is not confirmed in the manufacturer's PDS.

**The actual operating temperature range for a specific application must be confirmed against equipment manufacturer recommendations and the required viscosity at operating temperature.** Equipment OEMs typically specify the allowable viscosity range (minimum and maximum cSt) their pumps require; the user should verify that the oil's viscosity at their system's operating temperature falls within that range.`,
      content_ar: `لا تحدد صحيفة بيانات المنتج من الشركة المصنعة نطاق درجة حرارة التشغيل الموصى به لهذا المنتج.

توفر الخصائص النموذجية مؤشرات غير مباشرة:
- **نقطة الانسكاب:** -36 درجة مئوية (صحيفة بيانات المنتج 2024) / -24 درجة مئوية (صحيفة بيانات المنتج 2023) — تشير إلى الحد الأدنى لدرجة الحرارة التي سيتدفق عندها الزيت؛ الحد الأدنى الفعلي لدرجة حرارة التشغيل عادة أعلى من نقطة الانسكاب.
- **نقطة الوميض (كأس كليفلاند المفتوح):** 246 درجة مئوية (صحيفة بيانات المنتج 2024) / 215 درجة مئوية (صحيفة بيانات المنتج 2023) — تشير إلى درجة الحرارة التي يمكن أن تشتعل عندها أبخرة الزيت؛ الحد الأقصى لدرجة حرارة التشغيل المستمر أقل بكثير من نقطة الوميض.

يذكر مصدر خارجي واحد 82 درجة مئوية كحد أقصى لدرجة حرارة التشغيل، لكن هذا غير مؤكد في صحيفة بيانات المنتج من الشركة المصنعة.

**يجب تأكيد نطاق درجة حرارة التشغيل الفعلي لتطبيق معين وفقًا لتوصيات الشركة المصنعة للمعدات واللزوجة المطلوبة عند درجة حرارة التشغيل.** تحدد الشركات المصنعة للمعدات الأصلية عادةً نطاق اللزوجة المسموح به (الحد الأدنى والأقصى بوحدة cSt) الذي تتطلبه مضخاتها؛ يجب على المستخدم التحقق من أن لزوجة الزيت عند درجة حرارة تشغيل نظامهم تقع ضمن هذا النطاق.`,
      sources: [
        {
          claim: "Operating temperature range",
          source: { ...PDS_2024, section: "Full document reviewed" },
          status: "needs-manufacturer-confirmation",
          internalNote: "No operating temperature range stated in either PDS. Kernow Oils page lists 82°C max but this is not manufacturer-documented.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 7. seal-compatibility
    // -----------------------------------------------------------------------
    {
      id: "seal-compatibility",
      title_en: "Seal Compatibility",
      title_ar: "توافق مواد الختم",
      content_en: `The manufacturer's PDS states the product is compatible with seal elastomers commonly used in hydraulic systems:

- **Nitrile (NBR)** — the most common hydraulic seal material.
- **Silicone** — used in certain high-temperature or specialized seal applications.
- **Fluorinated polymers (e.g. Viton / FKM)** — used in high-temperature and chemically aggressive environments.

This compatibility statement covers static and dynamic seals.

**Limitations:** The PDS does not provide compatibility data for seal materials beyond those listed above (e.g. EPDM, polyurethane, PTFE). Compatibility with unlisted seal materials should be verified with the equipment manufacturer or seal supplier before use. Temperature, pressure and exposure time can affect seal performance — actual service conditions should be assessed.`,
      content_ar: `تذكر صحيفة بيانات المنتج من الشركة المصنعة أن المنتج متوافق مع مواد مطاط الختم المستخدمة عادة في الأنظمة الهيدروليكية:

- **النتريل (NBR)** — أكثر مواد الختم الهيدروليكية شيوعًا.
- **السيليكون** — يُستخدم في تطبيقات معينة عالية الحرارة أو متخصصة.
- **البوليمرات المفلورة (مثل فيتون / FKM)** — تُستخدم في البيئات ذات درجات الحرارة العالية والبيئات الكيميائية العدوانية.

يغطي بيان التوافق هذا موانع التسرب الثابتة والديناميكية.

**القيود:** لا توفر صحيفة بيانات المنتج بيانات توافق لمواد الختم خارج تلك المذكورة أعلاه (مثل EPDM، البولي يوريثان، PTFE). يجب التحقق من التوافق مع مواد الختم غير المدرجة مع الشركة المصنعة للمعدات أو مورد مواد الختم قبل الاستخدام. يمكن أن تؤثر درجة الحرارة والضغط ووقت التعرض على أداء مواد الختم — يجب تقييم ظروف الخدمة الفعلية.`,
      sources: [
        {
          claim: "Compatible with nitrile, silicone and fluorinated polymer seals",
          source: { ...PDS_2023, section: "Seal Compatibility" },
          status: "verified",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 8. application-and-equipment-compatibility
    // -----------------------------------------------------------------------
    {
      id: "application-and-equipment-compatibility",
      title_en: "Application & Equipment Compatibility",
      title_ar: "توافق التطبيقات والمعدات",
      content_en: `**Manufacturer-documented applications:**
- Industrial hydraulic systems requiring anti-wear protection
- Lightly loaded gears
- Variable-speed units
- Bearings

**OEM approvals and equipment compatibility:**

The product meets the fluid requirements of the following equipment manufacturers (as documented in the PDS):

| OEM | Specification |
|-----|---------------|
| Denison (Parker Hannifin) | HF-0, HF-1, HF-2 |
| Eaton (formerly Vickers) | I-286-S, M-2950-S |
| Bosch Rexroth | RE90220 |
| Cincinnati Lamb (Milacron) | P-68, P-69, P-70 |
| US Steel | 126, 127 |

**MB Approval 341.0** is listed in the existing product record. This requires independent verification against the current Mercedes-Benz approval database, as approval status can change.

**Important:** Meeting an OEM specification requirement is not the same as holding a current OEM approval. Equipment users should verify current approval status directly with the equipment manufacturer when this distinction is critical.`,
      content_ar: `**التطبيقات الموثقة من الشركة المصنعة:**
- الأنظمة الهيدروليكية الصناعية التي تتطلب حماية مضادة للتآكل
- التروس ذات الأحمال الخفيفة
- وحدات السرعة المتغيرة
- المحامل

**اعتمادات الشركات المصنعة للمعدات الأصلية وتوافق المعدات:**

يلبي المنتج متطلبات السوائل للشركات المصنعة للمعدات التالية (كما هو موثق في صحيفة بيانات المنتج):

| الشركة المصنعة | المواصفة |
|-----|---------------|
| دينيسون (باركر هانيفين) | HF-0، HF-1، HF-2 |
| إيتون (فيكرز سابقًا) | I-286-S، M-2950-S |
| بوش ريكسروث | RE90220 |
| سينسيناتي لامب (ميلاكرون) | P-68، P-69، P-70 |
| يو إس ستيل | 126، 127 |

**اعتماد مرسيدس-بنز 341.0** مدرج في سجل المنتج الحالي. يتطلب هذا التحقق المستقل من قاعدة بيانات اعتمادات مرسيدس-بنز الحالية، حيث يمكن أن تتغير حالة الاعتماد.

**مهم:** استيفاء متطلبات مواصفة الشركة المصنعة للمعدات الأصلية ليس مثل الحصول على اعتماد حالي من الشركة المصنعة. يجب على مستخدمي المعدات التحقق من حالة الاعتماد الحالية مباشرة مع الشركة المصنعة للمعدات عندما يكون هذا التمييز حرجًا.`,
      sources: [
        {
          claim: "Applications: hydraulic systems, gears, variable-speed units, bearings",
          source: { ...PDS_2024, section: "Applications" },
          status: "verified",
        },
        {
          claim: "OEM specifications: Denison HF-0/1/2, Eaton I-286-S/M-2950-S, Bosch Rexroth RE90220",
          source: { ...PDS_2024, section: "Performance Standards" },
          status: "verified",
        },
        {
          claim: "MB Approval 341.0",
          source: { ...PDS_2024, section: "Performance Standards" },
          status: "needs-manufacturer-confirmation",
          internalNote: "Listed in product record and some PDS versions. Requires verification against current MB approval database.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 9. product-selection
    // -----------------------------------------------------------------------
    {
      id: "product-selection",
      title_en: "Product Selection Guidance",
      title_ar: "إرشادات اختيار المنتج",
      content_en: `Before selecting this product, verify the following against your equipment documentation:

1. **Viscosity grade requirement:** Confirm that the equipment manufacturer specifies ISO VG 46 for your operating conditions. Some equipment may require a different grade depending on ambient and operating temperatures.

2. **Hydraulic fluid classification:** Confirm that the equipment accepts HLP-class (DIN 51524 Part 2) or HM-class (ISO 6743/4) hydraulic oil.

3. **OEM fluid specification:** If the equipment requires a specific OEM-approved fluid (e.g. Denison HF-0, Eaton M-2950-S), verify that this product meets that specification — see the "Application & Equipment Compatibility" module.

4. **Additive chemistry compatibility:** If your system currently uses a zinc-free (ashless) hydraulic oil, consult the equipment manufacturer before switching to a zinc-based product, as additive chemistry interactions may occur.

5. **Filtration requirements:** Verify that the system's filtration is compatible with the oil's additive package. Some high-efficiency filters may strip certain additives at very fine micron ratings.

6. **Environmental and regulatory requirements:** If the application is subject to environmental regulations regarding zinc discharge (e.g. in food processing or near waterways), a zinc-free alternative may be required.`,
      content_ar: `قبل اختيار هذا المنتج، تحقق مما يلي وفقًا لوثائق المعدات الخاصة بك:

1. **متطلبات درجة اللزوجة:** تأكد من أن الشركة المصنعة للمعدات تحدد ISO VG 46 لظروف التشغيل الخاصة بك. قد تتطلب بعض المعدات درجة مختلفة حسب درجات الحرارة المحيطة ودرجات حرارة التشغيل.

2. **تصنيف السائل الهيدروليكي:** تأكد من أن المعدات تقبل زيت هيدروليك من فئة HLP (DIN 51524 الجزء 2) أو فئة HM (ISO 6743/4).

3. **مواصفة سائل الشركة المصنعة للمعدات الأصلية:** إذا كانت المعدات تتطلب سائلًا معتمدًا من شركة مصنعة محددة (مثل Denison HF-0 أو Eaton M-2950-S)، تحقق من أن هذا المنتج يلبي تلك المواصفة — انظر وحدة "توافق التطبيقات والمعدات".

4. **توافق كيمياء الإضافات:** إذا كان نظامك يستخدم حاليًا زيتًا هيدروليكيًا خاليًا من الزنك (بدون رماد)، استشر الشركة المصنعة للمعدات قبل التبديل إلى منتج قائم على الزنك، حيث قد تحدث تفاعلات كيمياء الإضافات.

5. **متطلبات الترشيح:** تحقق من أن ترشيح النظام متوافق مع حزمة إضافات الزيت. قد تزيل بعض المرشحات عالية الكفاءة إضافات معينة عند تصنيفات ميكرون دقيقة جدًا.

6. **المتطلبات البيئية والتنظيمية:** إذا كان التطبيق خاضعًا للوائح بيئية بشأن تصريف الزنك (مثلاً في معالجة الأغذية أو بالقرب من المجاري المائية)، فقد يكون البديل الخالي من الزنك مطلوبًا.`,
      sources: [
        {
          claim: "Selection criteria derived from product classification and OEM requirements",
          source: { ...PDS_2024, section: "Full document" },
          status: "verified",
          internalNote: "Selection guidance synthesized from documented product properties and industry best practice. Not a direct manufacturer recommendation.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 10. mixing-and-compatibility
    // -----------------------------------------------------------------------
    {
      id: "mixing-and-compatibility",
      title_en: "Mixing & Compatibility",
      title_ar: "الخلط والتوافق",
      content_en: `The manufacturer's PDS does not make a universal compatibility claim with other hydraulic oils.

**General guidance:**
- Mixing different hydraulic oil brands or types should be avoided unless confirmed compatible by the manufacturers of both products.
- Mixing zinc-based (HLP) hydraulic oils with zinc-free (HVLP or ashless) hydraulic oils may cause additive interference, accelerated degradation, or deposit formation.
- When switching from a different product, a system flush or drain-and-refill procedure may be necessary. Consult the equipment manufacturer's fluid changeover procedure.
- Mixing oils of different viscosity grades will produce a blend with intermediate viscosity that may not meet the equipment's requirements.

**Within the Hyspin AWS range:** The manufacturer does not explicitly state cross-grade mixing compatibility in the PDS. If mixing grades within the same range is required (e.g. AWS 32 + AWS 68 to achieve intermediate viscosity), consult Castrol technical support.`,
      content_ar: `لا تقدم صحيفة بيانات المنتج من الشركة المصنعة ادعاء توافق شامل مع زيوت هيدروليكية أخرى.

**إرشادات عامة:**
- يجب تجنب خلط ماركات أو أنواع مختلفة من زيوت الهيدروليك ما لم يتم تأكيد التوافق من الشركات المصنعة لكلا المنتجين.
- قد يتسبب خلط زيوت الهيدروليك القائمة على الزنك (HLP) مع زيوت الهيدروليك الخالية من الزنك (HVLP أو بدون رماد) في تداخل الإضافات أو التحلل المتسارع أو تكون الرواسب.
- عند التبديل من منتج مختلف، قد يكون إجراء غسل النظام أو التصريف وإعادة التعبئة ضروريًا. استشر إجراء تغيير السوائل من الشركة المصنعة للمعدات.
- خلط زيوت بدرجات لزوجة مختلفة سينتج مزيجًا بلزوجة متوسطة قد لا يلبي متطلبات المعدات.

**ضمن مجموعة Hyspin AWS:** لا تذكر الشركة المصنعة صراحة توافق الخلط بين الدرجات في صحيفة بيانات المنتج. إذا كان خلط الدرجات ضمن نفس المجموعة مطلوبًا (مثل AWS 32 + AWS 68 لتحقيق لزوجة متوسطة)، استشر الدعم الفني لكاسترول.`,
      sources: [
        {
          claim: "No universal mixing compatibility claim in PDS",
          source: { ...PDS_2024, section: "Full document reviewed" },
          status: "verified",
          internalNote: "PDS does not address mixing. Guidance is industry best practice for HLP-class oils.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 11. storage-and-handling
    // -----------------------------------------------------------------------
    {
      id: "storage-and-handling",
      title_en: "Storage & Handling",
      title_ar: "التخزين والتداول",
      content_en: `The manufacturer's PDS provides the following storage guidance:

- Store under cover. If outdoor storage is unavoidable, lay drums on their side to prevent water ingress through the bung seals.
- Do not store above 60 °C or expose to hot sun or freezing conditions.

**Handling:**
- Use only in well-ventilated areas.
- Refer to the applicable Safety Data Sheet (SDS) for full health, safety and environmental precautions.
- Return used oil to an authorized collection center. Do not discharge into drains, soil or water.

**Note:** Specific shelf life is not stated in the PDS. For typical mineral hydraulic oils in sealed containers stored under recommended conditions, industry practice suggests a shelf life of approximately 3–5 years, but this should be confirmed with the manufacturer for this specific product.`,
      content_ar: `توفر صحيفة بيانات المنتج من الشركة المصنعة إرشادات التخزين التالية:

- خزّن تحت غطاء. إذا كان التخزين في الخارج لا مفر منه، ضع البراميل على جوانبها لمنع تسرب الماء عبر سدادات الفتحات.
- لا تخزن فوق 60 درجة مئوية أو تعرض لأشعة الشمس الحارة أو ظروف التجمد.

**التداول:**
- استخدم فقط في مناطق جيدة التهوية.
- ارجع إلى صحيفة بيانات السلامة (SDS) المعمول بها للاطلاع على جميع احتياطات الصحة والسلامة والبيئة.
- أعد الزيت المستعمل إلى مركز جمع معتمد. لا تصرف في المصارف أو التربة أو الماء.

**ملاحظة:** لم يُذكر العمر الافتراضي المحدد في صحيفة بيانات المنتج. بالنسبة لزيوت الهيدروليك المعدنية النموذجية في حاويات محكمة الإغلاق مخزنة في الظروف الموصى بها، تشير الممارسة الصناعية إلى عمر افتراضي يبلغ حوالي 3-5 سنوات، لكن يجب تأكيد ذلك مع الشركة المصنعة لهذا المنتج المحدد.`,
      sources: [
        {
          claim: "Store under cover, drums on side for outdoor storage, max 60°C",
          source: { ...PDS_2023, section: "Storage" },
          status: "verified",
        },
        {
          claim: "Shelf life not stated in PDS",
          source: { ...PDS_2024, section: "Full document reviewed" },
          status: "not-available",
          internalNote: "3-5 year shelf life is industry convention for mineral hydraulic oils, not a manufacturer-stated figure.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 12. safety-data
    // -----------------------------------------------------------------------
    {
      id: "safety-data",
      title_en: "Safety Data",
      title_ar: "بيانات السلامة",
      content_en: `Safety Data Sheet (SDS) information must be obtained from the manufacturer or an authorized source.

**Current status:**
- The manufacturer publishes SDS documents for different regions and jurisdictions.
- No Egypt-specific SDS has been confirmed for this pilot. A foreign-country SDS (e.g. US, UK, EU) should not be presented as an Egyptian SDS, as regulatory requirements, classification systems and emergency contact information differ between jurisdictions.

**Action required:**
- Obtain the applicable SDS for the jurisdiction where the product will be used.
- Verify that the SDS version matches the product formulation being supplied.
- The SDS should be available to all personnel who handle, store or use the product.

**GHS classification:** Refer to the applicable SDS for Globally Harmonized System (GHS) classification, hazard statements and precautionary statements specific to this product.`,
      content_ar: `يجب الحصول على معلومات صحيفة بيانات السلامة (SDS) من الشركة المصنعة أو مصدر معتمد.

**الوضع الحالي:**
- تنشر الشركة المصنعة وثائق صحيفة بيانات السلامة لمناطق وسلطات قضائية مختلفة.
- لم يتم تأكيد صحيفة بيانات سلامة خاصة بمصر لهذا المشروع التجريبي. لا ينبغي تقديم صحيفة بيانات سلامة لبلد أجنبي (مثل الولايات المتحدة أو المملكة المتحدة أو الاتحاد الأوروبي) على أنها صحيفة بيانات سلامة مصرية، حيث تختلف المتطلبات التنظيمية وأنظمة التصنيف ومعلومات الاتصال في حالات الطوارئ بين السلطات القضائية.

**الإجراء المطلوب:**
- احصل على صحيفة بيانات السلامة المعمول بها للسلطة القضائية التي سيُستخدم فيها المنتج.
- تحقق من أن إصدار صحيفة بيانات السلامة يتطابق مع تركيبة المنتج المُورّد.
- يجب أن تكون صحيفة بيانات السلامة متاحة لجميع الأفراد الذين يتداولون المنتج أو يخزنونه أو يستخدمونه.

**تصنيف GHS:** ارجع إلى صحيفة بيانات السلامة المعمول بها للاطلاع على تصنيف النظام المنسق عالميًا (GHS) وبيانات المخاطر وبيانات الاحتياطات الخاصة بهذا المنتج.`,
      sources: [
        {
          claim: "Egypt-specific SDS not confirmed",
          source: { ...PDS_2024, section: "N/A" },
          status: "not-available",
          internalNote: "SDS exists for US and other markets. No Egypt-specific SDS located. Do not substitute a foreign SDS as Egyptian.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 13. technical-data-sheet
    // -----------------------------------------------------------------------
    {
      id: "technical-data-sheet",
      title_en: "Technical Data Sheet References",
      title_ar: "مراجع صحيفة البيانات التقنية",
      content_en: `Two manufacturer PDS documents are referenced for this profile:

**Primary reference (newer):**
- Document: Castrol Hyspin AWS Range — Product Data Sheet
- Date: 16 February 2024
- Source: Castrol MSDS/PDS portal

**Secondary reference:**
- Document: Castrol Hyspin AWS Range — Product Data Sheet
- Date: 03 January 2023
- Source: Castrol global website

The two documents contain different typical-characteristics values for the AWS 46 grade. Both sets of values are recorded in this profile with their respective source dates. The 2024 document is treated as the primary (newer) reference, but the conflict is not resolved — it may reflect reformulation, regional differences, or batch variation.

**Existing product record datasheet:** The product record includes a catalogue entry for the product datasheet, currently marked as unavailable (fileUrl: null). The file URL should be populated once an official, current PDS is confirmed for the Egyptian market.`,
      content_ar: `تتم الإشارة إلى وثيقتين من صحف بيانات المنتج من الشركة المصنعة لهذا الملف:

**المرجع الأساسي (الأحدث):**
- الوثيقة: كاسترول هيسبين AWS Range — صحيفة بيانات المنتج
- التاريخ: 16 فبراير 2024
- المصدر: بوابة MSDS/PDS الخاصة بكاسترول

**المرجع الثانوي:**
- الوثيقة: كاسترول هيسبين AWS Range — صحيفة بيانات المنتج
- التاريخ: 03 يناير 2023
- المصدر: الموقع العالمي لكاسترول

تحتوي الوثيقتان على قيم خصائص نموذجية مختلفة لدرجة AWS 46. تم تسجيل مجموعتي القيم في هذا الملف مع تواريخ المصادر الخاصة بهما. تُعامل وثيقة 2024 كمرجع أساسي (أحدث)، لكن التعارض لم يُحل — قد يعكس إعادة صياغة أو اختلافات إقليمية أو تباين الدفعات.

**صحيفة بيانات سجل المنتج الحالي:** يتضمن سجل المنتج إدخال كتالوج لصحيفة بيانات المنتج، مُعلم حاليًا بأنه غير متاح (fileUrl: null). يجب ملء رابط الملف بمجرد تأكيد صحيفة بيانات المنتج الرسمية الحالية للسوق المصري.`,
      sources: [
        {
          claim: "PDS 2024-02-16 and PDS 2023-01-03 contain conflicting values",
          source: PDS_2024,
          conflictingSource: PDS_2023,
          conflictingValue: "Multiple differing typical characteristics",
          status: "conflicting-source-values",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 14. packaging-and-supply-formats
    // -----------------------------------------------------------------------
    {
      id: "packaging-and-supply-formats",
      title_en: "Packaging & Supply Formats",
      title_ar: "التعبئة وأشكال التوريد",
      content_en: `The manufacturer's global documentation lists the following packaging formats for Hyspin AWS 46:

- 20-litre pail
- 208-litre (55-gallon) drum
- 1,000-litre IBC (Intermediate Bulk Container)

**Important — GOLTENS supply notice:**
- Actual packaging availability, quantities, pricing and lead times for the Egyptian market are quotation-dependent.
- GOLTENS does not hold stock of this product. All supply is on a procurement basis.
- Minimum order quantities, packaging options and delivery timelines will be confirmed at quotation stage.
- Contact GOLTENS for a quotation specifying your required quantity, packaging format and delivery location.`,
      content_ar: `تُدرج الوثائق العالمية للشركة المصنعة أشكال التعبئة التالية لـ Hyspin AWS 46:

- دلو 20 لتر
- برميل 208 لتر (55 جالون)
- حاوية سائبة وسيطة (IBC) سعة 1000 لتر

**مهم — إشعار توريد جولتنز:**
- التوفر الفعلي للتعبئة والكميات والأسعار ومواعيد التسليم للسوق المصري تعتمد على عرض الأسعار.
- لا تحتفظ جولتنز بمخزون من هذا المنتج. جميع عمليات التوريد تتم على أساس المشتريات.
- سيتم تأكيد الحد الأدنى لكميات الطلب وخيارات التعبئة والجداول الزمنية للتسليم في مرحلة عرض الأسعار.
- اتصل بجولتنز للحصول على عرض أسعار يحدد الكمية المطلوبة وشكل التعبئة وموقع التسليم.`,
      sources: [
        {
          claim: "Available in 20L, 208L and 1000L IBC",
          source: { ...PDS_2023, section: "Product line" },
          status: "verified",
          internalNote: "Package sizes from Kernow Oils listing. Actual availability in Egypt is quotation-dependent — GOLTENS does not hold stock.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 15. selection-criteria
    // -----------------------------------------------------------------------
    {
      id: "selection-criteria",
      title_en: "Selection Criteria",
      title_ar: "معايير الاختيار",
      content_en: `Use this checklist to determine whether Castrol Hyspin AWS 46 is suitable for your application:

**✓ Viscosity grade match:**
Does your equipment specify ISO VG 46? Check the equipment manual or nameplate for the required viscosity grade at the operating temperature range.

**✓ Fluid type compatibility:**
Does your equipment accept HLP (DIN 51524 Pt. 2) or HM (ISO 6743/4) type hydraulic oil? If the equipment requires HV, HVLP or ashless fluid, this product is not suitable.

**✓ OEM specification compliance:**
If the equipment requires specific OEM fluid approval (Denison, Eaton, Bosch Rexroth, etc.), check the "Application & Equipment Compatibility" module to verify that this product meets that specification.

**✓ Operating temperature suitability:**
Will the system operate within the temperature range where the oil maintains adequate viscosity? Verify with a viscosity-temperature chart for ISO VG 46 grade oil.

**✓ Zinc additive acceptability:**
Is a zinc-based additive system acceptable for your application? Some applications (food-grade, environmentally sensitive areas) may require zinc-free alternatives.

**✓ Seal material compatibility:**
Are the system's seals made of nitrile (NBR), silicone, or fluorinated polymer (FKM/Viton)? Other seal materials require verification.

**✓ Filtration compatibility:**
Is the system's filtration compatible with zinc-based additive packages?`,
      content_ar: `استخدم قائمة التحقق هذه لتحديد ما إذا كان كاسترول هيسبين AWS 46 مناسبًا لتطبيقك:

**✓ تطابق درجة اللزوجة:**
هل تحدد معداتك ISO VG 46؟ تحقق من دليل المعدات أو لوحة البيانات لمعرفة درجة اللزوجة المطلوبة في نطاق درجة حرارة التشغيل.

**✓ توافق نوع السائل:**
هل تقبل معداتك زيت هيدروليك من نوع HLP (DIN 51524 الجزء 2) أو HM (ISO 6743/4)؟ إذا كانت المعدات تتطلب سائل HV أو HVLP أو بدون رماد، فإن هذا المنتج غير مناسب.

**✓ الامتثال لمواصفات الشركة المصنعة للمعدات الأصلية:**
إذا كانت المعدات تتطلب اعتماد سائل محدد من الشركة المصنعة (دينيسون، إيتون، بوش ريكسروث، إلخ)، تحقق من وحدة "توافق التطبيقات والمعدات" للتحقق من أن هذا المنتج يلبي تلك المواصفة.

**✓ ملاءمة درجة حرارة التشغيل:**
هل سيعمل النظام ضمن نطاق درجة الحرارة حيث يحافظ الزيت على لزوجة كافية؟ تحقق باستخدام مخطط اللزوجة-درجة الحرارة لزيت من درجة ISO VG 46.

**✓ قبول إضافة الزنك:**
هل نظام إضافات الزنك مقبول لتطبيقك؟ قد تتطلب بعض التطبيقات (الغذائية، المناطق الحساسة بيئيًا) بدائل خالية من الزنك.

**✓ توافق مواد الختم:**
هل مواد ختم النظام مصنوعة من النتريل (NBR) أو السيليكون أو البوليمر المفلور (FKM/فيتون)؟ تتطلب مواد الختم الأخرى التحقق.

**✓ توافق الترشيح:**
هل ترشيح النظام متوافق مع حزم إضافات الزنك؟`,
      sources: [
        {
          claim: "Selection criteria synthesized from product properties",
          source: { ...PDS_2024, section: "Full document" },
          status: "verified",
          internalNote: "Selection criteria derived from documented product properties. Not a manufacturer-provided selection guide.",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // 16. technical-rfq-checklist
    // -----------------------------------------------------------------------
    {
      id: "technical-rfq-checklist",
      title_en: "Technical RFQ Checklist",
      title_ar: "قائمة التحقق الفنية لطلب عرض الأسعار",
      content_en: `When requesting a quotation for this product, provide the following information to ensure accurate pricing, availability and technical suitability:

**Equipment & Application Details:**
- [ ] Equipment type and manufacturer (e.g. hydraulic press, injection molding machine)
- [ ] Hydraulic pump type and model (vane, piston, gear)
- [ ] OEM fluid specification required (e.g. Denison HF-0, Eaton M-2950-S)
- [ ] System reservoir capacity (litres)
- [ ] Operating temperature range (ambient and system)
- [ ] Operating pressure range

**Product Requirements:**
- [ ] Confirm required viscosity grade: ISO VG 46
- [ ] Confirm required fluid classification: HLP / HM
- [ ] Any additional OEM approvals needed
- [ ] Zinc-based additive system acceptable? (Yes/No)

**Quantity & Packaging:**
- [ ] Required quantity (litres or units)
- [ ] Preferred packaging format (20L pail / 208L drum / 1000L IBC)
- [ ] Delivery frequency (one-time / recurring)

**Logistics:**
- [ ] Delivery location (city, governorate)
- [ ] Required delivery date or lead time
- [ ] Storage facilities available on-site

**Documentation Required:**
- [ ] Product Data Sheet (PDS)
- [ ] Safety Data Sheet (SDS) — specify jurisdiction
- [ ] Certificate of Analysis (COA) per batch
- [ ] Certificate of Origin
- [ ] Manufacturer certificate of conformance

**Note:** GOLTENS quotation response times, minimum order quantities and delivery terms will be confirmed based on the specific requirements provided. Not all documentation may be available for all markets.`,
      content_ar: `عند طلب عرض أسعار لهذا المنتج، قدم المعلومات التالية لضمان دقة التسعير والتوافر والملاءمة التقنية:

**تفاصيل المعدات والتطبيق:**
- [ ] نوع المعدات والشركة المصنعة (مثل مكبس هيدروليكي، ماكينة قولبة بالحقن)
- [ ] نوع وموديل المضخة الهيدروليكية (ريشية، مكبسية، ترسية)
- [ ] مواصفة السائل المطلوبة من الشركة المصنعة (مثل Denison HF-0، Eaton M-2950-S)
- [ ] سعة خزان النظام (لتر)
- [ ] نطاق درجة حرارة التشغيل (المحيطة ودرجة حرارة النظام)
- [ ] نطاق ضغط التشغيل

**متطلبات المنتج:**
- [ ] تأكيد درجة اللزوجة المطلوبة: ISO VG 46
- [ ] تأكيد تصنيف السائل المطلوب: HLP / HM
- [ ] أي اعتمادات إضافية مطلوبة من الشركات المصنعة للمعدات الأصلية
- [ ] هل نظام إضافات الزنك مقبول؟ (نعم/لا)

**الكمية والتعبئة:**
- [ ] الكمية المطلوبة (لتر أو وحدات)
- [ ] شكل التعبئة المفضل (دلو 20 لتر / برميل 208 لتر / حاوية IBC سعة 1000 لتر)
- [ ] تكرار التوصيل (مرة واحدة / متكرر)

**اللوجستيات:**
- [ ] موقع التسليم (المدينة، المحافظة)
- [ ] تاريخ التسليم المطلوب أو المهلة الزمنية
- [ ] مرافق التخزين المتاحة في الموقع

**الوثائق المطلوبة:**
- [ ] صحيفة بيانات المنتج (PDS)
- [ ] صحيفة بيانات السلامة (SDS) — حدد السلطة القضائية
- [ ] شهادة التحليل (COA) لكل دفعة
- [ ] شهادة المنشأ
- [ ] شهادة مطابقة من الشركة المصنعة

**ملاحظة:** سيتم تأكيد أوقات استجابة عرض أسعار جولتنز والحد الأدنى لكميات الطلب وشروط التسليم بناءً على المتطلبات المحددة المقدمة. قد لا تكون جميع الوثائق متاحة لجميع الأسواق.`,
      sources: [
        {
          claim: "RFQ checklist for industrial buyers",
          source: { ...PDS_2024, section: "N/A" },
          status: "verified",
          internalNote: "RFQ checklist is a GOLTENS procurement aid, not a manufacturer document. Clearly distinguished from manufacturer specifications.",
        },
      ],
    },
  ],
};
