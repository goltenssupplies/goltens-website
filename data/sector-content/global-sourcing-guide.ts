import type { CompactGuidePage } from "@/data/sector-content/compact-guide-page";
import type {
  EquipmentGuideReview,
  EquipmentTypeGuide,
  SectorEquipmentGuide,
  SectorFaq,
  SectorHeroCopy,
} from "@/data/sector-content/types";

/**
 * Global Sourcing & Hard-to-Source Procurement — a request-led sourcing
 * service guide (information-led request matrix, three sourcing families,
 * routing to the other GOLTENS sectors, a hard-to-source / existing-item /
 * equivalent request path and a two-part quotation checklist). Rendered in
 * the compact guide layout of `app/[locale]/sectors/[slug]/page.tsx` (see
 * `compact-guide-page.ts`).
 *
 * Content rules (enforced by `scripts/verify-equipment-guides.mjs`):
 * - The three families are sourcing families (`sourcingCategoryIds`), not
 *   product categories: no guide links a product record, shows an image or
 *   links a product or category page. The sector's internal records stay
 *   non-public and unlinked.
 * - The customer provides the item information (part or model number,
 *   nameplate, photo, drawing, sample, specification, BOQ or item list);
 *   GOLTENS reviews it, searches for the specified item or a permitted
 *   alternative and prepares a quotation. A manufacturer is only ever the
 *   customer's own reference.
 * - No OEM, authorised-distributor or agent claim, no authenticity, trust
 *   or supplier-network wording, no availability, stock, urgency or
 *   delivery promises, no manufacturing, design or engineering, no
 *   customs, logistics or tender-document services, no certification or
 *   compliance guarantees, and no vehicle or heavy-equipment parts.
 * - Final technical suitability, equivalence, specification approval and
 *   regulatory or compliance acceptance remain with the customer,
 *   consultant or responsible technical party.
 *
 * Every entry awaits technical review (`review.technical`) and
 * Egyptian-market Arabic terminology review (`review.arabic`).
 */

const pending = (notes: string): EquipmentGuideReview => ({
  technical: "needs-verification",
  arabic: "needs-verification",
  notes,
});

const CLOSING_EN = "Delivery location and required date";
const CLOSING_AR = "موقع التوريد والتاريخ المطلوب";
const DOCUMENTS_EN = "Documents required, if any";
const DOCUMENTS_AR = "المستندات المطلوبة إن وجدت";

const BOUNDARY_EN =
  "Final technical suitability, equivalence, specification approval and regulatory or compliance acceptance remain with the customer, consultant or responsible technical party, as applicable.";
const BOUNDARY_AR =
  "ويظل تأكيد الملاءمة الفنية والتكافؤ واعتماد المواصفات والقبول التنظيمي أو قبول المطابقة من مسؤولية العميل أو الاستشاري أو الجهة الفنية المسؤولة، بحسب الحالة.";
const ALTERNATIVES_EN =
  "GOLTENS reviews the item information you provide and searches for the specified item or, where you allow alternatives, a matching or technically suitable item for quotation. Identification from photos or nameplates depends on the information available. Availability of discontinued items is not guaranteed. Final equivalence, suitability and acceptance remain with the customer, consultant or responsible technical party, as applicable.";
const ALTERNATIVES_AR =
  "تراجع GOLTENS بيانات الصنف التي يقدمها العميل وتبحث عن الصنف المحدد أو، عند السماح بالبدائل، عن صنف مطابق أو مناسب فنيًا لإعداد عرض السعر. ويعتمد التعرف على الصنف من الصور أو لوحات البيانات على المعلومات المتاحة. ولا يُضمن توافر الأصناف المتوقفة. ويظل تأكيد التكافؤ والملاءمة والقبول النهائي من مسؤولية العميل أو الاستشاري أو الجهة الفنية المسؤولة، بحسب الحالة.";

/**
 * One sourcing request guide. Every guide in this file has the same
 * shape — three applications, three selection factors and a five-item
 * request checklist — and describes a request type, never a product.
 */
type GuideInput = Omit<EquipmentTypeGuide, "image" | "review"> & {
  note: string;
};
const guide = ({ note, ...input }: GuideInput): EquipmentTypeGuide => ({
  ...input,
  image: null,
  review: pending(note),
});

/** Sector-page hero copy (replaces the `data/sectors.ts` subtitle/description on this page only). */
export const globalSourcingHero: SectorHeroCopy = {
  subtitle_en:
    "Send a part number, model, nameplate, photo, drawing, specification or item list — GOLTENS reviews the information and sources the specified item or a permitted alternative for quotation.",
  subtitle_ar:
    "أرسلوا رقم القطعة أو الطراز أو بيانات لوحة الصنف أو صورة أو رسمًا أو مواصفات أو قائمة أصناف، وتراجع GOLTENS المعلومات وتبحث عن الصنف المحدد أو بديل مسموح به لإعداد عرض السعر.",
  description_en:
    "Spare parts and components, obsolete and non-standard items, specialty equipment, industrial materials and multi-item lists can be sourced locally or internationally according to the information provided. Availability, origin and lead time are confirmed during quotation.",
  description_ar:
    "يمكن توفير قطع الغيار والمكونات والأصناف المتوقفة وغير القياسية والمعدات المتخصصة والخامات الصناعية وقوائم الأصناف المتعددة محليًا أو دوليًا وفق المعلومات المقدمة. ويتم تأكيد التوافر وبلد المنشأ ومدة التوريد أثناء إعداد عرض السعر.",
};

export const globalSourcingFaqs: SectorFaq[] = [
  {
    question_en: "What information should I send?",
    answer_en:
      "Send the item name or description, the part or model number, the quantity and unit, the technical specification, the delivery location and required date, and your contact details. A nameplate photo, item photos, a datasheet, a drawing or a BOQ help where you have them. The checklist on this page lists the information that helps.",
    question_ar: "ما البيانات التي يجب إرسالها؟",
    answer_ar:
      "أرسلوا اسم الصنف أو وصفه، ورقم القطعة أو الطراز، والكمية ووحدة القياس، والمواصفات الفنية، وموقع التوريد والتاريخ المطلوب، وبيانات التواصل. ويفيد إرفاق صورة لوحة البيانات أو صور الصنف أو ورقة البيانات أو الرسم أو جدول الكميات إن توفرت لديكم. وتوضح القائمة في هذه الصفحة البيانات المفيدة.",
  },
  {
    question_en: "Can you source from only a part number, nameplate or photo?",
    answer_en:
      "Yes, a request can start from a part number, a nameplate or a photo. Identification depends on the information available, so the clearer the nameplate, markings and photos, the more reliably the item can be identified. Any missing detail is clarified during quotation.",
    question_ar:
      "هل يمكن التوريد بالاستناد إلى رقم القطعة أو لوحة البيانات أو صورة فقط؟",
    answer_ar:
      "نعم، يمكن أن يبدأ الطلب من رقم القطعة أو لوحة البيانات أو صورة. ويعتمد التعرف على الصنف على المعلومات المتاحة، فكلما كانت لوحة البيانات والعلامات والصور أوضح، أمكن تحديد الصنف بدقة أكبر. ويتم توضيح أي بيانات ناقصة أثناء إعداد عرض السعر.",
  },
  {
    question_en: "Can you source obsolete or discontinued items?",
    answer_en:
      "GOLTENS can search for an obsolete or discontinued item and, where you allow alternatives, for a matching or technically suitable item. Availability of discontinued items is not guaranteed and is confirmed during quotation.",
    question_ar: "هل يمكن توفير الأصناف المتوقفة عن الإنتاج؟",
    answer_ar:
      "يمكن لـGOLTENS البحث عن الصنف المتوقف، وعند السماح بالبدائل، عن صنف مطابق أو مناسب فنيًا. ولا يُضمن توافر الأصناف المتوقفة، ويتم تأكيده أثناء إعداد عرض السعر.",
  },
  {
    question_en: "Can equivalent or alternative items be supplied?",
    answer_en: `Only where you allow alternatives. Otherwise the quotation covers the specified item. ${ALTERNATIVES_EN}`,
    question_ar: "هل يمكن توفير أصناف مكافئة أو بديلة؟",
    answer_ar: `فقط إذا سمحتم بالبدائل، وفيما عدا ذلك يغطي عرض السعر الصنف المحدد. ${ALTERNATIVES_AR}`,
  },
  {
    question_en: "Is GOLTENS an authorised distributor or agent?",
    answer_en:
      "GOLTENS is not presented as an authorised distributor or agent of any manufacturer. It sources items against the information you provide, and the quotation states the offered item and its origin.",
    question_ar: "هل GOLTENS موزع أو وكيل معتمد؟",
    answer_ar:
      "لا تُقدَّم GOLTENS بوصفها موزعًا أو وكيلًا معتمدًا لأي جهة مصنّعة. وتوفر الأصناف وفق المعلومات التي تقدمونها، ويوضح عرض السعر الصنف المقترح وبلد منشئه.",
  },
  {
    question_en: "Can I include items from several sectors in one request?",
    answer_en:
      "Yes. Send one list with each item, its reference and quantity. Items covered by other GOLTENS sectors can be included in the same request; the routing section shows which sector covers them.",
    question_ar: "هل يمكن إدراج أصناف من عدة قطاعات في طلب واحد؟",
    answer_ar:
      "نعم، أرسلوا قائمة واحدة تتضمن كل صنف ومرجعه وكميته. ويمكن إدراج الأصناف التي تغطيها قطاعات GOLTENS الأخرى ضمن الطلب نفسه، ويوضح قسم التوجيه القطاع الذي يغطيها.",
  },
  {
    question_en: "What documents can be included with a quotation?",
    answer_en:
      "State the documents you need with the quotation or delivery, such as datasheets or origin documents. Their availability depends on the item and its source and is confirmed for each item during quotation.",
    question_ar: "ما المستندات التي يمكن إرفاقها مع عرض السعر؟",
    answer_ar:
      "اذكروا المستندات التي تحتاجونها مع عرض السعر أو التوريد، مثل أوراق البيانات أو مستندات بلد المنشأ. ويعتمد توافرها على الصنف ومصدره، ويتم تأكيده لكل صنف أثناء إعداد عرض السعر.",
  },
  {
    question_en: "How are availability, origin and lead time confirmed?",
    answer_en:
      "Availability, origin and lead time are confirmed for each item during quotation, rather than given as a single fixed figure.",
    question_ar: "كيف يتم تأكيد التوافر وبلد المنشأ ومدة التوريد؟",
    answer_ar:
      "يتم تأكيد التوافر وبلد المنشأ ومدة التوريد لكل صنف أثناء إعداد عرض السعر، بدلًا من تحديد مدة ثابتة موحدة.",
  },
];

const PLANTS = ["industrial-facilities", "operations-teams"];
const PROJECTS = ["project-procurement", "commercial-public-facilities"];

export const globalSourcingGuide: SectorEquipmentGuide = {
  heroVisual: "neutral",
  availability_en: "Available on request.",
  availability_ar: "متاح حسب الطلب.",

  intro: {
    eyebrow_en: "Sourcing request guide",
    eyebrow_ar: "دليل طلبات التوريد",
    lead_en:
      "Send the information you have — a part number, model number, nameplate, photo, drawing, specification, BOQ or item list. GOLTENS reviews it, searches for the specified item or a permitted alternative, and prepares a quotation according to the information provided.",
    lead_ar:
      "أرسلوا المعلومات المتوفرة لديكم، سواء رقم القطعة أو رقم الطراز أو بيانات لوحة الصنف أو صورة أو رسمًا أو مواصفات أو جدول كميات أو قائمة أصناف. وتراجع GOLTENS هذه المعلومات وتبحث عن الصنف المحدد أو بديل مسموح به، وتُعد عرض السعر وفق المعلومات المقدمة.",
    note_en:
      "These guides describe common sourcing requests and the information needed to quote them — they are not a catalogue of specific products. The customer provides the item information and states whether alternatives are acceptable.",
    note_ar:
      "توضح هذه الأدلة طلبات التوريد الشائعة والبيانات اللازمة لإعداد عروض أسعارها، وليست كتالوجًا لمنتجات محددة. ويقدم العميل بيانات الصنف ويحدد ما إذا كانت البدائل مقبولة.",
  },

  projectsTitle_en: "Start From the Information You Have",
  projectsTitle_ar: "ابدأ من المعلومات المتوفرة لديك",
  projectsIntro_en:
    "Pick the information you already have. Each row shows the matching sourcing request and, where relevant, the GOLTENS sector that covers the item.",
  projectsIntro_ar:
    "اختر المعلومات المتوفرة لديك، ويوضح كل صف طلب التوريد المناسب، والقطاع الذي يغطي الصنف لدى GOLTENS عند الحاجة.",

  industries: [
    {
      id: "industrial-facilities",
      label_en: "Industrial facilities",
      label_ar: "المنشآت الصناعية",
    },
    {
      id: "operations-teams",
      label_en: "Plant and operations teams",
      label_ar: "فرق التشغيل بالمصانع والمنشآت",
    },
    {
      id: "project-procurement",
      label_en: "Project procurement",
      label_ar: "مشتريات المشروعات",
    },
    {
      id: "commercial-public-facilities",
      label_en: "Commercial and public facilities",
      label_ar: "المنشآت التجارية والعامة",
    },
    {
      id: "manufacturing-production",
      label_en: "Manufacturing and production",
      label_ar: "التصنيع والإنتاج",
    },
  ],

  projects: [
    {
      id: "part-number-model-reference",
      title_en: "Part Number or Model Reference",
      title_ar: "رقم القطعة أو مرجع الطراز",
      description_en:
        "You have the part number, model number or the manufacturer reference you specify.",
      description_ar:
        "يتوفر لديكم رقم القطعة أو رقم الطراز أو مرجع الجهة المصنّعة الذي تحددونه.",
      equipmentIds: [
        "part-model-number-requests",
        "installed-equipment-spare-parts",
      ],
      review: pending("request-type context only"),
    },
    {
      id: "nameplate-information",
      title_en: "Nameplate Information",
      title_ar: "بيانات لوحة الصنف",
      description_en:
        "You can read or photograph the nameplate or label on the item.",
      description_ar: "يمكنكم قراءة لوحة بيانات الصنف أو ملصقه أو تصويرها.",
      equipmentIds: [
        "nameplate-existing-item-matching",
        "installed-equipment-spare-parts",
      ],
      review: pending("request-type context only"),
    },
    {
      id: "existing-item-identification",
      title_en: "Existing Item Identification",
      title_ar: "تحديد صنف مستخدم حاليًا",
      description_en:
        "You need the same item as one already installed or in use.",
      description_ar: "تحتاجون إلى الصنف نفسه المركّب أو المستخدم حاليًا.",
      equipmentIds: [
        "nameplate-existing-item-matching",
        "obsolete-discontinued-items",
      ],
      review: pending("request-type context only"),
    },
    {
      id: "photo-based-identification",
      title_en: "Photo-Based Identification",
      title_ar: "التعرف على الصنف من الصور",
      description_en:
        "You have photos of the item and any visible markings; identification depends on the information available.",
      description_ar:
        "تتوفر لديكم صور الصنف وأي علامات ظاهرة عليه، ويعتمد التعرف عليه على المعلومات المتاحة.",
      equipmentIds: ["nameplate-existing-item-matching"],
      review: pending("request-type context only; identification not assured"),
    },
    {
      id: "obsolete-discontinued-item",
      title_en: "Obsolete or Discontinued Item",
      title_ar: "صنف متوقف عن الإنتاج",
      description_en:
        "The item is no longer produced; availability is searched for, never assumed.",
      description_ar:
        "لم يعد الصنف يُنتج، ويتم البحث عن توافره دون افتراضه مسبقًا.",
      equipmentIds: [
        "obsolete-discontinued-items",
        "nameplate-existing-item-matching",
      ],
      review: pending("request-type context only; availability not assured"),
    },
    {
      id: "non-standard-item",
      title_en: "Non-Standard Item",
      title_ar: "صنف غير قياسي",
      description_en:
        "The item does not match a standard listing or is hard to find locally.",
      description_ar: "لا يطابق الصنف قائمة قياسية أو يصعب توفيره محليًا.",
      equipmentIds: [
        "non-standard-hard-to-find",
        "specialty-equipment-requests",
      ],
      review: pending("request-type context only"),
    },
    {
      id: "drawing-sample-reference",
      title_en: "Drawing or Sample Reference",
      title_ar: "مرجع رسم أو عينة",
      description_en:
        "You have a drawing or a sample that defines the item you need.",
      description_ar: "يتوفر لديكم رسم أو عينة تحدد الصنف المطلوب.",
      equipmentIds: ["drawing-sample-requests", "non-standard-hard-to-find"],
      review: pending("request-type context only; no manufacturing claim"),
    },
    {
      id: "multi-item-list",
      title_en: "Multi-Item List",
      title_ar: "قائمة أصناف متعددة",
      description_en:
        "You have several items to quote together, including items covered by other GOLTENS sectors.",
      description_ar:
        "لديكم عدة أصناف لعرض سعر واحد، بما يشمل أصنافًا تغطيها قطاعات GOLTENS الأخرى.",
      equipmentIds: ["multi-item-lists-boqs"],
      review: pending("request-type context only; other sectors routed"),
    },
    {
      id: "boq-project-requirement",
      title_en: "BOQ or Project Requirement",
      title_ar: "جدول كميات أو متطلبات مشروع",
      description_en:
        "You have a BOQ or a project item schedule to quote against.",
      description_ar:
        "لديكم جدول كميات أو قائمة أصناف لمشروع لإعداد العرض وفقها.",
      equipmentIds: ["multi-item-lists-boqs"],
      review: pending("request-type context only; other sectors routed"),
    },
    {
      id: "industrial-material-bulk",
      title_en: "Industrial Material or Bulk Requirement",
      title_ar: "خامات صناعية أو كميات كبيرة",
      description_en:
        "You need materials, consumables or packaging quoted to your specification and quantity.",
      description_ar:
        "تحتاجون إلى خامات أو مستهلكات أو مواد تعبئة وفق مواصفاتكم وكمياتكم.",
      equipmentIds: [
        "industrial-raw-materials",
        "bulk-consumables",
        "packaging-materials",
      ],
      review: pending("request-type context only; chemicals routed"),
    },
  ],

  categories: [
    {
      categoryId: "parts-components-by-reference",
      title_en: "Parts & Components by Reference",
      title_ar: "قطع الغيار والمكونات حسب المرجع",
      intro_en:
        "Requests that start from a part number, model, nameplate or an item already in use.",
      intro_ar:
        "طلبات تبدأ من رقم القطعة أو الطراز أو لوحة البيانات أو صنف مستخدم حاليًا.",
      icon: "SlidersHorizontal",
      equipment: [
        guide({
          id: "part-model-number-requests",
          name_en: "Part or Model Number Requests",
          name_ar: "طلبات برقم القطعة أو الطراز",
          summary_en:
            "Sourcing requests that start from a part or model number you provide.",
          summary_ar: "طلبات توريد تبدأ من رقم القطعة أو الطراز الذي تقدمونه.",
          whatItIs_en:
            "A sourcing request in which the customer gives the part number, model number or manufacturer reference, and GOLTENS searches for the specified item for quotation.",
          whatItIs_ar:
            "طلب توريد يقدم فيه العميل رقم القطعة أو رقم الطراز أو مرجع الجهة المصنّعة، وتبحث GOLTENS عن الصنف المحدد لإعداد عرض السعر.",
          usedFor_en:
            "Replacing or adding a known item when its reference is available.",
          usedFor_ar: "استبدال صنف معروف أو إضافته عند توفر مرجعه.",
          applications_en: [
            "Replacing a known component",
            "Adding items to existing equipment",
            "Quoting items from a parts list",
          ],
          applications_ar: [
            "استبدال مكون معروف",
            "إضافة أصناف لمنظومة قائمة",
            "إعداد عرض سعر لأصناف من قائمة قطع",
          ],
          industryIds: PLANTS,
          selectionFactors: [
            {
              factor_en: "Reference",
              factor_ar: "المرجع",
              detail_en:
                "Part number, model number or manufacturer reference, as given by the customer.",
              detail_ar:
                "رقم القطعة أو الطراز أو مرجع الجهة المصنّعة كما يقدمه العميل.",
            },
            {
              factor_en: "Manufacturer",
              factor_ar: "الجهة المصنّعة",
              detail_en: "Only where the customer specifies one.",
              detail_ar: "فقط إذا حددها العميل.",
            },
            {
              factor_en: "Alternatives",
              factor_ar: "البدائل",
              detail_en: "Quoted only where the customer allows alternatives.",
              detail_ar: "لا تُقدَّم إلا إذا سمح العميل بالبدائل.",
            },
          ],
          requestChecklist_en: [
            "Part or model number",
            "Item description and quantity",
            "Whether alternatives are acceptable",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "رقم القطعة أو الطراز",
            "وصف الصنف والكمية",
            "ما إذا كانت البدائل مقبولة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          note: "request type — reference supplied by the customer",
        }),
        guide({
          id: "nameplate-existing-item-matching",
          name_en: "Nameplate & Existing-Item Matching",
          name_ar: "مطابقة الأصناف الحالية ولوحات البيانات",
          summary_en:
            "Matching an item in use from its nameplate, label, markings or photos.",
          summary_ar:
            "مطابقة صنف مستخدم حاليًا من لوحة بياناته أو ملصقه أو علاماته أو صوره.",
          whatItIs_en:
            "A sourcing request in which the customer sends the nameplate details, labels, markings or photos of an existing item, and GOLTENS uses them to identify and source the same item for quotation. Identification depends on the information available.",
          whatItIs_ar:
            "طلب توريد يرسل فيه العميل بيانات لوحة الصنف أو ملصقاته أو علاماته أو صوره، وتستخدمها GOLTENS في تحديد الصنف نفسه وتوفيره لإعداد عرض السعر. ويعتمد التعرف على الصنف على المعلومات المتاحة.",
          usedFor_en:
            "Replacing an item in use when its part number is not known.",
          usedFor_ar: "استبدال صنف مستخدم حاليًا عند عدم معرفة رقم قطعته.",
          applications_en: [
            "Items with a readable nameplate",
            "Items with markings but no documents",
            "Items identified from clear photos",
          ],
          applications_ar: [
            "أصناف بلوحة بيانات مقروءة",
            "أصناف عليها علامات دون مستندات",
            "أصناف يمكن التعرف عليها من صور واضحة",
          ],
          industryIds: PLANTS,
          selectionFactors: [
            {
              factor_en: "Nameplate",
              factor_ar: "لوحة البيانات",
              detail_en: "A clear photo or transcription of the nameplate.",
              detail_ar: "صورة واضحة للوحة البيانات أو نسخ لبياناتها.",
            },
            {
              factor_en: "Photos and markings",
              factor_ar: "الصور والعلامات",
              detail_en: "Photos from several angles and any visible markings.",
              detail_ar: "صور من عدة زوايا وأي علامات ظاهرة على الصنف.",
            },
            {
              factor_en: "Identification",
              factor_ar: "التعرف على الصنف",
              detail_en: "Depends on the information available.",
              detail_ar: "يعتمد على المعلومات المتاحة.",
            },
          ],
          requestChecklist_en: [
            "Nameplate photo or details",
            "Item photos and visible markings",
            "Quantity and where the item is used",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "صورة لوحة البيانات أو بياناتها",
            "صور الصنف والعلامات الظاهرة",
            "الكمية ومكان استخدام الصنف",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          note: "request type — identification depends on the information available",
        }),
        guide({
          id: "installed-equipment-spare-parts",
          name_en: "Spare Parts & Components for Installed Equipment",
          name_ar: "قطع الغيار والمكونات للمعدات القائمة",
          summary_en:
            "Spare parts and components for equipment already installed at your facility.",
          summary_ar: "قطع الغيار والمكونات لمعدات مركّبة بالفعل في منشأتكم.",
          whatItIs_en:
            "A sourcing request for spare parts and components of installed equipment, identified by the part numbers, equipment list or nameplate data the customer provides.",
          whatItIs_ar:
            "طلب توريد لقطع الغيار والمكونات الخاصة بمعدات قائمة، يتم تحديدها من أرقام القطع أو قائمة المعدات أو بيانات لوحات المعدات التي يقدمها العميل.",
          usedFor_en:
            "Parts lists for installed mechanical, electrical and process equipment.",
          usedFor_ar:
            "قوائم قطع الغيار للمعدات الميكانيكية والكهربائية ومعدات العمليات القائمة.",
          applications_en: [
            "Planned shutdown parts lists",
            "Mixed-make equipment at one facility",
            "Replacing worn components",
          ],
          applications_ar: [
            "قوائم قطع الغيار للتوقفات المخططة",
            "معدات من جهات تصنيع مختلفة في منشأة واحدة",
            "استبدال المكونات المستهلكة",
          ],
          industryIds: PLANTS,
          selectionFactors: [
            {
              factor_en: "Equipment reference",
              factor_ar: "مرجع المعدة",
              detail_en:
                "Equipment model or nameplate data, as provided by the customer.",
              detail_ar: "طراز المعدة أو بيانات لوحتها كما يقدمها العميل.",
            },
            {
              factor_en: "Part references",
              factor_ar: "مراجع القطع",
              detail_en: "Part numbers or descriptions for each line.",
              detail_ar: "أرقام القطع أو أوصافها لكل بند.",
            },
            {
              factor_en: "Alternatives",
              factor_ar: "البدائل",
              detail_en: "Quoted only where the customer allows alternatives.",
              detail_ar: "لا تُقدَّم إلا إذا سمح العميل بالبدائل.",
            },
          ],
          requestChecklist_en: [
            "Equipment model or nameplate data",
            "Part numbers or descriptions",
            "Quantity for each line",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "طراز المعدة أو بيانات لوحتها",
            "أرقام القطع أو أوصافها",
            "الكمية لكل بند",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          note: "request type — general installed equipment; no vehicle or heavy-equipment parts",
        }),
        guide({
          id: "obsolete-discontinued-items",
          name_en: "Obsolete & Discontinued Items",
          name_ar: "الأصناف المتوقفة عن الإنتاج",
          summary_en:
            "A search for items no longer produced, or for a permitted alternative.",
          summary_ar: "البحث عن أصناف لم تعد تُنتج، أو عن بديل مسموح به.",
          whatItIs_en:
            "A sourcing request for an item that is no longer produced: GOLTENS searches for remaining availability and, where the customer allows alternatives, for a matching or technically suitable item. Availability is not guaranteed.",
          whatItIs_ar:
            "طلب توريد لصنف لم يعد يُنتج، تبحث فيه GOLTENS عن توافره المتبقي، وعند سماح العميل بالبدائل، عن صنف مطابق أو مناسب فنيًا. ولا يُفترض توافر الصنف مسبقًا.",
          usedFor_en:
            "Keeping existing equipment in use when an item in it is no longer made.",
          usedFor_ar:
            "استمرار تشغيل معدات قائمة عندما يتوقف إنتاج أحد أصنافها.",
          applications_en: [
            "Older installed equipment",
            "Items with no current listing",
            "Bridging until a planned replacement",
          ],
          applications_ar: [
            "المعدات القائمة القديمة",
            "أصناف لا تتوفر لها قوائم حالية",
            "سد الحاجة حتى استبدال مخطط",
          ],
          industryIds: PLANTS,
          selectionFactors: [
            {
              factor_en: "Last known reference",
              factor_ar: "آخر مرجع معروف",
              detail_en:
                "Part or model number and nameplate data, if available.",
              detail_ar: "رقم القطعة أو الطراز وبيانات اللوحة إن توفرت.",
            },
            {
              factor_en: "Alternatives",
              factor_ar: "البدائل",
              detail_en:
                "Whether the customer allows a matching or technically suitable item.",
              detail_ar: "ما إذا كان العميل يسمح بصنف مطابق أو مناسب فنيًا.",
            },
            {
              factor_en: "Availability",
              factor_ar: "التوافر",
              detail_en: "Searched for and confirmed during quotation.",
              detail_ar: "يتم البحث عنه وتأكيده أثناء إعداد عرض السعر.",
            },
          ],
          requestChecklist_en: [
            "Last known part or model number",
            "Nameplate photo or item photos",
            "Whether alternatives are acceptable",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "آخر رقم معروف للقطعة أو الطراز",
            "صورة لوحة البيانات أو صور الصنف",
            "ما إذا كانت البدائل مقبولة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          note: "request type — search only; availability never assured",
        }),
      ],
    },
    {
      categoryId: "non-standard-specialty-items",
      title_en: "Non-Standard & Specialty Items",
      title_ar: "الأصناف غير القياسية والمتخصصة",
      intro_en:
        "Requests for items that do not fit a standard listing, quoted case by case.",
      intro_ar:
        "طلبات لأصناف لا تندرج تحت قائمة قياسية، ويتم إعداد عروض أسعارها حالة بحالة.",
      icon: "Globe",
      equipment: [
        guide({
          id: "non-standard-hard-to-find",
          name_en: "Non-Standard & Hard-to-Find Items",
          name_ar: "الأصناف غير القياسية وصعبة التوفير",
          summary_en:
            "Items outside standard listings or hard to find locally, sourced case by case.",
          summary_ar:
            "أصناف خارج القوائم القياسية أو يصعب توفيرها محليًا، يتم توفيرها حالة بحالة.",
          whatItIs_en:
            "A sourcing request for an item that does not fit a standard listing or is hard to find locally; GOLTENS searches local and international sources against the customer's specification.",
          whatItIs_ar:
            "طلب توريد لصنف لا يطابق قائمة قياسية أو يصعب توفيره محليًا، تبحث فيه GOLTENS عن مصادر محلية ودولية وفق مواصفات العميل.",
          usedFor_en:
            "Items with limited local availability or a non-standard specification.",
          usedFor_ar: "أصناف محدودة التوافر محليًا أو ذات مواصفات غير قياسية.",
          applications_en: [
            "Items with no local listing",
            "Non-standard sizes or configurations",
            "Single missing items in a larger order",
          ],
          applications_ar: [
            "أصناف لا تتوفر لها قوائم محلية",
            "مقاسات أو تكوينات غير قياسية",
            "صنف ناقص واحد ضمن طلب أكبر",
          ],
          industryIds: [...PLANTS, "project-procurement"],
          selectionFactors: [
            {
              factor_en: "Specification",
              factor_ar: "المواصفات",
              detail_en:
                "The specification or datasheet the customer provides.",
              detail_ar: "المواصفات أو ورقة البيانات التي يقدمها العميل.",
            },
            {
              factor_en: "Sourcing",
              factor_ar: "مصادر التوريد",
              detail_en: "Local or international, confirmed during quotation.",
              detail_ar: "محلية أو دولية، ويتم تأكيدها أثناء إعداد عرض السعر.",
            },
            {
              factor_en: "Alternatives",
              factor_ar: "البدائل",
              detail_en: "Quoted only where the customer allows alternatives.",
              detail_ar: "لا تُقدَّم إلا إذا سمح العميل بالبدائل.",
            },
          ],
          requestChecklist_en: [
            "Specification or datasheet",
            "Photos or references, if available",
            "Quantity and unit",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو ورقة البيانات",
            "الصور أو المراجع إن توفرت",
            "الكمية ووحدة القياس",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          note: "request type — case by case",
        }),
        guide({
          id: "drawing-sample-requests",
          name_en: "Drawing- or Sample-Based Requests",
          name_ar: "الطلبات وفق رسم أو عينة",
          summary_en:
            "Sourcing against a drawing or sample the customer provides.",
          summary_ar: "التوريد وفق رسم أو عينة يقدمها العميل.",
          whatItIs_en:
            "A sourcing request in which the item is defined by the customer's own drawing or sample information, and GOLTENS searches for a source that can supply it for quotation.",
          whatItIs_ar:
            "طلب توريد يتحدد فيه الصنف من خلال رسم العميل أو بيانات العينة التي يقدمها، وتبحث GOLTENS عن مصدر يمكنه توفيره لإعداد عرض السعر.",
          usedFor_en:
            "Items defined by a customer drawing or a physical sample rather than a part number.",
          usedFor_ar:
            "أصناف يحددها رسم العميل أو عينة فعلية بدلًا من رقم القطعة.",
          applications_en: [
            "Items with a drawing but no part number",
            "Items matched to a physical sample",
            "Items for older assemblies",
          ],
          applications_ar: [
            "أصناف لها رسم دون رقم قطعة",
            "أصناف تطابق عينة فعلية",
            "أصناف لمجموعات قديمة",
          ],
          industryIds: [...PLANTS, "manufacturing-production"],
          selectionFactors: [
            {
              factor_en: "Drawing or sample",
              factor_ar: "الرسم أو العينة",
              detail_en: "Provided by the customer.",
              detail_ar: "يقدمه العميل.",
            },
            {
              factor_en: "Material and finish",
              factor_ar: "الخامة والتشطيب",
              detail_en: "As stated on the drawing or by the customer.",
              detail_ar: "وفق ما يرد في الرسم أو ما يحدده العميل.",
            },
            {
              factor_en: "Acceptance",
              factor_ar: "القبول",
              detail_en:
                "Confirmed by the customer against the drawing or sample.",
              detail_ar: "يؤكده العميل بالمقارنة بالرسم أو العينة.",
            },
          ],
          requestChecklist_en: [
            "Drawing or sample details",
            "Material and finish, as stated",
            "Quantity required",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "بيانات الرسم أو العينة",
            "الخامة والتشطيب كما هو محدد",
            "الكمية المطلوبة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          note: "request type — sourcing against customer drawings or samples only",
        }),
        guide({
          id: "specialty-equipment-requests",
          name_en: "Specialty Equipment Outside Sector Pages",
          name_ar: "معدات متخصصة خارج صفحات القطاعات",
          summary_en:
            "Equipment not covered by the other GOLTENS sector pages, reviewed case by case.",
          summary_ar:
            "معدات لا تغطيها صفحات قطاعات GOLTENS الأخرى، تتم مراجعتها حالة بحالة.",
          whatItIs_en:
            "A sourcing request for equipment outside the other GOLTENS sector pages; GOLTENS reviews the customer's specification case by case before preparing a quotation.",
          whatItIs_ar:
            "طلب توريد لمعدات خارج صفحات قطاعات GOLTENS الأخرى، تراجع فيه GOLTENS مواصفات العميل حالة بحالة قبل إعداد عرض السعر.",
          usedFor_en:
            "One-off or niche equipment needs not listed on a sector page.",
          usedFor_ar:
            "احتياجات معدات منفردة أو متخصصة غير مدرجة في صفحات القطاعات.",
          applications_en: [
            "One-off equipment purchases",
            "Niche equipment for a project",
            "Equipment outside the sector pages",
          ],
          applications_ar: [
            "مشتريات معدات منفردة",
            "معدات متخصصة لمشروع",
            "معدات خارج صفحات القطاعات",
          ],
          industryIds: PROJECTS,
          selectionFactors: [
            {
              factor_en: "Specification",
              factor_ar: "المواصفات",
              detail_en: "The customer's specification or datasheet.",
              detail_ar: "مواصفات العميل أو ورقة البيانات.",
            },
            {
              factor_en: "Scope",
              factor_ar: "النطاق",
              detail_en: "Reviewed case by case.",
              detail_ar: "تتم مراجعته حالة بحالة.",
            },
            {
              factor_en: "Alternatives",
              factor_ar: "البدائل",
              detail_en: "Quoted only where the customer allows alternatives.",
              detail_ar: "لا تُقدَّم إلا إذا سمح العميل بالبدائل.",
            },
          ],
          requestChecklist_en: [
            "Specification or datasheet",
            "Intended use",
            "Quantity required",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو ورقة البيانات",
            "الاستخدام المطلوب",
            "الكمية المطلوبة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          note: "request type — case by case; sector items routed",
        }),
      ],
    },
    {
      categoryId: "materials-multi-item-requirements",
      title_en: "Materials & Multi-Item Requirements",
      title_ar: "الخامات ومتطلبات الأصناف المتعددة",
      intro_en:
        "Materials, consumables, packaging and multi-item lists quoted to your specification and quantities.",
      intro_ar:
        "الخامات والمستهلكات ومواد التعبئة وقوائم الأصناف المتعددة وفق مواصفاتكم وكمياتكم.",
      icon: "Container",
      equipment: [
        guide({
          id: "industrial-raw-materials",
          name_en: "Industrial Raw Materials",
          name_ar: "الخامات الصناعية",
          summary_en:
            "Metals, polymers and other industrial materials sourced to your grade.",
          summary_ar:
            "معادن وبوليمرات وخامات صناعية أخرى وفق الدرجة التي تحددونها.",
          whatItIs_en:
            "A sourcing request for industrial raw materials, quoted to the material, grade, form and quantity stated by the customer.",
          whatItIs_ar:
            "طلب توريد للخامات الصناعية، يتم إعداد عرض سعره وفق الخامة والدرجة والشكل والكمية التي يحددها العميل.",
          usedFor_en: "Production, processing and project material needs.",
          usedFor_ar: "احتياجات الإنتاج والتشغيل والمشروعات من الخامات.",
          applications_en: [
            "Production line materials",
            "Workshop and processing materials",
            "Project-specified material grades",
          ],
          applications_ar: [
            "خامات خطوط الإنتاج",
            "خامات أعمال التشغيل والتشكيل",
            "درجات الخامات المحددة للمشروعات",
          ],
          industryIds: ["manufacturing-production", "industrial-facilities"],
          selectionFactors: [
            {
              factor_en: "Material and grade",
              factor_ar: "الخامة والدرجة",
              detail_en: "As stated by the customer.",
              detail_ar: "كما يحددهما العميل.",
            },
            {
              factor_en: "Form and size",
              factor_ar: "الشكل والمقاس",
              detail_en: "Sheet, bar, granules or other form, as specified.",
              detail_ar: "ألواح أو قضبان أو حبيبات أو غيرها، وفق المواصفات.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "As requested.",
              detail_ar: "حسب الطلب.",
            },
          ],
          requestChecklist_en: [
            "Material and grade",
            "Form, size and quantity",
            "Packaging, if specified",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "الخامة والدرجة",
            "الشكل والمقاس والكمية",
            "العبوة إن كانت محددة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          note: "request type — chemicals routed to Industrial Chemicals",
        }),
        guide({
          id: "bulk-consumables",
          name_en: "Bulk Consumables",
          name_ar: "المستهلكات بالكميات الكبيرة",
          summary_en:
            "Industrial consumables quoted to project or multi-site quantities.",
          summary_ar: "مستهلكات صناعية وفق كميات المشروع أو المواقع المتعددة.",
          whatItIs_en:
            "A sourcing request for industrial consumables in larger quantities, quoted to the specification, quantity and delivery split stated by the customer.",
          whatItIs_ar:
            "طلب توريد لمستهلكات صناعية بكميات كبيرة، يتم إعداد عرض سعره وفق المواصفات والكمية وتقسيم التوريد الذي يحدده العميل.",
          usedFor_en: "Recurring or project-phase consumable needs.",
          usedFor_ar: "احتياجات المستهلكات المتكررة أو الخاصة بمراحل المشروع.",
          applications_en: [
            "Project-phase consumables",
            "Consumables for several sites",
            "Volume-based requests",
          ],
          applications_ar: [
            "مستهلكات مراحل المشروع",
            "مستهلكات لعدة مواقع",
            "طلبات قائمة على الكميات",
          ],
          industryIds: ["industrial-facilities", "project-procurement"],
          selectionFactors: [
            {
              factor_en: "Specification",
              factor_ar: "المواصفات",
              detail_en: "As stated by the customer.",
              detail_ar: "كما يحددها العميل.",
            },
            {
              factor_en: "Quantity",
              factor_ar: "الكمية",
              detail_en: "Total quantity and any delivery split.",
              detail_ar: "إجمالي الكمية وأي تقسيم للتوريد.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "As requested.",
              detail_ar: "حسب الطلب.",
            },
          ],
          requestChecklist_en: [
            "Item description and specification",
            "Total quantity and delivery split",
            "Packaging, if specified",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "وصف الصنف ومواصفاته",
            "إجمالي الكمية وتقسيم التوريد",
            "العبوة إن كانت محددة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          note: "request type — no recurring-supply commitment",
        }),
        guide({
          id: "packaging-materials",
          name_en: "Packaging Materials",
          name_ar: "مواد التعبئة والتغليف",
          summary_en:
            "Industrial and export packaging materials quoted to your requirement.",
          summary_ar: "مواد تعبئة وتغليف صناعية وللتصدير وفق متطلباتكم.",
          whatItIs_en:
            "A sourcing request for packaging materials, quoted to the type, size, material and quantity stated by the customer.",
          whatItIs_ar:
            "طلب توريد لمواد التعبئة والتغليف، يتم إعداد عرض سعره وفق النوع والمقاس والخامة والكمية التي يحددها العميل.",
          usedFor_en: "Protective, export and production packaging needs.",
          usedFor_ar: "احتياجات التغليف الواقي والتعبئة للتصدير والإنتاج.",
          applications_en: [
            "Protective packaging",
            "Export packaging",
            "Production-line packaging",
          ],
          applications_ar: [
            "التغليف الواقي",
            "التعبئة للتصدير",
            "تعبئة خطوط الإنتاج",
          ],
          industryIds: ["manufacturing-production", "industrial-facilities"],
          selectionFactors: [
            {
              factor_en: "Type and material",
              factor_ar: "النوع والخامة",
              detail_en: "As stated by the customer.",
              detail_ar: "كما يحددهما العميل.",
            },
            {
              factor_en: "Size",
              factor_ar: "المقاس",
              detail_en: "Dimensions or size range, as specified.",
              detail_ar: "الأبعاد أو نطاق المقاسات وفق المواصفات.",
            },
            {
              factor_en: "Quantity",
              factor_ar: "الكمية",
              detail_en: "Per order or per delivery.",
              detail_ar: "لكل طلب أو لكل دفعة توريد.",
            },
          ],
          requestChecklist_en: [
            "Packaging type and material",
            "Size and quantity",
            "Product to be packed, if relevant",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع مواد التعبئة وخامتها",
            "المقاس والكمية",
            "المنتج المطلوب تعبئته عند الحاجة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          note: "request type — quoted to customer specification",
        }),
        guide({
          id: "multi-item-lists-boqs",
          name_en: "Multi-Item Lists & BOQs",
          name_ar: "قوائم الأصناف المتعددة وجداول الكميات",
          summary_en:
            "One request covering several items, a BOQ or a project item list.",
          summary_ar:
            "طلب واحد يشمل عدة أصناف أو جدول كميات أو قائمة أصناف لمشروع.",
          whatItIs_en:
            "A sourcing request covering several items at once — an item list, a BOQ or a project schedule — quoted line by line against the information the customer provides.",
          whatItIs_ar:
            "طلب توريد يشمل عدة أصناف معًا، سواء قائمة أصناف أو جدول كميات أو قائمة مشروع، ويتم إعداد عرض سعره بندًا بندًا وفق المعلومات التي يقدمها العميل.",
          usedFor_en:
            "Consolidating mixed items into one quotation request, including items covered by other GOLTENS sectors.",
          usedFor_ar:
            "تجميع أصناف متنوعة في طلب عرض سعر واحد، بما يشمل أصنافًا تغطيها قطاعات GOLTENS الأخرى.",
          applications_en: [
            "Project BOQs",
            "Mixed item lists",
            "Lists spanning several sectors",
          ],
          applications_ar: [
            "جداول كميات المشروعات",
            "قوائم أصناف متنوعة",
            "قوائم تشمل عدة قطاعات",
          ],
          industryIds: PROJECTS,
          selectionFactors: [
            {
              factor_en: "Line items",
              factor_ar: "البنود",
              detail_en: "Description, reference and quantity for each line.",
              detail_ar: "الوصف والمرجع والكمية لكل بند.",
            },
            {
              factor_en: "Specification",
              factor_ar: "المواصفات",
              detail_en: "The specification or BOQ description for each line.",
              detail_ar: "المواصفات أو وصف جدول الكميات لكل بند.",
            },
            {
              factor_en: "Alternatives",
              factor_ar: "البدائل",
              detail_en: "Stated per line by the customer.",
              detail_ar: "يحددها العميل لكل بند.",
            },
          ],
          requestChecklist_en: [
            "Item list or BOQ",
            "Specification for each line",
            "Project or tender reference, if any",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "قائمة الأصناف أو جدول الكميات",
            "المواصفات لكل بند",
            "مرجع المشروع أو المناقصة إن وجد",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          note: "request type — line-by-line quotation; other sectors routed",
        }),
      ],
    },
  ],

  replacement: {
    title_en: "Hard-to-Source, Existing-Item & Equivalent Requests",
    title_ar: "طلبات الأصناف صعبة التوفير والأصناف الحالية والبدائل المكافئة",
    intro_en: ALTERNATIVES_EN,
    intro_ar: ALTERNATIVES_AR,
    flowTitle_en: "How a sourcing request works",
    flowTitle_ar: "كيف يتم التعامل مع طلب التوريد",
    flow_en: [
      "Item Information",
      "Technical & Document Review",
      "Supplier Search",
      "Alternative / Equivalent Review",
      "Availability, Origin & Lead-Time Confirmation",
      "Quotation",
    ],
    flow_ar: [
      "بيانات الصنف",
      "المراجعة الفنية ومراجعة المستندات",
      "البحث عن مصادر التوريد",
      "مراجعة البدائل والأصناف المكافئة",
      "تأكيد التوافر وبلد المنشأ ومدة التوريد",
      "عرض السعر",
    ],
    groups: [
      {
        title_en: "Existing-item matching",
        title_ar: "مطابقة صنف مستخدم حاليًا",
        items_en: [
          "Photo of the item in use",
          "Nameplate or label details",
          "Where and how the item is used",
          "Quantity required",
        ],
        items_ar: [
          "صورة الصنف المستخدم حاليًا",
          "بيانات لوحة الصنف أو ملصقه",
          "مكان استخدام الصنف وطريقته",
          "الكمية المطلوبة",
        ],
      },
      {
        title_en: "Nameplate & photo identification",
        title_ar: "التعرف من لوحة البيانات والصور",
        items_en: [
          "A clear photo of the nameplate",
          "Photos from several angles",
          "Any visible markings or numbers",
          "Identification depends on the information available",
        ],
        items_ar: [
          "صورة واضحة للوحة البيانات",
          "صور من عدة زوايا",
          "أي علامات أو أرقام ظاهرة",
          "يعتمد التعرف على الصنف على المعلومات المتاحة",
        ],
      },
      {
        title_en: "Obsolete & discontinued items",
        title_ar: "الأصناف المتوقفة عن الإنتاج",
        items_en: [
          "Last known part or model number",
          "Manufacturer, only if specified by the customer",
          "Whether alternatives are acceptable",
          "Availability is not guaranteed",
        ],
        items_ar: [
          "آخر رقم معروف للقطعة أو الطراز",
          "الجهة المصنّعة، فقط إذا حددها العميل",
          "ما إذا كانت البدائل مقبولة",
          "لا يُضمن توافر الصنف",
        ],
      },
      {
        title_en: "Non-standard items",
        title_ar: "الأصناف غير القياسية",
        items_en: [
          "Specification or datasheet",
          "Drawing or sample information",
          "Dimensions and material, as stated",
          "Quantity required",
        ],
        items_ar: [
          "المواصفات أو ورقة البيانات",
          "بيانات الرسم أو العينة",
          "الأبعاد والخامة كما هي محددة",
          "الكمية المطلوبة",
        ],
      },
      {
        title_en: "Equivalent & cross-reference requests",
        title_ar: "طلبات البدائل المكافئة والمراجع المقابلة",
        items_en: [
          "The reference to be matched",
          "The specification the alternative must meet",
          "Confirmation that alternatives are permitted",
          "Who accepts the equivalent on the customer side",
        ],
        items_ar: [
          "المرجع المطلوب مطابقته",
          "المواصفات المطلوبة في البديل",
          "تأكيد السماح بالبدائل",
          "الجهة التي تقبل البديل لدى العميل",
        ],
      },
    ],
    note_en: `An equivalent must match the specification, configuration and intended use stated by the customer — never the item name alone. ${BOUNDARY_EN}`,
    note_ar: `يجب أن يطابق البديل المواصفات والتكوين والاستخدام المطلوب كما يحددها العميل، وليس اسم الصنف وحده. ${BOUNDARY_AR}`,
    ctaLabel_en: "Request a quotation for a hard-to-source item",
    ctaLabel_ar: "اطلب عرض سعر لصنف صعب التوفير",
    prefill_en:
      "Hard-to-source, existing-item or equivalent request — Global Sourcing",
    prefill_ar:
      "طلب صنف صعب التوفير أو صنف حالي أو بديل مكافئ — التوريد العالمي",
  },

  request: {
    title_en: "What to Include in Your Quotation Request",
    title_ar: "ما الذي يجب إرساله مع طلب عرض السعر",
    intro_en:
      "The information you provide determines the quotation basis. Send what you have — missing details can be clarified during quotation.",
    intro_ar:
      "تحدد البيانات التي تقدمونها أساس عرض السعر. أرسلوا ما يتوفر لديكم، ويمكن استكمال البيانات الناقصة أثناء إعداد عرض السعر.",
    checklistTitle_en: "Minimum information",
    checklistTitle_ar: "الحد الأدنى من البيانات",
    checklist_en: [
      "Item name or description",
      "Part or model number",
      "Manufacturer, only if the customer specifies one",
      "Quantity and unit",
      "Technical specification",
      "Delivery location",
      "Required date",
      "Contact details",
    ],
    checklist_ar: [
      "اسم الصنف أو وصفه",
      "رقم القطعة أو الطراز",
      "الجهة المصنّعة، فقط إذا حددها العميل",
      "الكمية ووحدة القياس",
      "المواصفات الفنية",
      "موقع التوريد",
      "التاريخ المطلوب",
      "بيانات التواصل",
    ],
    secondaryChecklist: {
      title_en: "Useful information",
      title_ar: "بيانات مفيدة",
      items_en: [
        "Nameplate photo",
        "Item photos",
        "Existing datasheet",
        "Drawing or sample",
        "BOQ",
        "Project/tender reference",
        "Existing supplier information, if you choose to provide it",
        "Whether equivalents are acceptable",
        "Packaging/unit requirements",
        "Documents required with the quotation",
      ],
      items_ar: [
        "صورة لوحة البيانات",
        "صور الصنف",
        "ورقة البيانات الحالية",
        "الرسم أو العينة",
        "جدول الكميات",
        "مرجع المشروع/المناقصة",
        "بيانات المورد الحالي، إذا رغبتم في تقديمها",
        "ما إذا كانت البدائل المكافئة مقبولة",
        "متطلبات العبوة/وحدة القياس",
        "المستندات المطلوبة مع عرض السعر",
      ],
    },
    checklistNote_en: `GOLTENS prepares a quotation based on the information provided. ${BOUNDARY_EN}`,
    checklistNote_ar: `تُعد GOLTENS عرض السعر استنادًا إلى المعلومات المقدمة. ${BOUNDARY_AR}`,
    processTitle_en: "How GOLTENS handles your requirement",
    processTitle_ar: "كيف تتعامل GOLTENS مع طلبكم",
    steps: [
      {
        title_en: "Requirement Review",
        title_ar: "مراجعة المتطلبات",
        description_en:
          "Send the item information, list or BOQ through the quotation form on this page, with photos, drawings or datasheets where available.",
        description_ar:
          "أرسلوا بيانات الصنف أو القائمة أو جدول الكميات من خلال نموذج طلب عرض السعر في هذه الصفحة، مع الصور أو الرسومات أو أوراق البيانات إن توفرت.",
      },
      {
        title_en: "Information / Specification Review",
        title_ar: "مراجعة البيانات / المواصفات",
        description_en:
          "Our team reviews the information provided and asks for anything needed to identify each item.",
        description_ar:
          "يراجع فريقنا البيانات المقدمة ويطلب أي بيانات لازمة لتحديد كل صنف.",
      },
      {
        title_en: "Sourcing / Configuration",
        title_ar: "التوريد وتحديد تفاصيل الطلب",
        description_en:
          "GOLTENS searches local and international sources for the specified item — or, where you allow alternatives, a matching or technically suitable item.",
        description_ar:
          "تبحث GOLTENS في المصادر المحلية والدولية عن الصنف المحدد، أو عن صنف مطابق أو مناسب فنيًا إذا سمحتم بالبدائل.",
      },
      {
        title_en: "Quotation",
        title_ar: "عرض السعر",
        description_en: `You receive a quotation stating the offered items, origin, availability and lead time. ${BOUNDARY_EN}`,
        description_ar: `تتسلمون عرض سعر يوضح الأصناف المقترحة وبلد المنشأ والتوافر ومدة التوريد. ${BOUNDARY_AR}`,
      },
    ],
  },

  quote: {
    title_en: "Request a Quotation",
    title_ar: "اطلب عرض سعر",
    subtitle_en:
      "Send your part numbers, nameplate photos, drawings, specifications, item list or BOQ. Items are available on request and quoted against the information provided.",
    subtitle_ar:
      "أرسلوا أرقام القطع أو صور لوحات البيانات أو الرسومات أو المواصفات أو قائمة الأصناف أو جدول الكميات. الأصناف متاحة حسب الطلب ويتم إعداد عرض سعرها وفق المعلومات المقدمة.",
  },
};

/** Compact-layout page extras for Global Sourcing (see `compact-guide-page.ts`). */
export const globalSourcingPage: CompactGuidePage = {
  heroPrimaryCta_en: "Request a Quotation",
  heroPrimaryCta_ar: "اطلب عرض سعر",
  heroSecondaryCta: {
    label_en: "View Procurement Sectors",
    label_ar: "عرض قطاعات التوريد",
    href: "/sectors",
  },
  labels: {
    categoryNav_en: "Sourcing families",
    categoryNav_ar: "مجموعات التوريد",
    contextItems_en: "Sourcing requests",
    contextItems_ar: "طلبات التوريد",
    contextRoutes_en: "Covered by",
    contextRoutes_ar: "يغطيها قطاع",
    details_en: "Details and quotation information",
    details_ar: "التفاصيل وبيانات عرض السعر",
    replacementGroups_en: "Information to send",
    replacementGroups_ar: "البيانات المطلوبة",
  },
  guidePresentation: "cards",
  sourcingCategoryIds: [
    "parts-components-by-reference",
    "non-standard-specialty-items",
    "materials-multi-item-requirements",
  ],
  projectRoutes: {
    "multi-item-list": [
      "industrial-equipment",
      "electrical-energy",
      "fire-protection",
      "commercial-vehicles",
      "heavy-equipment",
      "healthcare",
    ],
    "boq-project-requirement": ["construction", "government-procurement"],
    "industrial-material-bulk": [
      "industrial-chemicals",
      "lubricants-oils",
      "construction",
    ],
  },
  routing: {
    title_en: "Requirements Covered by Other Sectors",
    title_ar: "متطلبات تغطيها قطاعات أخرى",
    intro_en:
      "Some items have their own GOLTENS sector page. They can still be included in the same sourcing request.",
    intro_ar:
      "لبعض الأصناف صفحات قطاعات خاصة بها لدى GOLTENS، ويمكن مع ذلك إدراجها ضمن طلب التوريد نفسه.",
    routes: [
      {
        sectorSlug: "industrial-equipment",
        title_en: "Industrial Equipment & Pumps",
        title_ar: "المعدات الصناعية والمضخات",
        items_en:
          "Pumps, valves, actuators and compressed-air equipment to your specification",
        items_ar:
          "المضخات والصمامات والمشغلات ومعدات الهواء المضغوط وفق مواصفاتكم",
      },
      {
        sectorSlug: "electrical-energy",
        title_en: "Electrical & Energy Equipment",
        title_ar: "معدات الكهرباء والطاقة",
        items_en: "Electrical distribution, power and lighting equipment",
        items_ar: "معدات التوزيع الكهربائي والقوى والإنارة",
      },
      {
        sectorSlug: "fire-protection",
        title_en: "Fire Protection Equipment",
        title_ar: "معدات مكافحة الحريق",
        items_en: "Fire protection equipment to your project documents",
        items_ar: "معدات مكافحة الحريق وفق مستندات مشروعكم",
      },
      {
        sectorSlug: "commercial-vehicles",
        title_en: "Commercial Vehicles",
        title_ar: "المركبات التجارية",
        items_en:
          "Trucks, trailers and specialised vehicles to your fleet requirements",
        items_ar: "الشاحنات والمقطورات والمركبات المتخصصة وفق متطلبات أسطولكم",
      },
      {
        sectorSlug: "heavy-equipment",
        title_en: "Heavy Equipment & Machinery",
        title_ar: "المعدات الثقيلة",
        items_en: "Earthmoving, lifting and construction machinery",
        items_ar: "معدات الحفر والرفع وآليات الإنشاءات",
      },
      {
        sectorSlug: "healthcare",
        title_en: "Hospital Equipment & Medical Supplies",
        title_ar: "تجهيزات المستشفيات والمستلزمات الطبية",
        items_en:
          "Hospital equipment and medical supplies to customer specifications",
        items_ar: "تجهيزات المستشفيات والمستلزمات الطبية وفق مواصفات العميل",
      },
      {
        sectorSlug: "construction",
        title_en: "Construction & Infrastructure Materials",
        title_ar: "مواد البناء والبنية التحتية",
        items_en: "Construction and infrastructure materials against your BOQ",
        items_ar: "مواد البناء والبنية التحتية وفق جدول الكميات",
      },
      {
        sectorSlug: "industrial-chemicals",
        title_en: "Industrial & Laboratory Chemicals",
        title_ar: "الكيماويات الصناعية والمعملية",
        items_en:
          "Laboratory and industrial chemicals according to specification",
        items_ar: "الكيماويات المعملية والصناعية وفق المواصفات",
      },
      {
        sectorSlug: "lubricants-oils",
        title_en: "Lubricants & Oils",
        title_ar: "الزيوت ومواد التشحيم",
        items_en: "Lubricants, oils, greases and metalworking fluids",
        items_ar: "الزيوت ومواد التشحيم والشحوم وسوائل تشغيل المعادن",
      },
      {
        sectorSlug: "government-procurement",
        title_en: "Government & Public-Sector Procurement",
        title_ar: "التوريدات الحكومية والعامة",
        items_en: "Tender- and BOQ-based public-sector procurement",
        items_ar: "توريدات القطاع العام وفق المناقصات وجداول الكميات",
      },
    ],
  },
};
