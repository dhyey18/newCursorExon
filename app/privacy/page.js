"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-steel-200 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
              <h2 className="text-2xl font-bold text-steel-800 mb-6">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-steel-700 mb-4">Personal Information</h3>
              <p className="text-steel-600 mb-4">
                When you contact us or request information about our automation machinery, we may collect:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>Name and job title</li>
                <li>Company name and industry</li>
                <li>Email address and phone number</li>
                <li>Business address</li>
                <li>Project requirements and specifications</li>
                <li>Budget information (when voluntarily provided)</li>
              </ul>

              <h3 className="text-xl font-semibold text-steel-700 mb-4">Technical Information</h3>
              <p className="text-steel-600 mb-4">
                We automatically collect certain technical information when you visit our website:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>IP address and geographic location</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on site</li>
                <li>Referral source</li>
                <li>Device information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">2. How We Use Your Information</h2>
              <p className="text-steel-600 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>Responding to your inquiries about our automation machinery</li>
                <li>Providing product quotes and proposals</li>
                <li>Scheduling demonstrations and consultations</li>
                <li>Sending technical documentation and specifications</li>
                <li>Providing customer support and after-sales service</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
                <li>Sending relevant industry news and updates (with your consent)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">3. Information Sharing and Disclosure</h2>
              <p className="text-steel-600 mb-4">
                MetronixSystem does not sell, rent, or trade your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations (e.g., email services, analytics)</li>
                <li><strong>Business Partners:</strong> With authorized distributors or partners in your region to better serve your needs</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Protection:</strong> To protect our rights, property, or safety, or that of our users or others</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">4. Data Security</h2>
              <p className="text-steel-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">5. Your Rights and Choices</h2>
              <p className="text-steel-600 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Restriction:</strong> Request limitation of processing of your information</li>
                <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-steel-600 mb-6">
                To exercise these rights, please contact us at privacy@metronixsystem.com.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">6. Cookies and Tracking Technologies</h2>
              <p className="text-steel-600 mb-4">
                We use cookies and similar technologies to enhance your experience on our website:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
              </ul>
              <p className="text-steel-600 mb-6">
                You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">7. International Data Transfers</h2>
              <p className="text-steel-600 mb-6">
                MetronixSystem operates globally. Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>Adequacy decisions by relevant authorities</li>
                <li>Standard contractual clauses</li>
                <li>Binding corporate rules</li>
                <li>Certification schemes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">8. Data Retention</h2>
              <p className="text-steel-600 mb-6">
                We retain your personal information only as long as necessary for the purposes outlined in this policy or as required by law. Retention periods vary based on:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>The nature of our relationship with you</li>
                <li>Legal and regulatory requirements</li>
                <li>The purpose for which we collected the information</li>
                <li>Your preferences and consent</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">9. Children's Privacy</h2>
              <p className="text-steel-600 mb-6">
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected such information, we will take steps to delete it promptly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">10. Changes to This Policy</h2>
              <p className="text-steel-600 mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of significant changes by:
              </p>
              <ul className="list-disc list-inside text-steel-600 mb-6 space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>Updating the "Last updated" date</li>
                <li>Sending email notifications for material changes</li>
                <li>Providing notice through our website or services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">11. Contact Information</h2>
              <p className="text-steel-600 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-steel-50 p-6 rounded-lg">
                <p className="text-steel-600 mb-2"><strong>MetronixSystem Privacy Office</strong></p>
                <p className="text-steel-600 mb-2">Email: privacy@metronixsystem.com</p>
                <p className="text-steel-600 mb-2">Phone: +91 9924428852</p>
                <p className="text-steel-600 mb-2">Address: surat, Gujarat, India</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-steel-800 mb-6">12. Governing Law</h2>
              <p className="text-steel-600 mb-6">
                This Privacy Policy is governed by the laws of the State of New York and applicable federal laws of the United States, without regard to conflict of law principles. For residents of the European Union, this policy also complies with the General Data Protection Regulation (GDPR).
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-steel-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-center">
                Contact Us
              </Link>
              <Link href="/terms" className="btn-secondary text-center">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 