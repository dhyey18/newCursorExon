"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import AnimatedSection from '../components/AnimatedSection';

export default function Products() {
  const router = useRouter();
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const products = [
    {
      category: "PLC & Controllers",
      items: [
        {
          name: "PLC Systems",
          description: "Advanced programmable logic controllers for industrial automation",
          features: [
            "Allen Bradley PLCs",
            "Siemens PLCs",
            "Schneider Electric PLCs",
            "Custom PLC Solutions"
          ],
          image: "/products/plc-systems.jpg"
        },
        {
          name: "Motion Controllers",
          description: "High-precision motion control systems for automated machinery",
          features: [
            "Servo Controllers",
            "Stepper Controllers",
            "Multi-axis Control",
            "Position Control"
          ],
          image: "/products/motion-controllers.jpg"
        }
      ]
    },
    {
      category: "HMI & Displays",
      items: [
        {
          name: "Touch Panels",
          description: "Industrial touch screen interfaces for machine control",
          features: [
            "Resistive Touch Panels",
            "Capacitive Displays",
            "Rugged Design",
            "Multiple Sizes"
          ],
          image: "/products/touch-panels.jpg"
        },
        {
          name: "Control Panels",
          description: "Custom-built control panels for industrial applications",
          features: [
            "Operator Interfaces",
            "Emergency Controls",
            "Status Indicators",
            "Custom Layouts"
          ],
          image: "/products/control-panels.jpg"
        }
      ]
    },
    {
      category: "Industrial IoT Devices",
      items: [
        {
          name: "Data Loggers",
          description: "Industrial-grade data collection and monitoring devices",
          features: [
            "Real-time Monitoring",
            "Data Storage",
            "Cloud Connectivity",
            "Multiple Protocols"
          ],
          image: "/products/data-loggers.jpg"
        },
        {
          name: "Gateway Devices",
          description: "Communication gateways for industrial networks",
          features: [
            "Protocol Conversion",
            "Network Integration",
            "Secure Communication",
            "Remote Access"
          ],
          image: "/products/gateway-devices.jpg"
        }
      ]
    }
  ];

  const handleLearnMore = (categorySlug) => {
    router.push(`/products/${categorySlug}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="relative h-[40vh] md:h-[50vh] mb-16">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758"
            alt="Industrial Automation Solutions"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
              Our Products
            </h1>
          </div>
        </div>

        <div className="space-y-16">
          {products.map((category, categoryIndex) => (
            <AnimatedSection key={categoryIndex}>
              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">
                  {category.category}
                </h2>
                <motion.div 
                  className="grid md:grid-cols-2 gap-8"
                  variants={{
                    animate: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                  initial="initial"
                  animate="animate"
                >
                  {category.items.map((product, productIndex) => (
                    <motion.div
                      key={productIndex}
                      variants={fadeIn}
                      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative h-64">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-slate-800">
                          {product.name}
                        </h3>
                        <p className="text-slate-600 mb-4">
                          {product.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex}
                              className="flex items-center text-sm text-slate-600"
                            >
                              <svg 
                                className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M5 13l4 4L19 7" 
                                />
                              </svg>
                              {feature}
                            </div>
                          ))}
                        </div>
                        <button 
                          onClick={() => handleLearnMore(category.category.toLowerCase().replace(/ & /g, '-'))}
                          className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Learn More
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
} 