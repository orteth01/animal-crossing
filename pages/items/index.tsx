import React, { useState } from 'react';
import { Tabs, Switch, List, Input } from 'antd';
import { Layout } from 'components/Layout';
import { useDebounce } from 'hooks/useDebounce';
import { fish } from 'data/fish';
import { Fish } from './Fish';
const { TabPane } = Tabs;
const { Search } = Input;

export default function Items() {
  // const [onlyShowActive, setOnlyShowActive] = useState(true);

  // search
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 200);

  const fishToRender = fish.filter((f) =>
    f.name.toLowerCase().includes(debouncedSearchValue.toLowerCase())
  );

  return (
    <Layout>
      <>
        <Tabs defaultActiveKey="fish" animated={false}>
          <TabPane tab={<>🐛 Insects</>} key="insects">
            Tab 1
          </TabPane>
          <TabPane tab={<>🎣 Fish</>} key="fish">
            <Search
              placeholder="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              style={{ width: 200 }}
            />

            {/* <Switch checked={onlyShowActive} onChange={setOnlyShowActive} />{' '}
            Currently active */}
            <List
              grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4 }}
              dataSource={fishToRender}
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
