import React from 'react';
import { useReviews } from './ReviewContext';
import ReviewSlide from './ReviewSlide';
import ReviewNavigation from './ReviewNavigation';
import { useCarousel } from '../../hooks/useCarousel';
import { useSwipe } from '../../hooks/useSwipe';

export default function ReviewCarousel() {
  const { reviews } = useReviews();
  const {
    currentIndex,
    goToNext,
    goToPrev,
    goToIndex,
    isTransitioning
  } = useCarousel(reviews.length);

  const { touchHandlers } = useSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrev
  });

  return (
    <div className="w-[95%] max-w-4xl mx-auto relative">
      <div
        {...touchHandlers}
        className="min-h-[300px] overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-white dark:from-gray-900 dark:to-gray-800 theme-transition"
      >
        <div 
          className={`transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          <ReviewSlide review={reviews[currentIndex]} />
        </div>
      </div>

      <ReviewNavigation
        currentIndex={currentIndex}
        totalSlides={reviews.length}
        onNext={goToNext}
        onPrev={goToPrev}
        onDotClick={goToIndex}
      />
    </div>
  );
}