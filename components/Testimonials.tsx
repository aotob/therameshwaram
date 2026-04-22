const testimonials = [
  {
    name: 'Anjali Sharma',
    role: 'Bride',
    content: 'The Rameshwaram made my dream wedding come true. Their attention to detail in decoration was absolutely breathtaking!',
    stars: 5,
  },
  {
    name: 'Vikram Mehta',
    role: 'Corporate Client',
    content: 'Very professional event planners in Bhopal. Our annual gala was organized flawlessly. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Priya Singh',
    role: 'Mother of the Groom',
    content: 'Exceptional catering services. Every guest was praising the food and the service. Thank you for making it so special.',
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm relative italic">
              <div className="text-gold text-4xl mb-4 leading-none">“</div>
              <p className="text-gray-700 mb-6 relative z-10">{t.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold mr-4">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <div className="flex text-gold mt-4">
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
