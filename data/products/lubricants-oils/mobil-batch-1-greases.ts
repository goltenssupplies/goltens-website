import type { Product } from "@/data/products/types";

/**
 * Mobil Batch 1 (Greases) — Mobilgrease XTC, Mobil Polyrex EP 2, and
 * Mobil SHC Polyrex EM (102/103), added to the existing `greases`
 * category (already populated by the generic "Industrial Greases"
 * product, `mobilux-ep-2-moly`, and the 13 MOLLUBE PROGUARD products,
 * all left untouched).
 *
 * Source of truth: official individual Mobil/ExxonMobil PDS pages for
 * each product, verified per the approved MOBIL BATCH 1 — OFFICIAL PDS
 * VERIFICATION REPORT. Every value below is copied exactly as printed in
 * the respective PDS — no value computed, normalized, or interpolated.
 * Flash point and density were not stated in the verified sources for
 * any of the three products and are correctly omitted, not inferred.
 *
 * Mobilux EP 2 Moly (already implemented) uses a lithium/MoS2 thickener
 * system — a genuinely different chemistry from all three products below
 * (lithium complex for XTC, polyurea for Polyrex EP 2 and SHC Polyrex
 * EM), confirmed not to be a duplicate.
 *
 * GOLTENS is supplying these products, not representing Mobil/ExxonMobil
 * as an authorized distributor/agent/partner — neutral "available for
 * supply" / "request a quote" language only.
 */

const NLGI_EN = "NLGI Grade";
const NLGI_AR = "درجة NLGI";
const THICKENER_EN = "Thickener";
const THICKENER_AR = "المادة السميكة";
const BASE_OIL_VISC_EN = "Base Oil Viscosity";
const BASE_OIL_VISC_AR = "لزوجة الزيت الأساسي";
const DROPPING_POINT_EN = "Dropping Point";
const DROPPING_POINT_AR = "نقطة السقوط";
const WORKED_PEN_EN = "Worked Penetration";
const WORKED_PEN_AR = "الاختراق المعالج";
const TEMP_EN = "Operating Temperature";
const TEMP_AR = "درجة حرارة التشغيل";
const COLOR_EN = "Color";
const COLOR_AR = "اللون";

export const mobilBatch1Greases: Product[] = [
  {
    id: "mobilgrease-xtc",
    slug: "mobilgrease-xtc",
    name_en: "Mobilgrease XTC",
    name_ar: "Mobilgrease XTC",
    shortDescription_en:
      "Mobilgrease XTC — NLGI 1 lithium complex coupling grease for grid-type and gear-type flexible couplings, meeting AGMA CG-1/CG-2/CG-3.",
    shortDescription_ar:
      "Mobilgrease XTC — شحم وصلات مركّب ليثيوم بدرجة NLGI 1، لوصلات المرونة الشبكية والمسننة، مطابق لمعايير AGMA CG-1/CG-2/CG-3.",
    longDescription_en:
      "Mobilgrease XTC is a lithium complex grease at NLGI 1, formulated for grid-type and gear-type flexible couplings and high-speed coupling applications, meeting AGMA CG-1, CG-2, and CG-3 specifications. Available for supply through GOLTENS — request a quote for your application.",
    longDescription_ar:
      "Mobilgrease XTC هو شحم مركّب ليثيوم بدرجة NLGI 1، مصمم لوصلات المرونة الشبكية والمسننة وتطبيقات الوصلات عالية السرعة، ومطابق لمعايير AGMA CG-1 وCG-2 وCG-3. متوفر للتوريد من خلال GOLTENS — اطلب عرض سعر لتطبيقكم.",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "Grid-type flexible couplings",
      "Gear-type flexible couplings",
      "High-speed coupling applications",
    ],
    applications_ar: [
      "وصلات المرونة الشبكية",
      "وصلات المرونة المسننة",
      "تطبيقات الوصلات عالية السرعة",
    ],
    specifications: [
      {
        label_en: NLGI_EN,
        label_ar: NLGI_AR,
        value: "1",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: THICKENER_EN,
        label_ar: THICKENER_AR,
        value: "Lithium complex",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_VISC_EN,
        label_ar: BASE_OIL_VISC_AR,
        value: "680 mm²/s @ 40°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: DROPPING_POINT_EN,
        label_ar: DROPPING_POINT_AR,
        value: "279°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: WORKED_PEN_EN,
        label_ar: WORKED_PEN_AR,
        value: "325 (60x, 0.1 mm)",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: TEMP_EN,
        label_ar: TEMP_AR,
        value: "Up to 120°C; not recommended below -30°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: COLOR_EN,
        label_ar: COLOR_AR,
        value: "Dark Brown",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value: "AGMA CG-1; AGMA CG-2; AGMA CG-3",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    relatedProductSlugs: ["industrial-greases", "mobil-polyrex-ep-2"],
    relatedBrandSlugs: ["mobil"],
    catalogues: [
      {
        id: "mobilgrease-xtc-datasheet",
        title_en: "Mobilgrease XTC Datasheet",
        title_ar: "نشرة بيانات Mobilgrease XTC",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Mobilgrease XTC Coupling Grease Supplier Egypt",
      title_ar: "مورد شحم وصلات Mobilgrease XTC في مصر",
      description_en:
        "GOLTENS supplies Mobilgrease XTC lithium complex coupling grease (NLGI 1), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم الوصلات Mobilgrease XTC المركب الليثيومي (NLGI 1)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mobil-polyrex-ep-2",
    slug: "mobil-polyrex-ep-2",
    name_en: "Mobil Polyrex EP 2",
    name_ar: "Mobil Polyrex EP 2",
    shortDescription_en:
      "Mobil Polyrex EP 2 — NLGI 2 polyurea multi-purpose grease for industrial and construction applications, including roller bearings and water-contaminated environments.",
    shortDescription_ar:
      "Mobil Polyrex EP 2 — شحم بولي يوريا متعدد الأغراض بدرجة NLGI 2، للتطبيقات الصناعية والإنشائية، بما في ذلك المحامل الأسطوانية والبيئات الملوثة بالماء.",
    longDescription_en:
      "Mobil Polyrex EP 2 is a polyurea grease at NLGI 2, an excellent multi-purpose grease for a wide array of industrial and construction applications, particularly suitable for roller bearings and heavily water-contaminated environments. Available for supply through GOLTENS — request a quote for your application.",
    longDescription_ar:
      "Mobil Polyrex EP 2 هو شحم بولي يوريا بدرجة NLGI 2، ممتاز ومتعدد الأغراض لمجموعة واسعة من التطبيقات الصناعية والإنشائية، مناسب بشكل خاص للمحامل الأسطوانية والبيئات شديدة التلوث بالماء. متوفر للتوريد من خلال GOLTENS — اطلب عرض سعر لتطبيقكم.",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "Industrial applications",
      "Construction applications",
      "Roller bearings",
      "Water-contaminated environments",
    ],
    applications_ar: [
      "التطبيقات الصناعية",
      "التطبيقات الإنشائية",
      "المحامل الأسطوانية",
      "البيئات الملوثة بالماء",
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
        value: "Polyurea",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_VISC_EN,
        label_ar: BASE_OIL_VISC_AR,
        value: "235 cSt @ 40°C; 18.4 cSt @ 100°C",
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
        label_en: WORKED_PEN_EN,
        label_ar: WORKED_PEN_AR,
        value: "310",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: TEMP_EN,
        label_ar: TEMP_AR,
        value: "-20°C to 160°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: COLOR_EN,
        label_ar: COLOR_AR,
        value: "Green",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "industrial-greases",
      "mobilgrease-xtc",
      "mobil-shc-polyrex-em",
    ],
    relatedBrandSlugs: ["mobil"],
    catalogues: [
      {
        id: "mobil-polyrex-ep-2-datasheet",
        title_en: "Mobil Polyrex EP 2 Datasheet",
        title_ar: "نشرة بيانات Mobil Polyrex EP 2",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Mobil Polyrex EP 2 Grease Supplier Egypt",
      title_ar: "مورد شحم Mobil Polyrex EP 2 في مصر",
      description_en:
        "GOLTENS supplies Mobil Polyrex EP 2 polyurea multi-purpose grease (NLGI 2), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم Mobil Polyrex EP 2 البولي يوريا متعدد الأغراض (NLGI 2)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mobil-shc-polyrex-em",
    slug: "mobil-shc-polyrex-em",
    name_en: "Mobil SHC Polyrex EM",
    name_ar: "Mobil SHC Polyrex EM",
    shortDescription_en:
      "Mobil SHC Polyrex EM — synthetic polyurea electric-motor bearing grease, NLGI 2 (102 EM) and NLGI 3 (103 EM), for sealed-for-life service up to 180°C.",
    shortDescription_ar:
      "Mobil SHC Polyrex EM — شحم بولي يوريا اصطناعي لمحامل المحركات الكهربائية، بدرجتي NLGI 2 (102 EM) وNLGI 3 (103 EM)، للخدمة المختومة مدى الحياة حتى 180°م.",
    longDescription_en:
      "Mobil SHC Polyrex EM is a synthetic polyurea grease for electric motor ball and roller bearings, fin fan bearings, high-temperature pump bearings, and factory-sealed bearings, for sealed-for-life applications up to 180°C. Available in 102 EM (NLGI 2) and 103 EM (NLGI 3, recommended for vertically mounted bearings, very large motors, and applications where a stiffer consistency is required by the manufacturer). Available for supply through GOLTENS — request a quote for your application.",
    longDescription_ar:
      "Mobil SHC Polyrex EM هو شحم بولي يوريا اصطناعي لمحامل المحركات الكهربائية الكروية والأسطوانية، ومحامل مراوح التبريد، ومحامل المضخات عالية الحرارة، والمحامل المختومة من المصنع، للتطبيقات المختومة مدى الحياة حتى 180°م. متوفر بدرجتي 102 EM (NLGI 2) و103 EM (NLGI 3، الموصى به للمحامل الرأسية والمحركات الكبيرة جدًا والتطبيقات التي تتطلب قوامًا أكثر صلابة وفق توصية الجهة المصنّعة). متوفر للتوريد من خلال GOLTENS — اطلب عرض سعر لتطبيقكم.",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    applications_en: [
      "Electric motor ball and roller bearings",
      "Fin fan bearings",
      "High-temperature pump bearings",
      "Factory-sealed bearings",
      "Vertically mounted bearings and very large motors (103 EM)",
    ],
    applications_ar: [
      "محامل المحركات الكهربائية الكروية والأسطوانية",
      "محامل مراوح التبريد",
      "محامل المضخات عالية الحرارة",
      "المحامل المختومة من المصنع",
      "المحامل الرأسية والمحركات الكبيرة جدًا (103 EM)",
    ],
    specifications: [
      {
        label_en: NLGI_EN,
        label_ar: NLGI_AR,
        value: "2",
        group_en: "102 EM",
        group_ar: "102 EM",
      },
      {
        label_en: THICKENER_EN,
        label_ar: THICKENER_AR,
        value: "Polyurea",
        group_en: "102 EM",
        group_ar: "102 EM",
      },
      {
        label_en: BASE_OIL_VISC_EN,
        label_ar: BASE_OIL_VISC_AR,
        value: "85 mm²/s @ 40°C; 10.9 mm²/s @ 100°C",
        group_en: "102 EM",
        group_ar: "102 EM",
      },
      {
        label_en: DROPPING_POINT_EN,
        label_ar: DROPPING_POINT_AR,
        value: "253°C",
        group_en: "102 EM",
        group_ar: "102 EM",
      },
      {
        label_en: "Maximum Operating Temperature (Sealed-for-Life)",
        label_ar: "أقصى درجة حرارة تشغيل (مختوم مدى الحياة)",
        value: "180°C",
        group_en: "102 EM",
        group_ar: "102 EM",
      },
      {
        label_en: NLGI_EN,
        label_ar: NLGI_AR,
        value: "3",
        group_en: "103 EM",
        group_ar: "103 EM",
      },
      {
        label_en: THICKENER_EN,
        label_ar: THICKENER_AR,
        value: "Polyurea",
        group_en: "103 EM",
        group_ar: "103 EM",
      },
      {
        label_en: BASE_OIL_VISC_EN,
        label_ar: BASE_OIL_VISC_AR,
        value: "85 mm²/s @ 40°C; 10.9 mm²/s @ 100°C",
        group_en: "103 EM",
        group_ar: "103 EM",
      },
      {
        label_en: DROPPING_POINT_EN,
        label_ar: DROPPING_POINT_AR,
        value: "269°C",
        group_en: "103 EM",
        group_ar: "103 EM",
      },
      {
        label_en: "Maximum Operating Temperature (Sealed-for-Life)",
        label_ar: "أقصى درجة حرارة تشغيل (مختوم مدى الحياة)",
        value: "180°C",
        group_en: "103 EM",
        group_ar: "103 EM",
      },
    ],
    relatedProductSlugs: ["industrial-greases", "mobil-polyrex-ep-2"],
    relatedBrandSlugs: ["mobil"],
    catalogues: [
      {
        id: "mobil-shc-polyrex-em-datasheet",
        title_en: "Mobil SHC Polyrex EM Datasheet",
        title_ar: "نشرة بيانات Mobil SHC Polyrex EM",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Mobil SHC Polyrex EM Grease Supplier Egypt",
      title_ar: "مورد شحم Mobil SHC Polyrex EM في مصر",
      description_en:
        "GOLTENS supplies Mobil SHC Polyrex EM synthetic electric-motor bearing grease (102 EM / 103 EM), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم محامل المحركات الكهربائية الاصطناعي Mobil SHC Polyrex EM (102 EM / 103 EM)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
];
