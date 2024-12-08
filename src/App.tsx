import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/hero/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-black bg-white">
        <Navbar />
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;