import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → General Procurement & Operational Supplies category. */
export const healthcareGeneralOperationalSupplies: Product[] = [
  {
    id: "industrial-safety-ppe-supplies",
    slug: "industrial-safety-ppe-supplies",
    name_en: "Industrial Safety & PPE Supplies",
    name_ar: "مستلزمات السلامة الصناعية والوقاية الشخصية",
    shortDescription_en:
      "Personal protective equipment for hospital facility and maintenance staff.",
    shortDescription_ar: "معدات وقاية شخصية لفرق المرافق والصيانة بالمستشفى.",
    longDescription_en:
      "Industrial safety and personal protective equipment for facility, maintenance, and engineering staff, sourced to your team's task exposure and required protection level.",
    longDescription_ar:
      "معدات سلامة صناعية ووقاية شخصية لفرق المرافق والصيانة والهندسة، يتم توريدها وفق طبيعة المهام ومستوى الحماية المطلوب لفريقكم.",
    sectorId: "healthcare",
    categoryId: "general-operational-supplies",
    relatedProductSlugs: [
      "general-operational-consumables",
      "operational-sourcing-procurement-support",
    ],
    catalogues: [
      {
        id: "industrial-safety-ppe-supplies-datasheet",
        title_en: "Industrial Safety & PPE Supplies Datasheet",
        title_ar: "نشرة بيانات مستلزمات السلامة الصناعية والوقاية الشخصية",
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
    id: "general-operational-consumables",
    slug: "general-operational-consumables",
    name_en: "General Operational Consumables",
    name_ar: "مستهلكات تشغيلية عامة",
    shortDescription_en:
      "General operational consumables for hospital departmental use.",
    shortDescription_ar: "مستهلكات تشغيلية عامة للاستخدام في أقسام المستشفى.",
    longDescription_en:
      "General operational consumables for day-to-day departmental use, sourced to your department's recurring supply requirement.",
    longDescription_ar:
      "مستهلكات تشغيلية عامة للاستخدام اليومي في الأقسام، يتم توريدها وفق الاحتياج المتكرر لقسمكم.",
    sectorId: "healthcare",
    categoryId: "general-operational-supplies",
    relatedProductSlugs: [
      "industrial-safety-ppe-supplies",
      "operational-sourcing-procurement-support",
    ],
    catalogues: [
      {
        id: "general-operational-consumables-datasheet",
        title_en: "General Operational Consumables Datasheet",
        title_ar: "نشرة بيانات المستهلكات التشغيلية العامة",
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
    id: "operational-sourcing-procurement-support",
    slug: "operational-sourcing-procurement-support",
    name_en: "Operational Sourcing & Procurement Support",
    name_ar: "دعم التوريد والمشتريات التشغيلية",
    shortDescription_en:
      "Sourcing support for hospital operational procurement requests.",
    shortDescription_ar: "دعم توريد لطلبات المشتريات التشغيلية بالمستشفى.",
    longDescription_en:
      "Sourcing support for operational and general procurement requests that fall outside a standard catalogue line, coordinated as part of your facility's wider supply requirement.",
    longDescription_ar:
      "دعم توريد لطلبات المشتريات التشغيلية والعامة التي تخرج عن خط الكتالوج القياسي، يتم تنسيقها كجزء من احتياجات التوريد الأوسع لمنشأتكم.",
    sectorId: "healthcare",
    categoryId: "general-operational-supplies",
    relatedProductSlugs: [
      "industrial-safety-ppe-supplies",
      "general-operational-consumables",
    ],
    catalogues: [
      {
        id: "operational-sourcing-procurement-support-datasheet",
        title_en: "Operational Sourcing & Procurement Support Datasheet",
        title_ar: "نشرة بيانات دعم التوريد والمشتريات التشغيلية",
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
