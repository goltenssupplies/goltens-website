import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface FormActionsProps {
  /** Rendered at the layout's logical start, e.g. a "Back" Button. */
  back?: ReactNode;
  /** Rendered at the logical end, e.g. "Next" / "Submit" Button(s). */
  forward: ReactNode;
  className?: string;
}

/** Consistent back/forward button row for multi-step forms. */
export function FormActions({ back, forward, className }: FormActionsProps) {
  return (
    <div
      className={cn(
        "border-border flex items-center border-t pt-6",
        back ? "justify-between" : "justify-end",
        className,
      )}
    >
      {back}
      <div className="flex items-center gap-3">{forward}</div>
    </div>
  );
}
