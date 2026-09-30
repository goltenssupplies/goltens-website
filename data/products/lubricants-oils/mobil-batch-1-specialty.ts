import type { Product, ProductSpecification } from "@/data/products/types";

/**
 * Mobil Batch 1 (Specialty) — Mobil DTE FM Series, added to the existing
 * `specialty-industrial-lubricants` category (already populated by the
 * generic "Industrial Lubricating Oils" product, left untouched).
 *
 * Source of truth: the official Mobil DTE FM Series PDS
 * (exxonmobil.com/en/apps/pds/mobil/industrial/.../glxxmobil-dte-fm-series),
 * verified per the approved MOBIL BATCH 1 — OFFICIAL PDS VERIFICATION
 * REPORT. Every grade value below is copied exactly as printed in that
 * PDS. Density was not stated in the verified source for any grade and
 * is correctly omitted, not inferred; base oil chemistry is stated only
 * as "food grade additives and base oils," not further classified.
 *
 * Certification note, preserved exactly as the source distinguishes it:
 * NSF H1, FDA 21 CFR 178.3570, and ISO 21469 are product-level
 * certifications applying to the entire series. ISO 22000 is a
 * manufacturing-facility certification (the facility producing the
 * product is certified), NOT a certification of the lubricant itself —
 * this distinction is preserved below, not flattened into one
 * undifferentiated "certifications" claim.
 *
 * Category placement: `specialty-industrial-lubricants` was chosen by
 * elimination — the product's own stated applications span gear,
 * bearing, circulating, and hydraulic use, with no single existing
 * populated category cleanly fitting a food-grade multi-service oil; no
 * new category was created for this one family, per standing policy.
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

interface GradeRow {
  grade: string;
  kv40: string;
  kv100: string;
  vi: string;
  pour: string;
  flash: string;
}

const GRADE_ROWS: GradeRow[] = [
  {
    grade: "ISO VG 32 (FM 32)",
    kv40: "33.2",
    kv100: "5.5",
    vi: "106",
    pour: "-21",
    flash: "212",
  },
  {
    grade: "ISO VG 46 (FM 46)",
    kv40: "46.6",
    kv100: "7.0",
    vi: "105",
    pour: "-15",
    flash: "226",
  },
  {
    grade: "ISO VG 68 (FM 68)",
    kv40: "68.5",
    kv100: "8.7",
    vi: "101",
    pour: "-15",
    flash: "254",
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
    ];
  });
}

export const mobilBatch1Specialty: Product[] = [
  {
    id: "mobil-dte-fm-series",
    slug: "mobil-dte-fm-series",
    name_en: "Mobil DTE FM Series",
    name_ar: "Mobil DTE FM Series",
    shortDescription_en:
      "Mobil DTE FM Series — NSF H1 food-grade gear, bearing, circulating, and hydraulic oil, ISO VG 32/46/68, for food processing and packaging equipment.",
    shortDescription_ar:
      "سلسلة Mobil DTE FM — زيت تروس ومحامل ودوران وهيدروليك من الفئة الغذائية NSF H1، بدرجات لزوجة ISO VG 32/46/68، لمعدات تصنيع وتعبئة الأغذية.",
    longDescription_en:
      "Mobil DTE FM Series are food-grade gear, bearing, circulating, and hydraulic oils, available in ISO VG 32, 46, and 68 grades, for food processing and packaging industry equipment, fish processing and meat packing plants, compressors and vacuum pumps, air line lubricators, and numerically controlled (NC) machine tools. Available for supply through GOLTENS — request a quote for your application.",
    longDescription_ar:
      "سلسلة Mobil DTE FM هي زيوت تروس ومحامل ودوران وهيدروليك من الفئة الغذائية، متوفرة بدرجات لزوجة ISO VG 32 و46 و68، لمعدات صناعات تصنيع وتعبئة الأغذية، ومصانع معالجة الأسماك وتعبئة اللحوم، والضواغط ومضخات التفريغ، ومشحمات خطوط الهواء، وماكينات التحكم الرقمي (NC). متوفر للتوريد من خلال GOLTENS — اطلب عرض سعر لتطبيقكم.",
    sectorId: "lubricants-oils",
    categoryId: "specialty-industrial-lubricants",
    applications_en: [
      "Gear oils",
      "Bearing oils",
      "Circulating oils",
      "Hydraulic oils",
      "Food processing and packaging equipment",
      "Fish processing and meat packing plants",
      "Compressors and vacuum pumps",
      "Air line lubricators",
      "Numerically controlled (NC) machine tools",
    ],
    applications_ar: [
      "زيوت التروس",
      "زيوت المحامل",
      "زيوت الدوران",
      "الزيوت الهيدروليكية",
      "معدات تصنيع وتعبئة الأغذية",
      "مصانع معالجة الأسماك وتعبئة اللحوم",
      "الضواغط ومضخات التفريغ",
      "مشحمات خطوط الهواء",
      "ماكينات التحكم الرقمي (NC)",
    ],
    specifications: [
      ...buildGradeSpecifications(GRADE_ROWS),
      {
        label_en: "Base Oil Type",
        label_ar: "نوع الزيت الأساسي",
        value: "Food grade additives and base oils",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Product Certifications (Entire Series)",
        label_ar: "شهادات المنتج (كامل السلسلة)",
        value: "NSF H1; FDA 21 CFR 178.3570; ISO 21469",
        group_en: "Certifications",
        group_ar: "الشهادات",
      },
      {
        label_en: "Manufacturing Facility Certification",
        label_ar: "شهادة منشأة التصنيع",
        value:
          "ISO 22000 (certifies the manufacturing facility/process — not a certification of the lubricant product itself)",
        group_en: "Certifications",
        group_ar: "الشهادات",
      },
    ],
    relatedProductSlugs: ["hydraulic-fluids", "mobil-dte-24"],
    relatedBrandSlugs: ["mobil"],
    catalogues: [
      {
        id: "mobil-dte-fm-series-datasheet",
        title_en: "Mobil DTE FM Series Datasheet",
        title_ar: "نشرة بيانات سلسلة Mobil DTE FM",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Mobil DTE FM Series Food-Grade Lubricant Supplier Egypt",
      title_ar: "مورد زيت الفئة الغذائية سلسلة Mobil DTE FM في مصر",
      description_en:
        "GOLTENS supplies Mobil DTE FM Series NSF H1 food-grade gear, bearing, circulating, and hydraulic oil (ISO VG 32-68), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت الفئة الغذائية NSF H1 سلسلة Mobil DTE FM للتروس والمحامل والدوران والهيدروليك (ISO VG 32-68)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
];
