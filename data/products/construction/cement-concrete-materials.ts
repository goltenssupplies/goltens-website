import type { Product } from "@/data/products/types";

/** Construction & Infrastructure → Cement & Concrete Materials category. */
export const constructionCementConcreteMaterials: Product[] = [
  {
    id: "portland-cement",
    slug: "portland-cement",
    name_en: "Portland Cement",
    name_ar: "الأسمنت البورتلاندي",
    shortDescription_en:
      "Ordinary and sulfate-resisting Portland cement for construction projects.",
    shortDescription_ar:
      "أسمنت بورتلاندي عادي ومقاوم للكبريتات لمشروعات الإنشاءات.",
    longDescription_en:
      "Portland cement in ordinary and sulfate-resisting grades, sourced for construction and infrastructure projects. We source cement matched to your project's specification and required delivery volume.",
    longDescription_ar:
      "أسمنت بورتلاندي بدرجات عادية ومقاومة للكبريتات، يتم توريده لمشروعات الإنشاءات والبنية التحتية. نقوم بتوريد الأسمنت المطابق لمواصفات مشروعكم وحجم التسليم المطلوب.",
    sectorId: "construction",
    categoryId: "cement-concrete-materials",
    features_en: [
      "Ordinary (OPC/CEM I) and sulfate-resisting (SRC) grades sourced to your mix design",
      "Bagged (50 kg) or bulk silo delivery for project-scale pours",
      "Matched to your project's strength class and exposure condition requirement",
    ],
    features_ar: [
      "درجات أسمنت عادي (OPC/CEM I) ومقاوم للكبريتات (SRC) يتم توريدها وفق تصميم الخلطة لديكم",
      "تسليم بأكياس (50 كغ) أو بالجملة عبر الصوامع لصب المشروعات الكبيرة",
      "مطابقة لفئة المقاومة وظروف التعرض المطلوبة لمشروعكم",
    ],
    specifications: [
      {
        label_en: "Cement type",
        label_ar: "نوع الأسمنت",
        value:
          "Ordinary Portland Cement (OPC/CEM I) or Sulfate-Resisting Cement (SRC)",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Strength class",
        label_ar: "فئة المقاومة",
        value:
          "Typically 42.5N–52.5N (per EN 197-1) or equivalent Type I–V grades",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "28-day compressive strength",
        label_ar: "مقاومة الضغط بعد 28 يومًا",
        value: "Typically 42.5–62.5 MPa, depending on strength class",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Initial setting time",
        label_ar: "زمن الشك الابتدائي",
        value: "Typically not less than 45–60 minutes",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Packaging",
        label_ar: "التعبئة",
        value: "50 kg bags or bulk silo delivery",
        group_en: "Supply",
        group_ar: "التوريد",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured and tested to EN 197-1 or ASTM C150 equivalent standards",
      },
    ],
    applications_en: [
      "Structural concrete for foundations, columns, and slabs",
      "Sulfate-resisting formulations for foundations in aggressive soil or groundwater",
      "Concrete block, precast, and paving unit manufacturing",
      "Mortar, plaster, and screed mixes",
      "Mass concrete pours where a lower heat-of-hydration is specified",
      "Road base and pavement concrete",
    ],
    applications_ar: [
      "خرسانة إنشائية للأساسات والأعمدة والبلاطات",
      "تركيبات مقاومة للكبريتات للأساسات في التربة أو المياه الجوفية شديدة التأثير",
      "تصنيع البلوك الخرساني والمنتجات الجاهزة ووحدات الرصف",
      "خلطات المونة والملاط والتشطيب",
      "صبات الخرسانة الكتلية التي تتطلب حرارة إماهة أقل",
      "خرسانة قواعد وأرصفة الطرق",
    ],
    relatedProductSlugs: ["ready-mix-aggregates", "concrete-admixtures"],
    relatedBrandSlugs: ["holcim", "cemex", "heidelberg-materials"],
    catalogues: [
      {
        id: "portland-cement-datasheet",
        title_en: "Portland Cement Datasheet",
        title_ar: "نشرة بيانات الأسمنت البورتلاندي",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/portland-cement.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "ready-mix-aggregates",
    slug: "ready-mix-aggregates",
    name_en: "Aggregates & Sand",
    name_ar: "الركام والرمل",
    shortDescription_en:
      "Aggregates and sand for concrete production and site works.",
    shortDescription_ar: "ركام ورمل لإنتاج الخرسانة وأعمال المواقع.",
    longDescription_en:
      "Aggregates and sand for concrete production, backfilling, and general site works, sourced to your project's gradation and volume requirement.",
    longDescription_ar:
      "ركام ورمل لإنتاج الخرسانة وأعمال الردم وأعمال المواقع العامة، يتم توريدها وفق التدرج الحبيبي والحجم المطلوب لمشروعكم.",
    sectorId: "construction",
    categoryId: "cement-concrete-materials",
    features_en: [
      "Coarse and fine gradations sourced to your project's mix design",
      "Bulk supply coordinated to project volume and delivery schedule",
      "Washed and graded options available for concrete-grade specification",
    ],
    features_ar: [
      "تدرجات خشنة وناعمة يتم توريدها وفق تصميم الخلطة لمشروعكم",
      "توريد بالجملة منسّق مع حجم المشروع وجدول التسليم",
      "خيارات مغسولة ومصنّفة متوفرة لمواصفات الخرسانة",
    ],
    specifications: [
      {
        label_en: "Aggregate type",
        label_ar: "نوع الركام",
        value:
          "Coarse aggregate (crushed stone/gravel) and fine aggregate (natural or crushed sand)",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Nominal maximum size",
        label_ar: "الحجم الأقصى الاسمي",
        value:
          "Typically 5–20 mm for coarse aggregate; fine aggregate to 4.75 mm",
        group_en: "Grading",
        group_ar: "التدرج الحبيبي",
      },
      {
        label_en: "Silt/clay content",
        label_ar: "نسبة الطمي/الطين",
        value: "Typically limited to ≤3% by mass for concrete-grade sand",
        group_en: "Grading",
        group_ar: "التدرج الحبيبي",
      },
      {
        label_en: "Bulk density",
        label_ar: "الكثافة الظاهرية",
        value: "Typically 1,400–1,700 kg/m³",
        group_en: "Physical",
        group_ar: "الخواص الفيزيائية",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically graded and tested to ASTM C33 or EN 12620 equivalent standards",
      },
    ],
    applications_en: [
      "Ready-mix and site-batched concrete production",
      "Backfilling and compacted sub-base works",
      "Asphalt and road-base aggregate blending",
      "Mortar and plaster sand",
      "Bedding sand for pipework and paving",
    ],
    applications_ar: [
      "إنتاج الخرسانة الجاهزة والمخلوطة بالموقع",
      "أعمال الردم وطبقات الأساس المدكوكة",
      "خلط الركام في قواعد الطرق والأسفلت",
      "رمل المونة والملاط",
      "رمل الفرش لأعمال المواسير والرصف",
    ],
    relatedProductSlugs: ["portland-cement", "concrete-blocks-bricks"],
    catalogues: [
      {
        id: "ready-mix-aggregates-datasheet",
        title_en: "Aggregates & Sand Datasheet",
        title_ar: "نشرة بيانات الركام والرمل",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/ready-mix-aggregates.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "concrete-blocks-bricks",
    slug: "concrete-blocks-bricks",
    name_en: "Concrete Blocks & Bricks",
    name_ar: "البلوك والطوب الخرساني",
    shortDescription_en:
      "Concrete blocks and bricks for structural and partition walling.",
    shortDescription_ar: "بلوك وطوب خرساني لأعمال الجدران الإنشائية والفاصلة.",
    longDescription_en:
      "Concrete blocks and bricks for structural and partition walling, sourced to your project's size, strength class, and quantity requirement.",
    longDescription_ar:
      "بلوك وطوب خرساني لأعمال الجدران الإنشائية والفاصلة، يتم توريده وفق المقاس وفئة المقاومة والكمية المطلوبة لمشروعكم.",
    sectorId: "construction",
    categoryId: "cement-concrete-materials",
    features_en: [
      "Solid and hollow configurations in dense and lightweight aggregate options",
      "Sourced to your project's compressive strength class and wall thickness",
      "Available in bulk project quantities with coordinated delivery",
    ],
    features_ar: [
      "تكوينات مصمتة ومفرغة بخيارات ركام كثيف وخفيف الوزن",
      "يتم توريدها وفق فئة مقاومة الضغط وسمك الجدار المطلوب لمشروعكم",
      "متوفرة بكميات كبيرة للمشروع مع تنسيق التسليم",
    ],
    specifications: [
      {
        label_en: "Block type",
        label_ar: "نوع البلوك",
        value: "Solid or hollow concrete masonry units (CMU)",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Standard sizes",
        label_ar: "المقاسات القياسية",
        value: "Typically 100/150/200 mm width x 200 x 400 mm face dimension",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Compressive strength",
        label_ar: "مقاومة الضغط",
        value:
          "Typically 3.5–10 MPa (dense block) or 7–20 MPa (structural grade)",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Density classification",
        label_ar: "تصنيف الكثافة",
        value: "Dense or lightweight aggregate block",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Water absorption",
        label_ar: "امتصاص الماء",
        value: "Typically ≤10% by mass for dense block",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured to EN 771-3 or ASTM C90 equivalent standards",
      },
    ],
    applications_en: [
      "Load-bearing masonry walls",
      "Non-load-bearing partition walls",
      "Boundary and compound walls",
      "Retaining and site boundary walls",
      "Acoustic and fire-rated partition assemblies, block type dependent",
    ],
    applications_ar: [
      "جدران بناء حاملة للأحمال",
      "جدران فاصلة غير حاملة",
      "أسوار الحدود والمجمعات",
      "جدران استنادية وأسوار المواقع",
      "تجميعات فاصلة عازلة للصوت ومقاومة للحريق وفق نوع البلوك",
    ],
    relatedProductSlugs: ["ready-mix-aggregates", "precast-concrete-products"],
    catalogues: [
      {
        id: "concrete-blocks-bricks-datasheet",
        title_en: "Concrete Blocks & Bricks Datasheet",
        title_ar: "نشرة بيانات البلوك والطوب الخرساني",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/concrete-blocks-bricks.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "concrete-admixtures",
    slug: "concrete-admixtures",
    name_en: "Concrete Admixtures & Additives",
    name_ar: "إضافات ومحسنات الخرسانة",
    shortDescription_en:
      "Admixtures that modify concrete's workability, strength, or curing time.",
    shortDescription_ar:
      "إضافات تعدّل قابلية تشغيل الخرسانة أو مقاومتها أو زمن معالجتها.",
    longDescription_en:
      "Concrete admixtures and additives that modify workability, setting time, or strength development, sourced to your mix design and site conditions.",
    longDescription_ar:
      "إضافات ومحسنات خرسانة تعدّل قابلية التشغيل أو زمن الشك أو تطور المقاومة، يتم توريدها وفق تصميم الخلطة وظروف موقعكم.",
    sectorId: "construction",
    categoryId: "cement-concrete-materials",
    features_en: [
      "Liquid admixtures sourced to your mix design and site temperature conditions",
      "Chloride-free formulations available for reinforced concrete",
      "Matched to your target slump, setting time, and strength development profile",
    ],
    features_ar: [
      "إضافات سائلة يتم توريدها وفق تصميم الخلطة وظروف حرارة الموقع لديكم",
      "تركيبات خالية من الكلوريد متوفرة للخرسانة المسلحة",
      "مطابقة لهبوط القوام المستهدف وزمن الشك ومنحنى تطور المقاومة",
    ],
    specifications: [
      {
        label_en: "Admixture types",
        label_ar: "أنواع الإضافات",
        value:
          "Plasticizers/superplasticizers, retarders, accelerators, water-reducers, and air-entraining agents",
        group_en: "Types",
        group_ar: "الأنواع",
      },
      {
        label_en: "Form",
        label_ar: "الشكل",
        value:
          "Liquid concentrate, typically supplied in 200 L drums or IBC totes",
        group_en: "Supply",
        group_ar: "التوريد",
      },
      {
        label_en: "Dosage",
        label_ar: "الجرعة",
        value: "Typically 0.2–2% by weight of cement, product-dependent",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Chloride content",
        label_ar: "محتوى الكلوريد",
        value: "Typically chloride-free (<0.1%) for reinforced concrete use",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured and tested to ASTM C494 or EN 934-2 equivalent standards",
      },
    ],
    applications_en: [
      "Workability enhancement for pumped concrete",
      "Extended working time for hot-weather concreting or long hauls",
      "Rapid strength gain for precast or repair works",
      "Water-reduction for high-strength or low-permeability mix designs",
      "Air entrainment for freeze-thaw exposure conditions",
    ],
    applications_ar: [
      "تحسين قابلية التشغيل للخرسانة المضخوخة",
      "إطالة زمن العمل في الصب بالطقس الحار أو لمسافات النقل الطويلة",
      "اكتساب مقاومة سريعة لأعمال الخرسانة الجاهزة أو الترميم",
      "تقليل نسبة الماء لتصاميم الخلطات عالية المقاومة أو منخفضة النفاذية",
      "حبس الهواء لظروف التعرض للتجمد والذوبان",
    ],
    relatedProductSlugs: ["portland-cement", "precast-concrete-products"],
    relatedBrandSlugs: ["sika", "basf", "gcp-applied-technologies"],
    catalogues: [
      {
        id: "concrete-admixtures-datasheet",
        title_en: "Concrete Admixtures Datasheet",
        title_ar: "نشرة بيانات إضافات الخرسانة",
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
    id: "precast-concrete-products",
    slug: "precast-concrete-products",
    name_en: "Precast Concrete Products",
    name_ar: "المنتجات الخرسانية الجاهزة",
    shortDescription_en:
      "Precast concrete elements for faster, factory-controlled site installation.",
    shortDescription_ar:
      "عناصر خرسانية جاهزة للتركيب الأسرع والمُصنّع بجودة مضبوطة بالموقع.",
    longDescription_en:
      "Precast concrete elements — slabs, kerbs, and structural units — manufactured off-site for faster, quality-controlled installation. We source products matched to your project's specification and installation schedule.",
    longDescription_ar:
      "عناصر خرسانية جاهزة — بلاطات وأرصفة ووحدات إنشائية — مُصنّعة خارج الموقع لتركيب أسرع وبجودة مضبوطة. نقوم بتوريد المنتجات المطابقة لمواصفات مشروعكم وجدول التركيب لديكم.",
    sectorId: "construction",
    categoryId: "cement-concrete-materials",
    features_en: [
      "Factory-controlled curing for consistent strength and finish quality",
      "Sourced to your project's dimensional and load-rating specification",
      "Coordinated delivery matched to your installation schedule",
    ],
    features_ar: [
      "معالجة مضبوطة بالمصنع لضمان ثبات المقاومة وجودة التشطيب",
      "يتم توريدها وفق المواصفات الأبعادية وتصنيف التحميل لمشروعكم",
      "تسليم منسّق وفق جدول التركيب لديكم",
    ],
    specifications: [
      {
        label_en: "Product types",
        label_ar: "أنواع المنتجات",
        value: "Precast slabs, kerbs, paving units, and structural units",
        group_en: "Design",
        group_ar: "التصميم",
      },
      {
        label_en: "Compressive strength",
        label_ar: "مقاومة الضغط",
        value: "Typically 30–50 MPa under factory-controlled curing",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Dimensional tolerance",
        label_ar: "التفاوت الأبعادي",
        value: "Typically ±3–5 mm, factory-manufactured",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Curing method",
        label_ar: "طريقة المعالجة",
        value: "Steam or controlled ambient curing",
        group_en: "Manufacturing",
        group_ar: "التصنيع",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value:
          "Typically manufactured to EN 13369 or equivalent national standards for precast concrete products",
      },
    ],
    applications_en: [
      "Precast slabs and structural units for fast-track building programs",
      "Kerbs, channels, and paving units for road and site infrastructure",
      "Precast boundary and retaining wall panels",
      "Architectural precast facade and cladding elements",
    ],
    applications_ar: [
      "بلاطات ووحدات إنشائية جاهزة لبرامج البناء السريع",
      "أرصفة وقنوات ووحدات رصف للطرق والبنية التحتية للموقع",
      "ألواح جدران حدودية واستنادية جاهزة",
      "عناصر واجهات وكسوة معمارية جاهزة",
    ],
    relatedProductSlugs: ["concrete-blocks-bricks", "concrete-admixtures"],
    catalogues: [
      {
        id: "precast-concrete-products-datasheet",
        title_en: "Precast Concrete Products Datasheet",
        title_ar: "نشرة بيانات المنتجات الخرسانية الجاهزة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/precast-concrete-products.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
