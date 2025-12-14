import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div> {/* Overlay */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-sm md:text-base font-sans font-light tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Welcome to Phevon
        </h2>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wide shadow-sm animate-fade-in-up delay-100">
          The Grand Hotel & Spa
        </h1>
        <p className="max-w-xl text-lg md:text-xl font-light font-sans mb-10 text-gray-100 animate-fade-in-up delay-200">
          Experience the epitome of luxury, where timeless elegance meets modern comfort in the heart of the city.
        </p>
        
        <button 
          onClick={() => navigate('/about')}
          className="px-10 py-4 bg-accent text-white font-serif tracking-widest hover:bg-accent-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg animate-fade-in-up delay-300"
        >
          DISCOVER MORE
        </button>
      </div>

      {/* Booking Widget Placeholder (Bottom) */}
      <div className="absolute bottom-0 w-full z-20 hidden md:block">
        <div className="container mx-auto">
          <div className="bg-white p-6 shadow-2xl flex justify-between items-center transform translate-y-1/2">
             <div className="flex-1 text-center border-r border-gray-200">
                <span className="block text-xs text-gray-500 uppercase tracking-wider">Check In</span>
                <span className="text-lg font-serif">Select Date</span>
             </div>
             <div className="flex-1 text-center border-r border-gray-200">
                <span className="block text-xs text-gray-500 uppercase tracking-wider">Check Out</span>
                <span className="text-lg font-serif">Select Date</span>
             </div>
             <div className="flex-1 text-center border-r border-gray-200">
                <span className="block text-xs text-gray-500 uppercase tracking-wider">Guests</span>
                <span className="text-lg font-serif">2 Adults</span>
             </div>
             <div className="flex-none px-6">
                <button 
                  onClick={() => navigate('/rooms')}
                  className="bg-secondary text-white px-8 py-3 font-serif tracking-widest hover:bg-black transition-colors"
                >
                  CHECK AVAILABILITY
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
