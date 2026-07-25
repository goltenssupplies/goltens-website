import { ClipboardCheck, Cog, Landmark, Search, Truck, Users } from "lucide-react";

const SERVICES = [
  {
    icon: Search,
    title: "Strategic Sourcing",
    description:
      "Identify, evaluate and secure the most qualified global manufacturers and suppliers for complex procurement requirements.",
  },
  {
    icon: Landmark,
    title: "Government Procurement",
    description:
      "Tender management, public procurement compliance and institutional supply execution for government entities and public organisations.",
  },
  {
    icon: Cog,
    title: "Technical Procurement",
    description:
      "Procurement of industrial machinery, pumps, electrical systems, instrumentation and engineered equipment.",
  },
  {
    icon: Users,
    title: "Supplier Management",
    description:
      "Supplier qualification, auditing and long-term vendor relationship management to ensure quality and reliability.",
  },
  {
    icon: Truck,
    title: "Logistics Coordination",
    description:
      "International shipping, customs clearance, delivery planning and end-to-end logistics coordination.",
  },
  {
    icon: ClipboardCheck,
    title: "After-Sales Support",
    description:
      "Warranty coordination, documentation, spare parts sourcing and post-delivery technical support.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-canvas">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-0 lg:px-[120px] lg:pt-32 lg:pb-0">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.25em] text-ink-muted uppercase">
            Services
          </p>

          <h2 className="mt-6 text-balance text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1] font-bold tracking-[-0.02em] text-ink">
            Procurement services built for complex projects.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            From supplier discovery to final delivery, GOLTENS manages the
            complete procurement lifecycle for government, industrial and
            commercial organizations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex min-h-[240px] flex-col rounded-sm border border-border p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink"
              >
                <Icon className="h-8 w-8 text-blue" strokeWidth={1.5} />

                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
