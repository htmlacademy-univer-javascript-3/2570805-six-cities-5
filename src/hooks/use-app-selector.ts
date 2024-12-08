import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {AppState} from '../types/state.ts';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
