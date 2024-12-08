import {createReducer} from '@reduxjs/toolkit';
import {CITIES} from '../consts.ts';
import {changeCity, updateOffers} from './action.ts';
import {OfferPreview} from '../types/offer.ts';
import {OFFER_PREVIEWS_MOCK} from '../mocks/mocks.ts';
import {CityName} from '../types/city.ts';

type InitialState = {
  city: CityName;
  offers: OfferPreview[];
}

const initialState: InitialState = {
  city: CITIES[0],
  offers: OFFER_PREVIEWS_MOCK,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(updateOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});
