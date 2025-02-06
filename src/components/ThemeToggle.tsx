import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollToTop } from '../hooks/useScrollToTop';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { isVisible } = useScrollToTop();

  if (!isVisible) return null;

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 left-8 p-3 rounded-full shadow-lg z-50
                 transition-all duration-300 transform hover:scale-110
                 focus:outline-none focus:ring-2 focus:ring-offset-2
                 bg-white dark:bg-gray-800
                 text-gray-800 dark:text-gray-200
                 hover:bg-gray-100 dark:hover:bg-gray-700
                 focus:ring-blue-400 dark:focus:ring-blue-500
                 focus:ring-offset-white dark:focus:ring-offset-gray-800
                 theme-transition"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon className="w-6 h-6" />
      ) : (
        <Sun className="w-6 h-6" />
      )}
    </button>
  );
}