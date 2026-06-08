export interface RatingProps {
  totalStars?: number;
  value: number;
  onRatingChange: (rating: number) => void;
}
