import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../consts/consts.ts';
import {offersData} from './offers-data/offers-data.ts';
import {userProcess} from './user-process/user-process.ts';
import {optionsProcess} from './options-process/options-process.ts';


export const reducer = combineReducers({
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Options]: optionsProcess.reducer,
});
