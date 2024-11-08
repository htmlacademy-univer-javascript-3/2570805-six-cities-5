import {Location} from './location.ts';
import {User} from './user.ts';

export type OfferType = 'apartment' | 'room' | 'hotel';

export type OfferBase = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: {
    name: string;
    location: Location;
  };
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

export type OfferComment = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}
