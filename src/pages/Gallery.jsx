// src/pages/Gallery.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cake1 from '../assets/cake1.png';
import cake2 from '../assets/cake2.png';
import cake3 from '../assets/cake3.png';
import cake4 from '../assets/cake4.png';
import cake5 from '../assets/cake5.png';
import cake6 from '../assets/cake6.png';
import cake7 from '../assets/cake7.png';
import cake8 from '../assets/cake8.png';

const creations = [
  // Wedding Cakes
  { category: 'Wedding', name: 'Classic Rose Tier', image: cake1, description: 'Elegant 3-tier wedding cake with buttercream roses' },
  { category: 'Wedding', name: 'Elegant Gold Leaf', image: cake2, description: 'Modern wedding cake with edible gold leaf accents' },
  { category: 'Wedding', name: 'Rustic Wildflower Dream', image: cake3, description: 'Naked cake with fresh wildflowers and greenery' },
  { category: 'Wedding', name: 'Vintage Lace Elegance', image: cake4, description: 'Fondant lace detailing with pearl accents' },
  { category: 'Wedding', name: 'Modern Minimalist', image: cake5, description: 'Clean lines with geometric fondant decorations' },
  { category: 'Wedding', name: 'Traditional Igbo Wedding', image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?q=80&w=1974', description: 'Multi-tier cake with traditional Igbo motifs' },

  // Birthday Cakes
  { category: 'Birthday', name: 'Chocolate Drip Delight', image: cake6, description: 'Rich chocolate cake with chocolate ganache drip' },
  { category: 'Birthday', name: 'Pastel Rainbow Swirl', image: cake7, description: 'Fun rainbow buttercream with colorful sprinkles' },
  { category: 'Birthday', name: 'Funfetti Celebration', image: cake8, description: 'Classic funfetti with rainbow chip frosting' },
  { category: 'Birthday', name: 'Unicorn Fantasy', image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=1974', description: 'Magical unicorn cake with edible glitter' },
  { category: 'Birthday', name: 'Superhero Adventure', image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c8b7?q=80&w=1974', description: 'Custom superhero cake for kids' },
  { category: 'Birthday', name: '21st Birthday Extravaganza', image: 'https://images.unsplash.com/photo-1604413191066-4dd207f682d4?q=80&w=1974', description: 'Gold and black themed celebration cake' },

  // Traditional Nigerian Cakes
  { category: 'Traditional', name: 'Ụmụada Coming of Age Cake', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1974', description: 'Elegant cake for Igbo coming of age ceremonies' },
  { category: 'Traditional', name: 'New Yam Festival Cake', image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=1974', description: 'Cake featuring yam motifs and traditional colors' },
  { category: 'Traditional', name: 'Ọmụgwọ Outdooring Cake', image: 'https://images.unsplash.com/photo-1565191499169-e771a337c443?q=80&w=1974', description: 'Baby-themed cake for naming ceremonies' },
  { category: 'Traditional', name: 'Christmas Fruit Cake', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1974', description: 'Rich Nigerian Christmas cake with fruits and nuts' },

  // Cupcakes & Small Treats
  { category: 'Cupcakes', name: 'Red Velvet Kiss', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1974', description: 'Classic red velvet with cream cheese frosting' },
  { category: 'Cupcakes', name: 'Assorted Gourmet Selection', image: 'https://images.unsplash.com/photo-1604413191066-4dd207f682d4?q=80&w=1974', description: 'Mixed flavors for any occasion' },
  { category: 'Cupcakes', name: 'Lemon Blueberry Bliss', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1974', description: 'Tangy lemon with fresh blueberries' },
  { category: 'Cupcakes', name: 'Puff Puff Cupcakes', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1974', description: 'Nigerian puff puff inspired cupcakes' },

  // Corporate & Special Events
  { category: 'Corporate', name: 'Corporate Branding Cake', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1974', description: 'Custom cakes for business events and launches' },
  { category: 'Corporate', name: 'Conference Dessert Table', image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?q=80&w=1974', description: 'Complete dessert catering for events' },
  { category: 'Corporate', name: 'Team Building Treats', image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c8b7?q=80&w=1974', description: 'Fun themed treats for corporate gatherings' },
];

const categories = ['All', 'Wedding', 'Birthday', 'Traditional', 'Cupcakes', 'Corporate'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCreations = selectedCategory === 'All'
    ? creations
    : creations.filter(item => item.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-off-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-heading text-brand-berry mb-4">Our Creations</h1>
          <p className="max-w-2xl mx-auto font-body text-lg text-brand-brown mb-8">
            A gallery of our favorite bakes. Each one tells a story of celebration, love, and sweet moments.
            From traditional Nigerian ceremonies to modern celebrations, we create memories that last forever.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-body font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-brand-berry text-white shadow-lg'
                  : 'bg-white text-brand-brown hover:bg-brand-peach hover:text-brand-berry'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredCreations.map((item, index) => (
              <motion.div
                key={`${selectedCategory}-${index}`}
                className="group relative overflow-hidden rounded-lg shadow-lg shadow-soft bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 25px 30px -5px rgba(138, 48, 79, 0.2), 0 10px 15px -6px rgba(138, 48, 79, 0.15)' }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-body text-brand-brown text-xl font-semibold">{item.name}</h3>
                    <span className="bg-brand-peach text-brand-berry px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                  <p className="font-body text-brand-brown/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover overlay with description */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-body text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="font-body text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16 bg-brand-peach p-8 rounded-lg"
        >
          <h2 className="font-heading text-3xl text-brand-berry mb-4">Ready to Create Something Special?</h2>
          <p className="font-body text-brand-brown mb-6 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We specialize in custom designs for any occasion,
            incorporating your vision, colors, and theme into a one-of-a-kind creation.
          </p>
          <a href="/contact" className="inline-block bg-brand-berry text-white font-body font-semibold py-3 px-8 rounded-full hover:bg-brand-brown transition-all duration-300 transform hover:scale-105">
            Start Your Custom Order
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Gallery;
