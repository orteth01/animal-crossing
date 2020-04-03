import { Tag } from 'antd';
import { allHours } from 'data/datetime';
import { hourToString } from 'helpers/datetime';
import { Unknown } from 'types/item';
import { Hour, TimePeriod } from 'types/datetime';
import css from './Hours.module.scss';

type HoursPropType = {
  activeHours: Hour[] | Unknown;
};

export function Hours({ activeHours }: HoursPropType): JSX.Element {
  if (activeHours === allHours) {
    return <Tag className={css.tag}>All day</Tag>;
  }

  if (activeHours === 'unknown') {
    return <Tag className={css.tag}>Unknown</Tag>;
  }

  const timePeriods = activeHours.reduce<TimePeriod[]>(function(
    acc,
    hour
  ): TimePeriod[] {
    if (acc.length > 0 && acc[acc.length - 1].end === hour - 1) {
      acc[acc.length - 1].end = hour;
    } else {
      acc.push({ start: hour, end: hour });
    }
    return acc;
  },
  []);

  if (
    timePeriods[0].start === 0 &&
    timePeriods[timePeriods.length - 1].end === 23
  ) {
    const first = timePeriods.shift();
    const last = timePeriods.pop();
    if (first && last) {
      timePeriods.push({ start: last.start, end: first.end });
    }
  }

  return (
    <>
      {timePeriods.map(({ start, end }) => (
        <Tag
          key={`time-period-${start}-${end}`}
          className={css.tag}
        >{`${hourToString(start)}-${hourToString(
          ((end + 1) % 24) as Hour
        )}`}</Tag>
      ))}
    </>
  );
}
