// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSlideshow from '../components/HeroSlideshow';
import TestimonialsSlider from '../components/TestimonialsSlider';
import ZugiProfile from '../assets/zugi.png';
import cake1 from '../assets/cake1.png';
import cake2 from '../assets/cake2.png';
import cake3 from '../assets/cake3.png';
import cake4 from '../assets/cake4.png';

// Let's create a reusable component for our sections to keep the code clean
const Section = ({ children, className = '' }) => (
  <motion.section
    className={`py-16 md:py-24 ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </motion.section>
);

const Home = () => {
  const featuredTreats = [
    { name: 'Signature Chocolate Cake', image: cake1, price: '₦25,000' },
    { name: 'Red Velvet Cupcakes', image: cake2, price: '₦8,000/dozen' },
    { name: 'Wedding Cake Tier', image: cake3, price: '₦150,000' },
    { name: 'French Macarons', image: cake4, price: '₦12,000/dozen' },
  ];

  const whyChooseUs = [
    {
      icon: '🎨',
      title: 'Custom Designs',
      description: 'Every creation is tailored to your vision, ensuring it\'s as unique as your special occasion.'
    },
    {
      icon: '🌿',
      title: 'Premium Ingredients',
      description: 'Only the finest, freshest ingredients go into every bake, guaranteeing exceptional taste.'
    },
    {
      icon: '⭐',
      title: 'Attention to Detail',
      description: 'From concept to creation, every detail is carefully crafted to perfection.'
    }
  ];

  return (
    <div className="bg-brand-off-white text-brand-brown">
      {/* 1. Hero Section */}
      <HeroSlideshow />

      {/* 2. About Zugi (Brief) */}
      <Section className="bg-white">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-8 border-brand-peach">
              <img src={ZugiProfile} alt="Zugi, the baker" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <div className="md:w-2/3 text-center md:text-left">
            <motion.h2
              className="font-heading text-4xl text-brand-berry mb-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A Little Slice of Heaven
            </motion.h2>
            <motion.p
              className="font-body text-lg text-brand-brown mb-6 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hi, I'm Zugi! Welcome to my world of sugar and spice. Every cake I bake is a piece of my heart, crafted with the finest ingredients and a dash of magic to make your special moments unforgettable.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/about" className="inline-block bg-brand-berry text-white font-body font-semibold py-3 px-6 rounded-full hover:bg-brand-brown transition-all duration-300 transform hover:scale-105 shadow-soft">
                Read My Story &rarr;
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 3. Featured Treats with Background Image */}
      <Section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-heading text-center mb-12 text-white drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Most Loved Treats
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredTreats.map((treat, index) => (
              <motion.div
                key={treat.name}
                className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={treat.image}
                    alt={treat.name}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-body font-semibold text-brand-brown mb-2">{treat.name}</h3>
                  <p className="font-body text-brand-berry font-bold">{treat.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/menu">
              <button className="bg-brand-gold text-brand-brown font-body font-bold text-xl py-4 px-12 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50 animate-pulse">
                View Full Menu
              </button>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* 4. Why Choose Us */}
      <Section className="bg-white">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center mb-12 text-brand-berry"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Zugi's Treats?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center p-8 rounded-lg bg-gradient-to-br from-brand-peach to-brand-pink hover:from-brand-pink hover:to-brand-peach transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-20 h-20 bg-brand-berry rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                {item.icon}
              </div>
              <h3 className="font-heading text-2xl text-brand-brown mb-4">{item.title}</h3>
              <p className="font-body text-brand-brown/80 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. Testimonials */}
      <Section className="bg-brand-peach">
        <motion.h2
          className="text-4xl md:text-5xl font-heading text-center mb-12 text-brand-berry"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sweet Words From Our Clients
        </motion.h2>
        <TestimonialsSlider />
      </Section>

      {/* 6. Call to Action */}
      <Section className="relative text-center py-20 overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1974&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-white drop-shadow-lg">Ready to Create Something Special?</h2>
          <p className="text-xl font-body mb-8 max-w-2xl mx-auto text-white drop-shadow-md">
            Let's turn your vision into a delicious reality. Contact me today to discuss your custom cake or treat order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-white text-brand-berry font-body font-bold py-4 px-8 rounded-full hover:bg-brand-gold transition-all duration-300 transform hover:scale-105 shadow-xl">
                Get Your Quote
              </button>
            </Link>
            <Link to="/gallery">
              <button className="bg-transparent border-2 border-white text-white font-body font-bold py-4 px-8 rounded-full hover:bg-white hover:text-brand-berry transition-all duration-300 transform hover:scale-105">
                View Gallery
              </button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default Home;
