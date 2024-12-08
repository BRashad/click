import React from 'react';
import { Calculator, BarChart3, FileSpreadsheet } from 'lucide-react';
import { Chart } from '../Chart';

const sampleData = [45, 62, 38, 56, 72, 68, 53];

export const HeroCard = () => {
  return (
    <div className="relative w-full aspect-[4/3] dark:bg-gray-900 bg-white rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8 shadow-xl">
      <HeroCardBackground />
      <HeroCardContent />
      <HeroCardDecorations />
    </div>
  );
};

const HeroCardBackground = () => (
  <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 grid-rows-4 sm:grid-rows-6 gap-1 sm:gap-2 lg:gap-4 p-2 sm:p-4 lg:p-8 opacity-10">
    {[...Array(48)].map((_, i) => (
      <div key={i} className="border dark:border-white/20 border-black/20 rounded-sm"></div>
    ))}
  </div>
);

const HeroCardContent = () => (
  <div className="relative z-10 h-full flex flex-col justify-between">
    <div className="flex items-start justify-between">
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <Calculator className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#80a94b]" />
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold dark:text-white text-gray-900">Tax Insights</h3>
        </div>
        <p className="text-xs sm:text-sm lg:text-base dark:text-gray-400 text-gray-600 max-w-sm">
          Effortlessly manage tax data, index financial records, and track compliance with smart insights.
        </p>
      </div>
      
      {/* 3D Element - Hidden on smallest screens */}
      <div className="hidden sm:block relative w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24">
        <div className="absolute inset-0 border-2 border-[#375436] rounded-lg transform rotate-45 animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute inset-2 border-2 border-[#80a94b] rounded-lg transform -rotate-45 animate-[spin_15s_linear_infinite]"></div>
        <div className="absolute inset-4 border-2 dark:border-white/30 border-gray-400/30 rounded-lg transform rotate-90 animate-[spin_20s_linear_infinite]"></div>
      </div>
    </div>

    <div className="my-2 sm:my-4 lg:my-6">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[10px] sm:text-xs lg:text-sm dark:text-gray-400 text-gray-600">Weekly Revenue</div>
        <div className="text-[10px] sm:text-xs lg:text-sm text-[#80a94b]">+12.5%</div>
      </div>
      <Chart data={sampleData} className="h-12 sm:h-16 lg:h-24" />
    </div>

    <div className="flex items-center justify-between">
      <div className="flex space-x-1 sm:space-x-2 lg:space-x-4">
        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg dark:bg-white/10 bg-gray-100 flex items-center justify-center">
          <FileSpreadsheet className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#80a94b]" />
        </div>
        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg dark:bg-white/10 bg-gray-100 flex items-center justify-center">
          <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#375436]" />
        </div>
      </div>
      
      <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
        <div>
          <div className="text-[10px] sm:text-xs lg:text-sm dark:text-gray-400 text-gray-600">Success Rate</div>
          <div className="text-sm sm:text-lg lg:text-xl font-bold dark:text-white text-gray-900">98%</div>
        </div>
        <div>
          <div className="text-[10px] sm:text-xs lg:text-sm dark:text-gray-400 text-gray-600">Clients Served</div>
          <div className="text-sm sm:text-lg lg:text-xl font-bold dark:text-white text-gray-900">500+</div>
        </div>
      </div>
    </div>
  </div>
);

const HeroCardDecorations = () => (
  <>
    <div className="absolute top-1/4 right-1/4 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-[#80a94b] rounded-full filter blur-[40px] sm:blur-[80px] opacity-20"></div>
    <div className="absolute bottom-1/4 left-1/4 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-[#375436] rounded-full filter blur-[40px] sm:blur-[80px] opacity-20"></div>
  </>
);