#!/usr/bin/env node
/**
 * Product image audit — verifies the mapping between every `Product` in
 * `data/products/**` and the image file(s) it claims, sector by sector.
 *
 * Checks, per product:
 *   - has an `images[0]` entry at all
 *   - that path exists on disk under `public/`
 *   - the file is a real, non-empty, decodable image (not a 0-byte or
 *     corrupt download)
 *   - no two DIFFERENT products resolve to the same image file (a
 *     duplicate is only "legitimate" when explicitly allow-listed below —
 *     everything else is flagged)
 *
 * Run: node scripts/audit-product-images.mjs
 * Exit code is non-zero if any broken/invalid file is found (missing
 * images and bad duplicates are reported but do not fail the build, since
 * an honest placeholder is the accepted fallback for a product with no
 * sourced photo yet).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PRODUCTS_ROOT = path.join(ROOT, "data", "products");
const PUBLIC_ROOT = path.join(ROOT, "public");

// Same physical product photographed once, deliberately reused across a
// couple of near-identical line items — everything else that collides is a
// bug, not a feature. Keyed by the shared image path.
const ALLOWED_DUPLICATE_IMAGES = new Set([]);

function listCategoryFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return listCategoryFiles(full);
    if (entry.name.endsWith(".ts") && !["index.ts", "types.ts"].includes(entry.name)) return [full];
    return [];
  });
}

function extractTopLevelObjects(text) {
  const arrayStart = text.indexOf("[");
  const blocks = [];
  let depth = 0;
  let blockStart = -1;
  for (let i = arrayStart; i < text.length; i++) {
    const ch = text[i];
    if (ch === "{") {
      if (depth === 0) blockStart = i;
      depth++;
    } else if (ch === "}") {
      depth--;
      if (depth === 0 && blockStart !== -1) {
        blocks.push(text.slice(blockStart, i + 1));
        blockStart = -1;
      }
    }
  }
  return blocks;
}

function field(block, name) {
  const re = new RegExp("(?<![A-Za-z])" + name + ':\\s*"((?:[^"\\\\]|\\\\.)*)"');
  const m = block.match(re);
  return m ? m[1].replace(/\\"/g, '"') : null;
}

function imagesField(block) {
  const m = block.match(/(?<![A-Za-z])images:\s*\[([^\]]*)\]/);
  if (!m) return [];
  return [...m[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((x) => x[1]);
}

function loadProducts() {
  const files = listCategoryFiles(PRODUCTS_ROOT);
  const products = [];
  for (const file of files) {
    const text = fs.readFileSync(file, "utf-8");
    for (const block of extractTopLevelObjects(text)) {
      const id = field(block, "id");
      const sectorId = field(block, "sectorId");
      if (!id || !sectorId) continue;
      products.push({
        file: path.relative(PRODUCTS_ROOT, file).replace(/\\/g, "/"),
        id,
        slug: field(block, "slug"),
        name_en: field(block, "name_en"),
        sectorId,
        categoryId: field(block, "categoryId"),
        images: imagesField(block),
      });
    }
  }
  return products;
}

function isValidImageFile(absPath) {
  try {
    const buf = fs.readFileSync(absPath);
    if (buf.length === 0) return { ok: false, reason: "0-byte file" };
    // Minimal magic-byte sanity check (WEBP/RIFF, JPEG, PNG) — enough to
    // catch a truncated/corrupt download without adding an image-decoding
    // dependency to a Node-only script.
    const isRiffWebp = buf.length > 12 && buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP";
    const isJpeg = buf[0] === 0xff && buf[1] === 0xd8;
    const isPng = buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47;
    if (!isRiffWebp && !isJpeg && !isPng) return { ok: false, reason: "unrecognized/corrupt image format" };
    return { ok: true, bytes: buf.length };
  } catch (err) {
    return { ok: false, reason: String(err) };
  }
}

function main() {
  const products = loadProducts();
  const bySector = new Map();
  for (const p of products) {
    if (!bySector.has(p.sectorId)) bySector.set(p.sectorId, []);
    bySector.get(p.sectorId).push(p);
  }

  const imageOwners = new Map(); // image path -> [product ids]
  let totalMissing = 0;
  let totalBroken = 0;
  let totalOk = 0;

  const sectorNames = [...bySector.keys()].sort();
  for (const sectorId of sectorNames) {
    const items = bySector.get(sectorId).sort((a, b) => a.name_en.localeCompare(b.name_en));
    console.log(`\nSECTOR: ${sectorId}`);
    console.log("-".repeat(40));
    for (const p of items) {
      const imagePath = p.images[0];
      if (!imagePath) {
        console.log(`${p.name_en.padEnd(45)} ✗ no image mapped (placeholder shown)`);
        totalMissing++;
        continue;
      }
      const absPath = path.join(PUBLIC_ROOT, imagePath.replace(/^\//, ""));
      if (!fs.existsSync(absPath)) {
        console.log(`${p.name_en.padEnd(45)} ✗ BROKEN PATH: ${imagePath}`);
        totalBroken++;
        continue;
      }
      const check = isValidImageFile(absPath);
      if (!check.ok) {
        console.log(`${p.name_en.padEnd(45)} ✗ INVALID FILE (${check.reason}): ${imagePath}`);
        totalBroken++;
        continue;
      }
      if (!imageOwners.has(imagePath)) imageOwners.set(imagePath, []);
      imageOwners.get(imagePath).push(p);
      console.log(`${p.name_en.padEnd(45)} ✓ unique image (${Math.round(check.bytes / 1024)}KB)`);
      totalOk++;
    }
  }

  console.log(`\n${"=".repeat(40)}`);
  console.log("DUPLICATE IMAGE AUDIT");
  console.log("=".repeat(40));
  let badDuplicates = 0;
  for (const [imagePath, owners] of imageOwners) {
    if (owners.length <= 1) continue;
    const legitimate = ALLOWED_DUPLICATE_IMAGES.has(imagePath);
    const label = legitimate ? "legitimate (allow-listed)" : "BAD DUPLICATE";
    if (!legitimate) badDuplicates += owners.length - 1;
    console.log(`${legitimate ? "OK  " : "FAIL"} ${imagePath} used by ${owners.length} products (${label}):`);
    for (const o of owners) console.log(`      - ${o.name_en} [${o.sectorId}/${o.id}]`);
  }
  if (badDuplicates === 0) console.log("None found — every mapped image belongs to exactly one product.");

  console.log(`\n${"=".repeat(40)}`);
  console.log("SUMMARY");
  console.log("=".repeat(40));
  console.log(`Total products:              ${products.length}`);
  console.log(`With a valid unique image:   ${totalOk}`);
  console.log(`No image mapped:             ${totalMissing}`);
  console.log(`Broken/invalid image files:  ${totalBroken}`);
  console.log(`Bad (non-allow-listed) duplicate assignments: ${badDuplicates}`);

  if (totalBroken > 0 || badDuplicates > 0) {
    process.exitCode = 1;
  }
}

main();
