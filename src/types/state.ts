import {store} from '../store';
import {OfferDescription, OfferPreview, OfferReview} from './offer.ts';

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type OffersData = {
  isOfferPreviewsLoading: boolean;
  isOfferDescriptionLoading: boolean;
  offerDescription: OfferDescription | null;
  reviews: OfferReview[];
  nearbyOffers: OfferPreview[];
  offers: OfferPreview[];
}


