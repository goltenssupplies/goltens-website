export default function Products() {
  const products = [
    {
      icon: "⚙️",
      title: "Industrial Equipment",
      description:
        "Pumps, compressors, motors, generators, gearboxes and industrial machinery.",
    },
    {
      icon: "💧",
      title: "Pumps & Valves",
      description:
        "Centrifugal pumps, submersible pumps, valves, fittings and accessories.",
    },
    {
      icon: "⚡",
      title: "Electrical Supplies",
      description:
        "Panels, breakers, transformers, cables and electrical components.",
    },
    {
      icon: "💻",
      title: "IT & Networking",
      description:
        "Servers, laptops, desktops, printers, networking and storage solutions.",
    },
    {
      icon: "🚒",
      title: "Fire Fighting",
      description:
        "Fire pumps, extinguishers, cabinets, hoses and firefighting systems.",
    },
    {
      icon: "🚛",
      title: "Vehicles & Spare Parts",
      description:
        "Passenger vehicles, pickups, heavy equipment and genuine spare parts.",
    },
    {
      icon: "🧪",
      title: "Industrial Chemicals",
      description:
        "Industrial chemicals, laboratory chemicals and treatment solutions.",
    },
    {
      icon: "🪑",
      title: "Office Furniture",
      description:
        "Office desks, chairs, filing cabinets and workspace solutions.",
    },
  ];

  return (
    <section
      id="products"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="rounded-full border border-blue-500 px-4 py-2 text-sm text-blue-400">
            OUR PRODUCTS
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Complete Procurement Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            We provide complete procurement and industrial supply solutions for
            government entities, contractors, factories, hospitals and private
            companies across Egypt.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-300">
                {item.description}
              </p>

              <a
                href="#contact"
                className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
              >
                Request Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}