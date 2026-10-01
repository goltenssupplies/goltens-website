import type { Product, ProductSpecification } from "@/data/products/types";

/**
 * MOLLUBE Batch M3 (Automotive Gear Oil) — 1 MOLLUBE automotive GL-5 gear
 * oil family added to the existing `gear-oils-category`, from
 * "MOLLUBE Catalog Engine oil and Greases for Truck 2026.pdf", p.7.
 *
 * This is a distinct product line from the already-implemented
 * `mollube-mol-gear` (M1, ISO VG 46-1000 CLP-class industrial gear oil,
 * from "MOLLUBE Gear Oils 2024.pdf") — that product remains completely
 * untouched by this batch. The two lines share only the "MOL-GEAR" brand
 * name in MOLLUBE's own naming; this automotive family covers SAE-graded,
 * API GL-5 axle/differential service, not industrial CLP-class gearing.
 *
 * Source structure: the Mono Grade table (SAE 90/140) prints a single
 * Flash Point value (250°C) spanning both grades in a merged cell — this
 * is omitted rather than assigned to either grade, per approved decision.
 * API GL-5 is stated explicitly only in the Mono Grade paragraph
 * ("provide excellent performance where API GL-5 service is required")
 * and is not restated in the Multi Grade paragraph — included only for
 * the Mono Grade groups below, not duplicated onto Multi Grade without
 * source support.
 *
 * GOLTENS is supplying this product, not representing MOLLUBE as an
 * authorized distributor/agent/partner/manufacturer — neutral "available
 * for supply" / "request a quote" language only.
 */

const DENSITY_EN = "Density @ 15°C";
const DENSITY_AR = "الكثافة عند 15°م";
const KV100_EN = "Kinematic Viscosity @ 100°C";
const KV100_AR = "اللزوجة الحركية عند 100°م";
const VI_EN = "Viscosity Index";
const VI_AR = "مؤشر اللزوجة";
const FLASH_EN = "Flash Point";
const FLASH_AR = "نقطة الوميض";
const POUR_EN = "Pour Point";
const POUR_AR = "نقطة الانسكاب";

const monoGradeSpecs: ProductSpecification[] = [
  {
    label_en: "API Classification",
    label_ar: "تصنيف API",
    value: "GL-5",
    group_en: "Mono Grade 90",
    group_ar: "الدرجة الأحادية 90",
  },
  {
    label_en: VI_EN,
    label_ar: VI_AR,
    value: "126",
    group_en: "Mono Grade 90",
    group_ar: "الدرجة الأحادية 90",
  },
  {
    label_en: POUR_EN,
    label_ar: POUR_AR,
    value: "-28°C",
    group_en: "Mono Grade 90",
    group_ar: "الدرجة الأحادية 90",
  },
  {
    label_en: "API Classification",
    label_ar: "تصنيف API",
    value: "GL-5",
    group_en: "Mono Grade 140",
    group_ar: "الدرجة الأحادية 140",
  },
  {
    label_en: VI_EN,
    label_ar: VI_AR,
    value: "122",
    group_en: "Mono Grade 140",
    group_ar: "الدرجة الأحادية 140",
  },
  {
    label_en: POUR_EN,
    label_ar: POUR_AR,
    value: "-25°C",
    group_en: "Mono Grade 140",
    group_ar: "الدرجة الأحادية 140",
  },
];

interface MultiGradeRow {
  grade: string;
  density: string;
  kv100: string;
  vi: string;
  flash: string;
}

// Truck 2026 catalogue, p.7 — "MOL-GEAR (Multi Grade)" table.
const MULTI_GRADE_ROWS: MultiGradeRow[] = [
  {
    grade: "75W80",
    density: "0.880",
    kv100: "Min. 7.5",
    vi: "Min. 105",
    flash: "Min. 170",
  },
  {
    grade: "75W90",
    density: "0.885",
    kv100: "Min. 14.0",
    vi: "Min. 105",
    flash: "Min. 200",
  },
  {
    grade: "80W90",
    density: "0.885",
    kv100: "Min. 14.0",
    vi: "Min. 100",
    flash: "Min. 200",
  },
  {
    grade: "85W140",
    density: "0.895",
    kv100: "Min. 24.0",
    vi: "Min. 95",
    flash: "Min. 220",
  },
];

const multiGradeSpecs: ProductSpecification[] = MULTI_GRADE_ROWS.flatMap(
  (row) => {
    const group_en = `Multi Grade ${row.grade}`;
    const group_ar = `الدرجة المتعددة ${row.grade}`;
    return [
      {
        label_en: DENSITY_EN,
        label_ar: DENSITY_AR,
        value: `${row.density} g/ml`,
        group_en,
        group_ar,
      },
      {
        label_en: KV100_EN,
        label_ar: KV100_AR,
        value: `${row.kv100} cSt`,
        group_en,
        group_ar,
      },
      { label_en: VI_EN, label_ar: VI_AR, value: row.vi, group_en, group_ar },
      {
        label_en: FLASH_EN,
        label_ar: FLASH_AR,
        value: `${row.flash}°C`,
        group_en,
        group_ar,
      },
    ];
  },
);

export const mollubeBatchM3AutomotiveGear: Product[] = [
  {
    id: "mollube-mol-gear-automotive",
    slug: "mollube-mol-gear-automotive",
    name_en: "MOLLUBE MOL-GEAR Automotive",
    name_ar: "MOLLUBE MOL-GEAR Automotive",
    shortDescription_en:
      "MOLLUBE MOL-GEAR Automotive — heavy-duty API GL-5 automotive gear lubricant, mono-grade SAE 90/140 and multi-grade 75W80/75W90/80W90/85W140, for axles, final drives, and differentials.",
    shortDescription_ar:
      "MOLLUBE MOL-GEAR Automotive — زيت تروس سيارات شاق بتصنيف API GL-5، بدرجة أحادية SAE 90/140 ودرجات متعددة 75W80/75W90/80W90/85W140، للمحاور ووحدات الدفع النهائي والتروس التفاضلية.",
    longDescription_en:
      "MOL-GEAR Automotive is MOLLUBE's heavy-duty gear lubricant, formulated from high-performance base oils and an advanced additive system, engineered for automotive applications including heavy-duty axles and final drives where extreme pressures and shock loading are expected, providing excellent performance where API GL-5 service is required. The multi-grade line is produced by adding extreme-pressure (EP) resistant rust and wear preventive additives to paraffin-based base oils, for use in automotive differential, spur gear, and hypoid gears in passenger cars, trucks, and construction equipment operating under high-velocity/low-torque and low-velocity/high-torque conditions. This is a distinct product line from MOLLUBE's industrial MOL-GEAR Series (CLP-class, ISO VG 46-1000). Available for supply through GOLTENS, matched to your vehicle or equipment manufacturer's specification.",
    longDescription_ar:
      "MOL-GEAR Automotive هو زيت تروس شاق من MOLLUBE، مصنّع من زيوت أساسية عالية الأداء ونظام إضافات متقدم، مصمم للتطبيقات السيارات بما في ذلك المحاور ووحدات الدفع النهائي الشاقة حيث يُتوقع ضغط عالٍ وأحمال صدمية، ويوفر أداءً ممتازًا حيث تُطلب خدمة API GL-5. يتم إنتاج الدرجات المتعددة بإضافة مواد مضادة للضغط العالي (EP) ومانعة للصدأ والتآكل إلى زيوت أساسية بارافينية، للاستخدام في التروس التفاضلية والمستقيمة والهايبويد في السيارات الركاب والشاحنات ومعدات الإنشاءات العاملة تحت ظروف السرعة العالية/العزم المنخفض والسرعة المنخفضة/العزم العالي. هذا خط منتجات مختلف عن سلسلة MOL-GEAR الصناعية من MOLLUBE (فئة CLP، ISO VG 46-1000). متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات الجهة المصنّعة لمركبتكم أو معداتكم.",
    publicName_en:
      "API GL-5 Automotive Gear Lubricant — SAE 90/140, 75W80-85W140",
    publicName_ar: "زيت تروس سيارات API GL-5 — SAE 90/140، 75W80-85W140",
    publicShortDescription_en:
      "Heavy-duty API GL-5 automotive gear lubricant, mono-grade SAE 90/140 and multi-grade 75W80/75W90/80W90/85W140, for axles, final drives, and differentials.",
    publicShortDescription_ar:
      "زيت تروس سيارات شاق بتصنيف API GL-5، بدرجة أحادية SAE 90/140 ودرجات متعددة 75W80/75W90/80W90/85W140، للمحاور ووحدات الدفع النهائي والتروس التفاضلية.",
    publicLongDescription_en:
      "A heavy-duty gear lubricant, formulated from high-performance base oils and an advanced additive system, engineered for automotive applications including heavy-duty axles and final drives where extreme pressures and shock loading are expected, providing excellent performance where API GL-5 service is required. The multi-grade line is produced by adding extreme-pressure (EP) resistant rust and wear preventive additives to paraffin-based base oils, for use in automotive differential, spur gear, and hypoid gears in passenger cars, trucks, and construction equipment operating under high-velocity/low-torque and low-velocity/high-torque conditions. Available for supply through GOLTENS, matched to your vehicle or equipment manufacturer's specification.",
    publicLongDescription_ar:
      "زيت تروس شاق، مصنّع من زيوت أساسية عالية الأداء ونظام إضافات متقدم، مصمم للتطبيقات السيارات بما في ذلك المحاور ووحدات الدفع النهائي الشاقة حيث يُتوقع ضغط عالٍ وأحمال صدمية، ويوفر أداءً ممتازًا حيث تُطلب خدمة API GL-5. يتم إنتاج الدرجات المتعددة بإضافة مواد مضادة للضغط العالي (EP) ومانعة للصدأ والتآكل إلى زيوت أساسية بارافينية، للاستخدام في التروس التفاضلية والمستقيمة والهايبويد في السيارات الركاب والشاحنات ومعدات الإنشاءات العاملة تحت ظروف السرعة العالية/العزم المنخفض والسرعة المنخفضة/العزم العالي. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات الجهة المصنّعة لمركبتكم أو معداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE MOL-GEAR Automotive",
      sourceDocument:
        "MOLLUBE Catalog Engine oil and Greases for Truck 2026.pdf",
    },
    sectorId: "lubricants-oils",
    categoryId: "gear-oils-category",
    applications_en: [
      "Heavy-duty automotive axles and final drives under extreme pressures and shock loading",
      "Automotive differential, spur gear, and hypoid gears",
      "Passenger cars, trucks, and construction equipment",
      "High-velocity/low-torque and low-velocity/high-torque operating conditions",
    ],
    applications_ar: [
      "محاور ووحدات الدفع النهائي الشاقة للسيارات تحت الضغط العالي والأحمال الصدمية",
      "التروس التفاضلية والمستقيمة والهايبويد",
      "السيارات الركاب والشاحنات ومعدات الإنشاءات",
      "ظروف التشغيل بسرعة عالية/عزم منخفض وسرعة منخفضة/عزم عالٍ",
    ],
    specifications: [...monoGradeSpecs, ...multiGradeSpecs],
    relatedProductSlugs: ["gear-oils"],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-gear-automotive-datasheet",
        title_en:
          "API GL-5 Automotive Gear Lubricant — SAE 90/140, 75W80-85W140 Datasheet",
        title_ar:
          "نشرة بيانات زيت تروس سيارات API GL-5 — SAE 90/140، 75W80-85W140",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "API GL-5 Automotive Gear Lubricant — SAE 90/140, 75W80-85W140 Supplier Egypt",
      title_ar:
        "مورد زيت تروس سيارات API GL-5 — SAE 90/140، 75W80-85W140 في مصر",
      description_en:
        "GOLTENS supplies API GL-5 automotive gear lubricant (SAE 90/140, 75W80-85W140), available for supply and matched to your vehicle specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت تروس سيارات بتصنيف API GL-5 (SAE 90/140، 75W80-85W140)، متوفر للتوريد ومطابق لمواصفات مركبتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
];
