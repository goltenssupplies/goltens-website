import type {
  EquipmentGuideReview,
  SectorEquipmentGuide,
  SectorFaq,
  SectorHeroCopy,
} from "@/data/sector-content/types";

/**
 * Electrical & Energy Solutions — electrical & energy equipment procurement
 * guide (application matrix, three equipment families — distribution,
 * standby power & power quality, lighting / solar / storage — a limited
 * replacement path, and a two-part, document-driven quotation checklist).
 * Rendered by `app/[locale]/sectors/[slug]/page.tsx` via
 * `SectorContent.equipmentGuide`.
 *
 * Content rules (enforced by `scripts/verify-equipment-guides.mjs`):
 * - Approved scope only: the 17 equipment families below, "Available on
 *   request." — supplyable according to the customer's requirement and
 *   specification, never stock. No guide for hazardous-area /
 *   explosion-proof lighting.
 * - The 15 `data/products/electrical-energy/*` records are internal source
 *   material only: they stay non-public and are never linked. Distribution
 *   transformers, power cables & cable management and circuit breakers &
 *   protection devices are record-less supply categories — described at a
 *   high level, never with specifications, models or standards.
 * - Electrical requests are document-driven: the customer provides the
 *   single-line diagram, load schedule, BOQ, schedules and specification.
 *   GOLTENS does not design, size, calculate, certify, approve, install or
 *   commission, and no wording may imply it. Replacement / equivalent
 *   sourcing is limited to the approved families, with final equivalence
 *   confirmed by the customer's engineering team.
 * - No manufacturer names, numeric ranges, standards, certifications,
 *   warranty, after-sales, stock or delivery claims.
 *
 * Every entry awaits technical review (`review.technical`) and
 * Egyptian-market Arabic terminology review (`review.arabic`). Market
 * synonyms (جنريتور، ستابلايزر، يو بي إس، باص داكت، هاي ماست، إنفرتر،
 * كشافات هاي باي) appear only as secondary wording.
 */

const pending = (notes: string): EquipmentGuideReview => ({
  technical: "needs-verification",
  arabic: "needs-verification",
  notes,
});

const CHECKLIST_CLOSING_EN = "Quantity, delivery location and required timing";
const CHECKLIST_CLOSING_AR = "العدد المطلوب ومكان التسليم والتوقيت المطلوب";

/** Sector-page hero copy (replaces the `data/sectors.ts` subtitle/description on this page only). */
export const electricalEnergyHero: SectorHeroCopy = {
  subtitle_en:
    "GOLTENS supplies electrical and energy equipment according to your operating requirements, technical specifications and project or tender needs.",
  subtitle_ar:
    "توفر GOLTENS معدات الكهرباء والطاقة وفق متطلبات التشغيل والمواصفات الفنية واحتياجات المشروع أو المناقصة.",
  description_en:
    "Switchgear, standby power, lighting, solar and energy storage equipment are specified according to your requirements. Availability and configuration are confirmed during quotation.",
  description_ar:
    "لوحات ومهمات التوزيع والطاقة الاحتياطية والإنارة والطاقة الشمسية وتخزين الطاقة تُحدَّد وفق متطلباتكم، ويتم تأكيد التوافر والتكوين أثناء إعداد عرض السعر.",
};

export const electricalEnergyFaqs: SectorFaq[] = [
  {
    question_en: "How do I request electrical and energy equipment?",
    answer_en:
      "Use the quotation form on this page. Include the equipment type, quantity and application, and attach the project documents you have — each equipment guide lists the information that matters for that equipment.",
    question_ar: "كيف أطلب معدات الكهرباء والطاقة؟",
    answer_ar:
      "استخدموا نموذج طلب عرض السعر في هذه الصفحة، وأرسلوا نوع المعدة والعدد المطلوب وطبيعة الاستخدام، مع ما يتوفر لديكم من مستندات المشروع. ويوضح كل دليل معدة البيانات المهمة الخاصة بها.",
  },
  {
    question_en: "Which documents should I send?",
    answer_en:
      "Where applicable: the single-line diagram, load schedule, BOQ, equipment or panel schedules and the consultant specification. For existing equipment, nameplate photos and the model also help.",
    question_ar: "ما المستندات التي يجب إرسالها؟",
    answer_ar:
      "حسب الحاجة: المخطط أحادي الخط وجدول الأحمال وجدول الكميات (BOQ) وجداول المعدات أو اللوحات ومواصفات الاستشاري. وبالنسبة للمعدات القائمة، تساعد صور اللوحات التعريفية والطراز أيضًا.",
  },
  {
    question_en: "Can I include several items in one request?",
    answer_en:
      "Yes. You can include several electrical and energy equipment requirements in one quotation request.",
    question_ar: "هل يمكنني إدراج عدة بنود في طلب واحد؟",
    answer_ar:
      "نعم، يمكنكم إدراج عدة متطلبات من معدات الكهرباء والطاقة ضمن طلب عرض سعر واحد.",
  },
  {
    question_en: "Can GOLTENS provide a replacement for existing equipment?",
    answer_en:
      "For generator sets, transfer switches, UPS, voltage stabilizers, battery chargers and rectifiers, sub-distribution boards and industrial or high-mast lighting, send the nameplate, photos, the available technical information and the quantity. GOLTENS reviews the available equipment information and can source a matching or technically suitable alternative for quotation. Final equivalence and suitability should be confirmed by the customer's engineering team.",
    question_ar: "هل يمكن لـGOLTENS توفير بديل لمعدة قائمة؟",
    answer_ar:
      "بالنسبة لمجموعات توليد الديزل ولوحات التحويل الآلي وأنظمة UPS ومنظمات الجهد وشواحن البطاريات والمقومات ولوحات التوزيع الفرعية ووحدات الإنارة الصناعية وأعمدة الإنارة العالية، أرسلوا اللوحة التعريفية والصور والبيانات الفنية المتاحة والعدد المطلوب. تراجع GOLTENS بيانات المعدة المتاحة ويمكنها توفير معدة مطابقة أو بديل مناسب فنيًا ضمن عرض السعر، على أن يتم تأكيد التكافؤ والملاءمة النهائية من جانب الفريق الهندسي لدى العميل.",
  },
  {
    question_en: "Is the electrical system design part of the quotation?",
    answer_en:
      "No. Equipment is quoted against the documents, information and specification you provide; the system design and final selection remain with your engineering team or consultant.",
    question_ar: "هل يشمل عرض السعر تصميم النظام الكهربائي؟",
    answer_ar:
      "لا، يتم إعداد عرض السعر وفق المستندات والبيانات والمواصفات التي تقدمونها، ويظل تصميم النظام والاختيار النهائي من مسؤولية الفريق الهندسي أو الاستشاري لديكم.",
  },
  {
    question_en: "What if I don't have complete technical information?",
    answer_en:
      "Send what you have. The minimum is the equipment type, quantity and application; missing details can be clarified during quotation.",
    question_ar: "ماذا لو لم تكن لدي البيانات الفنية كاملة؟",
    answer_ar:
      "أرسلوا ما يتوفر لديكم. الحد الأدنى هو نوع المعدة والعدد المطلوب وطبيعة الاستخدام، ويمكن استكمال البيانات الناقصة أثناء إعداد عرض السعر.",
  },
  {
    question_en: "Can you supply equipment not listed on this page?",
    answer_en:
      "The guides cover common electrical distribution, standby power, lighting, solar and storage equipment. Additional equipment can be reviewed according to your requirement — send the details through the quotation form.",
    question_ar: "هل يمكنكم توريد معدات غير مذكورة في هذه الصفحة؟",
    answer_ar:
      "تغطي الأدلة معدات التوزيع الكهربائي والطاقة الاحتياطية والإنارة والطاقة الشمسية والتخزين الشائعة، ويمكن مراجعة معدات إضافية وفق متطلباتكم؛ أرسلوا التفاصيل من خلال نموذج طلب عرض السعر.",
  },
  {
    question_en: "What is the lead time?",
    answer_en:
      "Lead time depends on the equipment and its configuration. Configuration and availability are confirmed during quotation, so we state the lead time in each quotation rather than quote a single blanket figure.",
    question_ar: "ما هي مدة التوريد؟",
    answer_ar:
      "تعتمد مدة التوريد على المعدة وتكوينها. ويتم تأكيد التكوين والتوافر أثناء إعداد عرض السعر، لذلك نوضح مدة التوريد في كل عرض سعر بدلًا من تحديد مدة عامة موحدة.",
  },
];

export const electricalEnergyGuide: SectorEquipmentGuide = {
  heroVisual: "neutral",
  availability_en: "Available on request.",
  availability_ar: "متاح حسب الطلب.",

  intro: {
    eyebrow_en: "Electrical & energy equipment procurement guide",
    eyebrow_ar: "دليل توريد معدات الكهرباء والطاقة",
    lead_en:
      "GOLTENS supplies electrical distribution, standby power, lighting, solar and energy storage equipment according to your requirements and specifications. Use this guide to start from your application, review what matters for each equipment type, and prepare the documents and information we need to quote.",
    lead_ar:
      "توفر GOLTENS معدات التوزيع الكهربائي والطاقة الاحتياطية والإنارة والطاقة الشمسية وتخزين الطاقة وفق متطلباتكم ومواصفاتكم. استخدموا هذا الدليل للبدء من طبيعة الاستخدام، ومراجعة أهم اعتبارات كل نوع من المعدات، وتجهيز المستندات والبيانات التي نحتاجها لإعداد عرض السعر.",
    note_en:
      "These guides are general information to help you define your requirement — not a list of stocked models. Equipment is available on request; configuration and availability are confirmed during quotation, against the documents and specification you provide.",
    note_ar:
      "هذه الأدلة معلومات عامة تساعدكم على تحديد احتياجكم، وليست قائمة بموديلات مخزنة. المعدات متاحة حسب الطلب، ويتم تأكيد التكوين والتوافر أثناء إعداد عرض السعر وفق المستندات والمواصفات التي تقدمونها.",
  },

  projectsTitle_en: "Choose Equipment by Application",
  projectsTitle_ar: "اختر المعدة حسب طبيعة الاستخدام",
  projectsIntro_en:
    "Typical equipment for common electrical and energy applications. Every system is different, so use this as a starting point and confirm the final selection against your project documents.",
  projectsIntro_ar:
    "المعدات المعتادة لأكثر استخدامات الكهرباء والطاقة شيوعًا. ولأن كل نظام يختلف عن غيره، استخدموها كنقطة بداية وتأكدوا من الاختيار النهائي وفق مستندات مشروعكم.",

  industries: [
    {
      id: "industrial-facilities",
      label_en: "Industrial facilities",
      label_ar: "المنشآت الصناعية",
    },
    {
      id: "commercial-buildings",
      label_en: "Commercial & residential buildings",
      label_ar: "المباني التجارية والسكنية",
    },
    {
      id: "healthcare-facilities",
      label_en: "Healthcare facilities",
      label_ar: "المنشآت الصحية",
    },
    {
      id: "data-telecom",
      label_en: "Data centres & telecom sites",
      label_ar: "مراكز البيانات ومواقع الاتصالات",
    },
    {
      id: "utilities-infrastructure",
      label_en: "Utilities & infrastructure",
      label_ar: "المرافق والبنية التحتية",
    },
    {
      id: "construction-sites",
      label_en: "Construction sites",
      label_ar: "مواقع الإنشاءات",
    },
    {
      id: "warehouses-logistics",
      label_en: "Warehouses & logistics",
      label_ar: "المستودعات واللوجستيات",
    },
    {
      id: "ports-yards",
      label_en: "Ports & open yards",
      label_ar: "الموانئ والساحات المفتوحة",
    },
    {
      id: "remote-sites",
      label_en: "Remote & off-grid sites",
      label_ar: "المواقع النائية وغير المتصلة بالشبكة",
    },
  ],

  projects: [
    {
      id: "building-power-distribution",
      title_en: "Building and facility power distribution",
      title_ar: "توزيع الطاقة في المباني والمنشآت",
      description_en:
        "Distributing low-voltage power from the main switchboard to floors, zones and equipment.",
      description_ar:
        "توزيع طاقة الجهد المنخفض من لوحة التوزيع الرئيسية إلى الطوابق والمناطق والمعدات.",
      equipmentIds: [
        "main-lv-switchgear",
        "sub-distribution-boards",
        "busbar-trunking-systems",
      ],
      review: pending("application mapping"),
    },
    {
      id: "mv-distribution",
      title_en: "Medium-voltage distribution and substations",
      title_ar: "التوزيع على الجهد المتوسط والمحطات الفرعية",
      description_en:
        "Switching and distributing medium-voltage supply in substations and large sites.",
      description_ar:
        "تحويل وتوزيع تغذية الجهد المتوسط في المحطات الفرعية والمواقع الكبيرة.",
      equipmentIds: ["mv-switchgear", "ring-main-units"],
      review: pending("application mapping"),
    },
    {
      id: "high-current-distribution",
      title_en: "High-current distribution and risers",
      title_ar: "التوزيع للتيارات العالية والأعمدة الصاعدة",
      description_en:
        "Carrying high currents through risers and across large floor areas.",
      description_ar:
        "نقل التيارات العالية عبر الأعمدة الصاعدة وعلى امتداد المساحات الكبيرة.",
      equipmentIds: ["busbar-trunking-systems", "main-lv-switchgear"],
      review: pending("application mapping"),
    },
    {
      id: "standby-power",
      title_en: "Standby power for facilities",
      title_ar: "الطاقة الاحتياطية للمنشآت",
      description_en:
        "Keeping facilities supplied during mains failure, with automatic changeover.",
      description_ar:
        "استمرار تغذية المنشآت أثناء انقطاع التيار العمومي مع التحويل الآلي.",
      equipmentIds: ["diesel-generator-sets", "automatic-transfer-switches"],
      review: pending("application mapping"),
    },
    {
      id: "critical-power",
      title_en: "Critical and uninterrupted power",
      title_ar: "الطاقة الحرجة غير المنقطعة",
      description_en:
        "Supplying critical IT, control and medical loads without interruption.",
      description_ar:
        "تغذية أحمال تقنية المعلومات والتحكم والأجهزة الطبية الحرجة دون انقطاع.",
      equipmentIds: [
        "ups-systems",
        "automatic-transfer-switches",
        "battery-chargers-rectifiers",
      ],
      review: pending("application mapping"),
    },
    {
      id: "voltage-stabilization",
      title_en: "Voltage stabilization for sensitive equipment",
      title_ar: "تنظيم الجهد للمعدات الحساسة",
      description_en:
        "Holding supply voltage steady for equipment affected by an unstable network.",
      description_ar:
        "الحفاظ على ثبات جهد التغذية للمعدات التي تتأثر بعدم استقرار الشبكة.",
      equipmentIds: ["voltage-stabilizers"],
      review: pending("application mapping"),
    },
    {
      id: "dc-battery-systems",
      title_en: "DC control and battery systems",
      title_ar: "أنظمة التحكم والبطاريات بالتيار المستمر",
      description_en:
        "Keeping DC control, protection and emergency battery systems charged.",
      description_ar:
        "الحفاظ على شحن أنظمة التحكم والحماية وبطاريات الطوارئ العاملة بالتيار المستمر.",
      equipmentIds: ["battery-chargers-rectifiers"],
      review: pending("application mapping"),
    },
    {
      id: "industrial-lighting",
      title_en: "Industrial and warehouse lighting",
      title_ar: "إنارة المنشآت الصناعية والمستودعات",
      description_en:
        "General lighting of production floors, warehouses and workshops.",
      description_ar: "الإنارة العامة لصالات الإنتاج والمستودعات والورش.",
      equipmentIds: ["led-industrial-lighting"],
      review: pending("application mapping"),
    },
    {
      id: "outdoor-area-lighting",
      title_en: "Outdoor area and yard lighting",
      title_ar: "إنارة الساحات والمناطق المفتوحة",
      description_en:
        "Lighting yards, ports, car parks and open storage areas from tall masts.",
      description_ar:
        "إنارة الساحات والموانئ ومواقف السيارات ومناطق التخزين المفتوحة من أعمدة عالية.",
      equipmentIds: ["high-mast-lighting"],
      review: pending("application mapping"),
    },
    {
      id: "solar-storage",
      title_en: "Solar generation and energy storage",
      title_ar: "توليد الطاقة الشمسية وتخزين الطاقة",
      description_en:
        "Generating power from rooftop or ground-mounted solar and storing it for later use.",
      description_ar:
        "توليد الطاقة من الألواح الشمسية على الأسطح أو الأرض وتخزينها للاستخدام لاحقًا.",
      equipmentIds: [
        "solar-pv-modules-inverters",
        "battery-energy-storage-systems",
      ],
      review: pending("application mapping"),
    },
  ],

  categories: [
    // ------------------------------------------------------------------
    // Electrical Distribution, Switchgear & Protection
    // ------------------------------------------------------------------
    {
      categoryId: "switchgear-distribution",
      title_en: "Electrical Distribution, Switchgear & Protection",
      title_ar: "التوزيع الكهربائي ولوحات ومهمات التوزيع والحماية",
      intro_en:
        "Distribution equipment is specified from your project documents — the single-line diagram, load schedule, panel and cable schedules and the consultant specification. Send what you have, and the equipment is reviewed against it during quotation.",
      intro_ar:
        "تُحدَّد معدات التوزيع وفق مستندات مشروعكم، أي المخطط أحادي الخط وجدول الأحمال وجداول اللوحات والكابلات ومواصفات الاستشاري. أرسلوا ما يتوفر لديكم، وتتم مراجعة المعدات على أساسه أثناء إعداد عرض السعر.",
      icon: "Zap",
      equipment: [
        {
          id: "main-lv-switchgear",
          linkedProductId: "low-voltage-switchgear",
          name_en: "Main Low-Voltage Switchgear",
          name_ar: "لوحات التوزيع الرئيسية للجهد المنخفض",
          summary_en:
            "The main low-voltage distribution assembly that receives the supply from the transformer or generator and feeds the building or plant.",
          summary_ar:
            "لوحة التوزيع الرئيسية على الجهد المنخفض التي تستقبل التغذية من المحول أو المولد وتوزعها على المبنى أو المنشأة.",
          whatItIs_en:
            "A factory-assembled set of incoming and outgoing circuit breakers, busbars and metering in a common enclosure, built to the arrangement shown on your single-line diagram and panel schedule.",
          whatItIs_ar:
            "مجموعة مجمّعة في المصنع من قواطع الدخول والخروج والقضبان وأجهزة القياس داخل غلاف واحد، تُنفَّذ وفق الترتيب الموضح في المخطط أحادي الخط وجدول اللوحة لديكم.",
          usedFor_en:
            "Main distribution in commercial buildings, factories and plant rooms, including generator and utility incomers.",
          usedFor_ar:
            "التوزيع الرئيسي في المباني التجارية والمصانع وغرف المعدات، بما في ذلك مداخل تغذية المولد والشبكة العمومية.",
          applications_en: [
            "Main distribution boards for commercial and industrial buildings",
            "Plant room incoming and outgoing distribution",
            "Generator and utility incomer panels",
            "Supply to motor control panels",
          ],
          applications_ar: [
            "لوحات التوزيع الرئيسية للمباني التجارية والصناعية",
            "توزيع التغذية الواردة والصادرة في غرف المعدات",
            "لوحات مداخل تغذية المولد والشبكة العمومية",
            "تغذية لوحات التحكم في المحركات",
          ],
          industryIds: [
            "industrial-facilities",
            "commercial-buildings",
            "healthcare-facilities",
            "data-telecom",
          ],
          selectionFactors: [
            {
              factor_en: "Single-line diagram and schedules",
              factor_ar: "المخطط أحادي الخط والجداول",
              detail_en:
                "The incomers, outgoing feeders and their ratings follow your single-line diagram and panel schedule.",
              detail_ar:
                "تُحدَّد مداخل التغذية والمغذيات الصادرة وقيمها وفق المخطط أحادي الخط وجدول اللوحة لديكم.",
            },
            {
              factor_en: "System data",
              factor_ar: "بيانات النظام",
              detail_en:
                "System voltage, current ratings and the fault level stated in your design.",
              detail_ar:
                "جهد النظام وقيم التيار ومستوى القصر الوارد في التصميم لديكم.",
            },
            {
              factor_en: "Enclosure and installation",
              factor_ar: "الغلاف والتركيب",
              detail_en:
                "Indoor or outdoor location, enclosure protection and the cable entry arrangement.",
              detail_ar:
                "مكان التركيب الداخلي أو الخارجي ودرجة حماية الغلاف وطريقة دخول الكابلات.",
            },
            {
              factor_en: "Internal arrangement",
              factor_ar: "الترتيب الداخلي",
              detail_en:
                "Fixed or withdrawable breakers and the internal separation required by your specification.",
              detail_ar:
                "قواطع ثابتة أو قابلة للسحب والفصل الداخلي الذي تشترطه مواصفاتكم.",
            },
          ],
          requestChecklist_en: [
            "Single-line diagram and panel schedule",
            "System voltage and incomer rating",
            "Enclosure, IP rating and installation location",
            "Cable entry arrangement",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المخطط أحادي الخط وجدول اللوحة",
            "جهد النظام وقيمة مدخل التغذية",
            "الغلاف ودرجة الحماية (IP) ومكان التركيب",
            "طريقة دخول الكابلات",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "sub-distribution-boards",
            "busbar-trunking-systems",
            "circuit-breakers-protection-devices",
          ],
          image: null,
          review: pending("assembly wording; AR term"),
        },
        {
          id: "mv-switchgear",
          linkedProductId: "medium-voltage-switchgear",
          name_en: "Medium-Voltage Switchgear",
          name_ar: "خلايا الجهد المتوسط",
          summary_en:
            "Switchgear panels for medium-voltage incoming, outgoing and transformer feeders in substations and large facilities.",
          summary_ar:
            "خلايا تحويل وحماية للمغذيات الواردة والصادرة ومغذيات المحولات على الجهد المتوسط في المحطات الفرعية والمنشآت الكبيرة.",
          whatItIs_en:
            "A line-up of metal-enclosed panels that switch, protect and isolate medium-voltage circuits, in air-insulated or gas-insulated designs. The line-up follows the configuration in your single-line diagram and the requirements in your specification.",
          whatItIs_ar:
            "صف من الخلايا المعدنية المغلقة تقوم بتحويل دوائر الجهد المتوسط وحمايتها وعزلها، بتصميمات معزولة بالهواء أو بالغاز. ويتبع تكوين الخلايا ما يوضحه المخطط أحادي الخط والاشتراطات الواردة في مواصفاتكم.",
          usedFor_en:
            "Primary distribution in substations, industrial plants and large commercial sites.",
          usedFor_ar:
            "التوزيع الرئيسي في المحطات الفرعية والمنشآت الصناعية والمواقع التجارية الكبيرة.",
          applications_en: [
            "Primary distribution substations",
            "Feeders for large industrial facilities",
            "Transformer feeder panels",
            "Incoming supply points for large sites",
          ],
          applications_ar: [
            "محطات التوزيع الرئيسية",
            "مغذيات المنشآت الصناعية الكبيرة",
            "خلايا مغذيات المحولات",
            "نقاط التغذية الواردة للمواقع الكبيرة",
          ],
          industryIds: [
            "utilities-infrastructure",
            "industrial-facilities",
            "commercial-buildings",
          ],
          selectionFactors: [
            {
              factor_en: "Panel configuration",
              factor_ar: "تكوين الخلايا",
              detail_en:
                "The number and type of incoming, outgoing, transformer and metering panels shown on your single-line diagram.",
              detail_ar:
                "عدد ونوع خلايا الدخول والخروج والمحولات والقياس كما يوضحها المخطط أحادي الخط لديكم.",
            },
            {
              factor_en: "Voltage class and fault level",
              factor_ar: "فئة الجهد ومستوى القصر",
              detail_en: "Taken from your network data and design documents.",
              detail_ar: "تُؤخذ من بيانات الشبكة ومستندات التصميم لديكم.",
            },
            {
              factor_en: "Insulation type",
              factor_ar: "نوع العزل",
              detail_en:
                "Air-insulated or gas-insulated, according to the space available and your specification.",
              detail_ar:
                "معزولة بالهواء أو بالغاز وفق المساحة المتاحة ومواصفاتكم.",
            },
            {
              factor_en: "Network requirements",
              factor_ar: "اشتراطات الشبكة",
              detail_en:
                "Any requirements of the network operator form part of your specification and are reviewed during quotation.",
              detail_ar:
                "تُعد أي اشتراطات لجهة تشغيل الشبكة جزءًا من مواصفاتكم، وتُراجع أثناء إعداد عرض السعر.",
            },
          ],
          requestChecklist_en: [
            "Single-line diagram with the panel configuration",
            "Voltage class and fault level from your design",
            "Insulation preference and installation location",
            "Consultant or network operator specification",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المخطط أحادي الخط مع تكوين الخلايا",
            "فئة الجهد ومستوى القصر من التصميم لديكم",
            "نوع العزل المفضل ومكان التركيب",
            "مواصفات الاستشاري أو جهة تشغيل الشبكة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["ring-main-units", "distribution-transformers"],
          image: null,
          review: pending(
            "network-operator wording; source record's SEO/FAQ fields stay internal",
          ),
        },
        {
          id: "ring-main-units",
          linkedProductId: "ring-main-units",
          name_en: "Ring Main Units (RMU)",
          name_ar: "وحدات الحلقة الرئيسية (RMU)",
          summary_en:
            "Compact medium-voltage switching units for ring and underground cable distribution networks.",
          summary_ar:
            "وحدات تحويل مدمجة على الجهد المتوسط لشبكات التوزيع الحلقية وشبكات الكابلات الأرضية.",
          whatItIs_en:
            "A compact assembly of load-break switches and a protected transformer feeder in one enclosure, used at points along a ring network to switch and isolate cable sections.",
          whatItIs_ar:
            "مجموعة مدمجة من مفاتيح فصل الحمل ومغذٍّ محمي للمحول داخل غلاف واحد، تُستخدم عند نقاط على الشبكة الحلقية لتحويل أجزاء الكابلات وعزلها.",
          usedFor_en:
            "Secondary distribution points in urban, industrial-park and commercial-complex networks.",
          usedFor_ar:
            "نقاط التوزيع الثانوية في الشبكات الحضرية والمناطق الصناعية والمجمعات التجارية.",
          applications_en: [
            "Ring distribution networks",
            "Industrial park and commercial complex loops",
            "Cable network sectioning points",
            "Transformer feeder switching",
          ],
          applications_ar: [
            "شبكات التوزيع الحلقية",
            "الدوائر الحلقية للمناطق الصناعية والمجمعات التجارية",
            "نقاط فصل شبكات الكابلات",
            "تحويل مغذيات المحولات",
          ],
          industryIds: [
            "utilities-infrastructure",
            "industrial-facilities",
            "commercial-buildings",
          ],
          selectionFactors: [
            {
              factor_en: "Switching configuration",
              factor_ar: "تكوين التحويل",
              detail_en:
                "The number of cable and transformer feeder functions required at the point.",
              detail_ar:
                "عدد وظائف مغذيات الكابلات والمحولات المطلوبة عند النقطة.",
            },
            {
              factor_en: "Voltage class",
              factor_ar: "فئة الجهد",
              detail_en: "Taken from your network data.",
              detail_ar: "تُؤخذ من بيانات الشبكة لديكم.",
            },
            {
              factor_en: "Installation",
              factor_ar: "التركيب",
              detail_en: "Indoor, outdoor or kiosk installation.",
              detail_ar: "تركيب داخلي أو خارجي أو داخل كشك.",
            },
            {
              factor_en: "Network requirements",
              factor_ar: "اشتراطات الشبكة",
              detail_en:
                "Any requirements of the network operator form part of your specification and are reviewed during quotation.",
              detail_ar:
                "تُعد أي اشتراطات لجهة تشغيل الشبكة جزءًا من مواصفاتكم، وتُراجع أثناء إعداد عرض السعر.",
            },
          ],
          requestChecklist_en: [
            "Switching configuration (cable and transformer feeders)",
            "Voltage class from your network data",
            "Indoor, outdoor or kiosk installation",
            "Consultant or network operator specification",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "تكوين التحويل (مغذيات الكابلات والمحولات)",
            "فئة الجهد من بيانات الشبكة لديكم",
            "تركيب داخلي أو خارجي أو داخل كشك",
            "مواصفات الاستشاري أو جهة تشغيل الشبكة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["mv-switchgear", "distribution-transformers"],
          image: null,
          review: pending("RMU terminology"),
        },
        {
          id: "sub-distribution-boards",
          linkedProductId: "distribution-panel-boards",
          name_en: "Sub-Distribution Boards",
          name_ar: "لوحات التوزيع الفرعية",
          summary_en:
            "Distribution boards that protect and distribute final circuits on each floor, zone or plant area.",
          summary_ar:
            "لوحات توزيع لحماية الدوائر النهائية وتوزيعها في كل طابق أو منطقة أو قسم من المنشأة.",
          whatItIs_en:
            "Enclosures with an incoming device and outgoing miniature or moulded-case breakers and residual-current devices for final circuits, in single- or three-phase arrangements, surface or flush mounted.",
          whatItIs_ar:
            "أغلفة تضم جهاز دخول وقواطع صادرة مصغرة أو بغلاف مقولب وأجهزة حماية من التيار المتبقي للدوائر النهائية، بأنظمة أحادية أو ثلاثية الطور، للتركيب السطحي أو المدفون.",
          usedFor_en:
            "Floor and zone distribution in commercial, residential and industrial buildings.",
          usedFor_ar:
            "التوزيع على مستوى الطوابق والمناطق في المباني التجارية والسكنية والصناعية.",
          applications_en: [
            "Floor-by-floor distribution",
            "Lighting and small power circuits",
            "Air-conditioning and equipment sub-distribution",
            "Tenant distribution and metering",
          ],
          applications_ar: [
            "التوزيع على مستوى كل طابق",
            "دوائر الإنارة والقوى الصغيرة",
            "التوزيع الفرعي للتكييف والمعدات",
            "توزيع وقياس استهلاك المستأجرين",
          ],
          industryIds: [
            "commercial-buildings",
            "industrial-facilities",
            "healthcare-facilities",
          ],
          selectionFactors: [
            {
              factor_en: "Circuit schedule",
              factor_ar: "جدول الدوائر",
              detail_en:
                "The number of outgoing ways and the device on each, from your panel schedule.",
              detail_ar:
                "عدد المخارج والجهاز على كل منها وفق جدول اللوحة لديكم.",
            },
            {
              factor_en: "Phase and incoming rating",
              factor_ar: "الطور وقيمة الدخول",
              detail_en:
                "Single- or three-phase supply and the incoming rating.",
              detail_ar: "تغذية أحادية أو ثلاثية الطور وقيمة مدخل التغذية.",
            },
            {
              factor_en: "Protection devices",
              factor_ar: "أجهزة الحماية",
              detail_en:
                "The breaker and residual-current protection types required.",
              detail_ar:
                "أنواع القواطع وأجهزة الحماية من التيار المتبقي المطلوبة.",
            },
            {
              factor_en: "Mounting and environment",
              factor_ar: "التركيب وبيئة التشغيل",
              detail_en:
                "Surface or flush mounting, indoor or outdoor location, and enclosure protection.",
              detail_ar:
                "تركيب سطحي أو مدفون، داخلي أو خارجي، ودرجة حماية الغلاف.",
            },
          ],
          requestChecklist_en: [
            "Panel or circuit schedule",
            "Phase and incoming rating",
            "Mounting type and location",
            "Enclosure protection requirement",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "جدول اللوحة أو الدوائر",
            "الطور وقيمة مدخل التغذية",
            "نوع التركيب والمكان",
            "درجة حماية الغلاف المطلوبة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "main-lv-switchgear",
            "circuit-breakers-protection-devices",
          ],
          image: null,
          review: pending("device terminology"),
        },
        {
          id: "busbar-trunking-systems",
          linkedProductId: "busbar-trunking-systems",
          name_en: "Busbar Trunking Systems",
          name_ar: "أنظمة مجاري القضبان (Busbar Trunking)",
          summary_en:
            "Prefabricated busbar runs that carry high currents through risers and across large floor areas.",
          summary_ar:
            "مجاري قضبان مُصنّعة مسبقًا لنقل التيارات العالية عبر الأعمدة الصاعدة والمساحات الكبيرة، وتُعرف في السوق أيضًا بـ«باص داكت».",
          whatItIs_en:
            "Enclosed copper or aluminium conductors in sections, with tap-off points along the run, used as an alternative to large cable runs.",
          whatItIs_ar:
            "موصلات من النحاس أو الألومنيوم داخل غلاف على هيئة أجزاء، مع نقاط تفريع على امتداد المسار، وتُستخدم كبديل لمسارات الكابلات الكبيرة.",
          usedFor_en:
            "Rising mains in multi-storey buildings, overhead distribution in factories and warehouses, and links between transformers and switchgear.",
          usedFor_ar:
            "الأعمدة الصاعدة في المباني متعددة الطوابق، والتوزيع العلوي في المصانع والمستودعات، والربط بين المحولات ولوحات التوزيع.",
          applications_en: [
            "Rising mains in high-rise buildings",
            "Overhead distribution in industrial and warehouse facilities",
            "Data centre power distribution",
            "Transformer and switchgear interconnection",
          ],
          applications_ar: [
            "الأعمدة الصاعدة في المباني الشاهقة",
            "التوزيع العلوي في المنشآت الصناعية والمستودعات",
            "توزيع الطاقة في مراكز البيانات",
            "الربط بين المحولات ولوحات التوزيع",
          ],
          industryIds: [
            "commercial-buildings",
            "industrial-facilities",
            "warehouses-logistics",
            "data-telecom",
          ],
          selectionFactors: [
            {
              factor_en: "Current rating",
              factor_ar: "قيمة التيار",
              detail_en: "Taken from your design and load schedule.",
              detail_ar: "تُؤخذ من التصميم وجدول الأحمال لديكم.",
            },
            {
              factor_en: "Route",
              factor_ar: "المسار",
              detail_en:
                "Route length, bends and changes of level, from your layout drawings.",
              detail_ar:
                "طول المسار والانحناءات وتغيرات المنسوب وفق مخططات التوزيع لديكم.",
            },
            {
              factor_en: "Tap-off points",
              factor_ar: "نقاط التفريع",
              detail_en: "The number and position of tap-off units required.",
              detail_ar: "عدد ومواضع وحدات التفريع المطلوبة.",
            },
            {
              factor_en: "Conductor and environment",
              factor_ar: "الموصل وبيئة التركيب",
              detail_en:
                "Copper or aluminium conductors and the installation environment.",
              detail_ar: "موصلات من النحاس أو الألومنيوم وبيئة التركيب.",
            },
          ],
          requestChecklist_en: [
            "Current rating",
            "Route drawing and route length",
            "Number and position of tap-off points",
            "Conductor preference and environment",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "قيمة التيار",
            "مخطط المسار وطوله",
            "عدد ومواضع نقاط التفريع",
            "نوع الموصل المفضل وبيئة التركيب",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "main-lv-switchgear",
            "power-cables-cable-management",
          ],
          image: null,
          review: pending("AR term and market synonym باص داكت"),
        },
        {
          id: "distribution-transformers",
          name_en: "Distribution Transformers",
          name_ar: "محولات التوزيع",
          summary_en:
            "Transformers that step medium voltage down to the low voltage used by buildings and plants.",
          summary_ar:
            "محولات تخفض الجهد المتوسط إلى الجهد المنخفض المستخدم في المباني والمنشآت.",
          whatItIs_en:
            "Oil-immersed or dry-type transformers that supply a low-voltage distribution system from the medium-voltage network. The type and rating are selected according to the customer's specification.",
          whatItIs_ar:
            "محولات مغمورة بالزيت أو من النوع الجاف تغذي نظام توزيع الجهد المنخفض من شبكة الجهد المتوسط، ويُحدَّد نوعها وقدرتها وفق مواصفات العميل.",
          usedFor_en:
            "Supplying buildings, factories and sites from the medium-voltage network.",
          usedFor_ar: "تغذية المباني والمصانع والمواقع من شبكة الجهد المتوسط.",
          applications_en: [
            "Building and facility substations",
            "Industrial plant supply",
            "Package and kiosk substations",
            "Utility and infrastructure distribution points",
          ],
          applications_ar: [
            "المحطات الفرعية للمباني والمنشآت",
            "تغذية المنشآت الصناعية",
            "المحطات المدمجة ومحطات الأكشاك",
            "نقاط التوزيع في المرافق والبنية التحتية",
          ],
          industryIds: [
            "utilities-infrastructure",
            "industrial-facilities",
            "commercial-buildings",
          ],
          selectionFactors: [
            {
              factor_en: "Rating and voltages",
              factor_ar: "القدرة والجهود",
              detail_en:
                "The rated power and the primary and secondary voltages stated in your specification.",
              detail_ar:
                "القدرة المقننة والجهدان الابتدائي والثانوي كما توضحها مواصفاتكم.",
            },
            {
              factor_en: "Transformer type",
              factor_ar: "نوع المحول",
              detail_en:
                "Oil-immersed or dry-type, according to the installation location and your specification.",
              detail_ar: "مغمور بالزيت أو جاف، وفق مكان التركيب ومواصفاتكم.",
            },
            {
              factor_en: "Installation",
              factor_ar: "مكان التركيب",
              detail_en: "Indoor or outdoor location and the space available.",
              detail_ar: "مكان التركيب الداخلي أو الخارجي والمساحة المتاحة.",
            },
            {
              factor_en: "Network requirements",
              factor_ar: "اشتراطات الشبكة",
              detail_en:
                "Requirements of the network operator or consultant form part of your specification.",
              detail_ar:
                "تُعد اشتراطات جهة تشغيل الشبكة أو الاستشاري جزءًا من مواصفاتكم.",
            },
          ],
          requestChecklist_en: [
            "Rated power and voltages from your specification",
            "Oil-immersed or dry-type",
            "Indoor or outdoor installation",
            "Consultant or network operator specification",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "القدرة المقننة والجهود وفق مواصفاتكم",
            "مغمور بالزيت أو جاف",
            "تركيب داخلي أو خارجي",
            "مواصفات الاستشاري أو جهة تشغيل الشبكة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "mv-switchgear",
            "ring-main-units",
            "main-lv-switchgear",
          ],
          image: null,
          review: pending(
            "record-less supply category — high-level wording only, no specifications",
          ),
        },
        {
          id: "power-cables-cable-management",
          name_en: "Power Cables & Cable Management",
          name_ar: "كابلات القوى وأنظمة إدارة الكابلات",
          summary_en:
            "Low- and medium-voltage power cables and the trays, ladders and trunking that carry them.",
          summary_ar:
            "كابلات القوى للجهد المنخفض والمتوسط والحوامل والسلالم والمجاري التي تحملها.",
          whatItIs_en:
            "Power cables supplied to the conductor, insulation and armouring stated in your cable schedule, together with cable trays, ladders and trunking for routing and support.",
          whatItIs_ar:
            "كابلات قوى تُورَّد وفق نوع الموصل والعزل والتسليح الوارد في جدول الكابلات لديكم، مع حوامل وسلالم ومجاري الكابلات اللازمة لتوجيهها وتثبيتها.",
          usedFor_en:
            "Connecting switchgear, transformers, generators and loads across buildings and sites.",
          usedFor_ar:
            "الربط بين لوحات التوزيع والمحولات والمولدات والأحمال داخل المباني والمواقع.",
          applications_en: [
            "Feeders between switchgear, transformers and generators",
            "Building and plant cable distribution",
            "Cable routing on trays and ladders",
            "Site and external cable routes",
          ],
          applications_ar: [
            "المغذيات بين لوحات التوزيع والمحولات والمولدات",
            "توزيع الكابلات داخل المباني والمنشآت",
            "تمديد الكابلات على الحوامل والسلالم",
            "مسارات الكابلات الخارجية وفي المواقع",
          ],
          industryIds: [
            "industrial-facilities",
            "commercial-buildings",
            "utilities-infrastructure",
            "construction-sites",
          ],
          selectionFactors: [
            {
              factor_en: "Cable schedule",
              factor_ar: "جدول الكابلات",
              detail_en:
                "Cable type, size, number of cores and lengths, from your cable schedule.",
              detail_ar:
                "نوع الكابل ومقطعه وعدد أطرافه وأطواله وفق جدول الكابلات لديكم.",
            },
            {
              factor_en: "Voltage level",
              factor_ar: "مستوى الجهد",
              detail_en:
                "Low- or medium-voltage cables, as your design requires.",
              detail_ar: "كابلات جهد منخفض أو متوسط حسب التصميم لديكم.",
            },
            {
              factor_en: "Installation method",
              factor_ar: "طريقة التمديد",
              detail_en: "Buried, on trays or ladders, or in trunking.",
              detail_ar: "مدفونة أو على حوامل وسلالم أو داخل مجارٍ.",
            },
            {
              factor_en: "Cable management",
              factor_ar: "أنظمة إدارة الكابلات",
              detail_en:
                "The type and finish of trays, ladders and trunking for the environment.",
              detail_ar:
                "نوع الحوامل والسلالم والمجاري ونوع تشطيبها بما يناسب بيئة التركيب.",
            },
          ],
          requestChecklist_en: [
            "Cable schedule (type, size, cores and length)",
            "Voltage level",
            "Installation method",
            "Cable management type and finish",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "جدول الكابلات (النوع والمقطع وعدد الأطراف والطول)",
            "مستوى الجهد",
            "طريقة التمديد",
            "نوع أنظمة إدارة الكابلات وتشطيبها",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "busbar-trunking-systems",
            "main-lv-switchgear",
          ],
          image: null,
          review: pending(
            "record-less supply category — high-level wording only, no specifications",
          ),
        },
        {
          id: "circuit-breakers-protection-devices",
          name_en: "Circuit Breakers & Protection Devices",
          name_ar: "القواطع وأجهزة الحماية",
          summary_en:
            "Breakers and protection devices for switchboards, distribution boards and equipment circuits.",
          summary_ar:
            "قواطع وأجهزة حماية للوحات التوزيع الرئيسية والفرعية ودوائر المعدات.",
          whatItIs_en:
            "Air, moulded-case and miniature circuit breakers, residual-current devices and related protection devices, supplied as separate items according to the customer's device schedule.",
          whatItIs_ar:
            "قواطع هوائية وقواطع بغلاف مقولب وقواطع مصغرة وأجهزة حماية من التيار المتبقي وأجهزة الحماية المرتبطة بها، تُورَّد كبنود منفصلة وفق جدول الأجهزة لدى العميل.",
          usedFor_en: "Equipping new panels and extending existing boards.",
          usedFor_ar: "تجهيز اللوحات الجديدة وتوسعة اللوحات القائمة.",
          applications_en: [
            "Switchboard incomers and feeders",
            "Final circuit protection",
            "Motor circuit protection",
            "Extensions to existing boards",
          ],
          applications_ar: [
            "مداخل ومغذيات لوحات التوزيع",
            "حماية الدوائر النهائية",
            "حماية دوائر المحركات",
            "توسعة اللوحات القائمة",
          ],
          industryIds: [
            "industrial-facilities",
            "commercial-buildings",
            "healthcare-facilities",
          ],
          selectionFactors: [
            {
              factor_en: "Device type",
              factor_ar: "نوع الجهاز",
              detail_en:
                "Air, moulded-case or miniature breaker, residual-current device or other protection device.",
              detail_ar:
                "قاطع هوائي أو بغلاف مقولب أو مصغر، أو جهاز حماية من التيار المتبقي، أو جهاز حماية آخر.",
            },
            {
              factor_en: "Rating and breaking capacity",
              factor_ar: "القيمة وسعة القطع",
              detail_en:
                "Rated current, number of poles and breaking capacity, from your design.",
              detail_ar:
                "التيار المقنن وعدد الأقطاب وسعة القطع وفق التصميم لديكم.",
            },
            {
              factor_en: "Protection functions",
              factor_ar: "وظائف الحماية",
              detail_en:
                "Overload, short-circuit, earth-leakage or other functions required.",
              detail_ar:
                "الحماية من زيادة الحمل أو القصر أو التسرب الأرضي أو أي وظائف أخرى مطلوبة.",
            },
            {
              factor_en: "Mounting and compatibility",
              factor_ar: "التركيب والتوافق",
              detail_en:
                "Fixed, plug-in or withdrawable mounting, and compatibility with the board it will be fitted to.",
              detail_ar:
                "تركيب ثابت أو قابل للتوصيل أو للسحب، والتوافق مع اللوحة التي سيُركَّب بها.",
            },
          ],
          requestChecklist_en: [
            "Device schedule (type, poles and rating)",
            "Breaking capacity from your design",
            "Protection functions required",
            "Mounting type and board details",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "جدول الأجهزة (النوع وعدد الأقطاب والقيمة)",
            "سعة القطع وفق التصميم لديكم",
            "وظائف الحماية المطلوبة",
            "نوع التركيب وبيانات اللوحة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "sub-distribution-boards",
            "main-lv-switchgear",
          ],
          image: null,
          review: pending(
            "record-less supply category — high-level wording only, no specifications",
          ),
        },
      ],
    },

    // ------------------------------------------------------------------
    // Standby Power & Power Quality
    // ------------------------------------------------------------------
    {
      categoryId: "standby-power-systems",
      title_en: "Standby Power & Power Quality",
      title_ar: "الطاقة الاحتياطية وجودة الطاقة",
      intro_en:
        "Standby and power-quality equipment is specified from the loads it must support — what has to keep running, for how long, and how it changes over between sources.",
      intro_ar:
        "تُحدَّد معدات الطاقة الاحتياطية وجودة الطاقة وفق الأحمال التي يجب أن تدعمها، أي ما يجب أن يستمر في التشغيل ولأي مدة وكيف يتم التحويل بين مصادر التغذية.",
      icon: "Fuel",
      equipment: [
        {
          id: "diesel-generator-sets",
          linkedProductId: "diesel-generators",
          name_en: "Diesel Generator Sets",
          name_ar: "مجموعات توليد الديزل",
          summary_en: "Diesel generating sets for standby or prime power.",
          summary_ar:
            "مجموعات توليد بمحركات ديزل للطاقة الاحتياطية أو الأساسية، وتُعرف في السوق أيضًا بـ«جنريتور».",
          whatItIs_en:
            "A diesel engine coupled to an alternator with a control panel, supplied open, in a sound-attenuated canopy or containerised, for standby or continuous operation.",
          whatItIs_ar:
            "محرك ديزل مقترن بمولد تيار متردد مع لوحة تحكم، يُورَّد مكشوفًا أو داخل غطاء عازل للصوت أو داخل حاوية، للتشغيل الاحتياطي أو المستمر.",
          usedFor_en:
            "Keeping facilities running during mains failure, and supplying sites without a grid connection.",
          usedFor_ar:
            "استمرار تشغيل المنشآت أثناء انقطاع التيار العمومي، وتغذية المواقع غير المتصلة بالشبكة.",
          applications_en: [
            "Standby power for commercial and industrial facilities",
            "Backup power for hospitals, data centres and telecom sites",
            "Prime power for remote sites",
            "Temporary power for construction sites",
          ],
          applications_ar: [
            "الطاقة الاحتياطية للمنشآت التجارية والصناعية",
            "الطاقة الاحتياطية للمستشفيات ومراكز البيانات ومواقع الاتصالات",
            "الطاقة الأساسية للمواقع النائية",
            "الطاقة المؤقتة لمواقع الإنشاءات",
          ],
          industryIds: [
            "industrial-facilities",
            "healthcare-facilities",
            "data-telecom",
            "construction-sites",
            "remote-sites",
          ],
          selectionFactors: [
            {
              factor_en: "Load and duty",
              factor_ar: "الأحمال ونمط التشغيل",
              detail_en:
                "The load to be supplied and whether the set runs as standby or prime power.",
              detail_ar:
                "الأحمال المطلوب تغذيتها وما إذا كانت المجموعة ستعمل كمصدر احتياطي أو أساسي.",
            },
            {
              factor_en: "Output",
              factor_ar: "الخرج",
              detail_en: "The voltage, frequency and phase of the supply.",
              detail_ar: "الجهد والتردد وعدد الأطوار للتغذية.",
            },
            {
              factor_en: "Enclosure",
              factor_ar: "الغلاف",
              detail_en:
                "Open, sound-attenuated or containerised, according to the site.",
              detail_ar: "مكشوف أو عازل للصوت أو داخل حاوية، حسب الموقع.",
            },
            {
              factor_en: "Integration",
              factor_ar: "الربط والتكامل",
              detail_en:
                "Transfer switch, parallel operation and fuel autonomy requirements.",
              detail_ar:
                "متطلبات لوحة التحويل والتشغيل على التوازي ومدة التشغيل بخزان الوقود.",
            },
          ],
          requestChecklist_en: [
            "Load schedule or required power",
            "Standby or prime duty",
            "Voltage, frequency and phase",
            "Enclosure type and site conditions",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "جدول الأحمال أو القدرة المطلوبة",
            "تشغيل احتياطي أو أساسي",
            "الجهد والتردد وعدد الأطوار",
            "نوع الغلاف وظروف الموقع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["automatic-transfer-switches", "ups-systems"],
          image: null,
          review: pending("AR term and market synonym جنريتور"),
        },
        {
          id: "automatic-transfer-switches",
          linkedProductId: "automatic-transfer-switches",
          name_en: "Automatic Transfer Switches (ATS)",
          name_ar: "لوحات التحويل الآلي (ATS)",
          summary_en:
            "Panels that transfer the load automatically between the mains and the standby supply.",
          summary_ar:
            "لوحات تنقل الأحمال آليًا بين مصدر التغذية العمومية والمصدر الاحتياطي.",
          whatItIs_en:
            "An automatic transfer switch detects a failure of the normal supply, transfers the load to the standby source and returns it when the normal supply is restored.",
          whatItIs_ar:
            "تكتشف لوحة التحويل الآلي انقطاع التغذية العادية، فتنقل الأحمال إلى المصدر الاحتياطي، ثم تعيدها عند عودة التغذية العادية.",
          usedFor_en:
            "Generator changeover in buildings, hospitals, data centres and telecom sites.",
          usedFor_ar:
            "التحويل إلى المولد في المباني والمستشفيات ومراكز البيانات ومواقع الاتصالات.",
          applications_en: [
            "Generator changeover in commercial buildings",
            "Critical power for healthcare facilities",
            "Dual-source switching in data centres",
            "Telecom site supply redundancy",
          ],
          applications_ar: [
            "التحويل إلى المولد في المباني التجارية",
            "الطاقة الحرجة في المنشآت الصحية",
            "التحويل بين مصدرين في مراكز البيانات",
            "ازدواجية مصادر التغذية لمواقع الاتصالات",
          ],
          industryIds: [
            "commercial-buildings",
            "healthcare-facilities",
            "data-telecom",
            "industrial-facilities",
          ],
          selectionFactors: [
            {
              factor_en: "Current rating and poles",
              factor_ar: "قيمة التيار وعدد الأقطاب",
              detail_en: "Taken from the load and your single-line diagram.",
              detail_ar: "تُؤخذ من الأحمال والمخطط أحادي الخط لديكم.",
            },
            {
              factor_en: "Sources",
              factor_ar: "مصادر التغذية",
              detail_en: "Mains and generator, or two mains sources.",
              detail_ar: "التغذية العمومية والمولد، أو مصدرا تغذية عمومية.",
            },
            {
              factor_en: "Transition",
              factor_ar: "طريقة التحويل",
              detail_en:
                "Open or closed transition, as your specification requires.",
              detail_ar: "تحويل مفتوح أو مغلق حسب مواصفاتكم.",
            },
            {
              factor_en: "Integration",
              factor_ar: "الربط والتكامل",
              detail_en:
                "Connections to the generator controls and the building management system.",
              detail_ar: "الربط مع وحدة تحكم المولد ونظام إدارة المبنى.",
            },
          ],
          requestChecklist_en: [
            "Current rating and number of poles",
            "Sources to be switched",
            "Transition type",
            "Enclosure and installation location",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "قيمة التيار وعدد الأقطاب",
            "مصادر التغذية المطلوب التحويل بينها",
            "طريقة التحويل",
            "الغلاف ومكان التركيب",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["diesel-generator-sets", "ups-systems"],
          image: null,
          review: pending("ATS terminology"),
        },
        {
          id: "ups-systems",
          linkedProductId: "ups-systems",
          name_en: "Uninterruptible Power Supplies (UPS)",
          name_ar: "أنظمة الطاقة غير المنقطعة (UPS)",
          summary_en:
            "Battery-backed systems that keep critical loads running without interruption.",
          summary_ar:
            "أنظمة مدعومة بالبطاريات تُبقي الأحمال الحرجة في التشغيل دون انقطاع، وتُعرف في السوق أيضًا بـ«يو بي إس».",
          whatItIs_en:
            "A UPS supplies critical loads from batteries the moment the mains fails, bridging the gap until the standby generator takes over or the load is shut down safely.",
          whatItIs_ar:
            "يغذي نظام UPS الأحمال الحرجة من البطاريات لحظة انقطاع التيار العمومي، إلى أن يتولى المولد الاحتياطي التغذية أو يتم إيقاف الأحمال بأمان.",
          usedFor_en:
            "Protecting IT, control and medical loads from supply interruptions.",
          usedFor_ar:
            "حماية أحمال تقنية المعلومات والتحكم والأجهزة الطبية من انقطاع التغذية.",
          applications_en: [
            "Data centres and server rooms",
            "Critical loads in healthcare facilities",
            "Industrial process control",
            "Telecom equipment",
          ],
          applications_ar: [
            "مراكز البيانات وغرف الخوادم",
            "الأحمال الحرجة في المنشآت الصحية",
            "التحكم في العمليات الصناعية",
            "معدات الاتصالات",
          ],
          industryIds: [
            "data-telecom",
            "healthcare-facilities",
            "industrial-facilities",
          ],
          selectionFactors: [
            {
              factor_en: "Critical load",
              factor_ar: "الحمل الحرج",
              detail_en:
                "The load that must be supported without interruption.",
              detail_ar: "الحمل الذي يجب دعمه دون انقطاع.",
            },
            {
              factor_en: "Runtime",
              factor_ar: "زمن التشغيل الاحتياطي",
              detail_en: "The backup time you require at that load.",
              detail_ar: "زمن التشغيل الاحتياطي المطلوب عند هذا الحمل.",
            },
            {
              factor_en: "Topology and phase",
              factor_ar: "النوع وعدد الأطوار",
              detail_en:
                "Online or line-interactive, with single- or three-phase input and output.",
              detail_ar:
                "نظام أونلاين أو تفاعلي مع الخط، بدخل وخرج أحادي أو ثلاثي الطور.",
            },
            {
              factor_en: "Batteries and space",
              factor_ar: "البطاريات والمساحة",
              detail_en:
                "Battery type preference and the space available for the system.",
              detail_ar: "نوع البطاريات المفضل والمساحة المتاحة للنظام.",
            },
          ],
          requestChecklist_en: [
            "Critical load",
            "Required runtime",
            "Input and output phase",
            "Battery preference and installation space",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "الحمل الحرج",
            "زمن التشغيل الاحتياطي المطلوب",
            "عدد أطوار الدخل والخرج",
            "نوع البطاريات المفضل ومساحة التركيب",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "automatic-transfer-switches",
            "battery-chargers-rectifiers",
            "voltage-stabilizers",
          ],
          image: null,
          review: pending("UPS terminology; AR market synonym يو بي إس"),
        },
        {
          id: "voltage-stabilizers",
          linkedProductId: "voltage-stabilizers",
          name_en: "Voltage Stabilizers",
          name_ar: "منظمات الجهد",
          summary_en:
            "Equipment that corrects unstable supply voltage before it reaches sensitive loads.",
          summary_ar:
            "معدات تصحح تذبذب جهد التغذية قبل وصوله إلى الأحمال الحساسة، وتُعرف في السوق أيضًا بـ«ستابلايزر».",
          whatItIs_en:
            "Servo-controlled or static stabilizers that hold the output voltage steady when the input supply rises or falls.",
          whatItIs_ar:
            "منظمات بمحرك مؤازر أو إلكترونية ثابتة تحافظ على ثبات جهد الخرج عند ارتفاع جهد الدخل أو انخفاضه.",
          usedFor_en:
            "Protecting manufacturing, medical, laboratory and IT equipment in areas with an unstable supply.",
          usedFor_ar:
            "حماية معدات التصنيع والأجهزة الطبية والمعملية ومعدات تقنية المعلومات في المناطق ذات التغذية غير المستقرة.",
          applications_en: [
            "Sensitive manufacturing equipment",
            "Medical and laboratory equipment",
            "Telecom and IT equipment",
            "Irrigation pumps in weak-network areas",
          ],
          applications_ar: [
            "معدات التصنيع الحساسة",
            "الأجهزة الطبية والمعملية",
            "معدات الاتصالات وتقنية المعلومات",
            "مضخات الري في مناطق الشبكة الضعيفة",
          ],
          industryIds: [
            "industrial-facilities",
            "healthcare-facilities",
            "data-telecom",
          ],
          selectionFactors: [
            {
              factor_en: "Load and phase",
              factor_ar: "الحمل وعدد الأطوار",
              detail_en:
                "The load power and whether it is single- or three-phase.",
              detail_ar: "قدرة الحمل وما إذا كان أحادي أو ثلاثي الطور.",
            },
            {
              factor_en: "Input variation",
              factor_ar: "تذبذب جهد الدخل",
              detail_en: "The range of supply variation observed on site.",
              detail_ar: "مدى تذبذب جهد التغذية الملاحظ في الموقع.",
            },
            {
              factor_en: "Correction type",
              factor_ar: "طريقة التصحيح",
              detail_en: "Servo-controlled or static, according to the load.",
              detail_ar: "بمحرك مؤازر أو إلكترونية ثابتة حسب نوع الحمل.",
            },
            {
              factor_en: "Installation",
              factor_ar: "التركيب",
              detail_en:
                "Wall-mounted or floor-standing, and the indoor location.",
              detail_ar:
                "تركيب على الحائط أو على الأرض، ومكان التركيب الداخلي.",
            },
          ],
          requestChecklist_en: [
            "Load power and phase",
            "Observed input voltage variation",
            "Type of load",
            "Installation location",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "قدرة الحمل وعدد الأطوار",
            "مدى تذبذب جهد الدخل الملاحظ",
            "نوع الحمل",
            "مكان التركيب",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["ups-systems", "automatic-transfer-switches"],
          image: null,
          review: pending("AR term and market synonym ستابلايزر"),
        },
        {
          id: "battery-chargers-rectifiers",
          linkedProductId: "battery-chargers-rectifiers",
          name_en: "Battery Chargers & Rectifiers",
          name_ar: "شواحن البطاريات والمقومات",
          summary_en:
            "Chargers that keep DC battery systems ready for control, protection and emergency loads.",
          summary_ar:
            "شواحن تحافظ على جاهزية أنظمة بطاريات التيار المستمر لأحمال التحكم والحماية والطوارئ.",
          whatItIs_en:
            "Rectifier-chargers that supply DC loads and maintain battery banks in float and boost charging modes, for switchgear control, telecom and emergency systems.",
          whatItIs_ar:
            "مقومات وشواحن تغذي أحمال التيار المستمر وتحافظ على بنوك البطاريات بأنماط الشحن المستمر والسريع، لأنظمة التحكم في لوحات التوزيع والاتصالات والطوارئ.",
          usedFor_en:
            "DC control and tripping supplies, telecom battery banks and emergency lighting batteries.",
          usedFor_ar:
            "تغذية دوائر التحكم والفصل بالتيار المستمر، وبنوك بطاريات الاتصالات، وبطاريات إضاءة الطوارئ.",
          applications_en: [
            "Switchgear control and tripping supplies",
            "Substation protection and control power",
            "Telecom battery banks",
            "Emergency lighting battery systems",
          ],
          applications_ar: [
            "تغذية دوائر التحكم والفصل في لوحات التوزيع",
            "تغذية الحماية والتحكم في المحطات الفرعية",
            "بنوك بطاريات الاتصالات",
            "أنظمة بطاريات إضاءة الطوارئ",
          ],
          industryIds: [
            "utilities-infrastructure",
            "data-telecom",
            "industrial-facilities",
          ],
          selectionFactors: [
            {
              factor_en: "DC voltage and load",
              factor_ar: "جهد التيار المستمر والحمل",
              detail_en: "The DC system voltage and the load it supplies.",
              detail_ar: "جهد نظام التيار المستمر والحمل الذي يغذيه.",
            },
            {
              factor_en: "Battery type and capacity",
              factor_ar: "نوع البطاريات وسعتها",
              detail_en: "The battery bank the charger must maintain.",
              detail_ar: "بنك البطاريات الذي يجب أن يحافظ الشاحن عليه.",
            },
            {
              factor_en: "Charging modes",
              factor_ar: "أنماط الشحن",
              detail_en: "Float and boost charging, and any alarms required.",
              detail_ar: "الشحن المستمر والسريع وأي إنذارات مطلوبة.",
            },
            {
              factor_en: "Installation",
              factor_ar: "التركيب",
              detail_en: "Wall-mounted or floor-standing cabinet and location.",
              detail_ar: "خزانة على الحائط أو على الأرض ومكان التركيب.",
            },
          ],
          requestChecklist_en: [
            "DC system voltage",
            "Battery type and capacity",
            "DC load",
            "Installation location",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "جهد نظام التيار المستمر",
            "نوع البطاريات وسعتها",
            "حمل التيار المستمر",
            "مكان التركيب",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["ups-systems", "main-lv-switchgear"],
          image: null,
          review: pending("DC system wording"),
        },
      ],
    },

    // ------------------------------------------------------------------
    // Lighting, Solar & Energy Storage
    // ------------------------------------------------------------------
    {
      categoryId: "industrial-lighting-solar",
      title_en: "Lighting, Solar & Energy Storage",
      title_ar: "الإنارة والطاقة الشمسية وتخزين الطاقة",
      intro_en:
        "Lighting is specified from the area, mounting height and environment; solar and storage from the site, the energy use and how the system connects to the network.",
      intro_ar:
        "تُحدَّد الإنارة وفق المساحة وارتفاع التركيب وبيئة التشغيل، بينما تُحدَّد أنظمة الطاقة الشمسية والتخزين وفق الموقع والاستهلاك وطريقة الربط بالشبكة.",
      icon: "Lightbulb",
      equipment: [
        {
          id: "led-industrial-lighting",
          linkedProductId: "led-industrial-lighting",
          name_en: "LED Industrial Lighting",
          name_ar: "وحدات الإنارة الصناعية LED",
          summary_en:
            "LED high-bay and low-bay luminaires for factories, warehouses and workshops.",
          summary_ar:
            "وحدات إنارة LED للأسقف المرتفعة والمنخفضة في المصانع والمستودعات والورش، وتُعرف في السوق أيضًا بـ«كشافات هاي باي».",
          whatItIs_en:
            "LED luminaires for high and low ceilings, with optics, housings and control options selected for the space and the environment.",
          whatItIs_ar:
            "وحدات إنارة LED للأسقف المرتفعة والمنخفضة، تُختار عدساتها وأغلفتها وخيارات التحكم فيها وفق المساحة وبيئة التشغيل.",
          usedFor_en:
            "General lighting of production floors, warehouses, cold stores and workshops.",
          usedFor_ar:
            "الإنارة العامة لصالات الإنتاج والمستودعات وغرف التبريد والورش.",
          applications_en: [
            "Warehouse and distribution centre lighting",
            "Production floor lighting",
            "Cold storage lighting",
            "Workshop and loading dock lighting",
          ],
          applications_ar: [
            "إنارة المستودعات ومراكز التوزيع",
            "إنارة صالات الإنتاج",
            "إنارة غرف التبريد",
            "إنارة الورش وأرصفة التحميل",
          ],
          industryIds: ["industrial-facilities", "warehouses-logistics"],
          selectionFactors: [
            {
              factor_en: "Area and mounting height",
              factor_ar: "المساحة وارتفاع التركيب",
              detail_en: "The dimensions of the space and the mounting height.",
              detail_ar: "أبعاد المساحة وارتفاع تركيب وحدات الإنارة.",
            },
            {
              factor_en: "Required lighting level",
              factor_ar: "مستوى الإنارة المطلوب",
              detail_en:
                "The lighting level stated in your specification or lighting layout.",
              detail_ar:
                "مستوى الإنارة الوارد في مواصفاتكم أو مخطط الإنارة لديكم.",
            },
            {
              factor_en: "Environment",
              factor_ar: "بيئة التشغيل",
              detail_en: "Dust, moisture, temperature or washdown conditions.",
              detail_ar: "الأتربة أو الرطوبة أو درجة الحرارة أو ظروف الغسيل.",
            },
            {
              factor_en: "Controls",
              factor_ar: "التحكم",
              detail_en: "Dimming, sensors or switching arrangements.",
              detail_ar: "خفض الإضاءة أو الحساسات أو طريقة التشغيل والإطفاء.",
            },
          ],
          requestChecklist_en: [
            "Area dimensions and mounting height",
            "Required lighting level or lighting layout",
            "Environment",
            "Controls required",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "أبعاد المساحة وارتفاع التركيب",
            "مستوى الإنارة المطلوب أو مخطط الإنارة",
            "بيئة التشغيل",
            "طريقة التحكم المطلوبة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["high-mast-lighting"],
          image: null,
          review: pending("AR term and market synonym كشافات هاي باي"),
        },
        {
          id: "high-mast-lighting",
          linkedProductId: "high-mast-lighting",
          name_en: "High Mast Lighting",
          name_ar: "أعمدة الإنارة العالية",
          summary_en:
            "Tall lighting masts that light large outdoor areas from a small number of points.",
          summary_ar:
            "أعمدة إنارة عالية تضيء المساحات الخارجية الكبيرة من عدد محدود من النقاط، وتُعرف في السوق أيضًا بـ«هاي ماست».",
          whatItIs_en:
            "Galvanised steel masts carrying a ring of floodlights, usually with a lowering system so the luminaires can be reached from the ground.",
          whatItIs_ar:
            "أعمدة من الصلب المجلفن تحمل حلقة من الكشافات، وغالبًا ما تُزوّد بنظام إنزال يتيح الوصول إلى وحدات الإنارة من مستوى الأرض.",
          usedFor_en:
            "Lighting ports, yards, car parks and open storage areas.",
          usedFor_ar:
            "إنارة الموانئ والساحات ومواقف السيارات ومناطق التخزين المفتوحة.",
          applications_en: [
            "Port and container yards",
            "Open storage and laydown areas",
            "Car parks and vehicle compounds",
            "Industrial and logistics yards",
          ],
          applications_ar: [
            "ساحات الموانئ والحاويات",
            "مناطق التخزين المفتوحة",
            "مواقف السيارات وساحات المركبات",
            "الساحات الصناعية واللوجستية",
          ],
          industryIds: [
            "ports-yards",
            "warehouses-logistics",
            "industrial-facilities",
          ],
          selectionFactors: [
            {
              factor_en: "Area and layout",
              factor_ar: "المساحة والمخطط",
              detail_en: "The area to be lit, from your site plan.",
              detail_ar: "المساحة المطلوب إنارتها وفق المخطط العام للموقع.",
            },
            {
              factor_en: "Mast height and number",
              factor_ar: "ارتفاع الأعمدة وعددها",
              detail_en:
                "Selected for the area to be lit, from your layout or lighting design.",
              detail_ar:
                "يُحدَّدان وفق المساحة المطلوب إنارتها ومخطط الإنارة لديكم.",
            },
            {
              factor_en: "Luminaires",
              factor_ar: "الكشافات",
              detail_en: "The number and type of floodlights on each mast.",
              detail_ar: "عدد الكشافات على كل عمود ونوعها.",
            },
            {
              factor_en: "Site conditions",
              factor_ar: "ظروف الموقع",
              detail_en:
                "Foundations, wind exposure and site access are defined by the project.",
              detail_ar:
                "تُحدَّد الأساسات والتعرض للرياح وإمكانية الوصول إلى الموقع ضمن المشروع.",
            },
          ],
          requestChecklist_en: [
            "Site plan and area to be lit",
            "Preferred mast height or number of masts",
            "Required lighting level",
            "Site conditions",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المخطط العام للموقع والمساحة المطلوب إنارتها",
            "ارتفاع الأعمدة أو عددها المفضل",
            "مستوى الإنارة المطلوب",
            "ظروف الموقع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["led-industrial-lighting"],
          image: null,
          review: pending("AR term and market synonym هاي ماست"),
        },
        {
          id: "solar-pv-modules-inverters",
          linkedProductId: "solar-pv-systems",
          name_en: "Solar PV Modules & Inverters",
          name_ar: "ألواح الطاقة الشمسية والإنفرترات",
          summary_en:
            "Solar modules and inverters for rooftop and ground-mounted generation.",
          summary_ar:
            "ألواح شمسية وإنفرترات لتوليد الطاقة على الأسطح أو على الأرض.",
          whatItIs_en:
            "Photovoltaic modules convert sunlight into DC power, and inverters convert it to AC for the facility or the network. Mounting structures are selected for roof or ground installation.",
          whatItIs_ar:
            "تحوّل الألواح الكهروضوئية ضوء الشمس إلى تيار مستمر، وتحوّله الإنفرترات إلى تيار متردد للمنشأة أو للشبكة، وتُختار هياكل التثبيت للتركيب على الأسطح أو على الأرض.",
          usedFor_en:
            "Generating power on industrial and commercial roofs and land, and in off-grid or hybrid systems.",
          usedFor_ar:
            "توليد الطاقة على أسطح وأراضي المنشآت الصناعية والتجارية، وفي الأنظمة المستقلة أو الهجينة.",
          applications_en: [
            "Industrial and warehouse rooftops",
            "Commercial building rooftops",
            "Ground-mounted arrays",
            "Off-grid and hybrid systems for remote sites",
          ],
          applications_ar: [
            "أسطح المنشآت الصناعية والمستودعات",
            "أسطح المباني التجارية",
            "المحطات الشمسية الأرضية",
            "الأنظمة المستقلة والهجينة للمواقع النائية",
          ],
          industryIds: [
            "industrial-facilities",
            "commercial-buildings",
            "warehouses-logistics",
            "remote-sites",
          ],
          selectionFactors: [
            {
              factor_en: "Site",
              factor_ar: "الموقع",
              detail_en: "Roof or land area, orientation and shading.",
              detail_ar: "مساحة السطح أو الأرض والاتجاه والتظليل.",
            },
            {
              factor_en: "Energy use and target",
              factor_ar: "الاستهلاك والهدف",
              detail_en: "Your consumption and the generation target you set.",
              detail_ar: "الاستهلاك لديكم والهدف الذي تحددونه للتوليد.",
            },
            {
              factor_en: "System type",
              factor_ar: "نوع النظام",
              detail_en: "Grid-tied, off-grid or hybrid.",
              detail_ar: "متصل بالشبكة أو مستقل أو هجين.",
            },
            {
              factor_en: "Inverters and mounting",
              factor_ar: "الإنفرترات والتثبيت",
              detail_en:
                "String or central inverters, and roof or ground mounting.",
              detail_ar:
                "إنفرترات موزعة أو مركزية، وتثبيت على السطح أو على الأرض.",
            },
          ],
          requestChecklist_en: [
            "Roof or site area and photos",
            "Electricity consumption or bills",
            "Grid-tied, off-grid or hybrid",
            "Inverter and mounting preference",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "مساحة السطح أو الموقع وصوره",
            "الاستهلاك الكهربائي أو الفواتير",
            "متصل بالشبكة أو مستقل أو هجين",
            "الإنفرتر وطريقة التثبيت المفضلة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["battery-energy-storage-systems"],
          image: null,
          review: pending(
            "equipment supply only — no system design or installation; AR إنفرتر",
          ),
        },
        {
          id: "battery-energy-storage-systems",
          linkedProductId: "battery-energy-storage-systems",
          name_en: "Battery Energy Storage Systems",
          name_ar: "أنظمة تخزين الطاقة بالبطاريات",
          summary_en:
            "Battery systems that store energy for later use, from solar generation or the network.",
          summary_ar:
            "أنظمة بطاريات تخزن الطاقة لاستخدامها لاحقًا، من التوليد الشمسي أو من الشبكة.",
          whatItIs_en:
            "Battery modules with a battery management system and power conversion, in indoor cabinets or outdoor containers.",
          whatItIs_ar:
            "وحدات بطاريات مع نظام لإدارة البطاريات ووحدات لتحويل الطاقة، داخل خزائن داخلية أو حاويات خارجية.",
          usedFor_en:
            "Storing solar energy for use outside daylight hours, reducing peak demand and supporting critical loads.",
          usedFor_ar:
            "تخزين الطاقة الشمسية لاستخدامها خارج ساعات النهار، وخفض ذروة الطلب، ودعم الأحمال الحرجة.",
          applications_en: [
            "Solar self-consumption",
            "Peak demand reduction",
            "Backup for critical facilities",
            "Hybrid and off-grid systems",
          ],
          applications_ar: [
            "الاستهلاك الذاتي للطاقة الشمسية",
            "خفض ذروة الطلب",
            "الطاقة الاحتياطية للمنشآت الحرجة",
            "الأنظمة الهجينة والمستقلة عن الشبكة",
          ],
          industryIds: [
            "industrial-facilities",
            "commercial-buildings",
            "remote-sites",
          ],
          selectionFactors: [
            {
              factor_en: "Use case",
              factor_ar: "طبيعة الاستخدام",
              detail_en:
                "Solar self-consumption, peak reduction or backup — or a combination.",
              detail_ar:
                "الاستهلاك الذاتي للطاقة الشمسية أو خفض الذروة أو الطاقة الاحتياطية، أو مزيج منها.",
            },
            {
              factor_en: "Energy and power",
              factor_ar: "سعة التخزين والقدرة",
              detail_en: "The storage energy and power you require.",
              detail_ar: "سعة التخزين والقدرة المطلوبتان.",
            },
            {
              factor_en: "Integration",
              factor_ar: "الربط",
              detail_en: "Connection to solar, the network or a generator.",
              detail_ar: "الربط مع الطاقة الشمسية أو الشبكة أو المولد.",
            },
            {
              factor_en: "Installation",
              factor_ar: "التركيب",
              detail_en:
                "Indoor cabinet or outdoor container, and site conditions.",
              detail_ar: "خزانة داخلية أو حاوية خارجية، وظروف الموقع.",
            },
          ],
          requestChecklist_en: [
            "Intended use",
            "Required storage energy and power",
            "Connection to solar, network or generator",
            "Installation location",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "طبيعة الاستخدام المطلوبة",
            "سعة التخزين والقدرة المطلوبتان",
            "الربط مع الطاقة الشمسية أو الشبكة أو المولد",
            "مكان التركيب",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["solar-pv-modules-inverters", "ups-systems"],
          image: null,
          review: pending(
            "commercial and industrial scope only — no grid-services wording",
          ),
        },
      ],
    },
  ],

  replacement: {
    title_en: "Replacing Existing Equipment?",
    title_ar: "هل تستبدل معدة موجودة؟",
    intro_en:
      "If you are replacing generator sets, transfer switches, UPS, voltage stabilizers, battery chargers and rectifiers, sub-distribution boards, or industrial and high-mast lighting already in service, start from the existing equipment. Other equipment on this page is quoted against your project documents.",
    intro_ar:
      "إذا كنتم تستبدلون مجموعات توليد ديزل أو لوحات تحويل آلي أو أنظمة UPS أو منظمات جهد أو شواحن بطاريات ومقومات أو لوحات توزيع فرعية أو وحدات إنارة صناعية أو أعمدة إنارة عالية قائمة في الخدمة، فابدأوا من المعدة الحالية. أما باقي المعدات في هذه الصفحة فيتم إعداد عروض أسعارها وفق مستندات مشروعكم.",
    flowTitle_en: "How a replacement request works",
    flowTitle_ar: "كيف يتم التعامل مع طلب الاستبدال",
    flow_en: [
      "Existing equipment",
      "Model or nameplate",
      "Photos",
      "Existing technical information",
      "Quantity",
      "Technical review",
      "Matching or technically suitable alternative",
      "Quotation",
    ],
    flow_ar: [
      "المعدة الحالية",
      "الطراز أو اللوحة التعريفية",
      "الصور",
      "البيانات الفنية المتاحة",
      "العدد المطلوب",
      "المراجعة الفنية",
      "معدة مطابقة أو بديل مناسب فنيًا",
      "عرض السعر",
    ],
    groups: [
      {
        title_en: "All equipment",
        title_ar: "لجميع المعدات",
        items_en: [
          "Equipment type",
          "Nameplate photo and model",
          "Photos of the equipment and its installation",
          "Quantity",
          "Site or project",
          "Existing technical information, if available",
          "Required timing",
        ],
        items_ar: [
          "نوع المعدة",
          "صورة اللوحة التعريفية والطراز",
          "صور المعدة وطريقة تركيبها",
          "العدد المطلوب",
          "الموقع أو المشروع",
          "البيانات الفنية المتاحة إن وُجدت",
          "التوقيت المطلوب",
        ],
      },
      {
        title_en: "Generator sets & transfer switches",
        title_ar: "مجموعات التوليد ولوحات التحويل الآلي",
        items_en: [
          "Generator nameplate (engine and alternator)",
          "Rated output and standby or prime duty",
          "Voltage, frequency and phase",
          "Transfer switch rating and number of poles",
          "Enclosure type",
        ],
        items_ar: [
          "اللوحة التعريفية للمولد (المحرك ومولد التيار)",
          "القدرة المقننة والتشغيل الاحتياطي أو الأساسي",
          "الجهد والتردد وعدد الأطوار",
          "قيمة لوحة التحويل وعدد الأقطاب",
          "نوع الغلاف",
        ],
      },
      {
        title_en: "UPS, stabilizers & chargers",
        title_ar: "أنظمة UPS ومنظمات الجهد والشواحن",
        items_en: [
          "Nameplate and model",
          "Load and required runtime (UPS)",
          "Input and output phase",
          "DC voltage and battery details (chargers)",
          "Installation space",
        ],
        items_ar: [
          "اللوحة التعريفية والطراز",
          "الحمل وزمن التشغيل الاحتياطي المطلوب (UPS)",
          "عدد أطوار الدخل والخرج",
          "جهد التيار المستمر وبيانات البطاريات (الشواحن)",
          "مساحة التركيب",
        ],
      },
      {
        title_en: "Sub-distribution boards",
        title_ar: "لوحات التوزيع الفرعية",
        items_en: [
          "Photos of the board and its circuit labels",
          "Circuit schedule",
          "Incoming rating and phase",
          "Mounting and enclosure",
        ],
        items_ar: [
          "صور اللوحة وبطاقات الدوائر",
          "جدول الدوائر",
          "قيمة مدخل التغذية وعدد الأطوار",
          "طريقة التركيب والغلاف",
        ],
      },
      {
        title_en: "Industrial & high-mast lighting",
        title_ar: "الإنارة الصناعية وأعمدة الإنارة العالية",
        items_en: [
          "Photos and labels of the existing fittings or masts",
          "Quantity",
          "Mounting height",
          "Environment",
        ],
        items_ar: [
          "صور وبطاقات وحدات الإنارة أو الأعمدة الحالية",
          "العدد المطلوب",
          "ارتفاع التركيب",
          "بيئة التشغيل",
        ],
      },
    ],
    note_en:
      "GOLTENS reviews the available equipment information and can source a matching or technically suitable alternative for quotation. Final equivalence and suitability should be confirmed by the customer's engineering team.",
    note_ar:
      "تراجع GOLTENS بيانات المعدة المتاحة ويمكنها توفير معدة مطابقة أو بديل مناسب فنيًا ضمن عرض السعر، على أن يتم تأكيد التكافؤ والملاءمة النهائية من جانب الفريق الهندسي لدى العميل.",
    ctaLabel_en: "Request a quotation for replacement equipment",
    ctaLabel_ar: "اطلب عرض سعر لمعدة بديلة",
    prefill_en: "Replacement of existing electrical equipment",
    prefill_ar: "استبدال معدة كهربائية قائمة",
  },

  request: {
    title_en: "What to Include in Your Quotation Request",
    title_ar: "ما الذي يجب إرساله مع طلب عرض السعر",
    intro_en:
      "Electrical and energy requests are document-driven. Send the documents and information you have — these are your inputs, and missing details can be clarified during quotation.",
    intro_ar:
      "تعتمد طلبات معدات الكهرباء والطاقة على المستندات. أرسلوا ما يتوفر لديكم من مستندات وبيانات، فهي مدخلاتكم، ويمكن استكمال أي بيانات ناقصة أثناء إعداد عرض السعر.",
    checklistTitle_en: "Minimum information",
    checklistTitle_ar: "الحد الأدنى من البيانات",
    checklist_en: [
      "Equipment type",
      "Quantity",
      "Application or service",
      "System voltage, where applicable",
      "The relevant technical requirement",
      "Delivery location",
      "Required timing",
      "Project or tender reference",
      "Single-line diagram, load schedule, BOQ or specification, where applicable",
    ],
    checklist_ar: [
      "نوع المعدة",
      "العدد المطلوب",
      "طبيعة الاستخدام أو الخدمة",
      "جهد النظام حسب الحاجة",
      "المتطلب الفني ذو الصلة",
      "مكان التسليم",
      "التوقيت المطلوب",
      "مرجع المشروع أو المناقصة",
      "المخطط أحادي الخط أو جدول الأحمال أو جدول الكميات (BOQ) أو المواصفات حسب الحاجة",
    ],
    secondaryChecklist: {
      title_en: "Useful technical information",
      title_ar: "بيانات فنية مفيدة",
      items_en: [
        "Current",
        "Frequency",
        "Phase",
        "Power",
        "Voltage class",
        "Fault level, where provided in your design",
        "Enclosure and environment",
        "Indoor or outdoor installation",
        "IP rating, where applicable",
        "Installation type",
        "Cable entry",
        "Route length for busbar or cable requirements",
        "Generator duty",
        "Required UPS runtime",
        "Solar site or roof information",
        "Existing nameplate or model",
        "Photos",
        "Existing system information",
      ],
      items_ar: [
        "التيار",
        "التردد",
        "عدد الأطوار",
        "القدرة",
        "فئة الجهد",
        "مستوى القصر إذا كان وارداً في التصميم لديكم",
        "الغلاف وبيئة التشغيل",
        "تركيب داخلي أو خارجي",
        "درجة الحماية (IP) حسب الحاجة",
        "نوع التركيب",
        "طريقة دخول الكابلات",
        "طول المسار لمتطلبات مجاري القضبان أو الكابلات",
        "نمط تشغيل المولد",
        "زمن تشغيل UPS المطلوب",
        "بيانات الموقع أو السطح للطاقة الشمسية",
        "اللوحة التعريفية أو الطراز للمعدة الحالية",
        "الصور",
        "بيانات النظام القائم",
      ],
    },
    checklistNote_en:
      "You can include several electrical and energy equipment requirements in one quotation request. If you are not sure about a detail, leave it out — our team will ask for what is needed to complete the quotation.",
    checklistNote_ar:
      "يمكنكم إدراج عدة متطلبات من معدات الكهرباء والطاقة ضمن طلب عرض سعر واحد. وإذا لم تكونوا متأكدين من أحد البيانات يمكنكم تركه، وسيطلب فريقنا ما يلزم لاستكمال عرض السعر.",
    processTitle_en: "How GOLTENS handles the request",
    processTitle_ar: "كيف تتعامل GOLTENS مع الطلب",
    steps: [
      {
        title_en: "Requirement",
        title_ar: "استلام المتطلبات",
        description_en:
          "Send your requirement through the quotation form on this page, with your single-line diagram, schedules, BOQ, specification or nameplate photos.",
        description_ar:
          "أرسلوا متطلباتكم من خلال نموذج طلب عرض السعر في هذه الصفحة، مع المخطط أحادي الخط أو الجداول أو جدول الكميات أو المواصفات أو صور اللوحات التعريفية.",
      },
      {
        title_en: "Technical information review",
        title_ar: "مراجعة البيانات الفنية المتاحة",
        description_en:
          "Our team reviews the documents you send and asks for anything needed to define the equipment.",
        description_ar:
          "يراجع فريقنا المستندات المرسلة ويطلب أي بيانات إضافية لازمة لتحديد المعدة.",
      },
      {
        title_en: "Sourcing and configuration",
        title_ar: "تحديد المعدة أو البديل المناسب للتوريد",
        description_en:
          "We identify the equipment, or a technically suitable alternative, that matches your documents and specification for supply.",
        description_ar:
          "نحدد المعدة أو البديل المناسب فنيًا الذي يطابق مستنداتكم ومواصفاتكم للتوريد.",
      },
      {
        title_en: "Quotation",
        title_ar: "إعداد عرض السعر",
        description_en:
          "You receive a quotation stating the proposed equipment, its configuration, availability and lead time, for review by your engineering team.",
        description_ar:
          "تتسلمون عرض سعر يوضح المعدة المقترحة وتكوينها وتوافرها ومدة التوريد لمراجعته من جانب الفريق الهندسي لديكم.",
      },
    ],
  },

  quote: {
    title_en: "Request a Quote",
    title_ar: "اطلب عرض سعر",
    subtitle_en:
      "Tell us what you need — equipment type, application, quantity and the documents you have. Equipment is available on request.",
    subtitle_ar:
      "أخبرونا بما تحتاجونه: نوع المعدة وطبيعة الاستخدام والعدد والمستندات المتاحة لديكم. المعدات متاحة حسب الطلب.",
  },
};
