import { Hour, Month } from './datetime';

type FishLocation =
  | 'River'
  | 'Pond'
  | 'River (clifftop)'
  | 'River (mouth)'
  | 'Sea'
  | 'Pier'
  | 'Sea (rainy day)';

type Location = FishLocation;

export interface Item {
  name: string;
  price: number;
  location: Location;
  hoursActive: Hour[];
  monthsActive: Month[];
}

export type ItemSortBy = 'Name' | 'Price (low-high)' | 'Price (high-low)';
