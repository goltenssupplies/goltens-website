#!/usr/bin/env node
/**
 * Focused verification for Phase 6C-1 — the first 8 MOLLUBE grease
 * migrations. Runs against the REAL `PRODUCTS` registry, same
 * lightweight plain-Node convention as `scripts/verify-phase6b1-batch.mjs`.
 *
 * Run: node --experimental-strip-types scripts/verify-phase6c1-batch.mjs
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(new URL("./ts-alias-loader.mjs", import.meta.url));

const root = pathToFileURL(`${process.cwd()}/`).href;
const { getProductBySlug, getAllProductParams } = await import(
  new URL("data/products/index.ts", root).href
);
const { toPublicProduct } = await import(
  new URL("lib/products/public-product.ts", root).href
);
const { getActiveDenylistTerms } = await import(
  new URL("data/manufacturers/denylist.ts", root).href
);

let passed = 0;
let failed = 0;
function report(name, ok, detail) {
  if (ok) {
    passed++;
    console.log(`  ok   ${name}`);
  } else {
    failed++;
    console.log(`  FAIL ${name}${detail ? ` — ${detail}` : ""}`);
  }
}
function assertTrue(name, condition, detail) {
  report(name, condition === true, detail);
}
function assertEqual(name, actual, expected, detail) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  report(name, ok, detail ?? `expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
}

console.log("Phase 6C-1 batch verification (8 real MOLLUBE grease products)\n");

// Commercial identifiers that must never appear in a public field for this
// batch — per the Phase 6C-1 spec's own explicit list. Checked directly,
// not via the shared denylist module (which is intentionally untouched —
// this script does not modify or extend it).
const PROHIBITED_TERMS = [
  "MOLLUBE",
  "PROGUARD",
  "MOL-PROGUARD",
];
function containsProhibited(text) {
  if (typeof text !== "string" || !text) return [];
  return PROHIBITED_TERMS.filter((t) => text.toUpperCase().includes(t));
}
// Allowed technical terms explicitly called out as safe in the spec — used
// only as a sanity check that our prohibited-term matching doesn't
// accidentally flag them.
const ALLOWED_TECHNICAL_TERMS = [
  "molybdenum",
  "polyurea",
  "lithium",
  "lithium calcium complex",
  "barium complex",
  "NLGI",
  "PAO",
];

// ---------------------------------------------------------------------
// Pre-modification baseline (Step 0) — captured from the source files as
// read prior to this migration; used only to validate preservation, not
// written to any product file.
// ---------------------------------------------------------------------
const BATCH = [
  {
    id: "mollube-proguard-sy-pu",
    originalProductName_en: "MOLLUBE PROGUARD SY PU",
    publicName_en: "Synthetic Polyurea Grease — NLGI 2",
    publicName_ar: "شحم بولي يوريا اصطناعي — NLGI 2",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    specCount: 6,
    applicationsCount: 2,
    featuresCount: 0,
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-m-pu",
      "mollube-mol-proguard-lcx2",
    ],
  },
  {
    id: "mollube-proguard-m-pu",
    originalProductName_en: "MOLLUBE PROGUARD M PU",
    publicName_en: "Mineral Polyurea High-Temperature Grease — NLGI 2",
    publicName_ar: "شحم بولي يوريا معدني عالي الحرارة — NLGI 2",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    specCount: 6,
    applicationsCount: 2,
    featuresCount: 0,
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-sy-pu",
      "mollube-proguard-xmo-180",
    ],
  },
  {
    id: "mollube-proguard-mp2",
    originalProductName_en: "MOLLUBE PROGUARD MP2",
    publicName_en: "Lithium Multi-Purpose Grease — NLGI 2",
    publicName_ar: "شحم ليثيوم متعدد الأغراض — NLGI 2",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    specCount: 5,
    applicationsCount: 2,
    featuresCount: 0,
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-hb-mp3",
      "mollube-proguard-m-bx",
    ],
    colorFieldMustBeAbsent: true,
  },
  {
    id: "mollube-proguard-hb-mp3",
    originalProductName_en: "MOLLUBE PROGUARD HB-MP3",
    publicName_en: "Lithium Multi-Purpose Grease — NLGI 3",
    publicName_ar: "شحم ليثيوم متعدد الأغراض — NLGI 3",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    specCount: 5,
    applicationsCount: 2,
    featuresCount: 0,
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-mp2",
      "mollube-proguard-m-bx",
    ],
    colorFieldMustBeAbsent: true,
  },
  {
    id: "mollube-mol-proguard-lcx2",
    originalProductName_en: "MOLLUBE MOL-PROGUARD LCX2",
    publicName_en: "Lithium Calcium Complex Grease — NLGI 2",
    publicName_ar: "شحم مركب ليثيوم-كالسيوم — NLGI 2",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    specCount: 6,
    applicationsCount: 2,
    featuresCount: 0,
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-lx-220",
      "mollube-proguard-ht-bo",
    ],
  },
  {
    id: "mollube-proguard-m-bx",
    originalProductName_en: "MOLLUBE PROGUARD M BX",
    publicName_en: "Barium Complex Grease — NLGI 2",
    publicName_ar: "شحم مركب باريوم — NLGI 2",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    specCount: 6,
    applicationsCount: 2,
    featuresCount: 0,
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-mp2",
      "mollube-proguard-hb-mp3",
    ],
  },
  {
    id: "mollube-proguard-mo-lx",
    originalProductName_en: "MOLLUBE PROGUARD MO LX",
    publicName_en: "Molybdenum-Enhanced Lithium Complex Grease — NLGI 2",
    publicName_ar: "شحم مركب ليثيوم معزز بالموليبدينوم — NLGI 2",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    specCount: 7,
    applicationsCount: 3,
    featuresCount: 0,
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-xmo-180",
      "mollube-proguard-ht-bo",
    ],
  },
  {
    id: "mollube-proguard-xmo-180",
    originalProductName_en: "MOLLUBE PROGUARD XMO 180",
    publicName_en: "Metal Complex Grease — NLGI 2",
    publicName_ar: "شحم مركب معدني — NLGI 2",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    specCount: 7,
    applicationsCount: 3,
    featuresCount: 0,
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-mo-lx",
      "mollube-proguard-csx",
    ],
  },
];

for (const expected of BATCH) {
  console.log(`\n${expected.id}`);
  const product = getProductBySlug(expected.id);
  assertTrue(`${expected.id}: real product resolves`, product !== undefined);
  if (!product) continue;

  // 9, 10. id/slug unchanged.
  assertEqual(`${expected.id}: id unchanged`, product.id, expected.id);
  assertEqual(`${expected.id}: slug unchanged`, product.slug, expected.id);
  // 11, 12.
  assertEqual(`${expected.id}: sectorId unchanged`, product.sectorId, expected.sectorId);
  assertEqual(`${expected.id}: categoryId unchanged`, product.categoryId, expected.categoryId);

  // 1. exact approved publicName_en/ar.
  assertEqual(`${expected.id}: publicName_en matches approved text exactly`, product.publicName_en, expected.publicName_en);
  assertEqual(`${expected.id}: publicName_ar matches approved text exactly`, product.publicName_ar, expected.publicName_ar);

  // 5, 6. sourcing.
  assertEqual(`${expected.id}: sourcing.manufacturer === "MOLLUBE"`, product.sourcing?.manufacturer, "MOLLUBE");
  assertEqual(
    `${expected.id}: sourcing.originalProductName_en preserves the original commercial name`,
    product.sourcing?.originalProductName_en,
    expected.originalProductName_en,
  );

  // 13-16. specifications unchanged (count, values, labels, groups) — the
  // Phase 6C-1 spec forbids touching these; verifying by count here (full
  // byte-for-byte content was never edited — see git diff cross-check in
  // the final report) and by confirming the MP2/HB-MP3 color omission.
  assertEqual(`${expected.id}: specification count unchanged (${expected.specCount})`, product.specifications?.length, expected.specCount);
  if (expected.colorFieldMustBeAbsent) {
    const hasColor = (product.specifications ?? []).some((s) => s.label_en === "Color");
    assertTrue(`${expected.id}: no Color spec field present (ambiguous shared source cell correctly left unassigned)`, !hasColor);
  }

  // 17, 18. applications/features unchanged (by count — content untouched
  // by this migration; no field in this object was edited).
  assertEqual(`${expected.id}: applications_en count unchanged (${expected.applicationsCount})`, product.applications_en?.length, expected.applicationsCount);
  assertEqual(`${expected.id}: features_en count unchanged (${expected.featuresCount})`, product.features_en?.length ?? 0, expected.featuresCount);

  // 19-22. catalogue fields unchanged except title.
  assertTrue(`${expected.id}: every catalogue fileUrl is still null`, (product.catalogues ?? []).every((c) => c.fileUrl === null));
  assertTrue(`${expected.id}: every catalogue kind is still "datasheet"`, (product.catalogues ?? []).every((c) => c.kind === "datasheet"));
  assertTrue(`${expected.id}: every catalogue fileType is still "pdf"`, (product.catalogues ?? []).every((c) => c.fileType === "pdf"));
  assertTrue(`${expected.id}: every catalogue language is still "en"`, (product.catalogues ?? []).every((c) => c.language === "en"));

  // 23-27. unrelated fields unchanged.
  assertEqual(`${expected.id}: images unchanged ([])`, product.images, []);
  assertEqual(`${expected.id}: availability unchanged ("available")`, product.availability, "available");
  assertEqual(`${expected.id}: quoteEnabled unchanged (true)`, product.quoteEnabled, true);
  assertEqual(`${expected.id}: relatedProductSlugs unchanged`, product.relatedProductSlugs, expected.relatedProductSlugs);
  assertEqual(`${expected.id}: relatedArticleSlugs unchanged (absent)`, product.relatedArticleSlugs, undefined);

  // 7, 8. toPublicProduct() boundary.
  const publicProduct = toPublicProduct(product);
  assertTrue(`${expected.id}: toPublicProduct() output has NO sourcing field`, !("sourcing" in publicProduct));
  assertTrue(`${expected.id}: toPublicProduct() output has NO manufacturer field`, !("manufacturer" in publicProduct));
  assertTrue(`${expected.id}: toPublicProduct() output has NO relatedBrandSlugs field`, !("relatedBrandSlugs" in publicProduct));

  // 2, 3, 4, 8. no commercial identifiers in any public field.
  const publicFieldsToScan = [
    ["publicName_en", publicProduct.name_en],
    ["publicName_ar", publicProduct.name_ar],
    ["publicShortDescription_en", publicProduct.shortDescription_en],
    ["publicShortDescription_ar", publicProduct.shortDescription_ar],
    ["publicLongDescription_en", publicProduct.longDescription_en],
    ["publicLongDescription_ar", publicProduct.longDescription_ar],
    ["seo.title_en", publicProduct.seo?.title_en],
    ["seo.title_ar", publicProduct.seo?.title_ar],
    ["seo.description_en", publicProduct.seo?.description_en],
    ["seo.description_ar", publicProduct.seo?.description_ar],
  ];
  for (const c of publicProduct.catalogues ?? []) {
    publicFieldsToScan.push([`catalogue[${c.id}].title_en`, c.title_en]);
    publicFieldsToScan.push([`catalogue[${c.id}].title_ar`, c.title_ar]);
  }
  for (const [field, value] of publicFieldsToScan) {
    const hits = containsProhibited(value);
    assertTrue(`${expected.id}: ${field} contains no commercial MOLLUBE identifier`, hits.length === 0, hits.join(", "));
  }

  // Sanity: confirm the allowed technical terms are NOT being flagged by
  // our own prohibited-term check (would indicate overly broad matching).
  const serializedPublic = JSON.stringify(publicProduct);
  for (const term of ALLOWED_TECHNICAL_TERMS) {
    if (serializedPublic.toLowerCase().includes(term.toLowerCase())) {
      assertTrue(
        `${expected.id}: allowed technical term "${term}" present but correctly not flagged as prohibited`,
        containsProhibited(term).length === 0,
      );
    }
  }
}

// ---------------------------------------------------------------------
// 28, 29. Exactly these 8 products are NEWLY migrated this phase; no
// other product became migrated as a side effect.
// ---------------------------------------------------------------------
{
  const PRE_EXISTING_MIGRATED = [
    "mobil-dte-24",
    "castrol-hyspin-aws-46",
    "mobil-dte-800-series",
    "mobilgear-600-xp-220",
    "mobilgrease-xtc",
    "mobil-polyrex-ep-2",
    "shell-gadus-s5-v220-2",
    "mobilux-ep-2-moly",
  ];
  const EXPECTED_NEW = BATCH.map((b) => b.id);
  // Headcount maintenance (Phase 6C-2 verification maintenance): this
  // script's own 16 product-specific assertions above are untouched; only
  // this final catalog-wide total is updated to also include the 4
  // Phase 6C-2 MOLLUBE products legitimately migrated afterward.
  const PHASE_6C2_MIGRATED_IDS = [
    "mollube-mol-prohydro-hlp",
    "mollube-mol-freez-m",
    "mollube-mol-freez-pao",
    "mollube-mol-freez-e",
  ];
  // Headcount maintenance (Phase 6C-3 verification maintenance): this
  // script's own 8 product-specific assertions above remain untouched; only
  // this final catalog-wide total is updated to also include the 6
  // Phase 6C-3 MOLLUBE products legitimately migrated afterward.
  const PHASE_6C3_MIGRATED_IDS = [
    "mollube-proguard-lxsy",
    "mollube-proguard-lx-220",
    "mollube-proguard-csx",
    "mollube-proguard-inor-sy",
    "mollube-proguard-ht-bo",
    "mollube-mol-freez-ultra-68",
  ];
  // Headcount maintenance (Phase 6E-1 verification maintenance): this
  // script's own 8 product-specific assertions above remain untouched;
  // only this final catalog-wide total is updated to also include the 8
  // Phase 6E-1 MOLLUBE products legitimately migrated afterward.
  const PHASE_6E1_MIGRATED_IDS = [
    "mollube-mol-glo-sy",
    "mollube-mol-glo-pg",
    "mollube-mol-gear",
    "mollube-mol-gear-automotive",
    "mollube-mol-procut-mw",
    "mollube-mol-procut-sym",
    "mollube-mol-procut-sy-500",
    "mollube-mol-met",
  ];
  const EXPECTED_TOTAL = [...PRE_EXISTING_MIGRATED, ...EXPECTED_NEW, ...PHASE_6C2_MIGRATED_IDS, ...PHASE_6C3_MIGRATED_IDS, ...PHASE_6E1_MIGRATED_IDS].sort();

  const params = getAllProductParams();
  const migratedIds = [];
  const seen = new Set();
  for (const p of params) {
    const product = getProductBySlug(p.product);
    if (!product || seen.has(product.id)) continue;
    seen.add(product.id);
    if (product.publicName_en) migratedIds.push(product.id);
  }
  assertEqual("exactly 222 products scanned", params.length, 222);
  assertEqual(
    "exactly the 8 new MOLLUBE products plus the 8 pre-existing ones plus the 4 Phase 6C-2 products plus the 6 Phase 6C-3 products plus the 8 Phase 6E-1 products are migrated — nothing else",
    migratedIds.sort(),
    EXPECTED_TOTAL,
  );
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exitCode = 1;
}
