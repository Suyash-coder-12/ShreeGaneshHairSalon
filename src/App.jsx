import React from 'react';
import { motion } from 'framer-motion';

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

function App() {
  // Localized Services & Prices
  const servicesData = [
    { title: "Simple Haircut", price: "₹50", desc: "Clean, sharp, aur aapke face ke hisaab se perfect style." },
    {title: "Stylish Haircut", price: "₹70", desc: "Traditional haircut with a modern twist, tailored for you." },
    { title: "Simple Beard Trim", price: "₹50", desc: "Proper trimming, line-up, aur perfect shape." },
    { title: "Stylish Beard Trim", price: "₹60", desc: "Modern beard styling with a perfect finish." },
    { title: "Haircut and Beard Trim", price: "₹120", desc: "Relaxing straight razor shave with face massage." },
    { title: "Massage and Simple Scrub", price: "₹60", desc: "Relaxing massage with a simple scrub for a refreshed look." },
    {title: "Massage and Haldi Scrub", price: "₹120", desc: "Relaxing massage with a haldi scrub for a refreshed look." },
    {title: "Massage and Golden Scrub", price: "₹180", desc: "Relaxing massage with a golden scrub for a refreshed look." },
    {title: "Massage and Chandan Lape Beard", price: "₹80", desc: "Relaxing massage with a chandan lape beard for a refreshed look." },
    {title: "Massage and Chandan Lape Scrub", price: "₹250", desc: "Relaxing massage with a chandan lape scrub for a refreshed look." }
  ];

  // Samples / Lookbook Images
  const samples = [
    "1.avif", // Fade
    "2.jpg", // Beard
    "3.jpeg", // Clean cut
    "5.jpeg" , // Kids/Stylish
    "8.jpeg",  // 
    "7.jpeg" , //
    "4.jpeg"  //
  ];

  return (
    <div className="min-h-screen font-sans bg-brand-black text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-brand-black/95 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center">
          <img src="image.png" alt="Brand Logo" className="h-10 w-auto object-contain" />
          <span className="ml-3 text-xl font-bold tracking-widest text-brand-gold">Shree Ganesh Hair Salon</span>
        </div>
        
        <div className="hidden md:flex gap-6 text-sm tracking-widest uppercase">
          <a href="#services" className="hover:text-brand-gold transition-colors">Services</a>
          <a href="#samples" className="hover:text-brand-gold transition-colors">Samples</a>
          <a href="#book" className="hover:text-brand-gold transition-colors">Book Now</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Cozy/Local Barbershop Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black z-10"></div>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.2 } } }}
          className="relative z-20 text-center px-4 mt-20"
        >
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            YOUR CITY'S <span className="text-brand-gold">PREMIUM</span> BARBER
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-10">
            Accha mahol, badhiya gaane, aur ekdum perfect haircut. Aapke style ko upgrade karne ki zimmedari hamari.
          </motion.p>
          
          <motion.a href="#book" variants={fadeUp} className="inline-block px-8 py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-sm">
            Book Appointment
          </motion.a>
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 px-6 md:px-16 lg:px-24 relative z-20 bg-brand-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, borderColor: "#D4AF37" }}
                className="bg-brand-charcoal p-6 border border-white/5 rounded cursor-pointer flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{service.desc}</p>
                </div>
                <p className="text-brand-gold font-bold text-xl">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SAMPLES / LOOKBOOK SECTION --- */}
      <section id="samples" className="py-20 px-6 md:px-16 bg-brand-charcoal">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {samples.map((imgUrl, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-lg group"
              >
                <img 
                  src={imgUrl} 
                  alt={`Haircut Sample ${index + 1}`} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOOKING SECTION --- */}
      <section id="book" className="py-24 px-6 md:px-16 bg-brand-black">
        <div className="max-w-3xl mx-auto bg-brand-charcoal p-8 md:p-12 rounded-xl border border-white/5 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Book Your Seat</h2>
            <p className="text-gray-400 text-sm">Line mein wait karne ki zaroorat nahi. Apna time book karo!</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                <input type="text" className="w-full bg-brand-black border border-white/10 p-3 rounded text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="e.g. Suyash Rathod" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-brand-black border border-white/10 p-3 rounded text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="+91 00000 00000" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Date</label>
                <input type="date" className="w-full bg-brand-black border border-white/10 p-3 rounded text-white focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Service</label>
                <select className="w-full bg-brand-black border border-white/10 p-3 rounded text-white focus:outline-none focus:border-brand-gold transition-colors">
                  <option>Simple Haircut (₹50)</option>
                  <option>Beard Styling (₹60)</option>
                  <option>Combo (₹120)</option>
                </select>
              </div>
            </div>

            <button type="button" className="w-full bg-brand-gold text-brand-black font-bold uppercase tracking-widest py-4 rounded hover:bg-white transition-colors duration-300 mt-4">
              Confirm Booking
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#050505] py-8 text-center border-t border-white/10">
        <p className="text-gray-500 text-sm">© 2026 Shree Ganesh Hair Salon. All rights reserved.</p>
        <p className="text-gray-600 text-xs mt-2">Built with BeatsVibe for the locals.</p>
      </footer>

    </div>
  );
}

export default App;