import type { Product, ProductSpecification } from "@/data/products/types";

/**
 * Mobil Batch 1 (Hydraulic) — Mobil DTE 10 Excel Series, added to the
 * existing `hydraulic-oils` category (already populated by the generic
 * "Hydraulic Fluids" product and the branded `mobil-dte-24` and
 * `castrol-hyspin-aws-46`, all left untouched).
 *
 * Source of truth: the official Mobil DTE 10 Excel Series PDS
 * (mobil.com/en-us/industrial/pds/na-xx-mobil-dte-10-excel-series),
 * verified per the approved MOBIL BATCH 1 — OFFICIAL PDS VERIFICATION
 * REPORT. Every grade value below is copied exactly as printed in that
 * PDS — no value computed, normalized, or interpolated.
 *
 * This is a distinct product line from the already-implemented
 * `mobil-dte-24` (Mobil DTE 20 Series, a conventional anti-wear hydraulic
 * oil) — DTE 20 Series itself is intentionally NOT added in this batch
 * (explicit exclusion, per approval, due to the DTE 24/DTE 20 Series
 * duplication question left for a separate decision).
 *
 * Base oil is stated in the source only as "Synthetic Technology
 * Hydraulic Oils" — not further classified (no Group I/II/III claim
 * invented). Standards/approvals are stated once, for the whole series,
 * not per grade.
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
const DENSITY_EN = "Density @ 15°C";
const DENSITY_AR = "الكثافة عند 15°م";

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
    grade: "ISO VG 15",
    kv40: "15.0",
    kv100: "3.9",
    vi: "164",
    pour: "-57",
    flash: "210",
    density: "0.840",
  },
  {
    grade: "ISO VG 22",
    kv40: "22.0",
    kv100: "5.0",
    vi: "164",
    pour: "-54",
    flash: "215",
    density: "0.842",
  },
  {
    grade: "ISO VG 32",
    kv40: "31.5",
    kv100: "6.5",
    vi: "164",
    pour: "-48",
    flash: "225",
    density: "0.845",
  },
  {
    grade: "ISO VG 46",
    kv40: "45.7",
    kv100: "8.4",
    vi: "163",
    pour: "-45",
    flash: "230",
    density: "0.8516",
  },
  {
    grade: "ISO VG 68",
    kv40: "66.9",
    kv100: "10.9",
    vi: "155",
    pour: "-42",
    flash: "260",
    density: "0.859",
  },
  {
    grade: "ISO VG 100",
    kv40: "97.0",
    kv100: "13.0",
    vi: "132",
    pour: "-40",
    flash: "260",
    density: "0.869",
  },
  {
    grade: "ISO VG 150",
    kv40: "148.0",
    kv100: "17.2",
    vi: "121",
    pour: "-38",
    flash: "270",
    density: "0.884",
  },
];

function buildGradeSpecifications(rows: GradeRow[]): ProductSpecification[] {
  return rows.flatMap((row) => {
    const group_en = row.grade;
    const group_ar = `درجة اللزوجة ${row.grade.replace("ISO VG ", "ISO VG ")}`;
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
        value: `${row.density} kg/l`,
        group_en,
        group_ar,
      },
    ];
  });
}

export const mobilBatch1Hydraulic: Product[] = [
  {
    id: "mobil-dte-10-excel-series",
    slug: "mobil-dte-10-excel-series",
    name_en: "Mobil DTE 10 Excel Series",
    name_ar: "Mobil DTE 10 Excel Series",
    shortDescription_en:
      "Mobil DTE 10 Excel Series — synthetic technology hydraulic oils, ISO VG 15 to 150, for high-pressure industrial and mobile equipment hydraulic systems.",
    shortDescription_ar:
      "سلسلة Mobil DTE 10 Excel — زيوت هيدروليكية بتقنية اصطناعية، بدرجات لزوجة ISO VG من 15 إلى 150، لأنظمة هيدروليكية صناعية ومتنقلة عالية الضغط.",
    longDescription_en:
      "Mobil DTE 10 Excel Series are synthetic technology hydraulic oils, available across ISO VG 15, 22, 32, 46, 68, 100, and 150 grades, for industrial and mobile equipment hydraulic systems operating under high pressure, including CNC machines with servo-valves, and applications requiring wide operating temperature range and enhanced anti-wear protection. Available for supply through GOLTENS — request a quote for your application.",
    longDescription_ar:
      "سلسلة Mobil DTE 10 Excel هي زيوت هيدروليكية بتقنية اصطناعية، متوفرة بدرجات لزوجة ISO VG 15 و22 و32 و46 و68 و100 و150، للأنظمة الهيدروليكية الصناعية والمعدات المتنقلة العاملة تحت ضغط عالٍ، بما في ذلك ماكينات CNC ذات الصمامات التتبعية (servo-valves)، والتطبيقات التي تتطلب نطاق تشغيل واسع لدرجة الحرارة وحماية معززة ضد التآكل. متوفر للتوريد من خلال GOLTENS — اطلب عرض سعر لتطبيقكم.",
    sectorId: "lubricants-oils",
    categoryId: "hydraulic-oils",
    applications_en: [
      "Industrial and mobile equipment hydraulic systems under high pressure",
      "CNC machines with servo-valves",
      "Systems requiring wide temperature range operation",
      "Enhanced anti-wear protection",
    ],
    applications_ar: [
      "الأنظمة الهيدروليكية الصناعية والمعدات المتنقلة تحت ضغط عالٍ",
      "ماكينات CNC ذات الصمامات التتبعية (servo-valves)",
      "الأنظمة التي تتطلب نطاق تشغيل واسع لدرجة الحرارة",
      "حماية معززة ضد التآكل",
    ],
    specifications: [
      ...buildGradeSpecifications(GRADE_ROWS),
      {
        label_en: "Base Oil Type",
        label_ar: "نوع الزيت الأساسي",
        value: "Synthetic Technology Hydraulic Oils",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "ISO L-HV (ISO 11158:2023); DIN 51524-2:2017-06; ASTM D6158 (Class HVHP); China GB 11118.1-2011 L-HM variants",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    relatedProductSlugs: ["hydraulic-fluids", "mobil-dte-24"],
    relatedBrandSlugs: ["mobil"],
    catalogues: [
      {
        id: "mobil-dte-10-excel-series-datasheet",
        title_en: "Mobil DTE 10 Excel Series Datasheet",
        title_ar: "نشرة بيانات سلسلة Mobil DTE 10 Excel",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Mobil DTE 10 Excel Series Hydraulic Oil Supplier Egypt",
      title_ar: "مورد زيت هيدروليكي سلسلة Mobil DTE 10 Excel في مصر",
      description_en:
        "GOLTENS supplies Mobil DTE 10 Excel Series synthetic technology hydraulic oil (ISO VG 15-150), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت الهيدروليك بتقنية اصطناعية سلسلة Mobil DTE 10 Excel (ISO VG 15-150)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
];
