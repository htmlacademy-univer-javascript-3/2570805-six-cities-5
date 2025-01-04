import {store} from '../store';
import {OfferBase, OfferDescription, OfferPreview, OfferReview} from './offer.ts';
import {AuthorizationStatus} from '../consts/consts.ts';
import {User} from './user.ts';
import {City} from './city.ts';
import {SortingOption} from './sorting-option.ts';

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type OffersData = {
  isOfferPreviewsLoading: boolean;
  isOfferDescriptionLoading: boolean;
  isFavoritesLoading: boolean;
  offerDescription: OfferDescription | null;
  reviews: OfferReview[];
  nearbyOffers: OfferPreview[];
  offerPreviews: OfferPreview[];
  favorites: OfferPreview[]
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  currentUser: User | null;
}

export type OptionsProcess = {
  city: City;
  sortingOption: SortingOption<OfferBase>;
}
