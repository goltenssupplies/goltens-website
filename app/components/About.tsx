const CAPABILITIES = [
  "Government & institutional procurement",
  "Industrial equipment & machinery sourcing",
  "International manufacturer partnerships",
  "Regulatory & compliance navigation",
  "Logistics & delivery execution",
  "Quality assurance & after-sales support",
];

const STATS = [
  { value: "16+", label: "Years Experience" },
  { value: "500+", label: "Global Suppliers" },
  { value: "20+", label: "Industries" },
  { value: "Nationwide", label: "Coverage" },
];

export default function About() {
  return (
    <section id="about" className="bg-canvas">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-0 lg:px-[120px] lg:pt-32 lg:pb-0">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs tracking-[0.25em] text-ink-muted uppercase">
              About GOLTENS
            </p>

            <h2 className="mt-6 text-balance text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1] font-bold tracking-[-0.02em] text-ink">
              Two decades of procurement, executed without compromise.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              GOLTENS GENERAL SUPPLIES is a strategic procurement and
              market-access partner for governments, industrial operators
              and international manufacturers. For over sixteen years,
              we&apos;ve connected complex projects to the global suppliers,
              technical expertise and execution capability that standard
              channels can&apos;t provide — across industries, borders and
              regulatory environments, with the same standard of precision
              every time.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <p className="font-mono text-xs tracking-[0.2em] text-ink-muted uppercase">
              Capabilities
            </p>

            <ul className="mt-6 border-t border-border">
              {CAPABILITIES.map((item) => (
                <li
                  key={item}
                  className="border-b border-border py-4 text-base text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border lg:mt-24 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-canvas p-8 lg:p-10">
              <p className="text-4xl font-bold tracking-tight text-blue lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
