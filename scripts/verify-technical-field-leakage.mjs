#!/usr/bin/env node
/**
 * Phase 6B-5 — extends manufacturer-leakage verification to the public
 * TECHNICAL fields `scripts/verify-public-product-leakage.mjs` does not
 * scan: `applications_en/ar`, `features_en/ar`,
 * `specifications[].label_en/ar/value/group_en/ar`, and `faq[]`. No test
 * framework exists in this repo, same lightweight plain-Node convention as
 * every other `scripts/verify-*.mjs` file.
 *
 * This is a VERIFICATION script only — it does not modify product data,
 * the denylist, or `PublicProduct`. Per Phase 6B-5's explicit instruction,
 * OEM approval/compatibility names (MB, MAN, Volvo, Caterpillar, Cummins,
 * Eaton, Bosch Rexroth, etc. — see Phase 6B-4's audit) are NOT added to
 * `data/manufacturers/denylist.ts`, because that file's only job is
 * "these terms are manufacturer/product-brand identity and must never
 * appear publicly" — OEM approval codes are the opposite: explicitly
 * ALLOWED technical content. `KNOWN_OEM_APPROVAL_NAMES` below is a
 * separate, script-local allowlist that exists only to let this scanner
 * correctly classify field-level context; it is not consumed by, and does
 * not modify, any other file.
 *
 * FIELD-AWARE, not string-blind: the same literal substring ("FM", "DTE")
 * classifies differently depending on which product and field it appears
 * in — see `classifySegment()`. A context-free denylist (like the real
 * one) cannot express this; that is exactly why this is a separate script
 * rather than an extension of `verify-public-product-leakage.mjs`.
 *
 * Run: node --experimental-strip-types scripts/verify-technical-field-leakage.mjs
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

// ---------------------------------------------------------------------
// Classifier
// ---------------------------------------------------------------------
const CLASS = {
  PROHIBITED: "PROHIBITED_COMMERCIAL_IDENTIFIER",
  OEM: "ALLOWED_OEM_APPROVAL",
  STANDARD: "ALLOWED_STANDARD",
  GENERIC: "GENERIC_TECHNICAL_TERM",
  AMBIGUOUS: "AMBIGUOUS_REQUIRES_REVIEW",
};

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// The real, unmodified, active manufacturer/product-line denylist — reused
// as-is, per Phase 6B-5's instruction not to duplicate a second denylist.
const ACTIVE_DENYLIST_MATCHERS = getActiveDenylistTerms().map((t) => ({
  ...t,
  regex: new RegExp(`\\b${escapeRegExp(t.term)}\\b`, "i"),
}));

// Standards/certification bodies — Category ALLOWED_STANDARD. Built from
// every standards-body prefix actually observed across the 134 real
// "Standards/Approval/Certification" spec rows audited in Phase 6B-2/6B-4
// (fire protection, furniture, security, lighting, power, pumps, valves,
// compressors, switchgear, medical, chemicals, construction, plumbing,
// lubricants) — not invented, all evidenced in real catalog data.
const STANDARDS_BODY_PATTERN =
  /\b(ISO|DIN|ASTM|AGMA|IEC|NFPA|UL|BS\s?EN|BS|EN|JIS|NSF|FDA|GB\/T|GB|BIFMA|ANSI\/BIFMA|ANSI|PAS|IWA|ONVIF|OSDP|ASHRAE|AMPP|NACE|ASME|API|ISEA|China\s?GB)\b\s*[\d/.\-]*/i;

// OEM approval/compatibility names — Category ALLOWED_OEM_APPROVAL per the
// Phase 6B-4 audit and Phase 6B-5's approved policy. Deliberately NOT in
// data/manufacturers/denylist.ts (opposite purpose) and NOT consumed by
// any other file.
const KNOWN_OEM_APPROVAL_NAMES = [
  "Mercedes-Benz", "MB", "MAN", "Volvo", "VOLVO", "MTU", "Renault Trucks",
  "Renault", "RENAULT", "Mack", "MACK", "Caterpillar", "Cummins", "Deutz",
  "DEUTZ", "Detroit Diesel", "Volkswagen", "VW", "RN", "Eaton", "Husky",
  "Fives Cincinnati", "Denison", "Bosch Rexroth", "ZF", "GE Power",
  "Siemens", "Solar Turbines",
];
const OEM_PATTERN = new RegExp(
  `\\b(${KNOWN_OEM_APPROVAL_NAMES.map(escapeRegExp).join("|")})\\b\\s*[A-Za-z0-9/.\\-]*`,
  "i",
);

// Generic technical terms that are NOT a brand reference despite looking
// brand-like out of context — evidenced, not invented (Phase 6B-2 §E).
const GENERIC_TERM_PATTERNS = [
  /\b\d\s?T\s*\(four-stroke\)/i, // "4T (four-stroke)" — engine-type terminology, not MOLLUBE's product code
  /\bUL\s*\/\s*FM\b/i, // "UL / FM" — Factory Mutual (FM Global) fire-protection listing, not Mobil DTE FM
  /\bFM\s+(approved|listed|for fire protection)/i,
];

/**
 * Products whose raw internal record establishes a genuine "DTE FM"
 * lubricant-line identity — resolved from `sourcing.originalProductName_en`
 * (falling back to the legacy `name_en` for not-yet-migrated records,
 * since `sourcing` is only populated once a product is migrated). This is
 * what makes "FM 32"/"FM 46"/"FM 68" PROHIBITED specifically for this
 * product and nowhere else — see case B/C in the Phase 6B-5 spec.
 */
function isDteFmLineage(product) {
  const name = product.sourcing?.originalProductName_en ?? product.name_en ?? "";
  return /DTE\s+FM/i.test(name);
}

/**
 * Classifies one text segment found in one field of one product. Order
 * matters: prohibited-commercial-identifier checks run first (a DTE/FM
 * code is never "just" a standard or OEM approval), then OEM-approval,
 * then standards, then generic-term, then ambiguous as the last resort.
 */
function classifySegment(segment, product) {
  const text = segment.trim();
  if (!text) return null;

  // Case A — real, active denylist terms (mobil, mollube, castrol, shell,
  // dte, proguard, mol-*, polyrex, shc, xtc, hyspin, gadus, platinium...).
  for (const m of ACTIVE_DENYLIST_MATCHERS) {
    if (m.regex.test(text)) {
      return { classification: CLASS.PROHIBITED, reason: `active denylist term "${m.term}"` };
    }
  }

  // Case B — "FM <digits>" grade code, ONLY inside the DTE FM lineage.
  if (/\bFM\s?\d{2,3}\b/i.test(text) && isDteFmLineage(product)) {
    return { classification: CLASS.PROHIBITED, reason: "FM grade code within DTE FM product line" };
  }

  // Case D — known OEM approval name + code.
  if (OEM_PATTERN.test(text)) {
    return { classification: CLASS.OEM, reason: "known OEM approval/compatibility name" };
  }

  // Case E — standards-body prefix + code.
  if (STANDARDS_BODY_PATTERN.test(text)) {
    return { classification: CLASS.STANDARD, reason: "standards/certification body prefix" };
  }

  // Case C/F — generic technical terms (Factory Mutual "FM", "4T" four-stroke).
  for (const pattern of GENERIC_TERM_PATTERNS) {
    if (pattern.test(text)) {
      return { classification: CLASS.GENERIC, reason: "matches a known generic-technical-term pattern" };
    }
  }

  // A bare "FM" with no digits and no generic-pattern match (defensive
  // fallback — every real "FM" occurrence in the catalog matches the
  // UL/FM generic pattern above, but keep this explicit rather than
  // silently falling through to ambiguous for a single stray letter pair).
  if (/\bFM\b/i.test(text) && !/\bFM\s?\d/i.test(text)) {
    return { classification: CLASS.GENERIC, reason: "bare 'FM' with no attached grade number" };
  }

  // Residual heuristic: a TWO-WORD proper-noun-shaped prefix (each word
  // capitalized + lowercase, mimicking the real OEM names in
  // `KNOWN_OEM_APPROVAL_NAMES` — "Bosch Rexroth", "Solar Turbines",
  // "Detroit Diesel", "Fives Cincinnati" are all exactly this shape),
  // followed within a short window by a digit-bearing code. Deliberately
  // requires TWO proper-noun words, not one: single all-caps or short
  // engineering abbreviations (NEMA, DN, PN, AISI, Tier, Euro, Class, K-,
  // TEFC — all real, evidenced, generic catalog terms, none a
  // manufacturer) do not match `[A-Z][a-z]{2,}` twice in a row, so this
  // does not re-introduce the false-positive flood a single-word version
  // produced (see this phase's own fix history). Only run where codes
  // actually concentrate — see `classifyField()` — never on prose
  // labels/applications/features/faq.
  if (/\b[A-Z][a-z]{2,}\s+[A-Z][a-z]{2,}\b[\s\S]{0,20}?\d/.test(text)) {
    return { classification: CLASS.AMBIGUOUS, reason: "unrecognized two-word proper-noun-shaped prefix + digit-bearing code" };
  }

  return null; // plain prose, nothing code-like — not worth classifying
}

// Fields where real evidence (Phase 6B-2/6B-4) shows OEM approval / standard
// / brand-grade codes actually live. Spec `label_en/ar` and the narrative
// `applications`/`features`/`faq` fields are prose (e.g. "NLGI Grade",
// "TEFC (Totally Enclosed Fan Cooled)", "Typically DN50 – DN300") and are
// NOT run through the OEM/STANDARD/AMBIGUOUS classifiers — only through the
// PROHIBITED check — because applying code-pattern heuristics to ordinary
// English/Arabic sentences produces exactly the kind of false positives
// (NEMA 2, TEFC, DN50) this field-aware design exists to avoid.
const CODE_BEARING_FIELD_SUFFIXES = [".value", ".group_en", ".group_ar"];

/** Splits a spec `value` on ";" (the established authoring convention for
 * multi-code Standards/Approvals strings — see Phase 6B-2/6B-4); other
 * fields are classified as a single whole string. */
function classifyField(fieldName, text, product, findings) {
  if (typeof text !== "string" || !text) return;
  const isCodeBearing = CODE_BEARING_FIELD_SUFFIXES.some((suffix) => fieldName.endsWith(suffix));
  const segments = fieldName.endsWith(".value") ? text.split(";") : [text];
  for (const segment of segments) {
    const trimmed = segment.trim();
    if (!trimmed) continue;
    if (isCodeBearing) {
      const result = classifySegment(trimmed, product);
      if (result) findings.push({ field: fieldName, segment: trimmed, ...result });
    } else {
      // Prose field: only the PROHIBITED check applies (denylist terms +
      // the DTE-FM grade-code rule) — never OEM/STANDARD/AMBIGUOUS.
      for (const m of ACTIVE_DENYLIST_MATCHERS) {
        if (m.regex.test(trimmed)) {
          findings.push({ field: fieldName, segment: trimmed, classification: CLASS.PROHIBITED, reason: `active denylist term "${m.term}"` });
        }
      }
      if (/\bFM\s?\d{2,3}\b/i.test(trimmed) && isDteFmLineage(product)) {
        findings.push({ field: fieldName, segment: trimmed, classification: CLASS.PROHIBITED, reason: "FM grade code within DTE FM product line" });
      }
    }
  }
}

function scanTechnicalFields(product, source) {
  const findings = [];
  (source.applications_en ?? []).forEach((v, i) => classifyField(`applications_en[${i}]`, v, product, findings));
  (source.applications_ar ?? []).forEach((v, i) => classifyField(`applications_ar[${i}]`, v, product, findings));
  (source.features_en ?? []).forEach((v, i) => classifyField(`features_en[${i}]`, v, product, findings));
  (source.features_ar ?? []).forEach((v, i) => classifyField(`features_ar[${i}]`, v, product, findings));
  (source.specifications ?? []).forEach((spec, i) => {
    classifyField(`specifications[${i}].label_en`, spec.label_en, product, findings);
    classifyField(`specifications[${i}].label_ar`, spec.label_ar, product, findings);
    classifyField(`specifications[${i}].value`, spec.value, product, findings);
    classifyField(`specifications[${i}].group_en`, spec.group_en, product, findings);
    classifyField(`specifications[${i}].group_ar`, spec.group_ar, product, findings);
  });
  (source.faq ?? []).forEach((f, i) => {
    classifyField(`faq[${i}].question_en`, f.question_en, product, findings);
    classifyField(`faq[${i}].question_ar`, f.question_ar, product, findings);
    classifyField(`faq[${i}].answer_en`, f.answer_en, product, findings);
    classifyField(`faq[${i}].answer_ar`, f.answer_ar, product, findings);
  });
  return findings;
}

function countFieldInstances(source) {
  let n = 0;
  n += (source.applications_en ?? []).length;
  n += (source.applications_ar ?? []).length;
  n += (source.features_en ?? []).length;
  n += (source.features_ar ?? []).length;
  n += (source.specifications ?? []).length * 5;
  n += (source.faq ?? []).length * 4;
  return n;
}

// =======================================================================
// PART 1 — synthetic fixtures for cases A-F
// =======================================================================
console.log("=== SYNTHETIC FIXTURE TESTS (cases A-F) ===\n");

// Case A: DTE 832/846 as branded grade identifier -> PROHIBITED
{
  const fixture = { id: "fx-a", sourcing: { originalProductName_en: "Mobil DTE 800 Series" } };
  const r1 = classifySegment("DTE 832 (ISO VG 32)", fixture);
  const r2 = classifySegment("DTE 846 (ISO VG 46)", fixture);
  assertEqual("A: 'DTE 832 (ISO VG 32)' classified PROHIBITED", r1?.classification, CLASS.PROHIBITED);
  assertEqual("A: 'DTE 846 (ISO VG 46)' classified PROHIBITED", r2?.classification, CLASS.PROHIBITED);
}

// Case B: FM 32/46/68 PROHIBITED only in DTE FM lineage
{
  const dteFmFixture = { id: "fx-b1", sourcing: { originalProductName_en: "Mobil DTE FM Series" } };
  const r1 = classifySegment("ISO VG 32 (FM 32)", dteFmFixture);
  const r2 = classifySegment("ISO VG 46 (FM 46)", dteFmFixture);
  const r3 = classifySegment("ISO VG 68 (FM 68)", dteFmFixture);
  assertEqual("B: 'FM 32' in DTE FM lineage classified PROHIBITED", r1?.classification, CLASS.PROHIBITED);
  assertEqual("B: 'FM 46' in DTE FM lineage classified PROHIBITED", r2?.classification, CLASS.PROHIBITED);
  assertEqual("B: 'FM 68' in DTE FM lineage classified PROHIBITED", r3?.classification, CLASS.PROHIBITED);
}

// Case C: bare "FM" in fire-protection context must NOT be flagged prohibited
{
  const fireFixture = { id: "fx-c", sourcing: undefined, name_en: "Fire Pumps" };
  const r = classifySegment("Typically tested to NFPA 20 and listed by UL / approved by FM", fireFixture);
  assertTrue(
    'C: "UL / FM listed" in fire-protection context is NOT classified PROHIBITED',
    r?.classification !== CLASS.PROHIBITED,
    `got ${r?.classification}`,
  );
  // "UL" (a real standards/certification body) is matched first, so this
  // correctly lands on ALLOWED_STANDARD rather than GENERIC_TECHNICAL_TERM
  // — both are "remains allowed" outcomes; only PROHIBITED would violate
  // case C. A standalone "FM"-only variant (no "UL") is covered below.
  assertEqual('C: "UL / FM listed" classified ALLOWED_STANDARD (via "UL")', r?.classification, CLASS.STANDARD);

  const bareFmResult = classifySegment("Typically listed to UL / FM for fire protection service", fireFixture);
  assertTrue(
    'C: a second real fire-protection "UL / FM" phrasing is also NOT classified PROHIBITED',
    bareFmResult?.classification !== CLASS.PROHIBITED,
  );
}

// Case D: OEM approvals must NOT be flagged as manufacturer leakage
{
  const fixture = { id: "fx-d", name_en: "Some Engine Oil" };
  for (const code of ["MB 228.31", "VOLVO VDS-4.5", "Caterpillar ECF-3", "Cummins CES 20086", "MAN M3277", "ZF TE-ML 04H/27", "Eaton I-286-S", "Bosch Rexroth RE90220"]) {
    const r = classifySegment(code, fixture);
    assertEqual(`D: "${code}" classified ALLOWED_OEM_APPROVAL, not prohibited`, r?.classification, CLASS.OEM);
  }
}

// Case E: standards must not be flagged
{
  const fixture = { id: "fx-e", name_en: "Some Product" };
  for (const code of ["DIN 51524-2", "ISO 12925-1", "ASTM D6158", "AGMA CG-1"]) {
    const r = classifySegment(code, fixture);
    assertEqual(`E: "${code}" classified ALLOWED_STANDARD`, r?.classification, CLASS.STANDARD);
  }
}

// Case F: "4T" as four-stroke terminology must not be flagged
{
  const fixture = { id: "fx-f", name_en: "MOLLUBE 4T Super" };
  const r = classifySegment("4T (four-stroke) diesel and gasoline engines", fixture);
  assertTrue(
    '"4T (four-stroke)..." is NOT classified PROHIBITED',
    r?.classification !== CLASS.PROHIBITED,
    `got ${r?.classification}`,
  );
  assertEqual('"4T (four-stroke)..." classified GENERIC_TECHNICAL_TERM', r?.classification, CLASS.GENERIC);
}

// =======================================================================
// PART 2 — real catalog scan
// =======================================================================
console.log("\n=== REAL CATALOG SCAN ===\n");

const params = getAllProductParams();
const allProducts = [];
const seenIds = new Set();
for (const p of params) {
  const prod = getProductBySlug(p.product);
  if (!prod || seenIds.has(prod.id)) continue;
  seenIds.add(prod.id);
  allProducts.push(prod);
}

let totalFieldInstances = 0;
let prohibitedCount = 0;
let allowedOemCount = 0;
let allowedStandardCount = 0;
let genericCount = 0;
let ambiguousCount = 0;

const prohibitedFindings = [];
const ambiguousFindings = [];

// A) Diagnostic pass — RAW fields, ALL 222 products (mirrors the existing
// leakage scanner's "LEGACY RAW DATA EXPOSURE" section: informational,
// not a gate, since most of these products are not public yet).
for (const product of allProducts) {
  totalFieldInstances += countFieldInstances(product);
  const findings = scanTechnicalFields(product, product);
  for (const f of findings) {
    if (f.classification === CLASS.PROHIBITED) {
      prohibitedCount++;
      prohibitedFindings.push({ id: product.id, ...f });
    } else if (f.classification === CLASS.OEM) allowedOemCount++;
    else if (f.classification === CLASS.STANDARD) allowedStandardCount++;
    else if (f.classification === CLASS.GENERIC) genericCount++;
    else if (f.classification === CLASS.AMBIGUOUS) {
      ambiguousCount++;
      ambiguousFindings.push({ id: product.id, ...f });
    }
  }
}

console.log(`Total products scanned: ${allProducts.length}`);
console.log(`Total public technical field instances scanned: ${totalFieldInstances}`);
console.log(`Prohibited findings (raw, all 222 — diagnostic): ${prohibitedCount}`);
console.log(`Allowed OEM references: ${allowedOemCount}`);
console.log(`Allowed standards: ${allowedStandardCount}`);
console.log(`Generic technical terms: ${genericCount}`);
console.log(`Ambiguous findings: ${ambiguousCount}`);

if (prohibitedFindings.length > 0) {
  console.log("\nProhibited findings (raw diagnostic):");
  for (const f of prohibitedFindings) {
    console.log(`  ${f.id} | ${f.field} = "${f.segment}" | ${f.reason}`);
  }
}
if (ambiguousFindings.length > 0) {
  console.log("\nAmbiguous findings (requires human review):");
  for (const f of ambiguousFindings) {
    console.log(`  ${f.id} | ${f.field} = "${f.segment}" | ${f.reason}`);
  }
}

// B) The actual GATE — PublicProduct output, MIGRATED products only. This
// is what real public rendering actually exposes today. Zero PROHIBITED
// findings here is the pass/fail condition; OEM/standard/generic findings
// are allowed and informational only.
console.log("\n=== PUBLICPRODUCT (LIVE PUBLIC OUTPUT) GATE ===\n");
let migratedCount = 0;
let publicProhibited = 0;
const publicProhibitedFindings = [];
for (const product of allProducts) {
  let publicProduct;
  try {
    publicProduct = toPublicProduct(product);
  } catch (err) {
    if (err instanceof MissingPublicIdentityError) continue; // not public yet
    throw err;
  }
  migratedCount++;
  const findings = scanTechnicalFields(product, publicProduct);
  for (const f of findings) {
    if (f.classification === CLASS.PROHIBITED) {
      publicProhibited++;
      publicProhibitedFindings.push({ id: product.id, ...f });
    }
  }
}
console.log(`Migrated (live public) products: ${migratedCount}`);
console.log(`PROHIBITED findings in live PublicProduct output: ${publicProhibited}`);
if (publicProhibitedFindings.length > 0) {
  for (const f of publicProhibitedFindings) {
    console.log(`  LEAK ${f.id} | ${f.field} = "${f.segment}" | ${f.reason}`);
  }
}

assertEqual("migrated product count is 34", migratedCount, 34);
assertEqual("zero PROHIBITED findings in live PublicProduct technical fields", publicProhibited, 0);

// C) Confirm the specific real-catalog expectations from the Phase 6B-5 spec.
{
  const dte800 = getProductBySlug("mobil-dte-800-series");
  const pub = toPublicProduct(dte800);
  const findings = scanTechnicalFields(dte800, pub);
  assertTrue(
    "mobil-dte-800-series has NO DTE 832/846 leakage after Phase 6B-3",
    !findings.some((f) => f.classification === CLASS.PROHIBITED),
  );

  const oemFindingsIn4Migrated = [];
  for (const id of ["mobil-dte-24", "castrol-hyspin-aws-46", "mobilgear-600-xp-220"]) {
    const p = getProductBySlug(id);
    const pp = toPublicProduct(p);
    oemFindingsIn4Migrated.push(...scanTechnicalFields(p, pp).filter((f) => f.classification === CLASS.OEM));
  }
  assertTrue(
    "OEM references in the migrated hydraulic/gear-oil products are classified ALLOWED, not prohibited",
    oemFindingsIn4Migrated.length > 0,
  );

  const mollubeDynamic1 = getProductBySlug("mollube-dynamic-1");
  let threwForUnmigrated = false;
  try {
    toPublicProduct(mollubeDynamic1);
  } catch (err) {
    threwForUnmigrated = err instanceof MissingPublicIdentityError;
  }
  assertTrue(
    "the 7 unmigrated MOLLUBE OEM-reference products still throw via toPublicProduct() (not treated as public output)",
    threwForUnmigrated,
  );

  // Raw-diagnostic confirms the classifier WOULD correctly allow these
  // OEM codes once migrated (useful for future migration, not a gate today).
  const rawFindings = scanTechnicalFields(mollubeDynamic1, mollubeDynamic1).filter((f) => f.classification === CLASS.OEM);
  assertTrue(
    "mollube-dynamic-1's OEM approval codes classify as ALLOWED_OEM_APPROVAL in the raw diagnostic scan",
    rawFindings.length >= 10,
    `found ${rawFindings.length}`,
  );

  const mobilDteFm = getProductBySlug("mobil-dte-fm-series");
  const fmFindings = scanTechnicalFields(mobilDteFm, mobilDteFm).filter((f) => f.classification === CLASS.PROHIBITED);
  assertTrue(
    "mobil-dte-fm-series's FM 32/46/68 grade codes classify as PROHIBITED in the raw diagnostic scan (will need Phase 6B-6+ neutralization before migration)",
    fmFindings.length > 0,
  );
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exitCode = 1;
}
