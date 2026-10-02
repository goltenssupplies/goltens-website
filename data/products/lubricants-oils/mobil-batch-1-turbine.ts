import type { Product, ProductSpecification } from "@/data/products/types";

/**
 * Mobil Batch 1 (Turbine) — Mobil DTE 800 Series, added to the existing
 * `turbine-oils` category (previously taxonomy-only, 0 products — this
 * batch is the first to populate it).
 *
 * Source of truth: the official Mobil DTE 800 Series PDS
 * (mobil.com/en-us/industrial/pds/gl-xx-mobil-dte-800-series), verified
 * per the approved MOBIL BATCH 1 — OFFICIAL PDS VERIFICATION REPORT.
 * Every grade value below is copied exactly as printed in that PDS.
 *
 * Mobil SHC 800 Series (the synthetic counterpart) is intentionally NOT
 * included in this batch — deferred pending the resolved-but-separate
 * TOST-life question being incorporated into its own future review.
 *
 * Base oil is stated only as "High-quality hydrotreated" — not further
 * classified (no Group I/II/III claim invented). Standards/approvals are
 * stated once for both grades, not differentiated per grade in the
 * source.
 *
 * GOLTENS is supplying this product, not representing Mobil/ExxonMobil
 * as an authorized distributor/agent/partner — neutral "available for
 * supply" / "request a quote" language only.
 */

const KV40_EN = "Kinematic Viscosity @ 40°C";
const KV40_AR = "اللزوجة الحركية عند 40°م";
const KV100_EN = "Kinematic Viscosity @ 100°C";
const KV100_AR = "اللزوجة الحركية عند 100°م";
const VI_EN = "Viscosity Index";
const VI_AR = "مؤشر اللزوجة";
const POUR_EN = "Pour Point";
const POUR_AR = "نقطة الانسكاب";
const FLASH_EN = "Flash Point";
const FLASH_AR = "نقطة الوميض";
const DENSITY_EN = "Density @ 15.6°C";
const DENSITY_AR = "الكثافة عند 15.6°م";

interface GradeRow {
  grade: string;
  kv40: string;
  kv100: string;
  vi: string;
  pour: string;
  flash: string;
  density: string;
}

const GRADE_ROWS: GradeRow[] = [
  {
    // Phase 6B-3: `grade` only ever feeds `group_en`/`group_ar` below (see
    // `buildGradeSpecifications`) — never a spec `value` or `label`. Was
    // "DTE 832 (ISO VG 32)"; the branded grade-family code is dropped,
    // the ISO VG value (the only technical fact it carried) is kept.
    grade: "ISO VG 32",
    kv40: "29.6",
    kv100: "5.4",
    vi: "110",
    pour: "-30",
    flash: "224",
    density: "0.87",
  },
  {
    // Was "DTE 846 (ISO VG 46)" — same Phase 6B-3 correction as above.
    grade: "ISO VG 46",
    kv40: "42.4",
    kv100: "6.2",
    vi: "106",
    pour: "-30",
    flash: "244",
    density: "0.86",
  },
];

function buildGradeSpecifications(rows: GradeRow[]): ProductSpecification[] {
  return rows.flatMap((row) => {
    const group_en = row.grade;
    const group_ar = row.grade;
    return [
      {
        label_en: KV40_EN,
        label_ar: KV40_AR,
        value: `${row.kv40} mm²/s`,
        group_en,
        group_ar,
      },
      {
        label_en: KV100_EN,
        label_ar: KV100_AR,
        value: `${row.kv100} mm²/s`,
        group_en,
        group_ar,
      },
      { label_en: VI_EN, label_ar: VI_AR, value: row.vi, group_en, group_ar },
      {
        label_en: POUR_EN,
        label_ar: POUR_AR,
        value: `${row.pour}°C`,
        group_en,
        group_ar,
      },
      {
        label_en: FLASH_EN,
        label_ar: FLASH_AR,
        value: `${row.flash}°C`,
        group_en,
        group_ar,
      },
      {
        label_en: DENSITY_EN,
        label_ar: DENSITY_AR,
        value: `${row.density} g/cm³`,
        group_en,
        group_ar,
      },
    ];
  });
}

export const mobilBatch1Turbine: Product[] = [
  {
    id: "mobil-dte-800-series",
    slug: "mobil-dte-800-series",
    name_en: "Mobil DTE 800 Series",
    name_ar: "Mobil DTE 800 Series",
    shortDescription_en:
      "Mobil DTE 800 Series — turbine oils, ISO VG 32 and 46, for steam turbines, gas turbines, and combined-cycle gas turbine (CCGT) applications.",
    shortDescription_ar:
      "سلسلة Mobil DTE 800 — زيوت توربينات، بدرجتي لزوجة ISO VG 32 و46، للتوربينات البخارية وتوربينات الغاز وتطبيقات الدورة المركبة (CCGT).",
    longDescription_en:
      "Mobil DTE 800 Series are turbine oils, available in DTE 832 (ISO VG 32) and DTE 846 (ISO VG 46) grades, for steam turbines, gas turbines, and combined-cycle gas turbine (CCGT) applications, including electric power generation, natural gas pipeline transmission, and cogeneration plants. Available for supply through GOLTENS — request a quote for your application.",
    longDescription_ar:
      "سلسلة Mobil DTE 800 هي زيوت توربينات، متوفرة بدرجتي DTE 832 (ISO VG 32) وDTE 846 (ISO VG 46)، للتوربينات البخارية وتوربينات الغاز وتطبيقات الدورة المركبة لتوربينات الغاز (CCGT)، بما في ذلك توليد الطاقة الكهربائية ونقل الغاز الطبيعي عبر الأنابيب ومحطات التوليد المشترك. متوفر للتوريد من خلال GOLTENS — اطلب عرض سعر لتطبيقكم.",
    // Phase 6B-1 — manufacturer-neutral public identity. NOTE: the
    // `specifications` array below still uses "DTE 832 (ISO VG 32)"/
    // "DTE 846 (ISO VG 46)" as grade group labels — per Phase 6B-1's
    // instruction to preserve technical specifications exactly, this was
    // NOT touched, so the public spec table still shows "DTE" grade
    // codes. Flagged in the migration report as a residual exposure the
    // Phase 8 leakage scanner does not check (it scans identity/SEO/
    // catalogue fields only, not `specifications`).
    publicName_en: "Turbine Oil — ISO VG 32/46",
    publicName_ar: "زيت توربينات — ISO VG 32/46",
    publicShortDescription_en:
      "Turbine oils, ISO VG 32 and 46, for steam turbines, gas turbines, and combined-cycle gas turbine (CCGT) applications.",
    publicShortDescription_ar:
      "زيوت توربينات، بدرجتي لزوجة ISO VG 32 و46، للتوربينات البخارية وتوربينات الغاز وتطبيقات الدورة المركبة (CCGT).",
    publicLongDescription_en:
      "Turbine oils, available in ISO VG 32 and ISO VG 46 grades, for steam turbines, gas turbines, and combined-cycle gas turbine (CCGT) applications, including electric power generation, natural gas pipeline transmission, and cogeneration plants. Available for supply through GOLTENS — request a quote for your application.",
    publicLongDescription_ar:
      "زيوت توربينات، متوفرة بدرجتي لزوجة ISO VG 32 وISO VG 46، للتوربينات البخارية وتوربينات الغاز وتطبيقات الدورة المركبة لتوربينات الغاز (CCGT)، بما في ذلك توليد الطاقة الكهربائية ونقل الغاز الطبيعي عبر الأنابيب ومحطات التوليد المشترك. متوفر للتوريد من خلال GOLTENS — اطلب عرض سعر لتطبيقكم.",
    sourcing: {
      manufacturer: "Mobil",
      originalProductName_en: "Mobil DTE 800 Series",
    },
    sectorId: "lubricants-oils",
    categoryId: "turbine-oils",
    applications_en: [
      "Steam turbines",
      "Gas turbines",
      "Combined-cycle gas turbine (CCGT) applications",
      "Electric power generation",
      "Natural gas pipeline transmission",
      "Cogeneration plants",
    ],
    applications_ar: [
      "التوربينات البخارية",
      "توربينات الغاز",
      "تطبيقات الدورة المركبة لتوربينات الغاز (CCGT)",
      "توليد الطاقة الكهربائية",
      "نقل الغاز الطبيعي عبر الأنابيب",
      "محطات التوليد المشترك",
    ],
    specifications: [
      ...buildGradeSpecifications(GRADE_ROWS),
      {
        label_en: "Base Oil Type",
        label_ar: "نوع الزيت الأساسي",
        value: "High-quality hydrotreated",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standards / Approvals",
        label_ar: "المعايير والاعتمادات",
        value:
          "DIN 51515-1:2010-02; DIN 51515-2:2010-02; GE Power GEK 28143B; Siemens TLV 9013 04/05; JIS K-2213 Type 2; Solar Turbines ES 9-224 Class II",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    relatedBrandSlugs: ["mobil"],
    catalogues: [
      {
        id: "mobil-dte-800-series-datasheet",
        title_en: "Turbine Oil — ISO VG 32/46 Datasheet",
        title_ar: "نشرة بيانات زيت توربينات — ISO VG 32/46",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Turbine Oil — ISO VG 32/46 Supplier Egypt",
      title_ar: "مورد زيت توربينات — ISO VG 32/46 في مصر",
      description_en:
        "GOLTENS supplies turbine oil (ISO VG 32/46) for steam and gas turbines, available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت توربينات (ISO VG 32/46) للتوربينات البخارية وتوربينات الغاز، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
];
