import type { Product } from "@/data/products/types";

/** Global Sourcing & OEM Brands → Project Sourcing & Logistics category. */
export const globalProjectSourcingLogistics: Product[] = [
  {
    id: "turnkey-equipment-packages",
    slug: "turnkey-equipment-packages",
    name_en: "Turnkey Equipment Packages",
    name_ar: "حزم معدات جاهزة (تسليم مفتاح)",
    shortDescription_en:
      "Coordinated equipment packages sourced and delivered as one turnkey scope.",
    shortDescription_ar:
      "حزم معدات منسّقة يتم توريدها وتسليمها كنطاق واحد جاهز.",
    longDescription_en:
      "Turnkey equipment packages spanning multiple product categories, coordinated and sourced as one scope so your project team deals with a single point of contact instead of multiple suppliers.",
    longDescription_ar:
      "حزم معدات جاهزة تمتد عبر فئات منتجات متعددة، يتم تنسيقها وتوريدها كنطاق واحد بحيث يتعامل فريق مشروعكم مع جهة اتصال واحدة بدلاً من موردين متعددين.",
    sectorId: "global-sourcing",
    categoryId: "project-sourcing-logistics",
    relatedProductSlugs: [
      "certification-compliance-sourcing",
      "export-import-logistics-support",
    ],
    catalogues: [
      {
        id: "turnkey-equipment-packages-datasheet",
        title_en: "Turnkey Equipment Packages Overview",
        title_ar: "نظرة عامة على حزم المعدات الجاهزة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "certification-compliance-sourcing",
    slug: "certification-compliance-sourcing",
    name_en: "Certification & Compliance-Driven Sourcing",
    name_ar: "توريد وفق متطلبات الشهادات والمطابقة",
    shortDescription_en:
      "Sourcing coordinated around the specific certification requirements your project needs.",
    shortDescription_ar:
      "توريد منسّق وفق متطلبات الشهادات المحددة التي يحتاجها مشروعكم.",
    longDescription_en:
      "Sourcing coordinated around the specific certification and compliance documentation your project or tender requires, confirmed for each item before quotation.",
    longDescription_ar:
      "توريد منسّق وفق متطلبات الشهادات ووثائق المطابقة المحددة التي يتطلبها مشروعكم أو مناقصتكم، ويتم تأكيدها لكل صنف قبل عرض السعر.",
    sectorId: "global-sourcing",
    categoryId: "project-sourcing-logistics",
    relatedProductSlugs: [
      "turnkey-equipment-packages",
      "emergency-urgent-procurement",
    ],
    catalogues: [
      {
        id: "certification-compliance-sourcing-datasheet",
        title_en: "Certification-Driven Sourcing Overview",
        title_ar: "نظرة عامة على التوريد وفق الشهادات",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "emergency-urgent-procurement",
    slug: "emergency-urgent-procurement",
    name_en: "Emergency & Urgent Procurement",
    name_ar: "التوريد الطارئ والعاجل",
    shortDescription_en:
      "Expedited sourcing support for time-critical procurement requests.",
    shortDescription_ar: "دعم توريد سريع للطلبات ذات الأولوية الزمنية العاجلة.",
    longDescription_en:
      "Expedited sourcing support for time-critical procurement requests, confirming the fastest realistic sourcing route for your specific item as part of the response.",
    longDescription_ar:
      "دعم توريد سريع لطلبات التوريد ذات الأولوية الزمنية العاجلة، مع تأكيد أسرع مسار توريد واقعي للصنف المطلوب كجزء من الرد.",
    sectorId: "global-sourcing",
    categoryId: "project-sourcing-logistics",
    relatedProductSlugs: [
      "export-import-logistics-support",
      "custom-sourcing-requests",
    ],
    catalogues: [
      {
        id: "emergency-urgent-procurement-datasheet",
        title_en: "Emergency Procurement Overview",
        title_ar: "نظرة عامة على التوريد الطارئ",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "export-import-logistics-support",
    slug: "export-import-logistics-support",
    name_en: "Export & Import Logistics Support",
    name_ar: "دعم لوجستيات التصدير والاستيراد",
    shortDescription_en:
      "Logistics support coordinated with the products we source for your project.",
    shortDescription_ar: "دعم لوجستي منسّق مع المنتجات التي نورّدها لمشروعكم.",
    longDescription_en:
      "Export and import logistics support coordinated with the products we source, matched to your delivery destination and documentation requirements.",
    longDescription_ar:
      "دعم لوجستيات التصدير والاستيراد منسّق مع المنتجات التي نورّدها، ومطابق لوجهة التسليم ومتطلبات الوثائق لديكم.",
    sectorId: "global-sourcing",
    categoryId: "project-sourcing-logistics",
    relatedProductSlugs: [
      "turnkey-equipment-packages",
      "emergency-urgent-procurement",
    ],
    catalogues: [
      {
        id: "export-import-logistics-support-datasheet",
        title_en: "Export & Import Logistics Overview",
        title_ar: "نظرة عامة على لوجستيات التصدير والاستيراد",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/global-sourcing/export-import-logistics-support.webp",
    ],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "custom-sourcing-requests",
    slug: "custom-sourcing-requests",
    name_en: "Custom Sourcing Requests",
    name_ar: "طلبات توريد مخصصة",
    shortDescription_en:
      "A catch-all sourcing category for any product not listed elsewhere on the site.",
    shortDescription_ar:
      "فئة توريد شاملة لأي منتج غير مدرج في مكان آخر بالموقع.",
    longDescription_en:
      "For any product not listed elsewhere on this site — GOLTENS is a general procurement company, and our sourcing team will confirm whether and how we can supply it, whatever the category.",
    longDescription_ar:
      "لأي منتج غير مدرج في مكان آخر بهذا الموقع — GOLTENS شركة توريد عامة، وسيؤكد فريق التوريد لدينا إمكانية وطريقة توريده، أيًا كانت الفئة.",
    sectorId: "global-sourcing",
    categoryId: "project-sourcing-logistics",
    relatedProductSlugs: [
      "certification-compliance-sourcing",
      "emergency-urgent-procurement",
    ],
    catalogues: [
      {
        id: "custom-sourcing-requests-datasheet",
        title_en: "Custom Sourcing Requests Overview",
        title_ar: "نظرة عامة على طلبات التوريد المخصصة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "on-request",
    quoteEnabled: true,
  },
];
