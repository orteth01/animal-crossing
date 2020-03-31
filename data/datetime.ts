import format from 'date-fns/format';
import { Hour, Month } from 'types/datetime';

export const allHours: Hour[] = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
];

export const allMonths: Month[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export function getMonthDisplay(month: Month) {
  return format(new Date(2000, month, 1), 'LLLL');
}
