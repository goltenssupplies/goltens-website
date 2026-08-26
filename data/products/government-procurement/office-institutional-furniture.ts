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
    specifications: [
      {
        label_en: "Desktop material",
        label_ar: "خامة سطح المكتب",
        value: "High-pressure laminate (HPL) or melamine-faced board, 25–28 mm",
        group_en: "Materials & Construction",
        group_ar: "المواد والتصنيع",
      },
      {
        label_en: "Frame/base",
        label_ar: "الهيكل/القاعدة",
        value: "Powder-coated steel or aluminum",
        group_en: "Materials & Construction",
        group_ar: "المواد والتصنيع",
      },
      {
        label_en: "Desk height",
        label_ar: "ارتفاع المكتب",
        value: "720–750 mm (fixed); 650–1250 mm (height-adjustable)",
        group_en: "Dimensions & Ergonomics",
        group_ar: "الأبعاد وبيئة العمل",
      },
      {
        label_en: "Task chair base",
        label_ar: "قاعدة كرسي العمل",
        value: "5-star base with gas-lift height adjustment and castors",
        group_en: "Dimensions & Ergonomics",
        group_ar: "الأبعاد وبيئة العمل",
      },
      {
        label_en: "Seating adjustability",
        label_ar: "قابلية تعديل المقعد",
        value:
          "Adjustable armrests, lumbar support, and seat depth on task seating",
        group_en: "Dimensions & Ergonomics",
        group_ar: "الأبعاد وبيئة العمل",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Task seating typically tested to BIFMA X5.1 or EN 1335 for office chairs",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Ministry and government department administrative offices",
      "Municipal and local council service centers",
      "Public-facing service counters and reception areas",
      "Back-office and shared administrative workspaces",
      "Open-plan government office fit-outs",
      "Government call center and customer service workstations",
    ],
    applications_ar: [
      "المكاتب الإدارية للوزارات والإدارات الحكومية",
      "مراكز خدمة المجالس البلدية والمحلية",
      "أماكن كاونترات الخدمة الجماهيرية ومناطق الاستقبال",
      "مساحات العمل الإدارية المشتركة والمكتبية الخلفية",
      "تجهيزات المكاتب الحكومية ذات المخطط المفتوح",
      "محطات عمل مراكز خدمة المواطنين والاتصال الحكومية",
    ],
    relatedBrandSlugs: ["steelcase", "herman-miller", "haworth"],
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
    features_en: [
      "Sourced to match your office's protocol level and finish standard",
      "Boardroom tables sized to your meeting room capacity",
      "Reception seating matched to visitor volume and wait times",
    ],
    features_ar: [
      "يتم توريدها بما يتناسب مع المستوى البروتوكولي ومعايير التشطيب لمكتبكم",
      "طاولات اجتماعات مقاسة وفق سعة قاعة الاجتماعات لديكم",
      "مقاعد استقبال مطابقة لحجم الزوار وأوقات الانتظار",
    ],
    specifications: [
      {
        label_en: "Desk/table finish",
        label_ar: "تشطيب المكتب/الطاولة",
        value:
          "Wood veneer, laminate, or solid-surface tops with steel or wood frame",
        group_en: "Materials & Finishes",
        group_ar: "المواد والتشطيبات",
      },
      {
        label_en: "Seating upholstery",
        label_ar: "تنجيد المقاعد",
        value:
          "Genuine or PU leather and high-durability contract-grade fabric options",
        group_en: "Materials & Finishes",
        group_ar: "المواد والتشطيبات",
      },
      {
        label_en: "Boardroom table length",
        label_ar: "طول طاولة الاجتماعات",
        value: "2400–6000 mm, seating 8–20 depending on configuration",
        group_en: "Dimensions",
        group_ar: "الأبعاد",
      },
      {
        label_en: "Reception desk height",
        label_ar: "ارتفاع مكتب الاستقبال",
        value: "1100–1150 mm at the transaction counter",
        group_en: "Dimensions",
        group_ar: "الأبعاد",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Seating typically tested to EN 1335 or BIFMA X5.1 for office chairs",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Minister and director-general office fit-outs",
      "Government boardrooms and cabinet meeting rooms",
      "Front-office reception and visitor waiting areas",
      "Protocol and VIP reception spaces",
      "Conference and briefing rooms for public-sector delegations",
    ],
    applications_ar: [
      "تجهيز مكاتب الوزراء والمدراء العامين",
      "قاعات مجالس الإدارة واجتماعات مجلس الوزراء الحكومية",
      "مناطق استقبال المكاتب الأمامية وانتظار الزوار",
      "مساحات الاستقبال البروتوكولي وكبار الشخصيات",
      "قاعات المؤتمرات والإحاطات لوفود القطاع العام",
    ],
    relatedBrandSlugs: ["steelcase", "herman-miller"],
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
    features_en: [
      "Sized to your department's storage capacity requirement",
      "Lockable units available for restricted-access records",
      "Modular configurations for records rooms of any size",
    ],
    features_ar: [
      "مقاسة وفق متطلبات سعة التخزين لإدارتكم",
      "وحدات قابلة للإغلاق متوفرة للسجلات ذات الدخول المقيد",
      "تكوينات معيارية تناسب غرف السجلات بمختلف الأحجام",
    ],
    specifications: [
      {
        label_en: "Cabinet body",
        label_ar: "هيكل الخزانة",
        value: "Cold-rolled steel, 0.6–1.0 mm gauge, powder-coated finish",
        group_en: "Materials & Construction",
        group_ar: "المواد والتصنيع",
      },
      {
        label_en: "Locking system",
        label_ar: "نظام الإغلاق",
        value:
          "Central or individual-drawer key lock; electronic/combination lock optional",
        group_en: "Materials & Construction",
        group_ar: "المواد والتصنيع",
      },
      {
        label_en: "Drawer load capacity",
        label_ar: "سعة تحميل الدرج",
        value: "40–60 kg per drawer (vertical filing units)",
        group_en: "Capacity",
        group_ar: "السعة",
      },
      {
        label_en: "Shelf load capacity",
        label_ar: "سعة تحميل الرف",
        value: "80–120 kg per shelf (archival/shelving units)",
        group_en: "Capacity",
        group_ar: "السعة",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Storage and filing units typically tested to ANSI/BIFMA X5.9",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Government records and archive rooms",
      "Ministry document and case-file storage",
      "Municipal registry and permit record-keeping",
      "Institutional supply and stationery storage rooms",
      "Secure storage for restricted-access administrative files",
    ],
    applications_ar: [
      "غرف السجلات والأرشيف الحكومية",
      "تخزين وثائق وملفات القضايا في الوزارات",
      "حفظ سجلات التسجيل والتراخيص البلدية",
      "غرف تخزين اللوازم والقرطاسية المؤسسية",
      "التخزين الآمن للملفات الإدارية ذات الدخول المقيد",
    ],
    relatedBrandSlugs: ["bisley", "hon"],
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
    features_en: [
      "Matched to the facility type and expected daily usage volume",
      "Durable finishes selected for low-maintenance, high-turnover use",
      "Available in stackable and space-saving configurations",
    ],
    features_ar: [
      "مطابقة لنوع المنشأة وحجم الاستخدام اليومي المتوقع",
      "تشطيبات متينة يتم اختيارها لتقليل الصيانة وتحمل الاستخدام المكثف",
      "متوفرة بتكوينات قابلة للتكديس وموفرة للمساحة",
    ],
    specifications: [
      {
        label_en: "Frame construction",
        label_ar: "تصنيع الهيكل",
        value:
          "Welded tubular steel frame, powder-coated for high-use environments",
        group_en: "Materials & Construction",
        group_ar: "المواد والتصنيع",
      },
      {
        label_en: "Work surface",
        label_ar: "سطح العمل",
        value:
          "High-pressure laminate or antibacterial-coated surfaces (healthcare-grade options)",
        group_en: "Materials & Construction",
        group_ar: "المواد والتصنيع",
      },
      {
        label_en: "Stacking/nesting",
        label_ar: "قابلية التكديس",
        value: "Stackable chair and table options for flexible-use spaces",
        group_en: "Durability",
        group_ar: "المتانة",
      },
      {
        label_en: "Cleanability",
        label_ar: "سهولة التنظيف",
        value:
          "Wipeable, moisture-resistant surfaces for high-turnover environments",
        group_en: "Durability",
        group_ar: "المتانة",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "School furniture typically tested to EN 1729-1/2; institutional seating to BIFMA X5.1",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Public school classrooms and libraries",
      "Public hospital wards and clinic waiting areas",
      "Community centers and public training halls",
      "Government-run vocational and training institutes",
      "Public library reading rooms",
    ],
    applications_ar: [
      "الفصول الدراسية والمكتبات في المدارس الحكومية",
      "أجنحة وصالات انتظار العيادات في المستشفيات الحكومية",
      "المراكز المجتمعية وقاعات التدريب العامة",
      "معاهد التدريب المهني الحكومية",
      "قاعات القراءة في المكتبات العامة",
    ],
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
    features_en: [
      "Sourced to your floor plan and workstation density",
      "Configurable panel heights for open or private layouts",
      "Integrated cable management for power and data",
    ],
    features_ar: [
      "يتم توريدها وفق مخطط الطابق وكثافة محطات العمل لديكم",
      "ارتفاعات فواصل قابلة للتكوين للتخطيطات المفتوحة أو الخاصة",
      "إدارة كابلات مدمجة للكهرباء والبيانات",
    ],
    specifications: [
      {
        label_en: "Panel height range",
        label_ar: "نطاق ارتفاع الفواصل",
        value: "1100–1800 mm (low) / 1800–2100 mm (high privacy)",
        group_en: "Materials & Construction",
        group_ar: "المواد والتصنيع",
      },
      {
        label_en: "Panel construction",
        label_ar: "تصنيع الفاصل",
        value: "Fabric-wrapped acoustic core panels on aluminum or steel frame",
        group_en: "Materials & Construction",
        group_ar: "المواد والتصنيع",
      },
      {
        label_en: "Acoustic rating",
        label_ar: "معدل الامتصاص الصوتي",
        value: "NRC 0.7–0.9 (sound-absorbing panel fabric)",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Cable management",
        label_ar: "إدارة الكابلات",
        value: "Integrated raceways and grommets for power/data routing",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Panel systems typically tested to ANSI/BIFMA X5.6",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Open-plan government office layouts",
      "Shared administrative workstation clusters",
      "Call center and public-service agent workspaces",
      "Data entry and processing departments requiring acoustic separation",
    ],
    applications_ar: [
      "تخطيطات المكاتب الحكومية ذات المخطط المفتوح",
      "مجموعات محطات العمل الإدارية المشتركة",
      "مساحات عمل موظفي مراكز الاتصال وخدمة الجمهور",
      "أقسام إدخال ومعالجة البيانات التي تتطلب عزلًا صوتيًا",
    ],
    relatedBrandSlugs: ["steelcase", "haworth"],
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
