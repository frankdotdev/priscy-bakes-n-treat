// src/pages/Menu.jsx
import React from 'react';
import { motion } from 'framer-motion';

const menuSections = [
  {
    category: 'Traditional Nigerian Cakes',
    items: [
      { name: 'Red Velvet Cake (Ọbara Ọcha)', description: 'Classic Nigerian red velvet with cream cheese frosting - a staple at every celebration.', price: '₦35,000 - ₦85,000' },
      { name: 'Chocolate Fudge Cake', description: 'Rich, decadent chocolate cake with layers of chocolate ganache and buttercream.', price: '₦40,000 - ₦90,000' },
      { name: 'Vanilla Butter Cake', description: 'Light and fluffy vanilla cake with vanilla buttercream - perfect for all occasions.', price: '₦30,000 - ₦75,000' },
      { name: 'Black Forest Cake', description: 'Traditional German-inspired cake with chocolate, cherries, and whipped cream.', price: '₦45,000 - ₦95,000' },
      { name: 'Fruit Cake (Christmas Cake)', description: 'Rich fruit cake with nuts, dried fruits, and brandy - a Nigerian Christmas favorite.', price: '₦50,000 - ₦120,000' },
    ],
  },
  {
    category: 'Igbo Cultural Cakes',
    items: [
      { name: 'Ụmụada (Coming of Age) Cake', description: 'Elegant cake for Igbo coming of age ceremonies with traditional motifs and colors.', price: '₦60,000 - ₦150,000' },
      { name: 'Wedding Cake (Àlụmdi na Nwunye)', description: 'Multi-tiered wedding cake with Igbo traditional elements and modern design.', price: '₦100,000 - ₦300,000' },
      { name: 'New Yam Festival Cake', description: 'Special cake for Igbo New Yam festival with yam motifs and traditional colors.', price: '₦55,000 - ₦120,000' },
      { name: 'Ọmụgwọ (Outdooring) Cake', description: 'Celebration cake for newborn outdooring ceremonies with baby motifs.', price: '₦45,000 - ₦100,000' },
      { name: 'Title Taking Ceremony Cake', description: 'Prestigious cake for traditional title ceremonies with gold accents.', price: '₦80,000 - ₦200,000' },
    ],
  },
  {
    category: 'Small Chops & Finger Foods',
    items: [
      { name: 'Puff Puff (Àkàrà Balls)', description: 'Sweet fried dough balls dusted with sugar - perfect party treat.', price: '₦2,000 / dozen' },
      { name: 'Chin Chin', description: 'Crispy fried dough strips - a Nigerian favorite for gatherings.', price: '₦3,000 / pack' },
      { name: 'Cupcakes (Assorted)', description: 'Mini cakes in various flavors including red velvet, chocolate, and vanilla.', price: '₦8,000 / dozen' },
      { name: 'Cake Pops', description: 'Fun, portable treats on sticks - great for kids parties.', price: '₦6,000 / dozen' },
      { name: 'Mini Doughnuts', description: 'Bite-sized doughnuts with various toppings and fillings.', price: '₦4,000 / dozen' },
    ],
  },
  {
    category: 'Traditional Nigerian Desserts',
    items: [
      { name: 'Àkàrà (Bean Cakes)', description: 'Sweet fried bean cakes - a traditional Nigerian treat with modern twist.', price: '₦3,000 / piece' },
      { name: 'Coconut Candy', description: 'Sweet coconut treats - perfect for traditional ceremonies.', price: '₦2,500 / piece' },
      { name: 'Banana Fritters', description: 'Sweet fried bananas - a simple yet delicious traditional dessert.', price: '₦2,000 / piece' },
      { name: 'Groundnut Candy', description: 'Sweet peanut candy - a crunchy traditional Nigerian sweet.', price: '₦1,500 / piece' },
      { name: 'Palm Wine Jelly', description: 'Traditional jelly made with palm wine - unique Nigerian dessert.', price: '₦4,000 / piece' },
    ],
  },
  {
    category: 'Corporate & Event Catering',
    items: [
      { name: 'Office Birthday Packages', description: 'Complete cake and treats package for office celebrations.', price: '₦25,000 - ₦75,000' },
      { name: 'Wedding Cake Packages', description: 'Full wedding cake service including delivery and setup.', price: '₦150,000 - ₦500,000' },
      { name: 'Party Favor Boxes', description: 'Custom decorated cookies and treats in gift boxes.', price: '₦5,000 - ₦15,000 / box' },
      { name: 'Corporate Event Catering', description: 'Large scale dessert catering for conferences and events.', price: '₦200,000+' },
      { name: 'Custom Theme Cakes', description: 'Fully customized cakes for any theme or occasion.', price: '₦50,000 - ₦250,000' },
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
            We specialize in custom designs for any occasion. From traditional Igbo ceremonies to modern celebrations,
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
