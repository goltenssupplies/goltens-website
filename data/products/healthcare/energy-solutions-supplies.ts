import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Energy Solutions & Supplies category. */
export const healthcareEnergySolutionsSupplies: Product[] = [
  {
    id: "standby-power-generators",
    slug: "standby-power-generators",
    name_en: "Standby Power Generators",
    name_ar: "مولدات طاقة احتياطية",
    shortDescription_en: "Standby generators for hospital backup power.",
    shortDescription_ar: "مولدات احتياطية لتأمين الطاقة الاحتياطية بالمستشفى.",
    longDescription_en:
      "Standby generators for backup power, sourced to your load requirement, changeover configuration, and continuous-occupancy runtime need.",
    longDescription_ar:
      "مولدات طاقة احتياطية لتأمين الكهرباء الاحتياطية، يتم توريدها وفق متطلبات الحمل وتكوين التحويل ومدة التشغيل المطلوبة لمنشأة ذات إشغال مستمر.",
    sectorId: "healthcare",
    categoryId: "energy-solutions-supplies",
    relatedProductSlugs: ["battery-backup-ups-units", "solar-energy-systems"],
    catalogues: [
      {
        id: "standby-power-generators-datasheet",
        title_en: "Standby Power Generators Datasheet",
        title_ar: "نشرة بيانات المولدات الاحتياطية",
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
    id: "battery-backup-ups-units",
    slug: "battery-backup-ups-units",
    name_en: "Battery Backup & UPS Units",
    name_ar: "وحدات بطاريات احتياطية ومزودات طاقة لا تنقطع",
    shortDescription_en:
      "UPS and battery backup units for hospital critical power continuity.",
    shortDescription_ar:
      "وحدات مزودات طاقة لا تنقطع وبطاريات احتياطية لضمان استمرارية الطاقة الحرجة بالمستشفى.",
    longDescription_en:
      "UPS and battery backup units for power continuity during outages, sourced to your load capacity and required backup runtime.",
    longDescription_ar:
      "وحدات مزودات طاقة لا تنقطع وبطاريات احتياطية لضمان استمرارية الطاقة أثناء الانقطاع، يتم توريدها وفق سعة الحمل ومدة النسخ الاحتياطي المطلوبة لديكم.",
    sectorId: "healthcare",
    categoryId: "energy-solutions-supplies",
    relatedProductSlugs: ["standby-power-generators", "solar-energy-systems"],
    catalogues: [
      {
        id: "battery-backup-ups-units-datasheet",
        title_en: "Battery Backup & UPS Units Datasheet",
        title_ar: "نشرة بيانات وحدات البطاريات الاحتياطية",
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
    id: "solar-energy-systems",
    slug: "solar-energy-systems",
    name_en: "Solar Energy Systems",
    name_ar: "أنظمة الطاقة الشمسية",
    shortDescription_en: "Solar energy systems for hospital power supply.",
    shortDescription_ar: "أنظمة طاقة شمسية لإمداد الكهرباء بالمستشفى.",
    longDescription_en:
      "Solar energy systems for power supply, sourced to your available roof or site area and target energy contribution.",
    longDescription_ar:
      "أنظمة طاقة شمسية لإمداد الكهرباء، يتم توريدها وفق مساحة السطح أو الموقع المتاحة ونسبة المساهمة المستهدفة من الطاقة لديكم.",
    sectorId: "healthcare",
    categoryId: "energy-solutions-supplies",
    relatedProductSlugs: [
      "standby-power-generators",
      "battery-backup-ups-units",
    ],
    catalogues: [
      {
        id: "solar-energy-systems-datasheet",
        title_en: "Solar Energy Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة الطاقة الشمسية",
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
