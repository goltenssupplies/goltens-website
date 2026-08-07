"use client";

import { forwardRef, useId, type ComponentPropsWithoutRef } from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { FieldMessage } from "@/components/ui/form/FieldMessage";

export interface CheckboxProps extends Omit<
  ComponentPropsWithoutRef<"input">,
  "id" | "type"
> {
  label: string;
  hint?: string;
  error?: string;
  containerClassName?: string;
  tone?: "light" | "dark";
}

/**
 * Accessible checkbox: a visually-hidden native `<input type="checkbox">`
 * paired with a styled sibling box driven by `peer-checked`, so keyboard
 * and screen-reader behavior stays fully native. `tone="dark"` fills
 * checked with gold (rather than the sitewide dark-graphite `primary`,
 * which would barely register against an already-dark background).
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      hint,
      error,
      required,
      className,
      containerClassName,
      tone = "light",
      ...props
    },
    ref,
  ) => {
    const checkboxId = useId();
    const hintId = hint ? `${checkboxId}-hint` : undefined;
    const errorId = error ? `${checkboxId}-error` : undefined;
    const describedBy =
      [hintId, errorId].filter(Boolean).join(" ") || undefined;
    const isDark = tone === "dark";

    return (
      <div className={cn("flex flex-col gap-1.5", containerClassName)}>
        <label
          htmlFor={checkboxId}
          className="flex cursor-pointer items-start gap-2.5"
        >
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            required={required}
            aria-describedby={describedBy}
            aria-invalid={!!error || undefined}
            className={cn("peer sr-only", className)}
            {...props}
          />
          <span
            aria-hidden="true"
            className={cn(
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm border",
              "peer-focus-visible:outline-accent peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2",
              isDark
                ? "peer-checked:border-gold peer-checked:bg-gold peer-checked:[&>svg]:opacity-100"
                : "peer-checked:border-primary peer-checked:bg-primary peer-checked:[&>svg]:opacity-100",
              error
                ? "border-error"
                : isDark
                  ? "border-canvas/25"
                  : "border-border",
            )}
          >
            <Check
              className={cn(
                "size-3.5 opacity-0",
                isDark ? "text-ink" : "text-canvas",
              )}
            />
          </span>
          <span className={cn("text-sm", isDark ? "text-canvas" : "text-ink")}>
            {label}
            {required && (
              <span aria-hidden="true" className="text-error">
                {" "}
                *
              </span>
            )}
          </span>
        </label>
        <FieldMessage
          hint={hint}
          hintId={hintId}
          error={error}
          errorId={errorId}
          tone={tone}
        />
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
