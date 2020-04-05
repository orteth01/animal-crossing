import React from 'react';
import { Card, Row, Col } from 'antd';
import { Shell } from 'types/item';
import css from './ShellCard.module.scss';

type ShelCardPropType = {
  shell: Shell;
};

export function ShellCard({ shell }: ShelCardPropType) {
  return (
    <Card key={shell.name} title={shell.name} bodyStyle={{ padding: '16px' }}>
      <Row gutter={[0, 4]} align="middle">
        <Col flex="32px">
          <img src="/img/bells.png" className={css.bellsImg} />
        </Col>
        <Col>{shell.value}</Col>
      </Row>
    </Card>
  );
}
