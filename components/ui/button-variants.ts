import { cva } from "class-variance-authority";

/**
 * Split out of `Button.tsx` (a `"use client"` file) so it can be imported
 * from Server Components too — e.g. to style a plain `<a>` for a `mailto:`
 * link, which `Button`/`Link` can't safely carry (see `ContactCard`/
 * `Footer`'s own plain-anchor convention for `mailto:`/`tel:` links).
 * Everything exported from a `"use client"` module becomes part of the
 * client boundary, including plain functions like this one — same reason
 * `field-styles.ts` stays a separate, non-client file for
 * `Input`/`Textarea`/`Select`.
 */
export const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap",
    "rounded-sm font-medium transition-all duration-200 ease-out",
    "hover:-translate-y-px hover:shadow-lg active:translate-y-0 active:shadow-sm",
    "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:translate-y-0",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-canvas hover:bg-ink shadow-primary/20",
        secondary:
          "border border-border bg-transparent text-ink hover:border-ink hover:bg-stone shadow-ink/5",
        ghost:
          "bg-transparent text-ink hover:bg-stone shadow-none hover:shadow-none hover:translate-y-0",
        accent: "bg-accent text-canvas hover:opacity-90 shadow-accent/25",
        destructive: "bg-error text-canvas hover:opacity-90 shadow-error/20",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-base",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
