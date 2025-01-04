import {RatingStars} from '../rating-stars/rating-stars.tsx';
import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offer.ts';
import {BookmarkButton} from '../bookmark-button/bookmark-button.tsx';

type OfferPreviewInfoProps = {
  offerDescriptionUrl: string;
  price: number;
  rating: number;
  title: string;
  type: OfferType;
  id: string;
  isFavorite: boolean;
}

export function OfferPreviewInfo({offerDescriptionUrl, price, rating, title, type, id, isFavorite}: OfferPreviewInfoProps) {
  return (
    <>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <BookmarkButton id={id} isFavorite={isFavorite} className={'place-card'} width={18} height={19}/>
      </div>
      <RatingStars rating={rating} className="place-card"/>
      <h2 className="place-card__name">
        <Link to={offerDescriptionUrl}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </>
  );
}
