import type { Product } from "@/data/products/types";

/** Hospital Equipment & Medical Supplies → Hospital Beds & Patient Handling category. */
export const healthcareHospitalBedsPatientHandling: Product[] = [
  {
    id: "electric-hospital-beds",
    slug: "electric-hospital-beds",
    name_en: "Electric Hospital Beds",
    name_ar: "أسرّة مستشفى كهربائية",
    shortDescription_en:
      "Electrically adjustable hospital beds for general wards and patient rooms.",
    shortDescription_ar:
      "أسرّة مستشفى قابلة للتعديل كهربائياً للأقسام العامة وغرف المرضى.",
    longDescription_en:
      "Electrically adjustable hospital beds for general wards and patient rooms, sourced to your section-adjustment, mobility, and side-rail requirement.",
    longDescription_ar:
      "أسرّة مستشفى قابلة للتعديل كهربائياً للأقسام العامة وغرف المرضى، يتم توريدها وفق متطلبات تعديل الأقسام وقابلية الحركة والحواجز الجانبية لديكم.",
    sectorId: "healthcare",
    categoryId: "hospital-beds-patient-handling",
    features_en: [
      "Electric height, backrest, and knee-section adjustment",
      "Foldable side rails for patient safety",
      "Castor-mounted base with central locking",
    ],
    features_ar: [
      "تعديل كهربائي للارتفاع ومسند الظهر وقسم الركبة",
      "حواجز جانبية قابلة للطي لسلامة المريض",
      "قاعدة متحركة على عجلات مع قفل مركزي",
    ],
    specifications: [
      {
        label_en: "Adjustment sections",
        label_ar: "أقسام التعديل",
        value: "Height, backrest, and knee-section, electrically actuated",
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
      {
        label_en: "Side rails",
        label_ar: "الحواجز الجانبية",
        value: "Foldable, full or split-rail options",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Mobility",
        label_ar: "قابلية الحركة",
        value: "Castor-mounted with central braking system",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured/tested to IEC 60601-2-52 for medical beds",
      },
    ],
    applications_en: [
      "General ward patient rooms",
      "Private and semi-private inpatient rooms",
      "Step-down and high-dependency units",
      "Rehabilitation and long-stay care wards",
      "Maternity and postnatal wards",
    ],
    applications_ar: [
      "غرف المرضى بالأقسام العامة",
      "الغرف الخاصة وشبه الخاصة للمرضى المقيمين",
      "وحدات الرعاية المتوسطة وعالية الاعتماد",
      "أقسام إعادة التأهيل والإقامة الطويلة",
      "أقسام الولادة وما بعد الولادة",
    ],
    relatedProductSlugs: ["icu-beds", "manual-hospital-beds-stretchers"],
    catalogues: [
      {
        id: "electric-hospital-beds-datasheet",
        title_en: "Electric Hospital Beds Datasheet",
        title_ar: "نشرة بيانات الأسرّة الكهربائية",
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
    id: "icu-beds",
    slug: "icu-beds",
    name_en: "ICU Beds",
    name_ar: "أسرّة العناية المركزة",
    shortDescription_en:
      "Multi-function intensive-care beds for critical-care and high-dependency units.",
    shortDescription_ar:
      "أسرّة متعددة الوظائف للعناية المركزة ووحدات الرعاية عالية الاعتماد.",
    longDescription_en:
      "Multi-function intensive-care beds for critical-care and high-dependency units, sourced to your unit's positioning, CPR-release, and equipment-mounting requirement.",
    longDescription_ar:
      "أسرّة متعددة الوظائف للعناية المركزة ووحدات الرعاية عالية الاعتماد، يتم توريدها وفق متطلبات وضعية المريض وتحرير الإنعاش القلبي الرئوي وتركيب المعدات بوحدتكم.",
    sectorId: "healthcare",
    categoryId: "hospital-beds-patient-handling",
    features_en: [
      "Multi-section electric adjustment with Trendelenburg/reverse-Trendelenburg positioning",
      "CPR quick-release backrest mechanism",
      "Integrated rails for infusion pumps, monitors, and accessories",
    ],
    features_ar: [
      "تعديل كهربائي متعدد الأقسام مع وضعيات ترندلينبرغ والعكسية",
      "آلية تحرير سريع لمسند الظهر عند الإنعاش القلبي الرئوي",
      "سكك مدمجة لتركيب مضخات التسريب وأجهزة المراقبة والملحقات",
    ],
    specifications: [
      {
        label_en: "Positioning",
        label_ar: "الوضعيات",
        value:
          "Multi-section electric adjustment including Trendelenburg/reverse-Trendelenburg",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "CPR function",
        label_ar: "وظيفة الإنعاش",
        value: "Quick-release backrest for emergency flat positioning",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Equipment mounting",
        label_ar: "تركيب المعدات",
        value: "Integrated rail system for pumps, monitors, and accessories",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Frame material",
        label_ar: "خامة الهيكل",
        value: "Reinforced steel frame, model-dependent",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured/tested to IEC 60601-2-52 for medical beds",
      },
    ],
    applications_en: [
      "Intensive care unit (ICU) patient rooms",
      "Coronary care and cardiac ICU",
      "High-dependency and step-down units",
      "Post-operative critical-care recovery",
      "Isolation and infectious-disease critical care",
    ],
    applications_ar: [
      "غرف مرضى وحدة العناية المركزة",
      "العناية بأمراض القلب والعناية المركزة القلبية",
      "وحدات الرعاية عالية الاعتماد والرعاية المتوسطة",
      "الرعاية الحرجة بعد العمليات",
      "الرعاية الحرجة للعزل والأمراض المعدية",
    ],
    relatedProductSlugs: [
      "electric-hospital-beds",
      "manual-hospital-beds-stretchers",
    ],
    catalogues: [
      {
        id: "icu-beds-datasheet",
        title_en: "ICU Beds Datasheet",
        title_ar: "نشرة بيانات أسرّة العناية المركزة",
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
    id: "manual-hospital-beds-stretchers",
    slug: "manual-hospital-beds-stretchers",
    name_en: "Manual Hospital Beds & Stretchers",
    name_ar: "أسرّة مستشفى يدوية ونقالات",
    shortDescription_en:
      "Manually adjustable hospital beds and patient stretchers for general and transport use.",
    shortDescription_ar:
      "أسرّة مستشفى قابلة للتعديل يدوياً ونقالات مرضى للاستخدام العام والنقل.",
    longDescription_en:
      "Manually adjustable hospital beds and patient stretchers for general wards, transport, and emergency use, sourced to your facility's mobility and section-adjustment requirement.",
    longDescription_ar:
      "أسرّة مستشفى قابلة للتعديل يدوياً ونقالات مرضى للأقسام العامة والنقل والاستخدام في الطوارئ، يتم توريدها وفق متطلبات قابلية الحركة وتعديل الأقسام بمنشأتكم.",
    sectorId: "healthcare",
    categoryId: "hospital-beds-patient-handling",
    features_en: [
      "Crank-operated (manual) height and backrest adjustment on beds",
      "Foldable and fixed-frame stretcher options",
      "Castor-mounted for ward-to-ward and inter-department transport",
    ],
    features_ar: [
      "تعديل يدوي للارتفاع ومسند الظهر عبر مقبض تدوير بالأسرّة",
      "خيارات نقالات قابلة للطي أو ثابتة الهيكل",
      "متحركة على عجلات للنقل بين الأقسام",
    ],
    specifications: [
      {
        label_en: "Adjustment type",
        label_ar: "نوع التعديل",
        value: "Manual, crank-operated height and backrest adjustment",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Stretcher configuration",
        label_ar: "تكوين النقالة",
        value: "Foldable transport or fixed-frame emergency stretcher options",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Frame material",
        label_ar: "خامة الهيكل",
        value: "Powder-coated or stainless steel frame options",
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
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured/tested to IEC 60601-2-52 for medical beds",
      },
    ],
    applications_en: [
      "General ward patient rooms with basic adjustment needs",
      "Emergency department patient transport",
      "Ambulance and inter-facility patient transfer",
      "Radiology and diagnostic-department transport",
      "Overflow and surge-capacity ward setups",
    ],
    applications_ar: [
      "غرف المرضى بالأقسام العامة ذات الاحتياج البسيط للتعديل",
      "نقل المرضى بقسم الطوارئ",
      "النقل بسيارات الإسعاف والتحويل بين المنشآت",
      "النقل لقسمي الأشعة والتشخيص",
      "إعدادات الأقسام الإضافية وطاقة الاستيعاب الطارئة",
    ],
    relatedProductSlugs: ["electric-hospital-beds", "icu-beds"],
    catalogues: [
      {
        id: "manual-hospital-beds-stretchers-datasheet",
        title_en: "Manual Hospital Beds & Stretchers Datasheet",
        title_ar: "نشرة بيانات الأسرّة اليدوية والنقالات",
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
