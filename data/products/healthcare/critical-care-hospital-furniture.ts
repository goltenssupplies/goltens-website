import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Critical Care & Hospital Furniture category. */
export const healthcareCriticalCareHospitalFurniture: Product[] = [
  {
    id: "icu-beds",
    slug: "icu-beds",
    name_en: "ICU Beds",
    name_ar: "أسرّة العناية المركزة",
    shortDescription_en: "ICU beds with multi-function positioning for critical-care patients.",
    shortDescription_ar: "أسرّة عناية مركزة بوضعيات متعددة الوظائف لمرضى الحالات الحرجة.",
    longDescription_en:
      "ICU beds with multi-function electric positioning for critical-care patients, sourced to your unit's clinical workflow and integration requirements with monitoring equipment.",
    longDescription_ar:
      "أسرّة عناية مركزة بوضعيات كهربائية متعددة الوظائف لمرضى الحالات الحرجة، يتم توريدها وفق سير العمل السريري في وحدتكم ومتطلبات التكامل مع أجهزة المراقبة.",
    sectorId: "healthcare",
    categoryId: "critical-care-hospital-furniture",
    relatedProductSlugs: ["ventilators", "infusion-syringe-pumps"],
    catalogues: [
      { id: "icu-beds-datasheet", title_en: "ICU Beds Datasheet", title_ar: "نشرة بيانات أسرّة العناية المركزة", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "ventilators",
    slug: "ventilators",
    name_en: "Ventilators",
    name_ar: "أجهزة التنفس الصناعي",
    shortDescription_en: "Mechanical ventilators for respiratory support in critical-care settings.",
    shortDescription_ar: "أجهزة تنفس صناعي ميكانيكية لدعم التنفس في وحدات الرعاية الحرجة.",
    longDescription_en:
      "Mechanical ventilators for respiratory support in ICU, emergency, and operating room settings. We source units matched to your clinical setting and required ventilation modes.",
    longDescription_ar:
      "أجهزة تنفس صناعي ميكانيكية لدعم التنفس في العناية المركزة والطوارئ وغرف العمليات. نقوم بتوريد الأجهزة المطابقة للبيئة السريرية وأنماط التنفس المطلوبة لديكم.",
    sectorId: "healthcare",
    categoryId: "critical-care-hospital-furniture",
    relatedProductSlugs: ["icu-beds", "infusion-syringe-pumps"],
    catalogues: [
      { id: "ventilators-datasheet", title_en: "Ventilators Datasheet", title_ar: "نشرة بيانات أجهزة التنفس الصناعي", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "hospital-beds",
    slug: "hospital-beds",
    name_en: "Hospital Beds",
    name_ar: "أسرّة المستشفيات",
    shortDescription_en: "General ward hospital beds sourced for patient comfort and nursing access.",
    shortDescription_ar: "أسرّة مستشفيات للأقسام العامة، يتم توريدها لراحة المريض وسهولة وصول التمريض.",
    longDescription_en:
      "General ward hospital beds with manual or electric height and back-rest adjustment, sourced to your ward's patient profile and nursing workflow.",
    longDescription_ar:
      "أسرّة مستشفيات للأقسام العامة بضبط يدوي أو كهربائي للارتفاع ومسند الظهر، يتم توريدها وفق فئة المرضى في قسمكم وسير عمل التمريض.",
    sectorId: "healthcare",
    categoryId: "critical-care-hospital-furniture",
    relatedProductSlugs: ["icu-beds", "medical-trolleys-carts"],
    catalogues: [
      { id: "hospital-beds-datasheet", title_en: "Hospital Beds Datasheet", title_ar: "نشرة بيانات أسرّة المستشفيات", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "medical-trolleys-carts",
    slug: "medical-trolleys-carts",
    name_en: "Medical Trolleys & Carts",
    name_ar: "عربات وترولي طبي",
    shortDescription_en: "Medical trolleys and carts for medication, supplies, and equipment transport.",
    shortDescription_ar: "عربات طبية لنقل الأدوية والمستلزمات والمعدات.",
    longDescription_en:
      "Medical trolleys and carts for medication rounds, supply stocking, and equipment transport across hospital departments. We source units matched to your department's workflow and storage requirement.",
    longDescription_ar:
      "عربات طبية لجولات الأدوية وتخزين المستلزمات ونقل المعدات عبر أقسام المستشفى. نقوم بتوريد الوحدات المطابقة لسير العمل ومتطلبات التخزين في قسمكم.",
    sectorId: "healthcare",
    categoryId: "critical-care-hospital-furniture",
    relatedProductSlugs: ["hospital-beds", "icu-beds"],
    catalogues: [
      { id: "medical-trolleys-carts-datasheet", title_en: "Medical Trolleys & Carts Datasheet", title_ar: "نشرة بيانات عربات وترولي طبي", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "infusion-syringe-pumps",
    slug: "infusion-syringe-pumps",
    name_en: "Infusion & Syringe Pumps",
    name_ar: "مضخات التسريب والحقن",
    shortDescription_en: "Infusion and syringe pumps for precise, controlled medication delivery.",
    shortDescription_ar: "مضخات تسريب وحقن لإيصال الأدوية بدقة وتحكم.",
    longDescription_en:
      "Infusion and syringe pumps for precise, controlled delivery of fluids and medication across ward, ICU, and operating room settings. We source units matched to your clinical accuracy and alarm requirements.",
    longDescription_ar:
      "مضخات تسريب وحقن لإيصال السوائل والأدوية بدقة وتحكم عبر الأقسام والعناية المركزة وغرف العمليات. نقوم بتوريد الأجهزة المطابقة لمتطلبات الدقة السريرية والتنبيهات لديكم.",
    sectorId: "healthcare",
    categoryId: "critical-care-hospital-furniture",
    relatedProductSlugs: ["ventilators", "icu-beds"],
    catalogues: [
      { id: "infusion-syringe-pumps-datasheet", title_en: "Infusion & Syringe Pumps Datasheet", title_ar: "نشرة بيانات مضخات التسريب والحقن", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
