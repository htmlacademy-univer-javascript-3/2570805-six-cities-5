import {Location} from './location.ts';
import {CITIES} from '../consts.ts';

export type CityName = typeof CITIES[number];

export type City = {
  name: CityName;
  location: Location;
}
