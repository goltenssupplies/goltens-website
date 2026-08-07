import { cva } from "class-variance-authority";

/**
 * Shared visual treatment for text-entry controls (Input, Textarea, Select)
 * so border, focus ring, and error/disabled states never drift between
 * them. `tone="dark"` is the glass-on-`obsidian` treatment the RFQ page
 * uses; `tone="light"` (default) is the original canvas-background style.
 */
export const fieldVariants = cva(
  [
    "w-full rounded-sm border px-3.5 py-2.5 text-base",
    "transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      tone: {
        light:
          "bg-canvas text-ink placeholder:text-ink-muted disabled:bg-stone disabled:text-ink-muted",
        dark: "bg-canvas/[0.05] text-canvas placeholder:text-canvas/40 backdrop-blur-sm disabled:bg-canvas/[0.02] disabled:text-canvas/30",
      },
      invalid: {
        true: "border-error",
        false: "",
      },
    },
    compoundVariants: [
      { tone: "light", invalid: false, class: "border-border" },
      { tone: "dark", invalid: false, class: "border-canvas/15" },
    ],
    defaultVariants: {
      tone: "light",
      invalid: false,
    },
  },
);
