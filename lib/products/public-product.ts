import type {
  Product,
  ProductCatalogue,
  ProductFaq,
  ProductSeo,
  ProductSpecification,
} from "@/data/products/types";

/**
 * Public-safe catalogue projection. Structurally identical to
 * `ProductCatalogue` today — `title_en`/`title_ar` are passed through
 * unchanged, not rewritten, by `toPublicCatalogueItem()` below. For the 53
 * branded products, that title still literally contains the manufacturer/
 * product name (e.g. "Mobil DTE 800 Series Datasheet") until Phase 6
 * neutralizes it there, in the data. This type exists as its own named
 * export — not a re-export of `ProductCatalogue` — specifically so Phase 6
 * has a single, explicit seam to rewrite title sourcing at, without any
 * public consumer needing to change its import.
 */
export interface PublicCatalogueItem {
  id: string;
  title_en: string;
  title_ar: string;
  kind: ProductCatalogue["kind"];
  fileType: ProductCatalogue["fileType"];
  language: ProductCatalogue["language"];
  fileUrl: string | null;
}

/**
 * The only `Product` shape public-facing code (UI, SEO, JSON-LD, search, AI
 * search) may consume. Deliberately has no field capable of holding
 * manufacturer identity — no `sourcing`, no `manufacturer`, no
 * `originalProductName_en`, no `relatedBrandSlugs`, no raw `Product`
 * passthrough. A future field added here to carry supplier/manufacturer
 * info would be a visible, reviewable addition to this type, not a value
 * quietly populated into an already-existing-but-unused field (the mistake
 * `SectorCatalogueItem.brand` made).
 */
export interface PublicProduct {
  id: string;
  slug: string;
  sectorId: string;
  categoryId: string;
  name_en: string;
  name_ar: string;
  shortDescription_en: string;
  shortDescription_ar: string;
  longDescription_en?: string;
  longDescription_ar?: string;
  applications_en?: string[];
  applications_ar?: string[];
  features_en?: string[];
  features_ar?: string[];
  specifications?: ProductSpecification[];
  relatedProductSlugs?: string[];
  relatedArticleSlugs?: string[];
  catalogues?: PublicCatalogueItem[];
  images?: string[];
  /**
   * Public SEO metadata, projected as-is from `Product.seo` for now. Phase 4
   * is the only phase authorized to require these strings be authored from
   * `publicName_en`/`publicShortDescription_en` rather than the raw ones —
   * this mapper does not rewrite or validate SEO content, only passes
   * through whatever the record already has.
   */
  seo?: ProductSeo;
  faq?: ProductFaq[];
  availability: Product["availability"];
  quoteEnabled: boolean;
}

/**
 * Thrown by `toPublicProduct()` when a record hasn't been migrated to carry
 * a real public identity yet. `publicName_en`/`publicName_ar`/
 * `publicShortDescription_en`/`publicShortDescription_ar` are required by
 * the `Product` type, but the 222 pre-Phase-6 records were authored before
 * that requirement existed and do not set them at runtime — TypeScript's
 * `string` guarantee does not hold once a value has actually been
 * constructed without the field. This class exists so callers can
 * distinguish "not yet migrated" from any other runtime error.
 */
export class MissingPublicIdentityError extends Error {
  constructor(productId: string, missingFields: string[]) {
    super(
      `Product "${productId}" is missing public identity (${missingFields.join(", ")}). ` +
        `toPublicProduct() never falls back to name_en/name_ar/shortDescription_en/ar — ` +
        `this record must be migrated (Phase 6) before it can be rendered publicly.`,
    );
    this.name = "MissingPublicIdentityError";
  }
}

function toPublicCatalogueItem(
  catalogue: ProductCatalogue,
): PublicCatalogueItem {
  return {
    id: catalogue.id,
    title_en: catalogue.title_en,
    title_ar: catalogue.title_ar,
    kind: catalogue.kind,
    fileType: catalogue.fileType,
    language: catalogue.language,
    fileUrl: catalogue.fileUrl,
  };
}

/**
 * True when `product` has the complete public identity `toPublicProduct()`
 * requires. The catalog is migrated incrementally, so any listing that
 * maps multiple products through `toPublicProduct()` must filter with this
 * first — otherwise one unmigrated record in the array throws
 * `MissingPublicIdentityError` and takes down the whole listing instead of
 * just omitting that one product. Checks the same four fields, the same
 * way, as the internal check inside `toPublicProduct()` below.
 */
export function hasPublicIdentity(product: Product): boolean {
  return (
    typeof product.publicName_en === "string" &&
    product.publicName_en.length > 0 &&
    typeof product.publicName_ar === "string" &&
    product.publicName_ar.length > 0 &&
    typeof product.publicShortDescription_en === "string" &&
    product.publicShortDescription_en.length > 0 &&
    typeof product.publicShortDescription_ar === "string" &&
    product.publicShortDescription_ar.length > 0
  );
}

/**
 * Projects a raw internal `Product` down to the `PublicProduct` shape every
 * public-facing surface must consume instead of `Product` directly.
 *
 * Deliberately does NOT fall back to `name_en`/`name_ar`/
 * `shortDescription_en`/`shortDescription_ar` under any circumstance — a
 * record missing its public identity fields is a data-migration gap, not a
 * rendering decision, and must fail loudly (`MissingPublicIdentityError`)
 * rather than silently leak the internal/brand-bearing name into public
 * output. This is the single structural guarantee the whole
 * manufacturer-neutral architecture depends on.
 */
export function toPublicProduct(product: Product): PublicProduct {
  const {
    publicName_en,
    publicName_ar,
    publicShortDescription_en,
    publicShortDescription_ar,
  } = product;

  const missingFields = (
    [
      ["publicName_en", publicName_en],
      ["publicName_ar", publicName_ar],
      ["publicShortDescription_en", publicShortDescription_en],
      ["publicShortDescription_ar", publicShortDescription_ar],
    ] as const
  )
    .filter(([, value]) => typeof value !== "string" || value.length === 0)
    .map(([field]) => field);

  if (missingFields.length > 0) {
    throw new MissingPublicIdentityError(product.id, missingFields);
  }

  // The check above guarantees all four are non-empty strings at runtime —
  // now that these fields are optional on `Product` (incremental
  // migration), TypeScript can't trace that guarantee back through the
  // array-based check above, so this re-check narrows
  // `string | undefined` to `string` for the object below. Unreachable in
  // practice; purely for the type checker.
  if (
    !publicName_en ||
    !publicName_ar ||
    !publicShortDescription_en ||
    !publicShortDescription_ar
  ) {
    throw new MissingPublicIdentityError(product.id, missingFields);
  }

  return {
    id: product.id,
    slug: product.slug,
    sectorId: product.sectorId,
    categoryId: product.categoryId,
    name_en: publicName_en,
    name_ar: publicName_ar,
    shortDescription_en: publicShortDescription_en,
    shortDescription_ar: publicShortDescription_ar,
    longDescription_en: product.publicLongDescription_en,
    longDescription_ar: product.publicLongDescription_ar,
    applications_en: product.applications_en,
    applications_ar: product.applications_ar,
    features_en: product.features_en,
    features_ar: product.features_ar,
    specifications: product.specifications,
    relatedProductSlugs: product.relatedProductSlugs,
    relatedArticleSlugs: product.relatedArticleSlugs,
    catalogues: product.catalogues?.map(toPublicCatalogueItem),
    images: product.images,
    seo: product.seo,
    faq: product.faq,
    availability: product.availability,
    quoteEnabled: product.quoteEnabled,
  };
}
