import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Patient Monitoring & Diagnostics category. */
export const healthcarePatientMonitoringDiagnostics: Product[] = [
  {
    id: "patient-monitors",
    slug: "patient-monitors",
    name_en: "Patient Monitors",
    name_ar: "أجهزة مراقبة المرضى",
    shortDescription_en: "Bedside patient monitors for continuous vital-sign monitoring.",
    shortDescription_ar: "أجهزة مراقبة مرضى بجانب السرير لمراقبة العلامات الحيوية بشكل مستمر.",
    longDescription_en:
      "Bedside patient monitors for continuous tracking of vital signs — heart rate, blood pressure, and oxygen saturation — across ward, ICU, and operating room settings. We source units matched to your department's monitoring parameters.",
    longDescription_ar:
      "أجهزة مراقبة مرضى بجانب السرير للمتابعة المستمرة للعلامات الحيوية — معدل ضربات القلب وضغط الدم وتشبع الأكسجين — عبر الأقسام والعناية المركزة وغرف العمليات. نقوم بتوريد الأجهزة المطابقة لمعطيات المراقبة المطلوبة في قسمكم.",
    sectorId: "healthcare",
    categoryId: "patient-monitoring-diagnostics",
    relatedProductSlugs: ["central-monitoring-stations", "pulse-oximeters"],
    catalogues: [
      { id: "patient-monitors-datasheet", title_en: "Patient Monitors Datasheet", title_ar: "نشرة بيانات أجهزة مراقبة المرضى", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "ecg-machines",
    slug: "ecg-machines",
    name_en: "ECG Machines",
    name_ar: "أجهزة تخطيط القلب (ECG)",
    shortDescription_en: "ECG machines for cardiac rhythm diagnosis in clinical settings.",
    shortDescription_ar: "أجهزة تخطيط قلب لتشخيص نظم القلب في البيئات السريرية.",
    longDescription_en:
      "ECG machines for cardiac rhythm diagnosis in outpatient clinics, emergency departments, and cardiology units. We source units matched to your department's channel count and workflow requirement.",
    longDescription_ar:
      "أجهزة تخطيط قلب لتشخيص نظم القلب في العيادات الخارجية وأقسام الطوارئ ووحدات أمراض القلب. نقوم بتوريد الأجهزة المطابقة لعدد القنوات ومتطلبات سير العمل في قسمكم.",
    sectorId: "healthcare",
    categoryId: "patient-monitoring-diagnostics",
    relatedProductSlugs: ["patient-monitors", "defibrillators"],
    catalogues: [
      { id: "ecg-machines-datasheet", title_en: "ECG Machines Datasheet", title_ar: "نشرة بيانات أجهزة تخطيط القلب", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "defibrillators",
    slug: "defibrillators",
    name_en: "Defibrillators",
    name_ar: "أجهزة الصدمات الكهربائية",
    shortDescription_en: "Defibrillators for cardiac arrest response in hospital and emergency settings.",
    shortDescription_ar: "أجهزة صدمات كهربائية للاستجابة لتوقف القلب في المستشفيات وحالات الطوارئ.",
    longDescription_en:
      "Defibrillators for cardiac arrest response across emergency departments, ICUs, and ambulance services. We source units matched to your clinical setting and required configuration.",
    longDescription_ar:
      "أجهزة صدمات كهربائية للاستجابة لتوقف القلب عبر أقسام الطوارئ والعناية المركزة وخدمات الإسعاف. نقوم بتوريد الأجهزة المطابقة للبيئة السريرية والتكوين المطلوب لديكم.",
    sectorId: "healthcare",
    categoryId: "patient-monitoring-diagnostics",
    relatedProductSlugs: ["ecg-machines", "patient-monitors"],
    catalogues: [
      { id: "defibrillators-datasheet", title_en: "Defibrillators Datasheet", title_ar: "نشرة بيانات أجهزة الصدمات الكهربائية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "pulse-oximeters",
    slug: "pulse-oximeters",
    name_en: "Pulse Oximeters",
    name_ar: "أجهزة قياس تشبع الأكسجين",
    shortDescription_en: "Pulse oximeters for non-invasive blood oxygen saturation monitoring.",
    shortDescription_ar: "أجهزة قياس غير جراحية لتشبع الأكسجين بالدم.",
    longDescription_en:
      "Pulse oximeters for non-invasive blood oxygen saturation and pulse rate monitoring, sourced in bedside and handheld configurations to match your department's use case.",
    longDescription_ar:
      "أجهزة قياس غير جراحية لتشبع الأكسجين بالدم ومعدل النبض، يتم توريدها بتكوينات ثابتة بجانب السرير ومحمولة باليد وفق حالة الاستخدام في قسمكم.",
    sectorId: "healthcare",
    categoryId: "patient-monitoring-diagnostics",
    relatedProductSlugs: ["patient-monitors", "central-monitoring-stations"],
    catalogues: [
      { id: "pulse-oximeters-datasheet", title_en: "Pulse Oximeters Datasheet", title_ar: "نشرة بيانات أجهزة قياس تشبع الأكسجين", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "central-monitoring-stations",
    slug: "central-monitoring-stations",
    name_en: "Central Patient Monitoring Stations",
    name_ar: "محطات المراقبة المركزية للمرضى",
    shortDescription_en: "Central stations that aggregate bedside monitor data for ward-wide oversight.",
    shortDescription_ar: "محطات مركزية تجمّع بيانات أجهزة المراقبة لتوفير إشراف على مستوى القسم بالكامل.",
    longDescription_en:
      "Central monitoring stations that aggregate data from bedside patient monitors across a ward or ICU, giving nursing staff a single point of oversight. We source stations matched to your bed count and network configuration.",
    longDescription_ar:
      "محطات مراقبة مركزية تجمّع البيانات من أجهزة المراقبة بجانب السرير عبر القسم أو العناية المركزة، مما يوفر لطاقم التمريض نقطة إشراف واحدة. نقوم بتوريد المحطات المطابقة لعدد الأسرّة وتكوين الشبكة لديكم.",
    sectorId: "healthcare",
    categoryId: "patient-monitoring-diagnostics",
    relatedProductSlugs: ["patient-monitors", "pulse-oximeters"],
    catalogues: [
      { id: "central-monitoring-stations-datasheet", title_en: "Central Patient Monitoring Stations Datasheet", title_ar: "نشرة بيانات محطات المراقبة المركزية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
