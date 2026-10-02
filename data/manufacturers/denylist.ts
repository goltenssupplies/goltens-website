/**
 * Single source of truth for known manufacturer/product-brand identities
 * evidenced in this repository's own data — consumed by
 * `scripts/verify-public-product-leakage.mjs` (and any future CI/
 * pre-commit gate built on top of it) to detect manufacturer leakage in
 * public-facing product fields.
 *
 * Nothing below is invented from general knowledge. Every entry was
 * derived by running read-only queries against the real `PRODUCTS`
 * registry (`data/products/index.ts`) during the GOLTENS Brand & Image
 * Exposure Audit and this denylist's own construction — see each entry's
 * `evidence` field for the exact product id(s)/count backing it.
 *
 * Two tiers:
 *
 * 1. `DENYLIST_TERMS` — manufacturer names and product-line/family words
 *    that are ACTUALLY EMBEDDED inside a product's own `name_en` (the
 *    root cause identified by the audit). Each term is empirically
 *    verified against the full 222-product catalog to produce ZERO
 *    matches outside the branded products it's meant to catch, using
 *    case-insensitive, word-boundary matching (so "mobile-cranes" never
 *    matches "mobil", and "fm200" never matches "FM"). Terms judged too
 *    short or too generic to safely auto-match (e.g. bare "FM", which
 *    collides with the real `fm200` fire-suppression product family) are
 *    kept here for documentation but marked `active: false`.
 *
 * 2. `SOURCING_ONLY_BRAND_SLUGS` — the remaining `relatedBrandSlugs`
 *    values found across the catalog (mostly equipment OEMs: Caterpillar,
 *    Eaton, Siemens, etc., plus the lubricant-adjacent `total`/`chevron`,
 *    which never appear in any product name). An empirical scan of all
 *    328 non-lubricant `relatedBrandSlugs` instances found NONE of these
 *    brand words embedded in any product's own `name_en` — they are
 *    "candidate sourcing" metadata, not embedded public identity, the
 *    same pattern the audit found for the generic "Hydraulic Fluids"
 *    product listing `mobil`/`shell`/`castrol` as sourcing options
 *    without naming them. They are listed here for visibility only and
 *    are deliberately NOT wired into the active matcher: many are short
 *    or common English words ("crane", "man", "hon", "ej", "total") that
 *    would produce severe false positives if matched as denylist terms
 *    against a general industrial catalog.
 */

export type DenylistCategory = "manufacturer-name" | "product-line";

export interface DenylistTerm {
  /** Matched case-insensitively with a word boundary — see verify-public-product-leakage.mjs. */
  term: string;
  manufacturer: string;
  category: DenylistCategory;
  /** Which real product(s)/how many this term is evidenced by. */
  evidence: string;
  /** false = documented but excluded from the default active matcher (see reason). */
  active: boolean;
  /** Present only when `active: false`, or when a reviewer should double-check matches. */
  riskNote?: string;
}

export const DENYLIST_TERMS: DenylistTerm[] = [
  // --- Manufacturer names -------------------------------------------------
  {
    term: "mobil",
    manufacturer: "Mobil",
    category: "manufacturer-name",
    evidence: "9 products, e.g. mobil-dte-800-series, mobil-dte-24",
    active: true,
  },
  {
    term: "mobilgear",
    manufacturer: "Mobil",
    category: "manufacturer-name",
    evidence:
      "mobilgear-600-xp-220 — compound word; a bare 'mobil' word-boundary match does NOT catch this (no boundary between 'mobil' and 'gear'), so it's listed separately",
    active: true,
  },
  {
    term: "mobilgrease",
    manufacturer: "Mobil",
    category: "manufacturer-name",
    evidence: "mobilgrease-xtc — same compound-word reasoning as mobilgear",
    active: true,
  },
  {
    term: "mobilux",
    manufacturer: "Mobil",
    category: "manufacturer-name",
    evidence: "mobilux-ep-2-moly — same compound-word reasoning as mobilgear",
    active: true,
  },
  {
    term: "mollube",
    manufacturer: "MOLLUBE",
    category: "manufacturer-name",
    evidence: "42 products",
    active: true,
  },
  {
    term: "castrol",
    manufacturer: "Castrol",
    category: "manufacturer-name",
    evidence: "castrol-hyspin-aws-46",
    active: true,
  },
  {
    term: "shell",
    manufacturer: "Shell",
    category: "manufacturer-name",
    evidence: "shell-gadus-s5-v220-2",
    active: true,
    riskNote:
      "'Shell' is also an ordinary English word (e.g. 'outer shell', 'shell structure'). Word-boundary matching reduces but does not eliminate collision risk if the catalog grows — treat a match as a lead to verify, not an automatic confirmation.",
  },

  // --- Product-line / product-family names --------------------------------
  {
    term: "dte",
    manufacturer: "Mobil",
    category: "product-line",
    evidence:
      "4 products: mobil-dte-10-excel-series, mobil-dte-24, mobil-dte-800-series, mobil-dte-fm-series. Verified zero matches elsewhere in the 222-product catalog.",
    active: true,
  },
  {
    term: "polyrex",
    manufacturer: "Mobil",
    category: "product-line",
    evidence:
      "mobil-polyrex-ep-2, mobil-shc-polyrex-em. Verified zero matches elsewhere.",
    active: true,
  },
  {
    term: "shc",
    manufacturer: "Mobil",
    category: "product-line",
    evidence: "mobil-shc-polyrex-em. Verified zero matches elsewhere.",
    active: true,
    riskNote:
      "3-letter token — re-verify any match is the Mobil SHC line, not an unrelated acronym.",
  },
  {
    term: "xtc",
    manufacturer: "Mobil",
    category: "product-line",
    evidence: "mobilgrease-xtc. Verified zero matches elsewhere.",
    active: true,
    riskNote:
      "3-letter token — re-verify any match is the Mobilgrease XTC line, not an unrelated acronym.",
  },
  {
    term: "hyspin",
    manufacturer: "Castrol",
    category: "product-line",
    evidence: "castrol-hyspin-aws-46. Verified zero matches elsewhere.",
    active: true,
  },
  {
    term: "gadus",
    manufacturer: "Shell",
    category: "product-line",
    evidence: "shell-gadus-s5-v220-2. Verified zero matches elsewhere.",
    active: true,
  },
  {
    term: "proguard",
    manufacturer: "MOLLUBE",
    category: "product-line",
    evidence:
      "19 products: mollube-mol-proguard-lcx2, the 6 mollube-mol-proguard-ohc* overhead-conductor greases, and 12 mollube-proguard-* greases. Verified zero matches elsewhere.",
    active: true,
  },
  {
    term: "mol-freez",
    manufacturer: "MOLLUBE",
    category: "product-line",
    evidence:
      "4 products: mollube-mol-freez-e/m/pao/ultra-68. Verified zero matches elsewhere.",
    active: true,
  },
  {
    term: "mol-gear",
    manufacturer: "MOLLUBE",
    category: "product-line",
    evidence:
      "2 products: mollube-mol-gear, mollube-mol-gear-automotive. Verified zero matches elsewhere.",
    active: true,
  },
  {
    term: "mol-glo",
    manufacturer: "MOLLUBE",
    category: "product-line",
    evidence:
      "2 products: mollube-mol-glo-pg, mollube-mol-glo-sy. Verified zero matches elsewhere.",
    active: true,
  },
  {
    term: "mol-met",
    manufacturer: "MOLLUBE",
    category: "product-line",
    evidence: "mollube-mol-met. Verified zero matches elsewhere.",
    active: true,
  },
  {
    term: "mol-procut",
    manufacturer: "MOLLUBE",
    category: "product-line",
    evidence:
      "3 products: mollube-mol-procut-mw/sy-500/sym. Verified zero matches elsewhere.",
    active: true,
  },
  {
    term: "mol-prohydro",
    manufacturer: "MOLLUBE",
    category: "product-line",
    evidence: "mollube-mol-prohydro-hlp. Verified zero matches elsewhere.",
    active: true,
  },
  {
    term: "platinium",
    manufacturer: "MOLLUBE",
    category: "product-line",
    evidence:
      "3 products: mollube-platinum-mega/super/ultra. Source data spells it 'Platinium' (non-standard); preserved as authored, not corrected to 'Platinum'. Verified zero matches elsewhere.",
    active: true,
  },

  // --- Evidenced but EXCLUDED from active matching (generic-word / too-short risk) ---
  {
    term: "dynamic",
    manufacturer: "MOLLUBE",
    category: "product-line",
    evidence:
      "6 products: mollube-dynamic-1/plus/x3/x4/x5/x7. Zero collisions found in the CURRENT 222-product catalog.",
    active: false,
    riskNote:
      "Ordinary English word ('dynamic loading', 'dynamic response') — safe today only because no other product happens to use it. Re-check for collisions before ever activating.",
  },
  {
    term: "super",
    manufacturer: "MOLLUBE",
    category: "product-line",
    evidence: "2 products: mollube-platinum-super, mollube-4t-super.",
    active: false,
    riskNote:
      "Generic marketing adjective, high collision risk if catalog grows.",
  },
  {
    term: "ultra",
    manufacturer: "MOLLUBE",
    category: "product-line",
    evidence: "2 products: mollube-mol-freez-ultra-68, mollube-platinum-ultra.",
    active: false,
    riskNote:
      "Generic marketing adjective, high collision risk if catalog grows.",
  },
  {
    term: "mega",
    manufacturer: "MOLLUBE",
    category: "product-line",
    evidence: "mollube-platinum-mega.",
    active: false,
    riskNote:
      "Generic marketing adjective, high collision risk if catalog grows.",
  },
  {
    term: "excel",
    manufacturer: "Mobil",
    category: "product-line",
    evidence: "mobil-dte-10-excel-series.",
    active: false,
    riskNote: "Generic English word, high collision risk if catalog grows.",
  },
  {
    term: "fm",
    manufacturer: "Mobil",
    category: "product-line",
    evidence: "mobil-dte-fm-series.",
    active: false,
    riskNote:
      "2-letter token. This repository already has an UNRELATED real product family literally named 'FM200'/'FM-200' (data/products/fire-protection/fm200.ts) — activating this term would misclassify every FM-200 fire-suppression product as Mobil brand leakage. Must never be activated without a much narrower pattern (e.g. requiring adjacency to 'DTE').",
  },
  {
    term: "4t",
    manufacturer: "MOLLUBE",
    category: "product-line",
    evidence: "mollube-4t-super.",
    active: false,
    riskNote:
      "Short alphanumeric token, generic collision risk (could match unrelated size/model numbers).",
  },
];

export function getActiveDenylistTerms(): DenylistTerm[] {
  return DENYLIST_TERMS.filter((t) => t.active);
}

/**
 * The remaining `Product.relatedBrandSlugs` values found across the
 * catalog (182 distinct slugs total; the 6 lubricant-related ones —
 * mobil, mollube, castrol, shell, total, chevron — are covered above or
 * noted below). Counts = number of products listing that slug.
 *
 * NOT wired into the active leakage matcher (see file header). Listed for
 * audit visibility only.
 */
export const SOURCING_ONLY_BRAND_SLUGS: Record<string, number> = {
  peerless: 3,
  aurora: 2,
  tyco: 5,
  potter: 1,
  clarke: 1,
  victaulic: 7,
  naffco: 8,
  viking: 1,
  reliable: 1,
  rapidrop: 1,
  minimax: 5,
  "johnson-controls": 3,
  kidde: 2,
  honeywell: 4,
  notifier: 6,
  simplex: 2,
  morley: 3,
  "3m": 2,
  steelcase: 3,
  "herman-miller": 2,
  haworth: 2,
  bisley: 1,
  hon: 1,
  "axis-communications": 1,
  bosch: 1,
  hikvision: 1,
  "hid-global": 1,
  suprema: 1,
  betafence: 1,
  gallagher: 1,
  faac: 1,
  came: 1,
  "motorola-solutions": 1,
  holmatro: 1,
  signify: 3,
  schreder: 1,
  caterpillar: 7,
  cummins: 2,
  perkins: 2,
  "jinko-solar": 2,
  "trina-solar": 2,
  huawei: 3,
  siemens: 5,
  swarco: 1,
  grundfos: 3,
  ksb: 2,
  sulzer: 1,
  xylem: 1,
  armstrong: 1,
  goulds: 1,
  flowserve: 4,
  flygt: 1,
  tsurumi: 1,
  "gorman-rupp": 1,
  griswold: 1,
  kitz: 2,
  crane: 1,
  avk: 1,
  samson: 1,
  fisher: 1,
  crosby: 1,
  leser: 1,
  farris: 1,
  auma: 1,
  rotork: 1,
  limitorque: 1,
  "atlas-copco": 6,
  "ingersoll-rand": 2,
  kaeser: 2,
  "gardner-denver": 1,
  "parker-hannifin": 2,
  donaldson: 1,
  ariel: 1,
  "burckhardt-compression": 1,
  "schneider-electric": 7,
  abb: 4,
  eaton: 10,
  legrand: 2,
  "fg-wilson": 1,
  asco: 1,
  socomec: 3,
  apc: 1,
  vertiv: 1,
  osram: 1,
  hubbell: 2,
  "r-stahl": 1,
  emerson: 1,
  sma: 1,
  tesla: 1,
  byd: 1,
  sungrow: 1,
  komatsu: 4,
  hitachi: 1,
  "volvo-ce": 3,
  jcb: 3,
  "case-ce": 2,
  liebherr: 3,
  xcmg: 1,
  zoomlion: 1,
  sany: 3,
  kobelco: 1,
  "toyota-forklifts": 1,
  "linde-mh": 1,
  hyster: 1,
  manitou: 1,
  merlo: 1,
  genie: 1,
  jlg: 1,
  haulotte: 1,
  putzmeister: 2,
  schwing: 1,
  bomag: 1,
  dynapac: 2,
  hamm: 1,
  vogele: 1,
  sumitomo: 1,
  npk: 1,
  soosan: 1,
  toyota: 4,
  isuzu: 4,
  hyundai: 2,
  ford: 4,
  volvo: 1,
  "mercedes-benz": 3,
  man: 1,
  scania: 1,
  nissan: 1,
  "mitsubishi-fuso": 1,
  hino: 2,
  "schmitz-cargobull": 3,
  krone: 3,
  feldbinder: 2,
  "heil-trailer": 2,
  "carrier-transicold": 1,
  "thermo-king": 1,
  goldhofer: 1,
  nicolas: 1,
  faymonville: 1,
  "geesink-norba": 1,
  faun: 1,
  mcneilus: 1,
  "johnston-sweepers": 1,
  "bucher-municipal": 1,
  dulevo: 1,
  "vac-con": 1,
  vacall: 1,
  nalco: 4,
  kurita: 2,
  veolia: 3,
  kemira: 2,
  basf: 3,
  solenis: 1,
  jotun: 3,
  hempel: 2,
  ppg: 2,
  "sherwin-williams": 2,
  sika: 4,
  cortec: 1,
  fuchs: 4,
  holcim: 1,
  cemex: 1,
  "heidelberg-materials": 1,
  "gcp-applied-technologies": 2,
  soprema: 1,
  rockwool: 1,
  kingspan: 1,
  "knauf-insulation": 1,
  tremco: 1,
  kohler: 1,
  roca: 1,
  grohe: 1,
  wavin: 1,
  aliaxis: 1,
  "gf-piping-systems": 1,
  "saint-gobain-pam": 1,
  ej: 1,
  total: 3,
  chevron: 1,
};

/**
 * Arabic-language denylist terms. Intentionally empty: every one of the 53
 * branded products stores an IDENTICAL Latin-script string in `name_ar` as
 * in `name_en` (verified by direct comparison across all 53 records — zero
 * exceptions). No genuine Arabic transliteration of any manufacturer name
 * exists anywhere in this repository's data, so none is invented here.
 * `verify-public-product-leakage.mjs` still scans `_ar` fields using the
 * same Latin-script terms above, which is correct given what's actually
 * stored in them today.
 */
export const ARABIC_DENYLIST_TERMS: DenylistTerm[] = [];
