import { Breadcrumb } from "@/components/ui/Breadcrumb";

export interface KnowledgeBreadcrumbProps {
  homeLabel: string;
  knowledgeLabel: string;
  /** Omit for the `/knowledge` listing page itself — Knowledge Center then renders as the current page. */
  currentLabel?: string;
  navLabel: string;
  className?: string;
  tone?: "default" | "inverse";
}

/** Home / Knowledge Center / [current item] trail, shared by the listing and detail page — same shape as `SectorBreadcrumb`/`ProductBreadcrumb`. */
export function KnowledgeBreadcrumb({
  homeLabel,
  knowledgeLabel,
  currentLabel,
  navLabel,
  className,
  tone,
}: KnowledgeBreadcrumbProps) {
  return (
    <Breadcrumb
      label={navLabel}
      className={className}
      tone={tone}
      items={[
        { label: homeLabel, href: "/" },
        currentLabel
          ? { label: knowledgeLabel, href: "/knowledge" }
          : { label: knowledgeLabel },
        ...(currentLabel ? [{ label: currentLabel }] : []),
      ]}
    />
  );
}
