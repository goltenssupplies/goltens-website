import type { Product } from "@/data/products/types";

/** Heavy Equipment & Machinery → Concrete & Compaction Equipment category. */
export const heavyConcreteCompactionEquipment: Product[] = [
  {
    id: "concrete-mixers",
    slug: "concrete-mixers",
    name_en: "Concrete Mixers",
    name_ar: "خلاطات الخرسانة",
    shortDescription_en:
      "Concrete mixers for on-site and transit mixing of concrete.",
    shortDescription_ar: "خلاطات خرسانة للخلط بالموقع وأثناء النقل.",
    longDescription_en:
      "Concrete mixers for on-site batch mixing and transit mixer drums for ready-mix delivery. We source units matched to your required batch volume and site logistics.",
    longDescription_ar:
      "خلاطات خرسانة للخلط بالدفعات في الموقع، وأسطوانات خلاطات النقل لتوصيل الخرسانة الجاهزة. نقوم بتوريد الوحدات المطابقة لحجم الدفعة المطلوب ولوجستيات موقعكم.",
    sectorId: "heavy-equipment",
    categoryId: "concrete-compaction-equipment",
    relatedProductSlugs: ["concrete-pumps"],
    catalogues: [
      {
        id: "concrete-mixers-datasheet",
        title_en: "Concrete Mixers Datasheet",
        title_ar: "نشرة بيانات خلاطات الخرسانة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/heavy-equipment/concrete-mixers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "concrete-pumps",
    slug: "concrete-pumps",
    name_en: "Concrete Pumps",
    name_ar: "مضخات الخرسانة",
    shortDescription_en:
      "Concrete pumps for placing concrete at height or distance from the mixer.",
    shortDescription_ar:
      "مضخات خرسانة لصب الخرسانة على ارتفاع أو مسافة من الخلاطة.",
    longDescription_en:
      "Concrete pumps — boom and line pump configurations — for placing concrete at height or over distances a chute can't reach. We source units matched to your placement volume, reach, and site access.",
    longDescription_ar:
      "مضخات خرسانة — بتكوينات الذراع والخط — لصب الخرسانة على ارتفاع أو لمسافات لا تصلها الميزاب. نقوم بتوريد الوحدات المطابقة لحجم الصب ومدى الوصول وإمكانية الدخول لموقعكم.",
    sectorId: "heavy-equipment",
    categoryId: "concrete-compaction-equipment",
    relatedProductSlugs: ["concrete-mixers"],
    catalogues: [
      {
        id: "concrete-pumps-datasheet",
        title_en: "Concrete Pumps Datasheet",
        title_ar: "نشرة بيانات مضخات الخرسانة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/heavy-equipment/concrete-pumps.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "vibratory-rollers",
    slug: "vibratory-rollers",
    name_en: "Vibratory Rollers",
    name_ar: "الرصاصات الاهتزازية",
    shortDescription_en:
      "Vibratory rollers for soil and asphalt compaction on road and site works.",
    shortDescription_ar:
      "رصاصات اهتزازية لدك التربة والأسفلت في أعمال الطرق والمواقع.",
    longDescription_en:
      "Vibratory rollers for soil and asphalt compaction on road construction and earthworks projects. We source machines matched to your compaction depth and material type.",
    longDescription_ar:
      "رصاصات اهتزازية لدك التربة والأسفلت في مشروعات إنشاء الطرق وأعمال التراب. نقوم بتوريد الآليات المطابقة لعمق الدك ونوع المادة لديكم.",
    sectorId: "heavy-equipment",
    categoryId: "concrete-compaction-equipment",
    relatedProductSlugs: ["asphalt-pavers"],
    catalogues: [
      {
        id: "vibratory-rollers-datasheet",
        title_en: "Vibratory Rollers Datasheet",
        title_ar: "نشرة بيانات الرصاصات الاهتزازية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/heavy-equipment/vibratory-rollers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "asphalt-pavers",
    slug: "asphalt-pavers",
    name_en: "Asphalt Pavers",
    name_ar: "فارشات الأسفلت",
    shortDescription_en:
      "Asphalt pavers for laying and finishing road surface courses.",
    shortDescription_ar: "فارشات أسفلت لفرش وتشطيب طبقات أسطح الطرق.",
    longDescription_en:
      "Asphalt pavers for laying and finishing road surface courses to a consistent width and thickness ahead of compaction. We source machines matched to your paving width and daily output requirement.",
    longDescription_ar:
      "فارشات أسفلت لفرش وتشطيب طبقات أسطح الطرق بعرض وسماكة متجانسين قبل عملية الدك. نقوم بتوريد الآليات المطابقة لعرض الفرش والإنتاجية اليومية المطلوبة لديكم.",
    sectorId: "heavy-equipment",
    categoryId: "concrete-compaction-equipment",
    relatedProductSlugs: ["vibratory-rollers"],
    catalogues: [
      {
        id: "asphalt-pavers-datasheet",
        title_en: "Asphalt Pavers Datasheet",
        title_ar: "نشرة بيانات فارشات الأسفلت",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/heavy-equipment/asphalt-pavers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "hydraulic-breakers",
    slug: "hydraulic-breakers",
    name_en: "Hydraulic Breakers",
    name_ar: "المطارق الهيدروليكية",
    shortDescription_en:
      "Hydraulic breaker attachments for demolition and rock-breaking work.",
    shortDescription_ar: "ملحقات مطارق هيدروليكية لأعمال الهدم وكسر الصخور.",
    longDescription_en:
      "Hydraulic breaker attachments for excavators, used in demolition, rock breaking, and trenching in hard ground. We source units matched to your carrier machine's weight class and required impact energy.",
    longDescription_ar:
      "ملحقات مطارق هيدروليكية للحفارات، تُستخدم في أعمال الهدم وكسر الصخور وحفر الخنادق في الأرضيات الصلبة. نقوم بتوريد الوحدات المطابقة لفئة وزن الآلية الحاملة وطاقة الطرق المطلوبة لديكم.",
    sectorId: "heavy-equipment",
    categoryId: "concrete-compaction-equipment",
    relatedProductSlugs: ["concrete-pumps"],
    catalogues: [
      {
        id: "hydraulic-breakers-datasheet",
        title_en: "Hydraulic Breakers Datasheet",
        title_ar: "نشرة بيانات المطارق الهيدروليكية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/heavy-equipment/hydraulic-breakers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
