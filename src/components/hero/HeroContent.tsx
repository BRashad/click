import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CalendarButton } from '../CalendarButton';

export const HeroContent = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="text-center lg:text-left">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
        <span className="bg-gradient-to-r dark:from-white dark:to-[#80a94b] from-[#375436] to-[#80a94b] bg-clip-text text-transparent">
          Modern Tax and
        </span>
        <br />
        <span className="dark:text-white text-gray-900">Accounting Solutions</span>
      </h1>
      <p className="text-lg sm:text-xl dark:text-gray-200 text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
        Transform your Tax filing & Accounting experience with our innovative solutions. We combine expertise with cutting-edge technology to deliver unmatched convenience.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <CalendarButton className="glow-button text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center group">
          Book Free Consultation
          <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
        </CalendarButton>
        <button 
          onClick={scrollToServices}
          className="border-2 border-[#375436] dark:text-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#375436]/10 transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};