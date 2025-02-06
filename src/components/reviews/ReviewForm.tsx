import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import { NewReview } from './types';
import { useReviews } from './ReviewContext';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ReviewForm() {
  const { t } = useLanguage();
  const { addReview } = useReviews();
  const [newReview, setNewReview] = useState<NewReview>({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addReview(newReview);
    setNewReview({ name: '', rating: 5, comment: '' });
  };

  return (
    <AnimatedSection direction="up">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-md mb-12 theme-transition">
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-dark-heading theme-transition">
          {t('reviews.form.title')}
        </h3>
        
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 theme-transition">
              {t('reviews.form.name')}
            </label>
            <input
              type="text"
              id="name"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-800 
                       text-gray-900 dark:text-gray-100
                       focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                       dark:focus:border-blue-400 dark:focus:ring-blue-400
                       theme-transition"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2 theme-transition">
              {t('reviews.form.rating')}
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                  className="focus:outline-none"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= newReview.rating 
                        ? 'fill-yellow-400 text-yellow-400 dark:fill-yellow-300 dark:text-yellow-300' 
                        : 'text-gray-300 dark:text-gray-600'
                    } theme-transition`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="comment" className="block text-gray-700 dark:text-gray-300 mb-2 theme-transition">
              {t('reviews.form.comment')}
            </label>
            <textarea
              id="comment"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-800 
                       text-gray-900 dark:text-gray-100
                       focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                       dark:focus:border-blue-400 dark:focus:ring-blue-400
                       theme-transition"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md 
                     hover:bg-blue-700 dark:hover:bg-blue-500 
                     transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            {t('reviews.form.submit')}
          </button>
        </div>
      </form>
    </AnimatedSection>
  );
}