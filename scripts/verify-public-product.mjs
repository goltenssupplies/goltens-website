#!/usr/bin/env node
/**
 * Deterministic verification for `lib/products/public-product.ts`
 * (Manufacturer-Neutral Catalog Architecture, Phase 2). No test framework
 * exists in this repo (no jest/vitest/etc. in `package.json`), so this
 * follows the same lightweight, plain-Node convention as
 * `scripts/verify-product-matcher.mjs`: no new dependency, clear pass/fail
 * output, non-zero exit code on failure.
 *
 * Unlike `verify-product-matcher.mjs`, this does NOT run against the real
 * `PRODUCTS` registry — none of the 222 real records have been migrated to
 * carry `publicName_*` yet (Phase 6 is not done). Instead this uses
 * synthetic, in-memory `Product`-shaped fixtures, deliberately including a
 * brand-bearing `name_en` and `sourcing` block, to prove `toPublicProduct()`
 * never leaks either one.
 *
 * Run: node --experimental-strip-types scripts/verify-public-product.mjs
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(new URL("./ts-alias-loader.mjs", import.meta.url));

const root = pathToFileURL(`${process.cwd()}/`).href;
const { toPublicProduct, MissingPublicIdentityError } = await import(
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
  report(
    name,
    ok,
    detail ?? `expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`,
  );
}

console.log("PublicProduct projection verification\n");

// ---------------------------------------------------------------------
// Synthetic fixture — deliberately brand-bearing `name_en`/`sourcing`,
// deliberately neutral `publicName_en`. No real product data used or
// implied; this is purely a schema-shape exercise.
// ---------------------------------------------------------------------
const brandedFixture = {
  id: "fixture-branded-product",
  slug: "fixture-branded-product",
  name_en: "Acme SuperOil 9000",
  name_ar: "Acme SuperOil 9000",
  shortDescription_en: "Acme SuperOil 9000 raw internal description.",
  shortDescription_ar: "وصف داخلي خام لـ Acme SuperOil 9000.",
  longDescription_en: "Acme SuperOil 9000 raw internal long description.",
  longDescription_ar: "وصف طويل داخلي خام لـ Acme SuperOil 9000.",
  publicName_en: "Synthetic Industrial Lubricant — ISO VG 46",
  publicName_ar: "زيت تشحيم صناعي اصطناعي — ISO VG 46",
  publicShortDescription_en: "Synthetic industrial lubricant, ISO VG 46, for general industrial use.",
  publicShortDescription_ar: "زيت تشحيم صناعي اصطناعي، ISO VG 46، للاستخدام الصناعي العام.",
  sourcing: {
    manufacturer: "Acme Corp",
    originalProductName_en: "Acme SuperOil 9000",
    sourceDocument: "acme-superoil-9000-pds.pdf",
    sourcingReference: "ACME-REF-001",
  },
  sectorId: "lubricants-oils",
  categoryId: "hydraulic-oils",
  applications_en: ["Industrial hydraulic systems"],
  applications_ar: ["أنظمة هيدروليكية صناعية"],
  specifications: [
    { label_en: "ISO VG", label_ar: "ISO VG", value: "46" },
  ],
  relatedBrandSlugs: ["acme"],
  catalogues: [
    {
      id: "fixture-datasheet",
      title_en: "Acme SuperOil 9000 Datasheet",
      title_ar: "نشرة بيانات Acme SuperOil 9000",
      kind: "datasheet",
      fileType: "pdf",
      language: "en",
      fileUrl: null,
    },
  ],
  images: [],
  seo: {
    title_en: "Acme SuperOil 9000 Supplier Egypt",
    description_en: "GOLTENS supplies Acme SuperOil 9000.",
  },
  availability: "available",
  quoteEnabled: true,
};

{
  const publicProduct = toPublicProduct(brandedFixture);

  // A. returns the neutral publicName_en
  assertEqual(
    "A: returns the neutral publicName_en",
    publicProduct.name_en,
    "Synthetic Industrial Lubricant — ISO VG 46",
  );

  // B. no sourcing field on the returned object
  assertTrue(
    "B: returned object has NO sourcing field",
    !("sourcing" in publicProduct),
  );

  // C. no manufacturer field anywhere on the returned object
  assertTrue(
    "C: returned object has NO manufacturer field",
    !("manufacturer" in publicProduct),
  );

  // D. no originalProductName_en exposed anywhere on the returned object
  assertTrue(
    "D: returned object does NOT expose originalProductName_en",
    !("originalProductName_en" in publicProduct),
  );

  // E. does not use raw name_en anywhere in the returned identity fields
  assertTrue(
    "E: public name is not the raw brand-bearing name_en",
    publicProduct.name_en !== brandedFixture.name_en,
  );
  assertTrue(
    "E: public short description is not the raw brand-bearing shortDescription_en",
    publicProduct.shortDescription_en !== brandedFixture.shortDescription_en,
  );

  // F. the returned public name is EXACTLY the neutral publicName_en (not
  //    a concatenation, not a fallback-joined string, not truncated)
  assertEqual(
    "F: returned public name is exactly publicName_en",
    publicProduct.name_en,
    brandedFixture.publicName_en,
  );
  assertEqual(
    "F: returned public name (ar) is exactly publicName_ar",
    publicProduct.name_ar,
    brandedFixture.publicName_ar,
  );

  // Extra: relatedBrandSlugs (brand-slug list) must not survive either,
  // even though it wasn't explicitly named in A-F.
  assertTrue(
    "extra: returned object has NO relatedBrandSlugs field",
    !("relatedBrandSlugs" in publicProduct),
  );

  // Extra: a full JSON serialization of the result must not contain the
  // manufacturer string anywhere, catching any accidental nested leak
  // (e.g. inside a future field added to the projection).
  assertTrue(
    'extra: serialized PublicProduct does not contain "Acme Corp" anywhere',
    !JSON.stringify(publicProduct).includes("Acme Corp"),
  );
}

// ---------------------------------------------------------------------
// Missing-public-identity behavior — an unmigrated record (today's real
// 222 products all look like this: `publicName_en` etc. simply absent)
// must throw MissingPublicIdentityError, never silently fall back to
// name_en.
// ---------------------------------------------------------------------
{
  const unmigratedFixture = {
    id: "fixture-unmigrated-product",
    slug: "fixture-unmigrated-product",
    name_en: "Some Brand Widget 200",
    name_ar: "Some Brand Widget 200",
    shortDescription_en: "Raw internal description.",
    shortDescription_ar: "وصف داخلي خام.",
    longDescription_en: "Raw internal long description.",
    longDescription_ar: "وصف طويل داخلي خام.",
    // publicName_en/ar and publicShortDescription_en/ar deliberately absent —
    // this is the exact shape of all 222 pre-Phase-6 real records today.
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
    "missing-identity record throws (does not return a value)",
    thrown !== null,
  );
  assertTrue(
    "throws specifically MissingPublicIdentityError",
    thrown instanceof MissingPublicIdentityError,
    thrown ? `threw ${thrown.constructor?.name}: ${thrown.message}` : "did not throw",
  );
  assertTrue(
    "error message names the product id",
    Boolean(thrown?.message?.includes("fixture-unmigrated-product")),
  );
  assertTrue(
    "error message lists all four missing fields",
    ["publicName_en", "publicName_ar", "publicShortDescription_en", "publicShortDescription_ar"].every(
      (field) => thrown?.message?.includes(field),
    ),
  );
}

// ---------------------------------------------------------------------
// Partial migration — only SOME of the four required fields present must
// still throw, not partially succeed with a mixed public/raw result.
// ---------------------------------------------------------------------
{
  const partiallyMigratedFixture = {
    id: "fixture-partial-product",
    slug: "fixture-partial-product",
    name_en: "Some Brand Widget 300",
    name_ar: "Some Brand Widget 300",
    shortDescription_en: "Raw internal description.",
    shortDescription_ar: "وصف داخلي خام.",
    longDescription_en: "Raw internal long description.",
    longDescription_ar: "وصف طويل داخلي خام.",
    publicName_en: "Neutral Widget — Type 300",
    // publicName_ar / publicShortDescription_en / publicShortDescription_ar deliberately absent
    sectorId: "lubricants-oils",
    categoryId: "hydraulic-oils",
    availability: "available",
    quoteEnabled: true,
  };

  let thrown = null;
  try {
    toPublicProduct(partiallyMigratedFixture);
  } catch (err) {
    thrown = err;
  }

  assertTrue(
    "partially-migrated record (only publicName_en set) still throws",
    thrown instanceof MissingPublicIdentityError,
  );
  assertTrue(
    "partial-migration error does not list publicName_en as missing (it was provided)",
    Boolean(thrown?.message) && !thrown.message.includes("publicName_en,"),
  );
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exitCode = 1;
}
