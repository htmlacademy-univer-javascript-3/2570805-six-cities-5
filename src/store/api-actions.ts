import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, AppState} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {OfferDescription, OfferPreview, OfferReview} from '../types/offer.ts';
import {APIRoute, AppRoute} from '../consts/consts.ts';
import {
  redirectToRouteAction
} from './action.ts';
import {dropToken, setToken} from '../services/token.ts';
import {User, UserData} from '../types/user.ts';
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

export const fetchNearbyOffersAction = createAsyncThunk<OfferPreview[], string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferPreview[]>(APIRoute.NearbyOffers.replace('{offerId}', offerId));
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<OfferReview[], string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferReview[]>(APIRoute.Reviews.replace('{offerId}', offerId));
    return data;
  }
);

export const sendReviewAction = createAsyncThunk<OfferReview, ReviewRequest, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({offerId, comment, rating}, {extra: api}) => {
    const {data} = await api.post<OfferReview>(APIRoute.Reviews.replace('{offerId}', offerId), {comment, rating: rating});
    return data;
  }
);

export const fetchOfferDescriptionAction = createAsyncThunk<OfferDescription | null, string, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'data/fetchOfferDescription',
  async (offerId, {dispatch, extra: api}) => {
    try {
      dispatch(fetchNearbyOffersAction(offerId));
      dispatch(fetchReviewsAction(offerId));
      const {data} = await api.get<OfferDescription>(APIRoute.SpecificOffer.replace('{offerId}', offerId));
      return data;
    } catch (error) {
      dispatch(redirectToRouteAction(AppRoute.NotFound));
    }
    return null;
  }
);

export const fetchFavoritesAction = createAsyncThunk<OfferPreview[], undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferPreview[]>(APIRoute.Favorite);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data: {token: token, ...user}} = await api.get<UserData>(APIRoute.Login);
    setToken(token);
    return user;
  }
);

export const loginAction = createAsyncThunk<User, AuthData, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token, ...user}} = await api.post<UserData>(APIRoute.Login, {email, password});
    setToken(token);
    dispatch(redirectToRouteAction(AppRoute.Root));
    return user;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

