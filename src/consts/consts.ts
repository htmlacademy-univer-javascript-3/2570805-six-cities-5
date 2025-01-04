import {SortingOption} from '../types/sorting-option.ts';
import {OfferBase} from '../types/offer.ts';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  SpecificOffer = '/offer/:id',
  Offer = '/offer',
  NotFound = '/notFound'
}

export enum APIRoute {
  Offers = '/offers',
  SpecificOffer = '/offers/{offerId}',
  NearbyOffers = '/offers/{offerId}/nearby',
  Reviews = '/comments/{offerId}',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite'
}

export const MIN_REVIEW_LENGTH = 50;
export const MAX_REVIEW_LENGTH = 300;

export const MAX_REVIEWS_COUNT = 10;

export const MAX_NEARBY_OFFERS = 3;

export enum OfferMarker {
  Default = 'img/pin.svg',
  Current = 'img/pin-active.svg'
}

export const OFFERS_SORTING_OPTIONS: readonly SortingOption<OfferBase>[] = [
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
] as const;

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  Options = 'Options',
}
