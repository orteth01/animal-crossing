import React from 'react';
import { Tabs, Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

const { TabPane } = Tabs;

import { Layout } from '../../components/Layout';

interface Item {
  name: string;
  price: number;
}

const dataSource: Item[] = [
  {
    name: 'Anchovy',
    price: 200,
  },
  {
    name: 'Angelfish',
    price: 3000,
  },
  {
    name: 'Arowana',
    price: 10000,
  },
  {
    name: 'Barred Knifejaw',
    price: 5000,
  },
  {
    name: 'Barreleye',
    price: 12000,
  },
  {
    name: 'Betta',
    price: 2500,
  },
  {
    name: 'Bitterling',
    price: 900,
  },
  {
    name: 'Black Bass',
    price: 400,
  },
  // TODO: add the data https://attackofthefanboy.com/guides/animal-crossing-new-horizons-fish-prices-guide/
];

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
            <Table dataSource={dataSource} columns={columns} />;
          </TabPane>
        </Tabs>
      </>
    </Layout>
  );
}
