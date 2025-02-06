import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function ScrollToTop() {
  const { isVisible, scrollToTop } = useScrollToTop();

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg 
                 hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-40
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}