import {OfferPreview} from '../../types/offer.ts';
import {OfferCard} from './offer-card.tsx';

type OfferCardsListProps = {
  offerPreviews: OfferPreview[];
  setActiveOfferPreview: (id: string) => void;
}

export function OfferCardsList({offerPreviews, setActiveOfferPreview}: OfferCardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offerPreviews.map((offerPreview) =>
          <OfferCard key={offerPreview.id} offerPreview={offerPreview} setActiveOfferPreview={setActiveOfferPreview}/>)
      }
    </div>
  );
}
