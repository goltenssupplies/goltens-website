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
  "This article is for general awareness and is not legal advice. It does not replace the tender documents of each procurement or the official texts in force. The law and its executive regulations have been amended since they were issued — always work from the texts published in the Official Gazette and from your entity's Contracts Department.";
const LEGAL_NOTE_AR =
  "هذا المحتوى للتوعية العامة وليس استشارة قانونية، ولا يغني عن مراجعة مستندات الطرح الخاصة بكل عملية والنصوص الرسمية السارية. وقد أُدخلت تعديلات على القانون ولائحته التنفيذية بعد صدورهما — فاعتمدوا دائمًا على النصوص المنشورة في الجريدة الرسمية وعلى إدارة التعاقدات في جهتكم.";

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
        heading_en: "Article 7: Public Tender Is the Default",
        heading_ar: "المادة 7: المناقصة العامة هي الأصل",
        body_en:
          "Under Article 7, the purchase or lease of movables, works contracts and services are contracted by public tender. Every other method is an exception that needs a reasoned decision from the competent authority, based on a proposal from the Contracts Department. Once a method is chosen, the procedure may not be converted into another method. The conditions for each exceptional method are set out in Articles 54 to 63.",
        body_ar:
          "وفق المادة 7، يكون التعاقد على شراء أو استئجار المنقولات ومقاولات الأعمال وتلقي الخدمات بطريق المناقصة العامة. وكل طريق آخر استثناء يستلزم قرارًا مسببًا من السلطة المختصة بناءً على عرض إدارة التعاقدات. وبعد اختيار الطريق لا يجوز تحويل الإجراء إلى طريق آخر. أما شروط كل طريق استثنائي فتنظمها المواد من 54 إلى 63.",
        callout: {
          body_en: LEGAL_NOTE_EN,
          body_ar: LEGAL_NOTE_AR,
        },
      },
      {
        heading_en: "Article 20: Publication and Advertising",
        heading_ar: "المادة 20: النشر والإعلان",
        body_en:
          "Article 20 sets two layers of publicity. The first applies to every procurement under every method in Article 7: it is published on the Public Procurement Portal. The second depends on the method: a press advertisement or direct invitations.",
        body_ar:
          "تضع المادة 20 مستويين للعلانية. الأول يسري على كل عملية بأي طريق من طرق المادة 7: النشر على بوابة التعاقدات العامة. والثاني يختلف بحسب طريق التعاقد: إعلان صحفي أو توجيه دعوات.",
        subsections: [
          {
            heading_en: "Publication on the Public Procurement Portal",
            heading_ar: "النشر على بوابة التعاقدات العامة",
            body_en: "The portal entry must show:",
            body_ar: "يجب أن يتضمن النشر على البوابة:",
            list_en: [
              "The contracting method and its conditions",
              "The reasons for choosing that method",
              "The evaluation approach",
              "Exception: what the competent authority decides national security requires not to be published",
            ],
            list_ar: [
              "طريقة التعاقد وشروطها",
              "أسباب اتباع هذه الطريقة",
              "أسلوب التقييم",
              "الاستثناء: ما تقدّر السلطة المختصة أن اعتبارات الأمن القومي تقتضي عدم نشره",
            ],
          },
          {
            heading_en: "Press Advertisement or Invitations, by Method",
            heading_ar: "الإعلان الصحفي أو الدعوات بحسب طريق التعاقد",
            body_en:
              "Every advertisement needs the competent authority's approval, which may also allow advertising in more than one Egyptian or international newspaper.",
            body_ar:
              "يستلزم كل إعلان موافقة السلطة المختصة، ويجوز بموافقتها الإعلان في أكثر من صحيفة مصرية أو دولية.",
            list_en: [
              "Public tender and general practice (internal): one advertisement in a widely circulated daily newspaper",
              "Public tender and general practice (external): one advertisement in a widely circulated daily newspaper and in an international newspaper, with notice through embassies and consulates",
              "Limited tender, local tender and limited practice: invitations to the largest possible number of registered, specialised or qualified parties working in the activity",
              "Postponement of the opening session: the new date is announced in the same way as the original",
            ],
            list_ar: [
              "المناقصة العامة والممارسة العامة (الداخلية): إعلان مرة واحدة في إحدى الصحف اليومية واسعة الانتشار",
              "المناقصة العامة والممارسة العامة (الخارجية): إعلان مرة واحدة في صحيفة يومية واسعة الانتشار وفي صحيفة دولية، مع الإعلام عنها عن طريق السفارات والقنصليات",
              "المناقصة المحدودة والمناقصة المحلية والممارسة المحدودة: توجيه الدعوة إلى أكبر عدد ممكن من المسجلين المتخصصين أو المؤهلين المشتغلين بالنشاط",
              "تأجيل جلسة فتح المظاريف: يُعلن الموعد الجديد بالطريقة نفسها التي أُعلن بها الموعد الأصلي",
            ],
          },
        ],
        callout: {
          body_en:
            "For a supplier: a procurement that does not appear on the portal, and is not one of the national-security exceptions, has not met Article 20. Register on the portal and follow the entity's page there instead of relying on the press advertisement alone.",
          body_ar:
            "بالنسبة للمورد: العملية التي لا تظهر على البوابة وليست من استثناءات الأمن القومي لم تستوفِ المادة 20. سجّلوا على البوابة وتابعوا صفحة الجهة عليها ولا تعتمدوا على الإعلان الصحفي وحده.",
        },
      },
      {
        heading_en: "The Exceptional Methods (Articles 54 to 63)",
        heading_ar: "الطرق الاستثنائية (المواد من 54 إلى 63)",
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
                "Value not above EGP 4 million; limited to suppliers whose activity is within the governorate where the contract is performed (Article 59, detailed below)",
              ],
              values_ar: [
                "ما لا تزيد قيمته على 4 ملايين جنيه؛ ويقتصر الاشتراك على الموردين الذين يقع نشاطهم في نطاق المحافظة محل التنفيذ (المادة 59، وتفصيلها أدناه)",
              ],
            },
            {
              label_en: "Direct agreement",
              label_ar: "الاتفاق المباشر",
              values_en: [
                "Only in one of the seven cases of Article 62 and within the limits of Article 63 (both detailed below)",
              ],
              values_ar: [
                "في إحدى الحالات السبع الواردة بالمادة 62 فقط وفي حدود المادة 63 (وتفصيلهما أدناه)",
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
        heading_en: "Local Tender in Detail (Article 59)",
        heading_ar: "المناقصة المحلية بالتفصيل (المادة 59)",
        body_en:
          "Article 59 serves two purposes: a lighter procedure for lower-value needs, and access for local medium, small and micro enterprises.",
        body_ar:
          "تؤدي المادة 59 غرضين: إجراء أخف للاحتياجات محدودة القيمة، وإتاحة الفرصة للمشروعات المتوسطة والصغيرة ومتناهية الصغر المحلية.",
        list_en: [
          "Ceiling: contracts whose value does not exceed EGP 4 million",
          "Who may take part: suppliers, contractors, service providers and consultants whose activity is within the governorate where the contract is performed, including medium, small and micro enterprises",
          "Restriction to medium, small and micro enterprises: for values not above EGP 2 million the local tender is restricted to these enterprises",
          "Provisional guarantee exception: where the tender is restricted to them, the tender documents may, with the competent authority's approval, include a declaration form in place of the provisional guarantee; the bidder signs it, encloses it in the technical envelope and undertakes to proceed with the procedure",
          "If the winner then fails to pay the final guarantee: an amount equal to the provisional guarantee is deducted from its dues with the entity or with any other administrative entity, and the contract is cancelled or performed by the next bidder in order of priority",
          "Re-tender when no small enterprises apply: if the tender was restricted to medium, small and micro enterprises and none of them applied, the invitation is re-issued to them and to others; the provisional-guarantee declaration exception under this article no longer applies to the re-issued tender",
        ],
        list_ar: [
          "الحد الأقصى: ما لا تجاوز قيمته 4 ملايين جنيه",
          "من يشترك: الموردون والمقاولون ومقدمو الخدمات والاستشاريون الذين يقع نشاطهم في نطاق المحافظة التي يُنفذ بها التعاقد، ومنهم المشروعات المتوسطة والصغيرة ومتناهية الصغر",
          "القصر على المشروعات المتوسطة والصغيرة ومتناهية الصغر: فيما لا تجاوز قيمته مليوني جنيه يُقصر الطرح بالمناقصة المحلية على هذه المشروعات",
          "استثناء التأمين المؤقت: إذا قُصر الطرح عليها جاز بموافقة السلطة المختصة تضمين كراسة الشروط نموذج إقرار بديلًا عن التأمين المؤقت، يوقعه صاحب العطاء ويرفقه بالمظروف الفني ويلتزم فيه بالسير في الإجراءات",
          "إذا تقاعس الفائز بعد ذلك عن سداد التأمين النهائي: يُخصم ما يعادل التأمين المؤقت من مستحقاته لدى الجهة أو لدى أي جهة إدارية أخرى، ويُلغى العقد أو يُنفذ بواسطة صاحب العطاء التالي في ترتيب الأولوية",
          "إعادة الطرح عند عدم تقدم مشروعات صغيرة: إذا قُصرت المناقصة على المشروعات المتوسطة والصغيرة ومتناهية الصغر ولم يتقدم أي منها، تُعاد الدعوة لها ولغيرها؛ ولا يستمر استثناء الإقرار البديل عن التأمين المؤقت المقرر بهذه المادة في الطرح المُعاد",
        ],
      },
      {
        heading_en: "Direct Agreement Cases (Article 62)",
        heading_ar: "حالات الاتفاق المباشر (المادة 62)",
        body_en:
          "Direct agreement is allowed only in one of these seven cases:",
        body_ar: "لا يجوز الاتفاق المباشر إلا في إحدى هذه الحالات السبع:",
        listStyle: "number",
        list_en: [
          "Emergencies arising from sudden circumstances that cannot wait for tender or practice procedures",
          "A single source with the technical ability to meet the requirement, or holding an exclusive or monopoly right over it",
          "Integration with what already exists, where there is only one source",
          "A requirement not covered by an existing contract which technical necessity requires the existing contractor to perform",
          "Standardisation with what already exists — price quotations required",
          "Promoting social or economic policies adopted by the State — price quotations required",
          "Urgent cases whose time frame does not allow tender or practice procedures — price quotations required",
        ],
        list_ar: [
          "الحالات الطارئة الناجمة عن ظروف مفاجئة لا تحتمل إجراءات المناقصة أو الممارسة",
          "وجود مصدر واحد له القدرة الفنية على تلبية متطلبات التعاقد، أو له الحق الحصري أو الاحتكاري لموضوعه",
          "تحقيق التكامل مع ما هو قائم مع عدم وجود سوى مصدر واحد",
          "موضوع غير مشمول في عقد قائم وتقتضي الضرورة الفنية تنفيذه بمعرفة المتعاقد القائم",
          "التوحيد القياسي مع ما هو قائم — مع وجوب الحصول على عروض أسعار",
          "تعزيز السياسات الاجتماعية أو الاقتصادية التي تتبناها الدولة — مع وجوب الحصول على عروض أسعار",
          "الحالات العاجلة التي لا تسمح مدتها باتخاذ إجراءات المناقصة أو الممارسة — مع وجوب الحصول على عروض أسعار",
        ],
        callout: {
          body_en:
            "In cases 5, 6 and 7 the entity must obtain price quotations before contracting. A supplier invited under one of these cases should expect to be one of several asked to quote, and should submit a complete written offer, not a verbal price.",
          body_ar:
            "في الحالات 5 و6 و7 يجب على الجهة الحصول على عروض أسعار قبل التعاقد. والمورد المدعو تحت إحدى هذه الحالات يكون واحدًا من عدة موردين طُلبت منهم عروض، فعليه تقديم عرض مكتوب مكتمل لا سعر شفهي.",
        },
      },
      {
        heading_en: "Direct Agreement Limits (Article 63)",
        heading_ar: "حدود الاتفاق المباشر (المادة 63)",
        body_en:
          "Article 63 sets how much each authority level may approve by direct agreement, according to the type of contract.",
        body_ar:
          "تحدد المادة 63 ما يجوز لكل سلطة اعتماده بالاتفاق المباشر بحسب نوع التعاقد.",
        table: {
          caption_en:
            "Direct Agreement: Maximum Value per Authority (Article 63)",
          caption_ar: "الاتفاق المباشر: الحد الأقصى لكل سلطة (المادة 63)",
          headers_en: [
            "Purchase or Lease of Movables and Services",
            "Works Contracts",
          ],
          headers_ar: [
            "شراء أو استئجار المنقولات وتلقي الخدمات",
            "مقاولات الأعمال",
          ],
          rows: [
            {
              label_en: "Head of authority or department",
              label_ar: "رئيس الهيئة أو رئيس المصلحة",
              values_en: ["EGP 1 million", "EGP 5 million"],
              values_ar: ["مليون جنيه", "5 ملايين جنيه"],
            },
            {
              label_en: "Minister or governor",
              label_ar: "الوزير أو المحافظ",
              values_en: ["EGP 10 million", "EGP 20 million"],
              values_ar: ["10 ملايين جنيه", "20 مليون جنيه"],
            },
          ],
        },
        list_en: [
          "Low-value direct agreement (Article 63 of the Law; procedure in Article 135 of the Executive Regulations): not more than EGP 20,000 on any one occasion and not more than EGP 100,000 in a year",
          "No splitting (Article 10): a requirement may not be divided in order to fall under any of these limits or to avoid a procedure",
        ],
        list_ar: [
          "الاتفاق المباشر منخفض القيمة (المادة 63 من القانون، وإجراءاته في المادة 135 من اللائحة التنفيذية): بما لا يجاوز 20 ألف جنيه في المرة الواحدة وبما لا يجاوز 100 ألف جنيه في السنة",
          "حظر التجزئة (المادة 10): لا يجوز تقسيم الاحتياج بقصد النزول به عن أي من هذه الحدود أو تفادي إجراء",
        ],
        subsections: [
          {
            heading_en: "What This Means for the Supplier",
            heading_ar: "ما يهم المورد",
            body_en:
              "These controls decide whether a direct order is sound, and a supplier is affected if it is not.",
            body_ar:
              "هذه الضوابط تحدد سلامة أمر التوريد المباشر، والمورد يتأثر إذا لم يكن سليمًا.",
            list_en: [
              "Ask which Article 62 case the request is made under and keep the entity's written request for quotation",
              "A request to split one requirement across several invoices or orders to stay under EGP 20,000 or under an authority limit conflicts with Article 10 — quote the requirement as one",
              "Your offer must state your legal nature, ownership structure and beneficial owner with supporting documents (Regulations Article 133, as amended by Decrees 614/2020 and 289/2021)",
              "The result of a direct agreement is published on the Public Procurement Portal once approved, including that data (Regulations Article 132, as amended by Decrees 614/2020 and 289/2021)",
            ],
            list_ar: [
              "اسألوا عن الحالة من حالات المادة 62 التي يستند إليها الطلب، واحتفظوا بطلب عرض السعر المكتوب الصادر من الجهة",
              "طلب تقسيم احتياج واحد على عدة فواتير أو أوامر توريد للبقاء تحت 20 ألف جنيه أو تحت حد سلطة معينة يخالف المادة 10 — قدّموا عرضكم عن الاحتياج كاملًا",
              "يجب أن يتضمن عرضكم بيان الطبيعة القانونية وهيكل الملكية والمستفيد الحقيقي مع المستندات المؤيدة (المادة 133 من اللائحة المعدلة بالقرارين 614 لسنة 2020 و289 لسنة 2021)",
              "تُنشر نتيجة الاتفاق المباشر على بوابة التعاقدات العامة فور اعتمادها متضمنة هذه البيانات (المادة 132 من اللائحة المعدلة بالقرارين 614 لسنة 2020 و289 لسنة 2021)",
            ],
          },
        ],
        callout: {
          body_en:
            "These limits only decide who may approve. They do not replace the cases of Article 62: a direct agreement within the limit is still unlawful if none of those cases applies.",
          body_ar:
            "هذه الحدود تحدد السلطة المختصة بالاعتماد فقط، ولا تغني عن تحقق إحدى حالات المادة 62: فالاتفاق المباشر داخل الحد المالي يظل مخالفًا إذا لم تتوافر إحدى تلك الحالات.",
        },
      },
      {
        heading_en:
          "Low-Value Direct Agreement Controls (Regulations Article 135, as amended by Decree No. 614/2020)",
        heading_ar:
          "ضوابط الاتفاق المباشر منخفض القيمة (المادة 135 من اللائحة التنفيذية، المعدلة بالقرار 614 لسنة 2020)",
        body_en:
          "Article 135 of the Executive Regulations sets seven controls for low-value direct agreements (up to EGP 20,000 per occasion and EGP 100,000 per year under Article 63 of the Law). A standing committee formed by the competent authority carries out the procedure.",
        body_ar:
          "تضع المادة 135 من اللائحة التنفيذية سبعة ضوابط للاتفاق المباشر منخفض القيمة (بما لا يجاوز 20 ألف جنيه في المرة الواحدة و100 ألف جنيه سنويًا وفق المادة 63 من القانون). وتتولى الإجراء لجنة دائمة تُشكَّل بقرار من السلطة المختصة.",
        listStyle: "number",
        list_en: [
          "The procedure is carried out by a standing committee formed by the competent authority for this purpose",
          "The committee verifies that the item is actually needed and that the quantity matches the actual requirement",
          "The committee obtains the market price of the item from documented, reliable sources and verifies that the price offered is consistent with the prevailing market price",
          "The item must meet the technical specifications and quality requirements of the entity",
          "The committee selects the lowest-priced offer that meets the technical and quality conditions",
          "The committee may not contract with the same supplier or contractor more than once for the same item in the same operation",
          "The committee keeps a register of all operations, showing the item, the quantity, the price, the supplier, and the date, and reports periodically to the competent authority",
        ],
        list_ar: [
          "يتولى الإجراء لجنة دائمة تُشكَّل بقرار من السلطة المختصة لهذا الغرض",
          "تتحقق اللجنة من أن الصنف مطلوب فعلًا وأن الكمية تتناسب مع الاحتياج الحقيقي",
          "تحصل اللجنة على السعر السوقي للصنف من مصادر موثقة وموثوقة وتتحقق من أن السعر المعروض يتوافق مع السعر السائد في السوق",
          "يجب أن يتوافق الصنف مع المواصفات الفنية ومتطلبات الجودة لدى الجهة",
          "تختار اللجنة أقل العروض سعرًا من بين المستوفية للشروط الفنية والجودة",
          "لا يجوز للجنة التعاقد مع المورد أو المقاول نفسه أكثر من مرة لنفس الصنف في العملية الواحدة",
          "تمسك اللجنة سجلًا بجميع العمليات يتضمن الصنف والكمية والسعر والمورد والتاريخ، وتقدم تقارير دورية إلى السلطة المختصة",
        ],
        callout: {
          body_en:
            "Warning — No splitting (Article 10 of the Law): a requirement may not be divided across several purchase orders or invoices in order to keep each one under the EGP 20,000 occasion limit or the EGP 100,000 annual limit, or to avoid any other contracting procedure. Splitting is a violation of the law regardless of the intent.",
          body_ar:
            "تحذير — حظر التجزئة (المادة 10 من القانون): لا يجوز تقسيم الاحتياج على عدة أوامر توريد أو فواتير بقصد البقاء تحت حد 20 ألف جنيه في المرة أو حد 100 ألف جنيه سنويًا، أو لتفادي أي إجراء تعاقدي آخر. والتجزئة مخالفة للقانون بصرف النظر عن القصد.",
        },
      },
      {
        heading_en:
          "Disclosure of Legal Nature, Ownership Structure and Beneficial Owner",
        heading_ar:
          "الإفصاح عن الطبيعة القانونية وهيكل الملكية والمستفيد الحقيقي",
        body_en:
          "Minister of Finance Decree No. 614 of 2020 amended the Executive Regulations (Articles 49, 79, 132, 133 and 157) to require disclosure of the bidder's legal nature and ownership structure, and added Articles 29 bis (a) and 29 bis (b) on the valuation of real estate in government contracts. Decree No. 289 of 2021 then further amended these same articles to add the requirement to disclose the beneficial owner and to define it. These are two distinct obligations.",
        body_ar:
          "عدّل قرار وزير المالية رقم 614 لسنة 2020 المواد 49 و79 و132 و133 و157 من اللائحة التنفيذية لإلزام المتقدمين بالإفصاح عن الطبيعة القانونية وهيكل الملكية، وأضاف المادتين 29 مكررًا (أ) و29 مكررًا (ب) الخاصتين بتقييم العقارات في التعاقدات الحكومية. ثم عدّل قرار وزير المالية رقم 289 لسنة 2021 هذه المواد ذاتها لإضافة الإلزام بالإفصاح عن المستفيد الحقيقي وتعريفه. وهما التزامان مستقلان.",
        subsections: [
          {
            heading_en:
              "Legal Nature and Ownership Structure (Decree No. 614/2020)",
            heading_ar:
              "الطبيعة القانونية وهيكل الملكية (القرار 614 لسنة 2020)",
            body_en:
              "Every bidder must state its legal form (sole proprietorship, partnership, limited liability company, joint stock company, etc.) and provide documents showing the ownership structure.",
            body_ar:
              "يجب على كل متقدم بيان شكله القانوني (منشأة فردية، شركة أشخاص، شركة ذات مسؤولية محدودة، شركة مساهمة، إلخ) وتقديم المستندات الدالة على هيكل الملكية.",
            list_en: [
              "Companies: a certified copy of the articles of incorporation or statutes, or the capital structure, as last amended",
              "Other bidders: ownership data and documents",
            ],
            list_ar: [
              "الشركات: صورة معتمدة من عقد التأسيس أو النظام الأساسي أو هيكل رأس المال وفق آخر تعديل",
              "غير الشركات: بيانات ومستندات الملكية",
            ],
          },
          {
            heading_en:
              "Beneficial Owner (Decree No. 289/2021, amending Decree No. 614/2020)",
            heading_ar:
              "المستفيد الحقيقي (القرار 289 لسنة 2021، المعدل للقرار 614 لسنة 2020)",
            body_en:
              "The beneficial owner is any natural person, other than the bidder, who ultimately owns or controls the bidder, or on whose behalf the transaction is carried out. Decree 289 added the definition to Article 1 of the Regulations and amended Articles 49, 79, 132, 133 and 157 to require its disclosure alongside the legal nature.",
            body_ar:
              "المستفيد الحقيقي هو أي شخص طبيعي — غير صاحب العطاء — تؤول إليه فعليًا ملكيته أو تكون له السيطرة عليه، أو الشخص الطبيعي الذي تُنفَّذ العملية لحسابه أو نيابة عنه. وأضاف القرار 289 التعريف إلى المادة 1 من اللائحة وعدّل المواد 49 و79 و132 و133 و157 لإلزام الإفصاح عنه إلى جانب الطبيعة القانونية.",
          },
        ],
        list_en: [
          "With the offer (Regulations Article 49, as amended by Decrees 614/2020 and 289/2021; and Article 157 for consultancy): a statement of the bidder's legal nature, ownership structure and beneficial owner, with supporting documents",
          "With a quotation under direct agreement (Regulations Article 133, as amended by Decrees 614/2020 and 289/2021): the same statement and documents",
          "After approval, the Contracts Department publishes the winner's legal nature, ownership structure and beneficial owner on the Public Procurement Portal (Regulations Articles 79 and 132, as amended by Decrees 614/2020 and 289/2021)",
          "Real-estate valuation: Decree 614/2020 added Regulations Articles 29 bis (a) and 29 bis (b), which set the rules for valuing real estate in government contracts",
        ],
        list_ar: [
          "مع العطاء (المادة 49 من اللائحة المعدلة بالقرارين 614 لسنة 2020 و289 لسنة 2021؛ والمادة 157 للاستشارات): بيان الطبيعة القانونية لصاحب العطاء وهيكل ملكيته والمستفيد الحقيقي منه مع المستندات المؤيدة",
          "مع عرض السعر في الاتفاق المباشر (المادة 133 من اللائحة المعدلة بالقرارين 614 لسنة 2020 و289 لسنة 2021): البيان والمستندات ذاتها",
          "بعد الاعتماد تنشر إدارة التعاقدات بيانات الطبيعة القانونية للفائز وهيكل ملكيته والمستفيد الحقيقي منه على بوابة التعاقدات العامة (المادتان 79 و132 من اللائحة المعدلتان بالقرارين 614 لسنة 2020 و289 لسنة 2021)",
          "تقييم العقارات: أضاف القرار 614 لسنة 2020 المادتين 29 مكررًا (أ) و29 مكررًا (ب) من اللائحة التنفيذية اللتين تحددان قواعد تقييم العقارات في التعاقدات الحكومية",
        ],
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
          "Payment terms and required documents (tax card, commercial register, registrations, legal nature and beneficial owner statement)",
          "Inspection and acceptance procedure, and warranty period",
        ],
        list_ar: [
          "جدول الأصناف بالكميات والوحدات",
          "المواصفات الفنية لكل صنف أو البند الخاص بها في كراسة الشروط",
          "طريق التعاقد وموعد الجلسة أو تقديم العروض",
          "مكان التوريد ومدته وقواعد التوريد على دفعات",
          "مدة سريان العطاء ومتطلبات التأمين",
          "شروط السداد والمستندات المطلوبة (البطاقة الضريبية، السجل التجاري، شهادات القيد، بيان الطبيعة القانونية والمستفيد الحقيقي)",
          "إجراءات الفحص والاستلام ومدة الضمان",
        ],
      },
      {
        heading_en: "Sources and Review",
        heading_ar: "المصادر والمراجعة",
        body_en:
          "Law No. 182 of 2018 came into force thirty days after publication and replaced the Tenders and Auctions Law No. 89 of 1998. Content last reviewed: 10 November 2026. This content is for general awareness and does not replace the tender documents or the official texts in force.",
        body_ar:
          "بدأ العمل بالقانون رقم 182 لسنة 2018 بعد ثلاثين يومًا من نشره، وحل محل قانون تنظيم المناقصات والمزايدات رقم 89 لسنة 1998. تاريخ آخر مراجعة للمحتوى: 10 نوفمبر 2026. هذا المحتوى للتوعية العامة ولا يغني عن مراجعة مستندات الطرح والنصوص الرسمية السارية.",
        list_en: [
          "Law No. 182 of 2018 regulating contracts concluded by public entities, Official Gazette issue 39 bis (D), 3 October 2018 — Articles 7, 10, 11, 14, 19 and 20; Articles 54 to 63 on the exceptional methods, including Article 59 (local tender), Article 62 (direct agreement cases) and Article 63 (direct agreement limits)",
          "Law No. 188 of 2020 amending certain provisions of Law No. 182 of 2018, issued and published 5 September 2020",
          "Executive Regulations of Law No. 182 of 2018, Minister of Finance Decree No. 692 of 2019 — Articles 1, 29 bis (a), 29 bis (b), 49, 79, 129, 132 to 135 and 157",
          "Minister of Finance Decree No. 28 of 2020, 16 January 2020 — amends Regulations Articles 31 and 82 (forms of paying the provisional and final guarantees, including payment from the supplier's dues at other administrative entities)",
          "Minister of Finance Decree No. 614 of 2020, Al-Waqa'i' Al-Misriyya issue 284 (supplement B), 16 December 2020 — amends Regulations Articles 49, 79, 132, 133 and 157 (legal nature and ownership disclosure) and adds Articles 29 bis (a) and 29 bis (b) (real-estate valuation)",
          "Minister of Finance Decree No. 289 of 2021, Al-Waqa'i' Al-Misriyya issue 125 (supplement), 6 June 2021 — further amends Regulations Articles 49, 79, 132, 133 and 157 (adds beneficial-owner disclosure and definition in Article 1)",
          "Official sources: Public Procurement Portal, etenders.gov.eg — Ministry of Finance, mof.gov.eg — General Authority for Government Printing Offices (Official Gazette), alamiria.com",
        ],
        list_ar: [
          "القانون رقم 182 لسنة 2018 بإصدار قانون تنظيم التعاقدات التي تبرمها الجهات العامة، الجريدة الرسمية العدد 39 مكرر (د) في 3 أكتوبر 2018 — المواد 7 و10 و11 و14 و19 و20؛ والمواد من 54 إلى 63 المنظمة للطرق الاستثنائية، ومنها المادة 59 (المناقصة المحلية) والمادة 62 (حالات الاتفاق المباشر) والمادة 63 (حدود الاتفاق المباشر)",
          "القانون رقم 188 لسنة 2020 بتعديل بعض أحكام القانون رقم 182 لسنة 2018، الصادر والمنشور في 5 سبتمبر 2020",
          "اللائحة التنفيذية للقانون رقم 182 لسنة 2018 الصادرة بقرار وزير المالية رقم 692 لسنة 2019 — المواد 1 و29 مكررًا (أ) و(ب) و49 و79 و129 ومن 132 إلى 135 و157",
          "قرار وزير المالية رقم 28 لسنة 2020 في 16 يناير 2020 — بتعديل المادتين 31 و82 من اللائحة التنفيذية (صور أداء التأمين المؤقت والنهائي، بما فيها السداد من مستحقات المورد لدى جهات إدارية أخرى)",
          "قرار وزير المالية رقم 614 لسنة 2020، الوقائع المصرية العدد 284 تابع (ب) في 16 ديسمبر 2020 — بتعديل المواد 49 و79 و132 و133 و157 من اللائحة (الإفصاح عن الطبيعة القانونية وهيكل الملكية) وإضافة المادتين 29 مكررًا (أ) و(ب) (تقييم العقارات)",
          "قرار وزير المالية رقم 289 لسنة 2021، الوقائع المصرية العدد 125 (تابع) في 6 يونيو 2021 — يعدّل المواد 49 و79 و132 و133 و157 من اللائحة مجددًا (يضيف الإفصاح عن المستفيد الحقيقي ويعرّفه في المادة 1)",
          "المصادر الرسمية: بوابة التعاقدات العامة etenders.gov.eg — وزارة المالية mof.gov.eg — الهيئة العامة لشئون المطابع الأميرية (الجريدة الرسمية) alamiria.com",
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
          "Documents and samples required with the offer, including the legal nature and beneficial owner statement",
          "Inspection and acceptance method",
          "Delivery location and period, warranty and payment terms",
        ],
        list_ar: [
          "جدول الأصناف متضمنًا الوظيفة والأداء القابل للقياس والكميات",
          "المواصفات القياسية المطبقة بأرقامها",
          "في أصناف التوافق: ماركة المعدة القائمة وموديلها ورقم القطعة",
          "المستندات والعيّنات المطلوبة مع العرض، ومنها بيان الطبيعة القانونية والمستفيد الحقيقي",
          "طريقة الفحص والاستلام",
          "مكان التوريد ومدته والضمان وشروط السداد",
        ],
      },
      {
        heading_en: "Sources and Review",
        heading_ar: "المصادر والمراجعة",
        body_en:
          "Content last reviewed: 10 November 2026. This content is for general awareness and does not replace the tender documents or the official texts in force.",
        body_ar:
          "تاريخ آخر مراجعة للمحتوى: 10 نوفمبر 2026. هذا المحتوى للتوعية العامة ولا يغني عن مراجعة مستندات الطرح والنصوص الرسمية السارية.",
        list_en: [
          "Law No. 182 of 2018 regulating contracts concluded by public entities, Official Gazette issue 39 bis (D), 3 October 2018 — Article 14 (technical specifications), Article 10 (no splitting) and Article 35 (preference for Egyptian products)",
          "Law No. 188 of 2020 amending certain provisions of Law No. 182 of 2018, issued and published 5 September 2020",
          "Executive Regulations of Law No. 182 of 2018, Minister of Finance Decree No. 692 of 2019",
          "Minister of Finance Decree No. 28 of 2020, 16 January 2020 — amends Regulations Articles 31 and 82 (forms of paying the provisional and final guarantees, including payment from the supplier's dues at other administrative entities)",
          "Minister of Finance Decree No. 614 of 2020, Al-Waqa'i' Al-Misriyya issue 284 (supplement B), 16 December 2020 — amends Regulations Articles 49, 79, 132, 133 and 157 (legal nature and ownership disclosure) and adds Articles 29 bis (a) and 29 bis (b) (real-estate valuation)",
          "Minister of Finance Decree No. 289 of 2021, Al-Waqa'i' Al-Misriyya issue 125 (supplement), 6 June 2021 — further amends Regulations Articles 49, 79, 132, 133 and 157 (adds beneficial-owner disclosure and definition in Article 1)",
          "Law No. 5 of 2015 on preference for Egyptian products in government contracts",
          "Official sources: Public Procurement Portal, etenders.gov.eg — Ministry of Finance, mof.gov.eg — General Authority for Government Printing Offices (Official Gazette), alamiria.com",
        ],
        list_ar: [
          "القانون رقم 182 لسنة 2018 بإصدار قانون تنظيم التعاقدات التي تبرمها الجهات العامة، الجريدة الرسمية العدد 39 مكرر (د) في 3 أكتوبر 2018 — المادة 14 (المواصفات الفنية) والمادة 10 (حظر التجزئة) والمادة 35 (تفضيل المنتج المصري)",
          "القانون رقم 188 لسنة 2020 بتعديل بعض أحكام القانون رقم 182 لسنة 2018، الصادر والمنشور في 5 سبتمبر 2020",
          "اللائحة التنفيذية للقانون رقم 182 لسنة 2018 الصادرة بقرار وزير المالية رقم 692 لسنة 2019",
          "قرار وزير المالية رقم 28 لسنة 2020 في 16 يناير 2020 — بتعديل المادتين 31 و82 من اللائحة التنفيذية (صور أداء التأمين المؤقت والنهائي، بما فيها السداد من مستحقات المورد لدى جهات إدارية أخرى)",
          "قرار وزير المالية رقم 614 لسنة 2020، الوقائع المصرية العدد 284 تابع (ب) في 16 ديسمبر 2020 — بتعديل المواد 49 و79 و132 و133 و157 من اللائحة (الإفصاح عن الطبيعة القانونية وهيكل الملكية) وإضافة المادتين 29 مكررًا (أ) و(ب) (تقييم العقارات)",
          "قرار وزير المالية رقم 289 لسنة 2021، الوقائع المصرية العدد 125 (تابع) في 6 يونيو 2021 — يعدّل المواد 49 و79 و132 و133 و157 من اللائحة مجددًا (يضيف الإفصاح عن المستفيد الحقيقي ويعرّفه في المادة 1)",
          "القانون رقم 5 لسنة 2015 في شأن تفضيل المنتجات المصرية في العقود الحكومية",
          "المصادر الرسمية: بوابة التعاقدات العامة etenders.gov.eg — وزارة المالية mof.gov.eg — الهيئة العامة لشئون المطابع الأميرية (الجريدة الرسمية) alamiria.com",
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
          caption_en: "Guarantee Rates and Deadlines",
          caption_ar: "نسب التأمينات ومهلها",
          headers_en: ["Amount", "When"],
          headers_ar: ["القيمة", "الموعد"],
          rows: [
            {
              label_en:
                "Provisional guarantee — supply, works and services (Article 16)",
              label_ar:
                "التأمين المؤقت — التوريدات والأعمال والخدمات (المادة 16)",
              values_en: [
                "A fixed amount stated in the tender documents; 1.5 % of the estimated value is the ceiling, not a fixed rate",
                "With the offer; valid for 30 days beyond the offer validity period",
              ],
              values_ar: [
                "مبلغ محدد تنص عليه كراسة الشروط؛ ونسبة 1.5٪ من القيمة التقديرية حد أقصى لا نسبة ثابتة",
                "مع العطاء، ويظل ساريًا 30 يومًا بعد انتهاء مدة سريان العطاء",
              ],
            },
            {
              label_en:
                "Provisional guarantee — purchase or lease of real estate (Article 16)",
              label_ar: "التأمين المؤقت — شراء أو استئجار العقارات (المادة 16)",
              values_en: [
                "A fixed amount stated in the tender documents; the ceiling is 0.5 % of the estimated value",
                "With the offer; valid for 30 days beyond the offer validity period",
              ],
              values_ar: [
                "مبلغ محدد تنص عليه كراسة الشروط؛ والحد الأقصى 0.5٪ من القيمة التقديرية",
                "مع العطاء، ويظل ساريًا 30 يومًا بعد انتهاء مدة سريان العطاء",
              ],
            },
            {
              label_en: "Final guarantee (Article 40)",
              label_ar: "التأمين النهائي (المادة 40)",
              values_en: [
                "5 % of the contract value",
                "Within 10 working days for local contractors and 20 working days for contractors abroad, counted from the day following notification of acceptance; the competent authority may grant an extra period of not more than 10 working days",
              ],
              values_ar: [
                "5٪ من قيمة العقد",
                "خلال 10 أيام عمل للمتعاقد المحلي و20 يوم عمل للمتعاقد في الخارج، تبدأ من اليوم التالي للإخطار بقبول العطاء؛ ويجوز بموافقة السلطة المختصة منح مهلة إضافية لا تجاوز 10 أيام عمل",
              ],
            },
          ],
        },
        callout: {
          body_en:
            "The provisional guarantee is not a flat rate. The entity fixes an amount within the ceiling for the type of contract — 1.5 % for supply, works and services, 0.5 % for real estate — and the guarantee must stay valid for 30 days after the offer validity period ends.",
          body_ar:
            "التأمين المؤقت ليس نسبة ثابتة. فالجهة تحدد مبلغًا في حدود الحد الأقصى لنوع التعاقد — 1.5٪ للتوريدات والأعمال والخدمات و0.5٪ للعقارات — ويجب أن يظل التأمين ساريًا 30 يومًا بعد انتهاء مدة صلاحية العطاء.",
        },
      },
      {
        heading_en: "Worked Example",
        heading_ar: "مثال محسوب",
        body_en:
          "A supply tender has an estimated value of EGP 2,000,000 and an offer validity of 90 days. The provisional guarantee stated in the documents cannot exceed EGP 30,000 (1.5 %), and it must remain valid for 120 days from the opening date.\n\nThe contract is awarded at EGP 1,900,000. The final guarantee is EGP 95,000 (5 %), due within 10 working days for a local contractor, counted from the day after the acceptance notice: if the notice is received on a Sunday, the first working day counted is Monday.",
        body_ar:
          "مناقصة توريد قيمتها التقديرية 2,000,000 جنيه ومدة سريان العطاء فيها 90 يومًا. التأمين المؤقت المنصوص عليه في الكراسة لا يجوز أن يتجاوز 30,000 جنيه (1.5٪)، ويجب أن يظل ساريًا 120 يومًا من تاريخ فتح المظاريف.\n\nرست العملية بقيمة 1,900,000 جنيه. فيكون التأمين النهائي 95,000 جنيه (5٪) يُسدد خلال 10 أيام عمل تبدأ من اليوم التالي للإخطار بالقبول: فإذا ورد الإخطار يوم الأحد كان الاثنين أول يوم عمل محسوب.",
      },
      {
        heading_en: "What Happens If the Final Guarantee Is Not Paid",
        heading_ar: "ماذا يحدث إذا لم يُسدَّد التأمين النهائي",
        body_en:
          "Under Article 41, if the winning bidder does not pay the final guarantee within the period, the entity may cancel the award or contract with the next bidder in order of priority. For a supplier, the ten working days start on the day after notification, so the bank facility for the guarantee should be arranged before the offer is submitted, not after the award.",
        body_ar:
          "وفق المادة 41، إذا لم يسدد صاحب العطاء الفائز التأمين النهائي خلال المهلة جاز للجهة إلغاء الترسية أو التعاقد مع صاحب العطاء التالي في الترتيب. وبالنسبة للمورد تبدأ الأيام العشرة من اليوم التالي للإخطار، فيجب ترتيب التسهيل البنكي الخاص بخطاب الضمان قبل تقديم العطاء لا بعد الترسية.",
      },
      {
        heading_en: "Medium, Small and Micro Enterprises (Article 59)",
        heading_ar: "المشروعات المتوسطة والصغيرة ومتناهية الصغر (المادة 59)",
        body_en:
          "Where a local tender is restricted to these enterprises — values not above EGP 2 million — the provisional guarantee may be replaced by a declaration.",
        body_ar:
          "إذا قُصرت المناقصة المحلية على هذه المشروعات — فيما لا يجاوز مليوني جنيه — جاز أن يحل إقرار محل التأمين المؤقت.",
        list_en: [
          "The exception needs the competent authority's approval and must appear in the tender documents as a declaration form",
          "The bidder signs the declaration, encloses it in the technical envelope and undertakes to proceed with the procedure",
          "The final guarantee is still due from the winner at 5 %",
          "If the winner fails to pay it, an amount equal to the provisional guarantee is deducted from its dues with the entity or with any other administrative entity, and the contract is cancelled or performed by the next bidder in order of priority",
          "Article 75 sets the rules on contracting with these enterprises more generally",
          "If no medium, small or micro enterprises apply when the tender was restricted to them, the invitation is re-issued to them and to others; the provisional-guarantee declaration exception no longer applies to the re-issued tender",
        ],
        list_ar: [
          "يستلزم الاستثناء موافقة السلطة المختصة وأن يرد في كراسة الشروط في صورة نموذج إقرار",
          "يوقع صاحب العطاء الإقرار ويرفقه بالمظروف الفني ويلتزم فيه بالسير في الإجراءات",
          "يظل التأمين النهائي مستحقًا على الفائز بنسبة 5٪",
          "إذا تقاعس الفائز عن سداده يُخصم ما يعادل التأمين المؤقت من مستحقاته لدى الجهة أو لدى أي جهة إدارية أخرى، ويُلغى العقد أو يُنفذ بواسطة صاحب العطاء التالي في ترتيب الأولوية",
          "وتنظم المادة 75 قواعد التعاقد مع هذه المشروعات بصفة عامة",
          "إذا قُصرت المناقصة على هذه المشروعات ولم يتقدم أي منها تُعاد الدعوة لها ولغيرها؛ ولا يستمر استثناء الإقرار البديل عن التأمين المؤقت في الطرح المُعاد",
        ],
      },
      {
        heading_en:
          "Forms of Paying the Guarantees (Regulations Articles 31 and 82, as amended by Decree No. 28/2020)",
        heading_ar:
          "صور أداء التأمين (المادتان 31 و82 من اللائحة التنفيذية، المعدلتان بالقرار 28 لسنة 2020)",
        body_en:
          "Minister of Finance Decree No. 28 of 2020 amended Regulations Articles 31 (provisional guarantee) and 82 (final guarantee) to widen the accepted forms of payment. A key addition is that both the provisional and the final guarantee may be paid from the supplier's dues held at other administrative entities, subject to the procedures and supporting documents specified in the Regulations. The tender documents state which forms the entity accepts and the exact name of the beneficiary; a guarantee in a form the documents do not list risks exclusion of the offer.",
        body_ar:
          "عدّل قرار وزير المالية رقم 28 لسنة 2020 المادتين 31 (التأمين المؤقت) و82 (التأمين النهائي) من اللائحة التنفيذية لتوسيع صور أداء التأمين. ومن أبرز ما أُضيف إمكانية سداد التأمين المؤقت والنهائي من مستحقات المورد لدى جهات إدارية أخرى، وفقًا للإجراءات والمستندات المحددة في اللائحة. وتنص كراسة الشروط على الصور التي تقبلها الجهة والاسم الدقيق للمستفيد؛ وتقديم التأمين في صورة غير واردة بالكراسة يعرّض العطاء للاستبعاد.",
        list_en: [
          "The supplier should check with the entity whether payment from dues at another entity is accepted, and prepare the necessary assignment or deduction documents in advance",
          "Even where this form is accepted, the supplier remains responsible for ensuring the guarantee is in place within the deadline",
        ],
        list_ar: [
          "يُنصح المورد بالتأكد من الجهة ما إذا كان السداد من المستحقات لدى جهة أخرى مقبولًا، وأن يُعدّ مستندات الحوالة أو الخصم اللازمة مقدمًا",
          "حتى في حالة قبول هذه الصورة يظل المورد مسؤولًا عن ضمان توفير التأمين خلال المهلة المحددة",
        ],
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
        body_en:
          "Content last reviewed: 10 November 2026. This content is for general awareness and does not replace the tender documents or the official texts in force.",
        body_ar:
          "تاريخ آخر مراجعة للمحتوى: 10 نوفمبر 2026. هذا المحتوى للتوعية العامة ولا يغني عن مراجعة مستندات الطرح والنصوص الرسمية السارية.",
        list_en: [
          "Law No. 182 of 2018 regulating contracts concluded by public entities, Official Gazette issue 39 bis (D), 3 October 2018 — Articles 16, 22, 40 and 41 (guarantees), Article 59 (local tender and the provisional guarantee exception) and Article 75 (medium, small and micro enterprises)",
          "Law No. 188 of 2020 amending certain provisions of Law No. 182 of 2018, issued and published 5 September 2020",
          "Executive Regulations of Law No. 182 of 2018, Minister of Finance Decree No. 692 of 2019",
          "Minister of Finance Decree No. 28 of 2020, 16 January 2020 — amends Regulations Articles 31 and 82 (forms of paying the provisional and final guarantees, including payment from the supplier's dues at other administrative entities)",
          "Minister of Finance Decree No. 614 of 2020, Al-Waqa'i' Al-Misriyya issue 284 (supplement B), 16 December 2020 — amends Regulations Articles 49, 79, 132, 133 and 157 (legal nature and ownership disclosure) and adds Articles 29 bis (a) and 29 bis (b) (real-estate valuation)",
          "Minister of Finance Decree No. 289 of 2021, Al-Waqa'i' Al-Misriyya issue 125 (supplement), 6 June 2021 — further amends Regulations Articles 49, 79, 132, 133 and 157 (adds beneficial-owner disclosure and definition in Article 1)",
          "Ministry of Finance, Guide for Medium, Small and Micro Enterprises to public contracting",
          "Official sources: Public Procurement Portal, etenders.gov.eg — Ministry of Finance, mof.gov.eg — General Authority for Government Printing Offices (Official Gazette), alamiria.com",
        ],
        list_ar: [
          "القانون رقم 182 لسنة 2018 بإصدار قانون تنظيم التعاقدات التي تبرمها الجهات العامة، الجريدة الرسمية العدد 39 مكرر (د) في 3 أكتوبر 2018 — المواد 16 و22 و40 و41 (التأمينات)، والمادة 59 (المناقصة المحلية واستثناء التأمين المؤقت) والمادة 75 (المشروعات المتوسطة والصغيرة ومتناهية الصغر)",
          "القانون رقم 188 لسنة 2020 بتعديل بعض أحكام القانون رقم 182 لسنة 2018، الصادر والمنشور في 5 سبتمبر 2020",
          "اللائحة التنفيذية للقانون رقم 182 لسنة 2018 الصادرة بقرار وزير المالية رقم 692 لسنة 2019",
          "قرار وزير المالية رقم 28 لسنة 2020 في 16 يناير 2020 — بتعديل المادتين 31 و82 من اللائحة التنفيذية (صور أداء التأمين المؤقت والنهائي، بما فيها السداد من مستحقات المورد لدى جهات إدارية أخرى)",
          "قرار وزير المالية رقم 614 لسنة 2020، الوقائع المصرية العدد 284 تابع (ب) في 16 ديسمبر 2020 — بتعديل المواد 49 و79 و132 و133 و157 من اللائحة (الإفصاح عن الطبيعة القانونية وهيكل الملكية) وإضافة المادتين 29 مكررًا (أ) و(ب) (تقييم العقارات)",
          "قرار وزير المالية رقم 289 لسنة 2021، الوقائع المصرية العدد 125 (تابع) في 6 يونيو 2021 — يعدّل المواد 49 و79 و132 و133 و157 من اللائحة مجددًا (يضيف الإفصاح عن المستفيد الحقيقي ويعرّفه في المادة 1)",
          "وزارة المالية، دليل أصحاب المشروعات المتوسطة والصغيرة ومتناهية الصغر للتعاقدات العامة",
          "المصادر الرسمية: بوابة التعاقدات العامة etenders.gov.eg — وزارة المالية mof.gov.eg — الهيئة العامة لشئون المطابع الأميرية (الجريدة الرسمية) alamiria.com",
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
