import type { Product, ProductSpecification } from "@/data/products/types";

/**
 * MOLLUBE Batch M2 (Greases) — 13 MOLLUBE grease products added to the
 * existing `greases` category (already populated by the generic
 * "Industrial Greases" product and the Batch-1 Shell/Mobil greases in
 * `lubricants-oils.ts`/`branded-grades.ts`, both left untouched). Every
 * description, feature, application, and technical value below is taken
 * directly from the single approved source for this batch:
 *  - "MOLLUBE GREASE 2024.pdf" (as found in Downloads; requested as
 *    "MOLLUBE GREASE 2024 2.pdf" — same file, filename discrepancy noted
 *    during source review), p.2-3
 * per the approved Data Model Review (representation decisions) and the
 * prior source-extraction review (technical values).
 *
 * Explicitly excluded from this batch, per approval: PROGUARD SY BX
 * (implausible base-oil-viscosity value, "15", needs verification before
 * publishing — flagged, not silently corrected, in the source review);
 * PROGUARD LI ST / LI EP / EP2 (unresolved NLGI-to-product-name mapping —
 * 6 grade values printed against 3 product names); PROGUARD CSX-F, AL-F,
 * PROSUPER FLUOR 5000-F (food-grade NSF H1 claims held for extra
 * verification); and all 4 PROGUARD OHC overhead-conductor products
 * (functionally distinct application, not a `greases`-category fit).
 *
 * Two source product names contain likely typos, preserved-and-flagged
 * rather than silently corrected:
 *  - Source prints "PROGUAR CSX 222/462" (missing the "D"). The rest of
 *    this same document spells the brand "PROGUARD" consistently
 *    (~20 other instances), so the product below is named "PROGUARD CSX"
 *    for consistency with every other product in this catalog — this is
 *    a naming *choice*, not a claim that the source spelling itself has
 *    been verified or corrected at the source. The literal source
 *    spelling is recorded here for the record.
 *  - Source prints "PROGAURD HT BO" (letters transposed). Normalized to
 *    "PROGUARD HT BO" below for the same consistency reason, literal
 *    source spelling recorded here, not asserted as a MOLLUBE-confirmed
 *    correction.
 *
 * Known source ambiguities handled conservatively (field omitted rather
 * than guessed — never assigned to a specific grade without support):
 *  - PROGUARD LXSY: Dropping Point (">270") and Color ("Red") are printed
 *    once in a cell that visually spans the 100/220/460 grade rows —
 *    omitted from all three grades rather than assigned to one.
 *  - PROGUARD MP2 / HB-MP3: Color is printed once as "Yellow Or Blue"
 *    against the shared two-product block — omitted from both.
 *  - PROGUARD INOR SY: temperature range is blank ("-") in the source —
 *    genuinely not stated, field omitted rather than inferred.
 *
 * GOLTENS is supplying these products, not representing MOLLUBE as an
 * authorized distributor/agent/partner — every product uses neutral
 * "available for supply" / "request a quote" language only.
 */

const NLGI_EN = "NLGI Grade";
const NLGI_AR = "درجة NLGI";
const THICKENER_EN = "Thickener";
const THICKENER_AR = "المادة السميكة";
const BASE_OIL_VISC_EN = "Base Oil Viscosity @ 40°C";
const BASE_OIL_VISC_AR = "لزوجة الزيت الأساسي عند 40°م";
const TEMP_RANGE_EN = "Temperature Range";
const TEMP_RANGE_AR = "نطاق درجة الحرارة";
const DROPPING_POINT_EN = "Dropping Point";
const DROPPING_POINT_AR = "نقطة السقوط";
const COLOR_EN = "Color";
const COLOR_AR = "اللون";

interface FamilyGradeRow {
  grade: string;
  entries: Pick<ProductSpecification, "label_en" | "label_ar" | "value">[];
}

function buildFamilySpecifications(
  rows: FamilyGradeRow[],
): ProductSpecification[] {
  return rows.flatMap((row) =>
    row.entries.map((entry) => ({
      ...entry,
      group_en: row.grade,
      group_ar: row.grade,
    })),
  );
}

export const mollubeBatchM2Greases: Product[] = [
  {
    id: "mollube-proguard-lxsy",
    slug: "mollube-proguard-lxsy",
    name_en: "MOLLUBE PROGUARD LXSY",
    name_ar: "MOLLUBE PROGUARD LXSY",
    shortDescription_en:
      "MOLLUBE PROGUARD LXSY — synthetic lithium complex extreme-pressure grease, base oil viscosities 100/220/460 cSt, for multipurpose industrial and automotive bearing applications.",
    shortDescription_ar:
      "MOLLUBE PROGUARD LXSY — شحم مركّب ليثيوم اصطناعي بخاصية الضغط العالي، بلزوجات زيت أساسي 100/220/460 سنتيستوك، لتطبيقات المحامل الصناعية والسيارات متعددة الأغراض.",
    longDescription_en:
      "PROGUARD LXSY is MOLLUBE's special multipurpose extreme-pressure grease, based on a synthetic lithium complex thickener, available at base oil viscosities of 100, 220, and 460 cSt @ 40°C. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "PROGUARD LXSY هو شحم خاص متعدد الأغراض بخاصية الضغط العالي من MOLLUBE، بمادة سميكة من مركّب الليثيوم الاصطناعي، ومتوفر بلزوجات زيت أساسي 100 و220 و460 سنتيستوك عند 40°م. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Synthetic Lithium Complex EP Grease — 100/220/460 cSt",
    publicName_ar:
      "شحم مركّب ليثيوم اصطناعي بخاصية الضغط العالي — 100/220/460 سنتيستوك",
    publicShortDescription_en:
      "Synthetic lithium complex extreme-pressure grease, base oil viscosities 100/220/460 cSt, for multipurpose industrial and automotive bearing applications.",
    publicShortDescription_ar:
      "شحم مركّب ليثيوم اصطناعي بخاصية الضغط العالي، بلزوجات زيت أساسي 100/220/460 سنتيستوك، لتطبيقات المحامل الصناعية والسيارات متعددة الأغراض.",
    publicLongDescription_en:
      "A special multipurpose extreme-pressure grease, based on a synthetic lithium complex thickener, available at base oil viscosities of 100, 220, and 460 cSt @ 40°C. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "شحم خاص متعدد الأغراض بخاصية الضغط العالي، بمادة سميكة من مركّب الليثيوم الاصطناعي، ومتوفر بلزوجات زيت أساسي 100 و220 و460 سنتيستوك عند 40°م. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE PROGUARD LXSY",
    },
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "Higher-speed applications such as electric motors, across industries including cement, steel, oil and gas, paper, textile, and ceramic",
      "Heavy-duty automotive and industrial applications",
      "Bearings under heavy loads and low to medium speed",
      "Steel, iron, cement, mining, paper, and carton industry equipment",
      "Automotive and railway vehicle axle bearings",
    ],
    applications_ar: [
      "التطبيقات عالية السرعة مثل المحركات الكهربائية، عبر صناعات الأسمنت والصلب والنفط والغاز والورق والمنسوجات والسيراميك",
      "التطبيقات الصناعية والسيارات شديدة التحميل",
      "المحامل تحت الأحمال الثقيلة والسرعة المنخفضة إلى المتوسطة",
      "معدات صناعات الصلب والحديد والأسمنت والتعدين والورق والكرتون",
      "محامل محاور المركبات وعربات السكك الحديدية",
    ],
    specifications: buildFamilySpecifications([
      {
        grade: "100 cSt",
        entries: [
          { label_en: NLGI_EN, label_ar: NLGI_AR, value: "2" },
          {
            label_en: THICKENER_EN,
            label_ar: THICKENER_AR,
            value: "Synthetic Lithium Complex",
          },
          {
            label_en: BASE_OIL_VISC_EN,
            label_ar: BASE_OIL_VISC_AR,
            value: "100 cSt",
          },
          {
            label_en: TEMP_RANGE_EN,
            label_ar: TEMP_RANGE_AR,
            value: "-20°C to 150°C",
          },
        ],
      },
      {
        grade: "220 cSt",
        entries: [
          { label_en: NLGI_EN, label_ar: NLGI_AR, value: "2" },
          {
            label_en: THICKENER_EN,
            label_ar: THICKENER_AR,
            value: "Synthetic Lithium Complex",
          },
          {
            label_en: BASE_OIL_VISC_EN,
            label_ar: BASE_OIL_VISC_AR,
            value: "220 cSt",
          },
          {
            label_en: TEMP_RANGE_EN,
            label_ar: TEMP_RANGE_AR,
            value: "-20°C to 150°C",
          },
        ],
      },
      {
        grade: "460 cSt",
        entries: [
          { label_en: NLGI_EN, label_ar: NLGI_AR, value: "2" },
          {
            label_en: THICKENER_EN,
            label_ar: THICKENER_AR,
            value: "Synthetic Lithium Complex",
          },
          {
            label_en: BASE_OIL_VISC_EN,
            label_ar: BASE_OIL_VISC_AR,
            value: "460 cSt",
          },
          {
            label_en: TEMP_RANGE_EN,
            label_ar: TEMP_RANGE_AR,
            value: "-20°C to 150°C",
          },
        ],
      },
    ]),
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-lx-220",
      "mollube-proguard-csx",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-proguard-lxsy-datasheet",
        title_en:
          "Synthetic Lithium Complex EP Grease — 100/220/460 cSt Datasheet",
        title_ar:
          "نشرة بيانات شحم مركّب ليثيوم اصطناعي بخاصية الضغط العالي — 100/220/460 سنتيستوك",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "Synthetic Lithium Complex EP Grease — 100/220/460 cSt Supplier Egypt",
      title_ar:
        "مورد شحم مركّب ليثيوم اصطناعي بخاصية الضغط العالي — 100/220/460 سنتيستوك في مصر",
      description_en:
        "GOLTENS supplies synthetic lithium complex grease (100/220/460 cSt), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم مركّب ليثيوم اصطناعي (100/220/460 سنتيستوك)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-proguard-lx-220",
    slug: "mollube-proguard-lx-220",
    name_en: "MOLLUBE PROGUARD LX 220",
    name_ar: "MOLLUBE PROGUARD LX 220",
    shortDescription_en:
      "MOLLUBE PROGUARD LX 220 — mineral lithium complex grease, base oil viscosity 220 cSt, available in NLGI 1 and NLGI 2, for high-temperature and high-load industrial applications.",
    shortDescription_ar:
      "MOLLUBE PROGUARD LX 220 — شحم مركّب ليثيوم معدني، بلزوجة زيت أساسي 220 سنتيستوك، متوفر بدرجتي NLGI 1 وNLGI 2، للتطبيقات الصناعية عالية الحرارة والتحميل.",
    longDescription_en:
      "PROGUARD LX 220 is MOLLUBE's excellent high-temperature and high-load grease, with very good mechanical stability, high load-carrying capacity, and good corrosion protection — a modern, high-performance grease suitable for many industrial applications. Available in NLGI 1 and NLGI 2. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "PROGUARD LX 220 هو شحم ممتاز لدرجات الحرارة والأحمال العالية من MOLLUBE، بثبات ميكانيكي جيد جدًا وقدرة تحمّل حمل عالية وحماية جيدة من التآكل — شحم حديث عالي الأداء مناسب للعديد من التطبيقات الصناعية. متوفر بدرجتي NLGI 1 وNLGI 2. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Mineral Lithium Complex Grease — 220 cSt",
    publicName_ar: "شحم مركّب ليثيوم معدني — 220 سنتيستوك",
    publicShortDescription_en:
      "Mineral lithium complex grease, base oil viscosity 220 cSt, available in NLGI 1 and NLGI 2, for high-temperature and high-load industrial applications.",
    publicShortDescription_ar:
      "شحم مركّب ليثيوم معدني، بلزوجة زيت أساسي 220 سنتيستوك، متوفر بدرجتي NLGI 1 وNLGI 2، للتطبيقات الصناعية عالية الحرارة والتحميل.",
    publicLongDescription_en:
      "An excellent high-temperature and high-load grease, with very good mechanical stability, high load-carrying capacity, and good corrosion protection — a modern, high-performance grease suitable for many industrial applications. Available in NLGI 1 and NLGI 2. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "شحم ممتاز لدرجات الحرارة والأحمال العالية، بثبات ميكانيكي جيد جدًا وقدرة تحمّل حمل عالية وحماية جيدة من التآكل — شحم حديث عالي الأداء مناسب للعديد من التطبيقات الصناعية. متوفر بدرجتي NLGI 1 وNLGI 2. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE PROGUARD LX 220",
    },
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "Steel, iron, marine, cement, paper, and carton industry equipment",
      "Bearings requiring high mechanical stability and load-carrying capacity",
    ],
    applications_ar: [
      "معدات صناعات الصلب والحديد والبحرية والأسمنت والورق والكرتون",
      "المحامل التي تتطلب ثباتًا ميكانيكيًا عاليًا وقدرة تحمّل حمل",
    ],
    specifications: buildFamilySpecifications([
      {
        grade: "NLGI 1",
        entries: [
          {
            label_en: THICKENER_EN,
            label_ar: THICKENER_AR,
            value: "Mineral Lithium Complex",
          },
          {
            label_en: BASE_OIL_VISC_EN,
            label_ar: BASE_OIL_VISC_AR,
            value: "220 cSt",
          },
          {
            label_en: TEMP_RANGE_EN,
            label_ar: TEMP_RANGE_AR,
            value: "-20°C to 150°C",
          },
          {
            label_en: DROPPING_POINT_EN,
            label_ar: DROPPING_POINT_AR,
            value: "290°C",
          },
          { label_en: COLOR_EN, label_ar: COLOR_AR, value: "Red" },
        ],
      },
      {
        grade: "NLGI 2",
        entries: [
          {
            label_en: THICKENER_EN,
            label_ar: THICKENER_AR,
            value: "Mineral Lithium Complex",
          },
          {
            label_en: BASE_OIL_VISC_EN,
            label_ar: BASE_OIL_VISC_AR,
            value: "220 cSt",
          },
          {
            label_en: TEMP_RANGE_EN,
            label_ar: TEMP_RANGE_AR,
            value: "-20°C to 150°C",
          },
          {
            label_en: DROPPING_POINT_EN,
            label_ar: DROPPING_POINT_AR,
            value: "290°C",
          },
          { label_en: COLOR_EN, label_ar: COLOR_AR, value: "Red" },
        ],
      },
    ]),
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-lxsy",
      "mollube-mol-proguard-lcx2",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-proguard-lx-220-datasheet",
        title_en: "Mineral Lithium Complex Grease — 220 cSt Datasheet",
        title_ar: "نشرة بيانات شحم مركّب ليثيوم معدني — 220 سنتيستوك",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Mineral Lithium Complex Grease — 220 cSt Supplier Egypt",
      title_ar: "مورد شحم مركّب ليثيوم معدني — 220 سنتيستوك في مصر",
      description_en:
        "GOLTENS supplies mineral lithium complex grease (NLGI 1/2), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم مركّب ليثيوم معدني (NLGI 1/2)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-proguard-sy-pu",
    slug: "mollube-proguard-sy-pu",
    name_en: "MOLLUBE PROGUARD SY PU",
    name_ar: "MOLLUBE PROGUARD SY PU",
    shortDescription_en:
      "MOLLUBE PROGUARD SY PU — synthetic (PAO) polyurea grease for special bearing applications requiring high performance and long life.",
    shortDescription_ar:
      "MOLLUBE PROGUARD SY PU — شحم بولي يوريا اصطناعي (PAO) لتطبيقات المحامل الخاصة التي تتطلب أداءً عاليًا وعمرًا طويلًا.",
    longDescription_en:
      "PROGUARD SY PU is MOLLUBE's synthetic (PAO) polyurea grease, ideal for special bearing applications requiring high performance and long life. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "PROGUARD SY PU هو شحم بولي يوريا اصطناعي (PAO) من MOLLUBE، مثالي لتطبيقات المحامل الخاصة التي تتطلب أداءً عاليًا وعمرًا طويلًا. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Synthetic Polyurea Grease — NLGI 2",
    publicName_ar: "شحم بولي يوريا اصطناعي — NLGI 2",
    publicShortDescription_en:
      "Synthetic (PAO) polyurea grease for special bearing applications requiring high performance and long life.",
    publicShortDescription_ar:
      "شحم بولي يوريا اصطناعي (PAO) لتطبيقات المحامل الخاصة التي تتطلب أداءً عاليًا وعمرًا طويلًا.",
    publicLongDescription_en:
      "A synthetic (PAO) polyurea grease, ideal for special bearing applications requiring high performance and long life. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "شحم بولي يوريا اصطناعي (PAO)، مثالي لتطبيقات المحامل الخاصة التي تتطلب أداءً عاليًا وعمرًا طويلًا. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE PROGUARD SY PU",
    },
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "Lubrication of fan, electric motor, air conditioner, and generator system bearings",
      "Automobile belt tension system bearings",
    ],
    applications_ar: [
      "تشحيم محامل المراوح والمحركات الكهربائية ومكيفات الهواء وأنظمة المولدات",
      "محامل أنظمة شد الأحزمة في السيارات",
    ],
    specifications: [
      {
        label_en: NLGI_EN,
        label_ar: NLGI_AR,
        value: "2",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: THICKENER_EN,
        label_ar: THICKENER_AR,
        value: "Synthetic (PAO) Polyurea",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_VISC_EN,
        label_ar: BASE_OIL_VISC_AR,
        value: "220 cSt",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: TEMP_RANGE_EN,
        label_ar: TEMP_RANGE_AR,
        value: "-30°C to 170°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: DROPPING_POINT_EN,
        label_ar: DROPPING_POINT_AR,
        value: "270°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: COLOR_EN,
        label_ar: COLOR_AR,
        value: "Light yellow",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-m-pu",
      "mollube-mol-proguard-lcx2",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-proguard-sy-pu-datasheet",
        title_en: "Synthetic Polyurea Grease — NLGI 2 Datasheet",
        title_ar: "نشرة بيانات شحم بولي يوريا اصطناعي — NLGI 2",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Synthetic Polyurea Grease — NLGI 2 Supplier Egypt",
      title_ar: "مورد شحم بولي يوريا اصطناعي — NLGI 2 في مصر",
      description_en:
        "GOLTENS supplies synthetic polyurea grease (NLGI 2), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم بولي يوريا اصطناعي (NLGI 2)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-proguard-m-pu",
    slug: "mollube-proguard-m-pu",
    name_en: "MOLLUBE PROGUARD M PU",
    name_ar: "MOLLUBE PROGUARD M PU",
    shortDescription_en:
      "MOLLUBE PROGUARD M PU — mineral polyurea grease for high-temperature bearings in furnaces, kilns, and heavy industrial processing equipment.",
    shortDescription_ar:
      "MOLLUBE PROGUARD M PU — شحم بولي يوريا معدني لمحامل الأفران والقمائن ومعدات المعالجة الصناعية الثقيلة عالية الحرارة.",
    longDescription_en:
      "PROGUARD M PU is MOLLUBE's mineral polyurea grease used in the lubrication of high-temperature bearings such as those in annealing and drying furnaces, conveyors, cooling beds, manipulators, and rotary kilns. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "PROGUARD M PU هو شحم بولي يوريا معدني من MOLLUBE، يُستخدم لتشحيم المحامل عالية الحرارة مثل تلك الموجودة في أفران التلدين والتجفيف والناقلات وأسرّة التبريد وأذرع المناولة والأفران الدوارة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Mineral Polyurea High-Temperature Grease — NLGI 2",
    publicName_ar: "شحم بولي يوريا معدني عالي الحرارة — NLGI 2",
    publicShortDescription_en:
      "Mineral polyurea grease for high-temperature bearings in furnaces, kilns, and heavy industrial processing equipment.",
    publicShortDescription_ar:
      "شحم بولي يوريا معدني لمحامل الأفران والقمائن ومعدات المعالجة الصناعية الثقيلة عالية الحرارة.",
    publicLongDescription_en:
      "A mineral polyurea grease used in the lubrication of high-temperature bearings such as those in annealing and drying furnaces, conveyors, cooling beds, manipulators, and rotary kilns. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "شحم بولي يوريا معدني، يُستخدم لتشحيم المحامل عالية الحرارة مثل تلك الموجودة في أفران التلدين والتجفيف والناقلات وأسرّة التبريد وأذرع المناولة والأفران الدوارة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE PROGUARD M PU",
    },
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "High-temperature bearings — annealing and drying furnaces, conveyors, cooling beds, manipulators, rotary kilns",
      "Steel, mining, heat treatment plants, bakeries, cement, refineries, casting, chemical plants, and auto ancillaries",
    ],
    applications_ar: [
      "المحامل عالية الحرارة — أفران التلدين والتجفيف والناقلات وأسرّة التبريد وأذرع المناولة والأفران الدوارة",
      "صناعات الصلب والتعدين ومحطات المعالجة الحرارية والمخابز والأسمنت والمصافي والسباكة والمصانع الكيميائية وملحقات السيارات",
    ],
    specifications: [
      {
        label_en: NLGI_EN,
        label_ar: NLGI_AR,
        value: "2",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: THICKENER_EN,
        label_ar: THICKENER_AR,
        value: "Mineral Polyurea",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_VISC_EN,
        label_ar: BASE_OIL_VISC_AR,
        value: "220 cSt",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: TEMP_RANGE_EN,
        label_ar: TEMP_RANGE_AR,
        value: "-30°C to 170°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: DROPPING_POINT_EN,
        label_ar: DROPPING_POINT_AR,
        value: ">270°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: COLOR_EN,
        label_ar: COLOR_AR,
        value: "Yellow",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-sy-pu",
      "mollube-proguard-xmo-180",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-proguard-m-pu-datasheet",
        title_en: "Mineral Polyurea High-Temperature Grease — NLGI 2 Datasheet",
        title_ar: "نشرة بيانات شحم بولي يوريا معدني عالي الحرارة — NLGI 2",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "Mineral Polyurea High-Temperature Grease — NLGI 2 Supplier Egypt",
      title_ar: "مورد شحم بولي يوريا معدني عالي الحرارة — NLGI 2 في مصر",
      description_en:
        "GOLTENS supplies mineral polyurea high-temperature grease (NLGI 2), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم بولي يوريا معدني عالي الحرارة (NLGI 2)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-proguard-csx",
    slug: "mollube-proguard-csx",
    // Source prints "PROGUAR CSX" (missing the "D") — see file header note.
    // Named "PROGUARD CSX" here for consistency with every other product's
    // spelling in the same source document; not a claim the source itself
    // was corrected or independently verified.
    name_en: "MOLLUBE PROGUARD CSX",
    name_ar: "MOLLUBE PROGUARD CSX",
    shortDescription_en:
      "MOLLUBE PROGUARD CSX — mineral calcium sulfonate complex extreme-pressure grease, base oil viscosities 222/462 cSt, for steel and paper mill bearings.",
    shortDescription_ar:
      "MOLLUBE PROGUARD CSX — شحم مركّب سلفونات كالسيوم معدني بخاصية الضغط العالي، بلزوجات زيت أساسي 222/462 سنتيستوك، لمحامل مصانع الصلب والورق.",
    longDescription_en:
      "PROGUARD CSX is MOLLUBE's mineral calcium sulfonate complex grease, suitable for the lubrication of bearings in steel plants (continuous castings and rolling mills) and in the paper industry, and applied in heavy industries such as steel making, mining, cement, and paper. Available at base oil viscosities of 222 and 462 cSt @ 40°C. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "PROGUARD CSX هو شحم مركّب سلفونات كالسيوم معدني من MOLLUBE، مناسب لتشحيم المحامل في مصانع الصلب (الصب المستمر وطواحين الدرفلة) وفي صناعة الورق، ويُستخدم في الصناعات الثقيلة مثل صناعة الصلب والتعدين والأسمنت والورق. متوفر بلزوجات زيت أساسي 222 و462 سنتيستوك عند 40°م. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Calcium Sulfonate Complex EP Grease — 222/462 cSt",
    publicName_ar:
      "شحم مركّب سلفونات كالسيوم بخاصية الضغط العالي — 222/462 سنتيستوك",
    publicShortDescription_en:
      "Mineral calcium sulfonate complex extreme-pressure grease, base oil viscosities 222/462 cSt, for steel and paper mill bearings.",
    publicShortDescription_ar:
      "شحم مركّب سلفونات كالسيوم معدني بخاصية الضغط العالي، بلزوجات زيت أساسي 222/462 سنتيستوك، لمحامل مصانع الصلب والورق.",
    publicLongDescription_en:
      "A mineral calcium sulfonate complex grease, suitable for the lubrication of bearings in steel plants (continuous castings and rolling mills) and in the paper industry, and applied in heavy industries such as steel making, mining, cement, and paper. Available at base oil viscosities of 222 and 462 cSt @ 40°C. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "شحم مركّب سلفونات كالسيوم معدني، مناسب لتشحيم المحامل في مصانع الصلب (الصب المستمر وطواحين الدرفلة) وفي صناعة الورق، ويُستخدم في الصناعات الثقيلة مثل صناعة الصلب والتعدين والأسمنت والورق. متوفر بلزوجات زيت أساسي 222 و462 سنتيستوك عند 40°م. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE PROGUARD CSX",
    },
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "Bearings in steel plants — continuous castings and rolling mills",
      "Paper industry bearings, including wet areas",
      "Couplings, plain and rolling bearings in cold and hot rolling mills",
      "Pins and bushes in mobile equipment; high load and friction, demanding environments",
    ],
    applications_ar: [
      "محامل مصانع الصلب — الصب المستمر وطواحين الدرفلة",
      "محامل صناعة الورق، بما في ذلك المناطق الرطبة",
      "الوصلات والمحامل السطحية والدوارة في طواحين الدرفلة الباردة والساخنة",
      "المحاور والجلب في المعدات المتنقلة؛ الأحمال والاحتكاك العالي، البيئات الصعبة",
    ],
    specifications: buildFamilySpecifications([
      {
        grade: "222 cSt",
        entries: [
          { label_en: NLGI_EN, label_ar: NLGI_AR, value: "2" },
          {
            label_en: THICKENER_EN,
            label_ar: THICKENER_AR,
            value: "Mineral Calcium Sulfonate Complex",
          },
          {
            label_en: BASE_OIL_VISC_EN,
            label_ar: BASE_OIL_VISC_AR,
            value: "222 cSt",
          },
          {
            label_en: TEMP_RANGE_EN,
            label_ar: TEMP_RANGE_AR,
            value: "-25°C to 180°C",
          },
          {
            label_en: DROPPING_POINT_EN,
            label_ar: DROPPING_POINT_AR,
            value: ">300°C",
          },
          { label_en: COLOR_EN, label_ar: COLOR_AR, value: "Yellow" },
        ],
      },
      {
        grade: "462 cSt",
        entries: [
          { label_en: NLGI_EN, label_ar: NLGI_AR, value: "2" },
          {
            label_en: THICKENER_EN,
            label_ar: THICKENER_AR,
            value: "Mineral Calcium Sulfonate Complex",
          },
          {
            label_en: BASE_OIL_VISC_EN,
            label_ar: BASE_OIL_VISC_AR,
            value: "462 cSt",
          },
          {
            label_en: TEMP_RANGE_EN,
            label_ar: TEMP_RANGE_AR,
            value: "-25°C to 180°C",
          },
          {
            label_en: DROPPING_POINT_EN,
            label_ar: DROPPING_POINT_AR,
            value: ">300°C",
          },
          { label_en: COLOR_EN, label_ar: COLOR_AR, value: "Yellow" },
        ],
      },
    ]),
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-lxsy",
      "mollube-proguard-xmo-180",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-proguard-csx-datasheet",
        title_en: "Calcium Sulfonate Complex EP Grease — 222/462 cSt Datasheet",
        title_ar:
          "نشرة بيانات شحم مركّب سلفونات كالسيوم بخاصية الضغط العالي — 222/462 سنتيستوك",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "Calcium Sulfonate Complex EP Grease — 222/462 cSt Supplier Egypt",
      title_ar:
        "مورد شحم مركّب سلفونات كالسيوم بخاصية الضغط العالي — 222/462 سنتيستوك في مصر",
      description_en:
        "GOLTENS supplies calcium sulfonate complex grease (222/462 cSt), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم مركب من سلفونات الكالسيوم (222/462 سنتيستوك)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-proguard-mp2",
    slug: "mollube-proguard-mp2",
    name_en: "MOLLUBE PROGUARD MP2",
    name_ar: "MOLLUBE PROGUARD MP2",
    shortDescription_en:
      "MOLLUBE PROGUARD MP2 — NLGI 2 mineral lithium multipurpose grease for anti-friction and plain bearings, bushings, and pins.",
    shortDescription_ar:
      "MOLLUBE PROGUARD MP2 — شحم ليثيوم معدني متعدد الأغراض بدرجة NLGI 2، للمحامل المضادة للاحتكاك والمحامل السطحية والجلب والمحاور.",
    longDescription_en:
      "PROGUARD MP2 is MOLLUBE's multipurpose mineral lithium grease at NLGI 2, used for multipurpose applications in anti-friction and plain bearings, bushings, and pins. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "PROGUARD MP2 هو شحم ليثيوم معدني متعدد الأغراض من MOLLUBE بدرجة NLGI 2، يُستخدم للتطبيقات متعددة الأغراض في المحامل المضادة للاحتكاك والمحامل السطحية والجلب والمحاور. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Lithium Multi-Purpose Grease — NLGI 2",
    publicName_ar: "شحم ليثيوم متعدد الأغراض — NLGI 2",
    publicShortDescription_en:
      "NLGI 2 mineral lithium multipurpose grease for anti-friction and plain bearings, bushings, and pins.",
    publicShortDescription_ar:
      "شحم ليثيوم معدني متعدد الأغراض بدرجة NLGI 2، للمحامل المضادة للاحتكاك والمحامل السطحية والجلب والمحاور.",
    publicLongDescription_en:
      "A multipurpose mineral lithium grease at NLGI 2, used for multipurpose applications in anti-friction and plain bearings, bushings, and pins. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "شحم ليثيوم معدني متعدد الأغراض بدرجة NLGI 2، يُستخدم للتطبيقات متعددة الأغراض في المحامل المضادة للاحتكاك والمحامل السطحية والجلب والمحاور. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE PROGUARD MP2",
    },
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "Multipurpose applications in anti-friction and plain bearings",
      "Bushings and pins",
    ],
    applications_ar: [
      "التطبيقات متعددة الأغراض في المحامل المضادة للاحتكاك والمحامل السطحية",
      "الجلب والمحاور",
    ],
    specifications: [
      {
        label_en: NLGI_EN,
        label_ar: NLGI_AR,
        value: "2",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: THICKENER_EN,
        label_ar: THICKENER_AR,
        value: "Mineral Lithium",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_VISC_EN,
        label_ar: BASE_OIL_VISC_AR,
        value: "200 cSt",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: TEMP_RANGE_EN,
        label_ar: TEMP_RANGE_AR,
        value: "-20°C to 150°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: DROPPING_POINT_EN,
        label_ar: DROPPING_POINT_AR,
        value: "190°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-hb-mp3",
      "mollube-proguard-m-bx",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-proguard-mp2-datasheet",
        title_en: "Lithium Multi-Purpose Grease — NLGI 2 Datasheet",
        title_ar: "نشرة بيانات شحم ليثيوم متعدد الأغراض — NLGI 2",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Lithium Multi-Purpose Grease — NLGI 2 Supplier Egypt",
      title_ar: "مورد شحم ليثيوم متعدد الأغراض — NLGI 2 في مصر",
      description_en:
        "GOLTENS supplies lithium multi-purpose grease (NLGI 2), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم ليثيوم متعدد الأغراض (NLGI 2)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-proguard-hb-mp3",
    slug: "mollube-proguard-hb-mp3",
    name_en: "MOLLUBE PROGUARD HB-MP3",
    name_ar: "MOLLUBE PROGUARD HB-MP3",
    shortDescription_en:
      "MOLLUBE PROGUARD HB-MP3 — NLGI 3 mineral lithium multipurpose grease for anti-friction and plain bearings, bushings, and pins.",
    shortDescription_ar:
      "MOLLUBE PROGUARD HB-MP3 — شحم ليثيوم معدني متعدد الأغراض بدرجة NLGI 3، للمحامل المضادة للاحتكاك والمحامل السطحية والجلب والمحاور.",
    longDescription_en:
      "PROGUARD HB-MP3 is MOLLUBE's multipurpose mineral lithium grease at NLGI 3, used for multipurpose applications in anti-friction and plain bearings, bushings, and pins. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "PROGUARD HB-MP3 هو شحم ليثيوم معدني متعدد الأغراض من MOLLUBE بدرجة NLGI 3، يُستخدم للتطبيقات متعددة الأغراض في المحامل المضادة للاحتكاك والمحامل السطحية والجلب والمحاور. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Lithium Multi-Purpose Grease — NLGI 3",
    publicName_ar: "شحم ليثيوم متعدد الأغراض — NLGI 3",
    publicShortDescription_en:
      "NLGI 3 mineral lithium multipurpose grease for anti-friction and plain bearings, bushings, and pins.",
    publicShortDescription_ar:
      "شحم ليثيوم معدني متعدد الأغراض بدرجة NLGI 3، للمحامل المضادة للاحتكاك والمحامل السطحية والجلب والمحاور.",
    publicLongDescription_en:
      "A multipurpose mineral lithium grease at NLGI 3, used for multipurpose applications in anti-friction and plain bearings, bushings, and pins. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "شحم ليثيوم معدني متعدد الأغراض بدرجة NLGI 3، يُستخدم للتطبيقات متعددة الأغراض في المحامل المضادة للاحتكاك والمحامل السطحية والجلب والمحاور. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE PROGUARD HB-MP3",
    },
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "Multipurpose applications in anti-friction and plain bearings",
      "Bushings and pins",
    ],
    applications_ar: [
      "التطبيقات متعددة الأغراض في المحامل المضادة للاحتكاك والمحامل السطحية",
      "الجلب والمحاور",
    ],
    specifications: [
      {
        label_en: NLGI_EN,
        label_ar: NLGI_AR,
        value: "3",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: THICKENER_EN,
        label_ar: THICKENER_AR,
        value: "Mineral Lithium",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_VISC_EN,
        label_ar: BASE_OIL_VISC_AR,
        value: "200 cSt",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: TEMP_RANGE_EN,
        label_ar: TEMP_RANGE_AR,
        value: "-20°C to 150°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: DROPPING_POINT_EN,
        label_ar: DROPPING_POINT_AR,
        value: "190°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-mp2",
      "mollube-proguard-m-bx",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-proguard-hb-mp3-datasheet",
        title_en: "Lithium Multi-Purpose Grease — NLGI 3 Datasheet",
        title_ar: "نشرة بيانات شحم ليثيوم متعدد الأغراض — NLGI 3",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Lithium Multi-Purpose Grease — NLGI 3 Supplier Egypt",
      title_ar: "مورد شحم ليثيوم متعدد الأغراض — NLGI 3 في مصر",
      description_en:
        "GOLTENS supplies lithium multi-purpose grease (NLGI 3), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم ليثيوم متعدد الأغراض (NLGI 3)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-proguard-lcx2",
    slug: "mollube-mol-proguard-lcx2",
    name_en: "MOLLUBE MOL-PROGUARD LCX2",
    name_ar: "MOLLUBE MOL-PROGUARD LCX2",
    shortDescription_en:
      "MOLLUBE MOL-PROGUARD LCX2 — lithium calcium complex grease for heavily loaded, high-temperature, water-saturated, and steam-resistant service.",
    shortDescription_ar:
      "MOLLUBE MOL-PROGUARD LCX2 — شحم مركّب ليثيوم-كالسيوم للخدمة تحت الأحمال الثقيلة ودرجات الحرارة العالية والتشبع بالماء ومقاومة البخار.",
    longDescription_en:
      "MOL-PROGUARD LCX2 is MOLLUBE's lithium calcium complex grease, used for heavily loaded and high-temperature service, and resistant to water saturation and steam. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "MOL-PROGUARD LCX2 هو شحم مركّب ليثيوم-كالسيوم من MOLLUBE، يُستخدم للخدمة تحت الأحمال الثقيلة ودرجات الحرارة العالية، ومقاوم للتشبع بالماء والبخار. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Lithium Calcium Complex Grease — NLGI 2",
    publicName_ar: "شحم مركب ليثيوم-كالسيوم — NLGI 2",
    publicShortDescription_en:
      "Lithium calcium complex grease for heavily loaded, high-temperature, water-saturated, and steam-resistant service.",
    publicShortDescription_ar:
      "شحم مركّب ليثيوم-كالسيوم للخدمة تحت الأحمال الثقيلة ودرجات الحرارة العالية والتشبع بالماء ومقاومة البخار.",
    publicLongDescription_en:
      "A lithium calcium complex grease, used for heavily loaded and high-temperature service, and resistant to water saturation and steam. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "شحم مركّب ليثيوم-كالسيوم، يُستخدم للخدمة تحت الأحمال الثقيلة ودرجات الحرارة العالية، ومقاوم للتشبع بالماء والبخار. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE MOL-PROGUARD LCX2",
    },
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "Heavily loaded and high-temperature service",
      "Water-saturated and steam-resistant applications",
    ],
    applications_ar: [
      "الخدمة تحت الأحمال الثقيلة ودرجات الحرارة العالية",
      "التطبيقات المتشبعة بالماء والمقاومة للبخار",
    ],
    specifications: [
      {
        label_en: NLGI_EN,
        label_ar: NLGI_AR,
        value: "2",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: THICKENER_EN,
        label_ar: THICKENER_AR,
        value: "Lithium Calcium Complex",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_VISC_EN,
        label_ar: BASE_OIL_VISC_AR,
        value: "150 cSt",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: TEMP_RANGE_EN,
        label_ar: TEMP_RANGE_AR,
        value: "-15°C to 200°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: DROPPING_POINT_EN,
        label_ar: DROPPING_POINT_AR,
        value: ">300°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: COLOR_EN,
        label_ar: COLOR_AR,
        value: "Red",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-lx-220",
      "mollube-proguard-ht-bo",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-proguard-lcx2-datasheet",
        title_en: "Lithium Calcium Complex Grease — NLGI 2 Datasheet",
        title_ar: "نشرة بيانات شحم مركب ليثيوم-كالسيوم — NLGI 2",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Lithium Calcium Complex Grease — NLGI 2 Supplier Egypt",
      title_ar: "مورد شحم مركب ليثيوم-كالسيوم — NLGI 2 في مصر",
      description_en:
        "GOLTENS supplies lithium calcium complex grease (NLGI 2), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم مركب ليثيوم-كالسيوم (NLGI 2)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-proguard-m-bx",
    slug: "mollube-proguard-m-bx",
    name_en: "MOLLUBE PROGUARD M BX",
    name_ar: "MOLLUBE PROGUARD M BX",
    shortDescription_en:
      "MOLLUBE PROGUARD M BX — mineral barium complex grease for traction motors, journal bearings, pumps, and tapered roller bearings.",
    shortDescription_ar:
      "MOLLUBE PROGUARD M BX — شحم مركّب باريوم معدني لمحركات الجر والمحامل المحورية والمضخات والمحامل الأسطوانية المخروطية.",
    longDescription_en:
      "PROGUARD M BX is MOLLUBE's mineral barium complex grease, used in traction motors, journal bearings in electric motors, pumps, and tapered roller bearings — proven efficient as a rolling-bearing and high-pressure grease that protects against wear. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "PROGUARD M BX هو شحم مركّب باريوم معدني من MOLLUBE، يُستخدم في محركات الجر والمحامل المحورية في المحركات الكهربائية والمضخات والمحامل الأسطوانية المخروطية — وأثبت كفاءته كشحم للمحامل الدوارة وذو ضغط عالٍ يحمي من التآكل. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Barium Complex Grease — NLGI 2",
    publicName_ar: "شحم مركب باريوم — NLGI 2",
    publicShortDescription_en:
      "Mineral barium complex grease for traction motors, journal bearings, pumps, and tapered roller bearings.",
    publicShortDescription_ar:
      "شحم مركّب باريوم معدني لمحركات الجر والمحامل المحورية والمضخات والمحامل الأسطوانية المخروطية.",
    publicLongDescription_en:
      "A mineral barium complex grease, used in traction motors, journal bearings in electric motors, pumps, and tapered roller bearings — proven efficient as a rolling-bearing and high-pressure grease that protects against wear. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "شحم مركّب باريوم معدني، يُستخدم في محركات الجر والمحامل المحورية في المحركات الكهربائية والمضخات والمحامل الأسطوانية المخروطية — وأثبت كفاءته كشحم للمحامل الدوارة وذو ضغط عالٍ يحمي من التآكل. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE PROGUARD M BX",
    },
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "Traction motors and journal bearings in electric motors",
      "Pumps and tapered roller bearings",
    ],
    applications_ar: [
      "محركات الجر والمحامل المحورية في المحركات الكهربائية",
      "المضخات والمحامل الأسطوانية المخروطية",
    ],
    specifications: [
      {
        label_en: NLGI_EN,
        label_ar: NLGI_AR,
        value: "2",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: THICKENER_EN,
        label_ar: THICKENER_AR,
        value: "Mineral Barium Complex",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_VISC_EN,
        label_ar: BASE_OIL_VISC_AR,
        value: "460 cSt",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: TEMP_RANGE_EN,
        label_ar: TEMP_RANGE_AR,
        value: "-30°C to 150°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: DROPPING_POINT_EN,
        label_ar: DROPPING_POINT_AR,
        value: ">220°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: COLOR_EN,
        label_ar: COLOR_AR,
        value: "Brown",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-mp2",
      "mollube-proguard-hb-mp3",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-proguard-m-bx-datasheet",
        title_en: "Barium Complex Grease — NLGI 2 Datasheet",
        title_ar: "نشرة بيانات شحم مركب باريوم — NLGI 2",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Barium Complex Grease — NLGI 2 Supplier Egypt",
      title_ar: "مورد شحم مركب باريوم — NLGI 2 في مصر",
      description_en:
        "GOLTENS supplies barium complex grease (NLGI 2), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم مركب باريوم (NLGI 2)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-proguard-inor-sy",
    slug: "mollube-proguard-inor-sy",
    name_en: "MOLLUBE PROGUARD INOR SY",
    name_ar: "MOLLUBE PROGUARD INOR SY",
    shortDescription_en:
      "MOLLUBE PROGUARD INOR SY — synthetic (PAO), soap-free grease for low-temperature applications, including refrigeration and arctic environments.",
    shortDescription_ar:
      "MOLLUBE PROGUARD INOR SY — شحم اصطناعي (PAO) خالٍ من الصابون للتطبيقات منخفضة درجة الحرارة، بما في ذلك التبريد والبيئات القطبية.",
    longDescription_en:
      "PROGUARD INOR SY is MOLLUBE's synthetic (PAO), soap-free grease, used in all moving mechanical parts where a low-temperature property and adhesion to metal are needed, including the refrigeration industry, arctic environments, drying ovens, and hot roll beds of glass. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "PROGUARD INOR SY هو شحم اصطناعي (PAO) خالٍ من الصابون من MOLLUBE، يُستخدم في جميع الأجزاء الميكانيكية المتحركة التي تتطلب خاصية منخفضة درجة الحرارة والالتصاق بالمعدن، بما في ذلك صناعة التبريد والبيئات القطبية وأفران التجفيف وأسرّة الدرفلة الساخنة للزجاج. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Synthetic PAO Soap-Free Low-Temperature Grease",
    publicName_ar: "شحم اصطناعي (PAO) خالٍ من الصابون منخفض درجة الحرارة",
    publicShortDescription_en:
      "Synthetic (PAO), soap-free grease for low-temperature applications, including refrigeration and arctic environments.",
    publicShortDescription_ar:
      "شحم اصطناعي (PAO) خالٍ من الصابون للتطبيقات منخفضة درجة الحرارة، بما في ذلك التبريد والبيئات القطبية.",
    publicLongDescription_en:
      "A synthetic (PAO), soap-free grease, used in all moving mechanical parts where a low-temperature property and adhesion to metal are needed, including the refrigeration industry, arctic environments, drying ovens, and hot roll beds of glass. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "شحم اصطناعي (PAO) خالٍ من الصابون، يُستخدم في جميع الأجزاء الميكانيكية المتحركة التي تتطلب خاصية منخفضة درجة الحرارة والالتصاق بالمعدن، بما في ذلك صناعة التبريد والبيئات القطبية وأفران التجفيف وأسرّة الدرفلة الساخنة للزجاج. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE PROGUARD INOR SY",
    },
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "Moving mechanical parts requiring low-temperature property and adhesion to metal",
      "Refrigeration industry and arctic environments",
      "Drying ovens and hot roll beds of glass",
    ],
    applications_ar: [
      "الأجزاء الميكانيكية المتحركة التي تتطلب خاصية منخفضة درجة الحرارة والالتصاق بالمعدن",
      "صناعة التبريد والبيئات القطبية",
      "أفران التجفيف وأسرّة الدرفلة الساخنة للزجاج",
    ],
    // Temperature range is genuinely blank ("-") in the source — omitted
    // rather than inferred, per source-fidelity rules.
    specifications: [
      {
        label_en: NLGI_EN,
        label_ar: NLGI_AR,
        value: "2",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: THICKENER_EN,
        label_ar: THICKENER_AR,
        value: "Synthetic (PAO), Soap Free",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_VISC_EN,
        label_ar: BASE_OIL_VISC_AR,
        value: "1250 cSt",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: DROPPING_POINT_EN,
        label_ar: DROPPING_POINT_AR,
        value: "Non Dropping",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: COLOR_EN,
        label_ar: COLOR_AR,
        value: "Blue",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-sy-pu",
      "mollube-proguard-m-bx",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-proguard-inor-sy-datasheet",
        title_en: "Synthetic PAO Soap-Free Low-Temperature Grease Datasheet",
        title_ar:
          "نشرة بيانات شحم اصطناعي (PAO) خالٍ من الصابون منخفض درجة الحرارة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Synthetic PAO Soap-Free Low-Temperature Grease Supplier Egypt",
      title_ar:
        "مورد شحم اصطناعي (PAO) خالٍ من الصابون منخفض درجة الحرارة في مصر",
      description_en:
        "GOLTENS supplies synthetic PAO soap-free low-temperature grease, available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم اصطناعي (PAO) خالٍ من الصابون منخفض درجة الحرارة، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-proguard-ht-bo",
    slug: "mollube-proguard-ht-bo",
    // Source prints "PROGAURD HT BO" (letters transposed) — see file header
    // note. Named "PROGUARD HT BO" here for consistency with the rest of
    // this catalog's naming; not a claim the source spelling was verified
    // or corrected by MOLLUBE.
    name_en: "MOLLUBE PROGUARD HT BO",
    name_ar: "MOLLUBE PROGUARD HT BO",
    shortDescription_en:
      "MOLLUBE PROGUARD HT BO — high-temperature, multipurpose grease with water resistance and strong metal adhesion, for plain bearings and high-temperature machinery.",
    shortDescription_ar:
      "MOLLUBE PROGUARD HT BO — شحم متعدد الأغراض عالي الحرارة، بمقاومة للماء والتصاق قوي بالمعدن، للمحامل السطحية والآلات عالية الحرارة.",
    longDescription_en:
      "PROGUARD HT BO is MOLLUBE's grease designed for high temperatures and multipurpose use. Ideal for applications requiring water resistance and strong adhesion to metal surfaces, it is suited for use in plain bearings, agricultural and road machinery, and other high-temperature environments. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "PROGUARD HT BO هو شحم من MOLLUBE مصمم لدرجات الحرارة العالية والاستخدام متعدد الأغراض. مثالي للتطبيقات التي تتطلب مقاومة للماء والتصاقًا قويًا بالأسطح المعدنية، ومناسب للاستخدام في المحامل السطحية والآلات الزراعية وآلات الطرق والبيئات الأخرى عالية الحرارة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "High-Temperature Multi-Purpose Grease — Water-Resistant",
    publicName_ar: "شحم متعدد الأغراض عالي الحرارة — مقاوم للماء",
    publicShortDescription_en:
      "High-temperature, multipurpose grease with water resistance and strong metal adhesion, for plain bearings and high-temperature machinery.",
    publicShortDescription_ar:
      "شحم متعدد الأغراض عالي الحرارة، بمقاومة للماء والتصاق قوي بالمعدن، للمحامل السطحية والآلات عالية الحرارة.",
    publicLongDescription_en:
      "A grease designed for high temperatures and multipurpose use. Ideal for applications requiring water resistance and strong adhesion to metal surfaces, it is suited for use in plain bearings, agricultural and road machinery, and other high-temperature environments. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "شحم مصمم لدرجات الحرارة العالية والاستخدام متعدد الأغراض. مثالي للتطبيقات التي تتطلب مقاومة للماء والتصاقًا قويًا بالأسطح المعدنية، ومناسب للاستخدام في المحامل السطحية والآلات الزراعية وآلات الطرق والبيئات الأخرى عالية الحرارة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE PROGUARD HT BO",
    },
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "High-temperature, multipurpose applications requiring water resistance",
      "Plain bearings",
      "Agricultural and road machinery",
    ],
    applications_ar: [
      "التطبيقات متعددة الأغراض عالية الحرارة التي تتطلب مقاومة للماء",
      "المحامل السطحية",
      "الآلات الزراعية وآلات الطرق",
    ],
    specifications: [
      {
        label_en: NLGI_EN,
        label_ar: NLGI_AR,
        value: "2",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: THICKENER_EN,
        label_ar: THICKENER_AR,
        value: "Mineral, Inorganic Special Thickener",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_VISC_EN,
        label_ar: BASE_OIL_VISC_AR,
        value: ">150 cSt",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: TEMP_RANGE_EN,
        label_ar: TEMP_RANGE_AR,
        value: "180°C to 200°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: DROPPING_POINT_EN,
        label_ar: DROPPING_POINT_AR,
        value: "Non melt",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: COLOR_EN,
        label_ar: COLOR_AR,
        value: "Red",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-mol-proguard-lcx2",
      "mollube-proguard-mo-lx",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-proguard-ht-bo-datasheet",
        title_en:
          "High-Temperature Multi-Purpose Grease — Water-Resistant Datasheet",
        title_ar: "نشرة بيانات شحم متعدد الأغراض عالي الحرارة — مقاوم للماء",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "High-Temperature Multi-Purpose Grease — Water-Resistant Supplier Egypt",
      title_ar: "مورد شحم متعدد الأغراض عالي الحرارة — مقاوم للماء في مصر",
      description_en:
        "GOLTENS supplies high-temperature multi-purpose water-resistant grease, available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم متعدد الأغراض عالي الحرارة مقاوم للماء، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-proguard-mo-lx",
    slug: "mollube-proguard-mo-lx",
    name_en: "MOLLUBE PROGUARD MO LX",
    name_ar: "MOLLUBE PROGUARD MO LX",
    shortDescription_en:
      "MOLLUBE PROGUARD MO LX — molybdenum disulfide-enhanced mineral lithium complex grease for chassis components, king pins, U-joints, and fifth wheels.",
    shortDescription_ar:
      "MOLLUBE PROGUARD MO LX — شحم مركّب ليثيوم معدني معزز بثاني كبريتيد الموليبدينوم لمكونات الشاسيه ودبابيس التوجيه ومفاصل U والصحن الخامس.",
    longDescription_en:
      "PROGUARD MO LX is MOLLUBE's grease designed for moderate-duty service in industrial applications, chassis components, and farm equipment, and suitable for heavy-duty use in king pins, U-joints, fifth wheels, and mining and cement industries. Contains molybdenum disulfide for enhanced performance under heavy loads and reduced friction. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "PROGUARD MO LX هو شحم من MOLLUBE مصمم للخدمة متوسطة الشدة في التطبيقات الصناعية ومكونات الشاسيه والمعدات الزراعية، ومناسب للاستخدام الشاق في دبابيس التوجيه ومفاصل U والصحن الخامس وصناعات التعدين والأسمنت. يحتوي على ثاني كبريتيد الموليبدينوم لتحسين الأداء تحت الأحمال الثقيلة وتقليل الاحتكاك. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Molybdenum-Enhanced Lithium Complex Grease — NLGI 2",
    publicName_ar: "شحم مركب ليثيوم معزز بالموليبدينوم — NLGI 2",
    publicShortDescription_en:
      "Molybdenum disulfide-enhanced mineral lithium complex grease for chassis components, king pins, U-joints, and fifth wheels.",
    publicShortDescription_ar:
      "شحم مركّب ليثيوم معدني معزز بثاني كبريتيد الموليبدينوم لمكونات الشاسيه ودبابيس التوجيه ومفاصل U والصحن الخامس.",
    publicLongDescription_en:
      "A grease designed for moderate-duty service in industrial applications, chassis components, and farm equipment, and suitable for heavy-duty use in king pins, U-joints, fifth wheels, and mining and cement industries. Contains molybdenum disulfide for enhanced performance under heavy loads and reduced friction. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "شحم مصمم للخدمة متوسطة الشدة في التطبيقات الصناعية ومكونات الشاسيه والمعدات الزراعية، ومناسب للاستخدام الشاق في دبابيس التوجيه ومفاصل U والصحن الخامس وصناعات التعدين والأسمنت. يحتوي على ثاني كبريتيد الموليبدينوم لتحسين الأداء تحت الأحمال الثقيلة وتقليل الاحتكاك. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE PROGUARD MO LX",
    },
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "Moderate-duty industrial applications, chassis components, and farm equipment",
      "Heavy-duty use in king pins, U-joints, and fifth wheels",
      "Mining and cement industries",
    ],
    applications_ar: [
      "التطبيقات الصناعية متوسطة الشدة ومكونات الشاسيه والمعدات الزراعية",
      "الاستخدام الشاق في دبابيس التوجيه ومفاصل U والصحن الخامس",
      "صناعات التعدين والأسمنت",
    ],
    specifications: [
      {
        label_en: NLGI_EN,
        label_ar: NLGI_AR,
        value: "2",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: THICKENER_EN,
        label_ar: THICKENER_AR,
        value: "Mineral Lithium Complex",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_VISC_EN,
        label_ar: BASE_OIL_VISC_AR,
        value: "320 cSt",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: TEMP_RANGE_EN,
        label_ar: TEMP_RANGE_AR,
        value: "-25°C to 165°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: DROPPING_POINT_EN,
        label_ar: DROPPING_POINT_AR,
        value: "295°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: COLOR_EN,
        label_ar: COLOR_AR,
        value: "Black",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        // Explicitly stated in source ("Contains molybdenum disulfide for
        // enhanced performance..."); no percentage or additional MoS2
        // specification is given, so none is stated here.
        label_en: "Molybdenum Disulfide (MoS2)",
        label_ar: "ثاني كبريتيد الموليبدينوم (MoS2)",
        value: "Present",
        group_en: "Composition",
        group_ar: "التركيب",
      },
    ],
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-xmo-180",
      "mollube-proguard-ht-bo",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-proguard-mo-lx-datasheet",
        title_en:
          "Molybdenum-Enhanced Lithium Complex Grease — NLGI 2 Datasheet",
        title_ar: "نشرة بيانات شحم مركب ليثيوم معزز بالموليبدينوم — NLGI 2",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "Molybdenum-Enhanced Lithium Complex Grease — NLGI 2 Supplier Egypt",
      title_ar: "مورد شحم مركب ليثيوم معزز بالموليبدينوم — NLGI 2 في مصر",
      description_en:
        "GOLTENS supplies molybdenum-enhanced lithium complex grease (NLGI 2), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم مركب ليثيوم معزز بالموليبدينوم (NLGI 2)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-proguard-xmo-180",
    slug: "mollube-proguard-xmo-180",
    name_en: "MOLLUBE PROGUARD XMO 180",
    name_ar: "MOLLUBE PROGUARD XMO 180",
    shortDescription_en:
      "MOLLUBE PROGUARD XMO 180 — mineral metal complex grease for ball, plain roller, and thrust bearings in presses, crushers, and heavy industry.",
    shortDescription_ar:
      "MOLLUBE PROGUARD XMO 180 — شحم مركّب معدني للمحامل الكروية والأسطوانية السطحية ومحامل الدفع في المكابس والكسّارات والصناعات الثقيلة.",
    longDescription_en:
      "PROGUARD XMO 180 is MOLLUBE's mineral-based metal complex grease used in various applications, including ball, plain roller, and thrust bearings. It is suitable for presses and crushers at heavy industry, quarries, docks and ports, film stretching, and construction, and can be applied manually, with a grease gun, or using a keg pump. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "PROGUARD XMO 180 هو شحم مركّب معدني ذو أساس معدني من MOLLUBE، يُستخدم في تطبيقات متعددة، بما في ذلك المحامل الكروية والأسطوانية السطحية ومحامل الدفع. مناسب للمكابس والكسّارات في الصناعات الثقيلة والمحاجر والموانئ والأرصفة وتمديد الأفلام والإنشاءات، ويمكن تطبيقه يدويًا أو بمسدس الشحم أو باستخدام مضخة البرميل. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Metal Complex Grease — NLGI 2",
    publicName_ar: "شحم مركب معدني — NLGI 2",
    publicShortDescription_en:
      "Mineral metal complex grease for ball, plain roller, and thrust bearings in presses, crushers, and heavy industry.",
    publicShortDescription_ar:
      "شحم مركّب معدني للمحامل الكروية والأسطوانية السطحية ومحامل الدفع في المكابس والكسّارات والصناعات الثقيلة.",
    publicLongDescription_en:
      "A mineral-based metal complex grease used in various applications, including ball, plain roller, and thrust bearings. It is suitable for presses and crushers at heavy industry, quarries, docks and ports, film stretching, and construction, and can be applied manually, with a grease gun, or using a keg pump. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "شحم مركّب معدني ذو أساس معدني، يُستخدم في تطبيقات متعددة، بما في ذلك المحامل الكروية والأسطوانية السطحية ومحامل الدفع. مناسب للمكابس والكسّارات في الصناعات الثقيلة والمحاجر والموانئ والأرصفة وتمديد الأفلام والإنشاءات، ويمكن تطبيقه يدويًا أو بمسدس الشحم أو باستخدام مضخة البرميل. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE PROGUARD XMO 180",
    },
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "Ball, plain roller, and thrust bearings",
      "Presses and crushers in heavy industry, quarries, docks and ports",
      "Film stretching and construction",
    ],
    applications_ar: [
      "المحامل الكروية والأسطوانية السطحية ومحامل الدفع",
      "المكابس والكسّارات في الصناعات الثقيلة والمحاجر والموانئ والأرصفة",
      "تمديد الأفلام والإنشاءات",
    ],
    specifications: [
      {
        label_en: NLGI_EN,
        label_ar: NLGI_AR,
        value: "2",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: THICKENER_EN,
        label_ar: THICKENER_AR,
        value: "Mineral Metal Complex",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_VISC_EN,
        label_ar: BASE_OIL_VISC_AR,
        value: "180 cSt",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: TEMP_RANGE_EN,
        label_ar: TEMP_RANGE_AR,
        value: "-30°C to 160°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: DROPPING_POINT_EN,
        label_ar: DROPPING_POINT_AR,
        value: "280°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: COLOR_EN,
        label_ar: COLOR_AR,
        value: "Black",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Application Method",
        label_ar: "طريقة التطبيق",
        value: "Manual, grease gun, or keg pump",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-mo-lx",
      "mollube-proguard-csx",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-proguard-xmo-180-datasheet",
        title_en: "Metal Complex Grease — NLGI 2 Datasheet",
        title_ar: "نشرة بيانات شحم مركب معدني — NLGI 2",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Metal Complex Grease — NLGI 2 Supplier Egypt",
      title_ar: "مورد شحم مركب معدني — NLGI 2 في مصر",
      description_en:
        "GOLTENS supplies metal complex grease (NLGI 2), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم مركب معدني (NLGI 2)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
];
