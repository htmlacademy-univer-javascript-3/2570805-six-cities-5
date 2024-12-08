import {OfferReview} from '../../types/offer.ts';
import {OfferReviewItem} from './offer-review-item.tsx';

type OfferReviewsListProps = {
  offerReviews: OfferReview[];
}

export function OfferReviewsList({offerReviews}: OfferReviewsListProps) {
  return (
    <ul className="reviews__list">
      {offerReviews.map((review) => (
        <li key={review.id} className="reviews__item">
          <OfferReviewItem offerReview={review}/>
        </li>
      ))}
    </ul>
  );
}
