import type {
  EquipmentGuideReview,
  SectorEquipmentGuide,
} from "@/data/sector-content/types";

/**
 * Commercial Vehicles & Fleet Solutions procurement guide — editorial,
 * manufacturer-neutral content describing vehicle TYPES. It is deliberately
 * separate from the Product Engine (`data/products/`): it never names
 * brands or models, never states numeric specifications, standards,
 * certifications or approvals, and is never rendered as a GOLTENS product
 * listing. All 16 vehicle types map to existing (non-public) product
 * records; none is added beyond them.
 *
 * Business wording is limited to confirmed capabilities: GOLTENS supplies
 * commercial vehicles according to project, fleet and operating
 * requirements, and can coordinate qualified body builders / specialist
 * contractors when a specialised body or fit-out is required. No claim is
 * made about used vehicles, spare parts, workshop or after-sales support,
 * customs clearance, licensing, inspection or approvals.
 *
 * Every entry awaits technical review (`review.technical`) and
 * Egyptian-market Arabic terminology review (`review.arabic`).
 * `scripts/verify-equipment-guides.mjs` validates this file.
 *
 * Arabic primary terms: مركبة تجارية خفيفة · شاحنة متوسطة وثقيلة · بيك أب ·
 * فان نقل بضائع · شاحنة خدمات ميدانية · مقطورة مسطحة · مقطورة صهريج ·
 * مقطورة مبردة · مقطورة لوبد · مقطورة نقل ثقيل · مركبة جمع مخلفات بمكبس ·
 * سيارة إسعاف · سيارة صهريج وقود · سيارة صهريج مياه · مركبة كنس شوارع ·
 * سيارة شفط وتسليك مجاري. Market synonyms appear only as secondary wording;
 * brand-derived generic terms are never used.
 */

const pending = (notes: string): EquipmentGuideReview => ({
  technical: "needs-verification",
  arabic: "needs-verification",
  notes,
});

const CHECKLIST_CLOSING_EN =
  "Required quantity, delivery location and required timing";
const CHECKLIST_CLOSING_AR = "العدد المطلوب ومكان التسليم والتوقيت المطلوب";

export const commercialVehiclesGuide: SectorEquipmentGuide = {
  terminology: "vehicle",
  heroVisual: "neutral",

  intro: {
    eyebrow_en: "Commercial vehicle & fleet procurement guide",
    eyebrow_ar: "دليل توريد المركبات التجارية والأساطيل",
    lead_en:
      "GOLTENS supplies commercial vehicles according to project, fleet and operating requirements. Use this guide to match vehicle types to your operation, review the main selection considerations, and prepare the details we need to quote. Where a specialised body or fit-out is required — such as an ambulance compartment, a refuse compactor, a tank or a service body — GOLTENS can coordinate qualified body builders and specialist contractors.",
    lead_ar:
      "توفر GOLTENS المركبات التجارية وفق متطلبات المشروع والأسطول وطبيعة التشغيل. استخدموا هذا الدليل لاختيار نوع المركبة المناسب لعملياتكم، ومراجعة أهم اعتبارات الاختيار، وتجهيز البيانات التي نحتاجها لإعداد عرض السعر. وعندما يتطلب الأمر هيكلًا أو تجهيزًا متخصصًا — مثل مقصورة الإسعاف أو صندوق الكبس أو الخزان أو هيكل الخدمة — يمكن لـGOLTENS التنسيق مع مُجهّزي هياكل ومقاولين متخصصين مؤهلين.",
    note_en:
      "This guide provides general procurement information. It is not a list of stocked vehicles or available models — the specific configuration, condition, availability and lead time are confirmed during quotation.",
    note_ar:
      "يقدم هذا الدليل معلومات عامة للمساعدة في التوريد، وليس قائمة بمركبات أو طرازات متوفرة لدينا؛ ويتم تأكيد التكوين والحالة والتوافر ومدة التوريد بدقة أثناء إعداد عرض السعر.",
  },

  projectsTitle_en: "Choose a Vehicle by Operating Need",
  projectsTitle_ar: "اختر المركبة حسب طبيعة التشغيل",
  projectsIntro_en:
    "Typical vehicle combinations for common fleet operations. Every operation is different — use these as a starting point and confirm the final selection against your requirement.",
  projectsIntro_ar:
    "مجموعات المركبات المعتادة لعمليات الأساطيل الشائعة. ولأن لكل عملية ظروفها، استخدموها كنقطة بداية وتأكدوا من الاختيار النهائي وفق متطلباتكم.",

  industries: [
    {
      id: "logistics-distribution",
      label_en: "Logistics & distribution",
      label_ar: "اللوجستيات والتوزيع",
    },
    {
      id: "retail-ecommerce",
      label_en: "Retail & e-commerce",
      label_ar: "التجزئة والتجارة الإلكترونية",
    },
    {
      id: "construction",
      label_en: "Construction & contracting",
      label_ar: "الإنشاءات والمقاولات",
    },
    {
      id: "quarrying-mining",
      label_en: "Quarries & mining",
      label_ar: "المحاجر والتعدين",
    },
    {
      id: "industrial",
      label_en: "Industrial & manufacturing",
      label_ar: "الصناعة والتصنيع",
    },
    {
      id: "oil-gas-fuel",
      label_en: "Oil, gas & fuel distribution",
      label_ar: "البترول والغاز وتوزيع الوقود",
    },
    {
      id: "utilities",
      label_en: "Utility networks",
      label_ar: "شبكات المرافق",
    },
    {
      id: "municipal",
      label_en: "Municipal & public services",
      label_ar: "الخدمات البلدية والعامة",
    },
    {
      id: "healthcare-emergency",
      label_en: "Healthcare & emergency services",
      label_ar: "الصحة وخدمات الطوارئ",
    },
    {
      id: "food-beverage",
      label_en: "Food & beverage",
      label_ar: "الأغذية والمشروبات",
    },
    {
      id: "pharmaceuticals",
      label_en: "Pharmaceuticals",
      label_ar: "الأدوية",
    },
    { id: "agriculture", label_en: "Agriculture", label_ar: "الزراعة" },
    {
      id: "public-sector-fleets",
      label_en: "Public-sector fleets",
      label_ar: "أساطيل الجهات العامة",
    },
    {
      id: "project-cargo",
      label_en: "Heavy equipment & project cargo",
      label_ar: "المعدات الثقيلة وشحنات المشروعات",
    },
    {
      id: "field-services",
      label_en: "Field & technical services",
      label_ar: "الخدمات الميدانية والفنية",
    },
    {
      id: "roads-airports",
      label_en: "Roads & airports",
      label_ar: "الطرق والمطارات",
    },
  ],

  projects: [
    {
      id: "urban-distribution",
      title_en: "Urban distribution & last-mile delivery",
      title_ar: "التوزيع داخل المدن والتوصيل للعميل النهائي",
      description_en:
        "Frequent stops, short routes and enclosed or light-load cargo.",
      description_ar:
        "توقفات متكررة ومسارات قصيرة وبضائع مغلقة أو خفيفة الحمولة.",
      equipmentIds: [
        "light-commercial-vehicles",
        "delivery-cargo-vans",
        "pickup-trucks",
      ],
      review: pending("operation mapping"),
    },
    {
      id: "regional-freight",
      title_en: "Regional freight & bulk transport",
      title_ar: "الشحن الإقليمي ونقل البضائع السائبة",
      description_en:
        "Longer routes, heavier loads and cargo-specific trailers.",
      description_ar: "مسارات أطول وأحمال أثقل ومقطورات تناسب نوع البضاعة.",
      equipmentIds: [
        "medium-heavy-trucks",
        "flatbed-trailers",
        "heavy-duty-trailers",
        "tanker-trailers",
      ],
      review: pending("operation mapping"),
    },
    {
      id: "construction-logistics",
      title_en: "Construction-site logistics",
      title_ar: "لوجستيات مواقع الإنشاء",
      description_en:
        "Material haulage, site supervision, water supply and dust control.",
      description_ar:
        "نقل المواد والإشراف على الموقع وإمداد المياه والحد من الأتربة.",
      equipmentIds: [
        "medium-heavy-trucks",
        "pickup-trucks",
        "water-tankers",
        "flatbed-trailers",
      ],
      review: pending("operation mapping"),
    },
    {
      id: "heavy-equipment-transport",
      title_en: "Heavy equipment transport",
      title_ar: "نقل المعدات الثقيلة",
      description_en:
        "Moving machinery and oversized items between sites and projects.",
      description_ar:
        "نقل الآليات والأحمال كبيرة الحجم بين المواقع والمشروعات.",
      equipmentIds: ["lowbed-trailers", "medium-heavy-trucks"],
      review: pending("operation mapping"),
    },
    {
      id: "cold-chain",
      title_en: "Cold-chain logistics",
      title_ar: "لوجستيات سلسلة التبريد",
      description_en:
        "Temperature-controlled transport for food and sensitive goods.",
      description_ar: "نقل مبرد للأغذية والبضائع الحساسة لدرجة الحرارة.",
      equipmentIds: ["refrigerated-trailers", "delivery-cargo-vans"],
      review: pending("operation mapping"),
    },
    {
      id: "fuel-water-distribution",
      title_en: "Fuel & water distribution",
      title_ar: "توزيع الوقود والمياه",
      description_en:
        "Bulk liquid delivery to stations, sites, depots and communities.",
      description_ar:
        "توصيل السوائل بالجملة إلى المحطات والمواقع والمستودعات والتجمعات السكنية.",
      equipmentIds: ["fuel-tankers", "water-tankers", "tanker-trailers"],
      review: pending("operation mapping"),
    },
    {
      id: "municipal-services",
      title_en: "Municipal cleaning & waste services",
      title_ar: "خدمات النظافة البلدية والمخلفات",
      description_en:
        "Waste collection, street cleaning and drainage network upkeep.",
      description_ar: "جمع المخلفات وتنظيف الشوارع وصيانة شبكات الصرف.",
      equipmentIds: [
        "refuse-collection-vehicles",
        "street-sweeping-vehicles",
        "sewer-cleaning-vehicles",
        "water-tankers",
      ],
      review: pending("operation mapping"),
    },
    {
      id: "emergency-medical",
      title_en: "Emergency medical transport",
      title_ar: "النقل الطبي الطارئ",
      description_en:
        "Patient transport fitted to the operating authority's specification.",
      description_ar: "نقل المرضى بتجهيز وفق مواصفات الجهة المشغّلة.",
      equipmentIds: ["ambulances"],
      review: pending("operation mapping"),
    },
    {
      id: "field-utility-services",
      title_en: "Field services & utility operations",
      title_ar: "الخدمات الميدانية وتشغيل المرافق",
      description_en:
        "Crew transport, tools and mounted equipment for network and site work.",
      description_ar:
        "نقل الفرق والعِدد والمعدات المركّبة لأعمال الشبكات والمواقع.",
      equipmentIds: [
        "utility-trucks",
        "pickup-trucks",
        "light-commercial-vehicles",
      ],
      review: pending("operation mapping"),
    },
  ],

  categories: [
    // ------------------------------------------------------------------
    // Trucks & Light Vehicles
    // ------------------------------------------------------------------
    {
      categoryId: "trucks-light-vehicles",
      title_en: "Trucks & Light Vehicles",
      title_ar: "الشاحنات والمركبات الخفيفة",
      intro_en:
        "Rigid trucks, vans and light commercial vehicles form the core of most delivery, service and freight fleets. The right choice depends on the payload and body type, the drivetrain, and the roads the vehicle will work on every day.",
      intro_ar:
        "تمثل الشاحنات والفانات والمركبات التجارية الخفيفة الأساس في معظم أساطيل التوزيع والخدمات ونقل البضائع. ويعتمد الاختيار الصحيح على الحمولة ونوع الهيكل ونظام الدفع وطبيعة الطرق التي ستعمل عليها المركبة يوميًا.",
      icon: "Truck",
      equipment: [
        {
          id: "light-commercial-vehicles",
          linkedProductId: "light-commercial-vehicles",
          name_en: "Light Commercial Vehicles",
          name_ar: "مركبة تجارية خفيفة",
          summary_en:
            "A compact commercial vehicle for urban delivery, service calls and light-duty fleet work.",
          summary_ar:
            "مركبة تجارية مدمجة للتوزيع داخل المدن والخدمات الميدانية وأعمال الأساطيل الخفيفة، ويُشار إليها في السوق أيضًا بـ«فان خفيف» أو «مركبة توزيع خفيفة».",
          whatItIs_en:
            "A light commercial vehicle is a smaller goods or service vehicle built on a light chassis, supplied as a panel van, a chassis-cab with a fitted body, or a small open-body vehicle. It is designed for frequent stops and city driving rather than heavy loads.",
          whatItIs_ar:
            "المركبة التجارية الخفيفة مركبة صغيرة لنقل البضائع أو الخدمات مبنية على شاسيه خفيف، وتتوفر كفان مغلق أو كشاسيه بكابينة مع هيكل مركّب أو بصندوق مفتوح صغير. وهي مصممة للتوقفات المتكررة والقيادة داخل المدن وليس للأحمال الثقيلة.",
          usedFor_en:
            "Moving light goods, tools and service equipment around towns and cities efficiently.",
          usedFor_ar:
            "نقل البضائع الخفيفة والعِدد ومعدات الخدمة داخل المدن بكفاءة.",
          applications_en: [
            "Last-mile and courier delivery",
            "Field service and maintenance call-outs",
            "Transport of light equipment and materials",
            "Public-sector light-duty fleets",
            "Supporting retail and distribution depots",
          ],
          applications_ar: [
            "التوصيل للعميل النهائي وخدمات البريد السريع",
            "زيارات الخدمة والصيانة الميدانية",
            "نقل المعدات والمواد الخفيفة",
            "أساطيل الجهات العامة للأعمال الخفيفة",
            "دعم منافذ التجزئة ومستودعات التوزيع",
          ],
          industryIds: [
            "logistics-distribution",
            "retail-ecommerce",
            "field-services",
            "public-sector-fleets",
          ],
          selectionFactors: [
            {
              factor_en: "Body type",
              factor_ar: "نوع الهيكل",
              detail_en:
                "Choose between an enclosed van, a chassis-cab with a fitted body, or an open body according to the cargo.",
              detail_ar:
                "يُختار بين الفان المغلق أو الشاسيه بكابينة مع هيكل مركّب أو الصندوق المفتوح حسب نوع الحمولة.",
            },
            {
              factor_en: "Payload versus volume",
              factor_ar: "الحمولة مقابل الحجم",
              detail_en:
                "Bulky but light goods call for cargo volume; dense goods call for payload.",
              detail_ar:
                "البضائع كبيرة الحجم خفيفة الوزن تحتاج حجمًا أكبر، أما البضائع الكثيفة فتحتاج حمولة أعلى.",
            },
            {
              factor_en: "Duty cycle",
              factor_ar: "طبيعة التشغيل",
              detail_en:
                "Daily distance, number of stops and city or intercity use affect the engine and transmission choice.",
              detail_ar:
                "تؤثر المسافة اليومية وعدد التوقفات والاستخدام داخل المدن أو بينها في اختيار المحرك وناقل الحركة.",
            },
            {
              factor_en: "Fuel type",
              factor_ar: "نوع الوقود",
              detail_en:
                "Match the fuel type to fuel availability on your routes and your fleet policy.",
              detail_ar:
                "يُختار نوع الوقود وفق توافره على مسارات التشغيل وسياسة الأسطول لديكم.",
            },
          ],
          requestChecklist_en: [
            "Required body type and any fit-out",
            "Typical load weight and volume",
            "Daily operating pattern and routes",
            "Preferred fuel type",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الهيكل المطلوب وأي تجهيزات",
            "الوزن والحجم المعتاد للحمولة",
            "نمط التشغيل اليومي والمسارات",
            "نوع الوقود المفضل",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "delivery-cargo-vans",
            "pickup-trucks",
            "utility-trucks",
          ],
          image: null,
          review: pending(
            "body types, duty-cycle guidance; AR market synonyms",
          ),
        },
        {
          id: "medium-heavy-trucks",
          linkedProductId: "medium-heavy-trucks",
          name_en: "Medium & Heavy Trucks",
          name_ar: "شاحنة متوسطة وثقيلة",
          summary_en:
            "Rigid trucks and tractor units for freight, bulk haulage and as a base for specialised bodies.",
          summary_ar:
            "شاحنات صلبة ورؤوس جرّ لنقل البضائع والنقل السائب، وقاعدة لتركيب الهياكل المتخصصة.",
          whatItIs_en:
            "Medium and heavy trucks are built on a strong ladder-frame chassis with multiple axle configurations. They are supplied either as rigid trucks carrying their own body, or as tractor units that tow semi-trailers, and often serve as the base for tipper, box, tank or mixer bodies.",
          whatItIs_ar:
            "تُبنى الشاحنات المتوسطة والثقيلة على شاسيه قوي بتكوينات محاور متعددة، وتُورَّد إما كشاحنات صلبة تحمل هيكلها الخاص، أو كرؤوس جرّ تسحب نصف مقطورات، وكثيرًا ما تكون قاعدة لهياكل القلاب أو الصندوق أو الخزان أو الخلاطة.",
          usedFor_en:
            "Carrying heavier loads over longer distances, and carrying purpose-built bodies for specific operations.",
          usedFor_ar:
            "نقل الأحمال الأثقل لمسافات أطول، وحمل الهياكل المصممة لعمليات محددة.",
          applications_en: [
            "General and bulk freight",
            "Construction material haulage",
            "Regional distribution",
            "Chassis for tipper, box, tank and mixer bodies",
            "Industrial and quarry site transport",
          ],
          applications_ar: [
            "نقل البضائع العامة والسائبة",
            "نقل مواد البناء",
            "التوزيع الإقليمي",
            "شاسيه لهياكل القلاب والصندوق والخزان والخلاطة",
            "النقل في المواقع الصناعية والمحاجر",
          ],
          industryIds: [
            "logistics-distribution",
            "construction",
            "quarrying-mining",
            "industrial",
          ],
          selectionFactors: [
            {
              factor_en: "Rigid truck or tractor unit",
              factor_ar: "شاحنة صلبة أم رأس جرّ",
              detail_en:
                "A rigid truck carries its own body; a tractor unit gives flexibility to tow different trailers.",
              detail_ar:
                "الشاحنة الصلبة تحمل هيكلها الخاص، بينما يتيح رأس الجرّ مرونة سحب مقطورات مختلفة.",
            },
            {
              factor_en: "Axle and drive configuration",
              factor_ar: "تكوين المحاور ونظام الدفع",
              detail_en:
                "Axle arrangement and driven axles depend on the load, the terrain and on- or off-road use.",
              detail_ar:
                "يعتمد ترتيب المحاور والمحاور الدافعة على الحمولة وطبيعة الأرض والعمل على الطرق أو خارجها.",
            },
            {
              factor_en: "Body compatibility",
              factor_ar: "التوافق مع الهيكل",
              detail_en:
                "Where a specialised body is fitted, the chassis must match the body builder's requirements.",
              detail_ar:
                "عند تركيب هيكل متخصص، يجب أن يتوافق الشاسيه مع متطلبات مُجهّز الهيكل.",
            },
            {
              factor_en: "Permitted loads on your routes",
              factor_ar: "الأحمال المسموح بها على المسارات",
              detail_en:
                "Confirm the axle-load and dimension limits that apply to the roads the truck will use.",
              detail_ar:
                "تأكدوا من حدود أحمال المحاور والأبعاد المعمول بها على الطرق التي ستستخدمها الشاحنة.",
            },
          ],
          requestChecklist_en: [
            "Rigid truck or tractor unit",
            "Cargo type, typical load and routes",
            "Required body, if any",
            "Axle and drive configuration, if specified",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "شاحنة صلبة أم رأس جرّ",
            "نوع البضاعة والحمولة المعتادة والمسارات",
            "الهيكل المطلوب إن وُجد",
            "تكوين المحاور ونظام الدفع إن كان محددًا",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "utility-trucks",
            "flatbed-trailers",
            "lowbed-trailers",
          ],
          image: null,
          review: pending(
            "rigid vs tractor, axle/drive configuration, route load limits wording",
          ),
        },
        {
          id: "pickup-trucks",
          linkedProductId: "pickup-trucks",
          name_en: "Pickup Trucks",
          name_ar: "بيك أب",
          summary_en:
            "A cab with an open rear bed, in two- or four-wheel drive, for site access and light loads.",
          summary_ar:
            "كابينة مع صندوق خلفي مفتوح، بدفع ثنائي أو رباعي، للوصول إلى المواقع ونقل الأحمال الخفيفة، ويُعرف في السوق أيضًا بـ«ربع نقل» أو «دبل كابينة» حسب نوع الكابينة.",
          whatItIs_en:
            "A pickup truck combines a passenger cab — single, extended or double — with an open cargo bed. Four-wheel-drive versions are widely used where crews need to reach sites over unpaved or rough ground.",
          whatItIs_ar:
            "يجمع البيك أب بين كابينة للركاب — فردية أو ممتدة أو مزدوجة — وصندوق خلفي مفتوح للحمولة. وتنتشر نسخ الدفع الرباعي حيث تحتاج الفرق إلى الوصول للمواقع عبر طرق غير ممهدة أو وعرة.",
          usedFor_en:
            "Transporting small crews, tools and light loads to sites, including off-road locations.",
          usedFor_ar:
            "نقل الفرق الصغيرة والعِدد والأحمال الخفيفة إلى المواقع، بما فيها المواقع خارج الطرق الممهدة.",
          applications_en: [
            "Site supervision and field service",
            "Utility and public-sector fleets",
            "Oil and gas field support",
            "Access to remote and rural sites",
            "Light towing",
          ],
          applications_ar: [
            "الإشراف على المواقع والخدمة الميدانية",
            "أساطيل المرافق والجهات العامة",
            "دعم حقول البترول والغاز",
            "الوصول إلى المواقع النائية والريفية",
            "القَطر الخفيف",
          ],
          industryIds: [
            "construction",
            "utilities",
            "oil-gas-fuel",
            "agriculture",
            "public-sector-fleets",
          ],
          selectionFactors: [
            {
              factor_en: "Two- or four-wheel drive",
              factor_ar: "دفع ثنائي أم رباعي",
              detail_en:
                "Four-wheel drive suits unpaved, sandy or rough ground; two-wheel drive suits paved routes.",
              detail_ar:
                "الدفع الرباعي مناسب للطرق غير الممهدة أو الرملية أو الوعرة، والدفع الثنائي مناسب للطرق الممهدة.",
            },
            {
              factor_en: "Cab type",
              factor_ar: "نوع الكابينة",
              detail_en:
                "Balance the number of crew seats against the length of the cargo bed.",
              detail_ar:
                "يجب الموازنة بين عدد مقاعد الفريق وطول صندوق الحمولة.",
            },
            {
              factor_en: "Payload and towing",
              factor_ar: "الحمولة والقَطر",
              detail_en:
                "Check bed payload and towing needs against the tools, equipment and trailers used.",
              detail_ar:
                "راجِعوا حمولة الصندوق واحتياجات القَطر مقابل العِدد والمعدات والمقطورات المستخدمة.",
            },
            {
              factor_en: "Bed accessories",
              factor_ar: "ملحقات الصندوق",
              detail_en:
                "Canopies, racks and service boxes adapt the vehicle to its daily tasks.",
              detail_ar:
                "تساعد الأغطية والحوامل وصناديق العِدد على تكييف المركبة مع مهامها اليومية.",
            },
          ],
          requestChecklist_en: [
            "Drive type and operating terrain",
            "Cab type and number of crew",
            "Typical load and any towing requirement",
            "Bed accessories required",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نظام الدفع وطبيعة أرض التشغيل",
            "نوع الكابينة وعدد أفراد الفريق",
            "الحمولة المعتادة وأي احتياج للقَطر",
            "ملحقات الصندوق المطلوبة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["light-commercial-vehicles", "utility-trucks"],
          image: null,
          review: pending(
            "drive/cab guidance; AR market synonyms ربع نقل / دبل كابينة",
          ),
        },
        {
          id: "delivery-cargo-vans",
          linkedProductId: "delivery-cargo-vans",
          name_en: "Delivery & Cargo Vans",
          name_ar: "فان نقل بضائع",
          summary_en:
            "An enclosed van for protected goods delivery and mobile workshop or service use.",
          summary_ar:
            "فان مغلق لتوصيل البضائع المحمية واستخدامه كورشة متنقلة أو مركبة خدمة.",
          whatItIs_en:
            "A cargo van is an enclosed goods vehicle offered in several wheelbase and roof-height combinations, with side and rear doors. The load area can be fitted with shelving, partitions or a workshop layout.",
          whatItIs_ar:
            "فان نقل البضائع مركبة مغلقة تتوفر بعدة أطوال لقاعدة العجلات وارتفاعات للسقف، مع أبواب جانبية وخلفية. ويمكن تجهيز منطقة الحمولة برفوف أو فواصل أو كورشة متنقلة.",
          usedFor_en:
            "Delivering goods that need protection from weather and theft, and carrying mobile service teams with their equipment.",
          usedFor_ar:
            "توصيل البضائع التي تحتاج حماية من الطقس والسرقة، ونقل فرق الخدمة المتنقلة مع معداتها.",
          applications_en: [
            "Parcel and courier delivery",
            "Retail and e-commerce distribution",
            "Mobile workshops and service vans",
            "Light transfers between depots",
            "Trade and technical service fleets",
          ],
          applications_ar: [
            "توصيل الطرود والبريد السريع",
            "توزيع التجزئة والتجارة الإلكترونية",
            "الورش المتنقلة ومركبات الخدمة",
            "النقل الخفيف بين المستودعات",
            "أساطيل الخدمات الفنية والحرفية",
          ],
          industryIds: [
            "retail-ecommerce",
            "logistics-distribution",
            "field-services",
          ],
          selectionFactors: [
            {
              factor_en: "Load volume and payload",
              factor_ar: "حجم الحمولة ووزنها",
              detail_en:
                "Wheelbase and roof height set the load volume; check it alongside the payload.",
              detail_ar:
                "يحدد طول قاعدة العجلات وارتفاع السقف حجم منطقة الحمولة، ويُراجع ذلك مع الوزن المسموح.",
            },
            {
              factor_en: "Door configuration",
              factor_ar: "تكوين الأبواب",
              detail_en:
                "Side and rear door options affect loading at kerbs, docks and loading bays.",
              detail_ar:
                "تؤثر خيارات الأبواب الجانبية والخلفية في التحميل على الأرصفة وأرصفة التحميل.",
            },
            {
              factor_en: "Interior fit-out",
              factor_ar: "التجهيز الداخلي",
              detail_en:
                "Shelving, partitions and securing points should match the goods or tools carried.",
              detail_ar:
                "يجب أن تناسب الرفوف والفواصل ونقاط التثبيت البضائع أو العِدد المنقولة.",
            },
            {
              factor_en: "Urban operation",
              factor_ar: "التشغيل داخل المدن",
              detail_en:
                "Vehicle size, manoeuvrability and access restrictions in city centres matter.",
              detail_ar:
                "يجب مراعاة حجم المركبة وسهولة المناورة وقيود الدخول في مراكز المدن.",
            },
          ],
          requestChecklist_en: [
            "Required load volume and typical load weight",
            "Door configuration",
            "Interior fit-out required",
            "Operating area and routes",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "حجم منطقة الحمولة المطلوب والوزن المعتاد",
            "تكوين الأبواب",
            "التجهيز الداخلي المطلوب",
            "منطقة التشغيل والمسارات",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "light-commercial-vehicles",
            "refrigerated-trailers",
          ],
          image: null,
          review: pending(
            "wheelbase/roof-height wording; AR term (never هايس)",
          ),
        },
        {
          id: "utility-trucks",
          linkedProductId: "utility-trucks",
          name_en: "Utility Trucks",
          name_ar: "شاحنة خدمات ميدانية",
          summary_en:
            "A truck chassis fitted with a service body or mounted equipment for maintenance and utility work.",
          summary_ar:
            "شاسيه شاحنة مزوّد بهيكل خدمة أو معدات مركّبة لأعمال الصيانة وتشغيل المرافق.",
          whatItIs_en:
            "A utility truck combines a truck chassis with a service body — flatbed, dropside, box body or a mounted lifting unit — often with a power take-off to drive the mounted equipment. Bodies and mounted equipment are usually fitted by specialised body builders.",
          whatItIs_ar:
            "تجمع شاحنة الخدمات الميدانية بين شاسيه شاحنة وهيكل خدمة — مسطح أو بجوانب قابلة للفتح أو صندوق أو وحدة رفع مركّبة — وغالبًا ما تُزوّد بمأخذ قدرة لتشغيل المعدات المركّبة. وعادةً ما يقوم مُجهّزو هياكل متخصصون بتركيب الهياكل والمعدات.",
          usedFor_en:
            "Carrying crews, tools and mounted equipment to maintenance and service work in the field.",
          usedFor_ar:
            "نقل الفرق والعِدد والمعدات المركّبة إلى أعمال الصيانة والخدمة في المواقع.",
          applications_en: [
            "Maintenance and repair crew support",
            "Power, water and telecom network work",
            "Field service for industrial equipment",
            "Municipal works support",
            "Carrying mounted lifting equipment",
          ],
          applications_ar: [
            "دعم فرق الصيانة والإصلاح",
            "أعمال شبكات الكهرباء والمياه والاتصالات",
            "الخدمة الميدانية للمعدات الصناعية",
            "دعم الأعمال البلدية",
            "حمل معدات الرفع المركّبة",
          ],
          industryIds: [
            "utilities",
            "municipal",
            "industrial",
            "field-services",
          ],
          selectionFactors: [
            {
              factor_en: "Service body type",
              factor_ar: "نوع هيكل الخدمة",
              detail_en:
                "The body is chosen around the tools, materials and equipment the crew carries.",
              detail_ar:
                "يُختار الهيكل وفق العِدد والمواد والمعدات التي يحملها الفريق.",
            },
            {
              factor_en: "Mounted equipment",
              factor_ar: "المعدات المركّبة",
              detail_en:
                "Mounted units may need a power take-off and a chassis rated for the added weight.",
              detail_ar:
                "قد تحتاج المعدات المركّبة إلى مأخذ قدرة وشاسيه يتحمل الوزن الإضافي.",
            },
            {
              factor_en: "Chassis size and drive",
              factor_ar: "حجم الشاسيه ونظام الدفع",
              detail_en:
                "Match the chassis and drive to the body, the equipment and the sites served.",
              detail_ar:
                "يُختار الشاسيه ونظام الدفع وفق الهيكل والمعدات وطبيعة المواقع.",
            },
            {
              factor_en: "Body building",
              factor_ar: "تجهيز الهيكل",
              detail_en:
                "Specialised bodies are built by qualified body builders, which GOLTENS can coordinate when required.",
              detail_ar:
                "تُنفَّذ الهياكل المتخصصة لدى مُجهّزي هياكل مؤهلين، ويمكن لـGOLTENS التنسيق معهم عند الحاجة.",
            },
          ],
          requestChecklist_en: [
            "Service body and any mounted equipment required",
            "Tools and materials to be carried",
            "Operating sites and terrain",
            "Crew size",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "هيكل الخدمة وأي معدات مركّبة مطلوبة",
            "العِدد والمواد المطلوب حملها",
            "مواقع التشغيل وطبيعة الأرض",
            "عدد أفراد الفريق",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["medium-heavy-trucks", "pickup-trucks"],
          image: null,
          review: pending("service body types, power take-off wording"),
        },
      ],
    },

    // ------------------------------------------------------------------
    // Trailers & Transport Equipment
    // ------------------------------------------------------------------
    {
      categoryId: "trailers-transport-equipment",
      title_en: "Trailers & Transport Equipment",
      title_ar: "المقطورات ومعدات النقل",
      intro_en:
        "Semi-trailers are towed by a tractor unit and are selected around the cargo: open decks for general and long loads, tanks for liquids, insulated bodies for temperature-controlled goods, and low decks for heavy machinery.",
      intro_ar:
        "تُسحب نصف المقطورات برأس جرّ، ويُختار نوعها وفق البضاعة: أسطح مفتوحة للبضائع العامة والأطوال الكبيرة، وخزانات للسوائل، وهياكل معزولة للبضائع التي تتطلب تحكمًا في درجة الحرارة، وأسطح منخفضة للآليات الثقيلة.",
      icon: "Container",
      equipment: [
        {
          id: "flatbed-trailers",
          linkedProductId: "flatbed-trailers",
          name_en: "Flatbed Trailers",
          name_ar: "مقطورة مسطحة",
          summary_en:
            "An open-deck semi-trailer for general cargo, machinery and long loads.",
          summary_ar:
            "نصف مقطورة بسطح مفتوح للبضائع العامة والآليات والأحمال الطويلة، وتُعرف في السوق أيضًا بـ«تريلا سطح».",
          whatItIs_en:
            "A flatbed trailer has an open load deck without sides or roof, with fittings for securing the load. It can be loaded from the sides, the rear or from above by crane or forklift.",
          whatItIs_ar:
            "المقطورة المسطحة ذات سطح حمولة مفتوح بدون جوانب أو سقف، مع تجهيزات لتثبيت الحمولة. ويمكن تحميلها من الجوانب أو من الخلف أو من أعلى بالونش أو الرافعة الشوكية.",
          usedFor_en:
            "Carrying cargo that is long, bulky or needs to be loaded from the side or from above.",
          usedFor_ar:
            "نقل البضائع الطويلة أو كبيرة الحجم أو التي تحتاج إلى التحميل من الجانب أو من أعلى.",
          applications_en: [
            "Palletised and general cargo",
            "Machinery and equipment",
            "Construction materials",
            "Steel, pipes and long-length items",
          ],
          applications_ar: [
            "البضائع العامة والمحمّلة على بالتات",
            "الآليات والمعدات",
            "مواد البناء",
            "الحديد والمواسير والأحمال الطويلة",
          ],
          industryIds: ["logistics-distribution", "construction", "industrial"],
          selectionFactors: [
            {
              factor_en: "Deck length and height",
              factor_ar: "طول السطح وارتفاعه",
              detail_en:
                "Deck length, and whether a lower drop-deck is needed, depend on the cargo dimensions.",
              detail_ar:
                "يعتمد طول السطح، والحاجة إلى سطح منخفض جزئيًا، على أبعاد البضاعة.",
            },
            {
              factor_en: "Axle configuration",
              factor_ar: "تكوين المحاور",
              detail_en:
                "The number of axles follows the load and the limits on your routes.",
              detail_ar:
                "يتبع عدد المحاور الحمولة والحدود المعمول بها على المسارات.",
            },
            {
              factor_en: "Load securing",
              factor_ar: "تثبيت الحمولة",
              detail_en:
                "Stake pockets, side rails and lashing points should suit the cargo carried.",
              detail_ar:
                "يجب أن تناسب فتحات الدعامات والحواجز الجانبية ونقاط الربط نوع البضاعة.",
            },
            {
              factor_en: "Tractor compatibility",
              factor_ar: "التوافق مع رأس الجرّ",
              detail_en:
                "Confirm the coupling and dimensions against the tractor units in your fleet.",
              detail_ar:
                "تأكدوا من توافق وصلة الربط والأبعاد مع رؤوس الجرّ في أسطولكم.",
            },
          ],
          requestChecklist_en: [
            "Cargo types and typical dimensions",
            "Typical load and routes",
            "Load-securing requirements",
            "Tractor units the trailer must match",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "أنواع البضائع وأبعادها المعتادة",
            "الحمولة المعتادة والمسارات",
            "متطلبات تثبيت الحمولة",
            "رؤوس الجرّ التي يجب أن تتوافق معها المقطورة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "lowbed-trailers",
            "heavy-duty-trailers",
            "medium-heavy-trucks",
          ],
          image: null,
          review: pending("deck/axle guidance; AR market synonym تريلا سطح"),
        },
        {
          id: "tanker-trailers",
          linkedProductId: "tanker-trailers",
          name_en: "Tanker Trailers",
          name_ar: "مقطورة صهريج",
          summary_en:
            "A semi-trailer with a tank for transporting fuel, water and other liquids in bulk.",
          summary_ar:
            "نصف مقطورة بخزان لنقل الوقود والمياه والسوائل الأخرى بالجملة، وتُعرف في السوق أيضًا بـ«تريلا فنطاس».",
          whatItIs_en:
            "A tanker trailer carries liquid in a tank mounted on a semi-trailer chassis, single or divided into compartments. The tank material, lining and fittings are selected for the liquid carried.",
          whatItIs_ar:
            "تنقل مقطورة الصهريج السوائل في خزان مركّب على شاسيه نصف مقطورة، بحجرة واحدة أو مقسم إلى عدة حجرات. وتُختار مادة الخزان وبطانته وتجهيزاته وفق السائل المنقول.",
          usedFor_en:
            "Moving large volumes of liquid over longer distances, towed by a tractor unit.",
          usedFor_ar:
            "نقل كميات كبيرة من السوائل لمسافات أطول، بسحبها برأس جرّ.",
          applications_en: [
            "Bulk fuel distribution",
            "Industrial liquids, with a compatible tank",
            "Potable and non-potable water",
            "Food-grade liquids, with a suitable tank lining",
          ],
          applications_ar: [
            "توزيع الوقود بالجملة",
            "السوائل الصناعية بخزان متوافق",
            "المياه الصالحة وغير الصالحة للشرب",
            "السوائل الغذائية ببطانة خزان مناسبة",
          ],
          industryIds: [
            "oil-gas-fuel",
            "industrial",
            "utilities",
            "food-beverage",
          ],
          selectionFactors: [
            {
              factor_en: "Liquid and tank compatibility",
              factor_ar: "توافق الخزان مع السائل",
              detail_en:
                "Tank material and lining must be compatible with the liquid carried.",
              detail_ar: "يجب أن تتوافق مادة الخزان وبطانته مع السائل المنقول.",
            },
            {
              factor_en: "Compartments",
              factor_ar: "الحجرات",
              detail_en:
                "Multiple compartments allow different products, or part loads, in one trip.",
              detail_ar:
                "تتيح الحجرات المتعددة نقل منتجات مختلفة أو أحمال جزئية في رحلة واحدة.",
            },
            {
              factor_en: "Loading and discharge",
              factor_ar: "التحميل والتفريغ",
              detail_en:
                "Top or bottom loading and the discharge method should match your terminals and sites.",
              detail_ar:
                "يجب أن يتوافق التحميل العلوي أو السفلي وطريقة التفريغ مع المحطات والمواقع لديكم.",
            },
            {
              factor_en: "Applicable transport rules",
              factor_ar: "اشتراطات النقل المعمول بها",
              detail_en:
                "Transport of fuel and hazardous liquids is subject to specific rules; confirm those that apply to your operation.",
              detail_ar:
                "يخضع نقل الوقود والسوائل الخطرة لاشتراطات خاصة، ويجب التأكد من الاشتراطات التي تنطبق على عملياتكم.",
            },
          ],
          requestChecklist_en: [
            "Liquid to be carried",
            "Required capacity and number of compartments",
            "Loading and discharge method",
            "Transport requirements that apply to your operation",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "السائل المطلوب نقله",
            "السعة المطلوبة وعدد الحجرات",
            "طريقة التحميل والتفريغ",
            "اشتراطات النقل التي تنطبق على عملياتكم",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["fuel-tankers", "water-tankers"],
          image: null,
          review: pending(
            "tank compatibility, compartments, hazardous-transport wording; AR synonym تريلا فنطاس",
          ),
        },
        {
          id: "refrigerated-trailers",
          linkedProductId: "refrigerated-trailers",
          name_en: "Refrigerated Trailers",
          name_ar: "مقطورة مبردة",
          summary_en:
            "An insulated semi-trailer with a refrigeration unit for temperature-controlled cargo.",
          summary_ar:
            "نصف مقطورة معزولة بوحدة تبريد لنقل البضائع التي تتطلب تحكمًا في درجة الحرارة، وتُعرف في السوق أيضًا بـ«تريلا ثلاجة».",
          whatItIs_en:
            "A refrigerated trailer has an insulated body and a refrigeration unit that holds the load at a set temperature. Some designs offer separate compartments at different temperatures.",
          whatItIs_ar:
            "للمقطورة المبردة هيكل معزول ووحدة تبريد تحافظ على الحمولة عند درجة حرارة محددة. وتتيح بعض التصميمات حجرات منفصلة بدرجات حرارة مختلفة.",
          usedFor_en:
            "Keeping perishable and temperature-sensitive goods within their required range during transport.",
          usedFor_ar:
            "الحفاظ على البضائع سريعة التلف والحساسة لدرجة الحرارة ضمن النطاق المطلوب أثناء النقل.",
          applications_en: [
            "Fresh food and beverage distribution",
            "Frozen goods",
            "Pharmaceutical cold-chain transport",
            "Temperature-sensitive industrial goods",
          ],
          applications_ar: [
            "توزيع الأغذية والمشروبات الطازجة",
            "البضائع المجمدة",
            "نقل الأدوية ضمن سلسلة التبريد",
            "البضائع الصناعية الحساسة لدرجة الحرارة",
          ],
          industryIds: [
            "food-beverage",
            "pharmaceuticals",
            "logistics-distribution",
          ],
          selectionFactors: [
            {
              factor_en: "Temperature range",
              factor_ar: "نطاق درجة الحرارة",
              detail_en:
                "Chilled and frozen goods need different refrigeration and insulation performance.",
              detail_ar:
                "تحتاج البضائع المبردة والمجمدة إلى أداء مختلف في التبريد والعزل.",
            },
            {
              factor_en: "Single or multi-temperature",
              factor_ar: "درجة حرارة واحدة أم متعددة",
              detail_en:
                "Mixed loads may need separate compartments held at different temperatures.",
              detail_ar:
                "قد تحتاج الأحمال المختلطة إلى حجرات منفصلة بدرجات حرارة مختلفة.",
            },
            {
              factor_en: "Route and climate",
              factor_ar: "المسار والمناخ",
              detail_en:
                "Journey length, door openings and high ambient temperatures affect the unit's sizing.",
              detail_ar:
                "تؤثر مدة الرحلة وعدد مرات فتح الأبواب وارتفاع درجة الحرارة الخارجية في اختيار قدرة وحدة التبريد.",
            },
            {
              factor_en: "Temperature records",
              factor_ar: "سجلات درجة الحرارة",
              detail_en:
                "Some products require temperature monitoring and records during transport.",
              detail_ar:
                "تتطلب بعض المنتجات مراقبة درجة الحرارة وتسجيلها أثناء النقل.",
            },
          ],
          requestChecklist_en: [
            "Products to be carried and required temperature range",
            "Single or multi-temperature requirement",
            "Typical routes and journey times",
            "Any temperature-monitoring requirement",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "المنتجات المطلوب نقلها ونطاق درجة الحرارة المطلوب",
            "درجة حرارة واحدة أم متعددة",
            "المسارات المعتادة ومدة الرحلات",
            "أي متطلبات لمراقبة درجة الحرارة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["delivery-cargo-vans", "tanker-trailers"],
          image: null,
          review: pending(
            "temperature/insulation guidance, monitoring wording; AR synonym تريلا ثلاجة",
          ),
        },
        {
          id: "lowbed-trailers",
          linkedProductId: "lowbed-trailers",
          name_en: "Lowbed Trailers",
          name_ar: "مقطورة لوبد",
          summary_en:
            "A low-deck trailer for transporting heavy machinery and tall or oversized loads.",
          summary_ar:
            "مقطورة منخفضة السطح لنقل الآليات الثقيلة والأحمال المرتفعة أو كبيرة الحجم.",
          whatItIs_en:
            "A lowbed trailer has a deck set close to the ground, which keeps tall loads within height limits. Fixed or detachable goosenecks and loading ramps allow machinery to be driven or lifted on board.",
          whatItIs_ar:
            "مقطورة اللوبد مقطورة منخفضة سطحها قريب من الأرض، مما يبقي الأحمال المرتفعة ضمن حدود الارتفاع. وتتيح الرقبة الثابتة أو القابلة للفصل ومنحدرات التحميل صعود الآليات بنفسها أو رفعها إلى السطح.",
          usedFor_en:
            "Relocating construction machinery and moving heavy or oversized items between sites.",
          usedFor_ar:
            "نقل آليات الإنشاء والأحمال الثقيلة أو كبيرة الحجم بين المواقع.",
          applications_en: [
            "Construction and earthmoving machinery",
            "Moving cranes and excavators between sites",
            "Oversized and abnormal loads",
            "Project cargo",
          ],
          applications_ar: [
            "آليات الإنشاء ونقل التراب",
            "نقل الأوناش والحفارات بين المواقع",
            "الأحمال كبيرة الحجم والاستثنائية",
            "شحنات المشروعات",
          ],
          industryIds: ["project-cargo", "construction", "quarrying-mining"],
          selectionFactors: [
            {
              factor_en: "Machine weight and dimensions",
              factor_ar: "وزن الآلية وأبعادها",
              detail_en:
                "The heaviest and tallest machines to be carried determine the deck and axle arrangement.",
              detail_ar:
                "تحدد أثقل الآليات وأعلاها التي سيتم نقلها ترتيب السطح والمحاور.",
            },
            {
              factor_en: "Loading method",
              factor_ar: "طريقة التحميل",
              detail_en:
                "Detachable goosenecks and ramps suit machines that drive on; others are lifted on.",
              detail_ar:
                "تناسب الرقبة القابلة للفصل والمنحدرات الآليات التي تصعد بنفسها، بينما تُرفع الأخرى إلى السطح.",
            },
            {
              factor_en: "Tractor capability",
              factor_ar: "قدرة رأس الجرّ",
              detail_en:
                "The tractor unit must be rated for the combined weight it will pull.",
              detail_ar:
                "يجب أن يكون رأس الجرّ مقننًا للوزن الإجمالي الذي سيسحبه.",
            },
            {
              factor_en: "Oversized-load requirements",
              factor_ar: "اشتراطات الأحمال الاستثنائية",
              detail_en:
                "Oversized moves may need permits or escorts; confirm what applies to your routes.",
              detail_ar:
                "قد تحتاج الأحمال الاستثنائية إلى تصاريح أو مرافقة، ويجب التأكد مما ينطبق على مساراتكم.",
            },
          ],
          requestChecklist_en: [
            "Machines or loads to be carried, with weights and dimensions",
            "Preferred loading method",
            "Tractor units available or required",
            "Typical routes",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "الآليات أو الأحمال المطلوب نقلها مع أوزانها وأبعادها",
            "طريقة التحميل المفضلة",
            "رؤوس الجرّ المتاحة أو المطلوبة",
            "المسارات المعتادة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["flatbed-trailers", "heavy-duty-trailers"],
          image: null,
          review: pending(
            "gooseneck/ramp wording, oversized-load permit wording",
          ),
        },
        {
          id: "heavy-duty-trailers",
          linkedProductId: "heavy-duty-trailers",
          name_en: "Heavy Duty Trailers",
          name_ar: "مقطورة نقل ثقيل",
          summary_en:
            "Trailers for demanding haulage work, specified according to the cargo, operating cycle and route.",
          summary_ar:
            "مقطورات لأعمال النقل الشاقة، تُحدَّد مواصفاتها وفق نوع الحمولة ودورة التشغيل والمسار.",
          whatItIs_en:
            '"Heavy duty trailers" is a general procurement term rather than a single trailer design. The exact configuration is determined according to the cargo type, operating cycle, axle arrangement, route and project requirements, and is confirmed during quotation.',
          whatItIs_ar:
            "«مقطورات النقل الثقيل» مصطلح عام يُستخدم في التوريد، وليس تصميمًا واحدًا محددًا. ويتحدد التكوين الدقيق وفق نوع الحمولة ودورة التشغيل وترتيب المحاور والمسار ومتطلبات المشروع، ويتم تأكيده أثناء إعداد عرض السعر.",
          usedFor_en:
            "Haulage requirements that need a trailer specified around the cargo, the operating cycle and the route.",
          usedFor_ar:
            "متطلبات النقل التي تحتاج إلى مقطورة تُحدَّد مواصفاتها وفق الحمولة ودورة التشغيل والمسار.",
          applications_en: [
            "Bulk material haulage",
            "Industrial and project logistics",
            "Quarry and mining support transport",
            "Construction project transport",
          ],
          applications_ar: [
            "نقل المواد السائبة",
            "اللوجستيات الصناعية ولوجستيات المشروعات",
            "النقل لخدمة المحاجر والتعدين",
            "النقل لمشروعات الإنشاء",
          ],
          industryIds: ["quarrying-mining", "industrial", "construction"],
          selectionFactors: [
            {
              factor_en: "Cargo type",
              factor_ar: "نوع الحمولة",
              detail_en:
                "Describe the material or items to be carried and how they are loaded.",
              detail_ar: "صِفوا الخامة أو البنود المطلوب نقلها وطريقة تحميلها.",
            },
            {
              factor_en: "Operating cycle",
              factor_ar: "دورة التشغيل",
              detail_en:
                "How often and how continuously the trailer will work affects the configuration.",
              detail_ar:
                "يؤثر معدل تشغيل المقطورة ومدى استمراريته في التكوين المطلوب.",
            },
            {
              factor_en: "Axle arrangement and route",
              factor_ar: "ترتيب المحاور والمسار",
              detail_en:
                "The axle arrangement is selected according to the load and the routes the trailer will use.",
              detail_ar:
                "يُختار ترتيب المحاور وفق الحمولة والمسارات التي ستعمل عليها المقطورة.",
            },
            {
              factor_en: "Project requirements",
              factor_ar: "متطلبات المشروع",
              detail_en:
                "Any requirement set by your project or specification is reviewed and the configuration is confirmed during quotation.",
              detail_ar:
                "تُراجع أي اشتراطات يحددها مشروعكم أو مواصفاتكم، ويتم تأكيد التكوين أثناء إعداد عرض السعر.",
            },
          ],
          requestChecklist_en: [
            "Cargo type and how it is loaded",
            "Typical load and operating cycle",
            "Routes and site conditions",
            "Tractor units the trailer must match",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الحمولة وطريقة تحميلها",
            "الحمولة المعتادة ودورة التشغيل",
            "المسارات وحالة المواقع",
            "رؤوس الجرّ التي يجب أن تتوافق معها المقطورة",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["flatbed-trailers", "lowbed-trailers"],
          image: null,
          review: pending(
            "general procurement term — no specific construction, payload class or regulatory classification asserted; AR label as specified",
          ),
        },
      ],
    },

    // ------------------------------------------------------------------
    // Specialized & Municipal Vehicles
    // ------------------------------------------------------------------
    {
      categoryId: "specialized-municipal-vehicles",
      title_en: "Specialized & Municipal Vehicles",
      title_ar: "المركبات المتخصصة والبلدية",
      intro_en:
        "Specialized vehicles combine a commercial chassis with a purpose-built body or fit-out for public services, utilities and emergency response. The body is usually specified by the operating authority and built by a specialised body builder — GOLTENS can coordinate qualified body builders when required.",
      intro_ar:
        "تجمع المركبات المتخصصة بين شاسيه تجاري وهيكل أو تجهيز مصمم خصيصًا للخدمات العامة والمرافق والاستجابة للطوارئ. وعادةً ما تحدد الجهة المشغّلة مواصفات الهيكل وينفذه مُجهّز هياكل متخصص، ويمكن لـGOLTENS التنسيق مع مُجهّزين مؤهلين عند الحاجة.",
      icon: "Recycle",
      equipment: [
        {
          id: "refuse-collection-vehicles",
          linkedProductId: "refuse-collection-vehicles",
          name_en: "Refuse Collection Vehicles",
          name_ar: "مركبة جمع مخلفات بمكبس",
          summary_en:
            "A truck with a compaction body for collecting household, commercial and recyclable waste.",
          summary_ar:
            "شاحنة بصندوق كبس لجمع المخلفات المنزلية والتجارية والقابلة لإعادة التدوير، وتُعرف في السوق أيضًا بـ«مكبس قمامة».",
          whatItIs_en:
            "A refuse collection vehicle carries a body that compacts waste as it is loaded, so more can be collected per trip. Bodies are loaded from the rear, the side or the front, and split bodies allow separated collection.",
          whatItIs_ar:
            "تحمل مركبة جمع المخلفات صندوقًا يكبس المخلفات أثناء تحميلها، فتزيد الكمية التي يمكن جمعها في كل رحلة. ويتم التحميل من الخلف أو الجانب أو الأمام، وتتيح الصناديق المقسمة الجمع المنفصل للمخلفات.",
          usedFor_en:
            "Collecting waste along municipal and commercial routes and taking it to transfer or disposal sites.",
          usedFor_ar:
            "جمع المخلفات على مسارات الخدمة البلدية والتجارية ونقلها إلى محطات الترحيل أو مواقع التخلص.",
          applications_en: [
            "Household waste collection",
            "Commercial and bulk waste collection",
            "Separated recycling collection",
            "Runs to transfer stations",
          ],
          applications_ar: [
            "جمع المخلفات المنزلية",
            "جمع المخلفات التجارية والكبيرة",
            "الجمع المنفصل للمواد القابلة لإعادة التدوير",
            "الرحلات إلى محطات الترحيل",
          ],
          industryIds: ["municipal", "public-sector-fleets"],
          selectionFactors: [
            {
              factor_en: "Loading type and bins",
              factor_ar: "طريقة التحميل والحاويات",
              detail_en:
                "Rear, side or front loading should match the bins and containers in use.",
              detail_ar:
                "يجب أن تتوافق طريقة التحميل الخلفية أو الجانبية أو الأمامية مع الحاويات المستخدمة.",
            },
            {
              factor_en: "Body capacity and routes",
              factor_ar: "سعة الصندوق والمسارات",
              detail_en:
                "Body size follows route length, waste density and collection frequency.",
              detail_ar:
                "يتبع حجم الصندوق طول المسار وكثافة المخلفات وتكرار الجمع.",
            },
            {
              factor_en: "Street access",
              factor_ar: "الوصول إلى الشوارع",
              detail_en:
                "Narrow or congested streets may call for a more compact chassis.",
              detail_ar:
                "قد تتطلب الشوارع الضيقة أو المزدحمة شاسيه أكثر إحكامًا.",
            },
            {
              factor_en: "Body building",
              factor_ar: "تجهيز الهيكل",
              detail_en:
                "Compaction bodies are built by specialised body builders, which GOLTENS can coordinate when required.",
              detail_ar:
                "تُنفَّذ صناديق الكبس لدى مُجهّزي هياكل متخصصين، ويمكن لـGOLTENS التنسيق معهم عند الحاجة.",
            },
          ],
          requestChecklist_en: [
            "Bin and container types in use",
            "Preferred loading type",
            "Routes, street conditions and waste volumes",
            "Separated collection requirement, if any",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "أنواع الحاويات المستخدمة",
            "طريقة التحميل المفضلة",
            "المسارات وحالة الشوارع وكميات المخلفات",
            "متطلبات الجمع المنفصل إن وُجدت",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: [
            "street-sweeping-vehicles",
            "sewer-cleaning-vehicles",
          ],
          image: null,
          review: pending("loading types, split bodies; AR synonym مكبس قمامة"),
        },
        {
          id: "ambulances",
          linkedProductId: "ambulances",
          name_en: "Ambulances",
          name_ar: "سيارة إسعاف",
          summary_en:
            "A van-based vehicle with a patient compartment fitted to the operating authority's specification.",
          summary_ar:
            "مركبة مبنية على فان بمقصورة مريض مجهزة وفق مواصفات الجهة المشغّلة.",
          whatItIs_en:
            "An ambulance is built on a van or cutaway chassis with a patient compartment. The compartment layout and medical equipment follow the specification of the operating authority and are fitted by a specialised converter.",
          whatItIs_ar:
            "تُبنى سيارة الإسعاف على شاسيه فان أو شاسيه مكشوف الخلف مع مقصورة للمريض. ويتبع تصميم المقصورة والمعدات الطبية مواصفات الجهة المشغّلة، ويقوم بتجهيزها مُجهّز متخصص.",
          usedFor_en:
            "Transporting patients in emergencies and between healthcare facilities.",
          usedFor_ar: "نقل المرضى في حالات الطوارئ وبين المنشآت الصحية.",
          applications_en: [
            "Emergency medical response",
            "Transfers between facilities",
            "Remote and rural medical service",
            "Medical standby at events and industrial sites",
          ],
          applications_ar: [
            "الاستجابة الطبية للطوارئ",
            "النقل بين المنشآت الصحية",
            "الخدمة الطبية في المناطق النائية والريفية",
            "التغطية الطبية في الفعاليات والمواقع الصناعية",
          ],
          industryIds: [
            "healthcare-emergency",
            "public-sector-fleets",
            "industrial",
          ],
          selectionFactors: [
            {
              factor_en: "Authority specification",
              factor_ar: "مواصفات الجهة المشغّلة",
              detail_en:
                "The compartment layout and medical equipment are defined by the operating authority's specification.",
              detail_ar:
                "تحدد مواصفات الجهة المشغّلة تصميم المقصورة والمعدات الطبية.",
            },
            {
              factor_en: "Base chassis",
              factor_ar: "الشاسيه الأساسي",
              detail_en:
                "A van or cutaway chassis is chosen for the compartment size and the equipment weight.",
              detail_ar:
                "يُختار شاسيه الفان أو الشاسيه مكشوف الخلف وفق حجم المقصورة ووزن المعدات.",
            },
            {
              factor_en: "Drive and terrain",
              factor_ar: "نظام الدفع وطبيعة الطرق",
              detail_en:
                "Four-wheel drive may be needed for rough or remote service areas.",
              detail_ar:
                "قد يلزم الدفع الرباعي لمناطق الخدمة الوعرة أو النائية.",
            },
            {
              factor_en: "Fit-out",
              factor_ar: "التجهيز",
              detail_en:
                "Medical fit-out is carried out by a specialised converter, which GOLTENS can coordinate when required.",
              detail_ar:
                "يتم التجهيز الطبي لدى مُجهّز متخصص، ويمكن لـGOLTENS التنسيق معه عند الحاجة.",
            },
          ],
          requestChecklist_en: [
            "The operating authority's specification",
            "Required medical equipment and layout",
            "Service area and road conditions",
            "Drive requirement",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "مواصفات الجهة المشغّلة",
            "المعدات الطبية المطلوبة وتصميم المقصورة",
            "منطقة الخدمة وحالة الطرق",
            "متطلبات نظام الدفع",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["delivery-cargo-vans"],
          image: null,
          review: pending(
            "chassis/fit-out wording; no approval or certification claims",
          ),
        },
        {
          id: "fuel-tankers",
          linkedProductId: "fuel-tankers",
          name_en: "Fuel Tankers",
          name_ar: "سيارة صهريج وقود",
          summary_en:
            "A truck with a mounted fuel tank for distributing fuel and refuelling sites.",
          summary_ar:
            "شاحنة بخزان وقود مركّب لتوزيع الوقود وتموين المواقع، وتُعرف في السوق أيضًا بـ«فنطاس وقود».",
          whatItIs_en:
            "A fuel tanker is a rigid truck with a fuel tank mounted on its chassis — unlike a tanker trailer, which is towed. The tank is often divided into compartments, with a pump and meter for accountable delivery.",
          whatItIs_ar:
            "سيارة صهريج الوقود شاحنة صلبة مركّب على شاسيهها خزان وقود، بخلاف مقطورة الصهريج التي تُسحب برأس جرّ. وكثيرًا ما يُقسَّم الخزان إلى حجرات، مع مضخة وعدّاد لتوثيق الكميات المسلّمة.",
          usedFor_en:
            "Delivering fuel to stations, sites, generators and depots, including locations a large tanker cannot reach.",
          usedFor_ar:
            "توصيل الوقود إلى المحطات والمواقع والمولدات والمستودعات، بما فيها الأماكن التي لا تصل إليها المقطورات الكبيرة.",
          applications_en: [
            "Delivery to fuel stations",
            "Refuelling generators and site equipment",
            "Supply to remote and off-grid locations",
            "Fleet depot refuelling",
          ],
          applications_ar: [
            "التوصيل إلى محطات الوقود",
            "تموين المولدات ومعدات المواقع",
            "الإمداد للمواقع النائية وغير المتصلة بالشبكة",
            "تموين مستودعات الأساطيل",
          ],
          industryIds: ["oil-gas-fuel", "construction", "industrial"],
          selectionFactors: [
            {
              factor_en: "Fuel grades and compartments",
              factor_ar: "أنواع الوقود والحجرات",
              detail_en:
                "The number of compartments follows the fuel grades delivered on each run.",
              detail_ar:
                "يتبع عدد الحجرات أنواع الوقود التي يتم توصيلها في كل رحلة.",
            },
            {
              factor_en: "Pump and metering",
              factor_ar: "المضخة والعدّاد",
              detail_en:
                "Pump-assisted, metered discharge supports accountable delivery to customers.",
              detail_ar:
                "يساعد التفريغ بالمضخة مع العدّاد على توثيق الكميات المسلّمة للعملاء.",
            },
            {
              factor_en: "Chassis size and access",
              factor_ar: "حجم الشاسيه والوصول",
              detail_en:
                "A rigid tanker reaches sites with limited access; match its size to the delivery points.",
              detail_ar:
                "تصل الشاحنة الصهريج الصلبة إلى المواقع محدودة الوصول، ويُختار حجمها وفق نقاط التسليم.",
            },
            {
              factor_en: "Applicable transport rules",
              factor_ar: "اشتراطات النقل المعمول بها",
              detail_en:
                "Fuel transport is subject to specific rules; confirm those that apply to your operation.",
              detail_ar:
                "يخضع نقل الوقود لاشتراطات خاصة، ويجب التأكد من الاشتراطات التي تنطبق على عملياتكم.",
            },
          ],
          requestChecklist_en: [
            "Fuel grades to be carried",
            "Required capacity and compartments",
            "Pump and metering requirement",
            "Delivery points and access conditions",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "أنواع الوقود المطلوب نقلها",
            "السعة المطلوبة والحجرات",
            "متطلبات المضخة والعدّاد",
            "نقاط التسليم وظروف الوصول",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["tanker-trailers", "water-tankers"],
          image: null,
          review: pending(
            "rigid vs trailer distinction, metering, fuel-transport wording; AR synonym فنطاس وقود",
          ),
        },
        {
          id: "water-tankers",
          linkedProductId: "water-tankers",
          name_en: "Water Tankers",
          name_ar: "سيارة صهريج مياه",
          summary_en:
            "A truck with a mounted water tank for site supply, dust suppression and water distribution.",
          summary_ar:
            "شاحنة بخزان مياه مركّب لإمداد المواقع ورش الأتربة وتوزيع المياه، وتُعرف في السوق أيضًا بـ«فنطاس مياه».",
          whatItIs_en:
            "A water tanker is a truck with a water tank and a discharge system — gravity, pump or spray bars. Tanks intended for drinking water need a suitable lining.",
          whatItIs_ar:
            "سيارة صهريج المياه شاحنة بخزان مياه ونظام تفريغ بالجاذبية أو بالمضخة أو بقضبان الرش. وتحتاج الخزانات المخصصة لمياه الشرب إلى بطانة مناسبة.",
          usedFor_en:
            "Supplying water to sites and communities, and spraying roads and sites to control dust.",
          usedFor_ar:
            "إمداد المواقع والتجمعات بالمياه، ورش الطرق والمواقع للحد من الأتربة.",
          applications_en: [
            "Construction site water supply",
            "Dust suppression on roads and sites",
            "Municipal water distribution",
            "Supporting firefighting water supply",
            "Agricultural water supply",
          ],
          applications_ar: [
            "إمداد مواقع الإنشاء بالمياه",
            "رش الطرق والمواقع للحد من الأتربة",
            "توزيع المياه في الخدمات البلدية",
            "دعم إمداد المياه لأعمال الإطفاء",
            "إمداد المياه للأعمال الزراعية",
          ],
          industryIds: [
            "construction",
            "municipal",
            "agriculture",
            "utilities",
          ],
          selectionFactors: [
            {
              factor_en: "Water use",
              factor_ar: "استخدام المياه",
              detail_en:
                "Drinking water needs a suitable tank lining; construction water does not.",
              detail_ar:
                "تحتاج مياه الشرب إلى بطانة خزان مناسبة، بخلاف مياه أعمال الإنشاء.",
            },
            {
              factor_en: "Discharge and spraying",
              factor_ar: "التفريغ والرش",
              detail_en:
                "Choose gravity, pump or spray-bar discharge according to the task.",
              detail_ar:
                "يُختار التفريغ بالجاذبية أو بالمضخة أو بقضبان الرش حسب المهمة.",
            },
            {
              factor_en: "Capacity and chassis",
              factor_ar: "السعة والشاسيه",
              detail_en:
                "Tank capacity sets the chassis size; balance it against site access.",
              detail_ar:
                "تحدد سعة الخزان حجم الشاسيه، ويجب الموازنة بينها وبين إمكانية الوصول إلى المواقع.",
            },
          ],
          requestChecklist_en: [
            "Intended water use",
            "Required capacity",
            "Discharge and spraying requirement",
            "Site and road conditions",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "الاستخدام المطلوب للمياه",
            "السعة المطلوبة",
            "متطلبات التفريغ والرش",
            "ظروف المواقع والطرق",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["fuel-tankers", "street-sweeping-vehicles"],
          image: null,
          review: pending("lining/discharge wording; AR synonym فنطاس مياه"),
        },
        {
          id: "street-sweeping-vehicles",
          linkedProductId: "street-sweeping-vehicles",
          name_en: "Street Sweeping Vehicles",
          name_ar: "مركبة كنس شوارع",
          summary_en:
            "A vehicle with brooms and suction for cleaning streets, roads and paved areas.",
          summary_ar:
            "مركبة مزوّدة بفُرش وشفط لتنظيف الشوارع والطرق والمساحات المرصوفة، وتُعرف في السوق أيضًا بـ«مكنسة شوارع آلية».",
          whatItIs_en:
            "A street sweeper collects debris with mechanical brooms, vacuum suction or a regenerative-air system into an onboard hopper, using water spray to keep dust down.",
          whatItIs_ar:
            "تجمع مركبة كنس الشوارع المخلفات بالفُرش الميكانيكية أو بالشفط أو بنظام الهواء المُعاد تدويره داخل خزان مخلفات على متنها، مع رش المياه للحد من الأتربة.",
          usedFor_en:
            "Keeping streets, highways and paved areas clean on a regular schedule.",
          usedFor_ar:
            "الحفاظ على نظافة الشوارع والطرق السريعة والمساحات المرصوفة بشكل دوري.",
          applications_en: [
            "Municipal street cleaning",
            "Highway and airport pavement sweeping",
            "Construction site debris clearance",
            "Seasonal leaf and debris collection",
          ],
          applications_ar: [
            "تنظيف الشوارع البلدية",
            "كنس الطرق السريعة وأرصفة المطارات",
            "إزالة مخلفات مواقع الإنشاء",
            "جمع أوراق الشجر والمخلفات الموسمية",
          ],
          industryIds: ["municipal", "roads-airports", "construction"],
          selectionFactors: [
            {
              factor_en: "Sweeping system",
              factor_ar: "نظام الكنس",
              detail_en:
                "Mechanical, vacuum or regenerative-air systems suit different debris and surfaces.",
              detail_ar:
                "تناسب الأنظمة الميكانيكية أو الشفط أو الهواء المُعاد تدويره أنواعًا مختلفة من المخلفات والأسطح.",
            },
            {
              factor_en: "Vehicle size",
              factor_ar: "حجم المركبة",
              detail_en:
                "Compact sweepers suit narrow streets; larger units suit highways and wide areas.",
              detail_ar:
                "تناسب المركبات المدمجة الشوارع الضيقة، والأكبر حجمًا الطرق السريعة والمساحات الواسعة.",
            },
            {
              factor_en: "Dust suppression",
              factor_ar: "الحد من الأتربة",
              detail_en:
                "Water spray capacity affects how long the sweeper can work between refills.",
              detail_ar:
                "تؤثر سعة رش المياه في مدة عمل المركبة بين مرات إعادة التعبئة.",
            },
          ],
          requestChecklist_en: [
            "Types of roads and surfaces to be cleaned",
            "Typical debris",
            "Street widths and access constraints",
            "Daily working pattern",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "أنواع الطرق والأسطح المطلوب تنظيفها",
            "نوع المخلفات المعتادة",
            "عروض الشوارع وقيود الوصول",
            "نمط العمل اليومي",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["refuse-collection-vehicles", "water-tankers"],
          image: null,
          review: pending(
            "sweeping-system wording; AR synonym مكنسة شوارع آلية",
          ),
        },
        {
          id: "sewer-cleaning-vehicles",
          linkedProductId: "sewer-cleaning-vehicles",
          name_en: "Sewer Cleaning & Jetting Vehicles",
          name_ar: "سيارة شفط وتسليك مجاري",
          summary_en:
            "A combination vehicle that jets and vacuums sewer and drainage lines.",
          summary_ar:
            "مركبة تجمع بين التسليك بضغط المياه والشفط لتنظيف خطوط الصرف والمصارف، وتُعرف في السوق أيضًا بـ«عربية كسح».",
          whatItIs_en:
            "A sewer cleaning vehicle combines a high-pressure water jetting system with a vacuum system and tanks for clean water and recovered waste. Jetting clears blockages; vacuum removes the debris.",
          whatItIs_ar:
            "تجمع سيارة شفط وتسليك المجاري بين نظام تسليك بضغط المياه العالي ونظام شفط، مع خزانين للمياه النظيفة وللمخلفات المسحوبة. يزيل التسليك الانسدادات، ويرفع الشفط المخلفات.",
          usedFor_en:
            "Clearing and maintaining sewer, storm-water and drainage networks.",
          usedFor_ar: "تسليك وصيانة شبكات الصرف الصحي وتصريف مياه الأمطار.",
          applications_en: [
            "Sewer line jetting and cleaning",
            "Storm drain and culvert maintenance",
            "Manhole and grease trap cleaning",
            "Emergency blockage clearance",
          ],
          applications_ar: [
            "تسليك وتنظيف خطوط الصرف الصحي",
            "صيانة مصارف الأمطار والعبّارات",
            "تنظيف غرف التفتيش ومصائد الشحوم",
            "إزالة الانسدادات الطارئة",
          ],
          industryIds: ["utilities", "municipal", "industrial"],
          selectionFactors: [
            {
              factor_en: "Network and blockage type",
              factor_ar: "طبيعة الشبكة والانسدادات",
              detail_en:
                "Pipe diameters and typical blockages determine the jetting and vacuum performance needed.",
              detail_ar:
                "تحدد أقطار المواسير وطبيعة الانسدادات المعتادة أداء التسليك والشفط المطلوب.",
            },
            {
              factor_en: "Tank sizes",
              factor_ar: "سعة الخزانات",
              detail_en:
                "Water and debris tank sizes set how much work can be done between trips.",
              detail_ar:
                "تحدد سعة خزاني المياه والمخلفات حجم العمل الممكن بين الرحلات.",
            },
            {
              factor_en: "Hose reach",
              factor_ar: "طول الخراطيم",
              detail_en:
                "Hose length should cover the distances between access points on your network.",
              detail_ar:
                "يجب أن يغطي طول الخراطيم المسافات بين نقاط الدخول في شبكتكم.",
            },
            {
              factor_en: "Body building",
              factor_ar: "تجهيز الهيكل",
              detail_en:
                "Jetting and vacuum bodies are built by specialised body builders, which GOLTENS can coordinate when required.",
              detail_ar:
                "تُنفَّذ هياكل التسليك والشفط لدى مُجهّزي هياكل متخصصين، ويمكن لـGOLTENS التنسيق معهم عند الحاجة.",
            },
          ],
          requestChecklist_en: [
            "Network type and typical pipe sizes",
            "Typical blockages and debris",
            "Distances between access points",
            "Working pattern",
            CHECKLIST_CLOSING_EN,
          ],
          requestChecklist_ar: [
            "نوع الشبكة وأقطار المواسير المعتادة",
            "الانسدادات والمخلفات المعتادة",
            "المسافات بين نقاط الدخول",
            "نمط العمل",
            CHECKLIST_CLOSING_AR,
          ],
          relatedEquipmentIds: ["refuse-collection-vehicles", "water-tankers"],
          image: null,
          review: pending("jetting/vacuum wording; AR synonym عربية كسح"),
        },
      ],
    },
  ],

  request: {
    title_en: "What to Include in Your Fleet Quotation Request",
    title_ar: "ما الذي يجب إرساله مع طلب عرض سعر الأسطول",
    intro_en:
      "A complete request lets us match the right vehicles and quote accurately. Include as much of the following as you can — each vehicle guide above lists the additional details specific to that type.",
    intro_ar:
      "الطلب المكتمل يساعدنا على اختيار المركبات المناسبة وتقديم عرض سعر دقيق. أرسلوا أكبر قدر ممكن من البيانات التالية، علمًا بأن كل دليل مركبة أعلاه يوضح البيانات الإضافية الخاصة بها.",
    checklist_en: [
      "Vehicle type and required quantity",
      "Required body or superstructure",
      "Payload, capacity or volume requirement",
      "Drivetrain requirement",
      "Operating environment and duty cycle",
      "Road conditions: urban, highway, off-road or desert use",
      "Tender or authority requirements supplied by you",
      "Compatibility with your existing fleet",
      "Delivery location",
      "Required delivery timing",
      "Tender specifications or technical documents, where applicable",
    ],
    checklist_ar: [
      "نوع المركبة والعدد المطلوب",
      "الهيكل أو البنية العلوية المطلوبة",
      "متطلبات الحمولة أو السعة أو الحجم",
      "متطلبات نظام الدفع",
      "بيئة التشغيل وطبيعته",
      "طبيعة الطرق: داخل المدن أو طرق سريعة أو خارج الطرق الممهدة أو صحراوية",
      "اشتراطات المناقصة أو الجهة التي تحددونها",
      "التوافق مع أسطولكم الحالي",
      "مكان التسليم",
      "التوقيت المطلوب للتسليم",
      "مواصفات المناقصة أو المستندات الفنية إن وُجدت",
    ],
    processTitle_en: "How a fleet request is handled",
    processTitle_ar: "كيف نتعامل مع طلب الأسطول",
    steps: [
      {
        title_en: "Share your requirement",
        title_ar: "أرسلوا متطلباتكم",
        description_en:
          "Send the vehicle types, quantities and your specification through the quotation form on this page.",
        description_ar:
          "أرسلوا أنواع المركبات والكميات ومواصفاتكم من خلال نموذج طلب عرض السعر في هذه الصفحة.",
      },
      {
        title_en: "Review configuration",
        title_ar: "مراجعة التكوين",
        description_en:
          "Our team reviews the configuration with you, including any specialised body or fit-out.",
        description_ar:
          "يراجع فريقنا التكوين معكم، بما في ذلك أي هيكل أو تجهيز متخصص.",
      },
      {
        title_en: "Receive quotation",
        title_ar: "استلام عرض السعر",
        description_en:
          "You receive a quotation stating the configuration, condition, availability and lead time.",
        description_ar:
          "تستلمون عرض سعر يوضح التكوين والحالة والتوافر ومدة التوريد.",
      },
      {
        title_en: "Confirm supply and delivery details",
        title_ar: "تأكيد تفاصيل التوريد والتسليم",
        description_en:
          "Once the quotation is accepted, supply and delivery details are confirmed with you.",
        description_ar:
          "بعد قبول عرض السعر، يتم تأكيد تفاصيل التوريد والتسليم معكم.",
      },
    ],
  },

  quote: {
    title_en: "Request a Quote",
    title_ar: "اطلب عرض سعر",
    subtitle_en:
      "Send your vehicle or fleet requirement and our team will respond with a quotation.",
    subtitle_ar:
      "أرسلوا متطلبات المركبات أو الأسطول وسيرد عليكم فريقنا بعرض سعر.",
  },
};
