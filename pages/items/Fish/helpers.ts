import getMonth from 'date-fns/getMonth';
import getHours from 'date-fns/getHours';
import { Item, ItemSortBy } from 'types/item';
import { Month, Hour } from 'types/datetime';

export const searchFilter = (debouncedSearchValue: string) => (f: Item) =>
  f.name.toLowerCase().includes(debouncedSearchValue.toLowerCase());

export const onlyShowActiveFilter = (onlyShowActive: boolean, now: number) => (
  f: Item
) => {
  if (!onlyShowActive) {
    // no filter
    return true;
  }

  const isActiveThisMonth = f.monthsActive.includes(getMonth(now) as Month);
  const isActiveThisHour = f.hoursActive.includes(getHours(now) as Hour);

  return isActiveThisHour && isActiveThisMonth;
};

export const fishSorter = (sortBy: ItemSortBy = 'Name') => (
  f1: Item,
  f2: Item
) => {
  switch (sortBy) {
    case 'Name':
      return f1.name.toLowerCase() > f2.name.toLowerCase() ? 1 : -1;
    case 'Price (low-high)':
      return f1.price - f2.price;
    case 'Price (high-low)':
      return f2.price - f1.price;
    default:
      return 0;
  }
};
