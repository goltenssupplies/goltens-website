import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export interface FormStepperProps {
  steps: string[];
  /** Zero-based index of the active step. */
  currentStep: number;
  /** Accessible label for the containing <nav>, e.g. "Quotation request progress". */
  label: string;
  className?: string;
}

/**
 * Multi-step form progress indicator, e.g. for the Request a Quotation flow.
 * Purely a chrome/progress primitive — the calling page owns step content
 * and field copy.
 */
export function FormStepper({
  steps,
  currentStep,
  label,
  className,
}: FormStepperProps) {
  return (
    <nav aria-label={label} className={className}>
      <ol className="flex items-start">
        {steps.map((step, index) => {
          const status =
            index < currentStep
              ? "complete"
              : index === currentStep
                ? "current"
                : "upcoming";
          const isLast = index === steps.length - 1;

          return (
            <li
              key={step}
              className="flex flex-1 flex-col items-center gap-2 last:flex-none"
            >
              <div className="flex w-full items-center">
                <span
                  aria-current={status === "current" ? "step" : undefined}
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-sm text-sm font-semibold",
                    status === "complete" && "bg-primary text-canvas",
                    status === "current" &&
                      "border-primary text-primary border-2",
                    status === "upcoming" &&
                      "border-border text-ink-muted border",
                  )}
                >
                  {status === "complete" ? (
                    <Check aria-hidden="true" className="size-4" />
                  ) : (
                    index + 1
                  )}
                </span>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mx-2 h-px flex-1",
                      status === "complete" ? "bg-primary" : "bg-border",
                    )}
                  />
                )}
              </div>
              <span
                className={cn(
                  "text-center text-xs",
                  status === "upcoming" ? "text-ink-muted" : "text-ink",
                  status === "current" && "font-medium",
                )}
              >
                {step}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
