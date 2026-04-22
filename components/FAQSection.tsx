'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is the best time to start planning a wedding in Bhopal?',
    answer: 'We recommend starting at least 6-9 months in advance, especially if you are looking for popular venues during the peak wedding season (November to February). However, we also handle last-minute bookings based on availability.',
  },
  {
    question: 'Do you offer customized wedding planning packages?',
    answer: 'Absolutely! Every wedding is unique. We offer tailor-made packages that fit your specific requirements, style, and budget. From partial planning to full-service management, we cover it all.',
  },
  {
    question: 'Can you handle out-of-town or destination weddings?',
    answer: 'Yes, while we are the top wedding planners in Bhopal, we have successfully managed weddings in Indore, Jabalpur, and other locations across Madhya Pradesh.',
  },
  {
    question: 'What services are included in your wedding decoration package?',
    answer: 'Our decoration services include floral arrangements, stage design, entrance decor, lighting, seating arrangements, and theme-based styling that reflects your personality.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gold/20 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-gold/5 hover:bg-gold/10 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-gold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
