"use client";

import React from 'react';

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br dark:from-black dark:via-black dark:to-[#375436]/80 from-gray-50 via-gray-50 to-[#375436]/20" />
      
      {/* Vibrant accent lines - hidden on mobile */}
      <div className="hidden md:block">
        <div className="absolute h-[2px] w-[180%] bg-gradient-to-r from-transparent via-[#80a94b] to-transparent top-1/2 -left-1/2 transform -rotate-45 animate-[pulse_4s_ease-in-out_infinite] dark:opacity-70 opacity-40" />
        <div className="absolute h-[1px] w-[180%] bg-gradient-to-r from-transparent via-[#375436] to-transparent top-[45%] -left-1/2 transform -rotate-45 animate-[pulse_4s_ease-in-out_infinite_1s] dark:opacity-50 opacity-30" />
      </div>
      
      {/* Enhanced glow effects - reduced size on mobile */}
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[1000px] h-[300px] md:h-[1000px] bg-[#375436] rounded-full mix-blend-soft-light filter blur-[80px] md:blur-[120px] dark:opacity-90 opacity-40 animate-blob" />
      <div className="absolute top-1/4 right-1/4 w-[200px] md:w-[600px] h-[200px] md:h-[600px] bg-[#80a94b] rounded-full mix-blend-soft-light filter blur-[60px] md:blur-[100px] dark:opacity-60 opacity-30 animation-delay-2000" />
      <div className="absolute bottom-1/3 left-1/4 w-[250px] md:w-[800px] h-[250px] md:h-[800px] bg-[#375436] rounded-full mix-blend-soft-light filter blur-[70px] md:blur-[150px] dark:opacity-70 opacity-40 animation-delay-4000" />
    </div>
  );
};