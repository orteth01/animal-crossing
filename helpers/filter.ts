import getMonth from 'date-fns/getMonth';
import getHours from 'date-fns/getHours';
import { Item, Fish, Insect, Location } from 'types/item';
import { Month, Hour } from 'types/datetime';

export const searchFilter = (debouncedSearchValue: string) => (f: Item) =>
  f.name.toLowerCase().includes(debouncedSearchValue.toLowerCase());

export const onlyShowActiveFilter = (f: Fish | Insect) => {
  const now = Date.now();
  const isActiveThisMonth = f.activeMonths.has(getMonth(now) as Month);
  const isActiveThisHour =
    f.activeHours === 'unknown'
      ? false
      : f.activeHours.includes(getHours(now) as Hour);

  return isActiveThisHour && isActiveThisMonth;
};

export const locationsFilter = (locations: Location[]) => (
  f: Fish | Insect
) => {
  if (f.location === 'unknown') {
    return false;
  }
  return locations.includes(f.location);
};
