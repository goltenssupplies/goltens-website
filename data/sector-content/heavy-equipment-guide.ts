import type {
  EquipmentGuideReview,
  SectorEquipmentGuide,
} from "@/data/sector-content/types";

/**
 * Heavy Equipment procurement & application guide — editorial,
 * manufacturer-neutral content describing equipment TYPES. It is
 * deliberately separate from the Product Engine (`data/products/`): it never
 * names brands or models, never states numeric specifications, standards or
 * certifications, and is never rendered as a GOLTENS product listing.
 *
 * Every entry is general equipment knowledge awaiting technical review
 * (`review.technical: "needs-verification"`) and Egyptian-market Arabic
 * terminology review (`review.arabic`). `scripts/verify-equipment-guides.mjs`
 * validates this file's structure, cross-references and wording rules.
 *
 * Approved Arabic terminology: حفار هيدروليكي · لودر بعجلات · بلدوزر · موتور جريدر ·
 * لودر حفار · ونش متحرك · ونش مجنزر · رافعة شوكية · تلي هاندلر ·
 * منصة عمل مرتفعة · خلاطة خرسانة · مضخة خرسانة · مدحلة اهتزازية ·
 * فرادة أسفلت · مطرقة تكسير هيدروليكية. "جردل" is used for a bucket; brand-
 * derived generic terms are never used.
 */

const pending = (notes: string): EquipmentGuideReview => ({
  technical: "needs-verification",
  arabic: "needs-verification",
  notes,
});

const CHECKLIST_CLOSING_EN =
  "Quantity, new or used preference, delivery location and required timing";
const CHECKLIST_CLOSING_AR =
  "العدد، وهل المطلوب جديد أم مستعمل، ومكان التسليم والتوقيت المطلوب";

export const heavyEquipmentGuide: SectorEquipmentGuide = {
  intro: {
    eyebrow_en: "Choose equipment by project",
    eyebrow_ar: "اختر المعدة حسب نوع المشروع",
    lead_en:
      "GOLTENS supplies heavy equipment and machinery according to project requirements and specifications. New and used equipment can be sourced according to customer requirements. Start from your project type, review what each machine does, and send us the details listed in each guide to receive a quotation.",
    lead_ar:
      "توفر GOLTENS المعدات والآليات الثقيلة وفق متطلبات المشروع والمواصفات الفنية، ويمكن توريد المعدات جديدة أو مستعملة حسب طلب العميل. ابدأ بنوع مشروعك، وتعرّف على وظيفة كل معدة، ثم أرسل لنا البيانات الموضحة في كل دليل للحصول على عرض سعر.",
    note_en:
      "The equipment guides on this page are general information to help you define your requirement. They are not a list of stocked models — the exact configuration, condition and availability are confirmed in each quotation.",
    note_ar:
      "أدلة المعدات في هذه الصفحة معلومات عامة تساعدك على تحديد احتياجك، وليست قائمة بموديلات متوفرة في المخزون؛ ويتم تأكيد التكوين والحالة والتوافر بدقة في كل عرض سعر.",
  },

  projectsTitle_en: "Equipment by project type",
  projectsTitle_ar: "المعدات حسب نوع المشروع",
  projectsIntro_en:
    "Typical equipment combinations for common project types. Every project is different — use these as a starting point and confirm the final selection against your specification.",
  projectsIntro_ar:
    "مجموعات المعدات المعتادة لأنواع المشروعات الشائعة. ولأن لكل مشروع ظروفه، استخدمها كنقطة بداية وتأكد من الاختيار النهائي وفق مواصفاتكم.",

  industries: [
    {
      id: "building-construction",
      label_en: "Building construction",
      label_ar: "إنشاء المباني",
    },
    {
      id: "roads-infrastructure",
      label_en: "Roads & infrastructure",
      label_ar: "الطرق والبنية التحتية",
    },
    {
      id: "utilities",
      label_en: "Utility networks",
      label_ar: "شبكات المرافق",
    },
    {
      id: "quarrying",
      label_en: "Quarries & aggregates",
      label_ar: "المحاجر والركام",
    },
    {
      id: "industrial-plants",
      label_en: "Industrial plants",
      label_ar: "المصانع والمنشآت الصناعية",
    },
    {
      id: "energy",
      label_en: "Power & energy projects",
      label_ar: "مشروعات الطاقة والكهرباء",
    },
    {
      id: "ports-logistics",
      label_en: "Ports & logistics yards",
      label_ar: "الموانئ وساحات اللوجستيات",
    },
    {
      id: "warehousing",
      label_en: "Warehousing & distribution",
      label_ar: "المخازن والتوزيع",
    },
    {
      id: "municipal",
      label_en: "Municipal & public works",
      label_ar: "الأعمال البلدية والعامة",
    },
    {
      id: "demolition",
      label_en: "Demolition & rehabilitation",
      label_ar: "الهدم وإعادة التأهيل",
    },
    {
      id: "precast",
      label_en: "Ready-mix & precast production",
      label_ar: "الخرسانة الجاهزة وسابقة الصب",
    },
    {
      id: "facility-maintenance",
      label_en: "Facility & building maintenance",
      label_ar: "صيانة المباني والمنشآت",
    },
    { id: "airports", label_en: "Airports", label_ar: "المطارات" },
    { id: "agriculture", label_en: "Agriculture", label_ar: "الزراعة" },
  ],

  projects: [
    {
      id: "road-construction",
      title_en: "Road construction & paving",
      title_ar: "إنشاء الطرق ورصفها",
      description_en:
        "From earthworks and grading to compaction and asphalt laying.",
      description_ar: "من أعمال الحفر والردم والتسوية حتى الدمك وفرد الأسفلت.",
      equipmentIds: [
        "bulldozers",
        "motor-graders",
        "vibratory-rollers",
        "asphalt-pavers",
        "wheel-loaders",
        "hydraulic-excavators",
      ],
      review: pending("T16 — project mapping"),
    },
    {
      id: "building-foundations",
      title_en: "Building foundations & structures",
      title_ar: "أساسات المباني والهياكل الإنشائية",
      description_en:
        "Excavation, concrete supply and placement, and lifting for structural works.",
      description_ar:
        "الحفر وتوريد الخرسانة وصبها وأعمال الرفع للأعمال الإنشائية.",
      equipmentIds: [
        "hydraulic-excavators",
        "backhoe-loaders",
        "concrete-mixers",
        "concrete-pumps",
        "mobile-cranes",
        "telehandlers",
      ],
      review: pending("T16 — project mapping"),
    },
    {
      id: "utility-trenching",
      title_en: "Utility & pipeline trenching",
      title_ar: "خنادق المرافق وخطوط المواسير",
      description_en:
        "Trenching, rock breaking where needed, and compaction of backfill.",
      description_ar: "فتح الخنادق وتكسير الصخر عند الحاجة ودمك الردم.",
      equipmentIds: [
        "hydraulic-excavators",
        "backhoe-loaders",
        "vibratory-rollers",
        "hydraulic-breakers",
      ],
      review: pending("T16 — project mapping"),
    },
    {
      id: "quarries-aggregates",
      title_en: "Quarries & aggregates",
      title_ar: "المحاجر والركام",
      description_en:
        "Stripping, extraction support, breaking oversize rock and loading.",
      description_ar:
        "كشط الطبقات السطحية ودعم الاستخراج وتكسير الكتل الكبيرة والتحميل.",
      equipmentIds: [
        "wheel-loaders",
        "hydraulic-excavators",
        "bulldozers",
        "hydraulic-breakers",
      ],
      review: pending("T16 — project mapping"),
    },
    {
      id: "industrial-installation",
      title_en: "Industrial plant & heavy installation",
      title_ar: "المنشآت الصناعية والتركيبات الثقيلة",
      description_en:
        "Lifting and installing equipment, materials handling and access at height.",
      description_ar:
        "رفع المعدات وتركيبها ومناولة المواد والوصول إلى الارتفاعات.",
      equipmentIds: [
        "mobile-cranes",
        "crawler-cranes",
        "forklifts",
        "aerial-work-platforms",
      ],
      review: pending("T16 — project mapping"),
    },
    {
      id: "warehousing-logistics",
      title_en: "Warehousing & logistics yards",
      title_ar: "المخازن وساحات اللوجستيات",
      description_en: "Handling palletised goods and loose bulk materials.",
      description_ar: "مناولة البضائع على البالتات والمواد السائبة.",
      equipmentIds: ["forklifts", "wheel-loaders"],
      review: pending("T16 — project mapping"),
    },
    {
      id: "demolition-rehabilitation",
      title_en: "Demolition & rehabilitation",
      title_ar: "الهدم وإعادة التأهيل",
      description_en:
        "Breaking structures and slabs, then loading and clearing debris.",
      description_ar: "تكسير المنشآت والبلاطات، ثم تحميل المخلفات وإزالتها.",
      equipmentIds: [
        "hydraulic-excavators",
        "hydraulic-breakers",
        "wheel-loaders",
        "backhoe-loaders",
      ],
      review: pending("T16 — project mapping"),
    },
    {
      id: "maintenance-at-height",
      title_en: "Maintenance & fit-out at height",
      title_ar: "أعمال الصيانة والتشطيب على ارتفاعات",
      description_en: "Access for people and placing materials at height.",
      description_ar: "وصول العاملين إلى الارتفاعات ورفع المواد إليها.",
      equipmentIds: ["aerial-work-platforms", "telehandlers"],
      review: pending("T16 — project mapping"),
    },
  ],

  categories: [
    // ------------------------------------------------------------------
    // Earthmoving Equipment
    // ------------------------------------------------------------------
    {
      categoryId: "earthmoving-equipment",
      title_en: "Earthmoving Equipment",
      title_ar: "معدات نقل التراب",
      intro_en:
        "Earthmoving equipment excavates, loads, pushes and grades soil and rock. These machines prepare a site and shape it to the levels a project requires — from bulk excavation to the final grade before paving or construction.",
      intro_ar:
        "تقوم معدات نقل التراب بحفر التربة والصخور وتحميلها ودفعها وتسويتها. وتجهّز هذه المعدات الموقع وتشكّله وفق المناسيب التي يتطلبها المشروع، بدءًا من الحفر الكبير وحتى التسوية النهائية قبل الرصف أو البناء.",
      icon: "Shovel",
      equipment: [
        {
          id: "hydraulic-excavators",
          linkedProductId: "hydraulic-excavators",
          name_en: "Hydraulic Excavators",
          name_ar: "حفار هيدروليكي",
          summary_en:
            "A tracked or wheeled digging machine for excavation, trenching and truck loading — and, with the right attachment, breaking and demolition.",
          summary_ar:
            "معدة حفر بجنزير أو بعجل لأعمال الحفر وفتح الخنادق وتحميل سيارات النقل، ولأعمال التكسير والهدم عند تركيب الملحق المناسب.",
          whatItIs_en:
            "A hydraulic excavator carries a boom, arm and bucket on an upper structure that slews a full circle on a tracked or wheeled undercarriage. Because the bucket can be exchanged for other hydraulic attachments, one machine can dig, load, lift, grade and break.",
          whatItIs_ar:
            "يتكوّن الحفار الهيدروليكي من بوم وذراع وجردل مركّبة على جسم علوي يدور دورة كاملة فوق قاعدة بجنزير أو بعجل. ولأن الجردل يمكن استبداله بملحقات هيدروليكية أخرى، تستطيع المعدة نفسها أن تحفر وتحمّل وترفع وتسوّي وتكسّر.",
          usedFor_en:
            "Digging and moving earth and rock with control — excavating to a required depth, loading trucks and handling material within the machine's reach.",
          usedFor_ar:
            "حفر ونقل التربة والصخور بتحكم ودقة: الحفر حتى العمق المطلوب، وتحميل سيارات النقل، ومناولة المواد في نطاق وصول المعدة.",
          applications_en: [
            "Foundation and basement excavation",
            "Utility and pipeline trenching",
            "Loading trucks in quarries and borrow pits",
            "Site clearing and bulk earthworks",
            "Demolition and breaking with suitable attachments",
          ],
          applications_ar: [
            "حفر الأساسات والبدرومات",
            "فتح خنادق المرافق وخطوط المواسير",
            "تحميل سيارات النقل في المحاجر ومواقع الاستعارة",
            "تجهيز المواقع وأعمال الحفر الكبيرة",
            "أعمال الهدم والتكسير بالملحقات المناسبة",
          ],
          industryIds: [
            "building-construction",
            "roads-infrastructure",
            "utilities",
            "quarrying",
            "demolition",
          ],
          selectionFactors: [
            {
              factor_en: "Operating weight class",
              factor_ar: "فئة وزن التشغيل",
              detail_en:
                "The machine's size class should suit the depth of digging, the bucket size and the limits on transporting it to site.",
              detail_ar:
                "يجب أن يتناسب حجم المعدة مع عمق الحفر وحجم الجردل وقيود نقلها إلى الموقع.",
            },
            {
              factor_en: "Tracks or wheels",
              factor_ar: "جنزير أم عجل",
              detail_en:
                "Tracks suit soft or uneven ground; wheels suit paved urban sites and frequent moves between work areas.",
              detail_ar:
                "الجنزير مناسب للأرض الرخوة أو غير المستوية، والعجل مناسب للمواقع المرصوفة داخل المدن وكثرة التنقل بين مناطق العمل.",
            },
            {
              factor_en: "Reach and digging depth",
              factor_ar: "مدى الوصول وعمق الحفر",
              detail_en:
                "Check the machine's working range against the deepest and farthest point of the work.",
              detail_ar:
                "راجِع نطاق عمل المعدة مقابل أعمق وأبعد نقطة في الأعمال المطلوبة.",
            },
            {
              factor_en: "Tail swing",
              factor_ar: "دوران الذيل",
              detail_en:
                "Short or zero tail-swing configurations suit confined sites and work next to roads or structures.",
              detail_ar:
                "التكوينات ذات الذيل القصير أو بدون بروز للذيل مناسبة للمواقع الضيقة والعمل بجوار الطرق والمنشآت.",
            },
            {
              factor_en: "Attachments and auxiliary hydraulics",
              factor_ar: "الملحقات والدائرة الهيدروليكية الإضافية",
              detail_en:
                "Breakers, grapples and other tools require a compatible auxiliary hydraulic circuit.",
              detail_ar:
                "تحتاج مطارق التكسير والكلّابات وغيرها من الملحقات إلى دائرة هيدروليكية إضافية متوافقة.",
            },
          ],
          requestChecklist_en: [
            "Main tasks and the material to be excavated",
            "Required digging depth and reach",
            "Ground conditions and site access",
            "Attachments required",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "طبيعة الأعمال ونوع التربة أو الخامة المطلوب حفرها",
            "عمق الحفر ومدى الوصول المطلوبان",
            "ظروف الأرض ومداخل الموقع",
            "الملحقات المطلوبة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "wheel-loaders",
            "backhoe-loaders",
            "hydraulic-breakers",
          ],
          image: null,
          review: pending(
            "T1 — full-circle slew, tracks vs wheels, tail swing, auxiliary hydraulics",
          ),
        },
        {
          id: "wheel-loaders",
          linkedProductId: "wheel-loaders",
          name_en: "Wheel Loaders",
          name_ar: "لودر بعجلات",
          summary_en:
            "An articulated wheeled machine with a front bucket for loading, stockpiling and moving loose material over short distances.",
          summary_ar:
            "معدة بعجلات ومفصل توجيه في المنتصف، وجردل أمامي لتحميل المواد السائبة وتشوينها ونقلها لمسافات قصيرة.",
          whatItIs_en:
            "A wheel loader is a rubber-tyred machine that steers by articulating in the middle and carries a large bucket on a front lift arm. It scoops loose material, lifts it and carries it a short distance to a truck, hopper or stockpile.",
          whatItIs_ar:
            "اللودر بعجلات معدة على إطارات مطاطية، يتم توجيهها من مفصل في منتصفها، وتحمل جردلًا كبيرًا على ذراع رفع أمامي. يغرف اللودر المواد السائبة ويرفعها وينقلها لمسافة قصيرة إلى سيارة نقل أو قادوس أو مكان التشوين.",
          usedFor_en:
            "High-volume loading and short-distance handling of loose materials such as sand, aggregate, soil and site debris.",
          usedFor_ar:
            "التحميل بكميات كبيرة والمناولة لمسافات قصيرة للمواد السائبة مثل الرمل والزلط والتربة ومخلفات الموقع.",
          applications_en: [
            "Loading trucks and hoppers",
            "Building and managing stockpiles",
            "Moving material around yards and plants",
            "Backfilling and site clean-up",
            "Handling materials with forks or other quick-change attachments",
          ],
          applications_ar: [
            "تحميل سيارات النقل والقواديس",
            "تكوين أكوام التشوين وإدارتها",
            "نقل المواد داخل الساحات والمصانع",
            "أعمال الردم وتنظيف المواقع",
            "مناولة المواد باستخدام الشوك أو ملحقات سريعة التغيير أخرى",
          ],
          industryIds: [
            "quarrying",
            "building-construction",
            "ports-logistics",
            "precast",
            "municipal",
          ],
          selectionFactors: [
            {
              factor_en: "Bucket size and material",
              factor_ar: "حجم الجردل ونوع الخامة",
              detail_en:
                "Match the bucket volume to the material's density and to the size of the trucks or hoppers being loaded.",
              detail_ar:
                "يُختار حجم الجردل وفق كثافة الخامة وحجم سيارات النقل أو القواديس التي سيتم تحميلها.",
            },
            {
              factor_en: "Dump height",
              factor_ar: "ارتفاع التفريغ",
              detail_en:
                "The loader must clear the side of the truck body or hopper it will load.",
              detail_ar:
                "يجب أن يتجاوز اللودر ارتفاع جانب صندوق سيارة النقل أو القادوس الذي سيحمّله.",
            },
            {
              factor_en: "Tyres and ground",
              factor_ar: "الإطارات وطبيعة الأرض",
              detail_en:
                "Tyre type should suit the working surface, from soft sand to abrasive rock.",
              detail_ar:
                "يُختار نوع الإطارات وفق سطح العمل، من الرمال الرخوة إلى الصخور الحادة.",
            },
            {
              factor_en: "Load-and-carry distance",
              factor_ar: "مسافة النقل",
              detail_en:
                "Longer carry distances generally call for a larger machine; very long distances are usually better served by trucks.",
              detail_ar:
                "مسافات النقل الأطول تتطلب غالبًا لودرًا أكبر، أما المسافات الطويلة جدًا فالأنسب لها سيارات النقل.",
            },
            {
              factor_en: "Attachments",
              factor_ar: "الملحقات",
              detail_en:
                "Forks, other bucket types and quick couplers widen the range of tasks.",
              detail_ar:
                "الشوك وأنواع الجرادل الأخرى ووصلات التغيير السريع توسّع نطاق المهام.",
            },
          ],
          requestChecklist_en: [
            "Material type and daily volume",
            "Type and size of the trucks or hoppers to be loaded",
            "Working surface and site conditions",
            "Attachments required",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الخامة والكمية اليومية",
            "نوع وحجم سيارات النقل أو القواديس التي سيتم تحميلها",
            "سطح العمل وظروف الموقع",
            "الملحقات المطلوبة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["hydraulic-excavators", "bulldozers"],
          image: null,
          review: pending(
            "T2 — articulated steering, dump height, carry distance guidance",
          ),
        },
        {
          id: "bulldozers",
          linkedProductId: "bulldozers",
          name_en: "Bulldozers",
          name_ar: "بلدوزر",
          summary_en:
            "A tracked tractor with a front blade for clearing sites and pushing, spreading and ripping large volumes of material.",
          summary_ar:
            "جرار بجنزير وسلاح أمامي لتطهير المواقع ودفع ونشر وتفكيك كميات كبيرة من التربة والصخور.",
          whatItIs_en:
            "A bulldozer is a crawler tractor fitted with a heavy blade at the front and, on many machines, a ripper at the rear. Its tracks provide the traction needed to push large volumes of soil, rock and fill across a site.",
          whatItIs_ar:
            "البلدوزر جرار بجنزير مزوّد بسلاح (شفرة) ثقيل في المقدمة، ومزوّد في كثير من المعدات بمخلب تفكيك (ريبر) في الخلف. ويوفّر الجنزير قوة الجر اللازمة لدفع كميات كبيرة من التربة والصخور ومواد الردم داخل الموقع.",
          usedFor_en:
            "Bulk earthmoving over short distances — clearing, pushing, spreading and rough-levelling material, and loosening hard ground before excavation.",
          usedFor_ar:
            "أعمال الحفر والردم الكبيرة لمسافات قصيرة: تطهير المواقع ودفع المواد ونشرها وتسويتها تسوية مبدئية، وتفكيك الأرض الصلبة قبل الحفر.",
          applications_en: [
            "Site clearing and topsoil stripping",
            "Pushing and spreading fill in layers",
            "Rough grading ahead of finish grading",
            "Building haul roads and access tracks",
            "Ripping compacted or rocky ground",
          ],
          applications_ar: [
            "تطهير المواقع وكشط الطبقة السطحية",
            "دفع مواد الردم ونشرها على طبقات",
            "التسوية المبدئية قبل التسوية النهائية",
            "إنشاء طرق النقل والمداخل المؤقتة",
            "تفكيك الأرض المدموكة أو الصخرية",
          ],
          industryIds: [
            "roads-infrastructure",
            "building-construction",
            "quarrying",
          ],
          selectionFactors: [
            {
              factor_en: "Size class",
              factor_ar: "فئة الحجم",
              detail_en:
                "Choose the class according to the volumes to be moved, the push distances and the hardness of the material.",
              detail_ar:
                "تُحدد وفق الكميات المطلوب نقلها ومسافات الدفع وصلابة الخامة.",
            },
            {
              factor_en: "Blade type",
              factor_ar: "نوع السلاح",
              detail_en:
                "Different blade shapes favour either carrying capacity or controlled spreading and grading.",
              detail_ar:
                "تختلف أشكال السلاح بين ما يناسب دفع كميات أكبر وما يناسب النشر والتسوية المنضبطة.",
            },
            {
              factor_en: "Rear ripper",
              factor_ar: "مخلب التفكيك (الريبر)",
              detail_en:
                "A ripper is needed where hard or compacted ground must be loosened before it can be moved.",
              detail_ar:
                "يلزم عندما تكون الأرض صلبة أو مدموكة وتحتاج إلى تفكيك قبل نقلها.",
            },
            {
              factor_en: "Track configuration",
              factor_ar: "تكوين الجنزير",
              detail_en:
                "Track and shoe arrangements differ for soft ground and for rocky, abrasive conditions.",
              detail_ar:
                "تختلف ترتيبات الجنزير ونعاله بين الأرض الرخوة والظروف الصخرية الحادة.",
            },
            {
              factor_en: "Transport to site",
              factor_ar: "النقل إلى الموقع",
              detail_en:
                "Larger machines may need special transport arrangements between sites.",
              detail_ar:
                "قد تحتاج المعدات الأكبر إلى ترتيبات نقل خاصة بين المواقع.",
            },
          ],
          requestChecklist_en: [
            "Type of material and ground",
            "Approximate volumes and push distances",
            "Whether a rear ripper is needed",
            "Site access and transport constraints",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الخامة وطبيعة الأرض",
            "الكميات التقريبية ومسافات الدفع",
            "هل يلزم مخلب تفكيك (ريبر)",
            "مداخل الموقع وقيود النقل",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["motor-graders", "wheel-loaders"],
          image: null,
          review: pending(
            "T3 — blade types, rear ripper, track/shoe choice; AR term سلاح for blade",
          ),
        },
        {
          id: "motor-graders",
          linkedProductId: "motor-graders",
          name_en: "Motor Graders",
          name_ar: "موتور جريدر",
          summary_en:
            "A long-wheelbase machine with an adjustable centre blade for precise grading of roads, platforms and slopes.",
          summary_ar:
            "معدة طويلة القاعدة بسلاح أوسط قابل للضبط، للتسوية الدقيقة للطرق والمنصات والميول.",
          whatItIs_en:
            "A motor grader carries a long blade (moldboard) mounted between its front and rear axles. The blade can be raised, angled and tilted, allowing the operator to cut, spread and trim material to a controlled level and cross-slope.",
          whatItIs_ar:
            "الموتور جريدر معدة مزوّدة بسلاح طويل مثبت بين المحورين الأمامي والخلفي. ويمكن رفع السلاح وتدويره وإمالته، مما يسمح بقطع المواد ونشرها وتهذيبها حتى منسوب محدد وميل عرضي مضبوط.",
          usedFor_en:
            "Fine grading and shaping of surfaces — bringing road layers and platforms to their required levels before compaction or paving.",
          usedFor_ar:
            "التسوية النهائية وتشكيل الأسطح: ضبط طبقات الطرق والمنصات على المناسيب المطلوبة قبل الدمك أو الرصف.",
          applications_en: [
            "Grading subgrade and base layers before paving",
            "Shaping road cross-slopes, ditches and embankment slopes",
            "Maintaining unpaved and gravel roads",
            "Levelling building pads and site platforms",
            "Spreading and trimming granular material",
          ],
          applications_ar: [
            "تسوية طبقات التأسيس والأساس قبل الرصف",
            "تشكيل الميول العرضية للطرق والمصارف وميول الجسور الترابية",
            "صيانة الطرق الترابية وغير المرصوفة",
            "تسوية منصات المباني ومنصات المواقع",
            "نشر وتهذيب المواد الحبيبية",
          ],
          industryIds: [
            "roads-infrastructure",
            "municipal",
            "airports",
            "building-construction",
          ],
          selectionFactors: [
            {
              factor_en: "Blade size and machine class",
              factor_ar: "طول السلاح وفئة المعدة",
              detail_en:
                "Match the blade length and machine class to the widths and types of surface being graded.",
              detail_ar:
                "يُختار طول السلاح وفئة المعدة وفق عروض وأنواع الأسطح المطلوب تسويتها.",
            },
            {
              factor_en: "Front attachments",
              factor_ar: "الملحقات الأمامية",
              detail_en:
                "A front scarifier or ripper helps break up hard or compacted surfaces before grading.",
              detail_ar:
                "يساعد المخلب الأمامي (السكارفاير أو الريبر) على تفكيك الأسطح الصلبة أو المدموكة قبل التسوية.",
            },
            {
              factor_en: "Grade-control readiness",
              factor_ar: "الجاهزية لأنظمة التحكم في المناسيب",
              detail_en:
                "Where the project requires machine-guided grading, confirm compatibility with the intended grade-control system.",
              detail_ar:
                "إذا كان المشروع يتطلب تسوية موجّهة آليًا، يجب التأكد من التوافق مع نظام التحكم المطلوب.",
            },
            {
              factor_en: "Construction or maintenance duty",
              factor_ar: "إنشاء أم صيانة",
              detail_en:
                "New road construction and routine road maintenance place different demands on the machine.",
              detail_ar:
                "يختلف ما تتطلبه أعمال إنشاء الطرق الجديدة عن أعمال الصيانة الدورية.",
            },
          ],
          requestChecklist_en: [
            "Type of surface (road, platform or slope) and typical widths",
            "Construction or maintenance work",
            "Required attachments",
            "Any grade-control requirement in your specification",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع السطح (طريق أو منصة أو ميول) والعروض المعتادة",
            "أعمال إنشاء أم صيانة",
            "الملحقات المطلوبة",
            "أي متطلبات لأنظمة التحكم في المناسيب في مواصفاتكم",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "bulldozers",
            "vibratory-rollers",
            "asphalt-pavers",
          ],
          image: null,
          review: pending(
            "T4 — role before paving, scarifier, grade-control readiness",
          ),
        },
        {
          id: "backhoe-loaders",
          linkedProductId: "backhoe-loaders",
          name_en: "Backhoe Loaders",
          name_ar: "لودر حفار",
          summary_en:
            "A wheeled machine with a front loader bucket and a rear digging arm — one machine for digging, loading and backfilling on smaller sites.",
          summary_ar:
            "معدة بعجلات بجردل لودر أمامي وذراع حفر خلفي: معدة واحدة للحفر والتحميل والردم في المواقع الأصغر.",
          whatItIs_en:
            "A backhoe loader combines a loader bucket at the front with a backhoe digging arm at the rear on a wheeled chassis. The operator turns the seat to switch between loading and digging, which suits sites with varied, smaller tasks.",
          whatItIs_ar:
            "يجمع اللودر الحفار بين جردل لودر في المقدمة وذراع حفر (باك هو) في الخلف على شاسيه بعجلات. ويستدير مقعد المشغل للتبديل بين التحميل والحفر، مما يجعل المعدة مناسبة للمواقع التي تضم مهامًا متنوعة وصغيرة الحجم.",
          usedFor_en:
            "Small and medium excavation, trenching, loading and backfilling, especially where one versatile machine is preferable to several specialised ones.",
          usedFor_ar:
            "أعمال الحفر الصغيرة والمتوسطة وفتح الخنادق والتحميل والردم، خاصة عندما تكون معدة واحدة متعددة الاستخدامات أنسب من عدة معدات متخصصة.",
          applications_en: [
            "Utility and service trenching",
            "Small excavations and footings",
            "Loading trucks and moving material on site",
            "Backfilling and site clean-up",
            "Municipal and landscaping works",
          ],
          applications_ar: [
            "فتح خنادق المرافق والتوصيلات",
            "أعمال الحفر الصغيرة وحفر القواعد",
            "تحميل سيارات النقل ونقل المواد داخل الموقع",
            "الردم وتنظيف الموقع",
            "الأعمال البلدية وأعمال تنسيق الموقع",
          ],
          industryIds: ["municipal", "utilities", "building-construction"],
          selectionFactors: [
            {
              factor_en: "Digging depth",
              factor_ar: "عمق الحفر",
              detail_en:
                "Confirm that the backhoe's digging depth covers the deepest trench or excavation required.",
              detail_ar:
                "تأكد أن عمق حفر الذراع الخلفي يغطي أعمق خندق أو حفر مطلوب.",
            },
            {
              factor_en: "Front and rear attachments",
              factor_ar: "الملحقات الأمامية والخلفية",
              detail_en:
                "Breakers, augers, different buckets and forks extend what the machine can do.",
              detail_ar:
                "مطارق التكسير والبريمات وأنواع الجرادل المختلفة والشوك توسّع استخدامات المعدة.",
            },
            {
              factor_en: "Drive and ground",
              factor_ar: "نظام الدفع وطبيعة الأرض",
              detail_en:
                "The drive configuration and tyres should suit the ground conditions on site.",
              detail_ar:
                "يجب أن يناسب نظام الدفع ونوع الإطارات ظروف الأرض في الموقع.",
            },
            {
              factor_en: "Travel between sites",
              factor_ar: "التنقل بين المواقع",
              detail_en:
                "Where the machine moves often between nearby work locations, its mobility on public roads becomes an important factor.",
              detail_ar:
                "إذا كانت المعدة ستتنقل كثيرًا بين مواقع عمل متقاربة، فإن قدرتها على السير على الطرق العامة عامل مهم.",
            },
            {
              factor_en: "Site space",
              factor_ar: "مساحة الموقع",
              detail_en:
                "Its compact size suits confined urban and roadside sites.",
              detail_ar:
                "حجمها المدمج يناسب المواقع الضيقة داخل المدن وعلى جوانب الطرق.",
            },
          ],
          requestChecklist_en: [
            "Typical tasks and the required digging depth",
            "Front and rear attachments needed",
            "Ground conditions",
            "How often the machine will move between sites",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المهام المعتادة وعمق الحفر المطلوب",
            "الملحقات الأمامية والخلفية المطلوبة",
            "ظروف الأرض",
            "مدى تكرار تنقل المعدة بين المواقع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["hydraulic-excavators", "wheel-loaders"],
          image: null,
          review: pending(
            "T5 — road travel capability, drive configurations; AR term order لودر حفار",
          ),
        },
      ],
    },

    // ------------------------------------------------------------------
    // Cranes & Lifting Equipment
    // ------------------------------------------------------------------
    {
      categoryId: "cranes-lifting-equipment",
      title_en: "Cranes & Lifting Equipment",
      title_ar: "الأوناش ومعدات الرفع",
      intro_en:
        "Cranes and lifting equipment raise, place and move loads at height — and, in the case of aerial work platforms, people. The right choice depends on the load, the height and reach required, and the conditions on site.",
      intro_ar:
        "ترفع الأوناش ومعدات الرفع الأحمال وتضعها وتنقلها على ارتفاعات، كما ترفع منصات العمل المرتفعة الأفراد. ويعتمد الاختيار الصحيح على الحمل والارتفاع ومدى الوصول المطلوبين وظروف الموقع.",
      icon: "Forklift",
      equipment: [
        {
          id: "mobile-cranes",
          linkedProductId: "mobile-cranes",
          name_en: "Mobile Cranes",
          name_ar: "ونش متحرك",
          summary_en:
            "A wheeled crane, usually with a telescopic boom, that travels to site for lifting and placing heavy loads.",
          summary_ar:
            "ونش على عجلات، غالبًا بذراع تلسكوبي، ينتقل إلى الموقع لرفع الأحمال الثقيلة وتركيبها.",
          whatItIs_en:
            "A mobile crane is a self-propelled crane on a wheeled carrier, typically fitted with a telescopic boom and set up on outriggers before lifting. Common configurations include all-terrain, rough-terrain and truck-mounted cranes, which differ in road mobility and off-road capability.",
          whatItIs_ar:
            "الونش المتحرك ونش ذاتي الحركة على شاسيه بعجلات، يُزوّد عادة بذراع تلسكوبي ويُثبَّت على أرجل اتزان قبل الرفع. ومن تكويناته الشائعة الونش لكل الطرق، والونش للأراضي الوعرة، والونش المركّب على شاحنة، وتختلف فيما بينها في قدرتها على السير على الطرق والعمل في الأراضي غير الممهدة.",
          usedFor_en:
            "Lifting and placing heavy loads where a crane is needed for a limited period or must move between locations.",
          usedFor_ar:
            "رفع الأحمال الثقيلة وتركيبها عندما تكون الحاجة إلى الونش لفترة محددة أو يلزم نقله بين أكثر من موقع.",
          applications_en: [
            "Erecting structural steel and precast elements",
            "Installing plant, tanks and equipment",
            "Supporting tower-crane assembly and dismantling",
            "General lifting on construction sites",
            "Lifting work at industrial and energy facilities",
          ],
          applications_ar: [
            "تركيب الهياكل المعدنية والعناصر سابقة الصب",
            "تركيب المعدات والخزانات ووحدات المصانع",
            "المساعدة في تركيب وفك الأوناش البرجية",
            "أعمال الرفع العامة في مواقع الإنشاء",
            "أعمال الرفع في المنشآت الصناعية ومحطات الطاقة",
          ],
          industryIds: [
            "building-construction",
            "industrial-plants",
            "energy",
            "roads-infrastructure",
          ],
          selectionFactors: [
            {
              factor_en: "Load, radius and height",
              factor_ar: "الحمل ونصف قطر الرفع والارتفاع",
              detail_en:
                "The heaviest load at the required radius and hook height, checked against the crane's load chart, determines the crane size.",
              detail_ar:
                "يتحدد حجم الونش بأثقل حمل عند نصف قطر الرفع وارتفاع الخطاف المطلوبين، بالرجوع إلى جدول أحمال الونش.",
            },
            {
              factor_en: "Configuration and access",
              factor_ar: "التكوين والمداخل",
              detail_en:
                "Road access, site terrain and travel between locations determine the most suitable configuration.",
              detail_ar:
                "تحدد مداخل الطرق وطبيعة أرض الموقع والتنقل بين المواقع التكوين الأنسب.",
            },
            {
              factor_en: "Outrigger space and ground",
              factor_ar: "مساحة أرجل الاتزان وتحمّل الأرض",
              detail_en:
                "The site must provide room for the outriggers and ground able to carry the outrigger loads.",
              detail_ar:
                "يجب أن يوفّر الموقع مساحة كافية لفتح أرجل الاتزان وأرضًا قادرة على تحمّل أحمالها.",
            },
            {
              factor_en: "Planned lifts",
              factor_ar: "تخطيط عمليات الرفع",
              detail_en:
                "Lifts are normally planned in advance; the planned lifts define the crane, rigging and site preparation required.",
              detail_ar:
                "تُخطَّط عمليات الرفع عادة مسبقًا، وتحدد هذه الخطة الونش ومعدات التعليق وتجهيزات الموقع اللازمة.",
            },
            {
              factor_en: "Duration and frequency",
              factor_ar: "مدة وتكرار الرفع",
              detail_en:
                "A short campaign of lifts and long-term use on site can lead to different choices.",
              detail_ar:
                "قد تختلف الاختيارات بين حملة رفع قصيرة واستخدام طويل المدى في الموقع.",
            },
          ],
          requestChecklist_en: [
            "Weight and dimensions of the heaviest and typical loads",
            "Required lifting radius and hook height",
            "Site layout, access and ground conditions",
            "Expected duration and frequency of lifting",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "وزن وأبعاد أثقل حمل والأحمال المعتادة",
            "نصف قطر الرفع وارتفاع الخطاف المطلوبان",
            "مخطط الموقع والمداخل وظروف الأرض",
            "المدة المتوقعة وتكرار عمليات الرفع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["crawler-cranes", "telehandlers"],
          image: null,
          review: pending(
            "T6/T17 — crane configurations, outriggers, lift planning wording",
          ),
        },
        {
          id: "crawler-cranes",
          linkedProductId: "crawler-cranes",
          name_en: "Crawler Cranes",
          name_ar: "ونش مجنزر",
          summary_en:
            "A track-mounted crane for heavy and long-duration lifting on large project sites.",
          summary_ar:
            "ونش على جنزير لأعمال الرفع الثقيلة وطويلة المدة في مواقع المشروعات الكبيرة.",
          whatItIs_en:
            "A crawler crane is mounted on tracks rather than wheels and is commonly fitted with a lattice boom. It is usually transported to site in several loads and assembled there, and its tracks spread the machine's weight over a larger area of prepared ground.",
          whatItIs_ar:
            "الونش المجنزر مركّب على جنزير بدلًا من العجلات، ويُزوّد عادة بذراع شبكي. ويُنقل غالبًا إلى الموقع على عدة حمولات ويُجمَّع هناك، ويوزّع الجنزير وزن المعدة على مساحة أكبر من أرض مجهزة.",
          usedFor_en:
            "Heavy lifting and long lifting programmes on large sites where the crane will remain in place for an extended period.",
          usedFor_ar:
            "الرفع الثقيل وبرامج الرفع الطويلة في المواقع الكبيرة التي سيبقى فيها الونش لفترة ممتدة.",
          applications_en: [
            "Heavy lifts at power, process and industrial plants",
            "Placing bridge girders and heavy structural members",
            "Erecting tall structures and large components",
            "Supporting foundation and piling works",
            "Marine and port construction",
          ],
          applications_ar: [
            "عمليات الرفع الثقيلة في محطات الطاقة والمصانع ووحدات المعالجة",
            "تركيب كمرات الكباري والعناصر الإنشائية الثقيلة",
            "تركيب المنشآت المرتفعة والمكونات الكبيرة",
            "دعم أعمال الأساسات والخوازيق",
            "أعمال الإنشاءات البحرية والموانئ",
          ],
          industryIds: [
            "energy",
            "industrial-plants",
            "roads-infrastructure",
            "ports-logistics",
          ],
          selectionFactors: [
            {
              factor_en: "Capacity at radius",
              factor_ar: "القدرة عند نصف قطر الرفع",
              detail_en:
                "Size the crane on the heaviest lifts at their required radius, using the crane's load chart.",
              detail_ar:
                "يُحدد حجم الونش بأثقل عمليات الرفع عند نصف القطر المطلوب، بالرجوع إلى جدول الأحمال.",
            },
            {
              factor_en: "Boom configuration",
              factor_ar: "تكوين الذراع",
              detail_en:
                "Boom and jib arrangements determine the reach and height available.",
              detail_ar:
                "تحدد ترتيبات الذراع والامتداد (الجيب) مدى الوصول والارتفاع المتاحين.",
            },
            {
              factor_en: "Ground preparation",
              factor_ar: "تجهيز الأرض",
              detail_en:
                "The working area and travel paths usually need prepared, level ground.",
              detail_ar:
                "تحتاج منطقة العمل ومسارات الحركة عادة إلى أرض مجهزة ومستوية.",
            },
            {
              factor_en: "Assembly space and logistics",
              factor_ar: "مساحة التجميع ولوجستيات النقل",
              detail_en:
                "Allow space and time for delivering and assembling the crane on site.",
              detail_ar: "يجب توفير مساحة ووقت لتوريد الونش وتجميعه في الموقع.",
            },
            {
              factor_en: "Programme duration",
              factor_ar: "مدة برنامج الرفع",
              detail_en:
                "The assembly effort makes crawler cranes most practical for longer lifting programmes.",
              detail_ar:
                "يجعل جهد التجميع الونش المجنزر الخيار الأكثر عملية لبرامج الرفع الأطول.",
            },
          ],
          requestChecklist_en: [
            "List of the heaviest and typical lifts with their radii",
            "Required lifting height",
            "Site ground conditions and available assembly area",
            "Expected duration of the lifting programme",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "قائمة بأثقل عمليات الرفع والمعتادة منها مع نصف القطر لكل منها",
            "ارتفاع الرفع المطلوب",
            "ظروف أرض الموقع ومساحة التجميع المتاحة",
            "المدة المتوقعة لبرنامج الرفع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["mobile-cranes"],
          image: null,
          review: pending(
            "T7 — lattice boom, multi-load transport and assembly, load spread",
          ),
        },
        {
          id: "forklifts",
          linkedProductId: "forklifts",
          name_en: "Forklifts",
          name_ar: "رافعة شوكية",
          summary_en:
            "A lift truck with forks for lifting, moving and stacking palletised and unitised loads.",
          summary_ar:
            "معدة رفع بشوكتين لرفع ونقل ورص الأحمال المحمّلة على بالتات والأحمال الموحدة.",
          whatItIs_en:
            "A forklift lifts loads on two forks carried by a vertical mast. Counterbalance forklifts are the most common type for warehouses and yards, while rough-terrain forklifts are built for unpaved construction and outdoor sites.",
          whatItIs_ar:
            "ترفع الرافعة الشوكية الأحمال على شوكتين محمولتين على صاري رأسي. والرافعة الشوكية ذات الثقل الموازن هي النوع الأكثر استخدامًا في المخازن والساحات، بينما صُممت الرافعات الشوكية للأراضي الوعرة للعمل في مواقع الإنشاء والمواقع المفتوحة غير الممهدة.",
          usedFor_en:
            "Loading, unloading, moving and stacking palletised goods and materials.",
          usedFor_ar:
            "تحميل وتفريغ ونقل ورص البضائع والمواد المحمّلة على بالتات.",
          applications_en: [
            "Loading and unloading trucks and containers",
            "Stacking and retrieving goods in warehouses",
            "Supplying production lines in factories",
            "Handling materials in container and logistics yards",
            "Moving palletised materials on construction sites",
          ],
          applications_ar: [
            "تحميل وتفريغ الشاحنات والحاويات",
            "رص البضائع واستلامها في المخازن",
            "إمداد خطوط الإنتاج في المصانع",
            "مناولة المواد في ساحات الحاويات واللوجستيات",
            "نقل المواد المحمّلة على بالتات في مواقع الإنشاء",
          ],
          industryIds: [
            "warehousing",
            "industrial-plants",
            "ports-logistics",
            "building-construction",
          ],
          selectionFactors: [
            {
              factor_en: "Rated capacity",
              factor_ar: "الحمولة المقننة",
              detail_en:
                "Rated capacity is stated at a specific load centre, so check it against your heaviest load, its size and the required lift height.",
              detail_ar:
                "تُحدد الحمولة المقننة عند مركز حمل معين، لذا يجب مراجعتها مقابل أثقل حمل وأبعاده وارتفاع الرفع المطلوب.",
            },
            {
              factor_en: "Lift height and mast",
              factor_ar: "ارتفاع الرفع والصاري",
              detail_en:
                "The mast must reach the highest racking or stacking level while fitting under door and ceiling heights.",
              detail_ar:
                "يجب أن يصل الصاري إلى أعلى مستوى للأرفف أو الرص، مع مراعاة ارتفاعات الأبواب والأسقف.",
            },
            {
              factor_en: "Power source",
              factor_ar: "مصدر الطاقة",
              detail_en:
                "Electric forklifts are commonly used indoors; diesel or gas-powered forklifts are commonly used outdoors.",
              detail_ar:
                "تُستخدم الرافعات الكهربائية عادة داخل المباني، بينما تُستخدم الرافعات التي تعمل بالديزل أو الغاز عادة في المواقع المفتوحة.",
            },
            {
              factor_en: "Tyres and floor",
              factor_ar: "الإطارات والأرضيات",
              detail_en:
                "Tyre type should suit smooth warehouse floors or rough outdoor surfaces.",
              detail_ar:
                "يُختار نوع الإطارات وفق أرضيات المخازن الملساء أو الأسطح الخارجية الخشنة.",
            },
            {
              factor_en: "Attachments and aisle width",
              factor_ar: "الملحقات وعرض الممرات",
              detail_en:
                "Attachments such as side-shifts and clamps, and the available aisle width, affect the choice of machine.",
              detail_ar:
                "تؤثر ملحقات مثل الإزاحة الجانبية والملاقط، وكذلك عرض الممرات المتاح، في اختيار المعدة.",
            },
          ],
          requestChecklist_en: [
            "Weight and size of the heaviest loads",
            "Required lift height and any height restrictions",
            "Indoor or outdoor use, and floor or ground conditions",
            "Shift pattern and attachments required",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "وزن وأبعاد أثقل الأحمال",
            "ارتفاع الرفع المطلوب وأي قيود على الارتفاع",
            "الاستخدام داخل المباني أم خارجها وطبيعة الأرضيات",
            "نظام الورديات والملحقات المطلوبة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["telehandlers"],
          image: null,
          review: pending(
            "T8 — load centre wording, power source guidance (incl. gas-powered availability in Egypt)",
          ),
        },
        {
          id: "telehandlers",
          linkedProductId: "telehandlers",
          name_en: "Telehandlers",
          name_ar: "تلي هاندلر",
          summary_en:
            "A telescopic-boom handler that lifts loads up and forward — beyond the reach of a standard forklift.",
          summary_ar:
            "معدة مناولة بذراع تلسكوبي ترفع الأحمال لأعلى وللأمام، أبعد مما تصل إليه الرافعة الشوكية العادية.",
          whatItIs_en:
            "A telehandler carries forks or other attachments on a telescopic boom mounted on a wheeled chassis. Unlike a forklift's vertical mast, the boom extends both upwards and forwards, so loads can be placed at height and over obstacles.",
          whatItIs_ar:
            "يحمل التلي هاندلر شوكًا أو ملحقات أخرى على ذراع تلسكوبي مركّب على شاسيه بعجلات. وعلى عكس الصاري الرأسي في الرافعة الشوكية، يمتد الذراع لأعلى وللأمام معًا، فيمكن وضع الأحمال على ارتفاعات وفوق العوائق.",
          usedFor_en:
            "Placing materials at height and at a distance where a forklift cannot reach and a crane is not needed.",
          usedFor_ar:
            "وضع المواد على ارتفاعات ومسافات لا تصل إليها الرافعة الشوكية، دون الحاجة إلى ونش.",
          applications_en: [
            "Placing materials on upper floors and roofs",
            "Loading scaffolds and working platforms",
            "Lifting over obstacles and excavations",
            "General material handling on rough ground",
            "Agricultural handling and stacking",
          ],
          applications_ar: [
            "رفع المواد إلى الأدوار العليا والأسطح",
            "تحميل السقالات ومنصات العمل",
            "الرفع فوق العوائق والحفر",
            "مناولة المواد في المواقع ذات الأرض الوعرة",
            "المناولة والرص في الأعمال الزراعية",
          ],
          industryIds: [
            "building-construction",
            "facility-maintenance",
            "agriculture",
          ],
          selectionFactors: [
            {
              factor_en: "Capacity at height and reach",
              factor_ar: "القدرة عند الارتفاع ومدى الوصول",
              detail_en:
                "Lifting capacity reduces as the boom extends, so check the load chart at the actual height and reach needed.",
              detail_ar:
                "تقل قدرة الرفع كلما امتد الذراع، لذا يجب مراجعة جدول الأحمال عند الارتفاع والمدى الفعليين المطلوبين.",
            },
            {
              factor_en: "Height versus forward reach",
              factor_ar: "الارتفاع أم المدى الأمامي",
              detail_en:
                "Decide whether the work mainly needs high lifting, long forward reach, or both.",
              detail_ar:
                "حدد هل الأعمال تتطلب أساسًا رفعًا لارتفاعات عالية أم مدًى أماميًا طويلًا أم الاثنين معًا.",
            },
            {
              factor_en: "Stabilisers and ground",
              factor_ar: "أرجل الاتزان وطبيعة الأرض",
              detail_en:
                "Stabilisers and suitable ground are needed when lifting at greater heights and reaches.",
              detail_ar:
                "يلزم استخدام أرجل الاتزان وأرض مناسبة للرفع عند الارتفاعات والمسافات الأكبر.",
            },
            {
              factor_en: "Attachments",
              factor_ar: "الملحقات",
              detail_en:
                "Forks, buckets and other attachments define the tasks the machine can perform.",
              detail_ar:
                "تحدد الشوك والجرادل وغيرها من الملحقات المهام التي يمكن للمعدة أداؤها.",
            },
          ],
          requestChecklist_en: [
            "Heaviest load, and the height and reach it must be placed at",
            "Attachments required",
            "Ground conditions on site",
            "Typical tasks and duration of use",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "أثقل حمل، والارتفاع والمسافة المطلوب وضعه عندهما",
            "الملحقات المطلوبة",
            "ظروف أرض الموقع",
            "المهام المعتادة ومدة الاستخدام",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "forklifts",
            "mobile-cranes",
            "aerial-work-platforms",
          ],
          image: null,
          review: pending(
            "T9 — capacity vs height/reach, stabilisers; AR term تلي هاندلر (high uncertainty)",
          ),
        },
        {
          id: "aerial-work-platforms",
          linkedProductId: "aerial-work-platforms",
          name_en: "Aerial Work Platforms",
          name_ar: "منصة عمل مرتفعة",
          summary_en:
            "A powered platform that raises workers and their tools to carry out work at height.",
          summary_ar:
            "منصة آلية ترفع العاملين وعِددهم لأداء الأعمال على ارتفاعات.",
          whatItIs_en:
            "An aerial work platform lifts people, together with the tools and materials for their task, to an elevated working position — it is designed to carry people, not as a materials-lifting machine. The main types are scissor lifts, which rise vertically; articulating boom lifts, which reach up and over obstacles; and telescopic boom lifts, which provide the greatest horizontal outreach.",
          whatItIs_ar:
            "ترفع منصة العمل المرتفعة الأفراد، ومعهم العِدد والمواد اللازمة للمهمة، إلى موضع عمل مرتفع، وهي مصممة لحمل الأفراد وليست معدة لرفع المواد. وأنواعها الرئيسية: المنصة المقصية التي ترتفع رأسيًا، والمنصة ذات الذراع المفصلي التي تصل لأعلى وفوق العوائق، والمنصة ذات الذراع التلسكوبي التي توفر أكبر مدى أفقي.",
          usedFor_en:
            "Giving workers access to height for installation, maintenance and inspection work.",
          usedFor_ar:
            "تمكين العاملين من الوصول إلى الارتفاعات لأعمال التركيب والصيانة والفحص.",
          applications_en: [
            "Building maintenance and facade work",
            "Mechanical, electrical and plumbing installation",
            "Installing signage, lighting and ceiling services",
            "Painting and cladding",
            "Inspection and repair at height",
          ],
          applications_ar: [
            "صيانة المباني وأعمال الواجهات",
            "تركيبات الأعمال الكهروميكانيكية",
            "تركيب اللافتات والإنارة وخدمات الأسقف",
            "أعمال الدهانات والتكسيات",
            "الفحص والإصلاح على ارتفاعات",
          ],
          industryIds: [
            "facility-maintenance",
            "industrial-plants",
            "building-construction",
            "warehousing",
          ],
          selectionFactors: [
            {
              factor_en: "Working height and outreach",
              factor_ar: "ارتفاع العمل والمدى الأفقي",
              detail_en:
                "Define the highest working point and how far the platform must reach out horizontally.",
              detail_ar:
                "حدد أعلى نقطة عمل والمسافة الأفقية التي يجب أن تمتد إليها المنصة.",
            },
            {
              factor_en: "Platform capacity",
              factor_ar: "حمولة المنصة",
              detail_en:
                "The platform must carry the number of workers together with their tools and materials.",
              detail_ar: "يجب أن تتحمل المنصة عدد العاملين مع عِددهم وموادهم.",
            },
            {
              factor_en: "Indoor or outdoor use",
              factor_ar: "داخل المباني أم خارجها",
              detail_en:
                "Indoor work often calls for electric power and non-marking tyres; outdoor work and rough ground may need other configurations.",
              detail_ar:
                "غالبًا ما تتطلب الأعمال الداخلية تشغيلًا كهربائيًا وإطارات لا تترك أثرًا على الأرضيات، بينما قد تحتاج الأعمال الخارجية والأرض الوعرة إلى تكوينات أخرى.",
            },
            {
              factor_en: "Floor and access constraints",
              factor_ar: "قيود الأرضيات والمداخل",
              detail_en:
                "Check floor load limits, door widths and ground conditions along the access route.",
              detail_ar:
                "راجِع حدود تحمّل الأرضيات وعروض الأبواب وظروف الأرض على مسار الوصول.",
            },
            {
              factor_en: "Platform type",
              factor_ar: "نوع المنصة",
              detail_en:
                "Scissor lifts suit vertical access over a work area; boom lifts suit reaching up and over obstacles.",
              detail_ar:
                "المنصات المقصية مناسبة للوصول الرأسي فوق مساحة العمل، والمنصات ذات الذراع مناسبة للوصول لأعلى وفوق العوائق.",
            },
          ],
          requestChecklist_en: [
            "Maximum working height and horizontal outreach",
            "Number of workers and the tools on the platform",
            "Indoor or outdoor use, and floor or ground conditions",
            "Access restrictions such as door widths",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "أقصى ارتفاع عمل والمدى الأفقي المطلوب",
            "عدد العاملين والعِدد على المنصة",
            "الاستخدام داخل المباني أم خارجها وطبيعة الأرضيات",
            "قيود الوصول مثل عروض الأبواب",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["telehandlers"],
          image: null,
          review: pending(
            "T10/T17 — platform types, people-not-materials wording, non-marking tyres",
          ),
        },
      ],
    },

    // ------------------------------------------------------------------
    // Concrete & Compaction Equipment
    // ------------------------------------------------------------------
    {
      categoryId: "concrete-compaction-equipment",
      title_en: "Concrete & Compaction Equipment",
      title_ar: "معدات الخرسانة والدك",
      intro_en:
        "This group covers equipment for producing, delivering and placing concrete, compacting soil and asphalt layers, and laying asphalt — together with the hydraulic breaker, an excavator attachment used to break rock and concrete.",
      intro_ar:
        "تضم هذه المجموعة معدات إنتاج الخرسانة وتوصيلها وصبها، ومعدات دمك طبقات التربة والأسفلت، ومعدات فرد الأسفلت، إلى جانب مطرقة التكسير الهيدروليكية، وهي ملحق يُركّب على الحفار لتكسير الصخور والخرسانة.",
      icon: "Construction",
      equipment: [
        {
          id: "concrete-mixers",
          linkedProductId: "concrete-mixers",
          name_en: "Concrete Mixers",
          name_ar: "خلاطة خرسانة",
          summary_en:
            "Equipment that mixes concrete, or keeps ready-mixed concrete agitated on its way to the pour.",
          summary_ar:
            "معدات لخلط الخرسانة، أو للحفاظ على تقليب الخرسانة الجاهزة أثناء نقلها إلى مكان الصب.",
          whatItIs_en:
            "Concrete mixers range from transit mixer trucks, which carry ready-mixed concrete from a batching plant in a rotating drum, to self-loading and site mixers that batch and mix concrete at the point of use.",
          whatItIs_ar:
            "تتنوع خلاطات الخرسانة بين الخلاطات المحمولة على شاحنات، التي تنقل الخرسانة الجاهزة من محطة الخلط في أسطوانة دوّارة، والخلاطات ذاتية التحميل وخلاطات الموقع التي تزن مكونات الخرسانة وتخلطها في مكان الاستخدام.",
          usedFor_en:
            "Producing or delivering concrete so that it reaches the pour in a workable, consistent condition.",
          usedFor_ar:
            "إنتاج الخرسانة أو توصيلها لتصل إلى مكان الصب بقوام قابل للتشغيل ومتجانس.",
          applications_en: [
            "Delivering ready-mixed concrete from a batching plant",
            "Batching and mixing on remote or small sites",
            "Supplying precast production",
            "Concrete for road, drainage and infrastructure works",
            "Feeding concrete pumps on continuous pours",
          ],
          applications_ar: [
            "توصيل الخرسانة الجاهزة من محطات الخلط",
            "وزن وخلط الخرسانة في المواقع البعيدة أو الصغيرة",
            "إمداد مصانع الخرسانة سابقة الصب",
            "خرسانات أعمال الطرق والصرف والبنية التحتية",
            "إمداد مضخات الخرسانة في عمليات الصب المستمر",
          ],
          industryIds: [
            "building-construction",
            "roads-infrastructure",
            "precast",
          ],
          selectionFactors: [
            {
              factor_en: "Volume and pour schedule",
              factor_ar: "الكميات وجدول الصب",
              detail_en:
                "Daily volumes and the size of individual pours determine the number and type of mixers.",
              detail_ar:
                "تحدد الكميات اليومية وحجم كل صبة عدد الخلاطات ونوعها.",
            },
            {
              factor_en: "Distance from the batching plant",
              factor_ar: "المسافة من محطة الخلط",
              detail_en:
                "Travel time from the batching plant affects how ready-mixed concrete is delivered.",
              detail_ar:
                "يؤثر زمن النقل من محطة الخلط في طريقة توصيل الخرسانة الجاهزة.",
            },
            {
              factor_en: "Self-loading or transit mixer",
              factor_ar: "ذاتية التحميل أم محمولة على شاحنة",
              detail_en:
                "Remote sites without a plant supply may suit self-loading or site mixers.",
              detail_ar:
                "قد تناسب الخلاطات ذاتية التحميل أو خلاطات الموقع المواقعَ البعيدة التي لا تصلها محطات الخلط.",
            },
            {
              factor_en: "Site access and discharge",
              factor_ar: "مداخل الموقع وطريقة التفريغ",
              detail_en:
                "Access roads, and whether concrete discharges by chute or into a pump, affect the choice.",
              detail_ar:
                "تؤثر طرق الوصول وطريقة تفريغ الخرسانة، بالمزراب أو في مضخة، في الاختيار.",
            },
          ],
          requestChecklist_en: [
            "Expected daily volumes and the largest single pour",
            "Concrete source (batching plant or on-site mixing) and distance",
            "Site access conditions",
            "Discharge method (chute or pump)",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "الكميات اليومية المتوقعة وأكبر صبة",
            "مصدر الخرسانة (محطة خلط أم خلط بالموقع) والمسافة",
            "ظروف مداخل الموقع",
            "طريقة التفريغ (مزراب أم مضخة)",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["concrete-pumps"],
          image: null,
          review: pending("T11 — transit vs self-loading vs site mixers"),
        },
        {
          id: "concrete-pumps",
          linkedProductId: "concrete-pumps",
          name_en: "Concrete Pumps",
          name_ar: "مضخة خرسانة",
          summary_en:
            "A machine that places concrete by pumping it — through a truck-mounted placing boom or along a pipeline.",
          summary_ar:
            "معدة تصب الخرسانة بالضخ، عبر ذراع توزيع مركّب على شاحنة أو من خلال خط مواسير.",
          whatItIs_en:
            "Concrete pumps move concrete under pressure from a receiving hopper to the point of placement. Boom pumps are truck-mounted and place concrete through a folding placing boom; line or trailer pumps push concrete through a pipeline laid across the site.",
          whatItIs_ar:
            "تدفع مضخات الخرسانة الخرسانة تحت ضغط من قادوس الاستقبال إلى مكان الصب. فالمضخة ذات الذراع مركّبة على شاحنة وتصب الخرسانة عبر ذراع توزيع قابل للطي، أما المضخة الأرضية (الخطية أو المقطورة) فتدفع الخرسانة عبر خط مواسير يُمد داخل الموقع.",
          usedFor_en:
            "Placing concrete quickly and precisely where chutes, or cranes with skips, would be slow or impractical.",
          usedFor_ar:
            "صب الخرسانة بسرعة ودقة في الأماكن التي يكون فيها الصب بالمزراب أو بالونش والقادوس بطيئًا أو غير عملي.",
          applications_en: [
            "Slabs and elevated floors",
            "High-rise and vertical placement",
            "Sites with restricted access",
            "Long-distance and underground placement",
            "Large continuous pours",
          ],
          applications_ar: [
            "صب البلاطات والأسقف",
            "الصب في المباني المرتفعة والصب الرأسي",
            "المواقع ذات المداخل المحدودة",
            "الصب لمسافات طويلة وتحت الأرض",
            "الصبات الكبيرة المستمرة",
          ],
          industryIds: [
            "building-construction",
            "roads-infrastructure",
            "industrial-plants",
          ],
          selectionFactors: [
            {
              factor_en: "Output and pour schedule",
              factor_ar: "معدل الصب وجدوله",
              detail_en:
                "The required placement rate depends on pour volumes and the time available for each pour.",
              detail_ar:
                "يعتمد معدل الصب المطلوب على كميات الصب والوقت المتاح لكل صبة.",
            },
            {
              factor_en: "Reach or pipeline length",
              factor_ar: "مدى الذراع أو طول خط المواسير",
              detail_en:
                "Boom reach, or pipeline length and height, must cover every placement point.",
              detail_ar:
                "يجب أن يغطي مدى الذراع، أو طول خط المواسير وارتفاعه، كل نقاط الصب.",
            },
            {
              factor_en: "Set-up space",
              factor_ar: "مساحة التثبيت",
              detail_en:
                "Boom pumps need room for their outriggers and a stable, accessible set-up position.",
              detail_ar:
                "تحتاج المضخة ذات الذراع إلى مساحة لأرجل الاتزان وموضع تثبيت ثابت يسهل الوصول إليه.",
            },
            {
              factor_en: "Concrete mix",
              factor_ar: "خلطة الخرسانة",
              detail_en:
                "The mix design must be suitable for pumping; confirm this with your concrete supplier.",
              detail_ar:
                "يجب أن تكون الخلطة مناسبة للضخ، ويُتأكد من ذلك مع مورد الخرسانة.",
            },
          ],
          requestChecklist_en: [
            "Pour volumes and placement schedule",
            "Placement height and horizontal distance",
            "Space available for set-up",
            "Concrete mix information",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "كميات الصب وجدوله",
            "ارتفاع الصب والمسافة الأفقية",
            "المساحة المتاحة للتثبيت",
            "بيانات خلطة الخرسانة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["concrete-mixers"],
          image: null,
          review: pending("T12 — boom vs line pumps, mix pumpability"),
        },
        {
          id: "vibratory-rollers",
          linkedProductId: "vibratory-rollers",
          name_en: "Vibratory Rollers",
          name_ar: "مدحلة اهتزازية",
          summary_en:
            "A compactor that uses vibrating drums to densify soil, aggregate and asphalt layers.",
          summary_ar:
            "معدة دمك تستخدم أسطوانات مهتزة لدمك طبقات التربة والركام والأسفلت.",
          whatItIs_en:
            "A vibratory roller combines the weight of one or two steel drums with vibration to compact material. Single-drum rollers are typically used on soil and granular layers, tandem rollers on asphalt, and pad-foot drums on cohesive soils such as clay.",
          whatItIs_ar:
            "تجمع المدحلة الاهتزازية بين وزن أسطوانة أو أسطوانتين من الصلب والاهتزاز لدمك المواد. وتُستخدم المداحل ذات الأسطوانة الواحدة عادة لطبقات التربة والمواد الحبيبية، والمداحل ثنائية الأسطوانة للأسفلت، والأسطوانات ذات النتوءات للتربة المتماسكة مثل الطين.",
          usedFor_en:
            "Compacting each layer of a road, platform or fill to the density required by the project specification.",
          usedFor_ar:
            "دمك كل طبقة من طبقات الطريق أو المنصة أو الردم حتى الكثافة المطلوبة في مواصفات المشروع.",
          applications_en: [
            "Compacting subgrade and sub-base layers",
            "Compacting asphalt surface layers",
            "Embankment and fill compaction",
            "Trench backfill compaction",
            "Compacting yards and platforms",
          ],
          applications_ar: [
            "دمك طبقات التأسيس وما تحت الأساس",
            "دمك طبقات الأسفلت السطحية",
            "دمك الجسور الترابية والردم",
            "دمك ردم الخنادق",
            "دمك الساحات والمنصات",
          ],
          industryIds: [
            "roads-infrastructure",
            "utilities",
            "municipal",
            "airports",
          ],
          selectionFactors: [
            {
              factor_en: "Material type",
              factor_ar: "نوع الخامة",
              detail_en:
                "Granular soils, cohesive soils and asphalt each call for a different drum arrangement.",
              detail_ar:
                "تتطلب التربة الحبيبية والتربة المتماسكة والأسفلت ترتيبات مختلفة للأسطوانات.",
            },
            {
              factor_en: "Layer thickness",
              factor_ar: "سمك الطبقة",
              detail_en:
                "The machine class should suit the thickness of each compacted layer.",
              detail_ar: "يجب أن تتناسب فئة المدحلة مع سمك كل طبقة مدموكة.",
            },
            {
              factor_en: "Drum width and working space",
              factor_ar: "عرض الأسطوانة ومساحة العمل",
              detail_en:
                "Drum width should suit lane widths, trenches or confined areas.",
              detail_ar:
                "يُختار عرض الأسطوانة وفق عروض الحارات أو الخنادق أو المساحات الضيقة.",
            },
            {
              factor_en: "Asphalt work",
              factor_ar: "أعمال الأسفلت",
              detail_en:
                "Rollers used on asphalt need a water spray system to stop the mix sticking to the drums.",
              detail_ar:
                "تحتاج مداحل الأسفلت إلى نظام رش مياه يمنع التصاق الخلطة بالأسطوانات.",
            },
            {
              factor_en: "Compaction specification",
              factor_ar: "مواصفات الدمك",
              detail_en:
                "The project's compaction requirements guide both the choice of machine and the compaction method.",
              detail_ar:
                "توجّه متطلبات الدمك في المشروع اختيار المعدة وطريقة الدمك.",
            },
          ],
          requestChecklist_en: [
            "Materials to be compacted",
            "Typical layer thickness",
            "Working widths and any confined areas",
            "The project's compaction requirements",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواد المطلوب دمكها",
            "سمك الطبقات المعتاد",
            "عروض العمل وأي مساحات ضيقة",
            "متطلبات الدمك في المشروع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["asphalt-pavers", "motor-graders"],
          image: null,
          review: pending(
            "T13 — single-drum/tandem/pad-foot guidance, water system",
          ),
        },
        {
          id: "asphalt-pavers",
          linkedProductId: "asphalt-pavers",
          name_en: "Asphalt Pavers",
          name_ar: "فرادة أسفلت",
          summary_en:
            "A machine that lays hot asphalt mix at a controlled width, thickness and profile.",
          summary_ar: "معدة تفرد خلطة الأسفلت الساخنة بعرض وسمك ومنسوب مضبوط.",
          whatItIs_en:
            "An asphalt paver receives hot mix from trucks into a front hopper, conveys it to augers that spread it across the paving width, and lays it through a screed that sets the layer's thickness and gives it initial compaction. Pavers are built on wheels or on tracks.",
          whatItIs_ar:
            "تستقبل فرادة الأسفلت الخلطة الساخنة من سيارات النقل في قادوس أمامي، وتنقلها السيور إلى بريمات توزّعها على عرض الفرد، ثم تُفرد الطبقة عبر لوح التسوية (السكريد) الذي يحدد سمكها ويمنحها دمكًا أوليًا. وتُصنع الفرادات بعجلات أو بجنزير.",
          usedFor_en:
            "Laying asphalt base, binder and surface layers evenly, ahead of final compaction by rollers.",
          usedFor_ar:
            "فرد طبقات الأسفلت الأساسية والرابطة والسطحية بانتظام، تمهيدًا لدمكها النهائي بالمداحل.",
          applications_en: [
            "Highway and road paving",
            "Urban road resurfacing",
            "Airport pavements",
            "Parking areas and industrial yards",
            "Base and binder course laying",
          ],
          applications_ar: [
            "رصف الطرق السريعة والطرق",
            "إعادة رصف طرق المدن",
            "رصف ممرات المطارات وساحاتها",
            "ساحات الانتظار والساحات الصناعية",
            "فرد الطبقات الأساسية والرابطة",
          ],
          industryIds: [
            "roads-infrastructure",
            "municipal",
            "airports",
            "industrial-plants",
          ],
          selectionFactors: [
            {
              factor_en: "Paving width",
              factor_ar: "عرض الفرد",
              detail_en:
                "The paver's width range and screed extensions must cover the lane and shoulder widths.",
              detail_ar:
                "يجب أن يغطي نطاق عرض الفرادة وامتدادات السكريد عروض الحارات والأكتاف.",
            },
            {
              factor_en: "Output and supply",
              factor_ar: "الإنتاجية والإمداد",
              detail_en:
                "Paving output should be balanced with the asphalt plant's supply and the truck cycles.",
              detail_ar:
                "يجب الموازنة بين إنتاجية الفرد وإمداد محطة الأسفلت ودورات سيارات النقل.",
            },
            {
              factor_en: "Tracks or wheels",
              factor_ar: "جنزير أم عجل",
              detail_en:
                "Tracks offer traction on soft or uneven bases; wheels allow faster repositioning between jobs.",
              detail_ar:
                "الجنزير يوفر قوة جر على الطبقات الرخوة أو غير المستوية، والعجل يتيح انتقالًا أسرع بين المواقع.",
            },
            {
              factor_en: "Grade and slope control",
              factor_ar: "التحكم في المنسوب والميل",
              detail_en:
                "Projects with tight level and cross-slope requirements may need automatic grade and slope control.",
              detail_ar:
                "قد تتطلب المشروعات ذات الاشتراطات الدقيقة للمناسيب والميول العرضية نظام تحكم آلي في المنسوب والميل.",
            },
          ],
          requestChecklist_en: [
            "Paving widths and layer types",
            "Expected daily tonnage",
            "Distance from the asphalt plant",
            "How often the paver will move between sites",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "عروض الفرد وأنواع الطبقات",
            "الكمية اليومية المتوقعة بالطن",
            "المسافة من محطة الأسفلت",
            "مدى تكرار نقل الفرادة بين المواقع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["vibratory-rollers", "motor-graders"],
          image: null,
          review: pending(
            "T14 — hopper/conveyor/auger/screed sequence, tracks vs wheels; AR term فرادة vs فارشة",
          ),
        },
        {
          id: "hydraulic-breakers",
          linkedProductId: "hydraulic-breakers",
          name_en: "Hydraulic Breakers",
          name_ar: "مطرقة تكسير هيدروليكية",
          summary_en:
            "A percussive attachment, mounted on an excavator or backhoe loader, for breaking rock and concrete.",
          summary_ar:
            "ملحق تكسير يُركّب على الحفار أو اللودر الحفار لتكسير الصخور والخرسانة.",
          whatItIs_en:
            "A hydraulic breaker is an attachment, not a standalone machine. Mounted on a carrier such as an excavator or backhoe loader and powered by its hydraulic system, it drives a steel tool into rock or concrete with rapid, repeated blows.",
          whatItIs_ar:
            "مطرقة التكسير الهيدروليكية ملحق وليست معدة مستقلة؛ تُركّب على معدة حاملة مثل الحفار أو اللودر الحفار وتعمل بنظامها الهيدروليكي، فتدفع أداة من الصلب في الصخر أو الخرسانة بضربات سريعة ومتتالية.",
          usedFor_en:
            "Breaking material that is too hard to dig — rock, concrete and reinforced structures.",
          usedFor_ar:
            "تكسير المواد التي يصعب حفرها مثل الصخور والخرسانة والمنشآت المسلحة.",
          applications_en: [
            "Demolition of buildings and structures",
            "Secondary breaking of oversize rock in quarries",
            "Trenching through rock",
            "Removing concrete slabs and foundations",
            "Breaking pavement during road rehabilitation",
          ],
          applications_ar: [
            "هدم المباني والمنشآت",
            "التكسير الثانوي للكتل الصخرية الكبيرة في المحاجر",
            "فتح الخنادق في الصخر",
            "إزالة البلاطات والقواعد الخرسانية",
            "تكسير الرصف في أعمال إعادة تأهيل الطرق",
          ],
          industryIds: [
            "demolition",
            "quarrying",
            "utilities",
            "roads-infrastructure",
          ],
          selectionFactors: [
            {
              factor_en: "Carrier compatibility",
              factor_ar: "التوافق مع المعدة الحاملة",
              detail_en:
                "The breaker must match the carrier's weight class and its hydraulic flow and pressure.",
              detail_ar:
                "يجب أن تتوافق المطرقة مع فئة وزن المعدة الحاملة ومع تدفق وضغط نظامها الهيدروليكي.",
            },
            {
              factor_en: "Material",
              factor_ar: "نوع الخامة",
              detail_en:
                "The hardness of the rock or concrete influences the breaker size and the tool type.",
              detail_ar:
                "تؤثر صلابة الصخر أو الخرسانة في حجم المطرقة ونوع الأداة.",
            },
            {
              factor_en: "Mounting arrangement",
              factor_ar: "طريقة التركيب",
              detail_en:
                "Breakers come in different mounting and housing arrangements; confirm the one suited to your carrier.",
              detail_ar:
                "تتوفر المطارق بترتيبات تركيب وأغلفة مختلفة، ويجب التأكد من الترتيب المناسب للمعدة الحاملة.",
            },
            {
              factor_en: "Working environment",
              factor_ar: "بيئة العمل",
              detail_en: "Urban sites may require attention to noise and dust.",
              detail_ar: "قد تتطلب المواقع داخل المدن مراعاة الضوضاء والأتربة.",
            },
          ],
          requestChecklist_en: [
            "Carrier machine type and its hydraulic details",
            "Material to be broken",
            "Preferred mounting arrangement",
            "Working environment (urban site, quarry or demolition)",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع المعدة الحاملة وبيانات نظامها الهيدروليكي",
            "الخامة المطلوب تكسيرها",
            "طريقة التركيب المفضلة",
            "بيئة العمل (داخل المدن أو محجر أو هدم)",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["hydraulic-excavators", "backhoe-loaders"],
          image: null,
          review: pending(
            "T15 — carrier matching, mounting arrangements; AR term (never هراس, which means a roller)",
          ),
        },
      ],
    },
  ],

  request: {
    title_en: "What to include in your quotation request",
    title_ar: "ما الذي يجب إرساله مع طلب عرض السعر",
    intro_en:
      "A complete request lets us source equipment that matches your requirement and quote accurately. Include as much of the following as you can — each equipment guide above lists the additional details specific to that machine.",
    intro_ar:
      "الطلب المكتمل يساعدنا على توريد معدات مطابقة لاحتياجكم وتقديم عرض سعر دقيق. أرسلوا أكبر قدر ممكن من البيانات التالية، علمًا بأن كل دليل معدة أعلاه يوضح البيانات الإضافية الخاصة بها.",
    checklist_en: [
      "Equipment type and quantity",
      "New or used, and any preference on age or condition",
      "Main tasks, materials and working conditions",
      "Size, capacity or reach requirements from your specification",
      "Attachments or optional equipment required",
      "Delivery location and required timing",
      "Tender documents, drawings or technical specifications, if available",
    ],
    checklist_ar: [
      "نوع المعدة والعدد المطلوب",
      "جديدة أم مستعملة، وأي تفضيل يخص سنة الصنع أو الحالة",
      "المهام الرئيسية والخامات وظروف التشغيل",
      "متطلبات الحجم أو القدرة أو مدى الوصول وفق مواصفاتكم",
      "الملحقات أو التجهيزات الإضافية المطلوبة",
      "مكان التسليم والتوقيت المطلوب",
      "مستندات المناقصة أو الرسومات أو المواصفات الفنية إن وُجدت",
    ],
    processTitle_en: "How a request is handled",
    processTitle_ar: "كيف نتعامل مع طلبكم",
    steps: [
      {
        title_en: "Share your requirement",
        title_ar: "أرسلوا متطلباتكم",
        description_en:
          "Send the equipment details and your specification through the quotation form on this page.",
        description_ar:
          "أرسلوا بيانات المعدة ومواصفاتكم من خلال نموذج طلب عرض السعر في هذه الصفحة.",
      },
      {
        title_en: "Requirement review",
        title_ar: "مراجعة المتطلبات",
        description_en:
          "Our team reviews the request and clarifies any open technical points with you.",
        description_ar:
          "يراجع فريقنا الطلب ويستوضح معكم أي نقاط فنية غير مكتملة.",
      },
      {
        title_en: "Sourcing to specification",
        title_ar: "التوريد وفق المواصفات",
        description_en:
          "We source equipment that matches the specification — new or used, as requested.",
        description_ar:
          "نحدد معدات مطابقة للمواصفات، جديدة أو مستعملة حسب طلبكم.",
      },
      {
        title_en: "Quotation",
        title_ar: "عرض السعر",
        description_en:
          "We send a quotation stating the equipment configuration, condition and lead time.",
        description_ar: "نرسل عرض سعر يوضح تكوين المعدة وحالتها ومدة التوريد.",
      },
    ],
  },

  quote: {
    title_en: "Request a Quote",
    title_ar: "اطلب عرض سعر",
    subtitle_en:
      "Send your equipment requirement and our team will respond with a quotation.",
    subtitle_ar: "أرسلوا متطلبات المعدات وسيرد عليكم فريقنا بعرض سعر.",
  },
};
