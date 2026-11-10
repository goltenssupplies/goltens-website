import type { KnowledgeItem } from "@/data/knowledge/types";

/**
 * Electrical & Energy Knowledge Center articles — written to the editorial
 * standard in `data/knowledge/EDITORIAL.md`. Standards-based specification
 * guidance only: no brand, stock, certification, client, or lead-time claim
 * appears below, and nothing presents GOLTENS as a manufacturer or an
 * authorized agent. Network voltages and ratings are described as values
 * the buyer confirms with their own distribution company / consultant.
 *
 * Search intent per article (editorial metadata, not rendered):
 * - medium-voltage-switchgear-specification-guide — informational /
 *   commercial investigation: an engineer preparing an MV switchgear
 *   specification or RFQ.
 * - generator-ratings-standby-prime-continuous — informational: a buyer
 *   comparing generator offers quoted on different rating classes.
 * - low-voltage-distribution-panel-specification — informational /
 *   commercial investigation: an engineer preparing an LV panel RFQ.
 */
const COVER_IMAGE = "/images/categories/electrical-energy-new.jpg";
const AUTHOR = "GOLTENS Procurement Team";
const REVIEWED = "2026-11-10";

export const electricalEnergyArticles: KnowledgeItem[] = [
  {
    id: "medium-voltage-switchgear-specification-guide",
    slug: "medium-voltage-switchgear-specification-guide",
    type: "buying-guide",
    title_en: "How to Specify Medium Voltage Switchgear",
    title_ar: "كيف تكتب مواصفات لوحات الجهد المتوسط",
    summary_en:
      "The choices and ratings a medium voltage switchgear enquiry must state — insulation, network function, voltages, internal arc classification — so that offers can be compared.",
    summary_ar:
      "الاختيارات والقيم المقننة التي يجب أن يتضمنها طلب توريد لوحات الجهد المتوسط — نوع العزل، الوظيفة في الشبكة، الجهود، تصنيف القوس الداخلي — حتى تصبح العروض قابلة للمقارنة.",
    sections: [
      {
        heading_en: "Scope: What the Standard Covers",
        heading_ar: "النطاق: ما الذي تغطيه المواصفة",
        body_en:
          "Medium voltage switchgear receives power from the distribution network and switches, protects and isolates the feeders and transformers of a facility. Factory-assembled metal-enclosed switchgear for rated voltages above 1 kV and up to and including 52 kV is covered by IEC 62271-200, the reference most project specifications use. Air-insulated, gas-insulated and ring main unit designs all fall under this same standard.",
        body_ar:
          "تستقبل لوحات الجهد المتوسط التغذية من شبكة التوزيع وتقوم بفصل وحماية وعزل المغذيات والمحولات داخل المنشأة. وتخضع اللوحات المعدنية المغلقة المجمّعة في المصنع للجهود المقننة الأعلى من 1 ك.ف وحتى 52 ك.ف للمواصفة IEC 62271-200، وهي المرجع الذي تعتمد عليه أغلب مواصفات المشروعات. وتندرج اللوحات المعزولة بالهواء والمعزولة بالغاز ووحدات الحلقة الرئيسية كلها تحت هذه المواصفة نفسها.",
      },
      {
        heading_en: "First Choice: Insulation Medium (AIS or GIS)",
        heading_ar: "الاختيار الأول: وسط العزل (AIS أو GIS)",
        body_en:
          "AIS and GIS describe how the live parts are insulated, not what the panel does in the network. State the insulation medium in the enquiry; do not leave it to each bidder.",
        body_ar:
          "يصف المصطلحان AIS و GIS طريقة عزل الأجزاء الحية، وليس وظيفة اللوحة في الشبكة. اذكروا وسط العزل في طلب التوريد ولا تتركوه لاختيار كل متقدم.",
        table: {
          caption_en: "Insulation Medium",
          caption_ar: "وسط العزل",
          headers_en: ["How It Is Built", "Where It Fits"],
          headers_ar: ["طريقة التصنيع", "أين يناسب"],
          rows: [
            {
              label_en: "Air-insulated switchgear (AIS)",
              label_ar: "لوحات معزولة بالهواء (AIS)",
              values_en: [
                "Busbars and connections insulated by air at atmospheric pressure; circuit breaker commonly withdrawable",
                "Rooms with adequate space where breakers must be inspected or exchanged on site",
              ],
              values_ar: [
                "القضبان والتوصيلات معزولة بالهواء عند الضغط الجوي، والقاطع غالبًا قابل للسحب",
                "الغرف ذات المساحة الكافية التي تتطلب فحص القواطع أو استبدالها في الموقع",
              ],
            },
            {
              label_en: "Gas-insulated switchgear (GIS)",
              label_ar: "لوحات معزولة بالغاز (GIS)",
              values_en: [
                "Live parts sealed in gas-filled tanks; circuit breaker normally fixed",
                "Limited space, or dusty, humid or polluted locations, with little access to live parts for maintenance",
              ],
              values_ar: [
                "الأجزاء الحية محكمة داخل خزانات مملوءة بالغاز، والقاطع عادةً ثابت",
                "المساحات المحدودة أو المواقع ذات الأتربة والرطوبة والتلوث، مع وصول محدود للأجزاء الحية للصيانة",
              ],
            },
          ],
        },
      },
      {
        heading_en: "Second Choice: Function in the Network (Primary or RMU)",
        heading_ar: "الاختيار الثاني: الوظيفة في الشبكة (توزيع رئيسي أو RMU)",
        body_en:
          "A ring main unit is not a third insulation type. It is a compact unit for secondary distribution, and it can itself be gas-insulated, air-insulated or solid-insulated. The real choice is between primary distribution switchgear and a ring main unit.",
        body_ar:
          "وحدة الحلقة الرئيسية ليست نوعًا ثالثًا من العزل. هي وحدة مدمجة للتوزيع الثانوي، وقد تكون هي نفسها معزولة بالغاز أو بالهواء أو بعازل صلب. فالاختيار الحقيقي يكون بين لوحات التوزيع الرئيسي ووحدة الحلقة الرئيسية.",
        table: {
          caption_en: "Network Function",
          caption_ar: "الوظيفة في الشبكة",
          headers_en: ["Switching Devices", "Typical Position"],
          headers_ar: ["أجهزة الفصل", "الموقع المعتاد"],
          rows: [
            {
              label_en: "Primary distribution switchgear",
              label_ar: "لوحات التوزيع الرئيسي",
              values_en: [
                "A circuit breaker with protection relay in every panel; busbar sections and couplers",
                "Main intake substation of a plant, utility substation, large feeders",
              ],
              values_ar: [
                "قاطع مع مرحل حماية في كل خلية، مع أقسام قضبان وروابط",
                "محطة الاستقبال الرئيسية للمنشأة، محطات شركة التوزيع، المغذيات الكبيرة",
              ],
            },
            {
              label_en: "Ring main unit (RMU)",
              label_ar: "وحدة الحلقة الرئيسية (RMU)",
              values_en: [
                "Load-break switches on the ring cables, plus a switch-fuse or circuit breaker protecting the transformer",
                "Secondary distribution: one transformer substation on a ring or radial cable network",
              ],
              values_ar: [
                "مفاتيح فصل الحمل على كابلات الحلقة، مع مفتاح بمصهر أو قاطع لحماية المحول",
                "التوزيع الثانوي: محطة محول واحدة على شبكة كابلات حلقية أو شعاعية",
              ],
            },
          ],
        },
      },
      {
        heading_en: "Nominal Network Voltage and Rated Equipment Voltage",
        heading_ar: "جهد الشبكة الاسمي والجهد المقنن للمعدات",
        body_en:
          "These are two different figures and both belong in the enquiry. The nominal system voltage names the network. The rated voltage of the switchgear is the highest voltage for equipment — the upper limit the equipment is built and tested for. IEC 60038 pairs them.",
        body_ar:
          "هاتان قيمتان مختلفتان ويجب ذكرهما معًا في طلب التوريد. الجهد الاسمي للنظام هو الذي تُسمّى به الشبكة. أما الجهد المقنن للوحة فهو أعلى جهد للمعدات — أي الحد الأعلى الذي تُصنَّع المعدة وتُختبر عليه. وتربط المواصفة IEC 60038 بين القيمتين.",
        table: {
          caption_en: "Voltage Pairs Common on Egyptian Distribution Networks",
          caption_ar: "أزواج الجهود الشائعة في شبكات التوزيع المصرية",
          headers_en: ["Rated Voltage of Equipment"],
          headers_ar: ["الجهد المقنن للمعدات"],
          rows: [
            {
              label_en: "11 kV nominal network",
              label_ar: "شبكة جهدها الاسمي 11 ك.ف",
              values_en: ["12 kV"],
              values_ar: ["12 ك.ف"],
            },
            {
              label_en: "22 kV nominal network",
              label_ar: "شبكة جهدها الاسمي 22 ك.ف",
              values_en: ["24 kV"],
              values_ar: ["24 ك.ف"],
            },
          ],
        },
        callout: {
          body_en:
            'Write both values, for example "network 11 kV, switchgear rated 12 kV". The network voltage and the fault level at your connection point are set by your electricity distribution company — confirm them in writing before issuing the enquiry.',
          body_ar:
            "اكتبوا القيمتين معًا، مثل: «الشبكة 11 ك.ف، واللوحة بجهد مقنن 12 ك.ف». جهد الشبكة ومستوى القصر عند نقطة الربط تحددهما شركة توزيع الكهرباء التابعين لها — تأكدوا منهما كتابيًا قبل إصدار طلب التوريد.",
        },
      },
      {
        heading_en: "Ratings Your Enquiry Must State",
        heading_ar: "القيم المقننة التي يجب ذكرها في الطلب",
        body_en:
          "These values come from the connection data and the consultant's short-circuit study, not from the supplier. Offers built on assumed ratings cannot be compared with one another.",
        body_ar:
          "تؤخذ هذه القيم من بيانات الربط ومن دراسة تيارات القصر التي يعدّها الاستشاري، وليس من المورد. والعروض المبنية على قيم مفترضة لا يمكن مقارنتها ببعضها.",
        list_en: [
          "Nominal network voltage and rated voltage of the switchgear",
          "Rated insulation levels (power-frequency and lightning impulse withstand voltages)",
          "Rated frequency",
          "Rated continuous current of the busbars and of each feeder",
          "Rated short-time withstand current and its duration, and rated short-circuit breaking current of the breakers",
          "Number and function of panels: incomer, outgoing feeder, transformer feeder, bus coupler, metering",
          "Protection, metering and communication requirements for each panel",
          "Auxiliary control voltage",
        ],
        list_ar: [
          "الجهد الاسمي للشبكة والجهد المقنن للوحة",
          "مستويات العزل المقننة (جهد التحمل عند تردد القدرة وجهد التحمل النبضي)",
          "التردد المقنن",
          "التيار المستمر المقنن لقضبان التوزيع ولكل مغذٍّ",
          "تيار التحمل المقنن لزمن قصير ومدته، وتيار القطع المقنن عند القصر للقواطع",
          "عدد الخلايا ووظيفة كل منها: دخول، خروج، مغذي محول، رابط قضبان، قياس",
          "متطلبات الحماية والقياس والاتصال لكل خلية",
          "جهد دوائر التحكم المساعدة",
        ],
      },
      {
        heading_en: "Internal Arc Classification (IAC)",
        heading_ar: "تصنيف القوس الداخلي (IAC)",
        body_en:
          "IAC is an optional classification in IEC 62271-200. A manufacturer may declare it only after an internal arc type test, and it concerns the protection of people near the switchgear in normal operating condition, with doors and covers closed. An assembly can comply with the standard without any IAC rating, so if your project needs one, the enquiry must ask for it and state all four parts of the designation.",
        body_ar:
          "تصنيف IAC اختياري في المواصفة IEC 62271-200. ولا يحق للمصنّع إعلانه إلا بعد اختبار نوعي للقوس الداخلي، وهو يخص حماية الأشخاص القريبين من اللوحة في حالة التشغيل العادية والأبواب والأغطية مغلقة. ويمكن أن تكون اللوحة مطابقة للمواصفة دون أي تصنيف IAC، لذلك إذا كان مشروعكم يتطلبه فيجب أن ينص عليه طلب التوريد وأن يذكر الأجزاء الأربعة للتسمية.",
        table: {
          caption_en:
            "Reading an IAC Designation — Example: IAC AFLR 25 kA 1 s",
          caption_ar: "قراءة تسمية IAC — مثال: IAC AFLR 25 kA 1 s",
          headers_en: ["Meaning"],
          headers_ar: ["المعنى"],
          rows: [
            {
              label_en: "Accessibility type: A or B",
              label_ar: "نوع الوصول: A أو B",
              values_en: [
                "A = access restricted to authorised personnel; B = unrestricted access, including the general public",
              ],
              values_ar: [
                "A = الوصول مقصور على الأشخاص المصرح لهم؛ B = وصول غير مقيّد يشمل عامة الناس",
              ],
            },
            {
              label_en: "Classified sides: F, L, R",
              label_ar: "الجوانب المصنّفة: F و L و R",
              values_en: [
                "Front, lateral and rear — only the sides listed were tested for accessibility",
              ],
              values_ar: [
                "الأمام والجانبان والخلف — والجوانب المذكورة فقط هي التي اختُبرت من حيث الوصول",
              ],
            },
            {
              label_en: "Arc fault current (kA)",
              label_ar: "تيار القوس (ك.أ)",
              values_en: [
                "Test current; it should not be lower than the fault level at the installation point",
              ],
              values_ar: [
                "تيار الاختبار، ويجب ألا يقل عن مستوى القصر عند نقطة التركيب",
              ],
            },
            {
              label_en: "Arc duration (s)",
              label_ar: "مدة القوس (ث)",
              values_en: [
                "Test duration; it should cover the clearing time of the upstream protection",
              ],
              values_ar: [
                "مدة الاختبار، ويجب أن تغطي زمن الفصل لأجهزة الحماية السابقة للوحة",
              ],
            },
          ],
        },
        callout: {
          body_en:
            "A panel placed against a wall needs no rear classification, while a free-standing panel with rear access does. Internal arc testing of pole-mounted switchgear is no longer in this standard; it moved to IEC 62271-214.",
          body_ar:
            "اللوحة الملاصقة للحائط لا تحتاج إلى تصنيف للجانب الخلفي، أما اللوحة القائمة بذاتها مع وصول من الخلف فتحتاج إليه. ولم يعد اختبار القوس الداخلي للمعدات المركبة على الأعمدة ضمن هذه المواصفة، فقد انتقل إلى IEC 62271-214.",
        },
      },
      {
        heading_en: "Service Continuity (LSC) and Partition Class",
        heading_ar: "استمرارية الخدمة (LSC) وفئة الحواجز",
        body_en:
          "The LSC category states which parts can remain energised while a high-voltage compartment of one functional unit is open. It describes maintenance availability and is separate from IAC.",
        body_ar:
          "تحدد فئة LSC الأجزاء التي يمكن أن تبقى مكهربة عند فتح أحد أقسام الجهد العالي في وحدة وظيفية واحدة. وهي تصف الإتاحة أثناء الصيانة، وهي مستقلة عن تصنيف IAC.",
        list_en: [
          "LSC1: opening a compartment requires at least one other functional unit to be taken out of service",
          "LSC2A: the busbars and the other functional units stay in service; the cables of the unit being accessed are isolated and earthed",
          "LSC2B: as LSC2A, and the cable compartment of the same unit can also stay energised while another of its compartments is open",
          "Partition class PM: metallic partitions and shutters between the open compartment and live parts; PI: insulating partitions or shutters",
        ],
        list_ar: [
          "LSC1: فتح أحد الأقسام يستلزم إخراج وحدة وظيفية أخرى واحدة على الأقل من الخدمة",
          "LSC2A: تبقى القضبان والوحدات الوظيفية الأخرى في الخدمة، مع فصل وتأريض كابلات الوحدة المفتوحة",
          "LSC2B: كما في LSC2A مع إمكان بقاء قسم الكابلات في الوحدة نفسها مكهربًا عند فتح قسم آخر منها",
          "فئة الحواجز PM: حواجز وستائر معدنية بين القسم المفتوح والأجزاء الحية؛ PI: حواجز أو ستائر عازلة",
        ],
      },
      {
        heading_en: "RFQ Checklist",
        heading_ar: "قائمة متطلبات طلب عرض السعر (RFQ)",
        body_en:
          "Send the following to our procurement team. GOLTENS sources against your specification from the manufacturers your consultant or owner approves.",
        body_ar:
          "أرسلوا البيانات التالية إلى فريق التوريد لدينا. تقوم GOLTENS بالتوريد وفق مواصفاتكم من المصنّعين الذين يعتمدهم الاستشاري أو المالك.",
        list_en: [
          "Single-line diagram with the function of each panel",
          "Nominal network voltage, rated voltage and fault level confirmed by the distribution company",
          "Insulation medium (AIS or GIS) and function (primary switchgear or RMU)",
          "Required IAC designation, LSC category and partition class",
          "Protection relay, metering and communication requirements",
          "Room dimensions, access sides and cable entry (top or bottom)",
          "Approved-manufacturer list, required type test reports and delivery location",
        ],
        list_ar: [
          "المخطط الأحادي موضحًا عليه وظيفة كل خلية",
          "جهد الشبكة الاسمي والجهد المقنن ومستوى القصر المعتمد من شركة التوزيع",
          "وسط العزل (AIS أو GIS) والوظيفة (توزيع رئيسي أو RMU)",
          "تسمية IAC المطلوبة وفئة LSC وفئة الحواجز",
          "متطلبات مرحلات الحماية والقياس والاتصال",
          "أبعاد الغرفة وجوانب الوصول واتجاه دخول الكابلات (علوي أو سفلي)",
          "قائمة المصنّعين المعتمدين وتقارير الاختبارات النوعية المطلوبة ومكان التسليم",
        ],
      },
      {
        heading_en: "Sources and Review",
        heading_ar: "المصادر والمراجعة",
        body_en:
          "Content last reviewed: 10 November 2026. This article is general guidance and does not replace the standards themselves or your consultant's design.",
        body_ar:
          "تاريخ آخر مراجعة للمحتوى: 10 نوفمبر 2026. هذا المقال إرشاد عام ولا يغني عن نصوص المواصفات نفسها ولا عن تصميم الاستشاري.",
        list_en: [
          "IEC 62271-200:2021, Edition 3.0 (with Amendment 1:2024) — AC metal-enclosed switchgear and controlgear for rated voltages above 1 kV and up to and including 52 kV",
          "IEC 62271-1:2017, Edition 2.0 — High-voltage switchgear and controlgear: common specifications",
          "IEC 60038:2009, Edition 7.0 — IEC standard voltages",
          "IEC 62271-214:2019 — Internal arc classification for pole-mounted switchgear",
        ],
        list_ar: [
          "IEC 62271-200:2021، الإصدار 3.0 (مع التعديل 1 لسنة 2024) — لوحات المفاتيح والتحكم المعدنية المغلقة للتيار المتردد للجهود المقننة الأعلى من 1 ك.ف وحتى 52 ك.ف",
          "IEC 62271-1:2017، الإصدار 2.0 — المواصفات المشتركة لمعدات المفاتيح والتحكم للجهد العالي",
          "IEC 60038:2009، الإصدار 7.0 — الجهود القياسية",
          "IEC 62271-214:2019 — تصنيف القوس الداخلي للمعدات المركبة على الأعمدة",
        ],
      },
    ],
    coverImage: COVER_IMAGE,
    publishedAt: "2026-11-10",
    updatedAt: REVIEWED,
    version: "Rev. 2026-11",
    author: AUTHOR,
    relatedSectorIds: ["electrical-energy"],
    relatedProductIds: ["medium-voltage-switchgear", "ring-main-units"],
    relatedKnowledgeIds: [
      "low-voltage-distribution-panel-specification",
      "generator-ratings-standby-prime-continuous",
    ],
    seo: {
      title_en: "Medium Voltage Switchgear Specification Guide (IEC 62271-200)",
      title_ar: "مواصفات لوحات الجهد المتوسط: دليل كتابة طلب التوريد",
      description_en:
        "AIS vs GIS, primary switchgear vs RMU, 11/12 kV and 22/24 kV, IAC and LSC explained, with an RFQ checklist for procurement engineers in Egypt.",
      description_ar:
        "الفرق بين AIS و GIS و RMU، جهد 11/12 و 22/24 ك.ف، تصنيف IAC و LSC، وقائمة متطلبات RFQ لمهندس المشتريات في مصر.",
      keywords: [
        "مواصفات لوحات الجهد المتوسط",
        "لوحات الجهد المتوسط",
        "الفرق بين AIS و GIS",
        "وحدة الحلقة الرئيسية RMU",
        "medium voltage switchgear specification",
        "IEC 62271-200",
        "IAC AFLR",
      ],
    },
  },
  {
    id: "generator-ratings-standby-prime-continuous",
    slug: "generator-ratings-standby-prime-continuous",
    type: "technical-guide",
    title_en: "Generator Ratings Explained: ESP, PRP, LTP and COP",
    title_ar: "قدرات المولدات: الفرق بين ESP و PRP و LTP و COP",
    summary_en:
      "Why one generating set carries several kVA figures under ISO 8528-1, which rating class fits each duty, and how to state it in an enquiry.",
    summary_ar:
      "لماذا يحمل المولد الواحد أكثر من قيمة للقدرة وفق ISO 8528-1، وأي فئة قدرة تناسب كل طبيعة تشغيل، وكيف تُذكر في طلب التوريد.",
    sections: [
      {
        heading_en: "Why One Generator Has Several Ratings",
        heading_ar: "لماذا للمولد الواحد أكثر من قدرة",
        body_en:
          "A generating set can deliver more power for a few hours a year than it can deliver around the clock. ISO 8528-1 defines the rating classes manufacturers use to state this. Two offers are comparable only when they quote the same class, so the enquiry must name the class instead of asking for a bare kVA figure.",
        body_ar:
          "يستطيع المولد أن يعطي قدرة أعلى لساعات محدودة في السنة مما يعطيه عند التشغيل على مدار الساعة. وتحدد المواصفة ISO 8528-1 فئات القدرة التي يستخدمها المصنّعون للتعبير عن ذلك. ولا يمكن مقارنة عرضين إلا إذا كانا على الفئة نفسها، لذلك يجب أن يسمّي طلب التوريد الفئة المطلوبة ولا يكتفي برقم مجرد بالكيلو فولت أمبير.",
      },
      {
        heading_en: "The Rating Classes in ISO 8528-1",
        heading_ar: "فئات القدرة في ISO 8528-1",
        body_en:
          "The class follows from how the set will actually run — the type of load and the running hours per year — not from the size of the load alone.",
        body_ar:
          "تتحدد الفئة من طريقة تشغيل المولد الفعلية — نوع الحمل وعدد ساعات التشغيل سنويًا — وليس من حجم الحمل وحده.",
        table: {
          caption_en: "Generator Rating Classes",
          caption_ar: "فئات قدرة المولدات",
          headers_en: ["Load", "Running Hours per Year"],
          headers_ar: ["الحمل", "ساعات التشغيل سنويًا"],
          rows: [
            {
              label_en: "Emergency standby power (ESP)",
              label_ar: "القدرة الاحتياطية للطوارئ (ESP)",
              values_en: [
                "Variable load during a mains failure; average load over 24 hours not above 70 % of the ESP rating unless the manufacturer agrees otherwise",
                "Up to 200 hours",
              ],
              values_ar: [
                "حمل متغير عند انقطاع الشبكة، على ألا يزيد متوسط الحمل خلال 24 ساعة على 70٪ من قدرة ESP ما لم يوافق المصنّع على غير ذلك",
                "حتى 200 ساعة",
              ],
            },
            {
              label_en: "Limited-time running power (LTP)",
              label_ar: "قدرة التشغيل لزمن محدود (LTP)",
              values_en: [
                "Constant load under agreed conditions",
                "Up to 500 hours",
              ],
              values_ar: ["حمل ثابت وفق ظروف تشغيل متفق عليها", "حتى 500 ساعة"],
            },
            {
              label_en: "Prime power (PRP)",
              label_ar: "القدرة الأساسية (PRP)",
              values_en: [
                "Variable load; average load over 24 hours not above 70 % of the PRP rating unless the manufacturer agrees otherwise",
                "Unlimited",
              ],
              values_ar: [
                "حمل متغير، على ألا يزيد متوسط الحمل خلال 24 ساعة على 70٪ من قدرة PRP ما لم يوافق المصنّع على غير ذلك",
                "غير محدودة",
              ],
            },
            {
              label_en: "Continuous power (COP)",
              label_ar: "القدرة المستمرة (COP)",
              values_en: ["Constant load", "Unlimited"],
              values_ar: ["حمل ثابت", "غير محدودة"],
            },
          ],
        },
        callout: {
          body_en:
            "The 2018 edition also added data centre power (DCP) and a maximum power rating for low-power sets. Manufacturers' own rating names can differ in detail from the ISO classes, so ask each bidder to state the ISO 8528-1 class their figure corresponds to.",
          body_ar:
            "أضاف إصدار 2018 كذلك قدرة مراكز البيانات (DCP) وقدرة قصوى للمولدات الصغيرة. وقد تختلف تسميات المصنّعين لقدراتهم في بعض التفاصيل عن فئات ISO، فاطلبوا من كل متقدم أن يحدد فئة ISO 8528-1 المقابلة للقيمة التي يعرضها.",
        },
      },
      {
        heading_en: "Choosing the Class for Your Duty",
        heading_ar: "اختيار الفئة حسب طبيعة التشغيل",
        body_en:
          "Match the class to the role the set plays at the site before sizing anything.",
        body_ar: "حددوا الفئة حسب دور المولد في الموقع قبل حساب أي قدرة.",
        list_en: [
          "Backup for a building or plant fed by a reliable grid: ESP",
          "Site with no grid, or frequent long outages, on a changing load: PRP",
          "Planned running for a limited number of hours a year on a steady load, such as peak shaving: LTP",
          "Steady base load around the clock, such as a process plant: COP",
        ],
        list_ar: [
          "تغذية بديلة لمبنى أو مصنع يعتمد على شبكة موثوقة: ESP",
          "موقع بلا شبكة، أو بانقطاعات طويلة متكررة، على حمل متغير: PRP",
          "تشغيل مخطط لعدد محدود من الساعات سنويًا على حمل ثابت، مثل تخفيف أحمال الذروة: LTP",
          "حمل أساسي ثابت على مدار الساعة، مثل خطوط التشغيل المستمر: COP",
        ],
        callout: {
          body_en:
            "A set bought on its standby rating and then run as the main source of power is being operated outside its rating class.",
          body_ar:
            "المولد المشترى على أساس القدرة الاحتياطية ثم يُشغَّل كمصدر رئيسي يكون خارج فئة قدرته المقننة.",
        },
      },
      {
        heading_en: "kVA, kW and Site Conditions",
        heading_ar: "الكيلو فولت أمبير والكيلو وات وظروف الموقع",
        body_en:
          "Generating sets are normally rated in kVA at a power factor of 0.8, so the active power in kW is the kVA figure multiplied by 0.8: a 500 kVA set supplies 400 kW. State your load in kW with its power factor, and list large motors separately with their starting method, because starting current can decide the size of the set.\n\nRated power is declared at reference conditions. High ambient temperature and altitude reduce the power actually available, so give the site conditions and ask for the output at those conditions.",
        body_ar:
          "تُقنَّن المولدات عادةً بالكيلو فولت أمبير عند معامل قدرة 0.8، فتكون القدرة الفعلية بالكيلو وات هي قيمة الكيلو فولت أمبير مضروبة في 0.8: مولد 500 ك.ف.أ يعطي 400 ك.و. اذكروا الحمل بالكيلو وات مع معامل القدرة، وأدرجوا المحركات الكبيرة منفصلة مع طريقة بدء تشغيلها، لأن تيار البدء قد يحدد حجم المولد.\n\nوتُعلن القدرة المقننة عند ظروف مرجعية. وارتفاع درجة الحرارة المحيطة وارتفاع الموقع عن سطح البحر يخفضان القدرة المتاحة فعليًا، فاذكروا ظروف الموقع واطلبوا القدرة عند هذه الظروف.",
      },
      {
        heading_en: "Scope Items That Change the Price",
        heading_ar: "بنود النطاق التي تغيّر السعر",
        body_en:
          "Two offers for the same kVA and class can still differ widely depending on what is included.",
        body_ar:
          "قد يختلف عرضان للقدرة والفئة نفسيهما اختلافًا كبيرًا بحسب ما يشمله كل منهما.",
        list_en: [
          "Open set or sound-attenuated weatherproof enclosure, and the noise limit",
          "Automatic transfer switch (ATS): rated current and number of poles",
          "Synchronising and load-sharing panel when sets run in parallel",
          "Base fuel tank capacity or a separate bulk tank and transfer system",
          "Exhaust, cabling, installation, testing and commissioning",
        ],
        list_ar: [
          "مولد مكشوف أو بكابينة عازلة للصوت ومقاومة للعوامل الجوية، وحد الضوضاء المطلوب",
          "مفتاح التحويل الأوتوماتيكي (ATS): التيار المقنن وعدد الأقطاب",
          "لوحة التزامن وتقاسم الأحمال عند تشغيل أكثر من مولد على التوازي",
          "سعة خزان الوقود بالقاعدة أو خزان خارجي مع منظومة نقل الوقود",
          "العادم والكابلات والتركيب والاختبار وبدء التشغيل",
        ],
      },
      {
        heading_en: "RFQ Checklist",
        heading_ar: "قائمة متطلبات طلب عرض السعر (RFQ)",
        body_en:
          "Send these points to our procurement team. GOLTENS sources against your specification from the manufacturers your consultant or owner approves.",
        body_ar:
          "أرسلوا هذه البيانات إلى فريق التوريد لدينا. تقوم GOLTENS بالتوريد وفق مواصفاتكم من المصنّعين الذين يعتمدهم الاستشاري أو المالك.",
        list_en: [
          "Required power in kVA or kW and the ISO 8528-1 rating class (ESP, PRP, LTP or COP)",
          "Load list with the largest motor and its starting method",
          "Voltage, frequency and number of phases",
          "Site ambient temperature and altitude",
          "Indoor or outdoor installation, enclosure and noise limit",
          "ATS, synchronising, fuel tank and other accessories required",
          "Approved-manufacturer list, required test reports and delivery location",
        ],
        list_ar: [
          "القدرة المطلوبة بالكيلو فولت أمبير أو الكيلو وات وفئة القدرة وفق ISO 8528-1 (ESP أو PRP أو LTP أو COP)",
          "قائمة الأحمال مع أكبر محرك وطريقة بدء تشغيله",
          "الجهد والتردد وعدد الأوجه",
          "درجة الحرارة المحيطة بالموقع وارتفاعه عن سطح البحر",
          "التركيب داخلي أو خارجي، ونوع الكابينة وحد الضوضاء",
          "مفتاح التحويل ولوحة التزامن وخزان الوقود وباقي الملحقات المطلوبة",
          "قائمة المصنّعين المعتمدين وتقارير الاختبار المطلوبة ومكان التسليم",
        ],
      },
      {
        heading_en: "Sources and Review",
        heading_ar: "المصادر والمراجعة",
        body_en:
          "Content last reviewed: 10 November 2026. This article is general guidance and does not replace the standard itself or the manufacturer's rating data.",
        body_ar:
          "تاريخ آخر مراجعة للمحتوى: 10 نوفمبر 2026. هذا المقال إرشاد عام ولا يغني عن نص المواصفة نفسها ولا عن بيانات القدرة الصادرة من المصنّع.",
        list_en: [
          "ISO 8528-1:2018, third edition (February 2018) — Reciprocating internal combustion engine driven alternating current generating sets, Part 1: Application, ratings and performance; rating classes in clause 14",
        ],
        list_ar: [
          "ISO 8528-1:2018، الإصدار الثالث (فبراير 2018) — مجموعات توليد التيار المتردد المدارة بمحركات الاحتراق الداخلي الترددية، الجزء 1: التطبيق والقدرات والأداء؛ فئات القدرة في البند 14",
        ],
      },
    ],
    coverImage: COVER_IMAGE,
    publishedAt: "2026-11-10",
    updatedAt: REVIEWED,
    version: "Rev. 2026-11",
    author: AUTHOR,
    relatedSectorIds: ["electrical-energy"],
    relatedProductIds: ["diesel-generators"],
    relatedKnowledgeIds: [
      "medium-voltage-switchgear-specification-guide",
      "low-voltage-distribution-panel-specification",
    ],
    seo: {
      title_en: "Generator Ratings: Standby (ESP), Prime (PRP), LTP and COP",
      title_ar: "الفرق بين قدرة المولد الاحتياطية والأساسية والمستمرة",
      description_en:
        "ISO 8528-1 generator rating classes compared — ESP, PRP, LTP and COP — with kVA to kW, site derating and an RFQ checklist for buyers.",
      description_ar:
        "مقارنة فئات قدرة المولدات وفق ISO 8528-1: ESP و PRP و LTP و COP، مع التحويل من ك.ف.أ إلى ك.و وقائمة متطلبات RFQ للمشتري.",
      keywords: [
        "الفرق بين Standby و Prime في المولدات",
        "قدرة المولد الاحتياطية والأساسية",
        "اختيار مولد كهرباء",
        "ESP PRP COP LTP",
        "standby vs prime generator rating",
        "ISO 8528-1",
      ],
    },
  },
  {
    id: "low-voltage-distribution-panel-specification",
    slug: "low-voltage-distribution-panel-specification",
    type: "buying-guide",
    title_en: "How to Specify Low Voltage Distribution Panels",
    title_ar: "كيف تكتب مواصفات لوحات توزيع الجهد المنخفض",
    summary_en:
      "The ratings, form of internal separation and protection details that make a low voltage panel enquiry under IEC 61439 priceable and comparable.",
    summary_ar:
      "القيم المقننة وشكل الفصل الداخلي وتفاصيل الحماية التي تجعل طلب توريد لوحة الجهد المنخفض وفق IEC 61439 قابلًا للتسعير والمقارنة.",
    sections: [
      {
        heading_en: "The Standard Behind Low Voltage Panels",
        heading_ar: "المواصفة المرجعية للوحات الجهد المنخفض",
        body_en:
          "Main distribution boards, sub-distribution boards and motor control centres are low voltage switchgear and controlgear assemblies. IEC 61439-1 gives the general rules and IEC 61439-2 covers power switchgear and controlgear assemblies. The standard requires each design to be verified, so a specification that names it lets you ask every bidder for the same evidence.",
        body_ar:
          "اللوحات العمومية ولوحات التوزيع الفرعية ولوحات التحكم في المحركات كلها مجمّعات مفاتيح وتحكم للجهد المنخفض. تضع المواصفة IEC 61439-1 القواعد العامة، وتغطي IEC 61439-2 مجمّعات مفاتيح وتحكم القدرة. وتشترط المواصفة التحقق من كل تصميم، فالنص عليها في المواصفات يتيح لكم مطالبة جميع المتقدمين بالأدلة نفسها.",
      },
      {
        heading_en: "Ratings to State",
        heading_ar: "القيم المقننة الواجب ذكرها",
        body_en:
          "These values come from the electrical design, not from the panel builder.",
        body_ar: "تؤخذ هذه القيم من التصميم الكهربائي وليس من مصنّع اللوحة.",
        list_en: [
          "Rated operational voltage and frequency",
          "Rated current of the assembly and of the main busbars",
          "Rated short-time withstand current (Icw) and its duration, taken from the fault level at the panel",
          "Degree of protection (IP code) for the installation location",
          "System earthing arrangement of the installation",
          "Ambient temperature at the installation location",
        ],
        list_ar: [
          "جهد التشغيل المقنن والتردد",
          "التيار المقنن للمجمّع ولقضبان التوزيع الرئيسية",
          "تيار التحمل المقنن لزمن قصير (Icw) ومدته، محسوبًا من مستوى القصر عند اللوحة",
          "درجة الحماية (IP) المناسبة لمكان التركيب",
          "نظام تأريض المنشأة",
          "درجة الحرارة المحيطة في مكان التركيب",
        ],
      },
      {
        heading_en: "Forms of Internal Separation Are Not Safety Grades",
        heading_ar: "أشكال الفصل الداخلي ليست درجات أمان",
        body_en:
          "IEC 61439-2 describes forms of internal separation: how busbars, functional units and terminals for external conductors are divided from one another by barriers or partitions. The purpose is to protect against contact with live parts of adjacent units and against the passage of solid foreign bodies from one unit to the next.\n\nA form number is a description of layout. It is not a safety rating, it does not show that the panel withstands an internal arc, and it does not by itself permit work on a live panel. The form is chosen according to which operations must be carried out while the assembly stays in service, and it is agreed between the user and the assembly manufacturer.",
        body_ar:
          "تصف المواصفة IEC 61439-2 أشكال الفصل الداخلي: أي كيفية تقسيم قضبان التوزيع والوحدات الوظيفية وأطراف توصيل الموصلات الخارجية عن بعضها بحواجز أو فواصل. والغرض هو الحماية من ملامسة الأجزاء الحية في الوحدات المجاورة ومن انتقال الأجسام الصلبة الغريبة من وحدة إلى أخرى.\n\nورقم الشكل وصف لتقسيم اللوحة. فهو ليس درجة أمان، ولا يدل على تحمل اللوحة للقوس الداخلي، ولا يجيز بمفرده العمل على لوحة مكهربة. ويُختار الشكل بحسب العمليات المطلوب تنفيذها مع بقاء المجمّع في الخدمة، ويُتفق عليه بين المستخدم ومصنّع المجمّع.",
        table: {
          caption_en: "Forms of Internal Separation (IEC 61439-2)",
          caption_ar: "أشكال الفصل الداخلي (IEC 61439-2)",
          headers_en: ["What Is Separated"],
          headers_ar: ["ما الذي يتم فصله"],
          rows: [
            {
              label_en: "Form 1",
              label_ar: "الشكل 1",
              values_en: ["No internal separation"],
              values_ar: ["لا يوجد فصل داخلي"],
            },
            {
              label_en: "Form 2a / 2b",
              label_ar: "الشكل 2a / 2b",
              values_en: [
                "Busbars separated from the functional units. 2a: terminals not separated from the busbars; 2b: terminals separated from the busbars",
              ],
              values_ar: [
                "فصل القضبان عن الوحدات الوظيفية. 2a: الأطراف غير مفصولة عن القضبان؛ 2b: الأطراف مفصولة عن القضبان",
              ],
            },
            {
              label_en: "Form 3a / 3b",
              label_ar: "الشكل 3a / 3b",
              values_en: [
                "As Form 2, and the functional units are separated from one another. 3a: terminals not separated from the busbars; 3b: terminals separated from the busbars",
              ],
              values_ar: [
                "كما في الشكل 2 مع فصل الوحدات الوظيفية عن بعضها. 3a: الأطراف غير مفصولة عن القضبان؛ 3b: الأطراف مفصولة عن القضبان",
              ],
            },
            {
              label_en: "Form 4a / 4b",
              label_ar: "الشكل 4a / 4b",
              values_en: [
                "As Form 3, and the terminals of each functional unit are separated from those of the other units. 4a: terminals in the same compartment as their unit; 4b: terminals in their own separate compartment or enclosed space",
              ],
              values_ar: [
                "كما في الشكل 3 مع فصل أطراف كل وحدة وظيفية عن أطراف الوحدات الأخرى. 4a: الأطراف في قسم الوحدة نفسها؛ 4b: الأطراف في قسم أو حيز مغلق مستقل",
              ],
            },
          ],
        },
        callout: {
          body_en:
            "If protection of personnel against internal arcing is required, specify it separately with reference to IEC TR 61641 — the form of separation does not cover it. Higher forms also mean a larger and more expensive panel, so ask for the form the operation actually needs.",
          body_ar:
            "إذا كان المطلوب حماية الأشخاص من القوس الداخلي فيجب النص على ذلك مستقلًا بالإشارة إلى IEC TR 61641، فشكل الفصل لا يغطيه. والأشكال الأعلى تعني لوحة أكبر وأعلى تكلفة، فاطلبوا الشكل الذي يحتاجه التشغيل فعلًا.",
        },
      },
      {
        heading_en: "Protective Devices",
        heading_ar: "أجهزة الحماية",
        body_en:
          "Give the type and rating of the breaker for every circuit, not a total count of outgoing ways.",
        body_ar:
          "اذكروا نوع القاطع وتياره لكل دائرة، لا مجرد العدد الإجمالي للمخارج.",
        list_en: [
          "Air circuit breakers (ACB) for main incomers and large feeders: fixed or withdrawable",
          "Moulded-case circuit breakers (MCCB) for distribution feeders",
          "Miniature circuit breakers (MCB) for final circuits",
          "Breaking capacity required at each level, and number of poles",
          "Metering, surge protection and power factor correction if required",
          "Spare ways and spare space for future circuits",
        ],
        list_ar: [
          "القواطع الهوائية (ACB) للدخول الرئيسي والمغذيات الكبيرة: ثابتة أو قابلة للسحب",
          "القواطع المقولبة (MCCB) لمغذيات التوزيع",
          "القواطع المنمنمة (MCB) للدوائر النهائية",
          "سعة القطع المطلوبة عند كل مستوى، وعدد الأقطاب",
          "أجهزة القياس والحماية من ارتفاع الجهد العابر وتحسين معامل القدرة إن لزم",
          "المخارج الاحتياطية والمساحة الاحتياطية للدوائر المستقبلية",
        ],
      },
      {
        heading_en: "RFQ Checklist",
        heading_ar: "قائمة متطلبات طلب عرض السعر (RFQ)",
        body_en:
          "Send the following to our procurement team. GOLTENS sources against your specification from the manufacturers and panel builders your consultant or owner approves.",
        body_ar:
          "أرسلوا البيانات التالية إلى فريق التوريد لدينا. تقوم GOLTENS بالتوريد وفق مواصفاتكم من المصنّعين ومجمّعي اللوحات الذين يعتمدهم الاستشاري أو المالك.",
        list_en: [
          "Single-line diagram and load schedule",
          "Rated voltage, busbar current, Icw and its duration",
          "Form of internal separation and IP code",
          "Type, rating and breaking capacity of the breaker on each circuit",
          "Installation location, available space and cable entry direction",
          "Design verification documents required under IEC 61439",
          "Approved-manufacturer list for breakers and enclosures, and delivery location",
        ],
        list_ar: [
          "المخطط الأحادي وجدول الأحمال",
          "الجهد المقنن وتيار القضبان وقيمة Icw ومدته",
          "شكل الفصل الداخلي ودرجة الحماية IP",
          "نوع القاطع وتياره وسعة قطعه لكل دائرة",
          "مكان التركيب والمساحة المتاحة واتجاه دخول الكابلات",
          "مستندات التحقق من التصميم المطلوبة وفق IEC 61439",
          "قائمة المصنّعين المعتمدين للقواطع والهياكل، ومكان التسليم",
        ],
      },
      {
        heading_en: "Sources and Review",
        heading_ar: "المصادر والمراجعة",
        body_en:
          "Content last reviewed: 10 November 2026. This article is general guidance and does not replace the standards themselves or your consultant's design.",
        body_ar:
          "تاريخ آخر مراجعة للمحتوى: 10 نوفمبر 2026. هذا المقال إرشاد عام ولا يغني عن نصوص المواصفات نفسها ولا عن تصميم الاستشاري.",
        list_en: [
          "IEC 61439-1:2020, Edition 3.0 — Low-voltage switchgear and controlgear assemblies, Part 1: General rules",
          "IEC 61439-2:2020, Edition 3.0 (July 2020) — Part 2: Power switchgear and controlgear assemblies; forms of internal separation in 8.101, Table 104 and Annex BB",
          "IEC TR 61641:2014, Edition 3.0 — Guide for testing enclosed low-voltage assemblies under conditions of arcing due to internal fault",
        ],
        list_ar: [
          "IEC 61439-1:2020، الإصدار 3.0 — مجمّعات مفاتيح وتحكم الجهد المنخفض، الجزء 1: القواعد العامة",
          "IEC 61439-2:2020، الإصدار 3.0 (يوليو 2020) — الجزء 2: مجمّعات مفاتيح وتحكم القدرة؛ أشكال الفصل الداخلي في البند 8.101 والجدول 104 والملحق BB",
          "IEC TR 61641:2014، الإصدار 3.0 — دليل اختبار المجمّعات المغلقة للجهد المنخفض في ظروف القوس الناتج عن عطل داخلي",
        ],
      },
    ],
    coverImage: COVER_IMAGE,
    publishedAt: "2026-11-10",
    updatedAt: REVIEWED,
    version: "Rev. 2026-11",
    author: AUTHOR,
    relatedSectorIds: ["electrical-energy"],
    relatedProductIds: ["low-voltage-switchgear", "distribution-panel-boards"],
    relatedKnowledgeIds: [
      "medium-voltage-switchgear-specification-guide",
      "generator-ratings-standby-prime-continuous",
    ],
    seo: {
      title_en: "Low Voltage Panel Specification Guide (IEC 61439, Forms 1–4)",
      title_ar: "مواصفات لوحات توزيع الجهد المنخفض وأشكال الفصل Form 1–4",
      description_en:
        "What to state in an LV distribution panel RFQ: IEC 61439 ratings, Icw, IP code, forms of internal separation 1 to 4b and breaker schedule.",
      description_ar:
        "ما الذي يُذكر في طلب توريد لوحات الجهد المنخفض: القيم المقننة وفق IEC 61439، قيمة Icw، درجة IP، أشكال الفصل من 1 إلى 4b وجدول القواطع.",
      keywords: [
        "مواصفات لوحات التوزيع",
        "لوحات توزيع الجهد المنخفض",
        "أشكال الفصل Form 4b",
        "low voltage panel specification",
        "IEC 61439",
        "forms of separation",
      ],
    },
  },
];
