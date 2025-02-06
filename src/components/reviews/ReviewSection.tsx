import React from 'react';
import AnimatedSection from '../AnimatedSection';
import ReviewCarousel from './ReviewCarousel';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ReviewSection() {
  const { t } = useLanguage();

  return (
    <section
      id="reviews"
      className="py-20 bg-primary dark:bg-dark-bg theme-transition"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-center mb-16 relative inline-block group text-gray-900 dark:text-dark-heading theme-transition">
              {t('reviews.title')}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[var(--accent-blue)] transition-all duration-300 group-hover:w-full"></span>
            </h2>
          </div>
        </AnimatedSection>
        <ReviewCarousel />
        <div className="text-center mt-12">
          <a
            href="#footer-review"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors theme-transition"
          >
            {t('reviews.leaveReview')}
          </a>
        </div>
      </div>
    </section>
  );
}
