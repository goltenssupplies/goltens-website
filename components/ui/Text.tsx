import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl";
type TextTone = "ink" | "muted" | "inverse" | "success" | "warning" | "error";
type TextWeight = "normal" | "medium" | "semibold";

const sizeClass: Record<TextSize, string> = {
  xs: "text-xs leading-relaxed",
  sm: "text-sm leading-relaxed",
  md: "text-base leading-relaxed",
  lg: "text-lg leading-relaxed",
  xl: "text-xl leading-relaxed",
};

const toneClass: Record<TextTone, string> = {
  ink: "text-ink",
  muted: "text-ink-muted",
  // "Inverse" now means "on the light `obsidian` panel surface" — see the
  // token comment in globals.css.
  inverse: "text-ink",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
};

const weightClass: Record<TextWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
};

export interface TextProps extends ComponentPropsWithoutRef<"p"> {
  size?: TextSize;
  tone?: TextTone;
  weight?: TextWeight;
  as?: ElementType;
}

/** Body copy. Inherits `font-sans` or `font-sans-arabic` from the locale-scoped class on `<body>` (see app/[locale]/layout.tsx) — no per-component locale check needed. */
export function Text({
  size = "md",
  tone = "ink",
  weight = "normal",
  as: Element = "p",
  className,
  ...props
}: TextProps) {
  return (
    <Element
      className={cn(
        sizeClass[size],
        // Arabic reads more comfortably with extra line-height than Latin
        // at the same size — same "base + rtl: override" pattern Heading
        // already uses for tracking, not a new typography system.
        "rtl:leading-loose",
        toneClass[tone],
        weightClass[weight],
        className,
      )}
      {...props}
    />
  );
}
