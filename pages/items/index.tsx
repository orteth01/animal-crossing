import React, { useState, useEffect } from 'react';
import { Tabs, Switch, List, Input, Radio } from 'antd';
import { Layout } from 'components/Layout';
import { useDebounce } from 'hooks/useDebounce';
import { useInterval } from 'hooks/useInterval';
import { ItemSortBy } from 'types/item';
import { fish } from 'data/fish';
import { Fish } from './Fish/Fish';
import { searchFilter, onlyShowActiveFilter, fishSorter } from './Fish/helpers';

const { TabPane } = Tabs;

export default function Items() {
  // only show active toggle
  const [onlyShowActive, setOnlyShowActive] = useState(true); // TODO: maybe make true?

  // search
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 200);

  // sort
  const [sortValue, setSortValue] = useState<ItemSortBy>('Name');

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
        .sort(fishSorter(sortValue))
    );
  }, [onlyShowActive, now, debouncedSearchValue, sortValue]);

  return (
    <Layout>
      <>
        <Tabs defaultActiveKey="fish" animated={false} size="large">
          <TabPane tab={<>🐛 Insects</>} key="insects">
            Tab 1
          </TabPane>

          <TabPane tab={<>🎣 Fish</>} key="fish">
            <Input.Search
              placeholder="Filter by name"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              style={{ width: 200 }}
            />
            <div>
              Sort by:{' '}
              <Radio.Group
                name="Sort by:"
                onChange={(e) => setSortValue(e.target.value)}
                value={sortValue}
              >
                <Radio value="Name">Name</Radio>
                <Radio value="Price (high-low)">Price (high-low)</Radio>
                <Radio value="Price (low-high)">Price (low-high)</Radio>
              </Radio.Group>
            </div>
            <div>
              <Switch checked={onlyShowActive} onChange={setOnlyShowActive} />{' '}
              Currently active
            </div>
            <List
              grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, column: 4 }}
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
