const TRUSTED_BRANDS = ["HP", "Dell", "Cisco", "Grundfos", "ABB", "Schneider Electric"];

export default function TrustedBy() {
  return (
    <section className="bg-stone">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-0 lg:px-[120px] lg:pt-32 lg:pb-0">
        <p className="text-center font-mono text-xs tracking-[0.25em] text-ink-muted uppercase">
          Trusted across government and industry
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {TRUSTED_BRANDS.map((brand) => (
            <span
              key={brand}
              className="text-sm font-semibold tracking-wide text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
