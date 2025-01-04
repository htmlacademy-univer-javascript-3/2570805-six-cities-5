import {OfferReview} from '../../types/offer.ts';
import {OfferReviewItem} from './offer-review-item.tsx';
import {MAX_REVIEWS_COUNT} from '../../consts/consts.ts';

type OfferReviewsListProps = {
  offerReviews: OfferReview[];
}

export function OfferReviewsList({offerReviews}: OfferReviewsListProps) {
  return (
    <ul className="reviews__list">
      {offerReviews
        .toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, MAX_REVIEWS_COUNT)
        .map((review) => (
          <li key={review.id} className="reviews__item">
            <OfferReviewItem offerReview={review}/>
          </li>
        ))}
    </ul>
  );
}
