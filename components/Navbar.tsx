"use client";

import React from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { CalendarButton } from './CalendarButton';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 dark:bg-black/80 bg-white/80 backdrop-blur-md z-50 py-4 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {[
              { label: 'Services', id: 'services' },
              { label: 'Why Us', id: 'whyus' },
              { label: 'Testimonials', id: 'testimonials' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="dark:text-gray-200 text-gray-600 hover:text-[#375436] transition-colors text-sm lg:text-base"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <CalendarButton className="glow-button text-white px-4 lg:px-6 py-2 rounded-full text-sm lg:text-base">
              Book Free Consultation
            </CalendarButton>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="dark:text-white text-gray-900 p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full dark:bg-black/95 bg-white/95 border-t border-[#375436]/20">
            <div className="flex flex-col p-4 space-y-4">
              {[
                { label: 'Services', id: 'services' },
                { label: 'Why Us', id: 'whyus' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="dark:text-gray-200 text-gray-600 hover:text-[#375436] transition-colors py-2 text-center"
                >
                  {item.label}
                </button>
              ))}
              <CalendarButton className="glow-button text-white px-6 py-3 rounded-full w-full">
                Book Free Consultation
              </CalendarButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};