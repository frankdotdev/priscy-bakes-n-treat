// src/components/TestimonialsSlider.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Zugi's cakes are absolutely divine! The attention to detail and the flavors are unmatched. My wedding cake was the talk of the town!",
      author: '— Chioma N.',
      rating: 5,
      location: 'Lagos, Nigeria'
    },
    {
      quote: "I ordered a birthday cake for my daughter and it was perfect! The design was exactly what I wanted, and it tasted amazing. Highly recommend!",
      author: '— Adebayo O.',
      rating: 5,
      location: 'Abuja, Nigeria'
    },
    {
      quote: "As an Igbo man, I appreciate the cultural touch Zugi brings to her cakes. The 'Akara' themed cake for my mother's birthday was incredible!",
      author: '— Chukwudi E.',
      rating: 5,
      location: 'Enugu, Nigeria'
    },
    {
      quote: "Professional service from start to finish. The cake arrived on time and looked even better than the pictures. Worth every naira!",
      author: '— Ngozi A.',
      rating: 5,
      location: 'Port Harcourt, Nigeria'
    },
    {
      quote: "Zugi captured my vision perfectly! The custom design for my anniversary was breathtaking. She's truly an artist with cakes.",
      author: '— Ibrahim K.',
      rating: 5,
      location: 'Kano, Nigeria'
    },
    {
      quote: "The best cake I've ever had in Nigeria! The quality, taste, and presentation are world-class. Zugi is the real deal!",
      author: '— Fatima S.',
      rating: 5,
      location: 'Kaduna, Nigeria'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="bg-white p-6 md:p-8 lg:p-12 rounded-2xl shadow-xl border border-brand-peach/20"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center text-center">
              <FaQuoteLeft className="text-3xl md:text-4xl text-brand-berry mb-4 md:mb-6 opacity-20" />

              <blockquote className="font-body text-base md:text-lg lg:text-xl text-brand-brown italic mb-4 md:mb-6 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex items-center mb-3 md:mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-brand-gold text-base md:text-lg" />
                ))}
              </div>

              <cite className="font-body font-bold text-brand-berry text-base md:text-lg">
                {testimonials[currentIndex].author}
              </cite>
              <p className="font-body text-xs md:text-sm text-brand-brown/70 mt-1">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-6 md:mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-brand-berry scale-125'
                : 'bg-brand-peach hover:bg-brand-berry/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile to prevent overflow */}
      <button
        onClick={() => goToTestimonial(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-brand-peach hover:bg-brand-berry text-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg hidden md:block"
        aria-label="Previous testimonial"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => goToTestimonial(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-brand-peach hover:bg-brand-berry text-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg hidden md:block"
        aria-label="Next testimonial"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default TestimonialsSlider;
