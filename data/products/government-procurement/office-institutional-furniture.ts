import type { Product } from "@/data/products/types";

/** Government Procurement → Office & Institutional Furniture category. */
export const governmentOfficeInstitutionalFurniture: Product[] = [
  {
    id: "office-furniture-systems",
    slug: "office-furniture-systems",
    name_en: "Office Furniture Systems",
    name_ar: "أنظمة الأثاث المكتبي",
    shortDescription_en:
      "Desks, workstations, and seating sourced for government and institutional offices.",
    shortDescription_ar:
      "مكاتب ومحطات عمل ومقاعد يتم توريدها للمكاتب الحكومية والمؤسسية.",
    longDescription_en:
      "A complete range of desks, workstations, and office seating for government departments and public-sector offices. We source furniture matched to your department's headcount, layout, and durability requirements.",
    longDescription_ar:
      "مجموعة متكاملة من المكاتب ومحطات العمل ومقاعد المكاتب للإدارات الحكومية ومكاتب القطاع العام. نقوم بتوريد الأثاث المطابق لعدد الموظفين ومخطط المساحة ومتطلبات المتانة لدى إدارتكم.",
    sectorId: "government-procurement",
    categoryId: "office-institutional-furniture",
    features_en: [
      "Desks, workstations, and task seating",
      "Sourced to fit your department's layout and headcount",
    ],
    features_ar: [
      "مكاتب ومحطات عمل ومقاعد",
      "يتم توريدها بما يناسب مخطط إدارتكم وعدد الموظفين",
    ],
    relatedProductSlugs: [
      "executive-reception-furniture",
      "office-partitions-cubicles",
      "filing-storage-cabinets",
    ],
    catalogues: [
      {
        id: "office-furniture-systems-datasheet",
        title_en: "Office Furniture Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة الأثاث المكتبي",
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
    id: "executive-reception-furniture",
    slug: "executive-reception-furniture",
    name_en: "Executive & Reception Furniture",
    name_ar: "أثاث تنفيذي ومكاتب استقبال",
    shortDescription_en:
      "Executive desks, meeting tables, and reception furniture for government offices.",
    shortDescription_ar:
      "مكاتب تنفيذية وطاولات اجتماعات وأثاث استقبال للمكاتب الحكومية.",
    longDescription_en:
      "Executive desks, boardroom and meeting tables, and reception seating for government and institutional front offices. We source pieces matched to your office's protocol and space requirements.",
    longDescription_ar:
      "مكاتب تنفيذية وطاولات قاعات اجتماعات ومقاعد استقبال للمكاتب الأمامية الحكومية والمؤسسية. نقوم بتوريد القطع المطابقة لبروتوكول ومتطلبات مساحة مكتبكم.",
    sectorId: "government-procurement",
    categoryId: "office-institutional-furniture",
    relatedProductSlugs: [
      "office-furniture-systems",
      "office-partitions-cubicles",
    ],
    catalogues: [
      {
        id: "executive-reception-furniture-datasheet",
        title_en: "Executive & Reception Furniture Datasheet",
        title_ar: "نشرة بيانات الأثاث التنفيذي وأثاث الاستقبال",
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
    id: "filing-storage-cabinets",
    slug: "filing-storage-cabinets",
    name_en: "Filing & Storage Cabinets",
    name_ar: "خزائن الملفات والتخزين",
    shortDescription_en:
      "Filing cabinets and secure storage units for institutional records and supplies.",
    shortDescription_ar:
      "خزائن ملفات ووحدات تخزين آمنة للسجلات والمستلزمات المؤسسية.",
    longDescription_en:
      "Filing cabinets, lockable storage units, and archival shelving for government offices and institutional records rooms. We source units matched to your storage capacity and security requirements.",
    longDescription_ar:
      "خزائن ملفات ووحدات تخزين قابلة للإغلاق وأرفف أرشفة للمكاتب الحكومية وغرف السجلات المؤسسية. نقوم بتوريد الوحدات المطابقة لسعة التخزين ومتطلبات الأمان لديكم.",
    sectorId: "government-procurement",
    categoryId: "office-institutional-furniture",
    relatedProductSlugs: [
      "institutional-furniture",
      "office-furniture-systems",
    ],
    catalogues: [
      {
        id: "filing-storage-cabinets-datasheet",
        title_en: "Filing & Storage Cabinets Datasheet",
        title_ar: "نشرة بيانات خزائن الملفات والتخزين",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/government-procurement/filing-storage-cabinets.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "institutional-furniture",
    slug: "institutional-furniture",
    name_en: "Institutional Furniture",
    name_ar: "أثاث مؤسسي",
    shortDescription_en:
      "Durable furniture for schools, hospitals, and public offices sourced to institutional-grade standards.",
    shortDescription_ar:
      "أثاث متين للمدارس والمستشفيات والمكاتب العامة، يتم توريده وفق معايير الاستخدام المؤسسي.",
    longDescription_en:
      "Furniture built for high-use institutional environments — schools, hospitals, and public offices — where durability and ease of maintenance matter more than in a typical office. We source pieces matched to the facility type and expected usage.",
    longDescription_ar:
      "أثاث مصمم للبيئات المؤسسية عالية الاستخدام — المدارس والمستشفيات والمكاتب العامة — حيث تكون المتانة وسهولة الصيانة أكثر أهمية من المكتب العادي. نقوم بتوريد القطع المطابقة لنوع المنشأة ومعدل الاستخدام المتوقع.",
    sectorId: "government-procurement",
    categoryId: "office-institutional-furniture",
    relatedProductSlugs: [
      "filing-storage-cabinets",
      "office-furniture-systems",
    ],
    catalogues: [
      {
        id: "institutional-furniture-datasheet",
        title_en: "Institutional Furniture Datasheet",
        title_ar: "نشرة بيانات الأثاث المؤسسي",
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
    id: "office-partitions-cubicles",
    slug: "office-partitions-cubicles",
    name_en: "Office Partitions & Cubicles",
    name_ar: "فواصل ومقصورات مكتبية",
    shortDescription_en:
      "Modular partitions and workstation cubicles for open-plan government offices.",
    shortDescription_ar:
      "فواصل معيارية ومقصورات محطات عمل للمكاتب الحكومية ذات المخطط المفتوح.",
    longDescription_en:
      "Modular office partitions and workstation cubicles for open-plan government and institutional offices, sourced to your floor plan and privacy requirements.",
    longDescription_ar:
      "فواصل مكتبية معيارية ومقصورات محطات عمل للمكاتب الحكومية والمؤسسية ذات المخطط المفتوح، يتم توريدها وفق مخطط الطابق ومتطلبات الخصوصية لديكم.",
    sectorId: "government-procurement",
    categoryId: "office-institutional-furniture",
    relatedProductSlugs: [
      "office-furniture-systems",
      "executive-reception-furniture",
    ],
    catalogues: [
      {
        id: "office-partitions-cubicles-datasheet",
        title_en: "Office Partitions & Cubicles Datasheet",
        title_ar: "نشرة بيانات الفواصل والمقصورات المكتبية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/government-procurement/office-partitions-cubicles.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
];
