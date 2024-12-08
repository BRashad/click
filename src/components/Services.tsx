import React from 'react';
import { FileText, Calculator, BookOpen, BarChart2, Shield, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: 'Tax Filing',
    description: 'Hassle-free corporate and personal tax filing services, all from the comfort of your home.'
  },
  {
    icon: BookOpen,
    title: 'Bookkeeping',
    description: 'Accurate, real-time bookkeeping with advanced technology tailored to your growing business.'
  },
  {
    icon: BarChart2,
    title: 'Accounting',
    description: 'Customized accounting solutions designed to provide clear financial insights into your business\'s performance.'
  },
  {
    icon: Shield,
    title: 'Audit Support',
    description: 'Expert preparation and guidance to safeguard your interests during tax audits.'
  },
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description: 'Enhancing efficiency, productivity, and profitability with strategic consulting and customized ad-hoc support services.'
  },
  {
    icon: FileText,
    title: 'Secure, Technology-Driven Solutions',
    description: 'Empowering businesses with secure, innovative technology solutions that streamline operations, protect data, and revolutionize convenience.'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 dark:bg-black bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#375436] to-[#80a94b] dark:from-white dark:to-[#80a94b] bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="dark:text-gray-200 text-gray-600 max-w-2xl mx-auto">
            Comprehensive Tax & Accounting Services delivered Remotely or In-Person.
            <br/>File your Taxes with an Expert from the comfort of your Home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl dark:bg-[#111] bg-white border-2 dark:border-[#375436]/20 border-gray-200 hover:border-[#375436] dark:hover:border-[#80a94b] transition-colors group"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-[#375436] flex items-center justify-center text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white text-gray-900">{service.title}</h3>
              <p className="dark:text-gray-300 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};