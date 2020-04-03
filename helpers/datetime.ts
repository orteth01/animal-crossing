import { Month, Hour } from 'types/datetime';
import format from 'date-fns/format';

export function monthToString(month: Month): string {
  return format(new Date(2000, month, 1), 'LLLL');
}

export function hourToString(hour: Hour): string {
  switch (hour) {
    case 0:
      return '12AM';
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return `${hour}AM`;
    case 12:
      return `${hour}PM`;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      return `${hour - 12}PM`;
    default:
      return 'what are you doing?';
  }
}
