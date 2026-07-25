import {
  Armchair,
  Droplets,
  Factory,
  Flame,
  FlaskConical,
  Server,
  Stethoscope,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";

const PRODUCTS = [
  {
    icon: Factory,
    title: "Industrial Equipment",
    description:
      "Motors, compressors, generators, gearboxes and production equipment.",
  },
  {
    icon: Droplets,
    title: "Pumps & Valves",
    description:
      "Centrifugal pumps, submersible pumps, valves and accessories.",
  },
  {
    icon: Zap,
    title: "Electrical Supplies",
    description:
      "Panels, breakers, transformers, cables and electrical components.",
  },
  {
    icon: Flame,
    title: "Fire Fighting Systems",
    description: "Fire pumps, extinguishers, hydrants and safety equipment.",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description:
      "Servers, networking, storage, laptops and enterprise hardware.",
  },
  {
    icon: Truck,
    title: "Vehicles & Fleet",
    description:
      "Passenger vehicles, commercial vehicles and special-purpose transport.",
  },
  {
    icon: FlaskConical,
    title: "Chemicals",
    description: "Industrial chemicals, lubricants and maintenance products.",
  },
  {
    icon: Armchair,
    title: "Office Furniture",
    description:
      "Workstations, meeting rooms, storage and commercial furniture.",
  },
  {
    icon: Wrench,
    title: "Spare Parts",
    description:
      "OEM and aftermarket spare parts for industrial equipment.",
  },
  {
    icon: Stethoscope,
    title: "Medical Equipment",
    description:
      "Hospital equipment, laboratory devices and healthcare procurement.",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-canvas">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 pb-0 lg:px-[120px] lg:pt-32 lg:pb-0">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.25em] text-ink-muted uppercase">
            Products
          </p>

          <h2 className="mt-6 text-balance text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.1] font-bold tracking-[-0.02em] text-ink">
            Everything your project needs.
            <br />
            One procurement partner.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            From industrial machinery to IT infrastructure, GOLTENS delivers
            complete procurement solutions through a global supplier
            network.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {PRODUCTS.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="flex min-h-[280px] flex-col rounded-sm border border-border p-10 transition-all duration-200 hover:-translate-y-1 hover:border-ink"
              >
                <Icon className="h-8 w-8 text-blue" strokeWidth={1.5} />

                <h3 className="mt-8 text-lg font-semibold text-ink">
                  {product.title}
                </h3>

                <p className="mt-5 max-w-[90%] text-sm leading-relaxed text-ink-muted">
                  {product.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
