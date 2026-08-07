import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5;
type HeadingTone = "ink" | "primary" | "secondary" | "inverse";

// tracking-tight is an LTR display-type refinement — Arabic script isn't
// tightened, since negative letter-spacing works against its letterforms.
// Arabic headings get more breathing room than their Latin leading value —
// same "base + rtl: override" pattern already used for tracking below, not
// a new typography system.
const sizeByLevel: Record<HeadingLevel, string> = {
  1: "text-5xl sm:text-6xl lg:text-7xl leading-[1.02] rtl:leading-[1.25] tracking-tight rtl:tracking-normal",
  2: "text-4xl sm:text-5xl leading-[1.08] rtl:leading-[1.3] tracking-tight rtl:tracking-normal",
  3: "text-3xl sm:text-4xl leading-[1.15] rtl:leading-[1.35] tracking-tight rtl:tracking-normal",
  4: "text-2xl sm:text-3xl leading-snug rtl:leading-normal",
  5: "text-lg sm:text-xl leading-snug rtl:leading-normal",
};

const toneClass: Record<HeadingTone, string> = {
  ink: "text-ink",
  primary: "text-primary",
  secondary: "text-secondary",
  inverse: "text-canvas",
};

export interface HeadingProps extends ComponentPropsWithoutRef<"h1"> {
  /** Semantic heading level, h1–h5. Required — pick it for document structure, not visual size. */
  level: HeadingLevel;
  /** Visual size override, independent of the semantic level. Defaults to matching the level. */
  size?: HeadingLevel;
  tone?: HeadingTone;
}

/**
 * Semantic heading. `level` controls the rendered tag (h1–h5) for document
 * outline correctness; `size` (optional) decouples the visual scale from it
 * — e.g. an h2 that needs to read visually smaller than a neighboring h3.
 *
 * Uses `font-display` (IBM Plex Sans Condensed) under English/LTR and falls
 * back to `font-sans-arabic` at bold weight under Arabic/RTL — the Arabic
 * script intentionally has no condensed display face in this system.
 */
export function Heading({
  level,
  size,
  tone = "ink",
  className,
  ...props
}: HeadingProps) {
  const Element = `h${level}` as const;
  const visualSize = size ?? level;

  return (
    <Element
      className={cn(
        "font-display font-semibold text-balance",
        "rtl:font-sans-arabic rtl:font-bold",
        sizeByLevel[visualSize],
        toneClass[tone],
        className,
      )}
      {...props}
    />
  );
}
