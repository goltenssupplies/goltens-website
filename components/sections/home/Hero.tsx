import { HeroIntro } from "@/components/sections/home/HeroIntro";
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
    </Section>
  );
}
