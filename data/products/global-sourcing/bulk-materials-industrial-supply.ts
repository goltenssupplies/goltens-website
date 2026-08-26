import type { Product } from "@/data/products/types";

/** Global Sourcing & OEM Brands → Bulk Materials & Industrial Supply category. */
export const globalBulkMaterialsIndustrialSupply: Product[] = [
  {
    id: "industrial-raw-materials-sourcing",
    slug: "industrial-raw-materials-sourcing",
    name_en: "Industrial Raw Materials",
    name_ar: "المواد الخام الصناعية",
    shortDescription_en:
      "Raw material sourcing for manufacturing and industrial production lines.",
    shortDescription_ar: "توريد مواد خام لخطوط الإنتاج والتصنيع الصناعي.",
    longDescription_en:
      "Industrial raw material sourcing for manufacturing and production lines, matched to your required material grade, quantity, and delivery schedule.",
    longDescription_ar:
      "توريد مواد خام صناعية لخطوط الإنتاج والتصنيع، مطابقة لدرجة المادة والكمية وجدول التسليم المطلوب لديكم.",
    sectorId: "global-sourcing",
    categoryId: "bulk-materials-industrial-supply",
    applications_en: [
      "Feedstock sourcing for manufacturing and fabrication production lines",
      "Consistent-quality raw material supply for recurring production schedules",
      "Bridging a supply gap when a primary raw material supplier can't meet a delivery",
      "Sourcing a specific material grade required by a project specification",
      "Bulk raw material procurement coordinated to a plant's production calendar",
    ],
    applications_ar: [
      "توريد مواد خام لخطوط إنتاج التصنيع والتشغيل",
      "توريد مواد خام بجودة ثابتة لجداول الإنتاج المتكررة",
      "سد فجوة التوريد عند عجز المورد الأساسي للمادة الخام عن الالتزام بالتسليم",
      "توريد درجة مادة محددة تتطلبها مواصفات المشروع",
      "توريد مواد خام بالجملة منسّق وفق التقويم الإنتاجي للمصنع",
    ],
    features_en: [
      "Sourced to your required material grade and quantity",
      "Coordinated to your delivery and production schedule",
      "Quality verification confirmed as part of every order",
    ],
    features_ar: [
      "يتم التوريد وفق درجة المادة والكمية المطلوبة لديكم",
      "منسّق وفق جدول التسليم والإنتاج لديكم",
      "تأكيد التحقق من الجودة كجزء من كل طلب",
    ],
    specifications: [
      {
        label_en: "Material scope",
        label_ar: "نطاق المواد",
        value:
          "Metals, polymers, chemical feedstocks, and other industrial raw materials sourced per project or production requirement",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Quality verification",
        label_ar: "التحقق من الجودة",
        value:
          "Material grade and specification confirmed against your requirement before order confirmation",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Packaging & quantity",
        label_ar: "التعبئة والكمية",
        value:
          "Bulk, bagged, drummed, or palletized formats, sized to your production or storage requirement",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Documentation provided",
        label_ar: "الوثائق المرفقة",
        value:
          "Certificate of Origin / Material Test Certificate (MTC), where issued by the supplier, provided with the order on request",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Delivery coordination",
        label_ar: "تنسيق التسليم",
        value:
          "Scheduled to your production calendar where recurring supply is required",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical sourcing lead time",
        label_ar: "مدة التوريد المعتادة",
        value: "Confirmed per RFQ, based on material, grade, and origin",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: [
      "bulk-commodity-sourcing",
      "packaging-materials-sourcing",
    ],
    catalogues: [
      {
        id: "industrial-raw-materials-sourcing-datasheet",
        title_en: "Industrial Raw Materials Sourcing Overview",
        title_ar: "نظرة عامة على توريد المواد الخام الصناعية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "bulk-commodity-sourcing",
    slug: "bulk-commodity-sourcing",
    name_en: "Bulk Commodity Sourcing",
    name_ar: "توريد السلع بالجملة",
    shortDescription_en:
      "Bulk commodity sourcing coordinated to project or fleet-level quantities.",
    shortDescription_ar: "توريد سلع بالجملة منسّق بكميات المشروع أو الأسطول.",
    longDescription_en:
      "Bulk commodity sourcing coordinated to project or fleet-level quantity requirements, drawing on our international supplier network for consistent supply.",
    longDescription_ar:
      "توريد سلع بالجملة منسّق وفق متطلبات كمية المشروع أو الأسطول، بالاعتماد على شبكة موردينا الدولية لضمان استمرارية التوريد.",
    sectorId: "global-sourcing",
    categoryId: "bulk-materials-industrial-supply",
    applications_en: [
      "Fleet-level consumables procurement coordinated across multiple sites",
      "Project-phase bulk material sourcing tied to a construction or turnaround schedule",
      "Consolidating recurring bulk orders under one supplier relationship",
      "Volume-driven procurement where unit pricing depends on order quantity",
      "Coordinated multi-site delivery for organizations with several facilities",
    ],
    applications_ar: [
      "توريد مستلزمات استهلاكية على مستوى الأسطول منسّق عبر مواقع متعددة",
      "توريد مواد بالجملة على مستوى مرحلة المشروع مرتبط بجدول إنشاء أو صيانة دورية",
      "توحيد الطلبات المتكررة بالجملة تحت علاقة توريد واحدة",
      "توريد قائم على الكمية حيث يعتمد سعر الوحدة على حجم الطلب",
      "تسليم منسّق لمواقع متعددة للمؤسسات ذات المنشآت المتعددة",
    ],
    features_en: [
      "Coordinated to project or fleet-level quantity requirements",
      "Consistent supply drawn from our international supplier network",
      "Delivery scheduling matched to your site or project timeline",
    ],
    features_ar: [
      "منسّق وفق متطلبات الكمية على مستوى المشروع أو الأسطول",
      "توريد مستمر بالاعتماد على شبكة موردينا الدولية",
      "جدولة تسليم مطابقة لموقعكم أو الجدول الزمني لمشروعكم",
    ],
    specifications: [
      {
        label_en: "Sourcing scope",
        label_ar: "نطاق التوريد",
        value:
          "Bulk industrial commodities and consumables sourced to project or fleet-level quantity requirements",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Quality verification",
        label_ar: "التحقق من الجودة",
        value:
          "Specification and quantity confirmed against your requirement before order confirmation",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Packaging & delivery format",
        label_ar: "صيغة التعبئة والتسليم",
        value:
          "Bulk, containerized, or staged delivery formats, matched to your site logistics",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Documentation provided",
        label_ar: "الوثائق المرفقة",
        value:
          "Certificate of Origin / Certificate of Conformity, where issued by the supplier, provided with the order on request",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Order structure",
        label_ar: "هيكل الطلب",
        value:
          "Single bulk order or scheduled recurring deliveries, confirmed per project",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical sourcing lead time",
        label_ar: "مدة التوريد المعتادة",
        value: "Confirmed per RFQ, based on commodity, quantity, and origin",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: [
      "industrial-raw-materials-sourcing",
      "project-specific-procurement",
    ],
    catalogues: [
      {
        id: "bulk-commodity-sourcing-datasheet",
        title_en: "Bulk Commodity Sourcing Overview",
        title_ar: "نظرة عامة على توريد السلع بالجملة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/global-sourcing/bulk-commodity-sourcing.webp"],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "packaging-materials-sourcing",
    slug: "packaging-materials-sourcing",
    name_en: "Packaging Materials",
    name_ar: "مواد التعبئة والتغليف",
    shortDescription_en:
      "Packaging materials sourced for industrial and commercial supply chains.",
    shortDescription_ar:
      "مواد تعبئة وتغليف يتم توريدها لسلاسل الإمداد الصناعية والتجارية.",
    longDescription_en:
      "Packaging materials for industrial and commercial supply chains, sourced to your product handling and shipping requirement.",
    longDescription_ar:
      "مواد تعبئة وتغليف لسلاسل الإمداد الصناعية والتجارية، يتم توريدها وفق متطلبات مناولة وشحن منتجاتكم.",
    sectorId: "global-sourcing",
    categoryId: "bulk-materials-industrial-supply",
    applications_en: [
      "Shipping and export packaging for industrial products and equipment",
      "Protective packaging for sensitive or high-value cargo",
      "Recurring packaging supply for manufacturing or distribution operations",
      "Custom packaging sized to an irregular or oversized product",
      "Packaging coordinated with a broader equipment or materials order for a single project",
    ],
    applications_ar: [
      "تغليف الشحن والتصدير للمنتجات والمعدات الصناعية",
      "تغليف حماية للشحنات الحساسة أو ذات القيمة العالية",
      "توريد مستمر لمواد التعبئة لعمليات التصنيع أو التوزيع",
      "تغليف مخصص بمقاسات تناسب المنتجات غير المنتظمة أو كبيرة الحجم",
      "تنسيق التغليف مع طلب معدات أو مواد أوسع لمشروع واحد",
    ],
    features_en: [
      "Sourced to your product handling and shipping requirement",
      "Suited to export, protective, and custom packaging needs",
      "Coordinated with related equipment or material orders where relevant",
    ],
    features_ar: [
      "يتم التوريد وفق متطلبات مناولة وشحن منتجكم",
      "مناسب لاحتياجات التصدير والحماية والتغليف المخصص",
      "منسّق مع طلبات المعدات أو المواد ذات الصلة عند الحاجة",
    ],
    specifications: [
      {
        label_en: "Sourcing scope",
        label_ar: "نطاق التوريد",
        value:
          "Industrial and export packaging materials, including protective, palletized, and custom-sized formats",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Quality verification",
        label_ar: "التحقق من الجودة",
        value:
          "Packaging specification confirmed against your product's handling, weight, and shipping requirement",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Typical order quantity",
        label_ar: "الكمية المعتادة للطلب",
        value: "Single shipment through recurring supply volumes",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Documentation provided",
        label_ar: "الوثائق المرفقة",
        value:
          "Packing specification and, where applicable, fumigation/treatment certificates provided with the order",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Delivery coordination",
        label_ar: "تنسيق التسليم",
        value: "Scheduled to align with the shipment or project it supports",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical sourcing lead time",
        label_ar: "مدة التوريد المعتادة",
        value: "Confirmed per RFQ, based on material and quantity",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: [
      "industrial-raw-materials-sourcing",
      "bulk-commodity-sourcing",
    ],
    catalogues: [
      {
        id: "packaging-materials-sourcing-datasheet",
        title_en: "Packaging Materials Sourcing Overview",
        title_ar: "نظرة عامة على توريد مواد التعبئة والتغليف",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/global-sourcing/packaging-materials-sourcing.webp",
    ],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "specialty-equipment-on-request",
    slug: "specialty-equipment-on-request",
    name_en: "Specialty Equipment on Request",
    name_ar: "معدات متخصصة عند الطلب",
    shortDescription_en:
      "Sourcing support for specialty equipment outside our standard sector listings.",
    shortDescription_ar:
      "دعم توريد للمعدات المتخصصة خارج قوائم قطاعاتنا القياسية.",
    longDescription_en:
      "Sourcing support for specialty equipment that falls outside our standard sector listings, confirmed on a case-by-case basis through our supplier network.",
    longDescription_ar:
      "دعم توريد للمعدات المتخصصة التي تقع خارج قوائم قطاعاتنا القياسية، ويتم تأكيدها حسب كل حالة من خلال شبكة موردينا.",
    sectorId: "global-sourcing",
    categoryId: "bulk-materials-industrial-supply",
    applications_en: [
      "Sourcing equipment that falls outside our standard sector listings",
      "One-off or low-frequency equipment purchases for a specific project need",
      "Specialty or niche equipment requiring supplier identification before quotation",
      "Equipment sourcing for a project scope spanning multiple unrelated categories",
      "Feasibility checks for equipment not currently carried on any GOLTENS sector page",
    ],
    applications_ar: [
      "توريد معدات تقع خارج قوائم قطاعاتنا القياسية",
      "مشتريات معدات لمرة واحدة أو منخفضة التكرار لاحتياج مشروع محدد",
      "معدات متخصصة أو نادرة تتطلب تحديد المورد قبل عرض السعر",
      "توريد معدات لنطاق مشروع يمتد عبر فئات متعددة غير مترابطة",
      "التحقق من إمكانية التوريد لمعدات غير مدرجة حاليًا في أي صفحة قطاع لدى GOLTENS",
    ],
    features_en: [
      "Confirmed case-by-case through our supplier network",
      "Not limited to categories listed on our other sector pages",
      "Feasibility and sourcing route confirmed before quotation",
    ],
    features_ar: [
      "يتم التأكيد حسب كل حالة من خلال شبكة موردينا",
      "غير مقتصر على الفئات المدرجة في صفحات قطاعاتنا الأخرى",
      "تأكيد إمكانية التوريد ومساره قبل عرض السعر",
    ],
    specifications: [
      {
        label_en: "Sourcing scope",
        label_ar: "نطاق التوريد",
        value:
          "Specialty or niche equipment outside GOLTENS' standard sector listings, confirmed case-by-case",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Verification process",
        label_ar: "عملية التحقق",
        value:
          "Supplier identification and feasibility check carried out before a formal quotation is issued",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Sourcing channel",
        label_ar: "قناة التوريد",
        value:
          "Sourced from the OEM or OEM-authorized distribution channel where identified, verified per order",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Documentation provided",
        label_ar: "الوثائق المرفقة",
        value:
          "Certificate of Origin / Certificate of Conformity, where issued by the manufacturer, provided with the order on request",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Response format",
        label_ar: "صيغة الرد",
        value:
          "Feasibility, options, and indicative scope confirmed before formal quotation",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical sourcing lead time",
        label_ar: "مدة التوريد المعتادة",
        value: "Confirmed per item once a supplier is identified",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: [
      "project-specific-procurement",
      "industrial-raw-materials-sourcing",
    ],
    catalogues: [
      {
        id: "specialty-equipment-on-request-datasheet",
        title_en: "Specialty Equipment Sourcing Overview",
        title_ar: "نظرة عامة على توريد المعدات المتخصصة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "project-specific-procurement",
    slug: "project-specific-procurement",
    name_en: "Project-Specific Procurement",
    name_ar: "مستلزمات توريد خاصة بالمشروع",
    shortDescription_en:
      "Procurement coordinated around a single project's full material and equipment list.",
    shortDescription_ar:
      "توريد منسّق حول قائمة المواد والمعدات الكاملة لمشروع واحد.",
    longDescription_en:
      "Procurement coordinated around a single project's full material and equipment list, spanning multiple categories and sourced as one coordinated effort rather than separate unrelated orders.",
    longDescription_ar:
      "توريد منسّق حول قائمة المواد والمعدات الكاملة لمشروع واحد، يمتد عبر فئات متعددة ويتم توريده كجهد منسّق واحد بدلاً من طلبات منفصلة غير مترابطة.",
    sectorId: "global-sourcing",
    categoryId: "bulk-materials-industrial-supply",
    applications_en: [
      "Consolidating a project's full material and equipment list under one coordinated order",
      "Multi-category procurement for construction, industrial, or infrastructure projects",
      "Single point of coordination for project teams managing multiple supplier relationships",
      "Phased procurement aligned with a project's construction or commissioning schedule",
      "Bid/tender-stage sourcing support to confirm availability before submission",
    ],
    applications_ar: [
      "توحيد قائمة المواد والمعدات الكاملة للمشروع ضمن طلب منسّق واحد",
      "توريد متعدد الفئات لمشروعات الإنشاء أو الصناعة أو البنية التحتية",
      "نقطة تنسيق واحدة لفرق المشاريع التي تدير علاقات موردين متعددة",
      "توريد على مراحل يتماشى مع الجدول الزمني للإنشاء أو التشغيل التجريبي للمشروع",
      "دعم توريد في مرحلة العطاء/المناقصة للتحقق من التوافر قبل التقديم",
    ],
    features_en: [
      "Coordinated across multiple product categories as one project scope",
      "Single point of contact for the project's full procurement list",
      "Phased delivery aligned with your project schedule",
    ],
    features_ar: [
      "منسّق عبر فئات منتجات متعددة كنطاق مشروع واحد",
      "جهة اتصال واحدة لقائمة التوريد الكاملة للمشروع",
      "تسليم على مراحل يتماشى مع الجدول الزمني لمشروعكم",
    ],
    specifications: [
      {
        label_en: "Sourcing scope",
        label_ar: "نطاق التوريد",
        value:
          "Multi-category material and equipment procurement coordinated for a single project",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Coordination model",
        label_ar: "نموذج التنسيق",
        value:
          "Managed as one consolidated scope across categories rather than separate unrelated orders",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Documentation provided",
        label_ar: "الوثائق المرفقة",
        value:
          "Certificate of Origin / Certificate of Conformity per item, where issued by the manufacturer, compiled for the project",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Delivery structure",
        label_ar: "هيكل التسليم",
        value:
          "Single delivery or phased delivery aligned with your project schedule, confirmed at RFQ stage",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical sourcing lead time",
        label_ar: "مدة التوريد المعتادة",
        value:
          "Confirmed per project, based on the full scope of items required",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: [
      "bulk-commodity-sourcing",
      "specialty-equipment-on-request",
    ],
    catalogues: [
      {
        id: "project-specific-procurement-datasheet",
        title_en: "Project-Specific Procurement Overview",
        title_ar: "نظرة عامة على مستلزمات التوريد الخاصة بالمشروع",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "on-request",
    quoteEnabled: true,
  },
];
