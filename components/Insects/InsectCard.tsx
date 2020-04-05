import React from 'react';
import { Card, Row, Col } from 'antd';
import {
  ClockCircleTwoTone,
  CalendarTwoTone,
  EnvironmentTwoTone,
} from '@ant-design/icons';
import { Hours, Months } from 'components/ItemCard';
import { Insect } from 'types/item';
import css from './InsectCard.module.scss';

type InsectCardPropType = {
  insect: Insect;
};

export function InsectCard({ insect }: InsectCardPropType) {
  return (
    <Card key={insect.name} title={insect.name} bodyStyle={{ padding: '16px' }}>
      <Row gutter={[0, 4]} align="middle">
        <Col flex="32px">
          <img src="/img/bells.png" className={css.bellsImg} />
        </Col>
        <Col>{insect.value}</Col>
      </Row>

      <Row gutter={[0, 4]} align="middle">
        <Col flex="32px">
          <EnvironmentTwoTone className={css.icon} />
        </Col>
        <Col>{insect.location}</Col>
      </Row>

      <Row gutter={[0, 4]} align="middle">
        <Col flex="32px">
          <ClockCircleTwoTone className={css.icon} />
        </Col>
        <Col className={css.tagColumn}>
          <Hours activeHours={insect.activeHours} />
        </Col>
      </Row>

      <Row gutter={[0, 4]} align="top">
        <Col flex="32px">
          <CalendarTwoTone className={css.icon} />
        </Col>
        <Col className={css.tagColumn}>
          <Months activeMonths={insect.activeMonths} />
        </Col>
      </Row>
    </Card>
  );
}
