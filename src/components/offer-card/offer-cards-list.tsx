import {OfferPreview} from '../../types/offer.ts';
import {OfferCard} from './offer-card.tsx';

type OfferCardsListProps = {
  offerPreviews: OfferPreview[];
  setActiveOfferPreview?: (id: string | null) => void;
  className: string;
  itemClassName: string;
}

export function OfferCardsList({offerPreviews, setActiveOfferPreview, className, itemClassName}: OfferCardsListProps): JSX.Element {
  return (
    <div className={className}>
      {
        offerPreviews.map((offerPreview) =>
          <OfferCard key={offerPreview.id} offerPreview={offerPreview} setActiveOfferPreview={setActiveOfferPreview} className={itemClassName}/>)
      }
    </div>
  );
}
