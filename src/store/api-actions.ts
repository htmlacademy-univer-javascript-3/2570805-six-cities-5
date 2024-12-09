import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, AppState} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {OfferPreview} from '../types/offer.ts';
import {APIRoute, AppRoute, AuthorizationStatus} from '../consts/consts.ts';
import {
  redirectToRouteAction,
  setAuthorizationStatus,
  setCurrentUser,
  setLoadingAction,
  updateOffersAction
} from './action.ts';
import {dropToken, setToken} from '../services/token.ts';
import {UserData} from '../types/user.ts';
import {AuthData} from '../types/auth-data.ts';

export const fetchOfferPreviewsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'fetchOfferPreviews',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingAction(true));
    const {data} = await api.get<OfferPreview[]>(APIRoute.Offers);
    dispatch(setLoadingAction(false));
    dispatch(updateOffersAction(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingAction(true));
    try{
      const {data: {token: token, ...user}} = await api.get<UserData>(APIRoute.Login);
      setToken(token);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setCurrentUser(user));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token, ...user}} = await api.post<UserData>(APIRoute.Login, {email, password});
    setToken(token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setCurrentUser(user));
    dispatch(redirectToRouteAction(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: AppState;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(setCurrentUser(null));
  },
);

