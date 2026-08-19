import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Cables, Breakers & Distribution Panels category. */
export const healthcareCablesBreakersDistributionPanels: Product[] = [
  {
    id: "power-control-cables",
    slug: "power-control-cables",
    name_en: "Power & Control Cables",
    name_ar: "كابلات القدرة والتحكم",
    shortDescription_en:
      "Power and control cables for hospital electrical distribution.",
    shortDescription_ar: "كابلات قدرة وتحكم لتوزيع الكهرباء بالمستشفى.",
    longDescription_en:
      "Power and control cables for electrical distribution and equipment wiring, sourced to your voltage rating, conductor size, and installation environment.",
    longDescription_ar:
      "كابلات قدرة وتحكم لتوزيع الكهرباء وتوصيل المعدات، يتم توريدها وفق تصنيف الجهد وحجم الموصل وبيئة التركيب لديكم.",
    sectorId: "healthcare",
    categoryId: "cables-breakers-distribution-panels",
    relatedProductSlugs: [
      "circuit-breakers-mcb-mccb",
      "electrical-distribution-panels",
    ],
    catalogues: [
      {
        id: "power-control-cables-datasheet",
        title_en: "Power & Control Cables Datasheet",
        title_ar: "نشرة بيانات كابلات القدرة والتحكم",
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
    id: "circuit-breakers-mcb-mccb",
    slug: "circuit-breakers-mcb-mccb",
    name_en: "Circuit Breakers (MCB/MCCB)",
    name_ar: "قواطع كهربائية (MCB/MCCB)",
    shortDescription_en:
      "Miniature and moulded-case circuit breakers for circuit protection.",
    shortDescription_ar: "قواطع كهربائية مصغّرة ومحفظة القالب لحماية الدوائر.",
    longDescription_en:
      "Miniature and moulded-case circuit breakers for circuit protection, sourced to your current rating, breaking capacity, and panel configuration.",
    longDescription_ar:
      "قواطع كهربائية مصغّرة ومحفظة القالب لحماية الدوائر، يتم توريدها وفق تصنيف التيار وقدرة القطع وتكوين اللوحة لديكم.",
    sectorId: "healthcare",
    categoryId: "cables-breakers-distribution-panels",
    relatedProductSlugs: [
      "power-control-cables",
      "electrical-distribution-panels",
    ],
    catalogues: [
      {
        id: "circuit-breakers-mcb-mccb-datasheet",
        title_en: "Circuit Breakers Datasheet",
        title_ar: "نشرة بيانات القواطع الكهربائية",
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
    id: "electrical-distribution-panels",
    slug: "electrical-distribution-panels",
    name_en: "Electrical Distribution Panels",
    name_ar: "لوحات التوزيع الكهربائية",
    shortDescription_en:
      "Distribution panels for hospital electrical power distribution.",
    shortDescription_ar: "لوحات توزيع كهربائية لتوزيع الطاقة بالمستشفى.",
    longDescription_en:
      "Distribution panels for power distribution across hospital departments and service areas, sourced to your circuit count, breaker type, and load schedule.",
    longDescription_ar:
      "لوحات توزيع كهربائية لتوزيع الطاقة عبر أقسام المستشفى ومناطق الخدمات، يتم توريدها وفق عدد الدوائر ونوع القواطع وجدول الأحمال لديكم.",
    sectorId: "healthcare",
    categoryId: "cables-breakers-distribution-panels",
    relatedProductSlugs: ["power-control-cables", "circuit-breakers-mcb-mccb"],
    catalogues: [
      {
        id: "electrical-distribution-panels-datasheet",
        title_en: "Electrical Distribution Panels Datasheet",
        title_ar: "نشرة بيانات لوحات التوزيع الكهربائية",
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
