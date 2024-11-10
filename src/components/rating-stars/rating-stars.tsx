type RatingStarsProps = {
  rating: number;
  showRatingValue?: boolean;
  className: string;
}

function ratingToPercents(rating: number): string {
  const percent = 100 * rating / 5.0;
  return `${percent}%`;
}

export function RatingStars({rating, className, showRatingValue = false}: RatingStarsProps) {
  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{width: ratingToPercents(rating)}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {showRatingValue && <span className="offer__rating-value rating__value">{rating}</span>}
    </div>
  );
}
