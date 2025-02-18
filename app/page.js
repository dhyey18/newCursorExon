"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  const pathname = usePathname();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 lg:pt-40 pb-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-neutral-50 to-primary-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        </motion.div>
        
        <div className="container relative mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent">
                Empowering Industry
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Through Automation
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
              We provide cutting-edge automation solutions that enhance efficiency, reduce costs, and drive innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link href="/solutions" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative aspect-video md:aspect-square w-full">
              <Image
                src="/hero/automation-hero.png"
                alt="Automation System"
                fill
                className="rounded-2xl shadow-2xl shadow-slate-200/50 hover:shadow-slate-300/50 transition-shadow duration-300 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Preview Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="heading-gradient">Our Solutions</span>
            </h2>
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Industrial Automation",
                  description: "Complete automation solutions for manufacturing processes with PLC, SCADA, and HMI integration",
                  image: "/solutions/industrial-automation.jpg"
                },
                {
                  title: "Process Automation",
                  description: "Advanced control systems for optimizing industrial processes and improving efficiency",
                  image: "/solutions/process-automation.jpg"
                }
              ].map((solution, index) => (
                <Link 
                  key={index}
                  href={`/solutions#${solution.title.toLowerCase().replace(/ /g, '-')}`}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                    <p className="text-white/80">{solution.description}</p>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="heading-gradient">Our Expertise</span>
          </h2>
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "PLC Programming",
                description: "Expert programming for Allen Bradley, Siemens, and other major PLC platforms",
                icon: "⚡",
                image: "/features/plc-programming.jpg"
              },
              {
                title: "SCADA Systems",
                description: "Custom SCADA solutions for real-time monitoring and control",
                icon: "🖥️",
                image: "/features/scada-systems.jpg"
              },
              {
                title: "HMI Development",
                description: "User-friendly interface design for efficient machine operation",
                icon: "🔧",
                image: "/features/hmi-development.jpg"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="card group"
                variants={fadeIn}
              >
                <div className="relative h-48 lg:h-56">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-800">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { number: "15+", label: "Years Experience" },
                { number: "500+", label: "Projects Completed" },
                { number: "100+", label: "Happy Clients" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeIn}
                >
                  <motion.div 
                    className="text-4xl font-bold text-blue-600 mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Value Proposition Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="heading-gradient">Why Choose Axon Automation?</span>
              </h2>
              <p className="text-slate-600 text-lg">
                We deliver cutting-edge automation solutions that transform businesses and drive operational excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Industry Expertise",
                  description: "15+ years of experience in industrial automation and control systems"
                },
                {
                  icon: "💡",
                  title: "Innovation Focus",
                  description: "Cutting-edge solutions using the latest automation technologies"
                },
                {
                  icon: "🤝",
                  title: "Dedicated Support",
                  description: "24/7 technical support and maintenance services"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  className="text-center p-6 rounded-xl bg-gradient-to-b from-slate-50 to-slate-100/50"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Industries Served Section */}
      <AnimatedSection>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="heading-gradient">Industries We Serve</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Manufacturing",
                  icon: "🏭",
                  description: "Smart manufacturing solutions and process automation"
                },
                {
                  name: "Pharmaceuticals",
                  icon: "💊",
                  description: "Precision control systems for pharmaceutical production"
                },
                {
                  name: "Food & Beverage",
                  icon: "🍽️",
                  description: "Automated processing and packaging solutions"
                },
                {
                  name: "Energy",
                  icon: "⚡",
                  description: "Power distribution and energy management systems"
                }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                  <p className="text-slate-600 text-sm">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Case Studies Section */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="heading-gradient">Success Stories</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Manufacturing Excellence",
                  client: "Tech Manufacturing Co.",
                  result: "50% increase in production efficiency",
                  image: "/case-studies/manufacturing.jpg"
                },
                {
                  title: "Smart Factory Implementation",
                  client: "Global Foods Ltd.",
                  result: "30% reduction in operational costs",
                  image: "/case-studies/smart-factory.jpg"
                },
                {
                  title: "Process Optimization",
                  client: "PharmaTech Industries",
                  result: "99.9% quality assurance rate",
                  image: "/case-studies/process.jpg"
                }
              ].map((study, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-slate-600 mb-4">Client: {study.client}</p>
                    <div className="flex items-center text-green-600">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {study.result}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-primary-50 mb-8 leading-relaxed">
              Let's discuss how our automation solutions can help your business achieve new levels of efficiency and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-white hover:bg-primary-50">
                Schedule a Consultation
              </Link>
              <Link href="/solutions" className="btn-secondary !border-white !text-white hover:bg-white/10">
                View Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16 lg:py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/logo.png"
                    alt="Axon Automation Logo"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <span className="text-2xl font-bold text-white">
                  Axon Automation
                </span>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                Leading the future of technology with innovative automation solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Solutions', path: '/solutions' },
                  { name: 'Products', path: '/products' },
                  { name: 'Features', path: '/features' },
                  { name: 'About', path: '/about' },
                  { name: 'Contact', path: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className="text-neutral-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-slate-300">
                <li>Email: info@axonauto.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: Innovation Hub, Tech City</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-slate-300 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-800 text-neutral-400 text-sm text-center">
            © {new Date().getFullYear()} Axon Automation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
