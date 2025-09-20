// src/components/HeroSlideshow.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cake1 from '../assets/cake1.png';
import cake2 from '../assets/cake2.png';
import cake3 from '../assets/cake3.png';
import cake4 from '../assets/cake4.png';
import cake5 from '../assets/cake5.png';
import cake6 from '../assets/cake6.png';

const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: cake1,
      title: "Signature Chocolate Fudge Cake",
      subtitle: "Rich, decadent, and utterly irresistible"
    },
    {
      image: cake2,
      title: "Red Velvet Cupcakes",
      subtitle: "Classic elegance in every bite"
    },
    {
      image: cake3,
      title: "Classic Wedding Tier",
      subtitle: "Your perfect day, beautifully baked"
    },
    {
      image: cake4,
      title: "Assorted French Macarons",
      subtitle: "Delicate, colorful, and oh so French"
    },
    {
      image: cake5,
      title: "Birthday Celebration Cake",
      subtitle: "Making memories sweeter"
    },
    {
      image: cake6,
      title: "Custom Celebration Cake",
      subtitle: "Your vision, our expertise"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[80vh] min-h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          key={`title-${currentIndex}`}
          className="text-4xl md:text-6xl lg:text-7xl font-heading mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {slides[currentIndex].title}
        </motion.h1>
        <motion.p
          key={`subtitle-${currentIndex}`}
          className="text-lg md:text-xl font-body max-w-2xl mb-8 drop-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {slides[currentIndex].subtitle}
        </motion.p>

        {/* Slide Indicators (non-clickable) */}
        <div className="flex space-x-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlideshow;
