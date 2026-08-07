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
  canvas: "bg-canvas",
  stone: "bg-stone",
  transparent: "bg-transparent",
  // Premium near-black surface for the homepage's dark content sections.
  // Text within it needs an explicit inverse tone — this only sets the
  // background, same as every other option here.
  obsidian: "bg-obsidian text-canvas",
};

export interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  /** Vertical rhythm step. Defaults to "md". */
  spacing?: SectionSpacing;
  /** Background token. Defaults to "transparent" (inherits page background). */
  background?: SectionBackground;
  as?: ElementType;
}

/** Full-width page band with consistent vertical rhythm. Compose with Container for gutters. */
export function Section({
  spacing = "md",
  background = "transparent",
  as: Element = "section",
  className,
  ...props
}: SectionProps) {
  return (
    <Element
      className={cn(
        spacingClass[spacing],
        backgroundClass[background],
        className,
      )}
      {...props}
    />
  );
}
