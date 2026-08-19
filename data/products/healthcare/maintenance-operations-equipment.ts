import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Maintenance & Operations Equipment and Materials category. */
export const healthcareMaintenanceOperationsEquipment: Product[] = [
  {
    id: "preventive-maintenance-supplies",
    slug: "preventive-maintenance-supplies",
    name_en: "Preventive Maintenance Supplies",
    name_ar: "مستلزمات الصيانة الدورية",
    shortDescription_en:
      "Consumable supplies for hospital scheduled maintenance work.",
    shortDescription_ar: "مستلزمات استهلاكية لأعمال الصيانة الدورية بالمستشفى.",
    longDescription_en:
      "Consumable supplies for scheduled preventive maintenance work — filters, belts, and related replacement items — sourced to your equipment inventory and maintenance schedule.",
    longDescription_ar:
      "مستلزمات استهلاكية لأعمال الصيانة الدورية المجدولة — فلاتر وسيور وقطع استبدال ذات صلة — يتم توريدها وفق قائمة معداتكم وجدول الصيانة لديكم.",
    sectorId: "healthcare",
    categoryId: "maintenance-operations-equipment",
    relatedProductSlugs: [
      "industrial-hand-power-tools",
      "material-handling-trolleys-hoists",
    ],
    catalogues: [
      {
        id: "preventive-maintenance-supplies-datasheet",
        title_en: "Preventive Maintenance Supplies Datasheet",
        title_ar: "نشرة بيانات مستلزمات الصيانة الدورية",
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
    id: "industrial-hand-power-tools",
    slug: "industrial-hand-power-tools",
    name_en: "Industrial Hand & Power Tools",
    name_ar: "أدوات يدوية وكهربائية صناعية",
    shortDescription_en:
      "Hand and power tools for hospital facility operations and repairs.",
    shortDescription_ar:
      "أدوات يدوية وكهربائية لعمليات وإصلاحات مرافق المستشفى.",
    longDescription_en:
      "Hand and power tools for facility operations and repair work, sourced to your maintenance team's trade requirement and daily workload.",
    longDescription_ar:
      "أدوات يدوية وكهربائية لعمليات وأعمال إصلاح المرافق، يتم توريدها وفق تخصص فريق الصيانة لديكم وحجم العمل اليومي.",
    sectorId: "healthcare",
    categoryId: "maintenance-operations-equipment",
    relatedProductSlugs: [
      "preventive-maintenance-supplies",
      "material-handling-trolleys-hoists",
    ],
    catalogues: [
      {
        id: "industrial-hand-power-tools-datasheet",
        title_en: "Industrial Hand & Power Tools Datasheet",
        title_ar: "نشرة بيانات الأدوات اليدوية والكهربائية الصناعية",
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
    id: "material-handling-trolleys-hoists",
    slug: "material-handling-trolleys-hoists",
    name_en: "Material Handling Trolleys & Hoists",
    name_ar: "عربات ورافعات مناولة المواد",
    shortDescription_en:
      "Trolleys and hoists for hospital material handling and maintenance work.",
    shortDescription_ar:
      "عربات ورافعات لمناولة المواد وأعمال الصيانة بالمستشفى.",
    longDescription_en:
      "Material handling trolleys and hoists for maintenance and logistics work, sourced to your load capacity and site-access requirement.",
    longDescription_ar:
      "عربات ورافعات لمناولة المواد وأعمال الصيانة واللوجستيات، يتم توريدها وفق سعة الحمل ومتطلبات الوصول للموقع لديكم.",
    sectorId: "healthcare",
    categoryId: "maintenance-operations-equipment",
    relatedProductSlugs: [
      "preventive-maintenance-supplies",
      "industrial-hand-power-tools",
    ],
    catalogues: [
      {
        id: "material-handling-trolleys-hoists-datasheet",
        title_en: "Material Handling Trolleys & Hoists Datasheet",
        title_ar: "نشرة بيانات عربات ورافعات مناولة المواد",
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
