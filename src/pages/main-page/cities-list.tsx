import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {CityName} from '../../types/city.ts';
import {changeCity} from '../../store/action.ts';

type CitiesListProps = {
  cities: readonly CityName[];
}

export function CitiesList({cities}: CitiesListProps): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  function handleOnCityClick(city: CityName) {
    dispatch(changeCity({city: city}));
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <a
                className={`locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`}
                onClick={() => handleOnCityClick(city)}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
