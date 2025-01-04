import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../consts/consts.ts';
import {OffersData} from '../../types/state.ts';
import {fetchOfferPreviewsAction} from '../api-actions.ts';

const initialState: OffersData = {
  isOfferPreviewsLoading: false,
  isOfferDescriptionLoading: false,
  offerDescription: null,
  reviews: [],
  nearbyOffers: [],
  offers: [],
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferPreviewsAction.pending, (state) => {
        state.isOfferPreviewsLoading = true;
      })
      .addCase(fetchOfferPreviewsAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOfferPreviewsLoading = false;
      })
      .addCase(fetchOfferPreviewsAction.rejected, (state) => {
        state.isOfferPreviewsLoading = false;
      });
  }
});
