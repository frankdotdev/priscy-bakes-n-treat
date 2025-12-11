// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import TestTailwind from './components/TestTailwind';

function App() {
  return (
    <Router>
      <div className="bg-brand-off-white font-body min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait">
          <main className="animate-fade-in">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/test-tailwind" element={<TestTailwind />} />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer />

        {/* Enhanced Floating WhatsApp Button */}
        <a
          href="https://wa.me/2348070706087"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-soft z-50 hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover-glow animate-bounce"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </Router>
  );
}

export default App;
