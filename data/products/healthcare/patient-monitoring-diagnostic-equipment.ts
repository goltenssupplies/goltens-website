import type { Product } from "@/data/products/types";

/** Hospital Equipment & Medical Supplies → Patient Monitoring & Diagnostic Equipment category. */
export const healthcarePatientMonitoringDiagnosticEquipment: Product[] = [
  {
    id: "patient-monitors",
    slug: "patient-monitors",
    name_en: "Patient Monitors",
    name_ar: "أجهزة مراقبة المرضى",
    shortDescription_en:
      "Bedside patient monitors for vital-signs tracking in wards, ICUs, and recovery areas.",
    shortDescription_ar:
      "أجهزة مراقبة مرضى بجانب السرير لتتبع العلامات الحيوية في الأقسام والعناية المركزة ومناطق الإفاقة.",
    longDescription_en:
      "Bedside patient monitors for continuous vital-signs tracking, sourced to your ward, ICU, or recovery-area monitoring parameters and central nurse-station integration requirement.",
    longDescription_ar:
      "أجهزة مراقبة مرضى بجانب السرير للمتابعة المستمرة للعلامات الحيوية، يتم توريدها وفق معايير المراقبة المطلوبة بالقسم أو العناية المركزة أو منطقة الإفاقة، ومتطلبات الربط بمحطة التمريض المركزية لديكم.",
    sectorId: "healthcare",
    categoryId: "patient-monitoring-diagnostic-equipment",
    features_en: [
      "Multi-parameter vital-signs display on a single screen",
      "Wall-mount, trolley-mount, and bedside configurations",
      "Central nurse-station networking available where specified",
    ],
    features_ar: [
      "عرض متعدد المعايير للعلامات الحيوية على شاشة واحدة",
      "تكوينات تركيب على الحائط أو العربة أو بجانب السرير",
      "إمكانية الربط الشبكي بمحطة التمريض المركزية عند الطلب",
    ],
    specifications: [
      {
        label_en: "Monitored parameters",
        label_ar: "المعايير المراقبة",
        value:
          "ECG, SpO2, NIBP, pulse rate, and temperature; additional parameters model-dependent",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Display",
        label_ar: "الشاشة",
        value: "Color touchscreen display, size range model-dependent",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Mounting type",
        label_ar: "طريقة التركيب",
        value: "Bedside, trolley-mounted, or wall-mounted options",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Power supply",
        label_ar: "مصدر الطاقة",
        value: "Mains-powered with internal battery backup",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured/tested to IEC 60601-1 and IEC 60601-2-49 for multiparameter patient monitors",
      },
    ],
    applications_en: [
      "General ward bedside monitoring",
      "Intensive care unit (ICU) monitoring",
      "Post-operative recovery area monitoring",
      "Emergency department triage and observation bays",
      "Step-down and high-dependency units",
    ],
    applications_ar: [
      "المراقبة بجانب السرير بالأقسام العامة",
      "مراقبة وحدة العناية المركزة",
      "مراقبة منطقة الإفاقة بعد العمليات",
      "أسرّة الفرز والملاحظة بقسم الطوارئ",
      "وحدات الرعاية المتوسطة وعالية الاعتماد",
    ],
    relatedProductSlugs: ["ecg-machines", "pulse-oximeters"],
    catalogues: [
      {
        id: "patient-monitors-datasheet",
        title_en: "Patient Monitors Datasheet",
        title_ar: "نشرة بيانات أجهزة مراقبة المرضى",
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
    id: "ecg-machines",
    slug: "ecg-machines",
    name_en: "ECG Machines",
    name_ar: "أجهزة تخطيط القلب",
    shortDescription_en:
      "Diagnostic electrocardiograph (ECG) machines for cardiac rhythm assessment.",
    shortDescription_ar:
      "أجهزة تخطيط كهربائية للقلب (ECG) لتقييم النظم القلبي.",
    longDescription_en:
      "Diagnostic electrocardiograph machines for cardiac rhythm assessment, sourced to your department's lead configuration, reporting, and connectivity requirement.",
    longDescription_ar:
      "أجهزة تخطيط كهربائية للقلب لتقييم النظم القلبي، يتم توريدها وفق تكوين الأقطاب والتقارير ومتطلبات الربط والاتصال بقسمكم.",
    sectorId: "healthcare",
    categoryId: "patient-monitoring-diagnostic-equipment",
    features_en: [
      "Standard 12-lead acquisition on diagnostic models",
      "Built-in thermal printer for immediate trace output",
      "Portable trolley-mounted and handheld configurations available",
    ],
    features_ar: [
      "التقاط بـ12 قطباً قياسياً في الطرازات التشخيصية",
      "طابعة حرارية مدمجة لإخراج فوري للمخطط",
      "تكوينات محمولة على عربة أو يدوية عند الطلب",
    ],
    specifications: [
      {
        label_en: "Lead configuration",
        label_ar: "تكوين الأقطاب",
        value: "3-lead, 5-lead, or standard 12-lead, model-dependent",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Output",
        label_ar: "الإخراج",
        value: "Built-in thermal printer; digital export on select models",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Portability",
        label_ar: "قابلية الحمل",
        value: "Handheld, trolley-mounted, or fixed workstation options",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Power supply",
        label_ar: "مصدر الطاقة",
        value: "Mains-powered with internal battery backup",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured/tested to IEC 60601-1 and IEC 60601-2-25 for electrocardiographs",
      },
    ],
    applications_en: [
      "Cardiology department diagnostic testing",
      "Emergency department cardiac assessment",
      "Pre-operative cardiac screening",
      "General ward and outpatient clinic ECG testing",
      "Mobile/portable bedside cardiac assessment",
    ],
    applications_ar: [
      "الفحص التشخيصي بقسم القلب",
      "تقييم القلب بقسم الطوارئ",
      "الفحص القلبي قبل العمليات",
      "فحص تخطيط القلب بالأقسام العامة والعيادات الخارجية",
      "التقييم القلبي المحمول بجانب السرير",
    ],
    relatedProductSlugs: ["patient-monitors", "pulse-oximeters"],
    catalogues: [
      {
        id: "ecg-machines-datasheet",
        title_en: "ECG Machines Datasheet",
        title_ar: "نشرة بيانات أجهزة تخطيط القلب",
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
    id: "pulse-oximeters",
    slug: "pulse-oximeters",
    name_en: "Pulse Oximeters",
    name_ar: "أجهزة قياس تشبع الأكسجين",
    shortDescription_en:
      "Handheld and bedside pulse oximeters for blood-oxygen saturation monitoring.",
    shortDescription_ar:
      "أجهزة قياس تشبع الأكسجين المحمولة وبجانب السرير لمراقبة تشبع الدم بالأكسجين.",
    longDescription_en:
      "Handheld and bedside pulse oximeters for blood-oxygen saturation and pulse-rate monitoring, sourced to your ward's spot-check or continuous-monitoring requirement.",
    longDescription_ar:
      "أجهزة قياس تشبع الأكسجين المحمولة وبجانب السرير لمراقبة تشبع الدم بالأكسجين ومعدل النبض، يتم توريدها وفق احتياج القسم للقياس اللحظي أو المراقبة المستمرة.",
    sectorId: "healthcare",
    categoryId: "patient-monitoring-diagnostic-equipment",
    features_en: [
      "Fingertip and bedside/tabletop configurations",
      "SpO2 and pulse-rate display on a single unit",
      "Adult and pediatric probe options available",
    ],
    features_ar: [
      "تكوينات محمولة على الإصبع أو بجانب السرير/سطح المكتب",
      "عرض تشبع الأكسجين ومعدل النبض على جهاز واحد",
      "خيارات مجسات للبالغين والأطفال عند الطلب",
    ],
    specifications: [
      {
        label_en: "Configuration",
        label_ar: "التكوين",
        value: "Fingertip handheld, or bedside/tabletop unit",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Probe options",
        label_ar: "خيارات المجس",
        value: "Adult, pediatric, and neonatal probes, model-dependent",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Power supply",
        label_ar: "مصدر الطاقة",
        value: "Battery-powered (handheld) or mains-powered (bedside units)",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured/tested to ISO 80601-2-61 for pulse oximeter equipment",
      },
    ],
    applications_en: [
      "Ward spot-check and continuous SpO2 monitoring",
      "Emergency department triage assessment",
      "Post-operative recovery monitoring",
      "Outpatient clinic and general practice screening",
      "Home-care and step-down monitoring",
    ],
    applications_ar: [
      "القياس اللحظي والمراقبة المستمرة لتشبع الأكسجين بالأقسام",
      "تقييم الفرز بقسم الطوارئ",
      "مراقبة الإفاقة بعد العمليات",
      "الفحص بالعيادات الخارجية والطب العام",
      "الرعاية المنزلية ومراقبة الرعاية المتوسطة",
    ],
    relatedProductSlugs: ["patient-monitors", "ecg-machines"],
    catalogues: [
      {
        id: "pulse-oximeters-datasheet",
        title_en: "Pulse Oximeters Datasheet",
        title_ar: "نشرة بيانات أجهزة قياس تشبع الأكسجين",
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
