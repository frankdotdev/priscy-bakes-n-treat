import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const location = formData.get('location');
    const eventDate = formData.get('event-date');
    const eventType = formData.get('event-type');
    const guests = formData.get('guests');
    const budget = formData.get('budget');
    const message = formData.get('message');

    const whatsappMessage = `🎂 *New Cake Order Inquiry* 🎂%0A%0A` +
      `*Name:* ${name}%0A` +
      `*Email:* ${email}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Location:* ${location || 'Not specified'}%0A` +
      `*Event Date:* ${eventDate}%0A` +
      `*Event Type:* ${eventType || 'Not specified'}%0A` +
      `*Number of Guests:* ${guests || 'Not specified'}%0A` +
      `*Budget Range:* ${budget || 'Not specified'}%0A%0A` +
      `*Message:*%0A${message}%0A%0A` +
      `---%0A` +
      `Please respond to this inquiry as soon as possible!`;

    const whatsappURL = `https://wa.me/2348070706087?text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading text-brand-berry mb-4">Get In Touch</h1>
          <p className="max-w-3xl mx-auto font-body text-lg text-brand-brown">
            Have a question or ready to book your custom creation? I'd love to hear from you!
            Whether you're in Lagos, Abuja, Port Harcourt, or anywhere in Nigeria, I can create something special for your celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl text-brand-brown mb-6">Contact Information</h2>
            <div className="space-y-6 font-body text-brand-brown">
              <div className="flex items-center group">
                <FaEnvelope className="text-brand-berry w-6 h-6 mr-4"/>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:hello@priscysbakes.com" className="group-hover:underline">hello@priscysbakes.com</a>
                </div>
              </div>

              <div className="flex items-center group">
                <FaWhatsapp className="text-brand-berry w-6 h-6 mr-4"/>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a href="https://wa.me/2348070706087" className="group-hover:underline">+234 807 070 6087</a>
                  <p className="text-sm text-gray-600">Available 24/7 for inquiries</p>
                </div>
              </div>

              <div className="flex items-center group">
                <FaPhone className="text-brand-berry w-6 h-6 mr-4"/>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+2348070706087" className="group-hover:underline">+234 807 070 6087</a>
                </div>
              </div>

              <div className="flex items-start group">
                <FaMapMarkerAlt className="text-brand-berry w-6 h-6 mr-4 mt-1"/>
                <div>
                  <p className="font-semibold">Location</p>
                  <p>Lagos</p>
                  <p>Lagos, Nigeria</p>
                  <p className="text-sm text-gray-600 mt-1">Delivery available across Nigeria</p>
                </div>
              </div>

              <div className="flex items-start group">
                <FaClock className="text-brand-berry w-6 h-6 mr-4 mt-1"/>
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="text-sm text-gray-600 mt-1">Orders accepted 24/7 via WhatsApp</p>
                </div>
              </div>
            </div>

            <h2 className="font-heading text-3xl text-brand-brown mt-10 mb-6">Follow Me</h2>
            <div className="flex space-x-6">
               <a href="https://www.instagram.com/priscy_bakes" target="_blank" rel="noopener noreferrer" className="text-brand-brown hover:text-brand-berry text-3xl transition-colors" aria-label="Instagram">
                 <FaInstagram />
               </a>
               <a href="https://www.facebook.com/share/new_facebook_link/" target="_blank" rel="noopener noreferrer" className="text-brand-brown hover:text-brand-berry text-3xl transition-colors" aria-label="Facebook">
                 <FaFacebook />
               </a>
               <a href="https://www.tiktok.com/@priscy_bakes?_t=ZS-8zrPpwwV9sm&_r=1" target="_blank" rel="noopener noreferrer" className="text-brand-brown hover:text-brand-berry text-3xl transition-colors" aria-label="TikTok">
                 <FaTiktok />
               </a>
            </div>

            <div className="mt-8 bg-brand-peach p-6 rounded-lg">
              <h3 className="font-heading text-xl text-brand-berry mb-3">Delivery Information</h3>
              <ul className="font-body text-sm text-brand-brown space-y-1">
                <li>• Free delivery within Lagos</li>
                <li>• Nationwide delivery available</li>
                <li>• Special packaging for long-distance orders</li>
                <li>• Temperature-controlled transport</li>
              </ul>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
             initial={{ x: 100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 0.7, delay: 0.4 }}
          >
             <h2 className="font-heading text-3xl text-brand-brown mb-6">Send an Inquiry</h2>
             <form onSubmit={handleSubmit} className="space-y-6 font-body">
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-brown">Full Name *</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-brand-peach rounded-md shadow-sm focus:outline-none focus:ring-brand-berry focus:border-brand-berry" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-brown">Email Address *</label>
                  <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-brand-peach rounded-md shadow-sm focus:outline-none focus:ring-brand-berry focus:border-brand-berry" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-brown">Phone Number *</label>
                  <input type="tel" name="phone" id="phone" required className="mt-1 block w-full px-3 py-2 bg-white border border-brand-peach rounded-md shadow-sm focus:outline-none focus:ring-brand-berry focus:border-brand-berry" />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-brand-brown">Location (City/State)</label>
                  <input type="text" name="location" id="location" className="mt-1 block w-full px-3 py-2 bg-white border border-brand-peach rounded-md shadow-sm focus:outline-none focus:ring-brand-berry focus:border-brand-berry" />
                </div>

                <div>
                  <label htmlFor="event-date" className="block text-sm font-medium text-brand-brown">Event Date *</label>
                  <input type="date" name="event-date" id="event-date" required className="mt-1 block w-full px-3 py-2 bg-white border border-brand-peach rounded-md shadow-sm focus:outline-none focus:ring-brand-berry focus:border-brand-berry" />
                </div>

                <div>
                  <label htmlFor="event-type" className="block text-sm font-medium text-brand-brown">Type of Event</label>
                  <select name="event-type" id="event-type" className="mt-1 block w-full px-3 py-2 bg-white border border-brand-peach rounded-md shadow-sm focus:outline-none focus:ring-brand-berry focus:border-brand-berry">
                    <option value="">Select event type</option>
                    <option value="birthday">Birthday</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-brand-brown">Number of Guests</label>
                  <input type="number" name="guests" id="guests" min="1" className="mt-1 block w-full px-3 py-2 bg-white border border-brand-peach rounded-md shadow-sm focus:outline-none focus:ring-brand-berry focus:border-brand-berry" />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-brand-brown">Budget Range (₦)</label>
                  <select name="budget" id="budget" className="mt-1 block w-full px-3 py-2 bg-white border border-brand-peach rounded-md shadow-sm focus:outline-none focus:ring-brand-berry focus:border-brand-berry">
                    <option value="">Select budget range</option>
                    <option value="25k-50k">₦5,000 - ₦15,000</option>
                    <option value="25k-50k">₦15,000 - ₦25,000</option>
                    <option value="25k-50k">₦25,000 - ₦50,000</option>
                    <option value="50k-100k">₦50,000 - ₦100,000</option>
                    <option value="100k-200k">₦100,000 - ₦200,000</option>
                    <option value="200k+">₦200,000+</option>
                    <option value="200k+">Custom</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-brown">Tell me about your vision *</label>
                  <textarea name="message" id="message" rows="4" required placeholder="Describe your dream cake, colors, theme, flavors, etc." className="mt-1 block w-full px-3 py-2 bg-white border border-brand-peach rounded-md shadow-sm focus:outline-none focus:ring-brand-berry focus:border-brand-berry"></textarea>
                </div>

                <div>
                  <motion.button
                    type="submit"
                    className="w-full bg-brand-berry text-chocolate font-body font-semibold py-3 px-4 rounded-full hover:bg-brand-brown transition-all duration-300 transform hover:scale-105 shadow-soft"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ color: 'white !important', fontSize: '16px', fontWeight: '600' }}
                  >
                    Send My Inquiry
                  </motion.button>
                </div>
             </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="font-heading text-4xl text-brand-berry text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-brand-off-white p-6 rounded-lg shadow-soft">
              <h3 className="font-body font-semibold text-brand-brown text-lg mb-2">How far in advance should I place my order?</h3>
              <p className="font-body text-brand-brown">I recommend placing your order at least 2-4 weeks in advance for custom cakes, especially for weddings or large events. For smaller orders like cupcakes, 1-2 weeks is usually sufficient.</p>
            </div>
            <div className="bg-brand-off-white p-6 rounded-lg shadow-soft">
              <h3 className="font-body font-semibold text-brand-brown text-lg mb-2">Do you offer delivery across Nigeria?</h3>
              <p className="font-body text-brand-brown">Yes! I offer delivery across Nigeria. Delivery fees vary based on distance and order size. For out-of-town orders, we use special packaging and temperature-controlled transport to ensure your treats arrive fresh.</p>
            </div>
            <div className="bg-brand-off-white p-6 rounded-lg shadow-soft">
              <h3 className="font-body font-semibold text-brand-brown text-lg mb-2">Can you accommodate dietary restrictions?</h3>
              <p className="font-body text-brand-brown">Absolutely! I can create gluten-free, dairy-free, vegan, and nut-free options. Please let me know about any allergies or dietary preferences when placing your order.</p>
            </div>
            <div className="bg-brand-off-white p-6 rounded-lg shadow-soft">
              <h3 className="font-body font-semibold text-brand-brown text-lg mb-2">What is your cancellation policy?</h3>
              <p className="font-body text-brand-brown">Orders can be cancelled up to 48 hours before the pickup/delivery date for a full refund. For custom orders, a deposit may be required to secure your date.</p>
            </div>
            <div className="bg-brand-off-white p-6 rounded-lg shadow-soft">
              <h3 className="font-body font-semibold text-brand-brown text-lg mb-2">Do you accept bank transfers?</h3>
              <p className="font-body text-brand-brown">Yes, I accept bank transfers, mobile money (OPay, Palmpay), and cash payments. Payment details will be provided upon order confirmation.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
