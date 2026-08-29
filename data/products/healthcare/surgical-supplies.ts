import type { Product } from "@/data/products/types";

/** Hospital Equipment & Medical Supplies → Surgical Supplies category. */
export const healthcareSurgicalSupplies: Product[] = [
  {
    id: "surgical-gowns",
    slug: "surgical-gowns",
    name_en: "Surgical Gowns",
    name_ar: "أرواب جراحية",
    shortDescription_en:
      "Single-use and reusable surgical gowns for operating room and procedure use.",
    shortDescription_ar:
      "أرواب جراحية للاستخدام مرة واحدة أو القابلة لإعادة الاستخدام لغرف العمليات والإجراءات.",
    longDescription_en:
      "Single-use and reusable surgical gowns for operating room and procedure use, sourced to your required protection level and standard sizing range.",
    longDescription_ar:
      "أرواب جراحية للاستخدام مرة واحدة أو القابلة لإعادة الاستخدام لغرف العمليات والإجراءات، يتم توريدها وفق مستوى الحماية المطلوب ونطاق المقاسات القياسية.",
    sectorId: "healthcare",
    categoryId: "surgical-supplies",
    features_en: [
      "Single-use (disposable) and reusable fabric options",
      "Reinforced or standard protection-level variants",
      "Standard sizing range with tie/wrap closures",
    ],
    features_ar: [
      "خيارات للاستخدام مرة واحدة (يُستهلك) أو أقمشة قابلة لإعادة الاستخدام",
      "طرازات بمستوى حماية معزز أو قياسي",
      "نطاق مقاسات قياسي مع إغلاق برباط/لف",
    ],
    specifications: [
      {
        label_en: "Type",
        label_ar: "النوع",
        value: "Single-use (disposable) or reusable (textile) gowns",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Protection level",
        label_ar: "مستوى الحماية",
        value: "Standard or reinforced protection variants, per requirement",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Sizing",
        label_ar: "المقاسات",
        value: "Standard size range (S – XXL)",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured to meet EN 13795 requirements for surgical gowns",
      },
    ],
    applications_en: [
      "Operating room surgical procedures",
      "Delivery room and obstetric procedures",
      "Isolation and infection-control protocols",
      "Emergency department invasive procedures",
      "Day-surgery and minor-procedure suites",
    ],
    applications_ar: [
      "الإجراءات الجراحية بغرف العمليات",
      "إجراءات غرف الولادة والتوليد",
      "بروتوكولات العزل ومكافحة العدوى",
      "الإجراءات الغازية بقسم الطوارئ",
      "وحدات الجراحة النهارية والإجراءات البسيطة",
    ],
    relatedProductSlugs: ["surgical-drapes-masks", "surgical-sutures"],
    catalogues: [
      {
        id: "surgical-gowns-datasheet",
        title_en: "Surgical Gowns Datasheet",
        title_ar: "نشرة بيانات الأرواب الجراحية",
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
    id: "surgical-sutures",
    slug: "surgical-sutures",
    name_en: "Surgical Sutures",
    name_ar: "خيوط جراحية",
    shortDescription_en:
      "Absorbable and non-absorbable surgical sutures for wound and tissue closure.",
    shortDescription_ar:
      "خيوط جراحية قابلة وغير قابلة للامتصاص لإغلاق الجروح والأنسجة.",
    longDescription_en:
      "Absorbable and non-absorbable surgical sutures for wound and tissue closure, sourced to your required material, gauge, and needle configuration.",
    longDescription_ar:
      "خيوط جراحية قابلة وغير قابلة للامتصاص لإغلاق الجروح والأنسجة، يتم توريدها وفق الخامة والمقاس وتكوين الإبرة المطلوب.",
    sectorId: "healthcare",
    categoryId: "surgical-supplies",
    features_en: [
      "Absorbable (synthetic/natural) and non-absorbable material options",
      "Range of gauges (USP sizing) for different tissue types",
      "Pre-attached needle configurations available",
    ],
    features_ar: [
      "خيارات مواد قابلة للامتصاص (اصطناعية/طبيعية) وغير قابلة للامتصاص",
      "نطاق مقاسات (وفق تصنيف USP) لأنواع الأنسجة المختلفة",
      "تكوينات إبرة مثبتة مسبقاً عند الطلب",
    ],
    specifications: [
      {
        label_en: "Material type",
        label_ar: "نوع الخامة",
        value: "Absorbable (synthetic/natural) or non-absorbable materials",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Gauge range",
        label_ar: "نطاق المقاسات",
        value: "USP suture sizing range, per procedure requirement",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Needle configuration",
        label_ar: "تكوين الإبرة",
        value: "Pre-attached (swaged) needle or needle-free options",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Packaging",
        label_ar: "التعبئة",
        value: "Individually packaged, sterile single-use units",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
    ],
    applications_en: [
      "General and specialized surgical wound closure",
      "Obstetric and gynecological procedures",
      "Emergency department wound repair",
      "Outpatient minor-procedure closure",
      "Veterinary and specialized surgical use, where applicable",
    ],
    applications_ar: [
      "إغلاق الجروح الجراحية العامة والمتخصصة",
      "إجراءات التوليد وأمراض النساء",
      "إصلاح الجروح بقسم الطوارئ",
      "إغلاق الإجراءات البسيطة بالعيادات الخارجية",
      "الاستخدام البيطري والجراحي المتخصص، عند الانطباق",
    ],
    relatedProductSlugs: ["surgical-gowns", "surgical-drapes-masks"],
    catalogues: [
      {
        id: "surgical-sutures-datasheet",
        title_en: "Surgical Sutures Datasheet",
        title_ar: "نشرة بيانات الخيوط الجراحية",
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
    id: "surgical-drapes-masks",
    slug: "surgical-drapes-masks",
    name_en: "Surgical Drapes & Masks",
    name_ar: "مفارش جراحية وكمامات",
    shortDescription_en:
      "Surgical drapes and medical face masks for operating room and clinical use.",
    shortDescription_ar:
      "مفارش جراحية وكمامات طبية للاستخدام في غرف العمليات والاستخدام السريري.",
    longDescription_en:
      "Surgical drapes and medical face masks for operating room and general clinical use, sourced to your required barrier level and standard sizing.",
    longDescription_ar:
      "مفارش جراحية وكمامات طبية لغرف العمليات والاستخدام السريري العام، يتم توريدها وفق مستوى الحاجز المطلوب والمقاسات القياسية.",
    sectorId: "healthcare",
    categoryId: "surgical-supplies",
    features_en: [
      "Single-use fenestrated and non-fenestrated drape options",
      "Type I/II/IIR medical face mask options",
      "Fluid-resistant barrier materials",
    ],
    features_ar: [
      "خيارات مفارش مثقوبة وغير مثقوبة للاستخدام مرة واحدة",
      "خيارات كمامات طبية من النوع I/II/IIR",
      "خامات حاجزة مقاومة للسوائل",
    ],
    specifications: [
      {
        label_en: "Drape type",
        label_ar: "نوع المفرش",
        value: "Fenestrated (procedure-specific) or non-fenestrated (general)",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Mask type",
        label_ar: "نوع الكمامة",
        value: "Type I, II, or IIR medical face masks",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Material",
        label_ar: "الخامة",
        value: "Fluid-resistant non-woven materials, single-use",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured to meet EN 13795 (drapes) and EN 14683 (medical face masks) requirements",
      },
    ],
    applications_en: [
      "Operating room sterile field preparation",
      "Procedure-specific fenestrated draping",
      "General clinical infection-control use",
      "Isolation and outbreak-response protocols",
      "Outpatient and emergency department procedures",
    ],
    applications_ar: [
      "تجهيز المجال المعقم بغرف العمليات",
      "التغطية المثقوبة الخاصة بإجراء محدد",
      "الاستخدام السريري العام لمكافحة العدوى",
      "بروتوكولات العزل والاستجابة لتفشي الأمراض",
      "إجراءات العيادات الخارجية وقسم الطوارئ",
    ],
    relatedProductSlugs: ["surgical-gowns", "surgical-sutures"],
    catalogues: [
      {
        id: "surgical-drapes-masks-datasheet",
        title_en: "Surgical Drapes & Masks Datasheet",
        title_ar: "نشرة بيانات المفارش الجراحية والكمامات",
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
