import getMonth from 'date-fns/getMonth';
import getHours from 'date-fns/getHours';
import { Item } from 'types/item';
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
