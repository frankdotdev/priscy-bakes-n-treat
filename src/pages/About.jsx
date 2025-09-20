// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ZugiProfile from '../assets/zugi.png';

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
                <img src={ZugiProfile} alt="Zugi, the baker" className="w-full h-full object-cover" />
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
                Hello! I'm Zugi, the heart and hands behind every creation you see. My journey into baking wasn't a straight line—it was a winding path paved with flour, sugar, and a whole lot of passion. It all started in my grandmother's kitchen, where the scent of freshly baked bread was my favorite perfume and licking the brownie batter spoon was the ultimate treat.
              </p>
              <p>
                What began as a hobby soon blossomed into an obsession. I found my joy in the delicate art of piping buttercream flowers, the science of a perfect macaron, and the magic of turning simple ingredients into edible masterpieces. For me, a cake is never just a cake; it's a centerpiece for your most cherished memories.
              </p>
              <p>
                At Zugi's Cakes and Treats, I pour my soul into every order. I believe in using only the highest quality ingredients—real butter, pure vanilla, and the richest chocolate—because you can taste the difference. My promise is to create something for you that is not only visually stunning but also unforgettably delicious. Thank you for letting me be a small part of your big celebrations.
              </p>
              <p>
                Over the years, I've had the privilege of creating cakes for weddings, birthdays, corporate events, and everything in between. Each project is unique, and I love the challenge of bringing your vision to life. Whether it's a whimsical character cake for a child's birthday or an elegant multi-tiered wedding cake, I approach every order with the same dedication and creativity.
              </p>
            <p>
              When I'm not baking, you can find me experimenting with new recipes, attending baking workshops, or simply enjoying a quiet moment with a cup of tea and a good book. Baking is my passion, but it's also my way of connecting with people and creating joy. Thank you for considering Zugi's Cakes and Treats for your special occasions—I can't wait to work with you!
            </p>
          </div>

          {/* New Blog Section */}
          <div className="mt-16">
            <h2 className="font-heading text-4xl text-brand-berry mb-8 text-center">From the Oven: Baking Tips & Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold text-xl mb-2">Perfecting Your Buttercream</h3>
                <p className="text-brand-brown leading-relaxed mb-4">Learn the secrets to smooth, creamy buttercream that holds its shape and tastes divine.</p>
                <a href="buttercream-tips.html" target="_blank" className="text-brand-berry font-semibold hover:underline">Read More &rarr;</a>
              </article>
              <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold text-xl mb-2">Macaron Mastery</h3>
                <p className="text-brand-brown leading-relaxed mb-4">Step-by-step guide to creating delicate, colorful macarons that impress every time.</p>
                <a href="macaron-mastery.html" target="_blank" className="text-brand-berry font-semibold hover:underline">Read More &rarr;</a>
              </article>
              <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold text-xl mb-2">Seasonal Cake Flavors</h3>
                <p className="text-brand-brown leading-relaxed mb-4">Explore unique cake flavors inspired by the seasons to delight your guests.</p>
                <a href="seasonal-flavors.html" target="_blank" className="text-brand-berry font-semibold hover:underline">Read More &rarr;</a>
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
