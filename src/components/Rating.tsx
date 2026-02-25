interface StarRatingProps {
  totalStars?: number;
  value: number;
  onChangeRating: (rating: number) => void;
}

export default function StarRating({
  value = 0,
  totalStars = 5,
  onChangeRating,
}: StarRatingProps) {
  return (
    <div className="m-4">
      <label className="mb-1 block">Rating</label>
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <span
            className={`cursor-pointer ${ratingValue <= value ? 'text-yellow-400' : 'text-gray-400'}`}
            key={index}
            onClick={() => onChangeRating(ratingValue)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
