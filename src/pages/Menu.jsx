import React from 'react';
import { motion } from 'framer-motion';

const menuSections = [
  {
    category: 'Wedding Cakes',
    items: [
      { name: 'Classic White Wedding Cake', description: 'Elegant 3-tier white cake with buttercream frosting and fresh flowers - perfect for traditional weddings.', price: '\u20A680,000 - \u20A6200,000' },
      { name: 'Naked Wedding Cake', description: 'Modern naked cake with rustic charm, decorated with greenery and seasonal blooms.', price: '\u20A670,000 - \u20A6180,000' },
      { name: 'Fondant Wedding Cake', description: 'Smooth fondant-covered cake with intricate sugar flowers and personalized details.', price: '\u20A690,000 - \u20A6250,000' },
      { name: 'Semi-Naked Wedding Cake', description: 'Beautiful semi-naked design with exposed cake layers and elegant decorations.', price: '\u20A675,000 - \u20A6220,000' },
      { name: 'Themed Wedding Cake', description: 'Custom themed cake incorporating your wedding colors, motifs, and personal style.', price: '\u20A6100,000 - \u20A6300,000' },
    ],
  },
  {
    category: 'Birthday Cakes',
    items: [
      { name: 'Kids Birthday Cake', description: 'Fun and colorful cake with character toppers, perfect for children\'s celebrations.', price: '\u20A625,000 - \u20A680,000' },
      { name: 'Adult Birthday Cake', description: 'Sophisticated cake designs for milestone birthdays with elegant decorations.', price: '\u20A635,000 - \u20A6100,000' },
      { name: 'Number Birthday Cake', description: 'Cake shaped like the birthday age number, customized with colors and themes.', price: '\u20A630,000 - \u20A690,000' },
      { name: 'Photo Cake', description: 'Custom cake with edible photo prints of the birthday person or special memories.', price: '\u20A640,000 - \u20A6120,000' },
      { name: 'Tiered Birthday Cake', description: 'Multi-tiered cake for larger birthday celebrations with multiple flavors.', price: '\u20A650,000 - \u20A6150,000' },
    ],
  },
  {
    category: 'Pastries & Snacks',
    items: [
      { name: 'French Macarons', description: 'Delicate almond meringue cookies in various flavors - perfect for elegant gatherings.', price: '\u20A68,000 / dozen' },
      { name: 'Mini Cupcakes', description: 'Bite-sized cupcakes in assorted flavors, ideal for parties and events.', price: '\u20A64,000 / dozen' },
      { name: 'Éclairs & Cream Puffs', description: 'Classic French pastries filled with custard and topped with chocolate.', price: '\u20A66,000 / dozen' },
      { name: 'Cake Pops', description: 'Fun, portable treats on sticks - great for kids parties and casual events.', price: '\u20A63,000 / dozen' },
      { name: 'Mini Tarts', description: 'Assorted fruit and custard tarts in elegant mini sizes.', price: '\u20A65,000 / dozen' },
      { name: 'Doughnuts', description: 'Freshly baked doughnuts with various glazes and toppings.', price: '\u20A62,000 / dozen' },
      { name: 'Cookies', description: 'Chewy chocolate chip, oatmeal raisin, and specialty cookies.', price: '\u20A63,000 / dozen' },
      { name: 'Brownies & Blondies', description: 'Rich, fudgy brownies and chewy blondies in various flavors.', price: '\u20A64,000 / dozen' },
    ],
  },
  {
    category: 'Corporate & Events',
    items: [
      { name: 'Office Birthday Packages', description: 'Complete cake and treats package for office celebrations.', price: '\u20A615,000 - \u20A650,000' },
      { name: 'Corporate Event Catering', description: 'Large scale dessert catering for conferences and corporate gatherings.', price: '\u20A6100,000+' },
      { name: 'Party Favor Boxes', description: 'Custom decorated cookies and treats in elegant gift boxes.', price: '\u20A63,000 - \u20A610,000 / box' },
      { name: 'Anniversary Cakes', description: 'Special cakes for wedding anniversaries and milestone celebrations.', price: '\u20A645,000 - \u20A6150,000' },
      { name: 'Custom Theme Cakes', description: 'Fully customized cakes for any theme or special occasion.', price: '\u20A630,000 - \u20A6200,000' },
      { name: 'Dessert Tables', description: 'Complete dessert table setup with assorted pastries and cakes.', price: '\u20A680,000 - \u20A6250,000' },
    ],
  },
];

const MenuItem = ({ name, description, price, index }) => (
  <motion.div
    className="border-b-2 border-dashed border-brand-peach pb-4 mb-6 hover:bg-brand-off-white p-4 rounded-lg transition-colors duration-300"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(138, 48, 79, 0.1)' }}
  >
    <div className="flex justify-between items-baseline">
      <h3 className="font-heading text-2xl text-brand-brown">{name}</h3>
      <p className="font-body font-semibold text-brand-berry text-lg">{price}</p>
    </div>
    <p className="font-body text-brand-brown mt-2">{description}</p>
  </motion.div>
);

const Menu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading text-brand-berry mb-4">Menu & Pricing</h1>
          <p className="max-w-3xl mx-auto font-body text-lg text-brand-brown">
            Crafted with the finest ingredients and a lot of love. All prices are in Nigerian Naira (₦) and may vary based on complexity and design. Contact us for custom quotes!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
            {menuSections.map(section => (
                <div key={section.category}>
                    <h2 className="font-heading text-4xl text-brand-berry border-b-2 border-brand-peach pb-2 mb-8">{section.category}</h2>
                    <div>
                        {section.items.map((item, index) => (
                            <MenuItem key={item.name} {...item} index={index} />
                        ))}
                    </div>
                </div>
            ))}
        </div>

        {/* Recipe of the Month */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 bg-brand-off-white p-8 rounded-lg"
        >
          <h2 className="font-heading text-4xl text-brand-berry text-center mb-8">Recipe of the Month: Classic Red Velvet Cupcakes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-body font-semibold text-xl text-brand-brown mb-4">Ingredients:</h3>
              <ul className="font-body text-brand-brown space-y-2 list-disc list-inside">
                <li>2 1/2 cups all-purpose flour</li>
                <li>1 1/2 cups sugar</li>
                <li>1 tsp baking soda</li>
                <li>1 tsp cocoa powder</li>
                <li>1 1/2 cups vegetable oil</li>
                <li>1 cup buttermilk</li>
                <li>2 large eggs</li>
                <li>2 tbsp red food coloring</li>
                <li>1 tsp vanilla extract</li>
                <li>1 tsp white vinegar</li>
              </ul>
            </div>
            <div>
              <h3 className="font-body font-semibold text-xl text-brand-brown mb-4">Instructions:</h3>
              <ol className="font-body text-brand-brown space-y-2 list-decimal list-inside">
                <li>Preheat oven to 350°F (175°C). Line muffin tins with cupcake liners.</li>
                <li>In a large bowl, sift together flour, sugar, baking soda, and cocoa.</li>
                <li>In another bowl, whisk oil, buttermilk, eggs, food coloring, vanilla, and vinegar.</li>
                <li>Combine wet and dry ingredients, mixing until just combined.</li>
                <li>Fill cupcake liners 2/3 full and bake for 20-25 minutes.</li>
                <li>Cool completely before frosting with cream cheese frosting.</li>
              </ol>
              <p className="font-body text-brand-brown mt-4 italic">Try this at home and tag us in your creations!</p>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-16 bg-brand-peach p-8 rounded-lg">
          <h3 className="font-heading text-3xl text-brand-berry mb-4">Need Something Special?</h3>
          <p className="font-body text-brand-brown mb-6 max-w-2xl mx-auto">
            We specialize in custom designs for any occasion. From elegant weddings to joyful birthdays,
            we can create something uniquely yours. Contact us for a personalized consultation!
          </p>
          <a href="/contact" className="inline-block bg-brand-berry text-white font-body font-semibold py-3 px-8 rounded-full hover:bg-brand-brown transition-all duration-300 transform hover:scale-105">
            Get Custom Quote
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
