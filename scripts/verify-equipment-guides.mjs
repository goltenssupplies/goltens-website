#!/usr/bin/env node
/**
 * Verification for sector equipment guides (`SectorContent.equipmentGuide`,
 * e.g. `data/sector-content/heavy-equipment-guide.ts`) — editorial,
 * manufacturer-neutral equipment-type content that must never turn into a
 * product listing, a brand page, or a page of unverified specifications.
 *
 * Fails (non-zero exit) on:
 *   - unknown category ids, or categories belonging to another sector
 *   - duplicate or malformed ids/anchors, or collisions with the page's own
 *     anchors (`request-quote`, …)
 *   - unresolved industry / related-equipment / project-equipment ids
 *   - a `linkedProductId` that doesn't exist or isn't in the same sector
 *     and category as the guide entry
 *   - missing or empty EN/AR text, empty required arrays, EN/AR arrays of
 *     different lengths, or a process that isn't exactly four steps
 *   - any manufacturer/brand identity (active denylist terms, the OEM brand
 *     slugs and sourcing values of the linked products, brand-derived
 *     generic terms) in rendered guide or FAQ/SEO text
 *   - any digit in rendered guide text (no invented numeric specifications)
 *   - prohibited business claims (authorized dealer, after-sales, genuine
 *     OEM parts, supplier network, certifications, …) and generic
 *     marketing superlatives
 *   - an image path that doesn't exist, or an image without EN/AR alt text
 * Reports (without failing) every entry whose technical or Arabic review is
 * not yet "verified". Pass `--require-verified` to make that a failure too.
 *
 * Run: node --experimental-strip-types scripts/verify-equipment-guides.mjs
 */
import fs from "node:fs";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(new URL("./ts-alias-loader.mjs", import.meta.url));

const root = pathToFileURL(`${process.cwd()}/`).href;
const load = (path) => import(new URL(path, root).href);

const { SECTORS } = await load("data/sectors.ts");
const { getSectorContent } = await load("data/sector-content/index.ts");
const { getCategoryById } = await load("data/product-categories.ts");
const { getProductById } = await load("data/products/index.ts");
const { getActiveDenylistTerms } = await load("data/manufacturers/denylist.ts");

const REQUIRE_VERIFIED = process.argv.includes("--require-verified");
const RESERVED_ANCHORS = new Set([
  "request-quote",
  "main-content",
  "equipment-by-project",
  "quotation-checklist",
]);
const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// Brand-derived generic terms used in the Egyptian market — never used as
// equipment names. "هراس" is listed because it is ambiguous (commonly a
// roller) and must not be used for the hydraulic breaker.
const BRAND_DERIVED_TERMS = [
  "بوكلين",
  "كلارك",
  "جي سي بي",
  "هراس",
  "Bobcat",
  "Poclain",
];

const PROHIBITED_CLAIMS = [
  /authori[sz]ed/i,
  /official (?:dealer|distributor|agent|representative)/i,
  /\bdealer(?:ship)?\b/i,
  /\bdistributor\b/i,
  /OEM representative/i,
  /after[- ]sales/i,
  /maintenance services?/i,
  /genuine/i,
  /\bOEM parts\b/i,
  /supplier network/i,
  /\bcertifi/i,
  /\b(?:ISO|EN|ASME|ANSI|NFPA|OSHA|DIN|BS)\s?\d/,
  /world[- ]class/i,
  /unmatched/i,
  /best quality/i,
  /leading supplier/i,
  /thousands of/i,
  /وكيل معتمد/,
  /موزع معتمد/,
  /الموزع الرسمي/,
  /الوكيل الرسمي/,
  /ما بعد البيع/,
  /خدمات? الصيانة/,
  /قطع غيار أصلية/,
  /شبكة موردين/,
  /معتمدة? من/,
  /الأفضل/,
  /رائدة?/,
];

let passed = 0;
let failed = 0;
const pendingReviews = [];

function report(name, ok, detail) {
  if (ok) {
    passed++;
    console.log(`  ok   ${name}`);
  } else {
    failed++;
    console.log(`  FAIL ${name}${detail ? `\n         ${detail}` : ""}`);
  }
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function wordPattern(term) {
  return new RegExp(
    `(?<![\\p{L}\\p{N}])${escapeRegExp(term).replace(/[- ]/g, "[- ]")}(?![\\p{L}\\p{N}])`,
    "iu",
  );
}

/** Every rendered string of a guide, with a path for error messages. */
function collectGuideStrings(guide) {
  const out = [];
  const push = (path, value) => out.push([path, value]);
  for (const [key, value] of Object.entries(guide.intro)) {
    push(`intro.${key}`, value);
  }
  for (const key of [
    "projectsTitle_en",
    "projectsTitle_ar",
    "projectsIntro_en",
    "projectsIntro_ar",
  ]) {
    push(key, guide[key]);
  }
  for (const industry of guide.industries) {
    push(`industries.${industry.id}.label_en`, industry.label_en);
    push(`industries.${industry.id}.label_ar`, industry.label_ar);
  }
  for (const project of guide.projects) {
    for (const key of [
      "title_en",
      "title_ar",
      "description_en",
      "description_ar",
    ]) {
      push(`projects.${project.id}.${key}`, project[key]);
    }
  }
  for (const category of guide.categories) {
    for (const key of ["title_en", "title_ar", "intro_en", "intro_ar"]) {
      push(`categories.${category.categoryId}.${key}`, category[key]);
    }
    for (const item of category.equipment) {
      const base = `equipment.${item.id}`;
      for (const key of [
        "name_en",
        "name_ar",
        "summary_en",
        "summary_ar",
        "whatItIs_en",
        "whatItIs_ar",
        "usedFor_en",
        "usedFor_ar",
        "imageAlt_en",
        "imageAlt_ar",
      ]) {
        if (item[key] !== undefined) push(`${base}.${key}`, item[key]);
      }
      for (const key of [
        "applications_en",
        "applications_ar",
        "requestChecklist_en",
        "requestChecklist_ar",
      ]) {
        item[key].forEach((value, i) => push(`${base}.${key}[${i}]`, value));
      }
      item.selectionFactors.forEach((factor, i) => {
        for (const [key, value] of Object.entries(factor)) {
          push(`${base}.selectionFactors[${i}].${key}`, value);
        }
      });
    }
  }
  const request = guide.request;
  for (const key of [
    "title_en",
    "title_ar",
    "intro_en",
    "intro_ar",
    "processTitle_en",
    "processTitle_ar",
  ]) {
    push(`request.${key}`, request[key]);
  }
  request.checklist_en.forEach((v, i) => push(`request.checklist_en[${i}]`, v));
  request.checklist_ar.forEach((v, i) => push(`request.checklist_ar[${i}]`, v));
  request.steps.forEach((step, i) => {
    for (const [key, value] of Object.entries(step)) {
      push(`request.steps[${i}].${key}`, value);
    }
  });
  for (const [key, value] of Object.entries(guide.quote)) {
    push(`quote.${key}`, value);
  }
  return out;
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

const sectorsWithGuides = SECTORS.filter(
  (sector) => getSectorContent(sector.slug).equipmentGuide,
);

console.log(
  `\nSectors with an equipment guide: ${sectorsWithGuides.map((s) => s.slug).join(", ") || "(none)"}\n`,
);
report(
  "at least one sector defines an equipment guide",
  sectorsWithGuides.length > 0,
);

for (const sector of sectorsWithGuides) {
  const content = getSectorContent(sector.slug);
  const guide = content.equipmentGuide;
  console.log(`\n== ${sector.slug}`);

  // --- Categories ---------------------------------------------------------
  const badCategories = guide.categories.filter(
    (c) => getCategoryById(c.categoryId)?.sectorId !== sector.id,
  );
  report(
    "every guide category is a real category of this sector",
    badCategories.length === 0,
    badCategories.map((c) => c.categoryId).join(", "),
  );
  const categoryIds = guide.categories.map((c) => c.categoryId);
  report(
    "no category appears twice",
    new Set(categoryIds).size === categoryIds.length,
  );
  report(
    "every category has at least one equipment guide",
    guide.categories.every((c) => c.equipment.length > 0),
  );

  // --- Ids / anchors --------------------------------------------------------
  const equipment = guide.categories.flatMap((c) =>
    c.equipment.map((item) => ({ ...item, categoryId: c.categoryId })),
  );
  const equipmentIds = equipment.map((e) => e.id);
  const duplicateIds = equipmentIds.filter(
    (id, i) => equipmentIds.indexOf(id) !== i,
  );
  report(
    `no duplicate equipment ids (${equipmentIds.length} guides)`,
    duplicateIds.length === 0,
    duplicateIds.join(", "),
  );
  const anchors = [...categoryIds, ...equipmentIds];
  const duplicateAnchors = anchors.filter((id, i) => anchors.indexOf(id) !== i);
  report(
    "no duplicate page anchors across categories and equipment",
    duplicateAnchors.length === 0,
    duplicateAnchors.join(", "),
  );
  const reservedHits = anchors.filter((id) => RESERVED_ANCHORS.has(id));
  report(
    "no anchor collides with a reserved page anchor (request-quote, …)",
    reservedHits.length === 0,
    reservedHits.join(", "),
  );
  const malformed = [
    ...anchors,
    ...guide.projects.map((p) => p.id),
    ...guide.industries.map((i) => i.id),
  ].filter((id) => !ID_PATTERN.test(id));
  report(
    "all ids are kebab-case",
    malformed.length === 0,
    malformed.join(", "),
  );
  const projectIds = guide.projects.map((p) => p.id);
  report(
    "no duplicate project ids",
    new Set(projectIds).size === projectIds.length,
  );
  const industryIds = guide.industries.map((i) => i.id);
  report(
    "no duplicate industry ids",
    new Set(industryIds).size === industryIds.length,
  );

  // --- Relationships --------------------------------------------------------
  const equipmentIdSet = new Set(equipmentIds);
  const industryIdSet = new Set(industryIds);
  const badIndustryRefs = equipment.flatMap((e) =>
    e.industryIds
      .filter((id) => !industryIdSet.has(id))
      .map((id) => `${e.id}→${id}`),
  );
  report(
    "every equipment industry id resolves",
    badIndustryRefs.length === 0,
    badIndustryRefs.join(", "),
  );
  const badRelated = equipment.flatMap((e) =>
    (e.relatedEquipmentIds ?? [])
      .filter((id) => !equipmentIdSet.has(id) || id === e.id)
      .map((id) => `${e.id}→${id}`),
  );
  report(
    "every related-equipment id resolves (and is not self-referential)",
    badRelated.length === 0,
    badRelated.join(", "),
  );
  const badProjectRefs = guide.projects.flatMap((p) =>
    p.equipmentIds
      .filter((id) => !equipmentIdSet.has(id))
      .map((id) => `${p.id}→${id}`),
  );
  report(
    "every project equipment id resolves",
    badProjectRefs.length === 0,
    badProjectRefs.join(", "),
  );
  report(
    "every project lists at least one equipment type",
    guide.projects.every((p) => p.equipmentIds.length > 0),
  );

  // --- Linked products ------------------------------------------------------
  const linkedProducts = [];
  const badLinks = [];
  for (const e of equipment) {
    if (!e.linkedProductId) continue;
    const product = getProductById(e.linkedProductId);
    if (!product) {
      badLinks.push(`${e.id}→${e.linkedProductId} (missing)`);
    } else if (
      product.sectorId !== sector.id ||
      product.categoryId !== e.categoryId
    ) {
      badLinks.push(
        `${e.id}→${e.linkedProductId} (in ${product.sectorId}/${product.categoryId})`,
      );
    } else {
      linkedProducts.push(product);
    }
  }
  report(
    "every linkedProductId exists in the same sector and category",
    badLinks.length === 0,
    badLinks.join(", "),
  );

  // --- Completeness ---------------------------------------------------------
  const strings = collectGuideStrings(guide);
  const emptyStrings = strings.filter(([, value]) => !isNonEmptyString(value));
  report(
    `no empty rendered string (${strings.length} checked)`,
    emptyStrings.length === 0,
    emptyStrings.map(([path]) => path).join(", "),
  );
  const pairProblems = [];
  for (const e of equipment) {
    for (const key of ["applications", "requestChecklist"]) {
      const en = e[`${key}_en`];
      const ar = e[`${key}_ar`];
      if (!en.length || !ar.length) pairProblems.push(`${e.id}.${key} empty`);
      if (en.length !== ar.length) {
        pairProblems.push(`${e.id}.${key} EN/AR length mismatch`);
      }
    }
    if (!e.industryIds.length) pairProblems.push(`${e.id}.industryIds empty`);
    if (!e.selectionFactors.length) {
      pairProblems.push(`${e.id}.selectionFactors empty`);
    }
  }
  if (guide.request.checklist_en.length !== guide.request.checklist_ar.length) {
    pairProblems.push("request.checklist EN/AR length mismatch");
  }
  if (!guide.request.checklist_en.length) {
    pairProblems.push("request.checklist empty");
  }
  report(
    "required arrays are non-empty and EN/AR arrays align",
    pairProblems.length === 0,
    pairProblems.join("; "),
  );
  report(
    "the request process has exactly four steps",
    guide.request.steps.length === 4,
  );

  // --- Images ---------------------------------------------------------------
  const imageProblems = [];
  for (const e of equipment) {
    if (e.image === null) continue;
    if (!fs.existsSync(`public${e.image}`)) {
      imageProblems.push(`${e.id}: ${e.image} missing`);
    }
    if (!isNonEmptyString(e.imageAlt_en) || !isNonEmptyString(e.imageAlt_ar)) {
      imageProblems.push(`${e.id}: missing EN/AR alt text`);
    }
  }
  report(
    `images exist and have EN/AR alt text (${equipment.filter((e) => e.image).length} set)`,
    imageProblems.length === 0,
    imageProblems.join("; "),
  );

  // --- Manufacturer neutrality ---------------------------------------------
  const brandTerms = new Set(getActiveDenylistTerms().map((t) => t.term));
  for (const product of linkedProducts) {
    for (const slug of product.relatedBrandSlugs ?? []) {
      brandTerms.add(slug.replace(/-/g, " "));
      const first = slug.split("-")[0];
      // "case" (from "case-ce") is a common English word; its full slug is
      // already covered above.
      if (first.length >= 3 && first !== "case") brandTerms.add(first);
    }
    for (const value of Object.values(product.sourcing ?? {})) {
      if (isNonEmptyString(value)) brandTerms.add(value);
    }
  }
  for (const term of BRAND_DERIVED_TERMS) brandTerms.add(term);
  const brandPatterns = [...brandTerms].map((term) => [
    term,
    wordPattern(term),
  ]);

  const faqAndSeoStrings = [
    ...(content.faqs ?? []).flatMap((faq, i) =>
      Object.entries(faq).map(([key, value]) => [`faqs[${i}].${key}`, value]),
    ),
    ...Object.entries(content.seo ?? {})
      .filter(([, value]) => typeof value === "string")
      .map(([key, value]) => [`seo.${key}`, value]),
  ];
  const textToScan = [...strings, ...faqAndSeoStrings];

  const brandHits = [];
  for (const [path, value] of textToScan) {
    for (const [term, pattern] of brandPatterns) {
      if (pattern.test(value)) brandHits.push(`${path} contains "${term}"`);
    }
  }
  report(
    `no manufacturer/brand identity in guide, FAQ or SEO text (${brandPatterns.length} terms)`,
    brandHits.length === 0,
    brandHits.slice(0, 10).join("; "),
  );

  // --- No numeric specifications -------------------------------------------
  const digitHits = strings.filter(([, value]) => /[0-9٠-٩۰-۹]/.test(value));
  report(
    "no digits in rendered guide text (no invented numeric specifications)",
    digitHits.length === 0,
    digitHits
      .slice(0, 10)
      .map(([path, value]) => `${path}: "${value}"`)
      .join("; "),
  );

  // --- Prohibited claims and marketing language -----------------------------
  const claimHits = [];
  for (const [path, value] of textToScan) {
    for (const pattern of PROHIBITED_CLAIMS) {
      if (pattern.test(value)) claimHits.push(`${path} matches ${pattern}`);
    }
  }
  report(
    "no prohibited business claims or marketing superlatives",
    claimHits.length === 0,
    claimHits.slice(0, 10).join("; "),
  );

  // --- Review states --------------------------------------------------------
  const reviewables = [
    ...equipment.map((e) => [`equipment.${e.id}`, e.review]),
    ...guide.projects.map((p) => [`projects.${p.id}`, p.review]),
  ];
  const validStates = new Set(["draft", "needs-verification", "verified"]);
  const badStates = reviewables.filter(
    ([, review]) =>
      !review ||
      !validStates.has(review.technical) ||
      !validStates.has(review.arabic),
  );
  report(
    "every guide entry carries a valid review state",
    badStates.length === 0,
    badStates.map(([path]) => path).join(", "),
  );
  for (const [path, review] of reviewables) {
    if (review?.technical !== "verified" || review?.arabic !== "verified") {
      pendingReviews.push(
        `${sector.slug} ${path} — technical: ${review?.technical}, arabic: ${review?.arabic}${review?.notes ? ` (${review.notes})` : ""}`,
      );
    }
  }
}

if (pendingReviews.length) {
  console.log(
    `\nPending editorial review (${pendingReviews.length} entries not yet "verified"):`,
  );
  for (const line of pendingReviews) console.log(`  - ${line}`);
  if (REQUIRE_VERIFIED) {
    report("all entries verified (--require-verified)", false);
  }
}

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
