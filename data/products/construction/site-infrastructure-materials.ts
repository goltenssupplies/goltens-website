import type { Product } from "@/data/products/types";

/** Construction & Infrastructure → Site & Infrastructure Materials category. */
export const constructionSiteInfrastructureMaterials: Product[] = [
  {
    id: "sanitary-ware-fittings",
    slug: "sanitary-ware-fittings",
    name_en: "Sanitary Ware & Bathroom Fittings",
    name_ar: "الأدوات الصحية وتجهيزات الحمامات",
    shortDescription_en:
      "Sanitary ware and bathroom fittings for residential and institutional projects.",
    shortDescription_ar:
      "أدوات صحية وتجهيزات حمامات للمشروعات السكنية والمؤسسية.",
    longDescription_en:
      "Sanitary ware and bathroom fittings for residential, commercial, and institutional construction projects, sourced to your project's specification and quantity requirement.",
    longDescription_ar:
      "أدوات صحية وتجهيزات حمامات لمشروعات الإنشاءات السكنية والتجارية والمؤسسية، يتم توريدها وفق المواصفات والكمية المطلوبة لمشروعكم.",
    sectorId: "construction",
    categoryId: "site-infrastructure-materials",
    relatedProductSlugs: [
      "piping-systems-pvc-hdpe",
      "plumbing-fittings-valves",
    ],
    catalogues: [
      {
        id: "sanitary-ware-fittings-datasheet",
        title_en: "Sanitary Ware & Bathroom Fittings Datasheet",
        title_ar: "نشرة بيانات الأدوات الصحية وتجهيزات الحمامات",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/sanitary-ware-fittings.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "piping-systems-pvc-hdpe",
    slug: "piping-systems-pvc-hdpe",
    name_en: "Piping Systems (PVC, HDPE, GRP)",
    name_ar: "أنظمة المواسير (PVC، بولي إيثيلين، ألياف زجاجية)",
    shortDescription_en:
      "Piping systems for water supply, drainage, and utility networks.",
    shortDescription_ar: "أنظمة مواسير لشبكات إمداد المياه والصرف والمرافق.",
    longDescription_en:
      "Piping systems in PVC, HDPE, and GRP materials for water supply, drainage, and utility networks. We source pipes and fittings matched to your project's diameter, pressure class, and material specification.",
    longDescription_ar:
      "أنظمة مواسير من مواد PVC وبولي إيثيلين وألياف زجاجية لشبكات إمداد المياه والصرف والمرافق. نقوم بتوريد المواسير والوصلات المطابقة لقطر ومواصفات الضغط والخامة المطلوبة لمشروعكم.",
    sectorId: "construction",
    categoryId: "site-infrastructure-materials",
    relatedProductSlugs: [
      "plumbing-fittings-valves",
      "manhole-covers-drainage",
    ],
    catalogues: [
      {
        id: "piping-systems-pvc-hdpe-datasheet",
        title_en: "Piping Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة المواسير",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/piping-systems-pvc-hdpe.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "plumbing-fittings-valves",
    slug: "plumbing-fittings-valves",
    name_en: "Plumbing Fittings",
    name_ar: "تجهيزات ووصلات السباكة",
    shortDescription_en:
      "Plumbing fittings and connectors for water supply and drainage installations.",
    shortDescription_ar: "تجهيزات ووصلات سباكة لتركيبات إمداد المياه والصرف.",
    longDescription_en:
      "Plumbing fittings and connectors for water supply and drainage installations, sourced to your pipe material and connection standard.",
    longDescription_ar:
      "تجهيزات ووصلات سباكة لتركيبات إمداد المياه والصرف، يتم توريدها وفق خامة المواسير ومعيار التوصيل لديكم.",
    sectorId: "construction",
    categoryId: "site-infrastructure-materials",
    relatedProductSlugs: ["piping-systems-pvc-hdpe", "sanitary-ware-fittings"],
    catalogues: [
      {
        id: "plumbing-fittings-valves-datasheet",
        title_en: "Plumbing Fittings Datasheet",
        title_ar: "نشرة بيانات تجهيزات السباكة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/plumbing-fittings-valves.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "manhole-covers-drainage",
    slug: "manhole-covers-drainage",
    name_en: "Manhole Covers & Drainage Products",
    name_ar: "أغطية غرف التفتيش ومنتجات الصرف",
    shortDescription_en:
      "Manhole covers and drainage products for site and road infrastructure.",
    shortDescription_ar:
      "أغطية غرف تفتيش ومنتجات صرف لبنية المواقع والطرق التحتية.",
    longDescription_en:
      "Manhole covers, gully gratings, and drainage products for site and road infrastructure works, sourced to your loading class and installation location.",
    longDescription_ar:
      "أغطية غرف تفتيش وشبكات تصريف ومنتجات صرف لأعمال البنية التحتية للمواقع والطرق، يتم توريدها وفق فئة التحميل وموقع التركيب لديكم.",
    sectorId: "construction",
    categoryId: "site-infrastructure-materials",
    relatedProductSlugs: [
      "piping-systems-pvc-hdpe",
      "road-construction-materials",
    ],
    catalogues: [
      {
        id: "manhole-covers-drainage-datasheet",
        title_en: "Manhole Covers & Drainage Products Datasheet",
        title_ar: "نشرة بيانات أغطية غرف التفتيش ومنتجات الصرف",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/manhole-covers-drainage.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "road-construction-materials",
    slug: "road-construction-materials",
    name_en: "Road Construction Materials",
    name_ar: "مواد إنشاء الطرق",
    shortDescription_en:
      "Materials for road construction and site works, including asphalt and geotextiles.",
    shortDescription_ar:
      "مواد لإنشاء الطرق وأعمال المواقع، تشمل الأسفلت والجيوتكستايل.",
    longDescription_en:
      "Materials for road construction and site works — asphalt and bitumen products, geotextiles, and geomembranes — sourced to your project's specification and volume requirement.",
    longDescription_ar:
      "مواد لإنشاء الطرق وأعمال المواقع — منتجات الأسفلت والبيتومين، والجيوتكستايل، والأغشية الجيولوجية — يتم توريدها وفق مواصفات مشروعكم والحجم المطلوب.",
    sectorId: "construction",
    categoryId: "site-infrastructure-materials",
    relatedProductSlugs: ["manhole-covers-drainage", "sanitary-ware-fittings"],
    catalogues: [
      {
        id: "road-construction-materials-datasheet",
        title_en: "Road Construction Materials Datasheet",
        title_ar: "نشرة بيانات مواد إنشاء الطرق",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/construction/road-construction-materials.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
