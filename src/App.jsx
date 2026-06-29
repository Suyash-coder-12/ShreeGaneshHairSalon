import React from 'react';

// 1. Image ko Vite ke system mein import kiya
import myImage from './assets/1.avif'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 text-white">
      
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-yellow-500 text-center">
        Shree Ganesh HairCut & Salon
      </h1>

      {/* 2. Image ko yahan display kiya */}
      <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl border-4 border-gray-700">
        <img 
          src={myImage} 
          alt="Salon Image" 
          className="w-full h-auto object-cover"
        />
      </div>

      <p className="mt-8 text-gray-400 text-center text-lg">
        Website deployed successfully on Vercel! 🚀
      </p>

    </div>
  );
}

export default App;