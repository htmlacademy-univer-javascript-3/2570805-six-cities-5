import {OfferPreview} from '../../types/offer.ts';
import {FavoriteCard} from './favorite-card.tsx';

type FavoritesListProps = {
  favorites: OfferPreview[];
}

function getFavoritesByCity(favorites: OfferPreview[]) {
  const favoritesByCity = new Map<string, OfferPreview[]>();
  favorites.forEach((favorite) => {
    const collection = favoritesByCity.get(favorite.city.name) ?? null;
    if (!collection) {
      favoritesByCity.set(favorite.city.name, [favorite]);
    } else {
      collection.push(favorite);
    }
  });
  return favoritesByCity;
}

export function FavoritesList({favorites}: FavoritesListProps) {
  const favoritesByCity = getFavoritesByCity(favorites);

  return (
    <ul className="favorites__list">
      {[...favoritesByCity.entries()].map(([city, cityFavorites]) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {cityFavorites.map((cityFavorite) => (
              <FavoriteCard key={cityFavorite.id} favorite={cityFavorite}/>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
