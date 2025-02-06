import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Review } from './types';
import { useLanguage } from '../../contexts/LanguageContext';

interface ReviewSlideProps {
  review: Review;
}

export default function ReviewSlide({ review }: ReviewSlideProps) {
  const { t } = useLanguage();

  return (
    <div className="p-8 md:p-10">
      <div className="max-w-2xl mx-auto bg-slate-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 relative theme-transition">
        {/* Reviewer info at the top */}
        <div className="flex flex-col items-center mb-6">
          {review.avatar && (
            <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-slate-200 dark:border-slate-700 theme-transition">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-1 theme-transition">
            {review.name}
          </h3>
          <span className="text-sm text-slate-500 dark:text-slate-400 theme-transition">
            {review.date}
          </span>
        </div>

        {/* Decorative quote icon */}
        <div className="absolute -top-4 -left-4 bg-slate-200 dark:bg-slate-700 rounded-full p-3 theme-transition">
          <Quote className="w-5 h-5 text-slate-600 dark:text-slate-300" />
        </div>

        {/* Rating stars */}
        <div 
          className="flex gap-1 mb-4 justify-center" 
          role="img" 
          aria-label={`${t('reviews.form.rating')}: ${review.rating} ${t('reviews.outOf')} 5`}
        >
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`w-5 h-5 ${
                index < review.rating 
                  ? 'fill-amber-400 text-amber-400 dark:fill-amber-300 dark:text-amber-300' 
                  : 'text-slate-300 dark:text-slate-600'
              } transition-colors duration-300`}
            />
          ))}
        </div>

        {/* Review content */}
        <div className="text-center">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg italic theme-transition">
            "{review.comment}"
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-slate-100 to-transparent dark:from-slate-700/20 rounded-br-xl -z-10 theme-transition" />
      </div>
    </div>
  );
}