import React from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaGift } from 'react-icons/fa';

const ChristmasBanner = ({ onOpenPopup, onClose }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-red-600 to-green-600 text-white py-3 px-4 relative"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <FaGift className="text-yellow-600 text-xl" />
          <div className="text-sm md:text-base">
            <span className="font-bold text-red-300">🎄 Christmas Special! </span>
            <span className="text-yellow-600">Get amazing packages from ₦10,000 - ₦20,000! Limited time offer until Dec 25th.</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenPopup}
            className="bg-white text-red-600 px-4 py-1 rounded-full font-semibold hover:bg-yellow-100 transition-colors text-sm"
          >
            View Packages
          </button>
          <button
            onClick={onClose}
            className="text-red-600 hover:text-yellow-300 transition-colors"
            aria-label="Close banner"
          >
            <FaTimes size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChristmasBanner;
