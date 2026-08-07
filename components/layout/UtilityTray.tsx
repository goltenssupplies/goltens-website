"use client";

import { useTranslations } from "next-intl";
import { ClipboardList, Scale } from "lucide-react";

import { useComparison } from "@/components/products/ComparisonContext";
import { useRfqCart } from "@/components/rfq/RfqCartContext";
import { Badge } from "@/components/ui/Badge";
import { IconButton } from "@/components/ui/IconButton";

/**
 * Persistent floating launcher for the RFQ cart and the Product Comparison
 * Engine — the only way to reach `/rfq` and `/compare` without touching the
 * primary Navbar, which this sprint leaves untouched. Each button is
 * hidden independently while its own count is zero, and the whole tray
 * renders nothing when both are empty, so a visitor who has never used
 * either feature sees no change to any page.
 */
export function UtilityTray() {
  const t = useTranslations("common");
  const { count: rfqCount } = useRfqCart();
  const { count: compareCount } = useComparison();

  if (rfqCount === 0 && compareCount === 0) return null;

  return (
    <div className="fixed bottom-6 end-6 z-40 flex flex-col items-end gap-3">
      {compareCount > 0 && (
        <div className="relative">
          <IconButton
            href="/compare"
            icon={<Scale aria-hidden="true" className="size-5" />}
            aria-label={t("compareTrayLabel", { count: compareCount })}
            variant="secondary"
            size="lg"
            className="border-ink/10 bg-canvas text-ink shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:bg-canvas"
          />
          <Badge
            tone="neutral"
            className="bg-ink text-canvas pointer-events-none absolute -top-2 -end-2 min-w-[1.375rem] justify-center px-1.5"
          >
            {compareCount}
          </Badge>
        </div>
      )}
      {rfqCount > 0 && (
        <div className="relative">
          <IconButton
            href="/rfq"
            icon={<ClipboardList aria-hidden="true" className="size-5" />}
            aria-label={t("rfqTrayLabel", { count: rfqCount })}
            variant="primary"
            size="lg"
            className="shadow-[0_12px_32px_rgba(30,29,27,0.3)]"
          />
          <Badge
            tone="neutral"
            className="bg-error text-canvas pointer-events-none absolute -top-2 -end-2 min-w-[1.375rem] justify-center px-1.5"
          >
            {rfqCount}
          </Badge>
        </div>
      )}
    </div>
  );
}
