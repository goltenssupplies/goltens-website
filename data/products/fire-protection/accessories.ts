import type { Product } from "@/data/products/types";

/** Fire Protection → Accessories category. */
export const fireProtectionAccessories: Product[] = [
  {
    id: "hydrants",
    slug: "hydrants",
    name_en: "Hydrants",
    name_ar: "حنفيات الحريق",
    shortDescription_en:
      "Above-ground and underground fire hydrants for site fire water networks.",
    shortDescription_ar:
      "حنفيات حريق أرضية وتحت أرضية لشبكات مياه الحريق بالموقع.",
    longDescription_en:
      "Fire hydrants provide a fixed water supply point across a site's fire water network for both fire brigade use and hose reel connections. We source above-ground and underground types matched to your site layout and connection standard.",
    longDescription_ar:
      "توفر حنفيات الحريق نقطة تزويد ثابتة بالمياه ضمن شبكة مياه الحريق بالموقع، لاستخدام رجال الإطفاء وتوصيلات بكرات الخراطيم. نقوم بتوريد الأنواع الأرضية وتحت الأرضية مطابقة لمخطط موقعكم ومعيار التوصيل المعتمد.",
    sectorId: "fire-protection",
    categoryId: "accessories",
    features_en: [
      "Above-ground (pillar) and underground (flush) types",
      "Standard hose/coupling connections matched to your brigade's equipment",
      "Frost-resistant and freeze-protected variants available",
    ],
    features_ar: [
      "أنواع أرضية (عمودية) وتحت أرضية (مطمورة)",
      "توصيلات خراطيم/وصلات قياسية مطابقة لمعدات فرق الإطفاء لديكم",
      "إصدارات مقاومة للصقيع ومحمية من التجمد متاحة",
    ],
    applications_en: [
      "Site-wide fire water network access points",
      "Fire brigade pumping appliance connection",
      "Hose reel and portable pump supply",
      "Industrial and municipal fire water infrastructure",
    ],
    applications_ar: [
      "نقاط وصول لشبكة مياه الحريق على مستوى الموقع",
      "توصيل معدات ضخ فرق الإطفاء",
      "تغذية بكرات الخراطيم والمضخات المحمولة",
      "البنية التحتية لمياه الحريق الصناعية والبلدية",
    ],
    specifications: [
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Outlet configuration",
        label_ar: "تكوين المخرج",
        value:
          'Single or dual outlet, typically 2.5" / 65mm instant or screwed coupling',
      },
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Type",
        label_ar: "النوع",
        value: "Pillar (above-ground) / flush (underground) hydrant",
      },
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Working pressure",
        label_ar: "ضغط التشغيل",
        value: "Typically rated to 16 bar (232 psi)",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified to BS 750 / EN 14384 or local fire authority standard",
      },
    ],
    relatedProductSlugs: ["landing-valves", "fire-hoses"],
    relatedBrandSlugs: ["naffco", "victaulic"],
    catalogues: [
      {
        id: "hydrants-datasheet",
        title_en: "Hydrants Datasheet",
        title_ar: "نشرة بيانات حنفيات الحريق",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/hydrants.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "landing-valves",
    slug: "landing-valves",
    name_en: "Landing Valves",
    name_ar: "صمامات الإنزال (لاندنج)",
    shortDescription_en:
      "Landing valves for wet and dry riser fire-fighting connections.",
    shortDescription_ar:
      "صمامات إنزال لتوصيلات الأعمدة الصاعدة الرطبة والجافة لمكافحة الحريق.",
    longDescription_en:
      "Landing valves provide the fire brigade connection point on each floor of a wet or dry riser system, allowing hoses to be connected directly to the building's fire water supply. We source them matched to your riser type and floor count.",
    longDescription_ar:
      "توفر صمامات الإنزال نقطة توصيل رجال الإطفاء في كل طابق من نظام العمود الصاعد الرطب أو الجاف، مما يتيح توصيل الخراطيم مباشرة بإمداد مياه الحريق بالمبنى. نقوم بتوريدها مطابقة لنوع العمود الصاعد وعدد الطوابق لديكم.",
    sectorId: "fire-protection",
    categoryId: "accessories",
    features_en: [
      "Wet riser (pressure-regulating) and dry riser (non-regulating) types",
      "Instantaneous coupling matched to local brigade standard",
      "Corrosion-resistant bronze or stainless construction",
    ],
    features_ar: [
      "أنواع للأعمدة الرطبة (منظمة للضغط) والجافة (غير منظمة)",
      "وصلة سريعة مطابقة لمعيار فرق الإطفاء المحلي",
      "تصنيع من البرونز أو الفولاذ المقاوم للصدأ المقاوم للتآكل",
    ],
    applications_en: [
      "Wet riser systems in high-rise buildings",
      "Dry riser systems for fire brigade use",
      "Floor-by-floor fire brigade hose connection points",
      "Stairwell fire-fighting shafts",
    ],
    applications_ar: [
      "أنظمة الأعمدة الصاعدة الرطبة في المباني الشاهقة",
      "أنظمة الأعمدة الصاعدة الجافة لاستخدام فرق الإطفاء",
      "نقاط توصيل خراطيم فرق الإطفاء في كل طابق",
      "أعمدة السلالم المخصصة لمكافحة الحريق",
    ],
    specifications: [
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Size",
        label_ar: "المقاس",
        value: 'Typically 65mm (2.5") outlet',
      },
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Type",
        label_ar: "النوع",
        value: "Wet riser (pressure-regulating) / dry riser",
      },
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Working pressure",
        label_ar: "ضغط التشغيل",
        value: "Typically rated to 16 bar (232 psi)",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified to BS 5041 or local fire authority standard",
      },
    ],
    relatedProductSlugs: ["hydrants", "fire-hoses", "alarm-valves"],
    relatedBrandSlugs: ["naffco", "victaulic"],
    catalogues: [
      {
        id: "landing-valves-datasheet",
        title_en: "Landing Valves Datasheet",
        title_ar: "نشرة بيانات صمامات الإنزال",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "fire-hose-reels",
    slug: "fire-hose-reels",
    name_en: "Fire Hose Reels",
    name_ar: "بكرات خراطيم الحريق",
    shortDescription_en:
      "Fixed hose reels for first-response fire fighting inside buildings.",
    shortDescription_ar:
      "بكرات خراطيم ثابتة للاستجابة الأولى لمكافحة الحريق داخل المباني.",
    longDescription_en:
      "Hose reels give building occupants a fixed, ready-to-use water supply for first-response fire fighting before the fire brigade arrives. We source reels matched to your cabinet layout and hose length requirement.",
    longDescription_ar:
      "توفر بكرات الخراطيم لشاغلي المبنى إمدادًا ثابتًا وجاهزًا للمياه للاستجابة الأولى لمكافحة الحريق قبل وصول رجال الإطفاء. نقوم بتوريد البكرات مطابقة لتخطيط الخزانة لديكم ومتطلبات طول الخرطوم.",
    sectorId: "fire-protection",
    categoryId: "accessories",
    features_en: [
      "Fixed or swinging arm mounting",
      "Standard hose lengths matched to your cabinet layout",
      "Automatic or manual stop valve options",
    ],
    features_ar: [
      "تركيب ثابت أو بذراع متأرجح",
      "أطوال خراطيم قياسية مطابقة لتخطيط الخزانة لديكم",
      "خيارات صمام إيقاف تلقائي أو يدوي",
    ],
    applications_en: [
      "First-response fire fighting by building occupants",
      "Office, retail, and hospitality interiors",
      "Industrial plant and warehouse floor coverage",
      "Complementing portable extinguishers in fire cabinets",
    ],
    applications_ar: [
      "الاستجابة الأولى لمكافحة الحريق من قِبل شاغلي المبنى",
      "المكاتب والمحلات التجارية والمنشآت الفندقية",
      "تغطية أرضيات المصانع والمستودعات الصناعية",
      "تكامل مع الطفايات المحمولة داخل خزائن الحريق",
    ],
    specifications: [
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Hose length",
        label_ar: "طول الخرطوم",
        value: "Typically 25 – 36 m",
      },
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Hose diameter",
        label_ar: "قطر الخرطوم",
        value: 'Typically 19 – 25mm (¾" – 1")',
      },
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Working pressure",
        label_ar: "ضغط التشغيل",
        value: "Typically rated to 8 – 12 bar",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically specified to BS EN 671",
      },
    ],
    relatedProductSlugs: ["fire-cabinets", "fire-hoses"],
    relatedBrandSlugs: ["naffco"],
    catalogues: [
      {
        id: "fire-hose-reels-datasheet",
        title_en: "Fire Hose Reels Datasheet",
        title_ar: "نشرة بيانات بكرات خراطيم الحريق",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/fire-hose-reels.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "fire-hoses",
    slug: "fire-hoses",
    name_en: "Fire Hoses",
    name_ar: "خراطيم الحريق",
    shortDescription_en:
      "Fire-fighting hoses sourced to your required length, diameter, and pressure rating.",
    shortDescription_ar:
      "خراطيم مكافحة حريق يتم توريدها وفق الطول والقطر وتصنيف الضغط المطلوب.",
    longDescription_en:
      "Fire hoses connect hydrants, landing valves, and hose reels to the point of use. We source them to your required length, diameter, and pressure rating, matched to your fire brigade or reel system's coupling standard.",
    longDescription_ar:
      "تربط خراطيم الحريق الحنفيات وصمامات الإنزال وبكرات الخراطيم بنقطة الاستخدام. نقوم بتوريدها وفق الطول والقطر وتصنيف الضغط المطلوب، ومطابقة لمعيار التوصيل الخاص بنظام رجال الإطفاء أو البكرات لديكم.",
    sectorId: "fire-protection",
    categoryId: "accessories",
    features_en: [
      "Woven jacket with rubber or PVC lining",
      "Standard lengths (typically 15, 20, or 30m) coupled to your fitting standard",
      "Layflat construction for compact storage",
    ],
    features_ar: [
      "نسيج منسوج ببطانة مطاطية أو PVC",
      "أطوال قياسية (عادة 15 أو 20 أو 30 مترًا) بوصلات مطابقة لمعيار التوصيل لديكم",
      "تصميم مسطح للطي يسهل التخزين المدمج",
    ],
    applications_en: [
      "Connecting hydrants and landing valves to the point of use",
      "Fire brigade hose-laying operations",
      "Hose reel replacement/spare lengths",
      "Industrial and municipal fire water distribution",
    ],
    applications_ar: [
      "توصيل الحنفيات وصمامات الإنزال بنقطة الاستخدام",
      "عمليات مد الخراطيم من قِبل فرق الإطفاء",
      "أطوال بديلة/احتياطية لبكرات الخراطيم",
      "توزيع مياه الحريق الصناعي والبلدي",
    ],
    specifications: [
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Diameter",
        label_ar: "القطر",
        value: 'Typically 38 – 65mm (1.5" – 2.5")',
      },
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Length",
        label_ar: "الطول",
        value: "Typically 15, 20, or 30m sections",
      },
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Working pressure",
        label_ar: "ضغط التشغيل",
        value: "Typically 8 – 16 bar, depending on class",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically specified to BS EN 14540 / ISO 14557",
      },
    ],
    relatedProductSlugs: ["fire-hose-reels", "hydrants", "landing-valves"],
    relatedBrandSlugs: ["naffco"],
    catalogues: [
      {
        id: "fire-hoses-datasheet",
        title_en: "Fire Hoses Datasheet",
        title_ar: "نشرة بيانات خراطيم الحريق",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/fire-hoses.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "fire-extinguishers",
    slug: "fire-extinguishers",
    name_en: "Fire Extinguishers",
    name_ar: "طفايات الحريق",
    shortDescription_en:
      "Portable extinguishers for every facility type and fire class.",
    shortDescription_ar: "طفايات حريق محمولة لجميع أنواع المنشآت وفئات الحريق.",
    longDescription_en:
      "Portable fire extinguishers are the most immediate first-response tool available to occupants. We source extinguishers across fire classes — water, foam, CO2, dry powder, and wet chemical — matched to the hazards present in your facility.",
    longDescription_ar:
      "تُعد طفايات الحريق المحمولة أسرع أداة استجابة أولى متاحة لشاغلي المنشأة. نقوم بتوريد طفايات عبر فئات الحريق المختلفة — مياه، رغوة، ثاني أكسيد الكربون، مسحوق جاف، وكيميائي رطب — مطابقة للمخاطر الموجودة في منشأتكم.",
    sectorId: "fire-protection",
    categoryId: "accessories",
    features_en: [
      "Water, foam, CO2, dry powder, and wet chemical types",
      "Wall-bracket, stand, or cabinet-mounted options",
      "Sized to occupancy and fire class hazard rating",
    ],
    features_ar: [
      "أنواع مياه ورغوة وثاني أكسيد الكربون ومسحوق جاف وكيميائي رطب",
      "خيارات تركيب بحامل جداري أو قاعدة أو داخل خزانة",
      "أحجام متوافقة مع الإشغال وتصنيف خطورة فئة الحريق",
    ],
    applications_en: [
      "First-response fire fighting by occupants",
      "Offices, kitchens, workshops, and plant rooms",
      "Vehicles and marine vessels",
      "Mandatory life-safety equipment for occupancy certificates",
    ],
    applications_ar: [
      "الاستجابة الأولى لمكافحة الحريق من قِبل الشاغلين",
      "المكاتب والمطابخ وورش العمل وغرف المعدات",
      "المركبات والسفن البحرية",
      "معدات سلامة إلزامية لشهادات الإشغال",
    ],
    specifications: [
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Capacity range",
        label_ar: "نطاق السعة",
        value: "Typically 1 – 9 kg (powder/CO2) or 2 – 9 L (water/foam)",
      },
      {
        group_en: "Coverage",
        group_ar: "التغطية",
        label_en: "Fire class rating",
        label_ar: "تصنيف فئة الحريق",
        value: "Class A, B, C, and electrical, depending on agent type",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically manufactured and tested to EN 3 / UL 711",
      },
    ],
    relatedProductSlugs: ["fire-cabinets"],
    relatedBrandSlugs: ["kidde", "naffco"],
    catalogues: [
      {
        id: "fire-extinguishers-datasheet",
        title_en: "Fire Extinguishers Datasheet",
        title_ar: "نشرة بيانات طفايات الحريق",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/fire-extinguishers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "emergency-lighting",
    slug: "emergency-lighting",
    name_en: "Emergency Lighting",
    name_ar: "إضاءة الطوارئ",
    shortDescription_en:
      "Emergency and exit lighting for safe evacuation during a power outage.",
    shortDescription_ar:
      "إضاءة طوارئ ومخارج لإخلاء آمن عند انقطاع التيار الكهربائي.",
    longDescription_en:
      "Emergency lighting activates automatically on power loss, keeping escape routes visible during evacuation. We source fittings matched to your building's escape route layout and required duration.",
    longDescription_ar:
      "تعمل إضاءة الطوارئ تلقائيًا عند انقطاع التيار الكهربائي، مما يحافظ على وضوح مسارات الهروب أثناء الإخلاء. نقوم بتوريد الوحدات مطابقة لمخطط مسارات الهروب في مبناكم والمدة المطلوبة.",
    sectorId: "fire-protection",
    categoryId: "accessories",
    features_en: [
      "Maintained and non-maintained operation modes",
      "Self-contained battery backup, typically 1–3 hour duration",
      "LED fittings for low power draw and long lamp life",
    ],
    features_ar: [
      "أوضاع تشغيل دائمة وغير دائمة",
      "بطارية احتياطية ذاتية الاحتواء، بمدة تتراوح عادة بين 1 و3 ساعات",
      "وحدات LED لاستهلاك طاقة منخفض وعمر مصباح طويل",
    ],
    applications_en: [
      "Escape route and stairwell illumination during power loss",
      "Open-area (anti-panic) lighting in large floor plates",
      "High-risk task area lighting for safe shutdown",
      "Mandatory life-safety fit-out in commercial and public buildings",
    ],
    applications_ar: [
      "إضاءة مسارات الهروب والسلالم عند انقطاع التيار",
      "إضاءة المساحات المفتوحة (لمنع الذعر) في الطوابق الكبيرة",
      "إضاءة مناطق المهام عالية الخطورة لإتمام الإغلاق الآمن",
      "تجهيزات سلامة إلزامية في المباني التجارية والعامة",
    ],
    specifications: [
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Battery duration",
        label_ar: "مدة البطارية",
        value: "Typically 1 – 3 hours on backup, per code requirement",
      },
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Fitting type",
        label_ar: "نوع الوحدة",
        value: "Bulkhead, downlight, or exit-sign combination units",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically specified to BS 5266 / EN 1838",
      },
    ],
    relatedProductSlugs: ["exit-signs"],
    catalogues: [
      {
        id: "emergency-lighting-datasheet",
        title_en: "Emergency Lighting Datasheet",
        title_ar: "نشرة بيانات إضاءة الطوارئ",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "exit-signs",
    slug: "exit-signs",
    name_en: "Exit Signs",
    name_ar: "لافتات الخروج",
    shortDescription_en:
      "Illuminated exit signage for clear evacuation route guidance.",
    shortDescription_ar: "لافتات خروج مضيئة لتوجيه واضح لمسارات الإخلاء.",
    longDescription_en:
      "Illuminated exit signs guide occupants toward the nearest safe exit, staying visible under emergency lighting conditions. We source signage matched to your building's evacuation plan.",
    longDescription_ar:
      "توجه لافتات الخروج المضيئة شاغلي المبنى نحو أقرب مخرج آمن، وتظل مرئية في ظروف إضاءة الطوارئ. نقوم بتوريد اللافتات مطابقة لخطة الإخلاء في مبناكم.",
    sectorId: "fire-protection",
    categoryId: "accessories",
    features_en: [
      "Maintained (always-lit) or non-maintained (activates on power loss) options",
      "LED illumination for low power draw and long service life",
      "Directional arrow and pictogram variants matched to your evacuation plan",
    ],
    features_ar: [
      "خيارات دائمة الإضاءة أو تعمل عند انقطاع التيار فقط",
      "إضاءة LED لاستهلاك طاقة منخفض وعمر تشغيلي طويل",
      "إصدارات بأسهم اتجاهية ورموز مطابقة لخطة الإخلاء لديكم",
    ],
    applications_en: [
      "Marking escape routes in offices and commercial buildings",
      "Guiding occupants in hotels, hospitals, and public venues",
      "Stairwell and final exit door identification",
      "Mandatory life-safety signage for occupancy certificates",
    ],
    applications_ar: [
      "تحديد مسارات الهروب في المكاتب والمباني التجارية",
      "توجيه الشاغلين في الفنادق والمستشفيات والمرافق العامة",
      "تحديد السلالم وأبواب الخروج النهائية",
      "لافتات سلامة إلزامية لشهادات الإشغال",
    ],
    specifications: [
      {
        group_en: "Performance",
        group_ar: "الأداء",
        label_en: "Battery duration",
        label_ar: "مدة البطارية",
        value: "Typically 1 – 3 hours on backup, per code requirement",
      },
      {
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
        label_en: "Mounting",
        label_ar: "التركيب",
        value: "Wall, ceiling-suspended, or over-door mounting",
      },
      {
        group_en: "Standards",
        group_ar: "المعايير",
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically specified to ISO 7010 pictograms / BS 5266",
      },
    ],
    relatedProductSlugs: ["emergency-lighting"],
    catalogues: [
      {
        id: "exit-signs-datasheet",
        title_en: "Exit Signs Datasheet",
        title_ar: "نشرة بيانات لافتات الخروج",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/exit-signs.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
