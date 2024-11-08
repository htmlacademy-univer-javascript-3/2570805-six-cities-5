type RatingStarsProps = {
  rating: number;
  className: string;
}

function ratingToPercents(rating: number): string {
  const percent = 100 * rating / 5.0;
  return `${percent}%`;
}

export function RatingStars({rating, className}: RatingStarsProps) {
  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{width: ratingToPercents(rating)}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
