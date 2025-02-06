import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface NavLinkProps {
  href: string;
  translationKey: string;
  isScrolled: boolean;
}

export default function NavLink({ href, translationKey, isScrolled }: NavLinkProps) {
  const { t } = useLanguage();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Special case for home link - scroll to top
    if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    // For other links, scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative px-4 py-2 transition-all duration-300 group ${
        isScrolled 
          ? 'text-gray-600 hover:text-blue-600' 
          : 'text-white hover:text-blue-200'
      }`}
    >
      {t(translationKey)}
      <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
        isScrolled ? 'bg-blue-600' : 'bg-white'
      }`} />
    </a>
  );
}