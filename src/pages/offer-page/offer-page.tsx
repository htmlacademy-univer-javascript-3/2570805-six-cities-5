import {OfferReviewForm} from './offer-review-form.tsx';
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../consts/consts.ts';
import {OfferReview, OfferDescription, OfferPreview} from '../../types/offer.ts';
import {Map} from '../../components/map/map.tsx';
import {OfferReviewsList} from './offer-reviews-list.tsx';
import {NearPlacesOfferCardsList} from './near-places-offer-cards-list.tsx';
import {RatingStars} from '../../components/rating-stars/rating-stars.tsx';
import {PremiumMark} from '../../components/premium-mark/premium-mark.tsx';


type OfferPageProps = {
  offerDescription: OfferDescription;
  offerReviews: OfferReview[];
  nearOfferPreviews: OfferPreview[];
}

export function OfferPage({offerDescription, offerReviews, nearOfferPreviews}: OfferPageProps): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoutes.Root}>
                <img className="header__logo" src="../../../public/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offerDescription.images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <PremiumMark isPremium={offerDescription.isPremium} className="offer"/>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerDescription.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <RatingStars rating={offerDescription.rating} className="offer" showRatingValue/>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offerDescription.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offerDescription.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offerDescription.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offerDescription.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offerDescription.goods.map((good) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offerDescription.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offerDescription.host.name}
                  </span>
                  {offerDescription.host.isPro &&
                    <span className="offer__user-status">
                      Pro
                    </span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offerDescription.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span></h2>
                <OfferReviewsList offerReviews={offerReviews}/>
                <OfferReviewForm/>
              </section>
            </div>
          </div>
          <section className="offer__map map" style={{height: '550px', width: '1144px', marginLeft: 'auto', marginRight: 'auto'}}>
            <Map city={nearOfferPreviews[0].city} offers={[...nearOfferPreviews, offerDescription]} activeOfferPreviewId={offerDescription.id}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlacesOfferCardsList offerPreviews={nearOfferPreviews}/>
          </section>
        </div>
      </main>
    </div>
  );
}
