import {SortingOption} from '../types/sorting-option.ts';
import {OfferBase} from '../types/offer.ts';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoutes {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  SpecificOffer = '/offer/:id',
  Offer = '/offer'
}

export enum APIRoute {
  Offers = '/offers'
}

export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 300;

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const OFFERS_SORTING_OPTIONS: SortingOption<OfferBase>[] = [
  {
    name: 'Popular',
    compareFn: () => 0
  },
  {
    name: 'Price: low to high',
    compareFn: (a, b) => a.price - b.price
  },
  {
    name: 'Price: high to low',
    compareFn: (a, b) => b.price - a.price
  },
  {
    name: 'Top rated first',
    compareFn: (a, b) => b.rating - a.rating
  },
];
