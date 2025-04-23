import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, Target, BarChart3, LineChart, Eye, Shield, BarChart, Scale } from 'lucide-react';

const StrategyCard = ({ title, description, icon, delay, isVisible }) => {
  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-navy-50 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-navy-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const StrategySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const strategies = [
    {
      title: "Data-Driven Analysis",
      description: "Utilize machine learning algorithms to identify patterns and market inefficiencies for strategic advantage.",
      icon: <BarChart3 className="h-6 w-6 text-navy-700" />
    },
    {
      title: "Risk Management",
      description: "Implement strict position sizing and stop-loss protocols to protect capital and optimize risk-reward ratios.",
      icon: <Shield className="h-6 w-6 text-navy-700" />
    },
    {
      title: "Technical Precision",
      description: "Apply advanced technical analysis with proprietary indicators for precise entry and exit positions.",
      icon: <Target className="h-6 w-6 text-navy-700" />
    },
    {
      title: "Trend Identification",
      description: "Identify macro market trends and align trades with dominant market forces for increased probability.",
      icon: <TrendingUp className="h-6 w-6 text-navy-700" />
    },
    {
      title: "Volatility Exploitation",
      description: "Capitalize on market volatility with adaptive strategies that thrive in changing market conditions.",
      icon: <BarChart className="h-6 w-6 text-navy-700" />
    },
    {
      title: "Market Psychology",
      description: "Recognize common market sentiment patterns and position ahead of retail investor behavior.",
      icon: <Eye className="h-6 w-6 text-navy-700" />
    }
  ];

  return (
    <section id="strategy" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-navy-100 text-navy-700 rounded-full mb-4">
            Trading Methodology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            A Strategic Approach to <span className="text-gold-600">Market Mastery</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            My proprietary trading strategy combines technical analysis, fundamentals, and market psychology 
            to identify high-probability trading opportunities across multiple timeframes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <StrategyCard
              key={index}
              title={strategy.title}
              description={strategy.description}
              icon={strategy.icon}
              delay={index * 100}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className={`mt-16 bg-navy-800 rounded-xl p-8 text-white shadow-xl transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Trading Framework</h3>
              <p className="text-gray-300 mb-6">
                My trading framework is built on a foundation of disciplined risk management and statistical edge. 
                By focusing on high-probability setups and proper position sizing, I maintain consistent profitability 
                across varying market conditions.
              </p>
              <div className="space-y-3">
                {[
                  "Algorithmic pattern recognition",
                  "Multi-timeframe confirmation",
                  "Advanced risk-reward optimization",
                  "Volatility-adjusted position sizing",
                  "Counter-trend opportunity identification"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-gold-500 mr-3"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy-700 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-semibold">Strategy Performance</h4>
                <span className="text-green-400">+68% YTD</span>
              </div>
              
              <div className="h-64 flex items-end space-x-2">
                {[45, 62, 78, 56, 69, 92, 85, 73, 88, 95, 80, 86].map((height, index) => (
                  <div 
                    key={index} 
                    className="flex-1 bg-gradient-to-t from-gold-600 to-gold-400 rounded-t-sm transition-all duration-300 hover:opacity-90"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;