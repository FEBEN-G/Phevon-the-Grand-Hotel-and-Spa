import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Dining', path: '/dining' },
    { name: 'Spa & Wellness', path: '/spa' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-50">
          <h1 className={`text-2xl font-serif font-bold tracking-widest ${
            isScrolled ? 'text-secondary' : 'text-white'
          }`}>
            PHEVON
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-sans tracking-wide hover:text-accent transition-colors ${
                isScrolled ? 'text-secondary' : 'text-white/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/rooms"
            className="px-6 py-2 bg-accent text-white font-serif text-sm tracking-wider hover:bg-accent-dark transition-colors duration-300"
          >
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${isMobileMenuOpen || isScrolled ? 'bg-secondary' : 'bg-white'}`} />
          <div className={`w-6 h-0.5 mb-1.5 transition-all duration-300 ${isMobileMenuOpen || isScrolled ? 'bg-secondary' : 'bg-white'}`} />
          <div className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen || isScrolled ? 'bg-secondary' : 'bg-white'}`} />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-secondary mb-6 hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/rooms"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-accent text-white font-serif tracking-wider hover:bg-accent-dark"
          >
            BOOK YOUR STAY
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
