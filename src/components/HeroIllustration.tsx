import React from 'react';
import { DollarSign, PieChart, BarChart4, FileText } from 'lucide-react';

export const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
      {/* Main circle */}
      <div className="absolute w-80 h-80 rounded-full border-4 border-[#375436]/20 animate-[spin_20s_linear_infinite]">
        {/* Orbital elements */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-[bounce_3s_ease-in-out_infinite]">
          <DollarSign className="h-6 w-6 text-[#375436]" />
        </div>
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-[bounce_3s_ease-in-out_infinite_0.5s]">
          <PieChart className="h-6 w-6 text-[#80a94b]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-[bounce_3s_ease-in-out_infinite_1s]">
          <BarChart4 className="h-6 w-6 text-[#375436]" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-[bounce_3s_ease-in-out_infinite_1.5s]">
          <FileText className="h-6 w-6 text-[#80a94b]" />
        </div>
      </div>

      {/* Center element */}
      <div className="relative w-48 h-48 rounded-2xl bg-gradient-to-br from-[#375436] to-[#80a94b] shadow-xl rotate-45 animate-[pulse_4s_ease-in-out_infinite]">
        <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center -rotate-45">
          <div className="text-4xl font-bold bg-gradient-to-r from-[#375436] to-[#80a94b] bg-clip-text text-transparent">
            CLICK
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-[#375436]/10 rounded-full animate-[bounce_4s_ease-in-out_infinite_0.5s]" />
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-[#80a94b]/10 rounded-full animate-[bounce_4s_ease-in-out_infinite_1s]" />
      <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-[#375436]/10 rounded-full animate-[bounce_4s_ease-in-out_infinite_1.5s]" />
    </div>
  );
};