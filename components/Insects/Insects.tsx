import React, { useState, useMemo } from 'react';
import { Switch, List, Input, Radio, Row, Col } from 'antd';
import { useDebounce } from 'hooks/useDebounce';
import { ItemSortBy } from 'types/item';
import { itemSortOptions } from 'data/item';
import { insects } from 'data/insects';
import { InsectCard } from './InsectCard';
import { searchFilter, onlyShowActiveFilter } from 'helpers/filter';
import { itemSorter } from 'helpers/sort';
import css from './Insects.module.scss';

export function Insects() {
  // filter
  const [onlyShowActive, setOnlyShowActive] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const filteredInsects = useMemo(() => {
    let ret = [...insects];

    if (onlyShowActive) {
      ret = ret.filter(onlyShowActiveFilter);
    } else {
      // apply custom filters
    }

    if (debouncedSearchValue) {
      ret = ret.filter(searchFilter(debouncedSearchValue));
    }

    return ret;
  }, [onlyShowActive, debouncedSearchValue]);

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
            <Radio.Group
              name="Sort by"
              onChange={(e) => setSortValue(e.target.value)}
              value={sortValue}
            >
              {itemSortOptions.map((sortType) => (
                <Radio
                  className={css.sortRadio}
                  value={sortType}
                  key={`sort-type-${sortType}`}
                >
                  {sortType}
                </Radio>
              ))}
            </Radio.Group>
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
