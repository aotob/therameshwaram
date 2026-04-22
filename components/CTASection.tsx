import Link from 'next/link';
import Image from 'next/image';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 z-0" />
      <div className="absolute inset-0 opacity-30 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Event Celebration background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
          Ready to Start Planning Your <span className="text-gold">Perfect Event?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
          Let's create something extraordinary together. Contact Bhopal's most trusted event planning team today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-gold text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-all shadow-lg"
          >
            Schedule a Consultation
          </Link>
          <a
            href="https://wa.me/919876543210"
            className="bg-green-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
