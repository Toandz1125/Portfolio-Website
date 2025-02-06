import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ReviewNavigationProps {
  currentIndex: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onDotClick: (index: number) => void;
}

export default function ReviewNavigation({
  currentIndex,
  totalSlides,
  onNext,
  onPrev,
  onDotClick
}: ReviewNavigationProps) {
  return (
    <>
      <button
        onClick={onPrev}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6
                   w-12 h-12 items-center justify-center rounded-full
                   bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
                   hover:bg-white dark:hover:bg-gray-700
                   shadow-lg hover:shadow-xl
                   transition-all duration-300 hover:scale-110
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   theme-transition"
        aria-label="Previous review"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>

      <button
        onClick={onNext}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6
                   w-12 h-12 items-center justify-center rounded-full
                   bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
                   hover:bg-white dark:hover:bg-gray-700
                   shadow-lg hover:shadow-xl
                   transition-all duration-300 hover:scale-110
                   focus:outline-none focus:ring-2 focus:ring-blue-500
                   theme-transition"
        aria-label="Next review"
      >
        <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </button>

      <div className="flex justify-center gap-3 mt-8">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-blue-600 dark:bg-blue-400 w-8' 
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            } theme-transition`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}