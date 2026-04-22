'use client';

import { useState } from 'react';
import Image from 'next/image';

const portfolioItems = [
  { id: 1, category: 'Weddings', title: 'Royal Palace Wedding', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, category: 'Receptions', title: 'Elegant Evening Gala', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, category: 'Corporate', title: 'Tech Summit 2023', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, category: 'Weddings', title: 'Traditional Mehndi', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 5, category: 'Receptions', title: 'Luxury Ballroom Event', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 6, category: 'Corporate', title: 'Annual Awards Night', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const PortfolioGallery = ({ limit }: { limit?: number }) => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Weddings', 'Receptions', 'Corporate'];
  
  const filteredItems = filter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          
          {!limit && (
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full border-2 transition-all ${
                    filter === cat 
                      ? 'bg-gold border-gold text-white' 
                      : 'border-gray-200 text-gray-600 hover:border-gold hover:text-gold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-gold font-semibold mb-1">{item.category}</p>
                <h3 className="text-white text-xl font-bold font-serif">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
