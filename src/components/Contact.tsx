import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 dark:bg-gradient-to-br dark:from-black dark:via-[#111] dark:to-black bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#375436] to-[#80a94b] dark:from-white dark:to-[#80a94b] bg-clip-text text-transparent">
              How To Contact Us
            </span>
          </h2>
          <p className="dark:text-gray-200 text-gray-600 max-w-2xl mx-auto">
            No office visit is required! <br/> Call, Email or Book time with us Now!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Edmonton Office */}
          <div className="dark:bg-[#111] bg-white p-8 rounded-2xl dark:border-[#375436]/20 border-gray-200 border">
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-[#375436]" />
              <h3 className="text-xl font-semibold dark:text-white text-gray-900">Calgary office - Main branch</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#375436] flex items-center justify-center text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm dark:text-gray-300 text-gray-600">Call at</div>
                  <div className="font-semibold dark:text-white text-gray-900">+1 (403) 539 3777</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#375436] flex items-center justify-center text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm dark:text-gray-300 text-gray-600">Email at</div>
                  <div className="font-semibold dark:text-white text-gray-900">info@clickats.com</div>
                </div>
              </div>

              {/* <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#375436] flex items-center justify-center text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm dark:text-gray-300 text-gray-600">Visit us at</div>
                  <div className="font-semibold dark:text-white text-gray-900">82 Street SW,</div>
                  <div className="dark:text-gray-300 text-gray-600">Edmonton, AB T6X 2J7</div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Calgary Office */}
          <div className="dark:bg-[#111] bg-white p-8 rounded-2xl dark:border-[#375436]/20 border-gray-200 border">
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-[#375436]" />
              <h3 className="text-xl font-semibold dark:text-white text-gray-900">Edmonton office</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#375436] flex items-center justify-center text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm dark:text-gray-300 text-gray-600">Call at</div>
                  <div className="font-semibold dark:text-white text-gray-900">+1 (780) 229 8444</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#375436] flex items-center justify-center text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm dark:text-gray-300 text-gray-600">Email at</div>
                  <div className="font-semibold dark:text-white text-gray-900">info@clickats.com</div>
                </div>
              </div>

              {/* <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#375436] flex items-center justify-center text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm dark:text-gray-300 text-gray-600">Visit us at</div>
                  <div className="font-semibold dark:text-white text-gray-900">168 St. Moritz Drive SW</div>
                  <div className="dark:text-gray-300 text-gray-600">Calgary, AB T3H 0K4</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};