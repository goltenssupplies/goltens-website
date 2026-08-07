"use client";

import { forwardRef, useId, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";
import { fieldVariants } from "@/components/ui/form/field-styles";
import { FormField } from "@/components/ui/form/FormField";

export interface TextareaProps extends Omit<
  ComponentPropsWithoutRef<"textarea">,
  "id"
> {
  label: string;
  hint?: string;
  error?: string;
  containerClassName?: string;
  tone?: "light" | "dark";
}

/** Multi-line text input with an attached label, hint, and error message. */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      hint,
      error,
      required,
      className,
      containerClassName,
      tone = "light",
      rows = 5,
      ...props
    },
    ref,
  ) => {
    const textareaId = useId();
    const hintId = hint ? `${textareaId}-hint` : undefined;
    const errorId = error ? `${textareaId}-error` : undefined;
    const describedBy =
      [hintId, errorId].filter(Boolean).join(" ") || undefined;

    return (
      <FormField
        htmlFor={textareaId}
        label={label}
        required={required}
        hint={hint}
        hintId={hintId}
        error={error}
        errorId={errorId}
        className={containerClassName}
        tone={tone}
      >
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          required={required}
          aria-describedby={describedBy}
          aria-invalid={!!error || undefined}
          className={cn(
            fieldVariants({ tone, invalid: !!error }),
            "resize-y",
            className,
          )}
          {...props}
        />
      </FormField>
    );
  },
);

Textarea.displayName = "Textarea";
