import type { Product, ProductSpecification } from "@/data/products/types";

/**
 * MOLLUBE Batch M1 — first 4 MOLLUBE family products added to the
 * Lubricants & Oils catalog. Every description, feature, application, and
 * technical value below is taken directly from MOLLUBE's own supplied
 * catalogues (verified page-by-page before implementation):
 *  - "MOLLUBE Catalog Engine oil and Greases for Truck 2026.pdf", p.5 —
 *    MOL-PROHYDRO HLP (corrected source — see note on the product below)
 *  - "MOLLUBE Gear Oils 2024.pdf", p.2-3 — MOL-GLO SY, MOL-GLO PG, MOL-GEAR
 *
 * MOL-PROHYDRO HLP source correction: "Mollube Engine Oil & Grease .pdf",
 * p.4 also documents this product, as a single consolidated "46-68" entry
 * (VI 96-110.7, Pour -29/-21, Flash 220-230, Foaming 10/0) rather than
 * discrete grades. That data was originally used here at first M1
 * implementation. The 2026 Truck catalogue was later found to document the
 * same product with an explicit 32/46/68 grade-specific table instead, and
 * per approved review that version now supersedes the consolidated one
 * below — the older figures are intentionally not shown on the public
 * product page, kept only in this comment for provenance.
 *
 * GOLTENS is supplying these products, not representing MOLLUBE as an
 * authorized distributor/agent/partner — every product uses neutral
 * "available for supply" / "request a quote" language only.
 *
 * The industrial MOL-GEAR Series here (CLP-class, ISO VG 46-1000, from the
 * Gear Oils catalogue) is a distinct product line from MOLLUBE's automotive
 * MOL-GEAR axle gear oils (SAE 90/140/75W90/80W90/85W140, from the Engine
 * Oil & Grease catalogue) — the automotive line is intentionally NOT
 * included in this batch.
 *
 * Grade-specific technical tables are built from literal per-grade tuples
 * (`GRADE_ROWS` below in each block) matching the source PDF tables
 * column-for-column, then expanded into the flat `ProductSpecification[]`
 * shape via `buildGradeSpecifications()` — this guarantees each grade's
 * values stay attached to that exact grade rather than risking a
 * transcription slip across ~90 hand-written objects. No value is
 * computed, normalized, or interpolated; every cell is copied as printed.
 */

interface GradeRow {
  grade: string;
  densityAt15C: string;
  kvAt40C: string;
  kvAt100C: string;
  viscosityIndex: string;
  flashPointCoc: string;
  pourPoint: string;
  antiCorrosionTest: string;
  copperCorrosion: string;
  fzgScuffingTest: string;
}

function buildGradeSpecifications(rows: GradeRow[]): ProductSpecification[] {
  return rows.flatMap((row) => {
    const group_en = `ISO VG ${row.grade}`;
    const group_ar = `درجة اللزوجة ISO VG ${row.grade}`;
    return [
      {
        label_en: "Density @ 15°C",
        label_ar: "الكثافة عند 15°م",
        value: `${row.densityAt15C} g/cm³`,
        group_en,
        group_ar,
      },
      {
        label_en: "Kinematic Viscosity @ 40°C",
        label_ar: "اللزوجة الحركية عند 40°م",
        value: `${row.kvAt40C} cSt`,
        group_en,
        group_ar,
      },
      {
        label_en: "Kinematic Viscosity @ 100°C",
        label_ar: "اللزوجة الحركية عند 100°م",
        value: `${row.kvAt100C} cSt`,
        group_en,
        group_ar,
      },
      {
        label_en: "Viscosity Index",
        label_ar: "مؤشر اللزوجة",
        value: row.viscosityIndex,
        group_en,
        group_ar,
      },
      {
        label_en: "Flash Point (COC)",
        label_ar: "نقطة الوميض (COC)",
        value: `${row.flashPointCoc}°C`,
        group_en,
        group_ar,
      },
      {
        label_en: "Pour Point",
        label_ar: "نقطة الانسكاب",
        value: `${row.pourPoint}°C`,
        group_en,
        group_ar,
      },
      {
        label_en: "Anti-corrosion Test",
        label_ar: "اختبار مقاومة التآكل",
        value: row.antiCorrosionTest,
        group_en,
        group_ar,
      },
      {
        label_en: "Copper Corrosion (3h @ 100°C)",
        label_ar: "تآكل النحاس (3 ساعات عند 100°م)",
        value: row.copperCorrosion,
        group_en,
        group_ar,
      },
      {
        label_en: "FZG Scuffing Test (Fail Load Stage)",
        label_ar: "اختبار FZG لتحمّل الحمل (مرحلة الفشل)",
        value: row.fzgScuffingTest,
        group_en,
        group_ar,
      },
    ];
  });
}

// MOLLUBE Gear Oils 2024.pdf, p.2 — "MOL- GLO SY SERIES" table, both halves.
const MOL_GLO_SY_GRADE_ROWS: GradeRow[] = [
  {
    grade: "46",
    densityAt15C: "0.86",
    kvAt40C: "46",
    kvAt100C: "8",
    viscosityIndex: "165",
    flashPointCoc: "225",
    pourPoint: "-51",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "68",
    densityAt15C: "0.86",
    kvAt40C: "68",
    kvAt100C: "11.6",
    viscosityIndex: "165",
    flashPointCoc: "225",
    pourPoint: "-51",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "100",
    densityAt15C: "0.86",
    kvAt40C: "100",
    kvAt100C: "15.3",
    viscosityIndex: "162",
    flashPointCoc: "235",
    pourPoint: "-45",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "150",
    densityAt15C: "0.86",
    kvAt40C: "150",
    kvAt100C: "21.1",
    viscosityIndex: "166",
    flashPointCoc: "240",
    pourPoint: "-36",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "220",
    densityAt15C: "0.87",
    kvAt40C: "220",
    kvAt100C: "28.5",
    viscosityIndex: "169",
    flashPointCoc: "241",
    pourPoint: "-36",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "320",
    densityAt15C: "0.87",
    kvAt40C: "320",
    kvAt100C: "38.5",
    viscosityIndex: "172",
    flashPointCoc: "245",
    pourPoint: "-33",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "460",
    densityAt15C: "0.904",
    kvAt40C: "460",
    kvAt100C: "50.7",
    viscosityIndex: "174",
    flashPointCoc: "245",
    pourPoint: "-30",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "680",
    densityAt15C: "0.912",
    kvAt40C: "680",
    kvAt100C: "69",
    viscosityIndex: "181",
    flashPointCoc: "245",
    pourPoint: "-30",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "1000",
    densityAt15C: "0.932",
    kvAt40C: "1000",
    kvAt100C: "98.8",
    viscosityIndex: "184",
    flashPointCoc: "245",
    pourPoint: "-25",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  // As printed in source: density and VI both dip at 3200 vs 680/1000, and FZG reads >13 here vs >12 for every other grade — preserved exactly, not smoothed.
  {
    grade: "3200",
    densityAt15C: "0.890",
    kvAt40C: "3200",
    kvAt100C: "183",
    viscosityIndex: "165",
    flashPointCoc: "235",
    pourPoint: "-10",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">13",
  },
];

// MOLLUBE Gear Oils 2024.pdf, p.2-3 — "MOL- GLO PG SERIES" table.
const MOL_GLO_PG_GRADE_ROWS: GradeRow[] = [
  {
    grade: "46",
    densityAt15C: "1.04",
    kvAt40C: "46",
    kvAt100C: "14",
    viscosityIndex: ">140",
    flashPointCoc: "230",
    pourPoint: "-41",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "68",
    densityAt15C: "1.04",
    kvAt40C: "68",
    kvAt100C: "15.5",
    viscosityIndex: ">150",
    flashPointCoc: "230",
    pourPoint: "-41",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "100",
    densityAt15C: "1.04",
    kvAt40C: "100",
    kvAt100C: "20.5",
    viscosityIndex: ">150",
    flashPointCoc: "230",
    pourPoint: "-41",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "150",
    densityAt15C: "1.03",
    kvAt40C: "150",
    kvAt100C: "26.5",
    viscosityIndex: "190",
    flashPointCoc: "265",
    pourPoint: "-40",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "220",
    densityAt15C: "1.02",
    kvAt40C: "220",
    kvAt100C: "35",
    viscosityIndex: "202",
    flashPointCoc: "279",
    pourPoint: "-40",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "320",
    densityAt15C: "1.02",
    kvAt40C: "320",
    kvAt100C: "50",
    viscosityIndex: "228",
    flashPointCoc: "272",
    pourPoint: "-39",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "460",
    densityAt15C: "1.01",
    kvAt40C: "460",
    kvAt100C: "73",
    viscosityIndex: "236",
    flashPointCoc: "270",
    pourPoint: "-37",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "680",
    densityAt15C: "1.08",
    kvAt40C: "680",
    kvAt100C: "105",
    viscosityIndex: "260",
    flashPointCoc: "261",
    pourPoint: "-37",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "1000",
    densityAt15C: "1.06",
    kvAt40C: "1000",
    kvAt100C: "170",
    viscosityIndex: "272",
    flashPointCoc: "272",
    pourPoint: "-30",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
];

// MOLLUBE Gear Oils 2024.pdf, p.3 — "MOL- GEAR SERIES" table (industrial CLP-class line).
const MOL_GEAR_GRADE_ROWS: GradeRow[] = [
  {
    grade: "46",
    densityAt15C: "0.887",
    kvAt40C: "46",
    kvAt100C: "7.7",
    viscosityIndex: "99",
    flashPointCoc: "236",
    pourPoint: "-24",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "68",
    densityAt15C: "0.887",
    kvAt40C: "68",
    kvAt100C: "8.7",
    viscosityIndex: "99",
    flashPointCoc: "236",
    pourPoint: "-24",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "100",
    densityAt15C: "0.891",
    kvAt40C: "100",
    kvAt100C: "11.4",
    viscosityIndex: "100",
    flashPointCoc: "240",
    pourPoint: "-24",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "150",
    densityAt15C: "0.897",
    kvAt40C: "150",
    kvAt100C: "15",
    viscosityIndex: "100",
    flashPointCoc: "240",
    pourPoint: "-24",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "220",
    densityAt15C: "0.897",
    kvAt40C: "220",
    kvAt100C: "19.4",
    viscosityIndex: "100",
    flashPointCoc: "240",
    pourPoint: "-18",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "320",
    densityAt15C: "0.903",
    kvAt40C: "320",
    kvAt100C: "25",
    viscosityIndex: "100",
    flashPointCoc: "255",
    pourPoint: "-15",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "460",
    densityAt15C: "0.904",
    kvAt40C: "460",
    kvAt100C: "30.8",
    viscosityIndex: "97",
    flashPointCoc: "260",
    pourPoint: "-12",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "680",
    densityAt15C: "0.912",
    kvAt40C: "680",
    kvAt100C: "38",
    viscosityIndex: "92",
    flashPointCoc: "272",
    pourPoint: "-9",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
  {
    grade: "1000",
    densityAt15C: "0.931",
    kvAt40C: "1000",
    kvAt100C: "45.5",
    viscosityIndex: "85",
    flashPointCoc: "290",
    pourPoint: "-6",
    antiCorrosionTest: "Passes",
    copperCorrosion: "1B",
    fzgScuffingTest: ">12",
  },
];

export const mollubeBatchM1: Product[] = [
  {
    id: "mollube-mol-prohydro-hlp",
    slug: "mollube-mol-prohydro-hlp",
    name_en: "MOLLUBE MOL-PROHYDRO HLP",
    name_ar: "MOLLUBE MOL-PROHYDRO HLP",
    shortDescription_en:
      "MOLLUBE MOL-PROHYDRO HLP — high-performance anti-wear hydraulic oil (ISO VG 32/46/68) for moderate to severe mobile and industrial hydraulic systems.",
    shortDescription_ar:
      "MOLLUBE MOL-PROHYDRO HLP — زيت هيدروليكي مضاد للتآكل عالي الأداء (ISO VG 32/46/68) للأنظمة الهيدروليكية المتنقلة والصناعية متوسطة إلى شديدة التحميل.",
    longDescription_en:
      "MOL-PROHYDRO HLP is MOLLUBE's high-performance anti-wear hydraulic oil, offering superior protection and fluid properties for moderate to severe mobile and industrial hydraulic systems, across ISO VG 32, 46, and 68 grades. Available for supply from GOLTENS, matched to your equipment manufacturer's specification.",
    longDescription_ar:
      "MOL-PROHYDRO HLP هو زيت هيدروليكي مضاد للتآكل عالي الأداء من MOLLUBE، يوفر حماية وخصائص سائلة متفوقة للأنظمة الهيدروليكية المتنقلة والصناعية متوسطة إلى شديدة التحميل، بدرجات لزوجة ISO VG 32 و46 و68. متوفر للتوريد من GOLTENS، مطابقًا لمواصفات الجهة المصنّعة لمعداتكم.",
    publicName_en: "Anti-Wear Hydraulic Oil — ISO VG 32/46/68",
    publicName_ar: "زيت هيدروليكي مضاد للتآكل — ISO VG 32/46/68",
    publicShortDescription_en:
      "High-performance anti-wear hydraulic oil (ISO VG 32/46/68) for moderate to severe mobile and industrial hydraulic systems.",
    publicShortDescription_ar:
      "زيت هيدروليكي مضاد للتآكل عالي الأداء (ISO VG 32/46/68) للأنظمة الهيدروليكية المتنقلة والصناعية متوسطة إلى شديدة التحميل.",
    publicLongDescription_en:
      "A high-performance anti-wear hydraulic oil, offering superior protection and fluid properties for moderate to severe mobile and industrial hydraulic systems, across ISO VG 32, 46, and 68 grades. Available for supply from GOLTENS, matched to your equipment manufacturer's specification.",
    publicLongDescription_ar:
      "زيت هيدروليكي مضاد للتآكل عالي الأداء، يوفر حماية وخصائص سائلة متفوقة للأنظمة الهيدروليكية المتنقلة والصناعية متوسطة إلى شديدة التحميل، بدرجات لزوجة ISO VG 32 و46 و68. متوفر للتوريد من GOLTENS، مطابقًا لمواصفات الجهة المصنّعة لمعداتكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE MOL-PROHYDRO HLP",
    },
    sectorId: "lubricants-oils",
    categoryId: "hydraulic-oils",
    applications_en: [
      "Moderate to severe duty mobile hydraulic systems",
      "Moderate to severe duty industrial hydraulic systems",
    ],
    applications_ar: [
      "الأنظمة الهيدروليكية المتنقلة متوسطة إلى شديدة التحميل",
      "الأنظمة الهيدروليكية الصناعية متوسطة إلى شديدة التحميل",
    ],
    // MOLLUBE Catalog Engine oil and Greases for Truck 2026.pdf, p.5 —
    // "MOL-PROHYDRO HLP (Series)", explicit 32/46/68 grade table. No
    // Foaming value is stated for this table (that field only appeared in
    // the superseded consolidated-range source — see file header note).
    specifications: [
      {
        label_en: "Viscosity Index",
        label_ar: "مؤشر اللزوجة",
        value: "99",
        group_en: "ISO VG 32",
        group_ar: "درجة اللزوجة ISO VG 32",
      },
      {
        label_en: "Pour Point",
        label_ar: "نقطة الانسكاب",
        value: "-30°C",
        group_en: "ISO VG 32",
        group_ar: "درجة اللزوجة ISO VG 32",
      },
      {
        label_en: "Flash Point",
        label_ar: "نقطة الوميض",
        value: "219°C",
        group_en: "ISO VG 32",
        group_ar: "درجة اللزوجة ISO VG 32",
      },
      {
        label_en: "Viscosity Index",
        label_ar: "مؤشر اللزوجة",
        value: "98",
        group_en: "ISO VG 46",
        group_ar: "درجة اللزوجة ISO VG 46",
      },
      {
        label_en: "Pour Point",
        label_ar: "نقطة الانسكاب",
        value: "-29°C",
        group_en: "ISO VG 46",
        group_ar: "درجة اللزوجة ISO VG 46",
      },
      {
        label_en: "Flash Point",
        label_ar: "نقطة الوميض",
        value: "232°C",
        group_en: "ISO VG 46",
        group_ar: "درجة اللزوجة ISO VG 46",
      },
      {
        label_en: "Viscosity Index",
        label_ar: "مؤشر اللزوجة",
        value: "97",
        group_en: "ISO VG 68",
        group_ar: "درجة اللزوجة ISO VG 68",
      },
      {
        label_en: "Pour Point",
        label_ar: "نقطة الانسكاب",
        value: "-23°C",
        group_en: "ISO VG 68",
        group_ar: "درجة اللزوجة ISO VG 68",
      },
      {
        label_en: "Flash Point",
        label_ar: "نقطة الوميض",
        value: "238°C",
        group_en: "ISO VG 68",
        group_ar: "درجة اللزوجة ISO VG 68",
      },
    ],
    relatedProductSlugs: [
      "hydraulic-fluids",
      "mobil-dte-24",
      "castrol-hyspin-aws-46",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-prohydro-hlp-datasheet",
        title_en: "Anti-Wear Hydraulic Oil — ISO VG 32/46/68 Datasheet",
        title_ar: "نشرة بيانات زيت هيدروليكي مضاد للتآكل — ISO VG 32/46/68",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Anti-Wear Hydraulic Oil — ISO VG 32/46/68 Supplier Egypt",
      title_ar: "مورد زيت هيدروليكي مضاد للتآكل — ISO VG 32/46/68 في مصر",
      description_en:
        "GOLTENS supplies anti-wear hydraulic oil (ISO VG 32/46/68), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيتًا هيدروليكيًا مضادًا للتآكل (ISO VG 32/46/68)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-glo-sy",
    slug: "mollube-mol-glo-sy",
    name_en: "MOLLUBE MOL-GLO SY Series",
    name_ar: "MOLLUBE MOL-GLO SY Series",
    shortDescription_en:
      "MOLLUBE MOL-GLO SY Series — fully synthetic PAO-based industrial gear oil, ISO VG 46 to 3200, for heavy-duty, severe-service gears and anti-friction bearings.",
    shortDescription_ar:
      "سلسلة MOLLUBE MOL-GLO SY — زيت تروس صناعي اصطناعي بالكامل قائم على PAO، بدرجات لزوجة ISO VG من 46 إلى 3200، للتروس والمحامل المضادة للاحتكاك في التطبيقات شديدة التحميل.",
    longDescription_en:
      "MOL-GLO SY Series is MOLLUBE's fully synthetic industrial gear oil, based on specially selected Polyalpha Olefin (PAO) base fluids, offering very high oxidation and temperature stability and a naturally high viscosity index for use across a wide temperature range. Designed for the lubrication of gears, especially for heavy-duty, severe-service applications, including industrial gears (spur, helical and bevel) and anti-friction bearings (plain or rolling). Available across ISO VG 46, 68, 100, 150, 220, 320, 460, 680, 1000, and 3200 grades, supplied by GOLTENS matched to your gearbox manufacturer's specification.",
    longDescription_ar:
      "سلسلة MOL-GLO SY هي زيت تروس صناعي اصطناعي بالكامل من MOLLUBE، قائم على زيوت أساسية من نوع بولي ألفا أوليفين (PAO) مختارة بعناية، ويوفر ثباتًا عاليًا جدًا ضد الأكسدة ودرجة الحرارة، مع مؤشر لزوجة طبيعي مرتفع يسمح باستخدامه ضمن نطاق واسع من درجات الحرارة. مصمم لتشحيم التروس، خاصة في التطبيقات شديدة التحميل والخدمة القاسية، بما في ذلك التروس الصناعية (المستقيمة والحلزونية والمخروطية) والمحامل المضادة للاحتكاك (السطحية أو الدوارة). متوفر بدرجات لزوجة ISO VG من 46 إلى 3200، وتوفره GOLTENS مطابقًا لمواصفات الجهة المصنّعة لعلبة التروس لديكم.",
    publicName_en: "Synthetic PAO Industrial Gear Oil — ISO VG 46-3200",
    publicName_ar: "زيت تروس صناعي اصطناعي PAO — ISO VG 46-3200",
    publicShortDescription_en:
      "Fully synthetic PAO-based industrial gear oil, ISO VG 46 to 3200, for heavy-duty, severe-service gears and anti-friction bearings.",
    publicShortDescription_ar:
      "زيت تروس صناعي اصطناعي بالكامل قائم على PAO، بدرجات لزوجة ISO VG من 46 إلى 3200، للتروس والمحامل المضادة للاحتكاك في التطبيقات شديدة التحميل.",
    publicLongDescription_en:
      "A fully synthetic industrial gear oil, based on specially selected Polyalpha Olefin (PAO) base fluids, offering very high oxidation and temperature stability and a naturally high viscosity index for use across a wide temperature range. Designed for the lubrication of gears, especially for heavy-duty, severe-service applications, including industrial gears (spur, helical and bevel) and anti-friction bearings (plain or rolling). Available across ISO VG 46, 68, 100, 150, 220, 320, 460, 680, 1000, and 3200 grades, supplied by GOLTENS matched to your gearbox manufacturer's specification.",
    publicLongDescription_ar:
      "زيت تروس صناعي اصطناعي بالكامل، قائم على زيوت أساسية من نوع بولي ألفا أوليفين (PAO) مختارة بعناية، ويوفر ثباتًا عاليًا جدًا ضد الأكسدة ودرجة الحرارة، مع مؤشر لزوجة طبيعي مرتفع يسمح باستخدامه ضمن نطاق واسع من درجات الحرارة. مصمم لتشحيم التروس، خاصة في التطبيقات شديدة التحميل والخدمة القاسية، بما في ذلك التروس الصناعية (المستقيمة والحلزونية والمخروطية) والمحامل المضادة للاحتكاك (السطحية أو الدوارة). متوفر بدرجات لزوجة ISO VG من 46 إلى 3200، وتوفره GOLTENS مطابقًا لمواصفات الجهة المصنّعة لعلبة التروس لديكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE MOL-GLO SY Series",
      sourceDocument: "MOLLUBE Gear Oils 2024.pdf",
    },
    sectorId: "lubricants-oils",
    categoryId: "gear-oils-category",
    features_en: [
      "Excellent wear protection",
      "High scuffing load carrying capacity",
      "Very high resistance to micro pitting",
      "Very low foaming",
    ],
    features_ar: [
      "حماية ممتازة ضد التآكل",
      "قدرة عالية على تحمّل حمل التخدش (scuffing)",
      "مقاومة عالية جدًا للتآكل الدقيق (micro pitting)",
      "رغوة منخفضة جدًا",
    ],
    applications_en: [
      "Lubrication of gears, especially for heavy-duty, severe-service applications",
      "Industrial gears (spur, helical and bevel)",
      "Anti-friction bearings (plain or rolling)",
    ],
    applications_ar: [
      "تشحيم التروس، خاصة في التطبيقات شديدة التحميل والخدمة القاسية",
      "التروس الصناعية (مستقيمة وحلزونية ومخروطية)",
      "المحامل المضادة للاحتكاك (سطحية أو دوارة)",
    ],
    specifications: buildGradeSpecifications(MOL_GLO_SY_GRADE_ROWS),
    relatedProductSlugs: [
      "gear-oils",
      "mobilgear-600-xp-220",
      "mollube-mol-glo-pg",
      "mollube-mol-gear",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-glo-sy-datasheet",
        title_en:
          "Synthetic PAO Industrial Gear Oil — ISO VG 46-3200 Datasheet",
        title_ar: "نشرة بيانات زيت تروس صناعي اصطناعي PAO — ISO VG 46-3200",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "Synthetic PAO Industrial Gear Oil — ISO VG 46-3200 Supplier Egypt",
      title_ar: "مورد زيت تروس صناعي اصطناعي PAO — ISO VG 46-3200 في مصر",
      description_en:
        "GOLTENS supplies synthetic PAO industrial gear oil (ISO VG 46-3200), available for supply and matched to your gearbox specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت تروس صناعي اصطناعي PAO (ISO VG 46-3200)، متوفر للتوريد ومطابق لمواصفات علبة التروس لديكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-glo-pg",
    slug: "mollube-mol-glo-pg",
    name_en: "MOLLUBE MOL-GLO PG Series",
    name_ar: "MOLLUBE MOL-GLO PG Series",
    shortDescription_en:
      "MOLLUBE MOL-GLO PG Series — fully synthetic polyglycol-based industrial gear oil, ISO VG 46 to 1000, specifically designed for worm gears and heavy-duty, severe-service applications.",
    shortDescription_ar:
      "سلسلة MOLLUBE MOL-GLO PG — زيت تروس صناعي اصطناعي بالكامل قائم على البولي جلايكول، بدرجات لزوجة ISO VG من 46 إلى 1000، مصمم خصيصًا للتروس الدودية والتطبيقات شديدة التحميل.",
    longDescription_en:
      "MOL-GLO PG Series is MOLLUBE's fully synthetic industrial gear oil, based on specially selected polyglycol base oils, offering very high oxidation and temperature stability and a naturally high viscosity index for use across a wide temperature range. Specifically designed for the lubrication of worm gears, and suitable for many types of industrial gears and anti-friction bearings, especially for heavy-duty, severe-service applications. Available across ISO VG 46, 68, 100, 150, 220, 320, 460, 680, and 1000 grades, supplied by GOLTENS matched to your gearbox manufacturer's specification.",
    longDescription_ar:
      "سلسلة MOL-GLO PG هي زيت تروس صناعي اصطناعي بالكامل من MOLLUBE، قائم على زيوت بولي جلايكول أساسية مختارة بعناية، ويوفر ثباتًا عاليًا جدًا ضد الأكسدة ودرجة الحرارة، مع مؤشر لزوجة طبيعي مرتفع يسمح باستخدامه ضمن نطاق واسع من درجات الحرارة. مصمم خصيصًا لتشحيم التروس الدودية، ومناسب للعديد من أنواع التروس الصناعية والمحامل المضادة للاحتكاك، خاصة في التطبيقات شديدة التحميل والخدمة القاسية. متوفر بدرجات لزوجة ISO VG من 46 إلى 1000، وتوفره GOLTENS مطابقًا لمواصفات الجهة المصنّعة لعلبة التروس لديكم.",
    publicName_en: "Synthetic Polyglycol Industrial Gear Oil — ISO VG 46-1000",
    publicName_ar: "زيت تروس صناعي اصطناعي من البولي جلايكول — ISO VG 46-1000",
    publicShortDescription_en:
      "Fully synthetic polyglycol-based industrial gear oil, ISO VG 46 to 1000, specifically designed for worm gears and heavy-duty, severe-service applications.",
    publicShortDescription_ar:
      "زيت تروس صناعي اصطناعي بالكامل قائم على البولي جلايكول، بدرجات لزوجة ISO VG من 46 إلى 1000، مصمم خصيصًا للتروس الدودية والتطبيقات شديدة التحميل.",
    publicLongDescription_en:
      "A fully synthetic industrial gear oil, based on specially selected polyglycol base oils, offering very high oxidation and temperature stability and a naturally high viscosity index for use across a wide temperature range. Specifically designed for the lubrication of worm gears, and suitable for many types of industrial gears and anti-friction bearings, especially for heavy-duty, severe-service applications. Available across ISO VG 46, 68, 100, 150, 220, 320, 460, 680, and 1000 grades, supplied by GOLTENS matched to your gearbox manufacturer's specification.",
    publicLongDescription_ar:
      "زيت تروس صناعي اصطناعي بالكامل، قائم على زيوت بولي جلايكول أساسية مختارة بعناية، ويوفر ثباتًا عاليًا جدًا ضد الأكسدة ودرجة الحرارة، مع مؤشر لزوجة طبيعي مرتفع يسمح باستخدامه ضمن نطاق واسع من درجات الحرارة. مصمم خصيصًا لتشحيم التروس الدودية، ومناسب للعديد من أنواع التروس الصناعية والمحامل المضادة للاحتكاك، خاصة في التطبيقات شديدة التحميل والخدمة القاسية. متوفر بدرجات لزوجة ISO VG من 46 إلى 1000، وتوفره GOLTENS مطابقًا لمواصفات الجهة المصنّعة لعلبة التروس لديكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE MOL-GLO PG Series",
      sourceDocument: "MOLLUBE Gear Oils 2024.pdf",
    },
    sectorId: "lubricants-oils",
    categoryId: "gear-oils-category",
    features_en: [
      "Excellent air release",
      "Excellent wear protection",
      "Very high resistance to micro pitting",
      "Increase of efficiency, reduction of temperature, and low friction coefficient",
    ],
    features_ar: [
      "تحرر ممتاز للهواء",
      "حماية ممتازة ضد التآكل",
      "مقاومة عالية جدًا للتآكل الدقيق (micro pitting)",
      "زيادة الكفاءة وخفض درجة الحرارة ومعامل احتكاك منخفض",
    ],
    applications_en: [
      "Specifically designed for the lubrication of worm gears",
      "Many types of industrial gears and anti-friction bearings",
      "Heavy-duty, severe-service applications",
    ],
    applications_ar: [
      "مصمم خصيصًا لتشحيم التروس الدودية",
      "العديد من أنواع التروس الصناعية والمحامل المضادة للاحتكاك",
      "التطبيقات شديدة التحميل والخدمة القاسية",
    ],
    specifications: buildGradeSpecifications(MOL_GLO_PG_GRADE_ROWS),
    relatedProductSlugs: [
      "gear-oils",
      "mollube-mol-glo-sy",
      "mollube-mol-gear",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-glo-pg-datasheet",
        title_en:
          "Synthetic Polyglycol Industrial Gear Oil — ISO VG 46-1000 Datasheet",
        title_ar:
          "نشرة بيانات زيت تروس صناعي اصطناعي من البولي جلايكول — ISO VG 46-1000",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "Synthetic Polyglycol Industrial Gear Oil — ISO VG 46-1000 Supplier Egypt",
      title_ar:
        "مورد زيت تروس صناعي اصطناعي من البولي جلايكول — ISO VG 46-1000 في مصر",
      description_en:
        "GOLTENS supplies synthetic polyglycol industrial gear oil (ISO VG 46-1000), available for supply and matched to your gearbox specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت تروس صناعي اصطناعي من البولي جلايكول (ISO VG 46-1000)، متوفر للتوريد ومطابق لمواصفات علبة التروس لديكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-gear",
    slug: "mollube-mol-gear",
    name_en: "MOLLUBE MOL-GEAR Series",
    name_ar: "MOLLUBE MOL-GEAR Series",
    shortDescription_en:
      "MOLLUBE MOL-GEAR Series — CLP-class extreme-pressure industrial gear oil, ISO VG 46 to 1000, for enclosed industrial gears under extreme-pressure performance.",
    shortDescription_ar:
      "سلسلة MOLLUBE MOL-GEAR — زيت تروس صناعي من فئة CLP بخاصية الضغط العالي، بدرجات لزوجة ISO VG من 46 إلى 1000، للتروس الصناعية المغلقة تحت أداء الضغط العالي.",
    longDescription_en:
      "MOL-GEAR Series are MOLLUBE's CLP-class, high-performance extreme-pressure industrial gear oils, blended from high-quality base stocks with a sulphur-phosphorus type extreme-pressure additive. Suitable for a wide range of industrial spur, helical, bevel, and steel-on-steel worm gears, and for enclosed gears operating under extreme-pressure performance. Available across ISO VG 46, 68, 100, 150, 220, 320, 460, 680, and 1000 grades, supplied by GOLTENS matched to your gearbox manufacturer's specification. This is MOLLUBE's industrial gear-oil line — MOLLUBE separately offers an automotive axle gear-oil range (SAE 90, 140, 75W-90, 80W-90, 85W-140), which is not part of this catalog entry.",
    longDescription_ar:
      "سلسلة MOL-GEAR هي زيوت تروس صناعية من فئة CLP عالية الأداء وبخاصية الضغط العالي من MOLLUBE، مصنّعة من مواد أساسية عالية الجودة مع إضافة مقاومة للضغط العالي من نوع الكبريت-الفوسفور. مناسبة لمجموعة واسعة من التروس الصناعية المستقيمة والحلزونية والمخروطية والتروس الدودية من الفولاذ على الفولاذ، وللتروس المغلقة العاملة تحت أداء الضغط العالي. متوفرة بدرجات لزوجة ISO VG من 46 إلى 1000، وتوفرها GOLTENS مطابقة لمواصفات الجهة المصنّعة لعلبة التروس لديكم. هذه هي خط زيوت التروس الصناعية من MOLLUBE — وتقدّم MOLLUBE بشكل منفصل مجموعة زيوت تروس للمحاور الآلية (SAE 90، 140، 75W-90، 80W-90، 85W-140)، وهي ليست جزءًا من هذا السجل في الكتالوج.",
    publicName_en: "CLP Extreme-Pressure Industrial Gear Oil — ISO VG 46-1000",
    publicName_ar:
      "زيت تروس صناعي من فئة CLP بخاصية الضغط العالي — ISO VG 46-1000",
    publicShortDescription_en:
      "CLP-class extreme-pressure industrial gear oil, ISO VG 46 to 1000, for enclosed industrial gears under extreme-pressure performance.",
    publicShortDescription_ar:
      "زيت تروس صناعي من فئة CLP بخاصية الضغط العالي، بدرجات لزوجة ISO VG من 46 إلى 1000، للتروس الصناعية المغلقة تحت أداء الضغط العالي.",
    publicLongDescription_en:
      "A CLP-class, high-performance extreme-pressure industrial gear oil, blended from high-quality base stocks with a sulphur-phosphorus type extreme-pressure additive. Suitable for a wide range of industrial spur, helical, bevel, and steel-on-steel worm gears, and for enclosed gears operating under extreme-pressure performance. Available across ISO VG 46, 68, 100, 150, 220, 320, 460, 680, and 1000 grades, supplied by GOLTENS matched to your gearbox manufacturer's specification.",
    publicLongDescription_ar:
      "زيت تروس صناعي من فئة CLP عالي الأداء وبخاصية الضغط العالي، مصنّع من مواد أساسية عالية الجودة مع إضافة مقاومة للضغط العالي من نوع الكبريت-الفوسفور. مناسب لمجموعة واسعة من التروس الصناعية المستقيمة والحلزونية والمخروطية والتروس الدودية من الفولاذ على الفولاذ، وللتروس المغلقة العاملة تحت أداء الضغط العالي. متوفر بدرجات لزوجة ISO VG من 46 إلى 1000، وتوفره GOLTENS مطابقًا لمواصفات الجهة المصنّعة لعلبة التروس لديكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE MOL-GEAR Series",
      sourceDocument: "MOLLUBE Gear Oils 2024.pdf",
    },
    sectorId: "lubricants-oils",
    categoryId: "gear-oils-category",
    features_en: [
      "Excellent load carrying capability",
      "Excellent wear protection",
      "High thermo-oxidative stability",
      "Effective rust and corrosion protection",
    ],
    features_ar: [
      "قدرة تحمّل حمل ممتازة",
      "حماية ممتازة ضد التآكل",
      "ثبات حراري-أكسدي عالٍ",
      "حماية فعّالة من الصدأ والتآكل",
    ],
    applications_en: [
      "Wide range of industrial spur, helical, bevel, and steel-on-steel worm gears",
      "Enclosed gears operating under extreme-pressure performance",
    ],
    applications_ar: [
      "مجموعة واسعة من التروس الصناعية المستقيمة والحلزونية والمخروطية والتروس الدودية من الفولاذ على الفولاذ",
      "التروس المغلقة العاملة تحت أداء الضغط العالي",
    ],
    specifications: buildGradeSpecifications(MOL_GEAR_GRADE_ROWS),
    relatedProductSlugs: [
      "gear-oils",
      "mobilgear-600-xp-220",
      "mollube-mol-glo-sy",
      "mollube-mol-glo-pg",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-gear-datasheet",
        title_en:
          "CLP Extreme-Pressure Industrial Gear Oil — ISO VG 46-1000 Datasheet",
        title_ar:
          "نشرة بيانات زيت تروس صناعي من فئة CLP بخاصية الضغط العالي — ISO VG 46-1000",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "CLP Extreme-Pressure Industrial Gear Oil — ISO VG 46-1000 Supplier Egypt",
      title_ar:
        "مورد زيت تروس صناعي من فئة CLP بخاصية الضغط العالي — ISO VG 46-1000 في مصر",
      description_en:
        "GOLTENS supplies CLP extreme-pressure industrial gear oil (ISO VG 46-1000), available for supply and matched to your gearbox specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت تروس صناعي من فئة CLP بخاصية الضغط العالي (ISO VG 46-1000)، متوفر للتوريد ومطابق لمواصفات علبة التروس لديكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
];
