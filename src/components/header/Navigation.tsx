import React from 'react';
import NavItem from './NavItem';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-2">
        <NavItem href="/" isActive>Trang chủ</NavItem>
        <NavItem href="/services">Dịch vụ</NavItem>
        <NavItem href="/about">Giới thiệu</NavItem>
        <NavItem href="/contact">Liên hệ</NavItem>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 md:hidden">
          <nav className="flex flex-col space-y-2 px-4">
            <NavItem href="/" isActive>Trang chủ</NavItem>
            <NavItem href="/services">Dịch vụ</NavItem>
            <NavItem href="/about">Giới thiệu</NavItem>
            <NavItem href="/contact">Liên hệ</NavItem>
          </nav>
        </div>
      )}
    </>
  );
}