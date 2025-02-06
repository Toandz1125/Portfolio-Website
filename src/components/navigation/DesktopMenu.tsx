import React from 'react';
import NavLink from './NavLink';

interface DesktopMenuProps {
  isScrolled: boolean;
}

export default function DesktopMenu({ isScrolled }: DesktopMenuProps) {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <NavLink href="#home" translationKey="nav.home" isScrolled={isScrolled} />
      <NavLink href="#about" translationKey="nav.about" isScrolled={isScrolled} />
      <NavLink href="#experience" translationKey="nav.experience" isScrolled={isScrolled} />
      <NavLink href="#services" translationKey="nav.services" isScrolled={isScrolled} />
      <NavLink href="#contact" translationKey="nav.contact" isScrolled={isScrolled} />
    </nav>
  );
}