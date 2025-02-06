import { useCallback } from 'react';

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export function useSwipe({ onSwipeLeft, onSwipeRight }: SwipeHandlers) {
  const SWIPE_THRESHOLD = 50;
  let touchStartX = 0;

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) < SWIPE_THRESHOLD) return;

    if (diff > 0 && onSwipeLeft) {
      onSwipeLeft();
    } else if (diff < 0 && onSwipeRight) {
      onSwipeRight();
    }
  }, [onSwipeLeft, onSwipeRight]);

  return {
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
    }
  };
}