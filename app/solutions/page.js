"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from '../components/AnimatedSection';

export default function Solutions() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-6 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="heading-gradient">Our Solutions</span>
        </motion.h1>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {[
            {
              title: "PLC Programming",
              description: "Expert programming services for all major PLC platforms including Allen Bradley, Siemens, and more",
              image: "/solutions/plc-programming.jpg",
              features: ["Logic Development", "PLC Migration", "Troubleshooting", "System Integration"]
            },
            {
              title: "SCADA Development",
              description: "Custom SCADA solutions for comprehensive plant monitoring and control",
              image: "/solutions/scada-development.jpg",
              features: ["Real-time Monitoring", "Data Logging", "Alarm Management", "Report Generation"]
            },
            {
              title: "HMI Solutions",
              description: "User-friendly HMI design and development for efficient machine operation",
              image: "/solutions/hmi-solutions.jpg",
              features: ["Interface Design", "Panel Integration", "Operator Training", "Maintenance Support"]
            },
            {
              title: "Industrial IoT",
              description: "Smart manufacturing solutions with IoT integration and data analytics",
              image: "/solutions/industrial-iot.jpg",
              features: ["Data Collection", "Cloud Integration", "Remote Monitoring", "Predictive Analytics"]
            }
          ].map((solution, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-slate-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-600">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 