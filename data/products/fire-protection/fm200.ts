import type { Product } from "@/data/products/types";

/** Fire Protection → FM200 category. */
export const fireProtectionFm200: Product[] = [
  {
    id: "fm200",
    slug: "fm200",
    name_en: "FM200",
    name_ar: "نظام FM200",
    shortDescription_en:
      "FM200 clean agent suppression systems for data centers, server rooms, and control rooms.",
    shortDescription_ar:
      "أنظمة إخماد بغاز FM200 النظيف لمراكز البيانات وغرف السيرفرات وغرف التحكم.",
    longDescription_en:
      "FM200 is a clean agent gas suppression system that extinguishes fire without leaving residue or damaging equipment, making it suitable for data centers, server rooms, and control rooms where water-based suppression isn't appropriate. We size cylinder banks to your room's protected volume.",
    longDescription_ar:
      "يُعد FM200 نظام إخماد بالغاز النظيف الذي يخمد الحريق دون ترك بقايا أو إتلاف المعدات، مما يجعله مناسبًا لمراكز البيانات وغرف السيرفرات وغرف التحكم حيث لا يناسبها الإخماد بالمياه. نقوم بتحديد حجم أسطوانات الغاز وفق الحجم المحمي لغرفتكم.",
    sectorId: "fire-protection",
    categoryId: "fm200",
    features_en: [
      "Extinguishes fire in seconds without leaving residue",
      "Safe for use in normally occupied spaces at design concentration",
      "Cylinder banks sized to your room's protected volume",
    ],
    features_ar: [
      "يخمد الحريق خلال ثوانٍ دون ترك بقايا",
      "آمن للاستخدام في المساحات المأهولة عادةً عند تركيز التصميم",
      "أسطوانات غاز مقاسة وفق الحجم المحمي لغرفتكم",
    ],
    applications_en: [
      "Data centers and server rooms",
      "Electrical switchgear and control rooms",
      "Telecommunications equipment rooms",
      "Archive, museum, and heritage document storage",
    ],
    applications_ar: [
      "مراكز البيانات وغرف السيرفرات",
      "غرف اللوحات الكهربائية والتحكم",
      "غرف معدات الاتصالات",
      "مخازن الأرشيف والمتاحف والوثائق التراثية",
    ],
    specifications: [
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Discharge time",
        label_ar: "زمن التصريف",
        value: "Typically ≤10 seconds to design concentration",
      },
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Design concentration",
        label_ar: "تركيز التصميم",
        value:
          "Typically 6.25 – 9% by volume, hazard-dependent, per NFPA 2001 calculation",
      },
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Cylinder sizes",
        label_ar: "أحجام الأسطوانات",
        value: "Range of cylinder capacities banked to match room volume",
      },
      {
        group_en: "Configuration",
        group_ar: "التكوين",
        label_en: "Detection & release",
        label_ar: "الكشف والتحرير",
        value: "Cross-zoned detection with automatic and manual release",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically designed to NFPA 2001 / ISO 14520-5",
      },
    ],
    relatedProductSlugs: ["novec-1230", "gas-suppression", "co2-systems"],
    relatedBrandSlugs: ["minimax", "johnson-controls", "kidde"],
    relatedArticleSlugs: ["fm200-vs-novec-1230"],
    catalogues: [
      {
        id: "fm200-datasheet",
        title_en: "FM200 Datasheet",
        title_ar: "نشرة بيانات نظام FM200",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/fm200.webp"],
    faq: [
      {
        question_en: "What spaces is FM200 suitable for?",
        answer_en:
          "FM200 suits equipment-sensitive spaces where water-based suppression could damage what you're protecting — data centers, server rooms, electrical switchgear rooms, and control rooms are the most common applications.",
        question_ar: "لأي المساحات يناسب نظام FM200؟",
        answer_ar:
          "يناسب FM200 المساحات الحساسة للمعدات حيث قد يؤدي الإخماد بالمياه إلى إتلاف ما تتم حمايته — وتُعد مراكز البيانات وغرف السيرفرات وغرف اللوحات الكهربائية وغرف التحكم من أكثر التطبيقات شيوعًا.",
      },
      {
        question_en: "How is the FM200 system sized for my room?",
        answer_en:
          "Cylinder quantity and agent concentration are calculated from your room's protected volume and any obstructions. Share your room dimensions with your quotation request and our team will confirm the right system size.",
        question_ar: "كيف يتم تحديد حجم نظام FM200 المناسب لغرفتي؟",
        answer_ar:
          "يتم حساب عدد الأسطوانات وتركيز الغاز وفق الحجم المحمي لغرفتكم وأي عوائق موجودة. شاركوا أبعاد الغرفة عند طلب عرض السعر وسيؤكد فريقنا الحجم المناسب للنظام.",
      },
    ],
    availability: "available",
    quoteEnabled: true,
  },
];
