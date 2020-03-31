import React, { useState } from 'react';
import { Tabs, Switch, List } from 'antd';
import { Layout } from 'components/Layout';
import { fish } from 'data/fish';
import { Fish } from './Fish';
const { TabPane } = Tabs;

export default function Items() {
  const [onlyShowActive, setOnlyShowActive] = useState(true);

  return (
    <Layout>
      <>
        <Tabs defaultActiveKey="fish" animated={false}>
          <TabPane tab={<>🐛 Insects</>} key="insects">
            Tab 1
          </TabPane>
          <TabPane tab={<>🎣 Fish</>} key="fish">
            <Switch checked={onlyShowActive} onChange={setOnlyShowActive} />{' '}
            Currently active
            <List
              grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4 }}
              dataSource={fish}
              renderItem={(f) => (
                <List.Item>
                  <Fish fish={f} />
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </>
    </Layout>
  );
}
