export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface NewReview {
  name: string;
  rating: number;
  comment: string;
}