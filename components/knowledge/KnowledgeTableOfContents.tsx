"use client";

import { useEffect, useState } from "react";

import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export interface KnowledgeTocItem {
  id: string;
  label: string;
}

export interface KnowledgeTableOfContentsProps {
  title: string;
  items: KnowledgeTocItem[];
}

/**
 * Sticky "On this page" panel — desktop only (hidden below `lg`, per the
 * article's mobile layout). Highlights the section currently in view via
 * `IntersectionObserver`, the same "no new animation/observer library"
 * approach `Reveal` already uses for its own scroll-triggered fades.
 */
export function KnowledgeTableOfContents({
  title,
  items,
}: KnowledgeTableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px" },
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav
      aria-label={title}
      className="sticky top-28 hidden max-h-[calc(100vh-8rem)] w-64 shrink-0 overflow-y-auto lg:block"
    >
      <Text
        size="xs"
        weight="semibold"
        tone="inverse"
        className="mb-4 tracking-wide uppercase opacity-50"
      >
        {title}
      </Text>
      <ul className="border-border space-y-1 border-s">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "-ms-px block border-s-2 py-1.5 ps-4 text-sm transition-colors",
                  isActive
                    ? "border-gold text-gold font-medium"
                    : "text-ink-muted hover:text-ink border-transparent",
                )}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
