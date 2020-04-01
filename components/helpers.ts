import getMonth from 'date-fns/getMonth';
import getHours from 'date-fns/getHours';
import { Item, ItemSortBy, Location } from 'types/item';
import { Month, Hour } from 'types/datetime';

export const searchFilter = (debouncedSearchValue: string) => (f: Item) =>
  f.name.toLowerCase().includes(debouncedSearchValue.toLowerCase());

export const onlyShowActiveFilter = (f: Item) => {
  const now = Date.now();
  const isActiveThisMonth = f.monthsActive.includes(getMonth(now) as Month);
  const isActiveThisHour =
    f.hoursActive === 'unknown'
      ? false
      : f.hoursActive.includes(getHours(now) as Hour);

  return isActiveThisHour && isActiveThisMonth;
};

export const locationsFilter = (locations: Location[]) => (f: Item) => {
  if (f.location === 'unknown') {
    return false;
  }
  return locations.includes(f.location);
};

export const itemSorter = (sortBy: ItemSortBy = 'Name') => (
  i1: Item,
  i2: Item
) => {
  switch (sortBy) {
    case 'Name':
      return i1.name.toLowerCase() > i2.name.toLowerCase() ? 1 : -1;
    case 'Value (high-low)':
      return i2.value - i1.value;
    case 'Value (low-high)':
      return i1.value - i2.value;
    default:
      return 0;
  }
};
