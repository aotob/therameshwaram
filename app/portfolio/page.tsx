import { Metadata } from 'next';
import PortfolioGallery from '@/components/PortfolioGallery';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Our Portfolio',
  description: 'View our stunning collection of weddings, receptions, and corporate events organized in Bhopal.',
};

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen pt-20">
      <section className="bg-gold/5 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4">Our Masterpieces</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4 italic">
          "Capturing the essence of celebration through lens and design."
        </p>
      </section>

      <PortfolioGallery />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-12">More Than Just Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl mb-4">500+</div>
              <h3 className="text-xl font-bold mb-2">Events Managed</h3>
              <p className="text-gray-600">A track record of excellence in Bhopal and beyond.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">100%</div>
              <h3 className="text-xl font-bold mb-2">Happy Clients</h3>
              <p className="text-gray-600">We prioritize client satisfaction above all else.</p>
            </div>
            <div>
              <div className="text-4xl mb-4">10+</div>
              <h3 className="text-xl font-bold mb-2">Years Experience</h3>
              <p className="text-gray-600">A decade of crafting luxury experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
