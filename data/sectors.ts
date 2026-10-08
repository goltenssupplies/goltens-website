/**
 * Single source of truth for the "Procurement Sectors" taxonomy — the
 * homepage teaser, `/sectors`, and every `/sectors/[slug]` page are all
 * generated from this array. Adding a new sector later means adding one
 * object here; no component needs to change. `image`/`icon` are plain
 * strings (not JSX) so this file stays swappable for a future CMS without
 * any React import.
 */
export interface Sector {
  id: string;
  slug: string;
  title_en: string;
  title_ar: string;
  /** Optional Hero subtitle, shown above the description when present — omit for sectors that don't need the extra line. */
  subtitle_en?: string;
  subtitle_ar?: string;
  description_en: string;
  description_ar: string;
  /** Path under /public. Falls back to a shared image when a sector has no dedicated photo — see `lib/sectors.ts`. */
  image: string | null;
  /** Lucide icon name — resolved via `SECTOR_ICONS` in `lib/sectors.ts`. */
  icon: string;
  featured: boolean;
  order: number;
}

export const SECTORS: Sector[] = [
  {
    id: "government-procurement",
    slug: "government-procurement",
    title_en: "Government & Public-Sector Procurement",
    title_ar: "التوريدات الحكومية والعامة",
    subtitle_en:
      "Procurement support based on tender requirements, BOQs and technical specifications.",
    subtitle_ar:
      "توريدات وفق متطلبات المناقصات وجداول الكميات والمواصفات الفنية.",
    description_en:
      "GOLTENS supplies products and equipment against customer-provided tender, project and technical requirements.",
    description_ar:
      "توفر GOLTENS المنتجات والمعدات وفق متطلبات المناقصات والمشروعات والمواصفات الفنية المقدمة من العميل.",
    image: "/images/categories/government-solutions-new.jpg",
    icon: "Landmark",
    featured: true,
    order: 1,
  },
  {
    id: "industrial-equipment",
    slug: "industrial-equipment",
    title_en: "Industrial Equipment & Pumps",
    title_ar: "المعدات الصناعية والمضخات",
    subtitle_en:
      "GOLTENS supplies industrial pumps, compressors, valves, and mechanical equipment — matched to your flow, pressure, and duty-condition requirements.",
    subtitle_ar:
      "توفر GOLTENS مضخات صناعية وضواغط هواء وصمامات ومعدات ميكانيكية — مطابقة لمتطلبات التدفق والضغط وظروف التشغيل لديكم.",
    description_en:
      "Industrial pumps, valves, actuators and compressed-air equipment, supplied to your technical specifications.",
    description_ar:
      "مضخات وصمامات ومشغلات ومعدات هواء مضغوط صناعية، يتم توريدها وفق مواصفاتكم الفنية.",
    image: "/images/categories/industrial-pumps-new.jpg",
    icon: "Wrench",
    featured: true,
    order: 2,
  },
  {
    id: "fire-protection",
    slug: "fire-protection",
    title_en: "Fire Protection Equipment",
    title_ar: "معدات مكافحة الحريق",
    subtitle_en:
      "GOLTENS supplies fire protection equipment according to your project requirements, technical specifications and customer or consultant-approved documentation.",
    subtitle_ar:
      "توفر GOLTENS معدات مكافحة الحريق وفق متطلبات المشروع والمواصفات الفنية والمستندات المعتمدة من العميل أو الاستشاري.",
    description_en:
      "Fire protection equipment, systems and components, supplied to your project specifications for government projects, industrial facilities, hospitals, universities, commercial buildings and infrastructure projects.",
    description_ar:
      "معدات وأنظمة ومكونات مكافحة الحريق، يتم توريدها وفق مواصفات مشروعكم للمشروعات الحكومية، والمنشآت الصناعية، والمستشفيات، والجامعات، والمباني التجارية، ومشروعات البنية التحتية.",
    image: "/images/categories/fire-protection-new.jpg",
    icon: "Flame",
    featured: true,
    order: 3,
  },
  {
    id: "electrical-energy",
    slug: "electrical-energy",
    title_en: "Electrical & Energy Solutions",
    title_ar: "حلول الكهرباء والطاقة",
    subtitle_en:
      "GOLTENS supplies switchgear, generators, transformers, and lighting for industrial and commercial facilities — matched to your load and voltage requirements.",
    subtitle_ar:
      "توفر GOLTENS لوحات توزيع ومولدات ومحولات وإنارة للمنشآت الصناعية والتجارية — مطابقة لمتطلبات الأحمال والجهد لديكم.",
    description_en:
      "Electrical equipment, components, and energy solutions sourced to specification for industrial and commercial facilities.",
    description_ar:
      "معدات ومكونات كهربائية وحلول طاقة يتم توريدها وفق المواصفات المطلوبة للمنشآت الصناعية والتجارية.",
    image: "/images/categories/electrical-energy-new.jpg",
    icon: "Zap",
    featured: false,
    order: 4,
  },
  {
    id: "heavy-equipment",
    slug: "heavy-equipment",
    title_en: "Heavy Equipment & Machinery",
    title_ar: "المعدات الثقيلة",
    subtitle_en:
      "GOLTENS supplies earthmoving equipment, cranes, and construction machinery — matched to your jobsite and technical requirements.",
    subtitle_ar:
      "توفر GOLTENS معدات نقل التراب والأوناش وآليات الإنشاءات — مطابقة لمتطلبات موقع العمل والمواصفات الفنية لديكم.",
    description_en:
      "Heavy machinery and equipment for construction, industrial, and logistics operations.",
    description_ar:
      "معدات وآليات ثقيلة لعمليات الإنشاءات والصناعة واللوجستيات.",
    image: "/images/categories/heavy-equipment-new.jpg",
    icon: "Forklift",
    featured: true,
    order: 5,
  },
  {
    id: "commercial-vehicles",
    slug: "commercial-vehicles",
    title_en: "Commercial Vehicles & Fleet Solutions",
    title_ar: "المركبات التجارية وحلول الأساطيل",
    subtitle_en:
      "GOLTENS supplies trucks, trailers, and specialized vehicles — matched to your fleet's payload, configuration, and operational requirements.",
    subtitle_ar:
      "توفر GOLTENS شاحنات ومقطورات ومركبات متخصصة — مطابقة للحمولة وتكوين الأسطول ومتطلبات التشغيل لديكم.",
    description_en:
      "Trucks, trailers, and specialized vehicles sourced to match your fleet's operational and replacement requirements.",
    description_ar:
      "شاحنات ومقطورات ومركبات متخصصة، يتم توريدها وفق احتياجات أسطولكم التشغيلية ومتطلبات الاستبدال.",
    image: "/images/categories/commercial-vehicles-new.jpg",
    icon: "Truck",
    featured: false,
    order: 6,
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title_en: "Hospital Equipment & Medical Supplies",
    title_ar: "تجهيزات المستشفيات والمستلزمات الطبية",
    subtitle_en:
      "GOLTENS supplies hospital equipment, medical beds, hospital furniture and surgical supplies according to customer specifications, BOQs and equipment schedules.",
    subtitle_ar:
      "توفر GOLTENS تجهيزات المستشفيات والأسرّة الطبية والأثاث الطبي والمستلزمات الجراحية وفق مواصفات العميل وجداول الكميات وقوائم المعدات.",
    description_en:
      "Hospital equipment and medical supplies supplied according to customer specifications.",
    description_ar:
      "تجهيزات المستشفيات والمستلزمات الطبية التي يتم توفيرها وفق مواصفات العميل.",
    image: "/images/categories/health-mri1.jpg",
    icon: "HeartPulse",
    featured: true,
    order: 7,
  },
  {
    id: "industrial-chemicals",
    slug: "industrial-chemicals",
    title_en: "Industrial & Laboratory Chemicals",
    title_ar: "الكيماويات الصناعية والمعملية",
    subtitle_en:
      "GOLTENS supplies laboratory and industrial chemicals, water-treatment chemicals and protective coatings according to customer specifications.",
    subtitle_ar:
      "توفر GOLTENS الكيماويات المعملية والصناعية وكيماويات معالجة المياه والطلاءات الواقية وفق مواصفات العميل.",
    description_en:
      "Laboratory and industrial chemicals sourced according to customer specifications.",
    description_ar: "كيماويات معملية وصناعية يتم توفيرها وفق مواصفات العميل.",
    image: "/images/categories/industrial-chemicals.jpg",
    icon: "FlaskConical",
    featured: false,
    order: 8,
  },
  {
    id: "construction",
    slug: "construction",
    title_en: "Construction & Infrastructure Materials",
    title_ar: "مواد البناء والبنية التحتية",
    subtitle_en:
      "GOLTENS supplies cement, steel, waterproofing, and construction materials — matched to your BOQ and engineering specification.",
    subtitle_ar:
      "توفر GOLTENS الأسمنت والحديد ومواد العزل ومواد البناء — مطابقة لجدول الكميات (BOQ) والمواصفات الهندسية لديكم.",
    description_en:
      "Materials and equipment supply for construction, engineering, and infrastructure projects.",
    description_ar:
      "توريد المواد والمعدات لمشاريع الإنشاءات والهندسة والبنية التحتية.",
    image: "/images/categories/construction-infrastructure-new.jpg",
    icon: "HardHat",
    featured: false,
    order: 9,
  },
  {
    id: "global-sourcing",
    slug: "global-sourcing",
    title_en: "Global Sourcing & Hard-to-Source Procurement",
    title_ar: "التوريد العالمي والأصناف صعبة التوفير",
    subtitle_en:
      "Request-led sourcing for hard-to-find parts, components, materials and non-standard items based on customer-provided information.",
    subtitle_ar:
      "توريد حسب الطلب للأصناف والمكونات والخامات والأصناف غير القياسية صعبة التوفير، وفق المعلومات المقدمة من العميل.",
    description_en:
      "GOLTENS reviews customer-provided item information and sources specified or permitted alternative items for quotation.",
    description_ar:
      "تراجع GOLTENS بيانات الأصناف المقدمة من العميل وتوفر الأصناف المحددة أو البدائل المسموح بها ضمن عرض السعر.",
    image: "/images/categories/marine-logistics.jpg",
    icon: "Globe",
    featured: false,
    order: 10,
  },
  {
    id: "lubricants-oils",
    slug: "lubricants-oils",
    title_en: "Lubricants & Oils",
    title_ar: "الزيوت ومواد التشحيم الصناعية",
    subtitle_en:
      "GOLTENS supplies industrial lubricants, hydraulic oils, gear oils, greases, and metalworking fluids — matched to your equipment manufacturer's grade and viscosity requirement.",
    subtitle_ar:
      "توفر GOLTENS زيوتًا صناعية وزيوتًا هيدروليكية وزيوت تروس وشحومًا وسوائل تشغيل معدني — مطابقة للدرجة واللزوجة التي تحددها الجهة المصنّعة لمعداتكم.",
    description_en:
      "Industrial lubricants and oils supplied to your equipment's specified grade.",
    description_ar: "زيوت ومواد تشحيم صناعية وفق الدرجة المحددة لمعداتكم.",
    // No dedicated photo sourced yet — falls back to the sitewide hero image
    // via `getSectorImage` (lib/sectors.ts), same convention every other
    // sector without one uses. Never a guessed/invented file path.
    image: null,
    icon: "Droplets",
    featured: false,
    order: 11,
  },
];

export type SectorSlug = (typeof SECTORS)[number]["slug"];

export function getSectorBySlug(slug: string): Sector | undefined {
  return SECTORS.find((sector) => sector.slug === slug);
}

/** Looks up by the immutable `id`, not the (potentially-renamed) `slug` — the join every cross-entity relationship (e.g. Knowledge Platform items) must use instead of a slug. */
export function getSectorById(id: string): Sector | undefined {
  return SECTORS.find((sector) => sector.id === id);
}

export function getSortedSectors(): Sector[] {
  return [...SECTORS].sort((a, b) => a.order - b.order);
}
