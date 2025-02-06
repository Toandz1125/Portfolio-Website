import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  direction = 'up',
  delay = 0
}: AnimatedSectionProps) {
  const elementRef = useScrollAnimation();

  const getDirectionClass = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-12';
      case 'down':
        return '-translate-y-12';
      case 'left':
        return 'translate-x-12';
      case 'right':
        return '-translate-x-12';
      default:
        return 'translate-y-12';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`opacity-0 transform ${getDirectionClass()} ${className}`}
      style={{
        '--transform-from': `var(--transform-${direction}, translateY(3rem))`,
        animationDelay: delay ? `${delay}ms` : undefined
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}