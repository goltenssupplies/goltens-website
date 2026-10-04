import { Breadcrumb } from "@/components/ui/Breadcrumb";

export interface SectorBreadcrumbProps {
  homeLabel: string;
  sectorsLabel: string;
  /** Omit for the `/sectors` listing page itself — Sectors then renders as the current page. */
  currentLabel?: string;
  navLabel: string;
  className?: string;
  /** "inverse" when placed directly on a dark background (see `Breadcrumb`). */
  tone?: "default" | "inverse";
}

/** Home / Sectors / [current sector] trail, shared by the listing and every detail page. */
export function SectorBreadcrumb({
  homeLabel,
  sectorsLabel,
  currentLabel,
  navLabel,
  className,
  tone,
}: SectorBreadcrumbProps) {
  return (
    <Breadcrumb
      label={navLabel}
      className={className}
      tone={tone}
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
