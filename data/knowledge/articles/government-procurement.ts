import type { KnowledgeItem } from "@/data/knowledge/types";

/**
 * Government & Public Procurement Knowledge Center articles — written to
 * the editorial standard in `data/knowledge/EDITORIAL.md`. They summarise
 * Egypt's Public Contracts Law No. 182 of 2018 for procurement officers and
 * are general information, not legal advice: every article says so and
 * points the reader to the official text and its amendments. No brand,
 * stock, certification, client, or lead-time claim appears below, and
 * nothing presents GOLTENS as a manufacturer or an authorized agent.
 *
 * Search intent per article (editorial metadata, not rendered):
 * - public-contracting-methods-law-182 — informational: a procurement
 *   officer choosing or justifying a contracting method.
 * - technical-specifications-without-brand-names — informational /
 *   commercial investigation: someone drafting a tender specification.
 * - bid-bond-and-final-guarantee-law-182 — informational: a supplier or
 *   officer checking guarantee rates and deadlines.
 */
const COVER_IMAGE = "/images/categories/government-solutions-new.jpg";
const AUTHOR = "GOLTENS Procurement Team";
const REVIEWED = "2026-11-10";

const LEGAL_NOTE_EN =
  "This article is general information, not legal advice. The law has been amended since it was issued — always work from the official text published in the Official Gazette and the current executive regulations, and from your entity's Contracts Department.";
const LEGAL_NOTE_AR =
  "هذا المقال معلومات عامة وليس استشارة قانونية. وقد أُدخلت تعديلات على القانون بعد صدوره — فاعتمدوا دائمًا على النص الرسمي المنشور في الجريدة الرسمية واللائحة التنفيذية السارية، وعلى إدارة التعاقدات في جهتكم.";

export const governmentProcurementArticles: KnowledgeItem[] = [
  {
    id: "public-contracting-methods-law-182",
    slug: "public-contracting-methods-law-182",
    type: "technical-guide",
    title_en: "Contracting Methods Under Egypt's Law 182 of 2018",
    title_ar: "طرق التعاقد في قانون 182 لسنة 2018: متى تُستخدم كل طريقة",
    summary_en:
      "The purchasing methods the Public Contracts Law allows, the condition attached to each, and what a supplier needs from you to quote under any of them.",
    summary_ar:
      "طرق الشراء التي يجيزها قانون تنظيم التعاقدات التي تبرمها الجهات العامة، وشرط اللجوء إلى كل منها، وما يحتاجه المورد منكم لتقديم عرض تحت أي طريقة.",
    sections: [
      {
        heading_en: "The Law in Brief",
        heading_ar: "القانون في سطور",
        body_en:
          "Law No. 182 of 2018 regulates contracts concluded by public entities. It was issued and published on 3 October 2018, came into force thirty days later, and replaced the Tenders and Auctions Law No. 89 of 1998. Its executive regulations were issued by Minister of Finance Decree No. 692 of 2019.",
        body_ar:
          "ينظم القانون رقم 182 لسنة 2018 التعاقدات التي تبرمها الجهات العامة. صدر ونُشر في 3 أكتوبر 2018 وبدأ العمل به بعد ثلاثين يومًا من نشره، وحل محل قانون تنظيم المناقصات والمزايدات رقم 89 لسنة 1998. وصدرت لائحته التنفيذية بقرار وزير المالية رقم 692 لسنة 2019.",
        callout: {
          body_en: LEGAL_NOTE_EN,
          body_ar: LEGAL_NOTE_AR,
        },
      },
      {
        heading_en: "Public Tender Is the Default",
        heading_ar: "المناقصة العامة هي الأصل",
        body_en:
          "Under Article 7, the purchase or lease of movables, works contracts and services are contracted by public tender. Any other method is an exception that needs a reasoned decision from the competent authority, based on a proposal from the Contracts Department. Once a method is chosen, the procedure may not be converted into another method.",
        body_ar:
          "وفق المادة 7، يكون التعاقد على شراء أو استئجار المنقولات ومقاولات الأعمال وتلقي الخدمات بطريق المناقصة العامة. وأي طريق آخر استثناء يستلزم قرارًا مسببًا من السلطة المختصة بناءً على عرض إدارة التعاقدات. وبعد اختيار الطريق لا يجوز تحويل الإجراء إلى طريق آخر.",
      },
      {
        heading_en: "The Other Methods and Their Conditions",
        heading_ar: "الطرق الأخرى وشروطها",
        body_en:
          "Each exceptional method is tied to a condition. The reasoned decision should name which condition applies.",
        body_ar:
          "يرتبط كل طريق استثنائي بشرط محدد، ويجب أن يوضح القرار المسبب أي شرط ينطبق.",
        table: {
          caption_en: "Purchasing Methods Other Than Public Tender",
          caption_ar: "طرق الشراء غير المناقصة العامة",
          headers_en: ["When It May Be Used"],
          headers_ar: ["متى يجوز اللجوء إليه"],
          rows: [
            {
              label_en: "General practice (public negotiation)",
              label_ar: "الممارسة العامة",
              values_en: [
                "The subject can be described precisely, technical responsiveness can be measured, and enough suppliers exist; prices are negotiated in sessions",
              ],
              values_ar: [
                "إمكان توصيف موضوع التعاقد بدقة، وقياس الاستجابة الفنية، وتوافر عدد كافٍ من الموردين؛ مع التفاوض على الأسعار في جلسات",
              ],
            },
            {
              label_en: "Limited practice",
              label_ar: "الممارسة المحدودة",
              values_en: [
                "Items made or imported only by specific parties, national-security contracts, or items that must match what is already installed",
              ],
              values_ar: [
                "أصناف لا يصنعها أو يستوردها إلا أشخاص بذواتهم، أو تعاقدات تتصل بالأمن القومي، أو أصناف يلزم توافقها مع القائم",
              ],
            },
            {
              label_en: "Limited tender",
              label_ar: "المناقصة المحدودة",
              values_en: [
                "The nature of the work limits it to specific suppliers, a prequalification exists, or the time and cost of a public tender are out of proportion to the value",
              ],
              values_ar: [
                "طبيعة العملية تقصر الاشتراك على موردين بذواتهم، أو وجود تأهيل مسبق، أو عدم تناسب وقت وتكلفة المناقصة العامة مع قيمة التعاقد",
              ],
            },
            {
              label_en: "Two-stage tender",
              label_ar: "المناقصة ذات المرحلتين",
              values_en: [
                "Complex subjects where the final specification cannot be fixed before discussing technical solutions with bidders",
              ],
              values_ar: [
                "التعاقدات المركبة التي يتعذر تحديد مواصفاتها النهائية قبل مناقشة الحلول الفنية مع المتقدمين",
              ],
            },
            {
              label_en: "Local tender",
              label_ar: "المناقصة المحلية",
              values_en: [
                "Value not above EGP 4 million; limited to suppliers whose activity is within the governorate where the contract is performed",
              ],
              values_ar: [
                "ما لا تزيد قيمته على 4 ملايين جنيه؛ ويقتصر الاشتراك على الموردين الذين يقع نشاطهم في نطاق المحافظة محل التنفيذ",
              ],
            },
            {
              label_en: "Direct agreement",
              label_ar: "الاتفاق المباشر",
              values_en: [
                "Urgent or emergency cases that cannot wait for a tender, a single source with an exclusive right or sole technical ability, or compatibility with existing assets from one source only; within the financial limits set for each authority level",
              ],
              values_ar: [
                "الحالات الطارئة أو العاجلة التي لا تحتمل إجراءات المناقصة، أو المصدر الوحيد صاحب الحق الحصري أو القدرة الفنية المنفردة، أو التكامل مع القائم من مصدر واحد؛ وفي الحدود المالية المقررة لكل سلطة",
              ],
            },
          ],
        },
        callout: {
          body_en:
            "Article 7 also allows a framework agreement to be concluded through any of these methods, for needs that recur over a period.",
          body_ar:
            "تجيز المادة 7 كذلك إبرام اتفاق إطاري بأي من هذه الطرق، للاحتياجات المتكررة خلال مدة معينة.",
        },
      },
      {
        heading_en: "Rules That Apply Whichever Method You Use",
        heading_ar: "قواعد تسري أيًّا كانت الطريقة",
        body_en:
          "A sound file answers these points before the method is even discussed.",
        body_ar: "الملف السليم يجيب عن هذه النقاط قبل مناقشة الطريقة أصلًا.",
        list_en: [
          "No splitting: a requirement may not be divided to bring it under a threshold or avoid a procedure (Article 10)",
          "Funds and real need: confirm the allocation and that the purchase meets an actual need; contracting in the last month of the fiscal year is barred except in approved exceptional cases (Article 11)",
          "Neutral specifications: describe performance, not a brand (Article 14)",
          "Estimated value: it drives the method, the authority level and the provisional guarantee",
          "Egyptian product preference: notify the preference committee for contracts above the values set in Article 19",
        ],
        list_ar: [
          "حظر التجزئة: لا يجوز تقسيم الاحتياج للنزول به عن حد مالي أو لتفادي إجراء (المادة 10)",
          "الاعتماد والاحتياج الفعلي: التأكد من توافر الاعتماد المالي ومن أن الشراء يلبي احتياجًا فعليًا؛ ويُحظر التعاقد في الشهر الأخير من السنة المالية إلا في حالات استثنائية معتمدة (المادة 11)",
          "مواصفات محايدة: وصف الأداء لا العلامة التجارية (المادة 14)",
          "القيمة التقديرية: يتحدد بها طريق التعاقد ومستوى السلطة والتأمين المؤقت",
          "تفضيل المنتج المصري: إخطار لجنة التفضيل في التعاقدات التي تتجاوز القيم المحددة في المادة 19",
        ],
      },
      {
        heading_en: "Choosing the Method in Practice",
        heading_ar: "اختيار الطريقة عمليًا",
        body_en: "A short sequence that keeps the file defensible on audit:",
        body_ar: "تسلسل مختصر يجعل الملف سليمًا عند المراجعة:",
        listStyle: "number",
        list_en: [
          "Fix the requirement and quantities for the whole period, without splitting",
          "Prepare the estimated value from a documented market study",
          "Start from public tender and ask whether one of the legal conditions for another method is actually met",
          "Record the condition and the evidence in the reasoned decision",
          "Issue the tender documents with neutral specifications and clear evaluation criteria",
        ],
        list_ar: [
          "تحديد الاحتياج والكميات عن المدة كلها دون تجزئة",
          "إعداد القيمة التقديرية من دراسة سوق موثقة",
          "البدء من المناقصة العامة ثم التحقق من انطباق أحد الشروط القانونية لطريق آخر فعلًا",
          "إثبات الشرط والدليل عليه في القرار المسبب",
          "طرح كراسة الشروط بمواصفات محايدة ومعايير تقييم واضحة",
        ],
      },
      {
        heading_en: "RFQ Checklist",
        heading_ar: "قائمة متطلبات طلب عرض السعر (RFQ)",
        body_en:
          "Whatever the method, a supplier can price accurately only with the following. Send it to our procurement team for a quotation or for a price indication to support your market study.",
        body_ar:
          "أيًّا كانت الطريقة، لا يستطيع المورد التسعير بدقة إلا بالبيانات التالية. أرسلوها إلى فريق التوريد لدينا للحصول على عرض سعر أو سعر استرشادي يدعم دراسة السوق.",
        list_en: [
          "Item schedule with quantities and units",
          "Technical specification for each item, or the tender document section",
          "Contracting method and the session or submission date",
          "Delivery location, delivery period and partial-delivery rules",
          "Bid validity period and guarantee requirements",
          "Payment terms and required documents (tax card, commercial register, registrations)",
          "Inspection and acceptance procedure, and warranty period",
        ],
        list_ar: [
          "جدول الأصناف بالكميات والوحدات",
          "المواصفات الفنية لكل صنف أو البند الخاص بها في كراسة الشروط",
          "طريق التعاقد وموعد الجلسة أو تقديم العروض",
          "مكان التوريد ومدته وقواعد التوريد على دفعات",
          "مدة سريان العطاء ومتطلبات التأمين",
          "شروط السداد والمستندات المطلوبة (البطاقة الضريبية، السجل التجاري، شهادات القيد)",
          "إجراءات الفحص والاستلام ومدة الضمان",
        ],
      },
      {
        heading_en: "Sources and Review",
        heading_ar: "المصادر والمراجعة",
        body_en: "Content last reviewed: 10 November 2026.",
        body_ar: "تاريخ آخر مراجعة للمحتوى: 10 نوفمبر 2026.",
        list_en: [
          "Law No. 182 of 2018 regulating contracts concluded by public entities, Official Gazette, 3 October 2018, as amended — Articles 7, 10, 11, 14 and 19, and the articles on each contracting method (Articles 54 to 63)",
          "Executive Regulations of Law No. 182 of 2018, Minister of Finance Decree No. 692 of 2019",
          "Ministry of Finance, Guide for Medium, Small and Micro Enterprises to public contracting",
        ],
        list_ar: [
          "القانون رقم 182 لسنة 2018 بإصدار قانون تنظيم التعاقدات التي تبرمها الجهات العامة، الجريدة الرسمية، 3 أكتوبر 2018، وتعديلاته — المواد 7 و10 و11 و14 و19، والمواد المنظمة لكل طريق تعاقد (المواد من 54 إلى 63)",
          "اللائحة التنفيذية للقانون رقم 182 لسنة 2018، قرار وزير المالية رقم 692 لسنة 2019",
          "وزارة المالية، دليل أصحاب المشروعات المتوسطة والصغيرة ومتناهية الصغر للتعاقدات العامة",
        ],
      },
    ],
    coverImage: COVER_IMAGE,
    publishedAt: "2026-11-10",
    updatedAt: REVIEWED,
    version: "Rev. 2026-11",
    author: AUTHOR,
    relatedSectorIds: ["government-procurement"],
    relatedKnowledgeIds: [
      "technical-specifications-without-brand-names",
      "bid-bond-and-final-guarantee-law-182",
    ],
    seo: {
      title_en: "Law 182 of 2018: Public Contracting Methods in Egypt",
      title_ar: "طرق التعاقد في قانون 182 لسنة 2018 وشروط كل طريقة",
      description_en:
        "Public tender, practice, limited and local tender, two-stage tender and direct agreement under Egypt's Law 182/2018 — when each applies, with an RFQ checklist.",
      description_ar:
        "المناقصة العامة والممارسة والمناقصة المحدودة والمحلية وذات المرحلتين والاتفاق المباشر في قانون 182 لسنة 2018: متى تُستخدم كل طريقة، مع قائمة RFQ.",
      keywords: [
        "طرق التعاقد في قانون 182 لسنة 2018",
        "قانون التعاقدات الحكومية",
        "المناقصة المحلية",
        "الاتفاق المباشر",
        "الممارسة المحدودة",
        "Egypt public procurement law 182",
      ],
    },
  },
  {
    id: "technical-specifications-without-brand-names",
    slug: "technical-specifications-without-brand-names",
    type: "buying-guide",
    title_en: "Writing Tender Specifications Without Brand Names",
    title_ar: "كتابة المواصفات الفنية في كراسة الشروط دون ذكر علامة تجارية",
    summary_en:
      "How to describe what you need by performance and standards, as Article 14 of Law 182 of 2018 requires, so that offers are compliant, comparable and open to competition.",
    summary_ar:
      "كيف توصّفون الاحتياج بالأداء والمواصفات القياسية كما توجب المادة 14 من قانون 182 لسنة 2018، فتأتي العروض مطابقة وقابلة للمقارنة ومفتوحة للمنافسة.",
    sections: [
      {
        heading_en: "What Article 14 Requires",
        heading_ar: "ما الذي توجبه المادة 14",
        body_en:
          'Technical specifications must be precise and detailed, or expressed as general performance standards, and are drafted by a specialised technical committee. Egyptian or international standards are to be observed. The specification may not refer to a particular trademark, trade name, patent, design, product type, producer or country of origin.\n\nThe one exception is an item that cannot be described in any other way. It may then be named, provided the description is followed by wording such as "or its equivalent in performance".',
        body_ar:
          "يجب أن تكون المواصفات الفنية دقيقة ومفصلة، أو في صورة معايير أداء عامة، وتضعها لجنة فنية متخصصة. وتُراعى المواصفات القياسية المصرية أو الدولية. ولا يجوز أن تشير المواصفة إلى علامة تجارية أو اسم تجاري أو براءة اختراع أو تصميم أو نوع منتج أو منتِج بعينه أو بلد منشأ.\n\nوالاستثناء الوحيد هو الصنف الذي يتعذر وصفه بأي طريقة أخرى، فيجوز عندئذ ذكره بشرط أن يُتبع الوصف بعبارة مثل «أو ما يعادلها أو ما يماثلها أو ما يكافئها في الأداء».",
        callout: {
          body_en: LEGAL_NOTE_EN,
          body_ar: LEGAL_NOTE_AR,
        },
      },
      {
        heading_en: "Brand-Based Wording and Its Neutral Replacement",
        heading_ar: "الصياغة المبنية على العلامة وبديلها المحايد",
        body_en:
          "A brand name is usually shorthand for a set of properties. Write the properties instead.",
        body_ar:
          "اسم العلامة غالبًا اختصار لمجموعة من الخصائص. اكتبوا الخصائص نفسها بدلًا منه.",
        table: {
          caption_en: "From Brand Wording to Performance Wording",
          caption_ar: "من صياغة العلامة إلى صياغة الأداء",
          headers_en: ["Write Instead"],
          headers_ar: ["الصياغة البديلة"],
          rows: [
            {
              label_en: '"Pump, brand X, model Y"',
              label_ar: "«مضخة ماركة كذا موديل كذا»",
              values_en: [
                "Flow and head at the duty point, liquid and temperature, materials of casing and impeller, motor power and voltage, and the applicable standard",
              ],
              values_ar: [
                "التصرف والرفع عند نقطة التشغيل، ونوع السائل ودرجة حرارته، وخامات الجسم والمروحة، وقدرة المحرك وجهده، والمواصفة القياسية المطبقة",
              ],
            },
            {
              label_en: '"Hydraulic oil, brand X 46"',
              label_ar: "«زيت هيدروليك ماركة كذا 46»",
              values_en: [
                "ISO viscosity grade, performance level required by the equipment manufacturer, pack size and quantity",
              ],
              values_ar: [
                "درجة اللزوجة ISO، ومستوى الأداء الذي يطلبه مصنّع المعدة، وحجم العبوة والكمية",
              ],
            },
            {
              label_en: '"European origin"',
              label_ar: "«منشأ أوروبي»",
              values_en: [
                "The standard the product must comply with and the test certificates to be submitted",
              ],
              values_ar: [
                "المواصفة القياسية الواجب مطابقتها وشهادات الاختبار المطلوب تقديمها",
              ],
            },
            {
              label_en: '"Spare part for existing machine"',
              label_ar: "«قطعة غيار لمعدة قائمة»",
              values_en: [
                'Machine make and model, part number and drawing, followed by "or its equivalent in performance" — the case the exception exists for',
              ],
              values_ar: [
                "ماركة المعدة وموديلها ورقم القطعة والرسم، متبوعة بعبارة «أو ما يكافئها في الأداء» — وهي الحالة التي وُضع الاستثناء لأجلها",
              ],
            },
          ],
        },
      },
      {
        heading_en: "Building a Specification Item by Item",
        heading_ar: "بناء المواصفة بندًا بندًا",
        body_en:
          "Each line of the item schedule should let a supplier who has never seen your site quote the right product.",
        body_ar:
          "يجب أن يتيح كل بند في جدول الأصناف لمورد لم يرَ موقعكم من قبل أن يسعّر المنتج الصحيح.",
        listStyle: "number",
        list_en: [
          "Function: what the item must do and where it will be used",
          "Measurable performance: capacity, rating, dimensions, tolerances",
          "Materials and construction, where they affect service life",
          "Applicable Egyptian or international standard, with its number",
          "Documents required with the offer: datasheet, catalogue, test certificates, sample if needed",
          "Inspection and acceptance method: what will be checked and against which values",
          "Packing, labelling, warranty period and after-sales requirements",
        ],
        list_ar: [
          "الوظيفة: ما المطلوب من الصنف وأين سيُستخدم",
          "أداء قابل للقياس: السعة، القدرة المقننة، الأبعاد، التفاوتات المسموحة",
          "الخامات وطريقة التصنيع حيث تؤثر في العمر التشغيلي",
          "المواصفة القياسية المصرية أو الدولية المطبقة برقمها",
          "المستندات المطلوبة مع العرض: نشرة البيانات، الكتالوج، شهادات الاختبار، عيّنة عند اللزوم",
          "طريقة الفحص والاستلام: ما الذي سيُفحص ومقابل أي قيم",
          "التعبئة والتمييز ومدة الضمان ومتطلبات ما بعد البيع",
        ],
      },
      {
        heading_en: "Mistakes That Cause Cancelled or Disputed Tenders",
        heading_ar: "أخطاء تؤدي إلى إلغاء المناقصة أو النزاع عليها",
        body_en:
          "Most can be caught by reading the schedule as a bidder would.",
        body_ar: "يمكن اكتشاف أغلبها بقراءة الجدول بعين المتقدم.",
        list_en: [
          "A specification copied from one manufacturer's datasheet, which only that product can meet",
          'Ranges left open ("suitable capacity", "good quality") so that offers cannot be compared',
          "A standard cited without its number, or a withdrawn edition",
          "No stated acceptance test, which moves the dispute to the delivery stage",
          "Quantities and units that do not match the way the product is sold",
        ],
        list_ar: [
          "مواصفة منقولة من نشرة بيانات مصنّع واحد لا يطابقها إلا منتجه",
          "قيم متروكة مفتوحة («سعة مناسبة»، «جودة عالية») فتتعذر مقارنة العروض",
          "ذكر مواصفة قياسية دون رقمها، أو إصدار ملغى منها",
          "عدم تحديد اختبار الاستلام، فينتقل الخلاف إلى مرحلة التوريد",
          "كميات ووحدات لا تطابق طريقة بيع المنتج في السوق",
        ],
        callout: {
          body_en:
            "Price evaluation also takes Egyptian products into account: under Article 35, an Egyptian product meeting the local-content requirement is preferred when its price is within 15 % of the lowest non-qualifying offer. State origin and local-content documents among the papers bidders must submit.",
          body_ar:
            "يدخل المنتج المصري في المفاضلة السعرية: وفق المادة 35 يُفضَّل المنتج المصري المستوفي لنسبة المكوّن المحلي إذا كان سعره في حدود 15٪ زيادة على أقل العروض غير المستوفية. فاذكروا مستندات المنشأ والمكوّن المحلي ضمن الأوراق المطلوبة من المتقدمين.",
        },
      },
      {
        heading_en: "RFQ Checklist",
        heading_ar: "قائمة متطلبات طلب عرض السعر (RFQ)",
        body_en:
          "Send your draft schedule to our procurement team. GOLTENS quotes against the specification as written and sources from more than one manufacturer where the specification allows.",
        body_ar:
          "أرسلوا مسودة جدول الأصناف إلى فريق التوريد لدينا. تقدّم GOLTENS عرضها وفق المواصفة كما وردت، وتورّد من أكثر من مصنّع متى سمحت المواصفة بذلك.",
        list_en: [
          "Item schedule with function, measurable performance and quantities",
          "Applicable standards with their numbers",
          "For compatibility items: existing machine make, model and part number",
          "Documents and samples required with the offer",
          "Inspection and acceptance method",
          "Delivery location and period, warranty and payment terms",
        ],
        list_ar: [
          "جدول الأصناف متضمنًا الوظيفة والأداء القابل للقياس والكميات",
          "المواصفات القياسية المطبقة بأرقامها",
          "في أصناف التوافق: ماركة المعدة القائمة وموديلها ورقم القطعة",
          "المستندات والعيّنات المطلوبة مع العرض",
          "طريقة الفحص والاستلام",
          "مكان التوريد ومدته والضمان وشروط السداد",
        ],
      },
      {
        heading_en: "Sources and Review",
        heading_ar: "المصادر والمراجعة",
        body_en: "Content last reviewed: 10 November 2026.",
        body_ar: "تاريخ آخر مراجعة للمحتوى: 10 نوفمبر 2026.",
        list_en: [
          "Law No. 182 of 2018 regulating contracts concluded by public entities, Official Gazette, 3 October 2018, as amended — Article 14 (technical specifications) and Article 35 (preference for Egyptian products)",
          "Law No. 5 of 2015 on preference for Egyptian products in government contracts",
          "Executive Regulations of Law No. 182 of 2018, Minister of Finance Decree No. 692 of 2019",
        ],
        list_ar: [
          "القانون رقم 182 لسنة 2018 بإصدار قانون تنظيم التعاقدات التي تبرمها الجهات العامة، الجريدة الرسمية، 3 أكتوبر 2018، وتعديلاته — المادة 14 (المواصفات الفنية) والمادة 35 (تفضيل المنتج المصري)",
          "القانون رقم 5 لسنة 2015 في شأن تفضيل المنتجات المصرية في العقود الحكومية",
          "اللائحة التنفيذية للقانون رقم 182 لسنة 2018، قرار وزير المالية رقم 692 لسنة 2019",
        ],
      },
    ],
    coverImage: COVER_IMAGE,
    publishedAt: "2026-11-10",
    updatedAt: REVIEWED,
    version: "Rev. 2026-11",
    author: AUTHOR,
    relatedSectorIds: ["government-procurement", "global-sourcing"],
    relatedKnowledgeIds: [
      "public-contracting-methods-law-182",
      "bid-bond-and-final-guarantee-law-182",
    ],
    seo: {
      title_en: "Tender Specifications Without Brand Names (Law 182, Art. 14)",
      title_ar: "كتابة المواصفات الفنية لكراسة الشروط دون علامة تجارية",
      description_en:
        "How to write neutral, performance-based tender specifications under Article 14 of Egypt's Law 182/2018, with wording examples and an RFQ checklist.",
      description_ar:
        "كيف تُكتب مواصفات فنية محايدة مبنية على الأداء وفق المادة 14 من قانون 182 لسنة 2018، مع أمثلة للصياغة وقائمة متطلبات RFQ.",
      keywords: [
        "كتابة المواصفات الفنية",
        "كراسة الشروط والمواصفات",
        "أو ما يعادلها",
        "المادة 14 قانون 182",
        "tender technical specifications Egypt",
        "or equivalent specification",
      ],
    },
  },
  {
    id: "bid-bond-and-final-guarantee-law-182",
    slug: "bid-bond-and-final-guarantee-law-182",
    type: "technical-guide",
    title_en: "Provisional and Final Guarantees in Egyptian Public Tenders",
    title_ar: "التأمين المؤقت والتأمين النهائي في التعاقدات الحكومية",
    summary_en:
      "The rates, deadlines and consequences set by Law 182 of 2018 for the provisional and final guarantees, with a worked example for a supply contract.",
    summary_ar:
      "النسب والمهل والآثار التي قررها قانون 182 لسنة 2018 للتأمين المؤقت والتأمين النهائي، مع مثال محسوب لعقد توريد.",
    sections: [
      {
        heading_en: "Two Guarantees, Two Purposes",
        heading_ar: "تأمينان لغرضين مختلفين",
        body_en:
          "The provisional guarantee accompanies the offer and secures the bidder's commitment to it during the validity period. The final guarantee is paid by the winning bidder and secures performance of the contract. Both are set by the law, so the tender documents state them rather than invent them.",
        body_ar:
          "يُقدَّم التأمين المؤقت مع العطاء ضمانًا لالتزام صاحبه به خلال مدة سريانه. أما التأمين النهائي فيسدده صاحب العطاء الفائز ضمانًا لتنفيذ العقد. وكلاهما محدد بالقانون، فكراسة الشروط تنص عليهما ولا تستحدثهما.",
        callout: {
          body_en: LEGAL_NOTE_EN,
          body_ar: LEGAL_NOTE_AR,
        },
      },
      {
        heading_en: "Rates and Deadlines",
        heading_ar: "النسب والمهل",
        body_en: "The figures below are those of Articles 16 and 40.",
        body_ar: "القيم التالية هي ما ورد في المادتين 16 و40.",
        table: {
          caption_en: "Guarantees for Supply, Works and Service Contracts",
          caption_ar: "التأمينات في عقود التوريد والمقاولات والخدمات",
          headers_en: ["Amount", "When"],
          headers_ar: ["القيمة", "الموعد"],
          rows: [
            {
              label_en: "Provisional guarantee (Article 16)",
              label_ar: "التأمين المؤقت (المادة 16)",
              values_en: [
                "An amount fixed in the tender documents, not above 1.5 % of the estimated value",
                "With the offer; valid for 30 days beyond the offer validity period",
              ],
              values_ar: [
                "مبلغ تحدده كراسة الشروط بما لا يجاوز 1.5٪ من القيمة التقديرية",
                "مع العطاء، ويظل ساريًا 30 يومًا بعد انتهاء مدة سريان العطاء",
              ],
            },
            {
              label_en: "Final guarantee (Article 40)",
              label_ar: "التأمين النهائي (المادة 40)",
              values_en: [
                "5 % of the contract value",
                "Within 10 working days of notification of acceptance; 20 working days for contractors abroad, extendable by up to 10 working days with approval",
              ],
              values_ar: [
                "5٪ من قيمة العقد",
                "خلال 10 أيام عمل من الإخطار بقبول العطاء؛ و20 يوم عمل للمتعاقد من الخارج، ويجوز مدها بموافقة بما لا يجاوز 10 أيام عمل",
              ],
            },
          ],
        },
      },
      {
        heading_en: "Worked Example",
        heading_ar: "مثال محسوب",
        body_en:
          "A supply tender has an estimated value of EGP 2,000,000 and an offer validity of 90 days. The provisional guarantee stated in the documents cannot exceed EGP 30,000 (1.5 %), and it must remain valid for 120 days from the opening date.\n\nThe contract is awarded at EGP 1,900,000. The final guarantee is EGP 95,000 (5 %), due within 10 working days of the acceptance notice.",
        body_ar:
          "مناقصة توريد قيمتها التقديرية 2,000,000 جنيه ومدة سريان العطاء فيها 90 يومًا. التأمين المؤقت المنصوص عليه في الكراسة لا يجوز أن يتجاوز 30,000 جنيه (1.5٪)، ويجب أن يظل ساريًا 120 يومًا من تاريخ فتح المظاريف.\n\nرست العملية بقيمة 1,900,000 جنيه. فيكون التأمين النهائي 95,000 جنيه (5٪) يُسدد خلال 10 أيام عمل من الإخطار بالقبول.",
      },
      {
        heading_en: "What Happens If the Final Guarantee Is Not Paid",
        heading_ar: "ماذا يحدث إذا لم يُسدَّد التأمين النهائي",
        body_en:
          "Under Article 41, if the winning bidder does not pay the final guarantee within the period, the entity may cancel the award or contract with the next bidder in order of priority. For a supplier, the ten working days start on notification, so the bank facility for the guarantee should be arranged before the offer is submitted, not after the award.",
        body_ar:
          "وفق المادة 41، إذا لم يسدد صاحب العطاء الفائز التأمين النهائي خلال المهلة جاز للجهة إلغاء الترسية أو التعاقد مع صاحب العطاء التالي في الترتيب. وبالنسبة للمورد تبدأ الأيام العشرة من تاريخ الإخطار، فيجب ترتيب التسهيل البنكي الخاص بخطاب الضمان قبل تقديم العطاء لا بعد الترسية.",
      },
      {
        heading_en: "Medium, Small and Micro Enterprises",
        heading_ar: "المشروعات المتوسطة والصغيرة ومتناهية الصغر",
        body_en:
          "The law gives these enterprises specific treatment: local tenders in which they may take part (Article 59) and rules on contracting with them (Article 75). Where a tender is restricted to them, the tender documents may, with the competent authority's approval, accept a signed undertaking in place of the provisional guarantee. Check the tender documents for whether this applies before preparing a guarantee.",
        body_ar:
          "يخص القانون هذه المشروعات بمعاملة محددة: المناقصات المحلية التي يجوز لها الاشتراك فيها (المادة 59) وقواعد التعاقد معها (المادة 75). وإذا اقتصر الطرح عليها جاز بموافقة السلطة المختصة أن تتضمن كراسة الشروط إقرارًا يوقعه صاحب العطاء بديلًا عن التأمين المؤقت. فراجعوا الكراسة لمعرفة ما إذا كان ذلك مطبقًا قبل تجهيز التأمين.",
      },
      {
        heading_en: "What the Tender Documents Should State",
        heading_ar: "ما الذي يجب أن تنص عليه كراسة الشروط",
        body_en:
          "Clear wording here prevents offers being excluded on form alone.",
        body_ar: "وضوح الصياغة هنا يمنع استبعاد عطاءات لأسباب شكلية فقط.",
        list_en: [
          "The provisional guarantee as a fixed amount, not only as a percentage",
          "The offer validity period and the date to which the guarantee must run",
          "Accepted forms of the guarantee and the beneficiary's exact name",
          "The deadline for the final guarantee and the consequence of missing it",
          "When and how each guarantee is released",
        ],
        list_ar: [
          "قيمة التأمين المؤقت كمبلغ محدد وليس كنسبة فقط",
          "مدة سريان العطاء والتاريخ الذي يجب أن يسري حتى نهايته التأمين",
          "الصور المقبولة للتأمين والاسم الدقيق للجهة المستفيدة",
          "مهلة سداد التأمين النهائي وأثر تجاوزها",
          "موعد وطريقة رد كل تأمين",
        ],
      },
      {
        heading_en: "RFQ Checklist",
        heading_ar: "قائمة متطلبات طلب عرض السعر (RFQ)",
        body_en:
          "When you invite GOLTENS to quote, include the commercial terms together with the technical ones so the offer arrives complete.",
        body_ar:
          "عند دعوة GOLTENS لتقديم عرض، أرفقوا الشروط التجارية مع الفنية حتى يصل العرض مكتملًا.",
        list_en: [
          "Item schedule, quantities and technical specifications",
          "Estimated value band or the fixed provisional guarantee amount",
          "Offer validity period and submission date",
          "Accepted form of guarantee and beneficiary name",
          "Delivery location and period, and penalty terms",
          "Payment terms and the documents required with the offer",
        ],
        list_ar: [
          "جدول الأصناف والكميات والمواصفات الفنية",
          "شريحة القيمة التقديرية أو مبلغ التأمين المؤقت المحدد",
          "مدة سريان العطاء وموعد التقديم",
          "صورة التأمين المقبولة واسم الجهة المستفيدة",
          "مكان التوريد ومدته وشروط الغرامات",
          "شروط السداد والمستندات المطلوبة مع العرض",
        ],
      },
      {
        heading_en: "Sources and Review",
        heading_ar: "المصادر والمراجعة",
        body_en: "Content last reviewed: 10 November 2026.",
        body_ar: "تاريخ آخر مراجعة للمحتوى: 10 نوفمبر 2026.",
        list_en: [
          "Law No. 182 of 2018 regulating contracts concluded by public entities, Official Gazette, 3 October 2018, as amended — Articles 16, 22, 40 and 41 (guarantees), 59 and 75 (medium, small and micro enterprises)",
          "Executive Regulations of Law No. 182 of 2018, Minister of Finance Decree No. 692 of 2019",
          "Ministry of Finance, Guide for Medium, Small and Micro Enterprises to public contracting",
        ],
        list_ar: [
          "القانون رقم 182 لسنة 2018 بإصدار قانون تنظيم التعاقدات التي تبرمها الجهات العامة، الجريدة الرسمية، 3 أكتوبر 2018، وتعديلاته — المواد 16 و22 و40 و41 (التأمينات)، و59 و75 (المشروعات المتوسطة والصغيرة ومتناهية الصغر)",
          "اللائحة التنفيذية للقانون رقم 182 لسنة 2018، قرار وزير المالية رقم 692 لسنة 2019",
          "وزارة المالية، دليل أصحاب المشروعات المتوسطة والصغيرة ومتناهية الصغر للتعاقدات العامة",
        ],
      },
    ],
    coverImage: COVER_IMAGE,
    publishedAt: "2026-11-10",
    updatedAt: REVIEWED,
    version: "Rev. 2026-11",
    author: AUTHOR,
    relatedSectorIds: ["government-procurement"],
    relatedKnowledgeIds: [
      "public-contracting-methods-law-182",
      "technical-specifications-without-brand-names",
    ],
    seo: {
      title_en: "Bid Bond and Final Guarantee Under Egypt's Law 182 of 2018",
      title_ar: "التأمين المؤقت والنهائي في المناقصات الحكومية: النسب والمهل",
      description_en:
        "Provisional guarantee up to 1.5 % and final guarantee of 5 % under Egypt's Law 182/2018: deadlines, a worked example and what tender documents must state.",
      description_ar:
        "التأمين المؤقت بما لا يجاوز 1.5٪ والتأمين النهائي 5٪ في قانون 182 لسنة 2018: المهل، ومثال محسوب، وما يجب أن تنص عليه كراسة الشروط.",
      keywords: [
        "التأمين المؤقت والتأمين النهائي",
        "نسبة التأمين النهائي",
        "خطاب ضمان ابتدائي",
        "قانون 182 لسنة 2018 التأمين",
        "bid bond Egypt public tender",
        "performance guarantee Law 182",
      ],
    },
  },
];
