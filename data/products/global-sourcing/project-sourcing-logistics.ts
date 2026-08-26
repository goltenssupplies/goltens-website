import type { Product } from "@/data/products/types";

/** Global Sourcing & OEM Brands → Project Sourcing & Logistics category. */
export const globalProjectSourcingLogistics: Product[] = [
  {
    id: "turnkey-equipment-packages",
    slug: "turnkey-equipment-packages",
    name_en: "Turnkey Equipment Packages",
    name_ar: "حزم معدات جاهزة (تسليم مفتاح)",
    shortDescription_en:
      "Coordinated equipment packages sourced and delivered as one turnkey scope.",
    shortDescription_ar:
      "حزم معدات منسّقة يتم توريدها وتسليمها كنطاق واحد جاهز.",
    longDescription_en:
      "Turnkey equipment packages spanning multiple product categories, coordinated and sourced as one scope so your project team deals with a single point of contact instead of multiple suppliers.",
    longDescription_ar:
      "حزم معدات جاهزة تمتد عبر فئات منتجات متعددة، يتم تنسيقها وتوريدها كنطاق واحد بحيث يتعامل فريق مشروعكم مع جهة اتصال واحدة بدلاً من موردين متعددين.",
    sectorId: "global-sourcing",
    categoryId: "project-sourcing-logistics",
    applications_en: [
      "New facility setup requiring multiple equipment categories from one coordinated source",
      "Plant expansion projects needing bundled equipment packages",
      "Project teams seeking a single point of contact instead of managing separate suppliers",
      "Tender submissions requiring a consolidated equipment package and documentation set",
      "Replacement of an entire equipment line in one coordinated delivery",
    ],
    applications_ar: [
      "إنشاء منشأة جديدة تتطلب فئات معدات متعددة من مصدر منسّق واحد",
      "مشروعات توسعة المصانع التي تحتاج حزم معدات مجمّعة",
      "فرق المشاريع الباحثة عن جهة اتصال واحدة بدلاً من إدارة موردين منفصلين",
      "تقديمات المناقصات التي تتطلب حزمة معدات موحدة ومجموعة وثائق مجمّعة",
      "استبدال خط معدات كامل ضمن تسليم منسّق واحد",
    ],
    features_en: [
      "Single point of contact across multiple equipment categories",
      "Coordinated sourcing, documentation, and delivery as one scope",
      "Sized to your project's full equipment list, not individual items",
    ],
    features_ar: [
      "جهة اتصال واحدة عبر فئات معدات متعددة",
      "توريد ووثائق وتسليم منسّق كنطاق واحد",
      "مصمم وفق قائمة المعدات الكاملة لمشروعكم وليس أصنافًا منفردة",
    ],
    specifications: [
      {
        label_en: "Package scope",
        label_ar: "نطاق الحزمة",
        value:
          "Multiple equipment categories bundled and coordinated as one turnkey package, confirmed against your project's equipment list",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Coordination model",
        label_ar: "نموذج التنسيق",
        value:
          "Single point of contact managing sourcing, documentation, and delivery across all package items",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Documentation provided",
        label_ar: "الوثائق المرفقة",
        value:
          "Certificate of Origin / Certificate of Conformity per item, where issued by the manufacturer, compiled into one package set",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Delivery structure",
        label_ar: "هيكل التسليم",
        value:
          "Single consolidated delivery or phased delivery, confirmed at RFQ stage against your project schedule",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical sourcing lead time",
        label_ar: "مدة التوريد المعتادة",
        value:
          "Confirmed per package, based on the combined lead time of all included items",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: [
      "certification-compliance-sourcing",
      "export-import-logistics-support",
    ],
    catalogues: [
      {
        id: "turnkey-equipment-packages-datasheet",
        title_en: "Turnkey Equipment Packages Overview",
        title_ar: "نظرة عامة على حزم المعدات الجاهزة",
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
    id: "certification-compliance-sourcing",
    slug: "certification-compliance-sourcing",
    name_en: "Certification & Compliance-Driven Sourcing",
    name_ar: "توريد وفق متطلبات الشهادات والمطابقة",
    shortDescription_en:
      "Sourcing coordinated around the specific certification requirements your project needs.",
    shortDescription_ar:
      "توريد منسّق وفق متطلبات الشهادات المحددة التي يحتاجها مشروعكم.",
    longDescription_en:
      "Sourcing coordinated around the specific certification and compliance documentation your project or tender requires, confirmed for each item before quotation.",
    longDescription_ar:
      "توريد منسّق وفق متطلبات الشهادات ووثائق المطابقة المحددة التي يتطلبها مشروعكم أو مناقصتكم، ويتم تأكيدها لكل صنف قبل عرض السعر.",
    sectorId: "global-sourcing",
    categoryId: "project-sourcing-logistics",
    applications_en: [
      "Government and public-sector tenders with defined certification requirements",
      "Projects requiring specific compliance documentation before customs clearance",
      "Industries with mandatory standards documentation, such as material or quality certificates",
      "Confirming certification availability before committing to a sourcing route",
      "Sourcing where a project specification names a required standard or approval",
    ],
    applications_ar: [
      "المناقصات الحكومية ومشروعات القطاع العام ذات متطلبات الشهادات المحددة",
      "مشروعات تتطلب وثائق مطابقة محددة قبل التخليص الجمركي",
      "الصناعات ذات متطلبات التوثيق الإلزامية للمعايير، مثل شهادات الخامة أو الجودة",
      "التحقق من توافر الشهادة قبل الالتزام بمسار توريد معين",
      "توريد تحدد فيه مواصفات المشروع معيارًا أو اعتمادًا مطلوبًا",
    ],
    features_en: [
      "Certification and documentation requirements confirmed before quotation",
      "Coordinated per item against your project or tender specification",
      "Documentation compiled and provided with the order where issued by the manufacturer or supplier",
    ],
    features_ar: [
      "تأكيد متطلبات الشهادات والوثائق قبل عرض السعر",
      "منسّق لكل صنف وفق مواصفات مشروعكم أو مناقصتكم",
      "تجميع الوثائق وتقديمها مع الطلب متى صدرت عن الجهة المصنّعة أو المورد",
    ],
    specifications: [
      {
        label_en: "Sourcing scope",
        label_ar: "نطاق التوريد",
        value:
          "Items and materials sourced with specific certification or compliance documentation as a defined project requirement",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Verification process",
        label_ar: "عملية التحقق",
        value:
          "Required standard, certificate, or approval confirmed against supplier documentation before quotation",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Documentation provided",
        label_ar: "الوثائق المرفقة",
        value:
          "Certificate of Origin / Certificate of Conformity / Material Test Certificate, where issued by the manufacturer or supplier",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Tender support",
        label_ar: "دعم المناقصات",
        value:
          "Documentation compiled in the format typically required for tender or customs submission, on request",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical sourcing lead time",
        label_ar: "مدة التوريد المعتادة",
        value:
          "Confirmed per item, accounting for certificate issuance where applicable",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: [
      "turnkey-equipment-packages",
      "emergency-urgent-procurement",
    ],
    catalogues: [
      {
        id: "certification-compliance-sourcing-datasheet",
        title_en: "Certification-Driven Sourcing Overview",
        title_ar: "نظرة عامة على التوريد وفق الشهادات",
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
    id: "emergency-urgent-procurement",
    slug: "emergency-urgent-procurement",
    name_en: "Emergency & Urgent Procurement",
    name_ar: "التوريد الطارئ والعاجل",
    shortDescription_en:
      "Expedited sourcing support for time-critical procurement requests.",
    shortDescription_ar: "دعم توريد سريع للطلبات ذات الأولوية الزمنية العاجلة.",
    longDescription_en:
      "Expedited sourcing support for time-critical procurement requests, confirming the fastest realistic sourcing route for your specific item as part of the response.",
    longDescription_ar:
      "دعم توريد سريع لطلبات التوريد ذات الأولوية الزمنية العاجلة، مع تأكيد أسرع مسار توريد واقعي للصنف المطلوب كجزء من الرد.",
    sectorId: "global-sourcing",
    categoryId: "project-sourcing-logistics",
    applications_en: [
      "Unplanned equipment failure requiring an immediate replacement part",
      "Production downtime where a single missing item is holding up a restart",
      "Time-critical project milestones with a fixed delivery deadline",
      "Emergency response situations requiring expedited sourcing and shipping",
      "Bridging an urgent gap while a standard-lead-time order is in progress",
    ],
    applications_ar: [
      "عطل غير مخطط في المعدات يتطلب قطعة بديلة فورية",
      "توقف الإنتاج بسبب صنف واحد مفقود يعطل إعادة التشغيل",
      "مراحل مشروع حرجة زمنيًا بموعد تسليم ثابت",
      "حالات الاستجابة الطارئة التي تتطلب توريدًا وشحنًا سريعين",
      "سد فجوة عاجلة أثناء تنفيذ طلب بمدة توريد قياسية",
    ],
    features_en: [
      "Fastest realistic sourcing route confirmed as part of the response",
      "Expedited shipping options coordinated where available",
      "Direct communication throughout the order for time-critical requests",
    ],
    features_ar: [
      "تأكيد أسرع مسار توريد واقعي كجزء من الرد",
      "تنسيق خيارات شحن سريع عند توفرها",
      "تواصل مباشر طوال مدة الطلب للحالات الحرجة زمنيًا",
    ],
    specifications: [
      {
        label_en: "Sourcing scope",
        label_ar: "نطاق التوريد",
        value:
          "Time-critical procurement requests across any GOLTENS supply category",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Response process",
        label_ar: "عملية الرد",
        value:
          "Fastest realistic sourcing and shipping route identified and confirmed as part of the initial response",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Sourcing channel",
        label_ar: "قناة التوريد",
        value:
          "Sourced from the OEM, OEM-authorized distribution channel, or a verified stock supplier — whichever is fastest — confirmed per order",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Documentation provided",
        label_ar: "الوثائق المرفقة",
        value:
          "Certificate of Origin / Certificate of Conformity, where issued and where time permits, provided with the order",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical sourcing lead time",
        label_ar: "مدة التوريد المعتادة",
        value:
          "Confirmed at time of request — expedited against standard lead time wherever a faster route exists",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: [
      "export-import-logistics-support",
      "custom-sourcing-requests",
    ],
    catalogues: [
      {
        id: "emergency-urgent-procurement-datasheet",
        title_en: "Emergency Procurement Overview",
        title_ar: "نظرة عامة على التوريد الطارئ",
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
    id: "export-import-logistics-support",
    slug: "export-import-logistics-support",
    name_en: "Export & Import Logistics Support",
    name_ar: "دعم لوجستيات التصدير والاستيراد",
    shortDescription_en:
      "Logistics support coordinated with the products we source for your project.",
    shortDescription_ar: "دعم لوجستي منسّق مع المنتجات التي نورّدها لمشروعكم.",
    longDescription_en:
      "Export and import logistics support coordinated with the products we source, matched to your delivery destination and documentation requirements.",
    longDescription_ar:
      "دعم لوجستيات التصدير والاستيراد منسّق مع المنتجات التي نورّدها، ومطابق لوجهة التسليم ومتطلبات الوثائق لديكم.",
    sectorId: "global-sourcing",
    categoryId: "project-sourcing-logistics",
    applications_en: [
      "Coordinating shipping and customs documentation for sourced equipment or materials",
      "Multi-country project logistics spanning several delivery destinations",
      "Import clearance support for equipment requiring specific certificates or permits",
      "Consolidated shipment planning for orders combining multiple product categories",
      "Delivery coordination for projects with defined site-access or scheduling constraints",
    ],
    applications_ar: [
      "تنسيق وثائق الشحن والتخليص الجمركي للمعدات أو المواد الموردة",
      "لوجستيات مشروعات متعددة الدول تشمل عدة وجهات تسليم",
      "دعم التخليص الجمركي للمعدات التي تتطلب شهادات أو تصاريح محددة",
      "تخطيط شحنات موحدة للطلبات التي تجمع فئات منتجات متعددة",
      "تنسيق التسليم للمشروعات ذات قيود الوصول للموقع أو الجدولة المحددة",
    ],
    features_en: [
      "Coordinated with the delivery destination and documentation requirements of your project",
      "Handles shipping and customs documentation alongside the products we source",
      "Consolidated shipment planning for multi-category orders",
    ],
    features_ar: [
      "منسّق مع وجهة التسليم ومتطلبات الوثائق الخاصة بمشروعكم",
      "يشمل وثائق الشحن والتخليص الجمركي إلى جانب المنتجات التي نورّدها",
      "تخطيط شحنات موحدة للطلبات متعددة الفئات",
    ],
    specifications: [
      {
        label_en: "Coverage",
        label_ar: "النطاق الجغرافي",
        value:
          "Export and import logistics coordinated for the products GOLTENS sources, across the destinations your project requires",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Documentation handled",
        label_ar: "الوثائق التي يتم تنسيقها",
        value:
          "Shipping documentation, customs paperwork, and Certificate of Origin coordination where applicable",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Shipment structure",
        label_ar: "هيكل الشحنة",
        value:
          "Single shipment or consolidated multi-item shipments, confirmed at order stage",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Delivery coordination",
        label_ar: "تنسيق التسليم",
        value:
          "Scheduled against your site-access, project milestone, or customs-clearance requirements",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical timeline",
        label_ar: "الإطار الزمني المعتاد",
        value:
          "Confirmed per shipment, based on origin, destination, and documentation requirements",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: [
      "turnkey-equipment-packages",
      "emergency-urgent-procurement",
    ],
    catalogues: [
      {
        id: "export-import-logistics-support-datasheet",
        title_en: "Export & Import Logistics Overview",
        title_ar: "نظرة عامة على لوجستيات التصدير والاستيراد",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/global-sourcing/export-import-logistics-support.webp",
    ],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "custom-sourcing-requests",
    slug: "custom-sourcing-requests",
    name_en: "Custom Sourcing Requests",
    name_ar: "طلبات توريد مخصصة",
    shortDescription_en:
      "A catch-all sourcing category for any product not listed elsewhere on the site.",
    shortDescription_ar:
      "فئة توريد شاملة لأي منتج غير مدرج في مكان آخر بالموقع.",
    longDescription_en:
      "For any product not listed elsewhere on this site — GOLTENS is a general procurement company, and our sourcing team will confirm whether and how we can supply it, whatever the category.",
    longDescription_ar:
      "لأي منتج غير مدرج في مكان آخر بهذا الموقع — GOLTENS شركة توريد عامة، وسيؤكد فريق التوريد لدينا إمكانية وطريقة توريده، أيًا كانت الفئة.",
    sectorId: "global-sourcing",
    categoryId: "project-sourcing-logistics",
    applications_en: [
      "A product or part that doesn't fit any listed GOLTENS category",
      "First-time inquiries where the right sourcing category isn't obvious",
      "Feasibility checks before committing to a full specification or drawing",
      "One-off procurement requests outside standard sector listings",
      "A starting point for a request that may later split into multiple line items",
    ],
    applications_ar: [
      "منتج أو قطعة لا تندرج تحت أي فئة مدرجة لدى GOLTENS",
      "الاستفسارات لأول مرة عندما لا تكون فئة التوريد المناسبة واضحة",
      "التحقق من إمكانية التوريد قبل الالتزام بمواصفات أو مخطط كامل",
      "طلبات توريد لمرة واحدة خارج قوائم القطاعات القياسية",
      "نقطة انطلاق لطلب قد ينقسم لاحقًا إلى عدة بنود",
    ],
    features_en: [
      "No fixed category required to start a request",
      "Confirmed by our sourcing team regardless of product type",
      "Feasibility and next steps confirmed before formal quotation",
    ],
    features_ar: [
      "لا حاجة لفئة محددة لبدء الطلب",
      "يتم التأكيد من قبل فريق التوريد لدينا بغض النظر عن نوع المنتج",
      "تأكيد إمكانية التوريد والخطوات التالية قبل عرض السعر الرسمي",
    ],
    specifications: [
      {
        label_en: "Sourcing scope",
        label_ar: "نطاق التوريد",
        value:
          "Any product, part, or material not listed elsewhere on the GOLTENS site, confirmed case-by-case",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Intake process",
        label_ar: "عملية الاستلام",
        value:
          "Initial request reviewed to identify the right sourcing category and supplier route",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Documentation provided",
        label_ar: "الوثائق المرفقة",
        value:
          "Certificate of Origin / Certificate of Conformity, where issued by the manufacturer or supplier, confirmed once the sourcing route is set",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical sourcing lead time",
        label_ar: "مدة التوريد المعتادة",
        value:
          "Confirmed once feasibility and sourcing route are established — not quoted as a blanket figure",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: [
      "certification-compliance-sourcing",
      "emergency-urgent-procurement",
    ],
    catalogues: [
      {
        id: "custom-sourcing-requests-datasheet",
        title_en: "Custom Sourcing Requests Overview",
        title_ar: "نظرة عامة على طلبات التوريد المخصصة",
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
