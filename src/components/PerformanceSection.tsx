import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight, BarChart4 } from 'lucide-react';

const PerformanceCard = ({ title, value, change, isPositive, icon, isVisible, delay }) => {
  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-navy-900">{value}</h3>
        </div>
        <div className={`p-2 rounded-lg ${isPositive ? 'bg-green-100' : 'bg-red-100'}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-center">
        <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
        <span className="text-sm text-gray-500 ml-2">vs previous period</span>
      </div>
    </div>
  );
};

const PerformanceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('monthly');
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

  const metrics = [
    {
      title: "Win Rate",
      value: "78.3%",
      change: "+5.2%",
      isPositive: true,
      icon: <TrendingUp className="h-5 w-5 text-green-600" />
    },
    {
      title: "Profit Factor",
      value: "3.2",
      change: "+0.4",
      isPositive: true,
      icon: <BarChart4 className="h-5 w-5 text-green-600" />
    },
    {
      title: "Average Win",
      value: "$1,842",
      change: "+$326",
      isPositive: true,
      icon: <ArrowUpRight className="h-5 w-5 text-green-600" />
    },
    {
      title: "Average Loss",
      value: "$485",
      change: "-$72",
      isPositive: true,
      icon: <ArrowDownRight className="h-5 w-5 text-green-600" />
    }
  ];

  return (
    <section id="performance" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-navy-100 text-navy-700 rounded-full mb-4">
            Track Record
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Proven <span className="text-gold-600">Performance</span> Metrics
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Transparent, verified trading results demonstrating consistent 
            profitability across various market conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <PerformanceCard
              key={index}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              isPositive={metric.isPositive}
              icon={metric.icon}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>

        <div className={`bg-navy-50 rounded-xl p-6 md:p-8 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ transitionDelay: '400ms' }}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h3 className="text-2xl font-bold text-navy-900">Performance Chart</h3>
            <div className="bg-white rounded-lg p-1 flex shadow-sm">
              {['weekly', 'monthly', 'yearly', 'all-time'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    activeTab === tab
                      ? 'bg-navy-800 text-white'
                      : 'text-gray-600 hover:text-navy-800'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            {/* This would be a real chart in production */}
            <div className="h-80 w-full relative">
              {/* Placeholder for a chart */}
              <div className="absolute inset-0 flex items-end">
                <div className="w-full h-full flex items-end space-x-1">
                  {Array.from({ length: 24 }).map((_, i) => {
                    const height = 30 + Math.random() * 50;
                    return (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-navy-600 to-navy-400 rounded-t-sm"
                        style={{ height: `${height}%` }}
                      ></div>
                    );
                  })}
                </div>
                <div className="absolute inset-0 mt-4">
                  <div className="h-full w-full">
                    <svg className="h-full w-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
                      <path
                        d="M0,180 C100,120 200,160 300,140 C400,120 500,180 600,160 C700,140 800,200 900,180 C1000,160 1100,220 1200,200"
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="4"
                      />
                      <path
                        d="M0,180 C100,120 200,160 300,140 C400,120 500,180 600,160 C700,140 800,200 900,180 C1000,160 1100,220 1200,200 V400 H0 Z"
                        fill="url(#gold-gradient)"
                        fillOpacity="0.1"
                      />
                      <defs>
                        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {[
                { label: "Total Trades", value: "1,253" },
                { label: "Winning Trades", value: "981" },
                { label: "Total Profit", value: "$253,842" },
                { label: "Max Drawdown", value: "7.2%" }
              ].map((stat, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                  <p className="text-lg font-semibold text-navy-900">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;