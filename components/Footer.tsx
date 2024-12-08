"use client";

import React from 'react';
import { Logo } from './Logo';

export const Footer = () => {
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
    }
  };

  return (
    <footer className="dark:bg-[#111] bg-gray-100 dark:text-white text-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <Logo className="mb-4" />
            <p className="dark:text-gray-300 text-gray-600 mb-6">
              Modern solutions for your financial success. <br/>Expert accounting and tax services
              for the digital age.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 dark:text-gray-300 text-gray-600">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#375436] transition-colors"
                >
                  Tax Filing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#375436] transition-colors"
                >
                  Bookkeeping
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#375436] transition-colors"
                >
                  Accounting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#375436] transition-colors"
                >
                  Audit Support
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#375436] transition-colors"
                >
                  Business Consulting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#375436] transition-colors"
                >
                  Secure, Technology-Driven Solutions
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t dark:border-[#375436]/20 border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="dark:text-gray-300 text-gray-600 mb-4 md:mb-0">
            © 2024 Click Accounting & Tax Services. All rights reserved.
          </div>
          <div className="dark:text-gray-300 text-gray-600 mb-4 md:mb-0">
            Developed by <a href="https://www.viteconsulting.com/" className="hover:text-hoverover">Vite Consulting</a>
          </div>
        </div>
      </div>
    </footer>
  );
};