"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { KnowledgeTocItem } from "@/components/knowledge/KnowledgeTableOfContents";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

export interface KnowledgeMobileTocProps {
  title: string;
  items: KnowledgeTocItem[];
}

/**
 * Mobile/tablet counterpart to `KnowledgeTableOfContents` — a single
 * collapsible disclosure instead of the desktop's sticky always-visible
 * panel (hidden below `lg`, per that component's own breakpoint). Closed by
 * default so it reads as a compact affordance, not another block of
 * vertical space competing with the article's hero.
 */
export function KnowledgeMobileToc({ title, items }: KnowledgeMobileTocProps) {
  const [open, setOpen] = useState(false);

  if (items.length < 2) return null;

  return (
    <div className="border-border rounded-lg border lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3"
      >
        <Text size="sm" weight="semibold" tone="inverse">
          {title}
        </Text>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "text-gold size-4 shrink-0 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      {open && (
        <ul className="border-border space-y-2 border-t px-4 py-3">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="text-ink-muted hover:text-gold block text-sm transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
