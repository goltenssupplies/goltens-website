import type { KnowledgeItem } from "@/data/knowledge/types";

/**
 * Electrical & Energy Knowledge Center articles. General, standards-based
 * specification guidance only — no brand, stock, certification, client, or
 * lead-time claim appears anywhere below. Network voltages and ratings are
 * described as things the buyer must confirm with their own distribution
 * company / consultant, never as figures GOLTENS asserts for a given site.
 */
const COVER_IMAGE = "/images/categories/electrical-energy-new.jpg";
const AUTHOR = "GOLTENS Procurement Team";

export const electricalEnergyArticles: KnowledgeItem[] = [
  {
    id: "medium-voltage-switchgear-specification-guide",
    slug: "medium-voltage-switchgear-specification-guide",
    type: "buying-guide",
    title_en: "How to Specify Medium Voltage Switchgear",
    title_ar: "كيف تكتب مواصفات لوحات الجهد المتوسط",
    summary_en:
      "The ratings and construction details a medium voltage switchgear enquiry must state before any supplier can quote it correctly.",
    summary_ar:
      "القيم المقننة وتفاصيل التصنيع التي يجب أن يتضمنها طلب توريد لوحات الجهد المتوسط حتى يتمكن أي مورد من تسعيره بشكل صحيح.",
    sections: [
      {
        heading_en: "What Counts as Medium Voltage Switchgear",
        heading_ar: "ما المقصود بلوحات الجهد المتوسط",
        body_en:
          "Medium voltage switchgear receives power from the distribution network and switches, protects and isolates the feeders and transformers of a facility. Metal-enclosed switchgear for rated voltages above 1 kV and up to 52 kV is covered by the international standard IEC 62271-200, which is the reference most project specifications use.",
        body_ar:
          "تستقبل لوحات الجهد المتوسط التغذية من شبكة التوزيع وتقوم بفصل وحماية وعزل المغذيات والمحولات داخل المنشأة. وتخضع اللوحات المعدنية المغلقة للجهود المقننة الأعلى من 1 ك.ف وحتى 52 ك.ف للمواصفة الدولية IEC 62271-200، وهي المرجع الذي تعتمد عليه أغلب مواصفات المشروعات.",
      },
      {
        heading_en: "Main Construction Types",
        heading_ar: "الأنواع الرئيسية من حيث التصنيع",
        body_en:
          "The construction type decides footprint, maintenance needs and cost, so it should be stated in the enquiry rather than left open.",
        body_ar:
          "يحدد نوع التصنيع المساحة المطلوبة واحتياجات الصيانة والتكلفة، لذلك يجب ذكره في طلب التوريد وعدم تركه مفتوحًا.",
        table: {
          caption_en: "Switchgear Construction Comparison",
          caption_ar: "مقارنة أنواع لوحات الجهد المتوسط",
          headers_en: ["Typical Use"],
          headers_ar: ["الاستخدام المعتاد"],
          rows: [
            {
              label_en: "Air-insulated (AIS), withdrawable breaker",
              label_ar: "معزولة بالهواء (AIS) بقاطع قابل للسحب",
              values_en: [
                "Main substations and industrial plants where breakers must be maintained or replaced quickly",
              ],
              values_ar: [
                "المحطات الرئيسية والمصانع التي تحتاج إلى صيانة القواطع أو استبدالها بسرعة",
              ],
            },
            {
              label_en: "Gas-insulated (GIS)",
              label_ar: "معزولة بالغاز (GIS)",
              values_en: [
                "Sites with limited space or harsh, dusty or humid environments",
              ],
              values_ar: [
                "المواقع محدودة المساحة أو ذات الأجواء القاسية كالأتربة والرطوبة",
              ],
            },
            {
              label_en: "Ring main unit (RMU)",
              label_ar: "وحدة الحلقة الرئيسية (RMU)",
              values_en: [
                "Compact secondary distribution feeding one or more transformers on a ring network",
              ],
              values_ar: [
                "التوزيع الثانوي المدمج لتغذية محول أو أكثر على شبكة حلقية",
              ],
            },
          ],
        },
      },
      {
        heading_en: "Ratings Your Enquiry Must State",
        heading_ar: "القيم المقننة التي يجب ذكرها في الطلب",
        body_en:
          "These values come from the network connection data and the consultant's short-circuit study, not from the supplier. A quotation built on assumed ratings cannot be compared with any other.",
        body_ar:
          "تؤخذ هذه القيم من بيانات الربط بالشبكة ومن دراسة تيارات القصر التي يعدّها الاستشاري، وليس من المورد. وعرض السعر المبني على قيم مفترضة لا يمكن مقارنته بأي عرض آخر.",
        list_en: [
          "Rated voltage (for example 12 kV equipment on an 11 kV network, or 24 kV equipment on a 22 kV network)",
          "Rated busbar and feeder currents",
          "Rated short-circuit breaking current and its duration",
          "Rated frequency and insulation levels",
          "Number and function of panels: incomer, outgoing feeder, bus coupler, metering",
          "Auxiliary control voltage",
        ],
        list_ar: [
          "الجهد المقنن (مثل معدات 12 ك.ف على شبكة 11 ك.ف، أو معدات 24 ك.ف على شبكة 22 ك.ف)",
          "التيار المقنن لقضبان التوزيع وللمغذيات",
          "تيار القطع المقنن عند القصر ومدته",
          "التردد المقنن ومستويات العزل",
          "عدد الخلايا ووظيفة كل منها: دخول، خروج، رابط قضبان، قياس",
          "جهد دوائر التحكم المساعدة",
        ],
        callout: {
          body_en:
            "The network voltage and fault level at your connection point are set by your electricity distribution company. Confirm them in writing before issuing the enquiry.",
          body_ar:
            "جهد الشبكة ومستوى القصر عند نقطة الربط تحددهما شركة توزيع الكهرباء التابعين لها. تأكدوا منهما كتابيًا قبل إصدار طلب التوريد.",
        },
      },
      {
        heading_en: "Safety Classifications to Ask For",
        heading_ar: "تصنيفات الأمان التي يجب طلبها",
        body_en:
          "IEC 62271-200 defines two classifications that are often missing from enquiries yet change both safety and price.",
        body_ar:
          "تحدد المواصفة IEC 62271-200 تصنيفين يغيبان كثيرًا عن طلبات التوريد مع أنهما يؤثران في الأمان والسعر معًا.",
        subsections: [
          {
            heading_en: "Internal Arc Classification (IAC)",
            heading_ar: "تصنيف القوس الداخلي (IAC)",
            body_en:
              "States that the panel has been tested to protect people nearby if an internal arc fault occurs. It is written with the accessible sides, the test current and the duration — for example IAC AFLR 25 kA 1 s.",
            body_ar:
              "يفيد بأن اللوحة اختُبرت لحماية الأشخاص القريبين منها عند حدوث قوس كهربائي داخلي. ويُكتب متضمنًا الجوانب المتاح الوصول إليها وتيار الاختبار ومدته — مثل IAC AFLR 25 kA 1 s.",
          },
          {
            heading_en: "Loss of Service Continuity (LSC)",
            heading_ar: "فئة استمرارية الخدمة (LSC)",
            body_en:
              "Describes how much of the switchgear can stay energised while one compartment is opened for maintenance: LSC1, LSC2A or LSC2B, with LSC2B keeping the most in service.",
            body_ar:
              "تصف مقدار ما يبقى في الخدمة من اللوحة عند فتح أحد الأقسام للصيانة: LSC1 أو LSC2A أو LSC2B، والفئة LSC2B هي التي تُبقي أكبر جزء في الخدمة.",
          },
        ],
      },
      {
        heading_en: "What to Send for a Quotation",
        heading_ar: "ما الذي ترسلونه لطلب عرض سعر",
        body_en:
          "Send the following to our procurement team and we will quote against your specification:",
        body_ar:
          "أرسلوا البيانات التالية إلى فريق التوريد لدينا لنقدّم عرض السعر وفق مواصفاتكم:",
        list_en: [
          "Single-line diagram",
          "Technical specification or tender document section",
          "Protection and metering requirements for each panel",
          "Room dimensions and cable entry (top or bottom)",
          "Any approved-manufacturer list set by the consultant or owner",
        ],
        list_ar: [
          "المخطط الأحادي (Single-Line Diagram)",
          "المواصفات الفنية أو البند الخاص بها في كراسة الشروط",
          "متطلبات الحماية والقياس لكل خلية",
          "أبعاد الغرفة واتجاه دخول الكابلات (علوي أو سفلي)",
          "قائمة المصنّعين المعتمدين من الاستشاري أو المالك إن وُجدت",
        ],
      },
    ],
    coverImage: COVER_IMAGE,
    publishedAt: "2026-11-10",
    author: AUTHOR,
    keywords: [
      "medium voltage switchgear specification",
      "IEC 62271-200",
      "لوحات الجهد المتوسط",
      "مواصفات لوحات الجهد المتوسط",
    ],
    relatedSectorIds: ["electrical-energy"],
    relatedKnowledgeIds: [
      "low-voltage-distribution-panel-specification",
      "generator-ratings-standby-prime-continuous",
    ],
    seo: {
      title_en: "How to Specify Medium Voltage Switchgear — Buyer's Guide",
      title_ar: "مواصفات لوحات الجهد المتوسط — دليل المشتري",
    },
  },
  {
    id: "generator-ratings-standby-prime-continuous",
    slug: "generator-ratings-standby-prime-continuous",
    type: "technical-guide",
    title_en: "Standby, Prime and Continuous Generator Ratings Explained",
    title_ar: "الفرق بين قدرة المولد الاحتياطية والأساسية والمستمرة",
    summary_en:
      "Why the same generating set carries different kVA figures, and which rating your enquiry should ask for.",
    summary_ar:
      "لماذا يحمل المولد نفسه أكثر من قيمة للقدرة بالكيلو فولت أمبير، وأي قدرة يجب أن تطلبوها في طلب التوريد.",
    sections: [
      {
        heading_en: "Why One Generator Has Several Ratings",
        heading_ar: "لماذا للمولد الواحد أكثر من قدرة",
        body_en:
          "A generating set can deliver more power for a few hours a year than it can deliver around the clock. The standard ISO 8528-1 defines the rating classes manufacturers use to state this, so two offers are only comparable when they quote the same class.",
        body_ar:
          "يستطيع المولد أن يعطي قدرة أعلى لساعات محدودة في السنة مما يعطيه عند التشغيل على مدار الساعة. وتحدد المواصفة ISO 8528-1 فئات القدرة التي يستخدمها المصنّعون للتعبير عن ذلك، ولا يمكن مقارنة عرضين إلا إذا كانا على الفئة نفسها.",
      },
      {
        heading_en: "The Three Ratings Buyers Meet Most",
        heading_ar: "الفئات الثلاث الأكثر شيوعًا",
        body_en:
          "The rating class follows from how the set will actually run, not from the size of the load alone.",
        body_ar:
          "تتحدد فئة القدرة من طريقة تشغيل المولد الفعلية، وليس من حجم الحمل وحده.",
        table: {
          caption_en: "Generator Rating Classes (ISO 8528-1)",
          caption_ar: "فئات قدرة المولدات (ISO 8528-1)",
          headers_en: ["Intended Duty"],
          headers_ar: ["طبيعة التشغيل"],
          rows: [
            {
              label_en: "Emergency Standby Power (ESP)",
              label_ar: "القدرة الاحتياطية للطوارئ (ESP)",
              values_en: [
                "Backup during a mains failure only, on a varying load, for a limited number of hours per year",
              ],
              values_ar: [
                "تغذية بديلة عند انقطاع الشبكة فقط، على حمل متغير، ولعدد محدود من الساعات سنويًا",
              ],
            },
            {
              label_en: "Prime Power (PRP)",
              label_ar: "القدرة الأساسية (PRP)",
              values_en: [
                "Main source of power on a varying load, with no limit on yearly running hours",
              ],
              values_ar: [
                "مصدر التغذية الرئيسي على حمل متغير، دون حد لعدد ساعات التشغيل السنوية",
              ],
            },
            {
              label_en: "Continuous Power (COP)",
              label_ar: "القدرة المستمرة (COP)",
              values_en: [
                "Constant load supplied for an unlimited number of hours per year",
              ],
              values_ar: ["حمل ثابت يُغذّى لعدد غير محدود من الساعات سنويًا"],
            },
          ],
        },
        callout: {
          body_en:
            "A set bought on its standby rating and then run as the main source of power is being overloaded. If there is no reliable grid at the site, ask for the prime rating.",
          body_ar:
            "المولد المشترى على أساس القدرة الاحتياطية ثم يُشغَّل كمصدر رئيسي يكون محمّلًا فوق طاقته. إذا لم تكن هناك شبكة موثوقة في الموقع فاطلبوا القدرة الأساسية.",
        },
      },
      {
        heading_en: "kVA and kW",
        heading_ar: "الكيلو فولت أمبير والكيلو وات",
        body_en:
          "Generating sets are normally rated in kVA at a power factor of 0.8, so the usable active power in kW is the kVA figure multiplied by 0.8 — a 500 kVA set supplies 400 kW. State your load in kW with its power factor, and list large motors separately because their starting current can decide the size of the set.",
        body_ar:
          "تُقنَّن المولدات عادةً بالكيلو فولت أمبير عند معامل قدرة 0.8، فتكون القدرة الفعلية المتاحة بالكيلو وات هي قيمة الكيلو فولت أمبير مضروبة في 0.8 — أي أن مولد 500 ك.ف.أ يعطي 400 ك.و. اذكروا الحمل بالكيلو وات مع معامل القدرة، وأدرجوا المحركات الكبيرة منفصلة لأن تيار بدء تشغيلها قد يحدد حجم المولد.",
      },
      {
        heading_en: "Other Items That Change the Price",
        heading_ar: "بنود أخرى تؤثر في السعر",
        body_en:
          "Two offers for the same kVA can differ widely depending on what is included.",
        body_ar:
          "قد يختلف عرضان للقدرة نفسها اختلافًا كبيرًا بحسب ما يشمله كل منهما.",
        list_en: [
          "Open set or sound-attenuated weatherproof canopy",
          "Automatic transfer switch (ATS) and its current rating",
          "Synchronising panel when sets run in parallel",
          "Base fuel tank capacity or a separate bulk tank",
          "Site altitude and ambient temperature, which reduce available power",
        ],
        list_ar: [
          "مولد مكشوف أو بكابينة عازلة للصوت ومقاومة للعوامل الجوية",
          "مفتاح التحويل الأوتوماتيكي (ATS) وتياره المقنن",
          "لوحة التزامن عند تشغيل أكثر من مولد على التوازي",
          "سعة خزان الوقود بالقاعدة أو خزان خارجي مستقل",
          "ارتفاع الموقع ودرجة الحرارة المحيطة، وكلاهما يخفض القدرة المتاحة",
        ],
      },
      {
        heading_en: "What to Send for a Quotation",
        heading_ar: "ما الذي ترسلونه لطلب عرض سعر",
        body_en:
          "Share these points with our procurement team and we will quote a set on the correct rating:",
        body_ar:
          "شاركوا هذه البيانات مع فريق التوريد لدينا لنقدّم عرض سعر لمولد على فئة القدرة الصحيحة:",
        list_en: [
          "Total load in kW and the largest motor to be started",
          "Duty: standby, prime or continuous",
          "Voltage, frequency and number of phases",
          "Indoor or outdoor installation and any noise limit",
          "Required accessories and any approved-manufacturer list",
        ],
        list_ar: [
          "إجمالي الحمل بالكيلو وات وأكبر محرك سيتم تشغيله",
          "طبيعة التشغيل: احتياطي أو أساسي أو مستمر",
          "الجهد والتردد وعدد الأوجه",
          "التركيب داخلي أو خارجي وأي حد مطلوب للضوضاء",
          "الملحقات المطلوبة وقائمة المصنّعين المعتمدين إن وُجدت",
        ],
      },
    ],
    coverImage: COVER_IMAGE,
    publishedAt: "2026-11-10",
    author: AUTHOR,
    keywords: [
      "standby vs prime generator rating",
      "ISO 8528",
      "قدرة المولد الاحتياطية والأساسية",
      "اختيار مولد كهرباء",
    ],
    relatedSectorIds: ["electrical-energy"],
    relatedKnowledgeIds: [
      "medium-voltage-switchgear-specification-guide",
      "low-voltage-distribution-panel-specification",
    ],
  },
  {
    id: "low-voltage-distribution-panel-specification",
    slug: "low-voltage-distribution-panel-specification",
    type: "buying-guide",
    title_en: "How to Specify Low Voltage Distribution Panels",
    title_ar: "كيف تكتب مواصفات لوحات توزيع الجهد المنخفض",
    summary_en:
      "The ratings, internal separation and protection details that turn a low voltage panel enquiry into a quotation you can compare.",
    summary_ar:
      "القيم المقننة والفصل الداخلي وتفاصيل الحماية التي تجعل طلب توريد لوحة الجهد المنخفض قابلًا للتسعير والمقارنة.",
    sections: [
      {
        heading_en: "The Standard Behind Low Voltage Panels",
        heading_ar: "المواصفة المرجعية للوحات الجهد المنخفض",
        body_en:
          "Main distribution boards, sub-distribution boards and motor control centres are low voltage switchgear assemblies. The IEC 61439 series sets how such an assembly is designed and verified, and a specification that names it gives every bidder the same basis.",
        body_ar:
          "اللوحات العمومية ولوحات التوزيع الفرعية ولوحات التحكم في المحركات كلها مجمّعات مفاتيح جهد منخفض. وتحدد سلسلة المواصفات IEC 61439 طريقة تصميم هذه المجمّعات والتحقق منها، والمواصفة التي تنص عليها تضع جميع المتقدمين على أساس واحد.",
      },
      {
        heading_en: "Ratings to State",
        heading_ar: "القيم المقننة الواجب ذكرها",
        body_en:
          "As with medium voltage equipment, these values come from the design, not from the panel builder.",
        body_ar:
          "كما في معدات الجهد المتوسط، تؤخذ هذه القيم من التصميم وليس من مصنّع اللوحة.",
        list_en: [
          "Rated operational voltage and frequency",
          "Rated current of the main busbars",
          "Rated short-time withstand current (Icw) and its duration",
          "Degree of protection (IP rating) for the installation location",
          "Earthing system of the installation",
        ],
        list_ar: [
          "جهد التشغيل المقنن والتردد",
          "التيار المقنن لقضبان التوزيع الرئيسية",
          "تيار التحمل المقنن لزمن قصير (Icw) ومدته",
          "درجة الحماية (IP) المناسبة لمكان التركيب",
          "نظام التأريض المستخدم في المنشأة",
        ],
      },
      {
        heading_en: "Forms of Internal Separation",
        heading_ar: "أشكال الفصل الداخلي",
        body_en:
          "IEC 61439-2 describes how far busbars, functional units and cable terminals are separated from one another inside the panel. A higher form allows work on one circuit while the rest stay live, at a higher cost and a larger panel.",
        body_ar:
          "تصف المواصفة IEC 61439-2 مدى الفصل بين قضبان التوزيع والوحدات الوظيفية وأطراف الكابلات داخل اللوحة. وكلما ارتفع شكل الفصل أمكن العمل على دائرة واحدة مع بقاء الباقي في الخدمة، مقابل تكلفة أعلى ولوحة أكبر.",
        table: {
          caption_en: "Forms of Separation",
          caption_ar: "أشكال الفصل",
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
              label_en: "Form 2",
              label_ar: "الشكل 2",
              values_en: ["Busbars separated from the functional units"],
              values_ar: ["فصل قضبان التوزيع عن الوحدات الوظيفية"],
            },
            {
              label_en: "Form 3",
              label_ar: "الشكل 3",
              values_en: [
                "Busbars separated from the functional units, and functional units separated from one another",
              ],
              values_ar: [
                "فصل قضبان التوزيع عن الوحدات الوظيفية، وفصل الوحدات الوظيفية عن بعضها",
              ],
            },
            {
              label_en: "Form 4",
              label_ar: "الشكل 4",
              values_en: [
                "As Form 3, with the outgoing terminals of each unit also separated from those of other units",
              ],
              values_ar: [
                "كما في الشكل 3 مع فصل أطراف الخروج لكل وحدة عن أطراف الوحدات الأخرى",
              ],
            },
          ],
        },
      },
      {
        heading_en: "Protective Devices",
        heading_ar: "أجهزة الحماية",
        body_en:
          "The enquiry should give, for every circuit, the type and rating of the breaker rather than a total count of ways.",
        body_ar:
          "يجب أن يوضح طلب التوريد لكل دائرة نوع القاطع وتياره، لا مجرد العدد الإجمالي للمخارج.",
        list_en: [
          "Air circuit breakers (ACB) for main incomers and large feeders",
          "Moulded-case circuit breakers (MCCB) for distribution feeders",
          "Miniature circuit breakers (MCB) for final circuits",
          "Breaking capacity required at each level",
          "Metering, surge protection and power factor correction if required",
        ],
        list_ar: [
          "القواطع الهوائية (ACB) للدخول الرئيسي والمغذيات الكبيرة",
          "القواطع المقولبة (MCCB) لمغذيات التوزيع",
          "القواطع المنمنمة (MCB) للدوائر النهائية",
          "سعة القطع المطلوبة عند كل مستوى",
          "أجهزة القياس والحماية من الصواعق وتحسين معامل القدرة إن لزم",
        ],
      },
      {
        heading_en: "What to Send for a Quotation",
        heading_ar: "ما الذي ترسلونه لطلب عرض سعر",
        body_en:
          "Send the following and we will quote against your specification:",
        body_ar: "أرسلوا البيانات التالية لنقدّم عرض السعر وفق مواصفاتكم:",
        list_en: [
          "Single-line diagram and load schedule",
          "Technical specification or tender document section",
          "Installation location: indoor, outdoor, plant room or site",
          "Cable entry direction and available space",
          "Any approved-manufacturer list for breakers and enclosures",
        ],
        list_ar: [
          "المخطط الأحادي وجدول الأحمال",
          "المواصفات الفنية أو البند الخاص بها في كراسة الشروط",
          "مكان التركيب: داخلي أو خارجي أو غرفة معدات أو موقع",
          "اتجاه دخول الكابلات والمساحة المتاحة",
          "قائمة المصنّعين المعتمدين للقواطع والهياكل إن وُجدت",
        ],
      },
    ],
    coverImage: COVER_IMAGE,
    publishedAt: "2026-11-10",
    author: AUTHOR,
    keywords: [
      "low voltage panel specification",
      "IEC 61439",
      "لوحات توزيع الجهد المنخفض",
      "مواصفات لوحات التوزيع",
    ],
    relatedSectorIds: ["electrical-energy"],
    relatedKnowledgeIds: [
      "medium-voltage-switchgear-specification-guide",
      "generator-ratings-standby-prime-continuous",
    ],
  },
];
