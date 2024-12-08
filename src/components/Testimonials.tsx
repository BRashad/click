import React from 'react';
import { Star, ExternalLink, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Mustafa Akgun',
    role: 'CEO Construction Co.',
    content: "I have been getting my taxes done through Click Accounting for the past several years. Punctual, affordable, reachable. What else can you ask for."
  },
  {
    name: 'Christopher Arsenault',
    role: 'CEO, Small Business',
    content: "Ruslan is an excellent accountant. He is very knowledgeable of the tax breaks for my small business and completes all his work in a timely and affordable manner. I would recommend Ruslan's accounting firm to any small business or anyone looking for someone to complete their personal taxes."
  },
  {
    name: 'Abe Bacanli',
    role: 'Online Business Owner',
    content: "Ruslan is the best accountant I have ever worked with. He explains everything clearly, he is quick responsive and knowledgeable. I am going to work with him in the future for my corporate and personal accounting. Thanks Ruslan."
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 dark:bg-black bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#375436] to-[#80a94b] dark:from-white dark:to-[#80a94b] bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h2>
          <p className="dark:text-gray-200 text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about
            their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="dark:bg-[#111] bg-white p-6 rounded-2xl dark:border-[#375436]/20 border-gray-200 border hover:border-[#375436] transition-colors"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#375436] fill-current" />
                ))}
              </div>
              <p className="dark:text-gray-200 text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#375436]/10 flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-[#375436]" />
                </div>
                <div>
                  <div className="font-semibold dark:text-white text-gray-900">{testimonial.name}</div>
                  <div className="text-sm dark:text-gray-300 text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://www.google.com/search?client=ms-android-samsung-ss&sca_esv=445fc7b3cc879deb&sxsrf=ADLYWIIAWx7SJe_zTnzevd_OHJQrw7czAw:1732998591510&q=clickats+reviews&uds=ADvngMgXd-uwSiL-JdE451HIPt1a2e1zEpI-ngv2z1u3uEwlSk60-w7OU8C2pSs5qtL18wzFXFPCFz7U3bC2HdoaCfISf2mLjl4DTLnsSWmfR7MUo-WTkqsIz9xAPWjMWJotvSmR676W09L6PSyhoPndMybuox4Vytiqh8ZZ6UfhWYcozM3gmQ4kw1O0LYoNfBePiYOwHqL9aLuLAwo_cL_tjuaOLVxdyF4Na-uzybbVFxkcPc5XYLUNf5NernqBJ9icgDnlwt0JcjRVLliqwWi9no1eO6YTzzqj1P3DxWyXkWojA3aQUkD7kkS1iyo4Td0DGqqClsXOCvjM1MHZo9uNPu_kr4kiid0lPMNRP3SOfietVoHI4aWcyBfXkvtvkTdeXFgRz12aGM5AsmpCA3m7qiTuqZ6cPaVkUXjnOBvUlcP9x6eWgoZuBzWn69NEtDR1nQPEReJIXXMETo_afbI1cPi1_q8B8w&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7lPOsXnfgXm92Euzz0B3xQa_y14gzcl-J2x5yn56SrxfHnXbOmkM4JkVc4cZMMRGJpGAIHNCvYePX7BtmZ-Pde3_PWhM&sa=X&ved=2ahUKEwi4usXr8oSKAxVZCjQIHc8vG6AQk8gLegQIIRAB&ictx=1&stq=1&cs=1&lei=v3VLZ_jeHtmU0PEPz9-sgAo#ebo=2"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button flex items-center gap-2 text-white px-8 py-4 rounded-full group"
          >
            More Reviews
            <ExternalLink className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};