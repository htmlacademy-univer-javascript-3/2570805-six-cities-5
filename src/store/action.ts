import {createAction} from '@reduxjs/toolkit';
import {OfferBase, OfferPreview} from '../types/offer.ts';
import {City} from '../types/city.ts';
import {SortingOption} from '../types/sorting-option.ts';
import {AppRoute, AuthorizationStatus} from '../consts/consts.ts';
import {User} from '../types/user.ts';

export const changeCityAction = createAction<City>('changeCity');

export const updateOffersAction = createAction<OfferPreview[]>('updateOffers');

export const changeSortingOptionAction = createAction<SortingOption<OfferBase>>('changeSortingOption');

export const setLoadingAction = createAction<boolean>('setLoading');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('setAuthorizationStatus');

export const setCurrentUser = createAction<User | null>('setCurrentUser');

export const redirectToRouteActionName = 'redirectToRoute';
export const redirectToRouteAction = createAction<AppRoute>(redirectToRouteActionName);
