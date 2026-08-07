import type { Product } from "@/data/products/types";

/** Global Sourcing & OEM Brands → Bulk Materials & Industrial Supply category. */
export const globalBulkMaterialsIndustrialSupply: Product[] = [
  {
    id: "industrial-raw-materials-sourcing",
    slug: "industrial-raw-materials-sourcing",
    name_en: "Industrial Raw Materials",
    name_ar: "المواد الخام الصناعية",
    shortDescription_en: "Raw material sourcing for manufacturing and industrial production lines.",
    shortDescription_ar: "توريد مواد خام لخطوط الإنتاج والتصنيع الصناعي.",
    longDescription_en:
      "Industrial raw material sourcing for manufacturing and production lines, matched to your required material grade, quantity, and delivery schedule.",
    longDescription_ar:
      "توريد مواد خام صناعية لخطوط الإنتاج والتصنيع، مطابقة لدرجة المادة والكمية وجدول التسليم المطلوب لديكم.",
    sectorId: "global-sourcing",
    categoryId: "bulk-materials-industrial-supply",
    relatedProductSlugs: ["bulk-commodity-sourcing", "packaging-materials-sourcing"],
    catalogues: [
      { id: "industrial-raw-materials-sourcing-datasheet", title_en: "Industrial Raw Materials Sourcing Overview", title_ar: "نظرة عامة على توريد المواد الخام الصناعية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "bulk-commodity-sourcing",
    slug: "bulk-commodity-sourcing",
    name_en: "Bulk Commodity Sourcing",
    name_ar: "توريد السلع بالجملة",
    shortDescription_en: "Bulk commodity sourcing coordinated to project or fleet-level quantities.",
    shortDescription_ar: "توريد سلع بالجملة منسّق بكميات المشروع أو الأسطول.",
    longDescription_en:
      "Bulk commodity sourcing coordinated to project or fleet-level quantity requirements, drawing on our international supplier network for consistent supply.",
    longDescription_ar:
      "توريد سلع بالجملة منسّق وفق متطلبات كمية المشروع أو الأسطول، بالاعتماد على شبكة موردينا الدولية لضمان استمرارية التوريد.",
    sectorId: "global-sourcing",
    categoryId: "bulk-materials-industrial-supply",
    relatedProductSlugs: ["industrial-raw-materials-sourcing", "project-specific-procurement"],
    catalogues: [
      { id: "bulk-commodity-sourcing-datasheet", title_en: "Bulk Commodity Sourcing Overview", title_ar: "نظرة عامة على توريد السلع بالجملة", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "packaging-materials-sourcing",
    slug: "packaging-materials-sourcing",
    name_en: "Packaging Materials",
    name_ar: "مواد التعبئة والتغليف",
    shortDescription_en: "Packaging materials sourced for industrial and commercial supply chains.",
    shortDescription_ar: "مواد تعبئة وتغليف يتم توريدها لسلاسل الإمداد الصناعية والتجارية.",
    longDescription_en:
      "Packaging materials for industrial and commercial supply chains, sourced to your product handling and shipping requirement.",
    longDescription_ar:
      "مواد تعبئة وتغليف لسلاسل الإمداد الصناعية والتجارية، يتم توريدها وفق متطلبات مناولة وشحن منتجاتكم.",
    sectorId: "global-sourcing",
    categoryId: "bulk-materials-industrial-supply",
    relatedProductSlugs: ["industrial-raw-materials-sourcing", "bulk-commodity-sourcing"],
    catalogues: [
      { id: "packaging-materials-sourcing-datasheet", title_en: "Packaging Materials Sourcing Overview", title_ar: "نظرة عامة على توريد مواد التعبئة والتغليف", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "specialty-equipment-on-request",
    slug: "specialty-equipment-on-request",
    name_en: "Specialty Equipment on Request",
    name_ar: "معدات متخصصة عند الطلب",
    shortDescription_en: "Sourcing support for specialty equipment outside our standard sector listings.",
    shortDescription_ar: "دعم توريد للمعدات المتخصصة خارج قوائم قطاعاتنا القياسية.",
    longDescription_en:
      "Sourcing support for specialty equipment that falls outside our standard sector listings, confirmed on a case-by-case basis through our supplier network.",
    longDescription_ar:
      "دعم توريد للمعدات المتخصصة التي تقع خارج قوائم قطاعاتنا القياسية، ويتم تأكيدها حسب كل حالة من خلال شبكة موردينا.",
    sectorId: "global-sourcing",
    categoryId: "bulk-materials-industrial-supply",
    relatedProductSlugs: ["project-specific-procurement", "industrial-raw-materials-sourcing"],
    catalogues: [
      { id: "specialty-equipment-on-request-datasheet", title_en: "Specialty Equipment Sourcing Overview", title_ar: "نظرة عامة على توريد المعدات المتخصصة", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "project-specific-procurement",
    slug: "project-specific-procurement",
    name_en: "Project-Specific Procurement",
    name_ar: "مستلزمات توريد خاصة بالمشروع",
    shortDescription_en: "Procurement coordinated around a single project's full material and equipment list.",
    shortDescription_ar: "توريد منسّق حول قائمة المواد والمعدات الكاملة لمشروع واحد.",
    longDescription_en:
      "Procurement coordinated around a single project's full material and equipment list, spanning multiple categories and sourced as one coordinated effort rather than separate unrelated orders.",
    longDescription_ar:
      "توريد منسّق حول قائمة المواد والمعدات الكاملة لمشروع واحد، يمتد عبر فئات متعددة ويتم توريده كجهد منسّق واحد بدلاً من طلبات منفصلة غير مترابطة.",
    sectorId: "global-sourcing",
    categoryId: "bulk-materials-industrial-supply",
    relatedProductSlugs: ["bulk-commodity-sourcing", "specialty-equipment-on-request"],
    catalogues: [
      { id: "project-specific-procurement-datasheet", title_en: "Project-Specific Procurement Overview", title_ar: "نظرة عامة على مستلزمات التوريد الخاصة بالمشروع", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "on-request",
    quoteEnabled: true,
  },
];
