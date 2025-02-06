import React from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export default function NavItem({ href, children, isActive = false }: NavItemProps) {
  return (
    <a
      href={href}
      className={`px-4 py-2 rounded-full transition-all duration-300 relative group ${
        isActive ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span className={`absolute inset-0 bg-purple-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ${
        isActive ? 'scale-100' : ''
      }`} />
    </a>
  );
}