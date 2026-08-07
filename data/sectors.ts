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
    title_en: "Government Procurement",
    title_ar: "الحلول الحكومية والتوريدات العامة",
    description_en:
      "Supply solutions aligned with public-sector procurement standards.",
    description_ar: "حلول توريد متوافقة مع معايير المشتريات الحكومية.",
    image: null,
    icon: "Landmark",
    featured: true,
    order: 1,
  },
  {
    id: "industrial-equipment",
    slug: "industrial-equipment",
    title_en: "Industrial Equipment & Pumps",
    title_ar: "المضخات والمعدات الصناعية",
    description_en:
      "Reliable industrial pumps and mechanical equipment, matched to your technical specifications.",
    description_ar:
      "مضخات صناعية ومعدات ميكانيكية موثوقة، مطابقة لمواصفاتكم الفنية.",
    image: "/images/categories/industrial-pumps.webp",
    icon: "Wrench",
    featured: true,
    order: 2,
  },
  {
    id: "fire-protection",
    slug: "fire-protection",
    title_en: "Fire Protection Systems & Safety Solutions",
    title_ar: "أنظمة مكافحة الحريق وحلول السلامة",
    subtitle_en:
      "GOLTENS supplies complete fire protection solutions for government, hospitals, universities, industrial facilities, commercial buildings, and infrastructure projects.",
    subtitle_ar:
      "توفر GOLTENS حلولاً متكاملة لمكافحة الحريق للجهات الحكومية والمستشفيات والجامعات والمنشآت الصناعية والمباني التجارية ومشروعات البنية التحتية.",
    description_en:
      "We supply complete fire protection equipment, systems and certified components for government projects, industrial facilities, hospitals, universities, commercial buildings and infrastructure projects.",
    description_ar:
      "نوفر معدات وأنظمة ومكونات مكافحة حريق معتمدة وكاملة للمشروعات الحكومية، والمنشآت الصناعية، والمستشفيات، والجامعات، والمباني التجارية، ومشروعات البنية التحتية.",
    image: "/images/hero/slide-fire-fighting.webp",
    icon: "Flame",
    featured: true,
    order: 3,
  },
  {
    id: "electrical-energy",
    slug: "electrical-energy",
    title_en: "Electrical & Energy Solutions",
    title_ar: "حلول الكهرباء والطاقة",
    description_en:
      "Electrical equipment, components, and energy solutions sourced to specification for industrial and commercial facilities.",
    description_ar:
      "معدات ومكونات كهربائية وحلول طاقة يتم توريدها وفق المواصفات المطلوبة للمنشآت الصناعية والتجارية.",
    image: null,
    icon: "Zap",
    featured: false,
    order: 4,
  },
  {
    id: "heavy-equipment",
    slug: "heavy-equipment",
    title_en: "Heavy Equipment & Machinery",
    title_ar: "المعدات الثقيلة",
    description_en:
      "Heavy machinery and equipment for construction, industrial, and logistics operations.",
    description_ar:
      "معدات وآليات ثقيلة لعمليات الإنشاءات والصناعة واللوجستيات.",
    image: "/images/hero/slide-heavy-equipment.webp",
    icon: "Forklift",
    featured: true,
    order: 5,
  },
  {
    id: "commercial-vehicles",
    slug: "commercial-vehicles",
    title_en: "Commercial Vehicles & Fleet Solutions",
    title_ar: "المركبات التجارية وحلول الأساطيل",
    description_en:
      "Commercial vehicles and fleet solutions to support your logistics operations.",
    description_ar: "مركبات تجارية وحلول تجهيز أساطيل لدعم عملياتكم اللوجستية.",
    image: "/images/categories/commercial-vehicles.webp",
    icon: "Truck",
    featured: false,
    order: 6,
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title_en: "Healthcare & Medical Solutions",
    title_ar: "حلول وتجهيزات المستشفيات",
    description_en:
      "Reliable supply for hospitals and medical centers, where availability is never optional.",
    description_ar:
      "توريد موثوق للمستشفيات والمراكز الطبية، لا يحتمل أي تأخير في التوافر.",
    image: null,
    icon: "HeartPulse",
    featured: true,
    order: 7,
  },
  {
    id: "industrial-chemicals",
    slug: "industrial-chemicals",
    title_en: "Industrial Chemicals & Lubricants",
    title_ar: "الكيماويات والزيوت الصناعية",
    description_en:
      "Industrial chemicals, laboratory reagents, and high-quality lubricants supplied to specification.",
    description_ar:
      "كيماويات صناعية ومواد مختبرية وزيوت صناعية عالية الجودة وفق المواصفات المطلوبة.",
    image: "/images/categories/industrial-chemicals.webp",
    icon: "FlaskConical",
    featured: false,
    order: 8,
  },
  {
    id: "construction",
    slug: "construction",
    title_en: "Construction & Infrastructure",
    title_ar: "مواد البناء والبنية التحتية",
    description_en:
      "Materials and equipment supply for construction, engineering, and infrastructure projects.",
    description_ar:
      "توريد المواد والمعدات لمشاريع الإنشاءات والهندسة والبنية التحتية.",
    image: null,
    icon: "HardHat",
    featured: false,
    order: 9,
  },
  {
    id: "global-sourcing",
    slug: "global-sourcing",
    title_en: "Global Sourcing & OEM Brands",
    title_ar: "الاستيراد العالمي والعلامات التجارية",
    description_en:
      "Genuine products from leading global manufacturers, sourced through a trusted international supplier network.",
    description_ar:
      "منتجات أصلية من كبرى الشركات المصنّعة العالمية، من خلال شبكة موردين دولية موثوقة.",
    image: null,
    icon: "Globe",
    featured: false,
    order: 10,
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
