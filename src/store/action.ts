import {createAction} from '@reduxjs/toolkit';
import {OfferBase, OfferDescription, OfferPreview, OfferReview} from '../types/offer.ts';
import {City} from '../types/city.ts';
import {SortingOption} from '../types/sorting-option.ts';
import {AppRoute, AuthorizationStatus} from '../consts/consts.ts';
import {User} from '../types/user.ts';

export const changeCityAction = createAction<City>('changeCity');

export const updateOfferPreviewsAction = createAction<OfferPreview[]>('updateOffers');

export const changeSortingOptionAction = createAction<SortingOption<OfferBase>>('changeSortingOption');

export const setOfferPreviewsLoadingAction = createAction<boolean>('setOfferPreviewsLoading');

export const setOfferDescriptionLoadingAction = createAction<boolean>('setOfferDescriptionLoading');

export const setAuthorizationStatusAction = createAction<AuthorizationStatus>('setAuthorizationStatus');

export const setCurrentUserAction = createAction<User | null>('setCurrentUser');

export const setOfferDescriptionAction = createAction<OfferDescription>('setOfferDescription');

export const setNearbyOffersAction = createAction<OfferPreview[]>('setNearbyOffers');

export const setOfferReviewsAction = createAction<OfferReview[]>('setOfferReviews');
export const addOfferReviewAction = createAction<OfferReview>('addOfferReview');

export const redirectToRouteActionName = 'redirectToRoute';
export const redirectToRouteAction = createAction<AppRoute>(redirectToRouteActionName);
