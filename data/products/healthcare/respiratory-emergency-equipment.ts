import type { Product } from "@/data/products/types";

/** Hospital Equipment & Medical Supplies → Respiratory & Emergency Equipment category. */
export const healthcareRespiratoryEmergencyEquipment: Product[] = [
  {
    id: "oxygen-concentrators",
    slug: "oxygen-concentrators",
    name_en: "Oxygen Concentrators",
    name_ar: "أجهزة تركيز الأكسجين",
    shortDescription_en:
      "Medical oxygen concentrators for ward, bedside, and portable oxygen therapy.",
    shortDescription_ar:
      "أجهزة تركيز أكسجين طبية للعلاج بالأكسجين بالأقسام وبجانب السرير وبشكل محمول.",
    longDescription_en:
      "Medical oxygen concentrators for continuous oxygen therapy, sourced to your ward's fixed or portable delivery requirement and required flow-rate range.",
    longDescription_ar:
      "أجهزة تركيز أكسجين طبية للعلاج المستمر بالأكسجين، يتم توريدها وفق احتياج القسم للتوريد الثابت أو المحمول ونطاق معدل التدفق المطلوب.",
    sectorId: "healthcare",
    categoryId: "respiratory-emergency-equipment",
    features_en: [
      "Fixed (stationary) and portable configurations available",
      "Adjustable flow-rate control with visual flow indicator",
      "Audible alarm for power failure and low-oxygen conditions",
    ],
    features_ar: [
      "تكوينات ثابتة ومحمولة عند الطلب",
      "تحكم في معدل التدفق قابل للتعديل مع مؤشر تدفق مرئي",
      "إنذار صوتي عند انقطاع الكهرباء أو انخفاض تركيز الأكسجين",
    ],
    specifications: [
      {
        label_en: "Configuration",
        label_ar: "التكوين",
        value: "Stationary bedside unit or portable battery-powered unit",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Flow-rate range",
        label_ar: "نطاق معدل التدفق",
        value: "Approx. 0.5 – 10 L/min, model-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Power supply",
        label_ar: "مصدر الطاقة",
        value: "Mains-powered; battery-backed on portable models",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured/tested to ISO 80601-2-69 for oxygen concentrator equipment",
      },
    ],
    applications_en: [
      "General ward oxygen therapy",
      "Bedside supplemental oxygen delivery",
      "Patient transport and portable oxygen supply",
      "Step-down and home-care oxygen therapy",
      "Backup oxygen supply for facilities without central piped systems",
    ],
    applications_ar: [
      "العلاج بالأكسجين بالأقسام العامة",
      "توريد الأكسجين التكميلي بجانب السرير",
      "نقل المرضى وتوريد الأكسجين المحمول",
      "العلاج بالأكسجين للرعاية المتوسطة والمنزلية",
      "توريد أكسجين احتياطي للمنشآت التي لا تملك شبكة مركزية",
    ],
    relatedProductSlugs: [
      "medical-suction-units",
      "emergency-resuscitation-carts",
    ],
    catalogues: [
      {
        id: "oxygen-concentrators-datasheet",
        title_en: "Oxygen Concentrators Datasheet",
        title_ar: "نشرة بيانات أجهزة تركيز الأكسجين",
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
    id: "medical-suction-units",
    slug: "medical-suction-units",
    name_en: "Medical Suction Units",
    name_ar: "أجهزة الشفط الطبي",
    shortDescription_en:
      "Portable and wall-mounted medical suction units for airway and wound-care applications.",
    shortDescription_ar:
      "أجهزة شفط طبي محمولة وثابتة على الحائط لتطبيقات الشفط التنفسي والعناية بالجروح.",
    longDescription_en:
      "Portable and fixed medical suction units for airway clearance and wound-care applications, sourced to your department's mobility and vacuum-range requirement.",
    longDescription_ar:
      "أجهزة شفط طبي محمولة وثابتة لتطبيقات تنظيف مجرى الهواء والعناية بالجروح، يتم توريدها وفق احتياج القسم لقابلية الحمل ونطاق التفريغ المطلوب.",
    sectorId: "healthcare",
    categoryId: "respiratory-emergency-equipment",
    features_en: [
      "Portable, battery-backed and wall-mounted configurations",
      "Adjustable vacuum control with gauge display",
      "Reusable and single-use collection canister options",
    ],
    features_ar: [
      "تكوينات محمولة ببطارية احتياطية أو ثابتة على الحائط",
      "تحكم في التفريغ قابل للتعديل مع مقياس عرض",
      "خيارات أوعية تجميع قابلة لإعادة الاستخدام أو للاستخدام مرة واحدة",
    ],
    specifications: [
      {
        label_en: "Configuration",
        label_ar: "التكوين",
        value: "Portable/battery-backed unit or fixed wall-mounted unit",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Vacuum range",
        label_ar: "نطاق التفريغ",
        value: "Adjustable, application-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Collection canister",
        label_ar: "وعاء التجميع",
        value: "Reusable autoclavable jar or single-use liner options",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured/tested to the ISO 10079 series for medical suction equipment",
      },
    ],
    applications_en: [
      "Airway clearance in emergency and critical care settings",
      "Post-operative wound and surgical-site drainage",
      "General ward and outpatient minor-procedure suction",
      "Ambulance and patient-transport suction support",
      "Delivery and neonatal care suction applications",
    ],
    applications_ar: [
      "تنظيف مجرى الهواء في الطوارئ والرعاية الحرجة",
      "تصريف الجروح والموقع الجراحي بعد العمليات",
      "الشفط للإجراءات البسيطة بالأقسام العامة والعيادات الخارجية",
      "دعم الشفط في سيارات الإسعاف ونقل المرضى",
      "تطبيقات الشفط في الولادة ورعاية حديثي الولادة",
    ],
    relatedProductSlugs: [
      "oxygen-concentrators",
      "emergency-resuscitation-carts",
    ],
    catalogues: [
      {
        id: "medical-suction-units-datasheet",
        title_en: "Medical Suction Units Datasheet",
        title_ar: "نشرة بيانات أجهزة الشفط الطبي",
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
    id: "emergency-resuscitation-carts",
    slug: "emergency-resuscitation-carts",
    name_en: "Emergency & Resuscitation Carts",
    name_ar: "عربات الطوارئ والإنعاش",
    shortDescription_en:
      "Mobile emergency/crash carts for organizing resuscitation equipment and supplies.",
    shortDescription_ar: "عربات طوارئ متحركة لتنظيم معدات ومستلزمات الإنعاش.",
    longDescription_en:
      "Mobile emergency (crash) carts for organizing resuscitation equipment and supplies at the point of need, sourced to your department's drawer configuration and defibrillator-mounting requirement.",
    longDescription_ar:
      "عربات طوارئ (إنعاش) متحركة لتنظيم معدات ومستلزمات الإنعاش عند نقطة الحاجة، يتم توريدها وفق تكوين الأدراج ومتطلبات تركيب جهاز الصدمات لديكم.",
    sectorId: "healthcare",
    categoryId: "respiratory-emergency-equipment",
    features_en: [
      "Multi-drawer configuration for organized supply storage",
      "Castor-mounted for rapid response mobility",
      "Optional top platform for a defibrillator or monitor",
    ],
    features_ar: [
      "تكوين متعدد الأدراج لتنظيم تخزين المستلزمات",
      "متحركة على عجلات لسرعة الوصول عند الاستجابة",
      "منصة علوية اختيارية لجهاز صدمات أو جهاز مراقبة",
    ],
    specifications: [
      {
        label_en: "Configuration",
        label_ar: "التكوين",
        value: "Multi-drawer cart, drawer count and layout model-dependent",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Construction material",
        label_ar: "خامة التصنيع",
        value: "Powder-coated steel or stainless steel frame options",
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
        label_en: "Accessories",
        label_ar: "الملحقات",
        value:
          "Defibrillator/monitor shelf, oxygen-tank holder, and IV pole mounts available",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
    ],
    applications_en: [
      "Cardiac arrest and resuscitation response",
      "Emergency department code carts",
      "Ward-based emergency response stations",
      "Operating room and recovery area emergency readiness",
      "Ambulance bay and rapid-response staging",
    ],
    applications_ar: [
      "الاستجابة لتوقف القلب والإنعاش",
      "عربات الطوارئ بقسم الطوارئ",
      "محطات الاستجابة للطوارئ بالأقسام",
      "جاهزية الطوارئ بغرف العمليات ومناطق الإفاقة",
      "التمركز السريع في منطقة استقبال سيارات الإسعاف",
    ],
    relatedProductSlugs: ["oxygen-concentrators", "medical-suction-units"],
    catalogues: [
      {
        id: "emergency-resuscitation-carts-datasheet",
        title_en: "Emergency & Resuscitation Carts Datasheet",
        title_ar: "نشرة بيانات عربات الطوارئ والإنعاش",
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
