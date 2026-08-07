import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/ui/CTA";

export interface BrandCTAProps {
  title: string;
  description: string;
  requestQuoteLabel: string;
  contactProcurementTeamLabel: string;
}

/** "Request a Quote" + "Contact Procurement Team" band, shared by `/brands`, the homepage teaser, and every brand detail page. */
export function BrandCTA({
  title,
  description,
  requestQuoteLabel,
  contactProcurementTeamLabel,
}: BrandCTAProps) {
  return (
    <CTA
      title={title}
      description={description}
      actions={
        <>
          <Button href="/contact" variant="accent" size="lg">
            {requestQuoteLabel}
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="border-canvas/40 text-canvas hover:bg-canvas/10"
          >
            {contactProcurementTeamLabel}
          </Button>
        </>
      }
    />
  );
}
