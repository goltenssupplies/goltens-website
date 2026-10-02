#!/usr/bin/env node
/**
 * Deterministic verification for the Phase 4 SEO/JSON-LD public boundary —
 * `generateMetadata()` in
 * `app/[locale]/sectors/[slug]/products/[product]/page.tsx`, `buildMetadata()`
 * (`lib/metadata.ts`), and `productJsonLd()` (`lib/structured-data.ts`). No
 * test framework exists in this repo (no jest/vitest/etc. in
 * `package.json`), so this follows the same lightweight, plain-Node
 * convention as `scripts/verify-public-product.mjs`.
 *
 * `generateMetadata()` itself is a Next.js route export tied to a live
 * `params` promise and isn't practically unit-testable without Next.js
 * rendering scaffolding. Per the Phase 4 instructions, this instead proves
 * the underlying architecture with pure-function calls: a synthetic,
 * deliberately branded `Product` fixture is projected through the REAL
 * `toPublicProduct()` (the exact function `generateMetadata()` now calls),
 * and the resulting `PublicProduct` fields are fed into the REAL
 * `buildMetadata()` and `productJsonLd()` — the exact two functions
 * `generateMetadata()`'s migrated logic is built from. This is the same
 * composition the live page performs, minus the Next.js route plumbing
 * around it.
 *
 * Run: node --experimental-strip-types scripts/verify-public-product-metadata.mjs
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(new URL("./ts-alias-loader.mjs", import.meta.url));

const root = pathToFileURL(`${process.cwd()}/`).href;
const { toPublicProduct, MissingPublicIdentityError } = await import(
  new URL("lib/products/public-product.ts", root).href
);
const { buildMetadata } = await import(new URL("lib/metadata.ts", root).href);
const { productJsonLd } = await import(
  new URL("lib/structured-data.ts", root).href
);
const { siteUrl } = await import(new URL("lib/site.ts", root).href);

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

console.log("Public SEO / JSON-LD boundary verification\n");

// ---------------------------------------------------------------------
// Synthetic fixture — same shape/intent as scripts/verify-public-product.mjs,
// deliberately branded raw fields vs. deliberately neutral public fields.
// No real product data used or implied.
// ---------------------------------------------------------------------
const brandedFixture = {
  id: "fixture-branded-seo-product",
  slug: "fixture-branded-seo-product",
  name_en: "Acme SuperOil 9000",
  name_ar: "Acme SuperOil 9000",
  shortDescription_en: "Acme SuperOil 9000 raw internal description.",
  shortDescription_ar: "وصف داخلي خام لـ Acme SuperOil 9000.",
  longDescription_en: "Acme SuperOil 9000 raw internal long description.",
  longDescription_ar: "وصف طويل داخلي خام لـ Acme SuperOil 9000.",
  publicName_en: "Synthetic Industrial Lubricant — ISO VG 46",
  publicName_ar: "زيت تشحيم صناعي اصطناعي — ISO VG 46",
  publicShortDescription_en:
    "Synthetic industrial lubricant, ISO VG 46, for general industrial use.",
  publicShortDescription_ar:
    "زيت تشحيم صناعي اصطناعي، ISO VG 46، للاستخدام الصناعي العام.",
  sourcing: {
    manufacturer: "Acme Corp",
    originalProductName_en: "Acme SuperOil 9000",
    sourceDocument: "acme-superoil-9000-pds.pdf",
    sourcingReference: "ACME-REF-001",
  },
  sectorId: "lubricants-oils",
  categoryId: "hydraulic-oils",
  // `seo` deliberately OMITTED — the realistic pre-Phase-6 state for every
  // current record: no SEO override, so the title/description fallback
  // chain must land on the PUBLIC name, never the raw brand-bearing one.
  images: [],
  availability: "available",
  quoteEnabled: true,
};

{
  const publicProduct = toPublicProduct(brandedFixture);

  // Replicates generateMetadata()'s exact fallback logic (seo override ??
  // public identity) — the same two-line derivation now in the migrated
  // page, run here as a pure-function check against the real PublicProduct.
  const isArabic = false;
  const title =
    (isArabic ? publicProduct.seo?.title_ar : publicProduct.seo?.title_en) ??
    (isArabic ? publicProduct.name_ar : publicProduct.name_en);
  const description =
    (isArabic
      ? publicProduct.seo?.description_ar
      : publicProduct.seo?.description_en) ??
    (isArabic
      ? publicProduct.shortDescription_ar
      : publicProduct.shortDescription_en);

  assertEqual(
    "title falls back to the neutral publicName_en (no seo override present)",
    title,
    brandedFixture.publicName_en,
  );
  assertEqual(
    "description falls back to the neutral publicShortDescription_en",
    description,
    brandedFixture.publicShortDescription_en,
  );
  assertTrue(
    "title is NOT the raw brand-bearing name_en",
    title !== brandedFixture.name_en,
  );
  assertTrue(
    "description is NOT the raw brand-bearing shortDescription_en",
    description !== brandedFixture.shortDescription_en,
  );

  const metadata = buildMetadata({
    locale: "en",
    path: `/sectors/lubricants-oils/products/${publicProduct.slug}`,
    title,
    description,
    keywords: publicProduct.seo?.keywords,
  });

  assertEqual("Metadata.title is the neutral public name", metadata.title, brandedFixture.publicName_en);
  assertEqual(
    "Metadata.description is the neutral public short description",
    metadata.description,
    brandedFixture.publicShortDescription_en,
  );
  assertEqual(
    "OpenGraph title is the neutral public name (inherits from the same buildMetadata() call — no separate Product OG path exists)",
    metadata.openGraph?.title,
    brandedFixture.publicName_en,
  );
  assertEqual(
    "Twitter title is the neutral public name (same inheritance)",
    metadata.twitter?.title,
    brandedFixture.publicName_en,
  );
  assertTrue(
    "serialized Metadata does not contain the raw brand-bearing name_en anywhere",
    !JSON.stringify(metadata).includes(brandedFixture.name_en),
  );
  assertTrue(
    'serialized Metadata does not contain "Acme Corp" (sourcing.manufacturer) anywhere',
    !JSON.stringify(metadata).includes("Acme Corp"),
  );

  // Canonical/URL — slug-derived, untouched by this phase. Proves the
  // public-identity migration does not alter canonical URL construction.
  assertEqual(
    "canonical URL uses the slug directly, unaffected by name neutralization",
    metadata.alternates?.canonical,
    `${siteUrl}/en/sectors/lubricants-oils/products/${brandedFixture.slug}`,
  );
}

// ---------------------------------------------------------------------
// JSON-LD — productJsonLd() has no live caller anywhere in the repo today
// (confirmed via repo-wide search), so this documents/verifies the SAFE
// calling convention rather than exercising a real call site: fed public
// values, it must never re-surface the raw brand-bearing name, and must
// still omit `brand` (its own pre-existing, unrelated design decision).
// ---------------------------------------------------------------------
{
  const publicProduct = toPublicProduct(brandedFixture);
  const jsonLd = productJsonLd({
    name: publicProduct.name_en,
    description: publicProduct.shortDescription_en,
    image: publicProduct.images?.[0] ?? "",
    category: publicProduct.categoryId,
    url: `${siteUrl}/en/sectors/lubricants-oils/products/${publicProduct.slug}`,
  });

  assertEqual(
    "productJsonLd().name is the neutral public name when fed PublicProduct fields",
    jsonLd.name,
    brandedFixture.publicName_en,
  );
  assertTrue(
    "productJsonLd() output has no 'brand' property (pre-existing design, unchanged)",
    !("brand" in jsonLd),
  );
  assertTrue(
    "serialized productJsonLd() output does not contain the raw brand-bearing name_en",
    !JSON.stringify(jsonLd).includes(brandedFixture.name_en),
  );
}

// ---------------------------------------------------------------------
// Missing-identity record — same guarantee Phase 2 already proved for
// toPublicProduct() directly, re-confirmed here in the metadata-derivation
// context: generateMetadata() calls the exact same toPublicProduct(), so
// an unmigrated record (today's real 222 products) throws here too, never
// silently falling back to raw name_en for SEO.
// ---------------------------------------------------------------------
{
  const unmigratedFixture = {
    id: "fixture-unmigrated-seo-product",
    slug: "fixture-unmigrated-seo-product",
    name_en: "Some Brand Widget 200",
    name_ar: "Some Brand Widget 200",
    shortDescription_en: "Raw internal description.",
    shortDescription_ar: "وصف داخلي خام.",
    longDescription_en: "Raw internal long description.",
    longDescription_ar: "وصف طويل داخلي خام.",
    sectorId: "lubricants-oils",
    categoryId: "hydraulic-oils",
    availability: "available",
    quoteEnabled: true,
  };

  let thrown = null;
  try {
    toPublicProduct(unmigratedFixture);
  } catch (err) {
    thrown = err;
  }

  assertTrue(
    "unmigrated record throws before any metadata could be built from it",
    thrown instanceof MissingPublicIdentityError,
  );
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exitCode = 1;
}
