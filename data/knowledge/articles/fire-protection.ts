import type { KnowledgeItem } from "@/data/knowledge/types";

/**
 * Fire Protection's real Knowledge Center articles — migrated verbatim from
 * `data/sector-content/fire-protection.ts`'s original `articles` array (see
 * `data/sector-content/index.ts` for how `getSectorContent()` re-derives
 * that field from this registry, so `/sectors/fire-protection/articles/*`
 * keeps working unchanged). `id` is set equal to `slug` at migration time,
 * per this project's convention (see every other entity's `id`/`slug`
 * pair) — `id` is what stays fixed if `slug` is ever renamed later.
 *
 * `sections` breaks each article's original `content_en/ar` into H2 blocks
 * — every sentence below is the same approved copy as `content_en/ar`
 * (kept as the legacy flat-paragraph fallback), only reorganized into
 * headings/lists/callouts/tables. No section invents a fact, figure, or
 * claim beyond what the original paragraph already said.
 */
export const fireProtectionArticles: KnowledgeItem[] = [
  {
    id: "how-to-choose-fire-pumps",
    slug: "how-to-choose-fire-pumps",
    type: "article",
    title_en: "How to Choose Fire Pumps",
    title_ar: "كيفية اختيار مضخات الحريق",
    summary_en:
      "The key factors that determine which fire pump configuration fits your project — driver type, flow, pressure, and layout.",
    summary_ar:
      "العوامل الأساسية التي تحدد تكوين مضخة الحريق المناسب لمشروعكم — نوع التشغيل والتدفق والضغط والمخطط.",
    content_en:
      "Selecting a fire pump starts with your system's required flow rate and pressure, calculated from your building's hydraulic design and hazard classification. From there, the driver type — electric or diesel — is usually decided by site power reliability: diesel-driven sets are common where continuous grid power can't be guaranteed during a fire event.\n\nConfiguration also matters. Horizontal split-case pumps suit most mid-to-large flow applications with adequate room; end-suction pumps fit tighter plant rooms; vertical turbine pumps apply where the water source sits below the pump (a tank or well). Your specification should also confirm the controller type your driver requires and any local code requirements for redundancy, such as a backup pump or dual power feeds.\n\nOnce your requirements are defined, share them with our procurement team — including flow, pressure, driver preference, and any brand or code requirements — and we'll match you to genuine, quality-assured products from our supplier network.",
    content_ar:
      "يبدأ اختيار مضخة الحريق بتحديد معدل التدفق والضغط المطلوبين لنظامكم، ويتم حسابهما بناءً على التصميم الهيدروليكي لمبناكم وتصنيف الخطورة. بعد ذلك، يتم تحديد نوع التشغيل — كهربائي أو ديزل — غالبًا وفق موثوقية التيار الكهربائي بالموقع: تُستخدم المجموعات التي تعمل بالديزل عادةً حيث لا يمكن ضمان استمرار التيار الكهربائي أثناء حدوث حريق.\n\nيُعد التكوين مهمًا أيضًا. تناسب المضخات الأفقية المشقوقة معظم التطبيقات متوسطة إلى كبيرة التدفق مع توفر مساحة كافية؛ بينما تناسب مضخات الشفط الطرفي غرف المعدات الأصغر مساحة؛ وتُستخدم المضخات التوربينية الرأسية عندما يكون مصدر المياه أسفل مستوى المضخة (خزان أو بئر). يجب أن تحدد مواصفاتكم أيضًا نوع لوحة التحكم المطلوبة لنوع التشغيل وأي متطلبات كود محلية للتكرار، مثل مضخة احتياطية أو مصدرين للتغذية الكهربائية.\n\nبمجرد تحديد متطلباتكم، شاركوها مع فريق التوريد لدينا — بما في ذلك التدفق والضغط ونوع التشغيل المفضل وأي متطلبات علامة تجارية أو كود — وسنقوم بمطابقتكم مع منتجات أصلية ومضمونة الجودة من شبكة موردينا.",
    sections: [
      {
        heading_en: "Determining Flow Rate and Pressure",
        heading_ar: "تحديد معدل التدفق والضغط",
        body_en:
          "Selecting a fire pump starts with your system's required flow rate and pressure, calculated from your building's hydraulic design and hazard classification.",
        body_ar:
          "يبدأ اختيار مضخة الحريق بتحديد معدل التدفق والضغط المطلوبين لنظامكم، ويتم حسابهما بناءً على التصميم الهيدروليكي لمبناكم وتصنيف الخطورة.",
      },
      {
        heading_en: "Choosing a Driver Type: Electric or Diesel",
        heading_ar: "اختيار نوع التشغيل: كهربائي أو ديزل",
        body_en:
          "From there, the driver type — electric or diesel — is usually decided by site power reliability.",
        body_ar:
          "بعد ذلك، يتم تحديد نوع التشغيل — كهربائي أو ديزل — غالبًا وفق موثوقية التيار الكهربائي بالموقع.",
        callout: {
          body_en:
            "Diesel-driven sets are common where continuous grid power can't be guaranteed during a fire event.",
          body_ar:
            "تُستخدم المجموعات التي تعمل بالديزل عادةً حيث لا يمكن ضمان استمرار التيار الكهربائي أثناء حدوث حريق.",
        },
      },
      {
        heading_en: "Pump Configuration Options",
        heading_ar: "خيارات تكوين المضخة",
        body_en: "Configuration also matters.",
        body_ar: "يُعد التكوين مهمًا أيضًا.",
        table: {
          caption_en: "Pump Configuration Comparison",
          caption_ar: "مقارنة تكوينات المضخات",
          headers_en: ["Best Suited For"],
          headers_ar: ["الأنسب لـ"],
          rows: [
            {
              label_en: "Horizontal Split-Case",
              label_ar: "المضخات الأفقية المشقوقة",
              values_en: [
                "Most mid-to-large flow applications with adequate room",
              ],
              values_ar: [
                "معظم التطبيقات متوسطة إلى كبيرة التدفق مع توفر مساحة كافية",
              ],
            },
            {
              label_en: "End-Suction",
              label_ar: "مضخات الشفط الطرفي",
              values_en: ["Tighter plant rooms"],
              values_ar: ["غرف المعدات الأصغر مساحة"],
            },
            {
              label_en: "Vertical Turbine",
              label_ar: "المضخات التوربينية الرأسية",
              values_en: ["Water source below the pump (a tank or well)"],
              values_ar: [
                "عندما يكون مصدر المياه أسفل مستوى المضخة (خزان أو بئر)",
              ],
            },
          ],
        },
      },
      {
        heading_en: "Controller and Redundancy Requirements",
        heading_ar: "متطلبات لوحة التحكم والتكرار",
        body_en:
          "Your specification should also confirm the controller type your driver requires and any local code requirements for redundancy, such as a backup pump or dual power feeds.",
        body_ar:
          "يجب أن تحدد مواصفاتكم أيضًا نوع لوحة التحكم المطلوبة لنوع التشغيل وأي متطلبات كود محلية للتكرار، مثل مضخة احتياطية أو مصدرين للتغذية الكهربائية.",
      },
      {
        heading_en: "Getting a Tailored Quotation",
        heading_ar: "الحصول على عرض سعر مخصص",
        body_en:
          "Once your requirements are defined, share them with our procurement team, and we'll match you to genuine, quality-assured products from our supplier network:",
        body_ar:
          "بمجرد تحديد متطلباتكم، شاركوها مع فريق التوريد لدينا، وسنقوم بمطابقتكم مع منتجات أصلية ومضمونة الجودة من شبكة موردينا:",
        list_en: [
          "Required flow and pressure",
          "Driver preference (electric or diesel)",
          "Any brand or code requirements",
        ],
        list_ar: [
          "التدفق والضغط المطلوبان",
          "نوع التشغيل المفضل (كهربائي أو ديزل)",
          "أي متطلبات علامة تجارية أو كود",
        ],
      },
    ],
    coverImage: "/images/hero/slide-fire-fighting.webp",
    publishedAt: "2026-05-12",
    updatedAt: "2026-08-07",
    author: "GOLTENS Procurement Team",
    keywords: [
      "fire pump selection",
      "fire pump types",
      "fire pump procurement",
    ],
    relatedSectorIds: ["fire-protection"],
  },
  {
    id: "nfpa-standards-explained",
    slug: "nfpa-standards-explained",
    type: "article",
    title_en: "NFPA Standards Explained",
    title_ar: "شرح معايير NFPA",
    summary_en:
      "A general overview of what NFPA standards are, why they matter for fire protection procurement, and how to confirm which apply to your project.",
    summary_ar:
      "نظرة عامة على ماهية معايير NFPA وأهميتها في توريد معدات مكافحة الحريق وكيفية التأكد من المعايير المطبقة على مشروعكم.",
    content_en:
      "NFPA (National Fire Protection Association) standards are a widely referenced set of codes covering the design, installation, and maintenance of fire protection systems — sprinklers, alarms, extinguishers, suppression systems, and more. Many projects, especially those following international specification practices, reference specific NFPA standards as part of their design basis.\n\nBecause different standards apply to different system types (and different editions may be referenced by different authorities), the specific standard your project must meet is normally set by your project's fire engineer, consultant, or the approving authority — not chosen independently by a supplier. Our role in procurement is to match the products we source against whatever standard and edition your project specifies, and to flag clearly if a requirement needs confirmation before we quote.\n\nIf your project documentation already references specific NFPA standards, share them with your quotation request and we'll confirm product compatibility as part of our response.",
    content_ar:
      "معايير NFPA (الرابطة الوطنية الأمريكية للحماية من الحريق) هي مجموعة أكواد يُستشهد بها على نطاق واسع وتغطي تصميم وتركيب وصيانة أنظمة مكافحة الحريق — الرشاشات، أنظمة الإنذار، الطفايات، أنظمة الإخماد، وغيرها. تشير العديد من المشاريع، خاصة تلك التي تتبع ممارسات المواصفات الدولية، إلى معايير NFPA محددة كجزء من أساس التصميم.\n\nونظرًا لأن معايير مختلفة تنطبق على أنواع أنظمة مختلفة (وقد تشير جهات مختلفة إلى إصدارات مختلفة)، فإن المعيار المحدد الذي يجب أن يستوفيه مشروعكم يُحدَّد عادةً من قِبل مهندس الحريق أو الاستشاري أو الجهة المعتمِدة للمشروع — وليس من قِبل المورّد. دورنا في عملية التوريد هو مطابقة المنتجات التي نوفرها مع المعيار والإصدار الذي يحدده مشروعكم، وتوضيح أي نقطة تحتاج إلى تأكيد قبل تقديم عرض السعر.\n\nإذا كانت وثائق مشروعكم تشير بالفعل إلى معايير NFPA محددة، شاركوها معنا عند طلب عرض السعر وسنقوم بتأكيد توافق المنتجات كجزء من ردنا.",
    sections: [
      {
        heading_en: "What NFPA Standards Cover",
        heading_ar: "ما الذي تغطيه معايير NFPA",
        body_en:
          "NFPA (National Fire Protection Association) standards are a widely referenced set of codes covering the design, installation, and maintenance of fire protection systems — sprinklers, alarms, extinguishers, suppression systems, and more.\n\nMany projects, especially those following international specification practices, reference specific NFPA standards as part of their design basis.",
        body_ar:
          "معايير NFPA (الرابطة الوطنية الأمريكية للحماية من الحريق) هي مجموعة أكواد يُستشهد بها على نطاق واسع وتغطي تصميم وتركيب وصيانة أنظمة مكافحة الحريق — الرشاشات، أنظمة الإنذار، الطفايات، أنظمة الإخماد، وغيرها.\n\nتشير العديد من المشاريع، خاصة تلك التي تتبع ممارسات المواصفات الدولية، إلى معايير NFPA محددة كجزء من أساس التصميم.",
      },
      {
        heading_en: "Who Determines Which Standard Applies",
        heading_ar: "من يحدد المعيار المطبق",
        body_en:
          "Because different standards apply to different system types (and different editions may be referenced by different authorities), the specific standard your project must meet is normally set by your project's fire engineer, consultant, or the approving authority — not chosen independently by a supplier.",
        body_ar:
          "ونظرًا لأن معايير مختلفة تنطبق على أنواع أنظمة مختلفة (وقد تشير جهات مختلفة إلى إصدارات مختلفة)، فإن المعيار المحدد الذي يجب أن يستوفيه مشروعكم يُحدَّد عادةً من قِبل مهندس الحريق أو الاستشاري أو الجهة المعتمِدة للمشروع — وليس من قِبل المورّد.",
        callout: {
          body_en:
            "Our role in procurement is to match the products we source against whatever standard and edition your project specifies, and to flag clearly if a requirement needs confirmation before we quote.",
          body_ar:
            "دورنا في عملية التوريد هو مطابقة المنتجات التي نوفرها مع المعيار والإصدار الذي يحدده مشروعكم، وتوضيح أي نقطة تحتاج إلى تأكيد قبل تقديم عرض السعر.",
        },
      },
      {
        heading_en: "Confirming Compatibility Before You Quote",
        heading_ar: "تأكيد التوافق قبل عرض السعر",
        body_en:
          "If your project documentation already references specific NFPA standards, share them with your quotation request and we'll confirm product compatibility as part of our response.",
        body_ar:
          "إذا كانت وثائق مشروعكم تشير بالفعل إلى معايير NFPA محددة، شاركوها معنا عند طلب عرض السعر وسنقوم بتأكيد توافق المنتجات كجزء من ردنا.",
      },
    ],
    coverImage: null,
    publishedAt: "2026-05-26",
    updatedAt: "2026-08-07",
    author: "GOLTENS Procurement Team",
    keywords: [
      "NFPA standards",
      "fire protection codes",
      "fire protection compliance",
    ],
    relatedSectorIds: ["fire-protection"],
  },
  {
    id: "fm200-vs-novec-1230",
    slug: "fm200-vs-novec-1230",
    type: "article",
    title_en: "Difference Between FM200 and NOVEC 1230",
    title_ar: "الفرق بين FM200 وNOVEC 1230",
    summary_en:
      "How FM200 and NOVEC 1230 clean agent suppression systems differ, and the general factors that guide the choice between them.",
    summary_ar:
      "الفرق بين أنظمة الإخماد النظيفة FM200 وNOVEC 1230، والعوامل العامة التي توجّه الاختيار بينهما.",
    content_en:
      "FM200 and NOVEC 1230 are both clean agent gas suppression systems used to protect spaces where water-based suppression isn't suitable — data centers, server rooms, electrical switchgear rooms, and archives. Both work by extinguishing fire without leaving residue, making them suitable for equipment-sensitive environments.\n\nThe main practical differences buyers usually ask about are environmental profile and storage. NOVEC 1230 has a very low global warming potential and a short atmospheric lifetime compared to FM200, which some projects specify for that reason. Storage footprint and agent quantity required for a given room volume also differ between the two, which affects cylinder sizing and room layout.\n\nThe right choice for your project depends on your room's protected volume, any environmental specification your project follows, and local availability. Share your room dimensions and any agent preference with your quotation request, and our team will confirm the right system for your space.",
    content_ar:
      "كل من FM200 وNOVEC 1230 هما نظاما إخماد بالغاز النظيف يُستخدمان لحماية المساحات التي لا يناسبها الإخماد بالمياه — مراكز البيانات وغرف السيرفرات وغرف اللوحات الكهربائية والأرشيف. يعمل كلاهما على إخماد الحريق دون ترك أي بقايا، مما يجعلهما مناسبين للبيئات الحساسة للمعدات.\n\nأهم الفروق العملية التي يسأل عنها المشترون عادةً هي البصمة البيئية والتخزين. يتميز NOVEC 1230 بإمكانية احترار عالمي منخفضة جدًا وعمر بقاء قصير في الغلاف الجوي مقارنة بـ FM200، وهو ما تحدده بعض المشاريع لهذا السبب. كما تختلف مساحة التخزين وكمية الغاز المطلوبة لحجم غرفة معينة بين النظامين، مما يؤثر على حجم الأسطوانات ومخطط الغرفة.\n\nيعتمد الاختيار الأنسب لمشروعكم على الحجم المحمي للغرفة وأي مواصفات بيئية يتبعها مشروعكم ومدى التوافر المحلي. شاركوا أبعاد الغرفة وأي تفضيل للغاز عند طلب عرض السعر، وسيقوم فريقنا بتأكيد النظام المناسب لمساحتكم.",
    sections: [
      {
        heading_en: "What FM200 and NOVEC 1230 Have in Common",
        heading_ar: "ما يشترك فيه FM200 وNOVEC 1230",
        body_en:
          "FM200 and NOVEC 1230 are both clean agent gas suppression systems used to protect spaces where water-based suppression isn't suitable — data centers, server rooms, electrical switchgear rooms, and archives.\n\nBoth work by extinguishing fire without leaving residue, making them suitable for equipment-sensitive environments.",
        body_ar:
          "كل من FM200 وNOVEC 1230 هما نظاما إخماد بالغاز النظيف يُستخدمان لحماية المساحات التي لا يناسبها الإخماد بالمياه — مراكز البيانات وغرف السيرفرات وغرف اللوحات الكهربائية والأرشيف.\n\nيعمل كلاهما على إخماد الحريق دون ترك أي بقايا، مما يجعلهما مناسبين للبيئات الحساسة للمعدات.",
      },
      {
        heading_en: "Key Differences Buyers Consider",
        heading_ar: "الفروق الرئيسية التي يهتم بها المشترون",
        body_en:
          "The main practical differences buyers usually ask about are environmental profile and storage.",
        body_ar:
          "أهم الفروق العملية التي يسأل عنها المشترون عادةً هي البصمة البيئية والتخزين.",
        table: {
          headers_en: ["FM200", "NOVEC 1230"],
          headers_ar: ["FM200", "NOVEC 1230"],
          rows: [
            {
              label_en: "Global Warming Potential",
              label_ar: "إمكانية الاحترار العالمي",
              values_en: ["Higher", "Very low"],
              values_ar: ["أعلى", "منخفضة جدًا"],
            },
            {
              label_en: "Atmospheric Lifetime",
              label_ar: "عمر البقاء في الغلاف الجوي",
              values_en: ["Longer", "Short"],
              values_ar: ["أطول", "قصير"],
            },
          ],
        },
        callout: {
          body_en:
            "Storage footprint and agent quantity required for a given room volume also differ between the two, which affects cylinder sizing and room layout.",
          body_ar:
            "كما تختلف مساحة التخزين وكمية الغاز المطلوبة لحجم غرفة معينة بين النظامين، مما يؤثر على حجم الأسطوانات ومخطط الغرفة.",
        },
      },
      {
        heading_en: "Choosing the Right System for Your Space",
        heading_ar: "اختيار النظام المناسب لمساحتكم",
        body_en:
          "The right choice for your project depends on your room's protected volume, any environmental specification your project follows, and local availability.\n\nShare your room dimensions and any agent preference with your quotation request, and our team will confirm the right system for your space.",
        body_ar:
          "يعتمد الاختيار الأنسب لمشروعكم على الحجم المحمي للغرفة وأي مواصفات بيئية يتبعها مشروعكم ومدى التوافر المحلي.\n\nشاركوا أبعاد الغرفة وأي تفضيل للغاز عند طلب عرض السعر، وسيقوم فريقنا بتأكيد النظام المناسب لمساحتكم.",
      },
    ],
    coverImage: null,
    publishedAt: "2026-06-09",
    updatedAt: "2026-08-07",
    author: "GOLTENS Procurement Team",
    keywords: ["FM200", "NOVEC 1230", "clean agent suppression"],
    relatedSectorIds: ["fire-protection"],
  },
  {
    id: "fire-pump-selection-guide",
    slug: "fire-pump-selection-guide",
    type: "article",
    title_en: "Fire Pump Selection Guide",
    title_ar: "دليل اختيار مضخات الحريق",
    summary_en:
      "A practical checklist of what to confirm before requesting a fire pump quotation, from flow and pressure to controller and code requirements.",
    summary_ar:
      "قائمة عملية بما يجب تأكيده قبل طلب عرض سعر لمضخة حريق، من التدفق والضغط إلى لوحة التحكم ومتطلبات الكود.",
    content_en:
      "Before requesting a fire pump quotation, having the following confirmed speeds up an accurate response: required flow rate and pressure (from your hydraulic calculations), driver preference (electric or diesel) and available power supply, preferred pump configuration if your engineer has specified one, controller type and any automatic transfer/redundancy requirements, the code or standard your project follows, and any preferred or approved brands.\n\nIt also helps to share your project type and location, since site conditions (available power reliability, ambient temperature, altitude) can affect the right configuration. If you're unsure about any of these, our procurement team can work through your requirements with you before finalizing a quotation — you don't need every answer before reaching out.",
    content_ar:
      "قبل طلب عرض سعر لمضخة حريق، يساعد تأكيد ما يلي في تسريع الحصول على رد دقيق: معدل التدفق والضغط المطلوب (من الحسابات الهيدروليكية)، تفضيل نوع التشغيل (كهربائي أو ديزل) ومدى توفر التغذية الكهربائية، تكوين المضخة المفضل إن كان مهندسكم قد حدده، نوع لوحة التحكم وأي متطلبات نقل تلقائي أو تكرار، الكود أو المعيار الذي يتبعه مشروعكم، وأي علامات تجارية مفضلة أو معتمدة.\n\nكما يساعد مشاركة نوع مشروعكم وموقعه، حيث تؤثر ظروف الموقع (موثوقية التيار الكهربائي، درجة الحرارة المحيطة، الارتفاع) على التكوين المناسب. إذا لم تكونوا متأكدين من أي من هذه النقاط، يمكن لفريق التوريد لدينا مراجعة متطلباتكم معكم قبل إنهاء عرض السعر — لا داعي لتوفر كل إجابة قبل التواصل معنا.",
    sections: [
      {
        heading_en: "Technical Requirements to Confirm",
        heading_ar: "المتطلبات الفنية الواجب تأكيدها",
        body_en:
          "Before requesting a fire pump quotation, having the following confirmed speeds up an accurate response:",
        body_ar:
          "قبل طلب عرض سعر لمضخة حريق، يساعد تأكيد ما يلي في تسريع الحصول على رد دقيق:",
        list_en: [
          "Required flow rate and pressure (from your hydraulic calculations)",
          "Driver preference (electric or diesel) and available power supply",
          "Preferred pump configuration, if your engineer has specified one",
          "Controller type and any automatic transfer/redundancy requirements",
          "The code or standard your project follows",
          "Any preferred or approved brands",
        ],
        list_ar: [
          "معدل التدفق والضغط المطلوب (من الحسابات الهيدروليكية)",
          "تفضيل نوع التشغيل (كهربائي أو ديزل) ومدى توفر التغذية الكهربائية",
          "تكوين المضخة المفضل، إن كان مهندسكم قد حدده",
          "نوع لوحة التحكم وأي متطلبات نقل تلقائي أو تكرار",
          "الكود أو المعيار الذي يتبعه مشروعكم",
          "أي علامات تجارية مفضلة أو معتمدة",
        ],
      },
      {
        heading_en: "Site and Project Context",
        heading_ar: "سياق الموقع والمشروع",
        body_en:
          "It also helps to share your project type and location, since site conditions (available power reliability, ambient temperature, altitude) can affect the right configuration.",
        body_ar:
          "كما يساعد مشاركة نوع مشروعكم وموقعه، حيث تؤثر ظروف الموقع (موثوقية التيار الكهربائي، درجة الحرارة المحيطة، الارتفاع) على التكوين المناسب.",
        callout: {
          body_en:
            "If you're unsure about any of these, our procurement team can work through your requirements with you before finalizing a quotation — you don't need every answer before reaching out.",
          body_ar:
            "إذا لم تكونوا متأكدين من أي من هذه النقاط، يمكن لفريق التوريد لدينا مراجعة متطلباتكم معكم قبل إنهاء عرض السعر — لا داعي لتوفر كل إجابة قبل التواصل معنا.",
        },
      },
    ],
    coverImage: "/images/hero/دليل اختيار مضخات الحريق.jpg",
    publishedAt: "2026-06-23",
    updatedAt: "2026-08-07",
    author: "GOLTENS Procurement Team",
    keywords: [
      "fire pump guide",
      "fire pump quotation",
      "fire pump requirements",
    ],
    relatedSectorIds: ["fire-protection"],
  },
  {
    id: "common-fire-protection-mistakes",
    slug: "common-fire-protection-mistakes",
    type: "article",
    title_en: "Common Fire Protection Mistakes",
    title_ar: "أخطاء شائعة في مكافحة الحريق",
    summary_en:
      "A few common, avoidable mistakes in fire protection procurement — and how sharing complete requirements upfront prevents them.",
    summary_ar:
      "بعض الأخطاء الشائعة التي يمكن تجنبها في توريد معدات مكافحة الحريق — وكيف تساعد مشاركة المتطلبات الكاملة مسبقًا في تجنبها.",
    content_en:
      "A few procurement mistakes come up repeatedly across fire protection projects. Requesting a quotation without confirming the applicable code or standard often leads to a mismatch discovered late, when it's more costly to correct. Specifying a brand without confirming lead time and availability can delay a project if that specific model isn't readily available — sharing acceptable alternatives up front avoids this.\n\nAnother common gap is treating fire pumps, controllers, and detection/alarm systems as separate purchases without confirming they're compatible with each other (driver type matching controller type, panel compatibility with your chosen detector types). Finally, leaving compliance documentation (certificates, test reports) as an afterthought can slow down project handover — it's worth confirming what documentation your project requires before products are ordered, not after.\n\nSharing your full requirements — code, brand preferences, system interdependencies, and documentation needs — as part of your initial quotation request lets our team flag any of these early.",
    content_ar:
      "تتكرر بعض أخطاء التوريد عبر مشاريع مكافحة الحريق. غالبًا ما يؤدي طلب عرض سعر دون تأكيد الكود أو المعيار المطبق إلى اكتشاف عدم تطابق في مرحلة متأخرة، حيث يكون تصحيحه أكثر تكلفة. كما أن تحديد علامة تجارية دون تأكيد مدة التوريد والتوافر قد يؤخر المشروع إذا لم يكن الطراز المحدد متوفرًا بسهولة — وتساعد مشاركة بدائل مقبولة مسبقًا في تجنب ذلك.\n\nهناك فجوة شائعة أخرى وهي التعامل مع مضخات الحريق ولوحات التحكم وأنظمة الكشف/الإنذار كمشتريات منفصلة دون التأكد من توافقها مع بعضها البعض (تطابق نوع التشغيل مع نوع لوحة التحكم، وتوافق اللوحة مع أنواع الكاشفات المختارة). وأخيرًا، فإن ترك وثائق المطابقة (الشهادات وتقارير الاختبار) كأمر ثانوي قد يبطئ تسليم المشروع — من الأفضل تأكيد الوثائق المطلوبة لمشروعكم قبل طلب المنتجات وليس بعده.\n\nمشاركة متطلباتكم الكاملة — الكود، تفضيلات العلامة التجارية، ترابط الأنظمة، ومتطلبات الوثائق — كجزء من طلب عرض السعر الأولي يتيح لفريقنا رصد أي من هذه النقاط مبكرًا.",
    sections: [
      {
        heading_en: "Skipping Code Confirmation",
        heading_ar: "تجاهل تأكيد الكود المطبق",
        body_en:
          "A few procurement mistakes come up repeatedly across fire protection projects. Requesting a quotation without confirming the applicable code or standard often leads to a mismatch discovered late, when it's more costly to correct.",
        body_ar:
          "تتكرر بعض أخطاء التوريد عبر مشاريع مكافحة الحريق. غالبًا ما يؤدي طلب عرض سعر دون تأكيد الكود أو المعيار المطبق إلى اكتشاف عدم تطابق في مرحلة متأخرة، حيث يكون تصحيحه أكثر تكلفة.",
      },
      {
        heading_en: "Specifying a Brand Without Confirming Availability",
        heading_ar: "تحديد علامة تجارية دون تأكيد التوافر",
        body_en:
          "Specifying a brand without confirming lead time and availability can delay a project if that specific model isn't readily available — sharing acceptable alternatives up front avoids this.",
        body_ar:
          "كما أن تحديد علامة تجارية دون تأكيد مدة التوريد والتوافر قد يؤخر المشروع إذا لم يكن الطراز المحدد متوفرًا بسهولة — وتساعد مشاركة بدائل مقبولة مسبقًا في تجنب ذلك.",
      },
      {
        heading_en: "Treating Systems as Unrelated Purchases",
        heading_ar: "التعامل مع الأنظمة كمشتريات منفصلة",
        body_en:
          "Another common gap is treating fire pumps, controllers, and detection/alarm systems as separate purchases without confirming they're compatible with each other:",
        body_ar:
          "هناك فجوة شائعة أخرى وهي التعامل مع مضخات الحريق ولوحات التحكم وأنظمة الكشف/الإنذار كمشتريات منفصلة دون التأكد من توافقها مع بعضها البعض:",
        list_en: [
          "Driver type matching controller type",
          "Panel compatibility with your chosen detector types",
        ],
        list_ar: [
          "تطابق نوع التشغيل مع نوع لوحة التحكم",
          "توافق اللوحة مع أنواع الكاشفات المختارة",
        ],
      },
      {
        heading_en: "Leaving Compliance Documentation as an Afterthought",
        heading_ar: "ترك وثائق المطابقة كأمر ثانوي",
        body_en:
          "Finally, leaving compliance documentation (certificates, test reports) as an afterthought can slow down project handover.",
        body_ar:
          "وأخيرًا، فإن ترك وثائق المطابقة (الشهادات وتقارير الاختبار) كأمر ثانوي قد يبطئ تسليم المشروع.",
        callout: {
          body_en:
            "It's worth confirming what documentation your project requires before products are ordered, not after.",
          body_ar:
            "من الأفضل تأكيد الوثائق المطلوبة لمشروعكم قبل طلب المنتجات وليس بعده.",
        },
      },
      {
        heading_en: "Getting It Right From the Start",
        heading_ar: "البدء بالشكل الصحيح منذ البداية",
        body_en:
          "Sharing your full requirements — code, brand preferences, system interdependencies, and documentation needs — as part of your initial quotation request lets our team flag any of these early.",
        body_ar:
          "مشاركة متطلباتكم الكاملة — الكود، تفضيلات العلامة التجارية، ترابط الأنظمة، ومتطلبات الوثائق — كجزء من طلب عرض السعر الأولي يتيح لفريقنا رصد أي من هذه النقاط مبكرًا.",
      },
    ],
    coverImage: "/images/hero/hero34.webp",
    publishedAt: "2026-07-07",
    updatedAt: "2026-08-07",
    author: "GOLTENS Procurement Team",
    keywords: [
      "fire protection procurement",
      "fire protection mistakes",
      "fire protection buying guide",
    ],
    relatedSectorIds: ["fire-protection"],
  },
];
