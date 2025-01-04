import {FavoritesList} from './favorites-list.tsx';
import {Header} from '../../components/header/header.tsx';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {getFavorites} from '../../store/offers-data/selectors.ts';
import {Footer} from '../../components/footer/footer.tsx';

export function FavoritesPage(): JSX.Element {
  const favorites = useAppSelector(getFavorites);

  const renderEmptyFavorites = (): JSX.Element => (
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
          </div>
        </section>
      </div>
    </main>
  );

  const renderFavorites = (): JSX.Element => (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList favorites={favorites}/>
        </section>
      </div>
    </main>
  );

  return (
    <div className="page">
      <Header showNavigation/>
      {favorites && favorites.length > 0 ? renderFavorites() : renderEmptyFavorites()}
      <Footer/>
    </div>
  );
}
