import React, { useEffect, useState } from 'react';
import { TrendingUp, BarChart, Percent, DollarSign } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { 
      icon: <TrendingUp className="h-6 w-6 text-gold-500" />, 
      value: '87%', 
      label: 'Win Rate' 
    },
    { 
      icon: <BarChart className="h-6 w-6 text-gold-500" />, 
      value: '53.2K', 
      label: 'Trades' 
    },
    { 
      icon: <Percent className="h-6 w-6 text-gold-500" />, 
      value: '26%', 
      label: 'Avg. Return' 
    },
    { 
      icon: <DollarSign className="h-6 w-6 text-gold-500" />, 
      value: '2.8M', 
      label: 'AUM' 
    },
  ];

  return (
    <section id="hero" className="relative pt-20 overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 z-0"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMzAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTItNGg0djFoLTR2LTF6bS0xNi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bTEwLTJoMXYxaC0xdi0xem0tOC0yaDN2MWgtM3YtMXptMCA0aDEwdjFIMjB2LTF6bTEwIDNoMXYxaC0xdi0xek04IDMwaDF2MUg4di0xem0yMC0yaDF2MWgtMXYtMXptMi0yaDF2MWgtMXYtMXpNMjAgMzRoMXYxaC0xdi0xem0tMiAyaDFWNDBoLTlWMzZoOHptLTgtM2gxdjFoLTF2LTF6bTAgNGgxdjFoLTF2LTF6bTMwIDBoMXYxaC0xdi0xem0tMjggMGgxdjFoLTF2LTF6bTI0LTJoMXYxaC0xdi0xem0tMjQgNGgxdjFoLTF2LTF6bTAgNGgxdjFoLTF2LTF6bTI0IDBoMXYxaC0xdi0xem0wLThoMXYxaC0xdi0xem0wLTI2aDF2MWgtMXYtMXptLTI0IDI0aDF2MWgtMXYtMXptOC00aDF2MWgtMXYtMXptMTYgMGgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-gold-500 bg-opacity-20 text-gold-500 rounded-full mb-4">
              Elite Trading Strategies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Master the Markets with <span className="text-gold-500">Strategic Precision</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Leverage data-driven trading strategies developed over 15 years of market experience. Join traders who consistently outperform the market with our proven methodology.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium px-6 py-3 rounded-md transition-all duration-200 transform hover:scale-105">
                Discover My Strategy
              </button>
              <button className="bg-transparent border border-gray-600 hover:border-gray-400 text-white font-medium px-6 py-3 rounded-md transition-all duration-200">
                View Performance
              </button>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-navy-700 rounded-lg p-4 transition-all duration-200 hover:transform hover:scale-105 hover:shadow-xl"
                  >
                    <div className="flex items-center mb-2">
                      {stat.icon}
                    </div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-navy-700">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Trading Performance</span>
                  <span className="text-sm text-green-500">+24.6%</span>
                </div>
                <div className="w-full bg-navy-600 rounded-full h-2">
                  <div className="bg-gradient-to-r from-gold-500 to-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-gray-50">
          <path d="M0,64L80,64C160,64,320,64,480,74.7C640,85,800,107,960,101.3C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;