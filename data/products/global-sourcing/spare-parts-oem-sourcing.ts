import type { Product } from "@/data/products/types";

/** Global Sourcing & OEM Brands → Spare Parts & OEM Sourcing category. */
export const globalSpartsPartsOemSourcing: Product[] = [
  {
    id: "oem-replacement-parts",
    slug: "oem-replacement-parts",
    name_en: "OEM Replacement Parts",
    name_ar: "قطع غيار بديلة أصلية (OEM)",
    shortDescription_en:
      "OEM replacement parts sourced against your equipment's original part number.",
    shortDescription_ar:
      "قطع غيار بديلة أصلية يتم توريدها وفق رقم القطعة الأصلي لمعداتكم.",
    longDescription_en:
      "OEM replacement parts sourced against your equipment's original part number or manufacturer reference, for equipment across any of GOLTENS' supply categories. Share your part number or nameplate details and we'll confirm sourcing.",
    longDescription_ar:
      "قطع غيار بديلة أصلية يتم توريدها وفق رقم القطعة الأصلي أو مرجع الجهة المصنّعة لمعداتكم، عبر أي من فئات التوريد لدى GOLTENS. شاركونا رقم القطعة أو بيانات اللوحة التعريفية وسنؤكد إمكانية التوريد.",
    sectorId: "global-sourcing",
    categoryId: "spare-parts-oem-sourcing",
    relatedProductSlugs: [
      "non-standard-hard-to-find-items",
      "obsolete-parts-sourcing",
    ],
    catalogues: [
      {
        id: "oem-replacement-parts-datasheet",
        title_en: "OEM Replacement Parts Sourcing Overview",
        title_ar: "نظرة عامة على توريد قطع الغيار الأصلية",
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
    id: "custom-manufactured-components",
    slug: "custom-manufactured-components",
    name_en: "Custom-Manufactured Components",
    name_ar: "مكونات مصنّعة حسب الطلب",
    shortDescription_en:
      "Custom-manufactured components sourced to your drawing or sample.",
    shortDescription_ar:
      "مكونات مصنّعة حسب الطلب يتم توريدها وفق مخططاتكم أو عينتكم.",
    longDescription_en:
      "Custom-manufactured components sourced through our supplier network against your engineering drawing, sample, or reverse-engineered specification, for parts that aren't available off the shelf.",
    longDescription_ar:
      "مكونات مصنّعة حسب الطلب يتم توريدها من خلال شبكة موردينا وفق مخططاتكم الهندسية أو عينتكم أو المواصفات المستخلصة هندسيًا، للقطع غير المتوفرة جاهزة.",
    sectorId: "global-sourcing",
    categoryId: "spare-parts-oem-sourcing",
    relatedProductSlugs: [
      "oem-replacement-parts",
      "spare-parts-all-categories",
    ],
    catalogues: [
      {
        id: "custom-manufactured-components-datasheet",
        title_en: "Custom-Manufactured Components Overview",
        title_ar: "نظرة عامة على المكونات المصنّعة حسب الطلب",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/global-sourcing/custom-manufactured-components.webp",
    ],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "spare-parts-all-categories",
    slug: "spare-parts-all-categories",
    name_en: "Spare Parts (All Categories)",
    name_ar: "قطع الغيار (جميع الفئات)",
    shortDescription_en:
      "Spare parts sourcing across every GOLTENS supply category, not only fixed catalog items.",
    shortDescription_ar:
      "توريد قطع غيار عبر جميع فئات التوريد لدى GOLTENS، وليس فقط الأصناف المدرجة في الكتالوج.",
    longDescription_en:
      "Spare parts sourcing across every GOLTENS supply category — industrial, electrical, fire protection, medical, and more — for equipment already installed at your facility, not only the items listed on our sector pages.",
    longDescription_ar:
      "توريد قطع غيار عبر جميع فئات التوريد لدى GOLTENS — الصناعية والكهربائية ومكافحة الحريق والطبية وغيرها — للمعدات المركّبة بالفعل في منشأتكم، وليس فقط الأصناف المدرجة في صفحات قطاعاتنا.",
    sectorId: "global-sourcing",
    categoryId: "spare-parts-oem-sourcing",
    relatedProductSlugs: [
      "oem-replacement-parts",
      "custom-manufactured-components",
    ],
    catalogues: [
      {
        id: "spare-parts-all-categories-datasheet",
        title_en: "Spare Parts Sourcing Overview",
        title_ar: "نظرة عامة على توريد قطع الغيار",
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
    id: "non-standard-hard-to-find-items",
    slug: "non-standard-hard-to-find-items",
    name_en: "Non-Standard & Hard-to-Find Items",
    name_ar: "أصناف غير قياسية أو نادرة التوفر",
    shortDescription_en:
      "Sourcing support for items that don't fit a standard catalog listing.",
    shortDescription_ar:
      "دعم توريد للأصناف التي لا تندرج ضمن قوائم الكتالوج القياسية.",
    longDescription_en:
      "Sourcing support for non-standard, discontinued, or hard-to-find items, using our international supplier network to confirm availability and sourcing routes on a case-by-case basis.",
    longDescription_ar:
      "دعم توريد للأصناف غير القياسية أو المتوقف تصنيعها أو نادرة التوفر، باستخدام شبكة موردينا الدولية لتأكيد التوافر ومسارات التوريد حسب كل حالة على حدة.",
    sectorId: "global-sourcing",
    categoryId: "spare-parts-oem-sourcing",
    relatedProductSlugs: ["oem-replacement-parts", "obsolete-parts-sourcing"],
    catalogues: [
      {
        id: "non-standard-hard-to-find-items-datasheet",
        title_en: "Non-Standard Items Sourcing Overview",
        title_ar: "نظرة عامة على توريد الأصناف غير القياسية",
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
    id: "obsolete-parts-sourcing",
    slug: "obsolete-parts-sourcing",
    name_en: "Obsolete & Discontinued Parts Sourcing",
    name_ar: "توريد قطع الغيار المتوقفة والقديمة",
    shortDescription_en:
      "Sourcing support for parts no longer produced by the original manufacturer.",
    shortDescription_ar:
      "دعم توريد للقطع التي لم تعد الجهة المصنّعة الأصلية تنتجها.",
    longDescription_en:
      "Sourcing support for obsolete or discontinued parts no longer produced by the original manufacturer, checking our supplier network for remaining stock or equivalent replacements.",
    longDescription_ar:
      "دعم توريد للقطع المتوقفة أو القديمة التي لم تعد الجهة المصنّعة الأصلية تنتجها، من خلال البحث في شبكة موردينا عن مخزون متبقٍ أو بدائل معادلة.",
    sectorId: "global-sourcing",
    categoryId: "spare-parts-oem-sourcing",
    relatedProductSlugs: [
      "non-standard-hard-to-find-items",
      "spare-parts-all-categories",
    ],
    catalogues: [
      {
        id: "obsolete-parts-sourcing-datasheet",
        title_en: "Obsolete Parts Sourcing Overview",
        title_ar: "نظرة عامة على توريد القطع المتوقفة",
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
