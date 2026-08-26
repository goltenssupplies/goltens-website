import type { Product } from "@/data/products/types";

/** Electrical & Energy Solutions → Lighting & Solar Energy category. */
export const electricalIndustrialLightingSolar: Product[] = [
  {
    id: "led-industrial-lighting",
    slug: "led-industrial-lighting",
    name_en: "LED Industrial Lighting Fixtures",
    name_ar: "تجهيزات الإنارة الصناعية LED",
    shortDescription_en:
      "LED lighting fixtures for warehouses, factories, and industrial facilities.",
    shortDescription_ar:
      "تجهيزات إنارة LED للمستودعات والمصانع والمنشآت الصناعية.",
    longDescription_en:
      "LED lighting fixtures for warehouses, factories, and industrial facilities, sourced for energy efficiency and long service life. We source fixtures matched to your facility's ceiling height and required light levels.",
    longDescription_ar:
      "تجهيزات إنارة LED للمستودعات والمصانع والمنشآت الصناعية، يتم توريدها لكفاءة استهلاك الطاقة وطول العمر التشغيلي. نقوم بتوريد التجهيزات المطابقة لارتفاع سقف منشأتكم ومستويات الإضاءة المطلوبة.",
    sectorId: "electrical-energy",
    categoryId: "industrial-lighting-solar",
    features_en: [
      "High-bay and low-bay fixture options",
      "Dimmable and motion-sensor compatible drivers",
      "Corrosion-resistant housings for harsh environments",
    ],
    features_ar: [
      "خيارات تجهيزات للأسقف المرتفعة والمنخفضة",
      "درايفرات قابلة للتعتيم ومتوافقة مع حساسات الحركة",
      "أغلفة مقاومة للتآكل للبيئات القاسية",
    ],
    specifications: [
      {
        label_en: "Luminous flux",
        label_ar: "التدفق الضوئي",
        value: "5,000lm – 60,000lm per fixture",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Luminous efficacy",
        label_ar: "الكفاءة الضوئية",
        value: "Approx. 130–160 lm/W",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Enclosure protection",
        label_ar: "درجة حماية الهيكل",
        value: "IP65 – IP66",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Color temperature",
        label_ar: "درجة حرارة اللون",
        value: "4000K – 6500K",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified/tested to IEC 60598 general requirements for luminaires",
      },
    ],
    applications_en: [
      "Warehouse and distribution center high-bay lighting",
      "Manufacturing floor lighting",
      "Cold storage facility lighting",
      "Workshop and maintenance bay lighting",
      "Logistics and loading dock lighting",
    ],
    applications_ar: [
      "إنارة الأسقف المرتفعة في المستودعات ومراكز التوزيع",
      "إنارة أرضيات التصنيع",
      "إنارة منشآت التخزين البارد",
      "إنارة الورش وصالات الصيانة",
      "إنارة مناطق الشحن والتفريغ اللوجستية",
    ],
    relatedProductSlugs: ["high-mast-lighting", "explosion-proof-lighting"],
    relatedBrandSlugs: ["signify", "osram", "eaton", "hubbell"],
    catalogues: [
      {
        id: "led-industrial-lighting-datasheet",
        title_en: "LED Industrial Lighting Datasheet",
        title_ar: "نشرة بيانات الإنارة الصناعية LED",
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
    id: "high-mast-lighting",
    slug: "high-mast-lighting",
    name_en: "High Mast Lighting",
    name_ar: "إنارة الأعمدة العالية",
    shortDescription_en:
      "High mast lighting for yards, ports, and large open outdoor areas.",
    shortDescription_ar:
      "إنارة أعمدة عالية للساحات والموانئ والمساحات الخارجية الواسعة.",
    longDescription_en:
      "High mast lighting towers for illuminating large open outdoor areas — yards, ports, parking lots, and construction sites — from a single elevated point. We source systems matched to your site area and required illuminance.",
    longDescription_ar:
      "أبراج إنارة عالية لإنارة المساحات الخارجية الواسعة — الساحات والموانئ ومواقف السيارات ومواقع الإنشاءات — من نقطة مرتفعة واحدة. نقوم بتوريد الأنظمة المطابقة لمساحة موقعكم ومستوى الإضاءة المطلوب.",
    sectorId: "electrical-energy",
    categoryId: "industrial-lighting-solar",
    features_en: [
      "Winch-down luminaire ring for ground-level maintenance access",
      "Galvanized steel mast construction",
      "Multiple luminaire mounting configurations per mast",
    ],
    features_ar: [
      "حلقة كشافات قابلة للإنزال بالونش لصيانة المعدات من مستوى الأرض",
      "هيكل عمود من الصلب المجلفن",
      "تكوينات متعددة لتركيب الكشافات على العمود الواحد",
    ],
    specifications: [
      {
        label_en: "Mast height",
        label_ar: "ارتفاع العمود",
        value: "15m – 40m",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Luminaire wattage",
        label_ar: "قدرة الكشاف",
        value: "150W – 1,000W (LED)",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Luminous flux per luminaire",
        label_ar: "التدفق الضوئي لكل كشاف",
        value: "20,000lm – 150,000lm",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Wind load rating",
        label_ar: "تصنيف تحمل الرياح",
        value: "Engineered to the project's site wind zone",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified/tested to EN 40 for lighting column structural design",
      },
    ],
    applications_en: [
      "Port and container terminal yard lighting",
      "Container storage and laydown areas",
      "Open parking lots and vehicle compounds",
      "Construction site security lighting",
      "Stadium and sports facility perimeter lighting",
      "Industrial yard and logistics area lighting",
    ],
    applications_ar: [
      "إنارة ساحات الموانئ ومحطات الحاويات",
      "مناطق تخزين وتكديس الحاويات",
      "مواقف السيارات المفتوحة والساحات",
      "الإنارة الأمنية لمواقع الإنشاءات",
      "إنارة محيط الملاعب والمنشآت الرياضية",
      "إنارة الساحات الصناعية والمناطق اللوجستية",
    ],
    relatedProductSlugs: [
      "led-industrial-lighting",
      "explosion-proof-lighting",
    ],
    relatedBrandSlugs: ["signify", "eaton", "hubbell"],
    catalogues: [
      {
        id: "high-mast-lighting-datasheet",
        title_en: "High Mast Lighting Datasheet",
        title_ar: "نشرة بيانات إنارة الأعمدة العالية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/electrical-energy/high-mast-lighting.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "explosion-proof-lighting",
    slug: "explosion-proof-lighting",
    name_en: "Explosion-Proof Lighting",
    name_ar: "الإنارة المقاومة للانفجار",
    shortDescription_en:
      "Explosion-proof light fittings for hazardous-area industrial environments.",
    shortDescription_ar:
      "وحدات إنارة مقاومة للانفجار للبيئات الصناعية ذات المناطق الخطرة.",
    longDescription_en:
      "Explosion-proof light fittings for hazardous-area zones in oil and gas, chemical, and other industrial environments where flammable atmospheres may be present. We source fixtures matched to your site's hazardous-area zone classification.",
    longDescription_ar:
      "وحدات إنارة مقاومة للانفجار للمناطق الخطرة في منشآت النفط والغاز والكيماويات وغيرها من البيئات الصناعية التي قد تحتوي على أجواء قابلة للاشتعال. نقوم بتوريد التجهيزات المطابقة لتصنيف المنطقة الخطرة بموقعكم.",
    sectorId: "electrical-energy",
    categoryId: "industrial-lighting-solar",
    features_en: [
      "ATEX/IECEx zone-rated fixture options",
      "Corrosion-resistant housings for offshore and marine environments",
      "Low-power LED reduces heat load in hazardous zones",
    ],
    features_ar: [
      "خيارات تجهيزات معتمدة لمناطق ATEX/IECEx",
      "أغلفة مقاومة للتآكل للبيئات البحرية والمنصات البحرية",
      "إضاءة LED منخفضة القدرة تقلل الحمل الحراري في المناطق الخطرة",
    ],
    specifications: [
      {
        label_en: "Hazardous area zone rating",
        label_ar: "تصنيف المنطقة الخطرة",
        value: "Zone 1/Zone 2 (gas) or Zone 21/22 (dust), fixture-dependent",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Enclosure protection",
        label_ar: "درجة حماية الهيكل",
        value: "IP66 – IP68",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Luminous flux",
        label_ar: "التدفق الضوئي",
        value: "3,000lm – 20,000lm",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Enclosure material",
        label_ar: "خامة الهيكل",
        value: "Die-cast aluminum or stainless steel",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified/tested to ATEX/IECEx hazardous-area zone classification schemes, zone-dependent",
      },
    ],
    applications_en: [
      "Oil and gas processing facilities and offshore platforms",
      "Chemical and petrochemical plants",
      "Paint spray booths and flammable material storage areas",
      "Grain handling and combustible dust-hazard facilities",
      "Fuel depots and tank farms",
    ],
    applications_ar: [
      "منشآت معالجة النفط والغاز والمنصات البحرية",
      "المصانع الكيميائية والبتروكيماوية",
      "غرف رش الدهانات ومناطق تخزين المواد القابلة للاشتعال",
      "منشآت مناولة الحبوب ومناطق مخاطر الغبار القابل للاشتعال",
      "مستودعات ومزارع خزانات الوقود",
    ],
    relatedProductSlugs: ["led-industrial-lighting", "high-mast-lighting"],
    relatedBrandSlugs: ["eaton", "r-stahl", "emerson"],
    catalogues: [
      {
        id: "explosion-proof-lighting-datasheet",
        title_en: "Explosion-Proof Lighting Datasheet",
        title_ar: "نشرة بيانات الإنارة المقاومة للانفجار",
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
    id: "solar-pv-systems",
    slug: "solar-pv-systems",
    name_en: "Solar PV Panels & Inverters",
    name_ar: "ألواح وعاكسات الطاقة الشمسية",
    shortDescription_en:
      "Solar PV panels and inverters for industrial and commercial power generation.",
    shortDescription_ar:
      "ألواح وعاكسات طاقة شمسية لتوليد الكهرباء للمنشآت الصناعية والتجارية.",
    longDescription_en:
      "Solar PV panels, inverters, and mounting structures for industrial and commercial rooftop or ground-mounted power generation. We source systems matched to your site area and target generation capacity.",
    longDescription_ar:
      "ألواح شمسية وعاكسات وهياكل تركيب لتوليد الكهرباء على أسطح أو أراضي المنشآت الصناعية والتجارية. نقوم بتوريد الأنظمة المطابقة لمساحة موقعكم وسعة التوليد المستهدفة.",
    sectorId: "electrical-energy",
    categoryId: "industrial-lighting-solar",
    features_en: [
      "Monocrystalline and bifacial panel options",
      "String and central inverter configurations",
      "Mounting structures for rooftop and ground-mount installations",
    ],
    features_ar: [
      "خيارات ألواح أحادية البلورة وثنائية الوجه (Bifacial)",
      "تكوينات عاكسات سلسلة (String) أو مركزية",
      "هياكل تركيب للأسطح والتركيب الأرضي",
    ],
    specifications: [
      {
        label_en: "Panel wattage",
        label_ar: "قدرة اللوح",
        value: "400W – 700W per module",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Panel technology",
        label_ar: "تقنية اللوح",
        value: "Monocrystalline PERC or bifacial",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Module efficiency",
        label_ar: "كفاءة اللوح",
        value: "Approx. 20% – 22.5%",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Inverter type",
        label_ar: "نوع العاكس",
        value: "String or central inverter",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "System voltage",
        label_ar: "جهد النظام",
        value: "Up to 1,500V DC",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified/tested to IEC 61215 and IEC 61730 for PV module design qualification and safety",
      },
    ],
    applications_en: [
      "Industrial rooftop solar installations",
      "Commercial building rooftop systems",
      "Ground-mounted solar farms",
      "Warehouse and logistics facility roofs",
      "Off-grid and hybrid power systems for remote sites",
    ],
    applications_ar: [
      "تركيبات الطاقة الشمسية على أسطح المنشآت الصناعية",
      "أنظمة الأسطح للمباني التجارية",
      "مزارع الطاقة الشمسية الأرضية",
      "أسطح المستودعات والمنشآت اللوجستية",
      "أنظمة الطاقة المستقلة أو الهجينة للمواقع النائية",
    ],
    relatedProductSlugs: [
      "battery-energy-storage-systems",
      "led-industrial-lighting",
    ],
    relatedBrandSlugs: ["trina-solar", "jinko-solar", "sma", "huawei"],
    catalogues: [
      {
        id: "solar-pv-systems-datasheet",
        title_en: "Solar PV Panels & Inverters Datasheet",
        title_ar: "نشرة بيانات ألواح وعاكسات الطاقة الشمسية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/electrical-energy/solar-pv-systems.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "battery-energy-storage-systems",
    slug: "battery-energy-storage-systems",
    name_en: "Battery Energy Storage Systems",
    name_ar: "أنظمة تخزين الطاقة بالبطاريات",
    shortDescription_en:
      "Battery energy storage systems for solar self-consumption and peak-load management.",
    shortDescription_ar:
      "أنظمة تخزين طاقة بالبطاريات للاستهلاك الذاتي للطاقة الشمسية وإدارة ذروة الأحمال.",
    longDescription_en:
      "Battery energy storage systems that store solar generation for self-consumption outside daylight hours, or shift load away from grid peak-demand periods. We source systems matched to your required storage capacity.",
    longDescription_ar:
      "أنظمة تخزين طاقة بالبطاريات تخزّن الطاقة المولدة شمسيًا للاستهلاك الذاتي خارج ساعات النهار، أو لنقل الحمل بعيدًا عن فترات ذروة الطلب على الشبكة. نقوم بتوريد الأنظمة المطابقة لسعة التخزين المطلوبة لديكم.",
    sectorId: "electrical-energy",
    categoryId: "industrial-lighting-solar",
    features_en: [
      "Containerized and indoor cabinet-mount configurations",
      "Integrated battery management system (BMS)",
      "Scalable capacity through modular unit addition",
    ],
    features_ar: [
      "تكوينات حاوية مغلقة أو خزانة داخلية للتركيب",
      "نظام إدارة بطارية (BMS) مدمج",
      "سعة قابلة للتوسع بإضافة وحدات معيارية",
    ],
    specifications: [
      {
        label_en: "Storage capacity",
        label_ar: "سعة التخزين",
        value: "50kWh – 2MWh+ per container/unit",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Battery chemistry",
        label_ar: "كيمياء البطارية",
        value: "Lithium iron phosphate (LiFePO4)",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "System voltage",
        label_ar: "جهد النظام",
        value: "400V – 800V DC (typical)",
        group_en: "Electrical",
        group_ar: "الكهرباء",
      },
      {
        label_en: "Round-trip efficiency",
        label_ar: "كفاءة الشحن والتفريغ",
        value: "Approx. 90% – 95%",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Enclosure type",
        label_ar: "نوع الهيكل",
        value: "Indoor cabinet or outdoor containerized",
        group_en: "Physical",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically specified/tested to IEC 62619 for secondary lithium cells and batteries in industrial applications",
      },
    ],
    applications_en: [
      "Solar self-consumption and peak shaving",
      "Commercial and industrial demand-charge management",
      "Backup power for critical facilities",
      "Microgrid and off-grid hybrid systems",
      "Utility-scale grid support and frequency regulation",
    ],
    applications_ar: [
      "الاستهلاك الذاتي للطاقة الشمسية وخفض ذروة الأحمال",
      "إدارة رسوم الطلب الأقصى للمنشآت التجارية والصناعية",
      "الطاقة الاحتياطية للمنشآت الحرجة",
      "الشبكات المصغرة والأنظمة الهجينة المستقلة عن الشبكة",
      "دعم الشبكة وتنظيم التردد على مستوى المرافق العامة",
    ],
    relatedProductSlugs: ["solar-pv-systems"],
    relatedBrandSlugs: ["tesla", "byd", "huawei", "sungrow"],
    catalogues: [
      {
        id: "battery-energy-storage-systems-datasheet",
        title_en: "Battery Energy Storage Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة تخزين الطاقة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/electrical-energy/battery-energy-storage-systems.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
];
