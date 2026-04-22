import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />

      {/* SEO Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Your Trusted Wedding Planner in Bhopal</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Welcome to <strong>The Rameshwaram</strong>, the leading luxury wedding and event planner in Bhopal, Madhya Pradesh.
            We specialize in creating unforgettable experiences, from breathtaking decorations to seamless coordination.
            Whether you are looking for the best wedding decoration services in Bhopal or comprehensive event management
            for corporate functions and catering, our team of experts is dedicated to bringing your vision to life with
            unparalleled elegance and professional expertise.
          </p>
        </div>
      </section>

      <ServicesSection limit={4} />

      <section className="py-24 bg-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Why Choose The Rameshwaram?</h2>
              <div className="space-y-6">
                {[
                  { title: 'Local Expertise', desc: 'Deep roots in Bhopal with access to the best vendors and venues.' },
                  { title: 'Customized Designs', desc: 'No cookie-cutter events. Every design is tailored to your story.' },
                  { title: 'Stress-Free Experience', desc: 'We handle the chaos, you enjoy the celebration.' },
                  { title: 'Premium Quality', desc: 'Commitment to the highest standards of service and aesthetics.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Wedding Planning Excellence in Bhopal - The Rameshwaram"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Portfolio Preview</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
        <PortfolioGallery limit={3} />
        <div className="text-center pb-24">
          <Link href="/portfolio" className="text-gold font-bold text-lg hover:underline underline-offset-8">
            View Full Gallery &rarr;
          </Link>
        </div>
      </div>

      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}
