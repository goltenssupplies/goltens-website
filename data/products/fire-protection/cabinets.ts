import type { Product } from "@/data/products/types";

/** Fire Protection → Cabinets category. */
export const fireProtectionCabinets: Product[] = [
  {
    id: "fire-cabinets",
    slug: "fire-cabinets",
    name_en: "Fire Cabinets",
    name_ar: "خزائن الحريق",
    shortDescription_en:
      "Fire hose and equipment cabinets for accessible, ready-to-use fire response.",
    shortDescription_ar:
      "خزائن لخراطيم ومعدات الحريق لاستجابة سريعة وجاهزة لمكافحة الحريق.",
    longDescription_en:
      "Fire cabinets keep hose reels, extinguishers, and fire-fighting accessories accessible and protected at fixed points across a building. We source surface-mounted and recessed types, sized to hold the equipment your layout requires.",
    longDescription_ar:
      "تحافظ خزائن الحريق على بكرات الخراطيم والطفايات وملحقات مكافحة الحريق في متناول اليد ومحمية عند نقاط ثابتة في المبنى. نقوم بتوريد الأنواع السطحية والغائرة، بأحجام تتسع للمعدات التي يتطلبها مخططكم.",
    sectorId: "fire-protection",
    categoryId: "cabinets",
    features_en: [
      "Surface-mounted or semi-recessed/recessed installation",
      "Steel construction with fire-rated or standard door options",
      "Sized to house hose reel, extinguisher, and breakglass call point together",
    ],
    features_ar: [
      "تركيب سطحي أو غائر جزئيًا/كليًا",
      "تصنيع من الصلب بخيارات أبواب مقاومة للحريق أو قياسية",
      "أحجام تتسع لبكرة الخرطوم والطفاية ونقطة إنذار كسر الزجاج معًا",
    ],
    applications_en: [
      "Housing hose reels and extinguishers at fixed response points",
      "Corridor and stairwell fire equipment stations",
      "Industrial plant and warehouse fire points",
      "Combined equipment and breakglass call point enclosures",
    ],
    applications_ar: [
      "احتواء بكرات الخراطيم والطفايات عند نقاط الاستجابة الثابتة",
      "محطات معدات الحريق في الممرات والسلالم",
      "نقاط الحريق في المصانع والمستودعات الصناعية",
      "أغلفة مجمعة للمعدات ونقاط إنذار كسر الزجاج",
    ],
    specifications: [
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Material",
        label_ar: "المادة",
        value: "Mild steel or stainless steel cabinet body",
      },
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Mounting",
        label_ar: "التركيب",
        value: "Surface-mounted / semi-recessed / fully recessed",
      },
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Typical dimensions",
        label_ar: "الأبعاد النموذجية",
        value:
          "Approximately 700 – 1,200mm (H) x 500 – 800mm (W), sized to contents",
      },
      {
        group_en: "Configuration",
        group_ar: "التكوين",
        label_en: "Door",
        label_ar: "الباب",
        value: "Solid, glazed, or breakglass panel; single or double leaf",
      },
    ],
    relatedProductSlugs: [
      "fire-hose-reels",
      "fire-hoses",
      "fire-extinguishers",
    ],
    relatedBrandSlugs: ["naffco"],
    catalogues: [
      {
        id: "fire-cabinets-datasheet",
        title_en: "Fire Cabinets Datasheet",
        title_ar: "نشرة بيانات خزائن الحريق",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/fire-cabinets.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
