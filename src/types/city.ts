import {Location} from './location.ts';

export type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type City = {
  name: CityName;
  location: Location;
}
