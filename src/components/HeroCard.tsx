import React from 'react';
import { Calculator, BarChart3, FileSpreadsheet } from 'lucide-react';
import { Chart } from './Chart';

const sampleData = [45, 62, 38, 56, 72, 68, 53];

export const HeroCard = () => {
  return (
    <div className="relative w-full aspect-[4/3] bg-gray-900 rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8">
      {/* Background grid effect */}
      <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 grid-rows-6 gap-2 sm:gap-4 p-4 sm:p-8 opacity-10">
        {[...Array(48)].map((_, i) => (
          <div key={i} className="border border-white/20 rounded-sm"></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
              <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-[#80a94b]" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">Tax Insights</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-400 max-w-sm">
              Effortlessly manage tax data, index financial records, and track compliance with smart insights.
            </p>
          </div>
          
          {/* 3D Element */}
          <div className="relative w-16 h-16 sm:w-24 sm:h-24">
            <div className="absolute inset-0 border-2 border-[#375436] rounded-lg transform rotate-45 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-2 border-2 border-[#80a94b] rounded-lg transform -rotate-45 animate-[spin_15s_linear_infinite]"></div>
            <div className="absolute inset-4 border-2 border-white/30 rounded-lg transform rotate-90 animate-[spin_20s_linear_infinite]"></div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="my-4 sm:my-6">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs sm:text-sm text-gray-400">Weekly Revenue</div>
            <div className="text-xs sm:text-sm text-[#80a94b]">+12.5%</div>
          </div>
          <Chart data={sampleData} />
        </div>

        {/* Bottom section */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center">
              <FileSpreadsheet className="h-5 w-5 sm:h-6 sm:w-6 text-[#80a94b]" />
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center">
              <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-[#375436]" />
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div>
              <div className="text-xs sm:text-sm text-gray-400">Success Rate</div>
              <div className="text-lg sm:text-xl font-bold text-white">98%</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-gray-400">Clients Served</div>
              <div className="text-lg sm:text-xl font-bold text-white">500+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-[#80a94b] rounded-full filter blur-[80px] opacity-20"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-[#375436] rounded-full filter blur-[80px] opacity-20"></div>
    </div>
  );
};