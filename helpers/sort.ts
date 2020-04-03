import { Item, ItemSortBy } from 'types/item';

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
