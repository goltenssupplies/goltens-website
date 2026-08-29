import type { Product } from "@/data/products/types";

/** Hospital Equipment & Medical Supplies → Medical Furniture, Trolleys & Carts category. */
export const healthcareMedicalFurnitureTrolleysCarts: Product[] = [
  {
    id: "examination-beds-couches",
    slug: "examination-beds-couches",
    name_en: "Examination Beds & Couches",
    name_ar: "أسرّة وكراسي الفحص",
    shortDescription_en:
      "Examination beds and couches for clinics, outpatient rooms, and consultation areas.",
    shortDescription_ar:
      "أسرّة وكراسي فحص للعيادات وغرف العيادات الخارجية ومناطق الاستشارة.",
    longDescription_en:
      "Examination beds and couches for clinics and outpatient consultation rooms, sourced to your adjustment method, upholstery, and accessory requirement.",
    longDescription_ar:
      "أسرّة وكراسي فحص للعيادات وغرف الاستشارة بالعيادات الخارجية، يتم توريدها وفق طريقة التعديل والتنجيد والملحقات المطلوبة لديكم.",
    sectorId: "healthcare",
    categoryId: "medical-furniture-trolleys-carts",
    features_en: [
      "Manual or electric height and backrest adjustment options",
      "Wipeable, medical-grade upholstery",
      "Optional stirrups, paper-roll holder, and drawer storage",
    ],
    features_ar: [
      "خيارات تعديل يدوي أو كهربائي للارتفاع ومسند الظهر",
      "تنجيد طبي قابل للمسح والتنظيف",
      "ركاب اختياري وحامل ورق ودرج تخزين",
    ],
    specifications: [
      {
        label_en: "Adjustment type",
        label_ar: "نوع التعديل",
        value: "Manual (gas-strut/crank) or electric height adjustment",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Upholstery",
        label_ar: "التنجيد",
        value: "Medical-grade, wipeable vinyl upholstery",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Accessories",
        label_ar: "الملحقات",
        value: "Stirrups, paper-roll holder, and storage drawer options",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Frame material",
        label_ar: "خامة الهيكل",
        value: "Powder-coated steel frame, model-dependent",
        group_en: "Materials",
        group_ar: "الخامات",
      },
    ],
    applications_en: [
      "Outpatient consultation and examination rooms",
      "General practice and specialist clinics",
      "Gynecology and obstetrics examination rooms",
      "Physiotherapy and rehabilitation assessment areas",
      "Occupational-health and screening clinics",
    ],
    applications_ar: [
      "غرف الاستشارة والفحص بالعيادات الخارجية",
      "عيادات الطب العام والعيادات المتخصصة",
      "غرف فحص أمراض النساء والتوليد",
      "مناطق تقييم العلاج الطبيعي وإعادة التأهيل",
      "عيادات الطب المهني والفحص الدوري",
    ],
    relatedProductSlugs: ["bedside-cabinets", "medical-emergency-trolleys"],
    catalogues: [
      {
        id: "examination-beds-couches-datasheet",
        title_en: "Examination Beds & Couches Datasheet",
        title_ar: "نشرة بيانات أسرّة وكراسي الفحص",
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
    id: "bedside-cabinets",
    slug: "bedside-cabinets",
    name_en: "Bedside Cabinets",
    name_ar: "خزائن بجانب السرير",
    shortDescription_en:
      "Bedside cabinets and overbed tables for patient rooms and wards.",
    shortDescription_ar:
      "خزائن بجانب السرير وطاولات فوق السرير لغرف المرضى والأقسام.",
    longDescription_en:
      "Bedside cabinets and overbed tables for patient rooms and wards, sourced to your storage-layout and wipeable-surface requirement.",
    longDescription_ar:
      "خزائن بجانب السرير وطاولات فوق السرير لغرف المرضى والأقسام، يتم توريدها وفق تصميم التخزين ومتطلبات الأسطح القابلة للمسح لديكم.",
    sectorId: "healthcare",
    categoryId: "medical-furniture-trolleys-carts",
    features_en: [
      "Combined bedside cabinet and pull-out overbed table options",
      "Wipeable laminate or stainless steel surfaces",
      "Castor-mounted for repositioning at bedside",
    ],
    features_ar: [
      "خيارات دمج خزانة السرير مع طاولة قابلة للسحب فوق السرير",
      "أسطح لامينيت أو ستانلس ستيل قابلة للمسح",
      "متحركة على عجلات لإعادة التموضع بجانب السرير",
    ],
    specifications: [
      {
        label_en: "Configuration",
        label_ar: "التكوين",
        value: "Cabinet-only, or combined cabinet with pull-out overbed table",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Surface material",
        label_ar: "خامة السطح",
        value: "Wipeable laminate or stainless steel top",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Mobility",
        label_ar: "قابلية الحركة",
        value: "Castor-mounted with locking wheels",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Storage",
        label_ar: "التخزين",
        value: "Drawer and cupboard compartments, layout model-dependent",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
    ],
    applications_en: [
      "General ward patient rooms",
      "Private and semi-private inpatient rooms",
      "ICU and high-dependency unit bedside storage",
      "Maternity and postnatal ward rooms",
      "Long-stay and rehabilitation care rooms",
    ],
    applications_ar: [
      "غرف المرضى بالأقسام العامة",
      "الغرف الخاصة وشبه الخاصة للمرضى المقيمين",
      "التخزين بجانب السرير بوحدات العناية المركزة والرعاية عالية الاعتماد",
      "غرف أقسام الولادة وما بعد الولادة",
      "غرف الرعاية طويلة الإقامة وإعادة التأهيل",
    ],
    relatedProductSlugs: [
      "examination-beds-couches",
      "medical-emergency-trolleys",
    ],
    catalogues: [
      {
        id: "bedside-cabinets-datasheet",
        title_en: "Bedside Cabinets Datasheet",
        title_ar: "نشرة بيانات خزائن بجانب السرير",
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
    id: "medical-emergency-trolleys",
    slug: "medical-emergency-trolleys",
    name_en: "Medical & Emergency Trolleys",
    name_ar: "عربات طبية وعربات طوارئ",
    shortDescription_en:
      "Treatment, dressing, and instrument trolleys for wards and procedure areas.",
    shortDescription_ar: "عربات علاج وتضميد وأدوات للأقسام ومناطق الإجراءات.",
    longDescription_en:
      "Treatment, dressing, and instrument trolleys for wards and procedure areas, sourced to your shelf configuration and material requirement.",
    longDescription_ar:
      "عربات علاج وتضميد وأدوات للأقسام ومناطق الإجراءات، يتم توريدها وفق تكوين الأرفف والخامة المطلوبة لديكم.",
    sectorId: "healthcare",
    categoryId: "medical-furniture-trolleys-carts",
    features_en: [
      "Multi-shelf and multi-drawer configurations",
      "Stainless steel or powder-coated steel construction",
      "Castor-mounted with brake for stable positioning",
    ],
    features_ar: [
      "تكوينات متعددة الأرفف والأدراج",
      "تصنيع من الستانلس ستيل أو الصلب مطلي بالمسحوق",
      "متحركة على عجلات مزودة بفرامل لثبات التموضع",
    ],
    specifications: [
      {
        label_en: "Configuration",
        label_ar: "التكوين",
        value: "Multi-shelf trolley or multi-drawer cart, model-dependent",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Construction material",
        label_ar: "خامة التصنيع",
        value: "Stainless steel (AISI 304) or powder-coated steel",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Mobility",
        label_ar: "قابلية الحركة",
        value: "Castor-mounted, swivel and locking wheel options",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
    ],
    applications_en: [
      "Ward dressing and treatment rounds",
      "Instrument and supply transport within departments",
      "Procedure-room and minor-surgery setups",
      "Isolation-ward supply trolleys",
      "General housekeeping and supply distribution",
    ],
    applications_ar: [
      "جولات التضميد والعلاج بالأقسام",
      "نقل الأدوات والمستلزمات داخل الأقسام",
      "تجهيزات غرف الإجراءات والجراحة البسيطة",
      "عربات مستلزمات أقسام العزل",
      "التوزيع العام للمستلزمات وأعمال النظافة",
    ],
    relatedProductSlugs: ["examination-beds-couches", "bedside-cabinets"],
    catalogues: [
      {
        id: "medical-emergency-trolleys-datasheet",
        title_en: "Medical & Emergency Trolleys Datasheet",
        title_ar: "نشرة بيانات العربات الطبية وعربات الطوارئ",
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
