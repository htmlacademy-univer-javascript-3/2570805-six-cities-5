import {OfferPreview} from '../../types/offer.ts';
import {PremiumLabel} from '../../components/premium-label.tsx';
import {AppRoutes} from '../../consts.ts';
import {Link} from 'react-router-dom';
import {OfferPreviewInfo} from '../../components/offer-preview-info.tsx';

type FavoriteCardProps = {
  favorite: OfferPreview;
}

export function FavoriteCard({favorite}: FavoriteCardProps) {
  const offerDescriptionUrl = `${AppRoutes.OfferBase}/${favorite.id}`;

  return (
    <article className="favorites__card place-card">
      <PremiumLabel isPremium={favorite.isPremium}/>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={offerDescriptionUrl}>
          <img className="place-card__image" src={favorite.previewImage} width="150" height="110" alt="Place image"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <OfferPreviewInfo offerDescriptionUrl={offerDescriptionUrl} {...favorite}/>
      </div>
    </article>
  );
}
