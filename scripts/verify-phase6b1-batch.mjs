#!/usr/bin/env node
/**
 * Focused verification for Phase 6B-1 — the first 8 manufacturer-neutral
 * product migrations. Runs against the REAL `PRODUCTS` registry (not a
 * synthetic fixture, unlike `scripts/verify-public-product.mjs`/
 * `verify-ai-public-boundary.mjs`), because this script's whole purpose is
 * to prove the actual 8 edited records are correct — no test framework
 * exists in this repo, same lightweight plain-Node convention as every
 * other `scripts/verify-*.mjs` file.
 *
 * Run: node --experimental-strip-types scripts/verify-phase6b1-batch.mjs
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(new URL("./ts-alias-loader.mjs", import.meta.url));

const root = pathToFileURL(`${process.cwd()}/`).href;
const { getProductBySlug } = await import(new URL("data/products/index.ts", root).href);
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
  report(
    name,
    ok,
    detail ?? `expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`,
  );
}

console.log("Phase 6B-1 batch verification (8 real products)\n");

const activeMatchers = getActiveDenylistTerms().map((t) => ({
  ...t,
  regex: new RegExp(`\\b${t.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i"),
}));

function denylistHits(text) {
  if (!text) return [];
  return activeMatchers.filter((m) => m.regex.test(text)).map((m) => m.term);
}

const BATCH = [
  {
    id: "mobil-dte-24",
    manufacturer: "Mobil",
    originalProductName_en: "Mobil DTE 24",
    publicName_en: "Anti-Wear Hydraulic Oil — ISO VG 32",
    publicName_ar: "زيت هيدروليكي مضاد للتآكل — ISO VG 32",
    specCount: 3,
  },
  {
    id: "castrol-hyspin-aws-46",
    manufacturer: "Castrol",
    originalProductName_en: "Castrol Hyspin AWS 46",
    publicName_en: "Anti-Wear Hydraulic Oil — ISO VG 46",
    publicName_ar: "زيت هيدروليكي مضاد للتآكل — ISO VG 46",
    specCount: 5,
  },
  {
    id: "mobil-dte-800-series",
    manufacturer: "Mobil",
    originalProductName_en: "Mobil DTE 800 Series",
    publicName_en: "Turbine Oil — ISO VG 32/46",
    publicName_ar: "زيت توربينات — ISO VG 32/46",
    specCount: 14,
  },
  {
    id: "mobilgear-600-xp-220",
    manufacturer: "Mobil",
    originalProductName_en: "Mobilgear 600 XP 220",
    publicName_en: "Extreme-Pressure Industrial Gear Oil — ISO VG 220",
    publicName_ar: "زيت تروس صناعي شديد التحمل — ISO VG 220",
    specCount: 6,
  },
  {
    id: "mobilgrease-xtc",
    manufacturer: "Mobil",
    originalProductName_en: "Mobilgrease XTC",
    publicName_en: "Lithium Complex Coupling Grease — NLGI 1",
    publicName_ar: "شحم وصلات مركب ليثيوم — NLGI 1",
    specCount: 8,
  },
  {
    id: "mobil-polyrex-ep-2",
    manufacturer: "Mobil",
    originalProductName_en: "Mobil Polyrex EP 2",
    publicName_en: "Polyurea Multi-Purpose Grease — NLGI 2",
    publicName_ar: "شحم بولي يوريا متعدد الأغراض — NLGI 2",
    specCount: 7,
  },
  {
    id: "shell-gadus-s5-v220-2",
    manufacturer: "Shell",
    originalProductName_en: "Shell Gadus S5 V220 2",
    publicName_en: "Synthetic Lithium Complex Grease — NLGI 2",
    publicName_ar: "شحم مركب ليثيوم صناعي — NLGI 2",
    specCount: 5,
  },
  {
    id: "mobilux-ep-2-moly",
    manufacturer: "Mobil",
    originalProductName_en: "Mobilux EP 2 Moly",
    publicName_en: "Molybdenum-Enhanced EP Lithium Grease — NLGI 2",
    publicName_ar: "شحم ليثيوم عالي الضغط معزز بالموليبدينوم — NLGI 2",
    specCount: 6,
  },
];

for (const expected of BATCH) {
  console.log(`\n${expected.id}`);
  const product = getProductBySlug(expected.id);
  assertTrue(`${expected.id}: real product resolves`, product !== undefined);
  if (!product) continue;

  // Slug unchanged.
  assertEqual(`${expected.id}: slug unchanged`, product.slug, expected.id);

  // Approved public name matches exactly (no drift from what was approved).
  assertEqual(
    `${expected.id}: publicName_en matches approved text exactly`,
    product.publicName_en,
    expected.publicName_en,
  );
  assertEqual(
    `${expected.id}: publicName_ar matches approved text exactly`,
    product.publicName_ar,
    expected.publicName_ar,
  );

  // Internal sourcing preserved, present, correct — and NEVER exposed publicly.
  assertEqual(
    `${expected.id}: sourcing.manufacturer recorded internally`,
    product.sourcing?.manufacturer,
    expected.manufacturer,
  );
  assertEqual(
    `${expected.id}: sourcing.originalProductName_en recorded internally`,
    product.sourcing?.originalProductName_en,
    expected.originalProductName_en,
  );

  const publicProduct = toPublicProduct(product);
  assertTrue(
    `${expected.id}: toPublicProduct() output has NO sourcing field`,
    !("sourcing" in publicProduct),
  );
  assertTrue(
    `${expected.id}: toPublicProduct() output has NO manufacturer field`,
    !("manufacturer" in publicProduct),
  );
  assertTrue(
    `${expected.id}: toPublicProduct() output has NO relatedBrandSlugs field`,
    !("relatedBrandSlugs" in publicProduct),
  );

  // Public fields contain no active denylist term (manufacturer name or
  // product-line term) — name, short/long description, SEO, catalogue titles.
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
    const hits = denylistHits(value);
    assertTrue(
      `${expected.id}: ${field} contains no manufacturer/product-line term`,
      hits.length === 0,
      hits.join(", "),
    );
  }

  // Technical specifications preserved exactly (count unchanged — the
  // array itself was never touched by this migration).
  assertEqual(
    `${expected.id}: specifications count unchanged (${expected.specCount})`,
    product.specifications?.length,
    expected.specCount,
  );

  // Catalogue file URLs/kind/fileType/language preserved exactly — only
  // title_en/title_ar were neutralized.
  assertTrue(
    `${expected.id}: every catalogue fileUrl is still null (no URL fabricated)`,
    (product.catalogues ?? []).every((c) => c.fileUrl === null),
  );
  assertTrue(
    `${expected.id}: every catalogue kind is still "datasheet"`,
    (product.catalogues ?? []).every((c) => c.kind === "datasheet"),
  );
  assertTrue(
    `${expected.id}: every catalogue fileType is still "pdf"`,
    (product.catalogues ?? []).every((c) => c.fileType === "pdf"),
  );
}

// ---------------------------------------------------------------------
// Whole-catalog sanity — exactly these 20 IDs are migrated, nothing else.
// Headcount maintenance (Phase 6C-2 verification maintenance): this
// script's own 8 BATCH product-specific assertions above are untouched;
// only this final catalog-wide total is updated to also include the 8
// Phase 6C-1 MOLLUBE products and the 4 Phase 6C-2 MOLLUBE products
// legitimately migrated afterward.
// ---------------------------------------------------------------------
{
  const { getAllProductParams } = await import(new URL("data/products/index.ts", root).href);
  const params = getAllProductParams();
  const migratedIds = [];
  for (const p of params) {
    const product = getProductBySlug(p.product);
    if (product?.publicName_en) migratedIds.push(product.id);
  }
  const PHASE_6C1_MIGRATED_IDS = [
    "mollube-proguard-sy-pu",
    "mollube-proguard-m-pu",
    "mollube-proguard-mp2",
    "mollube-proguard-hb-mp3",
    "mollube-mol-proguard-lcx2",
    "mollube-proguard-m-bx",
    "mollube-proguard-mo-lx",
    "mollube-proguard-xmo-180",
  ];
  const PHASE_6C2_MIGRATED_IDS = [
    "mollube-mol-prohydro-hlp",
    "mollube-mol-freez-m",
    "mollube-mol-freez-pao",
    "mollube-mol-freez-e",
  ];
  const PHASE_6C3_MIGRATED_IDS = [
    "mollube-proguard-lxsy",
    "mollube-proguard-lx-220",
    "mollube-proguard-csx",
    "mollube-proguard-inor-sy",
    "mollube-proguard-ht-bo",
    "mollube-mol-freez-ultra-68",
  ];
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
  assertEqual(
    "exactly 222 products scanned",
    params.length,
    222,
  );
  assertEqual(
    "exactly the 8 approved Phase 6B products plus the 8 Phase 6C-1 products plus the 4 Phase 6C-2 products plus the 6 Phase 6C-3 products plus the 8 Phase 6E-1 products are migrated, nothing else",
    migratedIds.sort(),
    [...BATCH.map((b) => b.id), ...PHASE_6C1_MIGRATED_IDS, ...PHASE_6C2_MIGRATED_IDS, ...PHASE_6C3_MIGRATED_IDS, ...PHASE_6E1_MIGRATED_IDS].sort(),
  );
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exitCode = 1;
}
