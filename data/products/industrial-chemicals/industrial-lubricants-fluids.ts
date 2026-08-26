import type { Product } from "@/data/products/types";

/** Industrial Chemicals & Lubricants → Lubricants & Fluids category. */
export const chemicalsIndustrialLubricantsFluids: Product[] = [
  {
    id: "industrial-lubricating-oils",
    slug: "industrial-lubricating-oils",
    name_en: "Industrial Lubricating Oils",
    name_ar: "زيوت التشحيم الصناعية",
    shortDescription_en:
      "Lubricating oils for industrial machinery and rotating equipment.",
    shortDescription_ar: "زيوت تشحيم للآلات الصناعية والمعدات الدوارة.",
    longDescription_en:
      "Lubricating oils for industrial machinery, gearboxes, and rotating equipment, sourced to your equipment manufacturer's grade and viscosity requirement.",
    longDescription_ar:
      "زيوت تشحيم للآلات الصناعية وعلب التروس والمعدات الدوارة، يتم توريدها وفق الدرجة واللزوجة التي تحددها الجهة المصنّعة لمعداتكم.",
    sectorId: "industrial-chemicals",
    categoryId: "industrial-lubricants-fluids",
    features_en: [
      "Selectable by viscosity grade and base oil type to match your equipment manufacturer's requirement",
      "Mineral, semi-synthetic, and full-synthetic options for different operating temperature ranges",
      "Available in standard pail, drum, and bulk/IBC packaging",
    ],
    features_ar: [
      "قابلة للاختيار وفق درجة اللزوجة ونوع الزيت الأساسي لمطابقة متطلبات الجهة المصنّعة لمعداتكم",
      "خيارات معدنية وشبه اصطناعية واصطناعية بالكامل لمختلف نطاقات درجات حرارة التشغيل",
      "متوفرة بعبوات قياسية (دِلاء وبراميل) وبالجملة/IBC",
    ],
    specifications: [
      {
        label_en: "Viscosity grade range",
        label_ar: "نطاق درجة اللزوجة",
        value: "ISO VG 32–680, per ISO 3448 classification",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Base oil type",
        label_ar: "نوع الزيت الأساسي",
        value: "Mineral, semi-synthetic, or full-synthetic options",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Operating temperature range",
        label_ar: "نطاق درجة حرارة التشغيل",
        value: "Typically -10°C to 120°C, application-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Packaging formats",
        label_ar: "أشكال التعبئة",
        value: "20L pails, 209L drums, or bulk/IBC on request",
        group_en: "Packaging",
        group_ar: "التعبئة",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically classified to ISO 6743 lubricant application categories",
      },
    ],
    applications_en: [
      "Gearbox and bearing lubrication in general industrial machinery",
      "Air and gas compressor lubrication",
      "Circulating oil systems for continuous-duty equipment",
      "Turbine lubrication",
      "Chain and slideway lubrication on production lines",
    ],
    applications_ar: [
      "تشحيم علب التروس والمحامل في الآلات الصناعية العامة",
      "تشحيم ضواغط الهواء والغاز",
      "أنظمة الزيت الدوارة للمعدات ذات التشغيل المستمر",
      "تشحيم التوربينات",
      "تشحيم السلاسل ومسارات الانزلاق في خطوط الإنتاج",
    ],
    relatedProductSlugs: ["industrial-greases", "gear-oils"],
    relatedBrandSlugs: ["shell", "mobil", "castrol", "total"],
    catalogues: [
      {
        id: "industrial-lubricating-oils-datasheet",
        title_en: "Industrial Lubricating Oils Datasheet",
        title_ar: "نشرة بيانات زيوت التشحيم الصناعية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/industrial-chemicals/industrial-lubricating-oils.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "industrial-greases",
    slug: "industrial-greases",
    name_en: "Industrial Greases",
    name_ar: "الشحوم الصناعية",
    shortDescription_en:
      "Greases for bearings, seals, and slow-moving industrial components.",
    shortDescription_ar:
      "شحوم للمحامل والأختام والمكونات الصناعية بطيئة الحركة.",
    longDescription_en:
      "Industrial greases for bearings, seals, and components where an oil film alone doesn't provide adequate lubrication or protection. We source products matched to your operating temperature and load conditions.",
    longDescription_ar:
      "شحوم صناعية للمحامل والأختام والمكونات التي لا توفر لها طبقة الزيت وحدها تشحيمًا أو حماية كافية. نقوم بتوريد المنتجات المطابقة لدرجة حرارة التشغيل وظروف الحمل لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "industrial-lubricants-fluids",
    features_en: [
      "Selected by NLGI consistency grade and thickener type for the load and speed conditions of your application",
      "Standard, high-temperature, and water-resistant formulations available",
      "Compatible with standard grease guns and centralized lubrication systems",
    ],
    features_ar: [
      "يتم اختيارها وفق درجة قوام NLGI ونوع المادة السميكة لظروف الحمل والسرعة في تطبيقكم",
      "تركيبات قياسية ومقاومة لدرجات الحرارة العالية والماء متوفرة",
      "متوافقة مع مسدسات الشحم القياسية وأنظمة التشحيم المركزية",
    ],
    specifications: [
      {
        label_en: "NLGI consistency grade",
        label_ar: "درجة قوام NLGI",
        value: "NLGI 000–3 range, depending on application",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Thickener type",
        label_ar: "نوع المادة السميكة",
        value: "Lithium, lithium-complex, calcium-sulfonate, or polyurea",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Base oil viscosity",
        label_ar: "لزوجة الزيت الأساسي",
        value: "Typically equivalent to ISO VG 100–460",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Operating temperature range",
        label_ar: "نطاق درجة حرارة التشغيل",
        value: "Approx. -20°C to 150°C, depending on formulation",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Packaging formats",
        label_ar: "أشكال التعبئة",
        value: "Cartridges, pails, or drums",
        group_en: "Packaging",
        group_ar: "التعبئة",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value: "Typically classified to NLGI consistency grades and ISO 6743-9",
      },
    ],
    applications_en: [
      "Bearing lubrication in electric motors and pumps",
      "Chassis and pin lubrication on mobile and heavy equipment",
      "Open gear and wire rope lubrication",
      "High-temperature kiln and oven bearing lubrication",
      "Marine and offshore equipment lubrication",
    ],
    applications_ar: [
      "تشحيم محامل المحركات الكهربائية والمضخات",
      "تشحيم الهيكل والمفصلات في المعدات المتنقلة والثقيلة",
      "تشحيم التروس المكشوفة وحبال الأسلاك",
      "تشحيم محامل الأفران وأنظمة التسخين عالية الحرارة",
      "تشحيم المعدات البحرية والساحلية",
    ],
    relatedProductSlugs: ["industrial-lubricating-oils", "hydraulic-fluids"],
    relatedBrandSlugs: ["shell", "mobil", "fuchs", "total"],
    catalogues: [
      {
        id: "industrial-greases-datasheet",
        title_en: "Industrial Greases Datasheet",
        title_ar: "نشرة بيانات الشحوم الصناعية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/industrial-chemicals/industrial-greases.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "hydraulic-fluids",
    slug: "hydraulic-fluids",
    name_en: "Hydraulic Fluids",
    name_ar: "السوائل الهيدروليكية",
    shortDescription_en:
      "Hydraulic fluids for industrial and mobile hydraulic systems.",
    shortDescription_ar:
      "سوائل هيدروليكية للأنظمة الهيدروليكية الصناعية والمتنقلة.",
    longDescription_en:
      "Hydraulic fluids for industrial and mobile equipment hydraulic systems, sourced to your equipment's viscosity grade and additive package requirement.",
    longDescription_ar:
      "سوائل هيدروليكية للأنظمة الهيدروليكية للمعدات الصناعية والمتنقلة، يتم توريدها وفق درجة اللزوجة وحزمة الإضافات التي تتطلبها معداتكم.",
    sectorId: "industrial-chemicals",
    categoryId: "industrial-lubricants-fluids",
    features_en: [
      "Selectable by ISO VG grade to match your pump manufacturer's requirement",
      "Anti-wear and high-viscosity-index formulations available",
      "Biodegradable options available for environmentally sensitive sites",
    ],
    features_ar: [
      "قابلة للاختيار وفق درجة اللزوجة ISO VG لمطابقة متطلبات الجهة المصنّعة للمضخة لديكم",
      "تركيبات مقاومة للتآكل وذات مؤشر لزوجة عالٍ متوفرة",
      "خيارات قابلة للتحلل الحيوي للمواقع الحساسة بيئيًا",
    ],
    specifications: [
      {
        label_en: "Viscosity grade range",
        label_ar: "نطاق درجة اللزوجة",
        value: "ISO VG 22–100",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Base fluid type",
        label_ar: "نوع السائل الأساسي",
        value: "Mineral, biodegradable ester, or fire-resistant options",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Additive package",
        label_ar: "حزمة الإضافات",
        value: "Anti-wear (AW) formulation as standard",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Operating temperature range",
        label_ar: "نطاق درجة حرارة التشغيل",
        value: "Approx. -20°C to 90°C, application-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Packaging formats",
        label_ar: "أشكال التعبئة",
        value: "20L pails, 209L drums, or bulk/IBC on request",
        group_en: "Packaging",
        group_ar: "التعبئة",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically formulated to meet ISO 6743-4 (category HM/HV) classification",
      },
    ],
    applications_en: [
      "Mobile equipment hydraulic systems (excavators, loaders, cranes)",
      "Industrial press and injection-molding machine hydraulics",
      "Marine deck machinery and steering gear hydraulic systems",
      "Hydraulic power units for lifting and material-handling equipment",
      "Hydraulic elevator systems",
    ],
    applications_ar: [
      "الأنظمة الهيدروليكية للمعدات المتنقلة (الحفارات والشيولات والرافعات)",
      "الأنظمة الهيدروليكية للمكابس الصناعية وماكينات حقن البلاستيك",
      "أنظمة التوجيه والمعدات الهيدروليكية على سطح السفن",
      "وحدات القدرة الهيدروليكية لمعدات الرفع والمناولة",
      "أنظمة المصاعد الهيدروليكية",
    ],
    relatedProductSlugs: ["industrial-greases", "gear-oils"],
    relatedBrandSlugs: ["shell", "mobil", "castrol", "chevron"],
    catalogues: [
      {
        id: "hydraulic-fluids-datasheet",
        title_en: "Hydraulic Fluids Datasheet",
        title_ar: "نشرة بيانات السوائل الهيدروليكية",
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
    id: "gear-oils",
    slug: "gear-oils",
    name_en: "Gear Oils",
    name_ar: "زيوت التروس",
    shortDescription_en:
      "Gear oils for industrial gearboxes and drive systems.",
    shortDescription_ar: "زيوت تروس لعلب التروس الصناعية وأنظمة النقل الحركي.",
    longDescription_en:
      "Gear oils formulated for the extreme-pressure conditions inside industrial gearboxes and drive systems, sourced to your equipment's specified grade and application.",
    longDescription_ar:
      "زيوت تروس مصممة لتحمل ظروف الضغط الشديد داخل علب التروس الصناعية وأنظمة النقل الحركي، يتم توريدها وفق الدرجة والتطبيق المحدد لمعداتكم.",
    sectorId: "industrial-chemicals",
    categoryId: "industrial-lubricants-fluids",
    features_en: [
      "EP-formulated for shock loading and high-pressure gear-tooth contact",
      "Available in mineral and synthetic base for extended service intervals",
      "Selectable by viscosity grade to match your gearbox manufacturer's specification",
    ],
    features_ar: [
      "مصممة لتحمل الأحمال المفاجئة والضغط العالي على أسنان التروس",
      "متوفرة بقاعدة معدنية واصطناعية لإطالة فترات التشغيل",
      "قابلة للاختيار وفق درجة اللزوجة لمطابقة مواصفات الجهة المصنّعة لعلبة التروس لديكم",
    ],
    specifications: [
      {
        label_en: "Viscosity grade range",
        label_ar: "نطاق درجة اللزوجة",
        value: "ISO VG 68–680",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "EP additive package",
        label_ar: "حزمة إضافات الضغط العالي (EP)",
        value:
          "Extreme-pressure (EP) formulation as standard for enclosed gear duty",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Base oil type",
        label_ar: "نوع الزيت الأساسي",
        value: "Mineral or synthetic",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Operating temperature range",
        label_ar: "نطاق درجة حرارة التشغيل",
        value: "Approx. -10°C to 100°C continuous duty",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Packaging formats",
        label_ar: "أشكال التعبئة",
        value: "Pails, drums, or bulk/IBC on request",
        group_en: "Packaging",
        group_ar: "التعبئة",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically classified to ISO 6743-6, with reference to AGMA lubrication guidelines",
      },
    ],
    applications_en: [
      "Enclosed industrial gearbox lubrication",
      "Worm and helical gear drives",
      "Marine reduction gear lubrication",
      "Crane and hoist gear drive lubrication",
      "Conveyor drive gearboxes",
    ],
    applications_ar: [
      "تشحيم علب التروس الصناعية المغلقة",
      "تشحيم أنظمة نقل الحركة الدودية والحلزونية",
      "تشحيم تروس التخفيض البحرية",
      "تشحيم علب تروس الرافعات وأنظمة الرفع",
      "تشحيم علب تروس الأحزمة الناقلة",
    ],
    relatedProductSlugs: ["industrial-lubricating-oils", "hydraulic-fluids"],
    relatedBrandSlugs: ["shell", "mobil", "castrol", "fuchs"],
    catalogues: [
      {
        id: "gear-oils-datasheet",
        title_en: "Gear Oils Datasheet",
        title_ar: "نشرة بيانات زيوت التروس",
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
    id: "metalworking-fluids",
    slug: "metalworking-fluids",
    name_en: "Metalworking Fluids",
    name_ar: "سوائل التشغيل المعدني",
    shortDescription_en:
      "Cutting and coolant fluids for metal machining and fabrication.",
    shortDescription_ar: "سوائل قطع وتبريد لأعمال التشغيل والتصنيع المعدني.",
    longDescription_en:
      "Cutting oils and coolant fluids for metal machining, cutting, and fabrication processes, sourced to your material type and machining process.",
    longDescription_ar:
      "زيوت قطع وسوائل تبريد لعمليات التشغيل والقطع والتصنيع المعدني، يتم توريدها وفق نوع المادة وعملية التشغيل لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "industrial-lubricants-fluids",
    features_en: [
      "Available as soluble oil, semi-synthetic, or full-synthetic formulations",
      "Rust-inhibited for machining of ferrous metals",
      "Selected by machining operation severity and workpiece material",
    ],
    features_ar: [
      "متوفرة كزيت قابل للذوبان أو تركيبة شبه اصطناعية أو اصطناعية بالكامل",
      "مثبطة للصدأ لتشغيل المعادن الحديدية",
      "يتم اختيارها وفق شدة عملية التشغيل ومادة القطعة",
    ],
    specifications: [
      {
        label_en: "Fluid type",
        label_ar: "نوع السائل",
        value:
          "Soluble oil emulsion, semi-synthetic, or full-synthetic coolant",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Working dilution",
        label_ar: "نسبة التخفيف عند الاستخدام",
        value:
          "Typically mixed 3–10% in water, depending on operation severity",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Corrosion protection",
        label_ar: "الحماية من التآكل",
        value:
          "Formulated with rust-inhibiting additives for ferrous workpieces",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "In-use pH range",
        label_ar: "نطاق الرقم الهيدروجيني أثناء الاستخدام",
        value: "Typically maintained around pH 8.5–9.5 for sump stability",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Packaging formats",
        label_ar: "أشكال التعبئة",
        value: "Pails, drums, or bulk/IBC on request",
        group_en: "Packaging",
        group_ar: "التعبئة",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically classified under ISO 6743-7 metalworking fluid categories",
      },
    ],
    applications_en: [
      "Turning, milling, and drilling coolant/lubrication",
      "Grinding fluid for surface finish and heat control",
      "Broaching and tapping operations",
      "General CNC machining center coolant systems",
    ],
    applications_ar: [
      "سائل تبريد وتشحيم عمليات الخراطة والتفريز والحفر",
      "سائل تبريد لعمليات الطحن والتحكم في الحرارة وجودة السطح",
      "عمليات البروشة والقلوظة",
      "أنظمة تبريد ماكينات CNC العامة",
    ],
    relatedProductSlugs: ["industrial-lubricating-oils", "gear-oils"],
    relatedBrandSlugs: ["fuchs", "castrol", "total"],
    catalogues: [
      {
        id: "metalworking-fluids-datasheet",
        title_en: "Metalworking Fluids Datasheet",
        title_ar: "نشرة بيانات سوائل التشغيل المعدني",
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
];
