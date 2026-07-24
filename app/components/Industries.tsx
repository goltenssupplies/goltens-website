import {
  Building2,
  Factory,
  Hospital,
  GraduationCap,
  HardHat,
  Landmark,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: <Landmark className="h-12 w-12 text-blue-600" />,
      title: "Government Projects",
      desc: "Supporting ministries, public authorities and government entities.",
    },
    {
      icon: <Factory className="h-12 w-12 text-blue-600" />,
      title: "Industrial Facilities",
      desc: "Industrial equipment, pumps, machinery and spare parts.",
    },
    {
      icon: <Hospital className="h-12 w-12 text-blue-600" />,
      title: "Healthcare",
      desc: "Medical equipment, laboratory devices and healthcare supplies.",
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
      title: "Education",
      desc: "Universities, schools and educational institutions.",
    },
    {
      icon: <HardHat className="h-12 w-12 text-blue-600" />,
      title: "Construction",
      desc: "Heavy equipment, vehicles and project materials.",
    },
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      title: "Private Sector",
      desc: "Procurement solutions for companies across all industries.",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Industries We Serve
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Delivering procurement solutions for government organizations,
            industrial facilities and private businesses across Egypt.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
            >
              <div className="mb-6">{item.icon}</div>

              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="leading-8 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}