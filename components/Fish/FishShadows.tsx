import cx from 'classnames';
import { Item } from 'types/item';
import css from './FishShadows.module.scss';

const shadows = [
  'smallest',
  'small',
  'medium',
  'large',
  'x-large',
  'huge',
  'huge-fin',
  'slim',
];

type FishShadowsPropType = {
  fish: Item;
};

export function FishShadows({ fish }: FishShadowsPropType) {
  return (
    <>
      {shadows.map((fishShadow, index) => {
        const isActive = fish.shadow === index;
        return (
          <img
            key={`shadow-${fishShadow}`}
            className={cx(css.shadow, {
              [css.isActive]: isActive,
              [css.isInactive]: !isActive,
            })}
            src={`/img/${fishShadow}.png`}
          />
        );
      })}
    </>
  );
}
