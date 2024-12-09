import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, AppState} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {OfferPreview} from '../types/offer.ts';
import {APIRoute} from '../consts/consts.ts';
import {setLoadingAction, updateOffersAction} from './action.ts';

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
