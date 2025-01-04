import {AppState} from '../../types/state.ts';
import {NameSpace} from '../../consts/consts.ts';

export const getCity = (state: Pick<AppState, NameSpace.Options>) => state[NameSpace.Options].city;
export const getSortingOption = (state: Pick<AppState, NameSpace.Options>) => state[NameSpace.Options].sortingOption;
