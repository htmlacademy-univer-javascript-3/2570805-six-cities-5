import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, OFFERS_SORTING_OPTIONS} from '../consts/consts.ts';
import {
  changeCityAction,
  changeSortingOptionAction,
  setAuthorizationStatusAction, setCurrentUserAction,
  setOfferPreviewsLoadingAction, setNearbyOffersAction, setOfferDescriptionAction, setOfferReviewsAction,
  updateOfferPreviewsAction, setOfferDescriptionLoadingAction
} from './action.ts';
import {OfferBase, OfferDescription, OfferPreview, OfferReview} from '../types/offer.ts';
import {City} from '../types/city.ts';
import {SortingOption} from '../types/sorting-option.ts';
import {CITIES} from '../consts/cities.ts';
import {User} from '../types/user.ts';

type InitialState = {
  city: City;
  sortingOption: SortingOption<OfferBase>;
  isOfferPreviewsLoading: boolean;
  isOfferDescriptionLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  currentUser: User | null;
  offerDescription: OfferDescription | null;
  reviews: OfferReview[];
  nearbyOffers: OfferPreview[];
  offers: OfferPreview[];
}

const initialState: InitialState = {
  city: CITIES[0],
  sortingOption: OFFERS_SORTING_OPTIONS[0],
  isOfferPreviewsLoading: false,
  isOfferDescriptionLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentUser: null,
  offerDescription: null,
  reviews: [],
  nearbyOffers: [],
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(updateOfferPreviewsAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortingOptionAction, (state, action) => {
      state.sortingOption = action.payload;
    })
    .addCase(setOfferPreviewsLoadingAction, (state, action) => {
      state.isOfferPreviewsLoading = action.payload;
    })
    .addCase(setOfferDescriptionLoadingAction, (state, action) => {
      state.isOfferDescriptionLoading = action.payload;
    })
    .addCase(setAuthorizationStatusAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setCurrentUserAction, (state, action) => {
      state.currentUser = action.payload;
    })
    .addCase(setOfferDescriptionAction, (state, action) => {
      state.offerDescription = action.payload;
    })
    .addCase(setNearbyOffersAction, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setOfferReviewsAction, (state, action) => {
      state.reviews = action.payload;
    });
});
