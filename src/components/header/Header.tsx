import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/95 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between relative">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}