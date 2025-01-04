import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, AppState} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {OfferDescription, OfferPreview, OfferReview} from '../types/offer.ts';
import {APIRoute, AppRoute, AuthorizationStatus} from '../consts/consts.ts';
import {
  redirectToRouteAction,
  setAuthorizationStatusAction,
  setCurrentUserAction,
  setOfferPreviewsLoadingAction, setNearbyOffersAction, setOfferDescriptionAction, setOfferReviewsAction,
  setOfferDescriptionLoadingAction, addOfferReviewAction
} from './action.ts';
import {dropToken, setToken} from '../services/token.ts';
import {UserData} from '../types/user.ts';
import {AuthData} from '../types/auth-data.ts';
import {ReviewRequest} from '../types/review-request.ts';

export const fetchOfferPreviewsAction = createAsyncThunk<OfferPreview[], undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'data/fetchOfferPreviews',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferPreview[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferPreview[]>(APIRoute.NearbyOffers.replace('{offerId}', offerId));
    dispatch(setNearbyOffersAction(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferReview[]>(APIRoute.Reviews.replace('{offerId}', offerId));
    dispatch(setOfferReviewsAction(data));
  }
);

export const sendReviewAction = createAsyncThunk<void, ReviewRequest, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<OfferReview>(APIRoute.Reviews.replace('{offerId}', offerId), {comment, rating: rating});
    dispatch(addOfferReviewAction(data));
  }
);

export const fetchOfferDescriptionAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'data/fetchOfferDescription',
  async (offerId, {dispatch, extra: api}) => {
    try {
      dispatch(setOfferDescriptionLoadingAction(true));
      dispatch(fetchNearbyOffersAction(offerId));
      dispatch(fetchReviewsAction(offerId));
      const {data} = await api.get<OfferDescription>(APIRoute.SpecificOffer.replace('{offerId}', offerId));
      dispatch(setOfferDescriptionAction(data));
    } catch (error) {
      dispatch(redirectToRouteAction(AppRoute.NotFound));
    } finally {
      dispatch(setOfferDescriptionLoadingAction(false));
    }
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOfferPreviewsLoadingAction(true));
    try{
      const {data: {token: token, ...user}} = await api.get<UserData>(APIRoute.Login);
      setToken(token);
      dispatch(setAuthorizationStatusAction(AuthorizationStatus.Auth));
      dispatch(setCurrentUserAction(user));
    } catch {
      dispatch(setAuthorizationStatusAction(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token, ...user}} = await api.post<UserData>(APIRoute.Login, {email, password});
    setToken(token);
    dispatch(setAuthorizationStatusAction(AuthorizationStatus.Auth));
    dispatch(setCurrentUserAction(user));
    dispatch(redirectToRouteAction(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatusAction(AuthorizationStatus.NoAuth));
    dispatch(setCurrentUserAction(null));
  },
);

