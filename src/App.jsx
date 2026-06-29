import React from 'react';
import { motion } from 'framer-motion';

// Vercel build compatibility ke liye assets ko import kiya
import img1 from './assets/1.avif';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpeg';
import img4 from './assets/4.jpeg';
import img5 from './assets/5.jpeg';
import img7 from './assets/7.jpeg';
import img8 from './assets/8.jpeg';
import logoImg from './assets/image.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function App() {
  const servicesData = [
    { title: "Simple Haircut", price: "₹50", desc: "Clean, sharp, aur aapke face ke hisaab se perfect style." },
    { title: "Stylish Haircut", price: "₹70", desc: "Traditional haircut with a modern twist, tailored for you." },
    { title: "Simple Beard Trim", price: "₹50", desc: "Proper trimming, line-up, aur perfect shape." },
    { title: "Stylish Beard Trim", price: "₹60", desc: "Modern beard styling with a perfect finish." },
    { title: "Haircut & Beard Trim", price: "₹120", desc: "Relaxing straight razor shave with face massage." },
    { title: "Massage & Simple Scrub", price: "₹60", desc: "Relaxing massage with a simple scrub for a refreshed look." },
    { title: "Massage & Haldi Scrub", price: "₹120", desc: "Relaxing massage with a haldi scrub for a refreshed look." },
    { title: "Massage & Golden Scrub", price: "₹180", desc: "Relaxing massage with a golden scrub for a refreshed look." },
    { title: "Massage & Chandan Lape Beard", price: "₹80", desc: "Relaxing massage with a chandan lape beard for a refreshed look." },
    { title: "Massage & Chandan Lape Scrub", price: "₹250", desc: "Relaxing massage with a chandan lape scrub for a refreshed look." }
  ];

  const samples = [img1, img2, img3, img5, img8, img7, img4];

  // Automated WhatsApp Message Trigger
  const handleBooking = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const date = e.target.date.value;
    const service = e.target.service.value;
    
    const phoneNumber = "918767797002"; // Aapka specified backend number
    const message = `Namaste Omkar Bhai! 🙏\n\n*New Appointment Request*\n\n• *Name:* ${name}\n• *Service Selected:* ${service}\n• *Date:* ${date}\n• *Contact Number:* ${phone}\n\nKindly confirm the slot available for the execution. Reverted from official system.`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
      
      {/* --- CORPORATE HEADER / NAVBAR --- */}
      <nav className="fixed w-full z-50 px-8 py-4 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all duration-300">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Official Logo" className="h-9 w-auto object-contain" />
          <span className="text-lg font-bold tracking-tight text-blue-950 border-l border-slate-300 pl-3">Shree Ganesh Hair Salon</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-xs font-semibold tracking-widest uppercase text-blue-900">
          <a href="#services" className="hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">Services</a>
          <a href="#samples" className="hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">Portfolio</a>
          <a href="#book" className="hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all">Secure Slot</a>
        </div>
      </nav>

      {/* --- EXECUTIVE HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white px-6">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-15 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&q=80')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10"></div>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.2 } } }}
          className="relative z-20 text-center max-w-3xl mt-12"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-400/30 rounded-full text-xs font-semibold text-blue-400 tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span> Authentic Premium Experience
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
            ELEVATE YOUR STYLE <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">WITH PRECISION</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-slate-300 text-base md:text-lg max-w-xl mx-auto mb-10 font-normal leading-relaxed">
            Accha mahol, badhiya gaane, aur ekdum perfect haircut. Aapke style ko upgrade karne ki zimmedari hamari. Experience unmatched executive grooming standard.
          </motion.p>
          
          <motion.a href="#book" variants={fadeUp} className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 rounded shadow-lg hover:shadow-blue-500/20 active:scale-95">
            Book Appointment
          </motion.a>
        </motion.div>
      </section>

      {/* --- BUSINESS SERVICES SECTION --- */}
      <section id="services" className="py-28 px-6 md:px-16 lg:px-24 relative z-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Professional Offerings</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto">High-end craftsmanship metrics paired with competitive localized pricing.</p>
            <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-slate-50/50 p-6 border border-slate-200 hover:border-blue-500 rounded-xl shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:bg-white"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="text-base font-bold text-blue-950 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <span className="text-blue-700 font-extrabold text-lg tracking-tight bg-blue-50 px-2.5 py-0.5 rounded-md">{service.price}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MASONRY LOOKBOOK SECTION --- */}
      <section id="samples" className="py-28 px-6 md:px-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Portfolio Lookbook</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {samples.map((imgUrl, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-xl group shadow-sm border border-slate-200 bg-white p-2"
              >
                <img 
                  src={imgUrl} 
                  alt={`Grooming Standard Asset ${index + 1}`} 
                  className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECURE GATEWAY / BOOKING SECTION --- */}
      <section id="book" className="py-28 px-6 md:px-16 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-indigo-500"></div>
          
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 mb-3">Secure Appointment Gateway</h2>
            <p className="text-slate-500 text-xs md:text-sm">Line mein wait karne ki zaroorat nahi. Apna priority time slot book karo.</p>
          </div>

          <form onSubmit={handleBooking} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Full Name</label>
                <input required name="name" type="text" className="w-full bg-white border border-slate-300 p-3 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-inner" placeholder="Enter full name" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Phone Number</label>
                <input required name="phone" type="tel" className="w-full bg-white border border-slate-300 p-3 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-inner" placeholder="e.g. +91XXXXXXXXXX" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Target Date</label>
                <input required name="date" type="date" className="w-full bg-white border border-slate-300 p-3 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-inner" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Required Execution</label>
                <select name="service" className="w-full bg-white border border-slate-300 p-3 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all">
                  {servicesData.map((srv, i) => (
                    <option key={i} value={srv.title}>{srv.title} ({srv.price})</option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-900 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-lg hover:bg-blue-950 transition-all duration-300 mt-4 flex justify-center items-center gap-3 shadow-md hover:shadow-lg active:scale-[0.99]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.898-4.45 9.898-9.898 0-2.64-1.027-5.122-2.894-6.988-1.866-1.867-4.348-2.895-6.987-2.895-5.451 0-9.9 4.451-9.9 9.899 0 2.064.539 3.992 1.565 5.617l-1.048 3.828 3.974-1.155zm-1.636-6.495c.094-.153.351-.243.743-.438.39-.196 2.308-1.14 2.666-1.27.358-.13.618-.195.877.195.258.39.998 1.27 1.222 1.53.224.26.449.293.84.196.39-.098 1.644-.606 3.131-1.942 1.157-1.036 1.938-2.316 2.162-2.707.224-.391.024-.602-.172-.798-.176-.176-.39-.456-.584-.684-.194-.228-.259-.391-.39-.652-.13-.261-.065-.49.033-.685.097-.195 1.054-2.545 1.443-3.486.376-.912.756-.788 1.039-.803.264-.014.568-.016.883-.016.315 0 .828.118 1.261.587.433.47 1.652 1.614 1.652 3.938 0 2.324 1.692 4.57 1.926 4.882.234.312 3.332 5.083 8.074 7.124 1.129.486 2.01.777 2.695.994 1.132.36 2.164.309 2.977.187.906-.135 2.784-1.138 3.175-2.237.391-1.099.391-2.043.274-2.237-.117-.195-.431-.312-.821-.508z"/>
              </svg>
              Dispatch Booking Details via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* --- ENTERPRISE FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2026 Shree Ganesh Hair Salon. All engineering protocols reserved.</p>
          <p className="text-xs text-slate-500 font-mono">Platform optimized by BeatsVibe Framework.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;