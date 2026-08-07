import { ChevronRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  /** Omit on the last item — it renders as the current page, not a link. */
  href?: Parameters<typeof Link>[0]["href"];
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /** Accessible label for the containing <nav>. */
  label: string;
  className?: string;
  /** "inverse" for placement directly on a dark (`obsidian`) background — the default `ink`/`ink-muted` colors are near-invisible there. */
  tone?: "default" | "inverse";
}

const toneClass = {
  default: {
    trail: "text-ink-muted",
    current: "text-ink",
    link: "hover:text-ink",
  },
  inverse: {
    trail: "text-canvas/60",
    current: "text-canvas",
    link: "hover:text-gold",
  },
};

/** Page trail. The separator chevron flips automatically for RTL via `rtl:rotate-180`. */
export function Breadcrumb({
  items,
  label,
  className,
  tone = "default",
}: BreadcrumbProps) {
  const colors = toneClass[tone];

  return (
    <nav aria-label={label} className={className}>
      <ol
        className={cn(
          "flex flex-wrap items-center gap-2 text-sm",
          colors.trail,
        )}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn(isLast && ["font-medium", colors.current])}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn("transition-colors", colors.link)}
                >
                  {item.label}
                </Link>
              )}
              {!isLast && (
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 shrink-0 rtl:rotate-180"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
