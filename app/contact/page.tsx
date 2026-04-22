import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with The Rameshwaram for premium wedding and event planning in Bhopal. Let us help you plan your perfect event.',
};

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gold/5 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Ready to turn your vision into reality? We are here to help.
        </p>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold text-2xl">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 font-serif">Office Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      123, Premium Plaza, Arera Colony,<br />
                      Bhopal, Madhya Pradesh 462016, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold text-2xl">
                    📞
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 font-serif">Phone Number</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 755 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold text-2xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 font-serif">Email Address</h3>
                    <p className="text-gray-600">info@therameshwaram.com</p>
                    <p className="text-gray-600">sales@therameshwaram.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold text-2xl">
                    💬
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 font-serif">WhatsApp</h3>
                    <p className="text-gray-600 mb-4">Chat with us instantly for a quick quote.</p>
                    <a 
                      href="https://wa.me/919876543210?text=Hi, I want to plan an event in Bhopal."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-500 text-white px-6 py-2 rounded-full font-bold hover:bg-green-600 transition-all"
                    >
                      WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 w-full h-[300px] bg-gray-200 rounded-3xl overflow-hidden flex items-center justify-center relative shadow-inner">
                <p className="text-gray-500 font-medium">Map Placeholder - Arera Colony, Bhopal</p>
                {/* Real Google Maps iframe could be embedded here */}
                <div className="absolute inset-0 bg-gold/5 pointer-events-none"></div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
