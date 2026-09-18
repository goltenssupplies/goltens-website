import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

type SectionSpacing = "sm" | "md" | "lg";
type SectionBackground = "canvas" | "stone" | "transparent" | "obsidian";

const spacingClass: Record<SectionSpacing, string> = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-24",
  lg: "py-24 sm:py-32",
};

const backgroundClass: Record<SectionBackground, string> = {
  // `bg-canvas-texture` (grid/dot/diagonal texture, same class `<body>`
  // uses) PLUS `bg-canvas-veil` (translucent, see globals.css) — together a
  // translucent surface over the ONE sitewide `background.jpg` layer fixed
  // on `<body>` (app/[locale]/layout.tsx), not a section-owned copy of it.
  // `Card` still reads plain `bg-canvas` directly (not through this
  // component), so cards stay fully opaque regardless.
  canvas: "bg-canvas-texture bg-canvas-veil",
  stone: "bg-stone",
  transparent: "bg-transparent",
  // `bg-obsidian-veil` (translucent, see globals.css) — same contract as
  // `canvas` above, just a flatter/stronger wash appropriate for panels
  // carrying primary text content directly. `Card` still reads plain
  // `bg-canvas` directly (not through this component), so cards stay fully
  // opaque.
  obsidian: "bg-obsidian-veil text-ink",
};

export interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  /** Vertical rhythm step. Defaults to "md". */
  spacing?: SectionSpacing;
  /** Background token. Defaults to "transparent" (inherits page background). */
  background?: SectionBackground;
  as?: ElementType;
}

/**
 * Full-width page band with consistent vertical rhythm. Compose with
 * Container for gutters.
 *
 * `background="canvas"`/`"obsidian"` are translucent surfaces only — see
 * `.bg-canvas-veil`/`.bg-obsidian-veil` in globals.css. Neither renders its
 * own copy of `background.jpg`; the ONE instance of that image lives fixed
 * on `<body>` (app/[locale]/layout.tsx, `.bg-industrial-photo`) behind the
 * entire page, and every section just lets it show through at a tuned
 * opacity. This is deliberate: an earlier version had each section render
 * its own independently `background-size: cover`-cropped copy of the
 * photo, which visibly "restarted" the image at every section boundary
 * since each section's own box has a different height. A single
 * viewport-fixed layer has nothing to restart.
 */
export function Section({
  spacing = "md",
  background = "transparent",
  as: Element = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Element
      className={cn(
        "relative",
        spacingClass[spacing],
        backgroundClass[background],
        className,
      )}
      {...props}
    >
      {children}
    </Element>
  );
}
