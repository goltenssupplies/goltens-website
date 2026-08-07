import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils";

type ContainerWidth = "default" | "narrow" | "wide" | "full";

const widthClass: Record<ContainerWidth, string> = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
  wide: "max-w-[90rem]",
  full: "max-w-none",
};

export interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  /** Max-width step. Defaults to "default" (max-w-7xl). */
  width?: ContainerWidth;
  /** Render as a different element, e.g. "section" or "main". */
  as?: ElementType;
}

/** Centers content and applies the page's horizontal gutters. */
export function Container({
  width = "default",
  as: Element = "div",
  className,
  ...props
}: ContainerProps) {
  return (
    <Element
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        widthClass[width],
        className,
      )}
      {...props}
    />
  );
}
