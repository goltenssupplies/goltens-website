import type { CompactGuidePage } from "@/data/sector-content/compact-guide-page";
import type {
  EquipmentGuideReview,
  SectorEquipmentGuide,
  SectorFaq,
  SectorHeroCopy,
} from "@/data/sector-content/types";

/**
 * Construction & Infrastructure Materials — a construction-material
 * procurement and BOQ response guide (work-package matrix, three material
 * families — cement, concrete & masonry; steel, waterproofing & insulation;
 * pipes, drainage & road materials — routing to the other GOLTENS sectors,
 * a specified-items-and-equivalents path and a two-part, document-driven
 * quotation checklist). Rendered in the compact guide layout of
 * `app/[locale]/sectors/[slug]/page.tsx` (see `compact-guide-page.ts`).
 *
 * Content rules (enforced by `scripts/verify-equipment-guides.mjs`):
 * - Approved scope only: the 15 material guides below, one per
 *   `data/products/construction/*` record, "Available on request." —
 *   never stock. No guide or family for tiles / flooring, doors / windows /
 *   glazing, hardware / tools, construction chemicals, ready-mix concrete,
 *   hot-mix asphalt or any other material without a record.
 * - The 15 product records are internal source material only: they stay
 *   non-public and are never linked; no brand, model, numeric
 *   specification or standard reaches the page.
 * - Requirements come from the customer's documents (BOQ, material
 *   schedule, specification, drawings). GOLTENS prepares a quotation
 *   against them. It does not design, calculate, install or execute
 *   construction works, confirm compliance, certify or approve anything,
 *   and names no projects or customers.
 * - Equivalents are quoted only where the specification allows them;
 *   equivalence and approval remain with the consultant, engineer or
 *   customer. Matching existing items is limited to sanitary ware, manhole
 *   covers and gratings, and pipe / plumbing fittings.
 *
 * Every entry awaits technical review (`review.technical`) and
 * Egyptian-market Arabic terminology review (`review.arabic`).
 */

const pending = (notes: string): EquipmentGuideReview => ({
  technical: "needs-verification",
  arabic: "needs-verification",
  notes,
});

const CHECKLIST_CLOSING_EN = "Delivery site and required dates";
const CHECKLIST_CLOSING_AR = "موقع التوريد والتواريخ المطلوبة";
const BOQ_ITEM_EN = "BOQ item or specification reference";
const BOQ_ITEM_AR = "بند جدول الكميات أو مرجع المواصفات";

const DISCLAIMER_EN =
  "GOLTENS prepares a quotation based on the information provided. Structural design, material selection, mix design, quantities, consultant approval and final technical acceptance remain with the customer, contractor, consultant or engineer of record, as applicable.";
const DISCLAIMER_AR =
  "تُعد GOLTENS عرض السعر استنادًا إلى المعلومات المقدمة، بينما تظل مسؤولية التصميم الإنشائي واختيار المواد وتصميم الخلطات والكميات واعتماد الاستشاري والقبول الفني النهائي على عاتق العميل أو المقاول أو الاستشاري أو المهندس المسؤول، بحسب الحالة.";
const EQUIVALENCE_EN =
  "Equivalence and approval of any proposed item remain with the consultant, engineer or customer, as applicable.";
const EQUIVALENCE_AR =
  "ويظل تأكيد التكافؤ واعتماد أي صنف مقترح من مسؤولية الاستشاري أو المهندس أو العميل، بحسب الحالة.";

/** Sector-page hero copy (replaces the `data/sectors.ts` subtitle/description on this page only). */
export const constructionHero: SectorHeroCopy = {
  subtitle_en:
    "GOLTENS supplies construction and infrastructure materials against BOQs, material schedules and project specifications provided by contractors, consultants and project owners.",
  subtitle_ar:
    "توفر GOLTENS مواد البناء والبنية التحتية وفق جداول الكميات وجداول المواد ومواصفات المشروعات المقدمة من المقاولين والاستشاريين وملاك المشروعات.",
  description_en:
    "Cement, concrete and masonry; steel, waterproofing and insulation; and pipes, drainage and road materials are quoted against the requirements provided. Availability is confirmed during quotation.",
  description_ar:
    "يتم إعداد عروض أسعار الأسمنت والخرسانة ومواد المباني، والحديد ومواد العزل المائي والحراري، والمواسير والصرف ومواد الطرق وفق المتطلبات المقدمة، ويتم تأكيد التوافر أثناء إعداد العرض.",
};

export const constructionFaqs: SectorFaq[] = [
  {
    question_en: "What should I send with my request?",
    answer_en:
      "Send the BOQ or material schedule with the relevant specification sections, the project name and location, quantities and units, the delivery site and required dates, and your quotation deadline. The checklist on this page lists the information that helps.",
    question_ar: "ما الذي يجب إرساله مع الطلب؟",
    answer_ar:
      "أرسلوا جدول الكميات أو جدول المواد مع بنود المواصفات المرتبطة، واسم المشروع وموقعه، والكميات ووحدات القياس، وموقع التوريد والتواريخ المطلوبة، والموعد النهائي لعرض السعر. وتوضح القائمة في هذه الصفحة البيانات المفيدة.",
  },
  {
    question_en: "Can you quote from a BOQ or material schedule?",
    answer_en:
      "Yes. Send the BOQ or material schedule with its specification references. Items are quoted against the stated descriptions and quantities, and any unclear item is clarified during quotation.",
    question_ar: "هل يمكن إعداد عرض السعر من جدول الكميات أو جدول المواد؟",
    answer_ar:
      "نعم، أرسلوا جدول الكميات أو جدول المواد مع مراجع المواصفات. ويتم إعداد عرض السعر وفق الأوصاف والكميات المذكورة، مع توضيح أي بند غير واضح أثناء إعداد العرض.",
  },
  {
    question_en:
      'What if the specification names a manufacturer or says "approved equal"?',
    answer_en: `State the specified manufacturer or product and whether equivalents are permitted. The specified item is quoted where it is required; an equivalent is quoted only where the specification allows it. ${EQUIVALENCE_EN}`,
    question_ar:
      "ماذا لو حددت المواصفات مصنعًا معينًا أو نصت على «بديل معتمد مكافئ»؟",
    answer_ar: `اذكروا المصنع أو المنتج المحدد ووضحوا ما إذا كانت البدائل المكافئة مسموحة. ويتم إعداد عرض سعر الصنف المحدد عندما يكون مطلوبًا، ولا يتم إعداد عرض لبديل مكافئ إلا إذا سمحت المواصفات بذلك. ${EQUIVALENCE_AR}`,
  },
  {
    question_en: "Who handles consultant approval and submittals?",
    answer_en:
      "Consultant approval and submittals remain with the customer or contractor. State any documents, samples or submittal information required with the quotation; their availability is confirmed during quotation.",
    question_ar: "من يتولى اعتماد الاستشاري ومستندات التقديم؟",
    answer_ar:
      "يظل اعتماد الاستشاري وتقديم المستندات من مسؤولية العميل أو المقاول. اذكروا المستندات أو العينات أو بيانات التقديم المطلوبة مع عرض السعر، ويتم تأكيد توافرها أثناء إعداد العرض.",
  },
  {
    question_en: "Can you supply bulk or phased quantities?",
    answer_en:
      "Bulk and phased quantities can be included in the request. State the quantities, delivery site and phasing required; quantities, availability and the delivery schedule are confirmed for each item during quotation.",
    question_ar: "هل يمكن توريد كميات كبيرة أو على مراحل؟",
    answer_ar:
      "يمكن إدراج الكميات الكبيرة أو المرحلية في الطلب. اذكروا الكميات وموقع التوريد والمراحل المطلوبة، ويتم تأكيد الكميات والتوافر وجدول التوريد لكل صنف أثناء إعداد عرض السعر.",
  },
  {
    question_en:
      "Does GOLTENS design, calculate, install or execute construction works?",
    answer_en: `No. GOLTENS supplies materials against the customer's documents; it does not design, calculate, install or execute construction works. ${DISCLAIMER_EN}`,
    question_ar:
      "هل تقوم GOLTENS بالتصميم أو الحسابات أو التركيب أو تنفيذ أعمال الإنشاء؟",
    answer_ar: `لا، توفر GOLTENS المواد وفق مستندات العميل، ولا تقوم بالتصميم أو الحسابات أو التركيب أو تنفيذ أعمال الإنشاء. ${DISCLAIMER_AR}`,
  },
  {
    question_en: "What if an item is outside these Construction families?",
    answer_en:
      "Send the full BOQ. Requirements covered by other GOLTENS sectors — see Requirements Covered by Other Sectors — can be included in the same request, and non-standard or hard-to-source items can be routed to Global Sourcing.",
    question_ar: "ماذا لو كان الصنف خارج مجموعات مواد البناء هذه؟",
    answer_ar:
      "أرسلوا جدول الكميات كاملًا. فالمتطلبات التي تغطيها قطاعات GOLTENS الأخرى — راجعوا قسم متطلبات تغطيها قطاعات أخرى — يمكن إدراجها ضمن الطلب نفسه، ويمكن توجيه الأصناف غير القياسية أو صعبة التوفير إلى قطاع التوريد الدولي.",
  },
  {
    question_en: "How are availability and lead time confirmed?",
    answer_en:
      "Availability and lead time are confirmed for each item during quotation, rather than given as a single fixed figure.",
    question_ar: "كيف يتم تأكيد التوافر ومدة التوريد؟",
    answer_ar:
      "يتم تأكيد التوافر ومدة التوريد لكل صنف أثناء إعداد عرض السعر، بدلًا من تحديد مدة ثابتة موحدة.",
  },
];

export const constructionGuide: SectorEquipmentGuide = {
  heroVisual: "neutral",
  availability_en: "Available on request.",
  availability_ar: "متاح حسب الطلب.",

  intro: {
    eyebrow_en: "Construction materials procurement guide",
    eyebrow_ar: "دليل توريد مواد البناء",
    lead_en:
      "Construction material requirements usually arrive as a BOQ or material schedule with specification sections and drawings. GOLTENS reviews the information provided, sources the specified materials and prepares a quotation.",
    lead_ar:
      "تصل متطلبات مواد البناء عادةً في صورة جدول كميات أو جدول مواد مع بنود المواصفات واللوحات. وتراجع GOLTENS البيانات المقدمة، وتوفر المواد المحددة، وتُعد عرض السعر.",
    note_en:
      "These guides describe common construction material types and the information needed to quote them — they are not a catalogue of specific products. Requirements outside these three families are covered by other GOLTENS sectors.",
    note_ar:
      "توضح هذه الأدلة أنواع مواد البناء الشائعة والبيانات اللازمة لإعداد عروض أسعارها، وليست كتالوجًا لمنتجات محددة. أما المتطلبات خارج هذه المجموعات الثلاث فتغطيها قطاعات أخرى لدى GOLTENS.",
  },

  projectsTitle_en: "Choose by Work Package",
  projectsTitle_ar: "اختر حسب حزمة الأعمال",
  projectsIntro_en:
    "Typical materials for common work packages. The materials, grades and quantities come from your BOQ, material schedule and specification.",
  projectsIntro_ar:
    "المواد المعتادة لحزم الأعمال الشائعة، بينما تُحدَّد المواد والدرجات والكميات وفق جدول الكميات وجدول المواد والمواصفات الخاصة بكم.",

  industries: [
    {
      id: "residential-commercial-buildings",
      label_en: "Residential & commercial buildings",
      label_ar: "المباني السكنية والتجارية",
    },
    {
      id: "public-institutional-buildings",
      label_en: "Public & institutional buildings",
      label_ar: "المباني العامة والمؤسسية",
    },
    {
      id: "industrial-facilities",
      label_en: "Industrial facilities",
      label_ar: "المنشآت الصناعية",
    },
    {
      id: "roads-infrastructure",
      label_en: "Roads & infrastructure",
      label_ar: "الطرق والبنية التحتية",
    },
    {
      id: "water-drainage-networks",
      label_en: "Water & drainage networks",
      label_ar: "شبكات المياه والصرف",
    },
  ],

  projects: [
    {
      id: "substructure-foundations",
      title_en: "Substructure & Foundations",
      title_ar: "الأعمال تحت الأرض والأساسات",
      description_en:
        "Materials for footings, rafts, basements and below-ground walls.",
      description_ar: "مواد القواعد واللبشات والبدرومات والحوائط تحت الأرض.",
      equipmentIds: [
        "portland-cement",
        "aggregates-sand",
        "reinforcement-steel-rebar",
        "waterproofing-membranes",
        "concrete-admixtures",
      ],
      review: pending("work-package context only"),
    },
    {
      id: "concrete-frame-slabs",
      title_en: "Concrete Frame & Slabs",
      title_ar: "الهيكل الخرساني والبلاطات",
      description_en: "Materials for columns, beams, slabs and cores.",
      description_ar: "مواد الأعمدة والكمرات والبلاطات.",
      equipmentIds: [
        "portland-cement",
        "aggregates-sand",
        "concrete-admixtures",
        "reinforcement-steel-rebar",
        "precast-concrete-products",
      ],
      review: pending("work-package context only"),
    },
    {
      id: "masonry-partitions",
      title_en: "Masonry & Partitions",
      title_ar: "أعمال المباني والقواطع",
      description_en: "Materials for load-bearing walls and partitions.",
      description_ar: "مواد الحوائط الحاملة والقواطع.",
      equipmentIds: [
        "concrete-blocks-bricks",
        "portland-cement",
        "aggregates-sand",
      ],
      review: pending("work-package context only"),
    },
    {
      id: "steel-structures",
      title_en: "Steel Structures",
      title_ar: "المنشآت المعدنية",
      description_en: "Sections for frames, platforms and supports.",
      description_ar: "القطاعات اللازمة للهياكل والمنصات والدعامات.",
      equipmentIds: ["structural-steel-sections", "sealants-expansion-joints"],
      review: pending("work-package context only"),
    },
    {
      id: "roofing-building-envelope",
      title_en: "Roofing & Building Envelope",
      title_ar: "الأسطح والغلاف الخارجي للمبنى",
      description_en: "Waterproofing, insulation and joint sealing.",
      description_ar: "العزل المائي والحراري وسد الفواصل.",
      equipmentIds: [
        "waterproofing-membranes",
        "thermal-insulation-boards",
        "sealants-expansion-joints",
      ],
      review: pending("work-package context only"),
    },
    {
      id: "wet-areas-sanitary-fit-out",
      title_en: "Wet Areas & Sanitary Fit-Out",
      title_ar: "المناطق الرطبة والتجهيزات الصحية",
      description_en: "Bathrooms, washrooms and other wet areas.",
      description_ar: "الحمامات ودورات المياه والمناطق الرطبة الأخرى.",
      equipmentIds: [
        "sanitary-ware-fittings",
        "plumbing-fittings",
        "waterproofing-membranes",
        "sealants-expansion-joints",
      ],
      review: pending("work-package context only"),
    },
    {
      id: "water-supply-drainage-networks",
      title_en: "Water Supply & Drainage Networks",
      title_ar: "شبكات المياه والصرف",
      description_en:
        "Pipes, fittings and drainage products for networks; pump requirements are covered by Industrial Equipment.",
      description_ar:
        "المواسير والوصلات ومنتجات الصرف للشبكات، بينما يغطي قطاع المعدات الصناعية متطلبات المضخات.",
      equipmentIds: [
        "pipes-upvc-hdpe-grp",
        "plumbing-fittings",
        "manhole-covers-gratings-drainage",
      ],
      review: pending("work-package context only"),
    },
    {
      id: "roads-paving-external-works",
      title_en: "Roads, Paving & External Works",
      title_ar: "الطرق والرصف والأعمال الخارجية",
      description_en:
        "Road and paving materials for external works; machinery requirements are covered by Heavy Equipment.",
      description_ar:
        "مواد الطرق والرصف للأعمال الخارجية، بينما يغطي قطاع المعدات الثقيلة متطلبات الآليات.",
      equipmentIds: [
        "road-paving-materials",
        "precast-concrete-products",
        "manhole-covers-gratings-drainage",
        "aggregates-sand",
      ],
      review: pending("work-package context only"),
    },
    {
      id: "tender-boq-multi-package",
      title_en: "Tender BOQ & Multi-Package Requirements",
      title_ar: "جداول كميات المناقصات والطلبات متعددة الحزم",
      description_en:
        "Mixed items across the three families, quoted against one BOQ.",
      description_ar:
        "أصناف متنوعة من المجموعات الثلاث، يتم إعداد عرض سعرها وفق جدول كميات واحد.",
      equipmentIds: [
        "portland-cement",
        "reinforcement-steel-rebar",
        "pipes-upvc-hdpe-grp",
      ],
      review: pending("BOQ-driven; no tender preparation claim"),
    },
    {
      id: "items-outside-families",
      title_en: "Items Outside These Families",
      title_ar: "أصناف خارج هذه المجموعات",
      description_en:
        "BOQ items covered by other GOLTENS sectors can be included in the same request.",
      description_ar:
        "يمكن إدراج بنود جدول الكميات التي تغطيها قطاعات GOLTENS الأخرى ضمن الطلب نفسه.",
      equipmentIds: [],
      review: pending("routing row — links to the routing block"),
    },
  ],

  categories: [
    {
      categoryId: "cement-concrete-materials",
      title_en: "Cement, Concrete & Masonry",
      title_ar: "الأسمنت والخرسانة والمباني",
      intro_en:
        "Cement, aggregates, masonry units, admixtures and precast products, quoted against the grades, classes and quantities in your BOQ.",
      intro_ar:
        "الأسمنت والركام ووحدات المباني والإضافات والمنتجات مسبقة الصب، ويتم إعداد عروض أسعارها وفق الدرجات والفئات والكميات الواردة في جدول الكميات.",
      icon: "HardHat",
      equipment: [
        {
          id: "portland-cement",
          linkedProductId: "portland-cement",
          name_en: "Portland Cement",
          name_ar: "الأسمنت البورتلاندي",
          summary_en:
            "Ordinary and sulfate-resisting Portland cement for concrete, mortar and plaster.",
          summary_ar:
            "أسمنت بورتلاندي عادي ومقاوم للكبريتات للخرسانة والمونة والبياض.",
          whatItIs_en:
            "Portland cement in ordinary and sulfate-resisting types, supplied bagged or in bulk to the type and strength class stated in the specification.",
          whatItIs_ar:
            "أسمنت بورتلاندي بنوعيه العادي والمقاوم للكبريتات، يتم توريده معبأً أو سائبًا وفق النوع ورتبة المقاومة المحددين في المواصفات.",
          usedFor_en:
            "Structural concrete, masonry mortar, plaster and screeds, and concrete products.",
          usedFor_ar:
            "الخرسانة الإنشائية ومونة المباني والبياض والمحارة ومنتجات الخرسانة.",
          applications_en: [
            "Foundations, columns and slabs",
            "Mortar, plaster and screed",
            "Concrete in aggressive soil, where sulfate-resisting cement is specified",
          ],
          applications_ar: [
            "الأساسات والأعمدة والبلاطات",
            "المونة والبياض والمحارة",
            "الخرسانة في التربة العدوانية عند تحديد الأسمنت المقاوم للكبريتات",
          ],
          industryIds: [
            "residential-commercial-buildings",
            "public-institutional-buildings",
            "industrial-facilities",
            "roads-infrastructure",
          ],
          selectionFactors: [
            {
              factor_en: "Cement type",
              factor_ar: "نوع الأسمنت",
              detail_en: "Ordinary or sulfate-resisting, as specified.",
              detail_ar: "عادي أو مقاوم للكبريتات، وفق المواصفات.",
            },
            {
              factor_en: "Strength class",
              factor_ar: "رتبة المقاومة",
              detail_en: "The class stated in the specification.",
              detail_ar: "الرتبة المحددة في المواصفات.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "طريقة التعبئة",
              detail_en:
                "Bagged or bulk, with the delivery method the site can receive.",
              detail_ar: "معبأ أو سائب، وفق طريقة الاستلام المتاحة في الموقع.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Cement type and strength class",
            "Bagged or bulk delivery",
            "Quantity and delivery phasing",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "نوع الأسمنت ورتبة المقاومة",
            "التوريد معبأً أو سائبًا",
            "الكمية ومراحل التوريد",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["aggregates-sand", "concrete-admixtures"],
          image: null,
          review: pending("customer-stated type and class only"),
        },
        {
          id: "aggregates-sand",
          linkedProductId: "ready-mix-aggregates",
          name_en: "Aggregates & Sand",
          name_ar: "الركام والرمل",
          summary_en:
            "Coarse aggregates and sand for concrete, mortar, backfill and sub-base.",
          summary_ar: "ركام خشن ورمل للخرسانة والمونة والردم وطبقات الأساس.",
          whatItIs_en:
            "Crushed or natural coarse aggregate and fine sand, supplied to the grading and cleanliness requirements stated in the specification.",
          whatItIs_ar:
            "ركام خشن مكسر أو طبيعي ورمل ناعم، يتم توريدهما وفق متطلبات التدرج والنظافة المحددة في المواصفات.",
          usedFor_en:
            "Concrete and mortar production, backfilling, sub-base and bedding works.",
          usedFor_ar:
            "إنتاج الخرسانة والمونة وأعمال الردم وطبقات الأساس والفرش.",
          applications_en: [
            "Site-batched concrete",
            "Mortar and plaster sand",
            "Backfill, sub-base and pipe bedding",
          ],
          applications_ar: [
            "الخرسانة المخلوطة في الموقع",
            "رمل المونة والبياض",
            "الردم وطبقات الأساس وفرش المواسير",
          ],
          industryIds: [
            "residential-commercial-buildings",
            "roads-infrastructure",
            "water-drainage-networks",
          ],
          selectionFactors: [
            {
              factor_en: "Aggregate type",
              factor_ar: "نوع الركام",
              detail_en: "Coarse aggregate or sand, crushed or natural.",
              detail_ar: "ركام خشن أو رمل، مكسر أو طبيعي.",
            },
            {
              factor_en: "Grading",
              factor_ar: "التدرج",
              detail_en:
                "The grading and maximum size stated in the specification.",
              detail_ar: "التدرج والمقاس الأقصى المحددان في المواصفات.",
            },
            {
              factor_en: "Cleanliness",
              factor_ar: "النظافة",
              detail_en: "Washed or unwashed, as the specification requires.",
              detail_ar: "مغسول أو غير مغسول، وفق متطلبات المواصفات.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Aggregate type and grading",
            "Intended use (concrete, mortar, backfill or sub-base)",
            "Volume or tonnage and delivery phasing",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "نوع الركام والتدرج",
            "الاستخدام المطلوب (خرسانة أو مونة أو ردم أو طبقة أساس)",
            "الحجم أو الوزن ومراحل التوريد",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["portland-cement", "concrete-blocks-bricks"],
          image: null,
          review: pending("customer-stated grading only"),
        },
        {
          id: "concrete-blocks-bricks",
          linkedProductId: "concrete-blocks-bricks",
          name_en: "Concrete Blocks & Bricks",
          name_ar: "البلوك والطوب",
          summary_en:
            "Solid and hollow concrete blocks and bricks for load-bearing and partition walls.",
          summary_ar: "بلوك وطوب خرساني مصمت ومفرغ للحوائط الحاملة والقواطع.",
          whatItIs_en:
            "Concrete masonry units in solid and hollow forms and in dense or lightweight types, supplied to the size and strength class in the specification.",
          whatItIs_ar:
            "وحدات مباني خرسانية مصمتة ومفرغة بأنواع عادية أو خفيفة الوزن، يتم توريدها وفق المقاس ورتبة المقاومة المحددين في المواصفات.",
          usedFor_en: "Load-bearing walls, partitions and boundary walls.",
          usedFor_ar: "الحوائط الحاملة والقواطع وأسوار المواقع.",
          applications_en: [
            "Load-bearing masonry walls",
            "Internal partitions",
            "Boundary and compound walls",
          ],
          applications_ar: [
            "حوائط المباني الحاملة",
            "القواطع الداخلية",
            "الأسوار وحوائط المواقع",
          ],
          industryIds: [
            "residential-commercial-buildings",
            "public-institutional-buildings",
            "industrial-facilities",
          ],
          selectionFactors: [
            {
              factor_en: "Unit type",
              factor_ar: "نوع الوحدة",
              detail_en: "Solid or hollow, dense or lightweight.",
              detail_ar: "مصمت أو مفرغ، عادي أو خفيف الوزن.",
            },
            {
              factor_en: "Size",
              factor_ar: "المقاس",
              detail_en: "Width and face size as specified.",
              detail_ar: "العرض ومقاس الواجهة وفق المواصفات.",
            },
            {
              factor_en: "Strength class",
              factor_ar: "رتبة المقاومة",
              detail_en: "The class stated in the specification.",
              detail_ar: "الرتبة المحددة في المواصفات.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Unit type and size",
            "Strength class",
            "Quantity and pallet or loose delivery",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "نوع الوحدة والمقاس",
            "رتبة المقاومة",
            "الكمية والتوريد على طبليات أو سائبًا",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["aggregates-sand", "precast-concrete-products"],
          image: null,
          review: pending("customer-stated size and class only"),
        },
        {
          id: "concrete-admixtures",
          linkedProductId: "concrete-admixtures",
          name_en: "Concrete Admixtures",
          name_ar: "إضافات الخرسانة",
          summary_en:
            "Liquid admixtures that adjust the workability, setting time or strength development of concrete.",
          summary_ar:
            "إضافات سائلة تعدّل قابلية التشغيل أو زمن الشك أو تطور مقاومة الخرسانة.",
          whatItIs_en:
            "Plasticizers, superplasticizers, retarders, accelerators and water-reducing admixtures, supplied to the type stated in the concrete specification.",
          whatItIs_ar:
            "ملدنات وملدنات فائقة ومؤخرات ومعجلات شك وإضافات خافضة للمياه، يتم توريدها وفق النوع المحدد في مواصفات الخرسانة.",
          usedFor_en:
            "Pumped concrete, hot-weather concreting, and early-strength or low-permeability concrete.",
          usedFor_ar:
            "الخرسانة المضخوخة والصب في الأجواء الحارة والخرسانة مبكرة المقاومة أو منخفضة النفاذية.",
          applications_en: [
            "Pumped and high-workability concrete",
            "Hot-weather concreting and long hauls",
            "Precast and early-strength concrete",
          ],
          applications_ar: [
            "الخرسانة المضخوخة وعالية التشغيل",
            "الصب في الأجواء الحارة والمسافات الطويلة",
            "الخرسانة مسبقة الصب ومبكرة المقاومة",
          ],
          industryIds: [
            "residential-commercial-buildings",
            "industrial-facilities",
            "roads-infrastructure",
          ],
          selectionFactors: [
            {
              factor_en: "Admixture type",
              factor_ar: "نوع الإضافة",
              detail_en:
                "Plasticizer, retarder, accelerator or water reducer, as specified.",
              detail_ar: "ملدن أو مؤخر أو معجل أو خافض للمياه، وفق المواصفات.",
            },
            {
              factor_en: "Concrete use",
              factor_ar: "استخدام الخرسانة",
              detail_en: "The concrete element and placing conditions.",
              detail_ar: "العنصر الخرساني وظروف الصب.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "طريقة التعبئة",
              detail_en: "Drums or bulk containers, as required.",
              detail_ar: "براميل أو حاويات سائبة، حسب الطلب.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Admixture type",
            "Concrete grade and use",
            "Quantity and packaging",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "نوع الإضافة",
            "رتبة الخرسانة واستخدامها",
            "الكمية وطريقة التعبئة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["portland-cement", "precast-concrete-products"],
          image: null,
          review: pending("type named by the customer's specification only"),
        },
        {
          id: "precast-concrete-products",
          linkedProductId: "precast-concrete-products",
          name_en: "Precast Concrete Products",
          name_ar: "منتجات الخرسانة مسبقة الصب",
          summary_en:
            "Precast kerbs, channels, paving units, slabs and structural units.",
          summary_ar:
            "بردورات وقنوات ووحدات رصف وبلاطات ووحدات إنشائية مسبقة الصب.",
          whatItIs_en:
            "Concrete elements produced off site — kerbs, channels, paving units, slabs and other units — supplied to the dimensions and load requirements in the specification.",
          whatItIs_ar:
            "عناصر خرسانية تُنتج خارج الموقع — بردورات وقنوات ووحدات رصف وبلاطات ووحدات أخرى — يتم توريدها وفق الأبعاد ومتطلبات التحميل المحددة في المواصفات.",
          usedFor_en:
            "Roads, paving and external works, and building elements.",
          usedFor_ar: "الطرق والرصف والأعمال الخارجية وعناصر المباني.",
          applications_en: [
            "Kerbs, channels and paving",
            "Precast slabs and structural units",
            "Boundary and retaining wall panels",
          ],
          applications_ar: [
            "البردورات والقنوات والرصف",
            "البلاطات والوحدات الإنشائية مسبقة الصب",
            "ألواح الأسوار والحوائط الساندة",
          ],
          industryIds: [
            "residential-commercial-buildings",
            "industrial-facilities",
            "roads-infrastructure",
          ],
          selectionFactors: [
            {
              factor_en: "Element type",
              factor_ar: "نوع العنصر",
              detail_en: "Kerbs, paving units, slabs or other units.",
              detail_ar: "بردورات أو وحدات رصف أو بلاطات أو وحدات أخرى.",
            },
            {
              factor_en: "Dimensions",
              factor_ar: "الأبعاد",
              detail_en: "Sizes and profiles from the drawings or BOQ.",
              detail_ar:
                "المقاسات والقطاعات الواردة في اللوحات أو جدول الكميات.",
            },
            {
              factor_en: "Load requirement",
              factor_ar: "متطلبات التحميل",
              detail_en: "The load requirement stated in the specification.",
              detail_ar: "متطلبات التحميل المحددة في المواصفات.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Element type and dimensions",
            "Load requirement as specified",
            "Quantity and delivery sequence",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "نوع العنصر وأبعاده",
            "متطلبات التحميل وفق المواصفات",
            "الكمية وتسلسل التوريد",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "concrete-blocks-bricks",
            "road-paving-materials",
          ],
          image: null,
          review: pending("no production-quality claims"),
        },
      ],
    },
    {
      categoryId: "structural-waterproofing-materials",
      title_en: "Steel, Waterproofing & Insulation",
      title_ar: "الحديد والعزل المائي والحراري",
      intro_en:
        "Reinforcement and structural steel, waterproofing membranes, insulation boards, sealants and expansion joints, quoted against your specification.",
      intro_ar:
        "حديد التسليح والقطاعات الإنشائية وأغشية العزل المائي وألواح العزل الحراري ومواد السيلانت وفواصل التمدد، ويتم إعداد عروض أسعارها وفق مواصفاتكم.",
      icon: "Building2",
      equipment: [
        {
          id: "reinforcement-steel-rebar",
          linkedProductId: "reinforcement-steel-rebar",
          name_en: "Reinforcement Steel (Rebar)",
          name_ar: "حديد التسليح",
          summary_en:
            "Deformed reinforcement bars for reinforced concrete works.",
          summary_ar: "أسياخ تسليح مشرشرة لأعمال الخرسانة المسلحة.",
          whatItIs_en:
            "Deformed steel reinforcement bars, supplied in the grades, diameters and lengths stated in the structural drawings and BOQ.",
          whatItIs_ar:
            "أسياخ حديد تسليح مشرشرة، يتم توريدها بالرتب والأقطار والأطوال المحددة في اللوحات الإنشائية وجدول الكميات.",
          usedFor_en:
            "Reinforced concrete foundations, columns, beams, slabs and walls.",
          usedFor_ar: "أساسات وأعمدة وكمرات وبلاطات وحوائط الخرسانة المسلحة.",
          applications_en: [
            "Foundations, columns and slabs",
            "Retaining walls and basements",
            "Bridge and infrastructure concrete",
          ],
          applications_ar: [
            "الأساسات والأعمدة والبلاطات",
            "الحوائط الساندة والبدرومات",
            "خرسانة الكباري والبنية التحتية",
          ],
          industryIds: [
            "residential-commercial-buildings",
            "public-institutional-buildings",
            "industrial-facilities",
            "roads-infrastructure",
          ],
          selectionFactors: [
            {
              factor_en: "Steel grade",
              factor_ar: "رتبة الحديد",
              detail_en: "The grade stated in the structural specification.",
              detail_ar: "الرتبة المحددة في المواصفات الإنشائية.",
            },
            {
              factor_en: "Diameters",
              factor_ar: "الأقطار",
              detail_en:
                "Bar diameters and quantities from the BOQ or bar schedule.",
              detail_ar:
                "أقطار الأسياخ وكمياتها من جدول الكميات أو جدول التسليح.",
            },
            {
              factor_en: "Lengths",
              factor_ar: "الأطوال",
              detail_en:
                "Standard mill lengths or the lengths stated by the customer.",
              detail_ar:
                "الأطوال القياسية للمصنع أو الأطوال التي يحددها العميل.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Steel grade",
            "Diameters and tonnage per diameter",
            "Delivery phasing",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "رتبة الحديد",
            "الأقطار والوزن لكل قطر",
            "مراحل التوريد",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["structural-steel-sections", "portland-cement"],
          image: null,
          review: pending("no fabrication or cut-and-bend service"),
        },
        {
          id: "structural-steel-sections",
          linkedProductId: "structural-steel-sections",
          name_en: "Structural Steel Sections",
          name_ar: "القطاعات الإنشائية",
          summary_en: "Beams, columns, channels and angles for steel framing.",
          summary_ar: "كمرات وأعمدة ومجاري وزوايا للهياكل المعدنية.",
          whatItIs_en:
            "Hot-rolled steel sections — beams, columns, channels and angles — supplied to the section sizes, grade and surface finish in the specification.",
          whatItIs_ar:
            "قطاعات حديد مدرفلة على الساخن — كمرات وأعمدة ومجاري وزوايا — يتم توريدها وفق مقاسات القطاعات والرتبة والتشطيب السطحي المحددة في المواصفات.",
          usedFor_en:
            "Steel frames, platforms, mezzanines and support structures.",
          usedFor_ar: "الهياكل المعدنية والمنصات والميزانين والهياكل الحاملة.",
          applications_en: [
            "Building and warehouse frames",
            "Platforms and mezzanines",
            "Support and secondary structures",
          ],
          applications_ar: [
            "هياكل المباني والمخازن",
            "المنصات والميزانين",
            "الهياكل الحاملة والثانوية",
          ],
          industryIds: [
            "industrial-facilities",
            "residential-commercial-buildings",
            "roads-infrastructure",
          ],
          selectionFactors: [
            {
              factor_en: "Section type and size",
              factor_ar: "نوع القطاع ومقاسه",
              detail_en: "As listed in the drawings or BOQ.",
              detail_ar: "وفق اللوحات أو جدول الكميات.",
            },
            {
              factor_en: "Steel grade",
              factor_ar: "رتبة الحديد",
              detail_en: "The grade stated in the specification.",
              detail_ar: "الرتبة المحددة في المواصفات.",
            },
            {
              factor_en: "Surface finish",
              factor_ar: "التشطيب السطحي",
              detail_en: "Mill finish, galvanized or primed, as specified.",
              detail_ar:
                "بدون معالجة أو مجلفن أو مدهون بطبقة أساس، وفق المواصفات.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Section types and sizes",
            "Steel grade and surface finish",
            "Lengths and tonnage",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "أنواع القطاعات ومقاساتها",
            "رتبة الحديد والتشطيب السطحي",
            "الأطوال والوزن",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "reinforcement-steel-rebar",
            "sealants-expansion-joints",
          ],
          image: null,
          review: pending("sections only — no fabrication or building systems"),
        },
        {
          id: "waterproofing-membranes",
          linkedProductId: "waterproofing-membranes",
          name_en: "Waterproofing Membranes",
          name_ar: "أغشية العزل المائي",
          summary_en:
            "Sheet and liquid-applied waterproofing for roofs, foundations and wet areas.",
          summary_ar:
            "عزل مائي على هيئة رولات أو سوائل للأسطح والأساسات والمناطق الرطبة.",
          whatItIs_en:
            "Bituminous, PVC, TPO and liquid-applied waterproofing systems, supplied to the system type and application method stated in the specification.",
          whatItIs_ar:
            "أنظمة عزل مائي بيتومينية وPVC وTPO وسائلة، يتم توريدها وفق نوع النظام وطريقة التطبيق المحددين في المواصفات.",
          usedFor_en:
            "Roofs, below-ground structures, wet areas, decks and water tanks.",
          usedFor_ar:
            "الأسطح والمنشآت تحت الأرض والمناطق الرطبة والبلاطات المكشوفة وخزانات المياه.",
          applications_en: [
            "Flat and low-slope roofs",
            "Foundations and basements",
            "Wet areas, decks and water tanks",
          ],
          applications_ar: [
            "الأسطح المستوية وقليلة الميل",
            "الأساسات والبدرومات",
            "المناطق الرطبة والبلاطات المكشوفة وخزانات المياه",
          ],
          industryIds: [
            "residential-commercial-buildings",
            "public-institutional-buildings",
            "industrial-facilities",
            "roads-infrastructure",
          ],
          selectionFactors: [
            {
              factor_en: "Membrane type",
              factor_ar: "نوع الغشاء",
              detail_en:
                "Bituminous, PVC, TPO or liquid-applied, as specified.",
              detail_ar: "بيتوميني أو PVC أو TPO أو سائل، وفق المواصفات.",
            },
            {
              factor_en: "Application method",
              factor_ar: "طريقة التطبيق",
              detail_en: "Torch-applied, self-adhesive or liquid-applied.",
              detail_ar: "باللهب أو ذاتي اللصق أو سائل.",
            },
            {
              factor_en: "Substrate and exposure",
              factor_ar: "السطح وظروف التعرض",
              detail_en: "As described in the specification.",
              detail_ar: "وفق الوصف الوارد في المواصفات.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Membrane type and application method",
            "Area to be covered",
            "Accessories listed in the specification",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "نوع الغشاء وطريقة التطبيق",
            "المساحة المطلوب تغطيتها",
            "الملحقات الواردة في المواصفات",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "thermal-insulation-boards",
            "sealants-expansion-joints",
          ],
          image: null,
          review: pending("system type named by the customer only"),
        },
        {
          id: "thermal-insulation-boards",
          linkedProductId: "thermal-insulation-boards",
          name_en: "Thermal Insulation Boards",
          name_ar: "ألواح العزل الحراري",
          summary_en:
            "Insulation boards for walls, roofs and building envelopes.",
          summary_ar: "ألواح عزل للحوائط والأسطح والغلاف الخارجي للمباني.",
          whatItIs_en:
            "EPS, XPS, PIR and mineral wool insulation boards, supplied to the material, thickness and facing stated in the specification.",
          whatItIs_ar:
            "ألواح عزل من EPS وXPS وPIR والصوف المعدني، يتم توريدها وفق المادة والسمك والكسوة المحددة في المواصفات.",
          usedFor_en: "Walls, roofs, cold rooms and building envelopes.",
          usedFor_ar: "الحوائط والأسطح وغرف التبريد والغلاف الخارجي للمباني.",
          applications_en: [
            "Roof insulation under waterproofing",
            "External and cavity walls",
            "Cold rooms and refrigerated spaces",
          ],
          applications_ar: [
            "عزل الأسطح أسفل العزل المائي",
            "الحوائط الخارجية والمزدوجة",
            "غرف التبريد والمساحات المبردة",
          ],
          industryIds: [
            "residential-commercial-buildings",
            "public-institutional-buildings",
            "industrial-facilities",
          ],
          selectionFactors: [
            {
              factor_en: "Insulation material",
              factor_ar: "مادة العزل",
              detail_en: "EPS, XPS, PIR or mineral wool, as specified.",
              detail_ar: "EPS أو XPS أو PIR أو صوف معدني، وفق المواصفات.",
            },
            {
              factor_en: "Thickness and density",
              factor_ar: "السمك والكثافة",
              detail_en: "As stated in the specification.",
              detail_ar: "وفق المواصفات.",
            },
            {
              factor_en: "Fire classification",
              factor_ar: "تصنيف الحريق",
              detail_en: "The classification required by the specification.",
              detail_ar: "التصنيف الذي تشترطه المواصفات.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Insulation material and thickness",
            "Facing and board size",
            "Area or quantity",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "مادة العزل والسمك",
            "الكسوة ومقاس اللوح",
            "المساحة أو الكمية",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["waterproofing-membranes"],
          image: null,
          review: pending("fire classification as customer requirement only"),
        },
        {
          id: "sealants-expansion-joints",
          linkedProductId: "construction-sealants",
          name_en: "Sealants & Expansion Joints",
          name_ar: "مواد السيلانت وفواصل التمدد",
          summary_en:
            "Joint sealants and expansion joint profiles for movement and weather joints.",
          summary_ar:
            "مواد سيلانت وقطاعات فواصل تمدد لفواصل الحركة والفواصل الخارجية.",
          whatItIs_en:
            "Polyurethane, silicone and polysulfide sealants and expansion joint profiles, supplied to the joint type and movement requirement stated in the specification.",
          whatItIs_ar:
            "مواد سيلانت من البولي يوريثان والسيليكون والبولي سلفايد وقطاعات فواصل التمدد، يتم توريدها وفق نوع الفاصل ومتطلبات الحركة المحددة في المواصفات.",
          usedFor_en:
            "Movement joints in concrete, façade joints, wet areas and pavements.",
          usedFor_ar:
            "فواصل الحركة في الخرسانة وفواصل الواجهات والمناطق الرطبة والأرصفة.",
          applications_en: [
            "Movement joints in concrete structures",
            "Façade and cladding joints",
            "Wet-area and pavement joints",
          ],
          applications_ar: [
            "فواصل الحركة في المنشآت الخرسانية",
            "فواصل الواجهات والتكسيات",
            "فواصل المناطق الرطبة والأرصفة",
          ],
          industryIds: [
            "residential-commercial-buildings",
            "public-institutional-buildings",
            "roads-infrastructure",
          ],
          selectionFactors: [
            {
              factor_en: "Sealant or profile type",
              factor_ar: "نوع السيلانت أو القطاع",
              detail_en: "As stated in the specification.",
              detail_ar: "وفق المواصفات.",
            },
            {
              factor_en: "Joint width and movement",
              factor_ar: "عرض الفاصل والحركة",
              detail_en: "From the joint schedule or drawings.",
              detail_ar: "من جدول الفواصل أو اللوحات.",
            },
            {
              factor_en: "Exposure",
              factor_ar: "ظروف التعرض",
              detail_en: "Internal, external, wet or trafficked.",
              detail_ar: "داخلي أو خارجي أو رطب أو معرض للمرور.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Sealant or joint profile type",
            "Joint widths and lengths",
            "Colour where specified",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "نوع السيلانت أو قطاع الفاصل",
            "عروض الفواصل وأطوالها",
            "اللون عند تحديده",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "waterproofing-membranes",
            "structural-steel-sections",
          ],
          image: null,
          review: pending("movement requirement from the customer's documents"),
        },
      ],
    },
    {
      categoryId: "site-infrastructure-materials",
      title_en: "Pipes, Drainage & Road Materials",
      title_ar: "المواسير والصرف ومواد الطرق",
      intro_en:
        "Sanitary ware, pipes, plumbing fittings, drainage products and road and paving materials, quoted against your specification and network requirements.",
      intro_ar:
        "الأدوات الصحية والمواسير ووصلات السباكة ومنتجات الصرف ومواد الطرق والرصف، ويتم إعداد عروض أسعارها وفق مواصفاتكم ومتطلبات الشبكات.",
      icon: "Droplets",
      equipment: [
        {
          id: "sanitary-ware-fittings",
          linkedProductId: "sanitary-ware-fittings",
          name_en: "Sanitary Ware & Fittings",
          name_ar: "الأدوات الصحية وملحقاتها",
          summary_en:
            "WCs, wash basins, urinals and bathroom fittings for building projects.",
          summary_ar:
            "مراحيض وأحواض ومباول وخلاطات وملحقات الحمامات لمشروعات المباني.",
          whatItIs_en:
            "Vitreous china sanitary ware and bathroom fittings and faucets, supplied to the types, finishes and quantities in the schedule.",
          whatItIs_ar:
            "أدوات صحية من الصيني والخزف وخلاطات وملحقات الحمامات، يتم توريدها وفق الأنواع والتشطيبات والكميات الواردة في الجدول.",
          usedFor_en:
            "Residential, commercial, hospitality and institutional washrooms.",
          usedFor_ar:
            "الحمامات في المباني السكنية والتجارية والفندقية والمؤسسية.",
          applications_en: [
            "Residential bathrooms",
            "Commercial and public washrooms",
            "Hotel and institutional washrooms",
          ],
          applications_ar: [
            "الحمامات السكنية",
            "دورات المياه التجارية والعامة",
            "حمامات الفنادق والمباني المؤسسية",
          ],
          industryIds: [
            "residential-commercial-buildings",
            "public-institutional-buildings",
          ],
          selectionFactors: [
            {
              factor_en: "Item type",
              factor_ar: "نوع الصنف",
              detail_en: "WC, basin, urinal, faucet or fitting.",
              detail_ar: "مرحاض أو حوض أو مبولة أو خلاط أو ملحق.",
            },
            {
              factor_en: "Finish and colour",
              factor_ar: "التشطيب واللون",
              detail_en: "As stated in the schedule.",
              detail_ar: "وفق الجدول.",
            },
            {
              factor_en: "Water-saving requirement",
              factor_ar: "متطلبات ترشيد المياه",
              detail_en: "Where stated in the specification.",
              detail_ar: "عند ذكرها في المواصفات.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Item types and finishes",
            "Quantity per room type",
            "Existing items to match, if any",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "أنواع الأصناف والتشطيبات",
            "الكمية لكل نوع من الغرف",
            "الأصناف القائمة المطلوب مطابقتها إن وجدت",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["plumbing-fittings"],
          image: null,
          review: pending("types and finishes from the customer's schedule"),
        },
        {
          id: "pipes-upvc-hdpe-grp",
          linkedProductId: "piping-systems-pvc-hdpe",
          name_en: "Pipes (uPVC, HDPE, GRP)",
          name_ar: "المواسير (uPVC وHDPE وGRP)",
          summary_en:
            "uPVC, HDPE and GRP pipes for water supply, drainage and utility networks.",
          summary_ar: "مواسير uPVC وHDPE وGRP لشبكات المياه والصرف والمرافق.",
          whatItIs_en:
            "Pressure and non-pressure pipes in uPVC, HDPE and GRP, supplied to the material, diameter and pressure class stated in the specification.",
          whatItIs_ar:
            "مواسير ضغط وصرف من uPVC وHDPE وGRP، يتم توريدها وفق المادة والقطر وفئة الضغط المحددة في المواصفات.",
          usedFor_en:
            "Water supply, sewerage, drainage, irrigation and cable ducting.",
          usedFor_ar:
            "شبكات المياه والصرف الصحي وتصريف الأمطار والري ومجاري الكابلات.",
          applications_en: [
            "Water supply networks",
            "Sewerage and stormwater drainage",
            "Irrigation lines and cable ducts",
          ],
          applications_ar: [
            "شبكات مياه الشرب",
            "الصرف الصحي وتصريف الأمطار",
            "خطوط الري ومجاري الكابلات",
          ],
          industryIds: [
            "water-drainage-networks",
            "roads-infrastructure",
            "residential-commercial-buildings",
          ],
          selectionFactors: [
            {
              factor_en: "Pipe material",
              factor_ar: "مادة الماسورة",
              detail_en: "uPVC, HDPE or GRP.",
              detail_ar: "uPVC أو HDPE أو GRP.",
            },
            {
              factor_en: "Diameter and pressure class",
              factor_ar: "القطر وفئة الضغط",
              detail_en: "As stated in the specification.",
              detail_ar: "وفق المواصفات.",
            },
            {
              factor_en: "Jointing",
              factor_ar: "طريقة الوصل",
              detail_en: "The jointing method specified for the network.",
              detail_ar: "طريقة الوصل المحددة للشبكة.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Pipe material, diameter and pressure class",
            "Lengths per diameter",
            "Jointing method and fittings list",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "مادة الماسورة والقطر وفئة الضغط",
            "الأطوال لكل قطر",
            "طريقة الوصل وقائمة الوصلات",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "plumbing-fittings",
            "manhole-covers-gratings-drainage",
          ],
          image: null,
          review: pending("material and class named by the customer only"),
        },
        {
          id: "plumbing-fittings",
          linkedProductId: "plumbing-fittings-valves",
          name_en: "Plumbing Fittings",
          name_ar: "وصلات وتجهيزات السباكة",
          summary_en:
            "Fittings and connectors for water supply and drainage pipework.",
          summary_ar: "وصلات وقطع توصيل لخطوط المياه والصرف.",
          whatItIs_en:
            "Elbows, tees, couplings, unions, adapters and isolation valves in PVC, PPR, brass or galvanized steel, supplied to the pipe material and connection type.",
          whatItIs_ar:
            "أكواع وتيهات وجلب ورباطات ومحولات ومحابس عزل من PVC وPPR والنحاس الأصفر والحديد المجلفن، يتم توريدها وفق مادة المواسير ونوع الوصل.",
          usedFor_en: "Water supply and drainage pipework in buildings.",
          usedFor_ar: "خطوط المياه والصرف داخل المباني.",
          applications_en: [
            "Water supply pipework",
            "Drainage and waste pipework",
            "Connections to existing lines",
          ],
          applications_ar: [
            "خطوط تغذية المياه",
            "خطوط الصرف",
            "التوصيل بالخطوط القائمة",
          ],
          industryIds: [
            "residential-commercial-buildings",
            "public-institutional-buildings",
            "water-drainage-networks",
          ],
          selectionFactors: [
            {
              factor_en: "Material",
              factor_ar: "المادة",
              detail_en: "Matched to the pipe material.",
              detail_ar: "مطابقة لمادة المواسير.",
            },
            {
              factor_en: "Connection type",
              factor_ar: "نوع الوصل",
              detail_en: "Threaded, solvent-weld, push-fit or compression.",
              detail_ar: "قلاووظ أو لحام بالمذيب أو وصل بالدفع أو وصل بالضغط.",
            },
            {
              factor_en: "Pressure rating",
              factor_ar: "تصنيف الضغط",
              detail_en: "As stated in the specification.",
              detail_ar: "وفق المواصفات.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Fitting types and sizes",
            "Material and connection type",
            "Quantity per type",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "أنواع الوصلات ومقاساتها",
            "المادة ونوع الوصل",
            "الكمية لكل نوع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "pipes-upvc-hdpe-grp",
            "sanitary-ware-fittings",
          ],
          image: null,
          review: pending("connection type from the customer's documents"),
        },
        {
          id: "manhole-covers-gratings-drainage",
          linkedProductId: "manhole-covers-drainage",
          name_en: "Manhole Covers, Gratings & Drainage",
          name_ar: "أغطية غرف التفتيش والجريلات وتصريف المياه",
          summary_en:
            "Manhole covers, gully gratings and channel drains for roads and sites.",
          summary_ar:
            "أغطية غرف التفتيش وجريلات المطابق وقنوات التصريف للطرق والمواقع.",
          whatItIs_en:
            "Covers, frames, gratings and channel drains in ductile iron, cast iron, concrete or composite, supplied to the load class and opening size stated in the specification.",
          whatItIs_ar:
            "أغطية وإطارات وجريلات وقنوات تصريف من الحديد المرن أو الزهر أو الخرسانة أو المواد المركبة، يتم توريدها وفق فئة التحميل ومقاس الفتحة المحددين في المواصفات.",
          usedFor_en: "Roads, car parks, walkways and utility chambers.",
          usedFor_ar: "الطرق ومواقف السيارات وممرات المشاة وغرف المرافق.",
          applications_en: [
            "Roads and car parks",
            "Pedestrian areas and plazas",
            "Utility and drainage chambers",
          ],
          applications_ar: [
            "الطرق ومواقف السيارات",
            "مناطق المشاة والساحات",
            "غرف المرافق والصرف",
          ],
          industryIds: [
            "roads-infrastructure",
            "water-drainage-networks",
            "industrial-facilities",
          ],
          selectionFactors: [
            {
              factor_en: "Load class",
              factor_ar: "فئة التحميل",
              detail_en: "The load class stated in the specification.",
              detail_ar: "فئة التحميل المحددة في المواصفات.",
            },
            {
              factor_en: "Material",
              factor_ar: "المادة",
              detail_en: "Ductile iron, cast iron, concrete or composite.",
              detail_ar: "حديد مرن أو زهر أو خرسانة أو مواد مركبة.",
            },
            {
              factor_en: "Clear opening",
              factor_ar: "مقاس الفتحة",
              detail_en: "The chamber or opening size from the drawings.",
              detail_ar: "مقاس الغرفة أو الفتحة من اللوحات.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Load class",
            "Opening size and frame type",
            "Quantity per location",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "فئة التحميل",
            "مقاس الفتحة ونوع الإطار",
            "الكمية لكل موقع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["pipes-upvc-hdpe-grp", "road-paving-materials"],
          image: null,
          review: pending("load class named by the customer only"),
        },
        {
          id: "road-paving-materials",
          linkedProductId: "road-construction-materials",
          name_en: "Road & Paving Materials",
          name_ar: "مواد الطرق والرصف",
          summary_en:
            "Bitumen, geotextiles and geomembranes for road, paving and lining works.",
          summary_ar:
            "البيتومين والجيوتكستايل والجيوممبرين لأعمال الطرق والرصف والتبطين.",
          whatItIs_en:
            "Paving-grade bitumen, woven and non-woven geotextiles, and geomembranes, supplied to the grade and type stated in the specification.",
          whatItIs_ar:
            "بيتومين للرصف وجيوتكستايل منسوج وغير منسوج وجيوممبرين، يتم توريدها وفق الرتبة والنوع المحددين في المواصفات.",
          usedFor_en:
            "Road works, soil separation and stabilization, and pond and landfill lining.",
          usedFor_ar: "أعمال الطرق وفصل التربة وتثبيتها وتبطين البرك والمدافن.",
          applications_en: [
            "Road and paving works",
            "Soil separation and stabilization",
            "Pond, tank and landfill lining",
          ],
          applications_ar: [
            "أعمال الطرق والرصف",
            "فصل التربة وتثبيتها",
            "تبطين البرك والخزانات والمدافن",
          ],
          industryIds: ["roads-infrastructure", "water-drainage-networks"],
          selectionFactors: [
            {
              factor_en: "Material",
              factor_ar: "المادة",
              detail_en: "Bitumen, geotextile or geomembrane.",
              detail_ar: "بيتومين أو جيوتكستايل أو جيوممبرين.",
            },
            {
              factor_en: "Grade or type",
              factor_ar: "الرتبة أو النوع",
              detail_en: "As stated in the specification.",
              detail_ar: "وفق المواصفات.",
            },
            {
              factor_en: "Quantity basis",
              factor_ar: "أساس الكمية",
              detail_en: "Tonnage, area or rolls, as listed in the BOQ.",
              detail_ar: "بالوزن أو المساحة أو عدد الرولات، وفق جدول الكميات.",
            },
          ],
          requestChecklist_en: [
            BOQ_ITEM_EN,
            "Material type and grade",
            "Quantity and unit",
            "Delivery form",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            BOQ_ITEM_AR,
            "نوع المادة ورتبتها",
            "الكمية ووحدة القياس",
            "طريقة التوريد",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "precast-concrete-products",
            "manhole-covers-gratings-drainage",
          ],
          image: null,
          review: pending("bitumen, geotextiles and geomembranes only"),
        },
      ],
    },
  ],

  replacement: {
    title_en: "Specified Items & Equivalents",
    title_ar: "الأصناف المحددة والبدائل المكافئة",
    intro_en:
      "Construction specifications often name a manufacturer or product, or permit an equivalent. GOLTENS quotes the specified item where it is required, and quotes an equivalent only where the specification allows it. For sanitary ware, manhole covers and gratings, and pipe or plumbing fittings that must match items already in place, start from the existing item.",
    intro_ar:
      "كثيرًا ما تحدد مواصفات الإنشاء مصنعًا أو منتجًا معينًا أو تسمح ببديل مكافئ. وتُعد GOLTENS عرض سعر الصنف المحدد عندما يكون مطلوبًا، ولا تُعد عرضًا لبديل مكافئ إلا إذا سمحت المواصفات بذلك. أما الأدوات الصحية وأغطية غرف التفتيش والجريلات ووصلات المواسير والسباكة المطلوب مطابقتها لأصناف قائمة، فابدأوا من الصنف الحالي.",
    flowTitle_en: "How a specified-item request works",
    flowTitle_ar: "كيف يتم التعامل مع طلب الأصناف المحددة",
    flow_en: [
      "Specification clause",
      "Specified item or requirement",
      "Whether equivalents are permitted",
      "Available item information",
      "Quantity",
      "Technical review",
      "Specified item or permitted equivalent",
      "Quotation",
    ],
    flow_ar: [
      "بند المواصفات",
      "الصنف أو المتطلب المحدد",
      "ما إذا كانت البدائل المكافئة مسموحة",
      "البيانات المتاحة عن الصنف",
      "الكمية",
      "المراجعة الفنية",
      "الصنف المحدد أو بديل مكافئ مسموح",
      "عرض السعر",
    ],
    groups: [
      {
        title_en: "All requests",
        title_ar: "لجميع الطلبات",
        items_en: [
          "Specification section or clause",
          "Specified manufacturer or product, if stated",
          "Whether equivalents are permitted",
          "Submittal or sample requirements",
          "Quantity and delivery site",
        ],
        items_ar: [
          "بند أو فقرة المواصفات",
          "المصنع أو المنتج المحدد إن وُجد",
          "ما إذا كانت البدائل المكافئة مسموحة",
          "متطلبات مستندات التقديم أو العينات",
          "الكمية وموقع التوريد",
        ],
      },
      {
        title_en: "Sanitary ware",
        title_ar: "الأدوات الصحية",
        items_en: [
          "Photos of the existing unit",
          "Type, colour and finish",
          "Mounting arrangement",
          "Quantity per location",
        ],
        items_ar: [
          "صور الوحدة الحالية",
          "النوع واللون والتشطيب",
          "طريقة التثبيت",
          "الكمية لكل موقع",
        ],
      },
      {
        title_en: "Manhole covers & gratings",
        title_ar: "أغطية غرف التفتيش والجريلات",
        items_en: [
          "Photos and dimensions of the existing cover or frame",
          "Load class stated in the specification",
          "Material",
          "Quantity",
        ],
        items_ar: [
          "صور وأبعاد الغطاء أو الإطار الحالي",
          "فئة التحميل المحددة في المواصفات",
          "المادة",
          "الكمية",
        ],
      },
      {
        title_en: "Pipe & plumbing fittings",
        title_ar: "وصلات المواسير والسباكة",
        items_en: [
          "Pipe material and size of the existing line",
          "Connection type",
          "Photos or labels of existing fittings",
          "Quantity",
        ],
        items_ar: [
          "مادة الخط الحالي ومقاسه",
          "نوع الوصل",
          "صور أو ملصقات الوصلات الحالية",
          "الكمية",
        ],
      },
    ],
    note_en: `GOLTENS reviews the available item information and quotes the specified item or, where the specification allows, an equivalent. ${EQUIVALENCE_EN}`,
    note_ar: `تراجع GOLTENS بيانات الصنف المتاحة وتُعد عرض سعر الصنف المحدد، أو بديل مكافئ إذا سمحت المواصفات بذلك. ${EQUIVALENCE_AR}`,
    ctaLabel_en: "Request a quotation for specified items",
    ctaLabel_ar: "اطلب عرض سعر للأصناف المحددة",
    prefill_en:
      "Specified items and equivalents — Construction & Infrastructure",
    prefill_ar: "أصناف محددة وبدائل مكافئة — مواد البناء والبنية التحتية",
  },

  request: {
    title_en: "What to Include in Your Quotation Request",
    title_ar: "ما الذي يجب إرساله مع طلب عرض السعر",
    intro_en:
      "Construction requests are driven by the customer's BOQ, material schedule and specification. Send what you have — missing details can be clarified during quotation.",
    intro_ar:
      "تعتمد طلبات مواد البناء على جدول الكميات وجدول المواد والمواصفات الخاصة بالعميل. أرسلوا ما يتوفر لديكم، ويمكن استكمال البيانات الناقصة أثناء إعداد عرض السعر.",
    checklistTitle_en: "Minimum information",
    checklistTitle_ar: "الحد الأدنى من البيانات",
    checklist_en: [
      "Company or contractor name",
      "Project name and location",
      "BOQ or material schedule",
      "Specification section or drawing reference",
      "Item description with grade/class as specified",
      "Quantity and unit",
      "Packaging or delivery form where relevant",
      "Delivery site and offloading constraints",
      "Required dates or phasing",
      "Quotation deadline",
      "Contact details",
    ],
    checklist_ar: [
      "اسم الشركة أو المقاول",
      "اسم المشروع وموقعه",
      "جدول الكميات أو جدول المواد",
      "بند المواصفات أو مرجع اللوحات",
      "وصف الصنف بالرتبة أو الفئة المحددة",
      "الكمية ووحدة القياس",
      "طريقة التعبئة أو التوريد عند الحاجة",
      "موقع التوريد وقيود التفريغ",
      "التواريخ المطلوبة أو مراحل التوريد",
      "الموعد النهائي لتقديم عرض السعر",
      "بيانات التواصل",
    ],
    secondaryChecklist: {
      title_en: "Useful information",
      title_ar: "بيانات مفيدة",
      items_en: [
        "Specified manufacturer or approved-equal requirement, only if stated by customer",
        "Whether equivalents are allowed",
        "Documents required with quotation or delivery",
        "Sample/submittal requirements",
        "Photos/labels when matching existing items",
      ],
      items_ar: [
        "المصنع المحدد أو اشتراط البديل المعتمد المكافئ، فقط إذا نص عليه العميل",
        "ما إذا كانت البدائل المكافئة مسموحة",
        "المستندات المطلوبة مع عرض السعر أو التوريد",
        "متطلبات العينات أو مستندات التقديم",
        "صور أو ملصقات الأصناف القائمة عند المطابقة",
      ],
    },
    checklistNote_en: DISCLAIMER_EN,
    checklistNote_ar: DISCLAIMER_AR,
    processTitle_en: "How GOLTENS handles the request",
    processTitle_ar: "كيف تتعامل GOLTENS مع الطلب",
    steps: [
      {
        title_en: "BOQ / Material Schedule",
        title_ar: "جدول الكميات أو جدول المواد",
        description_en:
          "Send the BOQ or material schedule with specification references through the quotation form on this page.",
        description_ar:
          "أرسلوا جدول الكميات أو جدول المواد مع مراجع المواصفات من خلال نموذج طلب عرض السعر في هذه الصفحة.",
      },
      {
        title_en: "Specification Review",
        title_ar: "مراجعة المواصفات",
        description_en:
          "Our team reviews the items, grades and quantities you send and asks for anything needed to identify each material.",
        description_ar:
          "يراجع فريقنا الأصناف والرتب والكميات المرسلة ويطلب أي بيانات لازمة لتحديد كل مادة.",
      },
      {
        title_en: "Sourcing to the Stated Requirement",
        title_ar: "التوريد وفق المتطلبات المحددة",
        description_en:
          "Materials are sourced to match the stated requirement — or, where the specification allows, a permitted equivalent.",
        description_ar:
          "يتم توفير المواد المطابقة للمتطلبات المحددة، أو بديل مكافئ مسموح إذا سمحت المواصفات بذلك.",
      },
      {
        title_en: "Quotation",
        title_ar: "عرض السعر",
        description_en:
          "You receive a quotation stating the offered items, availability and lead time. Final technical acceptance remains with the customer, consultant or engineer, as applicable.",
        description_ar:
          "تتسلمون عرض سعر يوضح الأصناف المقترحة وتوافرها ومدة التوريد، ويظل القبول الفني النهائي من مسؤولية العميل أو الاستشاري أو المهندس، بحسب الحالة.",
      },
    ],
  },

  quote: {
    title_en: "Request a Quotation",
    title_ar: "اطلب عرض سعر",
    subtitle_en:
      "Send your BOQ, material schedule or item list with the project name and specification references. Items are available on request and quoted against the stated requirements.",
    subtitle_ar:
      "أرسلوا جدول الكميات أو جدول المواد أو قائمة الأصناف مع اسم المشروع ومراجع المواصفات. الأصناف متاحة حسب الطلب ويتم إعداد عرض سعرها وفق المتطلبات المذكورة.",
  },
};

/** Compact-layout page extras for Construction (see `compact-guide-page.ts`). */
export const constructionPage: CompactGuidePage = {
  heroPrimaryCta_en: "Request a Quotation",
  heroPrimaryCta_ar: "اطلب عرض سعر",
  heroSecondaryCta: {
    label_en: "View Procurement Sectors",
    label_ar: "عرض قطاعات التوريد",
    href: "/sectors",
  },
  labels: {
    categoryNav_en: "Material families",
    categoryNav_ar: "مجموعات المواد",
    contextItems_en: "Typical materials",
    contextItems_ar: "المواد المعتادة",
    contextRoutes_en: "Covered by",
    contextRoutes_ar: "يغطيها قطاع",
    details_en: "Details and quotation information",
    details_ar: "التفاصيل وبيانات عرض السعر",
    replacementGroups_en: "Information to send",
    replacementGroups_ar: "البيانات المطلوبة",
  },
  projectRoutes: {
    "water-supply-drainage-networks": ["industrial-equipment"],
    "roads-paving-external-works": ["heavy-equipment"],
    "items-outside-families": [
      "electrical-energy",
      "fire-protection",
      "heavy-equipment",
      "industrial-chemicals",
      "global-sourcing",
    ],
  },
  routing: {
    title_en: "Requirements Covered by Other Sectors",
    title_ar: "متطلبات تغطيها قطاعات أخرى",
    intro_en:
      "Construction BOQs often include items outside these three families. These GOLTENS sectors cover them, and they can be included in the same request.",
    intro_ar:
      "تتضمن جداول كميات الإنشاء غالبًا أصنافًا خارج هذه المجموعات الثلاث، وتغطيها قطاعات GOLTENS التالية، ويمكن إدراجها ضمن الطلب نفسه.",
    routes: [
      {
        sectorSlug: "industrial-equipment",
        title_en: "Industrial Equipment & Pumps",
        title_ar: "المعدات الصناعية والمضخات",
        items_en: "Pumps and valves for water supply and drainage networks",
        items_ar: "المضخات والصمامات لشبكات المياه والصرف",
      },
      {
        sectorSlug: "electrical-energy",
        title_en: "Electrical & Energy Equipment",
        title_ar: "معدات الكهرباء والطاقة",
        items_en: "Cables, distribution boards, lighting and power equipment",
        items_ar: "الكابلات ولوحات التوزيع والإنارة ومعدات القوى",
      },
      {
        sectorSlug: "fire-protection",
        title_en: "Fire Protection Equipment",
        title_ar: "معدات مكافحة الحريق",
        items_en: "Fire pumps, fire alarm, sprinklers and fire equipment",
        items_ar: "مضخات الحريق وإنذار الحريق والرشاشات ومعدات مكافحة الحريق",
      },
      {
        sectorSlug: "heavy-equipment",
        title_en: "Heavy Equipment & Machinery",
        title_ar: "المعدات الثقيلة",
        items_en: "Earthmoving, lifting, concrete and compaction equipment",
        items_ar: "معدات الحفر والرفع والخرسانة والدمك",
      },
      {
        sectorSlug: "industrial-chemicals",
        title_en: "Industrial Chemicals",
        title_ar: "الكيماويات الصناعية",
        items_en: "Protective coatings and water treatment chemicals",
        items_ar: "الطلاءات الواقية وكيماويات معالجة المياه",
      },
      {
        sectorSlug: "global-sourcing",
        title_en: "Global Sourcing",
        title_ar: "التوريد الدولي",
        items_en:
          "Non-standard or hard-to-source items not covered on this page",
        items_ar:
          "الأصناف غير القياسية أو صعبة التوفير غير المشمولة بهذه الصفحة",
      },
    ],
  },
};
