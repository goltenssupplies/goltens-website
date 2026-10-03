"use client";

import type { ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button-variants";
import { dispatchQuotePrefill } from "@/lib/quote-prefill";
import { cn } from "@/lib/utils";

export interface QuotePrefillLinkProps {
  /** Anchor id of the quotation section, without the leading `#`. */
  href: string;
  /** Value written into the quote form's "Required Products" field. */
  prefill: string;
  children: ReactNode;
  className?: string;
}

/**
 * "Request a quotation for …" — a plain in-page anchor to the quote form
 * that, when JavaScript is available, also prefills the form's product field
 * via `lib/quote-prefill.ts`. The default navigation is never prevented, so
 * without JavaScript it is an ordinary working `#request-quote` link.
 */
export function QuotePrefillLink({
  href,
  prefill,
  children,
  className,
}: QuotePrefillLinkProps) {
  return (
    <a
      href={`#${href}`}
      onClick={() => dispatchQuotePrefill({ productCategory: prefill })}
      className={cn(
        buttonVariants({ variant: "accent", size: "md" }),
        "h-auto min-h-11 py-2.5 text-start whitespace-normal",
        className,
      )}
    >
      {children}
    </a>
  );
}
