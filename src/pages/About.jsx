import React from 'react';
import { motion } from 'framer-motion';
import PriscyProfile from '../assets/priscy.png';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-off-white min-h-screen py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Image Section */}
          <motion.div
            className="lg:w-2/5 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-brand-peach rounded-full transform rotate-6 shadow-soft"></div>
              <div className="absolute inset-0 bg-brand-pink rounded-full transform -rotate-6 shadow-soft"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-white shadow-glow">
                <img src={PriscyProfile} alt="Priscy, the baker" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Story Section */}
          <motion.div
            className="lg:w-3/5 text-center lg:text-left"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl text-brand-berry mb-6">My Story</h1>
            <div className="font-body text-lg text-brand-brown space-y-6 leading-relaxed">
              <p>
                In the heart of Lagos, where the rhythm of city life meets the warmth of Nigerian hospitality, I embarked on a culinary journey that would define my life's passion. Priscy, they call me—a name that echoes through the bustling markets and quiet kitchens where dreams are baked into reality.
              </p>
              <p>
                My story begins not in grand halls, but in the humble embrace of family kitchens, where the alchemy of flour, sugar, and love transformed simple ingredients into symphonies of flavor. From the tender age when I first cracked an egg into a bowl, I knew that baking was more than a craft—it was an art form, a language of the soul that speaks directly to the heart.
              </p>
              <p>
                Years of dedication have sculpted me into a master artisan, where each cake I create is a testament to precision, creativity, and an unwavering commitment to excellence. I source only the finest ingredients—velvet-smooth chocolates from distant lands, butter so pure it whispers of pastoral meadows, and fruits plucked at the peak of ripeness. Every creation is a masterpiece, designed not just to delight the palate, but to capture moments of joy, love, and celebration.
              </p>
              <p>
                "Taste the love in every bite"—this is my creed, my promise to you. Whether it's the towering elegance of a wedding cake, the whimsical charm of a birthday masterpiece, or the delicate sophistication of French pastries, each piece carries the essence of my passion. I have had the privilege of crafting desserts for grand celebrations and intimate gatherings alike, each one a unique expression of the client's vision brought to life through my skilled hands.
              </p>
              <p>
                Beyond the kitchen, I find inspiration in the vibrant tapestry of Lagos life—the colorful markets, the warm conversations, the shared laughter over a perfectly baked treat. When I'm not orchestrating culinary symphonies, you'll find me exploring new flavor profiles, mentoring aspiring bakers, or simply savoring a quiet moment with a cup of perfectly brewed tea.
              </p>
              <p>
                Priscy's Bakes 'n' Treats is more than a business; it's a legacy of love, craftsmanship, and the joy of creating something beautiful. Thank you for allowing me to be part of your special moments—I look forward to crafting memories that will linger long after the last crumb is savored.
              </p>
            </div>

            {/* New Blog Section */}
            <div className="mt-16">
              <h2 className="font-heading text-4xl text-brand-berry mb-8 text-center">From the Oven: Baking Tips & Recipes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="font-semibold text-xl mb-2">Perfecting Your Buttercream</h3>
                  <p className="text-brand-brown leading-relaxed mb-4">Learn the secrets to smooth, creamy buttercream that holds its shape and tastes divine.</p>
                  <a href="/buttercream-tips.html" target="_blank" className="text-brand-berry font-semibold hover:underline">Read More &rarr;</a>
                </article>
                <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="font-semibold text-xl mb-2">Macaron Mastery</h3>
                  <p className="text-brand-brown leading-relaxed mb-4">Step-by-step guide to creating delicate, colorful macarons that impress every time.</p>
                  <a href="/macaron-mastery.html" target="_blank" className="text-brand-berry font-semibold hover:underline">Read More &rarr;</a>
                </article>
                <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="font-semibold text-xl mb-2">Seasonal Cake Flavors</h3>
                  <p className="text-brand-brown leading-relaxed mb-4">Explore unique cake flavors inspired by the seasons to delight your guests.</p>
                  <a href="/seasonal-flavors.html" target="_blank" className="text-brand-berry font-semibold hover:underline">Read More &rarr;</a>
                </article>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default About;
