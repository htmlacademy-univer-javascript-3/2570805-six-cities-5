import {OfferPreview} from '../../types/offer.ts';
import {PremiumLabel} from '../premium-label.tsx';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../consts.ts';
import {OfferPreviewInfo} from '../offer-preview-info.tsx';

type OfferCardProps = {
  offerPreview: OfferPreview;
  setActiveOfferPreview: (id: string) => void;
}

export function OfferCard({offerPreview, setActiveOfferPreview}: OfferCardProps): JSX.Element {
  const offerDescriptionUrl = `${AppRoutes.OfferBase}/${offerPreview.id}`;
  function handleOnMouseOver() {
    setActiveOfferPreview(offerPreview.id);
  }

  return (
    <article className="cities__card place-card" onMouseOver={handleOnMouseOver}>
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
