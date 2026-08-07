import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { FieldMessage } from "@/components/ui/form/FieldMessage";

export interface FormFieldProps {
  htmlFor: string;
  label: string;
  required?: boolean;
  hint?: string;
  hintId?: string;
  error?: string;
  errorId?: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}

/**
 * Shared label / hint / error scaffold used by every form control (Input,
 * Textarea, Select, Checkbox) so that markup and spacing stay identical
 * across the whole form system. Not meant to be used directly outside of
 * `components/ui/form/*` — each control wires its own ids to this shell.
 */
export function FormField({
  htmlFor,
  label,
  required,
  hint,
  hintId,
  error,
  errorId,
  children,
  className,
  tone = "light",
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={htmlFor}
        className={cn(
          "text-sm font-medium",
          tone === "dark" ? "text-canvas" : "text-ink",
        )}
      >
        {label}
        {required && (
          <span aria-hidden="true" className="text-error">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      <FieldMessage
        hint={hint}
        hintId={hintId}
        error={error}
        errorId={errorId}
        tone={tone}
      />
    </div>
  );
}
