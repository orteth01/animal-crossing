import { Hour, Month } from './datetime';

export interface Item {
  name: string;
  price: number;
  location: string;
  timesActive: Hour[];
  monthsActive: Month[];
}
