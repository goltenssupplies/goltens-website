import type { ReactNode } from "react";

import { Card, cardGlassHover } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

const iconToneClass = {
  light: {
    primary:
      "bg-stone text-primary group-hover:bg-primary group-hover:text-canvas",
    accent: "bg-accent/10 text-accent",
  },
  dark: {
    primary:
      "bg-canvas/10 text-canvas group-hover:bg-gold group-hover:text-ink",
    accent: "bg-gold/10 text-gold",
  },
} as const;

export interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  /** Heading level for correct document outline in the context this card is used. */
  headingLevel?: 2 | 3 | 4;
  /** Icon badge color scheme. Defaults to "primary" (dark, inverts on hover). "accent" is a soft gold-tinted badge for sections where the icon itself should read as the brand accent rather than inverting. */
  iconTone?: "primary" | "accent";
  /** Card surface + text tones. "light" (default) is the site's usual glass-on-canvas card; "dark" is the glass-on-`obsidian` treatment used by the homepage's dark content sections. */
  theme?: "light" | "dark";
  /**
   * "vertical" (default) stacks icon above title above description — the
   * standard grid-cell layout. "horizontal" lays the icon beside the text
   * instead, for a card given extra width via `lg:col-span-2` in its grid
   * cell, so the extra space reads as a deliberate featured layout rather
   * than the same narrow content simply stretched wider. Only switches to
   * horizontal at `lg`, matching where that extra width actually exists —
   * below that the card sits in a normal single-width cell and stays
   * stacked like every other card.
   */
  orientation?: "vertical" | "horizontal";
  className?: string;
}

/** Icon + title + description card, e.g. for a services or industries grid. */
export function FeatureCard({
  icon,
  title,
  description,
  headingLevel = 3,
  iconTone = "primary",
  theme = "light",
  orientation = "vertical",
  className,
}: FeatureCardProps) {
  const isHorizontal = orientation === "horizontal";
  const isDark = theme === "dark";

  return (
    <Card
      variant={isDark ? "glass" : "premium"}
      padding="lg"
      interactive={!isDark}
      className={cn(
        "group flex flex-col gap-5",
        isDark && cardGlassHover,
        isHorizontal && "lg:flex-row lg:items-center lg:gap-8",
        className,
      )}
    >
      {icon && (
        <span
          aria-hidden="true"
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-sm transition-all duration-300 group-hover:scale-110",
            iconToneClass[theme][iconTone],
          )}
        >
          {icon}
        </span>
      )}
      <div className={cn("flex flex-col gap-3", isHorizontal && "lg:gap-2")}>
        <Heading
          level={headingLevel}
          size={4}
          tone={isDark ? "inverse" : "ink"}
          className={cn(
            "transition-colors duration-300",
            isDark ? "group-hover:text-gold" : "group-hover:text-primary",
          )}
        >
          {title}
        </Heading>
        <Text
          tone={isDark ? "inverse" : "muted"}
          className={isDark ? "opacity-70" : undefined}
        >
          {description}
        </Text>
      </div>
    </Card>
  );
}
