import type { Product } from "@/data/products/types";

/** Heavy Equipment & Machinery → Cranes & Lifting Equipment category. */
export const heavyCranesLiftingEquipment: Product[] = [
  {
    id: "mobile-cranes",
    slug: "mobile-cranes",
    name_en: "Mobile Cranes",
    name_ar: "الرافعات المتحركة",
    shortDescription_en:
      "Mobile cranes for lifting and placement work on construction and industrial sites.",
    shortDescription_ar:
      "رافعات متحركة لأعمال الرفع والتموضع في مواقع الإنشاءات والمنشآت الصناعية.",
    longDescription_en:
      "Mobile cranes for lifting and precise placement work across construction and industrial sites, sourced with the road mobility standard telescopic cranes offer. We source machines matched to your required lifting capacity and boom reach.",
    longDescription_ar:
      "رافعات متحركة لأعمال الرفع والتموضع الدقيق عبر مواقع الإنشاءات والمنشآت الصناعية، يتم توريدها بقدرة الحركة على الطرق التي توفرها الرافعات التلسكوبية. نقوم بتوريد الآليات المطابقة لسعة الرفع ومدى الذراع المطلوب لديكم.",
    sectorId: "heavy-equipment",
    categoryId: "cranes-lifting-equipment",
    relatedProductSlugs: ["crawler-cranes", "telehandlers"],
    catalogues: [
      {
        id: "mobile-cranes-datasheet",
        title_en: "Mobile Cranes Datasheet",
        title_ar: "نشرة بيانات الرافعات المتحركة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/heavy-equipment/mobile-cranes.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "crawler-cranes",
    slug: "crawler-cranes",
    name_en: "Crawler Cranes",
    name_ar: "الرافعات الزاحفة",
    shortDescription_en:
      "Crawler cranes for heavy-lift work on soft or uneven ground.",
    shortDescription_ar:
      "رافعات زاحفة لأعمال الرفع الثقيل على الأرضيات الطرية أو غير المستوية.",
    longDescription_en:
      "Crawler cranes for heavy-lift work on soft or uneven ground where wheeled mobile cranes aren't suited, common on infrastructure and heavy industrial projects. We source machines matched to your lift chart requirement.",
    longDescription_ar:
      "رافعات زاحفة لأعمال الرفع الثقيل على الأرضيات الطرية أو غير المستوية التي لا تناسبها الرافعات المتحركة ذات العجلات، وشائعة في مشروعات البنية التحتية والصناعات الثقيلة. نقوم بتوريد الآليات المطابقة لمتطلبات جدول الرفع لديكم.",
    sectorId: "heavy-equipment",
    categoryId: "cranes-lifting-equipment",
    relatedProductSlugs: ["mobile-cranes", "forklifts"],
    catalogues: [
      {
        id: "crawler-cranes-datasheet",
        title_en: "Crawler Cranes Datasheet",
        title_ar: "نشرة بيانات الرافعات الزاحفة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/heavy-equipment/crawler-cranes.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "forklifts",
    slug: "forklifts",
    name_en: "Forklifts",
    name_ar: "الرافعات الشوكية",
    shortDescription_en:
      "Forklifts for material handling in warehouses, yards, and job sites.",
    shortDescription_ar:
      "رافعات شوكية لمناولة المواد في المستودعات والساحات ومواقع العمل.",
    longDescription_en:
      "Forklifts for material handling in warehouses, yards, and construction job sites, sourced in counterbalance and rough-terrain configurations. We source units matched to your load capacity and operating surface.",
    longDescription_ar:
      "رافعات شوكية لمناولة المواد في المستودعات والساحات ومواقع الإنشاءات، يتم توريدها بتكوينات موازنة مضادة وللتضاريس الوعرة. نقوم بتوريد الوحدات المطابقة لسعة الحمل وطبيعة سطح التشغيل لديكم.",
    sectorId: "heavy-equipment",
    categoryId: "cranes-lifting-equipment",
    relatedProductSlugs: ["telehandlers", "mobile-cranes"],
    catalogues: [
      {
        id: "forklifts-datasheet",
        title_en: "Forklifts Datasheet",
        title_ar: "نشرة بيانات الرافعات الشوكية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/heavy-equipment/forklifts.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "telehandlers",
    slug: "telehandlers",
    name_en: "Telehandlers",
    name_ar: "الرافعات التلسكوبية",
    shortDescription_en:
      "Telehandlers for lifting and placing loads at height and reach on site.",
    shortDescription_ar:
      "رافعات تلسكوبية لرفع ووضع الأحمال على ارتفاع ومدى بالموقع.",
    longDescription_en:
      "Telehandlers for lifting and placing loads at height and horizontal reach beyond what a standard forklift covers, common on construction and agricultural sites. We source machines matched to your required lift height and capacity.",
    longDescription_ar:
      "رافعات تلسكوبية لرفع ووضع الأحمال على ارتفاع ومدى أفقي يتجاوز ما توفره الرافعة الشوكية القياسية، وشائعة في مواقع الإنشاءات والزراعة. نقوم بتوريد الآليات المطابقة لارتفاع وسعة الرفع المطلوبة لديكم.",
    sectorId: "heavy-equipment",
    categoryId: "cranes-lifting-equipment",
    relatedProductSlugs: ["forklifts", "aerial-work-platforms"],
    catalogues: [
      {
        id: "telehandlers-datasheet",
        title_en: "Telehandlers Datasheet",
        title_ar: "نشرة بيانات الرافعات التلسكوبية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/heavy-equipment/telehandlers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "aerial-work-platforms",
    slug: "aerial-work-platforms",
    name_en: "Aerial Work Platforms",
    name_ar: "منصات العمل الهوائية",
    shortDescription_en:
      "Scissor and boom lifts for safe elevated access to work at height.",
    shortDescription_ar:
      "رافعات مقصية وذات ذراع للوصول الآمن والمرتفع للعمل على ارتفاع.",
    longDescription_en:
      "Scissor lifts and boom lifts providing safe elevated access for maintenance, installation, and construction work at height. We source machines matched to your required working height and access footprint.",
    longDescription_ar:
      "رافعات مقصية ورافعات ذات ذراع توفر وصولاً آمنًا ومرتفعًا لأعمال الصيانة والتركيب والإنشاءات على ارتفاع. نقوم بتوريد الآليات المطابقة لارتفاع العمل المطلوب ومساحة الوصول لديكم.",
    sectorId: "heavy-equipment",
    categoryId: "cranes-lifting-equipment",
    relatedProductSlugs: ["telehandlers", "mobile-cranes"],
    catalogues: [
      {
        id: "aerial-work-platforms-datasheet",
        title_en: "Aerial Work Platforms Datasheet",
        title_ar: "نشرة بيانات منصات العمل الهوائية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/heavy-equipment/aerial-work-platforms.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
