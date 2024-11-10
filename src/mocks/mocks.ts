import offerPreviewsJson from './offers.json';
import favoritesJson from './favorites.json';
import offersDescriptionJson from './offer-description.json';
import offerReviewsJson from './offer-reviews.json';
import {OfferPreview, OfferDescription, OfferReview} from '../types/offer.ts';

export const OFFER_PREVIEWS_MOCK: OfferPreview[] = offerPreviewsJson as OfferPreview[];
export const OFFER_DESCRIPTION_MOCK: OfferDescription = offersDescriptionJson as OfferDescription;
export const FAVORITES_MOCK: OfferPreview[] = favoritesJson as OfferPreview[];
export const OFFER_REVIEWS_MOCK: OfferReview[] = offerReviewsJson as OfferReview[];
