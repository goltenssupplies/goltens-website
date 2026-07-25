export default function Hero() {
  return (
    <section id="home" className="relative bg-canvas">
      <div className="mx-auto max-w-[1440px] px-6 pt-40 pb-0 lg:px-[120px] lg:pt-48 lg:pb-0">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="animate-fade-up font-mono text-xs tracking-[0.25em] text-ink-muted uppercase">
              Global Procurement Partner
            </p>

            <h1
              className="animate-fade-up mt-8 text-balance text-[clamp(2.5rem,4.5vw,3.75rem)] leading-[1.05] font-bold tracking-[-0.02em] text-ink"
              style={{ animationDelay: "80ms" }}
            >
              We solve what others cannot source.
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-md text-lg leading-relaxed text-ink-muted"
              style={{ animationDelay: "160ms" }}
            >
              GOLTENS is the strategic execution partner governments,
              industrial operators and manufacturers call when standard
              channels aren&apos;t enough — global access, technical depth,
              and delivery that holds under pressure.
            </p>

            <div
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-8"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href="#contact"
                className="inline-flex h-[52px] items-center justify-center rounded-md bg-blue px-8 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              >
                Start a Conversation
              </a>

              <a
                href="#about"
                className="group inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              >
                How We Work
                <span className="h-px w-6 bg-ink-muted transition-all duration-200 group-hover:w-8 group-hover:bg-ink" />
              </a>
            </div>
          </div>

          <div className="animate-fade-up lg:col-span-7 lg:-mr-[120px]" style={{ animationDelay: "120ms" }}>
            {/*
              Real industrial photography goes here once available.
              Per the Photography Style rules, a flat placeholder is the
              honest choice until then — never stock imagery.
            */}
            <div
              aria-hidden
              className="aspect-[4/3] w-full bg-stone lg:aspect-[16/11]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
