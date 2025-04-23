import React, { useEffect, useState, useRef } from 'react';
import { Award, BookOpen, Clock, Users } from 'lucide-react';

const AboutSection = () => {
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

  const achievements = [
    {
      icon: <Clock className="h-6 w-6 text-gold-500" />,
      value: "15+",
      label: "Years Trading"
    },
    {
      icon: <Users className="h-6 w-6 text-gold-500" />,
      value: "1200+",
      label: "Students Mentored"
    },
    {
      icon: <Award className="h-6 w-6 text-gold-500" />,
      value: "26",
      label: "Industry Awards"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-gold-500" />,
      value: "3",
      label: "Published Books"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-navy-100 text-navy-700 rounded-full mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Meet the <span className="text-gold-600">Strategist</span> Behind the Success
            </h2>
            <p className="text-gray-600 mb-6">
              With over 15 years of experience in global financial markets, I've developed a systematic approach 
              to trading that has consistently outperformed traditional investment methods. My journey from a 
              retail trader to managing significant capital has equipped me with insights into market dynamics 
              that few possess.
            </p>
            <p className="text-gray-600 mb-8">
              My trading methodology is the result of years of refinement, combining technical analysis, 
              fundamental insights, and proprietary algorithms. I've helped over 1,200 traders transform 
              their approach to the markets through my mentorship programs and published works.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    {achievement.icon}
                  </div>
                  <p className="text-2xl font-bold text-navy-900">{achievement.value}</p>
                  <p className="text-sm text-gray-500">{achievement.label}</p>
                </div>
              ))}
            </div>

            <button className="bg-navy-800 hover:bg-navy-700 text-white font-medium px-6 py-3 rounded-md transition-all duration-200 transform hover:translate-y-[-2px]">
              Learn More About My Journey
            </button>
          </div>

          <div 
            className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-gold-500 rounded-full opacity-20"></div>
            <div className="relative">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/7821486/pexels-photo-7821486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Professional trader analyzing the market" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-navy-900 mb-2">Certified Market Technician</h3>
                  <p className="text-gray-600 mb-4">
                    As a Certified Market Technician (CMT) and member of the Market Technicians Association, 
                    I bring institutional-level analysis to individual traders.
                  </p>
                  <div className="flex space-x-4">
                    {['CMT', 'CQF', 'Series 65'].map((cert, index) => (
                      <div key={index} className="px-3 py-1 bg-navy-100 text-navy-800 rounded-full text-xs font-semibold">
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-navy-900 text-white p-4 rounded-lg shadow-lg">
                <p className="text-sm">
                  "Markets don't reward complexity. They reward systematic discipline and emotional control."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;