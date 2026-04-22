import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our luxury wedding planning, decoration, catering, and corporate event services in Bhopal.',
};

const services = [
  {
    id: 'wedding-planning',
    title: 'Luxury Wedding Planning in Bhopal',
    description: 'Planning a wedding is one of the most significant milestones in a person\'s life, but it can also be incredibly overwhelming without the right guidance. At The Rameshwaram, we believe that the journey to your big day should be as joyful and stress-free as the celebration itself. As the leading luxury wedding planner in Bhopal, we offer comprehensive services that cover every imaginable detail. From the initial concept and venue selection in the beautiful landscapes of Madhya Pradesh to meticulous vendor management and day-of coordination, we are with you every step of the way. Our team understands the deep cultural traditions of the region while keeping a finger on the pulse of global wedding trends. We specialize in creating a personalized roadmap that respects your budget and reflects your unique love story. Whether you envision a grand royal palace wedding or a contemporary intimate gathering, our expertise ensures that every moment is executed with flawless precision and elegance. We handle the complexities of guest logistics, timeline management, and on-site supervision, allowing you and your family to fully immerse yourselves in the magic of the occasion.',
    bullets: [
      'Full-service wedding coordination',
      'Venue scouting and booking',
      'Vendor management (Photography, Makeup, etc.)',
      'Timeline and guest list management',
      'On-site event supervision',
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'decoration-styling',
    title: 'Wedding Decoration Services Bhopal',
    description: 'The visual ambiance of an event sets the tone for the entire experience, and at The Rameshwaram, we are masters of atmospheric transformation. As the premier provider of wedding decoration services in Bhopal, we pride ourselves on our ability to turn ordinary venues into extraordinary, immersive environments that leave your guests breathless. Our design philosophy blends artistic creativity with technical precision. Whether you are dreaming of a grand, royal-themed palace wedding with intricate floral installations, a sleek and minimalist modern aesthetic, or a vibrant, color-drenched traditional celebration, our team of expert stylists and floral designers brings your vision to life with unparalleled detail. We go far beyond simple floral arrangements; we curate every element of the space, including bespoke stage designs, enchanting mandaps, grand entrance walkways, and sophisticated table styling. By utilizing premium materials, custom-built props, and innovative lighting techniques, we create a multi-dimensional experience that is as beautiful in person as it is in photographs. Every corner of your venue is treated as a canvas, ensuring a cohesive and high-end look that defines luxury in the heart of Bhopal.',
    bullets: [
      'Thematic floral arrangements',
      'Stage and Mandap design',
      'Custom lighting and ambiance',
      'Entrance and walkway decor',
      'Furniture and upholstery styling',
    ],
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b33e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'catering-services',
    title: 'Catering Services in Bhopal',
    description: 'Exquisite food is often the most remembered element of any great celebration, and at The Rameshwaram, we place it at the very heart of our service. Our catering services in Bhopal are designed to take your guests on a spectacular culinary journey that honors both tradition and innovation. We specialize in a diverse range of cuisines, from the authentic and rich flavors of traditional Bhopali and Nawabi dishes to sophisticated international menus featuring Continental, Oriental, and Pan-Asian delicacies. Our world-class chefs use only the finest, freshest locally-sourced ingredients to ensure that every dish is a masterpiece of flavor and presentation. We believe that catering is not just about the food, but about the entire experience. This is why we provide professional, impeccably dressed serving staff, elegant buffet setups, and interactive live cooking stations that add an element of entertainment to your event. From intimate family dinners to grand wedding banquets for thousands, we customize every menu to suit your preferences and dietary requirements. Our commitment to hygiene, quality, and artistic food presentation ensures that your wedding or corporate event in Bhopal is a truly memorable gastronomic affair for every guest in attendance.',
    bullets: [
      'Customizable multi-cuisine menus',
      'Live cooking stations',
      'Professional serving staff',
      'Premium crockery and cutlery',
      'High standards of hygiene and quality',
    ],
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'corporate-events',
    title: 'Corporate Event Planner in Bhopal',
    description: 'In the professional world, the execution of an event is a direct reflection of your brand’s prestige and values. As a leading corporate event planner in Bhopal, The Rameshwaram offers the strategic planning and seamless execution required to make your business gatherings truly impactful. We understand that corporate events demand a high level of professionalism, technical reliability, and attention to detail. Whether you are planning a high-stakes product launch, an annual gala awards night, an industry-leading conference, or an intimate executive seminar, our team provides comprehensive end-to-end management solutions. We handle all aspects of logistics, from venue selection and high-tech audiovisual setups to hospitality management and guest registrations. Our creative team also works to ensure that the event’s design and flow align perfectly with your corporate identity and objectives. By entrusting us with the complexities of event organization, your team can focus on networking and achieving your business goals. We pride ourselves on our punctuality, transparent communication, and ability to deliver polished, high-profile events that resonate with your stakeholders and leave a lasting professional impression in the Bhopal business community.',
    bullets: [
      'Conferences and Seminars',
      'Product Launch events',
      'Annual Gala Dinners',
      'Brand activation setups',
      'Professional AV and stage management',
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gold/10 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Tailored event solutions for life's most precious moments.
        </p>
      </section>

      {/* Detailed Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
              >
                <div className="flex-1 w-full">
                  <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={`${service.title} - The Rameshwaram`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-gold mt-1 text-xl">✓</span>
                        <span className="text-gray-700 font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-block bg-gold text-white px-8 py-3 rounded-full font-bold hover:bg-gold/90 transition-all"
                  >
                    Inquire About {service.title.split(' ')[0]}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-center">
        <h2 className="text-3xl font-serif text-white mb-8">Need a Custom Event Solution?</h2>
        <Link
          href="/contact"
          className="bg-gold text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gold/90 transition-all"
        >
          Talk to Our Experts
        </Link>
      </section>
    </div>
  );
}
