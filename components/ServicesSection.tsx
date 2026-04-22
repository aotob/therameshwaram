import Link from 'next/link';

const services = [
  {
    title: 'Wedding Planning',
    description: 'Comprehensive planning from concept to execution. We handle every detail so you can enjoy your special day.',
    icon: '💍',
  },
  {
    title: 'Decoration & Styling',
    description: 'Transforming venues into magical spaces with our exquisite floral and themed decoration services.',
    icon: '✨',
  },
  {
    title: 'Catering Services',
    description: 'A culinary journey featuring local delicacies and international cuisines, served with perfection.',
    icon: '🍽️',
  },
  {
    title: 'Corporate Events',
    description: 'Professional event management for conferences, product launches, and gala dinners in Bhopal.',
    icon: '💼',
  },
];

const ServicesSection = ({ limit }: { limit?: number }) => {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            Excellence in every detail, providing the finest wedding decoration services in Bhopal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gold/10 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">{service.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">
                {service.description}
              </p>
              <Link
                href="/services"
                className="text-gold font-semibold flex items-center hover:underline"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
