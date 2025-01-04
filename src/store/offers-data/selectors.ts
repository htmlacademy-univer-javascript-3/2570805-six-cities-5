import {AppState} from '../../types/state.ts';
import {MAX_NEARBY_OFFERS, NameSpace} from '../../consts/consts.ts';
import {createSelector} from '@reduxjs/toolkit';
import {getCity, getSortingOption} from '../options-process/selectors.ts';

export const getOfferPreviews = createSelector([
    getSortingOption,
    getCity,
    (state: Pick<AppState, NameSpace.Data>) => state[NameSpace.Data].offerPreviews
  ],
  (sortingOption, city, offerPreviews) => {
    return offerPreviews
      .filter((o) => o.city.name === city.name)
      .sort(sortingOption.compareFn);
  });

export const getOfferPreviewsLoadingStatus = (state: Pick<AppState, NameSpace.Data>) => state[NameSpace.Data].isOfferPreviewsLoading;
export const getOfferDescription = (state: Pick<AppState, NameSpace.Data>) => state[NameSpace.Data].offerDescription;
export const getOfferDescriptionLoadingStatus = (state: Pick<AppState, NameSpace.Data>) => state[NameSpace.Data].isOfferDescriptionLoading;
export const getNearbyOffers = createSelector(
  [(state: Pick<AppState, NameSpace.Data>) => state[NameSpace.Data].nearbyOffers],
  (offers) => offers.slice(0, MAX_NEARBY_OFFERS)
);
export const getReviews = (state: Pick<AppState, NameSpace.Data>) => state[NameSpace.Data].reviews;
export const getFavorites = (state: Pick<AppState, NameSpace.Data>) => state[NameSpace.Data].favorites;
