import React from 'react';
import { Tabs } from 'antd';
import { Layout } from 'components/Layout';
import { Insects } from './Insects/Insects';
import { Fish } from './Fish/Fish';

export default function Items() {
  return (
    <Layout>
      <>
        <p style={{ margin: 0 }}>
          note: this is for northern hemisphere for now. i plan to add a
          hemisphere toggle soon 💙
        </p>
        <Tabs defaultActiveKey="fish" animated={false} size="large">
          <Tabs.TabPane tab={<>🐛 Insects</>} key="insects">
            <Insects />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<>🎣 Fish</>} key="fish">
            <Fish />
          </Tabs.TabPane>
        </Tabs>
      </>
    </Layout>
  );
}
