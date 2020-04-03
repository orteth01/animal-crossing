import React from 'react';
import { Card, Row, Col } from 'antd';
import { Hours, Months } from 'components/ItemCard';
import {
  ClockCircleTwoTone,
  CalendarTwoTone,
  EnvironmentTwoTone,
} from '@ant-design/icons';
import { Item } from 'types/item';
import { FishShadows } from './FishShadows';
import css from './FishCard.module.scss';

type FishPropType = {
  fish: Item;
};

export function FishCard({ fish }: FishPropType) {
  return (
    <Card key={fish.name} title={fish.name} bodyStyle={{ padding: '16px' }}>
      <Row gutter={[0, 4]} align="middle">
        <Col flex="32px">
          <img src="/img/bells.png" className={css.bellsImg} />
        </Col>
        <Col>{fish.value}</Col>
      </Row>

      <Row gutter={[0, 4]} align="middle">
        <Col flex="32px">
          <EnvironmentTwoTone className={css.icon} />
        </Col>
        <Col>{fish.location}</Col>
      </Row>

      <Row gutter={[0, 4]} align="middle">
        <Col flex="32px">
          <ClockCircleTwoTone className={css.icon} />
        </Col>
        <Col className={css.tagColumn}>
          <Hours activeHours={fish.activeHours} />
        </Col>
      </Row>

      <Row gutter={[0, 4]} align="top">
        <Col flex="32px">
          <CalendarTwoTone className={css.icon} />
        </Col>
        <Col className={css.tagColumn}>
          <Months activeMonths={fish.activeMonths} />
        </Col>
      </Row>

      <Row
        gutter={[0, 8]}
        align="bottom"
        justify="space-between"
        style={{ padding: '10px 8px 0 0px' }}
      >
        <FishShadows fish={fish} />
      </Row>
    </Card>
  );
}
