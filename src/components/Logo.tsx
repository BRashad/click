import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Click Accounting & Tax Services" 
        className="h-12 w-auto"
      />
      {/* {showText && (
        <span className="text-lg font-semibold ml-3 bg-gradient-to-r from-[#375436] to-[#80a94b] bg-clip-text text-transparent">
          Click Accounting & Tax Services
        </span>
      )} */}
    </div>
  );
};