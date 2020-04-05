import React from 'react';
import { Tabs } from 'antd';
import { Layout } from 'components/Layout';
import { Insects } from 'components/Insects/Insects';
import { Fish } from 'components/Fish/Fish';
import { Shells } from 'components/Shells/Shells';

export default function Items() {
  return (
    <Layout>
      <>
        <p style={{ margin: 0 }}>
          note: this is for northern hemisphere for now. i plan to add a
          hemisphere toggle soon 💙
        </p>
        <Tabs defaultActiveKey="fish" animated={false} size="large">
          <Tabs.TabPane tab={<>🎣 Fish</>} key="fish">
            <Fish />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<>🐛 Insects</>} key="insects">
            <Insects />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<>🐚 Shells</>} key="shells">
            <Shells />
          </Tabs.TabPane>
        </Tabs>
      </>
    </Layout>
  );
}
