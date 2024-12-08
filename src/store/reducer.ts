import {createReducer} from '@reduxjs/toolkit';
import {CITIES, OFFERS_SORTING_OPTIONS} from '../consts.ts';
import {changeCity, changeSortingOption, updateOffers} from './action.ts';
import {OfferBase, OfferPreview} from '../types/offer.ts';
import {OFFER_PREVIEWS_MOCK} from '../mocks/mocks.ts';
import {CityName} from '../types/city.ts';
import {SortingOption} from '../types/sorting-option.ts';

type InitialState = {
  city: CityName;
  offers: OfferPreview[];
  sortingOption: SortingOption<OfferBase>;
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: OFFER_PREVIEWS_MOCK,
  sortingOption: OFFERS_SORTING_OPTIONS[0],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(changeSortingOption, (state, action) => {
      state.sortingOption = action.payload.sortingOption;
    });
});
