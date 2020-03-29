import React from 'react';
import { Tabs, Table } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { Item } from 'types/item';
import { Layout } from 'components/Layout';
import { fish } from 'data/fish';

const { TabPane } = Tabs;

const columns: ColumnProps<Item>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: (a: Item, b: Item) => a.price - b.price,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Times Active',
    dataIndex: 'timesActive',
    key: 'timesActive',
  },
  {
    title: 'Months Active',
    dataIndex: 'monthsActive',
    key: 'monthsActive',
  },
];

export default function Pricing() {
  return (
    <Layout>
      <>
        <Tabs defaultActiveKey="fish" animated={false}>
          <TabPane tab={<>🐛 Insects</>} key="insects">
            Tab 1
          </TabPane>
          <TabPane tab={<>🎣 Fish</>} key="fish">
            <Table dataSource={fish} columns={columns} pagination={false} />
          </TabPane>
        </Tabs>
      </>
    </Layout>
  );
}
