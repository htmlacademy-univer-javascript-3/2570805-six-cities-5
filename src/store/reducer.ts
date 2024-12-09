import {createReducer} from '@reduxjs/toolkit';
import {OFFERS_SORTING_OPTIONS} from '../consts/consts.ts';
import {changeCityAction, changeSortingOptionAction, setLoadingAction, updateOffersAction} from './action.ts';
import {OfferBase, OfferPreview} from '../types/offer.ts';
import {City} from '../types/city.ts';
import {SortingOption} from '../types/sorting-option.ts';
import {CITIES} from '../consts/cities.ts';

type InitialState = {
  city: City;
  offers: OfferPreview[];
  sortingOption: SortingOption<OfferBase>;
  isLoading: boolean;
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: [],
  sortingOption: OFFERS_SORTING_OPTIONS[0],
  isLoading: false,
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
    });
});
