import type { Product } from "@/data/products/types";

/** Industrial Chemicals & Lubricants → Corrosion Protection & Coatings category. */
export const chemicalsCorrosionProtectionCoatings: Product[] = [
  {
    id: "corrosion-inhibitors",
    slug: "corrosion-inhibitors",
    name_en: "Corrosion Inhibitors",
    name_ar: "مثبطات التآكل",
    shortDescription_en: "Corrosion inhibitors for metal surfaces in industrial fluid systems.",
    shortDescription_ar: "مثبطات تآكل للأسطح المعدنية في أنظمة السوائل الصناعية.",
    longDescription_en:
      "Corrosion inhibitors that protect metal surfaces inside pipework, tanks, and closed-loop fluid systems from oxidation and rust. We source products matched to your system's fluid type and metallurgy.",
    longDescription_ar:
      "مثبطات تآكل تحمي الأسطح المعدنية داخل المواسير والخزانات وأنظمة السوائل المغلقة من الأكسدة والصدأ. نقوم بتوريد المنتجات المطابقة لنوع السائل ومعدن نظامكم.",
    sectorId: "industrial-chemicals",
    categoryId: "corrosion-protection-coatings",
    relatedProductSlugs: ["anti-corrosion-coatings", "rust-preventives"],
    catalogues: [
      { id: "corrosion-inhibitors-datasheet", title_en: "Corrosion Inhibitors Datasheet", title_ar: "نشرة بيانات مثبطات التآكل", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "anti-corrosion-coatings",
    slug: "anti-corrosion-coatings",
    name_en: "Anti-Corrosion Coatings",
    name_ar: "طلاءات مقاومة للتآكل",
    shortDescription_en: "Protective coatings for steel and metal structures exposed to corrosive conditions.",
    shortDescription_ar: "طلاءات واقية للهياكل الفولاذية والمعدنية المعرضة لظروف مسببة للتآكل.",
    longDescription_en:
      "Anti-corrosion coatings for steel structures, tanks, and equipment exposed to weathering, moisture, or chemical attack. We source coatings matched to your substrate and exposure conditions.",
    longDescription_ar:
      "طلاءات مقاومة للتآكل للهياكل الفولاذية والخزانات والمعدات المعرضة للعوامل الجوية أو الرطوبة أو التأثير الكيميائي. نقوم بتوريد الطلاءات المطابقة لطبيعة السطح وظروف التعرض لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "corrosion-protection-coatings",
    relatedProductSlugs: ["corrosion-inhibitors", "industrial-protective-paints"],
    catalogues: [
      { id: "anti-corrosion-coatings-datasheet", title_en: "Anti-Corrosion Coatings Datasheet", title_ar: "نشرة بيانات الطلاءات المقاومة للتآكل", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "industrial-protective-paints",
    slug: "industrial-protective-paints",
    name_en: "Industrial Protective Paints",
    name_ar: "الدهانات الصناعية الواقية",
    shortDescription_en: "Protective paint systems for industrial structures and equipment.",
    shortDescription_ar: "أنظمة دهان واقية للهياكل والمعدات الصناعية.",
    longDescription_en:
      "Protective paint systems for industrial structures, tanks, and equipment, sourced to your required durability, chemical resistance, and finish.",
    longDescription_ar:
      "أنظمة دهان واقية للهياكل والخزانات والمعدات الصناعية، يتم توريدها وفق المتانة والمقاومة الكيميائية والتشطيب المطلوب لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "corrosion-protection-coatings",
    relatedProductSlugs: ["anti-corrosion-coatings", "industrial-epoxy-coatings"],
    catalogues: [
      { id: "industrial-protective-paints-datasheet", title_en: "Industrial Protective Paints Datasheet", title_ar: "نشرة بيانات الدهانات الصناعية الواقية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "industrial-epoxy-coatings",
    slug: "industrial-epoxy-coatings",
    name_en: "Industrial Epoxy Coatings",
    name_ar: "طلاءات الإيبوكسي الصناعي",
    shortDescription_en: "Epoxy coating systems for high-durability floor and structural protection.",
    shortDescription_ar: "أنظمة طلاء إيبوكسي لحماية الأرضيات والهياكل بمتانة عالية.",
    longDescription_en:
      "Epoxy coating systems for high-durability protection of industrial floors, tanks, and structural steel, sourced to your substrate and chemical exposure requirement.",
    longDescription_ar:
      "أنظمة طلاء إيبوكسي لحماية الأرضيات الصناعية والخزانات والهياكل الفولاذية بمتانة عالية، يتم توريدها وفق طبيعة السطح والتعرض الكيميائي المطلوب لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "corrosion-protection-coatings",
    relatedProductSlugs: ["industrial-protective-paints", "anti-corrosion-coatings"],
    catalogues: [
      { id: "industrial-epoxy-coatings-datasheet", title_en: "Industrial Epoxy Coatings Datasheet", title_ar: "نشرة بيانات طلاءات الإيبوكسي الصناعي", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "rust-preventives",
    slug: "rust-preventives",
    name_en: "Rust Preventives",
    name_ar: "مواد منع الصدأ",
    shortDescription_en: "Rust preventive coatings for temporary protection during storage and transit.",
    shortDescription_ar: "طلاءات مانعة للصدأ لحماية مؤقتة أثناء التخزين والنقل.",
    longDescription_en:
      "Rust preventive coatings that provide temporary protection for metal parts and equipment during storage, shipping, and outdoor exposure. We source products matched to your protection duration requirement.",
    longDescription_ar:
      "طلاءات مانعة للصدأ توفر حماية مؤقتة للقطع والمعدات المعدنية أثناء التخزين والشحن والتعرض الخارجي. نقوم بتوريد المنتجات المطابقة لمدة الحماية المطلوبة لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "corrosion-protection-coatings",
    relatedProductSlugs: ["corrosion-inhibitors", "anti-corrosion-coatings"],
    catalogues: [
      { id: "rust-preventives-datasheet", title_en: "Rust Preventives Datasheet", title_ar: "نشرة بيانات مواد منع الصدأ", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
