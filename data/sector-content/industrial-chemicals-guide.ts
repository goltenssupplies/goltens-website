import type { CompactGuidePage } from "@/data/sector-content/compact-guide-page";
import type {
  EquipmentGuideReview,
  EquipmentTypeGuide,
  SectorEquipmentGuide,
  SectorFaq,
  SectorHeroCopy,
} from "@/data/sector-content/types";

/**
 * Industrial & Laboratory Chemicals — a chemical procurement and sourcing
 * guide (use-case matrix, five chemical families, routing to the other
 * GOLTENS sectors, a specified-chemicals-and-equivalents path and a
 * two-part, specification-driven quotation checklist). Rendered in the
 * compact guide layout of `app/[locale]/sectors/[slug]/page.tsx` (see
 * `compact-guide-page.ts`).
 *
 * Content rules (enforced by `scripts/verify-equipment-guides.mjs`):
 * - Families 4 and 5 (water & process treatment; corrosion protection &
 *   coatings) are the two real product categories: one guide per internal
 *   product record, which stays non-public and is never linked — no brand,
 *   standard, numeric specification, image or datasheet reaches the page.
 * - Families 1–3 (laboratory chemicals & reagents; industrial chemicals &
 *   solvents; resins & chemical binders) are sourcing guides only
 *   (`sourcingCategoryIds`): no product category, no product record, no
 *   fixed catalogue — chemicals are sourced against the customer's list and
 *   specification, subject to availability.
 * - No supplier or manufacturer name and no source relationship anywhere.
 *   One alcohol solvent is excluded by policy and never named.
 * - The customer states the chemical, grade, purity, concentration,
 *   packaging and documents required; GOLTENS prepares a quotation. It does
 *   not manufacture, test, formulate, determine dosage or compatibility,
 *   design treatment programmes or coating systems, handle or store
 *   hazardous materials as a service, or guarantee documents.
 * - Equivalents are quoted only where the specification allows them, on
 *   the stated identity, grade, purity, concentration, form and
 *   application — never on the chemical name alone.
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

const DISCLAIMER_EN =
  "GOLTENS prepares a quotation based on the information provided. Chemical selection, dosage, formulation, treatment programmes, compatibility, laboratory methods, coating specification, safe handling and storage, and final technical acceptance remain with the customer or responsible technical party, as applicable.";
const DISCLAIMER_AR =
  "تُعد GOLTENS عرض السعر استنادًا إلى المعلومات المقدمة، بينما يظل اختيار الكيماويات وتحديد الجرعات والتركيبات وبرامج المعالجة والتوافق الكيميائي والطرق المعملية ومواصفات الطلاءات والتداول والتخزين الآمن والقبول الفني النهائي من مسؤولية العميل أو الجهة الفنية المسؤولة، بحسب الحالة.";
const EQUIVALENCE_EN =
  "Final suitability, equivalence and approval remain with the customer, laboratory, consultant or responsible technical party, as applicable.";
const EQUIVALENCE_AR =
  "ويظل تأكيد الملاءمة والتكافؤ والاعتماد النهائي من مسؤولية العميل أو المعمل أو الاستشاري أو الجهة الفنية المسؤولة، بحسب الحالة.";

/**
 * One sourcing / treatment guide. Every guide in this file has the same
 * shape — three applications, three selection factors and a five-item
 * request checklist — so the content stays lean and comparable.
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
export const industrialChemicalsHero: SectorHeroCopy = {
  subtitle_en:
    "GOLTENS supplies laboratory and industrial chemicals according to customer specifications, application requirements and project or procurement needs.",
  subtitle_ar:
    "توفر GOLTENS الكيماويات المعملية والصناعية وفق المواصفات المقدمة من العميل ومتطلبات الاستخدام واحتياجات المشروع أو التوريد.",
  description_en:
    "Laboratory reagents, industrial chemicals, formaldehyde/formalin, resins, water-treatment chemicals and corrosion-protection materials can be sourced according to the stated requirement. Availability, grade and packaging are confirmed during quotation.",
  description_ar:
    "يمكن توفير الكواشف المعملية والكيماويات الصناعية والفورمالدهيد/الفورمالين والراتنجات وكيماويات معالجة المياه ومواد الحماية من التآكل وفق المتطلبات المقدمة. ويتم تأكيد التوافر والدرجة والعبوة أثناء إعداد عرض السعر.",
};

export const industrialChemicalsFaqs: SectorFaq[] = [
  {
    question_en: "What information should I send with a chemical request?",
    answer_en:
      "Send the chemical name, the CAS number if you have it, the intended application, the grade, purity or concentration you require, the quantity and packaging, the delivery location and required date, and your quotation deadline. The checklist on this page lists the information that helps.",
    question_ar: "ما البيانات التي يجب إرسالها مع طلب الكيماويات؟",
    answer_ar:
      "أرسلوا اسم المادة الكيميائية، ورقم CAS إن توفر لديكم، والاستخدام المطلوب، والدرجة أو النقاوة أو التركيز المطلوب، والكمية والعبوة، وموقع التوريد والتاريخ المطلوب، والموعد النهائي لعرض السعر. وتوضح القائمة في هذه الصفحة البيانات المفيدة.",
  },
  {
    question_en: "Can you quote from a chemical list or BOQ?",
    answer_en:
      "Yes. Send the chemical list or BOQ with the grade and quantity for each item. Items are quoted against the stated requirements, and any unclear item is clarified during quotation.",
    question_ar: "هل يمكن إعداد عرض السعر من قائمة كيماويات أو جدول كميات؟",
    answer_ar:
      "نعم، أرسلوا قائمة الكيماويات أو جدول الكميات مع الدرجة والكمية لكل بند. ويتم إعداد عرض السعر وفق المتطلبات المذكورة، مع توضيح أي بند غير واضح أثناء إعداد العرض.",
  },
  {
    question_en: "Do you supply laboratory chemicals and reagents?",
    answer_en:
      "Yes. Laboratory reagents, acids and alkalis, solvents, and buffers and standard solutions can be sourced according to the laboratory's chemical list and the grades it states. Availability and pack sizes are confirmed during quotation.",
    question_ar: "هل توفرون الكيماويات والكواشف المعملية؟",
    answer_ar:
      "نعم، يمكن توفير الكواشف المعملية والأحماض والقلويات والمذيبات والمحاليل المنظمة والقياسية وفق قائمة الكيماويات الخاصة بالمعمل والدرجات التي يحددها. ويتم تأكيد التوافر وأحجام العبوات أثناء إعداد عرض السعر.",
  },
  {
    question_en: "Can you supply formaldehyde/formalin?",
    answer_en:
      "Yes. Formaldehyde / formalin can be sourced according to the concentration, grade and packaging stated in your request. Availability is confirmed during quotation.",
    question_ar: "هل يمكن توفير الفورمالدهيد/الفورمالين؟",
    answer_ar:
      "نعم، يمكن توفير الفورمالدهيد / الفورمالين وفق التركيز والدرجة والعبوة المذكورة في طلبكم، ويتم تأكيد التوافر أثناء إعداد عرض السعر.",
  },
  {
    question_en: "Which grade, purity or concentration will be quoted?",
    answer_en:
      "The grade, purity or concentration stated in your request. Where it is not stated, it is clarified with you during quotation; GOLTENS does not select it on your behalf where a technical decision is required.",
    question_ar: "ما الدرجة أو النقاوة أو التركيز الذي يتم تقديم عرض السعر له؟",
    answer_ar:
      "الدرجة أو النقاوة أو التركيز المذكور في طلبكم. وإذا لم يكن محددًا، يتم توضيحه معكم أثناء إعداد عرض السعر، ولا تحدده GOLTENS نيابةً عنكم عندما يتطلب ذلك قرارًا فنيًا.",
  },
  {
    question_en: "Can equivalent chemicals be supplied?",
    answer_en: `The specified chemical is quoted where it is required. An equivalent is proposed only where your specification allows it, matching the chemical identity, grade, purity, concentration, form and application you state. ${EQUIVALENCE_EN}`,
    question_ar: "هل يمكن توفير كيماويات مكافئة؟",
    answer_ar: `يتم إعداد عرض سعر المادة المحددة عندما تكون مطلوبة، ولا يتم اقتراح بديل مكافئ إلا إذا سمحت المواصفات بذلك، مع مطابقة هوية المادة والدرجة والنقاوة والتركيز والصورة والاستخدام التي تحددونها. ${EQUIVALENCE_AR}`,
  },
  {
    question_en: "Are SDS and other chemical documents available?",
    answer_en:
      "State the documents you need with the quotation or delivery, such as a safety data sheet. Their availability is confirmed for each item during quotation.",
    question_ar: "هل تتوفر نشرات بيانات السلامة والمستندات الأخرى للكيماويات؟",
    answer_ar:
      "اذكروا المستندات التي تحتاجونها مع عرض السعر أو التوريد، مثل نشرة بيانات السلامة، ويتم تأكيد توافرها لكل صنف أثناء إعداد عرض السعر.",
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

const LAB = [
  "universities-teaching-laboratories",
  "research-testing-laboratories",
];
const INDUSTRIAL = ["manufacturing-process-plants", "industrial-facilities"];
const WATER = [
  "water-wastewater-treatment",
  "industrial-facilities",
  "manufacturing-process-plants",
];
const COATINGS = ["industrial-facilities", "manufacturing-process-plants"];

export const industrialChemicalsGuide: SectorEquipmentGuide = {
  heroVisual: "neutral",
  availability_en: "Available on request.",
  availability_ar: "متاح حسب الطلب.",

  intro: {
    eyebrow_en: "Chemical procurement guide",
    eyebrow_ar: "دليل توريد الكيماويات",
    lead_en:
      "Chemical requirements usually arrive as a chemical list, a specification or the name of a product already in use. GOLTENS reviews the information provided, sources the requested chemicals and prepares a quotation.",
    lead_ar:
      "تصل متطلبات الكيماويات عادةً في صورة قائمة كيماويات أو مواصفات أو اسم منتج مستخدم بالفعل. وتراجع GOLTENS البيانات المقدمة، وتوفر الكيماويات المطلوبة، وتُعد عرض السعر.",
    note_en:
      "These guides describe common chemical types and the information needed to quote them — they are not a catalogue of specific products. The customer states the chemical, grade, purity and concentration required.",
    note_ar:
      "توضح هذه الأدلة أنواع الكيماويات الشائعة والبيانات اللازمة لإعداد عروض أسعارها، وليست كتالوجًا لمنتجات محددة. ويحدد العميل المادة والدرجة والنقاوة والتركيز المطلوب.",
  },

  projectsTitle_en: "Choose by Use Case",
  projectsTitle_ar: "اختر حسب الاستخدام",
  projectsIntro_en:
    "Typical chemicals for common use cases. The chemicals, grades and quantities come from your list and specification.",
  projectsIntro_ar:
    "الكيماويات المعتادة لحالات الاستخدام الشائعة، بينما تُحدَّد المواد والدرجات والكميات وفق قائمتكم ومواصفاتكم.",

  industries: [
    {
      id: "universities-teaching-laboratories",
      label_en: "Universities & teaching laboratories",
      label_ar: "الجامعات والمعامل التعليمية",
    },
    {
      id: "research-testing-laboratories",
      label_en: "Research & testing laboratories",
      label_ar: "معامل البحث والتحاليل",
    },
    {
      id: "manufacturing-process-plants",
      label_en: "Manufacturing & process plants",
      label_ar: "مصانع التصنيع والعمليات",
    },
    {
      id: "water-wastewater-treatment",
      label_en: "Water & wastewater treatment",
      label_ar: "معالجة المياه والصرف",
    },
    {
      id: "industrial-facilities",
      label_en: "Industrial facilities",
      label_ar: "المنشآت الصناعية",
    },
  ],

  projects: [
    {
      id: "university-teaching-laboratories",
      title_en: "University Teaching Laboratories",
      title_ar: "معامل التدريس الجامعية",
      description_en:
        "Laboratory reagents, acids and alkalis, solvents, buffers and standards.",
      description_ar:
        "الكواشف المعملية والأحماض والقلويات والمذيبات والمحاليل المنظمة والقياسية.",
      equipmentIds: [
        "laboratory-reagents",
        "laboratory-acids-alkalis",
        "laboratory-solvents",
        "buffers-standard-solutions",
        "university-research-laboratory-chemicals",
      ],
      review: pending("use-case context only"),
    },
    {
      id: "research-testing-laboratories",
      title_en: "Research & Testing Laboratories",
      title_ar: "معامل البحث والتحاليل",
      description_en:
        "Laboratory chemicals and reagents according to the laboratory's specification.",
      description_ar: "الكيماويات والكواشف المعملية وفق مواصفات المعمل.",
      equipmentIds: [
        "laboratory-reagents",
        "laboratory-solvents",
        "buffers-standard-solutions",
        "university-research-laboratory-chemicals",
      ],
      review: pending("use-case context only"),
    },
    {
      id: "industrial-manufacturing-process",
      title_en: "Industrial Manufacturing & Process Applications",
      title_ar: "التصنيع والعمليات الصناعية",
      description_en:
        "Industrial chemicals, formaldehyde/formalin, solvents and process chemicals.",
      description_ar:
        "الكيماويات الصناعية والفورمالدهيد/الفورمالين والمذيبات وكيماويات العمليات.",
      equipmentIds: [
        "formaldehyde-formalin",
        "industrial-acids-alkalis",
        "industrial-solvents",
        "process-chemicals",
      ],
      review: pending("use-case context only"),
    },
    {
      id: "resin-binder-material-applications",
      title_en: "Resin, Binder & Material Applications",
      title_ar: "تطبيقات الراتنجات والمواد الرابطة",
      description_en:
        "Urea-formaldehyde, melamine-formaldehyde, MUF and phenolic resins.",
      description_ar:
        "راتنجات اليوريا فورمالدهيد والميلامين فورمالدهيد وMUF والراتنجات الفينولية.",
      equipmentIds: [
        "urea-formaldehyde-resins",
        "melamine-formaldehyde-resins",
        "melamine-urea-formaldehyde-resins",
        "phenolic-resins",
        "resin-binder-materials-by-specification",
      ],
      review: pending("use-case context only"),
    },
    {
      id: "boiler-steam-systems",
      title_en: "Boiler & Steam Systems",
      title_ar: "الغلايات وأنظمة البخار",
      description_en:
        "Boiler-water treatment chemicals and related treatment materials.",
      description_ar:
        "كيماويات معالجة مياه الغلايات ومواد المعالجة المرتبطة بها.",
      equipmentIds: [
        "boiler-water-treatment",
        "ph-adjustment",
        "corrosion-inhibition",
      ],
      review: pending("use-case context only"),
    },
    {
      id: "cooling-towers-chilled-water",
      title_en: "Cooling Towers & Chilled-Water Loops",
      title_ar: "أبراج التبريد ودوائر المياه المبردة",
      description_en:
        "Cooling-water treatment and corrosion-control chemicals.",
      description_ar: "كيماويات معالجة مياه التبريد والتحكم في التآكل.",
      equipmentIds: ["cooling-water-treatment", "corrosion-inhibition"],
      review: pending("use-case context only"),
    },
    {
      id: "wastewater-effluent-treatment",
      title_en: "Wastewater & Effluent Treatment",
      title_ar: "معالجة مياه الصرف والمخلفات السائلة",
      description_en:
        "Wastewater treatment chemicals, flocculants and coagulants, and pH adjustment.",
      description_ar:
        "كيماويات معالجة مياه الصرف ومواد الترويب والتخثير وضبط الأس الهيدروجيني.",
      equipmentIds: [
        "wastewater-treatment",
        "flocculants-and-coagulants",
        "ph-adjustment",
      ],
      review: pending("use-case context only"),
    },
    {
      id: "corrosion-protection-industrial-coatings",
      title_en: "Corrosion Protection & Industrial Coatings",
      title_ar: "الحماية من التآكل والطلاءات الصناعية",
      description_en:
        "Corrosion inhibitors, protective coatings, epoxy coatings and rust preventives.",
      description_ar:
        "مثبطات التآكل والطلاءات الواقية والطلاءات الإيبوكسية ومواد الحماية من الصدأ.",
      equipmentIds: [
        "corrosion-inhibition",
        "anti-corrosion-coating-systems",
        "protective-paints",
        "epoxy-coatings",
        "rust-prevention",
      ],
      review: pending("use-case context only"),
    },
    {
      id: "chemical-procurement-by-specification",
      title_en: "Chemical Procurement by Specification",
      title_ar: "توريد الكيماويات حسب المواصفة",
      description_en:
        "Multi-item chemical requirements submitted by the customer.",
      description_ar: "طلبات الكيماويات متعددة البنود المقدمة من العميل.",
      equipmentIds: [
        "university-research-laboratory-chemicals",
        "industrial-chemicals-by-specification",
        "resin-binder-materials-by-specification",
      ],
      review: pending("list-driven; no selection by GOLTENS"),
    },
    {
      id: "items-outside-families",
      title_en: "Items Outside These Families",
      title_ar: "أصناف خارج هذه المجموعات",
      description_en:
        "Requirements covered by other GOLTENS sectors can be included in the same request.",
      description_ar:
        "يمكن إدراج المتطلبات التي تغطيها قطاعات GOLTENS الأخرى ضمن الطلب نفسه.",
      equipmentIds: [],
      review: pending("routing row — links to the routing block"),
    },
  ],

  categories: [
    {
      categoryId: "laboratory-chemicals-reagents",
      title_en: "Laboratory Chemicals & Reagents",
      title_ar: "الكيماويات والكواشف المعملية",
      intro_en:
        "Laboratory chemicals sourced according to the laboratory's chemical list and stated grades.",
      intro_ar:
        "كيماويات معملية يتم توفيرها وفق قائمة كيماويات المعمل والدرجات المحددة.",
      icon: "GraduationCap",
      equipment: [
        guide({
          id: "laboratory-reagents",
          name_en: "Laboratory Reagents",
          name_ar: "الكواشف المعملية",
          summary_en:
            "Reagents for teaching, research and routine laboratory work.",
          summary_ar: "كواشف لأعمال التدريس والبحث والعمل المعملي الروتيني.",
          whatItIs_en:
            "Laboratory reagents identified by chemical name and the grade stated by the customer, sourced according to the laboratory's list.",
          whatItIs_ar:
            "كواشف معملية تُحدد باسم المادة والدرجة التي يذكرها العميل، ويتم توفيرها وفق قائمة المعمل.",
          usedFor_en:
            "Teaching experiments, research work and routine laboratory analysis.",
          usedFor_ar:
            "تجارب التدريس والأعمال البحثية والتحاليل المعملية الروتينية.",
          applications_en: [
            "Teaching laboratory experiments",
            "Research and development work",
            "Routine analysis in testing laboratories",
          ],
          applications_ar: [
            "تجارب معامل التدريس",
            "أعمال البحث والتطوير",
            "التحاليل الروتينية في معامل التحاليل",
          ],
          industryIds: LAB,
          selectionFactors: [
            {
              factor_en: "Chemical identity",
              factor_ar: "هوية المادة",
              detail_en:
                "Chemical name, and CAS number where the customer provides it.",
              detail_ar: "اسم المادة، ورقم CAS إذا قدمه العميل.",
            },
            {
              factor_en: "Grade",
              factor_ar: "الدرجة",
              detail_en: "The grade stated by the customer or the laboratory.",
              detail_ar: "الدرجة التي يحددها العميل أو المعمل.",
            },
            {
              factor_en: "Pack size",
              factor_ar: "حجم العبوة",
              detail_en: "The container size stated in the request.",
              detail_ar: "حجم العبوة المذكور في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Chemical name or list reference",
            "Grade, as stated by the laboratory",
            "Pack size and quantity",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "اسم المادة أو مرجع القائمة",
            "الدرجة التي يحددها المعمل",
            "حجم العبوة والكمية",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "laboratory-acids-alkalis",
            "buffers-standard-solutions",
          ],
          note: "sourcing guide — no product record; grades stated by the customer",
        }),
        guide({
          id: "laboratory-acids-alkalis",
          name_en: "Laboratory Acids & Alkalis",
          name_ar: "الأحماض والقلويات المعملية",
          summary_en:
            "Acids and alkalis in laboratory grades for teaching, research and analysis.",
          summary_ar:
            "أحماض وقلويات بدرجات معملية لأغراض التدريس والبحث والتحاليل.",
          whatItIs_en:
            "Mineral and organic acids and alkalis supplied in the laboratory grade and concentration stated by the customer.",
          whatItIs_ar:
            "أحماض وقلويات معدنية وعضوية يتم توفيرها بالدرجة المعملية والتركيز الذي يحدده العميل.",
          usedFor_en:
            "Sample preparation, titrations and teaching experiments defined by the laboratory.",
          usedFor_ar:
            "تحضير العينات والمعايرات وتجارب التدريس التي يحددها المعمل.",
          applications_en: [
            "Teaching and practical sessions",
            "Sample preparation",
            "Analytical procedures set by the laboratory",
          ],
          applications_ar: [
            "الحصص العملية والتدريس",
            "تحضير العينات",
            "الإجراءات التحليلية التي يحددها المعمل",
          ],
          industryIds: LAB,
          selectionFactors: [
            {
              factor_en: "Chemical",
              factor_ar: "المادة",
              detail_en: "The acid or alkali named by the customer.",
              detail_ar: "الحمض أو القلوي الذي يحدده العميل.",
            },
            {
              factor_en: "Grade and concentration",
              factor_ar: "الدرجة والتركيز",
              detail_en: "As stated in the request.",
              detail_ar: "وفق ما يرد في الطلب.",
            },
            {
              factor_en: "Container",
              factor_ar: "العبوة",
              detail_en: "Pack size and container type stated by the customer.",
              detail_ar: "حجم العبوة ونوعها كما يحددهما العميل.",
            },
          ],
          requestChecklist_en: [
            "Chemical name or list reference",
            "Grade and concentration, as stated",
            "Pack size and quantity",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "اسم المادة أو مرجع القائمة",
            "الدرجة والتركيز كما هو محدد",
            "حجم العبوة والكمية",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "laboratory-reagents",
            "industrial-acids-alkalis",
          ],
          note: "sourcing guide — no product record; concentration stated by the customer",
        }),
        guide({
          id: "laboratory-solvents",
          name_en: "Laboratory Solvents",
          name_ar: "المذيبات المعملية",
          summary_en:
            "Laboratory solvents for extraction, analysis and teaching work.",
          summary_ar: "مذيبات معملية لأعمال الاستخلاص والتحاليل والتدريس.",
          whatItIs_en:
            "Organic solvents supplied in the laboratory grade stated by the customer for the intended method.",
          whatItIs_ar:
            "مذيبات عضوية يتم توفيرها بالدرجة المعملية التي يحددها العميل للطريقة المطلوبة.",
          usedFor_en:
            "Extraction, dilution, cleaning and analytical work defined by the laboratory.",
          usedFor_ar:
            "الاستخلاص والتخفيف والتنظيف والأعمال التحليلية التي يحددها المعمل.",
          applications_en: [
            "Extraction and sample preparation",
            "Analytical work defined by the laboratory",
            "Teaching laboratory use",
          ],
          applications_ar: [
            "الاستخلاص وتحضير العينات",
            "الأعمال التحليلية التي يحددها المعمل",
            "الاستخدام في معامل التدريس",
          ],
          industryIds: LAB,
          selectionFactors: [
            {
              factor_en: "Solvent",
              factor_ar: "المذيب",
              detail_en: "Named by the customer.",
              detail_ar: "يحدده العميل.",
            },
            {
              factor_en: "Grade",
              factor_ar: "الدرجة",
              detail_en: "The grade stated for the laboratory method.",
              detail_ar: "الدرجة المحددة للطريقة المعملية.",
            },
            {
              factor_en: "Pack size",
              factor_ar: "حجم العبوة",
              detail_en: "As stated in the request.",
              detail_ar: "وفق ما يرد في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Solvent name or list reference",
            "Grade, as stated by the laboratory",
            "Pack size and quantity",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "اسم المذيب أو مرجع القائمة",
            "الدرجة التي يحددها المعمل",
            "حجم العبوة والكمية",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["laboratory-reagents", "industrial-solvents"],
          note: "sourcing guide — no product record; no specific solvent named",
        }),
        guide({
          id: "buffers-standard-solutions",
          name_en: "Buffers & Standard Solutions",
          name_ar: "المحاليل المنظمة والمحاليل القياسية",
          summary_en:
            "Buffer and standard solutions used in calibration and analytical work.",
          summary_ar:
            "محاليل منظمة ومحاليل قياسية للمعايرة والأعمال التحليلية.",
          whatItIs_en:
            "Ready-made buffer and standard solutions supplied to the value, concentration and grade stated by the customer.",
          whatItIs_ar:
            "محاليل منظمة وقياسية جاهزة يتم توفيرها وفق القيمة والتركيز والدرجة التي يحددها العميل.",
          usedFor_en:
            "Instrument calibration, pH measurement and analytical procedures defined by the laboratory.",
          usedFor_ar:
            "معايرة الأجهزة وقياس الأس الهيدروجيني والإجراءات التحليلية التي يحددها المعمل.",
          applications_en: [
            "pH meter calibration",
            "Analytical reference solutions",
            "Teaching laboratory practicals",
          ],
          applications_ar: [
            "معايرة أجهزة قياس الأس الهيدروجيني",
            "المحاليل المرجعية للتحاليل",
            "التجارب العملية في معامل التدريس",
          ],
          industryIds: LAB,
          selectionFactors: [
            {
              factor_en: "Solution type",
              factor_ar: "نوع المحلول",
              detail_en: "Buffer or standard solution, as named.",
              detail_ar: "محلول منظم أو قياسي، وفق ما يحدده العميل.",
            },
            {
              factor_en: "Value or concentration",
              factor_ar: "القيمة أو التركيز",
              detail_en: "As stated by the customer.",
              detail_ar: "وفق ما يحدده العميل.",
            },
            {
              factor_en: "Pack size",
              factor_ar: "حجم العبوة",
              detail_en: "As stated in the request.",
              detail_ar: "وفق ما يرد في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Solution name or list reference",
            "Value or concentration, as stated",
            "Pack size and quantity",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "اسم المحلول أو مرجع القائمة",
            "القيمة أو التركيز كما هو محدد",
            "حجم العبوة والكمية",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["laboratory-reagents"],
          note: "sourcing guide — no product record; values stated by the customer",
        }),
        guide({
          id: "university-research-laboratory-chemicals",
          name_en: "University & Research Laboratory Chemicals",
          name_ar: "كيماويات معامل الجامعات والبحث العلمي",
          summary_en:
            "Multi-item chemical lists for university and research laboratories.",
          summary_ar:
            "قوائم كيماويات متعددة البنود لمعامل الجامعات والبحث العلمي.",
          whatItIs_en:
            "Mixed laboratory chemical requirements — reagents, acids, solvents and solutions — quoted together from the list provided by the university or research laboratory.",
          whatItIs_ar:
            "متطلبات كيماويات معملية متنوعة — كواشف وأحماض ومذيبات ومحاليل — يتم إعداد عرض سعرها معًا وفق القائمة المقدمة من الجامعة أو معمل البحث.",
          usedFor_en:
            "Teaching departments, research groups and central laboratories.",
          usedFor_ar: "الأقسام التعليمية ومجموعات البحث والمعامل المركزية.",
          applications_en: [
            "Departmental and teaching laboratory lists",
            "Research project requirements",
            "Central laboratory requirements",
          ],
          applications_ar: [
            "قوائم الأقسام ومعامل التدريس",
            "متطلبات المشروعات البحثية",
            "متطلبات المعامل المركزية",
          ],
          industryIds: LAB,
          selectionFactors: [
            {
              factor_en: "List format",
              factor_ar: "صيغة القائمة",
              detail_en: "Chemical list or BOQ with names and grades.",
              detail_ar: "قائمة كيماويات أو جدول كميات بالأسماء والدرجات.",
            },
            {
              factor_en: "Grades",
              factor_ar: "الدرجات",
              detail_en: "As stated for each item.",
              detail_ar: "وفق ما يرد لكل بند.",
            },
            {
              factor_en: "Delivery",
              factor_ar: "التوريد",
              detail_en: "Delivery location within the campus or facility.",
              detail_ar: "موقع التوريد داخل الحرم الجامعي أو المنشأة.",
            },
          ],
          requestChecklist_en: [
            "Chemical list or BOQ",
            "Grade and quantity per item",
            "Pack sizes",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "قائمة الكيماويات أو جدول الكميات",
            "الدرجة والكمية لكل بند",
            "أحجام العبوات",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["laboratory-reagents", "laboratory-solvents"],
          note: "sourcing guide — list-driven; no named customers",
        }),
      ],
    },
    {
      categoryId: "industrial-chemicals-solvents",
      title_en: "Industrial Chemicals & Solvents",
      title_ar: "الكيماويات والمذيبات الصناعية",
      intro_en:
        "Industrial chemicals sourced according to the grade, concentration and packaging you specify.",
      intro_ar:
        "كيماويات صناعية يتم توفيرها وفق الدرجة والتركيز والعبوة التي تحددونها.",
      icon: "Factory",
      equipment: [
        guide({
          id: "formaldehyde-formalin",
          name_en: "Formaldehyde / Formalin",
          name_ar: "الفورمالدهيد / الفورمالين",
          summary_en:
            "Formaldehyde solution (formalin) for industrial and laboratory use.",
          summary_ar:
            "محلول الفورمالدهيد (الفورمالين) للاستخدامات الصناعية والمعملية.",
          whatItIs_en:
            "Formaldehyde in aqueous solution, commonly known as formalin, sourced according to the concentration, grade and packaging stated by the customer.",
          whatItIs_ar:
            "الفورمالدهيد في صورة محلول مائي، والمعروف بالفورمالين، ويتم توفيره وفق التركيز والدرجة والعبوة التي يحددها العميل.",
          usedFor_en:
            "Resin production, industrial processes, and laboratory and preservation uses defined by the customer.",
          usedFor_ar:
            "إنتاج الراتنجات والعمليات الصناعية والاستخدامات المعملية واستخدامات الحفظ التي يحددها العميل.",
          applications_en: [
            "Resin and binder production",
            "Industrial process use",
            "Laboratory and preservation uses",
          ],
          applications_ar: [
            "إنتاج الراتنجات والمواد الرابطة",
            "الاستخدام في العمليات الصناعية",
            "الاستخدامات المعملية واستخدامات الحفظ",
          ],
          industryIds: [...INDUSTRIAL, "research-testing-laboratories"],
          selectionFactors: [
            {
              factor_en: "Concentration",
              factor_ar: "التركيز",
              detail_en: "As stated by the customer.",
              detail_ar: "وفق ما يحدده العميل.",
            },
            {
              factor_en: "Grade",
              factor_ar: "الدرجة",
              detail_en: "Industrial or laboratory grade, as specified.",
              detail_ar: "درجة صناعية أو معملية، وفق المواصفات.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "Drums, containers or bulk, as requested.",
              detail_ar: "براميل أو عبوات أو سائب، حسب الطلب.",
            },
          ],
          requestChecklist_en: [
            "Concentration and grade, as stated",
            "Intended application",
            "Quantity and packaging",
            "Documents required, including SDS if applicable",
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "التركيز والدرجة كما هو محدد",
            "الاستخدام المطلوب",
            "الكمية والعبوة",
            "المستندات المطلوبة، بما فيها نشرة بيانات السلامة عند الحاجة",
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "urea-formaldehyde-resins",
            "industrial-acids-alkalis",
          ],
          note: "sourcing guide — no concentration, grade or packaging claimed",
        }),
        guide({
          id: "industrial-acids-alkalis",
          name_en: "Industrial Acids & Alkalis",
          name_ar: "الأحماض والقلويات الصناعية",
          summary_en:
            "Acids and alkalis for industrial processes, cleaning and neutralization.",
          summary_ar: "أحماض وقلويات للعمليات الصناعية والتنظيف والمعادلة.",
          whatItIs_en:
            "Industrial-grade acids and alkalis supplied in the concentration and packaging stated by the customer.",
          whatItIs_ar:
            "أحماض وقلويات بدرجة صناعية يتم توفيرها بالتركيز والعبوة التي يحددها العميل.",
          usedFor_en:
            "Process use, equipment cleaning, neutralization and pH correction.",
          usedFor_ar:
            "الاستخدام في العمليات وتنظيف المعدات والمعادلة وضبط الأس الهيدروجيني.",
          applications_en: [
            "Process and production use",
            "Equipment and system cleaning",
            "Neutralization",
          ],
          applications_ar: [
            "الاستخدام في العمليات والإنتاج",
            "تنظيف المعدات والأنظمة",
            "المعادلة",
          ],
          industryIds: INDUSTRIAL,
          selectionFactors: [
            {
              factor_en: "Chemical",
              factor_ar: "المادة",
              detail_en: "The acid or alkali named by the customer.",
              detail_ar: "الحمض أو القلوي الذي يحدده العميل.",
            },
            {
              factor_en: "Concentration",
              factor_ar: "التركيز",
              detail_en: "As stated in the request.",
              detail_ar: "وفق ما يرد في الطلب.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "Drums, containers or bulk, as requested.",
              detail_ar: "براميل أو عبوات أو سائب، حسب الطلب.",
            },
          ],
          requestChecklist_en: [
            "Chemical name and concentration",
            "Intended application",
            "Quantity and packaging",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "اسم المادة والتركيز",
            "الاستخدام المطلوب",
            "الكمية والعبوة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["ph-adjustment", "laboratory-acids-alkalis"],
          note: "sourcing guide — no product record",
        }),
        guide({
          id: "industrial-solvents",
          name_en: "Industrial Solvents",
          name_ar: "المذيبات الصناعية",
          summary_en:
            "Industrial solvents for cleaning, dilution and process applications.",
          summary_ar: "مذيبات صناعية للتنظيف والتخفيف واستخدامات العمليات.",
          whatItIs_en:
            "Industrial solvents identified by chemical name and grade, supplied according to the customer's specification.",
          whatItIs_ar:
            "مذيبات صناعية تُحدد باسم المادة والدرجة، ويتم توفيرها وفق مواصفات العميل.",
          usedFor_en:
            "Cleaning and degreasing, dilution and process applications.",
          usedFor_ar: "التنظيف وإزالة الشحوم والتخفيف واستخدامات العمليات.",
          applications_en: [
            "Cleaning and degreasing",
            "Dilution and thinning",
            "Process applications",
          ],
          applications_ar: [
            "التنظيف وإزالة الشحوم",
            "التخفيف",
            "استخدامات العمليات",
          ],
          industryIds: INDUSTRIAL,
          selectionFactors: [
            {
              factor_en: "Solvent",
              factor_ar: "المذيب",
              detail_en: "Named by the customer.",
              detail_ar: "يحدده العميل.",
            },
            {
              factor_en: "Grade",
              factor_ar: "الدرجة",
              detail_en: "As specified.",
              detail_ar: "وفق المواصفات.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "Drums, containers or bulk, as requested.",
              detail_ar: "براميل أو عبوات أو سائب، حسب الطلب.",
            },
          ],
          requestChecklist_en: [
            "Solvent name and grade",
            "Intended application",
            "Quantity and packaging",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "اسم المذيب والدرجة",
            "الاستخدام المطلوب",
            "الكمية والعبوة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["laboratory-solvents", "process-chemicals"],
          note: "sourcing guide — no product record; no specific solvent named",
        }),
        guide({
          id: "process-chemicals",
          name_en: "Process Chemicals",
          name_ar: "كيماويات العمليات",
          summary_en:
            "Process chemicals for manufacturing and production applications.",
          summary_ar: "كيماويات العمليات لاستخدامات التصنيع والإنتاج.",
          whatItIs_en:
            "Chemicals used in manufacturing and production processes, identified by name, grade and form in the customer's specification.",
          whatItIs_ar:
            "كيماويات تُستخدم في عمليات التصنيع والإنتاج، وتُحدد بالاسم والدرجة والصورة الواردة في مواصفات العميل.",
          usedFor_en:
            "Manufacturing, production and plant process applications.",
          usedFor_ar: "استخدامات التصنيع والإنتاج وعمليات المصانع.",
          applications_en: [
            "Manufacturing processes",
            "Production plant consumables",
            "Raw materials for downstream processes",
          ],
          applications_ar: [
            "عمليات التصنيع",
            "مستهلكات مصانع الإنتاج",
            "مواد خام للعمليات اللاحقة",
          ],
          industryIds: INDUSTRIAL,
          selectionFactors: [
            {
              factor_en: "Chemical identity",
              factor_ar: "هوية المادة",
              detail_en: "Name, and CAS number where the customer provides it.",
              detail_ar: "الاسم، ورقم CAS إذا قدمه العميل.",
            },
            {
              factor_en: "Grade and form",
              factor_ar: "الدرجة والصورة",
              detail_en: "Liquid, powder or other form, as specified.",
              detail_ar: "سائل أو بودرة أو صورة أخرى، وفق المواصفات.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "As stated in the request.",
              detail_ar: "وفق ما يرد في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Chemical name and grade",
            "Form and packaging",
            "Quantity per delivery",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "اسم المادة والدرجة",
            "الصورة والعبوة",
            "الكمية لكل توريد",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "industrial-solvents",
            "industrial-chemicals-by-specification",
          ],
          note: "sourcing guide — no product record",
        }),
        guide({
          id: "industrial-chemicals-by-specification",
          name_en: "Industrial Chemicals by Specification",
          name_ar: "كيماويات صناعية حسب المواصفة",
          summary_en:
            "Industrial chemicals sourced against a customer specification or chemical list.",
          summary_ar:
            "كيماويات صناعية يتم توفيرها وفق مواصفات العميل أو قائمة الكيماويات.",
          whatItIs_en:
            "Chemicals not listed in this guide, sourced according to the name, grade, concentration and packaging in the customer's specification, subject to availability.",
          whatItIs_ar:
            "كيماويات غير مذكورة في هذا الدليل، يتم توفيرها وفق الاسم والدرجة والتركيز والعبوة الواردة في مواصفات العميل، وحسب التوافر.",
          usedFor_en:
            "Specific or less common industrial chemical requirements.",
          usedFor_ar: "متطلبات الكيماويات الصناعية المحددة أو الأقل شيوعًا.",
          applications_en: [
            "Chemicals named in a specification",
            "Multi-item chemical lists",
            "Repeat supply of a chemical currently in use",
          ],
          applications_ar: [
            "كيماويات محددة في المواصفات",
            "قوائم كيماويات متعددة البنود",
            "إعادة توريد مادة مستخدمة حاليًا",
          ],
          industryIds: INDUSTRIAL,
          selectionFactors: [
            {
              factor_en: "Specification",
              factor_ar: "المواصفات",
              detail_en: "The customer's specification or product data.",
              detail_ar: "مواصفات العميل أو بيانات المنتج.",
            },
            {
              factor_en: "Grade and concentration",
              factor_ar: "الدرجة والتركيز",
              detail_en: "As stated by the customer.",
              detail_ar: "وفق ما يحدده العميل.",
            },
            {
              factor_en: "Equivalents",
              factor_ar: "البدائل المكافئة",
              detail_en: "Whether the specification permits an equivalent.",
              detail_ar: "ما إذا كانت المواصفات تسمح ببديل مكافئ.",
            },
          ],
          requestChecklist_en: [
            "Specification or chemical list",
            "Grade and concentration, as stated",
            "Quantity and packaging",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو قائمة الكيماويات",
            "الدرجة والتركيز كما هو محدد",
            "الكمية والعبوة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["process-chemicals"],
          note: "sourcing guide — subject to availability",
        }),
      ],
    },
    {
      categoryId: "resins-chemical-binders",
      title_en: "Resins & Chemical Binders",
      title_ar: "الراتنجات والمواد الرابطة",
      intro_en:
        "Resins and binder materials sourced according to the type and form you specify.",
      intro_ar:
        "راتنجات ومواد رابطة يتم توفيرها وفق النوع والصورة التي تحددونها.",
      icon: "Container",
      equipment: [
        guide({
          id: "urea-formaldehyde-resins",
          name_en: "Urea-Formaldehyde Resins",
          name_ar: "راتنجات اليوريا فورمالدهيد",
          summary_en:
            "Urea-formaldehyde resins for wood-based panels and binder applications.",
          summary_ar:
            "راتنجات اليوريا فورمالدهيد للألواح الخشبية المصنعة واستخدامات المواد الرابطة.",
          whatItIs_en:
            "Urea-formaldehyde resins supplied in the form and specification stated by the customer.",
          whatItIs_ar:
            "راتنجات اليوريا فورمالدهيد يتم توفيرها بالصورة والمواصفات التي يحددها العميل.",
          usedFor_en: "Wood-based panels, adhesives and binder applications.",
          usedFor_ar:
            "الألواح الخشبية المصنعة والمواد اللاصقة واستخدامات المواد الرابطة.",
          applications_en: [
            "Wood-based panel production",
            "Adhesive and binder applications",
            "Other resin applications defined by the customer",
          ],
          applications_ar: [
            "إنتاج الألواح الخشبية المصنعة",
            "استخدامات المواد اللاصقة والرابطة",
            "استخدامات أخرى للراتنج يحددها العميل",
          ],
          industryIds: INDUSTRIAL,
          selectionFactors: [
            {
              factor_en: "Resin type",
              factor_ar: "نوع الراتنج",
              detail_en: "As specified by the customer.",
              detail_ar: "وفق ما يحدده العميل.",
            },
            {
              factor_en: "Form",
              factor_ar: "الصورة",
              detail_en: "Liquid or powder, as stated.",
              detail_ar: "سائل أو بودرة، وفق ما يرد في الطلب.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "As stated in the request.",
              detail_ar: "وفق ما يرد في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Resin type and specification",
            "Form and packaging",
            "Quantity per delivery",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الراتنج والمواصفات",
            "الصورة والعبوة",
            "الكمية لكل توريد",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "melamine-urea-formaldehyde-resins",
            "formaldehyde-formalin",
          ],
          note: "sourcing guide — no product record",
        }),
        guide({
          id: "melamine-formaldehyde-resins",
          name_en: "Melamine-Formaldehyde Resins",
          name_ar: "راتنجات الميلامين فورمالدهيد",
          summary_en:
            "Melamine-formaldehyde resins for laminates, coatings and moulding applications.",
          summary_ar:
            "راتنجات الميلامين فورمالدهيد للرقائق والطلاءات واستخدامات القولبة.",
          whatItIs_en:
            "Melamine-formaldehyde resins supplied in the form and specification stated by the customer.",
          whatItIs_ar:
            "راتنجات الميلامين فورمالدهيد يتم توفيرها بالصورة والمواصفات التي يحددها العميل.",
          usedFor_en: "Laminates, surface coatings and moulding compounds.",
          usedFor_ar: "الرقائق وطلاءات الأسطح ومركبات القولبة.",
          applications_en: [
            "Decorative laminates and surfaces",
            "Coating applications",
            "Moulding applications",
          ],
          applications_ar: [
            "الرقائق والأسطح الديكورية",
            "استخدامات الطلاء",
            "استخدامات القولبة",
          ],
          industryIds: INDUSTRIAL,
          selectionFactors: [
            {
              factor_en: "Resin type",
              factor_ar: "نوع الراتنج",
              detail_en: "As specified by the customer.",
              detail_ar: "وفق ما يحدده العميل.",
            },
            {
              factor_en: "Form",
              factor_ar: "الصورة",
              detail_en: "Liquid or powder, as stated.",
              detail_ar: "سائل أو بودرة، وفق ما يرد في الطلب.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "As stated in the request.",
              detail_ar: "وفق ما يرد في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Resin type and specification",
            "Form and packaging",
            "Quantity per delivery",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الراتنج والمواصفات",
            "الصورة والعبوة",
            "الكمية لكل توريد",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["melamine-urea-formaldehyde-resins"],
          note: "sourcing guide — no product record",
        }),
        guide({
          id: "melamine-urea-formaldehyde-resins",
          name_en: "Melamine-Urea-Formaldehyde (MUF)",
          name_ar: "راتنجات الميلامين يوريا فورمالدهيد (MUF)",
          summary_en:
            "MUF resins for wood-based panels and binder applications where specified.",
          summary_ar:
            "راتنجات MUF للألواح الخشبية المصنعة واستخدامات المواد الرابطة عند تحديدها.",
          whatItIs_en:
            "Melamine-urea-formaldehyde resins supplied to the type and form stated in the customer's specification.",
          whatItIs_ar:
            "راتنجات الميلامين يوريا فورمالدهيد يتم توفيرها وفق النوع والصورة الواردة في مواصفات العميل.",
          usedFor_en:
            "Wood-based panels and binder applications that call for a MUF resin.",
          usedFor_ar:
            "الألواح الخشبية المصنعة واستخدامات المواد الرابطة التي تتطلب راتنج MUF.",
          applications_en: [
            "Wood-based panel production",
            "Binder applications",
            "Applications specified by the customer",
          ],
          applications_ar: [
            "إنتاج الألواح الخشبية المصنعة",
            "استخدامات المواد الرابطة",
            "استخدامات يحددها العميل",
          ],
          industryIds: INDUSTRIAL,
          selectionFactors: [
            {
              factor_en: "Resin type",
              factor_ar: "نوع الراتنج",
              detail_en: "As specified by the customer.",
              detail_ar: "وفق ما يحدده العميل.",
            },
            {
              factor_en: "Form",
              factor_ar: "الصورة",
              detail_en: "Liquid or powder, as stated.",
              detail_ar: "سائل أو بودرة، وفق ما يرد في الطلب.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "As stated in the request.",
              detail_ar: "وفق ما يرد في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Resin type and specification",
            "Form and packaging",
            "Quantity per delivery",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الراتنج والمواصفات",
            "الصورة والعبوة",
            "الكمية لكل توريد",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "urea-formaldehyde-resins",
            "melamine-formaldehyde-resins",
          ],
          note: "sourcing guide — no product record",
        }),
        guide({
          id: "phenolic-resins",
          name_en: "Phenolic Resins",
          name_ar: "الراتنجات الفينولية",
          summary_en:
            "Phenolic resins for binder, laminate and moulding applications.",
          summary_ar:
            "راتنجات فينولية لاستخدامات المواد الرابطة والرقائق والقولبة.",
          whatItIs_en:
            "Phenolic resins supplied in the type and form stated by the customer.",
          whatItIs_ar:
            "راتنجات فينولية يتم توفيرها بالنوع والصورة التي يحددها العميل.",
          usedFor_en: "Binders, laminates, moulding and bonding applications.",
          usedFor_ar: "المواد الرابطة والرقائق والقولبة واستخدامات اللصق.",
          applications_en: [
            "Binder applications",
            "Laminates",
            "Moulding and bonding applications",
          ],
          applications_ar: [
            "استخدامات المواد الرابطة",
            "الرقائق",
            "استخدامات القولبة واللصق",
          ],
          industryIds: INDUSTRIAL,
          selectionFactors: [
            {
              factor_en: "Resin type",
              factor_ar: "نوع الراتنج",
              detail_en: "As specified by the customer.",
              detail_ar: "وفق ما يحدده العميل.",
            },
            {
              factor_en: "Form",
              factor_ar: "الصورة",
              detail_en: "Liquid, powder or other form, as stated.",
              detail_ar: "سائل أو بودرة أو صورة أخرى، وفق ما يرد في الطلب.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "As stated in the request.",
              detail_ar: "وفق ما يرد في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Resin type and specification",
            "Form and packaging",
            "Quantity per delivery",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الراتنج والمواصفات",
            "الصورة والعبوة",
            "الكمية لكل توريد",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["resin-binder-materials-by-specification"],
          note: "sourcing guide — no product record",
        }),
        guide({
          id: "resin-binder-materials-by-specification",
          name_en: "Resin & Binder Materials by Specification",
          name_ar: "الراتنجات والمواد الرابطة حسب المواصفة",
          summary_en:
            "Other resins and binder materials sourced against a customer specification.",
          summary_ar:
            "راتنجات ومواد رابطة أخرى يتم توفيرها وفق مواصفات العميل.",
          whatItIs_en:
            "Resin and binder materials not listed here, sourced according to the type, form and specification stated by the customer, subject to availability.",
          whatItIs_ar:
            "راتنجات ومواد رابطة غير مذكورة هنا، يتم توفيرها وفق النوع والصورة والمواصفات التي يحددها العميل، وحسب التوافر.",
          usedFor_en: "Specific resin or binder requirements.",
          usedFor_ar: "متطلبات الراتنجات أو المواد الرابطة المحددة.",
          applications_en: [
            "Resins named in a specification",
            "Binder materials for production",
            "Repeat supply of a resin currently in use",
          ],
          applications_ar: [
            "راتنجات محددة في المواصفات",
            "مواد رابطة للإنتاج",
            "إعادة توريد راتنج مستخدم حاليًا",
          ],
          industryIds: INDUSTRIAL,
          selectionFactors: [
            {
              factor_en: "Specification",
              factor_ar: "المواصفات",
              detail_en: "The customer's specification or product data.",
              detail_ar: "مواصفات العميل أو بيانات المنتج.",
            },
            {
              factor_en: "Form",
              factor_ar: "الصورة",
              detail_en: "As stated by the customer.",
              detail_ar: "وفق ما يحدده العميل.",
            },
            {
              factor_en: "Equivalents",
              factor_ar: "البدائل المكافئة",
              detail_en: "Whether the specification permits an equivalent.",
              detail_ar: "ما إذا كانت المواصفات تسمح ببديل مكافئ.",
            },
          ],
          requestChecklist_en: [
            "Specification or product data",
            "Form and packaging",
            "Quantity per delivery",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو بيانات المنتج",
            "الصورة والعبوة",
            "الكمية لكل توريد",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["phenolic-resins"],
          note: "sourcing guide — subject to availability",
        }),
      ],
    },
    {
      categoryId: "water-wastewater-chemicals",
      title_en: "Water & Process Treatment Chemicals",
      title_ar: "كيماويات معالجة المياه والعمليات",
      intro_en:
        "Treatment chemicals quoted against the product types in your treatment specification.",
      intro_ar:
        "كيماويات معالجة يتم إعداد عروض أسعارها وفق الأنواع الواردة في مواصفات المعالجة الخاصة بكم.",
      icon: "Droplets",
      equipment: [
        guide({
          id: "boiler-water-treatment",
          linkedProductId: "boiler-water-chemicals",
          name_en: "Boiler Water Treatment Chemicals",
          name_ar: "كيماويات معالجة مياه الغلايات",
          summary_en:
            "Boiler water treatment chemicals for scale and corrosion control.",
          summary_ar:
            "كيماويات معالجة مياه الغلايات للتحكم في الترسبات والتآكل.",
          whatItIs_en:
            "Treatment chemicals for steam boilers and feedwater, supplied to the product type stated in the customer's treatment specification.",
          whatItIs_ar:
            "كيماويات معالجة للغلايات البخارية ومياه التغذية، يتم توفيرها وفق نوع المنتج المحدد في مواصفات المعالجة الخاصة بالعميل.",
          usedFor_en: "Steam boilers, feedwater and condensate systems.",
          usedFor_ar: "الغلايات البخارية ومياه التغذية وأنظمة المتكثفات.",
          applications_en: [
            "Steam boiler feedwater",
            "Condensate systems",
            "Process steam plants",
          ],
          applications_ar: [
            "مياه تغذية الغلايات البخارية",
            "أنظمة المتكثفات",
            "محطات بخار العمليات",
          ],
          industryIds: WATER,
          selectionFactors: [
            {
              factor_en: "Product type",
              factor_ar: "نوع المنتج",
              detail_en: "As stated in the customer's treatment specification.",
              detail_ar: "وفق مواصفات المعالجة الخاصة بالعميل.",
            },
            {
              factor_en: "Form",
              factor_ar: "الصورة",
              detail_en: "Liquid or powder, as specified.",
              detail_ar: "سائل أو بودرة، وفق المواصفات.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "Drums, containers or bulk, as requested.",
              detail_ar: "براميل أو عبوات أو سائب، حسب الطلب.",
            },
          ],
          requestChecklist_en: [
            "Product type or current product label",
            "Treatment specification, if available",
            "Quantity and packaging",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع المنتج أو ملصق المنتج الحالي",
            "مواصفات المعالجة إن وجدت",
            "الكمية والعبوة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["cooling-water-treatment", "ph-adjustment"],
          note: "supply only — no dosing or treatment programme",
        }),
        guide({
          id: "cooling-water-treatment",
          linkedProductId: "cooling-tower-chemicals",
          name_en: "Cooling Water Treatment Chemicals",
          name_ar: "كيماويات معالجة مياه أبراج التبريد",
          summary_en:
            "Cooling-water chemicals for scale, corrosion and biological control.",
          summary_ar:
            "كيماويات مياه التبريد للتحكم في الترسبات والتآكل والنمو البيولوجي.",
          whatItIs_en:
            "Scale and corrosion inhibitors and biocides for cooling systems, supplied to the product types stated in the customer's treatment specification.",
          whatItIs_ar:
            "مثبطات الترسبات والتآكل والمبيدات الحيوية لأنظمة التبريد، يتم توفيرها وفق الأنواع المحددة في مواصفات المعالجة الخاصة بالعميل.",
          usedFor_en:
            "Cooling towers, condenser loops and process cooling circuits.",
          usedFor_ar: "أبراج التبريد ودوائر المكثفات ودوائر تبريد العمليات.",
          applications_en: [
            "Open cooling towers",
            "Condenser water loops",
            "Process cooling circuits",
          ],
          applications_ar: [
            "أبراج التبريد المفتوحة",
            "دوائر مياه المكثفات",
            "دوائر تبريد العمليات",
          ],
          industryIds: WATER,
          selectionFactors: [
            {
              factor_en: "Product type",
              factor_ar: "نوع المنتج",
              detail_en:
                "Inhibitor or biocide, as stated in the treatment specification.",
              detail_ar: "مثبط أو مبيد حيوي، وفق مواصفات المعالجة.",
            },
            {
              factor_en: "Form",
              factor_ar: "الصورة",
              detail_en: "As specified.",
              detail_ar: "وفق المواصفات.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "Drums, containers or bulk, as requested.",
              detail_ar: "براميل أو عبوات أو سائب، حسب الطلب.",
            },
          ],
          requestChecklist_en: [
            "Product types or current product labels",
            "Treatment specification, if available",
            "Quantity and packaging",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "أنواع المنتجات أو ملصقات المنتجات الحالية",
            "مواصفات المعالجة إن وجدت",
            "الكمية والعبوة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "boiler-water-treatment",
            "corrosion-inhibition",
          ],
          note: "supply only — no dosing or treatment programme",
        }),
        guide({
          id: "wastewater-treatment",
          linkedProductId: "wastewater-treatment-chemicals",
          name_en: "Wastewater Treatment Chemicals",
          name_ar: "كيماويات معالجة مياه الصرف",
          summary_en:
            "Chemicals for industrial and municipal wastewater treatment stages.",
          summary_ar: "كيماويات لمراحل معالجة مياه الصرف الصناعي والبلدي.",
          whatItIs_en:
            "Coagulation, flocculation, disinfection and sludge-conditioning chemicals supplied to the product types stated by the customer.",
          whatItIs_ar:
            "كيماويات الترويب والتلبيد والتطهير ومعالجة الحمأة، يتم توفيرها وفق الأنواع التي يحددها العميل.",
          usedFor_en:
            "Effluent treatment plants and wastewater treatment stages.",
          usedFor_ar: "محطات معالجة المخلفات السائلة ومراحل معالجة مياه الصرف.",
          applications_en: [
            "Industrial effluent treatment",
            "Sludge conditioning",
            "Disinfection stages",
          ],
          applications_ar: [
            "معالجة المخلفات السائلة الصناعية",
            "معالجة الحمأة",
            "مراحل التطهير",
          ],
          industryIds: WATER,
          selectionFactors: [
            {
              factor_en: "Treatment stage",
              factor_ar: "مرحلة المعالجة",
              detail_en: "The stage named in the customer's specification.",
              detail_ar: "المرحلة المحددة في مواصفات العميل.",
            },
            {
              factor_en: "Form",
              factor_ar: "الصورة",
              detail_en: "Liquid or powder, as specified.",
              detail_ar: "سائل أو بودرة، وفق المواصفات.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "Drums, containers or bulk, as requested.",
              detail_ar: "براميل أو عبوات أو سائب، حسب الطلب.",
            },
          ],
          requestChecklist_en: [
            "Product type or current product label",
            "Treatment stage",
            "Quantity and packaging",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع المنتج أو ملصق المنتج الحالي",
            "مرحلة المعالجة",
            "الكمية والعبوة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["flocculants-and-coagulants", "ph-adjustment"],
          note: "supply only — no product selection by trial",
        }),
        guide({
          id: "flocculants-and-coagulants",
          linkedProductId: "flocculants-coagulants",
          name_en: "Flocculants & Coagulants",
          name_ar: "مواد الترويب والتخثير",
          summary_en:
            "Flocculants and coagulants for solids removal in water and wastewater.",
          summary_ar:
            "مواد ترويب وتخثير لإزالة المواد العالقة في المياه ومياه الصرف.",
          whatItIs_en:
            "Inorganic coagulants and polymer flocculants supplied to the type stated in the customer's specification.",
          whatItIs_ar:
            "مواد تخثير غير عضوية ومواد ترويب بوليمرية، يتم توفيرها وفق النوع المحدد في مواصفات العميل.",
          usedFor_en: "Clarification, solids removal and sludge thickening.",
          usedFor_ar: "الترويق وإزالة المواد العالقة وتكثيف الحمأة.",
          applications_en: [
            "Raw water clarification",
            "Industrial wastewater solids removal",
            "Sludge thickening and dewatering",
          ],
          applications_ar: [
            "ترويق المياه الخام",
            "إزالة المواد العالقة من مياه الصرف الصناعي",
            "تكثيف الحمأة ونزع مياهها",
          ],
          industryIds: WATER,
          selectionFactors: [
            {
              factor_en: "Product type",
              factor_ar: "نوع المنتج",
              detail_en: "Coagulant or flocculant type, as specified.",
              detail_ar: "نوع مادة التخثير أو الترويب، وفق المواصفات.",
            },
            {
              factor_en: "Form",
              factor_ar: "الصورة",
              detail_en: "Liquid or powder, as stated.",
              detail_ar: "سائل أو بودرة، وفق ما يرد في الطلب.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "As stated in the request.",
              detail_ar: "وفق ما يرد في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Product type or current product label",
            "Intended application",
            "Quantity and packaging",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع المنتج أو ملصق المنتج الحالي",
            "الاستخدام المطلوب",
            "الكمية والعبوة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["wastewater-treatment"],
          note: "supply only — no product selection by trial",
        }),
        guide({
          id: "ph-adjustment",
          linkedProductId: "ph-adjustment-chemicals",
          name_en: "pH Adjustment Chemicals",
          name_ar: "كيماويات ضبط الأس الهيدروجيني",
          summary_en:
            "Acid and alkali products for pH correction and neutralization.",
          summary_ar: "منتجات حمضية وقلوية لضبط الأس الهيدروجيني والمعادلة.",
          whatItIs_en:
            "Acids and alkalis for pH correction of water and process streams, supplied to the type and concentration stated by the customer.",
          whatItIs_ar:
            "أحماض وقلويات لضبط الأس الهيدروجيني للمياه وتيارات العمليات، يتم توفيرها وفق النوع والتركيز الذي يحدده العميل.",
          usedFor_en:
            "Effluent neutralization and process water pH correction.",
          usedFor_ar:
            "معادلة المخلفات السائلة وضبط الأس الهيدروجيني لمياه العمليات.",
          applications_en: [
            "Effluent neutralization",
            "Process water conditioning",
            "Boiler and cooling water pH correction",
          ],
          applications_ar: [
            "معادلة المخلفات السائلة",
            "تهيئة مياه العمليات",
            "ضبط الأس الهيدروجيني لمياه الغلايات والتبريد",
          ],
          industryIds: WATER,
          selectionFactors: [
            {
              factor_en: "Product type",
              factor_ar: "نوع المنتج",
              detail_en: "Acid or alkali, as specified.",
              detail_ar: "حمض أو قلوي، وفق المواصفات.",
            },
            {
              factor_en: "Concentration",
              factor_ar: "التركيز",
              detail_en: "As stated by the customer.",
              detail_ar: "وفق ما يحدده العميل.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "Drums, containers or bulk, as requested.",
              detail_ar: "براميل أو عبوات أو سائب، حسب الطلب.",
            },
          ],
          requestChecklist_en: [
            "Product type and concentration",
            "Intended application",
            "Quantity and packaging",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع المنتج والتركيز",
            "الاستخدام المطلوب",
            "الكمية والعبوة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "industrial-acids-alkalis",
            "wastewater-treatment",
          ],
          note: "supply only — target values set by the customer",
        }),
      ],
    },
    {
      categoryId: "corrosion-protection-coatings",
      title_en: "Corrosion Protection & Coatings",
      title_ar: "الحماية من التآكل والطلاءات",
      intro_en:
        "Corrosion-protection materials quoted against the systems and types in your specification.",
      intro_ar:
        "مواد الحماية من التآكل يتم إعداد عروض أسعارها وفق الأنظمة والأنواع الواردة في مواصفاتكم.",
      icon: "ShieldCheck",
      equipment: [
        guide({
          id: "corrosion-inhibition",
          linkedProductId: "corrosion-inhibitors",
          name_en: "Corrosion Inhibitors",
          name_ar: "مثبطات التآكل",
          summary_en: "Corrosion inhibitors for closed-loop and fluid systems.",
          summary_ar: "مثبطات تآكل للدوائر المغلقة وأنظمة الموائع.",
          whatItIs_en:
            "Contact, soluble and vapour-phase corrosion inhibitors supplied to the type stated in the customer's specification.",
          whatItIs_ar:
            "مثبطات تآكل تلامسية وذائبة وطورية بخارية، يتم توفيرها وفق النوع المحدد في مواصفات العميل.",
          usedFor_en:
            "Closed-loop heating and chilled water, fluid systems and idle equipment.",
          usedFor_ar:
            "دوائر التدفئة والمياه المبردة المغلقة وأنظمة الموائع والمعدات المتوقفة.",
          applications_en: [
            "Closed-loop water systems",
            "Fluid systems",
            "Lay-up of idle equipment",
          ],
          applications_ar: [
            "دوائر المياه المغلقة",
            "أنظمة الموائع",
            "حماية المعدات المتوقفة",
          ],
          industryIds: COATINGS,
          selectionFactors: [
            {
              factor_en: "Inhibitor type",
              factor_ar: "نوع المثبط",
              detail_en: "As stated in the customer's specification.",
              detail_ar: "وفق مواصفات العميل.",
            },
            {
              factor_en: "System fluid",
              factor_ar: "مائع النظام",
              detail_en: "Water or oil system, as described by the customer.",
              detail_ar: "نظام مائي أو زيتي، وفق وصف العميل.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "As stated in the request.",
              detail_ar: "وفق ما يرد في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Inhibitor type or current product label",
            "System type",
            "Quantity and packaging",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع المثبط أو ملصق المنتج الحالي",
            "نوع النظام",
            "الكمية والعبوة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["rust-prevention", "cooling-water-treatment"],
          note: "supply only — no programme design",
        }),
        guide({
          id: "anti-corrosion-coating-systems",
          linkedProductId: "anti-corrosion-coatings",
          name_en: "Anti-Corrosion Coating Systems",
          name_ar: "أنظمة الطلاءات المقاومة للتآكل",
          summary_en:
            "Primer, intermediate and topcoat systems for steel protection.",
          summary_ar: "أنظمة طبقات أساس ووسيطة ونهائية لحماية الحديد.",
          whatItIs_en:
            "Coating systems for steel structures, tanks and equipment, supplied to the system stated in the customer's coating specification.",
          whatItIs_ar:
            "أنظمة طلاء للمنشآت المعدنية والخزانات والمعدات، يتم توفيرها وفق النظام المحدد في مواصفات الطلاء الخاصة بالعميل.",
          usedFor_en:
            "Steel structures, tanks and pipelines exposed to corrosive conditions.",
          usedFor_ar:
            "المنشآت المعدنية والخزانات وخطوط الأنابيب المعرضة لظروف التآكل.",
          applications_en: ["Structural steel", "Storage tanks", "Pipelines"],
          applications_ar: [
            "المنشآت المعدنية",
            "خزانات التخزين",
            "خطوط الأنابيب",
          ],
          industryIds: COATINGS,
          selectionFactors: [
            {
              factor_en: "Coating system",
              factor_ar: "نظام الطلاء",
              detail_en: "As stated in the coating specification.",
              detail_ar: "وفق مواصفات الطلاء.",
            },
            {
              factor_en: "Substrate",
              factor_ar: "السطح",
              detail_en: "As described by the customer.",
              detail_ar: "وفق وصف العميل.",
            },
            {
              factor_en: "Quantity",
              factor_ar: "الكمية",
              detail_en: "Volume per coat, as stated.",
              detail_ar: "الحجم لكل طبقة، وفق ما يرد في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Coating specification or system",
            "Colour where specified",
            "Quantity per coat",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "مواصفات الطلاء أو النظام",
            "اللون عند تحديده",
            "الكمية لكل طبقة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["protective-paints", "epoxy-coatings"],
          note: "system named by the customer's specification only",
        }),
        guide({
          id: "protective-paints",
          linkedProductId: "industrial-protective-paints",
          name_en: "Industrial Protective Paints",
          name_ar: "الدهانات الواقية الصناعية",
          summary_en:
            "Protective paints for industrial structures and equipment.",
          summary_ar: "دهانات واقية للمنشآت والمعدات الصناعية.",
          whatItIs_en:
            "Industrial paint systems supplied to the type, finish and colour stated in the customer's specification.",
          whatItIs_ar:
            "أنظمة دهانات صناعية يتم توفيرها وفق النوع والتشطيب واللون المحدد في مواصفات العميل.",
          usedFor_en: "Structural steel, machinery, tanks and pipework.",
          usedFor_ar: "المنشآت المعدنية والماكينات والخزانات والمواسير.",
          applications_en: [
            "Structural steel finishing",
            "Machinery and equipment",
            "Pipe colour coding",
          ],
          applications_ar: [
            "تشطيب المنشآت المعدنية",
            "الماكينات والمعدات",
            "التمييز اللوني للمواسير",
          ],
          industryIds: COATINGS,
          selectionFactors: [
            {
              factor_en: "Paint type",
              factor_ar: "نوع الدهان",
              detail_en: "As stated in the specification.",
              detail_ar: "وفق المواصفات.",
            },
            {
              factor_en: "Finish and colour",
              factor_ar: "التشطيب واللون",
              detail_en: "As stated by the customer.",
              detail_ar: "وفق ما يحدده العميل.",
            },
            {
              factor_en: "Quantity",
              factor_ar: "الكمية",
              detail_en: "Volume per colour, as stated.",
              detail_ar: "الحجم لكل لون، وفق ما يرد في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Paint type and specification",
            "Finish and colour",
            "Quantity per colour",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الدهان والمواصفات",
            "التشطيب واللون",
            "الكمية لكل لون",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["anti-corrosion-coating-systems"],
          note: "type named by the customer's specification only",
        }),
        guide({
          id: "epoxy-coatings",
          linkedProductId: "industrial-epoxy-coatings",
          name_en: "Industrial Epoxy Coatings",
          name_ar: "الطلاءات الإيبوكسية الصناعية",
          summary_en: "Epoxy coating systems for floors, tanks and steel.",
          summary_ar:
            "أنظمة طلاءات إيبوكسية للأرضيات الصناعية والخزانات والحديد.",
          whatItIs_en:
            "Two-component epoxy coating systems supplied to the system stated in the customer's specification.",
          whatItIs_ar:
            "أنظمة طلاءات إيبوكسية ثنائية المكونات يتم توفيرها وفق النظام المحدد في مواصفات العميل.",
          usedFor_en: "Industrial floors, tank linings and steel protection.",
          usedFor_ar: "الأرضيات الصناعية وتبطين الخزانات وحماية الحديد.",
          applications_en: [
            "Industrial floors",
            "Tank linings",
            "Secondary containment areas",
          ],
          applications_ar: [
            "الأرضيات الصناعية",
            "تبطين الخزانات",
            "مناطق الاحتواء الثانوي",
          ],
          industryIds: COATINGS,
          selectionFactors: [
            {
              factor_en: "Epoxy system",
              factor_ar: "نظام الإيبوكسي",
              detail_en: "As stated in the specification.",
              detail_ar: "وفق المواصفات.",
            },
            {
              factor_en: "Area of use",
              factor_ar: "مجال الاستخدام",
              detail_en: "Floor, tank or steel, as described by the customer.",
              detail_ar: "أرضيات أو خزانات أو حديد، وفق وصف العميل.",
            },
            {
              factor_en: "Quantity",
              factor_ar: "الكمية",
              detail_en: "As stated in the request.",
              detail_ar: "وفق ما يرد في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Epoxy system and specification",
            "Area of use",
            "Quantity and colour where specified",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نظام الإيبوكسي والمواصفات",
            "مجال الاستخدام",
            "الكمية واللون عند تحديده",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["anti-corrosion-coating-systems"],
          note: "system named by the customer's specification only",
        }),
        guide({
          id: "rust-prevention",
          linkedProductId: "rust-preventives",
          name_en: "Rust Preventives",
          name_ar: "مواد الحماية من الصدأ",
          summary_en:
            "Temporary rust preventives for parts in storage and transit.",
          summary_ar: "مواد حماية مؤقتة من الصدأ للقطع أثناء التخزين والنقل.",
          whatItIs_en:
            "Soft-film and hard-film rust preventives supplied to the type stated by the customer.",
          whatItIs_ar:
            "مواد حماية من الصدأ بطبقة لينة أو صلبة، يتم توفيرها وفق النوع الذي يحدده العميل.",
          usedFor_en:
            "Machined parts, components and equipment in storage or shipment.",
          usedFor_ar:
            "القطع المشغولة والمكونات والمعدات أثناء التخزين أو الشحن.",
          applications_en: [
            "Parts in storage",
            "Parts in shipment",
            "Equipment lay-up",
          ],
          applications_ar: [
            "القطع أثناء التخزين",
            "القطع أثناء الشحن",
            "حماية المعدات المتوقفة",
          ],
          industryIds: COATINGS,
          selectionFactors: [
            {
              factor_en: "Film type",
              factor_ar: "نوع الطبقة",
              detail_en: "Soft-film or hard-film, as specified.",
              detail_ar: "طبقة لينة أو صلبة، وفق المواصفات.",
            },
            {
              factor_en: "Application method",
              factor_ar: "طريقة الاستخدام",
              detail_en: "Dip, spray or brush, as stated.",
              detail_ar: "غمر أو رش أو فرشاة، وفق ما يرد في الطلب.",
            },
            {
              factor_en: "Packaging",
              factor_ar: "العبوة",
              detail_en: "As stated in the request.",
              detail_ar: "وفق ما يرد في الطلب.",
            },
          ],
          requestChecklist_en: [
            "Product type or current product label",
            "Film type and application method",
            "Quantity and packaging",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع المنتج أو ملصق المنتج الحالي",
            "نوع الطبقة وطريقة الاستخدام",
            "الكمية والعبوة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["corrosion-inhibition"],
          note: "type named by the customer only",
        }),
      ],
    },
  ],

  replacement: {
    title_en: "Specified Chemicals & Equivalents",
    title_ar: "الكيماويات المحددة والبدائل المكافئة",
    intro_en:
      "Chemical requests often name a specific chemical, grade or product. GOLTENS can quote the specified chemical based on the information provided, and proposes an alternative only where the customer's specification allows an equivalent. To repeat supply of a chemical currently in use, start from its label or container information.",
    intro_ar:
      "كثيرًا ما تحدد طلبات الكيماويات مادة أو درجة أو منتجًا بعينه. ويمكن لـGOLTENS إعداد عرض سعر المادة المحددة استنادًا إلى المعلومات المقدمة، ولا تقترح بديلًا إلا إذا سمحت مواصفات العميل ببديل مكافئ. ولإعادة توريد مادة مستخدمة حاليًا، ابدأوا من بيانات الملصق أو العبوة.",
    flowTitle_en: "How a specified-chemical request works",
    flowTitle_ar: "كيف يتم التعامل مع طلب الكيماويات المحددة",
    flow_en: [
      "Chemical identity",
      "Grade, purity or concentration as stated",
      "Form and packaging",
      "Application",
      "Whether equivalents are permitted",
      "Specification review",
      "Specified chemical or permitted equivalent",
      "Quotation",
    ],
    flow_ar: [
      "هوية المادة",
      "الدرجة أو النقاوة أو التركيز كما هو محدد",
      "الصورة والعبوة",
      "الاستخدام",
      "ما إذا كانت البدائل المكافئة مسموحة",
      "مراجعة المواصفات",
      "المادة المحددة أو بديل مكافئ مسموح",
      "عرض السعر",
    ],
    groups: [
      {
        title_en: "All requests",
        title_ar: "لجميع الطلبات",
        items_en: [
          "Chemical name, and CAS number if provided",
          "Grade, purity or concentration as stated",
          "Form and packaging",
          "Intended application",
          "Whether equivalents are permitted",
        ],
        items_ar: [
          "اسم المادة، ورقم CAS إذا توفر",
          "الدرجة أو النقاوة أو التركيز كما هو محدد",
          "الصورة والعبوة",
          "الاستخدام المطلوب",
          "ما إذا كانت البدائل المكافئة مسموحة",
        ],
      },
      {
        title_en: "Chemicals currently in use",
        title_ar: "الكيماويات المستخدمة حاليًا",
        items_en: [
          "Photo of the current product label",
          "Container type and size",
          "Quantity per order",
          "Documents from the current supply, if available",
        ],
        items_ar: [
          "صورة ملصق المنتج الحالي",
          "نوع العبوة وحجمها",
          "الكمية لكل طلب",
          "مستندات التوريد الحالي إن وجدت",
        ],
      },
      {
        title_en: "Laboratory chemicals",
        title_ar: "الكيماويات المعملية",
        items_en: [
          "Laboratory chemical list",
          "Grade stated for each item",
          "Pack size per item",
        ],
        items_ar: [
          "قائمة الكيماويات المعملية",
          "الدرجة المحددة لكل بند",
          "حجم العبوة لكل بند",
        ],
      },
      {
        title_en: "Coatings & treatment products",
        title_ar: "الطلاءات ومنتجات المعالجة",
        items_en: [
          "Coating or treatment specification",
          "Product type stated by the customer",
          "Quantity and packaging",
        ],
        items_ar: [
          "مواصفات الطلاء أو المعالجة",
          "نوع المنتج كما يحدده العميل",
          "الكمية والعبوة",
        ],
      },
    ],
    note_en: `Equivalence must consider the chemical identity, grade, purity, concentration, form and application stated by the customer — never the chemical name alone. ${EQUIVALENCE_EN}`,
    note_ar: `يجب أن يراعي التكافؤ هوية المادة والدرجة والنقاوة والتركيز والصورة والاستخدام كما يحددها العميل، وليس اسم المادة وحده. ${EQUIVALENCE_AR}`,
    ctaLabel_en: "Request a quotation for specified chemicals",
    ctaLabel_ar: "اطلب عرض سعر للكيماويات المحددة",
    prefill_en:
      "Specified chemicals and equivalents — Industrial & Laboratory Chemicals",
    prefill_ar: "كيماويات محددة وبدائل مكافئة — الكيماويات الصناعية والمعملية",
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
      "Chemical/product name",
      "CAS number, if provided by the customer",
      "Intended application",
      "Grade or purity, if specified",
      "Concentration, if specified",
      "Quantity and unit",
      "Packaging",
      "Delivery location",
      "Required date",
      "Quotation deadline",
      "Contact details",
    ],
    checklist_ar: [
      "اسم المادة أو المنتج",
      "رقم CAS إذا قدمه العميل",
      "الاستخدام المطلوب",
      "الدرجة أو النقاوة إن كانت محددة",
      "التركيز إن كان محددًا",
      "الكمية ووحدة القياس",
      "العبوة",
      "موقع التوريد",
      "التاريخ المطلوب",
      "الموعد النهائي لتقديم عرض السعر",
      "بيانات التواصل",
    ],
    secondaryChecklist: {
      title_en: "Useful information",
      title_ar: "بيانات مفيدة",
      items_en: [
        "Required specification or standard",
        "Manufacturer, only if specified by the customer",
        "Whether equivalents are allowed",
        "Documents required with quotation or delivery",
        "SDS requirement, if applicable",
        "Current product label/photo when matching an existing chemical",
        "Existing product/container information when replacement is required",
      ],
      items_ar: [
        "المواصفة أو المعيار المطلوب",
        "المصنع، فقط إذا حدده العميل",
        "ما إذا كانت البدائل المكافئة مسموحة",
        "المستندات المطلوبة مع عرض السعر أو التوريد",
        "اشتراط نشرة بيانات السلامة عند الحاجة",
        "ملصق أو صورة المنتج الحالي عند مطابقة مادة مستخدمة",
        "بيانات المنتج أو العبوة الحالية عند طلب الاستبدال",
      ],
    },
    checklistNote_en: DISCLAIMER_EN,
    checklistNote_ar: DISCLAIMER_AR,
    processTitle_en: "How GOLTENS handles the request",
    processTitle_ar: "كيف تتعامل GOLTENS مع الطلب",
    steps: [
      {
        title_en: "Chemical Requirement",
        title_ar: "متطلبات الكيماويات",
        description_en:
          "Send the chemical name or list, the application and the grade, concentration and quantity required through the quotation form on this page.",
        description_ar:
          "أرسلوا اسم المادة أو القائمة والاستخدام والدرجة والتركيز والكمية المطلوبة من خلال نموذج طلب عرض السعر في هذه الصفحة.",
      },
      {
        title_en: "Specification Review",
        title_ar: "مراجعة المواصفات",
        description_en:
          "Our team reviews the information provided and asks for anything needed to identify each chemical.",
        description_ar:
          "يراجع فريقنا البيانات المقدمة ويطلب أي بيانات لازمة لتحديد كل مادة.",
      },
      {
        title_en: "Sourcing / Configuration",
        title_ar: "التوفير وتحديد التفاصيل",
        description_en:
          "Chemicals are sourced to match the stated requirement, with grade, concentration and packaging as requested — or, where the specification allows, a permitted equivalent.",
        description_ar:
          "يتم توفير الكيماويات المطابقة للمتطلبات المحددة بالدرجة والتركيز والعبوة المطلوبة، أو بديل مكافئ مسموح إذا سمحت المواصفات بذلك.",
      },
      {
        title_en: "Quotation",
        title_ar: "عرض السعر",
        description_en:
          "You receive a quotation stating the offered items, availability and lead time. Final technical acceptance remains with the customer or responsible technical party, as applicable.",
        description_ar:
          "تتسلمون عرض سعر يوضح الأصناف المقترحة وتوافرها ومدة التوريد، ويظل القبول الفني النهائي من مسؤولية العميل أو الجهة الفنية المسؤولة، بحسب الحالة.",
      },
    ],
  },

  quote: {
    title_en: "Request a Quotation",
    title_ar: "اطلب عرض سعر",
    subtitle_en:
      "Send your chemical list, specification or item list with the grades and quantities required. Items are available on request and quoted against the stated requirements.",
    subtitle_ar:
      "أرسلوا قائمة الكيماويات أو المواصفات أو قائمة الأصناف مع الدرجات والكميات المطلوبة. الأصناف متاحة حسب الطلب ويتم إعداد عرض سعرها وفق المتطلبات المذكورة.",
  },
};

/** Compact-layout page extras for Industrial Chemicals (see `compact-guide-page.ts`). */
export const industrialChemicalsPage: CompactGuidePage = {
  heroPrimaryCta_en: "Request a Quotation",
  heroPrimaryCta_ar: "اطلب عرض سعر",
  heroSecondaryCta: {
    label_en: "View Procurement Sectors",
    label_ar: "عرض قطاعات التوريد",
    href: "/sectors",
  },
  labels: {
    categoryNav_en: "Chemical families",
    categoryNav_ar: "مجموعات الكيماويات",
    contextItems_en: "Typical chemicals",
    contextItems_ar: "الكيماويات المعتادة",
    contextRoutes_en: "Covered by",
    contextRoutes_ar: "يغطيها قطاع",
    details_en: "Details and quotation information",
    details_ar: "التفاصيل وبيانات عرض السعر",
    replacementGroups_en: "Information to send",
    replacementGroups_ar: "البيانات المطلوبة",
  },
  sourcingCategoryIds: [
    "laboratory-chemicals-reagents",
    "industrial-chemicals-solvents",
    "resins-chemical-binders",
  ],
  projectRoutes: {
    "items-outside-families": [
      "industrial-equipment",
      "construction",
      "electrical-energy",
      "healthcare",
      "global-sourcing",
      "lubricants-oils",
    ],
  },
  routing: {
    title_en: "Requirements Covered by Other Sectors",
    title_ar: "متطلبات تغطيها قطاعات أخرى",
    intro_en:
      "Chemical requests sometimes include items outside these five families. These GOLTENS sectors cover them, and they can be included in the same request.",
    intro_ar:
      "تتضمن طلبات الكيماويات أحيانًا أصنافًا خارج هذه المجموعات الخمس، وتغطيها قطاعات GOLTENS التالية، ويمكن إدراجها ضمن الطلب نفسه.",
    routes: [
      {
        sectorSlug: "industrial-equipment",
        title_en: "Industrial Equipment & Pumps",
        title_ar: "المعدات الصناعية والمضخات",
        items_en: "Pumps, valves and compressed-air equipment",
        items_ar: "المضخات والصمامات ومعدات الهواء المضغوط",
      },
      {
        sectorSlug: "construction",
        title_en: "Construction & Infrastructure Materials",
        title_ar: "مواد البناء والبنية التحتية",
        items_en: "Construction materials, waterproofing and insulation",
        items_ar: "مواد البناء والعزل المائي والحراري",
      },
      {
        sectorSlug: "electrical-energy",
        title_en: "Electrical & Energy Equipment",
        title_ar: "معدات الكهرباء والطاقة",
        items_en: "Electrical distribution, power and lighting equipment",
        items_ar: "معدات التوزيع الكهربائي والقوى والإنارة",
      },
      {
        sectorSlug: "healthcare",
        title_en: "Hospital Equipment & Medical Supplies",
        title_ar: "تجهيزات المستشفيات والمستلزمات الطبية",
        items_en: "Hospital equipment and medical supplies",
        items_ar: "تجهيزات المستشفيات والمستلزمات الطبية",
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
      {
        sectorSlug: "lubricants-oils",
        title_en: "Lubricants & Oils",
        title_ar: "الزيوت ومواد التشحيم",
        items_en: "Lubricants, oils, greases and metalworking fluids",
        items_ar: "الزيوت ومواد التشحيم والشحوم وسوائل تشغيل المعادن",
      },
    ],
  },
};
