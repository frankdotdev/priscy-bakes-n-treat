// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import PriscyLogo from '../assets/priscy-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/gallery', text: 'Creations' },
    { to: '/menu', text: 'Menu & Pricing' },
    { to: '/about', text: 'About Priscy' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-brand-peach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              {logoLoaded ? (
                <img
                  className="h-16 w-auto"
                  src={PriscyLogo}
                  alt="Priscy's Cakes and Treats"
                  onLoad={() => setLogoLoaded(true)}
                  onError={() => setLogoLoaded(false)}
                />
              ) : (
                <span className="h-16 flex items-center text-2xl font-heading text-brand-berry">Priscy's Bakes 'n' Treats</span>
              )}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-brand-brown hover:bg-brand-peach hover:text-brand-berry px-3 py-2 rounded-md text-md font-medium font-body transition-colors duration-300"
              >
                {link.text}
              </Link>
            ))}
            <Link to="/contact">
              <button className="ml-4 bg-brand-berry text-8A304F font-body font-semibold py-2 px-5 rounded-full hover:bg-brand-brown transition-all duration-300 transform hover:scale-105 shadow-soft">
                Order Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-brand-berry text-white inline-flex items-center justify-center p-2 rounded-md hover:bg-brand-brown focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-peach transition-all duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              style={{ backgroundColor: '', color: '#8A304F', border: 'none' }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <HiX className="block h-6 w-6" /> : <HiOutlineMenuAlt3 className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed top-20 left-0 right-0 bg-white shadow-lg z-50 border-t-2 border-brand-peach"
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)} // Close menu on click
                  className="text-brand-brown hover:bg-brand-peach hover:text-brand-berry block px-3 py-3 rounded-md text-base font-medium font-body transition-colors duration-300"
                >
                  {link.text}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="mt-4 w-full bg-brand-berry text-#8A304F font-body font-semibold py-3 px-4 rounded-full hover:bg-brand-brown transition-all duration-300 transform hover:scale-105 shadow-soft">
                  Order Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
