import {OfferPreview} from '../../types/offer.ts';
import {PremiumMark} from '../premium-mark/premium-mark.tsx';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../consts.ts';
import {OfferPreviewInfo} from '../offer-preview-info/offer-preview-info.tsx';

type OfferCardProps = {
  offerPreview: OfferPreview;
  setActiveOfferPreview?: (id: string | null) => void;
  className: string;
}

export function OfferCard({offerPreview, setActiveOfferPreview, className}: OfferCardProps): JSX.Element {
  const offerDescriptionUrl = `${AppRoutes.Offer}/${offerPreview.id}`;
  function handleOnMouseOver() {
    if (setActiveOfferPreview) {
      setActiveOfferPreview(offerPreview.id);
    }
  }

  function handleOnMouseLeave() {
    if (setActiveOfferPreview) {
      setActiveOfferPreview(null);
    }
  }

  return (
    <article className={`${className}__card place-card`} onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
      <PremiumMark isPremium={offerPreview.isPremium} className="place-card"/>
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
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
