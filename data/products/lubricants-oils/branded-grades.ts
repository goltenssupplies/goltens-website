import type { Product } from "@/data/products/types";

/**
 * Lubricants & Oils — first batch of brand/grade-specific products,
 * sourced only from verified official-manufacturer data (see the
 * Smart Procurement catalog research report). Kept in a separate file
 * from `lubricants-oils.ts` (the 5 generic, sourcing-capability
 * products already registered there) rather than appended to it: these
 * are a distinct addition — specific branded grades, not a revision of
 * the existing generic products, which remain untouched and still
 * represent GOLTENS' general sourcing capability for each category.
 *
 * Every field below is either directly stated in the cited official
 * manufacturer documentation or a plain restatement of it — no
 * specification, standard, or approval is invented. No brand/product
 * image is used (none exists in this project that genuinely depicts
 * these specific branded products — see `images: []` on every entry).
 * No manufacturer PDS/SDS URL is stored anywhere here: the schema has
 * no field for an external reference link, and `catalogues[].fileUrl`
 * is reserved for GOLTENS' own hosted file, so it stays `null` (same
 * "Coming Soon" convention every other product on this site already
 * uses) rather than pointing at a manufacturer's own document.
 */
export const lubricantsOilsBrandedGrades: Product[] = [
  {
    id: "mobil-dte-24",
    slug: "mobil-dte-24",
    name_en: "Mobil DTE 24",
    name_ar: "Mobil DTE 24",
    shortDescription_en:
      "Mobil DTE 24 (ISO VG 32) anti-wear hydraulic oil for industrial and precision hydraulic systems.",
    shortDescription_ar:
      "زيت هيدروليكي مضاد للتآكل Mobil DTE 24 (ISO VG 32) للأنظمة الهيدروليكية الصناعية والدقيقة.",
    longDescription_en:
      "Mobil DTE 24 is part of the Mobil DTE 20 Series of anti-wear hydraulic oils, formulated at ISO VG 32 for high-pressure hydraulic systems, servo-valve systems, and numerically controlled (NC) machine tools. We source this product matched to your equipment manufacturer's specification.",
    longDescription_ar:
      "Mobil DTE 24 هو جزء من سلسلة Mobil DTE 20 لزيوت هيدروليكية مضادة للتآكل، بدرجة لزوجة ISO VG 32، مخصص للأنظمة الهيدروليكية عالية الضغط وأنظمة الصمامات التتبعية (servo-valve) وماكينات التحكم الرقمي (NC). نقوم بتوريد هذا المنتج مطابقًا لمواصفات الجهة المصنّعة لمعداتكم.",
    sectorId: "lubricants-oils",
    categoryId: "hydraulic-oils",
    features_en: [
      "Anti-wear formulation with a viscosity index of 98",
      "Suitable for systems with water exposure risk and mixed-metallurgy components",
      "Meets DIN 51524-2 and select OEM specifications",
    ],
    features_ar: [
      "تركيبة مضادة للتآكل بمؤشر لزوجة 98",
      "مناسب للأنظمة المعرضة لخطر دخول الماء والمعادن المختلطة",
      "مطابق لمعيار DIN 51524-2 ومواصفات مصنّعين مختارين",
    ],
    specifications: [
      {
        label_en: "ISO Viscosity Grade",
        label_ar: "درجة اللزوجة ISO",
        value: "ISO VG 32",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Viscosity Index",
        label_ar: "مؤشر اللزوجة",
        value: "98",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standards / Approvals",
        label_ar: "المعايير والاعتمادات",
        value:
          "DIN 51524-2:2006-09; Eaton I-286-S, M-2950-S; Husky HS 207; Fives Cincinnati P-68/69/70",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "High-pressure hydraulic systems",
      "Servo-valve systems",
      "Numerically controlled (NC) machine tools",
      "Systems with water exposure risk",
      "Machinery with mixed-metallurgy components",
    ],
    applications_ar: [
      "الأنظمة الهيدروليكية عالية الضغط",
      "أنظمة الصمامات التتبعية (servo-valve)",
      "ماكينات التحكم الرقمي (NC)",
      "الأنظمة المعرضة لخطر دخول الماء",
      "المعدات ذات المكونات المعدنية المختلطة",
    ],
    relatedProductSlugs: ["hydraulic-fluids", "castrol-hyspin-aws-46"],
    relatedBrandSlugs: ["mobil"],
    catalogues: [
      {
        id: "mobil-dte-24-datasheet",
        title_en: "Mobil DTE 24 Datasheet",
        title_ar: "نشرة بيانات Mobil DTE 24",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Mobil DTE 24 Hydraulic Oil Supplier Egypt",
      title_ar: "مورد زيت Mobil DTE 24 الهيدروليكي في مصر",
      description_en:
        "GOLTENS sources Mobil DTE 24 (ISO VG 32) anti-wear hydraulic oil, matched to your equipment specification.",
      description_ar:
        "توفر GOLTENS زيت Mobil DTE 24 الهيدروليكي المضاد للتآكل (ISO VG 32)، مطابقًا لمواصفات معداتكم.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "castrol-hyspin-aws-46",
    slug: "castrol-hyspin-aws-46",
    name_en: "Castrol Hyspin AWS 46",
    name_ar: "Castrol Hyspin AWS 46",
    shortDescription_en:
      "Castrol Hyspin AWS 46 (ISO VG 46) anti-wear hydraulic oil for industrial hydraulic systems.",
    shortDescription_ar:
      "زيت هيدروليكي مضاد للتآكل Castrol Hyspin AWS 46 (ISO VG 46) للأنظمة الهيدروليكية الصناعية.",
    longDescription_en:
      "Castrol Hyspin AWS 46 is part of the Castrol Hyspin AWS range of anti-wear hydraulic oils, formulated at ISO VG 46 from highly refined mineral oil with a stabilised zinc additive system, for industrial hydraulic systems, lightly loaded gears, variable speed units, and bearings. We source this product matched to your equipment manufacturer's specification.",
    longDescription_ar:
      "Castrol Hyspin AWS 46 جزء من مجموعة Castrol Hyspin AWS لزيوت هيدروليكية مضادة للتآكل، بدرجة لزوجة ISO VG 46، مصنّعة من زيت معدني عالي التكرير مع نظام إضافات زنك مثبّت، للأنظمة الهيدروليكية الصناعية والتروس خفيفة التحميل ووحدات السرعة المتغيرة والمحامل. نقوم بتوريد هذا المنتج مطابقًا لمواصفات الجهة المصنّعة لمعداتكم.",
    sectorId: "lubricants-oils",
    categoryId: "hydraulic-oils",
    features_en: [
      "Zinc-based anti-wear additive system",
      "Corrosion protection for ferrous and yellow metal components",
      "Viscosity index above 95",
    ],
    features_ar: [
      "نظام إضافات مضاد للتآكل قائم على الزنك",
      "حماية من التآكل للمكونات المعدنية الحديدية وغير الحديدية",
      "مؤشر لزوجة أعلى من 95",
    ],
    specifications: [
      {
        label_en: "ISO Viscosity Grade",
        label_ar: "درجة اللزوجة ISO",
        value: "ISO VG 46",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Kinematic Viscosity @ 100°C",
        label_ar: "اللزوجة الحركية عند 100°م",
        value: "6.7 mm²/s",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Viscosity Index",
        label_ar: "مؤشر اللزوجة",
        value: ">95",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Base oil type",
        label_ar: "نوع الزيت الأساسي",
        value:
          "Highly refined mineral oil with stabilised zinc additive system",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Standards / Approvals",
        label_ar: "المعايير والاعتمادات",
        value:
          "DIN 51524 Part 2; ISO 6743/4 (Type HM); Denison HF0/HF1/HF2; Eaton E-FDGN-TB002-E; Bosch Rexroth RE90220; MB Approval 341.0",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Industrial hydraulic systems requiring anti-wear protection",
      "Lightly loaded gears",
      "Variable speed units",
      "Bearings",
    ],
    applications_ar: [
      "الأنظمة الهيدروليكية الصناعية التي تتطلب حماية من التآكل",
      "التروس خفيفة التحميل",
      "وحدات السرعة المتغيرة",
      "المحامل",
    ],
    relatedProductSlugs: ["hydraulic-fluids", "mobil-dte-24"],
    relatedBrandSlugs: ["castrol"],
    catalogues: [
      {
        id: "castrol-hyspin-aws-46-datasheet",
        title_en: "Castrol Hyspin AWS 46 Datasheet",
        title_ar: "نشرة بيانات Castrol Hyspin AWS 46",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Castrol Hyspin AWS 46 Hydraulic Oil Supplier Egypt",
      title_ar: "مورد زيت Castrol Hyspin AWS 46 الهيدروليكي في مصر",
      description_en:
        "GOLTENS sources Castrol Hyspin AWS 46 (ISO VG 46) anti-wear hydraulic oil, matched to your equipment specification.",
      description_ar:
        "توفر GOLTENS زيت Castrol Hyspin AWS 46 الهيدروليكي المضاد للتآكل (ISO VG 46)، مطابقًا لمواصفات معداتكم.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mobilgear-600-xp-220",
    slug: "mobilgear-600-xp-220",
    name_en: "Mobilgear 600 XP 220",
    name_ar: "Mobilgear 600 XP 220",
    shortDescription_en:
      "Mobilgear 600 XP 220 (ISO VG 220) extreme-pressure industrial gear oil.",
    shortDescription_ar:
      "زيت تروس صناعي بخاصية الضغط العالي Mobilgear 600 XP 220 (ISO VG 220).",
    longDescription_en:
      "Mobilgear 600 XP 220 is part of the Mobilgear 600 XP Series of extra high performance gear oils, formulated at ISO VG 220 with extreme-pressure characteristics for enclosed industrial gear drives (spur, helical, bevel) with circulation or splash lubrication, and heavily loaded, slow-speed bearings. We source this product matched to your gearbox manufacturer's specification.",
    longDescription_ar:
      "Mobilgear 600 XP 220 جزء من سلسلة Mobilgear 600 XP لزيوت التروس عالية الأداء، بدرجة لزوجة ISO VG 220 وخصائص تحمّل ضغط عالٍ، مخصص للتروس الصناعية المغلقة (مستقيمة، حلزونية، مخروطية) بأنظمة تزييت دوراني أو رذاذي، والمحامل الثقيلة التحميل بطيئة السرعة. نقوم بتوريد هذا المنتج مطابقًا لمواصفات الجهة المصنّعة لعلبة التروس لديكم.",
    sectorId: "lubricants-oils",
    categoryId: "gear-oils-category",
    features_en: [
      "Extreme-pressure (EP) formulation for enclosed gear duty",
      "Enhanced wear protection against micropitting",
      "Suitable for bulk oil temperatures up to 100°C",
    ],
    features_ar: [
      "تركيبة مضادة للضغط العالي (EP) للتروس المغلقة",
      "حماية معززة ضد التآكل الدقيق (micropitting)",
      "مناسب لدرجات حرارة الزيت حتى 100°م",
    ],
    specifications: [
      {
        label_en: "ISO Viscosity Grade",
        label_ar: "درجة اللزوجة ISO",
        value: "ISO VG 220",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Kinematic Viscosity @ 40°C / 100°C",
        label_ar: "اللزوجة الحركية عند 40°م / 100°م",
        value: "220 / 19.0 mm²/s",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Viscosity Index",
        label_ar: "مؤشر اللزوجة",
        value: "97",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Flash Point / Pour Point",
        label_ar: "نقطة الوميض / نقطة الانسكاب",
        value: "240°C / -24°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Base oil type",
        label_ar: "نوع الزيت الأساسي",
        value: "Mineral-based",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Standards / Approvals",
        label_ar: "المعايير والاعتمادات",
        value:
          "DIN 51517-3:2018-09; AGMA 9005-F16; ISO L-CKD (ISO 12925-1); ZF TE-ML 04H/27",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    applications_en: [
      "Enclosed industrial gear drives (spur, helical, bevel) with circulation or splash lubrication",
      "Marine gearing, including main propulsion and deck machinery",
      "Heavily loaded, slow-speed bearings",
      "Conveyors, mixers, pumps, and extruders",
    ],
    applications_ar: [
      "التروس الصناعية المغلقة (مستقيمة، حلزونية، مخروطية) بأنظمة تزييت دوراني أو رذاذي",
      "التروس البحرية، بما في ذلك الدفع الرئيسي ومعدات السطح",
      "المحامل الثقيلة التحميل بطيئة السرعة",
      "الناقلات والخلاطات والمضخات وماكينات البثق",
    ],
    relatedProductSlugs: ["gear-oils"],
    relatedBrandSlugs: ["mobil"],
    catalogues: [
      {
        id: "mobilgear-600-xp-220-datasheet",
        title_en: "Mobilgear 600 XP 220 Datasheet",
        title_ar: "نشرة بيانات Mobilgear 600 XP 220",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Mobilgear 600 XP 220 Gear Oil Supplier Egypt",
      title_ar: "مورد زيت تروس Mobilgear 600 XP 220 في مصر",
      description_en:
        "GOLTENS sources Mobilgear 600 XP 220 (ISO VG 220) extreme-pressure industrial gear oil, matched to your gearbox specification.",
      description_ar:
        "توفر GOLTENS زيت التروس الصناعي Mobilgear 600 XP 220 (ISO VG 220) بخاصية الضغط العالي، مطابقًا لمواصفات علبة التروس لديكم.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "shell-gadus-s5-v220-2",
    slug: "shell-gadus-s5-v220-2",
    name_en: "Shell Gadus S5 V220 2",
    name_ar: "Shell Gadus S5 V220 2",
    shortDescription_en:
      "Shell Gadus S5 V220 2 (NLGI 2) advanced-performance grease for transport and industrial bearings.",
    shortDescription_ar:
      "شحم عالي الأداء Shell Gadus S5 V220 2 (NLGI 2) لمحامل النقل والصناعة.",
    longDescription_en:
      "Shell Gadus S5 V220 2 is an advanced-performance lithium complex grease at NLGI consistency grade 2, based on a high viscosity index synthetic base oil, for the grease lubrication of bearings in transport and industrial applications, including paper machine bearings. We source this product matched to your equipment manufacturer's specification.",
    longDescription_ar:
      "Shell Gadus S5 V220 2 شحم متقدم الأداء بقوام NLGI درجة 2، بمادة سميكة من مركّب الليثيوم وزيت أساسي اصطناعي عالي مؤشر اللزوجة، لتشحيم محامل معدات النقل والصناعة، بما في ذلك محامل ماكينات الورق. نقوم بتوريد هذا المنتج مطابقًا لمواصفات الجهة المصنّعة لمعداتكم.",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    features_en: [
      "Excellent mechanical stability and water resistance",
      "Corrosion protection with extreme-pressure properties",
      "High dropping point for extended service at high and low temperatures",
    ],
    features_ar: [
      "ثبات ميكانيكي ممتاز ومقاومة للماء",
      "حماية من التآكل مع خصائص تحمّل الضغط العالي",
      "نقطة سقوط عالية لخدمة ممتدة في درجات الحرارة المرتفعة والمنخفضة",
    ],
    specifications: [
      {
        label_en: "NLGI Consistency Grade",
        label_ar: "درجة قوام NLGI",
        value: "2",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Thickener type",
        label_ar: "نوع المادة السميكة",
        value: "Lithium complex",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Base oil viscosity",
        label_ar: "لزوجة الزيت الأساسي",
        value: "220 cSt @ 40°C",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Dropping Point",
        label_ar: "نقطة السقوط",
        value: "260°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Operating temperature range",
        label_ar: "نطاق درجة حرارة التشغيل",
        value: "-40°C to 150°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    applications_en: [
      "Grease lubrication of bearings in transport applications",
      "Moderate to high-speed industrial bearings",
      "Taper roller and cylindrical bearings",
      "Paper machine bearings (wet and dry ends)",
    ],
    applications_ar: [
      "تشحيم محامل معدات النقل",
      "المحامل الصناعية متوسطة إلى عالية السرعة",
      "المحامل المخروطية والاسطوانية",
      "محامل ماكينات الورق (الطرفين الرطب والجاف)",
    ],
    relatedProductSlugs: ["industrial-greases", "mobilux-ep-2-moly"],
    relatedBrandSlugs: ["shell"],
    catalogues: [
      {
        id: "shell-gadus-s5-v220-2-datasheet",
        title_en: "Shell Gadus S5 V220 2 Datasheet",
        title_ar: "نشرة بيانات Shell Gadus S5 V220 2",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Shell Gadus S5 V220 2 Grease Supplier Egypt",
      title_ar: "مورد شحم Shell Gadus S5 V220 2 في مصر",
      description_en:
        "GOLTENS sources Shell Gadus S5 V220 2 (NLGI 2) advanced-performance grease, matched to your equipment specification.",
      description_ar:
        "توفر GOLTENS شحم Shell Gadus S5 V220 2 عالي الأداء (NLGI 2)، مطابقًا لمواصفات معداتكم.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mobilux-ep-2-moly",
    slug: "mobilux-ep-2-moly",
    name_en: "Mobilux EP 2 Moly",
    name_ar: "Mobilux EP 2 Moly",
    shortDescription_en:
      "Mobilux EP 2 Moly (NLGI 2) multi-purpose lithium grease with molybdenum disulfide for general industrial applications.",
    shortDescription_ar:
      "شحم ليثيوم متعدد الأغراض Mobilux EP 2 Moly (NLGI 2) يحتوي على ثاني كبريتيد الموليبدينوم للتطبيقات الصناعية العامة.",
    longDescription_en:
      "Mobilux EP 2 Moly is a premium-quality, multi-purpose lithium-base grease at NLGI consistency grade 2, containing an extreme-pressure additive and molybdenum disulfide (MoS2) for enhanced anti-friction performance under boundary lubrication conditions. We source this product matched to your equipment manufacturer's specification.",
    longDescription_ar:
      "Mobilux EP 2 Moly شحم متعدد الأغراض عالي الجودة بقاعدة ليثيوم وقوام NLGI درجة 2، يحتوي على إضافة مقاومة للضغط العالي وثاني كبريتيد الموليبدينوم (MoS2) لتحسين أداء مقاومة الاحتكاك في ظروف التزييت الحدّي. نقوم بتوريد هذا المنتج مطابقًا لمواصفات الجهة المصنّعة لمعداتكم.",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    features_en: [
      "Water-resistant with excellent oxidation and mechanical stability",
      "Molybdenum disulfide for enhanced anti-friction performance",
      "Corrosion protection",
    ],
    features_ar: [
      "مقاوم للماء مع ثبات ممتاز ضد الأكسدة وميكانيكيًا",
      "ثاني كبريتيد الموليبدينوم لتحسين أداء مقاومة الاحتكاك",
      "حماية من التآكل",
    ],
    specifications: [
      {
        label_en: "NLGI Consistency Grade",
        label_ar: "درجة قوام NLGI",
        value: "2",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Thickener type",
        label_ar: "نوع المادة السميكة",
        value: "Lithium",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Base oil viscosity",
        label_ar: "لزوجة الزيت الأساسي",
        value: "150 mm²/s @ 40°C",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Dropping Point",
        label_ar: "نقطة السقوط",
        value: "175°C",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Molybdenum disulfide (MoS2) content",
        label_ar: "نسبة ثاني كبريتيد الموليبدينوم (MoS2)",
        value: "3% by weight",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Timken OK Load",
        label_ar: "حمل Timken OK",
        value: "18 kg",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    applications_en: [
      "General industrial multi-purpose lubrication",
      "Bearings and components under boundary lubrication conditions",
      "Applications requiring extreme-pressure and anti-friction protection",
    ],
    applications_ar: [
      "التزييت الصناعي متعدد الأغراض بشكل عام",
      "المحامل والمكونات في ظروف التزييت الحدّي",
      "التطبيقات التي تتطلب حماية من الضغط العالي ومقاومة الاحتكاك",
    ],
    relatedProductSlugs: ["industrial-greases", "shell-gadus-s5-v220-2"],
    relatedBrandSlugs: ["mobil"],
    catalogues: [
      {
        id: "mobilux-ep-2-moly-datasheet",
        title_en: "Mobilux EP 2 Moly Datasheet",
        title_ar: "نشرة بيانات Mobilux EP 2 Moly",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "Mobilux EP 2 Moly Grease Supplier Egypt",
      title_ar: "مورد شحم Mobilux EP 2 Moly في مصر",
      description_en:
        "GOLTENS sources Mobilux EP 2 Moly (NLGI 2) multi-purpose grease with molybdenum disulfide, matched to your equipment specification.",
      description_ar:
        "توفر GOLTENS شحم Mobilux EP 2 Moly متعدد الأغراض (NLGI 2) المحتوي على ثاني كبريتيد الموليبدينوم، مطابقًا لمواصفات معداتكم.",
    },
    availability: "available",
    quoteEnabled: true,
  },
];
