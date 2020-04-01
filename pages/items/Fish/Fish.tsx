import React from 'react';
import { Card, Tag, Row, Col } from 'antd';
import {
  ClockCircleTwoTone,
  CalendarTwoTone,
  EnvironmentTwoTone,
} from '@ant-design/icons';
import { Hour, Month } from 'types/datetime';
import { allHours, allMonths, getMonthDisplay } from 'data/datetime';
import { Item } from 'types/item';
import css from './Fish.module.scss';

function getHourDisplay(hour: Hour, options?: { isEnd: boolean }): string {
  const switchCheck = options?.isEnd ? hour + 1 : hour;
  switch (switchCheck) {
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
      return `${switchCheck}AM`;
    case 12:
      return `${switchCheck}PM`;
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
      return `${switchCheck - 12}PM`;
    default:
      return 'what are you doing?';
  }
}

interface TimePeriod {
  start: Hour;
  end: Hour;
}

function renderHours(hours: Hour[]): JSX.Element | String {
  if (hours === allHours) {
    return <Tag className={css.tag}>All day</Tag>;
  }

  const timePeriods = hours.reduce<TimePeriod[]>(function(
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
        >{`${getHourDisplay(start)}-${getHourDisplay(end, {
          isEnd: true,
        })}`}</Tag>
      ))}
    </>
  );
}

function renderMonths(months: Month[]): JSX.Element {
  return (
    <>
      {allMonths.map((month) => (
        <Tag
          key={`month-${month}`}
          className={css.tag}
          color={months.includes(month) ? 'blue' : 'default'}
        >
          {getMonthDisplay(month)}
        </Tag>
      ))}
    </>
  );
}

type FishPropType = {
  fish: Item;
};

export function Fish({ fish }: FishPropType) {
  return (
    <Card key={fish.name} title={fish.name} bodyStyle={{ padding: '16px' }}>
      <Row gutter={[0, 4]} align="top">
        <Col flex="32px">
          <img src="/img/bells.png" className={css.bellsImg} />
        </Col>
        <Col>{fish.price}</Col>
      </Row>
      <Row gutter={[0, 4]} align="top">
        <Col flex="32px">
          <EnvironmentTwoTone className={css.icon} />
        </Col>
        <Col>{fish.location}</Col>
      </Row>
      <Row gutter={[0, 4]} align="top">
        <Col flex="32px">
          <ClockCircleTwoTone className={css.icon} />
        </Col>
        <Col className={css.tagColumn}>{renderHours(fish.hoursActive)}</Col>
      </Row>
      <Row gutter={[0, 4]} align="top">
        <Col flex="32px">
          <CalendarTwoTone className={css.icon} />
        </Col>
        <Col className={css.tagColumn}>{renderMonths(fish.monthsActive)}</Col>
      </Row>
    </Card>
  );
}
