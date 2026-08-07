import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
type StackAlign = "start" | "center" | "end" | "stretch";
type StackJustify = "start" | "center" | "end" | "between";

const gapClass: Record<StackGap, string> = {
  none: "gap-0",
  xs: "gap-2",
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
};

const alignClass: Record<StackAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyClass: Record<StackJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
};

export interface StackProps extends ComponentPropsWithoutRef<"div"> {
  /** Stack direction. Defaults to "column". "row" reverses automatically in RTL via flex-row. */
  direction?: "row" | "column";
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  /** Wrap row items onto multiple lines. */
  wrap?: boolean;
  as?: ElementType;
}

/**
 * Flexbox layout primitive for one-dimensional arrangements. Use instead of
 * ad-hoc `flex` + margin utilities so spacing stays consistent everywhere.
 * `direction="row"` mirrors correctly in RTL because `flex-row` follows the
 * document's logical inline direction automatically — no `rtl:` override needed.
 */
export function Stack({
  direction = "column",
  gap = "md",
  align,
  justify,
  wrap = false,
  as: Element = "div",
  className,
  ...props
}: StackProps) {
  return (
    <Element
      className={cn(
        "flex",
        direction === "row" ? "flex-row" : "flex-col",
        gapClass[gap],
        align && alignClass[align],
        justify && justifyClass[justify],
        wrap && "flex-wrap",
        className,
      )}
      {...props}
    />
  );
}
