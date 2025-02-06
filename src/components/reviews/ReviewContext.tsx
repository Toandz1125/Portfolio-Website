import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Review, NewReview } from './types';

interface ReviewContextType {
  reviews: Review[];
  addReview: (review: NewReview) => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export function ReviewProvider({ children }: { children: ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      comment:
        'Toàn là một lập trình viên xuất sắc, luôn mang đến những giải pháp chất lượng cao.',
      date: '2025-01-01',
    },
    {
      id: 2,
      name: 'Người Đánh Giá Kỹ Thuật',
      rating: 5,
      comment:
        'Trang web portfolio ấn tượng! Cấu trúc code được tổ chức rất tốt, với sự phân tách rõ ràng và cấu trúc component hợp lý. Các hiệu ứng animation thêm vào một cách chuyên nghiệp mà không ảnh hưởng đến hiệu suất. Thiết kế responsive hoạt động hoàn hảo trên mọi thiết bị.',
      date: '2024-12-16',
    },
  ]);

  const addReview = (newReview: NewReview) => {
    const review: Review = {
      id: Date.now(),
      ...newReview,
      date: new Date().toISOString().split('T')[0],
    };
    setReviews([review, ...reviews]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
}

export function useReviews() {
  const context = useContext(ReviewContext);
  if (context === undefined) {
    throw new Error('useReviews must be used within a ReviewProvider');
  }
  return context;
}
