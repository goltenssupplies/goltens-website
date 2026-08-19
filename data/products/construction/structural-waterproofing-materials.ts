import type { Product } from "@/data/products/types";

/** Construction & Infrastructure → Structural & Waterproofing Materials category. */
export const constructionStructuralWaterproofingMaterials: Product[] = [
  {
    id: "reinforcement-steel-rebar",
    slug: "reinforcement-steel-rebar",
    name_en: "Reinforcement Steel (Rebar)",
    name_ar: "حديد التسليح",
    shortDescription_en:
      "Reinforcement steel bars for structural concrete works.",
    shortDescription_ar: "قضبان حديد تسليح لأعمال الخرسانة الإنشائية.",
    longDescription_en:
      "Reinforcement steel bars for structural concrete works, sourced to your project's grade, diameter, and quantity specification.",
    longDescription_ar:
      "قضبان حديد تسليح لأعمال الخرسانة الإنشائية، يتم توريدها وفق الدرجة والقطر والكمية المحددة لمشروعكم.",
    sectorId: "construction",
    categoryId: "structural-waterproofing-materials",
    relatedProductSlugs: ["structural-steel-sections", "construction-sealants"],
    catalogues: [
      {
        id: "reinforcement-steel-rebar-datasheet",
        title_en: "Reinforcement Steel Datasheet",
        title_ar: "نشرة بيانات حديد التسليح",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/reinforcement-steel-rebar.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "structural-steel-sections",
    slug: "structural-steel-sections",
    name_en: "Structural Steel Sections",
    name_ar: "مقاطع الحديد الإنشائي",
    shortDescription_en:
      "Structural steel sections for framing and load-bearing construction elements.",
    shortDescription_ar:
      "مقاطع حديد إنشائي لأعمال الهيكل والعناصر الحاملة للأحمال.",
    longDescription_en:
      "Structural steel sections — beams, columns, and channels — for framing and load-bearing construction elements. We source sections matched to your project's engineering specification.",
    longDescription_ar:
      "مقاطع حديد إنشائي — كمرات وأعمدة ومجاري — لأعمال الهيكل والعناصر الحاملة للأحمال. نقوم بتوريد المقاطع المطابقة للمواصفات الهندسية لمشروعكم.",
    sectorId: "construction",
    categoryId: "structural-waterproofing-materials",
    relatedProductSlugs: [
      "reinforcement-steel-rebar",
      "waterproofing-membranes",
    ],
    catalogues: [
      {
        id: "structural-steel-sections-datasheet",
        title_en: "Structural Steel Sections Datasheet",
        title_ar: "نشرة بيانات مقاطع الحديد الإنشائي",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/structural-steel-sections.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "waterproofing-membranes",
    slug: "waterproofing-membranes",
    name_en: "Waterproofing Membranes",
    name_ar: "أغشية العزل المائي",
    shortDescription_en:
      "Waterproofing membranes for roofs, foundations, and wet-area protection.",
    shortDescription_ar:
      "أغشية عزل مائي لحماية الأسطح والأساسات والمناطق الرطبة.",
    longDescription_en:
      "Waterproofing membranes for roofs, foundations, and wet-area protection, sourced in sheet and liquid-applied systems matched to your substrate and exposure condition.",
    longDescription_ar:
      "أغشية عزل مائي لحماية الأسطح والأساسات والمناطق الرطبة، يتم توريدها بأنظمة لفائف وسائلة مطابقة لطبيعة السطح وظروف التعرض لديكم.",
    sectorId: "construction",
    categoryId: "structural-waterproofing-materials",
    relatedProductSlugs: ["thermal-insulation-boards", "construction-sealants"],
    catalogues: [
      {
        id: "waterproofing-membranes-datasheet",
        title_en: "Waterproofing Membranes Datasheet",
        title_ar: "نشرة بيانات أغشية العزل المائي",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/waterproofing-membranes.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "thermal-insulation-boards",
    slug: "thermal-insulation-boards",
    name_en: "Thermal Insulation Boards",
    name_ar: "ألواح العزل الحراري",
    shortDescription_en:
      "Thermal insulation boards for building envelope energy performance.",
    shortDescription_ar: "ألواح عزل حراري لتحسين الأداء الحراري لغلاف المبنى.",
    longDescription_en:
      "Thermal insulation boards for walls, roofs, and building envelopes, sourced to your project's thermal performance and fire-rating requirement.",
    longDescription_ar:
      "ألواح عزل حراري للجدران والأسطح وغلاف المبنى، يتم توريدها وفق الأداء الحراري وتصنيف مقاومة الحريق المطلوب لمشروعكم.",
    sectorId: "construction",
    categoryId: "structural-waterproofing-materials",
    relatedProductSlugs: [
      "waterproofing-membranes",
      "structural-steel-sections",
    ],
    catalogues: [
      {
        id: "thermal-insulation-boards-datasheet",
        title_en: "Thermal Insulation Boards Datasheet",
        title_ar: "نشرة بيانات ألواح العزل الحراري",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/thermal-insulation-boards.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "construction-sealants",
    slug: "construction-sealants",
    name_en: "Construction Sealants & Expansion Joints",
    name_ar: "مواد السد وفواصل التمدد الإنشائية",
    shortDescription_en:
      "Sealants and expansion joints for weatherproofing and structural movement control.",
    shortDescription_ar:
      "مواد سد وفواصل تمدد لعزل العوامل الجوية والتحكم في الحركة الإنشائية.",
    longDescription_en:
      "Sealants and expansion joints for weatherproofing building envelopes and accommodating structural movement, sourced to your joint width and exposure requirement.",
    longDescription_ar:
      "مواد سد وفواصل تمدد لعزل غلاف المبنى من العوامل الجوية واستيعاب الحركة الإنشائية، يتم توريدها وفق عرض الفاصل ومتطلبات التعرض لديكم.",
    sectorId: "construction",
    categoryId: "structural-waterproofing-materials",
    relatedProductSlugs: [
      "waterproofing-membranes",
      "reinforcement-steel-rebar",
    ],
    catalogues: [
      {
        id: "construction-sealants-datasheet",
        title_en: "Construction Sealants Datasheet",
        title_ar: "نشرة بيانات مواد السد وفواصل التمدد",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/construction-sealants.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
