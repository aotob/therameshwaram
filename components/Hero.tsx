import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Wedding Venue in Bhopal"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Luxury Wedding Planner <br /><span className="text-gold">in Bhopal</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
          Crafting timeless moments and extraordinary celebrations tailored to your unique love story.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-gold text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gold/90 transition-all shadow-lg hover:shadow-gold/20"
          >
            Get a Quote
          </Link>
          <Link
            href="/portfolio"
            className="w-full sm:w-auto border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
