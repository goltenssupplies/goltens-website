import type { Product } from "@/data/products/types";

/** Industrial Chemicals & Lubricants → Water & Wastewater Treatment Chemicals category. */
export const chemicalsWaterWastewaterChemicals: Product[] = [
  {
    id: "boiler-water-chemicals",
    slug: "boiler-water-chemicals",
    name_en: "Boiler Water Chemicals",
    name_ar: "كيماويات مياه الغلايات",
    shortDescription_en:
      "Boiler water treatment chemicals to prevent scale and corrosion.",
    shortDescription_ar: "كيماويات معالجة مياه الغلايات لمنع الترسبات والتآكل.",
    longDescription_en:
      "Boiler water treatment chemicals that control scale formation and corrosion inside steam-generating equipment. We source products matched to your boiler type and feedwater quality.",
    longDescription_ar:
      "كيماويات معالجة مياه الغلايات تتحكم في تكوّن الترسبات والتآكل داخل معدات توليد البخار. نقوم بتوريد المنتجات المطابقة لنوع الغلاية وجودة مياه التغذية لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "water-wastewater-chemicals",
    features_en: [
      "Formulated for scale and corrosion control specific to your boiler's operating pressure",
      "Dosing determined by feedwater hardness and boiler chemistry analysis",
      "Available for low, medium, and high-pressure boiler systems",
    ],
    features_ar: [
      "مصممة للتحكم في الترسبات والتآكل وفق ضغط تشغيل الغلاية لديكم",
      "يتم تحديد الجرعة وفق عسر مياه التغذية وتحليل كيمياء الغلاية",
      "متوفرة لأنظمة الغلايات منخفضة ومتوسطة وعالية الضغط",
    ],
    specifications: [
      {
        label_en: "Treatment function",
        label_ar: "وظيفة المعالجة",
        value:
          "Scale inhibition, oxygen scavenging, and alkalinity control for boiler feedwater",
        group_en: "Function",
        group_ar: "الوظيفة",
      },
      {
        label_en: "Dosage approach",
        label_ar: "أسلوب الجرعة",
        value:
          "Dosed according to feedwater analysis and boiler operating pressure",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Boiler pressure range served",
        label_ar: "نطاق ضغط الغلايات المخدومة",
        value: "Low- to high-pressure steam boilers",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Packaging formats",
        label_ar: "أشكال التعبئة",
        value: "25kg bags, 200L drums, or bulk/IBC on request",
        group_en: "Packaging",
        group_ar: "التعبئة",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Dosing typically referenced against general ASME boiler water treatment guideline ranges",
      },
    ],
    applications_en: [
      "Fire-tube and water-tube boiler feedwater treatment",
      "Steam generation plants in process industries",
      "Power plant boiler circuits",
      "Condensate return line protection",
      "Marine boiler water treatment",
    ],
    applications_ar: [
      "معالجة مياه تغذية الغلايات ذات الأنابيب النارية والمائية",
      "محطات توليد البخار في الصناعات التحويلية",
      "دوائر غلايات محطات توليد الطاقة",
      "حماية خطوط عودة المكثفات",
      "معالجة مياه الغلايات البحرية",
    ],
    relatedProductSlugs: ["cooling-tower-chemicals", "ph-adjustment-chemicals"],
    relatedBrandSlugs: ["nalco", "kurita", "veolia"],
    catalogues: [
      {
        id: "boiler-water-chemicals-datasheet",
        title_en: "Boiler Water Chemicals Datasheet",
        title_ar: "نشرة بيانات كيماويات مياه الغلايات",
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
    id: "cooling-tower-chemicals",
    slug: "cooling-tower-chemicals",
    name_en: "Cooling Tower Chemicals",
    name_ar: "كيماويات أبراج التبريد",
    shortDescription_en:
      "Cooling tower chemicals for scale, corrosion, and biological control.",
    shortDescription_ar:
      "كيماويات أبراج التبريد للتحكم في الترسبات والتآكل والنمو البيولوجي.",
    longDescription_en:
      "Cooling tower water treatment chemicals for scale inhibition, corrosion control, and biological growth management. We source products matched to your system's water chemistry and cycles of concentration.",
    longDescription_ar:
      "كيماويات معالجة مياه أبراج التبريد لمنع الترسبات والتحكم في التآكل والنمو البيولوجي. نقوم بتوريد المنتجات المطابقة لكيمياء المياه ودورات التركيز في نظامكم.",
    sectorId: "industrial-chemicals",
    categoryId: "water-wastewater-chemicals",
    features_en: [
      "Combined scale, corrosion, and microbiological control programs available",
      "Dosing matched to make-up water quality and cycles of concentration",
      "Oxidizing and non-oxidizing biocide options for biofilm and microbial control",
    ],
    features_ar: [
      "برامج متكاملة للتحكم في الترسبات والتآكل والنمو الميكروبي",
      "يتم ضبط الجرعة وفق جودة مياه التعويض ودورات التركيز",
      "خيارات مبيدات مؤكسدة وغير مؤكسدة للتحكم في الأغشية الحيوية والنمو الميكروبي",
    ],
    specifications: [
      {
        label_en: "Treatment function",
        label_ar: "وظيفة المعالجة",
        value:
          "Scale inhibition, corrosion control, and microbiological/biofilm control",
        group_en: "Function",
        group_ar: "الوظيفة",
      },
      {
        label_en: "Product forms",
        label_ar: "أشكال المنتج",
        value:
          "Scale/corrosion inhibitor blends and oxidizing or non-oxidizing biocides",
        group_en: "Function",
        group_ar: "الوظيفة",
      },
      {
        label_en: "Dosage approach",
        label_ar: "أسلوب الجرعة",
        value: "Dosed to system water chemistry and cycles of concentration",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Packaging formats",
        label_ar: "أشكال التعبئة",
        value: "Drums or bulk/IBC on request",
        group_en: "Packaging",
        group_ar: "التعبئة",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Treatment programs typically designed with reference to general industry microbial-control guidance (e.g. ASHRAE 188)",
      },
    ],
    applications_en: [
      "Open recirculating cooling tower systems",
      "HVAC condenser water loops",
      "Process cooling water circuits",
      "Chiller plant cooling water systems",
      "Industrial cooling systems in power and petrochemical plants",
    ],
    applications_ar: [
      "أنظمة أبراج التبريد المفتوحة الدوارة",
      "دوائر مياه المكثفات في أنظمة التكييف",
      "دوائر مياه التبريد في العمليات الصناعية",
      "أنظمة مياه تبريد محطات التبريد المركزي",
      "أنظمة التبريد الصناعية في محطات الطاقة والبتروكيماويات",
    ],
    relatedProductSlugs: [
      "boiler-water-chemicals",
      "wastewater-treatment-chemicals",
    ],
    relatedBrandSlugs: ["nalco", "kurita", "veolia"],
    catalogues: [
      {
        id: "cooling-tower-chemicals-datasheet",
        title_en: "Cooling Tower Chemicals Datasheet",
        title_ar: "نشرة بيانات كيماويات أبراج التبريد",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/industrial-chemicals/cooling-tower-chemicals.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "wastewater-treatment-chemicals",
    slug: "wastewater-treatment-chemicals",
    name_en: "Wastewater Treatment Chemicals",
    name_ar: "كيماويات معالجة مياه الصرف",
    shortDescription_en:
      "Chemicals for industrial and municipal wastewater treatment processes.",
    shortDescription_ar:
      "كيماويات لعمليات معالجة مياه الصرف الصناعية والبلدية.",
    longDescription_en:
      "Chemicals for industrial and municipal wastewater treatment processes, sourced to your treatment stage — coagulation, disinfection, or sludge conditioning — and effluent requirement.",
    longDescription_ar:
      "كيماويات لعمليات معالجة مياه الصرف الصناعية والبلدية، يتم توريدها وفق مرحلة المعالجة لديكم — تخثير أو تعقيم أو تكييف الحمأة — ومتطلبات جودة المياه الناتجة.",
    sectorId: "industrial-chemicals",
    categoryId: "water-wastewater-chemicals",
    features_en: [
      "Available across coagulation, flocculation, disinfection, and sludge-conditioning product lines",
      "Liquid and dry formulations for different dosing system types",
      "Selected through jar testing against your specific effluent characteristics",
    ],
    features_ar: [
      "متوفرة ضمن مجموعات منتجات التخثير والترسيب والتعقيم وتكييف الحمأة",
      "تركيبات سائلة وجافة لمختلف أنظمة الجرعات",
      "يتم اختيارها من خلال اختبارات المعالجة المخبرية (Jar Test) وفق خصائص مياه الصرف لديكم",
    ],
    specifications: [
      {
        label_en: "Treatment stage",
        label_ar: "مرحلة المعالجة",
        value:
          "Coagulation, flocculation, disinfection, or sludge-conditioning products",
        group_en: "Function",
        group_ar: "الوظيفة",
      },
      {
        label_en: "Product forms",
        label_ar: "أشكال المنتج",
        value:
          "Liquid or dry (powder) formulations, depending on dosing system",
        group_en: "Packaging",
        group_ar: "التعبئة",
      },
      {
        label_en: "Dosage approach",
        label_ar: "أسلوب الجرعة",
        value: "Determined by jar testing and target effluent quality",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Packaging formats",
        label_ar: "أشكال التعبئة",
        value: "Drums, IBC, or bulk tanker on request",
        group_en: "Packaging",
        group_ar: "التعبئة",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Treatment programs are matched to the locally applicable discharge/effluent standard for your project",
      },
    ],
    applications_en: [
      "Industrial effluent treatment plants",
      "Municipal wastewater treatment facilities",
      "Oil-water separation pretreatment",
      "Sludge dewatering and conditioning",
      "Food and beverage process wastewater treatment",
    ],
    applications_ar: [
      "محطات معالجة مياه الصرف الصناعي",
      "منشآت معالجة مياه الصرف الصحي البلدية",
      "المعالجة الأولية لفصل الزيت عن الماء",
      "تجفيف وتكييف الحمأة",
      "معالجة مياه الصرف الناتجة عن صناعات الأغذية والمشروبات",
    ],
    relatedProductSlugs: ["flocculants-coagulants", "ph-adjustment-chemicals"],
    relatedBrandSlugs: ["kemira", "nalco", "veolia"],
    catalogues: [
      {
        id: "wastewater-treatment-chemicals-datasheet",
        title_en: "Wastewater Treatment Chemicals Datasheet",
        title_ar: "نشرة بيانات كيماويات معالجة مياه الصرف",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/industrial-chemicals/wastewater-treatment-chemicals.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "flocculants-coagulants",
    slug: "flocculants-coagulants",
    name_en: "Flocculants & Coagulants",
    name_ar: "المواد المخثرة والمرسبة",
    shortDescription_en:
      "Flocculants and coagulants for suspended solids removal in water treatment.",
    shortDescription_ar:
      "مواد مخثرة ومرسبة لإزالة المواد العالقة في معالجة المياه.",
    longDescription_en:
      "Flocculants and coagulants that aggregate suspended solids for removal in water and wastewater treatment processes. We source products matched to your raw water characteristics and treatment process.",
    longDescription_ar:
      "مواد مخثرة ومرسبة تعمل على تجميع المواد العالقة لإزالتها في عمليات معالجة المياه ومياه الصرف. نقوم بتوريد المنتجات المطابقة لخصائص المياه الخام وعملية المعالجة لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "water-wastewater-chemicals",
    features_en: [
      "Inorganic and polymeric options across a range of charge types and densities",
      "Grades available for potable, industrial, and process water applications",
      "Selected through jar testing against your specific raw water characteristics",
    ],
    features_ar: [
      "خيارات غير عضوية وبوليمرية بمختلف أنواع الشحنات وكثافاتها",
      "درجات متوفرة للتطبيقات الخاصة بمياه الشرب والمياه الصناعية ومياه العمليات",
      "يتم اختيارها من خلال اختبارات المعالجة المخبرية (Jar Test) وفق خصائص المياه الخام لديكم",
    ],
    specifications: [
      {
        label_en: "Product type",
        label_ar: "نوع المنتج",
        value:
          "Inorganic coagulants and organic polymer flocculants (cationic, anionic, or nonionic)",
        group_en: "Function",
        group_ar: "الوظيفة",
      },
      {
        label_en: "Polymer characteristics",
        label_ar: "خصائص البوليمر",
        value: "Range of charge density and molecular weight grades available",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Dosage approach",
        label_ar: "أسلوب الجرعة",
        value:
          "Determined by jar testing against raw water turbidity and characteristics",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Packaging formats",
        label_ar: "أشكال التعبئة",
        value: "Liquid drums/IBC or dry powder bags",
        group_en: "Packaging",
        group_ar: "التعبئة",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Potable-water grades are typically selected to meet NSF/ANSI 60 criteria where applicable",
      },
    ],
    applications_en: [
      "Raw water clarification in water treatment plants",
      "Industrial wastewater solids removal",
      "Sludge thickening and dewatering aid",
      "Potable water treatment pretreatment",
      "Mining and mineral processing water clarification",
    ],
    applications_ar: [
      "توضيح المياه الخام في محطات معالجة المياه",
      "إزالة المواد الصلبة من مياه الصرف الصناعي",
      "مساعدة تكثيف وتجفيف الحمأة",
      "المعالجة الأولية لمياه الشرب",
      "توضيح مياه التعدين ومعالجة الخامات",
    ],
    relatedProductSlugs: [
      "wastewater-treatment-chemicals",
      "ph-adjustment-chemicals",
    ],
    relatedBrandSlugs: ["kemira", "basf", "solenis"],
    catalogues: [
      {
        id: "flocculants-coagulants-datasheet",
        title_en: "Flocculants & Coagulants Datasheet",
        title_ar: "نشرة بيانات المواد المخثرة والمرسبة",
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
    id: "ph-adjustment-chemicals",
    slug: "ph-adjustment-chemicals",
    name_en: "pH Adjustment Chemicals",
    name_ar: "كيماويات ضبط الرقم الهيدروجيني",
    shortDescription_en:
      "pH adjustment chemicals for water and process stream neutralization.",
    shortDescription_ar:
      "كيماويات لضبط الرقم الهيدروجيني لتعديل المياه ومجاري العمليات.",
    longDescription_en:
      "Acid and alkali products for pH adjustment and neutralization of water and process streams, sourced to your target pH range and stream volume.",
    longDescription_ar:
      "منتجات حمضية وقلوية لضبط الرقم الهيدروجيني ومعادلة المياه ومجاري العمليات، يتم توريدها وفق نطاق الرقم الهيدروجيني المستهدف وحجم المجرى لديكم.",
    sectorId: "industrial-chemicals",
    categoryId: "water-wastewater-chemicals",
    features_en: [
      "Acid and alkali product options for both directions of pH correction",
      "Dosing determined by influent buffering capacity and target range",
      "Suitable for batch or continuous-flow neutralization systems",
    ],
    features_ar: [
      "خيارات منتجات حمضية وقلوية لتعديل الرقم الهيدروجيني في كلا الاتجاهين",
      "يتم تحديد الجرعة وفق السعة المنظمة للمياه الواردة والنطاق المستهدف",
      "مناسبة لأنظمة المعادلة الدفعية أو المستمرة التدفق",
    ],
    specifications: [
      {
        label_en: "Product type",
        label_ar: "نوع المنتج",
        value: "Acid and alkali products for pH correction",
        group_en: "Function",
        group_ar: "الوظيفة",
      },
      {
        label_en: "Target pH range",
        label_ar: "نطاق الرقم الهيدروجيني المستهدف",
        value:
          "Adjustable across acidic to alkaline ranges per process requirement",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Dosage approach",
        label_ar: "أسلوب الجرعة",
        value: "Determined by influent pH, buffering capacity, and flow rate",
        group_en: "Application",
        group_ar: "التطبيق",
      },
      {
        label_en: "Packaging formats",
        label_ar: "أشكال التعبئة",
        value: "Drums, IBC, or bulk on request",
        group_en: "Packaging",
        group_ar: "التعبئة",
      },
    ],
    applications_en: [
      "Process stream pH neutralization before discharge",
      "Wastewater treatment pH correction",
      "Boiler and cooling water pH control",
      "Industrial process water conditioning",
      "Effluent neutralization prior to municipal sewer discharge",
    ],
    applications_ar: [
      "معادلة الرقم الهيدروجيني لمجاري العمليات قبل التصريف",
      "تعديل الرقم الهيدروجيني في معالجة مياه الصرف",
      "التحكم في الرقم الهيدروجيني لمياه الغلايات والتبريد",
      "تكييف مياه العمليات الصناعية",
      "معادلة مياه الصرف قبل تصريفها إلى شبكة الصرف الصحي البلدية",
    ],
    relatedProductSlugs: ["boiler-water-chemicals", "flocculants-coagulants"],
    catalogues: [
      {
        id: "ph-adjustment-chemicals-datasheet",
        title_en: "pH Adjustment Chemicals Datasheet",
        title_ar: "نشرة بيانات كيماويات ضبط الرقم الهيدروجيني",
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
