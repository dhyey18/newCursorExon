"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Terms() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-steel-900 via-steel-800 to-industrial-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-steel-200 max-w-3xl mx-auto">
              Please read these terms carefully before using our website or purchasing our automation machinery.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container py-16">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="prose prose-steel max-w-none">
            <p className="text-steel-600 text-lg leading-relaxed mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">1. Acceptance of Terms</h2>
              <p className="text-steel-600 mb-6">
                By accessing and using the MetronixSystem website, requesting quotes, or purchasing our automation machinery, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">2. Definitions</h2>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li><strong>"Company"</strong> refers to MetronixSystem and its subsidiaries</li>
                <li><strong>"Products"</strong> refers to all automation machinery, equipment, and related services offered by MetronixSystem</li>
                <li><strong>"Customer"</strong> refers to any individual or entity that purchases or inquires about our products</li>
                <li><strong>"Website"</strong> refers to metronixsystem.com and all associated domains</li>
                <li><strong>"Services"</strong> includes installation, training, maintenance, and technical support</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">3. Website Usage</h2>
              
              <h3 className="text-xl font-semibold text-steel-700 mb-4">Permitted Use</h3>
              <p className="text-steel-600 mb-4">
                You may use our website for lawful purposes only. You agree not to use the website:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>In any way that violates any applicable federal, state, or international law</li>
                <li>To impersonate or attempt to impersonate the Company or any employee</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use of the website</li>
                <li>To introduce any viruses, malware, or other harmful code</li>
                <li>To attempt to gain unauthorized access to any part of the website</li>
              </ul>

              <h3 className="text-xl font-semibold text-steel-700 mb-4">Intellectual Property</h3>
              <p className="text-steel-600 mb-6">
                The content on this website, including but not limited to text, graphics, images, logos, and software, is the property of MetronixSystem and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">4. Product Sales and Quotations</h2>
              
              <h3 className="text-xl font-semibold text-steel-700 mb-4">Quotations</h3>
              <p className="text-steel-600 mb-4">
                All quotations provided by MetronixSystem are:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>Valid for 30 days from the date of issue unless otherwise specified</li>
                <li>Subject to final engineering review and may be adjusted based on specific requirements</li>
                <li>Exclude taxes, duties, and shipping unless explicitly included</li>
                <li>Based on current material costs and subject to change</li>
              </ul>

              <h3 className="text-xl font-semibold text-steel-700 mb-4">Orders and Contracts</h3>
              <p className="text-steel-600 mb-6">
                Purchase orders and contracts become binding upon written acceptance by MetronixSystem. We reserve the right to decline any order at our discretion. Custom machinery orders require a separate detailed agreement outlining specifications, delivery terms, and acceptance criteria.
              </p>

              <h3 className="text-xl font-semibold text-steel-700 mb-4">Payment Terms</h3>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>Standard payment terms are 30% deposit, 60% at delivery, 10% after commissioning</li>
                <li>Payment terms may vary based on order size and customer creditworthiness</li>
                <li>Late payments may incur interest charges at 1.5% per month</li>
                <li>We reserve the right to require payment security or insurance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">5. Delivery and Risk Transfer</h2>
              <p className="text-steel-600 mb-4">
                Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>Delivery terms are EXW (Ex Works) our facility</li>
                <li>Risk of loss transfers to the customer upon delivery</li>
                <li>Delivery dates are estimates and not guaranteed</li>
                <li>Force majeure events may excuse performance delays</li>
                <li>Customer is responsible for obtaining necessary permits and approvals</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">6. Warranties and Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-steel-700 mb-4">Product Warranty</h3>
              <p className="text-steel-600 mb-4">
                MetronixSystem warrants that our products will be free from defects in materials and workmanship for a period of:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>24 months from the date of delivery for mechanical components</li>
                <li>12 months from the date of delivery for electrical components</li>
                <li>90 days for software and programming</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-steel-700 mb-4">Warranty Exclusions</h3>
              <p className="text-steel-600 mb-4">
                The warranty does not cover:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>Normal wear and tear</li>
                <li>Damage from misuse, abuse, or improper maintenance</li>
                <li>Modifications made by third parties</li>
                <li>Environmental damage</li>
                <li>Consumable parts and accessories</li>
              </ul>

              <h3 className="text-xl font-semibold text-steel-700 mb-4">Disclaimer</h3>
              <p className="text-steel-600 mb-6">
                EXCEPT AS EXPRESSLY SET FORTH HEREIN, METRONIXSYSTEM DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">7. Limitation of Liability</h2>
              <p className="text-steel-600 mb-6">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, METRONIXSYSTEM'S TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATED TO THIS AGREEMENT SHALL NOT EXCEED THE AMOUNT PAID BY CUSTOMER FOR THE SPECIFIC PRODUCT OR SERVICE GIVING RISE TO THE CLAIM. IN NO EVENT SHALL METRONIXSYSTEM BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">8. Installation and Commissioning</h2>
              <p className="text-steel-600 mb-4">
                When installation services are provided:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>Customer must provide suitable site conditions and utilities</li>
                <li>Installation timeline depends on site readiness</li>
                <li>Customer personnel must be available for training</li>
                <li>Additional charges apply for site modifications or delays</li>
                <li>Final acceptance requires customer sign-off on performance criteria</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">9. Technical Support and Training</h2>
              <p className="text-steel-600 mb-4">
                MetronixSystem provides:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>Basic operator training as part of standard delivery</li>
                <li>Technical support during business hours</li>
                <li>Emergency support available for additional fees</li>
                <li>Remote diagnostic services where applicable</li>
                <li>Software updates and patches as available</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">10. Confidentiality and Non-Disclosure</h2>
              <p className="text-steel-600 mb-6">
                Both parties agree to maintain the confidentiality of proprietary information shared during the course of business. This includes but is not limited to technical specifications, pricing information, and business processes. Confidentiality obligations survive termination of any agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">11. Export Control and Compliance</h2>
              <p className="text-steel-600 mb-6">
                Our products may be subject to export control laws and regulations. Customer agrees to comply with all applicable laws and regulations and acknowledges that they are responsible for obtaining any necessary export licenses or permits.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">12. Termination</h2>
              <p className="text-steel-600 mb-6">
                We may terminate or suspend access to our website immediately, without prior notice, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the website will cease immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">13. Dispute Resolution</h2>
              <p className="text-steel-600 mb-4">
                Any disputes arising from these terms shall be resolved through:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>First, good faith negotiations between the parties</li>
                <li>If unresolved, binding arbitration under American Arbitration Association rules</li>
                <li>Arbitration to be conducted in New York, NY</li>
                <li>Each party bears their own costs unless otherwise determined by arbitrator</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">14. Governing Law</h2>
              <p className="text-steel-600 mb-6">
                These Terms shall be interpreted and governed by the laws of the State of New York, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in New York.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">15. Changes to Terms</h2>
              <p className="text-steel-600 mb-6">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. Material changes will be posted on our website and customers will be notified via email.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">16. Severability</h2>
              <p className="text-steel-600 mb-6">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">17. Contact Information</h2>
              <p className="text-steel-600 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-steel-50 p-6 rounded-lg">
                <p className="text-steel-600 mb-2"><strong>MetronixSystem Legal Department</strong></p>
                <p className="text-steel-600 mb-2">Email: support@metronixsystem.com</p>
                <p className="text-steel-600 mb-2">Phone: +91 9924428852</p>
                <p className="text-steel-600 mb-2">Address: surat, Gujarat, India</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-steel-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-center">
                Contact Legal Team
              </Link>
              <Link href="/privacy" className="btn-secondary text-center">
                Privacy Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 