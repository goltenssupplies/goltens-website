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
    features_en: [
      "Electric and gas-fired equipment options",
      "Stainless steel food-contact construction",
      "Sized to your kitchen's daily meal-volume requirement",
    ],
    features_ar: [
      "خيارات معدات تعمل بالكهرباء أو الغاز",
      "تصنيع من الستانلس ستيل الملامس للأغذية",
      "مقاسة وفق حجم الوجبات اليومية في مطبخكم",
    ],
    specifications: [
      {
        label_en: "Daily meal capacity",
        label_ar: "السعة اليومية للوجبات",
        value: "Up to several thousand meals/day, line-configuration dependent",
        group_en: "Capacity",
        group_ar: "السعة",
      },
      {
        label_en: "Power supply",
        label_ar: "مصدر الطاقة",
        value: "Electric or gas-fired options",
        group_en: "Utilities",
        group_ar: "المرافق",
      },
      {
        label_en: "Construction material",
        label_ar: "خامة التصنيع",
        value: "Stainless steel, food-contact grade (AISI 304)",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Equipment types",
        label_ar: "أنواع المعدات",
        value: "Ranges, combi ovens, tilting pans, steamers, bratt pans",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured with food-contact-grade materials meeting NSF/ANSI food equipment guidance",
      },
    ],
    applications_en: [
      "Hospital main kitchen bulk cooking lines",
      "Patient meal preparation for ward catering",
      "Staff and visitor cafeteria food service",
      "Special-diet and therapeutic meal preparation areas",
      "Catering for large-occupancy hospital events",
    ],
    applications_ar: [
      "خطوط الطهي بالجملة في المطبخ الرئيسي بالمستشفى",
      "تجهيز وجبات المرضى لخدمة الأقسام",
      "خدمة تغذية كافيتيريا الموظفين والزوار",
      "مناطق تجهيز الوجبات الخاصة والعلاجية",
      "خدمة التغذية للفعاليات ذات الإشغال الكبير بالمستشفى",
    ],
    relatedProductSlugs: [
      "meal-distribution-trolleys",
      "stainless-steel-kitchen-fixtures",
    ],
    relatedBrandSlugs: ["electrolux-professional", "rational", "hobart"],
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
    features_en: [
      "Separate hot and cold holding compartments",
      "Stainless steel, food-contact grade construction",
      "Mobile, castor-mounted for ward-to-ward delivery",
    ],
    features_ar: [
      "حجرات منفصلة لحفظ الأطعمة الساخنة والباردة",
      "تصنيع من الستانلس ستيل الملامس للأغذية",
      "متحركة على عجلات لتيسير التوزيع بين الأقسام",
    ],
    specifications: [
      {
        label_en: "Tray capacity",
        label_ar: "سعة الصواني",
        value: "Approx. 10 – 40 trays, model-dependent",
        group_en: "Capacity",
        group_ar: "السعة",
      },
      {
        label_en: "Thermal retention",
        label_ar: "الاحتفاظ الحراري",
        value: "Separate hot and cold holding compartments",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Construction material",
        label_ar: "خامة التصنيع",
        value: "Stainless steel, food-contact grade (AISI 304)",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Mobility",
        label_ar: "قابلية الحركة",
        value: "Castor-mounted, swivel and locking wheel options",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured with food-contact-grade materials meeting NSF/ANSI food equipment guidance",
      },
    ],
    applications_en: [
      "Ward-to-ward meal delivery from the central kitchen",
      "Hot and cold meal segregation during transport",
      "Bulk tray service for large-occupancy wards",
      "Meal delivery to isolation and restricted-access wards",
      "Catering department internal logistics",
    ],
    applications_ar: [
      "توزيع الوجبات بين الأقسام من المطبخ المركزي",
      "فصل الوجبات الساخنة والباردة أثناء النقل",
      "خدمة الصواني بالجملة للأقسام ذات الإشغال الكبير",
      "توصيل الوجبات لأقسام العزل والوصول المقيّد",
      "اللوجستيات الداخلية لقسم التغذية",
    ],
    relatedProductSlugs: [
      "commercial-kitchen-equipment",
      "stainless-steel-kitchen-fixtures",
    ],
    relatedBrandSlugs: ["rieber", "burlodge"],
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
    features_en: [
      "Food-contact grade stainless steel throughout",
      "Custom fabrication to your kitchen layout",
      "Corrosion- and wash-down-resistant finishes",
    ],
    features_ar: [
      "ستانلس ستيل ملامس للأغذية بالكامل",
      "تصنيع مخصص وفق تصميم مطبخكم",
      "تشطيبات مقاومة للتآكل وعمليات الغسيل بالماء",
    ],
    specifications: [
      {
        label_en: "Material grade",
        label_ar: "درجة الخامة",
        value: "AISI 304 stainless steel, food-contact grade",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Sheet thickness",
        label_ar: "سماكة الصفائح",
        value: "0.8 mm – 1.5 mm, item-dependent",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Finish",
        label_ar: "التشطيب",
        value: "Brushed (satin) finish, wash-down resistant",
        group_en: "Materials",
        group_ar: "الخامات",
      },
      {
        label_en: "Fabrication",
        label_ar: "التصنيع",
        value:
          "Custom-fabricated to layout, standard modular sizes also available",
        group_en: "Configuration",
        group_ar: "التكوين",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured with food-contact-grade materials meeting NSF/ANSI food equipment guidance",
      },
    ],
    applications_en: [
      "Hospital kitchen worktables and preparation counters",
      "Wash-up and pot-wash area fittings",
      "Catering store shelving and dry-storage fixtures",
      "Hygienic wall cladding for food-preparation areas",
      "Staff pantry and ward kitchenette fixtures",
    ],
    applications_ar: [
      "طاولات عمل وأسطح تجهيز مطبخ المستشفى",
      "تجهيزات مناطق الغسيل وتنظيف الأواني",
      "أرفف مخازن التغذية وتجهيزات التخزين الجاف",
      "تكسية جدران صحية لمناطق تجهيز الطعام",
      "تجهيزات مطابخ الموظفين والمطابخ الصغيرة بالأقسام",
    ],
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
