import {NameSpace, OFFERS_SORTING_OPTIONS} from '../../consts/consts.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CITIES} from '../../consts/cities.ts';
import {OptionsProcess} from '../../types/state.ts';
import {SortingOption} from '../../types/sorting-option.ts';
import {OfferBase} from '../../types/offer.ts';
import {City} from '../../types/city.ts';

const initialState: OptionsProcess = {
  city: CITIES[0],
  sortingOption: OFFERS_SORTING_OPTIONS[0],
};

export const optionsProcess = createSlice({
  name: NameSpace.Options,
  initialState,
  reducers: {
    changeCityAction: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    changeSortingOptionAction: (state, action: PayloadAction<SortingOption<OfferBase>>) => {
      state.sortingOption = action.payload;
    },
  },
});

export const {changeCityAction, changeSortingOptionAction} = optionsProcess.actions;
