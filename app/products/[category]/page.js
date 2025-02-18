"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import { use } from 'react';
import AnimatedSection from '../../components/AnimatedSection';

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
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758"
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
        image: "https://images.unsplash.com/photo-1581092160562-7d25d0a7e47f"
      },
      {
        name: "Safety Controllers",
        description: "Advanced safety control systems for industrial applications",
        features: [
          "Safety PLCs",
          "Emergency Stop Systems",
          "Light Curtains",
          "Safety Relays"
        ],
        image: "https://images.unsplash.com/photo-1581092160562-7d25d0a7e47f"
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
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
      },
      {
        name: "Operator Panels",
        description: "Robust control panels for industrial environments",
        features: [
          "Custom Panel Design",
          "IP65/66 Protection",
          "Membrane Keypads",
          "LED Indicators"
        ],
        image: "https://images.unsplash.com/photo-1580983218765-f663bec07b37"
      },
      {
        name: "Industrial Monitors",
        description: "High-resolution displays for control rooms and production floors",
        features: [
          "4K Resolution",
          "24/7 Operation",
          "Industrial Grade",
          "Multi-Touch Support"
        ],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
      }
    ]
  },
  {
    category: "Industrial IoT",
    items: [
      {
        name: "IoT Gateways",
        description: "Secure connectivity solutions for industrial IoT applications",
        features: [
          "Multi-Protocol Support",
          "Edge Computing",
          "Data Security",
          "Remote Management"
        ],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
      },
      {
        name: "Sensors & Transmitters",
        description: "Smart sensors for industrial process monitoring",
        features: [
          "Temperature Sensors",
          "Pressure Transmitters",
          "Level Sensors",
          "Flow Meters"
        ],
        image: "https://images.unsplash.com/photo-1580983218765-f663bec07b37"
      },
      {
        name: "Data Loggers",
        description: "Advanced data collection and monitoring systems",
        features: [
          "Real-time Monitoring",
          "Cloud Integration",
          "Historical Data",
          "Analytics Tools"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      }
    ]
  },
  {
    category: "Drive Systems",
    items: [
      {
        name: "Variable Frequency Drives",
        description: "Energy-efficient motor control solutions",
        features: [
          "Multiple Power Ranges",
          "Vector Control",
          "Energy Saving",
          "Built-in PID"
        ],
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758"
      },
      {
        name: "Servo Drives",
        description: "High-performance motion control drives",
        features: [
          "Position Control",
          "Velocity Control",
          "Torque Control",
          "Auto-tuning"
        ],
        image: "https://images.unsplash.com/photo-1581092160562-7d25d0a7e47f"
      },
      {
        name: "Soft Starters",
        description: "Motor starting solutions for reduced mechanical stress",
        features: [
          "Current Limiting",
          "Torque Control",
          "Motor Protection",
          "Parameter Settings"
        ],
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758"
      }
    ]
  },
  {
    category: "Software Solutions",
    items: [
      {
        name: "SCADA Systems",
        description: "Comprehensive plant monitoring and control software",
        features: [
          "Real-time Monitoring",
          "Data Acquisition",
          "Trend Analysis",
          "Alarm Management"
        ],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
      },
      {
        name: "HMI Software",
        description: "User interface development platforms",
        features: [
          "Drag-and-Drop Design",
          "Custom Graphics",
          "Script Support",
          "OPC Integration"
        ],
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
      },
      {
        name: "Analytics Platform",
        description: "Industrial data analytics and reporting solution",
        features: [
          "Predictive Maintenance",
          "Performance Metrics",
          "Custom Reports",
          "Machine Learning"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      }
    ]
  }
];

export default function CategoryProducts({ params }) {
  const resolvedParams = use(params);
  const { category } = resolvedParams;
  
  // Find the category data
  const categoryData = products.find(
    cat => cat.category.toLowerCase().replace(/ & /g, '-') === category
  );

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-neutral-50 pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="mb-8">
            <Link 
              href="/products"
              className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Products
            </Link>
          </div>
          <div className="text-center py-16">
            <h1 className="text-2xl font-semibold text-neutral-800">Category not found</h1>
            <p className="mt-4 text-neutral-600">The requested product category does not exist.</p>
          </div>
        </div>
      </div>
    );
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="mb-8">
          <Link 
            href="/products"
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
        </div>

        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="heading-gradient">{categoryData.category}</span>
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.items.map((product, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              initial="initial"
              animate="animate"
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-neutral-100 animate-pulse" />
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-opacity duration-300"
                  onLoadingComplete={(image) => {
                    image.classList.remove('opacity-0');
                  }}
                  loading={index < 3 ? 'eager' : 'lazy'}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-800">
                  {product.name}
                </h3>
                <p className="text-slate-600 mb-4">
                  {product.description}
                </p>
                <div className="space-y-2">
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
                <Link 
                  href={`/contact?product=${product.name.toLowerCase().replace(/ /g, '-')}`}
                  className="mt-6 w-full btn-primary text-center"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 