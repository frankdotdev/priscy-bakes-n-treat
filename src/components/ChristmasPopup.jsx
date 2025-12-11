import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';
import flier from '../assets/flier.png';

const ChristmasPopup = ({ isOpen, onClose }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: ''
  });

  const packages = [
    {
      id: '10k',
      price: '₦10,000',
      items: [
        'Mini foil cake (Any flavour)',
        'Small chivita',
        '4 samosa',
        '4 spring roll'
      ]
    },
    {
      id: '12k',
      price: '₦12,000',
      items: [
        'Cupcakes by 4',
        'Chivita',
        '5 samosas',
        '5 spring rolls'
      ]
    },
    {
      id: '15k',
      price: '₦15,000',
      items: [
        'A Bento cake',
        'Small chivita',
        '6 samosas',
        '6 spring rolls'
      ]
    },
    {
      id: '20k',
      price: '₦20,000',
      items: [
        'Size 7 cake',
        'Big chivita',
        '10 samosas',
        '10 spring rolls',
        'Free cookies'
      ]
    }
  ];

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `🎄 *Christmas Package Order* 🎄%0A%0A` +
      `*Package:* ${selectedPackage.price} Christmas Package%0A` +
      `*Items:* ${selectedPackage.items.join(', ')}%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Location:* ${formData.location}%0A%0A` +
      `Please confirm this Christmas package order!`;

    const whatsappURL = `https://wa.me/2348070706087?text=${message}`;

    window.open(whatsappURL, '_blank');
    onClose();
  };

  const handleBack = () => {
    setSelectedPackage(null);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <FaTimes size={24} />
            </button>

            {!selectedPackage ? (
              <div className="p-6">
                <div className="text-center mb-6">
                  <img src={flier} alt="Christmas Package" className="w-full max-w-md mx-auto mb-4 rounded-lg" />
                  <h2 className="text-3xl font-heading text-brand-berry mb-2">🎄 Priscy's Christmas Package 🎄</h2>
                  <p className="text-brand-brown mb-4">Limited time offer: December 19th - 25th</p>
                  <p className="text-sm text-gray-600">Choose your perfect Christmas package below!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packages.map((pkg) => (
                    <motion.div
                      key={pkg.id}
                      className="border-2 border-brand-peach rounded-lg p-4 hover:border-brand-berry transition-colors cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handlePackageSelect(pkg)}
                    >
                      <h3 className="text-xl font-semibold text-brand-berry mb-2">{pkg.price}</h3>
                      <ul className="text-sm text-brand-brown space-y-1">
                        {pkg.items.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                      <button className="mt-4 w-full bg-brand-berry text-white py-2 px-4 rounded-full hover:bg-brand-brown transition-colors">
                        Select This Package
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-6">
                <button
                  onClick={handleBack}
                  className="mb-4 text-brand-berry hover:text-brand-brown font-semibold"
                >
                  ← Back to Packages
                </button>

                <div className="text-center mb-6">
                  <h2 className="text-2xl font-heading text-brand-berry mb-2">Complete Your Order</h2>
                  <p className="text-brand-brown">Selected: {selectedPackage.price} Christmas Package</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-brown">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-brand-peach rounded-md focus:outline-none focus:ring-brand-berry focus:border-brand-berry"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-brown">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-brand-peach rounded-md focus:outline-none focus:ring-brand-berry focus:border-brand-berry"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-brown">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-brand-peach rounded-md focus:outline-none focus:ring-brand-berry focus:border-brand-berry"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-brand-brown">Location (City/State) *</label>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-brand-peach rounded-md focus:outline-none focus:ring-brand-berry focus:border-brand-berry"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 px-4 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center"
                  >
                    <FaWhatsapp className="mr-2" />
                    Send Order via WhatsApp
                  </button>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChristmasPopup;
