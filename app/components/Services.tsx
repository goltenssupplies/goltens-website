import {
  Factory,
  Droplets,
  Wrench,
  Zap,
  Cog,
  ShieldCheck,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Factory className="h-12 w-12 text-blue-600" />,
      title: "Pumps & Pumping Systems",
      desc: "Industrial pumps, booster systems, submersible pumps and complete pumping solutions.",
    },
    {
      icon: <Factory className="h-12 w-12 text-blue-600" />,
      title: "Heavy & Light Equipment",
      desc: "Heavy machinery, construction equipment, forklifts and industrial equipment.",
    },
    {
      icon: <Cog className="h-12 w-12 text-blue-600" />,
      title: "Industrial Machinery",
      desc: "Colloid mills, production equipment and industrial machinery.",
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "Electrical Supplies",
      desc: "Cables, switchgear, lighting, control panels and electrical accessories.",
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-blue-600" />,
      title: "IT Equipment",
      desc: "Laptops, desktops, servers, networking equipment and printers.",
    },
    {
      icon: <Droplets className="h-12 w-12 text-blue-600" />,
      title: "Industrial Chemicals",
      desc: "Industrial chemicals, treatment chemicals and specialized materials.",
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: "Vehicles",
      desc: "Passenger vehicles, commercial vehicles and transportation solutions.",
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-blue-600" />,
      title: "Fire Fighting Systems",
      desc: "Fire pumps, extinguishers, safety systems and firefighting equipment.",
    },
    {
      icon: <Cog className="h-12 w-12 text-blue-600" />,
      title: "Office Furniture",
      desc: "Office furniture, workstations, meeting rooms and commercial furnishing.",
    },
  ];

  return (
    <section id="services" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
           Our Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
             supply products and procurement solutions for governmentComprehensive procurement and supply solutions for government entities,
hospitals, universities, industrial facilities, contractors and private
organizations across Egypt.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6">{service.icon}</div>

              <h3 className="mb-4 text-2xl font-bold">
                {service.title}
              </h3>

              <p className="leading-8 text-slate-600">
                {service.desc}
              </p>

              Comprehensive procurement and supply solutions for government entities,
hospitals, universities, industrial facilities, contractors and private
organizations across Egypt.
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}