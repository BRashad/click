"use client";

import React from 'react';
import { FileText, Calculator, Shield, Database, Zap } from 'lucide-react';

export const HeroInfographic = () => {
  return (
    <div className="relative w-full aspect-[4/3] dark:bg-gray-900/50 bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden p-2 sm:p-4 lg:p-8 border dark:border-white/10 border-black/10">
      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 lg:w-40 lg:h-40">
        <div className="absolute inset-0 bg-[#375436] rounded-full animate-pulse opacity-20"></div>
        <div className="absolute inset-4 bg-[#80a94b] rounded-full animate-pulse opacity-30 animation-delay-2000"></div>
        <div className="absolute inset-0 border-4 border-[#375436] rounded-full animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Calculator className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#375436]" />
        </div>
      </div>

      {/* Feature Icons with Labels */}
      <div className="absolute inset-0">
        {/* Top Icon */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="mb-2 text-xs sm:text-sm lg:text-base font-semibold dark:text-white text-gray-900">Secure</span>
          <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl dark:bg-black/30 bg-white/30 backdrop-blur-sm flex items-center justify-center border dark:border-white/10 border-black/10">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#80a94b]" />
          </div>
        </div>

        {/* Bottom Icon */}
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl dark:bg-black/30 bg-white/30 backdrop-blur-sm flex items-center justify-center border dark:border-white/10 border-black/10">
            <Database className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#375436]" />
          </div>
          <span className="mt-2 text-xs sm:text-sm lg:text-base font-semibold dark:text-white text-gray-900">Reliable</span>
        </div>

        {/* Left Icon */}
        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 flex flex-col items-center">
          <span className="absolute -top-6 text-xs sm:text-sm lg:text-base font-semibold dark:text-white text-gray-900">Easy</span>
          <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl dark:bg-black/30 bg-white/30 backdrop-blur-sm flex items-center justify-center border dark:border-white/10 border-black/10">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#80a94b]" />
          </div>
        </div>

        {/* Right Icon */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 flex flex-col items-center">
          <span className="absolute -top-6 text-xs sm:text-sm lg:text-base font-semibold dark:text-white text-gray-900">Fast</span>
          <div className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl dark:bg-black/30 bg-white/30 backdrop-blur-sm flex items-center justify-center border dark:border-white/10 border-black/10">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#375436]" />
          </div>
        </div>

        {/* Connecting Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#80a94b] to-transparent transform -translate-y-1/2"></div>
          <div className="absolute top-[15%] bottom-[15%] left-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#375436] to-transparent transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};