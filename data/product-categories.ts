/**
 * The product category taxonomy every `Product.categoryId` links into.
 * Purely a data relationship in this phase (breadcrumb + grouping) — there
 * is no category browse page/route yet, only the product detail template.
 * Adding category #501 is one new row here plus one new
 * `data/products/<sectorId>/<categorySlug>.ts` file registered in
 * `data/products/index.ts`.
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
  },
  {
    id: "cranes-lifting-equipment",
    slug: "cranes-lifting-equipment",
    sectorId: "heavy-equipment",
    name_en: "Cranes & Lifting Equipment",
    name_ar: "الأوناش ومعدات الرفع",
  },
  {
    id: "concrete-compaction-equipment",
    slug: "concrete-compaction-equipment",
    sectorId: "heavy-equipment",
    name_en: "Concrete & Compaction Equipment",
    name_ar: "معدات الخرسانة والدك",
  },

  {
    id: "trucks-light-vehicles",
    slug: "trucks-light-vehicles",
    sectorId: "commercial-vehicles",
    name_en: "Trucks & Light Vehicles",
    name_ar: "الشاحنات والمركبات الخفيفة",
  },
  {
    id: "trailers-transport-equipment",
    slug: "trailers-transport-equipment",
    sectorId: "commercial-vehicles",
    name_en: "Trailers",
    name_ar: "المقطورات",
  },
  {
    id: "specialized-municipal-vehicles",
    slug: "specialized-municipal-vehicles",
    sectorId: "commercial-vehicles",
    name_en: "Specialized & Municipal Vehicles",
    name_ar: "المركبات المتخصصة والبلدية",
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

export function getCategoriesBySector(sectorId: string): ProductCategory[] {
  return PRODUCT_CATEGORIES.filter(
    (category) => category.sectorId === sectorId,
  );
}
