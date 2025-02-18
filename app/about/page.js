import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              About Us
            </span>
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Marine Automation is a leading provider of advanced automation solutions for the maritime industry. 
              With years of experience and cutting-edge technology, we help vessel operators optimize their operations, 
              improve safety, and reduce costs.
            </p>

            <div className="my-12 relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="/about-hero.jpg"
                alt="Marine Automation Team"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Mission</h2>
            <p className="text-slate-600 mb-8">
              To revolutionize maritime operations through innovative automation solutions that enhance 
              efficiency, safety, and sustainability in the global shipping industry.
            </p>

            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Innovation",
                  description: "Constantly pushing the boundaries of maritime technology"
                },
                {
                  title: "Reliability",
                  description: "Delivering dependable solutions our clients can trust"
                },
                {
                  title: "Sustainability",
                  description: "Committed to environmental responsibility"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-100">
                  <h3 className="text-lg font-semibold mb-2 text-slate-800">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 