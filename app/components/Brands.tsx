import {
  Truck,
  Factory,
  ShieldCheck,
  Handshake,
} from "lucide-react";

export default function Brands() {
  const features = [
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: "Fast Delivery",
      desc: "Efficient logistics and nationwide delivery across Egypt.",
    },
    {
      icon: <Factory className="h-12 w-12 text-blue-600" />,
      title: "Industrial Expertise",
      desc: "Extensive experience supplying industrial and engineering projects.",
    },
    {
      icon: <Handshake className="h-12 w-12 text-blue-600" />,
      title: "Trusted Partner",
      desc: "Long-term relationships built on reliability and transparency.",
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-blue-600" />,
      title: "Quality Assurance",
      desc: "Products sourced from reputable international manufacturers.",
    },
  ];

 const brands = [
  "HP",
  "Dell",
  "Lenovo",
  "Cisco",
  "Toyota",
  "Caterpillar",
  "Grundfos",
  "ABB",
  "Schneider Electric",
  "Honeywell",
  "Canon",
  "Epson",
];

  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Why Choose GOLTENS?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Reliable Industrial Supply Partner Across Egypt
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white p-8 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex justify-center">{item.icon}</div>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-center text-3xl font-bold">
            Brands We Supply
          </h3>

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {brands.map((brand) => (
              <div
                key={brand}
                className="rounded-xl border bg-slate-50 py-6 text-center text-lg font-semibold shadow-sm transition hover:shadow-lg"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}