import { HeroIntro } from "@/components/sections/home/HeroIntro";
import { HeroSectorsBar } from "@/components/sections/home/HeroSectorsBar";
import { HeroSlideshow } from "@/components/sections/home/HeroSlideshow";
import { Section } from "@/components/ui/Section";

export function Hero() {
  return (
    <Section
      spacing="lg"
      // items-start (not items-center) so the content column sits toward
      // the upper portion of the frame rather than dead center — part of
      // the "upper-right corner" placement the Hero content now uses.
      className="text-canvas relative flex min-h-screen items-start overflow-hidden pt-36 lg:pt-44"
    >
      <HeroIntro />
      <HeroSlideshow />
      {/* Quick-nav sectors strip, pinned to the Hero's own bottom edge —
          see HeroSectorsBar for why this doesn't duplicate the homepage's
          existing "Procurement Sectors" section further down the page. */}
      <HeroSectorsBar />
    </Section>
  );
}
