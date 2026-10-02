#!/usr/bin/env node
/**
 * Focused verification for Phase 6B-3 — the `mobil-dte-800-series`
 * specifications `group_en`/`group_ar` grade-code correction ("DTE 832
 * (ISO VG 32)" -> "ISO VG 32", "DTE 846 (ISO VG 46)" -> "ISO VG 46").
 * Runs against the REAL `PRODUCTS` registry. No test framework exists in
 * this repo, same lightweight plain-Node convention as every other
 * `scripts/verify-*.mjs` file.
 *
 * Run: node --experimental-strip-types scripts/verify-phase6b3-dte-fix.mjs
 */
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(new URL("./ts-alias-loader.mjs", import.meta.url));

const root = pathToFileURL(`${process.cwd()}/`).href;
const { getProductBySlug } = await import(new URL("data/products/index.ts", root).href);
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

console.log("Phase 6B-3 verification — mobil-dte-800-series DTE grade-code fix\n");

const product = getProductBySlug("mobil-dte-800-series");
assertTrue("product resolves", product !== undefined);

const specs = product.specifications ?? [];
const groupTexts = specs.flatMap((s) => [s.group_en, s.group_ar]);
const allValues = specs.map((s) => s.value);
const allLabels = specs.flatMap((s) => [s.label_en, s.label_ar]);

// Core requirement: no "DTE 832"/"DTE 846" anywhere in public specifications.
assertTrue(
  'no "DTE 832" in any specifications[].group_en/ar',
  !groupTexts.some((t) => t?.includes("DTE 832")),
);
assertTrue(
  'no "DTE 846" in any specifications[].group_en/ar',
  !groupTexts.some((t) => t?.includes("DTE 846")),
);
assertTrue(
  'no "DTE" token at all remains in specifications[].group_en/ar',
  !groupTexts.some((t) => /\bDTE\b/i.test(t ?? "")),
);

// ISO VG values preserved.
assertTrue('"ISO VG 32" still present in group labels', groupTexts.includes("ISO VG 32"));
assertTrue('"ISO VG 46" still present in group labels', groupTexts.includes("ISO VG 46"));

// Exact expected group label set for the 12 grade-derived rows (6 per grade).
const grade32Count = groupTexts.filter((t) => t === "ISO VG 32").length;
const grade46Count = groupTexts.filter((t) => t === "ISO VG 46").length;
assertEqual("exactly 6 group_en/ar entries read \"ISO VG 32\" (6 fields x en+ar / 2... see note)", grade32Count, 12);
assertEqual("exactly 12 group_en/ar entries read \"ISO VG 46\"", grade46Count, 12);

// Specification count unchanged (14: 6 rows x 2 grades + Base Oil Type + Standards/Approvals).
assertEqual("specifications count unchanged (14)", specs.length, 14);

// Values and labels untouched — only group_en/group_ar changed.
const EXPECTED_VALUES = [
  "29.6 mm²/s", "5.4 mm²/s", "110", "-30°C", "224°C", "0.87 g/cm³",
  "42.4 mm²/s", "6.2 mm²/s", "106", "-30°C", "244°C", "0.86 g/cm³",
  "High-quality hydrotreated",
  "DIN 51515-1:2010-02; DIN 51515-2:2010-02; GE Power GEK 28143B; Siemens TLV 9013 04/05; JIS K-2213 Type 2; Solar Turbines ES 9-224 Class II",
];
assertEqual("every specification value is byte-identical to before the fix", allValues, EXPECTED_VALUES);

const EXPECTED_LABELS_EN = [
  "Kinematic Viscosity @ 40°C", "Kinematic Viscosity @ 100°C", "Viscosity Index",
  "Pour Point", "Flash Point", "Density @ 15.6°C",
  "Kinematic Viscosity @ 40°C", "Kinematic Viscosity @ 100°C", "Viscosity Index",
  "Pour Point", "Flash Point", "Density @ 15.6°C",
  "Base Oil Type", "Standards / Approvals",
];
assertEqual(
  "every specification label_en is unchanged",
  specs.map((s) => s.label_en),
  EXPECTED_LABELS_EN,
);

// Unrelated fields untouched.
assertEqual("id unchanged", product.id, "mobil-dte-800-series");
assertEqual("slug unchanged", product.slug, "mobil-dte-800-series");
assertEqual("publicName_en unchanged", product.publicName_en, "Turbine Oil — ISO VG 32/46");
assertEqual("publicName_ar unchanged", product.publicName_ar, "زيت توربينات — ISO VG 32/46");
assertEqual(
  "seo.title_en unchanged",
  product.seo?.title_en,
  "Turbine Oil — ISO VG 32/46 Supplier Egypt",
);
assertEqual(
  "catalogue title_en unchanged",
  product.catalogues?.[0]?.title_en,
  "Turbine Oil — ISO VG 32/46 Datasheet",
);
assertEqual(
  "sourcing.manufacturer unchanged",
  product.sourcing?.manufacturer,
  "Mobil",
);
assertEqual(
  "sourcing.originalProductName_en unchanged",
  product.sourcing?.originalProductName_en,
  "Mobil DTE 800 Series",
);
assertTrue(
  "legacy longDescription_en still contains the original raw text (internal field intentionally untouched)",
  product.longDescription_en.includes("DTE 832 (ISO VG 32)"),
);
assertEqual(
  "applications_en unchanged (6 entries)",
  product.applications_en?.length,
  6,
);

// The public projection also reflects the fix (this is what actually
// reaches the rendered page).
const publicProduct = toPublicProduct(product);
const publicGroupTexts = (publicProduct.specifications ?? []).flatMap((s) => [s.group_en, s.group_ar]);
assertTrue(
  "PublicProduct.specifications carries the fix through (no DTE 832/846)",
  !publicGroupTexts.some((t) => t?.includes("DTE 832") || t?.includes("DTE 846")),
);
assertEqual(
  "PublicProduct.specifications count unchanged (14)",
  publicProduct.specifications?.length,
  14,
);

// ---------------------------------------------------------------------
// No other product changed — spot-check the other 7 migrated products'
// spec counts are untouched (full cross-product regression already
// covered by scripts/verify-phase6b1-batch.mjs; this is a light sanity
// check specific to this fix's blast radius).
// ---------------------------------------------------------------------
const OTHER_MIGRATED = [
  ["mobil-dte-24", 3],
  ["castrol-hyspin-aws-46", 5],
  ["mobilgear-600-xp-220", 6],
  ["mobilgrease-xtc", 8],
  ["mobil-polyrex-ep-2", 7],
  ["shell-gadus-s5-v220-2", 5],
  ["mobilux-ep-2-moly", 6],
];
for (const [id, specCount] of OTHER_MIGRATED) {
  const p = getProductBySlug(id);
  assertEqual(`${id}: untouched by this fix — spec count still ${specCount}`, p?.specifications?.length, specCount);
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exitCode = 1;
}
