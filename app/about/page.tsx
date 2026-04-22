import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about The Rameshwaram, the premier luxury wedding and event planning brand in Bhopal.',
};

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
            alt="The Rameshwaram Story - Luxury Events in Bhopal"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-gold font-medium tracking-widest uppercase">The Rameshwaram</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">A Legacy of Elegance</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded with a vision to redefine luxury events in Bhopal, <strong>The Rameshwaram</strong> has grown from a passionate startup to the city's most trusted event planning brand. Our journey began with a simple belief: every celebration should be as unique as the people behind it.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With over a decade of experience in the heart of Madhya Pradesh, we have developed a deep understanding of local traditions while embracing global design trends. This fusion allows us to create events that are culturally rich yet modern and sophisticated.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                As the leading <strong>wedding planner in Bhopal</strong>, we take pride in our meticulous attention to detail, our network of premium vendors, and our unwavering commitment to excellence. For us, planning an event isn't just a job—it's an art form.
              </p>
            </div>
            <div className="flex-1 w-full relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
                alt="The Rameshwaram Team - Professional Wedding Planner in Bhopal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-24 bg-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gold/10">
              <div className="text-4xl mb-6">💎</div>
              <h3 className="text-2xl font-serif font-bold mb-4">Excellence</h3>
              <p className="text-gray-600 italic">"We strive for perfection in every detail, ensuring the highest standards of quality."</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gold/10">
              <div className="text-4xl mb-6">🎨</div>
              <h3 className="text-2xl font-serif font-bold mb-4">Creativity</h3>
              <p className="text-gray-600 italic">"Innovation is at our heart. We create bespoke experiences that inspire and delight."</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gold/10">
              <div className="text-4xl mb-6">🤝</div>
              <h3 className="text-2xl font-serif font-bold mb-4">Integrity</h3>
              <p className="text-gray-600 italic">"Transparency and trust are the foundations of our relationships with clients."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">Bhopal's Premier Event Experts</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Our deep-rooted presence in Bhopal allows us to navigate the city's unique venues and vendor networks with ease. We don't just plan events; we create experiences that resonate with the spirit of Bhopal, making us the preferred <strong>event planner in Bhopal</strong> for discerning families and businesses.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-white px-10 py-4 rounded-full font-bold hover:bg-gold/90 transition-all shadow-lg"
          >
            Start Your Journey With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
