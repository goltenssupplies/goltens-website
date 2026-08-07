import { Breadcrumb } from "@/components/ui/Breadcrumb";

export interface SectorBreadcrumbProps {
  homeLabel: string;
  sectorsLabel: string;
  /** Omit for the `/sectors` listing page itself — Sectors then renders as the current page. */
  currentLabel?: string;
  navLabel: string;
  className?: string;
}

/** Home / Sectors / [current sector] trail, shared by the listing and every detail page. */
export function SectorBreadcrumb({
  homeLabel,
  sectorsLabel,
  currentLabel,
  navLabel,
  className,
}: SectorBreadcrumbProps) {
  return (
    <Breadcrumb
      label={navLabel}
      className={className}
      items={[
        { label: homeLabel, href: "/" },
        currentLabel
          ? { label: sectorsLabel, href: "/sectors" }
          : { label: sectorsLabel },
        ...(currentLabel ? [{ label: currentLabel }] : []),
      ]}
    />
  );
}
