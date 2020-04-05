import React, { useState, useMemo } from 'react';
import { List, Input, Radio, Row, Col } from 'antd';
import { useDebounce } from 'hooks/useDebounce';
import { ItemSortBy } from 'types/item';
import { itemSortOptions } from 'data/item';
import { shells } from 'data/shells';
import { ShellCard } from './ShellCard';
import { searchFilter } from 'helpers/filter';
import { itemSorter } from 'helpers/sort';
import css from './Shells.module.scss';

export function Shells() {
  // filter
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const filteredShells = useMemo(() => {
    return debouncedSearchValue
      ? shells.filter(searchFilter(debouncedSearchValue))
      : shells;
  }, [debouncedSearchValue]);

  // sort
  const [sortValue, setSortValue] = useState<ItemSortBy>('Name');
  const sortedShells = useMemo(
    () => filteredShells.sort(itemSorter(sortValue)),
    [sortValue, filteredShells]
  );

  return (
    <>
      <Row gutter={[16, 16]} align="top">
        <Col xs={24} sm={12} md={8} lg={6}>
          <p className={css.filterLabel}>Name</p>
          <Input.Search
            onChange={(e) => setSearchValue(e.target.value)}
            allowClear
          />
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
        dataSource={sortedShells}
        renderItem={(s) => (
          <List.Item>
            <ShellCard shell={s} />
          </List.Item>
        )}
        pagination={false}
      />
    </>
  );
}
