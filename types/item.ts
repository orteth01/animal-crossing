import { Hour, Month } from './datetime';

export type FishLocation =
  | 'River'
  | 'Pond'
  | 'River (clifftop)'
  | 'River (mouth)'
  | 'Sea'
  | 'Pier'
  | 'Sea (rainy day)';

export type FishShadowSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type InsectLocation =
  | 'Flying'
  | 'Flying by hybrid flowers'
  | 'Flying by purple flowers'
  | 'Flying by light'
  | 'On trees'
  | 'On tree stumps'
  | 'On coconut trees'
  | 'Falls from shaking trees'
  | 'On ground'
  | 'Dig at cricket noise'
  | 'On flowers'
  | 'On white flowers'
  | 'Underground'
  | 'Ponds'
  | 'Ponds and rivers'
  | 'Pushing snowballs'
  | 'Near trees, disguised as furniture leaf'
  | 'Beach'
  | 'On rocks at beach'
  | 'On rocks (raining)'
  | 'Hit rocks'
  | 'On trash items'
  | 'On villagers'
  | 'On rotten food';

export type Location = FishLocation | InsectLocation;

export type Unknown = 'unknown';

export interface Item {
  name: string;
  value: number;
}
export interface Shell extends Item {}
export interface Fish extends Item {
  location: Location | Unknown;
  activeHours: Hour[] | Unknown;
  activeMonths: Set<Month>;
  shadow: FishShadowSize;
}
export interface Insect extends Item {
  location: Location | Unknown;
  activeHours: Hour[] | Unknown;
  activeMonths: Set<Month>;
}

export type ItemSortBy = 'Name' | 'Value (low-high)' | 'Value (high-low)';
