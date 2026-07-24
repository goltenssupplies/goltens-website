import { Factory, Target, Eye } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <div className="text-center">
        <h2 className="text-5xl font-bold text-slate-900">
          About GOLTENS
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600">
          GOLTENS GENERAL SUPPLIES is committed to delivering reliable
          industrial equipment and engineering solutions for government and
          private sector projects across Egypt.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="rounded-2xl border border-blue-200 bg-white p-8 shadow-lg">
          <Factory className="text-blue-600" size={48} />

          <h3 className="mt-6 text-2xl font-bold">
            Industrial Excellence
          </h3>

          <p className="mt-4 text-slate-600 leading-8">
            Supplying high-quality industrial equipment, pumps, valves,
            electrical and mechanical solutions.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-white p-8 shadow-lg">
          <Target className="text-blue-600" size={48} />

          <h3 className="mt-6 text-2xl font-bold">
            Our Mission
          </h3>

          <p className="mt-4 text-slate-600 leading-8">
            Deliver dependable products and responsive technical support while
            building long-term partnerships with our clients.
          </p>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-white p-8 shadow-lg">
          <Eye className="text-blue-600" size={48} />

          <h3 className="mt-6 text-2xl font-bold">
            Our Vision
          </h3>

          <p className="mt-4 text-slate-600 leading-8">
            To become one of Egypt's leading industrial suppliers recognized
            for quality, integrity and engineering excellence.
          </p>
        </div>
      </div>
    </section>
  );
}