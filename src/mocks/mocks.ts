import offerPreviewsJson from './offers.json';
import favoritesJson from './favorites.json';
import offersDescriptionJson from './offer-description.json';
import commentJson from './comments.json';
import {OfferPreview, OfferDescription, OfferComment} from '../types/offer.ts';

export const OFFER_PREVIEWS_MOCK: OfferPreview[] = offerPreviewsJson as OfferPreview[];
export const OFFER_DESCRIPTION_MOCK: OfferDescription = offersDescriptionJson as OfferDescription;
export const FAVORITES_MOCK: OfferPreview[] = favoritesJson as OfferPreview[];
export const COMMENTS_MOCK: OfferComment[] = commentJson as OfferComment[];
