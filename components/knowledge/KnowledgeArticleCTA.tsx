import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";

export interface KnowledgeArticleCTAProps {
  title: string;
  buttonLabel: string;
  /** Anchor id (without "#") of the page's Request Quotation section. */
  href: string;
}

/**
 * The article's closing CTA — a full-bleed tinted band (not a bordered
 * card), so it reads as a deliberate pause in the reading flow rather than
 * one more box in a sequence of boxes. One headline, one button, content
 * centered within the page's normal gutters. Sits right after the
 * article's own content; the button's anchor scrolls to the full
 * contact-form `SectorQuoteCTA` further down the page.
 */
export function KnowledgeArticleCTA({
  title,
  buttonLabel,
  href,
}: KnowledgeArticleCTAProps) {
  return (
    <Reveal>
      <div className="bg-obsidian from-gold/[0.1] via-gold/[0.03] border-canvas/10 border-y bg-gradient-to-b to-transparent py-10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
            <Heading level={2} size={4} tone="inverse">
              {title}
            </Heading>
            <Button href={`#${href}`} variant="accent" size="lg">
              {buttonLabel}
            </Button>
          </div>
        </Container>
      </div>
    </Reveal>
  );
}
