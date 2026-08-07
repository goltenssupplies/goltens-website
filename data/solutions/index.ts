import { airportsSolution } from "@/data/solutions/airports";
import { commercialBuildingsSolution } from "@/data/solutions/commercial-buildings";
import { factoriesSolution } from "@/data/solutions/factories";
import { governmentProjectsSolution } from "@/data/solutions/government-projects";
import { hospitalsSolution } from "@/data/solutions/hospitals";
import { hotelsSolution } from "@/data/solutions/hotels";
import { infrastructureSolution } from "@/data/solutions/infrastructure";
import { oilAndGasSolution } from "@/data/solutions/oil-and-gas";
import { powerPlantsSolution } from "@/data/solutions/power-plants";
import { universitiesSolution } from "@/data/solutions/universities";
import { waterUtilitiesSolution } from "@/data/solutions/water-utilities";
import type { Solution } from "@/data/solutions/types";

/**
 * The Project Solutions registry. Adding solution #12 is one new
 * `data/solutions/<slug>.ts` file (see `hospitals.ts` for the full
 * reference implementation) plus one line below — no component or page is
 * ever touched.
 */
const SOLUTIONS: Solution[] = [
  governmentProjectsSolution,
  hospitalsSolution,
  universitiesSolution,
  factoriesSolution,
  commercialBuildingsSolution,
  hotelsSolution,
  infrastructureSolution,
  oilAndGasSolution,
  waterUtilitiesSolution,
  powerPlantsSolution,
  airportsSolution,
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return SOLUTIONS.find((solution) => solution.slug === slug);
}

/** Looks up by the immutable `id`, not the (potentially-renamed) `slug` — the join every cross-entity relationship (e.g. Knowledge Platform items) must use instead of a slug. */
export function getSolutionById(id: string): Solution | undefined {
  return SOLUTIONS.find((solution) => solution.id === id);
}

export function getAllSolutions(): Solution[] {
  return SOLUTIONS;
}

/** Reverse lookup of `Solution.relatedSectorSlugs` — every solution genuinely drawing from a given sector, for that sector's own "Related Solutions" section. */
export function getSolutionsBySectorSlug(sectorSlug: string): Solution[] {
  return SOLUTIONS.filter((solution) => solution.relatedSectorSlugs.includes(sectorSlug));
}

/** Reverse lookup of `Solution.relatedBrandSlugs` — every solution genuinely featuring a given brand, for that brand's own "Related Solutions" section. */
export function getSolutionsByBrandSlug(brandSlug: string): Solution[] {
  return SOLUTIONS.filter((solution) => solution.relatedBrandSlugs?.includes(brandSlug));
}

/** Reverse lookup of `Solution.relatedProductSlugs` — every solution genuinely featuring a given product, for that product's own "Related Solutions" section. */
export function getSolutionsByProductSlug(productSlug: string): Solution[] {
  return SOLUTIONS.filter((solution) => solution.relatedProductSlugs?.includes(productSlug));
}

/** Every solution slug — drives the solution route's `generateStaticParams`. */
export function getAllSolutionParams() {
  return SOLUTIONS.map((solution) => ({ slug: solution.slug }));
}

export type {
  Solution,
  SolutionArticleRef,
  SolutionCatalogueRef,
} from "@/data/solutions/types";
