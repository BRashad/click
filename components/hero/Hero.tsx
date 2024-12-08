"use client";

import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroInfographic } from './HeroInfographic';
import { StarBackground } from './StarBackground';

export const Hero = () => {
  return (
    <div className="relative min-h-screen pt-24 sm:pt-28 flex items-center dark:bg-black bg-gray-50 overflow-hidden px-4 sm:px-6">
      <HeroBackground />
      <StarBackground />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <HeroContent />
          <div className="relative mt-8 lg:mt-0">
            <HeroInfographic />
          </div>
        </div>
      </div>
    </div>
  );
};