import React from 'react';

interface ChartData {
  label: string;
  value: number;
  color: string;
}

const samplePieData: ChartData[] = [
  { label: 'Tax Returns', value: 35, color: '#375436' },
  { label: 'Consulting', value: 25, color: '#80a94b' },
  { label: 'Bookkeeping', value: 20, color: '#4d7347' },
  { label: 'Planning', value: 20, color: '#5a8751' },
];

const sampleBarData = [45, 62, 38, 56, 72, 68, 53];

export const BarChart: React.FC = () => {
  const max = Math.max(...sampleBarData);
  
  return (
    <div className="flex items-end h-24 gap-1">
      {sampleBarData.map((value, index) => (
        <div key={index} className="flex-1 flex flex-col items-center gap-1">
          <div 
            className="w-full bg-gradient-to-t from-[#375436] to-[#80a94b] rounded-sm transition-all duration-300 hover:opacity-80"
            style={{ height: `${(value / max) * 100}%` }}
          />
          <div className="text-xs text-gray-400">{index + 1}</div>
        </div>
      ))}
    </div>
  );
};

export const PieChart: React.FC = () => {
  const total = samplePieData.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <div className="relative w-32 h-32">
      <svg viewBox="0 0 100 100" className="transform -rotate-90">
        {samplePieData.map((item, index) => {
          const angle = (item.value / total) * 360;
          const x1 = 50 + 50 * Math.cos((currentAngle * Math.PI) / 180);
          const y1 = 50 + 50 * Math.sin((currentAngle * Math.PI) / 180);
          const x2 = 50 + 50 * Math.cos(((currentAngle + angle) * Math.PI) / 180);
          const y2 = 50 + 50 * Math.sin(((currentAngle + angle) * Math.PI) / 180);
          
          const path = `
            M 50 50
            L ${x1} ${y1}
            A 50 50 0 ${angle > 180 ? 1 : 0} 1 ${x2} ${y2}
            Z
          `;
          
          currentAngle += angle;
          
          return (
            <path
              key={index}
              d={path}
              fill={item.color}
              className="transition-all duration-300 hover:opacity-80"
            />
          );
        })}
      </svg>
      <div className="absolute inset-4 bg-gray-900 rounded-full" />
    </div>
  );
};