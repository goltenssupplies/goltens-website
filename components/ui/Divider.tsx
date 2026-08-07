import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export interface DividerProps extends ComponentPropsWithoutRef<"hr"> {
  orientation?: "horizontal" | "vertical";
}

/** Border-token hairline rule. */
export function Divider({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      aria-orientation={orientation}
      className={cn(
        "border-border",
        orientation === "horizontal" ? "w-full border-t" : "h-full border-s",
        className,
      )}
      {...props}
    />
  );
}
