"use client";

import { forwardRef, useId, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { fieldVariants } from "@/components/ui/form/field-styles";
import { FormField } from "@/components/ui/form/FormField";

export interface InputProps extends Omit<
  ComponentPropsWithoutRef<"input">,
  "id"
> {
  label: string;
  hint?: string;
  error?: string;
  containerClassName?: string;
  tone?: "light" | "dark";
}

/** Single-line text input with an attached label, hint, and error message. */
export const Input = forwardRef<HTMLInputElement, InputProps>(
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
    const inputId = useId();
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const describedBy =
      [hintId, errorId].filter(Boolean).join(" ") || undefined;

    return (
      <FormField
        htmlFor={inputId}
        label={label}
        required={required}
        hint={hint}
        hintId={hintId}
        error={error}
        errorId={errorId}
        className={containerClassName}
        tone={tone}
      >
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-describedby={describedBy}
          aria-invalid={!!error || undefined}
          className={cn(fieldVariants({ tone, invalid: !!error }), className)}
          {...props}
        />
      </FormField>
    );
  },
);

Input.displayName = "Input";
