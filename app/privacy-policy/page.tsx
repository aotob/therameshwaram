import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for The Rameshwaram - Premier luxury wedding and event planner in Bhopal. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gold text-lg">
            The Rameshwaram — Luxury Wedding & Event Planner in Bhopal
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gold/10 text-gray-700 space-y-8">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b border-gold/20">
              1. Introduction
            </h2>
            <p className="leading-relaxed">
              Welcome to <strong>The Rameshwaram</strong> ("we," "our," or "us"). We are dedicated to delivering exceptional event and wedding planning services in Bhopal, Madhya Pradesh. We value your trust and are committed to protecting your personal information and respecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal details when you visit our website or interact with our event planning services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b border-gold/20">
              2. Information We Collect
            </h2>
            <p className="leading-relaxed mb-4">
              When you inquire about our wedding planner or event management services in Bhopal, we may collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>Contact Information:</strong> Full name, email address, phone number, and WhatsApp contact details.</li>
              <li><strong>Event Details:</strong> Event date, preferred venue locations in Bhopal, estimated guest count, budget preferences, and specific decoration or catering requirements.</li>
              <li><strong>Communication Records:</strong> Messages, feedback, or inquiries sent through our contact forms or via direct communication (e.g., WhatsApp).</li>
              <li><strong>Technical Data:</strong> Standard web analytics such as IP address, browser type, and page usage data collected to improve website performance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b border-gold/20">
              3. How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-4">
              The Rameshwaram uses the information collected for specific business purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Providing customized consultations and quotations for wedding and event decoration services in Bhopal.</li>
              <li>Initiating direct communication via WhatsApp or telephone to discuss your event requirements.</li>
              <li>Coordinating with verified vendor partners (e.g., caterers, florists, venue management) strictly for event execution.</li>
              <li>Enhancing user experience and optimizing our website functionality.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b border-gold/20">
              4. Information Sharing and Disclosure
            </h2>
            <p className="leading-relaxed mb-4">
              We respect your privacy and do not sell, rent, or trade your personal data to third parties. We may share limited information only under the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>Event Service Providers:</strong> Trusted third-party vendors and partners in Bhopal who assist us in delivering wedding planning and decoration services, bound by confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> If required by law, regulation, or legal process to protect our rights or the safety of our clients.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b border-gold/20">
              5. Data Security
            </h2>
            <p className="leading-relaxed">
              We employ reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, alteration, or disclosure. However, please note that no internet transmission or electronic storage system is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b border-gold/20">
              6. Your Rights & Choices
            </h2>
            <p className="leading-relaxed mb-4">
              You have the right to access, update, or request the deletion of your personal data held by us. You can also opt out of receiving promotional communications at any time.
            </p>
            <p className="leading-relaxed">
              If you have any questions or wishes regarding your personal data, please contact us at <a href="mailto:info@therameshwaram.com" className="text-gold font-medium hover:underline">info@therameshwaram.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b border-gold/20">
              7. Contact Us
            </h2>
            <p className="leading-relaxed mb-4">
              If you have any questions regarding this Privacy Policy or our services as a wedding planner in Bhopal, please reach out to us:
            </p>
            <div className="bg-cream/50 p-6 rounded-xl border border-gold/20 space-y-2 text-gray-800">
              <p className="font-serif font-bold text-lg text-gold">The Rameshwaram</p>
              <p>Bhopal, Madhya Pradesh, India</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@therameshwaram.com</p>
            </div>
          </div>

          <div className="pt-6 text-center border-t border-gray-100">
            <Link
              href="/contact"
              className="inline-block bg-gold text-white px-8 py-3 rounded-full font-medium hover:bg-gold/90 transition-colors shadow-sm"
            >
              Contact Our Event Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
