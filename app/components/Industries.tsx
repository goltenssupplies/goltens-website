import {
  Building2,
  Factory,
  Flame,
  GraduationCap,
  HardHat,
  Hospital,
  Landmark,
  Zap,
} from "lucide-react";

const INDUSTRIES = [
  {
    icon: Landmark,
    title: "Government",
    description:
      "Public institutions, ministries, municipalities and government authorities.",
  },
  {
    icon: Flame,
    title: "Oil & Gas",
    description:
      "Procurement support for upstream, downstream and industrial energy projects.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Industrial production facilities, heavy equipment and factory operations.",
  },
  {
    icon: Hospital,
    title: "Healthcare",
    description:
      "Hospitals, laboratories, medical centres and healthcare institutions.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Universities, schools, research centres and educational facilities.",
  },
  {
    icon: HardHat,
    title: "Infrastructure",
    description:
      "Large-scale construction, transportation and public infrastructure projects.",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description:
      "Power generation, water treatment and utility infrastructure procurement.",
  },
  {
    icon: Building2,
    title: "Commercial Enterprises",
    description:
      "Private sector organisations requiring strategic procurement and industrial supply.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-canvas">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-0 lg:px-[120px] lg:pt-32 lg:pb-0">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.25em] text-ink-muted uppercase">
            Industries
          </p>

          <p className="mt-4 text-sm font-semibold tracking-[0.15em] text-blue uppercase">
            Supporting critical sectors
          </p>

          <h2 className="mt-4 text-balance text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.1] font-bold tracking-[-0.02em] text-ink">
            Industries We Serve
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Supporting mission-critical procurement across government,
            infrastructure and industrial sectors.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className="flex min-h-[260px] flex-col rounded-sm border border-border px-8 py-[44px] transition-all duration-200 hover:-translate-y-0.5 hover:border-ink"
              >
                <Icon className="h-8 w-8 text-blue" strokeWidth={1.5} />

                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {industry.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
