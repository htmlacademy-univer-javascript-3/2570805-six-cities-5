import {AppDispatch} from '../types/state.ts';
import {useDispatch} from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
