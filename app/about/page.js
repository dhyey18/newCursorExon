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
    { number: "20+", label: "Years of Excellence" },
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Countries Served" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Precision Engineering",
      description: "Every machine we deliver is engineered to the highest standards of precision and reliability, ensuring optimal performance in your manufacturing environment."
    },
    {
      icon: "🔬",
      title: "Innovation Focus",
      description: "We continuously invest in R&D to bring cutting-edge automation technologies that keep our clients ahead of the competition."
    },
    {
      icon: "🤝",
      title: "Customer Partnership",
      description: "We believe in building long-term partnerships with our clients, providing ongoing support and consultation throughout their automation journey."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "With a presence in over 50 countries, we deliver consistent quality and service standards worldwide."
    }
  ];

  const team = [
    {
      name: "Dr. Michael Chen",
      position: "Chief Executive Officer",
      experience: "25+ years in automation industry",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      background: "Former VP of Engineering at leading automation company"
    },
    {
      name: "Sarah Rodriguez",
      position: "Chief Technology Officer",
      experience: "20+ years in machine design",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      background: "PhD in Mechanical Engineering, MIT"
    },
    {
      name: "James Wilson",
      position: "VP of Sales & Marketing",
      experience: "18+ years in industrial sales",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      background: "Former Director at major machinery manufacturer"
    },
    {
      name: "Dr. Li Wang",
      position: "Head of R&D",
      experience: "15+ years in automation research",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      background: "Former researcher at Stanford Automation Lab"
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      image: "https://images.unsplash.com/photo-1560472355-109703aa3edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "CE Marking",
      description: "European Conformity",
      image: "https://images.unsplash.com/photo-1560472355-109703aa3edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "UL Listed",
      description: "Safety Standards",
      image: "https://images.unsplash.com/photo-1560472355-109703aa3edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "CSA Certified",
      description: "Canadian Standards",
      image: "https://images.unsplash.com/photo-1560472355-109703aa3edc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-steel-900 via-steel-800 to-industrial-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About MetronixSystem
            </h1>
            <p className="text-xl text-steel-200 max-w-3xl mx-auto">
              Two decades of excellence in industrial automation machinery. We engineer precision, deliver reliability, and partner for success.
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
                    Founded in 2004, MetronixSystem began as a small engineering firm with a bold vision: to revolutionize industrial automation through precision-engineered machinery and innovative solutions.
                  </p>
                  <p>
                    What started as a team of five dedicated engineers has grown into a global leader in automation technology, serving over 150 clients across 50 countries. Our journey has been marked by continuous innovation, unwavering commitment to quality, and an absolute focus on customer success.
                  </p>
                  <p>
                    Today, we're proud to be at the forefront of Industry 4.0, developing smart manufacturing solutions that help businesses transform their operations and achieve new levels of efficiency.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary">
                    Partner With Us
                  </Link>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="relative"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="MetronixSystem Manufacturing Facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm">Years of Innovation</div>
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
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
                The principles that guide every decision we make and every machine we build.
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
                  className="text-center p-6 rounded-xl bg-gradient-to-b from-steel-50 to-steel-100/50"
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

      {/* Leadership Team */}
      <AnimatedSection>
        <section className="py-20 bg-steel-50">
          <div className="container">
            <motion.div
              className="text-center mb-16"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="heading-gradient">Leadership Team</span>
              </h2>
              <p className="text-xl text-steel-600 max-w-3xl mx-auto">
                Meet the experienced professionals driving MetronixSystem's vision and growth.
              </p>
            </motion.div>
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
                  <p className="text-primary-600 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-steel-600 mb-3">{member.experience}</p>
                  <p className="text-xs text-steel-500">{member.background}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="container">
            <motion.div
              className="text-center mb-16"
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="heading-gradient">Certifications & Standards</span>
              </h2>
              <p className="text-xl text-steel-600 max-w-3xl mx-auto">
                Our commitment to quality is validated by internationally recognized certifications and standards.
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
                  className="text-center p-6 bg-steel-50 rounded-xl"
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
        <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-500 text-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                variants={fadeIn}
                className="text-center md:text-left"
              >
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl leading-relaxed text-primary-100">
                  To empower manufacturers worldwide with precision-engineered automation machinery that drives operational excellence, enhances productivity, and delivers measurable value.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="text-center md:text-left"
              >
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-xl leading-relaxed text-primary-100">
                  To be the global leader in industrial automation machinery, setting the standard for innovation, quality, and customer success in the manufacturing industry.
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
                <span className="heading-gradient">Ready to Transform Your Manufacturing?</span>
              </h2>
              <p className="text-xl text-steel-600 mb-8">
                Join the 150+ companies worldwide who trust MetronixSystem for their automation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="btn-primary">
                  Explore Our Products
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
} 