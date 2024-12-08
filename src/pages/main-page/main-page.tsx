import {useState} from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes, CITIES} from '../../consts.ts';
import {Map} from '../../components/map/map.tsx';
import {CitiesOfferCardsList} from './cities-offer-cards-list.tsx';
import {CitiesList} from './cities-list.tsx';
import {useAppSelector} from '../../hooks/use-app-selector.ts';

export function MainPage(): JSX.Element {
  const [activeOfferPreviewId, setActiveOfferPreviewIdId] = useState<string | null>(null);
  const cityName = useAppSelector((state) => state.city);
  const offerPreviews = useAppSelector((state) => state.offers)
    .filter((o) => o.city.name === cityName);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoutes.Root}>
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList cities={CITIES}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerPreviews.length} places to stay in {cityName}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <CitiesOfferCardsList offerPreviews={offerPreviews} setActiveOfferPreview={setActiveOfferPreviewIdId}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={offerPreviews[0].city} offers={offerPreviews} activeOfferPreviewId={activeOfferPreviewId}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
