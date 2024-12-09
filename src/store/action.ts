import {createAction} from '@reduxjs/toolkit';
import {OfferBase, OfferPreview} from '../types/offer.ts';
import {City} from '../types/city.ts';
import {SortingOption} from '../types/sorting-option.ts';

export const changeCityAction = createAction<City>('changeCity');

export const updateOffersAction = createAction<OfferPreview[]>('updateOffers');

export const changeSortingOptionAction = createAction<SortingOption<OfferBase>>('changeSortingOption');

export const setLoadingAction = createAction<boolean>('setLoading');
