import React from 'react';
import { motion } from 'framer-motion';

// Sabhi images ko explicitly import kiya (Vercel deployment issue se bachne ke liye)
import img1 from './assets/1.avif';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpeg';
import img4 from './assets/4.jpeg';
import img5 from './assets/5.jpeg';
import img7 from './assets/7.jpeg';
import img8 from './assets/8.jpeg';
// Logo as per requirement
import logoImg from './assets/image.png';

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

function App() {
  // Localized Services & Prices
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

  // Imported Images array
  const samples = [img1, img2, img3, img5, img8, img7, img4];

  // WhatsApp Booking Function
  const handleBooking = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const date = e.target.date.value;
    const service = e.target.service.value;
    
    // Yahan Omkar Bhai ka number daal dena (e.g., 919876543210)
    const phoneNumber = "910000000000"; 
    const message = `Namaste Omkar Bhai! 🙏\nMera naam *${name}* hai.\nMujhe *${service}* karwana hai.\nDate: *${date}*\nMera Number: *${phone}*\nKya appointment mil jayegi?`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    // Corporate Blue & White Theme Background
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-white/95 backdrop-blur-md border-b border-blue-900/10 shadow-sm">
        <div className="flex items-center">
          <img src={logoImg} alt="Brand Logo" className="h-10 w-auto object-contain" />
          <span className="ml-3 text-xl font-bold tracking-tight text-blue-900">Shree Ganesh Hair Salon</span>
        </div>
        
        <div className="hidden md:flex gap-6 text-sm font-semibold tracking-wide uppercase text-blue-800">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#samples" className="hover:text-blue-600 transition-colors">Samples</a>
          <a href="#book" className="hover:text-blue-600 transition-colors">Book Now</a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-blue-50">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 to-white z-10"></div>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.2 } } }}
          className="relative z-20 text-center px-4 mt-20"
        >
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-blue-950">
            YOUR CITY'S <span className="text-blue-700">PREMIUM</span> BARBER
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-gray-600 text-base md:text-lg max-w-xl mx-auto mb-10 font-medium">
            Accha mahol, badhiya gaane, aur ekdum perfect haircut. Aapke style ko upgrade karne ki zimmedari hamari.
          </motion.p>
          
          <motion.a href="#book" variants={fadeUp} className="inline-block px-8 py-4 bg-blue-900 text-white font-bold uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 rounded shadow-lg">
            Book Appointment
          </motion.a>
        </motion.div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 px-6 md:px-16 lg:px-24 relative z-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-950">Our Services</h2>
            <div className="w-16 h-1 bg-blue-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, borderColor: "#1D4ED8" }}
                className="bg-gray-50 p-6 border border-gray-200 rounded shadow-sm cursor-pointer flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <h3 className="text-lg font-bold mb-2 text-blue-900">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
                </div>
                <p className="text-blue-700 font-extrabold text-xl">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SAMPLES / LOOKBOOK SECTION --- */}
      <section id="samples" className="py-20 px-6 md:px-16 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-950">Our Work</h2>
          <div className="w-16 h-1 bg-blue-700 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {samples.map((imgUrl, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-lg group shadow-md"
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

      {/* --- BOOKING SECTION (With WhatsApp Integration) --- */}
      <section id="book" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-3xl mx-auto bg-blue-50 p-8 md:p-12 rounded-xl border border-blue-100 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-blue-950">Book Your Seat</h2>
            <p className="text-gray-600 text-sm">Line mein wait karne ki zaroorat nahi. Apna time book karo aur direct WhatsApp pe message bhejo!</p>
          </div>

          <form onSubmit={handleBooking} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2">Your Name</label>
                <input required name="name" type="text" className="w-full bg-white border border-gray-300 p-3 rounded text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder="e.g. Suyash" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2">Phone Number</label>
                <input required name="phone" type="tel" className="w-full bg-white border border-gray-300 p-3 rounded text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder="+91 00000 00000" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2">Date</label>
                <input required name="date" type="date" className="w-full bg-white border border-gray-300 p-3 rounded text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2">Service</label>
                <select name="service" className="w-full bg-white border border-gray-300 p-3 rounded text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors">
                  {servicesData.map((srv, i) => (
                    <option key={i} value={srv.title}>{srv.title} ({srv.price})</option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="w-full bg-green-600 text-white font-bold uppercase tracking-widest py-4 rounded hover:bg-green-700 transition-colors duration-300 mt-4 flex justify-center items-center gap-2 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.898-4.45 9.898-9.898 0-2.64-1.027-5.122-2.894-6.988-1.866-1.867-4.348-2.895-6.987-2.895-5.451 0-9.9 4.451-9.9 9.899 0 2.064.539 3.992 1.565 5.617l-1.048 3.828 3.974-1.155zm-1.636-6.495c.094-.153.351-.243.743-.438.39-.196 2.308-1.14 2.666-1.27.358-.13.618-.195.877.195.258.39.998 1.27 1.222 1.53.224.26.449.293.84.196.39-.098 1.644-.606 3.131-1.942 1.157-1.036 1.938-2.316 2.162-2.707.224-.391.024-.602-.172-.798-.176-.176-.39-.456-.584-.684-.194-.228-.259-.391-.39-.652-.13-.261-.065-.49.033-.685.097-.195 1.054-2.545 1.443-3.486.376-.912.756-.788 1.039-.803.264-.014.568-.016.883-.016.315 0 .828.118 1.261.587.433.47 1.652 1.614 1.652 3.938 0 2.324 1.692 4.57 1.926 4.882.234.312 3.332 5.083 8.074 7.124 1.129.486 2.01.777 2.695.994 1.132.36 2.164.309 2.977.187.906-.135 2.784-1.138 3.175-2.237.391-1.099.391-2.043.274-2.237-.117-.195-.431-.312-.821-.508z"/>
              </svg>
              Book via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-blue-950 py-8 text-center border-t border-blue-900">
        <p className="text-gray-300 text-sm">© 2026 Shree Ganesh Hair Salon. All rights reserved.</p>
        <p className="text-gray-400 text-xs mt-2 font-medium">Built with BeatsVibe for the locals.</p>
      </footer>

    </div>
  );
}

export default App;