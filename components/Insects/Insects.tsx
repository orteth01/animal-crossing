import React, { useState, useMemo } from 'react';
import { Switch, List, Input, Radio, Row, Col, Checkbox } from 'antd';
import { useDebounce } from 'hooks/useDebounce';
import { ItemSortBy, InsectLocation } from 'types/item';
import { insects } from 'data/insects';
import { InsectCard } from './InsectCard';
import {
  searchFilter,
  onlyShowActiveFilter,
  itemSorter,
  locationsFilter,
} from '../helpers';
import css from './Insects.module.scss';

export function Insects() {
  // only show active toggle
  const [onlyShowActive, setOnlyShowActive] = useState(true);

  // search
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);

  // location
  const [locations, setLocations] = useState<InsectLocation[]>([]);

  // apply all filters
  const filteredInsects = useMemo(() => {
    let ret = [...insects];

    if (onlyShowActive) {
      ret = ret.filter(onlyShowActiveFilter);
    } else {
      // apply custom filters
    }

    if (locations.length) {
      ret = ret.filter(locationsFilter(locations));
    }

    if (debouncedSearchValue) {
      ret = ret.filter(searchFilter(debouncedSearchValue));
    }

    return ret;
  }, [onlyShowActive, debouncedSearchValue, locations]);

  // sort
  const [sortValue, setSortValue] = useState<ItemSortBy>('Name');
  const sortedInsects = useMemo(
    () => filteredInsects.sort(itemSorter(sortValue)),
    [sortValue, filteredInsects]
  );

  return (
    <>
      <Row gutter={[16, 16]} align="top">
        <Col xs={24} sm={12} md={8} lg={6}>
          <p className={css.filterLabel}>Name search</p>
          <Input.Search
            onChange={(e) => setSearchValue(e.target.value)}
            allowClear
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <p className={css.filterLabel}>Time</p>
          <Row>
            <Col>
              <Switch checked={onlyShowActive} onChange={setOnlyShowActive} />{' '}
              Currently active
            </Col>
          </Row>
          {!onlyShowActive && (
            <Row>
              <Col>TODO: add custom time filters 😁</Col>
            </Row>
          )}
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <p className={css.filterLabel}>Sort</p>
          <Radio.Group
            name="Sort by"
            onChange={(e) => setSortValue(e.target.value)}
            value={sortValue}
          >
            <Radio className={css.sortRadio} value="Name">
              Name
            </Radio>
            <Radio className={css.sortRadio} value="Value (high-low)">
              Value (high-low)
            </Radio>
            <Radio className={css.sortRadio} value="Value (low-high)">
              Value (low-high)
            </Radio>
          </Radio.Group>
        </Col>
      </Row>
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4 }}
        dataSource={sortedInsects}
        renderItem={(i) => (
          <List.Item>
            <InsectCard insect={i} />
          </List.Item>
        )}
        pagination={{ pageSize: 12 }}
      />
    </>
  );
}
