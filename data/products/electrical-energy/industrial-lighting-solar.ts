import type { Product } from "@/data/products/types";

/** Electrical & Energy Solutions → Lighting & Solar Energy category. */
export const electricalIndustrialLightingSolar: Product[] = [
  {
    id: "led-industrial-lighting",
    slug: "led-industrial-lighting",
    name_en: "LED Industrial Lighting Fixtures",
    name_ar: "تجهيزات الإنارة الصناعية LED",
    shortDescription_en: "LED lighting fixtures for warehouses, factories, and industrial facilities.",
    shortDescription_ar: "تجهيزات إنارة LED للمستودعات والمصانع والمنشآت الصناعية.",
    longDescription_en:
      "LED lighting fixtures for warehouses, factories, and industrial facilities, sourced for energy efficiency and long service life. We source fixtures matched to your facility's ceiling height and required light levels.",
    longDescription_ar:
      "تجهيزات إنارة LED للمستودعات والمصانع والمنشآت الصناعية، يتم توريدها لكفاءة استهلاك الطاقة وطول العمر التشغيلي. نقوم بتوريد التجهيزات المطابقة لارتفاع سقف منشأتكم ومستويات الإضاءة المطلوبة.",
    sectorId: "electrical-energy",
    categoryId: "industrial-lighting-solar",
    relatedProductSlugs: ["high-mast-lighting", "explosion-proof-lighting"],
    catalogues: [
      { id: "led-industrial-lighting-datasheet", title_en: "LED Industrial Lighting Datasheet", title_ar: "نشرة بيانات الإنارة الصناعية LED", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "high-mast-lighting",
    slug: "high-mast-lighting",
    name_en: "High Mast Lighting",
    name_ar: "إنارة الأعمدة العالية",
    shortDescription_en: "High mast lighting for yards, ports, and large open outdoor areas.",
    shortDescription_ar: "إنارة أعمدة عالية للساحات والموانئ والمساحات الخارجية الواسعة.",
    longDescription_en:
      "High mast lighting towers for illuminating large open outdoor areas — yards, ports, parking lots, and construction sites — from a single elevated point. We source systems matched to your site area and required illuminance.",
    longDescription_ar:
      "أبراج إنارة عالية لإنارة المساحات الخارجية الواسعة — الساحات والموانئ ومواقف السيارات ومواقع الإنشاءات — من نقطة مرتفعة واحدة. نقوم بتوريد الأنظمة المطابقة لمساحة موقعكم ومستوى الإضاءة المطلوب.",
    sectorId: "electrical-energy",
    categoryId: "industrial-lighting-solar",
    relatedProductSlugs: ["led-industrial-lighting", "explosion-proof-lighting"],
    catalogues: [
      { id: "high-mast-lighting-datasheet", title_en: "High Mast Lighting Datasheet", title_ar: "نشرة بيانات إنارة الأعمدة العالية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "explosion-proof-lighting",
    slug: "explosion-proof-lighting",
    name_en: "Explosion-Proof Lighting",
    name_ar: "الإنارة المقاومة للانفجار",
    shortDescription_en: "Explosion-proof light fittings for hazardous-area industrial environments.",
    shortDescription_ar: "وحدات إنارة مقاومة للانفجار للبيئات الصناعية ذات المناطق الخطرة.",
    longDescription_en:
      "Explosion-proof light fittings for hazardous-area zones in oil and gas, chemical, and other industrial environments where flammable atmospheres may be present. We source fixtures matched to your site's hazardous-area zone classification.",
    longDescription_ar:
      "وحدات إنارة مقاومة للانفجار للمناطق الخطرة في منشآت النفط والغاز والكيماويات وغيرها من البيئات الصناعية التي قد تحتوي على أجواء قابلة للاشتعال. نقوم بتوريد التجهيزات المطابقة لتصنيف المنطقة الخطرة بموقعكم.",
    sectorId: "electrical-energy",
    categoryId: "industrial-lighting-solar",
    relatedProductSlugs: ["led-industrial-lighting", "high-mast-lighting"],
    catalogues: [
      { id: "explosion-proof-lighting-datasheet", title_en: "Explosion-Proof Lighting Datasheet", title_ar: "نشرة بيانات الإنارة المقاومة للانفجار", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "solar-pv-systems",
    slug: "solar-pv-systems",
    name_en: "Solar PV Panels & Inverters",
    name_ar: "ألواح وعاكسات الطاقة الشمسية",
    shortDescription_en: "Solar PV panels and inverters for industrial and commercial power generation.",
    shortDescription_ar: "ألواح وعاكسات طاقة شمسية لتوليد الكهرباء للمنشآت الصناعية والتجارية.",
    longDescription_en:
      "Solar PV panels, inverters, and mounting structures for industrial and commercial rooftop or ground-mounted power generation. We source systems matched to your site area and target generation capacity.",
    longDescription_ar:
      "ألواح شمسية وعاكسات وهياكل تركيب لتوليد الكهرباء على أسطح أو أراضي المنشآت الصناعية والتجارية. نقوم بتوريد الأنظمة المطابقة لمساحة موقعكم وسعة التوليد المستهدفة.",
    sectorId: "electrical-energy",
    categoryId: "industrial-lighting-solar",
    relatedProductSlugs: ["battery-energy-storage-systems", "led-industrial-lighting"],
    catalogues: [
      { id: "solar-pv-systems-datasheet", title_en: "Solar PV Panels & Inverters Datasheet", title_ar: "نشرة بيانات ألواح وعاكسات الطاقة الشمسية", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "battery-energy-storage-systems",
    slug: "battery-energy-storage-systems",
    name_en: "Battery Energy Storage Systems",
    name_ar: "أنظمة تخزين الطاقة بالبطاريات",
    shortDescription_en: "Battery energy storage systems for solar self-consumption and peak-load management.",
    shortDescription_ar: "أنظمة تخزين طاقة بالبطاريات للاستهلاك الذاتي للطاقة الشمسية وإدارة ذروة الأحمال.",
    longDescription_en:
      "Battery energy storage systems that store solar generation for self-consumption outside daylight hours, or shift load away from grid peak-demand periods. We source systems matched to your required storage capacity.",
    longDescription_ar:
      "أنظمة تخزين طاقة بالبطاريات تخزّن الطاقة المولدة شمسيًا للاستهلاك الذاتي خارج ساعات النهار، أو لنقل الحمل بعيدًا عن فترات ذروة الطلب على الشبكة. نقوم بتوريد الأنظمة المطابقة لسعة التخزين المطلوبة لديكم.",
    sectorId: "electrical-energy",
    categoryId: "industrial-lighting-solar",
    relatedProductSlugs: ["solar-pv-systems"],
    catalogues: [
      { id: "battery-energy-storage-systems-datasheet", title_en: "Battery Energy Storage Systems Datasheet", title_ar: "نشرة بيانات أنظمة تخزين الطاقة", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
