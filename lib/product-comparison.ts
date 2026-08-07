import type { Product, ProductSpecification } from "@/data/products/types";

export interface ComparisonRow {
  label: string;
  /** One value per product, in the same order as the `products` passed in — `null` when that product has no matching specification. */
  values: (string | null)[];
}

/**
 * Builds comparison table rows from the union of each product's own real
 * `specifications`, matched by label text — never an authored or invented
 * figure. Shared by the Knowledge Platform's curated `type:
 * "product-comparison"` articles and the interactive Product Comparison
 * Engine (`/compare`) — same rule, two different ways of picking which
 * products to compare.
 */
export function buildComparisonRows(
  products: Product[],
  isArabic: boolean,
): ComparisonRow[] {
  const seenLabels = new Set<string>();
  const labels: string[] = [];

  function labelOf(spec: ProductSpecification) {
    return isArabic ? spec.label_ar : spec.label_en;
  }

  for (const product of products) {
    for (const spec of product.specifications ?? []) {
      const label = labelOf(spec);
      if (!seenLabels.has(label)) {
        seenLabels.add(label);
        labels.push(label);
      }
    }
  }

  return labels.map((label) => ({
    label,
    values: products.map((product) => {
      const spec = (product.specifications ?? []).find(
        (item) => labelOf(item) === label,
      );
      return spec?.value ?? null;
    }),
  }));
}
