#!/usr/bin/env node
/**
 * Manufacturer/public-brand leakage scanner for the Manufacturer-Neutral
 * Catalog Architecture. No test framework exists in this repo (no jest/
 * vitest/etc. in `package.json`), so this follows the same lightweight,
 * plain-Node convention as `scripts/verify-product-matcher.mjs` and
 * `scripts/verify-public-product.mjs`: no new dependency, clear pass/fail
 * output, non-zero exit code on failure.
 *
 * This script runs against the REAL `PRODUCTS` registry
 * (`data/products/index.ts`) — no synthetic fixture, because its whole
 * purpose is to characterize the actual current catalog. It deliberately
 * does NOT treat "no publicName_* yet" as a failure in normal mode: as of
 * Phase 2, none of the 222 real records have been migrated, and that is
 * expected, not a bug. Two distinct conditions are reported separately and
 * must never be conflated:
 *
 *   A. NOT MIGRATED    — `toPublicProduct()` threw `MissingPublicIdentityError`.
 *   B. PUBLIC LEAKAGE  — `toPublicProduct()` succeeded, but a denylisted
 *                         manufacturer/product-line term is present in one
 *                         of the fields that actually reaches public output.
 *   C. SAFE            — `toPublicProduct()` succeeded and no denylisted
 *                         term was found.
 *
 * Separately, a LEGACY RAW DATA EXPOSURE diagnostic scans the raw `Product`
 * fields directly (not via the mapper) for the same denylisted terms, to
 * establish today's baseline (expected ≈53 products) that Phase 6 should
 * drive to zero. This is informational, never a failure condition.
 *
 * Modes:
 *   node --experimental-strip-types scripts/verify-public-product-leakage.mjs
 *     → NORMAL (migration) mode: exits non-zero ONLY for actual PUBLIC
 *       LEAKAGE among already-migrated products. "Not migrated" is
 *       reported but does not fail the run — that's the expected state of
 *       the whole catalog right now.
 *   node --experimental-strip-types scripts/verify-public-product-leakage.mjs --strict
 *     → STRICT (future CI/pre-commit gate) mode: "not migrated" also
 *       becomes a failure. Intended to be wired in once Phase 6 is
 *       complete and every product is expected to carry a public identity.
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(new URL("./ts-alias-loader.mjs", import.meta.url));

const root = pathToFileURL(`${process.cwd()}/`).href;
const { getAllProductParams, getProductBySlug } = await import(
  new URL("data/products/index.ts", root).href
);
const { toPublicProduct, MissingPublicIdentityError } = await import(
  new URL("lib/products/public-product.ts", root).href
);
const { DENYLIST_TERMS, getActiveDenylistTerms } = await import(
  new URL("data/manufacturers/denylist.ts", root).href
);

const STRICT = process.argv.includes("--strict");

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const ACTIVE_TERMS = getActiveDenylistTerms();
const ACTIVE_MATCHERS = ACTIVE_TERMS.map((t) => ({
  ...t,
  regex: new RegExp(`\\b${escapeRegExp(t.term)}\\b`, "i"),
}));
// Legacy raw-data diagnostic intentionally uses ALL evidenced terms
// (active and inactive) — it's informational, not a gate, so the
// inactive/generic-risk terms are worth surfacing there even though
// they're excluded from the pass/fail matcher.
const ALL_MATCHERS = DENYLIST_TERMS.map((t) => ({
  ...t,
  regex: new RegExp(`\\b${escapeRegExp(t.term)}\\b`, "i"),
}));

function findMatches(text, matchers) {
  if (typeof text !== "string" || text.length === 0) return [];
  return matchers.filter((m) => m.regex.test(text)).map((m) => ({ term: m.term, manufacturer: m.manufacturer }));
}

function scanFields(fields, matchers) {
  // fields: [[fieldName, value], ...] — value may be a string, or undefined
  const hits = [];
  for (const [fieldName, value] of fields) {
    for (const match of findMatches(value, matchers)) {
      hits.push({ field: fieldName, ...match });
    }
  }
  return hits;
}

function rawFieldsOf(product) {
  const fields = [
    ["name_en", product.name_en],
    ["name_ar", product.name_ar],
    ["shortDescription_en", product.shortDescription_en],
    ["shortDescription_ar", product.shortDescription_ar],
    ["longDescription_en", product.longDescription_en],
    ["longDescription_ar", product.longDescription_ar],
    ["seo.title_en", product.seo?.title_en],
    ["seo.title_ar", product.seo?.title_ar],
    ["seo.description_en", product.seo?.description_en],
    ["seo.description_ar", product.seo?.description_ar],
  ];
  for (const c of product.catalogues ?? []) {
    fields.push([`catalogues[${c.id}].title_en`, c.title_en]);
    fields.push([`catalogues[${c.id}].title_ar`, c.title_ar]);
  }
  return fields;
}

function publicFieldsOf(publicProduct) {
  const fields = [
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
    fields.push([`catalogues[${c.id}].title_en`, c.title_en]);
    fields.push([`catalogues[${c.id}].title_ar`, c.title_ar]);
  }
  return fields;
}

const params = getAllProductParams();
const productIds = new Set();
const allProducts = [];
for (const p of params) {
  const product = getProductBySlug(p.product);
  if (!product || productIds.has(product.id)) continue;
  productIds.add(product.id);
  allProducts.push(product);
}

// -------------------------------------------------------------------
// A/B/C classification via the real mapper boundary (toPublicProduct)
// -------------------------------------------------------------------
const notMigrated = [];
const leakage = [];
const safe = [];
const structuralLeakFailures = [];

for (const product of allProducts) {
  let publicProduct;
  try {
    publicProduct = toPublicProduct(product);
  } catch (err) {
    if (err instanceof MissingPublicIdentityError) {
      notMigrated.push({ id: product.id, slug: product.slug, message: err.message });
      continue;
    }
    throw err; // an unexpected error is a real bug, not a migration-state finding
  }

  // Mapper-boundary structural check — runtime, not just type-level, per
  // instruction 5: prove the actual returned OBJECT never carries
  // sourcing/manufacturer/relatedBrandSlugs/originalProductName, and that
  // if this record ever gets a `sourcing.manufacturer` value, that string
  // does not appear anywhere in the serialized public output.
  const structuralLeaks = [];
  if ("sourcing" in publicProduct) structuralLeaks.push("sourcing key present on PublicProduct");
  if ("manufacturer" in publicProduct) structuralLeaks.push("manufacturer key present on PublicProduct");
  if ("relatedBrandSlugs" in publicProduct) structuralLeaks.push("relatedBrandSlugs key present on PublicProduct");
  if ("originalProductName_en" in publicProduct) structuralLeaks.push("originalProductName_en key present on PublicProduct");
  if (product.sourcing?.manufacturer) {
    const serialized = JSON.stringify(publicProduct);
    if (serialized.includes(product.sourcing.manufacturer)) {
      structuralLeaks.push(`sourcing.manufacturer value "${product.sourcing.manufacturer}" found in serialized PublicProduct`);
    }
  }
  if (structuralLeaks.length > 0) {
    structuralLeakFailures.push({ id: product.id, slug: product.slug, leaks: structuralLeaks });
  }

  const hits = scanFields(publicFieldsOf(publicProduct), ACTIVE_MATCHERS);
  if (hits.length > 0) {
    leakage.push({ id: product.id, slug: product.slug, hits });
  } else {
    safe.push({ id: product.id, slug: product.slug });
  }
}

// -------------------------------------------------------------------
// LEGACY RAW DATA EXPOSURE — diagnostic only, scans raw Product fields
// directly, using ALL evidenced terms (active + inactive), regardless of
// migration state. Establishes today's baseline.
// -------------------------------------------------------------------
const legacyExposure = [];
for (const product of allProducts) {
  const hits = scanFields(rawFieldsOf(product), ALL_MATCHERS);
  if (hits.length > 0) {
    legacyExposure.push({ id: product.id, slug: product.slug, hits });
  }
}

// ---------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------
console.log("=== PUBLIC PRODUCT LEAKAGE AUDIT ===");
console.log(`Mode: ${STRICT ? "STRICT (future CI gate)" : "NORMAL (migration mode)"}\n`);

console.log("Catalog:");
console.log(`  Products scanned: ${allProducts.length}\n`);

console.log("Public identity:");
console.log(`  Migrated (projectable via toPublicProduct): ${notMigrated.length === allProducts.length ? 0 : allProducts.length - notMigrated.length}`);
console.log(`  Not migrated: ${notMigrated.length}\n`);

console.log("Public leakage (post-projection, PublicProduct fields):");
console.log(`  Products with leakage: ${leakage.length}`);
console.log(`  Products clean: ${safe.length}`);
if (leakage.length > 0) {
  console.log("  Details:");
  for (const entry of leakage) {
    for (const hit of entry.hits) {
      console.log(`    LEAK product_id=${entry.id} slug=${entry.slug} field=${hit.field} matched_term="${hit.term}" manufacturer=${hit.manufacturer}`);
    }
  }
}
console.log();

console.log("Mapper boundary:");
console.log(`  Projected: ${allProducts.length - notMigrated.length}`);
console.log(`  Skipped (not migrated): ${notMigrated.length}`);
console.log(`  Structural leak checks: ${structuralLeakFailures.length === 0 ? "PASS" : "FAIL"}`);
if (structuralLeakFailures.length > 0) {
  for (const entry of structuralLeakFailures) {
    for (const leak of entry.leaks) {
      console.log(`    STRUCTURAL LEAK product_id=${entry.id} slug=${entry.slug} — ${leak}`);
    }
  }
}
console.log();

console.log("Legacy raw data exposure (LEGACY RAW DATA EXPOSURE — diagnostic only, not a gate):");
console.log(`  Products with raw brand-bearing fields: ${legacyExposure.length}`);
console.log(`  (Baseline target: this count should fall from ${legacyExposure.length} toward 0 as Phase 6 neutralizes each batch.)`);
if (legacyExposure.length > 0) {
  console.log("  Details:");
  for (const entry of legacyExposure) {
    for (const hit of entry.hits) {
      console.log(`    RAW  product_id=${entry.id} slug=${entry.slug} field=${hit.field} matched_term="${hit.term}" manufacturer=${hit.manufacturer}`);
    }
  }
}
console.log();

// ---------------------------------------------------------------------
// Result
// ---------------------------------------------------------------------
const hasPublicLeakage = leakage.length > 0;
const hasStructuralLeak = structuralLeakFailures.length > 0;
const hasNotMigrated = notMigrated.length > 0;

let fail;
if (STRICT) {
  fail = hasPublicLeakage || hasStructuralLeak || hasNotMigrated;
} else {
  fail = hasPublicLeakage || hasStructuralLeak;
}

console.log("Result:", fail ? "FAIL" : "PASS");
if (STRICT && hasNotMigrated && !hasPublicLeakage && !hasStructuralLeak) {
  console.log(`  (strict mode: failing solely because ${notMigrated.length} product(s) are not yet migrated — expected at this stage of the project)`);
}

if (fail) {
  process.exitCode = 1;
}
