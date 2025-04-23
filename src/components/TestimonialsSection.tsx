import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Working with this trading strategy has completely transformed my approach to the markets. The systematic methodology eliminated my emotional trading and has led to consistent returns month after month.",
    author: "Sarah Johnson",
    position: "Retail Trader, 3 years",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    content: "I've been trading for over a decade and tried countless systems. This strategy stands out for its simplicity and effectiveness. The risk management protocols have saved my portfolio during volatile markets.",
    author: "Michael Rodriguez",
    position: "Professional Trader, 12 years",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    content: "As a fund manager, I'm always looking for an edge. This strategy has provided that consistently. The performance metrics speak for themselves, but what impresses me most is the adaptability to changing market conditions.",
    author: "Emma Chen",
    position: "Hedge Fund Manager, 8 years",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    content: "After blowing up two trading accounts, I was ready to quit. This strategy not only saved my trading career but has allowed me to turn it into a reliable income source. The discipline it instills is invaluable.",
    author: "David Washington",
    position: "Full-time Trader, 5 years",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-gold-500 bg-opacity-20 text-gold-400 rounded-full mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Traders <span className="text-gold-500">Transformed</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Hear from traders who have adopted my methodology and witnessed remarkable improvements
            in their trading performance and consistency.
          </p>
        </div>

        <div 
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="max-w-5xl mx-auto relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full">
                    <div className="bg-navy-800 rounded-2xl p-8 md:p-10 border border-navy-700 shadow-xl">
                      <div className="flex justify-center mb-8">
                        <div className="bg-gold-500 p-4 rounded-full">
                          <Quote className="h-8 w-8 text-navy-900" />
                        </div>
                      </div>
                      <blockquote className="text-xl md:text-2xl text-center mb-8 text-gray-200 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex flex-col items-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover mb-4"
                        />
                        <div className="text-center">
                          <p className="font-semibold text-lg">{testimonial.author}</p>
                          <p className="text-gray-400">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className="absolute top-1/2 -left-4 -translate-y-1/2 bg-navy-700 hover:bg-navy-600 transition-colors p-3 rounded-full shadow-lg hidden md:block"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              className="absolute top-1/2 -right-4 -translate-y-1/2 bg-navy-700 hover:bg-navy-600 transition-colors p-3 rounded-full shadow-lg hidden md:block"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-gold-500' : 'bg-navy-700'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;