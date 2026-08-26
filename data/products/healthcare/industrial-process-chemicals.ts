import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Industrial Chemicals & Chemical Materials category. */
export const healthcareIndustrialProcessChemicals: Product[] = [
  {
    id: "industrial-water-treatment-chemicals",
    slug: "industrial-water-treatment-chemicals",
    name_en: "Industrial Water Treatment Chemicals",
    name_ar: "كيماويات معالجة المياه الصناعية",
    shortDescription_en:
      "Water treatment chemicals for hospital water systems.",
    shortDescription_ar: "كيماويات لمعالجة أنظمة المياه بالمستشفى.",
    longDescription_en:
      "Industrial water treatment chemicals for hospital water systems, sourced to your system type and water quality requirement.",
    longDescription_ar:
      "كيماويات معالجة مياه صناعية لأنظمة المياه بالمستشفى، يتم توريدها وفق نوع النظام ومتطلبات جودة المياه لديكم.",
    sectorId: "healthcare",
    categoryId: "industrial-process-chemicals",
    features_en: [
      "Scale, corrosion, and biological growth control formulations",
      "Matched to your system type and water chemistry",
      "Standard drum and bulk packaging formats",
    ],
    features_ar: [
      "تركيبات للتحكم في الترسبات والتآكل والنمو البيولوجي",
      "مطابقة لنوع النظام وخصائص المياه لديكم",
      "أحجام تعبئة قياسية بالبراميل أو بالجملة",
    ],
    specifications: [
      {
        label_en: "Chemical categories",
        label_ar: "فئات الكيماويات",
        value: "Scale inhibitors, corrosion inhibitors, and biocides",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Grade",
        label_ar: "الدرجة",
        value: "Industrial/technical grade",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Packaging format",
        label_ar: "طريقة التعبئة",
        value: "20 – 25 L drums and IBC tote options",
        group_en: "Supply",
        group_ar: "التوريد",
      },
      {
        label_en: "Dosing method",
        label_ar: "طريقة الجرعات",
        value: "Metering-pump dosing, system-dependent",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
    ],
    applications_en: [
      "Cooling tower water treatment",
      "Closed-loop chilled water system treatment",
      "HVAC system water conditioning and scale control",
      "Boiler feedwater pretreatment support",
      "General facility mechanical water system maintenance",
    ],
    applications_ar: [
      "معالجة مياه أبراج التبريد",
      "معالجة أنظمة المياه المبردة ذات الحلقة المغلقة",
      "ضبط جودة المياه ومقاومة الترسبات في أنظمة التكييف",
      "المعالجة الأولية لمياه تغذية الغلايات",
      "صيانة أنظمة المياه الميكانيكية العامة بالمنشأة",
    ],
    relatedProductSlugs: [
      "boiler-steam-system-chemicals",
      "corrosion-control-chemicals",
    ],
    catalogues: [
      {
        id: "industrial-water-treatment-chemicals-datasheet",
        title_en: "Industrial Water Treatment Chemicals Datasheet",
        title_ar: "نشرة بيانات كيماويات معالجة المياه الصناعية",
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
    id: "boiler-steam-system-chemicals",
    slug: "boiler-steam-system-chemicals",
    name_en: "Boiler & Steam System Chemicals",
    name_ar: "كيماويات الغلايات وأنظمة البخار",
    shortDescription_en:
      "Treatment chemicals for hospital boiler and steam-generating systems.",
    shortDescription_ar:
      "كيماويات معالجة لأنظمة الغلايات وتوليد البخار بالمستشفى.",
    longDescription_en:
      "Treatment chemicals for boiler and steam-generating systems used in hospital sterilization, laundry, and heating plants, sourced to your boiler type and feedwater quality.",
    longDescription_ar:
      "كيماويات معالجة لأنظمة الغلايات وتوليد البخار المستخدمة في التعقيم والمغاسل ومحطات التدفئة بالمستشفى، يتم توريدها وفق نوع الغلاية وجودة مياه التغذية لديكم.",
    sectorId: "healthcare",
    categoryId: "industrial-process-chemicals",
    features_en: [
      "Oxygen scavenger and scale-control formulations",
      "Condensate line corrosion protection options",
      "Matched to your boiler type and feedwater quality",
    ],
    features_ar: [
      "تركيبات لإزالة الأكسجين والتحكم في الترسبات",
      "خيارات حماية خطوط المكثفات من التآكل",
      "مطابقة لنوع الغلاية وجودة مياه التغذية لديكم",
    ],
    specifications: [
      {
        label_en: "Chemical categories",
        label_ar: "فئات الكيماويات",
        value: "Oxygen scavengers, scale inhibitors, condensate treatment",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Grade",
        label_ar: "الدرجة",
        value: "Industrial/technical grade",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Packaging format",
        label_ar: "طريقة التعبئة",
        value: "20 – 25 L drums and IBC tote options",
        group_en: "Supply",
        group_ar: "التوريد",
      },
      {
        label_en: "Dosing method",
        label_ar: "طريقة الجرعات",
        value: "Metering-pump dosing, system-dependent",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
    ],
    applications_en: [
      "Sterilization plant boiler water treatment",
      "Laundry steam system treatment",
      "Central heating plant boiler protection",
      "Condensate return line corrosion control",
      "Feedwater conditioning for steam generation",
    ],
    applications_ar: [
      "معالجة مياه غلايات محطات التعقيم",
      "معالجة أنظمة البخار بالمغاسل",
      "حماية غلايات محطة التدفئة المركزية",
      "مقاومة التآكل في خطوط عودة المكثفات",
      "ضبط مياه التغذية لتوليد البخار",
    ],
    relatedProductSlugs: [
      "industrial-water-treatment-chemicals",
      "corrosion-control-chemicals",
    ],
    catalogues: [
      {
        id: "boiler-steam-system-chemicals-datasheet",
        title_en: "Boiler & Steam System Chemicals Datasheet",
        title_ar: "نشرة بيانات كيماويات الغلايات وأنظمة البخار",
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
    id: "corrosion-control-chemicals",
    slug: "corrosion-control-chemicals",
    name_en: "Corrosion Control Chemicals",
    name_ar: "كيماويات مقاومة التآكل",
    shortDescription_en:
      "Corrosion control chemicals for mechanical and piping systems.",
    shortDescription_ar:
      "كيماويات لمقاومة التآكل في الأنظمة الميكانيكية وشبكات المستشفى.",
    longDescription_en:
      "Corrosion control chemicals for mechanical and distribution systems, sourced to your system's material composition and operating conditions.",
    longDescription_ar:
      "كيماويات لمقاومة التآكل في الأنظمة الميكانيكية وشبكات التوزيع، يتم توريدها وفق تركيبة المواد وظروف التشغيل في نظامكم.",
    sectorId: "healthcare",
    categoryId: "industrial-process-chemicals",
    features_en: [
      "Film-forming and passivating inhibitor formulations",
      "Matched to your piping and equipment material composition",
      "Suitable for closed-loop and batch-treatment applications",
    ],
    features_ar: [
      "تركيبات مثبطة مكوّنة لطبقة حماية أو سلبية",
      "مطابقة لتركيبة مواد الأنابيب والمعدات لديكم",
      "مناسبة لتطبيقات الحلقة المغلقة والمعالجة الدفعية",
    ],
    specifications: [
      {
        label_en: "Chemical category",
        label_ar: "فئة الكيماويات",
        value: "Film-forming and passivating corrosion inhibitors",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Grade",
        label_ar: "الدرجة",
        value: "Industrial/technical grade",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Packaging format",
        label_ar: "طريقة التعبئة",
        value: "20 – 25 L drums and IBC tote options",
        group_en: "Supply",
        group_ar: "التوريد",
      },
      {
        label_en: "Application method",
        label_ar: "طريقة التطبيق",
        value: "Continuous dosing or batch treatment",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
    ],
    applications_en: [
      "Closed-loop chilled and hot water piping protection",
      "Standby generator cooling system protection",
      "General mechanical plant corrosion prevention",
      "Metal equipment surface protection during shutdown periods",
      "HVAC piping network longevity support",
    ],
    applications_ar: [
      "حماية شبكات أنابيب المياه المبردة والساخنة ذات الحلقة المغلقة",
      "حماية نظام تبريد المولدات الاحتياطية",
      "الوقاية من التآكل في المنشآت الميكانيكية العامة",
      "حماية أسطح المعدات المعدنية أثناء فترات التوقف",
      "دعم إطالة عمر شبكات أنابيب التكييف",
    ],
    relatedProductSlugs: [
      "industrial-water-treatment-chemicals",
      "boiler-steam-system-chemicals",
    ],
    catalogues: [
      {
        id: "corrosion-control-chemicals-datasheet",
        title_en: "Corrosion Control Chemicals Datasheet",
        title_ar: "نشرة بيانات كيماويات مقاومة التآكل",
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
