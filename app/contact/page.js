"use client";

import { motion } from "framer-motion";
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function Contact() {
  const searchParams = useSearchParams();
  const product = searchParams.get('product');

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="Contact Us"
          fill
          className="object-cover brightness-50"
          priority
        />
        <motion.h1 
          className="relative text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="form-input"
                    placeholder="How can we help?"
                    defaultValue={product ? `Inquiry about ${product.split('-').join(' ')}` : ''}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="form-input resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Company Info */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/logo.png"
                    alt="Axon Automation Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold">Axon Automation</h3>
              </div>
              <p className="text-neutral-600 leading-relaxed mb-6">
                We're here to help you automate your industrial processes and improve operational efficiency.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">Location</h4>
                    <p className="text-neutral-600">
                      Innovation Hub<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">Email</h4>
                    <p className="text-neutral-600">info@axonauto.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">Phone</h4>
                    <p className="text-neutral-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card p-8">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Monday - Friday</span>
                  <span className="text-neutral-800">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Saturday</span>
                  <span className="text-neutral-800">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Sunday</span>
                  <span className="text-neutral-800">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 