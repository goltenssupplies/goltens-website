import type { Product, ProductSpecification } from "@/data/products/types";

/**
 * MOLLUBE Batch M2 (Refrigeration Oils) — first 4 MOLLUBE refrigeration
 * products added to the Lubricants & Oils catalog, under the new
 * "Refrigeration Oils" category (`data/product-categories.ts`). Every
 * description, feature, application, and technical value below is taken
 * directly from the single approved source for this batch:
 *  - "MOLLUBE Refrigration Oils 2025.pdf" [sic — filename as supplied],
 *    p.3-5 — MOL-FREEZ M Series, MOL-FREEZ ULTRA 68, MOL-FREEZ PAO Series,
 *    MOL-FREEZ E Series
 *
 * Source terminology notes (preserved, not silently corrected):
 *  - p.2's intro text calls the synthetic base stock "POA (Polyalphaolefin)";
 *    p.4's own MOL-FREEZ PAO Series entry instead uses "PAOs
 *    (Polyalphaolefins)" for the same substance. The product copy below
 *    uses "PAO (Polyalphaolefin)" — the product-specific p.4 spelling —
 *    for consistency with the product's own name.
 *  - p.4's MOL-FREEZ PAO Series description reads verbatim "is large
 *    refrigeration compressors and to be completely compatible with CFC
 *    and Ammonia refrigerant gases" — an apparently incomplete source
 *    sentence. `longDescription_en` below paraphrases this faithfully
 *    ("designed for large refrigeration compressors, fully compatible
 *    with...") rather than reproducing the broken grammar, without adding
 *    any fact not in the source.
 *  - p.4's grade table for MOL-FREEZ PAO Series is itself headed
 *    "MOL-FREEZ PAO 220" even though it covers both the 150 and 220
 *    grades — a source heading/table-title mismatch, not a data error;
 *    not reproduced as the product's own name (the product is named
 *    "MOL-FREEZ PAO Series" per the catalogue's own product heading).
 *  - p.5's second MOL-FREEZ E grade table lists Kinematic Viscosity @
 *    100°C for the 220 grade as "9.1" — identical to the unrelated 68
 *    grade's value in the first table, and far below the surrounding
 *    170 (17) and 320 (27) grades' values. This looks like a transcription
 *    error in the source PDF itself, but per source-fidelity rules it is
 *    preserved exactly as printed below, not corrected or interpolated.
 *
 * GOLTENS is supplying these products, not representing MOLLUBE as an
 * authorized distributor/agent/partner — every product uses neutral
 * "available for supply" / "request a quote" language only. Fields with
 * no source value (packaging, approvals/standards beyond the cited test
 * methods, manufacturer claims) are omitted rather than invented.
 *
 * Grade-specific technical tables are built from literal per-grade tuples
 * matching the source PDF tables column-for-column, then expanded into the
 * flat `ProductSpecification[]` shape via `buildGradeSpecifications()` —
 * same convention as `mollube-batch-m1.ts`. Fields printed once as a
 * single value spanning every grade in a table (e.g. Neutralization Value,
 * Cu Corrosion, Water ppm) are kept as separate whole-family spec rows
 * rather than duplicated identically under every grade group.
 */

interface SpecEntry {
  label_en: string;
  label_ar: string;
  value: string;
}

interface GradeRow {
  grade: string;
  entries: SpecEntry[];
}

function buildGradeSpecifications(rows: GradeRow[]): ProductSpecification[] {
  return rows.flatMap((row) => {
    const group_en = `ISO VG ${row.grade}`;
    const group_ar = `درجة اللزوجة ISO VG ${row.grade}`;
    return row.entries.map((entry) => ({ ...entry, group_en, group_ar }));
  });
}

const DENSITY_EN = "Density @ 15°C";
const DENSITY_AR = "الكثافة عند 15°م";
const KV40_EN = "Kinematic Viscosity @ 40°C";
const KV40_AR = "اللزوجة الحركية عند 40°م";
const KV100_EN = "Kinematic Viscosity @ 100°C";
const KV100_AR = "اللزوجة الحركية عند 100°م";
const FLASH_EN = "Flash Point (COC)";
const FLASH_AR = "نقطة الوميض (COC)";
const POUR_EN = "Pour Point";
const POUR_AR = "نقطة الانسكاب";
const VI_EN = "Viscosity Index";
const VI_AR = "مؤشر اللزوجة";

// MOLLUBE Refrigration Oils 2025.pdf, p.3 — "MOL-FREEZ M" table.
const MOL_FREEZ_M_GRADE_ROWS: GradeRow[] = [
  {
    grade: "32",
    entries: [
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.905 g/cm³" },
      { label_en: KV40_EN, label_ar: KV40_AR, value: "32 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "4.6 cSt" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "190°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-38°C" },
    ],
  },
  {
    grade: "46",
    entries: [
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.908 g/cm³" },
      { label_en: KV40_EN, label_ar: KV40_AR, value: "46 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "5.6 cSt" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "195°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-37°C" },
    ],
  },
  {
    grade: "55",
    entries: [
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.910 g/cm³" },
      { label_en: KV40_EN, label_ar: KV40_AR, value: "55 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "5.9 cSt" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "196°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-37°C" },
    ],
  },
  {
    grade: "68",
    entries: [
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.912 g/cm³" },
      { label_en: KV40_EN, label_ar: KV40_AR, value: "68 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "6.6 cSt" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "200°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-36°C" },
    ],
  },
];

// MOLLUBE Refrigration Oils 2025.pdf, p.4 — "MOL-FREEZ PAO 220" table
// (source table heading, covers both the 150 and 220 grades — see note
// above; product itself is named "MOL-FREEZ PAO Series").
const MOL_FREEZ_PAO_GRADE_ROWS: GradeRow[] = [
  {
    grade: "150",
    entries: [
      { label_en: KV40_EN, label_ar: KV40_AR, value: "150 cSt" },
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.85 g/cm³" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "260°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-40°C" },
      { label_en: "Cloud Point", label_ar: "نقطة التغيّم", value: "<-50°C" },
    ],
  },
  {
    grade: "220",
    entries: [
      { label_en: KV40_EN, label_ar: KV40_AR, value: "220 cSt" },
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.85 g/cm³" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "260°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-40°C" },
      { label_en: "Cloud Point", label_ar: "نقطة التغيّم", value: "<-50°C" },
    ],
  },
];

// MOLLUBE Refrigration Oils 2025.pdf, p.5 — both "MOL-FREEZ E" tables.
const MOL_FREEZ_E_GRADE_ROWS: GradeRow[] = [
  {
    grade: "22",
    entries: [
      { label_en: KV40_EN, label_ar: KV40_AR, value: "22 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "4.2 cSt" },
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.995 g/cm³" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "240°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-50°C" },
      { label_en: VI_EN, label_ar: VI_AR, value: "129" },
    ],
  },
  {
    grade: "32",
    entries: [
      { label_en: KV40_EN, label_ar: KV40_AR, value: "32 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "5.85 cSt" },
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.985 g/cm³" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "250°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-45°C" },
      { label_en: VI_EN, label_ar: VI_AR, value: "126" },
    ],
  },
  {
    grade: "46",
    entries: [
      { label_en: KV40_EN, label_ar: KV40_AR, value: "46 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "7.25 cSt" },
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.980 g/cm³" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "251°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-42°C" },
      { label_en: VI_EN, label_ar: VI_AR, value: "113" },
    ],
  },
  {
    grade: "55",
    entries: [
      { label_en: KV40_EN, label_ar: KV40_AR, value: "55 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "8.2 cSt" },
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.980 g/cm³" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "253°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-40°C" },
      { label_en: VI_EN, label_ar: VI_AR, value: "114" },
    ],
  },
  {
    grade: "68",
    entries: [
      { label_en: KV40_EN, label_ar: KV40_AR, value: "68 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "9.1 cSt" },
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.980 g/cm³" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "260°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-39°C" },
      { label_en: VI_EN, label_ar: VI_AR, value: "117" },
    ],
  },
  {
    grade: "100",
    entries: [
      { label_en: KV40_EN, label_ar: KV40_AR, value: "100 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "11.9 cSt" },
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.972 g/cm³" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "265°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-31°C" },
      { label_en: VI_EN, label_ar: VI_AR, value: "118" },
    ],
  },
  {
    grade: "120",
    entries: [
      { label_en: KV40_EN, label_ar: KV40_AR, value: "120 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "13.6 cSt" },
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.968 g/cm³" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "275°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-27°C" },
      { label_en: VI_EN, label_ar: VI_AR, value: "109" },
    ],
  },
  {
    grade: "150",
    entries: [
      { label_en: KV40_EN, label_ar: KV40_AR, value: "150 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "15.8 cSt" },
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.968 g/cm³" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "290°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-26°C" },
      { label_en: VI_EN, label_ar: VI_AR, value: "107" },
    ],
  },
  {
    grade: "170",
    entries: [
      { label_en: KV40_EN, label_ar: KV40_AR, value: "170 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "17 cSt" },
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.968 g/cm³" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "290°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-26°C" },
      { label_en: VI_EN, label_ar: VI_AR, value: "109" },
    ],
  },
  {
    // As printed in source: KV@100°C for this grade is "9.1" — identical to
    // the unrelated 68 grade above and inconsistent with the surrounding
    // 170 (17) / 320 (27) trend. Preserved exactly, not corrected — see
    // file header note.
    grade: "220",
    entries: [
      { label_en: KV40_EN, label_ar: KV40_AR, value: "220 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "9.1 cSt" },
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.968 g/cm³" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "288°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-26°C" },
      { label_en: VI_EN, label_ar: VI_AR, value: "112" },
    ],
  },
  {
    grade: "320",
    entries: [
      { label_en: KV40_EN, label_ar: KV40_AR, value: "320 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "27 cSt" },
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.970 g/cm³" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "289°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-25°C" },
      { label_en: VI_EN, label_ar: VI_AR, value: "116" },
    ],
  },
  {
    grade: "370",
    entries: [
      { label_en: KV40_EN, label_ar: KV40_AR, value: "370 cSt" },
      { label_en: KV100_EN, label_ar: KV100_AR, value: "31 cSt" },
      { label_en: DENSITY_EN, label_ar: DENSITY_AR, value: "0.972 g/cm³" },
      { label_en: FLASH_EN, label_ar: FLASH_AR, value: "290°C" },
      { label_en: POUR_EN, label_ar: POUR_AR, value: "-24°C" },
      { label_en: VI_EN, label_ar: VI_AR, value: "120" },
    ],
  },
];

export const mollubeBatchM2Refrigeration: Product[] = [
  {
    id: "mollube-mol-freez-m",
    slug: "mollube-mol-freez-m",
    name_en: "MOLLUBE MOL-FREEZ M Series",
    name_ar: "MOLLUBE MOL-FREEZ M Series",
    shortDescription_en:
      "MOLLUBE MOL-FREEZ M Series — mineral refrigeration oil, ISO VG 32 to 68, compatible with CFC and Ammonia refrigerant gases.",
    shortDescription_ar:
      "سلسلة MOLLUBE MOL-FREEZ M — زيت تبريد معدني، بدرجات لزوجة ISO VG من 32 إلى 68، متوافق مع غازات التبريد CFC والأمونيا.",
    longDescription_en:
      "MOL-FREEZ M Series is MOLLUBE's high-quality mineral oil for refrigeration systems, offering a range of viscosities from 32 up to 68 to suit various types of refrigeration equipment. Formulated with top-quality naphthenic base oils, it is fully compatible with CFC and Ammonia refrigerant gases and operates safely at low temperatures. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "سلسلة MOL-FREEZ M هي زيت معدني عالي الجودة من MOLLUBE لأنظمة التبريد، يوفر نطاقًا من درجات اللزوجة من 32 إلى 68 لتناسب مختلف أنواع معدات التبريد. مصنّع من زيوت أساسية نافثينية عالية الجودة، وهو متوافق تمامًا مع غازات التبريد CFC والأمونيا، ويعمل بأمان في درجات الحرارة المنخفضة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Mineral Refrigeration Oil — ISO VG 32-68",
    publicName_ar: "زيت تبريد معدني — ISO VG 32-68",
    publicShortDescription_en:
      "Mineral refrigeration oil, ISO VG 32 to 68, compatible with CFC and Ammonia refrigerant gases.",
    publicShortDescription_ar:
      "زيت تبريد معدني، بدرجات لزوجة ISO VG من 32 إلى 68، متوافق مع غازات التبريد CFC والأمونيا.",
    publicLongDescription_en:
      "A high-quality mineral oil for refrigeration systems, offering a range of viscosities from 32 up to 68 to suit various types of refrigeration equipment. Formulated with top-quality naphthenic base oils, it is fully compatible with CFC and Ammonia refrigerant gases and operates safely at low temperatures. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "زيت معدني عالي الجودة لأنظمة التبريد، يوفر نطاقًا من درجات اللزوجة من 32 إلى 68 لتناسب مختلف أنواع معدات التبريد. مصنّع من زيوت أساسية نافثينية عالية الجودة، وهو متوافق تمامًا مع غازات التبريد CFC والأمونيا، ويعمل بأمان في درجات الحرارة المنخفضة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE MOL-FREEZ M Series",
    },
    sectorId: "lubricants-oils",
    categoryId: "refrigeration-oils",
    features_en: [
      "Excellent chemical stability",
      "Excellent chemical compatibility",
      "Resistant to deposit formation",
      "Will not form wax deposits",
    ],
    features_ar: [
      "ثبات كيميائي ممتاز",
      "توافق كيميائي ممتاز",
      "مقاوم لتكوّن الرواسب",
      "لا يكوّن رواسب شمعية",
    ],
    applications_en: [
      "Compatible with CFC and Ammonia refrigerant gases",
      "Normal refrigeration gases such as ammonia, Freon 12, Freon 22",
    ],
    applications_ar: [
      "متوافق مع غازات التبريد CFC والأمونيا",
      "غازات التبريد التقليدية مثل الأمونيا وفريون 12 وفريون 22",
    ],
    specifications: [
      ...buildGradeSpecifications(MOL_FREEZ_M_GRADE_ROWS),
      {
        label_en: "Neutralization Value",
        label_ar: "قيمة التعادل",
        value: "<0.01 mgKOH/g",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "mollube-mol-freez-ultra-68",
      "mollube-mol-freez-pao",
      "mollube-mol-freez-e",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-freez-m-datasheet",
        title_en: "Mineral Refrigeration Oil — ISO VG 32-68 Datasheet",
        title_ar: "نشرة بيانات زيت تبريد معدني — ISO VG 32-68",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Mineral Refrigeration Oil — ISO VG 32-68 Supplier Egypt",
      title_ar: "مورد زيت تبريد معدني — ISO VG 32-68 في مصر",
      description_en:
        "GOLTENS supplies mineral refrigeration oil (ISO VG 32-68), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت تبريد معدني (ISO VG 32-68)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-freez-ultra-68",
    slug: "mollube-mol-freez-ultra-68",
    name_en: "MOLLUBE MOL-FREEZ ULTRA 68",
    name_ar: "MOLLUBE MOL-FREEZ ULTRA 68",
    shortDescription_en:
      "MOLLUBE MOL-FREEZ ULTRA 68 — semi-synthetic ISO VG 68 refrigeration oil for ammonia (R717) compressors.",
    shortDescription_ar:
      "MOLLUBE MOL-FREEZ ULTRA 68 — زيت تبريد شبه اصطناعي بدرجة لزوجة ISO VG 68 لضواغط الأمونيا (R717).",
    longDescription_en:
      "MOL-FREEZ ULTRA 68 is MOLLUBE's superior semi-synthetic refrigeration oil, designed for ammonia compressors using R717 gas. It features special additives for oxidation inhibition, corrosion protection, and enhanced low-temperature performance, and can also be used as a coolant for process-gas rotary screw and reciprocating compressors. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "MOL-FREEZ ULTRA 68 هو زيت تبريد شبه اصطناعي متفوق من MOLLUBE، مصمم لضواغط الأمونيا التي تستخدم غاز R717. يحتوي على إضافات خاصة لمنع الأكسدة والحماية من التآكل وتحسين الأداء في درجات الحرارة المنخفضة، ويمكن استخدامه أيضًا كمبرّد لضواغط الغاز اللولبية والترددية. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Semi-Synthetic Ammonia Refrigeration Oil — ISO VG 68",
    publicName_ar: "زيت تبريد شبه اصطناعي للأمونيا — ISO VG 68",
    publicShortDescription_en:
      "Semi-synthetic ISO VG 68 refrigeration oil for ammonia (R717) compressors.",
    publicShortDescription_ar:
      "زيت تبريد شبه اصطناعي بدرجة لزوجة ISO VG 68 لضواغط الأمونيا (R717).",
    publicLongDescription_en:
      "A superior semi-synthetic refrigeration oil, designed for ammonia compressors using R717 gas. It features special additives for oxidation inhibition, corrosion protection, and enhanced low-temperature performance, and can also be used as a coolant for process-gas rotary screw and reciprocating compressors. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "زيت تبريد شبه اصطناعي متفوق، مصمم لضواغط الأمونيا التي تستخدم غاز R717. يحتوي على إضافات خاصة لمنع الأكسدة والحماية من التآكل وتحسين الأداء في درجات الحرارة المنخفضة، ويمكن استخدامه أيضًا كمبرّد لضواغط الغاز اللولبية والترددية. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE MOL-FREEZ ULTRA 68",
    },
    sectorId: "lubricants-oils",
    categoryId: "refrigeration-oils",
    features_en: [
      "Exceptionally low carry-over",
      "Lower maintenance costs",
      "Great seal compatibility",
    ],
    features_ar: [
      "معدل ترحيل منخفض للغاية",
      "تكاليف صيانة أقل",
      "توافق ممتاز مع الأختام (seals)",
    ],
    applications_en: [
      "Compatible with CFC and Ammonia refrigerant gases",
      "Normal refrigeration gases such as ammonia, Freon 12, Freon 22",
    ],
    applications_ar: [
      "متوافق مع غازات التبريد CFC والأمونيا",
      "غازات التبريد التقليدية مثل الأمونيا وفريون 12 وفريون 22",
    ],
    specifications: [
      {
        label_en: "Color",
        label_ar: "اللون",
        value: "L0.5 (ASTM D 1500)",
        group_en: "ISO VG 68",
        group_ar: "درجة اللزوجة ISO VG 68",
      },
      {
        label_en: DENSITY_EN,
        label_ar: DENSITY_AR,
        value: "0.830 g/cm³",
        group_en: "ISO VG 68",
        group_ar: "درجة اللزوجة ISO VG 68",
      },
      {
        label_en: KV40_EN,
        label_ar: KV40_AR,
        value: "68 cSt",
        group_en: "ISO VG 68",
        group_ar: "درجة اللزوجة ISO VG 68",
      },
      {
        label_en: KV100_EN,
        label_ar: KV100_AR,
        value: "10.85 cSt",
        group_en: "ISO VG 68",
        group_ar: "درجة اللزوجة ISO VG 68",
      },
      {
        label_en: VI_EN,
        label_ar: VI_AR,
        value: "150",
        group_en: "ISO VG 68",
        group_ar: "درجة اللزوجة ISO VG 68",
      },
      {
        label_en: FLASH_EN,
        label_ar: FLASH_AR,
        value: "250°C",
        group_en: "ISO VG 68",
        group_ar: "درجة اللزوجة ISO VG 68",
      },
      {
        label_en: POUR_EN,
        label_ar: POUR_AR,
        value: "-42°C",
        group_en: "ISO VG 68",
        group_ar: "درجة اللزوجة ISO VG 68",
      },
    ],
    relatedProductSlugs: [
      "mollube-mol-freez-m",
      "mollube-mol-freez-pao",
      "mollube-mol-freez-e",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-freez-ultra-68-datasheet",
        title_en:
          "Semi-Synthetic Ammonia Refrigeration Oil — ISO VG 68 Datasheet",
        title_ar: "نشرة بيانات زيت تبريد شبه اصطناعي للأمونيا — ISO VG 68",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "Semi-Synthetic Ammonia Refrigeration Oil — ISO VG 68 Supplier Egypt",
      title_ar: "مورد زيت تبريد شبه اصطناعي للأمونيا — ISO VG 68 في مصر",
      description_en:
        "GOLTENS supplies semi-synthetic refrigeration oil for ammonia compressors (ISO VG 68), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت تبريد شبه اصطناعي لضواغط الأمونيا (ISO VG 68)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-freez-pao",
    slug: "mollube-mol-freez-pao",
    name_en: "MOLLUBE MOL-FREEZ PAO Series",
    name_ar: "MOLLUBE MOL-FREEZ PAO Series",
    shortDescription_en:
      "MOLLUBE MOL-FREEZ PAO Series — fully synthetic PAO refrigeration oil, ISO VG 150 and 220, for large refrigeration compressors.",
    shortDescription_ar:
      "سلسلة MOLLUBE MOL-FREEZ PAO — زيت تبريد اصطناعي بالكامل من نوع PAO، بدرجتي لزوجة ISO VG 150 و220، لضواغط التبريد الكبيرة.",
    longDescription_en:
      "MOL-FREEZ PAO Series is MOLLUBE's fully synthetic refrigeration oil, designed for large refrigeration compressors and fully compatible with CFC and Ammonia refrigerant gases. It is formulated with top-quality PAO (Polyalphaolefin) base stock, allowing the oil to operate safely at very low temperatures. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "سلسلة MOL-FREEZ PAO هي زيت تبريد اصطناعي بالكامل من MOLLUBE، مصمم لضواغط التبريد الكبيرة ومتوافق تمامًا مع غازات التبريد CFC والأمونيا. يُصنّع من مادة PAO (بولي ألفا أوليفين) عالية الجودة، مما يتيح للزيت العمل بأمان في درجات حرارة منخفضة جدًا. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Synthetic PAO Refrigeration Oil — ISO VG 150/220",
    publicName_ar: "زيت تبريد اصطناعي PAO — ISO VG 150/220",
    publicShortDescription_en:
      "Fully synthetic PAO refrigeration oil, ISO VG 150 and 220, for large refrigeration compressors.",
    publicShortDescription_ar:
      "زيت تبريد اصطناعي بالكامل من نوع PAO، بدرجتي لزوجة ISO VG 150 و220، لضواغط التبريد الكبيرة.",
    publicLongDescription_en:
      "A fully synthetic refrigeration oil, designed for large refrigeration compressors and fully compatible with CFC and Ammonia refrigerant gases. It is formulated with top-quality PAO (Polyalphaolefin) base stock, allowing the oil to operate safely at very low temperatures. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "زيت تبريد اصطناعي بالكامل، مصمم لضواغط التبريد الكبيرة ومتوافق تمامًا مع غازات التبريد CFC والأمونيا. يُصنّع من مادة PAO (بولي ألفا أوليفين) عالية الجودة، مما يتيح للزيت العمل بأمان في درجات حرارة منخفضة جدًا. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE MOL-FREEZ PAO Series",
    },
    sectorId: "lubricants-oils",
    categoryId: "refrigeration-oils",
    features_en: [
      "Exceptionally low carry-over improves evaporator efficiency",
      "Low maintenance costs due to extended oil change intervals",
      "Outstanding low temperature performance",
      "Very good compatibility with seals",
    ],
    features_ar: [
      "معدل ترحيل منخفض للغاية يحسّن كفاءة المبخّر",
      "تكاليف صيانة منخفضة بفضل فترات تغيير زيت أطول",
      "أداء متميز في درجات الحرارة المنخفضة",
      "توافق ممتاز مع الأختام (seals)",
    ],
    applications_en: [
      "Compatible with CFC and Ammonia refrigerant gases",
      "Normal refrigeration gases such as ammonia, Freon 12, Freon 22",
    ],
    applications_ar: [
      "متوافق مع غازات التبريد CFC والأمونيا",
      "غازات التبريد التقليدية مثل الأمونيا وفريون 12 وفريون 22",
    ],
    specifications: [
      ...buildGradeSpecifications(MOL_FREEZ_PAO_GRADE_ROWS),
      {
        label_en: "Neutralization Value",
        label_ar: "قيمة التعادل",
        value: "<0.10 mgKOH/g",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "mollube-mol-freez-m",
      "mollube-mol-freez-ultra-68",
      "mollube-mol-freez-e",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-freez-pao-datasheet",
        title_en: "Synthetic PAO Refrigeration Oil — ISO VG 150/220 Datasheet",
        title_ar: "نشرة بيانات زيت تبريد اصطناعي PAO — ISO VG 150/220",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "Synthetic PAO Refrigeration Oil — ISO VG 150/220 Supplier Egypt",
      title_ar: "مورد زيت تبريد اصطناعي PAO — ISO VG 150/220 في مصر",
      description_en:
        "GOLTENS supplies fully synthetic PAO refrigeration oil (ISO VG 150-220), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت تبريد اصطناعي PAO (ISO VG 150-220)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-freez-e",
    slug: "mollube-mol-freez-e",
    name_en: "MOLLUBE MOL-FREEZ E Series",
    name_ar: "MOLLUBE MOL-FREEZ E Series",
    shortDescription_en:
      "MOLLUBE MOL-FREEZ E Series — fully synthetic POE refrigeration oil, ISO VG 22 to 370, for HFC/CFC/HCFC refrigeration and air conditioning compressors.",
    shortDescription_ar:
      "سلسلة MOLLUBE MOL-FREEZ E — زيت تبريد اصطناعي بالكامل من نوع POE، بدرجات لزوجة ISO VG من 22 إلى 370، لضواغط التبريد وتكييف الهواء العاملة بغازات HFC وCFC وHCFC.",
    longDescription_en:
      "MOL-FREEZ E Series is MOLLUBE's fully synthetic range of refrigeration lubricants, formulated with high-quality polyol esters (POE) for refrigeration and air conditioning compressors. It is designed to be compatible with a wide variety of refrigerants, including HFCs such as R404A, R407C, R410A, R507A, R509A, and R509B, as well as CFC and HCFC refrigerants, delivering excellent thermal stability, chemical inertness, and superior lubrication properties. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "سلسلة MOL-FREEZ E هي مجموعة زيوت تبريد اصطناعية بالكامل من MOLLUBE، مصنّعة من إسترات البوليول (POE) عالية الجودة لضواغط التبريد وتكييف الهواء. مصممة لتكون متوافقة مع مجموعة واسعة من غازات التبريد، بما في ذلك غازات HFC مثل R404A وR407C وR410A وR507A وR509A وR509B، بالإضافة إلى غازات CFC وHCFC، وتوفر ثباتًا حراريًا ممتازًا وخمولًا كيميائيًا وخصائص تشحيم متفوقة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    publicName_en: "Synthetic POE Refrigeration Oil — ISO VG 22-370",
    publicName_ar: "زيت تبريد اصطناعي POE — ISO VG 22-370",
    publicShortDescription_en:
      "Fully synthetic POE refrigeration oil, ISO VG 22 to 370, for HFC/CFC/HCFC refrigeration and air conditioning compressors.",
    publicShortDescription_ar:
      "زيت تبريد اصطناعي بالكامل من نوع POE، بدرجات لزوجة ISO VG من 22 إلى 370، لضواغط التبريد وتكييف الهواء العاملة بغازات HFC وCFC وHCFC.",
    publicLongDescription_en:
      "A fully synthetic range of refrigeration lubricants, formulated with high-quality polyol esters (POE) for refrigeration and air conditioning compressors. It is designed to be compatible with a wide variety of refrigerants, including HFCs such as R404A, R407C, R410A, R507A, R509A, and R509B, as well as CFC and HCFC refrigerants, delivering excellent thermal stability, chemical inertness, and superior lubrication properties. Available for supply through GOLTENS, matched to your equipment specification.",
    publicLongDescription_ar:
      "مجموعة زيوت تبريد اصطناعية بالكامل، مصنّعة من إسترات البوليول (POE) عالية الجودة لضواغط التبريد وتكييف الهواء. مصممة لتكون متوافقة مع مجموعة واسعة من غازات التبريد، بما في ذلك غازات HFC مثل R404A وR407C وR410A وR507A وR509A وR509B، بالإضافة إلى غازات CFC وHCFC، وتوفر ثباتًا حراريًا ممتازًا وخمولًا كيميائيًا وخصائص تشحيم متفوقة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE MOL-FREEZ E Series",
    },
    sectorId: "lubricants-oils",
    categoryId: "refrigeration-oils",
    features_en: [
      "Very good compatibility with seals",
      "High efficiency of the plant due to reduced oil deposits and long service life of filters",
      "Resistant to deposit formation, preventing valve deposits and dirty parts",
    ],
    features_ar: [
      "توافق ممتاز مع الأختام (seals)",
      "كفاءة عالية للمنشأة بفضل تقليل رواسب الزيت وإطالة عمر الفلاتر",
      "مقاوم لتكوّن الرواسب، ويمنع ترسبات الصمامات والأجزاء المتسخة",
    ],
    applications_en: [
      "Refrigeration and air conditioning compressors using HFC, CFC, or HCFC refrigerant systems",
    ],
    applications_ar: [
      "ضواغط التبريد وتكييف الهواء العاملة بأنظمة غازات HFC أو CFC أو HCFC",
    ],
    specifications: [
      ...buildGradeSpecifications(MOL_FREEZ_E_GRADE_ROWS),
      {
        label_en: "Neutralization Value",
        label_ar: "قيمة التعادل",
        value: "<0.01 mgKOH/g",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Cu Corrosion (100°C, 3h)",
        label_ar: "تآكل النحاس (100°م، 3 ساعات)",
        value: "1a",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Water Content",
        label_ar: "محتوى الماء",
        value: "Max. 5 ppm",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "mollube-mol-freez-m",
      "mollube-mol-freez-ultra-68",
      "mollube-mol-freez-pao",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-freez-e-datasheet",
        title_en: "Synthetic POE Refrigeration Oil — ISO VG 22-370 Datasheet",
        title_ar: "نشرة بيانات زيت تبريد اصطناعي POE — ISO VG 22-370",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "Synthetic POE Refrigeration Oil — ISO VG 22-370 Supplier Egypt",
      title_ar: "مورد زيت تبريد اصطناعي POE — ISO VG 22-370 في مصر",
      description_en:
        "GOLTENS supplies fully synthetic POE refrigeration oil (ISO VG 22-370), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت تبريد اصطناعي POE (ISO VG 22-370)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
];
