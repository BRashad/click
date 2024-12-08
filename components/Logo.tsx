"use client";

import Image from 'next/image';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative h-12 w-12">
        <Image 
          src="/images/logo.png" 
          alt="Click Accounting & Tax Services" 
          fill
          sizes="(max-width: 48px) 100vw"
          priority
          className="object-contain"
        />
      </div>
      {showText && (
        <span className="text-lg font-semibold ml-3 bg-gradient-to-r from-[#375436] to-[#80a94b] bg-clip-text text-transparent">
          Click Accounting & Tax Services
        </span>
      )}
    </div>
  );
};