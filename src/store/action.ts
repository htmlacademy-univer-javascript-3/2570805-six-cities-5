import {createAction} from '@reduxjs/toolkit';
import {OfferBase, OfferDescription, OfferPreview, OfferReview} from '../types/offer.ts';
import {City} from '../types/city.ts';
import {SortingOption} from '../types/sorting-option.ts';
import {AppRoute, AuthorizationStatus} from '../consts/consts.ts';
import {User} from '../types/user.ts';

export const changeCityAction = createAction<City>('filter/changeCity');

export const updateOfferPreviewsAction = createAction<OfferPreview[]>('data/updateOffers');

export const changeSortingOptionAction = createAction<SortingOption<OfferBase>>('filter/changeSortingOption');

export const setOfferPreviewsLoadingAction = createAction<boolean>('data/setOfferPreviewsLoading');

export const setOfferDescriptionLoadingAction = createAction<boolean>('data/setOfferDescriptionLoading');

export const setAuthorizationStatusAction = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export const setCurrentUserAction = createAction<User | null>('user/setCurrentUser');

export const setOfferDescriptionAction = createAction<OfferDescription>('data/setOfferDescription');

export const setNearbyOffersAction = createAction<OfferPreview[]>('data/setNearbyOffers');

export const setOfferReviewsAction = createAction<OfferReview[]>('data/setOfferReviews');
export const addOfferReviewAction = createAction<OfferReview>('data/addOfferReview');

export const redirectToRouteAction = createAction<AppRoute>('route/redirectToRoute');
