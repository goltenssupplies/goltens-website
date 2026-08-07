import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Shared hover treatment for `variant="glass"` cards — a 10px lift, a gold
 * border, and a stronger gold-tinted shadow, over the base's 300ms
 * transition. Not baked into the variant itself (unlike `interactive`,
 * which is a plain boolean) because not every `glass` card is a hover
 * target — apply it manually via `className` where it is.
 */
export const cardGlassHover =
  "hover:-translate-y-2.5 hover:border-gold/50 hover:shadow-[0_24px_64px_rgba(212,160,23,0.18),0_10px_28px_rgba(0,0,0,0.45)]";

const cardVariants = cva("rounded-md transition-all duration-300 ease-out", {
  variants: {
    variant: {
      outlined: "border border-border bg-canvas",
      raised: "border border-border bg-canvas shadow-md shadow-ink/5",
      filled: "bg-stone",
      // Softer, larger-blur, lower-opacity shadow than `raised` — the
      // premium-card treatment used across the homepage's elevated pass.
      premium:
        "border border-border/60 bg-canvas shadow-[0_2px_8px_rgba(30,29,27,0.04),0_20px_48px_rgba(30,29,27,0.08)]",
      // Dark-glass surface for the homepage's dark content sections
      // (Procurement Sectors) — a translucent light fill over the section's
      // `obsidian` background rather than a flat opaque colour, plus the
      // 20px radius those sections use (larger than the rest of the
      // site's `radius-sm`/`radius-md` system — an explicitly-requested
      // exception).
      glass:
        "rounded-[20px] border border-canvas/10 bg-canvas/[0.04] backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.35)]",
    },
    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
    interactive: {
      true: "hover:border-ink/15 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/10",
    },
  },
  defaultVariants: {
    variant: "outlined",
    padding: "md",
  },
});

export interface CardProps
  extends ComponentPropsWithoutRef<"div">, VariantProps<typeof cardVariants> {
  as?: ElementType;
}

/** Generic content surface. Compose with Heading/Text/Button rather than building bespoke bordered boxes. */
export function Card({
  variant,
  padding,
  interactive,
  as: Element = "div",
  className,
  ...props
}: CardProps) {
  return (
    <Element
      className={cn(cardVariants({ variant, padding, interactive }), className)}
      {...props}
    />
  );
}
