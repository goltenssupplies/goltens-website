"use client";

import { forwardRef, useId, type ComponentPropsWithoutRef } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { fieldVariants } from "@/components/ui/form/field-styles";
import { FormField } from "@/components/ui/form/FormField";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends Omit<
  ComponentPropsWithoutRef<"select">,
  "id"
> {
  label: string;
  options: SelectOption[];
  /** Rendered as a disabled, pre-selected option — e.g. "Select an option". */
  placeholder?: string;
  hint?: string;
  error?: string;
  containerClassName?: string;
  tone?: "light" | "dark";
}

/**
 * Native `<select>` styled to match the form system — kept native for full
 * keyboard and screen-reader support. Note: the open dropdown popup itself
 * always renders with the browser/OS's own native styling regardless of
 * `tone` — only the closed control can be themed, a known trade-off of
 * staying native rather than building a custom combobox.
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      placeholder,
      hint,
      error,
      required,
      className,
      containerClassName,
      tone = "light",
      value,
      defaultValue,
      ...props
    },
    ref,
  ) => {
    const selectId = useId();
    const hintId = hint ? `${selectId}-hint` : undefined;
    const errorId = error ? `${selectId}-error` : undefined;
    const describedBy =
      [hintId, errorId].filter(Boolean).join(" ") || undefined;

    return (
      <FormField
        htmlFor={selectId}
        label={label}
        required={required}
        hint={hint}
        hintId={hintId}
        error={error}
        errorId={errorId}
        className={containerClassName}
        tone={tone}
      >
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            {...(value !== undefined
              ? { value }
              : {
                  defaultValue: defaultValue ?? (placeholder ? "" : undefined),
                })}
            aria-describedby={describedBy}
            aria-invalid={!!error || undefined}
            className={cn(
              fieldVariants({ tone, invalid: !!error }),
              "appearance-none pe-10",
              tone === "dark" && "[color-scheme:dark]",
              className,
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute end-3.5 top-1/2 size-4 -translate-y-1/2",
              tone === "dark" ? "text-canvas/40" : "text-ink-muted",
            )}
          />
        </div>
      </FormField>
    );
  },
);

Select.displayName = "Select";
