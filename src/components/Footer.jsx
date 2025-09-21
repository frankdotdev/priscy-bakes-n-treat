// src/components/Footer.jsx
import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: <FaInstagram />, href: 'https://www.instagram.com/med_zugi', label: 'Instagram' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/share/171UDcBNAR/', label: 'Facebook' },
    { icon: <FaTiktok />, href: 'https://www.tiktok.com/@zugi2k2?_t=ZS-8zrPpwwV9sm&_r=1', label: 'TikTok' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/2349027543070', label: 'WhatsApp' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Creations', href: '/gallery' },
    { name: 'Menu & Pricing', href: '/menu' },
    { name: 'About Zugi', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const services = [
    'Custom Cake Design',
    'Wedding Cakes',
    'Birthday Cakes',
    'Traditional Ceremonies',
    'Corporate Events',
    'Small Chops & Treats',
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading text-2xl text-brand-peach mb-4">Zugi's Cakes & Treats</h3>
            <p className="font-body text-sm leading-relaxed mb-6">
              Crafting sweet memories across Nigeria with love, passion, and the finest ingredients.
              From traditional Igbo ceremonies to modern celebrations, we make every moment special.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-brand-peach hover:text-white text-xl transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg text-brand-peach mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="font-body text-sm hover:text-brand-peach transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg text-brand-peach mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="font-body text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading text-lg text-brand-peach mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-brand-peach mr-3 flex-shrink-0" />
                <span className="font-body text-sm">
                  Achara Layout, Enugu<br />
                  Enugu State, Nigeria
                </span>
              </div>

              <div className="flex items-center">
                <FaPhone className="text-brand-peach mr-3 flex-shrink-0" />
                <a href="tel:+2349027543070" className="font-body text-sm hover:text-brand-peach transition-colors">
                  +234 902 754 3070
                </a>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-brand-peach mr-3 flex-shrink-0" />
                <a href="mailto:hello@zugistreats.com" className="font-body text-sm hover:text-brand-peach transition-colors">
                  hello@zugistreats.com
                </a>
              </div>

              <div className="flex items-start">
                <FaClock className="text-brand-peach mr-3 mt-1 flex-shrink-0" />
                <div className="font-body text-sm">
                  <p>Mon-Fri: 9AM - 6PM</p>
                  <p>Sat: 10AM - 4PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-brand-peach/30"
        >
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-heading text-lg text-brand-peach mb-2">Stay Sweet!</h4>
            <p className="font-body text-sm mb-4">
              Subscribe to get updates on new creations, special offers, and baking tips.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 bg-white/10 border border-brand-peach/30 rounded-md text-white placeholder-white/70 focus:outline-none focus:border-brand-peach"
              />
              <button
                type="submit"
                className="bg-brand-peach text-brand-brown px-4 py-2 rounded-md font-body font-medium hover:bg-white transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 pt-6 border-t border-brand-peach/30 flex flex-col md:flex-row justify-between items-center text-center md:text-left"
        >
          <p className="font-body text-sm text-white/80">
            &copy; {currentYear} Zugi's Cakes & Treats. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="font-body text-sm text-white/80 hover:text-brand-peach transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-body text-sm text-white/80 hover:text-brand-peach transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>

        {/* Nigerian Flag Inspired Accent */}
        <div className="mt-6 flex justify-center">
          <div className="flex">
            <div className="w-8 h-2 bg-green-600"></div>
            <div className="w-8 h-2 bg-white"></div>
            <div className="w-8 h-2 bg-green-600"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
