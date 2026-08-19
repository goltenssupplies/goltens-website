import type { Product } from "@/data/products/types";

/** Healthcare & Medical Solutions → Catering & Kitchen Supplies category. */
export const healthcareCateringKitchenSupplies: Product[] = [
  {
    id: "commercial-kitchen-equipment",
    slug: "commercial-kitchen-equipment",
    name_en: "Commercial Kitchen Equipment",
    name_ar: "معدات مطابخ تجارية",
    shortDescription_en:
      "Commercial kitchen cooking and preparation equipment for hospital catering departments.",
    shortDescription_ar: "معدات طهي وتجهيز تجارية لأقسام التغذية بالمستشفى.",
    longDescription_en:
      "Commercial kitchen cooking and food-preparation equipment for hospital catering departments, sourced to your kitchen layout and daily meal-volume requirement.",
    longDescription_ar:
      "معدات طهي وتجهيز طعام تجارية لأقسام التغذية بالمستشفى، يتم توريدها وفق تصميم المطبخ وحجم الوجبات اليومية لديكم.",
    sectorId: "healthcare",
    categoryId: "catering-kitchen-supplies",
    relatedProductSlugs: [
      "meal-distribution-trolleys",
      "stainless-steel-kitchen-fixtures",
    ],
    catalogues: [
      {
        id: "commercial-kitchen-equipment-datasheet",
        title_en: "Commercial Kitchen Equipment Datasheet",
        title_ar: "نشرة بيانات معدات المطابخ التجارية",
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
    id: "meal-distribution-trolleys",
    slug: "meal-distribution-trolleys",
    name_en: "Meal Distribution Trolleys",
    name_ar: "عربات توزيع الوجبات",
    shortDescription_en:
      "Trolleys for hospital ward meal distribution and food transport.",
    shortDescription_ar: "عربات لتوزيع الوجبات ونقل الطعام إلى أقسام المستشفى.",
    longDescription_en:
      "Meal distribution trolleys for transporting food from the kitchen to hospital wards, sourced to your ward-delivery method and required holding capacity.",
    longDescription_ar:
      "عربات توزيع الوجبات لنقل الطعام من المطبخ إلى أقسام المستشفى، يتم توريدها وفق طريقة التوزيع على الأقسام والسعة المطلوبة لديكم.",
    sectorId: "healthcare",
    categoryId: "catering-kitchen-supplies",
    relatedProductSlugs: [
      "commercial-kitchen-equipment",
      "stainless-steel-kitchen-fixtures",
    ],
    catalogues: [
      {
        id: "meal-distribution-trolleys-datasheet",
        title_en: "Meal Distribution Trolleys Datasheet",
        title_ar: "نشرة بيانات عربات توزيع الوجبات",
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
    id: "stainless-steel-kitchen-fixtures",
    slug: "stainless-steel-kitchen-fixtures",
    name_en: "Stainless Steel Kitchen Fixtures",
    name_ar: "تجهيزات مطابخ من الستانلس ستيل",
    shortDescription_en:
      "Stainless steel worktables and fixed fittings for hospital kitchen areas.",
    shortDescription_ar:
      "طاولات عمل وتجهيزات ثابتة من الستانلس ستيل لمناطق مطابخ المستشفى.",
    longDescription_en:
      "Stainless steel worktables, shelving, and fixed fittings for hospital kitchen and catering areas, sourced to your layout and food-service workflow.",
    longDescription_ar:
      "طاولات عمل وأرفف وتجهيزات ثابتة من الستانلس ستيل لمناطق المطابخ والتغذية بالمستشفى، يتم توريدها وفق التصميم وسير عمل خدمة الطعام لديكم.",
    sectorId: "healthcare",
    categoryId: "catering-kitchen-supplies",
    relatedProductSlugs: [
      "commercial-kitchen-equipment",
      "meal-distribution-trolleys",
    ],
    catalogues: [
      {
        id: "stainless-steel-kitchen-fixtures-datasheet",
        title_en: "Stainless Steel Kitchen Fixtures Datasheet",
        title_ar: "نشرة بيانات تجهيزات المطابخ من الستانلس ستيل",
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
