import type {
  EquipmentGuideReview,
  SectorEquipmentGuide,
  SectorFaq,
  SectorHeroCopy,
} from "@/data/sector-content/types";

/**
 * Industrial Equipment & Pumps — industrial equipment procurement &
 * selection guide (application matrix, three equipment families of four
 * guides each, a replacement / nameplate path, and a two-part quotation
 * checklist). Rendered by `app/[locale]/sectors/[slug]/page.tsx` via
 * `SectorContent.equipmentGuide`.
 *
 * Content rules (enforced by `scripts/verify-equipment-guides.mjs`):
 * - Approved scope only: pumps, valves & actuators, and air compressors &
 *   systems — "Available on request.", i.e. supplyable according to the
 *   customer's requirement, never stock. Replacement / equivalent sourcing
 *   leaves final equivalence and suitability with the customer's
 *   engineering team.
 * - The 15 `data/products/industrial-equipment/*` records are internal
 *   source material only: they stay non-public and are never linked.
 *   `centrifugal-pumps` is the umbrella for the pump guides; there is no
 *   guide for `pressure-relief-valves` or `gas-compressors`.
 * - No manufacturer names or brand-derived generic terms, no numeric
 *   ranges, standards, ratings, air-quality classes or certifications, and
 *   no spare-parts, seals supply, after-sales, warranty, installation,
 *   stock or delivery claims. Fluid / material compatibility and required
 *   air quality are always customer inputs.
 *
 * Every entry awaits technical review (`review.technical`) and
 * Egyptian-market Arabic terminology review (`review.arabic`).
 *
 * Arabic primary terms: مضخات طرد مركزي أفقية ذات سحب طرفي · مضخات توربينية
 * رأسية · مضخات غاطسة · مضخات ذاتية التحضير · صمامات كروية · صمامات بوابة ·
 * صمامات تحكم · مشغلات كهربائية للصمامات · ضواغط هواء لولبية · ضواغط هواء
 * ترددية (مكبسية) · خزانات ومجففات الهواء المضغوط · مرشحات الهواء المضغوط.
 * Market synonyms (طلمبة، محبس، بلف، كمبروسر، …) appear only as secondary
 * wording.
 */

const pending = (notes: string): EquipmentGuideReview => ({
  technical: "needs-verification",
  arabic: "needs-verification",
  notes,
});

const CHECKLIST_CLOSING_EN = "Quantity, delivery location and required timing";
const CHECKLIST_CLOSING_AR = "العدد المطلوب ومكان التسليم والتوقيت المطلوب";

/** Sector-page hero copy (replaces the `data/sectors.ts` subtitle/description on this page only). */
export const industrialEquipmentHero: SectorHeroCopy = {
  subtitle_en:
    "GOLTENS supplies industrial equipment according to your operating requirements, technical specifications and project or tender needs.",
  subtitle_ar:
    "توفر GOLTENS المعدات الصناعية وفق متطلبات التشغيل والمواصفات الفنية واحتياجات المشروع أو المناقصة.",
  description_en:
    "Pumps, valves, actuators and compressed-air equipment are specified according to your application. Availability and configuration are confirmed during quotation.",
  description_ar:
    "مضخات وصمامات ومشغلات ومعدات للهواء المضغوط تُحدَّد وفق طبيعة الاستخدام، ويتم تأكيد التوافر والتكوين أثناء إعداد عرض السعر.",
};

export const industrialEquipmentFaqs: SectorFaq[] = [
  {
    question_en: "How do I request industrial equipment?",
    answer_en:
      "Use the quotation form on this page. Include the equipment type, quantity and application, and whatever operating information you have — each equipment guide lists the details that matter for that equipment.",
    question_ar: "كيف أطلب معدات صناعية؟",
    answer_ar:
      "استخدموا نموذج طلب عرض السعر في هذه الصفحة، وأرسلوا نوع المعدة والعدد المطلوب وطبيعة الاستخدام وما يتوفر لديكم من بيانات التشغيل. ويوضح كل دليل معدة البيانات المهمة الخاصة بها.",
  },
  {
    question_en: "What information should I send for a pump?",
    answer_en:
      "The liquid and its temperature, the required flow and head, the suction conditions, the power supply and the connection sizes. If you are replacing a pump, photos of the pump and motor nameplates help.",
    question_ar: "ما البيانات التي يجب إرسالها لطلب مضخة؟",
    answer_ar:
      "نوع السائل ودرجة حرارته، ومعدل التدفق والرفع المطلوبان، وظروف السحب، ومصدر الكهرباء، ومقاسات التوصيل. وإذا كنتم تستبدلون مضخة قائمة، فإن صور اللوحة التعريفية للمضخة وللمحرك تساعد في ذلك.",
  },
  {
    question_en: "Can GOLTENS provide a replacement for existing equipment?",
    answer_en:
      "Yes. Send the nameplate photo, photos of the equipment, the available operating information, the quantity and the site or project. GOLTENS reviews the available equipment information and can source a matching or technically suitable alternative for quotation. Final equivalence and suitability should be confirmed by the customer's engineering team.",
    question_ar: "هل يمكن لـGOLTENS توفير بديل لمعدة قائمة؟",
    answer_ar:
      "نعم، أرسلوا صورة اللوحة التعريفية وصور المعدة وبيانات التشغيل المتاحة والعدد المطلوب والموقع أو المشروع. تراجع GOLTENS بيانات المعدة المتاحة ويمكنها توفير معدة مطابقة أو بديل مناسب فنيًا ضمن عرض السعر، على أن يتم تأكيد التكافؤ والملاءمة النهائية من جانب الفريق الهندسي لدى العميل.",
  },
  {
    question_en: "Can you source an equivalent alternative?",
    answer_en:
      "Where a specific model is not required, GOLTENS can propose a technically suitable alternative in the quotation and identify it clearly as an alternative. Final equivalence and suitability should be confirmed by your engineering team.",
    question_ar: "هل يمكنكم توفير بديل معادل؟",
    answer_ar:
      "عندما لا يكون طراز بعينه مطلوبًا، يمكن لـGOLTENS اقتراح بديل مناسب فنيًا ضمن عرض السعر مع توضيح أنه بديل. ويتم تأكيد التكافؤ والملاءمة النهائية من جانب الفريق الهندسي لديكم.",
  },
  {
    question_en: "Do I need the exact model number?",
    answer_en:
      "No. A nameplate photo, photos of the equipment and the operating information are often enough to start — our team will ask for anything else needed to prepare the quotation.",
    question_ar: "هل أحتاج إلى رقم الطراز بدقة؟",
    answer_ar:
      "لا، فصورة اللوحة التعريفية وصور المعدة وبيانات التشغيل تكفي غالبًا للبدء، وسيطلب فريقنا أي بيانات أخرى لازمة لإعداد عرض السعر.",
  },
  {
    question_en: "What if I don't have the complete technical specification?",
    answer_en:
      "Send what you have. The minimum is the equipment type, quantity and application; missing details can be clarified during quotation.",
    question_ar: "ماذا لو لم تكن لدي المواصفات الفنية كاملة؟",
    answer_ar:
      "أرسلوا ما يتوفر لديكم. الحد الأدنى هو نوع المعدة والعدد المطلوب وطبيعة الاستخدام، ويمكن استكمال البيانات الناقصة أثناء إعداد عرض السعر.",
  },
  {
    question_en: "Can you supply equipment not listed on this page?",
    answer_en:
      "The guides cover common pumps, valves, actuators and compressed-air equipment. Additional equipment can be reviewed according to your requirement — send the details through the quotation form.",
    question_ar: "هل يمكنكم توريد معدات غير مذكورة في هذه الصفحة؟",
    answer_ar:
      "تغطي الأدلة المضخات والصمامات والمشغلات ومعدات الهواء المضغوط الشائعة، ويمكن مراجعة معدات إضافية وفق متطلباتكم؛ أرسلوا التفاصيل من خلال نموذج طلب عرض السعر.",
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

export const industrialEquipmentGuide: SectorEquipmentGuide = {
  heroVisual: "neutral",
  availability_en: "Available on request.",
  availability_ar: "متاح حسب الطلب.",

  intro: {
    eyebrow_en: "Industrial equipment procurement guide",
    eyebrow_ar: "دليل توريد المعدات الصناعية",
    lead_en:
      "GOLTENS supplies pumps, valves and actuators, and air compressors and systems according to your operating requirements and technical specifications. Use this guide to start from your application, review what matters when selecting each equipment type, and prepare the information we need to quote — or send the nameplate of the equipment you are replacing.",
    lead_ar:
      "توفر GOLTENS المضخات والصمامات والمشغلات وضواغط الهواء وأنظمتها وفق متطلبات التشغيل والمواصفات الفنية لديكم. استخدموا هذا الدليل للبدء من طبيعة الاستخدام، ومراجعة أهم اعتبارات اختيار كل نوع من المعدات، وتجهيز البيانات التي نحتاجها لإعداد عرض السعر، أو أرسلوا اللوحة التعريفية للمعدة التي تريدون استبدالها.",
    note_en:
      "These guides are general information to help you define your requirement — not a list of stocked models. Equipment is available on request; configuration and availability are confirmed during quotation.",
    note_ar:
      "هذه الأدلة معلومات عامة تساعدكم على تحديد احتياجكم، وليست قائمة بموديلات مخزنة. المعدات متاحة حسب الطلب، ويتم تأكيد التكوين والتوافر أثناء إعداد عرض السعر.",
  },

  projectsTitle_en: "Choose Equipment by Application",
  projectsTitle_ar: "اختر المعدة حسب طبيعة الاستخدام",
  projectsIntro_en:
    "Typical equipment for common industrial applications. Every system is different, so use this as a starting point and confirm the final selection against your requirements.",
  projectsIntro_ar:
    "المعدات المعتادة لأكثر الاستخدامات الصناعية شيوعًا. ولأن كل نظام يختلف عن غيره، استخدموها كنقطة بداية وتأكدوا من الاختيار النهائي وفق متطلباتكم.",

  industries: [
    {
      id: "water-wastewater",
      label_en: "Water & wastewater utilities",
      label_ar: "مرافق المياه والصرف الصحي",
    },
    {
      id: "buildings",
      label_en: "Commercial & residential buildings",
      label_ar: "المباني التجارية والسكنية",
    },
    {
      id: "industrial-plants",
      label_en: "Industrial & process plants",
      label_ar: "المنشآت الصناعية ومنشآت العمليات",
    },
    {
      id: "hvac-cooling",
      label_en: "HVAC & cooling systems",
      label_ar: "أنظمة التكييف والتبريد",
    },
    {
      id: "agriculture",
      label_en: "Agriculture & irrigation",
      label_ar: "الزراعة والري",
    },
    {
      id: "construction-sites",
      label_en: "Construction & mining sites",
      label_ar: "مواقع الإنشاءات والتعدين",
    },
    {
      id: "oil-gas",
      label_en: "Oil & gas facilities",
      label_ar: "منشآت النفط والغاز",
    },
    {
      id: "power-utilities",
      label_en: "Power & utility plants",
      label_ar: "محطات الطاقة والمرافق",
    },
    {
      id: "workshops",
      label_en: "Workshops & manufacturing",
      label_ar: "الورش وخطوط التصنيع",
    },
  ],

  projects: [
    {
      id: "water-transfer",
      title_en: "Water transfer and building supply",
      title_ar: "نقل المياه وتغذية المباني",
      description_en:
        "Moving clean water within buildings, utilities and plants, and isolating the lines that carry it.",
      description_ar:
        "نقل المياه النظيفة داخل المباني والمرافق والمنشآت، وعزل الخطوط التي تنقلها.",
      equipmentIds: [
        "end-suction-centrifugal-pumps",
        "vertical-turbine-pumps",
        "gate-valves",
        "ball-valves",
      ],
      review: pending("application mapping"),
    },
    {
      id: "pressure-boosting",
      title_en: "Pressure boosting",
      title_ar: "رفع ضغط المياه",
      description_en:
        "Raising water pressure in buildings and distribution networks with individually selected pumps.",
      description_ar:
        "رفع ضغط المياه في المباني وشبكات التوزيع باستخدام مضخات تُختار كل منها وفق التشغيل المطلوب.",
      equipmentIds: [
        "end-suction-centrifugal-pumps",
        "vertical-turbine-pumps",
        "gate-valves",
      ],
      review: pending(
        "individual pumps only — no packaged pressure-boosting systems in the repository data",
      ),
    },
    {
      id: "well-extraction",
      title_en: "Well and borehole extraction",
      title_ar: "استخراج المياه من الآبار",
      description_en: "Lifting water from wells, boreholes and open sources.",
      description_ar:
        "رفع المياه من الآبار العميقة والجوفية والمصادر المفتوحة.",
      equipmentIds: ["vertical-turbine-pumps", "submersible-pumps"],
      review: pending("application mapping"),
    },
    {
      id: "drainage-wastewater",
      title_en: "Drainage, dewatering and wastewater",
      title_ar: "الصرف ونزح المياه ومياه الصرف",
      description_en:
        "Removing water from pits, basements and sites, and transferring wastewater that carries solids.",
      description_ar:
        "تصريف المياه من الحفر والبدرومات والمواقع، ونقل مياه الصرف المحملة بالمواد الصلبة.",
      equipmentIds: ["submersible-pumps", "self-priming-pumps", "gate-valves"],
      review: pending("application mapping; solids-handling wording"),
    },
    {
      id: "hvac-cooling",
      title_en: "HVAC and cooling-water circulation",
      title_ar: "دوران مياه التبريد وأنظمة التكييف",
      description_en:
        "Circulating chilled, hot and cooling water, with isolation and control on the circuit.",
      description_ar:
        "تدوير المياه المبردة والساخنة ومياه التبريد، مع العزل والتحكم في الدائرة.",
      equipmentIds: [
        "end-suction-centrifugal-pumps",
        "control-valves",
        "ball-valves",
      ],
      review: pending("application mapping"),
    },
    {
      id: "process-transfer",
      title_en: "Process and tank-to-tank transfer",
      title_ar: "نقل السوائل في العمليات وبين الخزانات",
      description_en:
        "Moving process liquids between tanks and units — the liquid and the material compatibility you require are part of your request.",
      description_ar:
        "نقل سوائل العمليات بين الخزانات والوحدات، على أن يحدد طلبكم نوع السائل والتوافق المطلوب مع الخامات.",
      equipmentIds: [
        "end-suction-centrifugal-pumps",
        "self-priming-pumps",
        "ball-valves",
      ],
      review: pending(
        "compatibility stays a customer input — no chemical-duty claims",
      ),
    },
    {
      id: "pipeline-isolation",
      title_en: "Pipeline isolation and flow control",
      title_ar: "عزل خطوط الأنابيب والتحكم في التدفق",
      description_en:
        "Isolating, sectioning and controlling flow in water, utility and process lines.",
      description_ar:
        "عزل خطوط المياه والمرافق والعمليات وتقسيمها والتحكم في التدفق فيها.",
      equipmentIds: ["ball-valves", "gate-valves", "control-valves"],
      review: pending("application mapping"),
    },
    {
      id: "valve-automation",
      title_en: "Valve automation and remote operation",
      title_ar: "أتمتة الصمامات والتشغيل عن بُعد",
      description_en: "Operating valves remotely or from a control system.",
      description_ar: "تشغيل الصمامات عن بُعد أو من خلال نظام التحكم.",
      equipmentIds: [
        "electric-valve-actuators",
        "control-valves",
        "ball-valves",
      ],
      review: pending("application mapping"),
    },
    {
      id: "industrial-compressed-air",
      title_en: "Industrial compressed air",
      title_ar: "الهواء المضغوط الصناعي",
      description_en:
        "Generating and storing compressed air for tools, production lines and instruments.",
      description_ar:
        "إنتاج الهواء المضغوط وتخزينه للأدوات وخطوط الإنتاج والأجهزة.",
      equipmentIds: [
        "rotary-screw-air-compressors",
        "reciprocating-air-compressors",
        "air-receivers-dryers",
      ],
      review: pending("application mapping"),
    },
    {
      id: "clean-dry-air",
      title_en: "Clean and dry compressed air",
      title_ar: "الهواء المضغوط النظيف والجاف",
      description_en:
        "Removing moisture, oil and particles to the air quality your equipment or process specifies.",
      description_ar:
        "إزالة الرطوبة والزيت والجسيمات للوصول إلى جودة الهواء التي تحددها معداتكم أو عمليتكم.",
      equipmentIds: [
        "air-receivers-dryers",
        "compressed-air-filters",
        "rotary-screw-air-compressors",
      ],
      review: pending("air quality is a customer specification — no grades"),
    },
  ],

  categories: [
    // ------------------------------------------------------------------
    // Pumps
    // ------------------------------------------------------------------
    {
      categoryId: "process-pumps",
      title_en: "Pumps",
      title_ar: "المضخات",
      intro_en:
        "The pumps in this guide are centrifugal designs, chosen around the liquid, the required flow and head, and how the pump is installed. Start from your duty point — or from the nameplate of the pump you are replacing.",
      intro_ar:
        "المضخات في هذا الدليل من تصميمات الطرد المركزي، ويُختار كل منها وفق نوع السائل ومعدل التدفق والرفع المطلوبين وطريقة التركيب. ابدأوا من نقطة التشغيل المطلوبة، أو من اللوحة التعريفية للمضخة التي تريدون استبدالها.",
      icon: "Droplets",
      equipment: [
        {
          id: "end-suction-centrifugal-pumps",
          linkedProductId: "end-suction-pumps",
          name_en: "Horizontal End-Suction Centrifugal Pumps",
          name_ar: "مضخات طرد مركزي أفقية ذات سحب طرفي",
          summary_en:
            "The general-purpose horizontal pump for clean water, HVAC circulation and light process transfer.",
          summary_ar:
            "المضخة الأفقية العامة لنقل المياه النظيفة وتدوير مياه أنظمة التكييف والنقل الخفيف لسوائل العمليات، وتُعرف في السوق أيضًا بـ«طلمبة طرد مركزي».",
          whatItIs_en:
            "A single-stage centrifugal pump in which the liquid enters the impeller along the shaft axis and leaves at right angles. It is supplied close-coupled or long-coupled on a baseplate, and many designs allow the rotating assembly to be removed without disturbing the pipework.",
          whatItIs_ar:
            "مضخة طرد مركزي أحادية المرحلة يدخل فيها السائل إلى الدفاعة في اتجاه محور العمود ويخرج عموديًا عليه. وتُورَّد بمحرك مدمج مباشرة أو منفصل على قاعدة، وتسمح تصميمات كثيرة منها بفك المجموعة الدوارة دون فك المواسير.",
          usedFor_en:
            "Moving clean or lightly contaminated liquids at steady flow in buildings, utilities and industrial plants.",
          usedFor_ar:
            "نقل السوائل النظيفة أو قليلة الشوائب بتدفق مستقر في المباني والمرافق والمنشآت الصناعية.",
          applications_en: [
            "Building and municipal water supply",
            "HVAC chilled and hot water circulation",
            "Cooling water circulation in industrial plants",
            "Irrigation water supply",
          ],
          applications_ar: [
            "إمداد المياه للمباني والاستخدامات البلدية",
            "تدوير المياه المبردة والساخنة في أنظمة التكييف",
            "تدوير مياه التبريد في المنشآت الصناعية",
            "إمداد مياه الري",
          ],
          industryIds: [
            "water-wastewater",
            "buildings",
            "hvac-cooling",
            "industrial-plants",
            "agriculture",
          ],
          selectionFactors: [
            {
              factor_en: "Duty point",
              factor_ar: "نقطة التشغيل",
              detail_en:
                "The required flow and head together define the pump — state both, with the system's operating range if known.",
              detail_ar:
                "يحدد معدل التدفق المطلوب والرفع معًا المضخة المناسبة؛ يُرجى ذكرهما مع نطاق تشغيل النظام إن كان معروفًا.",
            },
            {
              factor_en: "Liquid and temperature",
              factor_ar: "السائل ودرجة الحرارة",
              detail_en:
                "The liquid, its temperature and any solids it carries determine the casing and impeller materials.",
              detail_ar:
                "يحدد نوع السائل ودرجة حرارته ووجود أي شوائب خامات الغلاف والدفاعة.",
            },
            {
              factor_en: "Shaft sealing",
              factor_ar: "منع التسرب عند العمود",
              detail_en:
                "Gland packing or a mechanical seal is chosen according to the liquid and the operating conditions.",
              detail_ar:
                "يُختار الحشو أو مانع التسرب الميكانيكي وفق نوع السائل وظروف التشغيل.",
            },
            {
              factor_en: "Motor and installation",
              factor_ar: "المحرك والتركيب",
              detail_en:
                "The power supply, motor enclosure and the space available for the pump set must suit the site.",
              detail_ar:
                "يجب أن يناسب مصدر الكهرباء ونوع غلاف المحرك والمساحة المتاحة لمجموعة الضخ ظروف الموقع.",
            },
          ],
          requestChecklist_en: [
            "Liquid pumped and its temperature",
            "Required flow and head",
            "Suction source and conditions",
            "Connection sizes and power supply",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "السائل المنقول ودرجة حرارته",
            "معدل التدفق والرفع المطلوبان",
            "مصدر السحب وظروفه",
            "مقاسات التوصيل ومصدر الكهرباء",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "vertical-turbine-pumps",
            "self-priming-pumps",
            "gate-valves",
          ],
          image: null,
          review: pending(
            "covers the centrifugal-pumps umbrella record; AR term and market synonym",
          ),
        },
        {
          id: "vertical-turbine-pumps",
          linkedProductId: "vertical-turbine-pumps",
          name_en: "Vertical Turbine Pumps",
          name_ar: "مضخات توربينية رأسية",
          summary_en:
            "A vertical multistage pump for deep wells, water intakes and pumping stations.",
          summary_ar:
            "مضخة رأسية متعددة المراحل للآبار العميقة ومآخذ المياه ومحطات الضخ، وتُعرف في السوق أيضًا بـ«طلمبة آبار توربينية».",
          whatItIs_en:
            "A pump whose impeller bowls hang in the well or sump on a column pipe, driven through a lineshaft by a motor mounted at the surface. The number of bowls is selected to reach the required head.",
          whatItIs_ar:
            "مضخة تتدلى وحدات الدفاعات فيها داخل البئر أو البيارة على ماسورة عمودية، ويُدار عمودها من محرك مركّب على السطح. ويُحدَّد عدد الوحدات بما يحقق الرفع المطلوب.",
          usedFor_en:
            "Lifting large volumes of water from wells, sumps and open sources where the motor must stay above the water.",
          usedFor_ar:
            "رفع كميات كبيرة من المياه من الآبار والبيارات والمصادر المفتوحة مع بقاء المحرك فوق سطح المياه.",
          applications_en: [
            "Deep well water extraction",
            "Water supply pumping stations",
            "Irrigation water supply",
            "River and open-source water intake",
          ],
          applications_ar: [
            "استخراج المياه من الآبار العميقة",
            "محطات ضخ مياه الإمداد",
            "إمداد مياه الري",
            "سحب المياه من الأنهار والمصادر المفتوحة",
          ],
          industryIds: [
            "water-wastewater",
            "agriculture",
            "industrial-plants",
            "power-utilities",
          ],
          selectionFactors: [
            {
              factor_en: "Well or sump data",
              factor_ar: "بيانات البئر أو البيارة",
              detail_en:
                "Well depth and diameter, and the static and pumping water levels, set the pump's length and size.",
              detail_ar:
                "يحدد عمق البئر وقطره ومنسوب المياه الثابت ومنسوب التشغيل طول المضخة ومقاسها.",
            },
            {
              factor_en: "Duty point",
              factor_ar: "نقطة التشغيل",
              detail_en:
                "The required flow and discharge head decide the bowl design and how many bowls are needed.",
              detail_ar:
                "يحدد معدل التدفق ورفع الطرد المطلوبان تصميم وحدات الدفاعات وعددها.",
            },
            {
              factor_en: "Water quality",
              factor_ar: "جودة المياه",
              detail_en:
                "Sand, salinity or other aggressive conditions affect material selection.",
              detail_ar:
                "تؤثر الرمال أو الملوحة أو الظروف المسببة للتآكل في اختيار الخامات.",
            },
            {
              factor_en: "Drive and lineshaft",
              factor_ar: "الإدارة والعمود",
              detail_en:
                "Motor type, power supply and an open or enclosed lineshaft are chosen for the site.",
              detail_ar:
                "يُختار نوع المحرك ومصدر الكهرباء ونوع العمود المكشوف أو المغلف وفق ظروف الموقع.",
            },
          ],
          requestChecklist_en: [
            "Well or sump depth, diameter and water levels",
            "Required flow and head",
            "Water quality, including sand or salinity",
            "Power supply at the site",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "عمق البئر أو البيارة وقطرها ومناسيب المياه",
            "معدل التدفق والرفع المطلوبان",
            "جودة المياه بما في ذلك الرمال أو الملوحة",
            "مصدر الكهرباء في الموقع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "submersible-pumps",
            "end-suction-centrifugal-pumps",
          ],
          image: null,
          review: pending("well-pump wording; AR market synonym"),
        },
        {
          id: "submersible-pumps",
          linkedProductId: "submersible-pumps",
          name_en: "Submersible Pumps",
          name_ar: "مضخات غاطسة",
          summary_en:
            "A sealed pump-and-motor unit that works fully submerged, for boreholes, drainage and wastewater.",
          summary_ar:
            "وحدة مضخة ومحرك محكمة تعمل وهي مغمورة بالكامل، للآبار والصرف ومياه الصرف الصحي، وتُعرف في السوق أيضًا بـ«طلمبة غاطسة».",
          whatItIs_en:
            "A pump whose sealed motor is installed with it below the liquid surface. Borehole designs are slim and multistage for clean water; drainage and sewage designs use open, vortex or channel impellers to pass solids.",
          whatItIs_ar:
            "مضخة يُركَّب محركها المحكم معها تحت سطح السائل. وتكون تصميمات الآبار نحيفة ومتعددة المراحل للمياه النظيفة، بينما تستخدم تصميمات الصرف ومياه الصرف الصحي دفاعات مفتوحة أو دوامية أو قنوية لتمرير المواد الصلبة.",
          usedFor_en:
            "Pumping from boreholes, pits and tanks where the pump must sit in the liquid, including water that carries solids.",
          usedFor_ar:
            "الضخ من الآبار والحفر والخزانات حيث يجب أن تكون المضخة داخل السائل، بما في ذلك المياه المحملة بالمواد الصلبة.",
          applications_en: [
            "Borehole water extraction",
            "Drainage of pits, basements and sumps",
            "Raw sewage and wastewater transfer",
            "Dewatering of construction and mining sites",
          ],
          applications_ar: [
            "استخراج المياه من الآبار الجوفية",
            "صرف المياه من الحفر والبدرومات والبيارات",
            "نقل مياه الصرف الصحي الخام ومياه الصرف",
            "نزح المياه في مواقع الإنشاءات والتعدين",
          ],
          industryIds: [
            "water-wastewater",
            "construction-sites",
            "buildings",
            "agriculture",
          ],
          selectionFactors: [
            {
              factor_en: "Clean water or solids",
              factor_ar: "مياه نظيفة أم محملة بالمواد الصلبة",
              detail_en:
                "Borehole pumps and drainage or sewage pumps are different designs — state the liquid and the solids it carries.",
              detail_ar:
                "تختلف مضخات الآبار في تصميمها عن مضخات الصرف ومياه الصرف الصحي؛ يُرجى ذكر نوع السائل والمواد الصلبة التي يحملها.",
            },
            {
              factor_en: "Duty point",
              factor_ar: "نقطة التشغيل",
              detail_en:
                "The required flow and head, including the depth at which the pump will sit.",
              detail_ar:
                "معدل التدفق والرفع المطلوبان، مع العمق الذي ستُركَّب عنده المضخة.",
            },
            {
              factor_en: "Installation",
              factor_ar: "طريقة التركيب",
              detail_en:
                "Permanent or portable, free-standing or on a guide-rail system.",
              detail_ar:
                "تركيب دائم أو متنقل، قائم بذاته أو على نظام مجارٍ إرشادية.",
            },
            {
              factor_en: "Power and level control",
              factor_ar: "الكهرباء والتحكم في المنسوب",
              detail_en:
                "Power supply, cable length and the level-control arrangement.",
              detail_ar: "مصدر الكهرباء وطول الكابل وطريقة التحكم في المنسوب.",
            },
          ],
          requestChecklist_en: [
            "Liquid and the type of solids, if any",
            "Required flow and head",
            "Installation depth or pit dimensions",
            "Power supply and cable length",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع السائل ونوع المواد الصلبة إن وُجدت",
            "معدل التدفق والرفع المطلوبان",
            "عمق التركيب أو أبعاد الحفرة",
            "مصدر الكهرباء وطول الكابل",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["vertical-turbine-pumps", "self-priming-pumps"],
          image: null,
          review: pending(
            "borehole vs drainage/sewage designs in one guide; impeller wording",
          ),
        },
        {
          id: "self-priming-pumps",
          linkedProductId: "self-priming-pumps",
          name_en: "Self-Priming Pumps",
          name_ar: "مضخات ذاتية التحضير",
          summary_en:
            "A surface-mounted pump that clears air from its suction line and re-primes without manual filling.",
          summary_ar:
            "مضخة تُركَّب فوق سطح السائل وتطرد الهواء من خط السحب وتعيد التحضير دون ملء يدوي، وتُعرف في السوق أيضًا بـ«طلمبة ذاتية التحضير».",
          whatItIs_en:
            "A centrifugal pump whose casing retains liquid after it stops, so it can evacuate air from the suction line on the next start. This lets it lift liquid from a source below the pump without a foot valve.",
          whatItIs_ar:
            "مضخة طرد مركزي يحتفظ غلافها بكمية من السائل بعد التوقف، فتستطيع طرد الهواء من خط السحب عند التشغيل التالي، مما يسمح لها بسحب السائل من مصدر أدنى منها دون الحاجة إلى صمام قدم.",
          usedFor_en:
            "Pumping from pits, tanks and other sources below the pump, especially where the suction level changes or air enters the line.",
          usedFor_ar:
            "الضخ من الحفر والخزانات والمصادر الأخرى الأدنى من المضخة، خاصةً عندما يتغير منسوب السحب أو يدخل الهواء إلى الخط.",
          applications_en: [
            "Tank-to-tank transfer",
            "Construction site dewatering",
            "Wastewater and sludge transfer with a varying suction level",
            "Portable and skid-mounted pumping units",
          ],
          applications_ar: [
            "النقل بين الخزانات",
            "نزح المياه في مواقع الإنشاءات",
            "نقل مياه الصرف والحمأة مع تغير منسوب السحب",
            "وحدات ضخ متنقلة أو مركبة على قواعد",
          ],
          industryIds: [
            "construction-sites",
            "water-wastewater",
            "industrial-plants",
          ],
          selectionFactors: [
            {
              factor_en: "Suction conditions",
              factor_ar: "ظروف السحب",
              detail_en:
                "The height between the liquid and the pump, and the suction pipe length, determine whether a self-priming pump is suitable.",
              detail_ar:
                "يحدد فرق الارتفاع بين سطح السائل والمضخة وطول ماسورة السحب مدى ملاءمة المضخة ذاتية التحضير.",
            },
            {
              factor_en: "Liquid and solids",
              factor_ar: "السائل والمواد الصلبة",
              detail_en:
                "Clean liquid, wastewater and sludge each call for a different design — state the liquid so materials can be reviewed against it.",
              detail_ar:
                "يتطلب كل من السائل النظيف ومياه الصرف والحمأة تصميمًا مختلفًا؛ يُرجى ذكر السائل لمراجعة الخامات على أساسه.",
            },
            {
              factor_en: "Duty point",
              factor_ar: "نقطة التشغيل",
              detail_en: "The required flow and head at the operating point.",
              detail_ar: "معدل التدفق والرفع المطلوبان عند نقطة التشغيل.",
            },
            {
              factor_en: "Mobility and drive",
              factor_ar: "التنقل والإدارة",
              detail_en:
                "Fixed installation or portable unit, with electric or engine drive.",
              detail_ar:
                "تركيب ثابت أو وحدة متنقلة، بإدارة كهربائية أو بمحرك احتراق.",
            },
          ],
          requestChecklist_en: [
            "Liquid and any solids it carries",
            "Suction height and suction pipe length",
            "Required flow and head",
            "Fixed or portable installation and drive type",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع السائل وأي مواد صلبة يحملها",
            "ارتفاع السحب وطول ماسورة السحب",
            "معدل التدفق والرفع المطلوبان",
            "تركيب ثابت أو متنقل ونوع الإدارة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "submersible-pumps",
            "end-suction-centrifugal-pumps",
          ],
          image: null,
          review: pending(
            "corrected AR term (ذاتية التحضير, not ذاتية التشغيل); priming wording",
          ),
        },
      ],
    },

    // ------------------------------------------------------------------
    // Valves & Actuators
    // ------------------------------------------------------------------
    {
      categoryId: "industrial-valves-actuators",
      title_en: "Valves & Actuators",
      title_ar: "الصمامات والمشغلات",
      intro_en:
        "Valves are specified from your piping data — fluid, line size, pressure class, temperature and connection — and actuators from the valve they will operate.",
      intro_ar:
        "تُحدَّد الصمامات وفق بيانات شبكة المواسير لديكم، أي السائل ومقاس الخط وفئة الضغط ودرجة الحرارة ونوع التوصيل، بينما تُحدَّد المشغلات وفق الصمام الذي ستقوم بتشغيله.",
      icon: "SlidersHorizontal",
      equipment: [
        {
          id: "ball-valves",
          linkedProductId: "industrial-ball-valves",
          name_en: "Ball Valves",
          name_ar: "صمامات كروية",
          summary_en: "A quarter-turn valve for tight on/off isolation.",
          summary_ar:
            "صمام ربع دورة للفتح والغلق المحكم، ويُعرف في السوق أيضًا بـ«محبس بلية» أو «بلف بلي».",
          whatItIs_en:
            "A valve that opens and closes by rotating a bored ball a quarter turn. It is supplied full-bore or reduced-bore, with a floating or trunnion-mounted ball depending on size and pressure, and can be operated by lever, gearbox or actuator.",
          whatItIs_ar:
            "صمام يُفتح ويُغلق بتدوير كرة مثقوبة ربع دورة. ويُورَّد بفتحة كاملة أو مخفضة، وبكرة عائمة أو مثبتة بمحور حسب المقاس والضغط، ويمكن تشغيله بذراع أو صندوق تروس أو مشغل.",
          usedFor_en:
            "Fast, tight shut-off in water, utility and process lines.",
          usedFor_ar: "الغلق السريع والمحكم في خطوط المياه والمرافق والعمليات.",
          applications_en: [
            "Isolation in water and utility piping",
            "Process line isolation",
            "HVAC system isolation",
            "Automated on/off service with an actuator",
          ],
          applications_ar: [
            "العزل في مواسير المياه والمرافق",
            "عزل خطوط العمليات",
            "عزل أنظمة التكييف",
            "التشغيل الآلي فتحًا وغلقًا بواسطة مشغل",
          ],
          industryIds: [
            "industrial-plants",
            "water-wastewater",
            "hvac-cooling",
            "oil-gas",
          ],
          selectionFactors: [
            {
              factor_en: "Service and size",
              factor_ar: "الخدمة والمقاس",
              detail_en:
                "The fluid, the line size and whether the valve is for isolation only.",
              detail_ar: "نوع السائل ومقاس الخط وما إذا كان الصمام للعزل فقط.",
            },
            {
              factor_en: "Pressure class and temperature",
              factor_ar: "فئة الضغط ودرجة الحرارة",
              detail_en: "Stated from your piping specification.",
              detail_ar: "تُحدَّد وفق مواصفات شبكة المواسير لديكم.",
            },
            {
              factor_en: "Body and seat materials",
              factor_ar: "خامات الجسم والمقعدة",
              detail_en: "Chosen for the fluid and the temperature.",
              detail_ar: "تُختار وفق السائل ودرجة الحرارة.",
            },
            {
              factor_en: "Connection and operation",
              factor_ar: "التوصيل وطريقة التشغيل",
              detail_en:
                "Flanged, threaded or welded ends; lever, gearbox or a mounting for an actuator.",
              detail_ar:
                "أطراف بفلانشات أو قلاووظ أو لحام، وتشغيل بذراع أو صندوق تروس أو قاعدة لتركيب مشغل.",
            },
          ],
          requestChecklist_en: [
            "Fluid and temperature",
            "Line size and pressure class",
            "Body material and end connection",
            "Manual or actuated operation",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "السائل ودرجة الحرارة",
            "مقاس الخط وفئة الضغط",
            "خامة الجسم ونوع التوصيل",
            "تشغيل يدوي أو بمشغل",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["gate-valves", "electric-valve-actuators"],
          image: null,
          review: pending("AR market synonyms محبس بلية / بلف بلي"),
        },
        {
          id: "gate-valves",
          linkedProductId: "industrial-gate-valves",
          name_en: "Gate Valves",
          name_ar: "صمامات بوابة",
          summary_en:
            "A multi-turn valve for full-open or full-closed isolation.",
          summary_ar:
            "صمام متعدد الدورات للعزل في وضع الفتح الكامل أو الغلق الكامل، ويُعرف في السوق أيضًا بـ«محبس سكينة».",
          whatItIs_en:
            "A valve that isolates by raising or lowering a gate across the flow path. Designs include rising or non-rising stems and resilient or metal seats, for buried or above-ground installation.",
          whatItIs_ar:
            "صمام يعزل التدفق برفع بوابة أو خفضها عبر مسار السائل. ومن تصميماته الساق الصاعدة أو غير الصاعدة والمقعدة المرنة أو المعدنية، للتركيب المدفون أو فوق سطح الأرض.",
          usedFor_en:
            "Isolating sections of water networks and plant piping where the valve is normally fully open or fully closed.",
          usedFor_ar:
            "عزل أجزاء من شبكات المياه ومواسير المنشآت حيث يكون الصمام عادةً مفتوحًا بالكامل أو مغلقًا بالكامل.",
          applications_en: [
            "Water distribution network isolation",
            "Plant and process piping isolation",
            "Cooling water systems",
            "Wastewater treatment plant isolation",
          ],
          applications_ar: [
            "عزل شبكات توزيع المياه",
            "عزل مواسير المنشآت والعمليات",
            "أنظمة مياه التبريد",
            "عزل محطات معالجة مياه الصرف",
          ],
          industryIds: [
            "water-wastewater",
            "industrial-plants",
            "power-utilities",
            "oil-gas",
          ],
          selectionFactors: [
            {
              factor_en: "Service and size",
              factor_ar: "الخدمة والمقاس",
              detail_en: "The fluid and the line size.",
              detail_ar: "نوع السائل ومقاس الخط.",
            },
            {
              factor_en: "Seat type",
              factor_ar: "نوع المقعدة",
              detail_en:
                "A resilient or metal seat is chosen according to the fluid and the temperature.",
              detail_ar:
                "يُحدَّد نوع المقعدة المرنة أو المعدنية وفق السائل ودرجة الحرارة.",
            },
            {
              factor_en: "Pressure class and material",
              factor_ar: "فئة الضغط والخامة",
              detail_en: "Stated from your piping specification.",
              detail_ar: "تُحدَّد وفق مواصفات شبكة المواسير لديكم.",
            },
            {
              factor_en: "Installation and stem",
              factor_ar: "التركيب ونوع الساق",
              detail_en:
                "Buried or above ground, rising or non-rising stem, and handwheel, gearbox or actuator operation.",
              detail_ar:
                "تركيب مدفون أو فوق الأرض، وساق صاعدة أو غير صاعدة، وتشغيل بطارة يدوية أو صندوق تروس أو مشغل.",
            },
          ],
          requestChecklist_en: [
            "Fluid and temperature",
            "Line size and pressure class",
            "Body material, seat type and end connection",
            "Installation (buried or above ground) and operation",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "السائل ودرجة الحرارة",
            "مقاس الخط وفئة الضغط",
            "خامة الجسم ونوع المقعدة ونوع التوصيل",
            "طريقة التركيب (مدفون أو فوق الأرض) وطريقة التشغيل",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["ball-valves", "control-valves"],
          image: null,
          review: pending(
            "seat-type wording; source record's standards reference is inconsistent (not surfaced)",
          ),
        },
        {
          id: "control-valves",
          linkedProductId: "control-valves",
          name_en: "Control Valves",
          name_ar: "صمامات تحكم",
          summary_en:
            "A valve that modulates flow, pressure or level as part of a control loop.",
          summary_ar:
            "صمام ينظم التدفق أو الضغط أو المنسوب ضمن حلقة تحكم، ويُعرف في السوق أيضًا بـ«بلف تحكم».",
          whatItIs_en:
            "A valve with an actuator and, usually, a positioner that changes its opening in response to a control signal. The body style and internal trim are selected from the process conditions provided by the customer.",
          whatItIs_ar:
            "صمام مزود بمشغل، وغالبًا بجهاز لتحديد الوضع، يغيّر درجة فتحه استجابةً لإشارة التحكم. ويُختار نوع الجسم والأجزاء الداخلية وفق ظروف العملية التي يقدمها العميل.",
          usedFor_en:
            "Holding a process variable at its set point automatically.",
          usedFor_ar: "الحفاظ آليًا على متغير العملية عند القيمة المطلوبة.",
          applications_en: [
            "Flow, pressure and level control in process plants",
            "Boiler feedwater and steam regulation",
            "Utility and HVAC system control",
            "Water treatment process control",
          ],
          applications_ar: [
            "التحكم في التدفق والضغط والمنسوب في منشآت العمليات",
            "تنظيم مياه تغذية المراجل والبخار",
            "التحكم في أنظمة المرافق والتكييف",
            "التحكم في عمليات معالجة المياه",
          ],
          industryIds: [
            "industrial-plants",
            "power-utilities",
            "water-wastewater",
            "hvac-cooling",
          ],
          selectionFactors: [
            {
              factor_en: "Process data",
              factor_ar: "بيانات العملية",
              detail_en:
                "Fluid, flow range, inlet and outlet pressures and temperature, as defined by your process design.",
              detail_ar:
                "السائل ونطاق التدفق وضغطا الدخول والخروج ودرجة الحرارة، كما يحددها تصميم العملية لديكم.",
            },
            {
              factor_en: "Control function",
              factor_ar: "وظيفة التحكم",
              detail_en:
                "What the valve controls and the flow characteristic required.",
              detail_ar:
                "المتغير الذي يتحكم فيه الصمام وخاصية التدفق المطلوبة.",
            },
            {
              factor_en: "Actuation and signal",
              factor_ar: "المشغل وإشارة التحكم",
              detail_en:
                "Pneumatic or electric actuation, the control signal type, and the position required on loss of power or air.",
              detail_ar:
                "مشغل هوائي أو كهربائي، ونوع إشارة التحكم، والوضع المطلوب عند انقطاع الكهرباء أو الهواء.",
            },
            {
              factor_en: "Body and connection",
              factor_ar: "الجسم والتوصيل",
              detail_en:
                "Body style, materials, line size and end connections.",
              detail_ar: "نوع الجسم والخامات ومقاس الخط ونوع التوصيل.",
            },
          ],
          requestChecklist_en: [
            "Process data sheet or the available process conditions",
            "Control function and control signal type",
            "Actuation type and position on loss of power or air",
            "Line size, pressure class and end connection",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "ورقة بيانات العملية أو ظروف العملية المتاحة",
            "وظيفة التحكم ونوع إشارة التحكم",
            "نوع المشغل والوضع المطلوب عند انقطاع الكهرباء أو الهواء",
            "مقاس الخط وفئة الضغط ونوع التوصيل",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["electric-valve-actuators", "ball-valves"],
          image: null,
          review: pending("control-valve terminology; AR market synonym"),
        },
        {
          id: "electric-valve-actuators",
          linkedProductId: "electric-actuators",
          name_en: "Electric Valve Actuators",
          name_ar: "مشغلات كهربائية للصمامات",
          summary_en:
            "An electric drive that operates a valve remotely or automatically.",
          summary_ar:
            "وحدة إدارة كهربائية تشغّل الصمام عن بُعد أو آليًا، وتُعرف في السوق أيضًا بـ«أكتيوتر كهربائي».",
          whatItIs_en:
            "A motor-driven unit mounted on a valve to open, close or position it. Quarter-turn types suit ball and butterfly valves; multi-turn types suit gate valves and similar designs. Most include a manual override.",
          whatItIs_ar:
            "وحدة تعمل بمحرك كهربائي تُركَّب على الصمام لفتحه أو غلقه أو ضبط وضعه. وتناسب الأنواع ربع الدورة الصمامات الكروية وصمامات الفراشة، بينما تناسب الأنواع متعددة الدورات صمامات البوابة والتصميمات المشابهة، وتتضمن معظمها إمكانية التشغيل اليدوي.",
          usedFor_en:
            "Automating new or existing valves for remote operation or control-system integration.",
          usedFor_ar:
            "أتمتة الصمامات الجديدة أو القائمة للتشغيل عن بُعد أو للربط بأنظمة التحكم.",
          applications_en: [
            "Remote valve operation in water and wastewater networks",
            "Automated on/off service in process plants",
            "Modulating control-loop service",
            "Automation of existing manually operated valves",
          ],
          applications_ar: [
            "التشغيل عن بُعد للصمامات في شبكات المياه والصرف",
            "التشغيل الآلي فتحًا وغلقًا في منشآت العمليات",
            "التشغيل التعديلي ضمن حلقات التحكم",
            "أتمتة الصمامات اليدوية القائمة",
          ],
          industryIds: [
            "water-wastewater",
            "industrial-plants",
            "power-utilities",
            "oil-gas",
          ],
          selectionFactors: [
            {
              factor_en: "Valve information",
              factor_ar: "بيانات الصمام",
              detail_en:
                "Valve type, size and the torque information from the valve data, where available.",
              detail_ar:
                "نوع الصمام ومقاسه وبيانات عزم التشغيل الواردة في بيانات الصمام إن وُجدت.",
            },
            {
              factor_en: "Operation",
              factor_ar: "نوع التشغيل",
              detail_en: "On/off or modulating, quarter-turn or multi-turn.",
              detail_ar: "فتح وغلق أو تشغيل تعديلي، ربع دورة أو متعدد الدورات.",
            },
            {
              factor_en: "Power and control",
              factor_ar: "الكهرباء والتحكم",
              detail_en:
                "The power supply and the control signal or interface used on site.",
              detail_ar:
                "مصدر الكهرباء وإشارة التحكم أو واجهة الربط المستخدمة في الموقع.",
            },
            {
              factor_en: "Mounting and environment",
              factor_ar: "التركيب وبيئة التشغيل",
              detail_en:
                "The mounting interface on the valve and the environmental conditions on site.",
              detail_ar: "واجهة التركيب على الصمام والظروف البيئية في الموقع.",
            },
          ],
          requestChecklist_en: [
            "Valve type, size and mounting information",
            "Torque information, if available",
            "On/off or modulating operation",
            "Power supply and control signal",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الصمام ومقاسه وبيانات التركيب",
            "بيانات عزم التشغيل إن وُجدت",
            "تشغيل فتح وغلق أو تشغيل تعديلي",
            "مصدر الكهرباء وإشارة التحكم",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["control-valves", "ball-valves", "gate-valves"],
          image: null,
          review: pending(
            "corrected AR term (مشغلات, not محركات تشغيل); sizing stays with the valve data",
          ),
        },
      ],
    },

    // ------------------------------------------------------------------
    // Compressed Air Systems
    // ------------------------------------------------------------------
    {
      categoryId: "air-compressors-systems",
      title_en: "Compressed Air Systems",
      title_ar: "أنظمة الهواء المضغوط",
      intro_en:
        "Compressed air systems are specified from the air demand, working pressure, duty pattern and the air quality your process needs — the compressor, storage, drying and filtration are chosen together.",
      intro_ar:
        "تُحدَّد أنظمة الهواء المضغوط وفق كمية الهواء المطلوبة وضغط التشغيل ونمط التشغيل وجودة الهواء التي تتطلبها العملية لديكم، ويُختار الضاغط والتخزين والتجفيف والترشيح معًا.",
      icon: "Wind",
      equipment: [
        {
          id: "rotary-screw-air-compressors",
          linkedProductId: "rotary-screw-compressors",
          name_en: "Rotary Screw Air Compressors",
          name_ar: "ضواغط هواء لولبية",
          summary_en: "The usual choice for continuous plant air demand.",
          summary_ar:
            "الخيار المعتاد لاحتياجات الهواء المضغوط المستمرة في المنشآت، وتُعرف في السوق أيضًا بـ«كمبروسر اسكرو».",
          whatItIs_en:
            "A compressor that compresses air between two meshing helical rotors. It is supplied oil-injected or oil-free, with fixed-speed or variable-speed drive, and suits long running hours.",
          whatItIs_ar:
            "ضاغط يضغط الهواء بين دوّارين حلزونيين متعاشقين. ويُورَّد بحقن الزيت أو خاليًا من الزيت، وبسرعة ثابتة أو متغيرة، ويناسب ساعات التشغيل الطويلة.",
          usedFor_en:
            "Supplying a steady flow of compressed air to production lines, tools and instruments.",
          usedFor_ar:
            "إمداد خطوط الإنتاج والأدوات والأجهزة بتدفق مستقر من الهواء المضغوط.",
          applications_en: [
            "Plant-wide compressed air supply",
            "Pneumatic tools and production equipment",
            "Instrument and process air",
            "Workshop air supply",
          ],
          applications_ar: [
            "إمداد الهواء المضغوط للمنشأة بالكامل",
            "الأدوات والمعدات الهوائية في خطوط الإنتاج",
            "هواء الأجهزة والعمليات",
            "إمداد الهواء للورش",
          ],
          industryIds: ["industrial-plants", "workshops"],
          selectionFactors: [
            {
              factor_en: "Air demand and pressure",
              factor_ar: "كمية الهواء والضغط",
              detail_en:
                "The air volume your users need and the working pressure required at the point of use.",
              detail_ar:
                "كمية الهواء التي تحتاجها نقاط الاستخدام وضغط التشغيل المطلوب عندها.",
            },
            {
              factor_en: "Demand pattern",
              factor_ar: "نمط الطلب",
              detail_en:
                "Steady or varying demand, which affects the choice between fixed and variable speed.",
              detail_ar:
                "طلب ثابت أو متغير، وهو ما يؤثر في الاختيار بين السرعة الثابتة والمتغيرة.",
            },
            {
              factor_en: "Oil-injected or oil-free",
              factor_ar: "بحقن الزيت أم خالٍ من الزيت",
              detail_en: "Decided by the air quality your process specifies.",
              detail_ar: "يُحدَّد وفق جودة الهواء التي تشترطها العملية لديكم.",
            },
            {
              factor_en: "Site conditions",
              factor_ar: "ظروف الموقع",
              detail_en:
                "Power supply, ventilation, ambient temperature and the cooling arrangement.",
              detail_ar:
                "مصدر الكهرباء والتهوية ودرجة الحرارة المحيطة وطريقة التبريد.",
            },
          ],
          requestChecklist_en: [
            "Required air demand and working pressure",
            "Expected running hours and demand pattern",
            "Required air quality",
            "Power supply and installation conditions",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "كمية الهواء المطلوبة وضغط التشغيل",
            "ساعات التشغيل المتوقعة ونمط الطلب",
            "جودة الهواء المطلوبة",
            "مصدر الكهرباء وظروف التركيب",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "reciprocating-air-compressors",
            "air-receivers-dryers",
            "compressed-air-filters",
          ],
          image: null,
          review: pending(
            "corrected AR term (ضواغط هواء لولبية); oil-free wording without classes",
          ),
        },
        {
          id: "reciprocating-air-compressors",
          linkedProductId: "reciprocating-compressors",
          name_en: "Reciprocating (Piston) Air Compressors",
          name_ar: "ضواغط هواء ترددية (مكبسية)",
          summary_en:
            "A piston compressor for intermittent demand and higher-pressure air.",
          summary_ar:
            "ضاغط بمكبس للطلب المتقطع ولتطبيقات الهواء ذات الضغط الأعلى، ويُعرف في السوق أيضًا بـ«كمبروسر بستم».",
          whatItIs_en:
            "A compressor that uses pistons in cylinders, in one or more stages, air- or water-cooled and belt- or direct-driven. It is usually paired with an air receiver and run intermittently.",
          whatItIs_ar:
            "ضاغط يستخدم مكابس داخل أسطوانات، بمرحلة واحدة أو أكثر، ويُبرَّد بالهواء أو بالماء، ويُدار بسيور أو مباشرة. ويُستخدم عادةً مع خزان هواء ويعمل بصورة متقطعة.",
          usedFor_en:
            "Workshops, intermittent production use and applications that need a higher pressure than plant air.",
          usedFor_ar:
            "الورش والاستخدام المتقطع في الإنتاج والتطبيقات التي تحتاج ضغطًا أعلى من ضغط هواء المنشأة المعتاد.",
          applications_en: [
            "Workshop and garage air supply",
            "Intermittent production air",
            "Higher-pressure air applications",
            "Portable and mobile air units",
          ],
          applications_ar: [
            "إمداد الهواء للورش والجراجات",
            "هواء الإنتاج المتقطع",
            "تطبيقات الهواء ذات الضغط الأعلى",
            "وحدات هواء متنقلة",
          ],
          industryIds: ["workshops", "industrial-plants", "construction-sites"],
          selectionFactors: [
            {
              factor_en: "Working pressure",
              factor_ar: "ضغط التشغيل",
              detail_en:
                "The pressure required, which decides single-stage or multi-stage compression.",
              detail_ar:
                "ضغط التشغيل المطلوب، وهو ما يحدد الضغط بمرحلة واحدة أو بعدة مراحل.",
            },
            {
              factor_en: "Duty cycle",
              factor_ar: "دورة التشغيل",
              detail_en:
                "Piston compressors are normally chosen for intermittent rather than continuous duty.",
              detail_ar:
                "تُختار الضواغط المكبسية عادةً للتشغيل المتقطع لا المستمر.",
            },
            {
              factor_en: "Cooling and drive",
              factor_ar: "التبريد والإدارة",
              detail_en:
                "Air or water cooling and belt or direct drive, to suit the site.",
              detail_ar:
                "تبريد بالهواء أو بالماء وإدارة بسيور أو مباشرة بما يناسب الموقع.",
            },
            {
              factor_en: "Air demand",
              factor_ar: "كمية الهواء",
              detail_en:
                "The air volume required, and whether an air receiver is included.",
              detail_ar:
                "كمية الهواء المطلوبة وما إذا كان الطلب يشمل خزان هواء.",
            },
          ],
          requestChecklist_en: [
            "Working pressure and air demand",
            "Duty cycle",
            "Cooling and power supply",
            "Fixed or portable installation",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "ضغط التشغيل وكمية الهواء المطلوبة",
            "دورة التشغيل",
            "طريقة التبريد ومصدر الكهرباء",
            "تركيب ثابت أو متنقل",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "rotary-screw-air-compressors",
            "air-receivers-dryers",
          ],
          image: null,
          review: pending(
            "air-compressor scope only (no gas or refrigeration duty)",
          ),
        },
        {
          id: "air-receivers-dryers",
          linkedProductId: "air-receivers-dryers",
          name_en: "Air Receivers & Dryers",
          name_ar: "خزانات ومجففات الهواء المضغوط",
          summary_en:
            "Storage to steady the system, and dryers to remove moisture from compressed air.",
          summary_ar:
            "خزانات لتثبيت ضغط النظام ومجففات لإزالة الرطوبة من الهواء المضغوط، وتُعرف في السوق أيضًا بـ«تنك هواء» و«دراير».",
          whatItIs_en:
            "An air receiver is a pressure vessel that stores compressed air and evens out demand. A dryer — refrigerant or desiccant type — removes water vapour before the air reaches the network.",
          whatItIs_ar:
            "خزان الهواء وعاء ضغط يخزن الهواء المضغوط ويوازن تذبذب الطلب، أما المجفف، المبرِّد أو الامتزازي، فيزيل بخار الماء قبل وصول الهواء إلى الشبكة.",
          usedFor_en:
            "Stabilising compressed air systems and protecting equipment and processes from condensate.",
          usedFor_ar:
            "تثبيت أنظمة الهواء المضغوط وحماية المعدات والعمليات من المياه المتكاثفة.",
          applications_en: [
            "Demand buffering and pressure stability",
            "Moisture removal for instrument and process air",
            "Protection of pneumatic tools and equipment",
            "Reserve air for peak demand",
          ],
          applications_ar: [
            "موازنة الطلب واستقرار الضغط",
            "إزالة الرطوبة من هواء الأجهزة والعمليات",
            "حماية الأدوات والمعدات الهوائية",
            "هواء احتياطي لأوقات ذروة الطلب",
          ],
          industryIds: ["industrial-plants", "workshops"],
          selectionFactors: [
            {
              factor_en: "Storage requirement",
              factor_ar: "سعة التخزين المطلوبة",
              detail_en: "Based on compressor output and the demand pattern.",
              detail_ar: "تُحدَّد وفق إنتاج الضاغط ونمط الطلب.",
            },
            {
              factor_en: "Operating conditions",
              factor_ar: "ظروف التشغيل",
              detail_en:
                "System working pressure, ambient conditions and the installation position.",
              detail_ar: "ضغط تشغيل النظام والظروف المحيطة ووضع التركيب.",
            },
            {
              factor_en: "Dryer type",
              factor_ar: "نوع المجفف",
              detail_en:
                "Refrigerant or desiccant, selected from the dryness your process requires.",
              detail_ar:
                "مبرِّد أو امتزازي، ويُختار وفق درجة الجفاف التي تتطلبها العملية.",
            },
            {
              factor_en: "Required air quality",
              factor_ar: "جودة الهواء المطلوبة",
              detail_en:
                "Treated as part of your specification and reviewed during quotation.",
              detail_ar:
                "تُعامل كجزء من مواصفاتكم وتُراجع أثناء إعداد عرض السعر.",
            },
          ],
          requestChecklist_en: [
            "Compressor output and working pressure",
            "Required storage",
            "Required dryer type or dryness",
            "Installation position and conditions",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "إنتاج الضاغط وضغط التشغيل",
            "سعة التخزين المطلوبة",
            "نوع المجفف أو درجة الجفاف المطلوبة",
            "وضع التركيب وظروفه",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "compressed-air-filters",
            "rotary-screw-air-compressors",
          ],
          image: null,
          review: pending(
            "receivers and dryers share one source record; AR synonyms تنك هواء / دراير",
          ),
        },
        {
          id: "compressed-air-filters",
          linkedProductId: "compressed-air-filtration-systems",
          name_en: "Compressed Air Filters",
          name_ar: "مرشحات الهواء المضغوط",
          summary_en:
            "In-line filters that remove particles, oil aerosols and odours from compressed air.",
          summary_ar:
            "مرشحات تُركَّب على خط الهواء لإزالة الجسيمات ورذاذ الزيت والروائح من الهواء المضغوط، وتُعرف في السوق أيضًا بـ«فلاتر هواء».",
          whatItIs_en:
            "Filter housings with replaceable elements, installed in stages — general-purpose, coalescing and activated-carbon — according to the air quality required at the point of use.",
          whatItIs_ar:
            "أغلفة مرشحات بعناصر قابلة للتغيير تُركَّب على مراحل، منها المرشحات العامة ومرشحات الدمج ومرشحات الكربون النشط، وفق جودة الهواء المطلوبة عند نقطة الاستخدام.",
          usedFor_en:
            "Protecting pneumatic equipment and processes from contamination carried in compressed air.",
          usedFor_ar:
            "حماية المعدات والعمليات الهوائية من الملوثات التي يحملها الهواء المضغوط.",
          applications_en: [
            "Instrument and process air",
            "Spray painting and coating air",
            "General protection of pneumatic equipment",
            "Point-of-use filtration",
          ],
          applications_ar: [
            "هواء الأجهزة والعمليات",
            "هواء أعمال الرش والطلاء",
            "الحماية العامة للمعدات الهوائية",
            "الترشيح عند نقطة الاستخدام",
          ],
          industryIds: ["industrial-plants", "workshops"],
          selectionFactors: [
            {
              factor_en: "Required air quality",
              factor_ar: "جودة الهواء المطلوبة",
              detail_en:
                "Defined by your process or equipment specification and reviewed during quotation.",
              detail_ar:
                "تحددها مواصفات العملية أو المعدات لديكم، وتُراجع أثناء إعداد عرض السعر.",
            },
            {
              factor_en: "Filtration purpose",
              factor_ar: "الغرض من الترشيح",
              detail_en:
                "Particles, oil aerosols or odours — each needs a different filter stage.",
              detail_ar:
                "الجسيمات أو رذاذ الزيت أو الروائح؛ ولكل منها مرحلة ترشيح مختلفة.",
            },
            {
              factor_en: "Flow and connections",
              factor_ar: "التدفق والتوصيلات",
              detail_en:
                "The air flow through the filter and the pipe connection size.",
              detail_ar: "كمية الهواء المارة بالمرشح ومقاس توصيل المواسير.",
            },
            {
              factor_en: "Existing system",
              factor_ar: "النظام القائم",
              detail_en: "Compressor type and any dryer already installed.",
              detail_ar: "نوع الضاغط وأي مجفف مركّب بالفعل.",
            },
          ],
          requestChecklist_en: [
            "Required air quality",
            "Filtration purpose",
            "Air flow and connection size",
            "Existing compressor and dryer information",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "جودة الهواء المطلوبة",
            "الغرض من الترشيح",
            "كمية الهواء ومقاس التوصيل",
            "بيانات الضاغط والمجفف القائمين",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "air-receivers-dryers",
            "rotary-screw-air-compressors",
          ],
          image: null,
          review: pending("filter-stage wording without purity classes"),
        },
      ],
    },
  ],

  replacement: {
    title_en: "Replacing Existing Equipment?",
    title_ar: "هل تستبدل معدة موجودة؟",
    intro_en:
      "If you are replacing a pump, valve, actuator or compressor already in service, you do not need a full specification to start. Send what you can read from the existing equipment and how it is used.",
    intro_ar:
      "إذا كنتم تستبدلون مضخة أو صمامًا أو مشغلًا أو ضاغطًا قائمًا في الخدمة، فلا تحتاجون إلى مواصفات كاملة للبدء. أرسلوا ما يمكن قراءته من المعدة الحالية وطريقة استخدامها.",
    flowTitle_en: "How a replacement request works",
    flowTitle_ar: "كيف يتم التعامل مع طلب الاستبدال",
    flow_en: [
      "Existing equipment",
      "Nameplate",
      "Photos",
      "Operating information",
      "Quantity",
      "Technical review",
      "Matching or technically suitable alternative",
      "Quotation",
    ],
    flow_ar: [
      "المعدة الحالية",
      "اللوحة التعريفية",
      "الصور",
      "بيانات التشغيل",
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
          "Nameplate photo",
          "Photos of the equipment and its installation",
          "Quantity",
          "Site or project",
          "Operating information, if available",
          "Required timing",
        ],
        items_ar: [
          "نوع المعدة",
          "صورة اللوحة التعريفية",
          "صور المعدة وطريقة تركيبها",
          "العدد المطلوب",
          "الموقع أو المشروع",
          "بيانات التشغيل إن وُجدت",
          "التوقيت المطلوب",
        ],
      },
      {
        title_en: "Pumps",
        title_ar: "المضخات",
        items_en: [
          "Liquid pumped",
          "Flow",
          "Head",
          "Temperature",
          "Suction conditions",
          "Motor nameplate",
          "Connection sizes",
        ],
        items_ar: [
          "السائل المنقول",
          "معدل التدفق",
          "الرفع",
          "درجة الحرارة",
          "ظروف السحب",
          "اللوحة التعريفية للمحرك",
          "مقاسات التوصيل",
        ],
      },
      {
        title_en: "Valves & actuators",
        title_ar: "الصمامات والمشغلات",
        items_en: [
          "Size",
          "Pressure class",
          "Body material markings",
          "End connections",
          "Actuator information",
        ],
        items_ar: [
          "المقاس",
          "فئة الضغط",
          "العلامات الموضحة لخامة الجسم",
          "نوع أطراف التوصيل",
          "بيانات المشغل",
        ],
      },
      {
        title_en: "Compressors",
        title_ar: "الضواغط",
        items_en: [
          "Compressor nameplate",
          "Working pressure",
          "Air demand",
          "Power supply",
          "Cooling arrangement",
          "Existing system information",
        ],
        items_ar: [
          "اللوحة التعريفية للضاغط",
          "ضغط التشغيل",
          "كمية الهواء المطلوبة",
          "مصدر الكهرباء",
          "طريقة التبريد",
          "بيانات النظام القائم",
        ],
      },
    ],
    note_en:
      "GOLTENS reviews the available equipment information and can source a matching or technically suitable alternative for quotation. Final equivalence and suitability should be confirmed by the customer's engineering team.",
    note_ar:
      "تراجع GOLTENS بيانات المعدة المتاحة ويمكنها توفير معدة مطابقة أو بديل مناسب فنيًا ضمن عرض السعر، على أن يتم تأكيد التكافؤ والملاءمة النهائية من جانب الفريق الهندسي لدى العميل.",
    ctaLabel_en: "Request a quotation for replacement equipment",
    ctaLabel_ar: "اطلب عرض سعر لمعدة بديلة",
    prefill_en: "Replacement of existing equipment",
    prefill_ar: "استبدال معدة موجودة",
  },

  request: {
    title_en: "What to Include in Your Quotation Request",
    title_ar: "ما الذي يجب إرساله مع طلب عرض السعر",
    intro_en:
      "Send whatever information you have — missing details can be clarified during quotation.",
    intro_ar:
      "أرسلوا ما يتوفر لديكم من بيانات، ويمكن استكمال أي بيانات ناقصة أثناء إعداد عرض السعر.",
    checklistTitle_en: "Minimum information",
    checklistTitle_ar: "الحد الأدنى من البيانات",
    checklist_en: [
      "Equipment type",
      "Quantity",
      "Application or service",
      "Required operating information — for pumps: liquid, flow and head; for valves: size and pressure class",
      "Delivery location",
      "Required timing",
      "Project or tender reference, if applicable",
    ],
    checklist_ar: [
      "نوع المعدة",
      "العدد المطلوب",
      "طبيعة الاستخدام أو الخدمة",
      "بيانات التشغيل المطلوبة: للمضخات السائل ومعدل التدفق والرفع، وللصمامات المقاس وفئة الضغط",
      "مكان التسليم",
      "التوقيت المطلوب",
      "مرجع المشروع أو المناقصة إن وُجد",
    ],
    secondaryChecklist: {
      title_en: "Useful technical information",
      title_ar: "بيانات فنية مفيدة",
      items_en: [
        "Temperature",
        "Materials",
        "Connection type and size",
        "Motor or drive",
        "Power supply",
        "Air demand",
        "Required air quality",
        "Actuation and control signal",
        "Existing equipment nameplate",
        "Photos",
        "Installation environment",
        "Datasheet or specification document",
      ],
      items_ar: [
        "درجة الحرارة",
        "الخامات",
        "نوع التوصيل ومقاسه",
        "المحرك أو نظام الإدارة",
        "مصدر الكهرباء",
        "كمية الهواء المطلوبة",
        "جودة الهواء المطلوبة",
        "نوع المشغل وإشارة التحكم",
        "اللوحة التعريفية للمعدة الحالية",
        "الصور",
        "بيئة التركيب",
        "ورقة البيانات أو مستند المواصفات",
      ],
    },
    checklistNote_en:
      "If you are not sure about a detail, leave it out — our team will ask for what is needed to complete the quotation.",
    checklistNote_ar:
      "إذا لم تكونوا متأكدين من أحد البيانات يمكنكم تركه، وسيطلب فريقنا ما يلزم لاستكمال عرض السعر.",
    processTitle_en: "How GOLTENS handles the request",
    processTitle_ar: "كيف تتعامل GOLTENS مع الطلب",
    steps: [
      {
        title_en: "Requirement",
        title_ar: "استلام المتطلبات",
        description_en:
          "Send your requirement through the quotation form on this page, with any documents, nameplate photos or specifications.",
        description_ar:
          "أرسلوا متطلباتكم من خلال نموذج طلب عرض السعر في هذه الصفحة، مع أي مستندات أو صور للوحات التعريفية أو مواصفات.",
      },
      {
        title_en: "Technical information review",
        title_ar: "مراجعة البيانات الفنية المتاحة",
        description_en:
          "Our team reviews the information and asks for anything needed to define the equipment.",
        description_ar:
          "يراجع فريقنا البيانات ويطلب أي بيانات إضافية لازمة لتحديد المعدة.",
      },
      {
        title_en: "Sourcing and configuration",
        title_ar: "تحديد المعدة أو البديل المناسب للتوريد",
        description_en:
          "We identify the equipment, or a technically suitable alternative, that matches the requirement for supply.",
        description_ar:
          "نحدد المعدة أو البديل المناسب فنيًا الذي يطابق المتطلبات للتوريد.",
      },
      {
        title_en: "Quotation",
        title_ar: "إعداد عرض السعر",
        description_en:
          "You receive a quotation stating the proposed equipment, its configuration, availability and lead time, for your review.",
        description_ar:
          "تتسلمون عرض سعر يوضح المعدة المقترحة وتكوينها وتوافرها ومدة التوريد لمراجعتكم.",
      },
    ],
  },

  quote: {
    title_en: "Request a Quote",
    title_ar: "اطلب عرض سعر",
    subtitle_en:
      "Tell us what you need — equipment type, application, quantity and any data you have. Equipment is available on request.",
    subtitle_ar:
      "أخبرونا بما تحتاجونه: نوع المعدة وطبيعة الاستخدام والعدد وأي بيانات متاحة لديكم. المعدات متاحة حسب الطلب.",
  },
};
