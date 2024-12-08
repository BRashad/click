import React from 'react';

interface ChartProps {
  data: number[];
  className?: string;
}

export const Chart: React.FC<ChartProps> = ({ data, className = "" }) => {
  const max = Math.max(...data);
  
  return (
    <div className={`flex items-end h-16 sm:h-24 gap-1 ${className}`}>
      {data.map((value, index) => (
        <div key={index} className="flex-1 flex flex-col items-center gap-1">
          <div 
            className="w-full bg-gradient-to-t from-[#375436] to-[#80a94b] rounded-sm transition-all duration-300 hover:opacity-80"
            style={{ height: `${(value / max) * 100}%` }}
          />
          <div className="text-[10px] sm:text-xs text-gray-400">{index + 1}</div>
        </div>
      ))}
    </div>
  );
};