import {OfferReview} from '../../types/offer.ts';
import {OfferReviewItem} from './offer-review-item.tsx';

type OfferReviewsListProps = {
  offerReviews: OfferReview[];
}

export function OfferReviewsList({offerReviews}: OfferReviewsListProps) {
  return (
    <ul className="reviews__list">
      {offerReviews
        .toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 10)
        .map((review) => (
          <li key={review.id} className="reviews__item">
            <OfferReviewItem offerReview={review}/>
          </li>
        ))}
    </ul>
  );
}
