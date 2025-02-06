import React from 'react';
import { Star } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';
import { useReviews } from './ReviewContext';

export default function ReviewsList() {
  const { reviews } = useReviews();

  return (
    <div className="space-y-6 mb-16">
      {reviews.map((review) => (
        <AnimatedSection key={review.id} direction="up">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold text-lg">{review.name}</h4>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-4 h-4 ${
                        index < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}