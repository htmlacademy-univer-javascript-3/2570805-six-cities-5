import {OfferPreview} from '../../types/offer.ts';
import {FavoriteCard} from './favorite-card.tsx';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {changeCityAction} from '../../store/options-process/options-process.ts';
import {CITIES} from '../../consts/cities.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts/consts.ts';

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
  const dispatch = useAppDispatch();
  const favoritesByCity = getFavoritesByCity(favorites);

  function handleCityClick(city: string) {
    dispatch(changeCityAction(CITIES.find((c) => c.name === city)!));
  }

  return (
    <ul className="favorites__list">
      {[...favoritesByCity.entries()].map(([city, cityFavorites]) => (
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root} onClick={() => handleCityClick(city)}>
                <span>{city}</span>
              </Link>
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
