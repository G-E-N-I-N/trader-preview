import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-900 bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-gold-500" />
            <span className="ml-2 text-xl font-bold text-white">EliteTrader</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Strategy', 'Performance', 'Testimonials', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm text-gray-200 hover:text-gold-500 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium px-4 py-2 rounded-md transition-colors duration-200">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-900 bg-opacity-95">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {['Strategy', 'Performance', 'Testimonials', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-gray-200 hover:text-white hover:bg-navy-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium px-4 py-2 rounded-md transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;