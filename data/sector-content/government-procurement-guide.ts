import type {
  EquipmentGuideReview,
  SectorEquipmentGuide,
  SectorFaq,
  SectorHeroCopy,
} from "@/data/sector-content/types";

/**
 * Government & Public-Sector Procurement — a tender / BOQ response guide
 * and cross-sector routing hub (procurement-context matrix, three item
 * families — office & institutional furniture, security & access, public
 * lighting & traffic — routing to the other GOLTENS sectors, a limited
 * replacement path and a two-part, document-driven quotation checklist).
 * Rendered by `app/[locale]/sectors/[slug]/page.tsx` via
 * `SectorContent.equipmentGuide`.
 *
 * Content rules (enforced by `scripts/verify-equipment-guides.mjs`):
 * - Approved scope only: the 12 item guides below, "Available on
 *   request." — never stock. No guide for public-safety / emergency-response
 *   equipment (radios, rescue tools, protective equipment), backup power,
 *   UPS, generators or solar power plants; power and solar requirements are
 *   routed to Electrical & Energy.
 * - The 15 `data/products/government-procurement/*` records are internal
 *   source material only: they stay non-public and are never linked.
 * - Requirements come from the customer's documents (tender reference, BOQ,
 *   specification, item list). GOLTENS prepares a quotation against them.
 *   It does not prepare or submit tenders, confirm compliance, certify,
 *   design, install or approve anything, is not described as a government
 *   or registered supplier, and claims no government affiliation or
 *   customers. Public-sector entities, contractors and consultants are
 *   described only as sources of requirements.
 * - Replacement / equivalent sourcing is limited to furniture and storage,
 *   CCTV cameras, access readers, gate and barrier units, luminaires and
 *   traffic signal heads, with final equivalence and acceptance confirmed
 *   by the customer, consultant or contracting authority.
 * - No manufacturer names, numeric ranges, standards, certifications,
 *   warranty, stock or delivery claims.
 *
 * Every entry awaits technical review (`review.technical`) and
 * Egyptian-market Arabic terminology review (`review.arabic`).
 */

const pending = (notes: string): EquipmentGuideReview => ({
  technical: "needs-verification",
  arabic: "needs-verification",
  notes,
});

const CHECKLIST_CLOSING_EN = "Quantity, delivery location and required timing";
const CHECKLIST_CLOSING_AR = "العدد المطلوب ومكان التوريد والتوقيت المطلوب";
const BOQ_ITEM_EN = "BOQ item or specification";
const BOQ_ITEM_AR = "بند جدول الكميات أو المواصفات";

/** Sector-page hero copy (replaces the `data/sectors.ts` subtitle/description on this page only). */
export const governmentProcurementHero: SectorHeroCopy = {
  subtitle_en:
    "GOLTENS supplies products and equipment against tender and project requirements, BOQs and technical specifications provided by public-sector entities, contractors and consultants.",
  subtitle_ar:
    "توفر GOLTENS المنتجات والمعدات وفق متطلبات المناقصات والمشروعات وجداول الكميات والمواصفات الفنية المقدمة من الجهات العامة والمقاولين والاستشاريين.",
  description_en:
    "Office and institutional furniture, security and access equipment, and public lighting and traffic items are quoted against the requirements provided; other items are routed to the relevant GOLTENS sector. Availability is confirmed during quotation.",
  description_ar:
    "يتم إعداد عروض أسعار الأثاث المكتبي والمؤسسي ومعدات الأمن والتحكم في الدخول وأصناف الإنارة العامة والمرور وفق المتطلبات المقدمة، بينما يتم توجيه الأصناف الأخرى إلى قطاع GOLTENS المختص، ويتم تأكيد التوافر أثناء إعداد العرض.",
};

export const governmentProcurementFaqs: SectorFaq[] = [
  {
    question_en:
      "What information should I send for a government or tender requirement?",
    answer_en:
      "The tender or project reference, the BOQ or item list, the technical specification, quantities, delivery location, required delivery date and quotation deadline. The checklist on this page lists the other details that help.",
    question_ar: "ما البيانات التي يجب إرسالها لطلب توريد حكومي أو لمناقصة؟",
    answer_ar:
      "مرجع المناقصة أو المشروع، وجدول الكميات أو قائمة الأصناف، والمواصفات الفنية، والكميات، ومكان التوريد، وتاريخ التوريد المطلوب، والموعد النهائي لتقديم عرض السعر. وتوضح القائمة في هذه الصفحة البيانات الأخرى المفيدة.",
  },
  {
    question_en: "Can you quote directly from a BOQ?",
    answer_en:
      "Yes. Send the BOQ together with the specification it refers to. Items are quoted against the stated requirements, and anything unclear is raised with you during quotation.",
    question_ar: "هل يمكن إعداد عرض السعر مباشرة من جدول الكميات؟",
    answer_ar:
      "نعم، أرسلوا جدول الكميات مع المواصفات المرتبطة به. ويتم إعداد عرض السعر وفق المتطلبات المذكورة، ونتواصل معكم بشأن أي بند غير واضح أثناء إعداد العرض.",
  },
  {
    question_en: "Can I send a multi-item or multi-sector requirement?",
    answer_en:
      "Yes. One request can include items from several sectors — for example furniture, security equipment, electrical equipment and vehicles. Each item is reviewed against the relevant sector during quotation.",
    question_ar: "هل يمكنني إرسال طلب متعدد الأصناف أو القطاعات؟",
    answer_ar:
      "نعم، يمكن أن يشمل الطلب الواحد أصنافًا من عدة قطاعات، مثل الأثاث ومعدات الأمن والمعدات الكهربائية والمركبات، ويتم التعامل مع كل صنف وفق القطاع المختص أثناء إعداد العرض.",
  },
  {
    question_en: "Does GOLTENS prepare or submit tender documents?",
    answer_en:
      "No. GOLTENS prepares a quotation based on customer-provided documents; it does not prepare or submit the tender itself. GOLTENS prepares a quotation based on the information provided. Tender preparation, tender submission, compliance with tender conditions and final technical acceptance remain with the customer, bidder, consultant or contracting authority, as applicable.",
    question_ar: "هل تقوم GOLTENS بإعداد مستندات المناقصة أو تقديمها؟",
    answer_ar:
      "لا، تُعد GOLTENS عرض السعر استنادًا إلى المستندات المقدمة من العميل، ولا تقوم بإعداد المناقصة أو تقديم العطاء. تُعد GOLTENS عرض السعر استنادًا إلى المعلومات المقدمة، بينما تظل مسؤولية إعداد المناقصة وتقديم العطاء والالتزام بشروط المناقصة والقبول الفني النهائي على عاتق العميل أو مقدم العرض أو الاستشاري أو الجهة المتعاقدة، بحسب الحالة.",
  },
  {
    question_en: "Can you quote equivalent items?",
    answer_en:
      "Where the tender allows equivalents, GOLTENS reviews the available item information and can source a matching or technically suitable alternative for quotation. Final equivalence and acceptance should be confirmed by the customer, consultant or contracting authority, as applicable.",
    question_ar: "هل يمكن تقديم عرض سعر لأصناف مكافئة؟",
    answer_ar:
      "عندما تسمح المناقصة بالبدائل المكافئة، تراجع GOLTENS بيانات الصنف المتاحة ويمكنها توفير صنف مطابق أو بديل مناسب فنيًا ضمن عرض السعر، على أن يتم تأكيد التكافؤ والقبول النهائي من جانب العميل أو الاستشاري أو الجهة المتعاقدة، بحسب الحالة.",
  },
  {
    question_en:
      "What if the tender specifies a manufacturer or approved brand?",
    answer_en:
      "State the specified manufacturer, model or part number — or the required or approved-brand list given in the tender — in your request. Items are quoted against that stated requirement, and the quotation states what is offered.",
    question_ar: "ماذا لو حددت المناقصة مصنعًا معينًا أو علامة تجارية معتمدة؟",
    answer_ar:
      "اذكروا في طلبكم المصنع أو الموديل أو رقم الجزء المحدد، أو قائمة العلامات المطلوبة أو المعتمدة الواردة في المناقصة. ويتم إعداد عرض السعر وفق هذا المتطلب المذكور، مع توضيح الأصناف المقترحة في العرض.",
  },
  {
    question_en: "What if some BOQ items are outside these twelve item types?",
    answer_en:
      "Send the full BOQ. Pumps, generators, fire protection, vehicles, machinery, healthcare, construction, chemical and lubricant requirements are covered by other GOLTENS sectors — see Requirements Covered by Other Sectors — and can be quoted in the same request.",
    question_ar: "ماذا لو كانت بعض بنود جدول الكميات خارج هذه الأصناف؟",
    answer_ar:
      "أرسلوا جدول الكميات كاملًا. فمتطلبات المضخات والمولدات ومكافحة الحريق والمركبات والمعدات الثقيلة والمستشفيات والإنشاءات والكيماويات والزيوت تغطيها قطاعات أخرى لدى GOLTENS — راجعوا قسم متطلبات تغطيها قطاعات أخرى — ويمكن إعداد عرض سعرها ضمن الطلب نفسه.",
  },
  {
    question_en: "How are availability and lead time handled?",
    answer_en:
      "Availability and lead time are confirmed during quotation for each item, rather than given as a single fixed figure.",
    question_ar: "كيف يتم التعامل مع التوافر ومدة التوريد؟",
    answer_ar:
      "يتم تأكيد التوافر ومدة التوريد لكل صنف أثناء إعداد عرض السعر، بدلًا من تحديد مدة ثابتة موحدة.",
  },
];

export const governmentProcurementGuide: SectorEquipmentGuide = {
  heroVisual: "neutral",
  availability_en: "Available on request.",
  availability_ar: "متاح حسب الطلب.",

  intro: {
    eyebrow_en: "Government & public-sector procurement guide",
    eyebrow_ar: "دليل التوريدات الحكومية والعامة",
    lead_en:
      "Government and public-sector requirements usually arrive as a BOQ, a technical specification, an item list, a tender reference or a project requirement. GOLTENS reviews the information provided, sources the requested items and prepares a quotation.",
    lead_ar:
      "تصل متطلبات الجهات الحكومية والعامة عادةً في صورة جدول كميات أو مواصفات فنية أو قائمة أصناف أو مرجع مناقصة أو متطلبات مشروع. وتراجع GOLTENS البيانات المقدمة، وتوفر الأصناف المطلوبة، وتُعد عرض السعر.",
    note_en:
      "These guides describe common item types and the information needed to quote them — they are not a catalogue of specific models. Items outside these three families are covered by other GOLTENS sectors.",
    note_ar:
      "توضح هذه الأدلة أنواع الأصناف الشائعة والبيانات اللازمة لإعداد عروض أسعارها، وليست كتالوجًا لموديلات محددة. أما الأصناف خارج هذه المجموعات الثلاث فتغطيها قطاعات أخرى لدى GOLTENS.",
  },

  projectsTitle_en: "Choose by Procurement Context",
  projectsTitle_ar: "اختر حسب سياق التوريد",
  projectsIntro_en:
    "Typical items for common public-sector procurement contexts. The items, quantities and requirements for your request come from your BOQ and specification.",
  projectsIntro_ar:
    "الأصناف المعتادة لأكثر سياقات التوريد للقطاع العام شيوعًا، بينما تُحدَّد الأصناف والكميات والمتطلبات الخاصة بطلبكم وفق جدول الكميات والمواصفات.",

  industries: [
    {
      id: "admin-public-buildings",
      label_en: "Administrative & public buildings",
      label_ar: "المباني الإدارية والعامة",
    },
    {
      id: "schools-universities",
      label_en: "Schools & universities",
      label_ar: "المدارس والجامعات",
    },
    {
      id: "public-healthcare",
      label_en: "Public healthcare facilities",
      label_ar: "المنشآت الصحية العامة",
    },
    {
      id: "municipal-roads",
      label_en: "Municipal roads & public spaces",
      label_ar: "الطرق والمساحات العامة",
    },
    {
      id: "secured-sites",
      label_en: "Secured sites & entrances",
      label_ar: "المواقع المؤمنة والمداخل",
    },
  ],

  projects: [
    {
      id: "administrative-public-buildings",
      title_en: "Administrative and public buildings",
      title_ar: "المباني الإدارية والعامة",
      description_en:
        "Office furniture, storage and building security for administrative and public buildings.",
      description_ar:
        "الأثاث المكتبي ووحدات التخزين وأمن المباني للمباني الإدارية والعامة.",
      equipmentIds: [
        "workstations-office-seating",
        "executive-meeting-furniture",
        "filing-storage",
        "cctv-video-surveillance",
        "access-control",
      ],
      review: pending("procurement context only — no customer claim"),
    },
    {
      id: "schools-universities",
      title_en: "Schools and universities",
      title_ar: "المدارس والجامعات",
      description_en:
        "Classroom, library and office furniture, with entrance security.",
      description_ar: "أثاث الفصول والمكتبات والمكاتب، مع أمن المداخل.",
      equipmentIds: [
        "institutional-furniture-schools-public-buildings",
        "workstations-office-seating",
        "filing-storage",
        "cctv-video-surveillance",
        "access-control",
      ],
      review: pending("procurement context only"),
    },
    {
      id: "public-healthcare-facilities",
      title_en: "Public healthcare facilities",
      title_ar: "المنشآت الصحية العامة",
      description_en:
        "Waiting-area and office furniture and building security. Healthcare-specific requirements are covered by the Healthcare sector.",
      description_ar:
        "أثاث مناطق الانتظار والمكاتب وأمن المباني، بينما يغطي قطاع المستشفيات المتطلبات الصحية المتخصصة.",
      equipmentIds: [
        "institutional-furniture-schools-public-buildings",
        "filing-storage",
        "access-control",
        "cctv-video-surveillance",
      ],
      review: pending("routes healthcare-specific items to Healthcare"),
    },
    {
      id: "municipal-roads-public-spaces",
      title_en: "Municipal roads and public spaces",
      title_ar: "الطرق والمساحات العامة",
      description_en: "Street, area and solar lighting, and traffic signals.",
      description_ar:
        "إنارة الشوارع والمناطق المفتوحة والإنارة الشمسية وإشارات المرور.",
      equipmentIds: [
        "street-area-lighting",
        "solar-street-lighting",
        "traffic-signals-management",
      ],
      review: pending("procurement context only"),
    },
    {
      id: "secured-sites-entrances",
      title_en: "Secured sites and entrances",
      title_ar: "المواقع المؤمنة والمداخل",
      description_en:
        "Perimeter fencing, gates and barriers, access control and CCTV.",
      description_ar:
        "أسوار الحماية المحيطية والبوابات والحواجز وأنظمة التحكم في الدخول والكاميرات.",
      equipmentIds: [
        "perimeter-fencing-intrusion-detection",
        "gates-vehicle-barriers",
        "access-control",
        "cctv-video-surveillance",
      ],
      review: pending("procurement context only"),
    },
    {
      id: "office-institutional-furnishing",
      title_en: "Office and institutional furnishing",
      title_ar: "تأثيث المكاتب والمباني المؤسسية",
      description_en: "Furniture BOQs for offices and institutional buildings.",
      description_ar: "جداول كميات الأثاث للمكاتب والمباني المؤسسية.",
      equipmentIds: [
        "workstations-office-seating",
        "executive-meeting-furniture",
        "filing-storage",
        "partitions-workstation-systems",
        "institutional-furniture-schools-public-buildings",
      ],
      review: pending("procurement context only"),
    },
    {
      id: "public-lighting-traffic",
      title_en: "Public lighting and traffic requirements",
      title_ar: "متطلبات الإنارة العامة والمرور",
      description_en:
        "Lighting and traffic items listed in a project or tender BOQ.",
      description_ar:
        "أصناف الإنارة والمرور الواردة في جدول كميات مشروع أو مناقصة.",
      equipmentIds: [
        "street-area-lighting",
        "solar-street-lighting",
        "traffic-signals-management",
      ],
      review: pending("procurement context only"),
    },
    {
      id: "tender-boq-multi-item",
      title_en: "Tender BOQ and multi-item requirements",
      title_ar: "جداول كميات المناقصات والطلبات متعددة الأصناف",
      description_en:
        "Any of the twelve item types on this page in one request, quoted against the BOQ and specification.",
      description_ar:
        "أي من أنواع الأصناف الاثني عشر في هذه الصفحة ضمن طلب واحد، يتم إعداد عرض سعرها وفق جدول الكميات والمواصفات.",
      equipmentIds: [
        "workstations-office-seating",
        "cctv-video-surveillance",
        "street-area-lighting",
      ],
      review: pending("BOQ-driven; no tender preparation claim"),
    },
    {
      id: "cross-sector-requirements",
      title_en: "Cross-sector government procurement",
      title_ar: "التوريدات الحكومية متعددة القطاعات",
      description_en:
        "BOQ items covered by other GOLTENS sectors can be included in the same request.",
      description_ar:
        "يمكن إدراج بنود جدول الكميات التي تغطيها قطاعات GOLTENS الأخرى ضمن الطلب نفسه.",
      equipmentIds: [],
      review: pending("routing row — links to the routing block"),
    },
    {
      id: "non-standard-requirements",
      title_en: "Non-standard or hard-to-source requirements",
      title_ar: "المتطلبات غير القياسية أو صعبة التوفير",
      description_en:
        "Items not covered by the families on this page, sourced against your specification.",
      description_ar:
        "الأصناف غير المشمولة بمجموعات هذه الصفحة، ويتم توفيرها وفق مواصفاتكم.",
      equipmentIds: [],
      review: pending("routing row — Global Sourcing"),
    },
  ],

  categories: [
    {
      categoryId: "office-institutional-furniture",
      title_en: "Office & Institutional Furniture",
      title_ar: "الأثاث المكتبي والمؤسسي",
      intro_en:
        "Workstations, seating, executive and meeting furniture, storage, partitions and institutional furniture, quoted against the layout, finish and quantities in your BOQ.",
      intro_ar:
        "محطات العمل والمقاعد والأثاث التنفيذي وأثاث الاجتماعات ووحدات التخزين والقواطع والأثاث المؤسسي، ويتم إعداد عروض أسعارها وفق التوزيع والتشطيب والكميات الواردة في جدول الكميات.",
      icon: "Building2",
      equipment: [
        {
          id: "workstations-office-seating",
          linkedProductId: "office-furniture-systems",
          name_en: "Workstations & Office Seating",
          name_ar: "محطات العمل ومقاعد المكاتب",
          summary_en:
            "Desks, workstations and office chairs for administrative and public offices.",
          summary_ar: "مكاتب ومحطات عمل ومقاعد للمكاتب الإدارية والعامة.",
          whatItIs_en:
            "Individual desks, multi-person workstations and task, visitor or operator seating, supplied to the layout and finish stated in the requirement.",
          whatItIs_ar:
            "مكاتب فردية ومحطات عمل جماعية ومقاعد عمل وزوار وتشغيل، يتم توريدها وفق التوزيع والتشطيب المحددين في الطلب.",
          usedFor_en:
            "Furnishing offices, service halls and administrative floors.",
          usedFor_ar: "تجهيز المكاتب وصالات الخدمة والطوابق الإدارية.",
          applications_en: [
            "Administrative offices",
            "Customer service halls",
            "Training rooms",
          ],
          applications_ar: [
            "المكاتب الإدارية",
            "صالات خدمة الجمهور",
            "قاعات التدريب",
          ],
          industryIds: ["admin-public-buildings", "schools-universities"],
          selectionFactors: [
            {
              factor_en: "Type and layout",
              factor_ar: "النوع والتوزيع",
              detail_en:
                "Workstation configuration and seating type as stated in the BOQ.",
              detail_ar:
                "تكوين محطات العمل ونوع المقاعد كما وردا في جدول الكميات.",
            },
            {
              factor_en: "Dimensions and finish",
              factor_ar: "المقاسات والتشطيب",
              detail_en: "Dimensions, materials and finish, if specified.",
              detail_ar: "المقاسات والخامات والتشطيب، إن كانت محددة.",
            },
            {
              factor_en: "Quantity and location",
              factor_ar: "الكمية والموقع",
              detail_en: "Quantity per location and delivery site.",
              detail_ar: "الكمية لكل موقع ومكان التوريد.",
            },
          ],
          requestChecklist_en: [
            "Layout or workstation type",
            "Seating type",
            "Dimensions, material or finish if specified",
            BOQ_ITEM_EN,
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع محطة العمل أو التوزيع",
            "نوع المقعد",
            "المقاسات أو الخامة أو التشطيب إن وُجدت",
            BOQ_ITEM_AR,
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "executive-meeting-furniture",
            "partitions-workstation-systems",
          ],
          image: null,
          review: pending("AR محطات العمل"),
        },
        {
          id: "executive-meeting-furniture",
          linkedProductId: "executive-reception-furniture",
          name_en: "Executive & Meeting Furniture",
          name_ar: "أثاث المكاتب التنفيذية وقاعات الاجتماعات",
          summary_en:
            "Executive desks, meeting tables and reception furniture.",
          summary_ar: "مكاتب تنفيذية وطاولات اجتماعات وأثاث استقبال.",
          whatItIs_en:
            "Executive desks and cabinets, meeting and conference tables, and reception counters and seating.",
          whatItIs_ar:
            "مكاتب ووحدات تنفيذية وطاولات اجتماعات ومؤتمرات وكاونترات ومقاعد استقبال.",
          usedFor_en:
            "Furnishing management offices, meeting rooms and reception areas.",
          usedFor_ar: "تجهيز مكاتب الإدارة وقاعات الاجتماعات ومناطق الاستقبال.",
          applications_en: [
            "Management offices",
            "Meeting and conference rooms",
            "Reception areas",
          ],
          applications_ar: [
            "مكاتب الإدارة",
            "قاعات الاجتماعات والمؤتمرات",
            "مناطق الاستقبال",
          ],
          industryIds: ["admin-public-buildings"],
          selectionFactors: [
            {
              factor_en: "Item type",
              factor_ar: "نوع الصنف",
              detail_en: "Desk, table, counter or seating type as listed.",
              detail_ar:
                "نوع المكتب أو الطاولة أو الكاونتر أو المقعد كما ورد في القائمة.",
            },
            {
              factor_en: "Size and seating capacity",
              factor_ar: "المقاس وعدد المقاعد",
              detail_en: "Table size or number of seats, if specified.",
              detail_ar: "مقاس الطاولة أو عدد المقاعد، إن كان محددًا.",
            },
            {
              factor_en: "Finish",
              factor_ar: "التشطيب",
              detail_en: "Material and finish as stated in the specification.",
              detail_ar: "الخامة والتشطيب كما وردا في المواصفات.",
            },
          ],
          requestChecklist_en: [
            "Item type",
            "Size or seating capacity",
            "Material and finish if specified",
            BOQ_ITEM_EN,
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الصنف",
            "المقاس أو عدد المقاعد",
            "الخامة والتشطيب إن وُجدا",
            BOQ_ITEM_AR,
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["workstations-office-seating"],
          image: null,
          review: pending("AR أثاث المكاتب التنفيذية"),
        },
        {
          id: "filing-storage",
          linkedProductId: "filing-storage-cabinets",
          name_en: "Filing & Storage",
          name_ar: "وحدات حفظ الملفات والتخزين",
          summary_en:
            "Filing cabinets, shelving and lockable storage for records and supplies.",
          summary_ar:
            "خزائن ملفات وأرفف ووحدات تخزين قابلة للقفل للسجلات والمستلزمات.",
          whatItIs_en:
            "Drawer filing cabinets, cupboards, shelving and mobile or fixed storage units.",
          whatItIs_ar:
            "خزائن ملفات بأدراج ودواليب وأرفف ووحدات تخزين متحركة أو ثابتة.",
          usedFor_en:
            "Storing records, files and supplies in offices and archives.",
          usedFor_ar: "حفظ السجلات والملفات والمستلزمات في المكاتب والأرشيف.",
          applications_en: ["Offices", "Archives and record rooms", "Stores"],
          applications_ar: ["المكاتب", "الأرشيف وغرف السجلات", "المخازن"],
          industryIds: ["admin-public-buildings", "schools-universities"],
          selectionFactors: [
            {
              factor_en: "Storage type",
              factor_ar: "نوع التخزين",
              detail_en:
                "Filing cabinet, cupboard, shelving or mobile storage.",
              detail_ar: "خزانة ملفات أو دولاب أو أرفف أو تخزين متحرك.",
            },
            {
              factor_en: "Size and capacity",
              factor_ar: "المقاس والسعة",
              detail_en:
                "Number of drawers or shelves and overall size, if specified.",
              detail_ar: "عدد الأدراج أو الأرفف والمقاس الكلي، إن كان محددًا.",
            },
            {
              factor_en: "Locking",
              factor_ar: "القفل",
              detail_en: "Locking requirement as stated.",
              detail_ar: "متطلبات القفل كما وردت في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Storage type",
            "Size, drawers or shelves",
            "Locking requirement",
            BOQ_ITEM_EN,
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع التخزين",
            "المقاس أو عدد الأدراج أو الأرفف",
            "متطلبات القفل",
            BOQ_ITEM_AR,
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["workstations-office-seating"],
          image: null,
          review: pending("AR وحدات حفظ الملفات"),
        },
        {
          id: "partitions-workstation-systems",
          linkedProductId: "office-partitions-cubicles",
          name_en: "Partitions & Workstation Systems",
          name_ar: "القواطع وأنظمة محطات العمل",
          summary_en:
            "Office partitions, screens and modular workstation systems for open-plan areas.",
          summary_ar:
            "قواطع وفواصل مكتبية وأنظمة محطات عمل معيارية للمساحات المفتوحة.",
          whatItIs_en:
            "Free-standing or desk-mounted screens, partition panels and modular workstation clusters.",
          whatItIs_ar:
            "فواصل قائمة أو مثبتة على المكاتب وألواح قواطع ومجموعات محطات عمل معيارية.",
          usedFor_en:
            "Dividing open-plan offices and service areas into work zones.",
          usedFor_ar: "تقسيم المكاتب المفتوحة ومناطق الخدمة إلى مناطق عمل.",
          applications_en: [
            "Open-plan offices",
            "Service counters",
            "Shared work areas",
          ],
          applications_ar: [
            "المكاتب المفتوحة",
            "كاونترات الخدمة",
            "مناطق العمل المشتركة",
          ],
          industryIds: ["admin-public-buildings"],
          selectionFactors: [
            {
              factor_en: "Configuration",
              factor_ar: "التكوين",
              detail_en: "Cluster or partition layout from the drawing or BOQ.",
              detail_ar:
                "توزيع المجموعات أو القواطع من المخطط أو جدول الكميات.",
            },
            {
              factor_en: "Height and finish",
              factor_ar: "الارتفاع والتشطيب",
              detail_en: "Panel height, material and finish, if specified.",
              detail_ar: "ارتفاع الألواح والخامة والتشطيب، إن كانت محددة.",
            },
            {
              factor_en: "Cable management",
              factor_ar: "تمديد الكابلات",
              detail_en:
                "Power and data routing within the workstations, if required.",
              detail_ar:
                "تمديد الكهرباء والبيانات داخل محطات العمل، إذا كان مطلوبًا.",
            },
          ],
          requestChecklist_en: [
            "Layout drawing or BOQ",
            "Panel height and finish if specified",
            "Cable management requirement",
            "Number of positions",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "مخطط التوزيع أو جدول الكميات",
            "ارتفاع الألواح والتشطيب إن وُجدا",
            "متطلبات تمديد الكابلات",
            "عدد المواقع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["workstations-office-seating"],
          image: null,
          review: pending("AR القواطع"),
        },
        {
          id: "institutional-furniture-schools-public-buildings",
          linkedProductId: "institutional-furniture",
          name_en: "Institutional Furniture for Schools & Public Buildings",
          name_ar: "الأثاث المؤسسي للمدارس والمباني العامة",
          summary_en:
            "Classroom, library, waiting-area and hall furniture for institutional use.",
          summary_ar:
            "أثاث الفصول والمكتبات ومناطق الانتظار والقاعات للاستخدام المؤسسي.",
          whatItIs_en:
            "Student desks and chairs, library and laboratory furniture, waiting-area seating and multipurpose tables.",
          whatItIs_ar:
            "مكاتب ومقاعد الطلاب وأثاث المكتبات والمعامل ومقاعد الانتظار والطاولات متعددة الاستخدامات.",
          usedFor_en:
            "Furnishing schools, universities and public service buildings.",
          usedFor_ar: "تجهيز المدارس والجامعات ومباني الخدمات العامة.",
          applications_en: [
            "Classrooms and lecture halls",
            "Libraries",
            "Waiting areas",
          ],
          applications_ar: [
            "الفصول وقاعات المحاضرات",
            "المكتبات",
            "مناطق الانتظار",
          ],
          industryIds: [
            "schools-universities",
            "admin-public-buildings",
            "public-healthcare",
          ],
          selectionFactors: [
            {
              factor_en: "Item type and users",
              factor_ar: "نوع الصنف والمستخدمون",
              detail_en:
                "Item type and the age group or use stated in the specification.",
              detail_ar:
                "نوع الصنف والفئة العمرية أو الاستخدام كما ورد في المواصفات.",
            },
            {
              factor_en: "Size",
              factor_ar: "المقاس",
              detail_en: "Sizes, if specified.",
              detail_ar: "المقاسات، إن كانت محددة.",
            },
            {
              factor_en: "Material and finish",
              factor_ar: "الخامة والتشطيب",
              detail_en: "As stated in the specification.",
              detail_ar: "كما وردت في المواصفات.",
            },
          ],
          requestChecklist_en: [
            "Item type and intended users",
            "Sizes if specified",
            "Material and finish if specified",
            BOQ_ITEM_EN,
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الصنف والمستخدمون",
            "المقاسات إن وُجدت",
            "الخامة والتشطيب إن وُجدا",
            BOQ_ITEM_AR,
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "workstations-office-seating",
            "filing-storage",
          ],
          image: null,
          review: pending("AR الأثاث المؤسسي"),
        },
      ],
    },
    {
      categoryId: "security-public-safety",
      title_en: "Security & Access",
      title_ar: "الأمن والتحكم في الدخول",
      intro_en:
        "Cameras, access control, perimeter fencing and gates for public buildings and sites, quoted against your specification and the compatibility requirements of any existing system.",
      intro_ar:
        "الكاميرات وأنظمة التحكم في الدخول وأسوار الحماية المحيطية والبوابات للمباني والمواقع العامة، ويتم إعداد عروض أسعارها وفق مواصفاتكم ومتطلبات التوافق مع أي نظام قائم.",
      icon: "ShieldCheck",
      equipment: [
        {
          id: "cctv-video-surveillance",
          linkedProductId: "cctv-surveillance-systems",
          name_en: "CCTV & Video Surveillance",
          name_ar: "كاميرات المراقبة وأنظمة الفيديو",
          summary_en:
            "Cameras and recording equipment for buildings, entrances and public sites.",
          summary_ar: "كاميرات وأجهزة تسجيل للمباني والمداخل والمواقع العامة.",
          whatItIs_en:
            "Indoor and outdoor cameras, recorders and monitoring equipment, quoted against the camera types and quantities in the requirement.",
          whatItIs_ar:
            "كاميرات داخلية وخارجية وأجهزة تسجيل ومعدات عرض، يتم إعداد عرض سعرها وفق أنواع الكاميرات وكمياتها الواردة في الطلب.",
          usedFor_en:
            "Monitoring entrances, corridors, car parks and site perimeters.",
          usedFor_ar: "مراقبة المداخل والممرات ومواقف السيارات ومحيط المواقع.",
          applications_en: [
            "Building entrances",
            "Car parks",
            "Site perimeters",
          ],
          applications_ar: ["مداخل المباني", "مواقف السيارات", "محيط المواقع"],
          industryIds: [
            "admin-public-buildings",
            "secured-sites",
            "schools-universities",
          ],
          selectionFactors: [
            {
              factor_en: "Camera type",
              factor_ar: "نوع الكاميرا",
              detail_en: "Camera types as stated in the specification.",
              detail_ar: "أنواع الكاميرات كما وردت في المواصفات.",
            },
            {
              factor_en: "Existing system",
              factor_ar: "النظام القائم",
              detail_en:
                "Details of any existing recorder or software the cameras must work with.",
              detail_ar:
                "بيانات جهاز التسجيل أو البرنامج القائم الذي يجب أن تعمل معه الكاميرات.",
            },
            {
              factor_en: "Compatibility",
              factor_ar: "التوافق",
              detail_en: "Compatibility requirements stated by the customer.",
              detail_ar: "متطلبات التوافق التي يحددها العميل.",
            },
          ],
          requestChecklist_en: [
            "Camera types as specified",
            "Existing system information",
            "Compatibility requirements",
            BOQ_ITEM_EN,
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "أنواع الكاميرات المحددة",
            "بيانات النظام القائم",
            "متطلبات التوافق",
            BOQ_ITEM_AR,
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "access-control",
            "perimeter-fencing-intrusion-detection",
          ],
          image: null,
          review: pending("compatibility is customer-defined"),
        },
        {
          id: "access-control",
          linkedProductId: "access-control-biometric-systems",
          name_en: "Access Control",
          name_ar: "أنظمة التحكم في الدخول",
          summary_en:
            "Card, PIN and biometric readers, controllers and door hardware for controlled entry.",
          summary_ar:
            "قارئات بطاقات ورموز سرية وبصمة ووحدات تحكم ومستلزمات أبواب للدخول المنظم.",
          whatItIs_en:
            "Readers, controllers, locks and related hardware, quoted against the access points and requirements stated.",
          whatItIs_ar:
            "قارئات ووحدات تحكم وأقفال ومستلزمات مرتبطة بها، يتم إعداد عرض سعرها وفق نقاط الدخول والمتطلبات المحددة.",
          usedFor_en:
            "Controlling entry to buildings, offices and restricted areas.",
          usedFor_ar: "التحكم في الدخول إلى المباني والمكاتب والمناطق المقيدة.",
          applications_en: [
            "Main entrances",
            "Office floors",
            "Restricted rooms",
          ],
          applications_ar: [
            "المداخل الرئيسية",
            "طوابق المكاتب",
            "الغرف المقيدة الدخول",
          ],
          industryIds: [
            "admin-public-buildings",
            "secured-sites",
            "public-healthcare",
          ],
          selectionFactors: [
            {
              factor_en: "Access points",
              factor_ar: "نقاط الدخول",
              detail_en: "Number of doors or access points, if provided.",
              detail_ar: "عدد الأبواب أو نقاط الدخول، إن كان متاحًا.",
            },
            {
              factor_en: "Reader and controller",
              factor_ar: "القارئات ووحدات التحكم",
              detail_en: "Reader and controller requirements as specified.",
              detail_ar:
                "متطلبات القارئات ووحدات التحكم كما وردت في المواصفات.",
            },
            {
              factor_en: "Existing system",
              factor_ar: "النظام القائم",
              detail_en:
                "Existing system information and compatibility requirements.",
              detail_ar: "بيانات النظام القائم ومتطلبات التوافق.",
            },
          ],
          requestChecklist_en: [
            "Number of access points",
            "Reader and controller requirements",
            "Existing system and compatibility",
            BOQ_ITEM_EN,
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "عدد نقاط الدخول",
            "متطلبات القارئات ووحدات التحكم",
            "النظام القائم ومتطلبات التوافق",
            BOQ_ITEM_AR,
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "cctv-video-surveillance",
            "gates-vehicle-barriers",
          ],
          image: null,
          review: pending("compatibility is customer-defined"),
        },
        {
          id: "perimeter-fencing-intrusion-detection",
          linkedProductId: "perimeter-security-fencing",
          name_en: "Perimeter Fencing & Intrusion Detection",
          name_ar: "أسوار الحماية المحيطية وكشف التسلل",
          summary_en:
            "Security fencing and intrusion-detection equipment for site boundaries.",
          summary_ar: "أسوار أمنية ومعدات كشف التسلل لحدود المواقع.",
          whatItIs_en:
            "Mesh or panel security fencing, posts and fittings, and perimeter intrusion-detection equipment.",
          whatItIs_ar:
            "أسوار أمنية شبكية أو بألواح وأعمدة ومستلزمات، ومعدات كشف التسلل على المحيط.",
          usedFor_en:
            "Securing the boundaries of public buildings, yards and facilities.",
          usedFor_ar: "تأمين حدود المباني العامة والساحات والمنشآت.",
          applications_en: [
            "Site boundaries",
            "Yards and depots",
            "Utility compounds",
          ],
          applications_ar: [
            "حدود المواقع",
            "الساحات والمستودعات",
            "مجمعات المرافق",
          ],
          industryIds: ["secured-sites", "admin-public-buildings"],
          selectionFactors: [
            {
              factor_en: "Fence type and height",
              factor_ar: "نوع السور وارتفاعه",
              detail_en: "Fence type and height as specified.",
              detail_ar: "نوع السور وارتفاعه كما وردا في المواصفات.",
            },
            {
              factor_en: "Length",
              factor_ar: "الطول",
              detail_en: "Total length and number of gates, if provided.",
              detail_ar: "الطول الإجمالي وعدد البوابات، إن كان متاحًا.",
            },
            {
              factor_en: "Detection",
              factor_ar: "كشف التسلل",
              detail_en: "Intrusion-detection requirement, if stated.",
              detail_ar: "متطلبات كشف التسلل، إن كانت محددة.",
            },
          ],
          requestChecklist_en: [
            "Fence type and height",
            "Total length",
            "Intrusion-detection requirement if stated",
            BOQ_ITEM_EN,
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع السور وارتفاعه",
            "الطول الإجمالي",
            "متطلبات كشف التسلل إن وُجدت",
            BOQ_ITEM_AR,
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "gates-vehicle-barriers",
            "cctv-video-surveillance",
          ],
          image: null,
          review: pending("AR أسوار الحماية المحيطية"),
        },
        {
          id: "gates-vehicle-barriers",
          linkedProductId: "gate-barrier-systems",
          name_en: "Gates & Vehicle Barriers",
          name_ar: "البوابات وحواجز المركبات",
          summary_en:
            "Automatic gates and vehicle barriers for site and car-park entrances.",
          summary_ar:
            "بوابات آلية وحواجز مركبات لمداخل المواقع ومواقف السيارات.",
          whatItIs_en:
            "Sliding or swing gates with operators, boom barriers and related controls.",
          whatItIs_ar:
            "بوابات منزلقة أو مفصلية بوحدات تشغيل، وحواجز ذراعية ووحدات التحكم المرتبطة بها.",
          usedFor_en:
            "Controlling vehicle and pedestrian entry at site entrances.",
          usedFor_ar: "التحكم في دخول المركبات والمشاة عند مداخل المواقع.",
          applications_en: ["Site entrances", "Car parks", "Service gates"],
          applications_ar: ["مداخل المواقع", "مواقف السيارات", "بوابات الخدمة"],
          industryIds: ["secured-sites", "admin-public-buildings"],
          selectionFactors: [
            {
              factor_en: "Type",
              factor_ar: "النوع",
              detail_en: "Gate or barrier type as specified.",
              detail_ar: "نوع البوابة أو الحاجز كما ورد في المواصفات.",
            },
            {
              factor_en: "Opening width",
              factor_ar: "عرض الفتحة",
              detail_en: "Opening width, if provided.",
              detail_ar: "عرض الفتحة، إن كان متاحًا.",
            },
            {
              factor_en: "Control",
              factor_ar: "التحكم",
              detail_en:
                "Control and access-control integration requirements, if stated.",
              detail_ar:
                "متطلبات التحكم والربط مع أنظمة التحكم في الدخول، إن كانت محددة.",
            },
          ],
          requestChecklist_en: [
            "Gate or barrier type",
            "Opening width",
            "Control and integration requirements",
            BOQ_ITEM_EN,
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع البوابة أو الحاجز",
            "عرض الفتحة",
            "متطلبات التحكم والربط",
            BOQ_ITEM_AR,
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "access-control",
            "perimeter-fencing-intrusion-detection",
          ],
          image: null,
          review: pending("AR حواجز المركبات"),
        },
      ],
    },
    {
      categoryId: "public-lighting-power",
      title_en: "Public Lighting & Traffic",
      title_ar: "الإنارة العامة والمرور",
      intro_en:
        "Street, area and solar street lighting and traffic signals, quoted against the fixture types, quantities and project specification provided. Power and solar plant requirements are covered by the Electrical & Energy sector.",
      intro_ar:
        "إنارة الشوارع والمناطق المفتوحة والإنارة الشمسية للشوارع وإشارات المرور، ويتم إعداد عروض أسعارها وفق أنواع الوحدات والكميات ومواصفات المشروع المقدمة، بينما يغطي قطاع الكهرباء والطاقة متطلبات القوى ومحطات الإنتاج الشمسي.",
      icon: "Lightbulb",
      equipment: [
        {
          id: "street-area-lighting",
          linkedProductId: "street-public-lighting-systems",
          name_en: "Street & Area Lighting",
          name_ar: "إنارة الشوارع والمناطق المفتوحة",
          summary_en:
            "Street and area luminaires and poles for roads, parks and public spaces.",
          summary_ar: "وحدات إنارة وأعمدة للشوارع والحدائق والمساحات العامة.",
          whatItIs_en:
            "Road and area luminaires, poles and brackets, quoted against the fixture type and quantities in the project specification.",
          whatItIs_ar:
            "وحدات إنارة للطرق والمناطق المفتوحة وأعمدة وحوامل، يتم إعداد عرض سعرها وفق نوع الوحدة والكميات الواردة في مواصفات المشروع.",
          usedFor_en:
            "Lighting roads, squares, parks and building surroundings.",
          usedFor_ar: "إنارة الطرق والميادين والحدائق ومحيط المباني.",
          applications_en: [
            "Roads and streets",
            "Parks and squares",
            "Building surroundings",
          ],
          applications_ar: [
            "الطرق والشوارع",
            "الحدائق والميادين",
            "محيط المباني",
          ],
          industryIds: ["municipal-roads", "admin-public-buildings"],
          selectionFactors: [
            {
              factor_en: "Fixture type",
              factor_ar: "نوع الوحدة",
              detail_en: "Luminaire type as stated in the specification.",
              detail_ar: "نوع وحدة الإنارة كما ورد في المواصفات.",
            },
            {
              factor_en: "Mounting",
              factor_ar: "التثبيت",
              detail_en: "Pole or bracket mounting arrangement.",
              detail_ar: "طريقة التثبيت على الأعمدة أو الحوامل.",
            },
            {
              factor_en: "Location",
              factor_ar: "الموقع",
              detail_en: "Location and application.",
              detail_ar: "الموقع وطبيعة الاستخدام.",
            },
          ],
          requestChecklist_en: [
            "Fixture type",
            "Mounting arrangement",
            "Project specification",
            "Location and application",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الوحدة",
            "طريقة التثبيت",
            "مواصفات المشروع",
            "الموقع وطبيعة الاستخدام",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "solar-street-lighting",
            "traffic-signals-management",
          ],
          image: null,
          review: pending("AR إنارة الشوارع"),
        },
        {
          id: "solar-street-lighting",
          linkedProductId: "solar-street-lighting",
          name_en: "Solar Street Lighting",
          name_ar: "إنارة الشوارع بالطاقة الشمسية",
          summary_en:
            "Self-contained solar street lights for roads and areas without a mains supply.",
          summary_ar:
            "وحدات إنارة شوارع شمسية مستقلة للطرق والمناطق غير المتصلة بالشبكة.",
          whatItIs_en:
            "Street lights with their own solar panel and battery, as all-in-one or split units.",
          whatItIs_ar:
            "وحدات إنارة شوارع بلوح شمسي وبطارية خاصين بها، كوحدات مدمجة أو منفصلة.",
          usedFor_en:
            "Lighting remote roads, paths and sites where a mains connection is not practical.",
          usedFor_ar:
            "إنارة الطرق والممرات والمواقع البعيدة التي يصعب توصيلها بالشبكة.",
          applications_en: [
            "Remote roads",
            "Paths and parks",
            "Site perimeters",
          ],
          applications_ar: [
            "الطرق البعيدة",
            "الممرات والحدائق",
            "محيط المواقع",
          ],
          industryIds: ["municipal-roads", "secured-sites"],
          selectionFactors: [
            {
              factor_en: "Unit type",
              factor_ar: "نوع الوحدة",
              detail_en: "All-in-one or split unit, as specified.",
              detail_ar: "وحدة مدمجة أو منفصلة، حسب المواصفات.",
            },
            {
              factor_en: "Lighting requirement",
              factor_ar: "متطلبات الإنارة",
              detail_en:
                "The lighting performance stated in the project specification.",
              detail_ar: "أداء الإنارة المحدد في مواصفات المشروع.",
            },
            {
              factor_en: "Location",
              factor_ar: "الموقع",
              detail_en: "Site location and mounting arrangement.",
              detail_ar: "موقع المشروع وطريقة التثبيت.",
            },
          ],
          requestChecklist_en: [
            "Unit type",
            "Lighting requirement from the specification",
            "Mounting arrangement",
            "Site location",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الوحدة",
            "متطلبات الإنارة الواردة في المواصفات",
            "طريقة التثبيت",
            "موقع المشروع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["street-area-lighting"],
          image: null,
          review: pending("street lighting only — no solar plant wording"),
        },
        {
          id: "traffic-signals-management",
          linkedProductId: "traffic-management-signal-systems",
          name_en: "Traffic Signals & Management",
          name_ar: "إشارات المرور وأنظمة إدارة الحركة",
          summary_en:
            "Traffic and pedestrian signals, controllers and related road equipment.",
          summary_ar:
            "إشارات المرور والمشاة ووحدات التحكم ومعدات الطرق المرتبطة بها.",
          whatItIs_en:
            "Vehicle and pedestrian signal heads, poles, controllers and management equipment, quoted against the road authority's or consultant's specification.",
          whatItIs_ar:
            "رؤوس إشارات للمركبات والمشاة وأعمدة ووحدات تحكم ومعدات إدارة، يتم إعداد عرض سعرها وفق مواصفات الجهة المختصة أو الاستشاري.",
          usedFor_en:
            "Controlling traffic at junctions and pedestrian crossings.",
          usedFor_ar: "تنظيم الحركة عند التقاطعات ومعابر المشاة.",
          applications_en: [
            "Junctions",
            "Pedestrian crossings",
            "Car-park and site exits",
          ],
          applications_ar: [
            "التقاطعات",
            "معابر المشاة",
            "مخارج المواقع ومواقف السيارات",
          ],
          industryIds: ["municipal-roads"],
          selectionFactors: [
            {
              factor_en: "Signal type",
              factor_ar: "نوع الإشارة",
              detail_en: "Signal head and pole types as specified.",
              detail_ar: "أنواع رؤوس الإشارات والأعمدة كما وردت في المواصفات.",
            },
            {
              factor_en: "Controller",
              factor_ar: "وحدة التحكم",
              detail_en: "Controller and management requirements, if stated.",
              detail_ar: "متطلبات وحدات التحكم والإدارة، إن كانت محددة.",
            },
            {
              factor_en: "Quantity and location",
              factor_ar: "الكمية والموقع",
              detail_en: "Quantity per junction and site.",
              detail_ar: "الكمية لكل تقاطع وموقع.",
            },
          ],
          requestChecklist_en: [
            "Signal type",
            "Controller or management requirements",
            "Project specification",
            "Quantity per location",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الإشارة",
            "متطلبات وحدات التحكم أو الإدارة",
            "مواصفات المشروع",
            "الكمية لكل موقع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["street-area-lighting"],
          image: null,
          review: pending("AR إشارات المرور"),
        },
      ],
    },
  ],

  replacement: {
    title_en: "Replacing Existing Items?",
    title_ar: "هل تستبدل أصنافًا قائمة؟",
    intro_en:
      "If you are replacing furniture, storage units, CCTV cameras, access readers, gate or barrier units, luminaires or traffic signal heads already in service, start from the existing item. Whole video-management and access-control platforms are quoted against the specification and compatibility requirements, and backup power and solar plant requirements are covered by the Electrical & Energy sector.",
    intro_ar:
      "إذا كنتم تستبدلون أثاثًا أو وحدات تخزين أو كاميرات مراقبة أو قارئات دخول أو بوابات أو حواجز أو وحدات إنارة أو رؤوس إشارات مرور قائمة في الخدمة، فابدأوا من الصنف الحالي. أما منظومات إدارة الفيديو والتحكم في الدخول بالكامل فيتم إعداد عروض أسعارها وفق المواصفات ومتطلبات التوافق، بينما يغطي قطاع الكهرباء والطاقة متطلبات الطاقة الاحتياطية ومحطات الإنتاج الشمسي.",
    flowTitle_en: "How a replacement request works",
    flowTitle_ar: "كيف يتم التعامل مع طلب الاستبدال",
    flow_en: [
      "Existing item",
      "Nameplate, label or model",
      "Photos",
      "Available technical information",
      "Quantity",
      "Technical review",
      "Matching or technically suitable alternative",
      "Quotation",
    ],
    flow_ar: [
      "الصنف الحالي",
      "لوحة التعريف أو الملصق أو الموديل",
      "الصور",
      "البيانات الفنية المتاحة",
      "العدد المطلوب",
      "المراجعة الفنية",
      "صنف مطابق أو بديل مناسب فنيًا",
      "عرض السعر",
    ],
    groups: [
      {
        title_en: "All items",
        title_ar: "لجميع الأصناف",
        items_en: [
          "Item type",
          "Nameplate, label or model",
          "Photos of the item and where it is fitted",
          "Quantity",
          "Site or project",
          "Available technical information",
          "Required timing",
        ],
        items_ar: [
          "نوع الصنف",
          "لوحة التعريف أو الملصق أو الموديل",
          "صور الصنف ومكان تثبيته",
          "العدد المطلوب",
          "الموقع أو المشروع",
          "البيانات الفنية المتاحة",
          "التوقيت المطلوب",
        ],
      },
      {
        title_en: "Furniture & storage",
        title_ar: "الأثاث ووحدات التخزين",
        items_en: [
          "Photos and dimensions of the existing item",
          "Material and finish",
          "Quantity per location",
        ],
        items_ar: [
          "صور الصنف الحالي ومقاساته",
          "الخامة والتشطيب",
          "الكمية لكل موقع",
        ],
      },
      {
        title_en: "Security devices",
        title_ar: "أجهزة الأمن",
        items_en: [
          "Camera, reader, gate or barrier model",
          "Existing system it connects to",
          "Compatibility requirements stated by the customer",
        ],
        items_ar: [
          "موديل الكاميرا أو القارئ أو البوابة أو الحاجز",
          "النظام القائم الذي يرتبط به",
          "متطلبات التوافق التي يحددها العميل",
        ],
      },
      {
        title_en: "Luminaires & traffic signal heads",
        title_ar: "وحدات الإنارة ورؤوس إشارات المرور",
        items_en: [
          "Photos and labels of the existing units",
          "Mounting arrangement",
          "Quantity",
        ],
        items_ar: [
          "صور الوحدات الحالية وملصقاتها",
          "طريقة التثبيت",
          "العدد المطلوب",
        ],
      },
    ],
    note_en:
      "GOLTENS reviews the available item information and can source a matching or technically suitable alternative for quotation. Final equivalence and acceptance should be confirmed by the customer, consultant or contracting authority, as applicable.",
    note_ar:
      "تراجع GOLTENS بيانات الصنف المتاحة ويمكنها توفير صنف مطابق أو بديل مناسب فنيًا ضمن عرض السعر، على أن يتم تأكيد التكافؤ والقبول النهائي من جانب العميل أو الاستشاري أو الجهة المتعاقدة، بحسب الحالة.",
    ctaLabel_en: "Request a quotation for replacement items",
    ctaLabel_ar: "اطلب عرض سعر لأصناف بديلة",
    prefill_en: "Replacement of existing items — Government & Public-Sector",
    prefill_ar: "استبدال أصناف قائمة — التوريدات الحكومية والعامة",
  },

  request: {
    title_en: "What to Include in Your Quotation Request",
    title_ar: "ما الذي يجب إرساله مع طلب عرض السعر",
    intro_en:
      "Government and tender requests are driven by the customer's documents. Send what you have — missing details can be clarified during quotation.",
    intro_ar:
      "تعتمد طلبات التوريد الحكومية والمناقصات على مستندات العميل. أرسلوا ما يتوفر لديكم، ويمكن استكمال البيانات الناقصة أثناء إعداد عرض السعر.",
    checklistTitle_en: "Minimum information",
    checklistTitle_ar: "الحد الأدنى من البيانات",
    checklist_en: [
      "Organisation or bidder name",
      "Tender or project reference",
      "BOQ or item list",
      "Technical specification",
      "Quantities",
      "Delivery location",
      "Required delivery date",
      "Quotation deadline",
      "Contact details",
    ],
    checklist_ar: [
      "اسم الجهة أو مقدم العرض",
      "مرجع المناقصة أو المشروع",
      "جدول الكميات أو قائمة الأصناف",
      "المواصفات الفنية",
      "الكميات",
      "مكان التوريد",
      "تاريخ التوريد المطلوب",
      "الموعد النهائي لتقديم عرض السعر",
      "بيانات التواصل",
    ],
    secondaryChecklist: {
      title_en: "Useful information",
      title_ar: "بيانات مفيدة",
      items_en: [
        "Manufacturer/model/part number if specified by the customer",
        "Whether equivalents are allowed",
        "Required or approved-brand list, only if stated by the customer",
        "Documents required with the quotation",
        "Technical and commercial notes",
        "Photos or nameplates for replacement requests",
        "Installation location as customer-provided information",
      ],
      items_ar: [
        "المصنع أو الموديل أو رقم الجزء إذا كان محددًا من العميل",
        "ما إذا كانت البدائل المكافئة مسموحة",
        "قائمة العلامات المطلوبة أو المعتمدة إذا نص عليها العميل",
        "المستندات المطلوبة مع عرض السعر",
        "الملاحظات الفنية والتجارية",
        "صور أو بيانات لوحة التعريف في طلبات الاستبدال",
        "موقع التركيب كبيانات مقدمة من العميل",
      ],
    },
    checklistNote_en:
      "GOLTENS prepares a quotation based on the information provided. Tender preparation, tender submission, compliance with tender conditions and final technical acceptance remain with the customer, bidder, consultant or contracting authority, as applicable.",
    checklistNote_ar:
      "تُعد GOLTENS عرض السعر استنادًا إلى المعلومات المقدمة، بينما تظل مسؤولية إعداد المناقصة وتقديم العطاء والالتزام بشروط المناقصة والقبول الفني النهائي على عاتق العميل أو مقدم العرض أو الاستشاري أو الجهة المتعاقدة، بحسب الحالة.",
    processTitle_en: "How GOLTENS handles the request",
    processTitle_ar: "كيف تتعامل GOLTENS مع الطلب",
    steps: [
      {
        title_en: "Requirement & Tender Documents",
        title_ar: "المتطلبات ومستندات المناقصة",
        description_en:
          "Send the requirement through the quotation form on this page, with the BOQ, specification, item list and tender or project reference.",
        description_ar:
          "أرسلوا المتطلبات من خلال نموذج طلب عرض السعر في هذه الصفحة مع جدول الكميات والمواصفات وقائمة الأصناف ومرجع المناقصة أو المشروع.",
      },
      {
        title_en: "BOQ / Specification Review",
        title_ar: "مراجعة جدول الكميات والمواصفات",
        description_en:
          "Our team reviews the documents you send and asks for anything needed to identify each item.",
        description_ar:
          "يراجع فريقنا المستندات المرسلة ويطلب أي بيانات لازمة لتحديد كل صنف.",
      },
      {
        title_en: "Sourcing to the Stated Requirement",
        title_ar: "التوفير وفق المتطلبات المحددة",
        description_en:
          "Items are sourced to match the stated requirement — or, where the tender allows, a technically suitable equivalent.",
        description_ar:
          "يتم توفير الأصناف المطابقة للمتطلبات المحددة، أو بديل مناسب فنيًا إذا كانت المناقصة تسمح بذلك.",
      },
      {
        title_en: "Quotation",
        title_ar: "إعداد عرض السعر",
        description_en:
          "You receive a quotation stating the offered items, availability and lead time. Final technical acceptance remains with the customer, consultant or contracting authority, as applicable.",
        description_ar:
          "تتسلمون عرض سعر يوضح الأصناف المقترحة وتوافرها ومدة التوريد، ويظل القبول الفني النهائي من مسؤولية العميل أو الاستشاري أو الجهة المتعاقدة، بحسب الحالة.",
      },
    ],
  },

  quote: {
    title_en: "Request a Quotation",
    title_ar: "اطلب عرض سعر",
    subtitle_en:
      "Send your BOQ, specification or item list with the tender or project reference. Items are available on request and quoted against the stated requirements.",
    subtitle_ar:
      "أرسلوا جدول الكميات أو المواصفات أو قائمة الأصناف مع مرجع المناقصة أو المشروع. الأصناف متاحة حسب الطلب ويتم إعداد عرض سعرها وفق المتطلبات المذكورة.",
  },
};

/** One "Requirements Covered by Other Sectors" entry — local wording only, never the shared `data/sectors.ts` card copy. */
export interface GovernmentProcurementRoute {
  sectorSlug: string;
  title_en: string;
  title_ar: string;
  items_en: string;
  items_ar: string;
}

/**
 * Government-Procurement-only page extras, read by the compact layout in
 * `app/[locale]/sectors/[slug]/page.tsx` (this sector only): the hero's
 * secondary CTA (a real route), the cross-sector routing section, the
 * matrix rows that route to it, and the compact layout's own labels. The
 * shared Related Sectors block is not rendered on this page — its cards
 * carry the other sectors' shared copy; this routing section replaces it.
 */
export const governmentProcurementPage = {
  heroPrimaryCta_en: "Request a Quotation",
  heroPrimaryCta_ar: "اطلب عرض سعر",
  heroSecondaryCta: {
    label_en: "View Procurement Sectors",
    label_ar: "عرض قطاعات التوريد",
    href: "/sectors",
  },
  labels: {
    categoryNav_en: "Item families",
    categoryNav_ar: "مجموعات الأصناف",
    contextItems_en: "Typical items",
    contextItems_ar: "الأصناف المعتادة",
    contextRoutes_en: "Covered by",
    contextRoutes_ar: "يغطيها قطاع",
    details_en: "Details and quotation information",
    details_ar: "التفاصيل وبيانات عرض السعر",
    replacementGroups_en: "Information to send by item type",
    replacementGroups_ar: "البيانات المطلوبة حسب نوع الصنف",
  },
  /** Matrix rows that route to `routing` entries (by sector slug). */
  projectRoutes: {
    "public-healthcare-facilities": ["healthcare"],
    "cross-sector-requirements": [
      "industrial-equipment",
      "electrical-energy",
      "fire-protection",
      "commercial-vehicles",
      "heavy-equipment",
      "healthcare",
      "construction",
      "industrial-chemicals",
      "lubricants-oils",
    ],
    "non-standard-requirements": ["global-sourcing"],
  } as Record<string, string[]>,
  routing: {
    title_en: "Requirements Covered by Other Sectors",
    title_ar: "متطلبات تغطيها قطاعات أخرى",
    intro_en:
      "Government BOQs often include items outside these three families. These GOLTENS sectors cover them, and they can be included in the same request.",
    intro_ar:
      "تتضمن جداول الكميات الحكومية غالبًا أصنافًا خارج هذه المجموعات الثلاث، وتغطيها قطاعات GOLTENS التالية، ويمكن إدراجها ضمن الطلب نفسه.",
    routes: [
      {
        sectorSlug: "industrial-equipment",
        title_en: "Industrial Equipment & Pumps",
        title_ar: "المعدات الصناعية والمضخات",
        items_en: "Pumps, valves and industrial equipment",
        items_ar: "المضخات والصمامات والمعدات الصناعية",
      },
      {
        sectorSlug: "electrical-energy",
        title_en: "Electrical & Energy Equipment",
        title_ar: "معدات الكهرباء والطاقة",
        items_en:
          "Generators, UPS, solar equipment, electrical distribution and energy storage",
        items_ar:
          "المولدات وأنظمة UPS ومعدات الطاقة الشمسية ولوحات التوزيع الكهربائي وتخزين الطاقة",
      },
      {
        sectorSlug: "fire-protection",
        title_en: "Fire Protection Equipment",
        title_ar: "معدات مكافحة الحريق",
        items_en: "Fire pumps, fire alarm, sprinklers and fire equipment",
        items_ar: "مضخات الحريق وإنذار الحريق والرشاشات ومعدات مكافحة الحريق",
      },
      {
        sectorSlug: "commercial-vehicles",
        title_en: "Commercial Vehicles",
        title_ar: "المركبات التجارية",
        items_en:
          "Municipal and fleet vehicles, tankers and specialized vehicles",
        items_ar:
          "المركبات البلدية ومركبات الأساطيل والصهاريج والمركبات المتخصصة",
      },
      {
        sectorSlug: "heavy-equipment",
        title_en: "Heavy Equipment & Machinery",
        title_ar: "المعدات الثقيلة",
        items_en: "Plant and construction machinery and lifting equipment",
        items_ar: "معدات المواقع وآليات الإنشاءات ومعدات الرفع",
      },
      {
        sectorSlug: "healthcare",
        title_en: "Hospital Equipment & Medical Supplies",
        title_ar: "تجهيزات المستشفيات والمستلزمات الطبية",
        items_en: "Hospital and healthcare requirements",
        items_ar: "متطلبات المستشفيات والمنشآت الصحية",
      },
      {
        sectorSlug: "construction",
        title_en: "Construction & Infrastructure",
        title_ar: "مواد البناء والبنية التحتية",
        items_en: "Construction materials and project requirements",
        items_ar: "مواد البناء ومتطلبات المشروعات",
      },
      {
        sectorSlug: "industrial-chemicals",
        title_en: "Industrial Chemicals",
        title_ar: "الكيماويات الصناعية",
        items_en: "Industrial chemical requirements",
        items_ar: "متطلبات الكيماويات الصناعية",
      },
      {
        sectorSlug: "lubricants-oils",
        title_en: "Lubricants & Oils",
        title_ar: "الزيوت ومواد التشحيم",
        items_en: "Lubricants, oils and greases",
        items_ar: "الزيوت ومواد التشحيم والشحوم",
      },
      {
        sectorSlug: "global-sourcing",
        title_en: "Global Sourcing",
        title_ar: "التوريد الدولي",
        items_en: "Non-standard or hard-to-source items",
        items_ar: "الأصناف غير القياسية أو صعبة التوفير",
      },
    ],
  } as {
    title_en: string;
    title_ar: string;
    intro_en: string;
    intro_ar: string;
    routes: GovernmentProcurementRoute[];
  },
};
