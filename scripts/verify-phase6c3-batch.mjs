#!/usr/bin/env node
/**
 * Focused verification for Phase 6C-3 — the next 6 manufacturer-neutral
 * MOLLUBE product migrations (5 remaining greases + the last remaining
 * refrigeration oil). Runs against the REAL `PRODUCTS` registry, same
 * lightweight plain-Node convention as every other `scripts/verify-*.mjs`
 * file (no test framework exists in this repo).
 *
 * Run: node --experimental-strip-types scripts/verify-phase6c3-batch.mjs
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
  report(
    name,
    ok,
    detail ?? `expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`,
  );
}

console.log("Phase 6C-3 batch verification (6 real products)\n");

const activeMatchers = getActiveDenylistTerms().map((t) => ({
  ...t,
  regex: new RegExp(`\\b${t.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i"),
}));

function denylistHits(text) {
  if (!text) return [];
  return activeMatchers.filter((m) => m.regex.test(text)).map((m) => m.term);
}

// Pre-captured baseline (captured before any edit were made in this phase,
// via direct reads of the two source files — never re-derived afterward).
const BATCH = [
  {
    id: "mollube-proguard-lxsy",
    slug: "mollube-proguard-lxsy",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    manufacturer: "MOLLUBE",
    originalProductName_en: "MOLLUBE PROGUARD LXSY",
    publicName_en: "Synthetic Lithium Complex EP Grease — 100/220/460 cSt",
    publicName_ar:
      "شحم مركّب ليثيوم اصطناعي بخاصية الضغط العالي — 100/220/460 سنتيستوك",
    specCount: 12,
    applicationsCount: 5,
    featuresCount: 0,
    faqCount: 0,
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-lx-220",
      "mollube-proguard-csx",
    ],
  },
  {
    id: "mollube-proguard-lx-220",
    slug: "mollube-proguard-lx-220",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    manufacturer: "MOLLUBE",
    originalProductName_en: "MOLLUBE PROGUARD LX 220",
    publicName_en: "Mineral Lithium Complex Grease — 220 cSt",
    publicName_ar: "شحم مركّب ليثيوم معدني — 220 سنتيستوك",
    specCount: 10,
    applicationsCount: 2,
    featuresCount: 0,
    faqCount: 0,
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-lxsy",
      "mollube-mol-proguard-lcx2",
    ],
  },
  {
    id: "mollube-proguard-csx",
    slug: "mollube-proguard-csx",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    manufacturer: "MOLLUBE",
    originalProductName_en: "MOLLUBE PROGUARD CSX",
    publicName_en: "Calcium Sulfonate Complex EP Grease — 222/462 cSt",
    publicName_ar:
      "شحم مركّب سلفونات كالسيوم بخاصية الضغط العالي — 222/462 سنتيستوك",
    specCount: 12,
    applicationsCount: 4,
    featuresCount: 0,
    faqCount: 0,
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-lxsy",
      "mollube-proguard-xmo-180",
    ],
  },
  {
    id: "mollube-proguard-inor-sy",
    slug: "mollube-proguard-inor-sy",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    manufacturer: "MOLLUBE",
    originalProductName_en: "MOLLUBE PROGUARD INOR SY",
    publicName_en: "Synthetic PAO Soap-Free Low-Temperature Grease",
    publicName_ar: "شحم اصطناعي (PAO) خالٍ من الصابون منخفض درجة الحرارة",
    specCount: 5,
    applicationsCount: 3,
    featuresCount: 0,
    faqCount: 0,
    noTemperatureRangeField: true,
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-proguard-sy-pu",
      "mollube-proguard-m-bx",
    ],
  },
  {
    id: "mollube-proguard-ht-bo",
    slug: "mollube-proguard-ht-bo",
    sectorId: "lubricants-oils",
    categoryId: "greases",
    manufacturer: "MOLLUBE",
    originalProductName_en: "MOLLUBE PROGUARD HT BO",
    publicName_en: "High-Temperature Multi-Purpose Grease — Water-Resistant",
    publicName_ar: "شحم متعدد الأغراض عالي الحرارة — مقاوم للماء",
    specCount: 6,
    applicationsCount: 3,
    featuresCount: 0,
    faqCount: 0,
    relatedProductSlugs: [
      "industrial-greases",
      "mollube-mol-proguard-lcx2",
      "mollube-proguard-mo-lx",
    ],
  },
  {
    id: "mollube-mol-freez-ultra-68",
    slug: "mollube-mol-freez-ultra-68",
    sectorId: "lubricants-oils",
    categoryId: "refrigeration-oils",
    manufacturer: "MOLLUBE",
    originalProductName_en: "MOLLUBE MOL-FREEZ ULTRA 68",
    publicName_en: "Semi-Synthetic Ammonia Refrigeration Oil — ISO VG 68",
    publicName_ar: "زيت تبريد شبه اصطناعي للأمونيا — ISO VG 68",
    specCount: 7,
    applicationsCount: 2,
    featuresCount: 3,
    faqCount: 0,
    relatedProductSlugs: [
      "mollube-mol-freez-m",
      "mollube-mol-freez-pao",
      "mollube-mol-freez-e",
    ],
  },
];

for (const expected of BATCH) {
  console.log(`\n${expected.id}`);
  const product = getProductBySlug(expected.id);
  assertTrue(`${expected.id}: real product resolves`, product !== undefined);
  if (!product) continue;

  // Identity fields unchanged.
  assertEqual(`${expected.id}: id unchanged`, product.id, expected.id);
  assertEqual(`${expected.id}: slug unchanged`, product.slug, expected.slug);
  assertEqual(
    `${expected.id}: sectorId unchanged`,
    product.sectorId,
    expected.sectorId,
  );
  assertEqual(
    `${expected.id}: categoryId unchanged`,
    product.categoryId,
    expected.categoryId,
  );

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
  assertTrue(
    `${expected.id}: publicName_ar is non-empty`,
    typeof product.publicName_ar === "string" &&
      product.publicName_ar.length > 0,
  );
  {
    const hits = denylistHits(product.publicName_ar);
    assertTrue(
      `${expected.id}: publicName_ar contains no commercial identifier`,
      hits.length === 0,
      hits.join(", "),
    );
  }

  // Internal sourcing preserved, present, correct.
  assertEqual(
    `${expected.id}: sourcing.manufacturer === "MOLLUBE"`,
    product.sourcing?.manufacturer,
    "MOLLUBE",
  );
  assertEqual(
    `${expected.id}: sourcing.originalProductName_en === original name_en`,
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
  // product-line term) — name, short/long description, SEO, catalogue
  // titles.
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

  // Technical data immutable — counts unchanged.
  assertEqual(
    `${expected.id}: specifications count unchanged (${expected.specCount})`,
    product.specifications?.length,
    expected.specCount,
  );
  assertEqual(
    `${expected.id}: applications_en count unchanged (${expected.applicationsCount})`,
    product.applications_en?.length,
    expected.applicationsCount,
  );
  assertEqual(
    `${expected.id}: applications_ar count unchanged (${expected.applicationsCount})`,
    product.applications_ar?.length,
    expected.applicationsCount,
  );
  assertEqual(
    `${expected.id}: features_en count unchanged (${expected.featuresCount})`,
    (product.features_en ?? []).length,
    expected.featuresCount,
  );
  assertEqual(
    `${expected.id}: faq count unchanged (${expected.faqCount})`,
    (product.faq ?? []).length,
    expected.faqCount,
  );

  // Specification values/labels/groups preserved exactly — verbatim array
  // equality against the live source module itself is the real check; here
  // we assert count stability plus denylist-cleanliness of every spec cell
  // (values/labels/groups), proving no accidental rewrite introduced a
  // commercial identifier while leaving the data untouched.
  for (const spec of product.specifications ?? []) {
    for (const [f, v] of [
      ["value", spec.value],
      ["label_en", spec.label_en],
      ["label_ar", spec.label_ar],
      ["group_en", spec.group_en],
      ["group_ar", spec.group_ar],
    ]) {
      const hits = denylistHits(v);
      assertTrue(
        `${expected.id}: spec.${f} ("${v}") contains no commercial identifier`,
        hits.length === 0,
        hits.join(", "),
      );
    }
  }

  // relatedProductSlugs unchanged.
  assertEqual(
    `${expected.id}: relatedProductSlugs unchanged`,
    product.relatedProductSlugs,
    expected.relatedProductSlugs,
  );

  // relatedArticleSlugs unchanged (none of these 6 had any — must remain
  // absent/empty).
  assertEqual(
    `${expected.id}: relatedArticleSlugs unchanged (absent/empty)`,
    product.relatedArticleSlugs ?? [],
    [],
  );

  // Catalogue metadata preserved exactly — only title_en/title_ar changed.
  assertTrue(
    `${expected.id}: every catalogue fileUrl is still null`,
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
  assertTrue(
    `${expected.id}: every catalogue language is still "en"`,
    (product.catalogues ?? []).every((c) => c.language === "en"),
  );

  // images remain [].
  assertEqual(`${expected.id}: images remain []`, product.images, []);

  // availability/quoteEnabled unchanged.
  assertEqual(
    `${expected.id}: availability unchanged ("available")`,
    product.availability,
    "available",
  );
  assertEqual(
    `${expected.id}: quoteEnabled unchanged (true)`,
    product.quoteEnabled,
    true,
  );

  // Generic technical terms must remain allowed (never flagged).
  for (const term of ["PAO", "EP", "NLGI", "ISO VG", "cSt"]) {
    assertTrue(
      `${expected.id}: "${term}" is allowed generic technical terminology (not in active denylist)`,
      denylistHits(term).length === 0,
    );
  }
}

// ---------------------------------------------------------------------
// Known source-history notes: preserved, not "fixed".
// ---------------------------------------------------------------------
{
  const inorSy = getProductBySlug("mollube-proguard-inor-sy");
  const hasTempRange = (inorSy?.specifications ?? []).some(
    (s) => s.label_en === "Temperature Range",
  );
  assertTrue(
    "mollube-proguard-inor-sy: no Temperature Range was invented (field remains absent)",
    hasTempRange === false,
  );

  const csx = getProductBySlug("mollube-proguard-csx");
  assertEqual(
    "mollube-proguard-csx: name_en still reads PROGUARD CSX (spelling-history note did not trigger unrelated data change)",
    csx?.name_en,
    "MOLLUBE PROGUARD CSX",
  );
  assertEqual(
    "mollube-proguard-csx: specifications count still 12 (unrelated data unchanged)",
    csx?.specifications?.length,
    12,
  );

  const htBo = getProductBySlug("mollube-proguard-ht-bo");
  assertEqual(
    "mollube-proguard-ht-bo: name_en still reads PROGUARD HT BO (spelling-history note did not trigger unrelated data change)",
    htBo?.name_en,
    "MOLLUBE PROGUARD HT BO",
  );
  assertEqual(
    "mollube-proguard-ht-bo: specifications count still 6 (unrelated data unchanged)",
    htBo?.specifications?.length,
    6,
  );
}

// ---------------------------------------------------------------------
// Whole-catalog sanity — exactly these 26 IDs are migrated, nothing else.
// ---------------------------------------------------------------------
{
  const params = getAllProductParams();
  const migratedIds = [];
  for (const p of params) {
    const product = getProductBySlug(p.product);
    if (product?.publicName_en) migratedIds.push(product.id);
  }

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
    "mollube-mol-prohydro-hlp",
    "mollube-mol-freez-m",
    "mollube-mol-freez-pao",
    "mollube-mol-freez-e",
  ];
  const EXPECTED_NEW = BATCH.map((b) => b.id);
  // Headcount maintenance (Phase 6E-1 verification maintenance): this
  // script's own 6 product-specific assertions above remain untouched;
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
  const EXPECTED_TOTAL = [...PRE_EXISTING_MIGRATED, ...EXPECTED_NEW, ...PHASE_6E1_MIGRATED_IDS].sort();

  assertEqual(
    "exactly these 6 products became newly migrated (plus the 20 pre-existing and the 8 Phase 6E-1 products, nothing else)",
    migratedIds.sort(),
    EXPECTED_TOTAL,
  );
  assertEqual(
    "total migrated count after this batch is exactly 34",
    migratedIds.length,
    34,
  );
  for (const id of EXPECTED_NEW) {
    assertTrue(
      `${id}: is among the newly migrated set`,
      migratedIds.includes(id),
    );
  }
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exitCode = 1;
}
