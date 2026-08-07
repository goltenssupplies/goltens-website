import { Breadcrumb } from "@/components/ui/Breadcrumb";

export interface ProductBreadcrumbProps {
  homeLabel: string;
  sectorsLabel: string;
  sectorLabel: string;
  sectorHref: string;
  currentLabel: string;
  navLabel: string;
  className?: string;
}

/** Home / Sectors / [sector] / [product] trail for the product detail page. */
export function ProductBreadcrumb({
  homeLabel,
  sectorsLabel,
  sectorLabel,
  sectorHref,
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
        { label: currentLabel },
      ]}
    />
  );
}
