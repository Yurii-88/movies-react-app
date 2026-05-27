import Button from '../../components/common/Button';
import type { RatingProps } from './Rating.types';

export default function StarRating({ value, totalStars = 5, onRatingChange }: RatingProps) {
  return (
    <div className="m-4">
      <label className="mb-1 block">Rating</label>
      {Array.from({ length: totalStars }).map((_, index) => {
        const rating = index + 1;
        const buttonClasses = rating <= value ? 'text-yellow-400' : 'text-gray-400';

        return (
          <Button key={index} classes={buttonClasses} onClick={() => onRatingChange(rating)}>
            ★
          </Button>
        );
      })}
    </div>
  );
}
