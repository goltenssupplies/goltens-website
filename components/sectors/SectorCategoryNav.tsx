"use client";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export interface SectorCategoryNavItem {
  /** Anchor id of the category section on the page. */
  id: string;
  label: string;
}

export interface SectorCategoryNavProps {
  label: string;
  items: SectorCategoryNavItem[];
}

/**
 * Sticky, horizontally scrollable category chips for long sector pages —
 * the page's "jump to category" control. Sits directly under the fixed
 * Navbar (88px) and highlights the category currently in view with the same
 * `IntersectionObserver` approach `KnowledgeTableOfContents` uses (that
 * component is a vertical desktop-only sidebar, so it isn't reused here).
 * Every chip is a plain `#id` anchor, so navigation works without
 * JavaScript; only the active highlight needs it.
 */
export function SectorCategoryNav({ label, items }: SectorCategoryNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-180px 0px -60% 0px" },
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  // Keep the active chip visible inside the horizontally scrolling row on
  // narrow screens — scrolls the row only, never the page.
  useEffect(() => {
    const list = listRef.current;
    const chip = list?.querySelector<HTMLElement>(`[data-id="${activeId}"]`);
    if (!list || !chip) return;
    const listRect = list.getBoundingClientRect();
    const chipRect = chip.getBoundingClientRect();
    if (chipRect.left < listRect.left || chipRect.right > listRect.right) {
      list.scrollBy({
        left:
          chipRect.left - listRect.left - (listRect.width - chipRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  return (
    <nav
      aria-label={label}
      className="border-border sticky top-[88px] z-30 border-y bg-white/95 backdrop-blur"
    >
      <Container>
        <ul
          ref={listRef}
          className="-mx-1 flex snap-x [scrollbar-width:none] gap-2 overflow-x-auto px-1 py-3 lg:justify-center [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id} className="shrink-0 snap-start">
                <a
                  href={`#${item.id}`}
                  data-id={item.id}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "block rounded-sm border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
                    isActive
                      ? "border-gold bg-gold/10 text-ink"
                      : "border-border text-ink-muted hover:border-ink/30 hover:text-ink",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
