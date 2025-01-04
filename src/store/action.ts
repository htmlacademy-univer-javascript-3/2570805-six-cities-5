import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../consts/consts.ts';

export const redirectToRouteAction = createAction<AppRoute>('route/redirectToRoute');
