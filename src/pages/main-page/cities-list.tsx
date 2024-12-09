import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {City} from '../../types/city.ts';
import {changeCityAction} from '../../store/action.ts';

type CitiesListProps = {
  cities: readonly City[];
}

export function CitiesList({cities}: CitiesListProps): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  function handleOnCityClick(city: City) {
    dispatch(changeCityAction(city));
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city.name}>
              <a
                className={`locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`}
                onClick={() => handleOnCityClick(city)}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
