import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import ReviewsList from './reviews/ReviewsList';
import ReviewForm from './reviews/ReviewForm';
import { Review, NewReview } from './reviews/types';

interface ReviewsProps {
  showOnlyForm?: boolean;
}

export default function Reviews({ showOnlyForm = false }: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      comment:
        'John is an exceptional developer who consistently delivers high-quality solutions.',
      date: '2024-03-15',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    },
  ]);

  const [newReview, setNewReview] = useState<NewReview>({
    name: '',
    rating: 5,
    comment: '',
    avatar: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const review: Review = {
      id: Date.now(),
      ...newReview,
      date: new Date().toISOString().split('T')[0],
    };
    setReviews([review, ...reviews]);
    setNewReview({ name: '', rating: 5, comment: '', avatar: null });
  };

  if (showOnlyForm) {
    return (
      <div className="max-w-4xl mx-auto">
        <ReviewForm
          newReview={newReview}
          onReviewChange={setNewReview}
          onSubmit={handleSubmit}
        />
      </div>
    );
  }

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-16">Reviews</h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <ReviewsList reviews={reviews} />
        </div>
      </div>
    </section>
  );
}
