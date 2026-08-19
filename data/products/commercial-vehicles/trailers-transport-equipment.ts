import type { Product } from "@/data/products/types";

/** Commercial Vehicles & Fleet Solutions → Trailers category. */
export const commercialTrailersTransportEquipment: Product[] = [
  {
    id: "flatbed-trailers",
    slug: "flatbed-trailers",
    name_en: "Flatbed Trailers",
    name_ar: "المقطورات المسطحة",
    shortDescription_en:
      "Flatbed trailers for general cargo and equipment transport.",
    shortDescription_ar: "مقطورات مسطحة لنقل البضائع العامة والمعدات.",
    longDescription_en:
      "Flatbed trailers for general cargo, machinery, and equipment transport, sourced with the load capacity and deck length your fleet requires.",
    longDescription_ar:
      "مقطورات مسطحة لنقل البضائع العامة والآليات والمعدات، يتم توريدها بسعة الحمل وطول السطح الذي يتطلبه أسطولكم.",
    sectorId: "commercial-vehicles",
    categoryId: "trailers-transport-equipment",
    relatedProductSlugs: ["lowbed-trailers", "heavy-duty-trailers"],
    catalogues: [
      {
        id: "flatbed-trailers-datasheet",
        title_en: "Flatbed Trailers Datasheet",
        title_ar: "نشرة بيانات المقطورات المسطحة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/flatbed-trailers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "tanker-trailers",
    slug: "tanker-trailers",
    name_en: "Tanker Trailers",
    name_ar: "مقطورات الصهاريج",
    shortDescription_en: "Tanker trailers for bulk liquid and fuel transport.",
    shortDescription_ar: "مقطورات صهاريج لنقل السوائل والوقود بالجملة.",
    longDescription_en:
      "Tanker trailers for bulk liquid, fuel, and water transport, sourced to your required volume and cargo compatibility.",
    longDescription_ar:
      "مقطورات صهاريج لنقل السوائل والوقود والمياه بالجملة، يتم توريدها وفق الحجم المطلوب والتوافق مع نوع البضاعة لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "trailers-transport-equipment",
    relatedProductSlugs: ["refrigerated-trailers", "flatbed-trailers"],
    catalogues: [
      {
        id: "tanker-trailers-datasheet",
        title_en: "Tanker Trailers Datasheet",
        title_ar: "نشرة بيانات مقطورات الصهاريج",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/tanker-trailers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "refrigerated-trailers",
    slug: "refrigerated-trailers",
    name_en: "Refrigerated Trailers",
    name_ar: "المقطورات المبردة",
    shortDescription_en:
      "Refrigerated trailers for temperature-controlled cargo transport.",
    shortDescription_ar:
      "مقطورات مبردة لنقل البضائع التي تتطلب تحكمًا بدرجة الحرارة.",
    longDescription_en:
      "Refrigerated trailers for temperature-controlled cargo transport, sourced to your required temperature range and cargo volume.",
    longDescription_ar:
      "مقطورات مبردة لنقل البضائع التي تتطلب تحكمًا بدرجة الحرارة، يتم توريدها وفق نطاق درجة الحرارة وحجم البضاعة المطلوب لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "trailers-transport-equipment",
    relatedProductSlugs: ["tanker-trailers", "flatbed-trailers"],
    catalogues: [
      {
        id: "refrigerated-trailers-datasheet",
        title_en: "Refrigerated Trailers Datasheet",
        title_ar: "نشرة بيانات المقطورات المبردة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/refrigerated-trailers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "lowbed-trailers",
    slug: "lowbed-trailers",
    name_en: "Lowbed Trailers",
    name_ar: "المقطورات المنخفضة (Lowbed)",
    shortDescription_en:
      "Lowbed trailers for transporting heavy machinery and oversized equipment.",
    shortDescription_ar:
      "مقطورات منخفضة لنقل الآليات الثقيلة والمعدات كبيرة الحجم.",
    longDescription_en:
      "Lowbed trailers for transporting heavy machinery, construction equipment, and oversized loads, sourced to your equipment's weight and dimensions.",
    longDescription_ar:
      "مقطورات منخفضة لنقل الآليات الثقيلة ومعدات الإنشاءات والأحمال كبيرة الحجم، يتم توريدها وفق وزن وأبعاد معداتكم.",
    sectorId: "commercial-vehicles",
    categoryId: "trailers-transport-equipment",
    relatedProductSlugs: ["flatbed-trailers", "heavy-duty-trailers"],
    catalogues: [
      {
        id: "lowbed-trailers-datasheet",
        title_en: "Lowbed Trailers Datasheet",
        title_ar: "نشرة بيانات المقطورات المنخفضة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/lowbed-trailers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "heavy-duty-trailers",
    slug: "heavy-duty-trailers",
    name_en: "Heavy Duty Trailers",
    name_ar: "المقطورات الثقيلة",
    shortDescription_en:
      "Heavy duty trailers for high-tonnage and continuous fleet transport work.",
    shortDescription_ar:
      "مقطورات ثقيلة لأعمال النقل عالية الوزن والمستمرة للأسطول.",
    longDescription_en:
      "Heavy duty trailers built for high-tonnage, continuous transport work across industrial and logistics fleets. We source units matched to your axle configuration and payload requirement.",
    longDescription_ar:
      "مقطورات ثقيلة مصممة لأعمال النقل عالية الوزن والمستمرة عبر الأساطيل الصناعية واللوجستية. نقوم بتوريد الوحدات المطابقة لتكوين المحاور ومتطلبات الحمولة لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "trailers-transport-equipment",
    relatedProductSlugs: ["lowbed-trailers", "flatbed-trailers"],
    catalogues: [
      {
        id: "heavy-duty-trailers-datasheet",
        title_en: "Heavy Duty Trailers Datasheet",
        title_ar: "نشرة بيانات المقطورات الثقيلة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/heavy-duty-trailers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
