import {createAction} from '@reduxjs/toolkit';
import {OfferBase, OfferPreview} from '../types/offer.ts';
import {CityName} from '../types/city.ts';
import {SortingOption} from '../types/sorting-option.ts';

export const changeCity = createAction<{city: CityName}>('changeCity');

export const updateOffers = createAction<{offers: OfferPreview[]}>('updateOffers');

export const changeSortingOption = createAction<{sortingOption: SortingOption<OfferBase>}>('changeSortingOption');
