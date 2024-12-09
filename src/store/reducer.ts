import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, OFFERS_SORTING_OPTIONS} from '../consts/consts.ts';
import {
  changeCityAction,
  changeSortingOptionAction,
  setAuthorizationStatus, setCurrentUser,
  setLoadingAction,
  updateOffersAction
} from './action.ts';
import {OfferBase, OfferPreview} from '../types/offer.ts';
import {City} from '../types/city.ts';
import {SortingOption} from '../types/sorting-option.ts';
import {CITIES} from '../consts/cities.ts';
import {User} from '../types/user.ts';

type InitialState = {
  city: City;
  sortingOption: SortingOption<OfferBase>;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  currentUser: User | null;
  offers: OfferPreview[];
}

const initialState: InitialState = {
  city: CITIES[0],
  sortingOption: OFFERS_SORTING_OPTIONS[0],
  isLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentUser: null,
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(updateOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortingOptionAction, (state, action) => {
      state.sortingOption = action.payload;
    })
    .addCase(setLoadingAction, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setCurrentUser, (state, action) => {
      state.currentUser = action.payload;
    });
});
