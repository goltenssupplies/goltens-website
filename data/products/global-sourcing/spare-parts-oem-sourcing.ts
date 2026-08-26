import type { Product } from "@/data/products/types";

/** Global Sourcing & OEM Brands → Spare Parts & OEM Sourcing category. */
export const globalSpartsPartsOemSourcing: Product[] = [
  {
    id: "oem-replacement-parts",
    slug: "oem-replacement-parts",
    name_en: "OEM Replacement Parts",
    name_ar: "قطع غيار بديلة أصلية (OEM)",
    shortDescription_en:
      "OEM replacement parts sourced against your equipment's original part number.",
    shortDescription_ar:
      "قطع غيار بديلة أصلية يتم توريدها وفق رقم القطعة الأصلي لمعداتكم.",
    longDescription_en:
      "OEM replacement parts sourced against your equipment's original part number or manufacturer reference, for equipment across any of GOLTENS' supply categories. Share your part number or nameplate details and we'll confirm sourcing.",
    longDescription_ar:
      "قطع غيار بديلة أصلية يتم توريدها وفق رقم القطعة الأصلي أو مرجع الجهة المصنّعة لمعداتكم، عبر أي من فئات التوريد لدى GOLTENS. شاركونا رقم القطعة أو بيانات اللوحة التعريفية وسنؤكد إمكانية التوريد.",
    sectorId: "global-sourcing",
    categoryId: "spare-parts-oem-sourcing",
    applications_en: [
      "Plant shutdown and turnaround spare parts sourcing",
      "Replacing a failed or worn component on equipment already installed at your facility",
      "Fleet-wide or plant-wide spares stocking for planned maintenance",
      "Sourcing parts for equipment whose local distributor coverage is limited",
      "Multi-brand facilities needing one point of contact across mixed-OEM spares",
    ],
    applications_ar: [
      "توريد قطع غيار لعمليات إيقاف وصيانة المصانع الدورية (Turnaround)",
      "استبدال مكون تالف أو مستهلك في معدات مركّبة بالفعل في منشأتكم",
      "تخزين قطع غيار على مستوى الأسطول أو المصنع لأغراض الصيانة المخططة",
      "توريد قطع غيار لمعدات ذات تغطية محدودة من الموزع المحلي",
      "المنشآت متعددة العلامات التجارية التي تحتاج جهة اتصال واحدة لقطع غيار متعددة المصنّعين",
    ],
    features_en: [
      "Sourcing matched to your exact part number, nameplate, or manufacturer reference",
      "Single point of contact across multiple equipment brands",
      "Documentation confirmed before dispatch",
    ],
    features_ar: [
      "توريد مطابق لرقم القطعة أو بيانات اللوحة التعريفية أو مرجع الجهة المصنّعة لديكم بدقة",
      "جهة اتصال واحدة لقطع غيار متعددة العلامات التجارية",
      "تأكيد الوثائق المطلوبة قبل الشحن",
    ],
    specifications: [
      {
        label_en: "Sourcing scope",
        label_ar: "نطاق التوريد",
        value:
          "Mechanical, electrical, and rotating equipment spare parts across industrial, marine, power, and fire protection categories",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Verification process",
        label_ar: "عملية التحقق",
        value:
          "Cross-checked against your equipment's original part number, nameplate data, or manufacturer reference before quotation",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Sourcing channel",
        label_ar: "قناة التوريد",
        value:
          "Sourced from the OEM or OEM-authorized distribution channel, verified per order",
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
        label_en: "Typical order quantity",
        label_ar: "الكمية المعتادة للطلب",
        value: "Single unit through bulk, plant-wide spares orders",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical sourcing lead time",
        label_ar: "مدة التوريد المعتادة",
        value: "Confirmed per RFQ, based on part availability and origin",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: [
      "non-standard-hard-to-find-items",
      "obsolete-parts-sourcing",
    ],
    catalogues: [
      {
        id: "oem-replacement-parts-datasheet",
        title_en: "OEM Replacement Parts Sourcing Overview",
        title_ar: "نظرة عامة على توريد قطع الغيار الأصلية",
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
    id: "custom-manufactured-components",
    slug: "custom-manufactured-components",
    name_en: "Custom-Manufactured Components",
    name_ar: "مكونات مصنّعة حسب الطلب",
    shortDescription_en:
      "Custom-manufactured components sourced to your drawing or sample.",
    shortDescription_ar:
      "مكونات مصنّعة حسب الطلب يتم توريدها وفق مخططاتكم أو عينتكم.",
    longDescription_en:
      "Custom-manufactured components sourced through our supplier network against your engineering drawing, sample, or reverse-engineered specification, for parts that aren't available off the shelf.",
    longDescription_ar:
      "مكونات مصنّعة حسب الطلب يتم توريدها من خلال شبكة موردينا وفق مخططاتكم الهندسية أو عينتكم أو المواصفات المستخلصة هندسيًا، للقطع غير المتوفرة جاهزة.",
    sectorId: "global-sourcing",
    categoryId: "spare-parts-oem-sourcing",
    applications_en: [
      "Reverse-engineering a part with no available manufacturer drawing",
      "Small-batch component manufacturing for a discontinued assembly",
      "Sourcing a part matched to a physical sample rather than a part number",
      "Engineering-drawing-based procurement for one-off or low-volume runs",
      "Filling a gap in a larger spares order where one component isn't available off the shelf",
    ],
    applications_ar: [
      "الهندسة العكسية لقطعة لا تتوفر لها مخططات من الجهة المصنّعة",
      "تصنيع مكونات بكميات صغيرة لتجميعة تم إيقاف تصنيعها",
      "توريد قطعة مطابقة لعينة فعلية بدلاً من رقم القطعة",
      "توريد قائم على المخطط الهندسي للتشغيلات الفردية أو منخفضة الكمية",
      "سد فجوة ضمن طلب قطع غيار أكبر عندما لا يتوفر أحد المكونات جاهزًا",
    ],
    features_en: [
      "Sourced against your drawing, sample, or reverse-engineered specification",
      "Suited to low-volume and one-off manufacturing runs",
      "Material and tolerance requirements confirmed before production",
    ],
    features_ar: [
      "يتم التوريد وفق مخططكم أو عينتكم أو المواصفات المستخلصة هندسيًا",
      "مناسب للتشغيلات منخفضة الكمية أو الفردية",
      "تأكيد متطلبات الخامة والتفاوتات قبل التصنيع",
    ],
    specifications: [
      {
        label_en: "Sourcing scope",
        label_ar: "نطاق التوريد",
        value:
          "Components manufactured to an engineering drawing, physical sample, or reverse-engineered specification, across a range of materials and processes",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Verification process",
        label_ar: "عملية التحقق",
        value:
          "Drawing, tolerances, and material grade confirmed with you before production release",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Sourcing channel",
        label_ar: "قناة التوريد",
        value:
          "Manufactured through vetted machining, casting, or fabrication suppliers within our network, selected per part",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Documentation provided",
        label_ar: "الوثائق المرفقة",
        value:
          "Material test certificate / dimensional inspection report, where applicable, provided with the order on request",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical order quantity",
        label_ar: "الكمية المعتادة للطلب",
        value: "Single prototype through low-to-medium volume production runs",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical sourcing lead time",
        label_ar: "مدة التوريد المعتادة",
        value:
          "Confirmed per RFQ, based on complexity, material, and manufacturing process",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: [
      "oem-replacement-parts",
      "spare-parts-all-categories",
    ],
    catalogues: [
      {
        id: "custom-manufactured-components-datasheet",
        title_en: "Custom-Manufactured Components Overview",
        title_ar: "نظرة عامة على المكونات المصنّعة حسب الطلب",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/global-sourcing/custom-manufactured-components.webp",
    ],
    availability: "on-request",
    quoteEnabled: true,
  },
  {
    id: "spare-parts-all-categories",
    slug: "spare-parts-all-categories",
    name_en: "Spare Parts (All Categories)",
    name_ar: "قطع الغيار (جميع الفئات)",
    shortDescription_en:
      "Spare parts sourcing across every GOLTENS supply category, not only fixed catalog items.",
    shortDescription_ar:
      "توريد قطع غيار عبر جميع فئات التوريد لدى GOLTENS، وليس فقط الأصناف المدرجة في الكتالوج.",
    longDescription_en:
      "Spare parts sourcing across every GOLTENS supply category — industrial, electrical, fire protection, medical, and more — for equipment already installed at your facility, not only the items listed on our sector pages.",
    longDescription_ar:
      "توريد قطع غيار عبر جميع فئات التوريد لدى GOLTENS — الصناعية والكهربائية ومكافحة الحريق والطبية وغيرها — للمعدات المركّبة بالفعل في منشأتكم، وليس فقط الأصناف المدرجة في صفحات قطاعاتنا.",
    sectorId: "global-sourcing",
    categoryId: "spare-parts-oem-sourcing",
    applications_en: [
      "Consolidating spare parts orders across multiple equipment types into one request",
      "Maintenance teams sourcing parts for mixed-brand installed equipment",
      "Facilities that can't find the part they need under a fixed catalog entry",
      "Cross-category sourcing spanning industrial, electrical, fire protection, and medical equipment",
      "Ongoing spares supply for facilities with diverse installed equipment",
    ],
    applications_ar: [
      "توحيد طلبات قطع الغيار عبر أنواع معدات متعددة في طلب واحد",
      "فرق الصيانة التي تحتاج قطع غيار لمعدات مركّبة بعلامات تجارية مختلطة",
      "المنشآت التي لا تجد القطعة المطلوبة ضمن فئة كتالوج محددة",
      "توريد عبر فئات متعددة يشمل المعدات الصناعية والكهربائية ومكافحة الحريق والمعدات الطبية",
      "توريد قطع غيار مستمر للمنشآت ذات المعدات المركّبة المتنوعة",
    ],
    features_en: [
      "One request covers spares across every GOLTENS supply category",
      "Not limited to items listed on our sector pages",
      "Sourcing confirmed against your equipment list or part references",
    ],
    features_ar: [
      "طلب واحد يغطي قطع الغيار عبر جميع فئات التوريد لدى GOLTENS",
      "غير مقتصر على الأصناف المدرجة في صفحات قطاعاتنا",
      "يتم تأكيد التوريد وفق قائمة معداتكم أو مراجع القطع لديكم",
    ],
    specifications: [
      {
        label_en: "Sourcing scope",
        label_ar: "نطاق التوريد",
        value:
          "Spare parts across industrial, electrical, fire protection, healthcare, and other equipment categories supplied by GOLTENS",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Verification process",
        label_ar: "عملية التحقق",
        value:
          "Each item cross-checked against your part number, equipment list, or nameplate data before quotation",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Sourcing channel",
        label_ar: "قناة التوريد",
        value:
          "Sourced from the OEM or OEM-authorized distribution channel per item, verified per order",
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
        label_en: "Order format",
        label_ar: "صيغة الطلب",
        value:
          "Single consolidated RFQ covering multiple part numbers or equipment types",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical sourcing lead time",
        label_ar: "مدة التوريد المعتادة",
        value: "Confirmed per RFQ, varies by item and origin",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: [
      "oem-replacement-parts",
      "custom-manufactured-components",
    ],
    catalogues: [
      {
        id: "spare-parts-all-categories-datasheet",
        title_en: "Spare Parts Sourcing Overview",
        title_ar: "نظرة عامة على توريد قطع الغيار",
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
    id: "non-standard-hard-to-find-items",
    slug: "non-standard-hard-to-find-items",
    name_en: "Non-Standard & Hard-to-Find Items",
    name_ar: "أصناف غير قياسية أو نادرة التوفر",
    shortDescription_en:
      "Sourcing support for items that don't fit a standard catalog listing.",
    shortDescription_ar:
      "دعم توريد للأصناف التي لا تندرج ضمن قوائم الكتالوج القياسية.",
    longDescription_en:
      "Sourcing support for non-standard, discontinued, or hard-to-find items, using our international supplier network to confirm availability and sourcing routes on a case-by-case basis.",
    longDescription_ar:
      "دعم توريد للأصناف غير القياسية أو المتوقف تصنيعها أو نادرة التوفر، باستخدام شبكة موردينا الدولية لتأكيد التوافر ومسارات التوريد حسب كل حالة على حدة.",
    sectorId: "global-sourcing",
    categoryId: "spare-parts-oem-sourcing",
    applications_en: [
      "Locating a part with no active manufacturer listing or local stock",
      "Sourcing for equipment imported from a region with limited local supplier presence",
      "Case-by-case availability checks before committing to a purchase order",
      "Identifying an equivalent or cross-reference part when the original isn't available",
      "Supporting maintenance teams stuck on a single missing item holding up a repair",
    ],
    applications_ar: [
      "البحث عن قطعة لا تتوفر لها قائمة نشطة من الجهة المصنّعة أو مخزون محلي",
      "توريد لمعدات مستوردة من منطقة ذات تواجد محدود للموردين المحليين",
      "التحقق من التوافر حسب كل حالة قبل الالتزام بأمر الشراء",
      "تحديد قطعة معادلة أو مرجع بديل عند عدم توفر القطعة الأصلية",
      "دعم فرق الصيانة المتوقفة بسبب قطعة واحدة مفقودة تعطل الإصلاح",
    ],
    features_en: [
      "Case-by-case availability and sourcing-route checks",
      "Draws on our international supplier network beyond standard catalog listings",
      "Cross-reference and equivalent-part identification support",
    ],
    features_ar: [
      "التحقق من التوافر ومسار التوريد حسب كل حالة على حدة",
      "الاعتماد على شبكة موردينا الدولية بما يتجاوز قوائم الكتالوج القياسية",
      "دعم تحديد القطع المعادلة أو المرجعية",
    ],
    specifications: [
      {
        label_en: "Sourcing scope",
        label_ar: "نطاق التوريد",
        value:
          "Non-standard, low-availability, or regionally scarce parts across mechanical, electrical, and process equipment",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Verification process",
        label_ar: "عملية التحقق",
        value:
          "Availability and sourcing route checked against our supplier network before a feasibility response is given",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Sourcing channel",
        label_ar: "قناة التوريد",
        value:
          "Sourced from the OEM, OEM-authorized distribution channel, or a verified equivalent-part supplier, confirmed per order",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Documentation provided",
        label_ar: "الوثائق المرفقة",
        value:
          "Certificate of Origin / Certificate of Conformity, where issued, plus cross-reference notes when an equivalent part is proposed",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Response format",
        label_ar: "صيغة الرد",
        value:
          "Feasibility and sourcing route confirmed before a formal quotation is issued",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical sourcing lead time",
        label_ar: "مدة التوريد المعتادة",
        value:
          "Confirmed per item once availability is established — not quoted as a blanket figure",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: ["oem-replacement-parts", "obsolete-parts-sourcing"],
    catalogues: [
      {
        id: "non-standard-hard-to-find-items-datasheet",
        title_en: "Non-Standard Items Sourcing Overview",
        title_ar: "نظرة عامة على توريد الأصناف غير القياسية",
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
    id: "obsolete-parts-sourcing",
    slug: "obsolete-parts-sourcing",
    name_en: "Obsolete & Discontinued Parts Sourcing",
    name_ar: "توريد قطع الغيار المتوقفة والقديمة",
    shortDescription_en:
      "Sourcing support for parts no longer produced by the original manufacturer.",
    shortDescription_ar:
      "دعم توريد للقطع التي لم تعد الجهة المصنّعة الأصلية تنتجها.",
    longDescription_en:
      "Sourcing support for obsolete or discontinued parts no longer produced by the original manufacturer, checking our supplier network for remaining stock or equivalent replacements.",
    longDescription_ar:
      "دعم توريد للقطع المتوقفة أو القديمة التي لم تعد الجهة المصنّعة الأصلية تنتجها، من خلال البحث في شبكة موردينا عن مخزون متبقٍ أو بدائل معادلة.",
    sectorId: "global-sourcing",
    categoryId: "spare-parts-oem-sourcing",
    applications_en: [
      "Keeping legacy or discontinued equipment running past its original support window",
      "Sourcing replacement parts for equipment no longer covered by the original manufacturer",
      "Checking remaining stock across supplier networks before considering a full unit replacement",
      "Bridging a gap while a longer-term equipment upgrade or replacement is planned",
      "Supporting older installed equipment with no active manufacturer part number",
    ],
    applications_ar: [
      "إبقاء المعدات القديمة أو المتوقف تصنيعها في الخدمة بعد انتهاء فترة الدعم الأصلية",
      "توريد قطع غيار بديلة لمعدات لم تعد الجهة المصنّعة الأصلية تدعمها",
      "التحقق من المخزون المتبقي عبر شبكات الموردين قبل النظر في استبدال الوحدة بالكامل",
      "سد الفجوة الزمنية أثناء التخطيط لترقية أو استبدال المعدات على المدى الطويل",
      "دعم المعدات القديمة المركّبة التي لا يوجد لها رقم قطعة نشط من الجهة المصنّعة",
    ],
    features_en: [
      "Supplier-network search for remaining stock of discontinued parts",
      "Equivalent or cross-reference replacement options where the original is unavailable",
      "Feasibility confirmed before a formal quotation is issued",
    ],
    features_ar: [
      "بحث عبر شبكة الموردين عن المخزون المتبقي للقطع المتوقفة",
      "خيارات بديلة أو معادلة عند عدم توفر القطعة الأصلية",
      "تأكيد إمكانية التوريد قبل إصدار عرض السعر الرسمي",
    ],
    specifications: [
      {
        label_en: "Sourcing scope",
        label_ar: "نطاق التوريد",
        value:
          "Obsolete or discontinued parts no longer produced by the original manufacturer, across mechanical and electrical equipment categories",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Verification process",
        label_ar: "عملية التحقق",
        value:
          "Supplier network checked for remaining OEM stock, then for verified equivalent or cross-reference replacements",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Sourcing channel",
        label_ar: "قناة التوريد",
        value:
          "Remaining OEM stock where available, or a verified equivalent-part supplier, confirmed per order",
        group_en: "Sourcing Scope",
        group_ar: "نطاق التوريد",
      },
      {
        label_en: "Documentation provided",
        label_ar: "الوثائق المرفقة",
        value:
          "Certificate of Origin / Certificate of Conformity where issued, plus cross-reference notes when an equivalent part is proposed",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Response format",
        label_ar: "صيغة الرد",
        value:
          "Feasibility and available options confirmed before a formal quotation",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
      {
        label_en: "Typical sourcing lead time",
        label_ar: "مدة التوريد المعتادة",
        value: "Confirmed per item once availability is established",
        group_en: "Documentation",
        group_ar: "الوثائق",
      },
    ],
    relatedProductSlugs: [
      "non-standard-hard-to-find-items",
      "spare-parts-all-categories",
    ],
    catalogues: [
      {
        id: "obsolete-parts-sourcing-datasheet",
        title_en: "Obsolete Parts Sourcing Overview",
        title_ar: "نظرة عامة على توريد القطع المتوقفة",
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
