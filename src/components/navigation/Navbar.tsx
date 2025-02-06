import React, { useState, useEffect } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import ProfileImage from './ProfileImage';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/50 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <ProfileImage />
          </div>
          <div className="flex items-center gap-2">
            <DesktopMenu isScrolled={isScrolled} />
            <div
              className={`h-6 w-px ${
                isScrolled ? 'bg-gray-300' : 'bg-white/30'
              } mx-2 transition-colors duration-300`}
            />
            <div className={isScrolled ? 'text-gray-700' : 'text-white'}>
              <LanguageSwitcher />
            </div>
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isScrolled={isScrolled}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
