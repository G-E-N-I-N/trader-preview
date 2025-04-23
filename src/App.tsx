import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StrategySection from './components/StrategySection';
import PerformanceSection from './components/PerformanceSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <StrategySection />
        <PerformanceSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;