import { Breadcrumb } from "@/components/ui/Breadcrumb";

export interface ProductBreadcrumbProps {
  homeLabel: string;
  sectorsLabel: string;
  sectorLabel: string;
  sectorHref: string;
  /** The product's category name/link — omit both to fall back to the original Home / Sectors / [sector] / [product] trail. Never pass a fabricated label or a guessed href; the caller only supplies these once the category has genuinely resolved via `product.categoryId`. */
  categoryLabel?: string;
  categoryHref?: string;
  currentLabel: string;
  navLabel: string;
  className?: string;
}

/**
 * Home / Sectors / [sector] / [product] trail for the product detail page —
 * or Home / Sectors / [sector] / [category] / [product] when `categoryLabel`
 * and `categoryHref` both resolve. Either one missing silently falls back to
 * the original 4-item trail; this never renders a broken or half-fabricated
 * category crumb.
 */
export function ProductBreadcrumb({
  homeLabel,
  sectorsLabel,
  sectorLabel,
  sectorHref,
  categoryLabel,
  categoryHref,
  currentLabel,
  navLabel,
  className,
}: ProductBreadcrumbProps) {
  return (
    <Breadcrumb
      label={navLabel}
      className={className}
      items={[
        { label: homeLabel, href: "/" },
        { label: sectorsLabel, href: "/sectors" },
        { label: sectorLabel, href: sectorHref },
        ...(categoryLabel && categoryHref
          ? [{ label: categoryLabel, href: categoryHref }]
          : []),
        { label: currentLabel },
      ]}
    />
  );
}
