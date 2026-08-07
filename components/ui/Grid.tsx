import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;
type GridGap = "none" | "sm" | "md" | "lg";

const columnsClass: Record<GridColumns, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-4 sm:grid-cols-6 lg:grid-cols-12",
};

const gapClass: Record<GridGap, string> = {
  none: "gap-0",
  sm: "gap-4",
  md: "gap-6 lg:gap-8",
  lg: "gap-8 lg:gap-12",
};

export interface GridProps extends ComponentPropsWithoutRef<"div"> {
  /** Column count at the widest breakpoint; scales down responsively. Defaults to 3. */
  columns?: GridColumns;
  gap?: GridGap;
}

/** Responsive CSS grid. Column counts step down automatically on smaller screens. */
export function Grid({
  columns = 3,
  gap = "md",
  className,
  ...props
}: GridProps) {
  return (
    <div
      className={cn("grid", columnsClass[columns], gapClass[gap], className)}
      {...props}
    />
  );
}
