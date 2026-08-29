import type { Product } from "@/data/products/types";

/** Hospital Equipment & Medical Supplies → Sterilization & Operating Room Equipment category. */
export const healthcareSterilizationOperatingRoomEquipment: Product[] = [
  {
    id: "autoclaves-sterilizers",
    slug: "autoclaves-sterilizers",
    name_en: "Autoclaves & Sterilizers",
    name_ar: "أجهزة التعقيم بالبخار (أوتوكلاف)",
    shortDescription_en:
      "Steam autoclaves and sterilizers for reprocessing hospital instruments and supplies.",
    shortDescription_ar:
      "أجهزة تعقيم بالبخار لإعادة تعقيم الأدوات والمستلزمات بالمستشفى.",
    longDescription_en:
      "Steam autoclaves and sterilizers for central sterile services and departmental reprocessing, sourced to your chamber-capacity and cycle-type requirement.",
    longDescription_ar:
      "أجهزة تعقيم بالبخار لخدمات التعقيم المركزي والتعقيم على مستوى الأقسام، يتم توريدها وفق سعة الحجرة ونوع الدورة المطلوبة لديكم.",
    sectorId: "healthcare",
    categoryId: "sterilization-operating-room-equipment",
    features_en: [
      "Benchtop and floor-standing (large-chamber) configurations",
      "Pre-vacuum and gravity-displacement cycle options",
      "Digital cycle control with printed or logged cycle records",
    ],
    features_ar: [
      "تكوينات مكتبية أو أرضية (حجرة كبيرة)",
      "خيارات دورة بالتفريغ المسبق أو بالإزاحة الجاذبية",
      "تحكم رقمي بالدورة مع سجلات مطبوعة أو محفوظة",
    ],
    specifications: [
      {
        label_en: "Chamber configuration",
        label_ar: "تكوين الحجرة",
        value: "Benchtop or floor-standing, capacity model-dependent",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Cycle type",
        label_ar: "نوع الدورة",
        value: "Pre-vacuum (Class B) or gravity-displacement cycles",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Control",
        label_ar: "التحكم",
        value: "Digital programmable control with cycle documentation",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured/tested to EN 13060 (small steam sterilizers) or ISO 17665 (moist heat sterilization)",
      },
    ],
    applications_en: [
      "Central sterile services department (CSSD) reprocessing",
      "Operating room instrument sterilization",
      "Dental and minor-procedure instrument reprocessing",
      "Laboratory media and waste sterilization",
      "Departmental point-of-use sterilization",
    ],
    applications_ar: [
      "إعادة التعقيم بقسم خدمات التعقيم المركزي",
      "تعقيم أدوات غرف العمليات",
      "إعادة تعقيم أدوات طب الأسنان والإجراءات البسيطة",
      "تعقيم أوساط المختبر والنفايات",
      "التعقيم عند نقطة الاستخدام على مستوى الأقسام",
    ],
    relatedProductSlugs: ["operating-tables", "surgical-lighting"],
    catalogues: [
      {
        id: "autoclaves-sterilizers-datasheet",
        title_en: "Autoclaves & Sterilizers Datasheet",
        title_ar: "نشرة بيانات أجهزة التعقيم بالبخار",
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
    id: "operating-tables",
    slug: "operating-tables",
    name_en: "Operating Tables",
    name_ar: "طاولات العمليات",
    shortDescription_en:
      "Manual and electro-hydraulic operating tables for general and specialized surgery.",
    shortDescription_ar:
      "طاولات عمليات يدوية وكهروهيدروليكية للجراحة العامة والمتخصصة.",
    longDescription_en:
      "Manual and electro-hydraulic operating tables for general and specialized surgery, sourced to your operating room's positioning, accessory, and imaging-compatibility requirement.",
    longDescription_ar:
      "طاولات عمليات يدوية وكهروهيدروليكية للجراحة العامة والمتخصصة، يتم توريدها وفق متطلبات وضعية المريض والملحقات والتوافق مع أجهزة التصوير بغرفة العمليات لديكم.",
    sectorId: "healthcare",
    categoryId: "sterilization-operating-room-equipment",
    features_en: [
      "Manual (mechanical) or electro-hydraulic height/tilt adjustment",
      "Radiolucent tabletop options for intra-operative imaging",
      "Modular accessory-rail system for positioning attachments",
    ],
    features_ar: [
      "تعديل الارتفاع والميلان يدوياً (ميكانيكياً) أو كهروهيدروليكياً",
      "خيارات سطح شفاف للأشعة للتصوير أثناء العملية",
      "نظام سكة ملحقات معياري لتثبيت أدوات وضعية المريض",
    ],
    specifications: [
      {
        label_en: "Adjustment type",
        label_ar: "نوع التعديل",
        value: "Manual (mechanical) or electro-hydraulic",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Tabletop",
        label_ar: "السطح",
        value: "Radiolucent (carbon-fiber) or standard tabletop options",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Mobility",
        label_ar: "قابلية الحركة",
        value: "Fixed base or mobile/transportable base options",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured/tested to IEC 60601-2-46 for operating tables",
      },
    ],
    applications_en: [
      "General surgery operating rooms",
      "Orthopedic and trauma surgery",
      "Imaging-guided (C-arm compatible) procedures",
      "Day-surgery and minor-procedure suites",
      "Specialized surgical departments per hospital requirement",
    ],
    applications_ar: [
      "غرف عمليات الجراحة العامة",
      "جراحة العظام والإصابات",
      "الإجراءات الموجهة بالتصوير (متوافقة مع C-arm)",
      "وحدات الجراحة النهارية والإجراءات البسيطة",
      "الأقسام الجراحية المتخصصة وفق احتياج المستشفى",
    ],
    relatedProductSlugs: ["autoclaves-sterilizers", "surgical-lighting"],
    catalogues: [
      {
        id: "operating-tables-datasheet",
        title_en: "Operating Tables Datasheet",
        title_ar: "نشرة بيانات طاولات العمليات",
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
    id: "surgical-lighting",
    slug: "surgical-lighting",
    name_en: "Surgical Lighting",
    name_ar: "إضاءة غرف العمليات",
    shortDescription_en:
      "Ceiling-mounted and mobile LED surgical lights for operating rooms and procedure areas.",
    shortDescription_ar:
      "إضاءة جراحية بتقنية LED مثبتة بالسقف أو متحركة لغرف العمليات ومناطق الإجراءات.",
    longDescription_en:
      "Ceiling-mounted and mobile LED surgical lights for operating rooms and procedure areas, sourced to your room's mounting configuration and illumination-field requirement.",
    longDescription_ar:
      "إضاءة جراحية بتقنية LED مثبتة بالسقف أو متحركة لغرف العمليات ومناطق الإجراءات، يتم توريدها وفق تكوين التركيب بالغرفة ومجال الإضاءة المطلوب.",
    sectorId: "healthcare",
    categoryId: "sterilization-operating-room-equipment",
    features_en: [
      "Ceiling-mounted (single or dual-head) or mobile floor-stand options",
      "LED light source with adjustable color temperature",
      "Sterilizable handle options for surgeon-side adjustment",
    ],
    features_ar: [
      "خيارات تثبيت بالسقف (رأس واحد أو مزدوج) أو حامل أرضي متحرك",
      "مصدر إضاءة LED بدرجة حرارة لون قابلة للتعديل",
      "خيارات مقبض قابل للتعقيم لتعديل الجراح مباشرة",
    ],
    specifications: [
      {
        label_en: "Configuration",
        label_ar: "التكوين",
        value: "Ceiling-mounted (single/dual-head) or mobile floor-stand",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Light source",
        label_ar: "مصدر الإضاءة",
        value: "LED, with adjustable color temperature and field diameter",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Handle",
        label_ar: "المقبض",
        value: "Removable, autoclavable sterile handle options",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured/tested to IEC 60601-2-41 for surgical luminaires",
      },
    ],
    applications_en: [
      "Operating room primary and secondary lighting",
      "Minor-procedure and examination rooms",
      "Emergency department procedure bays",
      "Delivery rooms and labor suites",
      "Outpatient minor-surgery clinics",
    ],
    applications_ar: [
      "الإضاءة الرئيسية والثانوية بغرف العمليات",
      "غرف الإجراءات البسيطة والفحص",
      "أماكن الإجراءات بقسم الطوارئ",
      "غرف الولادة والمخاض",
      "عيادات الجراحة البسيطة بالعيادات الخارجية",
    ],
    relatedProductSlugs: ["operating-tables", "autoclaves-sterilizers"],
    catalogues: [
      {
        id: "surgical-lighting-datasheet",
        title_en: "Surgical Lighting Datasheet",
        title_ar: "نشرة بيانات إضاءة غرف العمليات",
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
