import React, { useState, useEffect } from 'react';
import { Tabs, Switch, List, Input } from 'antd';
import { Layout } from 'components/Layout';
import { useDebounce } from 'hooks/useDebounce';
import { useInterval } from 'hooks/useInterval';
import { fish } from 'data/fish';
import { Fish } from './Fish/Fish';
import { searchFilter, onlyShowActiveFilter } from './Fish/helpers';
const { TabPane } = Tabs;
const { Search } = Input;

export default function Items() {
  // only show active toggle
  const [onlyShowActive, setOnlyShowActive] = useState(false); // TODO: maybe make true?

  // search
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 200);

  // currentTime
  const [now, setNow] = useState(Date.now());
  useInterval(() => setNow(Date.now()), 1000);

  // apply all filters
  const [fishToRender, setFishToRender] = useState(fish);
  useEffect(() => {
    setFishToRender(
      fish
        .filter(onlyShowActiveFilter(onlyShowActive, now))
        .filter(searchFilter(debouncedSearchValue))
    );
  }, [onlyShowActive, now, debouncedSearchValue]);

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
            <div>
              <Switch checked={onlyShowActive} onChange={setOnlyShowActive} />{' '}
              Currently active
            </div>
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
