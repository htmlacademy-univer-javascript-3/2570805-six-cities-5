import {createAction} from '@reduxjs/toolkit';
import {OfferPreview} from '../types/offer.ts';
import {CityName} from '../types/city.ts';

export const changeCity = createAction<{city: CityName}>('changeCity');

export const updateOffers = createAction<{offers: OfferPreview[]}>('updateOffers');
