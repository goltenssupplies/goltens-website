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
    relatedProductSlugs: ["ready-mix-aggregates", "concrete-admixtures"],
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
    relatedProductSlugs: ["portland-cement", "precast-concrete-products"],
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
