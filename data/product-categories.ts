/** Per-category SEO override — omit any field to fall back to `name_en`/`name_ar`, same convention as `ProductSeo`. */
export interface CategorySeo {
  title_en?: string;
  title_ar?: string;
  description_en?: string;
  description_ar?: string;
  keywords?: string[];
}

/**
 * The product category taxonomy every `Product.categoryId` links into.
 * Purely a data relationship in this phase (breadcrumb + grouping) — there
 * is no category browse page/route yet, only the product detail template.
 * Adding category #501 is one new row here plus one new
 * `data/products/<sectorId>/<categorySlug>.ts` file registered in
 * `data/products/index.ts`.
 *
 * `description_en/ar`, `seo`, and `indexable` exist to prepare this
 * taxonomy for a future dedicated category page — they are not consumed by
 * any route or component yet. All three are optional and every existing
 * row omits them, so nothing about current breadcrumb/grouping/filtering
 * behavior changes by their presence. See `isCategoryIndexable()` below for
 * why `indexable: true` alone is never sufficient to index a category.
 */
export interface ProductCategory {
  id: string;
  slug: string;
  /** Matches `Sector.id` in `data/sectors.ts`. */
  sectorId: string;
  name_en: string;
  name_ar: string;
  /** Path under /public — a shared photo for products in this category with no photo of their own yet. Omitted until one is sourced; never a stand-in for an unrelated category. */
  image?: string;
  /** Real, category-specific editorial copy (1-2 paragraphs) — omit entirely until genuinely written; never generic/templated filler. Required (together with `description_ar`) before `indexable: true` can take effect — see `isCategoryIndexable()`. */
  description_en?: string;
  description_ar?: string;
  /** Category-page SEO override — meaningless until a category page exists; safe to author ahead of that. */
  seo?: CategorySeo;
  /**
   * Explicit editorial approval to index this category's future page once
   * it exists — never inferred from product count, sector, or any other
   * signal. Defaults to `undefined`/non-indexable for every category today.
   * Setting this alone does NOT make a category indexable: `description_en`
   * and `description_ar` must also both be present — see
   * `isCategoryIndexable()`, the single source of truth for this decision.
   */
  indexable?: boolean;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "fire-pumps",
    slug: "fire-pumps",
    sectorId: "fire-protection",
    name_en: "Fire Pumps",
    name_ar: "مضخات الحريق",
  },
  {
    id: "valves",
    slug: "valves",
    sectorId: "fire-protection",
    name_en: "Valves",
    name_ar: "الصمامات",
  },
  {
    id: "sprinklers",
    slug: "sprinklers",
    sectorId: "fire-protection",
    name_en: "Sprinklers",
    name_ar: "رشاشات الإخماد",
  },
  {
    id: "cabinets",
    slug: "cabinets",
    sectorId: "fire-protection",
    name_en: "Cabinets",
    name_ar: "الخزائن",
  },
  {
    id: "fm200",
    slug: "fm200",
    sectorId: "fire-protection",
    name_en: "FM200",
    name_ar: "FM200",
  },
  {
    id: "fire-alarm",
    slug: "fire-alarm",
    sectorId: "fire-protection",
    name_en: "Fire Alarm",
    name_ar: "إنذار الحريق",
  },
  {
    id: "suppression-systems",
    slug: "suppression-systems",
    sectorId: "fire-protection",
    name_en: "Suppression Systems",
    name_ar: "أنظمة الإخماد",
  },
  {
    id: "accessories",
    slug: "accessories",
    sectorId: "fire-protection",
    name_en: "Accessories",
    name_ar: "الملحقات",
  },

  {
    id: "office-institutional-furniture",
    slug: "office-institutional-furniture",
    sectorId: "government-procurement",
    name_en: "Office & Institutional Furniture",
    name_ar: "أثاث مكتبي ومؤسسي",
  },
  {
    id: "security-public-safety",
    slug: "security-public-safety",
    sectorId: "government-procurement",
    name_en: "Security & Public Safety",
    name_ar: "الأمن والسلامة العامة",
  },
  {
    id: "public-lighting-power",
    slug: "public-lighting-power",
    sectorId: "government-procurement",
    name_en: "Public Lighting & Power",
    name_ar: "الإنارة العامة والطاقة",
  },

  {
    id: "process-pumps",
    slug: "process-pumps",
    sectorId: "industrial-equipment",
    name_en: "Centrifugal & Process Pumps",
    name_ar: "مضخات الطرد المركزي والعمليات",
  },
  {
    id: "industrial-valves-actuators",
    slug: "industrial-valves-actuators",
    sectorId: "industrial-equipment",
    name_en: "Valves & Actuators",
    name_ar: "الصمامات ومحركات التشغيل",
  },
  {
    id: "air-compressors-systems",
    slug: "air-compressors-systems",
    sectorId: "industrial-equipment",
    name_en: "Air Compressors & Systems",
    name_ar: "ضواغط الهواء وأنظمتها",
  },

  {
    id: "switchgear-distribution",
    slug: "switchgear-distribution",
    sectorId: "electrical-energy",
    name_en: "Switchgear & Distribution",
    name_ar: "لوحات التوزيع والمفاتيح الكهربائية",
  },
  {
    id: "standby-power-systems",
    slug: "standby-power-systems",
    sectorId: "electrical-energy",
    name_en: "Generators & Standby Power",
    name_ar: "المولدات وأنظمة الطاقة الاحتياطية",
  },
  {
    id: "industrial-lighting-solar",
    slug: "industrial-lighting-solar",
    sectorId: "electrical-energy",
    name_en: "Lighting & Solar Energy",
    name_ar: "الإنارة والطاقة الشمسية",
  },

  {
    id: "earthmoving-equipment",
    slug: "earthmoving-equipment",
    sectorId: "heavy-equipment",
    name_en: "Earthmoving Equipment",
    name_ar: "معدات نقل التراب",
    description_en:
      "GOLTENS supplies earthmoving equipment for excavation, site clearing, loading, and grading work on construction, infrastructure, and quarry projects. This category covers hydraulic excavators, wheel loaders, bulldozers, motor graders, and backhoe loaders, sourced from global manufacturers and matched to your operating weight, bucket or blade capacity, and ground condition. Our team confirms the right machine class and configuration for your jobsite before finalizing your quotation.",
    description_ar:
      "توفر GOLTENS معدات نقل التراب لأعمال الحفر وتمهيد المواقع والتحميل والتسوية في مشروعات الإنشاءات والبنية التحتية والمحاجر. تشمل هذه الفئة الحفارات الهيدروليكية، واللوادر ذات العجلات، والجرافات، ومعدات تسوية الطرق، واللوادر الحفارة، نوفرها من شركات مصنّعة عالمية ونطابقها لوزن التشغيل وسعة الجرافة أو الشفرة وطبيعة الأرض لديكم. يحدد فريقنا فئة الآلية والتكوين المناسب لموقع عملكم قبل إتمام عرض السعر.",
    seo: {
      title_en: "Earthmoving Equipment Supplier Egypt",
      title_ar: "مورد معدات نقل التراب في مصر",
      description_en:
        "Hydraulic excavators, wheel loaders, bulldozers, motor graders, and backhoe loaders matched to your jobsite, operating weight, and ground condition.",
      description_ar:
        "حفارات هيدروليكية ولوادر وجرافات ومعدات تسوية طرق ولوادر حفارة، مطابقة لوزن التشغيل وطبيعة الأرض في موقع عملكم.",
    },
  },
  {
    id: "cranes-lifting-equipment",
    slug: "cranes-lifting-equipment",
    sectorId: "heavy-equipment",
    name_en: "Cranes & Lifting Equipment",
    name_ar: "الأوناش ومعدات الرفع",
    description_en:
      "GOLTENS supplies cranes and lifting equipment for placement, access, and material-handling work across construction, industrial, and logistics operations. This category covers mobile and crawler cranes, forklifts, telehandlers, and aerial work platforms — spanning road-mobile lifting, heavy-lift work on soft ground, warehouse and yard handling, and elevated access. We confirm lifting capacity, reach, and ground condition for your project with every quotation.",
    description_ar:
      "توفر GOLTENS الأوناش ومعدات الرفع لأعمال التموضع والوصول ومناولة المواد في عمليات الإنشاءات والصناعة واللوجستيات. تشمل هذه الفئة الرافعات المتحركة والزاحفة، والرافعات الشوكية، والرافعات التلسكوبية، ومنصات العمل الهوائية — بدءًا من الرفع المتحرك على الطرق، مرورًا بأعمال الرفع الثقيل على الأرضيات الطرية، وحتى مناولة المستودعات والساحات والوصول لأعمال المرتفعات. نحدد سعة الرفع ومدى الوصول وطبيعة الأرض المناسبة لمشروعكم مع كل عرض سعر.",
    seo: {
      title_en: "Cranes & Lifting Equipment Supplier Egypt",
      title_ar: "مورد الأوناش ومعدات الرفع في مصر",
      description_en:
        "Mobile and crawler cranes, forklifts, telehandlers, and aerial work platforms matched to your lifting capacity, reach, and site conditions.",
      description_ar:
        "رافعات متحركة وزاحفة ورافعات شوكية وتلسكوبية ومنصات عمل هوائية، مطابقة لسعة الرفع ومدى الوصول وطبيعة موقعكم.",
    },
  },
  {
    id: "concrete-compaction-equipment",
    slug: "concrete-compaction-equipment",
    sectorId: "heavy-equipment",
    name_en: "Concrete & Compaction Equipment",
    name_ar: "معدات الخرسانة والدك",
    description_en:
      "GOLTENS supplies concrete and compaction equipment for placement, compaction, and paving work on construction and road projects. This category covers concrete mixers and pumps, vibratory rollers, asphalt pavers, and hydraulic breaker attachments, sourced to your batch volume, placement reach, or compaction and paving width. Our team confirms the configuration that fits your site logistics as part of every quotation.",
    description_ar:
      "توفر GOLTENS معدات الخرسانة والدك لأعمال الصب والدك والرصف في مشروعات الإنشاءات والطرق. تشمل هذه الفئة خلاطات ومضخات الخرسانة، والرصاصات الاهتزازية، وفارشات الأسفلت، وملحقات المطارق الهيدروليكية، ويتم توريدها وفق حجم الدفعة أو مدى الصب أو عرض الدك والرصف لديكم. يتأكد فريقنا من التكوين المناسب لطبيعة موقعكم ولوجستياته ضمن كل عرض سعر.",
    seo: {
      title_en: "Concrete & Compaction Equipment Supplier Egypt",
      title_ar: "مورد معدات الخرسانة والدك في مصر",
      description_en:
        "Concrete mixers, pumps, vibratory rollers, asphalt pavers, and hydraulic breakers, matched to your placement volume and compaction requirement.",
      description_ar:
        "خلاطات ومضخات خرسانة ورصاصات اهتزازية وفارشات أسفلت ومطارق هيدروليكية، مطابقة لحجم الصب ومتطلبات الدك لديكم.",
    },
  },

  {
    id: "trucks-light-vehicles",
    slug: "trucks-light-vehicles",
    sectorId: "commercial-vehicles",
    name_en: "Trucks & Light Vehicles",
    name_ar: "الشاحنات والمركبات الخفيفة",
    description_en:
      "GOLTENS supplies trucks and light vehicles for delivery, field service, and freight operations across commercial, industrial, and government fleets. This category covers light commercial vehicles, medium and heavy trucks, pickup trucks, delivery and cargo vans, and utility trucks, sourced to your payload, body configuration, and drivetrain requirement. We confirm vehicle class and specification for your fleet's operating duty with every quotation.",
    description_ar:
      "توفر GOLTENS الشاحنات والمركبات الخفيفة لأعمال التوصيل والخدمة الميدانية ونقل البضائع عبر الأساطيل التجارية والصناعية والحكومية. تشمل هذه الفئة المركبات التجارية الخفيفة، والشاحنات المتوسطة والثقيلة، وشاحنات البيك أب، وشاحنات وسيارات التوصيل، والشاحنات متعددة الاستخدامات، ويتم توريدها وفق الحمولة وتكوين الهيكل ونظام الدفع لديكم. نحدد فئة المركبة ومواصفاتها بما يناسب طبيعة تشغيل أسطولكم مع كل عرض سعر.",
    seo: {
      title_en: "Trucks & Light Vehicles Supplier Egypt",
      title_ar: "مورد الشاحنات والمركبات الخفيفة في مصر",
      description_en:
        "Light commercial vehicles, medium and heavy trucks, pickup trucks, and cargo vans matched to your fleet's payload and duty cycle.",
      description_ar:
        "مركبات تجارية خفيفة وشاحنات متوسطة وثقيلة وشاحنات بيك أب وشاحنات توصيل، مطابقة لحمولة أسطولكم ومتطلبات التشغيل.",
    },
  },
  {
    id: "trailers-transport-equipment",
    slug: "trailers-transport-equipment",
    sectorId: "commercial-vehicles",
    name_en: "Trailers",
    name_ar: "المقطورات",
    description_en:
      "GOLTENS supplies trailers for general cargo, bulk liquid, temperature-controlled, and heavy machinery transport. This category covers flatbed, tanker, refrigerated, lowbed, and heavy duty trailers, sourced to your required payload, deck configuration, or tank compatibility. Our team confirms the axle configuration and construction suited to your cargo type as part of every quotation.",
    description_ar:
      "توفر GOLTENS المقطورات لنقل البضائع العامة والسوائل بالجملة والبضائع التي تتطلب تحكمًا بدرجة الحرارة والآليات الثقيلة. تشمل هذه الفئة المقطورات المسطحة، ومقطورات الصهاريج، والمقطورات المبردة، والمقطورات المنخفضة، والمقطورات الثقيلة، ويتم توريدها وفق الحمولة المطلوبة أو تكوين السطح أو التوافق مع نوع الخزان لديكم. يحدد فريقنا تكوين المحاور وطريقة التصنيع المناسبة لنوع بضاعتكم ضمن كل عرض سعر.",
    seo: {
      title_en: "Trailers Supplier Egypt",
      title_ar: "مورد المقطورات في مصر",
      description_en:
        "Flatbed, tanker, refrigerated, lowbed, and heavy duty trailers matched to your cargo type, payload, and tank compatibility requirement.",
      description_ar:
        "مقطورات مسطحة وصهاريج ومبردة ومنخفضة وثقيلة، مطابقة لنوع بضاعتكم ومتطلبات الحمولة وتوافق الخزان.",
    },
  },
  {
    id: "specialized-municipal-vehicles",
    slug: "specialized-municipal-vehicles",
    sectorId: "commercial-vehicles",
    name_en: "Specialized & Municipal Vehicles",
    name_ar: "المركبات المتخصصة والبلدية",
    description_en:
      "GOLTENS supplies specialized and municipal vehicles for waste collection, emergency medical transport, fuel and water distribution, and street and drainage maintenance. This category covers refuse collection vehicles, ambulances, fuel and water tankers, street sweeping vehicles, and sewer cleaning and jetting vehicles, sourced to the operating authority's equipment, capacity, and configuration requirement. We confirm the chassis and fitout suited to your operation before finalizing your quotation.",
    description_ar:
      "توفر GOLTENS المركبات المتخصصة والبلدية لأعمال جمع النفايات والنقل الطبي الطارئ وتوزيع الوقود والمياه وصيانة الطرق وشبكات الصرف. تشمل هذه الفئة مركبات جمع المخلفات، وسيارات الإسعاف، وصهاريج الوقود والمياه، ومركبات كنس الشوارع، ومركبات تنظيف وشفط الصرف الصحي، ويتم توريدها وفق متطلبات التجهيز والسعة والتكوين للجهة المشغّلة. نحدد الشاسيه والتجهيز المناسب لعملياتكم قبل إتمام عرض السعر.",
    seo: {
      title_en: "Specialized & Municipal Vehicles Supplier Egypt",
      title_ar: "مورد المركبات المتخصصة والبلدية في مصر",
      description_en:
        "Refuse collection vehicles, ambulances, and fuel or water tankers for municipal and specialized fleet operations, matched to your requirement.",
      description_ar:
        "مركبات جمع مخلفات وسيارات إسعاف وصهاريج وقود ومياه، لعمليات الأساطيل البلدية والمتخصصة وفق احتياجكم.",
    },
  },

  // Healthcare's 9 legacy operational-supply categories (electrical,
  // chemicals, water treatment, catering, facility/technical, maintenance,
  // energy, general procurement) are deliberately removed from this active
  // taxonomy — the sector is now presented as a focused Hospital Equipment
  // & Medical Supplies offering. Their product files are preserved,
  // unregistered, under `data/products/healthcare/` for possible future
  // reinstatement; see the matching note in `data/products/index.ts`.
  {
    id: "patient-monitoring-diagnostic-equipment",
    slug: "patient-monitoring-diagnostic-equipment",
    sectorId: "healthcare",
    name_en: "Patient Monitoring & Diagnostic Equipment",
    name_ar: "أجهزة المراقبة والتشخيص",
  },
  {
    id: "respiratory-emergency-equipment",
    slug: "respiratory-emergency-equipment",
    sectorId: "healthcare",
    name_en: "Respiratory & Emergency Equipment",
    name_ar: "أجهزة التنفس والطوارئ",
  },
  {
    id: "sterilization-operating-room-equipment",
    slug: "sterilization-operating-room-equipment",
    sectorId: "healthcare",
    name_en: "Sterilization & Operating Room Equipment",
    name_ar: "معدات التعقيم وغرف العمليات",
  },
  {
    id: "hospital-beds-patient-handling",
    slug: "hospital-beds-patient-handling",
    sectorId: "healthcare",
    name_en: "Hospital Beds & Patient Handling",
    name_ar: "أسرّة المستشفيات ونقل المرضى",
  },
  {
    id: "medical-furniture-trolleys-carts",
    slug: "medical-furniture-trolleys-carts",
    sectorId: "healthcare",
    name_en: "Medical Furniture, Trolleys & Carts",
    name_ar: "الأثاث الطبي والعربات",
  },
  {
    id: "surgical-supplies",
    slug: "surgical-supplies",
    sectorId: "healthcare",
    name_en: "Surgical Supplies",
    name_ar: "المستلزمات الجراحية",
  },

  {
    id: "industrial-lubricants-fluids",
    slug: "industrial-lubricants-fluids",
    sectorId: "industrial-chemicals",
    name_en: "Lubricants & Fluids",
    name_ar: "الزيوت والسوائل الصناعية",
  },
  {
    id: "water-wastewater-chemicals",
    slug: "water-wastewater-chemicals",
    sectorId: "industrial-chemicals",
    name_en: "Water & Wastewater Treatment Chemicals",
    name_ar: "كيماويات معالجة المياه والصرف الصحي",
  },
  {
    id: "corrosion-protection-coatings",
    slug: "corrosion-protection-coatings",
    sectorId: "industrial-chemicals",
    name_en: "Corrosion Protection & Coatings",
    name_ar: "الحماية من التآكل والطلاءات",
  },

  {
    id: "cement-concrete-materials",
    slug: "cement-concrete-materials",
    sectorId: "construction",
    name_en: "Cement & Concrete Materials",
    name_ar: "الأسمنت ومواد الخرسانة",
  },
  {
    id: "structural-waterproofing-materials",
    slug: "structural-waterproofing-materials",
    sectorId: "construction",
    name_en: "Structural & Waterproofing Materials",
    name_ar: "المواد الإنشائية والعزل المائي",
  },
  {
    id: "site-infrastructure-materials",
    slug: "site-infrastructure-materials",
    sectorId: "construction",
    name_en: "Site & Infrastructure Materials",
    name_ar: "مواد الموقع والبنية التحتية",
  },

  {
    id: "spare-parts-oem-sourcing",
    slug: "spare-parts-oem-sourcing",
    sectorId: "global-sourcing",
    name_en: "Spare Parts & OEM Sourcing",
    name_ar: "قطع الغيار والتوريد الأصلي (OEM)",
  },
  {
    id: "bulk-materials-industrial-supply",
    slug: "bulk-materials-industrial-supply",
    sectorId: "global-sourcing",
    name_en: "Bulk Materials & Industrial Supply",
    name_ar: "المواد بالجملة والتوريد الصناعي",
  },
  {
    id: "project-sourcing-logistics",
    slug: "project-sourcing-logistics",
    sectorId: "global-sourcing",
    name_en: "Project Sourcing & Logistics",
    name_ar: "توريد المشاريع واللوجستيات",
  },
];

export function getCategoryById(id: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((category) => category.id === id);
}

/** Looks up by `slug` (the category route param), mirroring `getProductBySlug` — the category detail route validates with this plus a `sectorId` match, same pattern `[product]/page.tsx` uses for `getProductBySlug`. */
export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find((category) => category.slug === slug);
}

export function getCategoriesBySector(sectorId: string): ProductCategory[] {
  return PRODUCT_CATEGORIES.filter(
    (category) => category.sectorId === sectorId,
  );
}

/**
 * Every (sector slug, category slug) pair — mirrors `getAllProductParams()`
 * in `data/products/index.ts` exactly, ready for a future category route's
 * `generateStaticParams`. Returning every category (not just indexable
 * ones) is intentional: static generation and indexability are separate
 * concerns — a non-indexable category should still resolve as a real page
 * (never a 404) for anyone with a direct link, `noIndex`'d via
 * `isCategoryIndexable()` instead. No route consumes this yet.
 */
export function getAllCategoryParams() {
  return PRODUCT_CATEGORIES.map((category) => ({
    slug: category.sectorId,
    category: category.slug,
  }));
}

/**
 * Whether a category's future dedicated page should be indexable —
 * deliberately conservative, and the single source of truth for this
 * decision so it's never re-derived or second-guessed at a call site.
 * Requires BOTH: (1) explicit editorial approval (`indexable: true`) and
 * (2) genuine bilingual editorial content (`description_en` and
 * `description_ar` both present and non-blank). Neither alone is
 * sufficient — an approved category with no real description yet would
 * otherwise index a near-empty product-grid page (thin content); written
 * description text with no explicit approval must never be indexed purely
 * because it exists. Never derived from product count, sector, or any
 * other signal. Every one of today's 38 categories returns `false` here,
 * since none has authored `description_en`/`description_ar` yet.
 */
export function isCategoryIndexable(category: ProductCategory): boolean {
  return (
    category.indexable === true &&
    Boolean(category.description_en?.trim()) &&
    Boolean(category.description_ar?.trim())
  );
}
