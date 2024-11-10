import {OfferPreview} from '../../types/offer.ts';
import {PremiumLabel} from '../premium-label.tsx';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../consts.ts';
import {OfferPreviewInfo} from '../offer-preview-info.tsx';

type OfferCardProps = {
  offerPreview: OfferPreview;
  setActiveOfferPreview: (id: string | null) => void;
}

export function OfferCard({offerPreview, setActiveOfferPreview}: OfferCardProps): JSX.Element {
  const offerDescriptionUrl = `${AppRoutes.OfferBase}/${offerPreview.id}`;
  function handleOnMouseOver() {
    setActiveOfferPreview(offerPreview.id);
  }

  function handleOnMouseLeave() {
    setActiveOfferPreview(null);
  }

  return (
    <article className="cities__card place-card" onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
      <PremiumLabel isPremium={offerPreview.isPremium}/>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerDescriptionUrl}>
          <img className="place-card__image" src={offerPreview.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <OfferPreviewInfo offerDescriptionUrl={offerDescriptionUrl} {...offerPreview}/>
      </div>
    </article>
  );
}
