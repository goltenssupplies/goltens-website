#!/usr/bin/env node
/**
 * Focused verification for the Phase 6F listing-boundary fix — proves the
 * `.filter(hasPublicIdentity).map(toPublicProduct)` pattern now used by
 * every public listing page (sector, category, knowledge, solutions) and
 * the AI search action actually does what it's supposed to: a migrated
 * product is projected and rendered, an unmigrated product is quietly
 * excluded from the listing, and nothing silently swallows an unexpected
 * error along the way. Tests the filtering/projection logic directly
 * against both the real `PRODUCTS` registry and small synthetic fixtures
 * — it does not render any Next.js page/component.
 *
 * Run: node --experimental-strip-types scripts/verify-public-listing-boundary.mjs
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(new URL("./ts-alias-loader.mjs", import.meta.url));

const root = pathToFileURL(`${process.cwd()}/`).href;
const { getProductBySlug, getProductsByCategory } = await import(
  new URL("data/products/index.ts", root).href
);
const { hasPublicIdentity, toPublicProduct, MissingPublicIdentityError } =
  await import(new URL("lib/products/public-product.ts", root).href);

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

console.log("Public listing boundary verification\n");

// ---------------------------------------------------------------------
// 1 & 3. Real migrated product: included by the filter, and successfully
// projected by the exact listing pattern every page now uses.
// ---------------------------------------------------------------------
{
  const migrated = getProductBySlug("mobilgear-600-xp-220");
  assertTrue(
    "real migrated product resolves",
    migrated !== undefined,
  );
  assertTrue(
    "1. migrated product → hasPublicIdentity() includes it",
    hasPublicIdentity(migrated),
  );
  const listingOutput = [migrated]
    .filter(hasPublicIdentity)
    .map((p) => toPublicProduct(p));
  assertEqual(
    "3. migrated product → survives the listing filter+project pattern",
    listingOutput.length,
    1,
  );
  assertEqual(
    "3. projected item carries the public name, not the raw one",
    listingOutput[0]?.name_en,
    migrated.publicName_en,
  );
}

// ---------------------------------------------------------------------
// 2 & 4. Real unmigrated, raw-brand-bearing product: excluded by the
// filter, and its raw brand-bearing name never appears anywhere in the
// listing pattern's output (never even reaches toPublicProduct()).
// ---------------------------------------------------------------------
{
  const unmigrated = getProductBySlug("mollube-platinum-ultra");
  assertTrue(
    "real unmigrated product resolves",
    unmigrated !== undefined,
  );
  assertTrue(
    "unmigrated product genuinely has a raw brand-bearing name_en (precondition)",
    typeof unmigrated?.name_en === "string" &&
      unmigrated.name_en.includes("MOLLUBE"),
  );
  assertTrue(
    "2. unmigrated product → hasPublicIdentity() excludes it",
    hasPublicIdentity(unmigrated) === false,
  );
  const listingOutput = [unmigrated]
    .filter(hasPublicIdentity)
    .map((p) => toPublicProduct(p));
  assertEqual(
    "2. unmigrated product → excluded from the listing filter+project pattern (no throw, no entry)",
    listingOutput.length,
    0,
  );
  assertTrue(
    "4. serialized listing output never contains the raw brand-bearing name",
    !JSON.stringify(listingOutput).includes("MOLLUBE"),
  );
}

// ---------------------------------------------------------------------
// Mixed real listing (gear-oils-category: 1 unmigrated generic product +
// 5 migrated branded products) — proves the pattern handles a realistic
// mixed array without throwing, and every surviving item is safe.
// ---------------------------------------------------------------------
{
  const categoryProducts = getProductsByCategory("gear-oils-category");
  assertTrue(
    "gear-oils-category is a genuine mixed migrated/unmigrated set (precondition)",
    categoryProducts.some((p) => !hasPublicIdentity(p)) &&
      categoryProducts.some((p) => hasPublicIdentity(p)),
  );
  let threw = false;
  let listingOutput = [];
  try {
    listingOutput = categoryProducts
      .filter(hasPublicIdentity)
      .map((p) => toPublicProduct(p));
  } catch {
    threw = true;
  }
  assertTrue(
    "mixed real category listing does not throw",
    threw === false,
  );
  assertEqual(
    "mixed real category listing: only the migrated products survive",
    listingOutput.length,
    categoryProducts.filter(hasPublicIdentity).length,
  );
  for (const publicProduct of listingOutput) {
    assertTrue(
      `${publicProduct.slug}: toPublicProduct() output has NO sourcing field`,
      !("sourcing" in publicProduct),
    );
  }
}

// ---------------------------------------------------------------------
// 5. Unexpected/propagated error is not silently swallowed. Bypassing the
// filter (as no real listing page does, but proving the underlying
// function still fails loud) must still throw MissingPublicIdentityError
// — confirming nothing in this change quietly catches it.
// ---------------------------------------------------------------------
{
  const unmigrated = getProductBySlug("mollube-platinum-ultra");
  let caught;
  try {
    toPublicProduct(unmigrated);
  } catch (e) {
    caught = e;
  }
  assertTrue(
    "5. calling toPublicProduct() directly on an unmigrated product still throws (not swallowed anywhere in the chain)",
    caught instanceof MissingPublicIdentityError,
  );
}

// ---------------------------------------------------------------------
// hasPublicIdentity() itself never throws — a pure predicate, safe to use
// unguarded inside Array.prototype.filter.
// ---------------------------------------------------------------------
{
  let threw = false;
  try {
    hasPublicIdentity(getProductBySlug("mollube-platinum-ultra"));
    hasPublicIdentity(getProductBySlug("mobilgear-600-xp-220"));
  } catch {
    threw = true;
  }
  assertTrue("hasPublicIdentity() never throws", threw === false);
}

// ---------------------------------------------------------------------
// Synthetic fixtures — exact boundary cases on the four required fields.
// ---------------------------------------------------------------------
{
  const base = {
    id: "fixture",
    slug: "fixture",
    name_en: "Fixture Brand Product",
    name_ar: "منتج تجريبي للعلامة التجارية",
    shortDescription_en: "x",
    shortDescription_ar: "x",
    longDescription_en: "x",
    longDescription_ar: "x",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    availability: "available",
    quoteEnabled: true,
  };

  assertTrue(
    "fixture missing all four public fields → excluded",
    hasPublicIdentity({ ...base }) === false,
  );
  assertTrue(
    "fixture with only publicName_en/ar (no short descriptions) → still excluded",
    hasPublicIdentity({
      ...base,
      publicName_en: "Neutral Name",
      publicName_ar: "اسم محايد",
    }) === false,
  );
  assertTrue(
    "fixture with empty-string publicShortDescription_en → excluded (empty string is not a valid identity)",
    hasPublicIdentity({
      ...base,
      publicName_en: "Neutral Name",
      publicName_ar: "اسم محايد",
      publicShortDescription_en: "",
      publicShortDescription_ar: "وصف",
    }) === false,
  );
  assertTrue(
    "fixture with all four fields present and non-empty → included",
    hasPublicIdentity({
      ...base,
      publicName_en: "Neutral Name",
      publicName_ar: "اسم محايد",
      publicShortDescription_en: "A neutral description.",
      publicShortDescription_ar: "وصف محايد.",
    }) === true,
  );
}

// ---------------------------------------------------------------------
// Phase 6F-1 — product-detail page "Related Products" pattern. Same
// `.filter(hasPublicIdentity).map(toPublicProduct)` shape now used at
// app/[locale]/sectors/[slug]/products/[product]/page.tsx's
// `relatedProductItems`, exercised against the real scenario the Phase 6F
// checkpoint audit found: `mobil-dte-24` lists `hydraulic-fluids` (still
// unmigrated) among its `relatedProductSlugs`.
// ---------------------------------------------------------------------
{
  const primary = getProductBySlug("mobil-dte-24");
  assertTrue("mobil-dte-24 resolves", primary !== undefined);
  assertTrue(
    "mobil-dte-24 is itself migrated (precondition)",
    hasPublicIdentity(primary),
  );
  assertTrue(
    "mobil-dte-24's relatedProductSlugs includes the known-unmigrated hydraulic-fluids (precondition)",
    primary.relatedProductSlugs?.includes("hydraulic-fluids") === true,
  );
  const hydraulicFluids = getProductBySlug("hydraulic-fluids");
  assertTrue(
    "hydraulic-fluids resolves and is genuinely unmigrated (precondition)",
    hydraulicFluids !== undefined && !hasPublicIdentity(hydraulicFluids),
  );

  let threw = false;
  let relatedProductItems = [];
  try {
    relatedProductItems = (primary.relatedProductSlugs ?? [])
      .filter((relatedSlug) => relatedSlug !== primary.slug)
      .map((relatedSlug) => getProductBySlug(relatedSlug))
      .filter((item) => item !== undefined)
      .filter(hasPublicIdentity)
      .map((relatedProduct) => toPublicProduct(relatedProduct));
  } catch {
    threw = true;
  }
  assertTrue(
    "mobil-dte-24's Related Products pattern does not throw despite an unmigrated related product",
    threw === false,
  );
  assertTrue(
    "the unmigrated related product (hydraulic-fluids) is excluded from the result",
    !relatedProductItems.some((p) => p.slug === "hydraulic-fluids"),
  );
  assertTrue(
    "at least one migrated related product remains in the result",
    relatedProductItems.length > 0,
  );
  assertTrue(
    "every surviving related product is genuinely public-safe (no sourcing/manufacturer field)",
    relatedProductItems.every(
      (p) => !("sourcing" in p) && !("manufacturer" in p),
    ),
  );
  assertTrue(
    "direct toPublicProduct(hydraulic-fluids) still throws MissingPublicIdentityError — the strict boundary itself is unchanged",
    (() => {
      try {
        toPublicProduct(hydraulicFluids);
        return false;
      } catch (e) {
        return e instanceof MissingPublicIdentityError;
      }
    })(),
  );
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exitCode = 1;
}
