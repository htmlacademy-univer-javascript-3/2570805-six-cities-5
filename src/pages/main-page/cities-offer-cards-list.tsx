import {OfferCardsList} from '../../components/offer-card/offer-cards-list.tsx';
import {OfferPreview} from '../../types/offer.ts';

type CitiesOfferCardsListProps = {
  offerPreviews: OfferPreview[];
  setActiveOfferPreview: (id: string | null) => void;
}

export function CitiesOfferCardsList(props: CitiesOfferCardsListProps) {
  return (
    <OfferCardsList className="cities__places-list places__list tabs__content" itemClassName="cities" {...props}/>
  )
}
