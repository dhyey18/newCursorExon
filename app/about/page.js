"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from '../components/AnimatedSection';

export default function About() {
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

  const stats = [
    { number: "3+", label: "Years in Business" },
    { number: "500+", label: "Orders Fulfilled" },
    { number: "100+", label: "Happy Clients" },
    { number: "Pan-India", label: "Delivery Coverage" }
  ];

  const values = [
    {
      icon: "🏅",
      title: "Genuine Products",
      description: "Every product we sell is sourced from authorised distributors — no grey-market stock, no counterfeits, full manufacturer warranty."
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      description: "We know downtime is costly. Our team aims to process and dispatch orders within 24–48 hours wherever possible."
    },
    {
      icon: "🤝",
      title: "Customer First",
      description: "From pre-sales technical guidance to post-purchase support, we are with you at every stage of your automation project."
    },
    {
      icon: "🛠️",
      title: "Technical Expertise",
      description: "Our engineers are trained on Siemens, Allen Bradley, Mitsubishi and more — helping you choose the right product, not just any product."
    }
  ];

  const team = [
    {
      name: "Rajesh Patel",
      position: "Founder & Managing Director",
      experience: "10+ years in industrial automation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      background: "Former application engineer at a leading Siemens distributor"
    },
    {
      name: "Priya Shah",
      position: "Sales & Business Development",
      experience: "7+ years in B2B industrial sales",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      background: "Specialises in Textile and Pharma sector accounts"
    },
    {
      name: "Amit Desai",
      position: "Technical Support Engineer",
      experience: "8+ years PLC & drive commissioning",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      background: "Certified Siemens & Mitsubishi automation professional"
    }
  ];

  const certifications = [
    {
      name: "Siemens Channel Partner",
      description: "Authorised Sales Partner"
    },
    {
      name: "Allen Bradley Distributor",
      description: "Rockwell Authorised Dealer"
    },
    {
      name: "Delta Electronics",
      description: "Authorised Reseller — India"
    },
    {
      name: "GST Registered",
      description: "Gujarat — GSTIN Verified"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-steel-900 via-steel-800 to-industrial-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Axon Automation
            </h1>
            <p className="text-xl text-steel-200 max-w-3xl mx-auto">
              A young, passionate team of automation professionals — helping Indian manufacturers get the right PLC, HMI and drive products with the support they deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  <span className="heading-gradient">Our Story</span>
                </h2>
                <div className="space-y-6 text-steel-600 leading-relaxed">
                  <p>
                    Axon Automation was founded in 2021 in , Gujarat, by a team of automation engineers who saw a gap in the market — Indian manufacturers needed a reliable local partner who understood both the products and the applications.
                  </p>
                  <p>
                    As an authorised dealer for Siemens, Allen Bradley (Rockwell Automation), Mitsubishi Electric, Schneider Electric and Delta, we supply genuine PLCs, HMIs, Variable Frequency Drives and SCADA software to factories across India.
                  </p>
                  <p>
                    Our strength is not just in selling products — it is in knowing which product fits which application. Whether you need a compact PLC for a small machine or a high-performance servo drive for a precision line, our engineers will guide you to the right solution.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary">
                    Talk to Our Team
                  </Link>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="relative"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Industrial PLC and Automation Equipment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">2021</div>
                  <div className="text-sm">Est. in </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection>
        <section className="py-20 bg-steel-50">
          <div className="container">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-center bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-steel-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              className="text-center mb-16"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="heading-gradient">Our Core Values</span>
              </h2>
              <p className="text-xl text-steel-600 max-w-3xl mx-auto">
                The principles that guide every interaction with our customers.
              </p>
            </motion.div>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-center p-6 rounded-xl bg-gradient-to-b from-steel-50 to-steel-100/50 border border-steel-200/50"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-steel-800">{value.title}</h3>
                  <p className="text-steel-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team */}
      <AnimatedSection>
        <section className="py-20 bg-steel-50">
          <div className="container">
            <motion.div
              className="text-center mb-16"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="heading-gradient">Our Team</span>
              </h2>
              <p className="text-xl text-steel-600 max-w-3xl mx-auto">
                Engineers and professionals who are passionate about industrial automation.
              </p>
            </motion.div>
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-steel-800 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2 text-sm">{member.position}</p>
                  <p className="text-sm text-steel-600 mb-2">{member.experience}</p>
                  <p className="text-xs text-steel-500">{member.background}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Certifications / Partnerships */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              className="text-center mb-16"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="heading-gradient">Authorisations &amp; Partnerships</span>
              </h2>
              <p className="text-xl text-steel-600 max-w-3xl mx-auto">
                We are recognised channel partners of the brands we sell — so you can buy with confidence.
              </p>
            </motion.div>
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="text-center p-6 bg-steel-50 rounded-xl border border-steel-200/50"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-steel-800 mb-2">{cert.name}</h3>
                  <p className="text-sm text-steel-600">{cert.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-primary-700 to-primary-500 text-white overflow-hidden">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div variants={fadeIn} className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl leading-relaxed text-primary-100">
                  To be the most trusted PLC and HMI dealer in India — by combining genuine products, fair pricing and technical expertise that helps our customers automate confidently.
                </p>
              </motion.div>
              <motion.div variants={fadeIn} className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-xl leading-relaxed text-primary-100">
                  To make world-class industrial automation accessible to every Indian manufacturer — from large factories to small machine builders across Gujarat and beyond.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-steel-50">
          <div className="container">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="heading-gradient">Ready to Start Your Project?</span>
              </h2>
              <p className="text-xl text-steel-600 mb-8">
                Join 100+ clients who trust Axon Automation for their PLC, HMI and drive requirements across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="btn-primary">
                  Explore Products
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
