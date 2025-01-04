import {AppState} from '../../types/state.ts';
import {NameSpace} from '../../consts/consts.ts';

export const getAuthorizationStatus = (state: Pick<AppState, NameSpace.User>) => state[NameSpace.User].authorizationStatus;
export const getCurrentUser = (state: Pick<AppState, NameSpace.User>) => state[NameSpace.User].currentUser;
