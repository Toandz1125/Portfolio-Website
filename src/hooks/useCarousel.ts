import { useState, useCallback, useEffect } from 'react';

export function useCarousel(totalSlides: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transition = useCallback(async (callback: () => void) => {
    setIsTransitioning(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    callback();
    setIsTransitioning(false);
  }, []);

  const goToNext = useCallback(() => {
    transition(() => {
      setCurrentIndex(current => (current + 1) % totalSlides);
    });
  }, [totalSlides, transition]);

  const goToPrev = useCallback(() => {
    transition(() => {
      setCurrentIndex(current => (current - 1 + totalSlides) % totalSlides);
    });
  }, [totalSlides, transition]);

  const goToIndex = useCallback((index: number) => {
    if (index === currentIndex) return;
    transition(() => {
      setCurrentIndex(index);
    });
  }, [currentIndex, transition]);

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [goToNext, goToPrev]);

  return {
    currentIndex,
    goToNext,
    goToPrev,
    goToIndex,
    isTransitioning
  };
}