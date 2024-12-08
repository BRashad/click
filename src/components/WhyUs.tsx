import React from 'react';
import { CheckCircle } from 'lucide-react';
import { CalendarButton } from './CalendarButton';

const benefits = [
  'Innovative tax filing and accounting services',
  'Cloud-based, secure document management',
  'Dedicated & easily accessible expert support team',
  'Transparent & affordable price options with no hidden fees',
  'Same-day response guarantee',
  'Streamlined processes for faster, hassle-free service'
];

export const WhyUs = () => {
  return (
    <section id="whyus" className="py-20 dark:bg-gradient-to-br dark:from-black dark:via-[#111] dark:to-black bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#375436] to-[#80a94b] dark:from-white dark:to-[#80a94b] bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
            <p className="dark:text-gray-200 text-gray-600 mb-8">
              We are <span className="font-bold">not</span> your traditional tax filing and accounting firm. 
              Our innovative approach combines expert knowledge with cutting-edge technology to give 
              you superior results and unmatched convenience.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#375436]" />
                  <span className="dark:text-gray-200 text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
            <CalendarButton className="mt-8 glow-button text-white px-8 py-4 rounded-full">
              Start Your Journey
            </CalendarButton>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
                alt="Modern accounting workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 dark:bg-[#111] bg-white p-6 rounded-xl shadow-xl border dark:border-[#375436]/20 border-gray-200">
              <div className="text-4xl font-bold text-[#375436] mb-2">98%</div>
              <div className="dark:text-gray-200 text-gray-600">Client satisfaction rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};