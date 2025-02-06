import React from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  isScrolled: boolean;
}

export default function MobileMenu({ isOpen, onToggle, isScrolled }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className={`p-2 transition-colors duration-300 ${
          isScrolled 
            ? 'text-gray-600 hover:text-blue-600' 
            : 'text-white hover:text-blue-200'
        }`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <NavLink href="#home" translationKey="nav.home" isScrolled={true} />
            <NavLink href="#about" translationKey="nav.about" isScrolled={true} />
            <NavLink href="#experience" translationKey="nav.experience" isScrolled={true} />
            <NavLink href="#services" translationKey="nav.services" isScrolled={true} />
            <NavLink href="#contact" translationKey="nav.contact" isScrolled={true} />
          </nav>
        </div>
      )}
    </div>
  );
}