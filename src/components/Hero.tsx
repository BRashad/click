import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroCard } from './HeroCard';

export const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center bg-black overflow-hidden px-4 sm:px-6 py-12 sm:py-16">
      {/* Enhanced gradient layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#375436]/80" />
        
        {/* Vibrant accent line */}
        <div className="absolute h-[2px] w-[200%] bg-gradient-to-r from-transparent via-[#80a94b] to-transparent top-1/2 -left-1/2 transform -rotate-45 animate-[pulse_4s_ease-in-out_infinite] opacity-70" />
        <div className="absolute h-[1px] w-[200%] bg-gradient-to-r from-transparent via-[#375436] to-transparent top-[45%] -left-1/2 transform -rotate-45 animate-[pulse_4s_ease-in-out_infinite_1s] opacity-50" />
        
        {/* Enhanced glow effects with increased brightness */}
        <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-[#375436] rounded-full mix-blend-soft-light filter blur-[120px] opacity-90 animate-blob" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#80a94b] rounded-full mix-blend-soft-light filter blur-[100px] opacity-60 animation-delay-2000" />
        <div className="absolute bottom-1/3 left-1/4 w-[800px] h-[800px] bg-[#375436] rounded-full mix-blend-soft-light filter blur-[150px] opacity-70 animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white to-[#80a94b] bg-clip-text text-transparent">
                Modern Solutions
              </span>
              <br />
              <span className="text-white">for Your Finances</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your financial future with our innovative accounting and tax solutions. 
              We combine expertise with cutting-edge technology to deliver results that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#375436] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#2a4029] transition-colors flex items-center justify-center group">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </button>
              <button className="border-2 border-[#375436] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#375436]/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <HeroCard />
          </div>
        </div>
      </div>
    </div>
  );
};