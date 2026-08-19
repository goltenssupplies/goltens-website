import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Technical Supplies & General Facility Equipment category. */
export const healthcareTechnicalFacilitySupplies: Product[] = [
  {
    id: "hvac-ventilation-equipment",
    slug: "hvac-ventilation-equipment",
    name_en: "HVAC & Ventilation Equipment",
    name_ar: "معدات التكييف والتهوية",
    shortDescription_en:
      "HVAC and ventilation equipment for hospital air handling.",
    shortDescription_ar: "معدات تكييف وتهوية لأنظمة معالجة الهواء بالمستشفى.",
    longDescription_en:
      "HVAC and ventilation equipment for air handling, sourced to your area coverage, air-change rate, and system-type requirement.",
    longDescription_ar:
      "معدات تكييف وتهوية لأنظمة معالجة الهواء، يتم توريدها وفق مساحة التغطية ومعدل تبديل الهواء ونوع النظام المطلوب لديكم.",
    sectorId: "healthcare",
    categoryId: "technical-facility-supplies",
    relatedProductSlugs: [
      "general-fit-out-finishing-materials",
      "wayfinding-facility-signage",
    ],
    catalogues: [
      {
        id: "hvac-ventilation-equipment-datasheet",
        title_en: "HVAC & Ventilation Equipment Datasheet",
        title_ar: "نشرة بيانات معدات التكييف والتهوية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "general-fit-out-finishing-materials",
    slug: "general-fit-out-finishing-materials",
    name_en: "General Fit-Out & Finishing Materials",
    name_ar: "مواد التجهيز والتشطيب العامة",
    shortDescription_en:
      "General fit-out and finishing materials for hospital administrative spaces.",
    shortDescription_ar: "مواد تجهيز وتشطيب عامة للمساحات الإدارية بالمستشفى.",
    longDescription_en:
      "General fit-out and finishing materials for hospital administrative and back-of-house spaces, sourced to your project scope and finishing specification.",
    longDescription_ar:
      "مواد تجهيز وتشطيب عامة للمساحات الإدارية ومناطق الخدمات بالمستشفى، يتم توريدها وفق نطاق المشروع ومواصفات التشطيب لديكم.",
    sectorId: "healthcare",
    categoryId: "technical-facility-supplies",
    relatedProductSlugs: [
      "hvac-ventilation-equipment",
      "wayfinding-facility-signage",
    ],
    catalogues: [
      {
        id: "general-fit-out-finishing-materials-datasheet",
        title_en: "General Fit-Out & Finishing Materials Datasheet",
        title_ar: "نشرة بيانات مواد التجهيز والتشطيب العامة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "wayfinding-facility-signage",
    slug: "wayfinding-facility-signage",
    name_en: "Wayfinding & Facility Signage",
    name_ar: "اللوحات الإرشادية والتوجيهية للمرافق",
    shortDescription_en:
      "Wayfinding and general signage for hospital buildings.",
    shortDescription_ar: "لوحات إرشادية وتوجيهية عامة لمباني المستشفى.",
    longDescription_en:
      "Wayfinding and general facility signage for hospital buildings, sourced to your site layout and facility-management requirement.",
    longDescription_ar:
      "لوحات إرشادية وتوجيهية عامة لمباني المستشفى، يتم توريدها وفق مخطط الموقع ومتطلبات إدارة المرافق لديكم.",
    sectorId: "healthcare",
    categoryId: "technical-facility-supplies",
    relatedProductSlugs: [
      "hvac-ventilation-equipment",
      "general-fit-out-finishing-materials",
    ],
    catalogues: [
      {
        id: "wayfinding-facility-signage-datasheet",
        title_en: "Wayfinding & Facility Signage Datasheet",
        title_ar: "نشرة بيانات اللوحات الإرشادية والتوجيهية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
