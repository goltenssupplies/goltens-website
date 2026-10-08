import type { CompactGuidePage } from "@/data/sector-content/compact-guide-page";
import type {
  EquipmentGuideReview,
  EquipmentSelectionFactor,
  EquipmentTypeGuide,
  SectorEquipmentGuide,
  SectorFaq,
  SectorHeroCopy,
} from "@/data/sector-content/types";

/**
 * Hospital Equipment & Medical Supplies — a hospital equipment procurement
 * guide (department matrix, six equipment families, routing to the other
 * GOLTENS sectors, a specified-items / equivalents / replacements path and
 * a two-part, specification-driven quotation checklist). Rendered in the
 * compact guide layout of `app/[locale]/sectors/[slug]/page.tsx` (see
 * `compact-guide-page.ts`).
 *
 * Content rules (enforced by `scripts/verify-equipment-guides.mjs`):
 * - The six families are the sector's six real product categories: one
 *   guide per internal product record, which stays non-public and is never
 *   linked — no internal id, brand, standard, numeric specification, image
 *   or datasheet reaches the page.
 * - GOLTENS quotes against the customer's specification, BOQ, equipment
 *   schedule or tender list. It is not a manufacturer, hospital,
 *   laboratory, clinical, testing, calibration, installation or
 *   maintenance provider, and it does not assess clinical suitability,
 *   regulatory status or acceptance.
 * - Medical devices and surgical supplies are specification-only: no
 *   clinical, efficacy, accuracy, sterilization-performance, approval,
 *   certification or registration claim.
 * - Alternatives follow three tiers (see `ALTERNATIVES_*` below): matching
 *   or equivalent items for furniture, trolleys, carts, examination couches,
 *   manual beds and stretchers; alternatives only where the customer's
 *   documents allow them for electric and ICU beds, operating tables and
 *   surgical lights; the specified item only for everything else.
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
  "GOLTENS prepares a quotation based on the information provided. Clinical suitability, regulatory requirements, equipment planning and final acceptance remain with the customer, consultant or responsible healthcare/technical authority, as applicable.";
const DISCLAIMER_AR =
  "تُعد GOLTENS عرض السعر استنادًا إلى المعلومات المقدمة، بينما تظل الملاءمة السريرية والمتطلبات التنظيمية وتخطيط التجهيزات والقبول النهائي من مسؤولية العميل أو الاستشاري أو الجهة الطبية أو الفنية المسؤولة، بحسب الحالة.";
const EQUIVALENCE_EN =
  "GOLTENS reviews the available item information and can source a matching or technically suitable alternative for quotation. Final equivalence, suitability and acceptance remain with the customer, consultant or responsible healthcare/technical authority, as applicable.";
const EQUIVALENCE_AR =
  "تراجع GOLTENS بيانات الصنف المتاحة ويمكنها توفير صنف مطابق أو بديل مناسب فنيًا ضمن عرض السعر، على أن يتم تأكيد التكافؤ والملاءمة والقبول النهائي من جانب العميل أو الاستشاري أو الجهة الطبية أو الفنية المسؤولة، بحسب الحالة.";

/** Furniture, trolleys, carts, examination couches, manual beds and stretchers. */
const ALTERNATIVES_MATCHING: EquipmentSelectionFactor = {
  factor_en: "Alternatives",
  factor_ar: "البدائل",
  detail_en: "The specified item, or a matching or equivalent item on request.",
  detail_ar: "الصنف المحدد، أو صنف مطابق أو مكافئ عند الطلب.",
};
/** Electric and ICU beds, operating tables and surgical lights. */
const ALTERNATIVES_IF_ALLOWED: EquipmentSelectionFactor = {
  factor_en: "Alternatives",
  factor_ar: "البدائل",
  detail_en:
    "The specified item; an alternative only where the customer's documents allow alternatives.",
  detail_ar:
    "الصنف المحدد، ولا يُقترح بديل إلا إذا سمحت مستندات العميل بالبدائل.",
};
/** Monitoring, diagnostic and respiratory devices, sterilizers and surgical supplies. */
const ALTERNATIVES_SPECIFIED_ONLY: EquipmentSelectionFactor = {
  factor_en: "Alternatives",
  factor_ar: "البدائل",
  detail_en:
    "Quoted to the specified item only; alternatives are not proposed.",
  detail_ar: "يتم إعداد العرض للصنف المحدد فقط، ولا يتم اقتراح بدائل.",
};

/**
 * One hospital equipment / supply guide. Every guide in this file has the
 * same shape — three applications, three selection factors (the last one
 * its alternatives tier) and a five-item request checklist — so the
 * content stays lean and comparable.
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
export const healthcareHero: SectorHeroCopy = {
  subtitle_en:
    "GOLTENS supplies hospital equipment and medical supplies according to customer specifications, BOQs, equipment schedules and project or procurement requirements.",
  subtitle_ar:
    "توفر GOLTENS تجهيزات المستشفيات والمستلزمات الطبية وفق المواصفات المقدمة من العميل وجداول الكميات وقوائم المعدات واحتياجات المشروع أو التوريد.",
  description_en:
    "Hospital beds, patient monitoring, respiratory, sterilization and operating-room equipment, medical furniture and surgical supplies can be sourced according to the stated requirement. Availability and configuration are confirmed during quotation.",
  description_ar:
    "يمكن توفير أسرّة المستشفيات وأجهزة مراقبة المرضى ومعدات التنفس والتعقيم وغرف العمليات والأثاث الطبي والمستلزمات الجراحية وفق المتطلبات المقدمة. ويتم تأكيد التوافر والتكوين أثناء إعداد عرض السعر.",
};

export const healthcareFaqs: SectorFaq[] = [
  {
    question_en:
      "What information should I send with a healthcare equipment request?",
    answer_en:
      "Send the item name or description, the quantity, your technical specification or datasheet, the department or intended use, the delivery location and your quotation deadline. The manufacturer and model, catalogue number, configuration and accessories help where you have them. The checklist on this page lists the information that helps.",
    question_ar: "ما البيانات التي يجب إرسالها مع طلب تجهيزات طبية؟",
    answer_ar:
      "أرسلوا اسم الصنف أو وصفه، والكمية، والمواصفات الفنية أو ورقة البيانات، والقسم أو الاستخدام المطلوب، وموقع التوريد، والموعد النهائي لعرض السعر. ويفيد ذكر المصنع والطراز ورقم الكتالوج والتكوين والملحقات إن توفرت لديكم. وتوضح القائمة في هذه الصفحة البيانات المفيدة.",
  },
  {
    question_en:
      "Can you quote from a hospital BOQ, equipment schedule or tender list?",
    answer_en:
      "Yes. Send the BOQ, equipment schedule or tender list with the specification and quantity for each item. Items are quoted against the stated requirements, and any unclear item is clarified during quotation.",
    question_ar:
      "هل يمكن إعداد عرض السعر من جدول كميات أو قائمة معدات أو قائمة مناقصة لمستشفى؟",
    answer_ar:
      "نعم، أرسلوا جدول الكميات أو قائمة المعدات أو قائمة المناقصة مع المواصفات والكمية لكل بند. ويتم إعداد عرض السعر وفق المتطلبات المذكورة، مع توضيح أي بند غير واضح أثناء إعداد العرض.",
  },
  {
    question_en: "Can you quote a specified manufacturer and model?",
    answer_en:
      "Yes. Where your document names a manufacturer and model, the quotation is prepared for that item, subject to availability, which is confirmed during quotation.",
    question_ar: "هل يمكن إعداد عرض سعر لمصنع وطراز محددين؟",
    answer_ar:
      "نعم، عندما تحدد مستنداتكم مصنعًا وطرازًا معينين، يتم إعداد عرض السعر لهذا الصنف حسب التوافر، ويتم تأكيد التوافر أثناء إعداد عرض السعر.",
  },
  {
    question_en: "Can equivalent items be quoted?",
    answer_en: `For examination couches, bedside cabinets, trolleys, emergency carts, manual beds and stretchers, a matching or equivalent item can be quoted on request. For electric and ICU beds, operating tables and surgical lights, an alternative is quoted only where your documents allow alternatives. Monitoring and respiratory devices, steam sterilizers and surgical supplies are quoted to the specified item only. ${EQUIVALENCE_EN}`,
    question_ar: "هل يمكن إعداد عرض سعر لأصناف مكافئة؟",
    answer_ar: `بالنسبة لأسرّة الفحص وخزائن السرير والعربات وعربات الطوارئ والأسرّة اليدوية والنقالات، يمكن إعداد عرض سعر لصنف مطابق أو مكافئ عند الطلب. أما الأسرّة الكهربائية وأسرّة العناية المركزة وطاولات العمليات ومصابيح غرف العمليات، فلا يُقدَّم بديل إلا إذا سمحت مستنداتكم بالبدائل. ويتم إعداد عروض أسعار أجهزة المراقبة والتنفس وأجهزة التعقيم بالبخار والمستلزمات الجراحية للصنف المحدد فقط. ${EQUIVALENCE_AR}`,
  },
  {
    question_en: "Who confirms medical suitability and final acceptance?",
    answer_en: `${DISCLAIMER_EN} State any acceptance requirements in your request.`,
    question_ar: "من يؤكد الملاءمة الطبية والقبول النهائي؟",
    answer_ar: `${DISCLAIMER_AR} اذكروا أي متطلبات للقبول ضمن طلبكم.`,
  },
  {
    question_en: "Which documents can be provided with a quotation?",
    answer_en:
      "State the documents you need with the quotation or delivery, such as datasheets or catalogue pages. Their availability is confirmed for each item during quotation.",
    question_ar: "ما المستندات التي يمكن تقديمها مع عرض السعر؟",
    answer_ar:
      "اذكروا المستندات التي تحتاجونها مع عرض السعر أو التوريد، مثل أوراق البيانات أو صفحات الكتالوج، ويتم تأكيد توافرها لكل صنف أثناء إعداد عرض السعر.",
  },
  {
    question_en:
      "Can items for several hospital departments be included in one request?",
    answer_en:
      "Yes. Send one list covering the departments, with the department, item, specification and quantity on each line. Items outside the families on this page can be included too; the routing section shows the GOLTENS sectors that cover them.",
    question_ar: "هل يمكن إدراج أصناف لعدة أقسام بالمستشفى في طلب واحد؟",
    answer_ar:
      "نعم، أرسلوا قائمة واحدة تشمل الأقسام، مع ذكر القسم والصنف والمواصفات والكمية في كل بند. ويمكن أيضًا إدراج أصناف خارج المجموعات الواردة في هذه الصفحة، ويوضح قسم التوجيه قطاعات GOLTENS التي تغطيها.",
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

export const healthcareGuide: SectorEquipmentGuide = {
  heroVisual: "neutral",
  availability_en: "Available on request.",
  availability_ar: "متاح حسب الطلب.",

  intro: {
    eyebrow_en: "Hospital equipment procurement guide",
    eyebrow_ar: "دليل توريد تجهيزات المستشفيات",
    lead_en:
      "Healthcare requirements usually arrive as a BOQ, an equipment schedule, a tender list or a specification for a single item. GOLTENS reviews the information provided, sources the requested items and prepares a quotation.",
    lead_ar:
      "تصل متطلبات المنشآت الصحية عادةً في صورة جدول كميات أو قائمة معدات أو قائمة مناقصة أو مواصفات لصنف واحد. وتراجع GOLTENS البيانات المقدمة، وتوفر الأصناف المطلوبة، وتُعد عرض السعر.",
    note_en:
      "These guides describe common hospital equipment and supply types and the information needed to quote them — they are not a catalogue of specific products. The customer states the specification, configuration and quantity required.",
    note_ar:
      "توضح هذه الأدلة أنواع تجهيزات ومستلزمات المستشفيات الشائعة والبيانات اللازمة لإعداد عروض أسعارها، وليست كتالوجًا لمنتجات محددة. ويحدد العميل المواصفات والتكوين والكمية المطلوبة.",
  },

  projectsTitle_en: "Choose by Hospital Area",
  projectsTitle_ar: "اختر حسب القسم",
  projectsIntro_en:
    "Typical items for common hospital areas. The items, specifications and quantities come from your BOQ, equipment schedule or specification.",
  projectsIntro_ar:
    "الأصناف المعتادة للأقسام الشائعة بالمستشفيات، بينما تُحدَّد الأصناف والمواصفات والكميات وفق جدول الكميات أو قائمة المعدات أو المواصفات الخاصة بكم.",

  industries: [
    {
      id: "inpatient-wards",
      label_en: "Inpatient wards",
      label_ar: "أقسام الإقامة الداخلية",
    },
    {
      id: "critical-care",
      label_en: "Critical-care units",
      label_ar: "وحدات الرعاية الحرجة",
    },
    {
      id: "operating-theatres",
      label_en: "Operating rooms",
      label_ar: "غرف العمليات",
    },
    {
      id: "emergency-care",
      label_en: "Emergency departments",
      label_ar: "أقسام الطوارئ",
    },
    {
      id: "outpatient-care",
      label_en: "Outpatient clinics",
      label_ar: "العيادات الخارجية",
    },
    {
      id: "sterile-services",
      label_en: "Sterile reprocessing / CSSD",
      label_ar: "قسم التعقيم المركزي",
    },
  ],

  projects: [
    {
      id: "general-wards-patient-rooms",
      title_en: "General Wards & Patient Rooms",
      title_ar: "الأقسام العامة وغرف المرضى",
      description_en:
        "Beds, bedside cabinets, monitors, pulse oximeters, oxygen concentrators and trolleys.",
      description_ar:
        "الأسرّة وخزائن السرير وأجهزة المراقبة وأجهزة قياس الأكسجين وأجهزة تركيز الأكسجين والعربات.",
      equipmentIds: [
        "electric-beds",
        "manual-beds-stretchers",
        "bedside-cabinets-overbed-tables",
        "bedside-patient-monitors",
        "pulse-oximetry-devices",
        "oxygen-concentrator-units",
        "treatment-instrument-trolleys",
      ],
      review: pending("hospital-area context only"),
    },
    {
      id: "icu-high-dependency-units",
      title_en: "ICU & High-Dependency Units",
      title_ar: "العناية المركزة ووحدات الرعاية المتوسطة",
      description_en:
        "ICU beds, monitors, suction units, resuscitation carts and bedside cabinets.",
      description_ar:
        "أسرّة العناية المركزة وأجهزة المراقبة وأجهزة الشفط وعربات الإنعاش وخزائن السرير.",
      equipmentIds: [
        "intensive-care-beds",
        "bedside-patient-monitors",
        "suction-units",
        "resuscitation-carts",
        "bedside-cabinets-overbed-tables",
      ],
      review: pending("hospital-area context only"),
    },
    {
      id: "operating-rooms-day-surgery",
      title_en: "Operating Rooms & Day-Surgery Suites",
      title_ar: "غرف العمليات ووحدات جراحات اليوم الواحد",
      description_en:
        "Operating tables, surgical lights, gowns, drapes, masks, sutures and instrument trolleys.",
      description_ar:
        "طاولات العمليات ومصابيح غرف العمليات والملابس الجراحية والأغطية والكمامات والخيوط الجراحية وعربات الأدوات.",
      equipmentIds: [
        "surgical-operating-tables",
        "surgical-lights",
        "operating-room-gowns",
        "drapes-and-medical-masks",
        "wound-closure-sutures",
        "treatment-instrument-trolleys",
      ],
      review: pending("hospital-area context only"),
    },
    {
      id: "emergency-departments",
      title_en: "Emergency Departments",
      title_ar: "أقسام الطوارئ",
      description_en:
        "Stretchers, resuscitation carts, suction units, ECG machines and pulse oximeters.",
      description_ar:
        "النقالات وعربات الإنعاش وأجهزة الشفط وأجهزة تخطيط القلب وأجهزة قياس الأكسجين.",
      equipmentIds: [
        "manual-beds-stretchers",
        "resuscitation-carts",
        "suction-units",
        "ecg-electrocardiographs",
        "pulse-oximetry-devices",
      ],
      review: pending("hospital-area context only"),
    },
    {
      id: "sterile-reprocessing-cssd",
      title_en: "Sterile Reprocessing / CSSD",
      title_ar: "قسم التعقيم المركزي",
      description_en: "Steam sterilizers and trolleys.",
      description_ar: "أجهزة التعقيم بالبخار والعربات.",
      equipmentIds: ["steam-sterilizers", "treatment-instrument-trolleys"],
      review: pending("hospital-area context only"),
    },
    {
      id: "outpatient-clinics-consultation-rooms",
      title_en: "Outpatient Clinics & Consultation Rooms",
      title_ar: "العيادات الخارجية وغرف الكشف",
      description_en: "Examination couches, ECG machines and pulse oximeters.",
      description_ar: "أسرّة الفحص وأجهزة تخطيط القلب وأجهزة قياس الأكسجين.",
      equipmentIds: [
        "examination-couches",
        "ecg-electrocardiographs",
        "pulse-oximetry-devices",
      ],
      review: pending("hospital-area context only"),
    },
    {
      id: "post-operative-recovery",
      title_en: "Post-Operative Recovery",
      title_ar: "الإفاقة بعد العمليات",
      description_en: "Monitors, pulse oximeters, ICU beds and suction units.",
      description_ar:
        "أجهزة المراقبة وأجهزة قياس الأكسجين وأسرّة العناية المركزة وأجهزة الشفط.",
      equipmentIds: [
        "bedside-patient-monitors",
        "pulse-oximetry-devices",
        "intensive-care-beds",
        "suction-units",
      ],
      review: pending("hospital-area context only"),
    },
    {
      id: "maternity-delivery-areas",
      title_en: "Maternity & Delivery Areas",
      title_ar: "أقسام الولادة",
      description_en:
        "Electric beds, surgical lights, suction units, gowns and sutures.",
      description_ar:
        "الأسرّة الكهربائية ومصابيح غرف العمليات وأجهزة الشفط والملابس الجراحية والخيوط الجراحية.",
      equipmentIds: [
        "electric-beds",
        "surgical-lights",
        "suction-units",
        "operating-room-gowns",
        "wound-closure-sutures",
      ],
      review: pending("hospital-area context only"),
    },
    {
      id: "patient-transport-within-facility",
      title_en: "Patient Transport Within the Facility",
      title_ar: "نقل المرضى داخل المنشأة",
      description_en:
        "Manual beds, stretchers and trolleys. Ambulance requirements are covered by Commercial Vehicles.",
      description_ar:
        "الأسرّة اليدوية والنقالات والعربات، بينما يغطي قطاع المركبات التجارية متطلبات سيارات الإسعاف.",
      equipmentIds: ["manual-beds-stretchers", "treatment-instrument-trolleys"],
      review: pending("hospital-area context only; ambulances routed"),
    },
    {
      id: "hospital-boqs-multiple-trades",
      title_en: "Hospital BOQs Spanning Multiple Trades",
      title_ar: "جداول كميات المستشفيات متعددة التخصصات",
      description_en:
        "Items from other trades in the same BOQ are covered by these GOLTENS sectors and can be included in the same request.",
      description_ar:
        "تغطي قطاعات GOLTENS التالية بنود التخصصات الأخرى في جدول الكميات نفسه، ويمكن إدراجها ضمن الطلب نفسه.",
      equipmentIds: [],
      review: pending("routing row — links to the routing block"),
    },
  ],

  categories: [
    {
      categoryId: "patient-monitoring-diagnostic-equipment",
      title_en: "Patient Monitoring & Diagnostic Devices",
      title_ar: "أجهزة مراقبة المرضى والتشخيص",
      intro_en:
        "Monitoring and recording devices quoted to the parameters and configuration in your specification.",
      intro_ar:
        "أجهزة مراقبة وتسجيل يتم إعداد عروض أسعارها وفق المؤشرات والتكوين الوارد في مواصفاتكم.",
      icon: "HeartPulse",
      equipment: [
        guide({
          id: "bedside-patient-monitors",
          linkedProductId: "patient-monitors",
          name_en: "Patient Monitors",
          name_ar: "أجهزة مراقبة المرضى",
          summary_en:
            "Bedside patient monitors quoted to the facility's specification.",
          summary_ar: "أجهزة مراقبة المرضى بجانب السرير وفق مواصفات المنشأة.",
          whatItIs_en:
            "Bedside, wall-mounted or trolley-mounted patient monitors, quoted to the parameters, configuration and accessories stated in the customer's specification.",
          whatItIs_ar:
            "أجهزة مراقبة المرضى بجانب السرير أو المثبتة على الحائط أو المحمولة على عربة، يتم إعداد عروض أسعارها وفق المؤشرات والتكوين والملحقات الواردة في مواصفات العميل.",
          usedFor_en:
            "Ward, critical-care and recovery areas named in the customer's request.",
          usedFor_ar:
            "الأقسام ووحدات الرعاية الحرجة ومناطق الإفاقة المذكورة في طلب العميل.",
          applications_en: [
            "General ward bedside monitoring",
            "ICU and high-dependency units",
            "Post-operative recovery areas",
          ],
          applications_ar: [
            "المراقبة بجانب السرير في الأقسام العامة",
            "العناية المركزة ووحدات الرعاية المتوسطة",
            "مناطق الإفاقة بعد العمليات",
          ],
          industryIds: ["inpatient-wards", "critical-care"],
          selectionFactors: [
            {
              factor_en: "Monitored parameters",
              factor_ar: "المؤشرات المطلوب مراقبتها",
              detail_en: "As listed in the customer's specification.",
              detail_ar: "وفق ما يرد في مواصفات العميل.",
            },
            {
              factor_en: "Configuration",
              factor_ar: "التكوين",
              detail_en:
                "Bedside, wall-mounted or trolley-mounted, as specified.",
              detail_ar:
                "بجانب السرير أو مثبت على الحائط أو محمول على عربة، وفق المواصفات.",
            },
            ALTERNATIVES_SPECIFIED_ONLY,
          ],
          requestChecklist_en: [
            "Specification or datasheet",
            "Parameters and accessories required",
            "Quantity and department",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو ورقة البيانات",
            "المؤشرات والملحقات المطلوبة",
            "الكمية والقسم",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "pulse-oximetry-devices",
            "ecg-electrocardiographs",
          ],
          note: "specification-only — no standards, parameters or performance claims",
        }),
        guide({
          id: "ecg-electrocardiographs",
          linkedProductId: "ecg-machines",
          name_en: "ECG Machines",
          name_ar: "أجهزة تخطيط القلب",
          summary_en:
            "Electrocardiograph machines quoted to the lead configuration and options specified.",
          summary_ar:
            "أجهزة رسم القلب الكهربائي وفق عدد الأقطاب والخيارات المحددة.",
          whatItIs_en:
            "Electrocardiograph (ECG) machines in portable, trolley-mounted or workstation configurations, quoted to the lead configuration, output and accessories stated by the customer.",
          whatItIs_ar:
            "أجهزة رسم القلب الكهربائي بتكوين محمول أو على عربة أو كمحطة عمل ثابتة، يتم إعداد عروض أسعارها وفق عدد الأقطاب ونوع المخرجات والملحقات التي يحددها العميل.",
          usedFor_en:
            "Cardiac recording in the departments named in the customer's request.",
          usedFor_ar: "تسجيل تخطيط القلب في الأقسام المذكورة في طلب العميل.",
          applications_en: [
            "Emergency departments",
            "Outpatient clinics",
            "General wards",
          ],
          applications_ar: [
            "أقسام الطوارئ",
            "العيادات الخارجية",
            "الأقسام العامة",
          ],
          industryIds: ["emergency-care", "outpatient-care", "inpatient-wards"],
          selectionFactors: [
            {
              factor_en: "Lead configuration",
              factor_ar: "عدد الأقطاب",
              detail_en: "As stated in the customer's specification.",
              detail_ar: "وفق ما يرد في مواصفات العميل.",
            },
            {
              factor_en: "Output",
              factor_ar: "المخرجات",
              detail_en: "Printed or digital output, as specified.",
              detail_ar: "مخرجات مطبوعة أو رقمية، وفق المواصفات.",
            },
            ALTERNATIVES_SPECIFIED_ONLY,
          ],
          requestChecklist_en: [
            "Specification or datasheet",
            "Lead configuration and accessories",
            "Quantity and department",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو ورقة البيانات",
            "عدد الأقطاب والملحقات",
            "الكمية والقسم",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "bedside-patient-monitors",
            "pulse-oximetry-devices",
          ],
          note: "specification-only — no diagnostic or accuracy claims",
        }),
        guide({
          id: "pulse-oximetry-devices",
          linkedProductId: "pulse-oximeters",
          name_en: "Pulse Oximeters",
          name_ar: "أجهزة قياس نسبة الأكسجين بالنبض",
          summary_en:
            "Fingertip, handheld and tabletop pulse oximeters quoted to the stated specification.",
          summary_ar:
            "أجهزة قياس الأكسجين بالنبض للإصبع أو المحمولة باليد أو المكتبية وفق المواصفات المحددة.",
          whatItIs_en:
            "Pulse oximeters in fingertip, handheld or tabletop configurations, quoted to the probe types and power arrangement stated by the customer.",
          whatItIs_ar:
            "أجهزة قياس نسبة الأكسجين بالنبض بتكوين للإصبع أو محمول باليد أو مكتبي، يتم إعداد عروض أسعارها وفق أنواع المجسات ومصدر التغذية التي يحددها العميل.",
          usedFor_en:
            "Spot checks and monitoring in the wards, clinics and departments named in the request.",
          usedFor_ar:
            "القياسات الدورية والمراقبة في الأقسام والعيادات المذكورة في الطلب.",
          applications_en: [
            "Ward spot checks",
            "Emergency triage",
            "Outpatient clinics",
          ],
          applications_ar: [
            "القياسات الدورية في الأقسام",
            "فرز الحالات في الطوارئ",
            "العيادات الخارجية",
          ],
          industryIds: ["inpatient-wards", "emergency-care", "outpatient-care"],
          selectionFactors: [
            {
              factor_en: "Configuration",
              factor_ar: "التكوين",
              detail_en: "Fingertip, handheld or tabletop, as specified.",
              detail_ar: "للإصبع أو محمول باليد أو مكتبي، وفق المواصفات.",
            },
            {
              factor_en: "Probes",
              factor_ar: "المجسات",
              detail_en: "Probe types and sizes as stated by the customer.",
              detail_ar: "أنواع المجسات ومقاساتها كما يحددها العميل.",
            },
            ALTERNATIVES_SPECIFIED_ONLY,
          ],
          requestChecklist_en: [
            "Specification or datasheet",
            "Configuration and probe types",
            "Quantity and department",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو ورقة البيانات",
            "التكوين وأنواع المجسات",
            "الكمية والقسم",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "bedside-patient-monitors",
            "ecg-electrocardiographs",
          ],
          note: "specification-only — no accuracy claims",
        }),
      ],
    },
    {
      categoryId: "respiratory-emergency-equipment",
      title_en: "Respiratory & Emergency Equipment",
      title_ar: "أجهزة التنفس والطوارئ",
      intro_en:
        "Oxygen concentrators, suction units and emergency carts quoted to your specification.",
      intro_ar:
        "أجهزة تركيز الأكسجين وأجهزة الشفط وعربات الطوارئ وفق مواصفاتكم.",
      icon: "Wind",
      equipment: [
        guide({
          id: "oxygen-concentrator-units",
          linkedProductId: "oxygen-concentrators",
          name_en: "Oxygen Concentrators",
          name_ar: "أجهزة تركيز الأكسجين",
          summary_en:
            "Stationary and portable oxygen concentrators quoted to the stated specification.",
          summary_ar:
            "أجهزة تركيز الأكسجين الثابتة والمحمولة وفق المواصفات المحددة.",
          whatItIs_en:
            "Stationary or portable oxygen concentrators, quoted to the flow range, power arrangement and alarms stated in the customer's specification.",
          whatItIs_ar:
            "أجهزة تركيز الأكسجين الثابتة أو المحمولة، يتم إعداد عروض أسعارها وفق نطاق التدفق ومصدر التغذية والإنذارات الواردة في مواصفات العميل.",
          usedFor_en:
            "Bedside and ward use in the areas named in the customer's request.",
          usedFor_ar:
            "الاستخدام بجانب السرير وفي الأقسام المذكورة في طلب العميل.",
          applications_en: [
            "General ward bedside use",
            "Patient transport within the facility",
            "Areas where the customer specifies stand-alone units",
          ],
          applications_ar: [
            "الاستخدام بجانب السرير في الأقسام العامة",
            "نقل المرضى داخل المنشأة",
            "المناطق التي يحدد العميل لها أجهزة مستقلة",
          ],
          industryIds: ["inpatient-wards"],
          selectionFactors: [
            {
              factor_en: "Configuration",
              factor_ar: "التكوين",
              detail_en: "Stationary or portable, as specified.",
              detail_ar: "ثابت أو محمول، وفق المواصفات.",
            },
            {
              factor_en: "Flow range and power",
              factor_ar: "نطاق التدفق ومصدر التغذية",
              detail_en: "As stated in the customer's specification.",
              detail_ar: "وفق ما يرد في مواصفات العميل.",
            },
            ALTERNATIVES_SPECIFIED_ONLY,
          ],
          requestChecklist_en: [
            "Specification or datasheet",
            "Configuration and power requirements",
            "Quantity and department",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو ورقة البيانات",
            "التكوين ومتطلبات التغذية الكهربائية",
            "الكمية والقسم",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["suction-units", "bedside-patient-monitors"],
          note: "specification-only — no flow figures or therapy claims",
        }),
        guide({
          id: "suction-units",
          linkedProductId: "medical-suction-units",
          name_en: "Medical Suction Units",
          name_ar: "أجهزة الشفط الطبي",
          summary_en:
            "Portable and wall-mounted medical suction units quoted to the stated specification.",
          summary_ar:
            "أجهزة الشفط الطبي المحمولة والمثبتة على الحائط وفق المواصفات المحددة.",
          whatItIs_en:
            "Portable or wall-mounted medical suction units, quoted to the vacuum range, collection canister type and power arrangement stated by the customer.",
          whatItIs_ar:
            "أجهزة شفط طبي محمولة أو مثبتة على الحائط، يتم إعداد عروض أسعارها وفق نطاق الشفط ونوع وعاء التجميع ومصدر التغذية التي يحددها العميل.",
          usedFor_en:
            "Emergency, critical-care, operating and ward areas named in the customer's request.",
          usedFor_ar:
            "أقسام الطوارئ والرعاية الحرجة والعمليات والأقسام المذكورة في طلب العميل.",
          applications_en: [
            "Emergency departments",
            "ICU and recovery areas",
            "Delivery areas",
          ],
          applications_ar: [
            "أقسام الطوارئ",
            "العناية المركزة ومناطق الإفاقة",
            "أقسام الولادة",
          ],
          industryIds: [
            "emergency-care",
            "critical-care",
            "operating-theatres",
          ],
          selectionFactors: [
            {
              factor_en: "Configuration",
              factor_ar: "التكوين",
              detail_en: "Portable or wall-mounted, as specified.",
              detail_ar: "محمول أو مثبت على الحائط، وفق المواصفات.",
            },
            {
              factor_en: "Collection canister",
              factor_ar: "وعاء التجميع",
              detail_en: "Reusable or single-use, as stated by the customer.",
              detail_ar:
                "قابل لإعادة الاستخدام أو للاستخدام مرة واحدة، كما يحدده العميل.",
            },
            ALTERNATIVES_SPECIFIED_ONLY,
          ],
          requestChecklist_en: [
            "Specification or datasheet",
            "Configuration and canister type",
            "Quantity and department",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو ورقة البيانات",
            "التكوين ونوع وعاء التجميع",
            "الكمية والقسم",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "oxygen-concentrator-units",
            "resuscitation-carts",
          ],
          note: "specification-only — no vacuum figures or performance claims",
        }),
        guide({
          id: "resuscitation-carts",
          linkedProductId: "emergency-resuscitation-carts",
          name_en: "Emergency & Resuscitation Carts",
          name_ar: "عربات الطوارئ والإنعاش",
          summary_en:
            "Multi-drawer emergency and resuscitation carts quoted to the stated layout.",
          summary_ar: "عربات طوارئ وإنعاش متعددة الأدراج وفق التوزيع المحدد.",
          whatItIs_en:
            "Mobile multi-drawer carts for organising emergency supplies, quoted to the drawer layout, frame material and accessory mounts stated by the customer.",
          whatItIs_ar:
            "عربات متحركة متعددة الأدراج لتنظيم مستلزمات الطوارئ، يتم إعداد عروض أسعارها وفق توزيع الأدراج وخامة الهيكل وحوامل الملحقات التي يحددها العميل.",
          usedFor_en:
            "Emergency response points in the wards and departments named in the request.",
          usedFor_ar: "نقاط الاستجابة للطوارئ في الأقسام المذكورة في الطلب.",
          applications_en: [
            "Emergency departments",
            "Wards and ICU",
            "Operating and recovery areas",
          ],
          applications_ar: [
            "أقسام الطوارئ",
            "الأقسام والعناية المركزة",
            "غرف العمليات ومناطق الإفاقة",
          ],
          industryIds: ["emergency-care", "inpatient-wards", "critical-care"],
          selectionFactors: [
            {
              factor_en: "Drawer layout",
              factor_ar: "توزيع الأدراج",
              detail_en: "Number and arrangement of drawers, as specified.",
              detail_ar: "عدد الأدراج وترتيبها، وفق المواصفات.",
            },
            {
              factor_en: "Frame and accessories",
              factor_ar: "الهيكل والملحقات",
              detail_en: "Frame material and accessory mounts, as stated.",
              detail_ar: "خامة الهيكل وحوامل الملحقات، كما هو محدد.",
            },
            ALTERNATIVES_MATCHING,
          ],
          requestChecklist_en: [
            "Drawer layout and accessories",
            "Frame material, if specified",
            "Quantity and department",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "توزيع الأدراج والملحقات",
            "خامة الهيكل إن كانت محددة",
            "الكمية والقسم",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "treatment-instrument-trolleys",
            "suction-units",
          ],
          note: "cart only — contents are not part of the guide",
        }),
      ],
    },
    {
      categoryId: "sterilization-operating-room-equipment",
      title_en: "Sterilization & Operating Room Equipment",
      title_ar: "معدات التعقيم وغرف العمليات",
      intro_en:
        "Steam sterilizers, operating tables and surgical lights quoted to your specification.",
      intro_ar:
        "أجهزة التعقيم بالبخار وطاولات العمليات ومصابيح غرف العمليات وفق مواصفاتكم.",
      icon: "Lightbulb",
      equipment: [
        guide({
          id: "steam-sterilizers",
          linkedProductId: "autoclaves-sterilizers",
          name_en: "Steam Sterilizers",
          name_ar: "أجهزة التعقيم بالبخار",
          summary_en:
            "Benchtop and floor-standing steam sterilizers quoted to the stated specification.",
          summary_ar:
            "أجهزة تعقيم بالبخار مكتبية أو أرضية وفق المواصفات المحددة.",
          whatItIs_en:
            "Steam sterilizers (autoclaves) in benchtop or floor-standing configurations, quoted to the chamber capacity, cycle types and cycle-record output stated in the customer's specification.",
          whatItIs_ar:
            "أجهزة تعقيم بالبخار (أوتوكلاف) مكتبية أو أرضية، يتم إعداد عروض أسعارها وفق سعة الغرفة وأنواع الدورات وطريقة تسجيل الدورات الواردة في مواصفات العميل.",
          usedFor_en:
            "Instrument reprocessing in the sterile reprocessing department or the areas named in the request.",
          usedFor_ar:
            "إعادة تعقيم الأدوات في قسم التعقيم المركزي أو الأقسام المذكورة في الطلب.",
          applications_en: [
            "Sterile reprocessing / CSSD",
            "Operating room instrument reprocessing",
            "Departmental reprocessing areas",
          ],
          applications_ar: [
            "قسم التعقيم المركزي",
            "إعادة تعقيم أدوات غرف العمليات",
            "مناطق إعادة التعقيم بالأقسام",
          ],
          industryIds: ["sterile-services", "operating-theatres"],
          selectionFactors: [
            {
              factor_en: "Configuration",
              factor_ar: "التكوين",
              detail_en:
                "Benchtop or floor-standing, with the chamber capacity specified.",
              detail_ar: "مكتبي أو أرضي، مع تحديد سعة الغرفة.",
            },
            {
              factor_en: "Cycle types",
              factor_ar: "أنواع الدورات",
              detail_en: "As listed in the customer's specification.",
              detail_ar: "وفق ما يرد في مواصفات العميل.",
            },
            ALTERNATIVES_SPECIFIED_ONLY,
          ],
          requestChecklist_en: [
            "Specification or datasheet",
            "Chamber capacity and cycle types",
            "Quantity, power and utility requirements",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو ورقة البيانات",
            "سعة الغرفة وأنواع الدورات",
            "الكمية ومتطلبات الكهرباء والمرافق",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "treatment-instrument-trolleys",
            "surgical-operating-tables",
          ],
          note: "specification-only — no sterilization-performance claims or standards",
        }),
        guide({
          id: "surgical-operating-tables",
          linkedProductId: "operating-tables",
          name_en: "Operating Tables",
          name_ar: "طاولات العمليات",
          summary_en:
            "Manual and electro-hydraulic operating tables quoted to the stated specification.",
          summary_ar:
            "طاولات عمليات يدوية أو كهروهيدروليكية وفق المواصفات المحددة.",
          whatItIs_en:
            "Manual or electro-hydraulic operating tables, quoted to the adjustment type, tabletop, base and positioning accessories stated in the customer's specification.",
          whatItIs_ar:
            "طاولات عمليات يدوية أو كهروهيدروليكية، يتم إعداد عروض أسعارها وفق نوع التعديل وسطح الطاولة والقاعدة وملحقات تثبيت الوضعيات الواردة في مواصفات العميل.",
          usedFor_en:
            "Operating rooms and procedure suites named in the customer's request.",
          usedFor_ar: "غرف العمليات وغرف الإجراءات المذكورة في طلب العميل.",
          applications_en: [
            "General operating rooms",
            "Day-surgery suites",
            "Procedure rooms",
          ],
          applications_ar: [
            "غرف العمليات العامة",
            "وحدات جراحات اليوم الواحد",
            "غرف الإجراءات",
          ],
          industryIds: ["operating-theatres"],
          selectionFactors: [
            {
              factor_en: "Adjustment type",
              factor_ar: "نوع التعديل",
              detail_en: "Manual or electro-hydraulic, as specified.",
              detail_ar: "يدوي أو كهروهيدروليكي، وفق المواصفات.",
            },
            {
              factor_en: "Tabletop and accessories",
              factor_ar: "سطح الطاولة والملحقات",
              detail_en: "As listed in the customer's specification.",
              detail_ar: "وفق ما يرد في مواصفات العميل.",
            },
            ALTERNATIVES_IF_ALLOWED,
          ],
          requestChecklist_en: [
            "Specification or datasheet",
            "Adjustment type and accessories",
            "Quantity and room",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو ورقة البيانات",
            "نوع التعديل والملحقات",
            "الكمية والغرفة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["surgical-lights", "steam-sterilizers"],
          note: "specification-only — alternatives only where the customer's documents allow",
        }),
        guide({
          id: "surgical-lights",
          linkedProductId: "surgical-lighting",
          name_en: "Surgical Lights",
          name_ar: "مصابيح غرف العمليات",
          summary_en:
            "Ceiling-mounted and mobile surgical lights quoted to the stated specification.",
          summary_ar:
            "مصابيح غرف عمليات معلقة بالسقف أو متحركة وفق المواصفات المحددة.",
          whatItIs_en:
            "Ceiling-mounted or mobile surgical lights, quoted to the mounting arrangement, light heads and handle options stated in the customer's specification.",
          whatItIs_ar:
            "مصابيح غرف عمليات معلقة بالسقف أو على حامل متحرك، يتم إعداد عروض أسعارها وفق طريقة التعليق ورؤوس الإضاءة وخيارات المقابض الواردة في مواصفات العميل.",
          usedFor_en:
            "Operating, procedure and delivery rooms named in the customer's request.",
          usedFor_ar:
            "غرف العمليات والإجراءات والولادة المذكورة في طلب العميل.",
          applications_en: [
            "Operating rooms",
            "Procedure and examination rooms",
            "Delivery rooms",
          ],
          applications_ar: [
            "غرف العمليات",
            "غرف الإجراءات والفحص",
            "غرف الولادة",
          ],
          industryIds: ["operating-theatres", "emergency-care"],
          selectionFactors: [
            {
              factor_en: "Mounting",
              factor_ar: "طريقة التعليق",
              detail_en: "Ceiling-mounted or mobile floor stand, as specified.",
              detail_ar: "معلق بالسقف أو على حامل أرضي متحرك، وفق المواصفات.",
            },
            {
              factor_en: "Light heads",
              factor_ar: "رؤوس الإضاءة",
              detail_en: "Single or dual head, as specified.",
              detail_ar: "رأس واحد أو رأسان، وفق المواصفات.",
            },
            ALTERNATIVES_IF_ALLOWED,
          ],
          requestChecklist_en: [
            "Specification or datasheet",
            "Mounting arrangement, as specified",
            "Quantity and room",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو ورقة البيانات",
            "طريقة التعليق وفق المواصفات",
            "الكمية والغرفة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "surgical-operating-tables",
            "operating-room-gowns",
          ],
          note: "specification-only — alternatives only where the customer's documents allow",
        }),
      ],
    },
    {
      categoryId: "hospital-beds-patient-handling",
      title_en: "Hospital Beds & Patient Transfer",
      title_ar: "أسرّة المستشفيات ونقل المرضى",
      intro_en:
        "Hospital beds and stretchers quoted to the functions and configuration in your specification.",
      intro_ar:
        "أسرّة المستشفيات والنقالات وفق الوظائف والتكوين الوارد في مواصفاتكم.",
      icon: "Building2",
      equipment: [
        guide({
          id: "electric-beds",
          linkedProductId: "electric-hospital-beds",
          name_en: "Electric Hospital Beds",
          name_ar: "أسرّة المستشفيات الكهربائية",
          summary_en:
            "Electrically adjustable hospital beds quoted to the stated specification.",
          summary_ar:
            "أسرّة مستشفيات قابلة للتعديل كهربائيًا وفق المواصفات المحددة.",
          whatItIs_en:
            "Electrically adjustable hospital beds, quoted to the adjustment sections, side rails, castors and accessories stated in the customer's specification.",
          whatItIs_ar:
            "أسرّة مستشفيات قابلة للتعديل كهربائيًا، يتم إعداد عروض أسعارها وفق أقسام التعديل والحواجز الجانبية والعجلات والملحقات الواردة في مواصفات العميل.",
          usedFor_en:
            "General wards and patient rooms named in the customer's request.",
          usedFor_ar: "الأقسام العامة وغرف المرضى المذكورة في طلب العميل.",
          applications_en: [
            "General wards and patient rooms",
            "Maternity wards",
            "Long-stay wards",
          ],
          applications_ar: [
            "الأقسام العامة وغرف المرضى",
            "أقسام الولادة",
            "أقسام الإقامة الطويلة",
          ],
          industryIds: ["inpatient-wards"],
          selectionFactors: [
            {
              factor_en: "Adjustment",
              factor_ar: "التعديل",
              detail_en: "Sections and functions, as specified.",
              detail_ar: "أقسام التعديل والوظائف، وفق المواصفات.",
            },
            {
              factor_en: "Side rails and castors",
              factor_ar: "الحواجز الجانبية والعجلات",
              detail_en: "As stated by the customer.",
              detail_ar: "كما يحددها العميل.",
            },
            ALTERNATIVES_IF_ALLOWED,
          ],
          requestChecklist_en: [
            "Specification or datasheet",
            "Adjustment functions and accessories",
            "Quantity and ward",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو ورقة البيانات",
            "وظائف التعديل والملحقات",
            "الكمية والقسم",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "intensive-care-beds",
            "bedside-cabinets-overbed-tables",
          ],
          note: "specification-only — alternatives only where the customer's documents allow",
        }),
        guide({
          id: "intensive-care-beds",
          linkedProductId: "icu-beds",
          name_en: "ICU Beds",
          name_ar: "أسرّة العناية المركزة",
          summary_en:
            "Multi-section electric beds for intensive-care units, quoted to the stated specification.",
          summary_ar:
            "أسرّة كهربائية متعددة الأقسام لوحدات العناية المركزة وفق المواصفات المحددة.",
          whatItIs_en:
            "Multi-section electric beds for intensive-care units, quoted to the positioning functions, backrest release and equipment-mounting rails stated in the customer's specification.",
          whatItIs_ar:
            "أسرّة كهربائية متعددة الأقسام لوحدات العناية المركزة، يتم إعداد عروض أسعارها وفق وظائف الوضعيات وآلية تحرير مسند الظهر وسكك حمل المعدات الواردة في مواصفات العميل.",
          usedFor_en:
            "ICU, high-dependency and recovery areas named in the customer's request.",
          usedFor_ar:
            "العناية المركزة ووحدات الرعاية المتوسطة ومناطق الإفاقة المذكورة في طلب العميل.",
          applications_en: [
            "ICU patient rooms",
            "High-dependency units",
            "Post-operative recovery",
          ],
          applications_ar: [
            "غرف مرضى العناية المركزة",
            "وحدات الرعاية المتوسطة",
            "الإفاقة بعد العمليات",
          ],
          industryIds: ["critical-care"],
          selectionFactors: [
            {
              factor_en: "Positioning functions",
              factor_ar: "وظائف الوضعيات",
              detail_en: "As listed in the customer's specification.",
              detail_ar: "وفق ما يرد في مواصفات العميل.",
            },
            {
              factor_en: "Rails and accessories",
              factor_ar: "السكك والملحقات",
              detail_en: "Equipment-mounting rails and accessories, as stated.",
              detail_ar: "سكك حمل المعدات والملحقات، كما هو محدد.",
            },
            ALTERNATIVES_IF_ALLOWED,
          ],
          requestChecklist_en: [
            "Specification or datasheet",
            "Positioning functions and accessories",
            "Quantity and unit",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو ورقة البيانات",
            "وظائف الوضعيات والملحقات",
            "الكمية والوحدة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["electric-beds", "bedside-patient-monitors"],
          note: "specification-only — alternatives only where the customer's documents allow",
        }),
        guide({
          id: "manual-beds-stretchers",
          linkedProductId: "manual-hospital-beds-stretchers",
          name_en: "Manual Beds & Stretchers",
          name_ar: "الأسرّة اليدوية والنقالات",
          summary_en:
            "Crank-operated hospital beds and patient stretchers quoted to the stated requirement.",
          summary_ar:
            "أسرّة مستشفيات يدوية التعديل ونقالات مرضى وفق المتطلبات المحددة.",
          whatItIs_en:
            "Crank-operated hospital beds and patient stretchers, quoted to the adjustment, frame and wheel options stated by the customer.",
          whatItIs_ar:
            "أسرّة مستشفيات يدوية التعديل ونقالات مرضى، يتم إعداد عروض أسعارها وفق خيارات التعديل والهيكل والعجلات التي يحددها العميل.",
          usedFor_en:
            "Wards and patient transport between departments, as named in the request.",
          usedFor_ar: "الأقسام ونقل المرضى بين الأقسام، وفق ما يرد في الطلب.",
          applications_en: [
            "General wards",
            "Emergency department transport",
            "Transfers between departments",
          ],
          applications_ar: [
            "الأقسام العامة",
            "النقل داخل قسم الطوارئ",
            "النقل بين الأقسام",
          ],
          industryIds: ["inpatient-wards", "emergency-care"],
          selectionFactors: [
            {
              factor_en: "Type",
              factor_ar: "النوع",
              detail_en:
                "Manual bed, foldable stretcher or fixed-frame stretcher, as specified.",
              detail_ar:
                "سرير يدوي أو نقالة قابلة للطي أو نقالة ثابتة الهيكل، وفق المواصفات.",
            },
            {
              factor_en: "Frame and wheels",
              factor_ar: "الهيكل والعجلات",
              detail_en: "Frame material and wheel options, as stated.",
              detail_ar: "خامة الهيكل وخيارات العجلات، كما هو محدد.",
            },
            ALTERNATIVES_MATCHING,
          ],
          requestChecklist_en: [
            "Bed or stretcher type",
            "Adjustment and frame requirements",
            "Quantity and department",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع السرير أو النقالة",
            "متطلبات التعديل والهيكل",
            "الكمية والقسم",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "electric-beds",
            "treatment-instrument-trolleys",
          ],
          note: "matching or equivalent items on request",
        }),
      ],
    },
    {
      categoryId: "medical-furniture-trolleys-carts",
      title_en: "Medical Furniture & Trolleys",
      title_ar: "الأثاث الطبي والعربات",
      intro_en:
        "Examination couches, bedside cabinets and trolleys quoted to the layout and materials you state.",
      intro_ar:
        "أسرّة الفحص وخزائن السرير والعربات وفق التوزيع والخامات التي تحددونها.",
      icon: "SlidersHorizontal",
      equipment: [
        guide({
          id: "examination-couches",
          linkedProductId: "examination-beds-couches",
          name_en: "Examination Couches",
          name_ar: "أسرّة وفِراش الفحص الطبي",
          summary_en:
            "Examination couches for consultation and examination rooms.",
          summary_ar: "أسرّة فحص لغرف الكشف والفحص.",
          whatItIs_en:
            "Examination couches for consultation and examination rooms, quoted to the adjustment method, upholstery and accessories stated by the customer.",
          whatItIs_ar:
            "أسرّة فحص لغرف الكشف والفحص، يتم إعداد عروض أسعارها وفق طريقة التعديل والتنجيد والملحقات التي يحددها العميل.",
          usedFor_en:
            "Outpatient, consultation and examination rooms named in the request.",
          usedFor_ar: "العيادات الخارجية وغرف الكشف والفحص المذكورة في الطلب.",
          applications_en: [
            "Outpatient consultation rooms",
            "Specialist clinics",
            "Screening and examination rooms",
          ],
          applications_ar: [
            "غرف الكشف بالعيادات الخارجية",
            "العيادات التخصصية",
            "غرف الفحص والكشف الدوري",
          ],
          industryIds: ["outpatient-care"],
          selectionFactors: [
            {
              factor_en: "Adjustment",
              factor_ar: "التعديل",
              detail_en:
                "Fixed, manual or electric height adjustment, as specified.",
              detail_ar: "ارتفاع ثابت أو تعديل يدوي أو كهربائي، وفق المواصفات.",
            },
            {
              factor_en: "Upholstery and accessories",
              factor_ar: "التنجيد والملحقات",
              detail_en: "As stated by the customer.",
              detail_ar: "كما يحددها العميل.",
            },
            ALTERNATIVES_MATCHING,
          ],
          requestChecklist_en: [
            "Adjustment type and accessories",
            "Upholstery colour, if specified",
            "Quantity and room",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع التعديل والملحقات",
            "لون التنجيد إن كان محددًا",
            "الكمية والغرفة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "bedside-cabinets-overbed-tables",
            "treatment-instrument-trolleys",
          ],
          note: "matching or equivalent items on request",
        }),
        guide({
          id: "bedside-cabinets-overbed-tables",
          linkedProductId: "bedside-cabinets",
          name_en: "Bedside Cabinets & Overbed Tables",
          name_ar: "خزائن بجوار السرير وطاولات فوق السرير",
          summary_en:
            "Bedside cabinets and overbed tables for patient rooms and wards.",
          summary_ar:
            "خزائن بجوار السرير وطاولات فوق السرير لغرف المرضى والأقسام.",
          whatItIs_en:
            "Bedside cabinets, with or without a pull-out overbed table, quoted to the storage layout, surface material and castors stated by the customer.",
          whatItIs_ar:
            "خزائن بجوار السرير بطاولة منزلقة فوق السرير أو بدونها، يتم إعداد عروض أسعارها وفق توزيع التخزين وخامة السطح والعجلات التي يحددها العميل.",
          usedFor_en: "Patient rooms and wards named in the request.",
          usedFor_ar: "غرف المرضى والأقسام المذكورة في الطلب.",
          applications_en: [
            "General ward patient rooms",
            "ICU bedside storage",
            "Maternity and long-stay rooms",
          ],
          applications_ar: [
            "غرف المرضى بالأقسام العامة",
            "التخزين بجانب السرير في العناية المركزة",
            "غرف الولادة والإقامة الطويلة",
          ],
          industryIds: ["inpatient-wards", "critical-care"],
          selectionFactors: [
            {
              factor_en: "Configuration",
              factor_ar: "التكوين",
              detail_en:
                "Cabinet only, or cabinet with overbed table, as specified.",
              detail_ar:
                "خزانة فقط أو خزانة مع طاولة فوق السرير، وفق المواصفات.",
            },
            {
              factor_en: "Surfaces and castors",
              factor_ar: "الأسطح والعجلات",
              detail_en: "As stated by the customer.",
              detail_ar: "كما يحددها العميل.",
            },
            ALTERNATIVES_MATCHING,
          ],
          requestChecklist_en: [
            "Configuration and storage layout",
            "Surface material, if specified",
            "Quantity and ward",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "التكوين وتوزيع التخزين",
            "خامة السطح إن كانت محددة",
            "الكمية والقسم",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["electric-beds", "examination-couches"],
          note: "matching or equivalent items on request",
        }),
        guide({
          id: "treatment-instrument-trolleys",
          linkedProductId: "medical-emergency-trolleys",
          name_en: "Treatment & Instrument Trolleys",
          name_ar: "عربات العلاج والأدوات الطبية",
          summary_en:
            "Treatment, dressing and instrument trolleys for wards and procedure areas.",
          summary_ar: "عربات العلاج والغيارات والأدوات للأقسام وغرف الإجراءات.",
          whatItIs_en:
            "Treatment, dressing and instrument trolleys, quoted to the shelf or drawer layout, frame material and castors stated by the customer.",
          whatItIs_ar:
            "عربات العلاج والغيارات والأدوات، يتم إعداد عروض أسعارها وفق توزيع الأرفف أو الأدراج وخامة الهيكل والعجلات التي يحددها العميل.",
          usedFor_en:
            "Wards, procedure rooms and departments named in the request.",
          usedFor_ar: "الأقسام وغرف الإجراءات المذكورة في الطلب.",
          applications_en: [
            "Ward dressing rounds",
            "Instrument transport within departments",
            "Procedure rooms",
          ],
          applications_ar: [
            "جولات الغيار في الأقسام",
            "نقل الأدوات داخل الأقسام",
            "غرف الإجراءات",
          ],
          industryIds: [
            "inpatient-wards",
            "operating-theatres",
            "sterile-services",
          ],
          selectionFactors: [
            {
              factor_en: "Layout",
              factor_ar: "التوزيع",
              detail_en: "Shelves or drawers, as specified.",
              detail_ar: "أرفف أو أدراج، وفق المواصفات.",
            },
            {
              factor_en: "Frame material",
              factor_ar: "خامة الهيكل",
              detail_en: "Stainless or powder-coated steel, as specified.",
              detail_ar: "صلب مقاوم للصدأ أو صلب مطلي بالبودرة، وفق المواصفات.",
            },
            ALTERNATIVES_MATCHING,
          ],
          requestChecklist_en: [
            "Trolley type and layout",
            "Frame material, if specified",
            "Quantity and department",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع العربة وتوزيعها",
            "خامة الهيكل إن كانت محددة",
            "الكمية والقسم",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: ["resuscitation-carts", "steam-sterilizers"],
          note: "matching or equivalent items on request",
        }),
      ],
    },
    {
      categoryId: "surgical-supplies",
      title_en: "Surgical Supplies",
      title_ar: "المستلزمات الجراحية",
      intro_en:
        "Surgical gowns, sutures, drapes and masks quoted to the type, size and quantity in your specification.",
      intro_ar:
        "الملابس الجراحية والخيوط والأغطية والكمامات وفق النوع والمقاس والكمية الواردة في مواصفاتكم.",
      icon: "Container",
      equipment: [
        guide({
          id: "operating-room-gowns",
          linkedProductId: "surgical-gowns",
          name_en: "Surgical Gowns",
          name_ar: "الملابس الجراحية",
          summary_en:
            "Single-use and reusable surgical gowns quoted to the stated specification.",
          summary_ar:
            "ملابس جراحية للاستخدام مرة واحدة أو قابلة لإعادة الاستخدام وفق المواصفات المحددة.",
          whatItIs_en:
            "Single-use or reusable surgical gowns, quoted to the gown type, protection level and size range stated in the customer's specification.",
          whatItIs_ar:
            "ملابس جراحية للاستخدام مرة واحدة أو قابلة لإعادة الاستخدام، يتم إعداد عروض أسعارها وفق النوع ومستوى الحماية ونطاق المقاسات الوارد في مواصفات العميل.",
          usedFor_en:
            "Operating rooms and procedure areas named in the customer's request.",
          usedFor_ar: "غرف العمليات وغرف الإجراءات المذكورة في طلب العميل.",
          applications_en: [
            "Operating rooms",
            "Delivery rooms",
            "Day-surgery suites",
          ],
          applications_ar: [
            "غرف العمليات",
            "غرف الولادة",
            "وحدات جراحات اليوم الواحد",
          ],
          industryIds: ["operating-theatres"],
          selectionFactors: [
            {
              factor_en: "Type",
              factor_ar: "النوع",
              detail_en: "Single-use or reusable, as specified.",
              detail_ar:
                "للاستخدام مرة واحدة أو قابل لإعادة الاستخدام، وفق المواصفات.",
            },
            {
              factor_en: "Level and sizes",
              factor_ar: "المستوى والمقاسات",
              detail_en:
                "Protection level and size range, as stated by the customer.",
              detail_ar: "مستوى الحماية ونطاق المقاسات، كما يحددهما العميل.",
            },
            ALTERNATIVES_SPECIFIED_ONLY,
          ],
          requestChecklist_en: [
            "Specification or datasheet",
            "Type, level and size breakdown",
            "Quantity and packaging",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو ورقة البيانات",
            "النوع والمستوى وتوزيع المقاسات",
            "الكمية والعبوة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "drapes-and-medical-masks",
            "wound-closure-sutures",
          ],
          note: "specification-only — no barrier-performance claims or standards",
        }),
        guide({
          id: "wound-closure-sutures",
          linkedProductId: "surgical-sutures",
          name_en: "Surgical Sutures",
          name_ar: "الخيوط الجراحية",
          summary_en:
            "Absorbable and non-absorbable surgical sutures quoted to the stated specification.",
          summary_ar:
            "خيوط جراحية قابلة للامتصاص أو غير قابلة للامتصاص وفق المواصفات المحددة.",
          whatItIs_en:
            "Absorbable or non-absorbable surgical sutures, quoted to the material, size and needle configuration stated in the customer's specification.",
          whatItIs_ar:
            "خيوط جراحية قابلة للامتصاص أو غير قابلة للامتصاص، يتم إعداد عروض أسعارها وفق الخامة والمقاس وتكوين الإبرة الوارد في مواصفات العميل.",
          usedFor_en:
            "Wound and tissue closure in the departments named in the customer's request.",
          usedFor_ar:
            "إغلاق الجروح والأنسجة في الأقسام المذكورة في طلب العميل.",
          applications_en: [
            "Operating rooms",
            "Emergency departments",
            "Delivery rooms",
          ],
          applications_ar: ["غرف العمليات", "أقسام الطوارئ", "غرف الولادة"],
          industryIds: ["operating-theatres", "emergency-care"],
          selectionFactors: [
            {
              factor_en: "Material",
              factor_ar: "الخامة",
              detail_en: "Absorbable or non-absorbable, as specified.",
              detail_ar: "قابلة للامتصاص أو غير قابلة للامتصاص، وفق المواصفات.",
            },
            {
              factor_en: "Size and needle",
              factor_ar: "المقاس والإبرة",
              detail_en: "As listed in the customer's specification.",
              detail_ar: "وفق ما يرد في مواصفات العميل.",
            },
            ALTERNATIVES_SPECIFIED_ONLY,
          ],
          requestChecklist_en: [
            "Specification or item list",
            "Material, size and needle for each line",
            "Quantity and packaging",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو قائمة الأصناف",
            "الخامة والمقاس والإبرة لكل بند",
            "الكمية والعبوة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "operating-room-gowns",
            "drapes-and-medical-masks",
          ],
          note: "specification-only — no sizes, packaging or performance claims",
        }),
        guide({
          id: "drapes-and-medical-masks",
          linkedProductId: "surgical-drapes-masks",
          name_en: "Surgical Drapes & Medical Masks",
          name_ar: "أغطية العمليات والكمامات الطبية",
          summary_en:
            "Surgical drapes and medical face masks quoted to the stated specification.",
          summary_ar: "أغطية العمليات والكمامات الطبية وفق المواصفات المحددة.",
          whatItIs_en:
            "Single-use surgical drapes, fenestrated or plain, and medical face masks, quoted to the type and barrier level stated in the customer's specification.",
          whatItIs_ar:
            "أغطية عمليات للاستخدام مرة واحدة، بفتحة أو بدون، وكمامات طبية، يتم إعداد عروض أسعارها وفق النوع ومستوى الحاجز الوارد في مواصفات العميل.",
          usedFor_en:
            "Operating rooms, procedure areas and departments named in the request.",
          usedFor_ar: "غرف العمليات وغرف الإجراءات والأقسام المذكورة في الطلب.",
          applications_en: [
            "Operating rooms",
            "Procedure rooms",
            "Outpatient and emergency areas",
          ],
          applications_ar: [
            "غرف العمليات",
            "غرف الإجراءات",
            "العيادات الخارجية وأقسام الطوارئ",
          ],
          industryIds: [
            "operating-theatres",
            "emergency-care",
            "outpatient-care",
          ],
          selectionFactors: [
            {
              factor_en: "Drape type",
              factor_ar: "نوع الغطاء",
              detail_en: "Fenestrated or plain, as specified.",
              detail_ar: "بفتحة أو بدون، وفق المواصفات.",
            },
            {
              factor_en: "Mask type",
              factor_ar: "نوع الكمامة",
              detail_en: "As stated in the customer's specification.",
              detail_ar: "وفق ما يرد في مواصفات العميل.",
            },
            ALTERNATIVES_SPECIFIED_ONLY,
          ],
          requestChecklist_en: [
            "Specification or datasheet",
            "Drape and mask types for each line",
            "Quantity and packaging",
            DOCUMENTS_EN,
            CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المواصفات أو ورقة البيانات",
            "أنواع الأغطية والكمامات لكل بند",
            "الكمية والعبوة",
            DOCUMENTS_AR,
            CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "operating-room-gowns",
            "wound-closure-sutures",
          ],
          note: "specification-only — no barrier-performance claims or standards",
        }),
      ],
    },
  ],

  replacement: {
    title_en: "Specified Items, Equivalents & Replacements",
    title_ar: "الأصناف المحددة والبدائل والاستبدالات",
    intro_en:
      "Healthcare requests often name a specific item, manufacturer or model. GOLTENS can quote the specified item for every guide on this page. Matching or equivalent items depend on the item group below. To replace an item already in use, start from its nameplate or label.",
    intro_ar:
      "كثيرًا ما تحدد طلبات المنشآت الصحية صنفًا أو مصنعًا أو طرازًا بعينه. ويمكن لـGOLTENS إعداد عرض سعر للصنف المحدد لكل الأدلة الواردة في هذه الصفحة، بينما تعتمد الأصناف المطابقة أو المكافئة على مجموعة الصنف الموضحة أدناه. ولاستبدال صنف مستخدم حاليًا، ابدأوا من لوحة بياناته أو ملصقه.",
    flowTitle_en: "How a specified-item request works",
    flowTitle_ar: "كيف يتم التعامل مع طلب الأصناف المحددة",
    flow_en: [
      "Item and department",
      "Customer specification or datasheet",
      "Manufacturer and model, if specified",
      "Whether alternatives are accepted",
      "Item information review",
      "Specified item, or a permitted matching or equivalent item",
      "Quotation",
    ],
    flow_ar: [
      "الصنف والقسم",
      "مواصفات العميل أو ورقة البيانات",
      "المصنع والطراز إن كانا محددين",
      "ما إذا كانت البدائل مقبولة",
      "مراجعة بيانات الصنف",
      "الصنف المحدد أو صنف مطابق أو مكافئ مسموح",
      "عرض السعر",
    ],
    groups: [
      {
        title_en: "All items",
        title_ar: "لجميع الأصناف",
        items_en: [
          "Item name and the customer's specification or datasheet",
          "Manufacturer and model, only if specified by the customer",
          "Catalogue or part number, if available",
          "Whether alternatives are accepted",
          "Quantity and department",
        ],
        items_ar: [
          "اسم الصنف ومواصفات العميل أو ورقة البيانات",
          "المصنع والطراز، فقط إذا حددهما العميل",
          "رقم الكتالوج أو رقم القطعة إن توفر",
          "ما إذا كانت البدائل مقبولة",
          "الكمية والقسم",
        ],
      },
      {
        title_en: "Matching or equivalent items on request",
        title_ar: "أصناف مطابقة أو مكافئة عند الطلب",
        items_en: [
          "Examination couches",
          "Bedside cabinets & overbed tables",
          "Treatment & instrument trolleys",
          "Emergency & resuscitation carts",
          "Manual beds & stretchers",
        ],
        items_ar: [
          "أسرّة الفحص",
          "خزائن السرير وطاولات فوق السرير",
          "عربات العلاج والأدوات",
          "عربات الطوارئ والإنعاش",
          "الأسرّة اليدوية والنقالات",
        ],
      },
      {
        title_en: "Alternatives only where your documents allow them",
        title_ar: "بدائل فقط إذا سمحت مستنداتكم بذلك",
        items_en: [
          "Electric hospital beds",
          "ICU beds",
          "Operating tables",
          "Surgical lights",
        ],
        items_ar: [
          "أسرّة المستشفيات الكهربائية",
          "أسرّة العناية المركزة",
          "طاولات العمليات",
          "مصابيح غرف العمليات",
        ],
      },
      {
        title_en: "Specified items only",
        title_ar: "الأصناف المحددة فقط",
        items_en: [
          "Patient monitors",
          "ECG machines",
          "Pulse oximeters",
          "Oxygen concentrators",
          "Medical suction units",
          "Steam sterilizers",
          "Surgical sutures",
          "Surgical gowns",
          "Surgical drapes",
          "Medical masks",
        ],
        items_ar: [
          "أجهزة مراقبة المرضى",
          "أجهزة تخطيط القلب",
          "أجهزة قياس نسبة الأكسجين بالنبض",
          "أجهزة تركيز الأكسجين",
          "أجهزة الشفط الطبي",
          "أجهزة التعقيم بالبخار",
          "الخيوط الجراحية",
          "الملابس الجراحية",
          "أغطية العمليات",
          "الكمامات الطبية",
        ],
      },
      {
        title_en: "Replacing an item in use",
        title_ar: "استبدال صنف مستخدم حاليًا",
        items_en: [
          "Photo of the existing item and its nameplate or label",
          "Department and location",
          "Quantity to replace",
        ],
        items_ar: [
          "صورة الصنف الحالي ولوحة بياناته أو ملصقه",
          "القسم والموقع",
          "الكمية المطلوب استبدالها",
        ],
      },
    ],
    note_en: `Equivalence must consider the item's specification, configuration and intended use as stated by the customer — never the item name alone. ${EQUIVALENCE_EN}`,
    note_ar: `يجب أن يراعي التكافؤ مواصفات الصنف وتكوينه والاستخدام المطلوب كما يحددها العميل، وليس اسم الصنف وحده. ${EQUIVALENCE_AR}`,
    ctaLabel_en: "Request a quotation for specified items",
    ctaLabel_ar: "اطلب عرض سعر للأصناف المحددة",
    prefill_en:
      "Specified items, equivalents and replacements — Hospital Equipment & Medical Supplies",
    prefill_ar:
      "أصناف محددة وبدائل واستبدالات — تجهيزات المستشفيات والمستلزمات الطبية",
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
      "Quantity",
      "Customer technical specification or datasheet",
      "Department / intended use",
      "Delivery location",
      "Quotation deadline",
    ],
    checklist_ar: [
      "اسم الصنف أو وصفه",
      "الكمية",
      "المواصفات الفنية للعميل أو ورقة البيانات",
      "القسم / الاستخدام المطلوب",
      "موقع التوريد",
      "الموعد النهائي لتقديم عرض السعر",
    ],
    secondaryChecklist: {
      title_en: "Useful information",
      title_ar: "بيانات مفيدة",
      items_en: [
        "Manufacturer/model, if specified by the customer",
        "Whether alternatives are accepted",
        "Catalogue or part number",
        "Configuration",
        "Power requirements",
        "Accessories and consumables",
        "Dimensions/capacity, where specified",
        "Sizes and single-use/reusable requirement for surgical supplies",
        "Project/tender reference",
        "Documents required by the customer",
        "Photo/nameplate of the existing item for a replacement",
      ],
      items_ar: [
        "المصنع/الطراز، إذا حدده العميل",
        "ما إذا كانت البدائل مقبولة",
        "رقم الكتالوج أو رقم القطعة",
        "التكوين",
        "متطلبات التغذية الكهربائية",
        "الملحقات والمستهلكات",
        "الأبعاد/السعة، إن كانت محددة",
        "المقاسات واشتراط الاستخدام مرة واحدة أو إعادة الاستخدام للمستلزمات الجراحية",
        "مرجع المشروع/المناقصة",
        "المستندات التي يطلبها العميل",
        "صورة/لوحة بيانات الصنف الحالي عند الاستبدال",
      ],
    },
    checklistNote_en: DISCLAIMER_EN,
    checklistNote_ar: DISCLAIMER_AR,
    processTitle_en: "How GOLTENS handles the request",
    processTitle_ar: "كيف تتعامل GOLTENS مع الطلب",
    steps: [
      {
        title_en: "Healthcare Requirement",
        title_ar: "متطلبات التوريد الطبي",
        description_en:
          "Send the item list, BOQ or equipment schedule with the specifications and quantities required through the quotation form on this page.",
        description_ar:
          "أرسلوا قائمة الأصناف أو جدول الكميات أو قائمة المعدات مع المواصفات والكميات المطلوبة من خلال نموذج طلب عرض السعر في هذه الصفحة.",
      },
      {
        title_en: "Specification / BOQ Review",
        title_ar: "مراجعة المواصفات / جدول الكميات",
        description_en:
          "Our team reviews the information provided and asks for anything needed to identify each item.",
        description_ar:
          "يراجع فريقنا البيانات المقدمة ويطلب أي بيانات لازمة لتحديد كل صنف.",
      },
      {
        title_en: "Sourcing to the Stated Requirement",
        title_ar: "التوريد وفق المتطلبات المحددة",
        description_en:
          "Items are sourced to match the stated specification and configuration — or, where the item group and your documents allow, a matching or equivalent item.",
        description_ar:
          "يتم توفير الأصناف المطابقة للمواصفات والتكوين المحدد، أو صنف مطابق أو مكافئ إذا سمحت مجموعة الصنف ومستنداتكم بذلك.",
      },
      {
        title_en: "Quotation",
        title_ar: "عرض السعر",
        description_en:
          "You receive a quotation stating the offered items, availability and lead time. Final acceptance remains with the customer or responsible healthcare/technical authority, as applicable.",
        description_ar:
          "تتسلمون عرض سعر يوضح الأصناف المقترحة وتوافرها ومدة التوريد، ويظل القبول النهائي من مسؤولية العميل أو الجهة الطبية أو الفنية المسؤولة، بحسب الحالة.",
      },
    ],
  },

  quote: {
    title_en: "Request a Quotation",
    title_ar: "اطلب عرض سعر",
    subtitle_en:
      "Send your BOQ, equipment schedule, tender list or item list with the specifications and quantities required. Items are available on request and quoted against the stated requirements.",
    subtitle_ar:
      "أرسلوا جدول الكميات أو قائمة المعدات أو قائمة المناقصة أو قائمة الأصناف مع المواصفات والكميات المطلوبة. الأصناف متاحة حسب الطلب ويتم إعداد عرض سعرها وفق المتطلبات المذكورة.",
  },
};

/** Compact-layout page extras for Healthcare (see `compact-guide-page.ts`). */
export const healthcarePage: CompactGuidePage = {
  heroPrimaryCta_en: "Request a Quotation",
  heroPrimaryCta_ar: "اطلب عرض سعر",
  heroSecondaryCta: {
    label_en: "View Procurement Sectors",
    label_ar: "عرض قطاعات التوريد",
    href: "/sectors",
  },
  labels: {
    categoryNav_en: "Equipment families",
    categoryNav_ar: "مجموعات التجهيزات",
    contextItems_en: "Typical items",
    contextItems_ar: "الأصناف المعتادة",
    contextRoutes_en: "Covered by",
    contextRoutes_ar: "يغطيها قطاع",
    details_en: "Details and quotation information",
    details_ar: "التفاصيل وبيانات عرض السعر",
    replacementGroups_en: "Quotation basis by item group",
    replacementGroups_ar: "أساس عرض السعر حسب مجموعة الصنف",
  },
  guidePresentation: "rows",
  projectRoutes: {
    "patient-transport-within-facility": ["commercial-vehicles"],
    "hospital-boqs-multiple-trades": [
      "electrical-energy",
      "fire-protection",
      "construction",
      "industrial-chemicals",
      "commercial-vehicles",
      "global-sourcing",
    ],
  },
  routing: {
    title_en: "Requirements Covered by Other Sectors",
    title_ar: "متطلبات تغطيها قطاعات أخرى",
    intro_en:
      "Hospital BOQs often include items outside these six families. These GOLTENS sectors cover them, and they can be included in the same request.",
    intro_ar:
      "تتضمن جداول كميات المستشفيات كثيرًا أصنافًا خارج هذه المجموعات الست، وتغطيها قطاعات GOLTENS التالية، ويمكن إدراجها ضمن الطلب نفسه.",
    routes: [
      {
        sectorSlug: "electrical-energy",
        title_en: "Electrical & Energy Equipment",
        title_ar: "معدات الكهرباء والطاقة",
        items_en:
          "Electrical distribution, standby power and energy equipment for healthcare facilities",
        items_ar:
          "معدات التوزيع الكهربائي والطاقة الاحتياطية ومعدات الطاقة للمنشآت الصحية",
      },
      {
        sectorSlug: "fire-protection",
        title_en: "Fire Protection Equipment",
        title_ar: "معدات مكافحة الحريق",
        items_en:
          "Fire protection equipment for healthcare buildings and facilities",
        items_ar: "معدات مكافحة الحريق للمباني والمنشآت الصحية",
      },
      {
        sectorSlug: "construction",
        title_en: "Construction & Infrastructure Materials",
        title_ar: "مواد البناء والبنية التحتية",
        items_en:
          "Construction and infrastructure materials for healthcare projects",
        items_ar: "مواد البناء والبنية التحتية لمشروعات المنشآت الصحية",
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
        sectorSlug: "commercial-vehicles",
        title_en: "Commercial Vehicles",
        title_ar: "المركبات التجارية",
        items_en:
          "Ambulances and commercial vehicles according to fleet requirements",
        items_ar: "سيارات الإسعاف والمركبات التجارية وفق متطلبات الأسطول",
      },
      {
        sectorSlug: "global-sourcing",
        title_en: "Global Sourcing",
        title_ar: "التوريد الدولي",
        items_en: "Hard-to-source items and specification-based procurement",
        items_ar: "الأصناف صعبة التوفير والتوريد وفق المواصفات",
      },
      {
        sectorSlug: "government-procurement",
        title_en: "Government & Public-Sector Procurement",
        title_ar: "التوريدات الحكومية والعامة",
        items_en: "Tender and BOQ-based public-sector procurement",
        items_ar: "توريدات القطاع العام وفق المناقصات وجداول الكميات",
      },
    ],
  },
};
