"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
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
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            className="flex-1 space-y-8 w-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              Authorised Dealer — , Gujarat
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text text-transparent">
                PLC, HMI &amp;
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Automation Solutions
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Axon Automation is an authorised dealer of Siemens, Allen Bradley, Mitsubishi, Schneider Electric and Delta — supplying PLCs, HMIs, VFDs and SCADA systems to industries across India with prompt delivery and expert after-sales support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Request Quote
              </Link>
              <Link href="/products" className="btn-secondary">
                View Products
              </Link>
            </div>
            {/* Brand Logos row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {['Siemens', 'Allen Bradley', 'Mitsubishi', 'Schneider', 'Delta'].map((brand) => (
                <span key={brand} className="text-xs font-semibold text-steel-500 border border-steel-200 rounded-md px-3 py-1 bg-white/70">
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full max-w-lg md:max-w-none"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative aspect-video md:aspect-square w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Industrial PLC and Automation Equipment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="heading-gradient">Our Product Range</span>
            </h2>
            <motion.div
              className="grid sm:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "PLC Systems",
                  description: "Siemens S7, Allen Bradley ControlLogix, Mitsubishi iQ-R & more — for every scale of automation",
                  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  link: "/products?category=plc"
                },
                {
                  title: "HMI Panels",
                  description: "Touch-screen operator panels from Siemens, Delta and Schneider for intuitive machine control",
                  image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  link: "/products?category=hmi"
                }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </Link>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Axon */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="heading-gradient">What We Offer</span>
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
                title: "Authorised Dealer",
                description: "We are an authorised channel partner for leading brands — every product is 100% genuine with full manufacturer warranty",
                icon: "✅",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Technical Support",
                description: "Our trained engineers provide commissioning assistance, wiring guidance and remote troubleshooting support",
                icon: "🔧",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Pan-India Delivery",
                description: "Reliable and fast shipping across India with secure packaging to protect sensitive automation components",
                icon: "🚚",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="card group"
                variants={fadeIn}
              >
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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
        <section className="py-16 bg-primary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { number: "3+", label: "Years in Business" },
                { number: "500+", label: "Orders Fulfilled" },
                { number: "100+", label: "Happy Clients" },
                { number: "10+", label: "Brands Supported" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={fadeIn}
                >
                  <motion.div
                    className="text-4xl font-bold text-white mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-primary-100">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Axon */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="heading-gradient">Why Choose Axon Automation?</span>
              </h2>
              <p className="text-slate-600 text-lg">
                We make it easy for Indian manufacturers to source genuine automation components at competitive prices — with the technical expertise to back it up.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏅",
                  title: "Genuine & Authorised",
                  description: "All products sourced directly from authorised distributors — no grey-market, no counterfeits. Full warranty included."
                },
                {
                  icon: "⚡",
                  title: "Fast Quotation",
                  description: "Get a detailed quotation within 24 hours. Our team understands BOMs and helps you select the right model quickly."
                },
                {
                  icon: "🤝",
                  title: "After-Sales Support",
                  description: "From installation assistance to firmware updates, we stand by you after the purchase — not just at the point of sale."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 }
                  }}
                  className="text-center p-8 rounded-xl bg-gradient-to-b from-slate-50 to-slate-100/50 border border-slate-200/60"
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

      {/* Industries We Serve */}
      <AnimatedSection>
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="heading-gradient">Industries We Serve</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Textile",
                  icon: "🧵",
                  description: "PLC & drive solutions for looms, knitting machines and dyeing plants across  & Ahmedabad"
                },
                {
                  name: "Pharmaceuticals",
                  icon: "💊",
                  description: "Precision automation for GMP-compliant production, filling and packaging lines"
                },
                {
                  name: "Automotive",
                  icon: "🚗",
                  description: "Motion control and PLC systems for assembly, welding and paint shop automation"
                },
                {
                  name: "Food & Beverage",
                  icon: "🍽️",
                  description: "Hygienic automation solutions for processing, filling and packaging applications"
                }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-3xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-steel-800">{industry.name}</h3>
                  <p className="text-slate-600 text-sm">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Success Stories */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="heading-gradient">Customer Success Stories</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Siemens S7-1500 PLC Deployment",
                  client: "Rajesh Textiles Pvt. Ltd., ",
                  result: "30% reduction in machine downtime",
                  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "HMI Upgrade for Packaging Line",
                  client: "Mehta Pharma Industries, Vadodara",
                  result: "Operator errors reduced by 45%",
                  image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                  title: "VFD Installation — Pump Station",
                  client: "Patel Engineering Works, Ahmedabad",
                  result: "22% energy savings per month",
                  image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
              ].map((study, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-steel-800">{study.title}</h3>
                    <p className="text-slate-500 text-sm mb-4">{study.client}</p>
                    <div className="flex items-center text-green-600 font-medium text-sm">
                      <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Need a Quote for Your Project?
            </h2>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              Share your requirements and our team will get back with the best pricing and availability — typically within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg">
                Request Quote
              </Link>
              <Link href="/products" className="inline-flex items-center justify-center border-2 border-white/70 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Browse Products
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
              <span className="text-2xl font-bold text-white block mb-4">
                Axon Automation
              </span>
              <p className="text-neutral-300 leading-relaxed text-sm">
                Authorised dealer of Siemens, Allen Bradley, Mitsubishi, Schneider Electric and Delta automation products. Serving Indian industries since 2021.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Products', path: '/products' },
                  { name: 'About Us', path: '/about' },
                  { name: 'Contact', path: '/contact' },
                  { name: 'Privacy Policy', path: '/privacy' },
                  { name: 'Terms & Conditions', path: '/terms' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-neutral-300 text-sm">
                <li>📧 info@axonautomation.in</li>
                <li>📞 +91 99244 28852</li>
                <li>📍 , Gujarat — 395 003</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Brands We Deal In</h4>
              <div className="flex flex-wrap gap-2">
                {['Siemens', 'Allen Bradley', 'Mitsubishi', 'Schneider', 'Delta', 'Omron'].map((brand) => (
                  <span key={brand} className="text-xs text-neutral-400 border border-neutral-700 rounded px-2 py-1">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-800 text-neutral-400 text-sm text-center">
            © {new Date().getFullYear()} Axon Automation. All rights reserved. | , Gujarat, India
          </div>
        </div>
      </footer>
    </div>
  );
}
