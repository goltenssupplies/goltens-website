import type {
  EquipmentGuideReview,
  SectorEquipmentGuide,
  SectorFaq,
  SectorHeroCopy,
} from "@/data/sector-content/types";

/**
 * Fire Protection — fire protection equipment procurement guide
 * (application matrix, four equipment families — fire pumps & water
 * supply, fire valves / hydrants / riser equipment, sprinklers / hose /
 * portable equipment, detection / alarm / emergency lighting — a limited
 * replacement path, and a two-part, document-driven quotation checklist).
 * Rendered by `app/[locale]/sectors/[slug]/page.tsx` via
 * `SectorContent.equipmentGuide`.
 *
 * Content rules (enforced by `scripts/verify-equipment-guides.mjs`):
 * - Approved scope only: the 21 equipment guides below, "Available on
 *   request." — supplyable against the customer's requirement, never
 *   stock. Special-hazard suppression (clean-agent, CO2, foam and gas
 *   suppression systems) is excluded from this version: no guide, no
 *   family and no trade names.
 * - The 30 `data/products/fire-protection/*` records are internal source
 *   material only: they stay non-public and are never linked.
 * - Fire protection requests are document-driven: the customer or
 *   consultant provides the approved design, BOQ, specification and any
 *   listing / approval criteria. GOLTENS supplies against those
 *   requirements only — it does not design, size, calculate, certify,
 *   approve, install, test, commission or maintain, and no wording may
 *   imply it. The only places these words appear are the customer-input
 *   phrases and the scope disclaimer allow-listed in the guard.
 * - Replacement / equivalent sourcing is limited to valves, hydrants, hose
 *   equipment, cabinets, portable extinguishers, emergency lighting and
 *   exit signs, with final equivalence confirmed by the customer's
 *   consultant, engineering team or responsible authority. Pumps,
 *   controllers, drivers, fire alarm panels and detectors are quoted
 *   against the specification and compatibility requirements only.
 * - No manufacturer names, numeric ranges, standards, listings,
 *   certifications, warranty, after-sales, stock or delivery claims.
 * - Arabic: «محابس» for fire protection valves; market terms (سبرينكلر،
 *   جوكي، لاندنج، Beam) appear only alongside the Arabic name.
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
const CHECKLIST_CLOSING_AR = "العدد المطلوب ومكان التسليم والتوقيت المطلوب";

/** Sector-page hero copy (replaces the `data/sectors.ts` subtitle/description on this page only). */
export const fireProtectionHero: SectorHeroCopy = {
  subtitle_en:
    "GOLTENS supplies fire protection equipment according to your project requirements, technical specifications and customer or consultant-approved documentation.",
  subtitle_ar:
    "توفر GOLTENS معدات مكافحة الحريق وفق متطلبات المشروع والمواصفات الفنية والمستندات المعتمدة من العميل أو الاستشاري.",
  description_en:
    "Fire pumps, valves, sprinklers, detection and alarm equipment, emergency lighting and portable fire protection equipment are supplied according to the requirements provided for quotation. Availability and configuration are confirmed during quotation.",
  description_ar:
    "يتم توريد مضخات الحريق والمحابس والرشاشات ومعدات الكشف والإنذار وإنارة الطوارئ ومعدات مكافحة الحريق المحمولة وفق المتطلبات المقدمة لإعداد عرض السعر، ويتم تأكيد التوافر والتكوين أثناء إعداد العرض.",
};

export const fireProtectionFaqs: SectorFaq[] = [
  {
    question_en:
      "What information should I send for a fire protection quotation?",
    answer_en:
      "The BOQ or equipment list, the required quantities, the customer or consultant specification, any listing or approval requirements, the delivery location and the required timing. Each equipment guide on this page lists the details that matter for that equipment.",
    question_ar:
      "ما البيانات التي يجب إرسالها لطلب عرض سعر لمعدات مكافحة الحريق؟",
    answer_ar:
      "جدول الكميات أو قائمة المعدات، والكميات المطلوبة، ومواصفات العميل أو الاستشاري، وأي متطلبات الإدراج أو الاعتماد المطلوبة، ومكان التوريد، والتوقيت المطلوب. ويوضح كل دليل معدة في هذه الصفحة البيانات المهمة الخاصة بها.",
  },
  {
    question_en: "Can GOLTENS quote from a BOQ?",
    answer_en:
      "Yes. Send the BOQ or equipment list together with the specification it refers to. Items are quoted against the stated requirements, and anything unclear is raised with you during quotation.",
    question_ar: "هل يمكن لـGOLTENS إعداد عرض سعر من جدول الكميات؟",
    answer_ar:
      "نعم، أرسلوا جدول الكميات أو قائمة المعدات مع المواصفات المرتبطة بها. ويتم إعداد عرض السعر وفق المتطلبات المذكورة، ونتواصل معكم بشأن أي بند غير واضح أثناء إعداد العرض.",
  },
  {
    question_en: "Does GOLTENS design or calculate fire protection systems?",
    answer_en:
      "No. GOLTENS supplies fire protection equipment against the requirements provided for quotation. System design, calculations, installation, testing, commissioning and final acceptance remain with the customer, consultant, contractor or responsible authority, as applicable.",
    question_ar:
      "هل تقوم GOLTENS بتصميم أنظمة مكافحة الحريق أو إجراء حساباتها؟",
    answer_ar:
      "لا، توفر GOLTENS معدات مكافحة الحريق وفق المتطلبات المقدمة لإعداد عرض السعر. ويظل تصميم النظام وحساباته وتركيبه واختباره وتشغيله وقبوله النهائي من مسؤولية العميل أو الاستشاري أو المقاول أو الجهة المسؤولة، بحسب الحالة.",
  },
  {
    question_en: "How are listing or approval requirements handled?",
    answer_en:
      "State the listing or approval requirements that your project specification calls for in your request. Equipment is quoted against those stated requirements, and the quotation states the documentation available for the offered equipment. Confirming that the equipment meets the project requirements remains with the customer, consultant or responsible authority, as applicable.",
    question_ar: "كيف يتم التعامل مع متطلبات الإدراج أو الاعتماد؟",
    answer_ar:
      "اذكروا في طلبكم متطلبات الإدراج أو الاعتماد التي تنص عليها مواصفات مشروعكم. ويتم إعداد عرض السعر وفق هذه المتطلبات المذكورة، مع توضيح المستندات المتاحة للمعدة المقترحة في العرض. ويظل تأكيد مطابقة المعدة لمتطلبات المشروع من مسؤولية العميل أو الاستشاري أو الجهة المسؤولة، بحسب الحالة.",
  },
  {
    question_en: "Can GOLTENS source replacement fire protection equipment?",
    answer_en:
      "For valves, hydrants, hose reels, fire hoses, fire cabinets, portable extinguishers, emergency lighting and exit signs, send the nameplate or markings, photos, the available technical information and the quantity. GOLTENS reviews the available equipment information and can source a matching or technically suitable alternative for quotation. Final equivalence and suitability should be confirmed by the customer's consultant, engineering team or responsible authority, as applicable. Pumps, controllers, drivers, fire alarm panels and detectors are quoted against the specification and compatibility requirements you provide.",
    question_ar: "هل يمكن لـGOLTENS توفير بديل لمعدات مكافحة حريق قائمة؟",
    answer_ar:
      "بالنسبة للمحابس وحنفيات الحريق وبكرات الخراطيم وخراطيم الحريق وصناديق الحريق والطفايات المحمولة وإنارة الطوارئ وعلامات الخروج، أرسلوا اللوحة التعريفية أو العلامات الموجودة على المعدة والصور والبيانات الفنية المتاحة والعدد المطلوب. تراجع GOLTENS بيانات المعدة المتاحة ويمكنها توفير معدة مطابقة أو بديل مناسب فنيًا ضمن عرض السعر، على أن يتم تأكيد التكافؤ والملاءمة النهائية من جانب الاستشاري أو الفريق الهندسي لدى العميل أو الجهة المسؤولة، بحسب الحالة. أما المضخات ولوحات التحكم والمحركات ولوحات إنذار الحريق والكواشف فيتم إعداد عروض أسعارها وفق المواصفات ومتطلبات التوافق التي تقدمونها.",
  },
  {
    question_en:
      "Can I request several fire protection items in one quotation?",
    answer_en:
      "Yes. You can include several fire protection items in one quotation request — for example, every item in a BOQ or the equipment for one part of a project.",
    question_ar:
      "هل يمكنني طلب عدة بنود من معدات مكافحة الحريق في عرض سعر واحد؟",
    answer_ar:
      "نعم، يمكنكم إدراج عدة بنود من معدات مكافحة الحريق ضمن طلب عرض سعر واحد، مثل جميع بنود جدول الكميات أو معدات جزء محدد من المشروع.",
  },
  {
    question_en: "What if the specification is incomplete?",
    answer_en:
      "Send what you have. The minimum is the equipment type, the quantity and the requirement it must meet; missing details can be clarified with you or your consultant during quotation.",
    question_ar: "ماذا لو كانت المواصفات غير مكتملة؟",
    answer_ar:
      "أرسلوا ما يتوفر لديكم. الحد الأدنى هو نوع المعدة والعدد المطلوب والمتطلب الذي يجب أن تستوفيه، ويمكن استكمال البيانات الناقصة معكم أو مع الاستشاري أثناء إعداد عرض السعر.",
  },
  {
    question_en: "How is lead time confirmed?",
    answer_en:
      "Lead time depends on the equipment, its configuration and the stated requirements, so it is confirmed in each quotation rather than given as a single blanket figure.",
    question_ar: "كيف يتم تأكيد مدة التوريد؟",
    answer_ar:
      "تعتمد مدة التوريد على المعدة وتكوينها والمتطلبات المذكورة، لذلك يتم تأكيدها في كل عرض سعر بدلًا من تحديد مدة عامة موحدة.",
  },
];

export const fireProtectionGuide: SectorEquipmentGuide = {
  heroVisual: "neutral",
  availability_en: "Available on request.",
  availability_ar: "متاح حسب الطلب.",

  intro: {
    eyebrow_en: "Fire protection equipment procurement guide",
    eyebrow_ar: "دليل توريد معدات مكافحة الحريق",
    lead_en:
      "GOLTENS supplies fire pumps, fire valves and hydrants, sprinklers and hose equipment, portable extinguishers, detection and alarm equipment and emergency lighting against the requirements you provide. Use this guide to start from your application, review what matters for each equipment type, and prepare the documents and information we need to quote.",
    lead_ar:
      "توفر GOLTENS مضخات الحريق ومحابس وحنفيات الحريق والرشاشات ومعدات الخراطيم والطفايات المحمولة ومعدات الكشف والإنذار وإنارة الطوارئ وفق المتطلبات التي تقدمونها. استخدموا هذا الدليل للبدء من طبيعة الاستخدام، ومراجعة أهم اعتبارات كل نوع من المعدات، وتجهيز المستندات والبيانات التي نحتاجها لإعداد عرض السعر.",
    note_en:
      "These guides are general information to help you prepare your request — they are not a catalogue of specific models and do not replace your approved project documentation. Equipment is available on request and is quoted against the BOQ, specification and requirements you provide.",
    note_ar:
      "هذه الأدلة معلومات عامة تساعدكم على تجهيز طلبكم، وليست كتالوجًا لموديلات محددة ولا تُغني عن مستندات المشروع المعتمدة. المعدات متاحة حسب الطلب، ويتم إعداد عرض السعر وفق جدول الكميات والمواصفات والمتطلبات التي تقدمونها.",
  },

  projectsTitle_en: "Choose Equipment by Application",
  projectsTitle_ar: "اختر المعدة حسب طبيعة الاستخدام",
  projectsIntro_en:
    "Typical equipment for common fire protection procurement needs. Use this as a starting point — the equipment, quantities and requirements for your project come from your BOQ, specification and approved project documentation.",
  projectsIntro_ar:
    "المعدات المعتادة لأكثر احتياجات توريد معدات مكافحة الحريق شيوعًا. استخدموها كنقطة بداية، إذ تُحدَّد المعدات والكميات والمتطلبات الخاصة بمشروعكم وفق جدول الكميات والمواصفات ومستندات المشروع المعتمدة.",

  industries: [
    {
      id: "commercial-buildings",
      label_en: "Commercial & residential buildings",
      label_ar: "المباني التجارية والسكنية",
    },
    {
      id: "industrial-facilities",
      label_en: "Factories & industrial facilities",
      label_ar: "المصانع والمنشآت الصناعية",
    },
    {
      id: "warehouses-logistics",
      label_en: "Warehouses & logistics facilities",
      label_ar: "المستودعات والمنشآت اللوجستية",
    },
    {
      id: "healthcare-facilities",
      label_en: "Hospitals & healthcare facilities",
      label_ar: "المستشفيات والمنشآت الصحية",
    },
    {
      id: "public-buildings",
      label_en: "Schools, universities & public buildings",
      label_ar: "المدارس والجامعات والمباني العامة",
    },
    {
      id: "hotels-hospitality",
      label_en: "Hotels & hospitality",
      label_ar: "الفنادق والمنشآت السياحية",
    },
    {
      id: "infrastructure-sites",
      label_en: "Infrastructure & large sites",
      label_ar: "البنية التحتية والمواقع الكبيرة",
    },
  ],

  projects: [
    {
      id: "fire-water-pump-rooms",
      title_en: "Fire-water pump rooms",
      title_ar: "غرف مضخات مياه الحريق",
      description_en:
        "Pumping equipment that supplies water to the fire protection network, quoted against the pump duty in your approved project documentation.",
      description_ar:
        "معدات الضخ التي تغذي شبكة مكافحة الحريق بالمياه، ويتم إعداد عرض سعرها وفق بيانات تشغيل المضخة الواردة في مستندات المشروع المعتمدة.",
      equipmentIds: [
        "fire-pump-sets",
        "fire-pump-controllers",
        "jockey-pumps",
        "fire-pump-drivers",
      ],
      review: pending("pump duty comes from the customer documents only"),
    },
    {
      id: "sprinkler-networks",
      title_en: "Sprinkler networks",
      title_ar: "شبكات الرشاشات",
      description_en:
        "Sprinklers and the isolation, check and alarm valves on sprinkler pipework.",
      description_ar:
        "رشاشات الحريق ومحابس العزل وعدم الرجوع والإنذار على مواسير شبكات الرشاشات.",
      equipmentIds: [
        "fire-sprinklers",
        "gate-os-y-valves",
        "butterfly-valves",
        "check-valves",
        "alarm-check-valves",
      ],
      review: pending("supply of components only"),
    },
    {
      id: "risers-hose-stations",
      title_en: "Wet/dry risers and hose stations",
      title_ar: "الأعمدة الصاعدة الرطبة والجافة ونقاط الخراطيم",
      description_en:
        "Riser outlets, hose equipment and cabinets inside buildings.",
      description_ar:
        "مخارج الأعمدة الصاعدة ومعدات الخراطيم والصناديق داخل المباني.",
      equipmentIds: [
        "landing-valves",
        "fire-hose-reels",
        "fire-hoses",
        "fire-cabinets",
      ],
      review: pending("riser terminology EN/AR"),
    },
    {
      id: "external-hydrant-networks",
      title_en: "External hydrant networks",
      title_ar: "شبكات حنفيات الحريق الخارجية",
      description_en:
        "Hydrants and the isolation and check valves on site fire-water mains.",
      description_ar:
        "حنفيات الحريق ومحابس العزل وعدم الرجوع على الخطوط الرئيسية لمياه الحريق في الموقع.",
      equipmentIds: [
        "fire-hydrants",
        "gate-os-y-valves",
        "butterfly-valves",
        "check-valves",
      ],
      review: pending("supply of components only"),
    },
    {
      id: "building-detection-alarm",
      title_en: "Building detection and alarm",
      title_ar: "الكشف والإنذار في المباني",
      description_en:
        "Fire alarm control panels and detectors for building fire alarm systems.",
      description_ar:
        "لوحات إنذار الحريق والكواشف لأنظمة إنذار الحريق في المباني.",
      equipmentIds: [
        "fire-alarm-control-panels",
        "smoke-detectors",
        "heat-detectors",
        "beam-smoke-detectors",
      ],
      review: pending(
        "compatibility with existing systems is customer-defined",
      ),
    },
    {
      id: "large-open-spaces",
      title_en: "Large open and high-ceiling spaces",
      title_ar: "المساحات المفتوحة الكبيرة والأسقف المرتفعة",
      description_en:
        "Beam smoke detection with emergency lighting and exit signs for warehouses, halls and atriums.",
      description_ar:
        "الكشف الشعاعي عن الدخان مع إنارة الطوارئ وعلامات الخروج للمستودعات والقاعات والردهات المفتوحة.",
      equipmentIds: [
        "beam-smoke-detectors",
        "emergency-lighting",
        "exit-signs",
      ],
      review: pending("application grouping only"),
    },
    {
      id: "evacuation-lighting",
      title_en: "Emergency evacuation and life-safety lighting",
      title_ar: "إنارة الإخلاء والطوارئ",
      description_en:
        "Emergency luminaires and illuminated exit signs along escape routes.",
      description_ar:
        "وحدات إنارة الطوارئ وعلامات الخروج المضيئة على مسارات الهروب.",
      equipmentIds: ["emergency-lighting", "exit-signs"],
      review: pending("application grouping only"),
    },
    {
      id: "portable-first-response",
      title_en: "Portable first-response equipment",
      title_ar: "معدات الاستجابة الأولية المحمولة",
      description_en:
        "Extinguishers, cabinets and hoses for first response at the point of need.",
      description_ar:
        "الطفايات والصناديق والخراطيم للاستجابة الأولية في موقع الحاجة.",
      equipmentIds: [
        "portable-fire-extinguishers",
        "fire-cabinets",
        "fire-hoses",
      ],
      review: pending("application grouping only"),
    },
    {
      id: "equipment-replacement",
      title_en: "Fire protection equipment replacement",
      title_ar: "استبدال معدات مكافحة الحريق",
      description_en:
        "Replacing valves, hose equipment, cabinets, extinguishers, emergency lighting and exit signs already in service — see Replacing Existing Equipment.",
      description_ar:
        "استبدال المحابس ومعدات الخراطيم والصناديق والطفايات وإنارة الطوارئ وعلامات الخروج القائمة في الخدمة — راجعوا قسم استبدال المعدات القائمة.",
      equipmentIds: [
        "gate-os-y-valves",
        "butterfly-valves",
        "check-valves",
        "alarm-check-valves",
        "landing-valves",
        "fire-hose-reels",
        "fire-hoses",
        "fire-cabinets",
        "portable-fire-extinguishers",
        "emergency-lighting",
        "exit-signs",
      ],
      review: pending("matches the approved replacement families"),
    },
    {
      id: "tender-project-supply",
      title_en: "Fire protection tender and project supply",
      title_ar: "توريد معدات مكافحة الحريق للمناقصات والمشروعات",
      description_en:
        "Any of the twenty-one equipment types on this page — from fire pumps to detection and emergency lighting — quoted against the customer or consultant BOQ and specification.",
      description_ar:
        "أي من أنواع المعدات الواحد والعشرين في هذه الصفحة، من مضخات الحريق إلى الكشف وإنارة الطوارئ، ويتم إعداد عرض سعرها وفق جدول الكميات ومواصفات العميل أو الاستشاري.",
      equipmentIds: [
        "fire-pump-sets",
        "gate-os-y-valves",
        "fire-sprinklers",
        "fire-alarm-control-panels",
      ],
      review: pending("BOQ-driven; no tender documentation promise"),
    },
  ],

  categories: [
    {
      categoryId: "fire-pumps",
      title_en: "Fire Pumps & Water Supply",
      title_ar: "مضخات الحريق وإمداد المياه",
      intro_en:
        "Pump sets, controllers, jockey pumps and drivers that supply water to the fire protection network. Pump equipment is quoted against the pump duty and requirements in your approved project documentation.",
      intro_ar:
        "مجموعات المضخات ولوحات التحكم ومضخات الجوكي ومحركات التشغيل التي تغذي شبكة مكافحة الحريق بالمياه. ويتم إعداد عروض أسعار معدات الضخ وفق بيانات التشغيل والمتطلبات الواردة في مستندات المشروع المعتمدة.",
      icon: "Droplets",
      equipment: [
        {
          id: "fire-pump-sets",
          linkedProductId: "fire-pumps",
          name_en: "Fire Pump Sets",
          name_ar: "مجموعات مضخات الحريق",
          summary_en:
            "The main pumps that deliver water to sprinkler, hydrant and hose networks.",
          summary_ar:
            "المضخات الرئيسية التي تضخ المياه إلى شبكات الرشاشات والحنفيات والخراطيم.",
          whatItIs_en:
            "A fire pump with its driver, coupling and base, supplied as a set — commonly end-suction, split-case or vertical turbine.",
          whatItIs_ar:
            "مضخة حريق مع محرك التشغيل ووصلة الربط والقاعدة، تُورَّد كمجموعة واحدة، وأكثرها شيوعًا المضخات أحادية السحب والمضخات ذات الغلاف المنفصل والمضخات التوربينية الرأسية.",
          usedFor_en:
            "Supplying water at the flow and pressure stated in the project documents to the fire protection network.",
          usedFor_ar:
            "تغذية شبكة مكافحة الحريق بالمياه بالتصرف والضغط المحددين في مستندات المشروع.",
          applications_en: [
            "Building fire-water pump rooms",
            "Sprinkler and hose networks",
            "Site hydrant mains",
            "Fire-water tanks and reservoirs",
          ],
          applications_ar: [
            "غرف مضخات مياه الحريق في المباني",
            "شبكات الرشاشات والخراطيم",
            "الخطوط الرئيسية لحنفيات الحريق في المواقع",
            "خزانات وأحواض مياه الحريق",
          ],
          industryIds: [
            "commercial-buildings",
            "industrial-facilities",
            "warehouses-logistics",
            "healthcare-facilities",
            "infrastructure-sites",
          ],
          selectionFactors: [
            {
              factor_en: "Pump duty",
              factor_ar: "بيانات التشغيل",
              detail_en:
                "Flow and pressure as stated in your approved project documentation.",
              detail_ar: "التصرف والضغط كما وردا في مستندات المشروع المعتمدة.",
            },
            {
              factor_en: "Pump type",
              factor_ar: "نوع المضخة",
              detail_en:
                "End-suction, split-case or vertical turbine, according to the specification and the water source.",
              detail_ar:
                "أحادية السحب أو ذات غلاف منفصل أو توربينية رأسية، وفق المواصفات ومصدر المياه.",
            },
            {
              factor_en: "Driver",
              factor_ar: "محرك التشغيل",
              detail_en: "Electric motor or diesel engine, as specified.",
              detail_ar: "محرك كهربائي أو محرك ديزل، حسب المواصفات.",
            },
            {
              factor_en: "Required documents",
              factor_ar: "المستندات المطلوبة",
              detail_en:
                "The documentation your specification requires with the pump set.",
              detail_ar: "المستندات التي تنص عليها مواصفاتكم مع مجموعة المضخة.",
            },
          ],
          requestChecklist_en: [
            "Pump duty from your project documents",
            "Pump type and driver required",
            "Water source and suction arrangement",
            "Specification or BOQ item",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "بيانات تشغيل المضخة من مستندات المشروع",
            "نوع المضخة ومحرك التشغيل المطلوب",
            "مصدر المياه وطريقة السحب",
            "المواصفات أو بند جدول الكميات",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "fire-pump-controllers",
            "jockey-pumps",
            "fire-pump-drivers",
          ],
          image: null,
          review: pending("pump types as general description only"),
        },
        {
          id: "fire-pump-controllers",
          linkedProductId: "fire-pump-controllers",
          name_en: "Fire Pump Controllers",
          name_ar: "لوحات التحكم في مضخات الحريق",
          summary_en:
            "Control panels that start and monitor electric or diesel fire pumps.",
          summary_ar:
            "لوحات تحكم تقوم بتشغيل مضخات الحريق الكهربائية أو الديزل ومراقبتها.",
          whatItIs_en:
            "A dedicated controller for a fire pump driver, with automatic start on pressure drop, manual start and status indication.",
          whatItIs_ar:
            "لوحة تحكم مخصصة لمحرك تشغيل مضخة الحريق، تتضمن التشغيل الآلي عند انخفاض الضغط والتشغيل اليدوي وبيانات الحالة.",
          usedFor_en:
            "Starting the fire pump when the network calls for water and signalling pump status to the building fire alarm or monitoring system.",
          usedFor_ar:
            "تشغيل مضخة الحريق عند حاجة الشبكة إلى المياه، وإرسال حالة المضخة إلى نظام إنذار الحريق أو نظام المراقبة في المبنى.",
          applications_en: [
            "Electric fire pump sets",
            "Diesel fire pump sets",
            "Jockey pumps",
            "Fire-water pump rooms",
          ],
          applications_ar: [
            "مجموعات مضخات الحريق الكهربائية",
            "مجموعات مضخات الحريق بمحركات الديزل",
            "مضخات الجوكي",
            "غرف مضخات مياه الحريق",
          ],
          industryIds: [
            "commercial-buildings",
            "industrial-facilities",
            "warehouses-logistics",
            "healthcare-facilities",
          ],
          selectionFactors: [
            {
              factor_en: "Driver type",
              factor_ar: "نوع محرك التشغيل",
              detail_en:
                "Controller for an electric motor or for a diesel engine.",
              detail_ar: "لوحة لمحرك كهربائي أو لمحرك ديزل.",
            },
            {
              factor_en: "Starting method",
              factor_ar: "طريقة البدء",
              detail_en:
                "The starting method stated in the specification for electric pumps.",
              detail_ar: "طريقة البدء المحددة في المواصفات للمضخات الكهربائية.",
            },
            {
              factor_en: "Power supply",
              factor_ar: "مصدر التغذية",
              detail_en:
                "Supply voltage and phase, and any transfer between normal and standby supply.",
              detail_ar:
                "جهد التغذية وعدد الأطوار، وأي تحويل بين التغذية العادية والاحتياطية.",
            },
            {
              factor_en: "Signals",
              factor_ar: "الإشارات",
              detail_en:
                "Status and alarm signals required by the fire alarm or monitoring system.",
              detail_ar:
                "إشارات الحالة والإنذار المطلوبة لنظام إنذار الحريق أو المراقبة.",
            },
          ],
          requestChecklist_en: [
            "Pump and driver data",
            "Supply voltage and phase",
            "Starting method from the specification",
            "Required remote signals",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "بيانات المضخة ومحرك التشغيل",
            "جهد التغذية وعدد الأطوار",
            "طريقة البدء الواردة في المواصفات",
            "الإشارات المطلوبة عن بُعد",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["fire-pump-sets", "fire-pump-drivers"],
          image: null,
          review: pending("controller functions as general description only"),
        },
        {
          id: "jockey-pumps",
          linkedProductId: "jockey-pumps",
          name_en: "Jockey Pumps",
          name_ar: "مضخات الجوكي (حفظ الضغط)",
          summary_en:
            "Small pumps that keep the fire protection network pressurised.",
          summary_ar: "مضخات صغيرة تحافظ على ضغط شبكة مكافحة الحريق.",
          whatItIs_en:
            "A small pressure-holding pump, usually multistage, with its own controller.",
          whatItIs_ar:
            "مضخة لحفظ الضغط، غالبًا متعددة المراحل، مع لوحة تحكم خاصة بها.",
          usedFor_en:
            "Making up small pressure losses in the network so that the main fire pump does not start unnecessarily.",
          usedFor_ar:
            "تعويض الفقد البسيط في ضغط الشبكة حتى لا تعمل مضخة الحريق الرئيسية دون داعٍ.",
          applications_en: [
            "Sprinkler networks",
            "Hose and riser networks",
            "Hydrant mains",
          ],
          applications_ar: [
            "شبكات الرشاشات",
            "شبكات الخراطيم والأعمدة الصاعدة",
            "الخطوط الرئيسية لحنفيات الحريق",
          ],
          industryIds: [
            "commercial-buildings",
            "industrial-facilities",
            "warehouses-logistics",
            "healthcare-facilities",
          ],
          selectionFactors: [
            {
              factor_en: "Duty",
              factor_ar: "بيانات التشغيل",
              detail_en:
                "Flow and pressure as stated in your project documents.",
              detail_ar: "التصرف والضغط كما وردا في مستندات المشروع.",
            },
            {
              factor_en: "Pump arrangement",
              factor_ar: "شكل المضخة",
              detail_en: "Vertical or horizontal arrangement.",
              detail_ar: "مضخة رأسية أو أفقية.",
            },
            {
              factor_en: "Controller",
              factor_ar: "لوحة التحكم",
              detail_en: "Controller supplied with the pump or separately.",
              detail_ar: "لوحة تحكم مع المضخة أو بشكل منفصل.",
            },
          ],
          requestChecklist_en: [
            "Duty from your project documents",
            "Supply voltage and phase",
            "Controller required or not",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "بيانات التشغيل من مستندات المشروع",
            "جهد التغذية وعدد الأطوار",
            "الحاجة إلى لوحة تحكم من عدمها",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["fire-pump-sets", "fire-pump-controllers"],
          image: null,
          review: pending("AR مضخات الجوكي as market term"),
        },
        {
          id: "fire-pump-drivers",
          name_en: "Fire Pump Drivers — Diesel / Electric",
          name_ar: "محركات تشغيل مضخات الحريق — ديزل / كهرباء",
          summary_en:
            "Diesel engines and electric motors that drive fire pumps.",
          summary_ar:
            "محركات الديزل والمحركات الكهربائية التي تدير مضخات الحريق.",
          whatItIs_en:
            "The driver of a fire pump set — a diesel engine with its fuel and cooling arrangement, or an electric motor.",
          whatItIs_ar:
            "محرك تشغيل مجموعة مضخة الحريق: محرك ديزل مع منظومة الوقود والتبريد الخاصة به، أو محرك كهربائي.",
          usedFor_en:
            "Driving a new fire pump set, or matching the driver of an existing set as specified.",
          usedFor_ar:
            "تشغيل مجموعة مضخة حريق جديدة، أو مطابقة محرك مجموعة قائمة وفق المواصفات.",
          applications_en: [
            "Diesel fire pump sets",
            "Electric fire pump sets",
            "Fire-water pump rooms",
          ],
          applications_ar: [
            "مجموعات مضخات الحريق بمحركات الديزل",
            "مجموعات مضخات الحريق الكهربائية",
            "غرف مضخات مياه الحريق",
          ],
          industryIds: [
            "commercial-buildings",
            "industrial-facilities",
            "infrastructure-sites",
          ],
          selectionFactors: [
            {
              factor_en: "Driver type",
              factor_ar: "نوع المحرك",
              detail_en: "Diesel engine or electric motor, as specified.",
              detail_ar: "محرك ديزل أو محرك كهربائي، حسب المواصفات.",
            },
            {
              factor_en: "Pump data",
              factor_ar: "بيانات المضخة",
              detail_en:
                "The power and speed the pump requires, from the pump data.",
              detail_ar:
                "القدرة والسرعة اللتان تحتاجهما المضخة، من بيانات المضخة.",
            },
            {
              factor_en: "Supply or fuel",
              factor_ar: "التغذية أو الوقود",
              detail_en:
                "Supply voltage for motors; fuel tank and cooling arrangement for engines.",
              detail_ar:
                "جهد التغذية للمحركات الكهربائية، وخزان الوقود وطريقة التبريد لمحركات الديزل.",
            },
          ],
          requestChecklist_en: [
            "Diesel or electric",
            "Pump data or existing pump nameplate",
            "Supply voltage or fuel and cooling arrangement",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "ديزل أو كهرباء",
            "بيانات المضخة أو اللوحة التعريفية للمضخة الحالية",
            "جهد التغذية أو منظومة الوقود والتبريد",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["fire-pump-sets", "fire-pump-controllers"],
          image: null,
          review: pending(
            "covers two records (diesel engines, electric motors)",
          ),
        },
      ],
    },
    {
      categoryId: "valves",
      title_en: "Fire Valves, Hydrants & Riser Equipment",
      title_ar: "محابس الحريق والحنفيات ومعدات الأعمدة الصاعدة",
      intro_en:
        "Isolation, check and alarm valves for fire-water pipework, riser outlets and hydrants. Valves are quoted against the size, pressure class and connection stated in your specification.",
      intro_ar:
        "محابس العزل وعدم الرجوع والإنذار لمواسير مياه الحريق، ومخارج الأعمدة الصاعدة وحنفيات الحريق. ويتم إعداد عروض أسعار المحابس وفق المقاس وفئة الضغط ونوع التوصيل الواردة في مواصفاتكم.",
      icon: "Waves",
      equipment: [
        {
          id: "gate-os-y-valves",
          linkedProductId: "gate-valves",
          name_en: "Gate & OS&Y Valves",
          name_ar: "محابس البوابة وOS&Y",
          summary_en:
            "Isolation valves for fire-water mains, including outside stem & yoke valves that show their position.",
          summary_ar:
            "محابس عزل لخطوط مياه الحريق، ومنها محابس OS&Y ذات الساق الخارجية التي توضح وضع الفتح والغلق.",
          whatItIs_en:
            "A gate valve that isolates a section of pipework. On an OS&Y valve the rising stem shows at a glance whether it is open or closed.",
          whatItIs_ar:
            "محبس بوابة يعزل جزءًا من المواسير، وفي محبس OS&Y توضح الساق الصاعدة بنظرة واحدة ما إذا كان المحبس مفتوحًا أو مغلقًا.",
          usedFor_en:
            "Isolating pump suction and discharge, sprinkler control points and sections of hydrant mains.",
          usedFor_ar:
            "عزل سحب وطرد المضخات ونقاط التحكم في الرشاشات وأجزاء من خطوط الحنفيات الرئيسية.",
          applications_en: [
            "Pump room pipework",
            "Sprinkler control points",
            "Hydrant mains",
          ],
          applications_ar: [
            "مواسير غرف المضخات",
            "نقاط التحكم في الرشاشات",
            "الخطوط الرئيسية لحنفيات الحريق",
          ],
          industryIds: [
            "commercial-buildings",
            "industrial-facilities",
            "warehouses-logistics",
            "infrastructure-sites",
          ],
          selectionFactors: [
            {
              factor_en: "Size and pressure class",
              factor_ar: "المقاس وفئة الضغط",
              detail_en: "As stated in your specification or BOQ.",
              detail_ar: "كما وردا في المواصفات أو جدول الكميات.",
            },
            {
              factor_en: "End connection",
              factor_ar: "نوع التوصيل",
              detail_en: "Flanged or grooved, to match the pipework.",
              detail_ar: "شفة (فلانشة) أو مجرى (جروف)، بما يناسب المواسير.",
            },
            {
              factor_en: "Position indication",
              factor_ar: "بيان الوضع",
              detail_en:
                "OS&Y rising stem, or a non-rising stem with an indicator where required.",
              detail_ar: "ساق صاعدة OS&Y، أو ساق غير صاعدة مع مؤشر عند الحاجة.",
            },
            {
              factor_en: "Supervision",
              factor_ar: "المراقبة",
              detail_en:
                "Position switch, where the specification calls for one.",
              detail_ar: "مفتاح بيان الوضع إذا نصت المواصفات عليه.",
            },
          ],
          requestChecklist_en: [
            "Valve size",
            "Pressure class",
            "End connection",
            "OS&Y or non-rising stem",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "مقاس المحبس",
            "فئة الضغط",
            "نوع التوصيل",
            "OS&Y أو ساق غير صاعدة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "butterfly-valves",
            "check-valves",
            "fire-hydrants",
          ],
          image: null,
          review: pending("AR محابس البوابة وOS&Y"),
        },
        {
          id: "butterfly-valves",
          linkedProductId: "butterfly-valves",
          name_en: "Butterfly Valves",
          name_ar: "محابس الفراشة",
          summary_en:
            "Compact isolation valves for fire-water pipework, commonly with a position indicator.",
          summary_ar:
            "محابس عزل مدمجة لمواسير مياه الحريق، وغالبًا مع مؤشر لبيان الوضع.",
          whatItIs_en:
            "A quarter-turn valve with a disc in the bore, usually gear-operated with an indicator showing open or closed.",
          whatItIs_ar:
            "محبس يعمل بربع لفة بقرص داخل المجرى، ويُشغَّل غالبًا بصندوق تروس مع مؤشر يوضح الفتح أو الغلق.",
          usedFor_en:
            "Isolating sprinkler zones, risers and pump room pipework where space is limited.",
          usedFor_ar:
            "عزل مناطق الرشاشات والأعمدة الصاعدة ومواسير غرف المضخات عند محدودية المساحة.",
          applications_en: [
            "Sprinkler zone control",
            "Risers",
            "Pump room pipework",
          ],
          applications_ar: [
            "التحكم في مناطق الرشاشات",
            "الأعمدة الصاعدة",
            "مواسير غرف المضخات",
          ],
          industryIds: [
            "commercial-buildings",
            "industrial-facilities",
            "warehouses-logistics",
            "healthcare-facilities",
          ],
          selectionFactors: [
            {
              factor_en: "Size and pressure class",
              factor_ar: "المقاس وفئة الضغط",
              detail_en: "As stated in your specification or BOQ.",
              detail_ar: "كما وردا في المواصفات أو جدول الكميات.",
            },
            {
              factor_en: "Body type",
              factor_ar: "شكل الجسم",
              detail_en: "Wafer, lug or grooved body, to match the pipework.",
              detail_ar: "جسم رقائقي أو بأذن أو بمجرى، بما يناسب المواسير.",
            },
            {
              factor_en: "Indication and supervision",
              factor_ar: "بيان الوضع والمراقبة",
              detail_en:
                "Indicator and position switch, where the specification calls for them.",
              detail_ar: "مؤشر ومفتاح بيان الوضع إذا نصت المواصفات عليهما.",
            },
          ],
          requestChecklist_en: [
            "Valve size",
            "Pressure class",
            "Body type or end connection",
            "Indicator and position switch required",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "مقاس المحبس",
            "فئة الضغط",
            "شكل الجسم أو نوع التوصيل",
            "الحاجة إلى المؤشر ومفتاح بيان الوضع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["gate-os-y-valves", "check-valves"],
          image: null,
          review: pending("AR محابس الفراشة"),
        },
        {
          id: "check-valves",
          linkedProductId: "check-valves",
          name_en: "Check Valves",
          name_ar: "محابس عدم رجوع",
          summary_en: "Valves that let fire water flow in one direction only.",
          summary_ar: "محابس تسمح بمرور مياه الحريق في اتجاه واحد فقط.",
          whatItIs_en:
            "A non-return valve, commonly swing or wafer type, that closes against reverse flow.",
          whatItIs_ar:
            "محبس يمنع رجوع المياه، وأكثره شيوعًا النوع المتأرجح أو الرقائقي، ويُغلق عند انعكاس اتجاه التدفق.",
          usedFor_en:
            "Preventing backflow at pump discharges, fire service inlets and connections between supplies.",
          usedFor_ar:
            "منع رجوع المياه عند طرد المضخات ومداخل تغذية فرق الإطفاء ونقاط الربط بين مصادر التغذية.",
          applications_en: [
            "Pump discharge",
            "Inlet connections",
            "Hydrant mains",
          ],
          applications_ar: [
            "طرد المضخات",
            "وصلات المداخل",
            "الخطوط الرئيسية لحنفيات الحريق",
          ],
          industryIds: [
            "commercial-buildings",
            "industrial-facilities",
            "infrastructure-sites",
          ],
          selectionFactors: [
            {
              factor_en: "Size and pressure class",
              factor_ar: "المقاس وفئة الضغط",
              detail_en: "As stated in your specification or BOQ.",
              detail_ar: "كما وردا في المواصفات أو جدول الكميات.",
            },
            {
              factor_en: "Type",
              factor_ar: "النوع",
              detail_en: "Swing or wafer type, as specified.",
              detail_ar: "متأرجح أو رقائقي، حسب المواصفات.",
            },
            {
              factor_en: "End connection",
              factor_ar: "نوع التوصيل",
              detail_en: "Flanged or grooved, to match the pipework.",
              detail_ar: "شفة (فلانشة) أو مجرى (جروف)، بما يناسب المواسير.",
            },
          ],
          requestChecklist_en: [
            "Valve size",
            "Pressure class",
            "Type and end connection",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "مقاس المحبس",
            "فئة الضغط",
            "النوع ونوع التوصيل",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["gate-os-y-valves", "alarm-check-valves"],
          image: null,
          review: pending("AR محابس عدم رجوع"),
        },
        {
          id: "alarm-check-valves",
          linkedProductId: "alarm-valves",
          name_en: "Alarm Check Valves",
          name_ar: "محابس الإنذار",
          summary_en:
            "Wet or dry alarm valves that raise an alarm when water flows into a sprinkler system.",
          summary_ar:
            "محابس إنذار رطبة أو جافة تُطلق إنذارًا عند تدفق المياه إلى شبكة الرشاشات.",
          whatItIs_en:
            "A check valve with alarm trim at the head of a sprinkler system, supplied as a wet or dry valve set.",
          whatItIs_ar:
            "محبس عدم رجوع مزود بملحقات الإنذار عند بداية شبكة الرشاشات، ويُورَّد كمجموعة رطبة أو جافة.",
          usedFor_en:
            "Controlling a sprinkler system and signalling water flow to the alarm system and alarm gong.",
          usedFor_ar:
            "التحكم في شبكة الرشاشات وإرسال إشارة تدفق المياه إلى نظام الإنذار وجرس الإنذار.",
          applications_en: [
            "Wet sprinkler systems",
            "Dry sprinkler systems in unheated areas",
            "Sprinkler valve rooms",
          ],
          applications_ar: [
            "شبكات الرشاشات الرطبة",
            "شبكات الرشاشات الجافة في المناطق غير المدفأة",
            "غرف محابس الرشاشات",
          ],
          industryIds: [
            "commercial-buildings",
            "warehouses-logistics",
            "industrial-facilities",
            "hotels-hospitality",
          ],
          selectionFactors: [
            {
              factor_en: "Wet or dry",
              factor_ar: "رطب أو جاف",
              detail_en: "As stated for the sprinkler system.",
              detail_ar: "حسب ما هو محدد لشبكة الرشاشات.",
            },
            {
              factor_en: "Size and connection",
              factor_ar: "المقاس ونوع التوصيل",
              detail_en: "As stated in your specification or BOQ.",
              detail_ar: "كما وردا في المواصفات أو جدول الكميات.",
            },
            {
              factor_en: "Trim and accessories",
              factor_ar: "الملحقات",
              detail_en:
                "Alarm gong, pressure switch and gauges included with the set, as specified.",
              detail_ar:
                "جرس الإنذار ومفتاح الضغط والمقاييس ضمن المجموعة، حسب المواصفات.",
            },
          ],
          requestChecklist_en: [
            "Wet or dry valve",
            "Valve size",
            "End connection",
            "Trim and accessories required",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "محبس رطب أو جاف",
            "مقاس المحبس",
            "نوع التوصيل",
            "الملحقات المطلوبة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "fire-sprinklers",
            "check-valves",
            "gate-os-y-valves",
          ],
          image: null,
          review: pending("AR محابس الإنذار; no deluge or pre-action wording"),
        },
        {
          id: "landing-valves",
          name_en: "Landing Valves",
          name_ar: "محابس اللاندنج (مخارج الحريق)",
          summary_en:
            "Outlet valves on wet and dry risers for connecting fire hoses at each floor.",
          summary_ar:
            "محابس مخارج على الأعمدة الصاعدة الرطبة والجافة لتوصيل خراطيم الحريق في كل طابق.",
          whatItIs_en:
            "A hose outlet valve on a riser, with an outlet coupling for fire hoses — commonly in a cabinet or on the landing.",
          whatItIs_ar:
            "محبس مخرج على العمود الصاعد بوصلة لتوصيل خراطيم الحريق، ويوجد غالبًا داخل صندوق أو على بسطة السلم.",
          usedFor_en:
            "Giving hose connection points on each floor of a building.",
          usedFor_ar: "توفير نقاط لتوصيل الخراطيم في كل طابق من المبنى.",
          applications_en: [
            "Wet risers",
            "Dry risers",
            "Hose stations and cabinets",
          ],
          applications_ar: [
            "الأعمدة الصاعدة الرطبة",
            "الأعمدة الصاعدة الجافة",
            "نقاط الخراطيم والصناديق",
          ],
          industryIds: [
            "commercial-buildings",
            "healthcare-facilities",
            "hotels-hospitality",
            "public-buildings",
          ],
          selectionFactors: [
            {
              factor_en: "Riser type",
              factor_ar: "نوع العمود الصاعد",
              detail_en: "Wet or dry riser.",
              detail_ar: "عمود صاعد رطب أو جاف.",
            },
            {
              factor_en: "Pattern and inlet",
              factor_ar: "الشكل والمدخل",
              detail_en:
                "Oblique or right-angle pattern, and inlet connection.",
              detail_ar: "شكل مائل أو قائم الزاوية، ونوع وصلة المدخل.",
            },
            {
              factor_en: "Outlet coupling",
              factor_ar: "وصلة المخرج",
              detail_en: "Coupling type to match the hoses in use.",
              detail_ar: "نوع الوصلة بما يناسب الخراطيم المستخدمة.",
            },
          ],
          requestChecklist_en: [
            "Wet or dry riser",
            "Valve size and pattern",
            "Inlet connection and outlet coupling",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "عمود صاعد رطب أو جاف",
            "مقاس المحبس وشكله",
            "وصلة المدخل ووصلة المخرج",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "fire-hoses",
            "fire-cabinets",
            "fire-hose-reels",
          ],
          image: null,
          review: pending("AR محابس اللاندنج as market term"),
        },
        {
          id: "fire-hydrants",
          name_en: "Fire Hydrants",
          name_ar: "حنفيات الحريق",
          summary_en:
            "External hydrants on site fire-water mains for fire brigade and site use.",
          summary_ar:
            "حنفيات حريق خارجية على الخطوط الرئيسية لمياه الحريق في الموقع.",
          whatItIs_en:
            "An above-ground pillar hydrant or an underground hydrant, connected to the fire-water main, with hose outlets.",
          whatItIs_ar:
            "حنفية حريق عمودية فوق سطح الأرض أو حنفية أرضية، متصلة بالخط الرئيسي لمياه الحريق، ومزودة بمخارج للخراطيم.",
          usedFor_en:
            "Providing water for fire fighting around buildings, yards and large sites.",
          usedFor_ar:
            "توفير المياه لمكافحة الحريق حول المباني والساحات والمواقع الكبيرة.",
          applications_en: [
            "Site hydrant networks",
            "Industrial yards",
            "Large building complexes",
          ],
          applications_ar: [
            "شبكات حنفيات الحريق في المواقع",
            "الساحات الصناعية",
            "المجمعات الكبيرة",
          ],
          industryIds: [
            "industrial-facilities",
            "warehouses-logistics",
            "infrastructure-sites",
            "public-buildings",
          ],
          selectionFactors: [
            {
              factor_en: "Hydrant type",
              factor_ar: "نوع الحنفية",
              detail_en: "Pillar or underground hydrant, as specified.",
              detail_ar: "حنفية عمودية أو أرضية، حسب المواصفات.",
            },
            {
              factor_en: "Outlets",
              factor_ar: "المخارج",
              detail_en: "Number and type of outlets and their couplings.",
              detail_ar: "عدد المخارج ونوعها ووصلاتها.",
            },
            {
              factor_en: "Main connection",
              factor_ar: "الوصلة مع الخط الرئيسي",
              detail_en: "Inlet size and connection to the main.",
              detail_ar: "مقاس المدخل وطريقة الربط مع الخط الرئيسي.",
            },
          ],
          requestChecklist_en: [
            "Pillar or underground",
            "Outlet arrangement and couplings",
            "Inlet size and connection",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "عمودية أو أرضية",
            "ترتيب المخارج ووصلاتها",
            "مقاس المدخل وطريقة الربط",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "gate-os-y-valves",
            "check-valves",
            "fire-hoses",
          ],
          image: null,
          review: pending("AR حنفيات الحريق"),
        },
      ],
    },
    {
      categoryId: "sprinklers",
      title_en: "Sprinklers, Hose & Portable Equipment",
      title_ar: "الرشاشات ومعدات الخراطيم والطفايات",
      intro_en:
        "Sprinklers, hose reels, fire hoses, fire cabinets and portable extinguishers. Each item is quoted against the type and requirements stated in your BOQ or specification.",
      intro_ar:
        "رشاشات الحريق وبكرات الخراطيم وخراطيم الحريق وصناديق الحريق والطفايات المحمولة. ويتم إعداد عرض سعر كل بند وفق النوع والمتطلبات الواردة في جدول الكميات أو المواصفات.",
      icon: "FireExtinguisher",
      equipment: [
        {
          id: "fire-sprinklers",
          linkedProductId: "sprinklers",
          name_en: "Sprinklers",
          name_ar: "رشاشات الحريق (سبرينكلر)",
          summary_en:
            "Automatic sprinklers that open individually when heat reaches them.",
          summary_ar:
            "رشاشات تلقائية يعمل كل منها بشكل مستقل عند وصول الحرارة إليه.",
          whatItIs_en:
            "A heat-activated sprinkler with a frame, deflector and glass bulb or fusible element, in pendent, upright, sidewall or concealed form.",
          whatItIs_ar:
            "رشاش يعمل بالحرارة، يتكون من إطار وقرص لتوزيع المياه وأمبولة زجاجية أو عنصر منصهر، بأشكال متدلية أو قائمة أو جانبية أو مخفية.",
          usedFor_en:
            "Discharging water over the area below when the temperature at the sprinkler rises.",
          usedFor_ar:
            "رش المياه على المنطقة أسفله عند ارتفاع الحرارة عند الرشاش.",
          applications_en: [
            "Offices, hotels and hospitals",
            "Retail and car parks",
            "Warehouses and storage",
            "Finished ceilings",
          ],
          applications_ar: [
            "المكاتب والفنادق والمستشفيات",
            "المحلات التجارية ومواقف السيارات",
            "المستودعات والتخزين",
            "الأسقف المشطبة",
          ],
          industryIds: [
            "commercial-buildings",
            "hotels-hospitality",
            "healthcare-facilities",
            "warehouses-logistics",
          ],
          selectionFactors: [
            {
              factor_en: "Type",
              factor_ar: "النوع",
              detail_en: "Pendent, upright, sidewall or concealed.",
              detail_ar: "متدلٍ أو قائم أو جانبي أو مخفي.",
            },
            {
              factor_en: "Response",
              factor_ar: "الاستجابة",
              detail_en:
                "Standard or quick response, as stated in your approved project documentation.",
              detail_ar:
                "استجابة قياسية أو سريعة، كما وردت في مستندات المشروع المعتمدة.",
            },
            {
              factor_en: "K-factor and temperature rating",
              factor_ar: "معامل التصرف ودرجة حرارة التشغيل",
              detail_en:
                "From your approved project documentation — never chosen by the supplier.",
              detail_ar: "من مستندات المشروع المعتمدة، ولا يحددهما المورد.",
            },
            {
              factor_en: "Finish",
              factor_ar: "التشطيب",
              detail_en: "Finish and escutcheon or cover plate, as specified.",
              detail_ar: "التشطيب والحلقة الزخرفية أو الغطاء، حسب المواصفات.",
            },
          ],
          requestChecklist_en: [
            "Sprinkler type and response",
            "K-factor and temperature rating from your project documents",
            "Thread size and finish",
            "Spare sprinkler cabinet and wrenches, if required",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الرشاش ونوع الاستجابة",
            "معامل التصرف ودرجة حرارة التشغيل من مستندات المشروع",
            "مقاس السن والتشطيب",
            "صندوق الرشاشات الاحتياطية والمفاتيح، إذا لزم",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["alarm-check-valves", "gate-os-y-valves"],
          image: null,
          review: pending("sprinkler terms; no hazard classification wording"),
        },
        {
          id: "fire-hose-reels",
          name_en: "Hose Reels",
          name_ar: "بكرات خراطيم الحريق",
          summary_en:
            "Wall-mounted reels with semi-rigid hose for first-response fire fighting.",
          summary_ar:
            "بكرات مثبتة على الحائط بخرطوم شبه صلب لمكافحة الحريق في الاستجابة الأولية.",
          whatItIs_en:
            "A fixed or swinging reel with semi-rigid hose, an inlet valve and a nozzle, connected to the water supply.",
          whatItIs_ar:
            "بكرة ثابتة أو متأرجحة بخرطوم شبه صلب ومحبس دخول وفوهة، متصلة بمصدر المياه.",
          usedFor_en:
            "Letting building occupants and staff tackle a fire at an early stage.",
          usedFor_ar:
            "تمكين شاغلي المبنى والعاملين من مواجهة الحريق في مرحلة مبكرة.",
          applications_en: [
            "Corridors and stair landings",
            "Hose stations and cabinets",
            "Workshops and warehouses",
          ],
          applications_ar: [
            "الممرات وبسطات السلالم",
            "نقاط الخراطيم والصناديق",
            "الورش والمستودعات",
          ],
          industryIds: [
            "commercial-buildings",
            "industrial-facilities",
            "warehouses-logistics",
            "public-buildings",
          ],
          selectionFactors: [
            {
              factor_en: "Reel type",
              factor_ar: "نوع البكرة",
              detail_en:
                "Fixed or swinging, and manual or automatic inlet valve.",
              detail_ar: "ثابتة أو متأرجحة، ومحبس دخول يدوي أو آلي.",
            },
            {
              factor_en: "Hose",
              factor_ar: "الخرطوم",
              detail_en: "Hose diameter and length, as specified.",
              detail_ar: "قطر الخرطوم وطوله، حسب المواصفات.",
            },
            {
              factor_en: "Mounting",
              factor_ar: "التثبيت",
              detail_en: "Wall-mounted or inside a cabinet.",
              detail_ar: "على الحائط أو داخل صندوق.",
            },
          ],
          requestChecklist_en: [
            "Fixed or swinging reel",
            "Hose diameter and length",
            "Wall-mounted or in a cabinet",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "بكرة ثابتة أو متأرجحة",
            "قطر الخرطوم وطوله",
            "على الحائط أو داخل صندوق",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "fire-cabinets",
            "fire-hoses",
            "landing-valves",
          ],
          image: null,
          review: pending("AR بكرات خراطيم الحريق"),
        },
        {
          id: "fire-hoses",
          name_en: "Fire Hoses",
          name_ar: "خراطيم الحريق",
          summary_en:
            "Layflat delivery hoses with couplings for riser outlets and hydrants.",
          summary_ar:
            "خراطيم مسطحة بوصلات لمخارج الأعمدة الصاعدة وحنفيات الحريق.",
          whatItIs_en:
            "A flexible layflat hose, supplied in set lengths with couplings fitted, stored rolled or on a rack.",
          whatItIs_ar:
            "خرطوم مرن مسطح يُورَّد بأطوال محددة مع الوصلات مركبة عليه، ويُحفَظ ملفوفًا أو على حامل.",
          usedFor_en:
            "Carrying water from a landing valve or hydrant to the fire.",
          usedFor_ar:
            "نقل المياه من محبس اللاندنج أو حنفية الحريق إلى موقع الحريق.",
          applications_en: [
            "Riser outlets and hose cabinets",
            "Hydrant points",
            "Site fire-fighting equipment",
          ],
          applications_ar: [
            "مخارج الأعمدة الصاعدة وصناديق الخراطيم",
            "نقاط حنفيات الحريق",
            "معدات مكافحة الحريق في المواقع",
          ],
          industryIds: [
            "commercial-buildings",
            "industrial-facilities",
            "warehouses-logistics",
            "infrastructure-sites",
          ],
          selectionFactors: [
            {
              factor_en: "Diameter and length",
              factor_ar: "القطر والطول",
              detail_en: "As stated in your specification or BOQ.",
              detail_ar: "كما وردا في المواصفات أو جدول الكميات.",
            },
            {
              factor_en: "Couplings",
              factor_ar: "الوصلات",
              detail_en: "Coupling type to match the outlets in use.",
              detail_ar: "نوع الوصلات بما يناسب المخارج المستخدمة.",
            },
            {
              factor_en: "Hose construction",
              factor_ar: "بنية الخرطوم",
              detail_en: "Lining and jacket type, as specified.",
              detail_ar: "نوع البطانة والغلاف الخارجي، حسب المواصفات.",
            },
          ],
          requestChecklist_en: [
            "Hose diameter and length",
            "Coupling type",
            "Accessories such as nozzles, if required",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "قطر الخرطوم وطوله",
            "نوع الوصلات",
            "الملحقات مثل الفوهات، إذا لزم",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "landing-valves",
            "fire-hydrants",
            "fire-cabinets",
          ],
          image: null,
          review: pending("AR خراطيم الحريق"),
        },
        {
          id: "fire-cabinets",
          name_en: "Fire Cabinets",
          name_ar: "صناديق الحريق",
          summary_en:
            "Cabinets that house hose reels, landing valves, hoses and extinguishers.",
          summary_ar:
            "صناديق تضم بكرات الخراطيم ومحابس اللاندنج والخراطيم والطفايات.",
          whatItIs_en:
            "A surface or recessed steel cabinet with a glazed or solid door, arranged for the equipment it holds.",
          whatItIs_ar:
            "صندوق معدني للتثبيت السطحي أو الغائر بباب زجاجي أو مصمت، مرتب بحسب المعدات التي يضمها.",
          usedFor_en:
            "Keeping fire-fighting equipment protected, visible and ready to use.",
          usedFor_ar: "حفظ معدات مكافحة الحريق محمية وظاهرة وجاهزة للاستخدام.",
          applications_en: [
            "Corridors and lobbies",
            "Stair landings",
            "Car parks and plant areas",
          ],
          applications_ar: [
            "الممرات والردهات",
            "بسطات السلالم",
            "مواقف السيارات ومناطق المعدات",
          ],
          industryIds: [
            "commercial-buildings",
            "healthcare-facilities",
            "hotels-hospitality",
            "public-buildings",
          ],
          selectionFactors: [
            {
              factor_en: "Contents",
              factor_ar: "المحتويات",
              detail_en:
                "Hose reel, landing valve, hose, extinguisher or a combination.",
              detail_ar:
                "بكرة خرطوم أو محبس لاندنج أو خرطوم أو طفاية، أو مجموعة منها.",
            },
            {
              factor_en: "Mounting",
              factor_ar: "التثبيت",
              detail_en: "Surface or recessed.",
              detail_ar: "سطحي أو غائر.",
            },
            {
              factor_en: "Door and finish",
              factor_ar: "الباب والتشطيب",
              detail_en: "Glazed or solid door, and finish, as specified.",
              detail_ar: "باب زجاجي أو مصمت، والتشطيب، حسب المواصفات.",
            },
          ],
          requestChecklist_en: [
            "Required contents",
            "Surface or recessed",
            "Door type and finish",
            "Available space, if limited",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المحتويات المطلوبة",
            "تثبيت سطحي أو غائر",
            "نوع الباب والتشطيب",
            "المساحة المتاحة إذا كانت محدودة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "fire-hose-reels",
            "landing-valves",
            "portable-fire-extinguishers",
          ],
          image: null,
          review: pending("AR صناديق الحريق"),
        },
        {
          id: "portable-fire-extinguishers",
          name_en: "Portable Fire Extinguishers",
          name_ar: "طفايات الحريق المحمولة",
          summary_en:
            "Hand-held extinguishers for first response, by extinguishing agent and fire class.",
          summary_ar:
            "طفايات يدوية للاستجابة الأولية، حسب مادة الإطفاء وفئة الحريق.",
          whatItIs_en:
            "A portable extinguisher containing dry powder, carbon dioxide, water or foam, with a wall bracket or stand.",
          whatItIs_ar:
            "طفاية محمولة تحتوي على بودرة جافة أو ثاني أكسيد الكربون أو مياه أو رغوة، مع حامل جداري أو قاعدة.",
          usedFor_en:
            "Tackling small fires at the point of need — the agent must suit the fire risk at each location.",
          usedFor_ar:
            "مواجهة الحرائق الصغيرة في موقع الحاجة، على أن تناسب مادة الإطفاء خطر الحريق في كل موقع.",
          applications_en: [
            "Offices and public areas",
            "Electrical and plant rooms",
            "Kitchens",
            "Workshops and warehouses",
          ],
          applications_ar: [
            "المكاتب والمناطق العامة",
            "غرف الكهرباء والمعدات",
            "المطابخ",
            "الورش والمستودعات",
          ],
          industryIds: [
            "commercial-buildings",
            "industrial-facilities",
            "warehouses-logistics",
            "healthcare-facilities",
            "public-buildings",
            "hotels-hospitality",
          ],
          selectionFactors: [
            {
              factor_en: "Extinguishing agent",
              factor_ar: "مادة الإطفاء",
              detail_en:
                "The agent your specification or risk assessment states for each location.",
              detail_ar:
                "مادة الإطفاء المحددة لكل موقع في مواصفاتكم أو تقييم المخاطر لديكم.",
            },
            {
              factor_en: "Capacity",
              factor_ar: "السعة",
              detail_en: "Capacity per extinguisher, as specified.",
              detail_ar: "سعة كل طفاية، حسب المواصفات.",
            },
            {
              factor_en: "Mounting",
              factor_ar: "التثبيت",
              detail_en: "Wall bracket, stand or cabinet.",
              detail_ar: "حامل جداري أو قاعدة أو داخل صندوق.",
            },
          ],
          requestChecklist_en: [
            "Extinguisher type and agent",
            "Capacity",
            "Mounting: bracket, stand or cabinet",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الطفاية ومادة الإطفاء",
            "السعة",
            "التثبيت: حامل أو قاعدة أو صندوق",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["fire-cabinets", "fire-hose-reels"],
          image: null,
          review: pending("agent list general only; no refilling service"),
        },
      ],
    },
    {
      categoryId: "fire-alarm",
      title_en: "Detection, Alarm & Emergency Lighting",
      title_ar: "الكشف والإنذار وإنارة الطوارئ",
      intro_en:
        "Fire alarm control panels, smoke, heat and beam detectors, emergency lighting and exit signs. Detection equipment is quoted against your specification and the compatibility requirements of the system it connects to.",
      intro_ar:
        "لوحات إنذار الحريق وكواشف الدخان والحرارة والكواشف الشعاعية وإنارة الطوارئ وعلامات الخروج المضيئة. ويتم إعداد عروض أسعار معدات الكشف وفق مواصفاتكم ومتطلبات التوافق مع النظام الذي ترتبط به.",
      icon: "BellRing",
      equipment: [
        {
          id: "fire-alarm-control-panels",
          linkedProductId: "addressable-panels",
          name_en: "Fire Alarm Control Panels",
          name_ar: "لوحات إنذار الحريق",
          summary_en:
            "Addressable or conventional panels that monitor detectors and raise the alarm.",
          summary_ar: "لوحات معنونة أو تقليدية تراقب الكواشف وتُطلق الإنذار.",
          whatItIs_en:
            "The control panel of a fire alarm system. Addressable panels identify each device; conventional panels report by zone.",
          whatItIs_ar:
            "لوحة التحكم في نظام إنذار الحريق، وتحدد اللوحات المعنونة كل جهاز على حدة، بينما تبين اللوحات التقليدية الإنذار حسب المنطقة.",
          usedFor_en:
            "Receiving signals from detectors and call points, sounding alarms and passing signals to other building systems.",
          usedFor_ar:
            "استقبال الإشارات من الكواشف ونقاط الإنذار اليدوية، وتشغيل أجهزة الإنذار، وإرسال الإشارات إلى أنظمة المبنى الأخرى.",
          applications_en: [
            "Offices and commercial buildings",
            "Hospitals and hotels",
            "Factories and warehouses",
            "Multi-building sites",
          ],
          applications_ar: [
            "المكاتب والمباني التجارية",
            "المستشفيات والفنادق",
            "المصانع والمستودعات",
            "المواقع متعددة المباني",
          ],
          industryIds: [
            "commercial-buildings",
            "healthcare-facilities",
            "hotels-hospitality",
            "industrial-facilities",
            "public-buildings",
          ],
          selectionFactors: [
            {
              factor_en: "Panel type",
              factor_ar: "نوع اللوحة",
              detail_en: "Addressable or conventional, as specified.",
              detail_ar: "معنونة أو تقليدية، حسب المواصفات.",
            },
            {
              factor_en: "Capacity",
              factor_ar: "السعة",
              detail_en:
                "Number of loops or zones stated in your project documents.",
              detail_ar: "عدد الحلقات أو المناطق الوارد في مستندات المشروع.",
            },
            {
              factor_en: "Compatibility",
              factor_ar: "التوافق",
              detail_en:
                "Compatibility with existing devices or a network of panels, where relevant.",
              detail_ar:
                "التوافق مع الأجهزة القائمة أو مع شبكة لوحات، عند الحاجة.",
            },
            {
              factor_en: "Interfaces",
              factor_ar: "الربط مع الأنظمة",
              detail_en: "Outputs to other building systems, as specified.",
              detail_ar: "مخارج الربط مع أنظمة المبنى الأخرى، حسب المواصفات.",
            },
          ],
          requestChecklist_en: [
            "Addressable or conventional",
            "Loops or zones from your project documents",
            "Existing system details, if extending one",
            "Repeater or network panels, if required",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "معنونة أو تقليدية",
            "عدد الحلقات أو المناطق من مستندات المشروع",
            "بيانات النظام القائم عند التوسعة",
            "لوحات العرض أو الشبكة، إذا لزم",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "smoke-detectors",
            "heat-detectors",
            "beam-smoke-detectors",
          ],
          image: null,
          review: pending("covers addressable and conventional panel records"),
        },
        {
          id: "smoke-detectors",
          linkedProductId: "smoke-detectors",
          name_en: "Smoke Detectors",
          name_ar: "كواشف الدخان",
          summary_en: "Point detectors that sense smoke at an early stage.",
          summary_ar: "كواشف نقطية تستشعر الدخان في مرحلة مبكرة.",
          whatItIs_en:
            "A ceiling-mounted optical smoke detector on a base, connected to the fire alarm panel.",
          whatItIs_ar:
            "كاشف دخان بصري يُثبَّت في السقف على قاعدة، ويتصل بلوحة إنذار الحريق.",
          usedFor_en:
            "Early warning of fire in occupied rooms, corridors and escape routes.",
          usedFor_ar:
            "الإنذار المبكر بالحريق في الغرف المشغولة والممرات ومسارات الهروب.",
          applications_en: [
            "Offices and bedrooms",
            "Corridors and escape routes",
            "Electrical and server rooms",
          ],
          applications_ar: [
            "المكاتب وغرف النوم",
            "الممرات ومسارات الهروب",
            "غرف الكهرباء والخوادم",
          ],
          industryIds: [
            "commercial-buildings",
            "healthcare-facilities",
            "hotels-hospitality",
            "public-buildings",
          ],
          selectionFactors: [
            {
              factor_en: "System compatibility",
              factor_ar: "التوافق مع النظام",
              detail_en:
                "Must be compatible with the fire alarm panel and its protocol.",
              detail_ar: "يجب أن يتوافق مع لوحة إنذار الحريق وبروتوكولها.",
            },
            {
              factor_en: "Addressable or conventional",
              factor_ar: "معنون أو تقليدي",
              detail_en: "To match the panel type.",
              detail_ar: "بما يناسب نوع اللوحة.",
            },
            {
              factor_en: "Base",
              factor_ar: "القاعدة",
              detail_en: "Standard base or a base with a sounder or isolator.",
              detail_ar: "قاعدة عادية أو قاعدة مزودة بجرس أو عازل.",
            },
          ],
          requestChecklist_en: [
            "Panel or system the detectors connect to",
            "Addressable or conventional",
            "Base type",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "اللوحة أو النظام الذي ترتبط به الكواشف",
            "معنون أو تقليدي",
            "نوع القاعدة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["fire-alarm-control-panels", "heat-detectors"],
          image: null,
          review: pending("compatibility is customer-defined"),
        },
        {
          id: "heat-detectors",
          linkedProductId: "heat-detectors",
          name_en: "Heat Detectors",
          name_ar: "كواشف الحرارة",
          summary_en:
            "Detectors for areas where smoke detection would cause false alarms.",
          summary_ar:
            "كواشف للمناطق التي قد يسبب فيها كشف الدخان إنذارات كاذبة.",
          whatItIs_en:
            "A point detector that responds to a fixed temperature or a rapid rate of rise.",
          whatItIs_ar:
            "كاشف نقطي يستجيب عند الوصول إلى درجة حرارة ثابتة أو عند الارتفاع السريع في درجة الحرارة.",
          usedFor_en:
            "Detecting fire in kitchens, car parks, plant rooms and dusty or steamy areas.",
          usedFor_ar:
            "كشف الحريق في المطابخ ومواقف السيارات وغرف المعدات والمناطق التي بها غبار أو بخار.",
          applications_en: ["Kitchens", "Car parks", "Plant and boiler rooms"],
          applications_ar: [
            "المطابخ",
            "مواقف السيارات",
            "غرف المعدات والغلايات",
          ],
          industryIds: [
            "commercial-buildings",
            "hotels-hospitality",
            "industrial-facilities",
            "healthcare-facilities",
          ],
          selectionFactors: [
            {
              factor_en: "Detection type",
              factor_ar: "طريقة الكشف",
              detail_en: "Fixed temperature or rate of rise, as specified.",
              detail_ar: "درجة حرارة ثابتة أو معدل ارتفاع، حسب المواصفات.",
            },
            {
              factor_en: "System compatibility",
              factor_ar: "التوافق مع النظام",
              detail_en:
                "Must be compatible with the fire alarm panel and its protocol.",
              detail_ar: "يجب أن يتوافق مع لوحة إنذار الحريق وبروتوكولها.",
            },
            {
              factor_en: "Base",
              factor_ar: "القاعدة",
              detail_en: "Base type to match the system.",
              detail_ar: "نوع القاعدة بما يناسب النظام.",
            },
          ],
          requestChecklist_en: [
            "Panel or system the detectors connect to",
            "Fixed temperature or rate of rise",
            "Base type",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "اللوحة أو النظام الذي ترتبط به الكواشف",
            "درجة حرارة ثابتة أو معدل ارتفاع",
            "نوع القاعدة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["smoke-detectors", "fire-alarm-control-panels"],
          image: null,
          review: pending("compatibility is customer-defined"),
        },
        {
          id: "beam-smoke-detectors",
          linkedProductId: "beam-detectors",
          name_en: "Beam Smoke Detectors",
          name_ar: "كواشف الدخان الشعاعية (Beam)",
          summary_en:
            "Beam detectors that cover large open and high-ceiling spaces.",
          summary_ar:
            "كواشف شعاعية تغطي المساحات المفتوحة الكبيرة والأسقف المرتفعة.",
          whatItIs_en:
            "A projected-beam smoke detector — a transmitter and receiver, or a single unit with a reflector — across the protected space.",
          whatItIs_ar:
            "كاشف دخان بشعاع ممتد عبر المساحة المحمية، يتكون من مُرسِل ومُستقبِل أو وحدة واحدة مع عاكس.",
          usedFor_en:
            "Detecting smoke where point detectors are hard to reach or space too widely apart.",
          usedFor_ar:
            "كشف الدخان في الأماكن التي يصعب فيها الوصول إلى الكواشف النقطية أو تتباعد فيها مسافاتها.",
          applications_en: [
            "Warehouses",
            "Halls and atriums",
            "Factories and hangars",
          ],
          applications_ar: [
            "المستودعات",
            "القاعات والردهات المفتوحة",
            "المصانع والحظائر",
          ],
          industryIds: [
            "warehouses-logistics",
            "industrial-facilities",
            "public-buildings",
            "commercial-buildings",
          ],
          selectionFactors: [
            {
              factor_en: "Beam type",
              factor_ar: "نوع الكاشف",
              detail_en: "Transmitter and receiver, or reflector type.",
              detail_ar: "مُرسِل ومُستقبِل، أو وحدة مع عاكس.",
            },
            {
              factor_en: "Coverage",
              factor_ar: "التغطية",
              detail_en:
                "Beam length and mounting height from your project documents.",
              detail_ar: "طول الشعاع وارتفاع التثبيت من مستندات المشروع.",
            },
            {
              factor_en: "System compatibility",
              factor_ar: "التوافق مع النظام",
              detail_en: "Interface with the fire alarm panel, as specified.",
              detail_ar: "طريقة الربط مع لوحة إنذار الحريق، حسب المواصفات.",
            },
          ],
          requestChecklist_en: [
            "Panel or system the detectors connect to",
            "Beam length and mounting height",
            "Transmitter-receiver or reflector type",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "اللوحة أو النظام الذي ترتبط به الكواشف",
            "طول الشعاع وارتفاع التثبيت",
            "مُرسِل ومُستقبِل أو وحدة مع عاكس",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["smoke-detectors", "fire-alarm-control-panels"],
          image: null,
          review: pending("AR كواشف الدخان الشعاعية"),
        },
        {
          id: "emergency-lighting",
          name_en: "Emergency Lighting",
          name_ar: "إنارة الطوارئ",
          summary_en:
            "Luminaires that light escape routes and key areas when normal power fails.",
          summary_ar:
            "وحدات إنارة تضيء مسارات الهروب والمناطق المهمة عند انقطاع التغذية العادية.",
          whatItIs_en:
            "An emergency luminaire with its own battery or fed from a central battery system, in maintained or non-maintained operation.",
          whatItIs_ar:
            "وحدة إنارة طوارئ ببطارية ذاتية أو متصلة بنظام بطاريات مركزي، تعمل بشكل مستمر أو عند الانقطاع فقط.",
          usedFor_en:
            "Lighting escape routes, stairs and exits so people can leave a building safely during a power failure.",
          usedFor_ar:
            "إنارة مسارات الهروب والسلالم والمخارج لتمكين الأشخاص من مغادرة المبنى بأمان عند انقطاع التيار.",
          applications_en: [
            "Corridors and stairs",
            "Exits and assembly areas",
            "Plant rooms and car parks",
          ],
          applications_ar: [
            "الممرات والسلالم",
            "المخارج ومناطق التجمع",
            "غرف المعدات ومواقف السيارات",
          ],
          industryIds: [
            "commercial-buildings",
            "healthcare-facilities",
            "hotels-hospitality",
            "public-buildings",
            "industrial-facilities",
          ],
          selectionFactors: [
            {
              factor_en: "Supply type",
              factor_ar: "نوع التغذية",
              detail_en: "Self-contained battery or central battery system.",
              detail_ar: "بطارية ذاتية أو نظام بطاريات مركزي.",
            },
            {
              factor_en: "Operation",
              factor_ar: "طريقة العمل",
              detail_en: "Maintained or non-maintained, as specified.",
              detail_ar: "تعمل بشكل مستمر أو عند الانقطاع فقط، حسب المواصفات.",
            },
            {
              factor_en: "Duration and mounting",
              factor_ar: "مدة التشغيل والتثبيت",
              detail_en:
                "Emergency duration and mounting as stated in your specification.",
              detail_ar:
                "مدة تشغيل الطوارئ وطريقة التثبيت كما وردتا في المواصفات.",
            },
          ],
          requestChecklist_en: [
            "Self-contained or central battery",
            "Maintained or non-maintained",
            "Emergency duration from the specification",
            "Mounting: ceiling, wall or recessed",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "بطارية ذاتية أو نظام مركزي",
            "تعمل بشكل مستمر أو عند الانقطاع فقط",
            "مدة تشغيل الطوارئ من المواصفات",
            "التثبيت: سقفي أو جداري أو غائر",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["exit-signs"],
          image: null,
          review: pending(
            "AR إنارة الطوارئ; maintained / non-maintained terms",
          ),
        },
        {
          id: "exit-signs",
          name_en: "Exit Signs",
          name_ar: "علامات الخروج المضيئة",
          summary_en:
            "Illuminated signs that mark exits and escape route directions.",
          summary_ar: "علامات مضيئة توضح المخارج واتجاهات مسارات الهروب.",
          whatItIs_en:
            "An illuminated exit sign with a pictogram and direction arrow, battery-backed or fed from a central system.",
          whatItIs_ar:
            "علامة خروج مضيئة برمز توضيحي وسهم اتجاه، مزودة ببطارية أو متصلة بنظام مركزي.",
          usedFor_en:
            "Guiding people to the nearest exit, including during a power failure.",
          usedFor_ar:
            "إرشاد الأشخاص إلى أقرب مخرج، بما في ذلك عند انقطاع التيار.",
          applications_en: [
            "Exit doors",
            "Corridors and changes of direction",
            "Stairs and assembly areas",
          ],
          applications_ar: [
            "أبواب المخارج",
            "الممرات وأماكن تغيير الاتجاه",
            "السلالم ومناطق التجمع",
          ],
          industryIds: [
            "commercial-buildings",
            "healthcare-facilities",
            "hotels-hospitality",
            "public-buildings",
          ],
          selectionFactors: [
            {
              factor_en: "Sign type",
              factor_ar: "نوع العلامة",
              detail_en:
                "Pictogram, wording and direction arrows, as specified.",
              detail_ar: "الرمز التوضيحي والنص وأسهم الاتجاه، حسب المواصفات.",
            },
            {
              factor_en: "Supply type",
              factor_ar: "نوع التغذية",
              detail_en: "Self-contained battery or central battery system.",
              detail_ar: "بطارية ذاتية أو نظام بطاريات مركزي.",
            },
            {
              factor_en: "Mounting",
              factor_ar: "التثبيت",
              detail_en: "Wall, ceiling-suspended or over-door.",
              detail_ar: "جداري أو معلق من السقف أو أعلى الباب.",
            },
          ],
          requestChecklist_en: [
            "Pictogram, wording and arrows",
            "Self-contained or central battery",
            "Mounting: wall, suspended or over-door",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "الرمز التوضيحي والنص والأسهم",
            "بطارية ذاتية أو نظام مركزي",
            "التثبيت: جداري أو معلق أو أعلى الباب",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["emergency-lighting"],
          image: null,
          review: pending("AR علامات الخروج المضيئة"),
        },
      ],
    },
  ],

  replacement: {
    title_en: "Replacing Existing Equipment?",
    title_ar: "هل تستبدل معدة موجودة؟",
    intro_en:
      "If you are replacing valves, hydrants, hose reels, fire hoses, fire cabinets, portable extinguishers, emergency lighting or exit signs already in service, start from the existing equipment. Fire pumps, controllers, drivers, fire alarm panels and detectors are quoted against your specification and the compatibility requirements of the existing system.",
    intro_ar:
      "إذا كنتم تستبدلون محابس أو حنفيات حريق أو بكرات خراطيم أو خراطيم حريق أو صناديق حريق أو طفايات محمولة أو وحدات إنارة طوارئ أو علامات خروج قائمة في الخدمة، فابدأوا من المعدة الحالية. أما مضخات الحريق ولوحات التحكم ومحركات التشغيل ولوحات إنذار الحريق والكواشف فيتم إعداد عروض أسعارها وفق مواصفاتكم ومتطلبات التوافق مع النظام القائم.",
    flowTitle_en: "How a replacement request works",
    flowTitle_ar: "كيف يتم التعامل مع طلب الاستبدال",
    flow_en: [
      "Existing equipment",
      "Nameplate or markings",
      "Photos",
      "Existing technical information",
      "Quantity",
      "Technical review",
      "Matching or technically suitable alternative",
      "Quotation",
    ],
    flow_ar: [
      "المعدة الحالية",
      "اللوحة التعريفية أو العلامات",
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
          "Nameplate photo, markings or model",
          "Photos of the equipment and how it is fitted",
          "Quantity",
          "Site or project",
          "Existing technical information, if available",
          "Required timing",
        ],
        items_ar: [
          "نوع المعدة",
          "صورة اللوحة التعريفية أو العلامات أو الموديل",
          "صور المعدة وطريقة تثبيتها",
          "العدد المطلوب",
          "الموقع أو المشروع",
          "البيانات الفنية المتاحة إن وُجدت",
          "التوقيت المطلوب",
        ],
      },
      {
        title_en: "Valves & hydrants",
        title_ar: "المحابس وحنفيات الحريق",
        items_en: [
          "Valve or hydrant type",
          "Size and pressure class",
          "End connection",
          "Body markings",
          "Hydrant outlet arrangement",
        ],
        items_ar: [
          "نوع المحبس أو الحنفية",
          "المقاس وفئة الضغط",
          "نوع التوصيل",
          "العلامات الموجودة على الجسم",
          "ترتيب مخارج الحنفية",
        ],
      },
      {
        title_en: "Hose reels, hoses & cabinets",
        title_ar: "بكرات الخراطيم والخراطيم والصناديق",
        items_en: [
          "Hose diameter and length",
          "Coupling type",
          "Reel type",
          "Cabinet mounting, door and contents",
        ],
        items_ar: [
          "قطر الخرطوم وطوله",
          "نوع الوصلات",
          "نوع البكرة",
          "طريقة تثبيت الصندوق والباب والمحتويات",
        ],
      },
      {
        title_en: "Portable fire extinguishers",
        title_ar: "طفايات الحريق المحمولة",
        items_en: [
          "Extinguisher label photo",
          "Type and agent",
          "Capacity",
          "Mounting",
        ],
        items_ar: [
          "صورة الملصق التعريفي للطفاية",
          "النوع ومادة الإطفاء",
          "السعة",
          "طريقة التثبيت",
        ],
      },
      {
        title_en: "Emergency lighting & exit signs",
        title_ar: "إنارة الطوارئ وعلامات الخروج",
        items_en: [
          "Photos and labels of the existing fittings",
          "Self-contained or central battery",
          "Maintained or non-maintained",
          "Mounting",
        ],
        items_ar: [
          "صور وبطاقات الوحدات الحالية",
          "بطارية ذاتية أو نظام مركزي",
          "تعمل بشكل مستمر أو عند الانقطاع فقط",
          "طريقة التثبيت",
        ],
      },
    ],
    note_en:
      "GOLTENS reviews the available equipment information and can source a matching or technically suitable alternative for quotation. Final equivalence and suitability should be confirmed by the customer's consultant, engineering team or responsible authority, as applicable.",
    note_ar:
      "تراجع GOLTENS بيانات المعدة المتاحة ويمكنها توفير معدة مطابقة أو بديل مناسب فنيًا ضمن عرض السعر، على أن يتم تأكيد التكافؤ والملاءمة النهائية من جانب الاستشاري أو الفريق الهندسي لدى العميل أو الجهة المسؤولة، بحسب الحالة.",
    ctaLabel_en: "Request a quotation for replacement equipment",
    ctaLabel_ar: "اطلب عرض سعر لمعدة بديلة",
    prefill_en: "Replacement of existing fire protection equipment",
    prefill_ar: "استبدال معدات مكافحة حريق قائمة",
  },

  request: {
    title_en: "What to Include in Your Quotation Request",
    title_ar: "ما الذي يجب إرساله مع طلب عرض السعر",
    intro_en:
      "Fire protection requests are driven by the customer or consultant documents. Send the documents and information you have — these are your inputs, and missing details can be clarified during quotation.",
    intro_ar:
      "تعتمد طلبات معدات مكافحة الحريق على مستندات العميل أو الاستشاري. أرسلوا ما يتوفر لديكم من مستندات وبيانات، فهي مدخلاتكم، ويمكن استكمال أي بيانات ناقصة أثناء إعداد عرض السعر.",
    checklistTitle_en: "Minimum information",
    checklistTitle_ar: "الحد الأدنى من البيانات",
    checklist_en: [
      "Organization / customer name",
      "Project or site location",
      "BOQ / equipment list",
      "Required quantities",
      "Customer or consultant specification",
      "Required listing / approval criteria, if applicable",
      "Delivery location",
      "Required timing",
      "Project / tender reference",
      "Contact details",
    ],
    checklist_ar: [
      "اسم الجهة / العميل",
      "موقع المشروع",
      "جدول الكميات / قائمة المعدات",
      "الكميات المطلوبة",
      "مواصفات العميل أو الاستشاري",
      "متطلبات الإدراج أو الاعتماد المطلوبة، إن وجدت",
      "مكان التوريد",
      "التوقيت المطلوب",
      "مرجع المشروع / المناقصة",
      "بيانات التواصل",
    ],
    secondaryChecklist: {
      title_en: "Useful technical information",
      title_ar: "بيانات فنية مفيدة",
      items_en: [
        "Pump duty information from the approved project documentation",
        "Pump driver / controller requirement",
        "Valve size",
        "Pressure class",
        "End connection",
        "Sprinkler type / response requirement",
        "Hose diameter / length / coupling requirement",
        "Extinguisher type / agent requirement",
        "Fire alarm panel type",
        "Detector type and compatibility requirements",
        "Existing equipment nameplate / model",
        "Existing equipment photos",
        "Required documentation",
        "Quantity and installation location",
      ],
      items_ar: [
        "بيانات تشغيل المضخة الواردة في مستندات المشروع المعتمدة",
        "متطلبات محرك / لوحة تحكم المضخة",
        "مقاس المحبس",
        "فئة الضغط",
        "نوع التوصيل",
        "نوع الرشاش / متطلبات الاستجابة",
        "قطر / طول الخرطوم ونوع الوصلة",
        "نوع الطفاية / مادة الإطفاء المطلوبة",
        "نوع لوحة إنذار الحريق",
        "نوع الكاشف ومتطلبات التوافق",
        "لوحة بيانات المعدة الحالية / الموديل",
        "صور المعدة الحالية",
        "المستندات المطلوبة",
        "الكمية وموقع التركيب",
      ],
    },
    checklistNote_en:
      "You can include several fire protection items in one quotation request. If you are not sure about a detail, leave it out — our team will ask for what is needed to prepare the quotation.",
    checklistNote_ar:
      "يمكنكم إدراج عدة بنود من معدات مكافحة الحريق ضمن طلب عرض سعر واحد. وإذا لم تكونوا متأكدين من أحد البيانات يمكنكم تركه، وسيطلب فريقنا ما يلزم لإعداد عرض السعر.",
    processTitle_en: "How GOLTENS handles the request",
    processTitle_ar: "كيف تتعامل GOLTENS مع الطلب",
    steps: [
      {
        title_en: "Requirement",
        title_ar: "استلام المتطلبات",
        description_en:
          "Send your requirement through the quotation form on this page, with the BOQ, equipment list or specification and any nameplate photos.",
        description_ar:
          "أرسلوا متطلباتكم من خلال نموذج طلب عرض السعر في هذه الصفحة، مع جدول الكميات أو قائمة المعدات أو المواصفات وأي صور للوحات التعريفية.",
      },
      {
        title_en: "Review of customer / consultant documentation",
        title_ar: "مراجعة مستندات العميل أو الاستشاري",
        description_en:
          "Our team reviews the documents you send and asks for anything needed to define the equipment.",
        description_ar:
          "يراجع فريقنا المستندات المرسلة ويطلب أي بيانات إضافية لازمة لتحديد المعدة.",
      },
      {
        title_en: "Sourcing to the stated requirement",
        title_ar: "توفير المعدات وفق المتطلبات المحددة",
        description_en:
          "We source equipment that matches the stated requirement — or, where you accept one, a technically suitable alternative — for quotation.",
        description_ar:
          "نوفر المعدات المطابقة للمتطلبات المحددة، أو بديلًا مناسبًا فنيًا إذا كنتم تقبلون بذلك، ضمن عرض السعر.",
      },
      {
        title_en: "Quotation",
        title_ar: "إعداد عرض السعر",
        description_en:
          "You receive a quotation stating the proposed equipment, availability and lead time. Final technical acceptance remains with the customer, consultant or responsible authority, as applicable.",
        description_ar:
          "تتسلمون عرض سعر يوضح المعدات المقترحة وتوافرها ومدة التوريد، ويظل القبول الفني النهائي من مسؤولية العميل أو الاستشاري أو الجهة المسؤولة، بحسب الحالة.",
      },
    ],
  },

  quote: {
    title_en: "Request a Quote",
    title_ar: "اطلب عرض سعر",
    subtitle_en:
      "Tell us what you need — equipment type, quantity and the BOQ or specification you have. Equipment is available on request.",
    subtitle_ar:
      "أخبرونا بما تحتاجونه: نوع المعدة والعدد وجدول الكميات أو المواصفات المتاحة لديكم. المعدات متاحة حسب الطلب.",
  },
};
