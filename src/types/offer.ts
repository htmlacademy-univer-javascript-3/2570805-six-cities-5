import {Location} from './location.ts';
import {User} from './user.ts';
import {City} from './city.ts';

export type OfferType = 'apartment' | 'room' | 'hotel';

export type OfferBase = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type OfferPreview = OfferBase & {
  previewImage: string;
}

export type OfferDescription = OfferBase & {
  description: string;
  bedrooms: number;
  goods: [string];
  host: User;
  images: [string];
  maxAdults: number;
}

export type OfferReview = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}
