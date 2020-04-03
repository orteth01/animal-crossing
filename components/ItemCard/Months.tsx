import { Tag } from 'antd';
import cx from 'classnames';
import { allMonths } from 'data/datetime';
import { monthToString } from 'helpers/datetime';
import { Month } from 'types/datetime';
import css from './Months.module.scss';

type MonthsPropType = {
  activeMonths: Set<Month>;
};

export function Months({ activeMonths }: MonthsPropType) {
  return (
    <>
      {Array.from(allMonths).map((month) => (
        <Tag
          key={`month-${month}`}
          className={cx(css.tag, {
            [css.isInactive]: !activeMonths.has(month),
          })}
          color={activeMonths.has(month) ? 'blue' : 'default'}
        >
          {monthToString(month)}
        </Tag>
      ))}
    </>
  );
}
