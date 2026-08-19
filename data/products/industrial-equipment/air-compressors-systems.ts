import type { Product } from "@/data/products/types";

/** Industrial Equipment & Pumps → Air Compressors & Systems category. */
export const industrialAirCompressorsSystems: Product[] = [
  {
    id: "rotary-screw-compressors",
    slug: "rotary-screw-compressors",
    name_en: "Rotary Screw Compressors",
    name_ar: "ضواغط اللولب الدوارة",
    shortDescription_en:
      "Rotary screw compressors for continuous-duty industrial compressed air supply.",
    shortDescription_ar:
      "ضواغط لولبية دوارة لإمداد الهواء المضغوط الصناعي بشكل مستمر.",
    longDescription_en:
      "Rotary screw compressors for continuous-duty industrial compressed air supply, sourced in oil-injected and oil-free configurations. We source units matched to your required flow (FAD) and working pressure.",
    longDescription_ar:
      "ضواغط لولبية دوارة لإمداد الهواء المضغوط الصناعي بشكل مستمر، يتم توريدها بتكوينات مزيتة وخالية من الزيت. نقوم بتوريد الوحدات المطابقة للتدفق المطلوب وضغط التشغيل لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "air-compressors-systems",
    relatedProductSlugs: ["reciprocating-compressors", "air-receivers-dryers"],
    catalogues: [
      {
        id: "rotary-screw-compressors-datasheet",
        title_en: "Rotary Screw Compressors Datasheet",
        title_ar: "نشرة بيانات الضواغط اللولبية الدوارة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/industrial-equipment/rotary-screw-compressors.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "reciprocating-compressors",
    slug: "reciprocating-compressors",
    name_en: "Reciprocating Compressors",
    name_ar: "الضواغط الترددية",
    shortDescription_en:
      "Reciprocating compressors for intermittent and high-pressure air applications.",
    shortDescription_ar: "ضواغط ترددية للتطبيقات المتقطعة وعالية الضغط.",
    longDescription_en:
      "Reciprocating (piston) compressors for intermittent duty and higher-pressure air applications than typical screw compressors serve. We source units matched to your pressure and duty-cycle requirement.",
    longDescription_ar:
      "ضواغط ترددية (مكبسية) للأعمال المتقطعة وتطبيقات الضغط الأعلى مما توفره الضواغط اللولبية عادةً. نقوم بتوريد الوحدات المطابقة للضغط ودورة التشغيل المطلوبة لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "air-compressors-systems",
    relatedProductSlugs: ["rotary-screw-compressors", "gas-compressors"],
    catalogues: [
      {
        id: "reciprocating-compressors-datasheet",
        title_en: "Reciprocating Compressors Datasheet",
        title_ar: "نشرة بيانات الضواغط الترددية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/industrial-equipment/reciprocating-compressors.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "air-receivers-dryers",
    slug: "air-receivers-dryers",
    name_en: "Air Receivers & Air Dryers",
    name_ar: "خزانات ومجففات الهواء",
    shortDescription_en:
      "Air receiver tanks and dryers for stable, moisture-free compressed air supply.",
    shortDescription_ar:
      "خزانات هواء ومجففات للحصول على إمداد هواء مضغوط مستقر وخالٍ من الرطوبة.",
    longDescription_en:
      "Air receiver tanks buffer compressed air demand, and refrigerant or desiccant dryers remove moisture before it reaches your equipment. We source units matched to your system's storage capacity and dew-point requirement.",
    longDescription_ar:
      "تعمل خزانات الهواء على استيعاب تذبذبات الطلب على الهواء المضغوط، بينما تزيل المجففات التبريدية أو الماصة الرطوبة قبل وصولها إلى معداتكم. نقوم بتوريد الوحدات المطابقة لسعة التخزين ونقطة الندى المطلوبة في نظامكم.",
    sectorId: "industrial-equipment",
    categoryId: "air-compressors-systems",
    relatedProductSlugs: [
      "rotary-screw-compressors",
      "compressed-air-filtration-systems",
    ],
    catalogues: [
      {
        id: "air-receivers-dryers-datasheet",
        title_en: "Air Receivers & Air Dryers Datasheet",
        title_ar: "نشرة بيانات خزانات ومجففات الهواء",
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
    id: "compressed-air-filtration-systems",
    slug: "compressed-air-filtration-systems",
    name_en: "Compressed Air Filtration Systems",
    name_ar: "أنظمة ترشيح الهواء المضغوط",
    shortDescription_en:
      "Filtration systems that remove oil, particulates, and moisture from compressed air lines.",
    shortDescription_ar:
      "أنظمة ترشيح تزيل الزيت والجسيمات والرطوبة من خطوط الهواء المضغوط.",
    longDescription_en:
      "In-line filtration systems that remove oil, particulates, and residual moisture from compressed air before it reaches sensitive equipment or process applications. We source units matched to your required air quality class.",
    longDescription_ar:
      "أنظمة ترشيح مضمنة في الخط تزيل الزيت والجسيمات والرطوبة المتبقية من الهواء المضغوط قبل وصوله إلى المعدات الحساسة أو تطبيقات العمليات. نقوم بتوريد الوحدات المطابقة لفئة جودة الهواء المطلوبة لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "air-compressors-systems",
    relatedProductSlugs: ["air-receivers-dryers", "rotary-screw-compressors"],
    catalogues: [
      {
        id: "compressed-air-filtration-systems-datasheet",
        title_en: "Compressed Air Filtration Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة ترشيح الهواء المضغوط",
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
    id: "gas-compressors",
    slug: "gas-compressors",
    name_en: "Gas Compressors",
    name_ar: "ضواغط الغاز",
    shortDescription_en:
      "Gas compressors sourced to process gas type, pressure, and duty requirements.",
    shortDescription_ar:
      "ضواغط غاز يتم توريدها وفق نوع غاز العملية والضغط ومتطلبات التشغيل.",
    longDescription_en:
      "Gas compressors for process and utility gas duties beyond standard compressed air, sourced to your specific gas composition, discharge pressure, and duty cycle.",
    longDescription_ar:
      "ضواغط غاز لأعمال غازات العمليات والمرافق بخلاف الهواء المضغوط القياسي، يتم توريدها وفق تركيبة الغاز وضغط التصريف ودورة التشغيل المحددة لديكم.",
    sectorId: "industrial-equipment",
    categoryId: "air-compressors-systems",
    relatedProductSlugs: [
      "reciprocating-compressors",
      "rotary-screw-compressors",
    ],
    catalogues: [
      {
        id: "gas-compressors-datasheet",
        title_en: "Gas Compressors Datasheet",
        title_ar: "نشرة بيانات ضواغط الغاز",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/industrial-equipment/gas-compressors.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
