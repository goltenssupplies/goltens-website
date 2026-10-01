#!/usr/bin/env node
/**
 * Focused verification for Phase 6C-2 — the next 4 MOLLUBE migrations
 * (mollube-mol-prohydro-hlp, mollube-mol-freez-m, mollube-mol-freez-pao,
 * mollube-mol-freez-e). Runs against the REAL `PRODUCTS` registry, same
 * lightweight plain-Node convention as `scripts/verify-phase6c1-batch.mjs`.
 *
 * Run: node --experimental-strip-types scripts/verify-phase6c2-batch.mjs
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

console.log("Phase 6C-2 batch verification (4 real MOLLUBE products)\n");

// Prohibited commercial identifiers for this batch, per the Phase 6C-2
// spec's own explicit list — checked directly, not via the shared
// denylist module (untouched by this script).
const PROHIBITED_TERMS = [
  "MOLLUBE",
  "MOL-PROHYDRO",
  "MOL-FREEZ",
];
function containsProhibited(text) {
  if (typeof text !== "string" || !text) return [];
  return PROHIBITED_TERMS.filter((t) => text.toUpperCase().includes(t));
}
// Generic technical terms the spec explicitly says must remain allowed —
// used as a sanity check that our matching above isn't overly broad.
const ALLOWED_TECHNICAL_TERMS = [
  "PAO",
  "POE",
  "polyol ester",
  "mineral oil",
  "naphthenic",
  "ISO VG",
  "hydraulic oil",
  "refrigeration oil",
];

// ---------------------------------------------------------------------
// Pre-modification baseline (Step 0) — captured from the source files as
// read prior to this migration; used only to validate preservation.
// ---------------------------------------------------------------------
const BATCH = [
  {
    id: "mollube-mol-prohydro-hlp",
    originalProductName_en: "MOLLUBE MOL-PROHYDRO HLP",
    publicName_en: "Anti-Wear Hydraulic Oil — ISO VG 32/46/68",
    publicName_ar: "زيت هيدروليكي مضاد للتآكل — ISO VG 32/46/68",
    sectorId: "lubricants-oils",
    categoryId: "hydraulic-oils",
    specCount: 9,
    applicationsCount: 2,
    featuresCount: 0,
    relatedProductSlugs: ["hydraulic-fluids", "mobil-dte-24", "castrol-hyspin-aws-46"],
  },
  {
    id: "mollube-mol-freez-m",
    originalProductName_en: "MOLLUBE MOL-FREEZ M Series",
    publicName_en: "Mineral Refrigeration Oil — ISO VG 32-68",
    publicName_ar: "زيت تبريد معدني — ISO VG 32-68",
    sectorId: "lubricants-oils",
    categoryId: "refrigeration-oils",
    specCount: 21,
    applicationsCount: 2,
    featuresCount: 4,
    relatedProductSlugs: ["mollube-mol-freez-ultra-68", "mollube-mol-freez-pao", "mollube-mol-freez-e"],
  },
  {
    id: "mollube-mol-freez-pao",
    originalProductName_en: "MOLLUBE MOL-FREEZ PAO Series",
    publicName_en: "Synthetic PAO Refrigeration Oil — ISO VG 150/220",
    publicName_ar: "زيت تبريد اصطناعي PAO — ISO VG 150/220",
    sectorId: "lubricants-oils",
    categoryId: "refrigeration-oils",
    specCount: 11,
    applicationsCount: 2,
    featuresCount: 4,
    relatedProductSlugs: ["mollube-mol-freez-m", "mollube-mol-freez-ultra-68", "mollube-mol-freez-e"],
  },
  {
    id: "mollube-mol-freez-e",
    originalProductName_en: "MOLLUBE MOL-FREEZ E Series",
    publicName_en: "Synthetic POE Refrigeration Oil — ISO VG 22-370",
    publicName_ar: "زيت تبريد اصطناعي POE — ISO VG 22-370",
    sectorId: "lubricants-oils",
    categoryId: "refrigeration-oils",
    specCount: 75,
    applicationsCount: 1,
    featuresCount: 3,
    relatedProductSlugs: ["mollube-mol-freez-m", "mollube-mol-freez-ultra-68", "mollube-mol-freez-pao"],
  },
];

for (const expected of BATCH) {
  console.log(`\n${expected.id}`);
  const product = getProductBySlug(expected.id);
  assertTrue(`${expected.id}: real product resolves`, product !== undefined);
  if (!product) continue;

  // 9, 10, 11, 12.
  assertEqual(`${expected.id}: id unchanged`, product.id, expected.id);
  assertEqual(`${expected.id}: slug unchanged`, product.slug, expected.id);
  assertEqual(`${expected.id}: sectorId unchanged`, product.sectorId, expected.sectorId);
  assertEqual(`${expected.id}: categoryId unchanged`, product.categoryId, expected.categoryId);

  // 1, 2.
  assertEqual(`${expected.id}: publicName_en matches approved text exactly`, product.publicName_en, expected.publicName_en);
  assertEqual(`${expected.id}: publicName_ar matches approved text exactly`, product.publicName_ar, expected.publicName_ar);

  // 6, 7.
  assertEqual(`${expected.id}: sourcing.manufacturer === "MOLLUBE"`, product.sourcing?.manufacturer, "MOLLUBE");
  assertEqual(
    `${expected.id}: sourcing.originalProductName_en preserves the original commercial name`,
    product.sourcing?.originalProductName_en,
    expected.originalProductName_en,
  );

  // 13-16. specifications unchanged.
  assertEqual(`${expected.id}: specification count unchanged (${expected.specCount})`, product.specifications?.length, expected.specCount);
  const labelsEn = (product.specifications ?? []).map((s) => s.label_en);
  const groupsEn = (product.specifications ?? []).map((s) => s.group_en);
  const valuesAll = (product.specifications ?? []).map((s) => s.value);
  assertTrue(`${expected.id}: specification labels all present/non-empty (unchanged shape)`, labelsEn.every((l) => typeof l === "string" && l.length > 0));
  assertTrue(`${expected.id}: specification groups all present/non-empty (unchanged shape)`, groupsEn.every((g) => typeof g === "string" && g.length > 0));
  assertTrue(`${expected.id}: specification values all present (unchanged shape)`, valuesAll.every((v) => typeof v === "string" && v.length > 0));

  // 28. MOL-FREEZ-E 220-grade KV@100°C anomaly preserved exactly.
  if (expected.id === "mollube-mol-freez-e") {
    const grade220 = (product.specifications ?? []).filter((s) => s.group_en === "ISO VG 220");
    const kv100 = grade220.find((s) => s.label_en === "Kinematic Viscosity @ 100°C");
    assertEqual(
      "mollube-mol-freez-e: 220-grade KV@100°C anomaly value unchanged (\"9.1 cSt\")",
      kv100?.value,
      "9.1 cSt",
    );
  }

  // 17, 18.
  assertEqual(`${expected.id}: applications_en count unchanged (${expected.applicationsCount})`, product.applications_en?.length, expected.applicationsCount);
  assertEqual(`${expected.id}: features_en count unchanged (${expected.featuresCount})`, product.features_en?.length ?? 0, expected.featuresCount);

  // 19-22.
  assertTrue(`${expected.id}: every catalogue fileUrl is still null`, (product.catalogues ?? []).every((c) => c.fileUrl === null));
  assertTrue(`${expected.id}: every catalogue kind is still "datasheet"`, (product.catalogues ?? []).every((c) => c.kind === "datasheet"));
  assertTrue(`${expected.id}: every catalogue fileType is still "pdf"`, (product.catalogues ?? []).every((c) => c.fileType === "pdf"));
  assertTrue(`${expected.id}: every catalogue language is still "en"`, (product.catalogues ?? []).every((c) => c.language === "en"));

  // 23-27.
  assertEqual(`${expected.id}: images unchanged ([]) — 11. no images added`, product.images, []);
  assertEqual(`${expected.id}: availability unchanged ("available")`, product.availability, "available");
  assertEqual(`${expected.id}: quoteEnabled unchanged (true)`, product.quoteEnabled, true);
  assertEqual(`${expected.id}: relatedProductSlugs unchanged`, product.relatedProductSlugs, expected.relatedProductSlugs);
  assertEqual(`${expected.id}: relatedArticleSlugs unchanged (absent)`, product.relatedArticleSlugs, undefined);

  // 8. toPublicProduct() boundary.
  const publicProduct = toPublicProduct(product);
  assertTrue(`${expected.id}: toPublicProduct() output has NO sourcing field`, !("sourcing" in publicProduct));
  assertTrue(`${expected.id}: toPublicProduct() output has NO manufacturer field`, !("manufacturer" in publicProduct));
  assertTrue(`${expected.id}: toPublicProduct() output has NO relatedBrandSlugs field`, !("relatedBrandSlugs" in publicProduct));

  // 3, 4, 5. no commercial identifiers in any public field.
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
    assertTrue(`${expected.id}: ${field} contains no prohibited commercial identifier`, hits.length === 0, hits.join(", "));
  }

  // 29. PAO/POE/etc. remain allowed as generic technical terminology —
  // confirm they appear where expected AND are never treated as prohibited.
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
// 30, 31. Exactly these 4 products are NEWLY migrated this phase; no
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
    "mollube-proguard-sy-pu",
    "mollube-proguard-m-pu",
    "mollube-proguard-mp2",
    "mollube-proguard-hb-mp3",
    "mollube-mol-proguard-lcx2",
    "mollube-proguard-m-bx",
    "mollube-proguard-mo-lx",
    "mollube-proguard-xmo-180",
  ];
  const EXPECTED_NEW = BATCH.map((b) => b.id);
  // Headcount maintenance (Phase 6C-3 verification maintenance): this
  // script's own 4 product-specific assertions above remain untouched; only
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
  // script's own 4 product-specific assertions above remain untouched;
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
  const EXPECTED_TOTAL = [...PRE_EXISTING_MIGRATED, ...EXPECTED_NEW, ...PHASE_6C3_MIGRATED_IDS, ...PHASE_6E1_MIGRATED_IDS].sort();

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
    "exactly the 16 pre-existing products plus the 4 Phase 6C-2 products plus the 6 Phase 6C-3 products plus the 8 Phase 6E-1 products are migrated — nothing else",
    migratedIds.sort(),
    EXPECTED_TOTAL,
  );
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exitCode = 1;
}
