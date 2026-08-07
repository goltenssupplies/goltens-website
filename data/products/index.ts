import { commercialSpecializedMunicipalVehicles } from "@/data/products/commercial-vehicles/specialized-municipal-vehicles";
import { commercialTrailersTransportEquipment } from "@/data/products/commercial-vehicles/trailers-transport-equipment";
import { commercialTrucksLightVehicles } from "@/data/products/commercial-vehicles/trucks-light-vehicles";
import { constructionCementConcreteMaterials } from "@/data/products/construction/cement-concrete-materials";
import { constructionSiteInfrastructureMaterials } from "@/data/products/construction/site-infrastructure-materials";
import { constructionStructuralWaterproofingMaterials } from "@/data/products/construction/structural-waterproofing-materials";
import { electricalIndustrialLightingSolar } from "@/data/products/electrical-energy/industrial-lighting-solar";
import { electricalStandbyPowerSystems } from "@/data/products/electrical-energy/standby-power-systems";
import { electricalSwitchgearDistribution } from "@/data/products/electrical-energy/switchgear-distribution";
import { fireProtectionAccessories } from "@/data/products/fire-protection/accessories";
import { fireProtectionCabinets } from "@/data/products/fire-protection/cabinets";
import { fireProtectionFireAlarm } from "@/data/products/fire-protection/fire-alarm";
import { fireProtectionFirePumps } from "@/data/products/fire-protection/fire-pumps";
import { fireProtectionFm200 } from "@/data/products/fire-protection/fm200";
import { fireProtectionSprinklers } from "@/data/products/fire-protection/sprinklers";
import { fireProtectionSuppressionSystems } from "@/data/products/fire-protection/suppression-systems";
import { fireProtectionValves } from "@/data/products/fire-protection/valves";
import { globalBulkMaterialsIndustrialSupply } from "@/data/products/global-sourcing/bulk-materials-industrial-supply";
import { globalProjectSourcingLogistics } from "@/data/products/global-sourcing/project-sourcing-logistics";
import { globalSpartsPartsOemSourcing } from "@/data/products/global-sourcing/spare-parts-oem-sourcing";
import { governmentOfficeInstitutionalFurniture } from "@/data/products/government-procurement/office-institutional-furniture";
import { governmentPublicLightingPower } from "@/data/products/government-procurement/public-lighting-power";
import { governmentSecurityPublicSafety } from "@/data/products/government-procurement/security-public-safety";
import { healthcareCriticalCareHospitalFurniture } from "@/data/products/healthcare/critical-care-hospital-furniture";
import { healthcarePatientMonitoringDiagnostics } from "@/data/products/healthcare/patient-monitoring-diagnostics";
import { healthcareSurgicalOperatingRoomEquipment } from "@/data/products/healthcare/surgical-operating-room-equipment";
import { heavyConcreteCompactionEquipment } from "@/data/products/heavy-equipment/concrete-compaction-equipment";
import { heavyCranesLiftingEquipment } from "@/data/products/heavy-equipment/cranes-lifting-equipment";
import { heavyEarthmovingEquipment } from "@/data/products/heavy-equipment/earthmoving-equipment";
import { chemicalsCorrosionProtectionCoatings } from "@/data/products/industrial-chemicals/corrosion-protection-coatings";
import { chemicalsIndustrialLubricantsFluids } from "@/data/products/industrial-chemicals/industrial-lubricants-fluids";
import { chemicalsWaterWastewaterChemicals } from "@/data/products/industrial-chemicals/water-wastewater-chemicals";
import { industrialAirCompressorsSystems } from "@/data/products/industrial-equipment/air-compressors-systems";
import { industrialValvesActuators } from "@/data/products/industrial-equipment/industrial-valves-actuators";
import { industrialProcessPumps } from "@/data/products/industrial-equipment/process-pumps";
import type { Product, ProductCatalogue } from "@/data/products/types";

/**
 * The Product Engine's registry — every category file gets imported and
 * concatenated here. Adding category #501 is one new
 * `data/products/<sectorId>/<categorySlug>.ts` file plus one line below; no
 * lookup function or component is ever touched. Flat-array `.find()`/
 * `.filter()` at build time, same convention `data/brands.ts` already uses
 * — appropriate for a static-generation site even at 10,000+ products.
 */
const PRODUCTS: Product[] = [
  ...fireProtectionFirePumps,
  ...fireProtectionValves,
  ...fireProtectionSprinklers,
  ...fireProtectionCabinets,
  ...fireProtectionFm200,
  ...fireProtectionFireAlarm,
  ...fireProtectionSuppressionSystems,
  ...fireProtectionAccessories,
  ...governmentOfficeInstitutionalFurniture,
  ...governmentSecurityPublicSafety,
  ...governmentPublicLightingPower,
  ...industrialProcessPumps,
  ...industrialValvesActuators,
  ...industrialAirCompressorsSystems,
  ...electricalSwitchgearDistribution,
  ...electricalStandbyPowerSystems,
  ...electricalIndustrialLightingSolar,
  ...heavyEarthmovingEquipment,
  ...heavyCranesLiftingEquipment,
  ...heavyConcreteCompactionEquipment,
  ...commercialTrucksLightVehicles,
  ...commercialTrailersTransportEquipment,
  ...commercialSpecializedMunicipalVehicles,
  ...healthcarePatientMonitoringDiagnostics,
  ...healthcareSurgicalOperatingRoomEquipment,
  ...healthcareCriticalCareHospitalFurniture,
  ...chemicalsIndustrialLubricantsFluids,
  ...chemicalsWaterWastewaterChemicals,
  ...chemicalsCorrosionProtectionCoatings,
  ...constructionCementConcreteMaterials,
  ...constructionStructuralWaterproofingMaterials,
  ...constructionSiteInfrastructureMaterials,
  ...globalSpartsPartsOemSourcing,
  ...globalBulkMaterialsIndustrialSupply,
  ...globalProjectSourcingLogistics,
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

/** Looks up by the immutable `id`, not the (potentially-renamed) `slug` — the join every cross-entity relationship (e.g. Knowledge Platform items) must use instead of a slug. */
export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id);
}

export function getProductsBySector(sectorId: string): Product[] {
  return PRODUCTS.filter((product) => product.sectorId === sectorId);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return PRODUCTS.filter((product) => product.categoryId === categoryId);
}

/** Reverse lookup of `Product.relatedBrandSlugs` — every product genuinely sourced from a given brand, for that brand's own "Related Products" section. */
export function getProductsByBrandSlug(brandSlug: string): Product[] {
  return PRODUCTS.filter((product) => product.relatedBrandSlugs?.includes(brandSlug));
}

export interface CatalogueLibraryEntry extends ProductCatalogue {
  productSlug: string;
  productName_en: string;
  productName_ar: string;
  sectorId: string;
  categoryId: string;
}

/**
 * Every `ProductCatalogue` across the whole Product Engine, flattened with
 * a back-reference to its owning product — the Datasheet Library,
 * Certifications Library, and Download Center (`app/[locale]/downloads/`)
 * are all filtered views over this one list. No second catalogue data
 * structure: this is a pure join over `Product.catalogues`, the same
 * `ProductCatalogue` type every product page already renders from.
 */
export function getAllProductCatalogues(): CatalogueLibraryEntry[] {
  return PRODUCTS.flatMap((product) =>
    (product.catalogues ?? []).map((catalogue) => ({
      ...catalogue,
      productSlug: product.slug,
      productName_en: product.name_en,
      productName_ar: product.name_ar,
      sectorId: product.sectorId,
      categoryId: product.categoryId,
    })),
  );
}

/** Every (sectorId, productSlug) pair — drives the product route's `generateStaticParams`. */
export function getAllProductParams() {
  return PRODUCTS.map((product) => ({
    slug: product.sectorId,
    product: product.slug,
  }));
}

export type {
  Product,
  ProductCatalogue,
  ProductFaq,
  ProductSeo,
  ProductSpecification,
} from "@/data/products/types";
