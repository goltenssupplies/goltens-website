import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Electrical Supplies & Equipment category. */
export const healthcareElectricalSuppliesEquipment: Product[] = [
  {
    id: "general-purpose-electric-motors",
    slug: "general-purpose-electric-motors",
    name_en: "Electric Motors",
    name_ar: "محركات كهربائية",
    shortDescription_en:
      "General-purpose electric motors for hospital mechanical systems.",
    shortDescription_ar:
      "محركات كهربائية عامة الاستخدام لأنظمة المستشفى الميكانيكية.",
    longDescription_en:
      "Electric motors for mechanical systems — pumps, fans, and air handling units — sourced to your hospital's power, mounting, and duty-cycle requirement.",
    longDescription_ar:
      "محركات كهربائية للأنظمة الميكانيكية — المضخات والمراوح ووحدات معالجة الهواء — يتم توريدها وفق متطلبات القدرة والتركيب ودورة التشغيل في مستشفاكم.",
    sectorId: "healthcare",
    categoryId: "electrical-supplies-equipment",
    relatedProductSlugs: [
      "electrical-enclosures-junction-boxes",
      "indoor-lighting-fixtures",
    ],
    catalogues: [
      {
        id: "general-purpose-electric-motors-datasheet",
        title_en: "Electric Motors Datasheet",
        title_ar: "نشرة بيانات المحركات الكهربائية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    // SEO-only title override — distinguishes this from the identically
    // named "Electric Motors" product in fire-protection/fire-pumps.ts,
    // which was causing a duplicate <title> across the two pages.
    // `name_en`/`name_ar` (the on-page product name) are untouched.
    seo: {
      title_en: "Electric Motors for Hospital Mechanical Systems",
      title_ar: "محركات كهربائية للأنظمة الميكانيكية بالمستشفيات",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "electrical-enclosures-junction-boxes",
    slug: "electrical-enclosures-junction-boxes",
    name_en: "Electrical Enclosures & Junction Boxes",
    name_ar: "صناديق ولوحات التوصيل الكهربائية",
    shortDescription_en:
      "Enclosures and junction boxes for hospital electrical installations.",
    shortDescription_ar:
      "صناديق ولوحات توصيل كهربائية للتركيبات الكهربائية بالمستشفى.",
    longDescription_en:
      "Electrical enclosures and junction boxes for wiring and equipment protection, sourced to your ingress-protection rating and installation environment.",
    longDescription_ar:
      "صناديق ولوحات توصيل كهربائية لحماية الأسلاك والمعدات، يتم توريدها وفق تصنيف الحماية من التسرب وبيئة التركيب لديكم.",
    sectorId: "healthcare",
    categoryId: "electrical-supplies-equipment",
    relatedProductSlugs: [
      "general-purpose-electric-motors",
      "indoor-lighting-fixtures",
    ],
    catalogues: [
      {
        id: "electrical-enclosures-junction-boxes-datasheet",
        title_en: "Electrical Enclosures & Junction Boxes Datasheet",
        title_ar: "نشرة بيانات صناديق ولوحات التوصيل الكهربائية",
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
    id: "indoor-lighting-fixtures",
    slug: "indoor-lighting-fixtures",
    name_en: "Lighting Fixtures & Units",
    name_ar: "وحدات ومعدات الإنارة",
    shortDescription_en:
      "Lighting fixtures for hospital corridors, back-of-house, and general areas.",
    shortDescription_ar:
      "وحدات إنارة لممرات المستشفى ومناطق الخدمات والمساحات العامة.",
    longDescription_en:
      "Lighting fixtures and units for corridors, back-of-house areas, and general spaces, sourced to your illumination level and mounting requirement.",
    longDescription_ar:
      "وحدات ومعدات إنارة لممرات المستشفى ومناطق الخدمات والمساحات العامة، يتم توريدها وفق مستوى الإضاءة المطلوب وطريقة التركيب لديكم.",
    sectorId: "healthcare",
    categoryId: "electrical-supplies-equipment",
    relatedProductSlugs: [
      "general-purpose-electric-motors",
      "electrical-enclosures-junction-boxes",
    ],
    catalogues: [
      {
        id: "indoor-lighting-fixtures-datasheet",
        title_en: "Lighting Fixtures & Units Datasheet",
        title_ar: "نشرة بيانات وحدات ومعدات الإنارة",
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
