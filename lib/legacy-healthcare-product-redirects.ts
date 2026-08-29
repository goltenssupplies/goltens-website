/**
 * The 27 Healthcare product slugs retired when the sector was repositioned
 * to a focused Hospital Equipment & Medical Supplies catalog (see
 * `data/product-categories.ts` and `data/products/index.ts` for the
 * matching deactivation). Their source files are preserved, unregistered,
 * under `data/products/healthcare/` — not deleted, not in the active
 * registry, not in the sitemap. This list exists only so any lingering
 * external link or previously indexed URL 307s to the sector page instead
 * of 404ing; see the redirect guard in
 * `app/[locale]/sectors/[slug]/products/[product]/page.tsx`.
 */
export const LEGACY_HEALTHCARE_PRODUCT_SLUGS = new Set([
  "battery-backup-ups-units",
  "boiler-steam-system-chemicals",
  "booster-pump-sets",
  "circuit-breakers-mcb-mccb",
  "commercial-kitchen-equipment",
  "corrosion-control-chemicals",
  "electrical-distribution-panels",
  "electrical-enclosures-junction-boxes",
  "general-fit-out-finishing-materials",
  "general-operational-consumables",
  "general-purpose-electric-motors",
  "hvac-ventilation-equipment",
  "indoor-lighting-fixtures",
  "industrial-hand-power-tools",
  "industrial-safety-ppe-supplies",
  "industrial-water-treatment-chemicals",
  "material-handling-trolleys-hoists",
  "meal-distribution-trolleys",
  "operational-sourcing-procurement-support",
  "power-control-cables",
  "preventive-maintenance-supplies",
  "solar-energy-systems",
  "stainless-steel-kitchen-fixtures",
  "standby-power-generators",
  "submersible-drainage-pumps",
  "water-filtration-treatment-systems",
  "wayfinding-facility-signage",
]);
