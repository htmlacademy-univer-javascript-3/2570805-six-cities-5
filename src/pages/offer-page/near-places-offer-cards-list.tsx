import {OfferCardsList} from '../../components/offer-card/offer-cards-list.tsx';
import {OfferPreview} from '../../types/offer.ts';

type NearPlacesOfferCardsListProps = {
  offerPreviews: OfferPreview[];
}

export function NearPlacesOfferCardsList(props: NearPlacesOfferCardsListProps) {
  return (
    <OfferCardsList className="near-places__list places__list" itemClassName="near-places" {...props}/>
  )
}
