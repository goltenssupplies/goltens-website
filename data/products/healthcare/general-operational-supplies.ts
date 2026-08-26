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
    features_en: [
      "Head, eye, hand, foot, and respiratory protection ranges",
      "Sized and matched to your team's specific task exposure",
      "Bulk stock replenishment for ongoing team requirements",
    ],
    features_ar: [
      "مجموعات حماية للرأس والعين واليد والقدم والجهاز التنفسي",
      "مقاسة ومطابقة لطبيعة المهام لدى فريقكم",
      "تجديد مخزون بالجملة للاحتياجات المستمرة لفريقكم",
    ],
    specifications: [
      {
        label_en: "Protection categories",
        label_ar: "فئات الحماية",
        value: "Head, eye/face, hand, foot, respiratory, and fall protection",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Sizing range",
        label_ar: "نطاق المقاسات",
        value: "Standard adult sizing ranges across all categories",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Packaging format",
        label_ar: "طريقة التعبئة",
        value: "Individual units to bulk case quantities",
        group_en: "Supply",
        group_ar: "التوريد",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically sourced to items meeting recognized PPE standards (e.g. EN 166, EN 388, EN 20345) as specified per item",
      },
    ],
    applications_en: [
      "Daily PPE for facility and maintenance team members",
      "Contractor site safety compliance for works on hospital premises",
      "Chemical-handling protection for engineering staff",
      "Electrical work protection for hospital electrical teams",
      "General grounds and back-of-house staff safety equipment",
    ],
    applications_ar: [
      "معدات وقاية يومية لأفراد فريق المرافق والصيانة",
      "الامتثال لمتطلبات السلامة للمقاولين العاملين بمرافق المستشفى",
      "حماية موظفي الهندسة عند التعامل مع الكيماويات",
      "حماية فرق الكهرباء أثناء أعمال الصيانة الكهربائية",
      "معدات سلامة عامة لفرق الحدائق ومناطق الخدمات",
    ],
    relatedProductSlugs: [
      "general-operational-consumables",
      "operational-sourcing-procurement-support",
    ],
    relatedBrandSlugs: ["3m", "honeywell", "msa"],
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
    features_en: [
      "Consolidated ordering across multiple consumable categories",
      "Standard supply increments matched to your reorder cycle",
      "Sourced for recurring, low-value departmental items",
    ],
    features_ar: [
      "طلب موحّد عبر فئات متعددة من المستهلكات",
      "أحجام توريد قياسية وفق دورة إعادة الطلب لديكم",
      "توريد للأصناف التشغيلية المتكررة منخفضة القيمة",
    ],
    specifications: [
      {
        label_en: "Category range",
        label_ar: "نطاق الفئات",
        value: "General hardware, fasteners, packaging, and labeling supplies",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Packaging format",
        label_ar: "طريقة التعبئة",
        value: "Individual units to bulk case quantities",
        group_en: "Supply",
        group_ar: "التوريد",
      },
      {
        label_en: "Order type",
        label_ar: "نوع الطلب",
        value: "One-off or recurring/scheduled supply",
        group_en: "Supply",
        group_ar: "التوريد",
      },
      {
        label_en: "Coordination",
        label_ar: "التنسيق",
        value: "Consolidated across categories under a single purchase order",
        group_en: "Supply",
        group_ar: "التوريد",
      },
    ],
    applications_en: [
      "General storeroom stock replenishment",
      "Administrative and back-office consumable supply",
      "General hardware and fastener stock for facility departments",
      "Packaging and labeling materials for internal logistics",
      "Recurring low-value item procurement across departments",
    ],
    applications_ar: [
      "تجديد مخزون المستودعات العامة",
      "توريد المستهلكات الإدارية والمكتبية",
      "مخزون الأدوات والمثبتات العامة لأقسام المرافق",
      "مواد التعبئة والوسم للوجستيات الداخلية",
      "توريد الأصناف المتكررة منخفضة القيمة عبر الأقسام",
    ],
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
    features_en: [
      "Sourcing for hard-to-find or non-catalogue items",
      "Access to an international supplier network",
      "Single point of coordination across multiple item categories",
    ],
    features_ar: [
      "توريد للأصناف نادرة التوفر أو غير المدرجة بالكتالوج",
      "الوصول إلى شبكة موردين دولية",
      "جهة تنسيق واحدة عبر فئات متعددة من الأصناف",
    ],
    specifications: [
      {
        label_en: "Sourcing scope",
        label_ar: "نطاق التوريد",
        value: "Single item to multi-category procurement requests",
        group_en: "Scope",
        group_ar: "النطاق",
      },
      {
        label_en: "Response format",
        label_ar: "شكل الرد",
        value: "RFQ-based quotation with confirmed availability and lead time",
        group_en: "Process",
        group_ar: "العملية",
      },
      {
        label_en: "Sourcing network",
        label_ar: "شبكة التوريد",
        value: "Regional and international supplier network",
        group_en: "Scope",
        group_ar: "النطاق",
      },
      {
        label_en: "Delivery coordination",
        label_ar: "تنسيق التوريد",
        value: "Coordinated delivery scheduling for multi-item requests",
        group_en: "Process",
        group_ar: "العملية",
      },
    ],
    applications_en: [
      "Sourcing hard-to-find or discontinued items",
      "One-off specialized procurement requests",
      "Consolidating multiple category purchases under one purchase order",
      "Urgent or time-sensitive procurement coordination",
      "Tender and framework agreement supply support",
    ],
    applications_ar: [
      "توريد الأصناف نادرة التوفر أو المتوقف تصنيعها",
      "طلبات توريد متخصصة لمرة واحدة",
      "توحيد مشتريات فئات متعددة تحت أمر شراء واحد",
      "تنسيق طلبات التوريد العاجلة والحساسة زمنيًا",
      "دعم التوريد للمناقصات والاتفاقيات الإطارية",
    ],
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
