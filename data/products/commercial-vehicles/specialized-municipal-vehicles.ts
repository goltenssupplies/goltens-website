import type { Product } from "@/data/products/types";

/** Commercial Vehicles & Fleet Solutions → Specialized & Municipal Vehicles category. */
export const commercialSpecializedMunicipalVehicles: Product[] = [
  {
    id: "refuse-collection-vehicles",
    slug: "refuse-collection-vehicles",
    name_en: "Refuse Collection Vehicles",
    name_ar: "مركبات جمع المخلفات",
    shortDescription_en:
      "Refuse collection vehicles for municipal waste collection operations.",
    shortDescription_ar: "مركبات جمع مخلفات لعمليات جمع النفايات البلدية.",
    longDescription_en:
      "Refuse collection vehicles for municipal and commercial waste collection operations, sourced to your required compaction capacity and collection route type.",
    longDescription_ar:
      "مركبات جمع مخلفات لعمليات جمع النفايات البلدية والتجارية، يتم توريدها وفق سعة الكبس المطلوبة ونوع مسار الجمع لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "specialized-municipal-vehicles",
    relatedProductSlugs: [
      "street-sweeping-vehicles",
      "sewer-cleaning-vehicles",
    ],
    catalogues: [
      {
        id: "refuse-collection-vehicles-datasheet",
        title_en: "Refuse Collection Vehicles Datasheet",
        title_ar: "نشرة بيانات مركبات جمع المخلفات",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/commercial-vehicles/refuse-collection-vehicles.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "ambulances",
    slug: "ambulances",
    name_en: "Ambulances",
    name_ar: "سيارات الإسعاف",
    shortDescription_en:
      "Ambulance vehicles fitted out for emergency medical transport.",
    shortDescription_ar: "سيارات إسعاف مجهزة للنقل الطبي الطارئ.",
    longDescription_en:
      "Ambulance vehicles fitted out for emergency medical transport, sourced to the equipment and layout requirements of the medical authority operating them.",
    longDescription_ar:
      "سيارات إسعاف مجهزة للنقل الطبي الطارئ، يتم توريدها وفق متطلبات التجهيز والتخطيط الداخلي للجهة الطبية المشغّلة لها.",
    sectorId: "commercial-vehicles",
    categoryId: "specialized-municipal-vehicles",
    relatedProductSlugs: ["fuel-tankers", "water-tankers"],
    catalogues: [
      {
        id: "ambulances-datasheet",
        title_en: "Ambulances Datasheet",
        title_ar: "نشرة بيانات سيارات الإسعاف",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/ambulances.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "fuel-tankers",
    slug: "fuel-tankers",
    name_en: "Fuel Tankers",
    name_ar: "صهاريج الوقود",
    shortDescription_en:
      "Fuel tanker vehicles for bulk fuel distribution and site refueling.",
    shortDescription_ar:
      "مركبات صهاريج وقود لتوزيع الوقود بالجملة وتزويد المواقع.",
    longDescription_en:
      "Fuel tanker vehicles for bulk fuel distribution and site refueling operations, sourced to your required tank capacity and compartmentalization.",
    longDescription_ar:
      "مركبات صهاريج وقود لتوزيع الوقود بالجملة وعمليات تزويد المواقع بالوقود، يتم توريدها وفق سعة الخزان المطلوبة وتقسيمه لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "specialized-municipal-vehicles",
    relatedProductSlugs: ["water-tankers", "ambulances"],
    catalogues: [
      {
        id: "fuel-tankers-datasheet",
        title_en: "Fuel Tankers Datasheet",
        title_ar: "نشرة بيانات صهاريج الوقود",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/fuel-tankers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "water-tankers",
    slug: "water-tankers",
    name_en: "Water Tankers",
    name_ar: "صهاريج المياه",
    shortDescription_en:
      "Water tanker vehicles for site supply, dust control, and municipal distribution.",
    shortDescription_ar:
      "مركبات صهاريج مياه لتزويد المواقع ومكافحة الغبار والتوزيع البلدي.",
    longDescription_en:
      "Water tanker vehicles for construction site supply, dust suppression, and municipal water distribution, sourced to your required tank capacity and discharge system.",
    longDescription_ar:
      "مركبات صهاريج مياه لتزويد مواقع الإنشاءات ومكافحة الغبار والتوزيع البلدي للمياه، يتم توريدها وفق سعة الخزان المطلوبة ونظام التصريف لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "specialized-municipal-vehicles",
    relatedProductSlugs: ["fuel-tankers", "street-sweeping-vehicles"],
    catalogues: [
      {
        id: "water-tankers-datasheet",
        title_en: "Water Tankers Datasheet",
        title_ar: "نشرة بيانات صهاريج المياه",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/water-tankers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "street-sweeping-vehicles",
    slug: "street-sweeping-vehicles",
    name_en: "Street Sweeping Vehicles",
    name_ar: "مركبات كنس الشوارع",
    shortDescription_en:
      "Street sweeping vehicles for municipal road cleaning operations.",
    shortDescription_ar: "مركبات كنس شوارع لعمليات تنظيف الطرق البلدية.",
    longDescription_en:
      "Street sweeping vehicles for municipal road cleaning and debris collection, sourced to your required sweeping width and hopper capacity.",
    longDescription_ar:
      "مركبات كنس شوارع لتنظيف الطرق البلدية وجمع المخلفات، يتم توريدها وفق عرض الكنس المطلوب وسعة الحاوية لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "specialized-municipal-vehicles",
    relatedProductSlugs: [
      "refuse-collection-vehicles",
      "sewer-cleaning-vehicles",
    ],
    catalogues: [
      {
        id: "street-sweeping-vehicles-datasheet",
        title_en: "Street Sweeping Vehicles Datasheet",
        title_ar: "نشرة بيانات مركبات كنس الشوارع",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/commercial-vehicles/street-sweeping-vehicles.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "sewer-cleaning-vehicles",
    slug: "sewer-cleaning-vehicles",
    name_en: "Sewer Cleaning & Jetting Vehicles",
    name_ar: "مركبات تنظيف وشفط الصرف الصحي",
    shortDescription_en:
      "Combination jetting and vacuum vehicles for sewer and drainage line maintenance.",
    shortDescription_ar:
      "مركبات شفط وضخ مياه للصيانة الدورية لخطوط الصرف الصحي والتصريف.",
    longDescription_en:
      "Combination jetting and vacuum vehicles for sewer and drainage line cleaning and maintenance, sourced to your required tank capacity and jetting pressure.",
    longDescription_ar:
      "مركبات شفط وضخ مياه مدمجة لتنظيف وصيانة خطوط الصرف الصحي والتصريف، يتم توريدها وفق سعة الخزان وضغط الضخ المطلوب لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "specialized-municipal-vehicles",
    relatedProductSlugs: ["refuse-collection-vehicles", "water-tankers"],
    catalogues: [
      {
        id: "sewer-cleaning-vehicles-datasheet",
        title_en: "Sewer Cleaning & Jetting Vehicles Datasheet",
        title_ar: "نشرة بيانات مركبات تنظيف وشفط الصرف الصحي",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/commercial-vehicles/sewer-cleaning-vehicles.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
];
