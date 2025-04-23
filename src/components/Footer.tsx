import React from 'react';
import { TrendingUp, Twitter, Linkedin, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-gold-500" />
              <span className="ml-2 text-xl font-bold">EliteTrader</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional trading strategies and mentorship for serious traders who want to achieve consistent profitability.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter className="h-5 w-5" />, link: "#" },
                { icon: <Linkedin className="h-5 w-5" />, link: "#" },
                { icon: <Instagram className="h-5 w-5" />, link: "#" },
                { icon: <Youtube className="h-5 w-5" />, link: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="bg-navy-800 hover:bg-navy-700 p-2 rounded-full transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Trading Strategy", link: "#strategy" },
                { name: "Performance", link: "#performance" },
                { name: "Testimonials", link: "#testimonials" },
                { name: "About", link: "#about" },
                { name: "Contact", link: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.link} 
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: "Trading Blog", link: "#" },
                { name: "Market Analysis", link: "#" },
                { name: "Trading Guides", link: "#" },
                { name: "Webinars", link: "#" },
                { name: "FAQs", link: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.link} 
                    className="text-gray-400 hover:text-gold-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive weekly market insights and trading opportunities directly to your inbox.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-navy-800 border border-navy-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gold-500"
                />
                <button
                  type="submit"
                  className="bg-gold-500 hover:bg-gold-600 text-navy-900 px-4 py-2 rounded-r-md transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center">
          <p 
            className="text-gray-500 text-sm mb-4 md:mb-0" 
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            &copy; {year} G.E.N.I.N - l0rd_9h057. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;