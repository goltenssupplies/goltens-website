import type { SectorSlug } from "@/data/sectors";

/**
 * One real, individually-verified SKU a brand offers that GOLTENS can
 * supply in Egypt. `sourceUrl` must point at the official manufacturer
 * page/datasheet (or official Egypt distributor/entity page) used to
 * confirm the exact model number — never a fabricated or estimated one.
 * Deliberately minimal (name/model/one-line description only, no specs,
 * no long copy) per the brand page's "Verified Products" format.
 */
export interface VerifiedBrandProduct {
  name_en: string;
  name_ar: string;
  model: string;
  description_en: string;
  description_ar: string;
  sourceUrl: string;
}

/**
 * Single source of truth for the Global Brands showcase — the homepage
 * teaser, `/brands`, and every `/brands/[slug]` page are all generated from
 * this array. Adding a new brand later means adding one object here; no
 * component needs to change.
 *
 * `sectorSlug` links each brand to its real category in `data/sectors.ts`
 * instead of a second, parallel taxonomy — the same 8 categories the brief
 * lists map 1:1 onto 8 of the 10 Procurement Sectors, so category labels
 * and each brand page's "Related Sector" link both come from one place.
 */
export interface Brand {
  id: string;
  slug: string;
  name: string;
  sectorSlug: SectorSlug;
  featured: boolean;
  /**
   * Forward-compatible metadata — not read by any component today
   * (`BrandHero`/`BrandCard` stay typographic-only by design; see this
   * file's doc comment). Populate with real, publicly verifiable facts
   * only; never fabricated marketing copy.
   */
  /** Path under /public to a licensed logo asset, or omit — no licensed logo assets exist yet. */
  logo?: string | null;
  /** Official brand/manufacturer website, when confidently known. */
  website?: string;
  /** Country of headquarters/origin. */
  country?: string;
  /** Short procurement-category label (distinct from `sectorSlug`, which links to the site's own taxonomy). */
  category?: string;
  /** Real per-brand description — left unset everywhere today so brand pages keep using the approved generic template copy (see `components/brands/BrandFeatures.tsx`) rather than fabricated claims. */
  description?: string;
  /** Individually-verified SKUs GOLTENS can supply in Egypt for this brand — omit while a brand hasn't been through verification yet (its page keeps the honest "Coming Soon" state). */
  verifiedProducts?: VerifiedBrandProduct[];
}

export const BRANDS: Brand[] = [
  // Fire Protection
  {
    id: "johnson-controls",
    slug: "johnson-controls",
    name: "Johnson Controls",
    sectorSlug: "fire-protection",
    featured: true,
    country: "Ireland",
    category: "Fire Protection Equipment",
    website: "https://www.johnsoncontrols.com",
    verifiedProducts: [
      {
        name_en: "Addressable Fire Alarm Control Unit",
        name_ar: "لوحة تحكم إنذار حريق قابلة للعنونة",
        model: "4100ES",
        description_en:
          "Addressable, networkable fire alarm control unit for large facilities, up to 1,000 points.",
        description_ar:
          "لوحة تحكم إنذار حريق قابلة للعنونة وقابلة للربط الشبكي للمنشآت الكبيرة، حتى 1000 نقطة.",
        sourceUrl:
          "https://jcarabia.com/en_eg/product-and-solutions/fire-detection/control-panels/",
      },
      {
        name_en: "Addressable Fire Alarm Control Unit",
        name_ar: "لوحة تحكم إنذار حريق قابلة للعنونة",
        model: "4010ES",
        description_en:
          "Addressable fire alarm control panel for mid-size buildings, 250 to 1,000 points.",
        description_ar:
          "لوحة تحكم إنذار حريق قابلة للعنونة للمباني متوسطة الحجم، من 250 إلى 1000 نقطة.",
        sourceUrl:
          "https://jcarabia.com/en_eg/product-and-solutions/fire-detection/control-panels/4010es/",
      },
      {
        name_en: "Addressable Fire Alarm Control Unit",
        name_ar: "لوحة تحكم إنذار حريق قابلة للعنونة",
        model: "4007ES",
        description_en:
          "Addressable fire alarm control unit for small-to-mid facilities with color touchscreen.",
        description_ar:
          "لوحة تحكم إنذار حريق قابلة للعنونة للمنشآت الصغيرة والمتوسطة بشاشة لمس ملونة.",
        sourceUrl:
          "https://jcarabia.com/en_eg/product-and-solutions/fire-detection/control-panels/",
      },
      {
        name_en: "Conventional Fire Alarm Control Panel",
        name_ar: "لوحة تحكم إنذار حريق تقليدية",
        model: "4006",
        description_en:
          "Conventional fire alarm control panel for small facilities.",
        description_ar: "لوحة تحكم إنذار حريق تقليدية للمنشآت الصغيرة.",
        sourceUrl:
          "https://jcarabia.com/en_eg/product-and-solutions/fire-detection/control-panels/",
      },
      {
        name_en: "Suppression Releasing Panel",
        name_ar: "لوحة تحرير إطفاء",
        model: "4004R",
        description_en:
          "Two-hazard releasing panel combining agent release and pre-action operation.",
        description_ar:
          "لوحة تحرير بحالتي خطر تجمع بين إطلاق العامل والتشغيل المسبق.",
        sourceUrl:
          "https://jcarabia.com/en_eg/product-and-solutions/fire-detection/control-panels/",
      },
      {
        name_en: "Addressable Photoelectric Smoke Sensor",
        name_ar: "كاشف دخان ضوئي قابل للعنونة",
        model: "A4098-9714",
        description_en:
          "TrueAlarm addressable photoelectric smoke sensor, 360° smoke entry.",
        description_ar:
          "كاشف دخان ضوئي قابل للعنونة من طراز TrueAlarm، بدخول دخان محيطي 360 درجة.",
        sourceUrl:
          "https://www.autocall.com/uploads/resources/Datasheets/AC4098-0019.pdf",
      },
      {
        name_en: "Addressable Heat Sensor",
        name_ar: "كاشف حرارة قابل للعنونة",
        model: "A4098-9733",
        description_en:
          "TrueAlarm addressable heat sensor, selectable fixed-temperature and rate-of-rise sensing.",
        description_ar:
          "كاشف حرارة قابل للعنونة من طراز TrueAlarm، بخاصية استشعار حرارة ثابتة أو معدل ارتفاع قابلة للاختيار.",
        sourceUrl:
          "https://www.autocall.com/uploads/resources/Datasheets/AC4098-0019.pdf",
      },
    ],
  },
  {
    id: "kidde",
    slug: "kidde",
    name: "Kidde",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United States",
    category: "Fire Protection Equipment",
    website: "https://www.kidde.com",
  },
  {
    id: "minimax",
    slug: "minimax",
    name: "Minimax",
    sectorSlug: "fire-protection",
    featured: false,
    country: "Germany",
    category: "Fire Protection Equipment",
    website: "https://www.minimax.com",
  },
  {
    id: "victaulic",
    slug: "victaulic",
    name: "Victaulic",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United States",
    category: "Fire Protection Equipment",
    website: "https://www.victaulic.com",
  },
  {
    id: "naffco",
    slug: "naffco",
    name: "NAFFCO",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United Arab Emirates",
    category: "Fire Protection Equipment",
    website: "https://www.naffco.com",
  },
  {
    id: "tyco",
    slug: "tyco",
    name: "Tyco",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United States",
    category: "Fire Protection Equipment",
  },
  {
    id: "honeywell",
    slug: "honeywell",
    name: "Honeywell",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United States",
    category: "Fire Protection Equipment",
    website: "https://www.honeywell.com",
  },
  {
    id: "notifier",
    slug: "notifier",
    name: "Notifier",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United States",
    category: "Fire Protection Equipment",
  },
  {
    id: "simplex",
    slug: "simplex",
    name: "Simplex",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United States",
    category: "Fire Protection Equipment",
  },
  {
    id: "morley",
    slug: "morley",
    name: "Morley",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United Kingdom",
    category: "Fire Protection Equipment",
  },
  {
    id: "reliable",
    slug: "reliable",
    name: "Reliable",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United States",
    category: "Fire Protection Equipment",
    website: "https://www.reliablesprinkler.com",
  },
  {
    id: "viking",
    slug: "viking",
    name: "Viking",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United States",
    category: "Fire Protection Equipment",
    website: "https://www.vikinggroupinc.com",
  },
  {
    id: "rapidrop",
    slug: "rapidrop",
    name: "Rapidrop",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United Kingdom",
    category: "Fire Protection Equipment",
    website: "https://www.rapidrop.com",
  },
  {
    id: "potter",
    slug: "potter",
    name: "Potter",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United States",
    category: "Fire Protection Equipment",
    website: "https://www.pottersignal.com",
  },
  {
    id: "peerless",
    slug: "peerless",
    name: "Peerless",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United States",
    category: "Fire Protection Equipment",
    website: "https://www.peerlesspump.com",
  },
  {
    id: "aurora",
    slug: "aurora",
    name: "Aurora",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United States",
    category: "Fire Protection Equipment",
    website: "https://www.aurorapump.com",
  },
  {
    id: "clarke",
    slug: "clarke",
    name: "Clarke",
    sectorSlug: "fire-protection",
    featured: false,
    country: "United Kingdom",
    category: "Fire Protection Equipment",
    website: "https://www.clarkefire.com",
  },

  // Pumps
  {
    id: "grundfos",
    slug: "grundfos",
    name: "Grundfos",
    sectorSlug: "industrial-equipment",
    featured: true,
    country: "Denmark",
    category: "Pumps & Water Systems",
    website: "https://www.grundfos.com",
  },
  {
    id: "ksb",
    slug: "ksb",
    name: "KSB",
    sectorSlug: "industrial-equipment",
    featured: false,
    country: "Germany",
    category: "Pumps & Water Systems",
    website: "https://www.ksb.com",
  },
  {
    id: "wilo",
    slug: "wilo",
    name: "Wilo",
    sectorSlug: "industrial-equipment",
    featured: false,
    country: "Germany",
    category: "Pumps & Water Systems",
    website: "https://www.wilo.com",
  },
  {
    id: "ebara",
    slug: "ebara",
    name: "Ebara",
    sectorSlug: "industrial-equipment",
    featured: false,
    country: "Japan",
    category: "Pumps & Water Systems",
    website: "https://www.ebara.com",
  },
  {
    id: "lowara",
    slug: "lowara",
    name: "Lowara",
    sectorSlug: "industrial-equipment",
    featured: false,
    country: "Italy",
    category: "Pumps & Water Systems",
    website: "https://www.lowara.com",
  },
  {
    id: "pedrollo",
    slug: "pedrollo",
    name: "Pedrollo",
    sectorSlug: "industrial-equipment",
    featured: false,
    country: "Italy",
    category: "Pumps & Water Systems",
    website: "https://www.pedrollo.com",
  },

  // Industrial Oils
  {
    id: "molykote",
    slug: "molykote",
    name: "Molykote",
    sectorSlug: "industrial-chemicals",
    featured: false,
    country: "Germany",
    category: "Industrial Lubricants & Chemicals",
    website: "https://www.molykote.com",
  },
  {
    id: "permatex",
    slug: "permatex",
    name: "Permatex",
    sectorSlug: "industrial-chemicals",
    featured: false,
    country: "United States",
    category: "Industrial Lubricants & Chemicals",
    website: "https://www.permatex.com",
  },
  {
    id: "loctite",
    slug: "loctite",
    name: "Loctite",
    sectorSlug: "industrial-chemicals",
    featured: false,
    country: "Germany",
    category: "Industrial Lubricants & Chemicals",
  },
  {
    id: "shell",
    slug: "shell",
    name: "Shell",
    sectorSlug: "industrial-chemicals",
    featured: true,
    country: "United Kingdom",
    category: "Industrial Lubricants & Chemicals",
    website: "https://www.shell.com",
  },
  {
    id: "mobil",
    slug: "mobil",
    name: "Mobil",
    sectorSlug: "industrial-chemicals",
    featured: true,
    country: "United States",
    category: "Industrial Lubricants & Chemicals",
    website: "https://www.mobil.com",
  },
  {
    id: "totalenergies",
    slug: "totalenergies",
    name: "TotalEnergies",
    sectorSlug: "industrial-chemicals",
    featured: false,
    country: "France",
    category: "Industrial Lubricants & Chemicals",
    website: "https://www.totalenergies.com",
  },

  // Heavy Equipment
  {
    id: "caterpillar",
    slug: "caterpillar",
    name: "Caterpillar",
    sectorSlug: "heavy-equipment",
    featured: true,
    country: "United States",
    category: "Heavy Equipment & Machinery",
    website: "https://www.caterpillar.com",
  },
  {
    id: "komatsu",
    slug: "komatsu",
    name: "Komatsu",
    sectorSlug: "heavy-equipment",
    featured: true,
    country: "Japan",
    category: "Heavy Equipment & Machinery",
    website: "https://www.komatsu.com",
  },
  {
    id: "volvo-ce",
    slug: "volvo-ce",
    name: "Volvo CE",
    sectorSlug: "heavy-equipment",
    featured: false,
    country: "Sweden",
    category: "Heavy Equipment & Machinery",
    website: "https://www.volvoce.com",
  },
  {
    id: "hitachi",
    slug: "hitachi",
    name: "Hitachi",
    sectorSlug: "heavy-equipment",
    featured: false,
    country: "Japan",
    category: "Heavy Equipment & Machinery",
    website: "https://www.hitachi.com",
  },
  {
    id: "case",
    slug: "case",
    name: "CASE",
    sectorSlug: "heavy-equipment",
    featured: false,
    country: "United States",
    category: "Heavy Equipment & Machinery",
  },
  {
    id: "jcb",
    slug: "jcb",
    name: "JCB",
    sectorSlug: "heavy-equipment",
    featured: false,
    country: "United Kingdom",
    category: "Heavy Equipment & Machinery",
    website: "https://www.jcb.com",
  },

  // Electrical
  {
    id: "schneider-electric",
    slug: "schneider-electric",
    name: "Schneider Electric",
    sectorSlug: "electrical-energy",
    featured: true,
    country: "France",
    category: "Electrical & Automation",
    website: "https://www.se.com",
  },
  {
    id: "abb",
    slug: "abb",
    name: "ABB",
    sectorSlug: "electrical-energy",
    featured: true,
    country: "Switzerland",
    category: "Electrical & Automation",
    website: "https://www.abb.com",
  },
  {
    id: "siemens",
    slug: "siemens",
    name: "Siemens",
    sectorSlug: "electrical-energy",
    featured: true,
    country: "Germany",
    category: "Electrical & Automation",
    website: "https://www.siemens.com",
  },
  {
    id: "eaton",
    slug: "eaton",
    name: "Eaton",
    sectorSlug: "electrical-energy",
    featured: false,
    country: "Ireland",
    category: "Electrical & Automation",
    website: "https://www.eaton.com",
  },
  {
    id: "legrand",
    slug: "legrand",
    name: "Legrand",
    sectorSlug: "electrical-energy",
    featured: false,
    country: "France",
    category: "Electrical & Automation",
    website: "https://www.legrand.com",
  },
  {
    id: "phoenix-contact",
    slug: "phoenix-contact",
    name: "Phoenix Contact",
    sectorSlug: "electrical-energy",
    featured: false,
    country: "Germany",
    category: "Electrical & Automation",
    website: "https://www.phoenixcontact.com",
  },

  // Medical
  {
    id: "drager",
    slug: "drager",
    name: "Dräger",
    sectorSlug: "healthcare",
    featured: false,
    country: "Germany",
    category: "Healthcare Equipment",
    website: "https://www.draeger.com",
  },
  {
    id: "mindray",
    slug: "mindray",
    name: "Mindray",
    sectorSlug: "healthcare",
    featured: false,
    country: "China",
    category: "Healthcare Equipment",
    website: "https://www.mindray.com",
  },
  {
    id: "philips-healthcare",
    slug: "philips-healthcare",
    name: "Philips Healthcare",
    sectorSlug: "healthcare",
    featured: true,
    country: "Netherlands",
    category: "Healthcare Equipment",
    website: "https://www.philips.com/healthcare",
  },
  {
    id: "ge-healthcare",
    slug: "ge-healthcare",
    name: "GE Healthcare",
    sectorSlug: "healthcare",
    featured: true,
    country: "United States",
    category: "Healthcare Equipment",
    website: "https://www.gehealthcare.com",
  },

  // Vehicles
  {
    id: "toyota",
    slug: "toyota",
    name: "Toyota",
    sectorSlug: "commercial-vehicles",
    featured: true,
    country: "Japan",
    category: "Commercial Vehicles",
    website: "https://www.toyota.com",
  },
  {
    id: "nissan",
    slug: "nissan",
    name: "Nissan",
    sectorSlug: "commercial-vehicles",
    featured: false,
    country: "Japan",
    category: "Commercial Vehicles",
    website: "https://www.nissan-global.com",
  },
  {
    id: "isuzu",
    slug: "isuzu",
    name: "Isuzu",
    sectorSlug: "commercial-vehicles",
    featured: false,
    country: "Japan",
    category: "Commercial Vehicles",
    website: "https://www.isuzu.com",
  },
  {
    id: "mitsubishi-fuso",
    slug: "mitsubishi-fuso",
    name: "Mitsubishi Fuso",
    sectorSlug: "commercial-vehicles",
    featured: false,
    country: "Japan",
    category: "Commercial Vehicles",
  },
  {
    id: "hyundai-commercial",
    slug: "hyundai-commercial",
    name: "Hyundai Commercial",
    sectorSlug: "commercial-vehicles",
    featured: false,
    country: "South Korea",
    category: "Commercial Vehicles",
  },

  // Construction Materials
  {
    id: "sika",
    slug: "sika",
    name: "Sika",
    sectorSlug: "construction",
    featured: false,
    country: "Switzerland",
    category: "Construction Tools & Materials",
    website: "https://www.sika.com",
  },
  {
    id: "hilti",
    slug: "hilti",
    name: "Hilti",
    sectorSlug: "construction",
    featured: true,
    country: "Liechtenstein",
    category: "Construction Tools & Materials",
    website: "https://www.hilti.com",
  },
  {
    id: "bosch-professional",
    slug: "bosch-professional",
    name: "Bosch Professional",
    sectorSlug: "construction",
    featured: false,
    country: "Germany",
    category: "Construction Tools & Materials",
    website: "https://www.bosch-professional.com",
  },
  {
    id: "makita",
    slug: "makita",
    name: "Makita",
    sectorSlug: "construction",
    featured: false,
    country: "Japan",
    category: "Construction Tools & Materials",
    website: "https://www.makita.com",
  },
  {
    id: "dewalt",
    slug: "dewalt",
    name: "Dewalt",
    sectorSlug: "construction",
    featured: false,
    country: "United States",
    category: "Construction Tools & Materials",
    website: "https://www.dewalt.com",
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find((brand) => brand.slug === slug);
}

/** Looks up by the immutable `id`, not the (potentially-renamed) `slug` — the join every cross-entity relationship (e.g. Knowledge Platform items) must use instead of a slug. */
export function getBrandById(id: string): Brand | undefined {
  return BRANDS.find((brand) => brand.id === id);
}

export function getBrandsBySector(sectorSlug: SectorSlug): Brand[] {
  return BRANDS.filter((brand) => brand.sectorSlug === sectorSlug);
}

/** Distinct sector slugs actually represented in `BRANDS`, in first-appearance order — drives the category filter chips. */
export function getBrandSectorSlugs(): SectorSlug[] {
  return Array.from(new Set(BRANDS.map((brand) => brand.sectorSlug)));
}

/** Distinct, real `country` values actually present in `BRANDS`, alphabetically — drives the Supplier Directory's country filter. Brands with no `country` set are simply excluded from the filter's option list, never grouped under an invented "Unknown". */
export function getBrandCountries(): string[] {
  return Array.from(
    new Set(
      BRANDS.map((brand) => brand.country).filter(
        (country): country is string => Boolean(country),
      ),
    ),
  ).sort((a, b) => a.localeCompare(b));
}
