import { Breadcrumb } from "@/components/ui/Breadcrumb";

export interface CategoryBreadcrumbProps {
  homeLabel: string;
  sectorsLabel: string;
  sectorLabel: string;
  sectorHref: string;
  currentLabel: string;
  navLabel: string;
  className?: string;
}

/** Home / Sectors / [sector] / [category] trail for the category detail page — same shape as `ProductBreadcrumb`, one level shallower. */
export function CategoryBreadcrumb({
  homeLabel,
  sectorsLabel,
  sectorLabel,
  sectorHref,
  currentLabel,
  navLabel,
  className,
}: CategoryBreadcrumbProps) {
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
