import React from 'react';
import { Tabs, Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

const { TabPane } = Tabs;

import { Layout } from 'components/Layout';

interface Item {
  name: string;
  price: number;
  location: string;
  timesActive: string;
  monthsActive: string;
}

const fish: Item[] = [
  {
    name: 'Bitterling',
    price: 900,
    location: 'River',
    timesActive: 'All',
    monthsActive: 'January, February, March, November, December',
  },
  {
    name: 'Pale Chub',
    price: 200,
    location: 'River',
    timesActive: '9AM-4PM',
    monthsActive: 'All',
  },
  {
    name: 'Crucian Carp',
    price: 160,
    location: 'River',
    timesActive: 'All',
    monthsActive: 'All',
  },
  {
    name: 'Dace',
    price: 240,
    location: 'River',
    timesActive: '4PM-9AM',
    monthsActive: 'All',
  },
  {
    name: 'Carp',
    price: 300,
    location: 'Pond',
    timesActive: 'All',
    monthsActive: 'All',
  },
  {
    name: 'Koi',
    price: 4000,
    location: 'Pond',
    timesActive: '4PM-9AM',
    monthsActive: 'All',
  },
  {
    name: 'Goldfish',
    price: 1300,
    location: 'Pond',
    timesActive: 'All',
    monthsActive: 'All',
  },
  {
    name: 'Pop-eyed Goldfish',
    price: 1300,
    location: 'Pond',
    timesActive: '9AM-4PM',
    monthsActive: 'All',
  },
  {
    name: 'Ranchu Goldfish',
    price: 4500,
    location: 'Pond',
    timesActive: '9AM-4PM',
    monthsActive: 'All',
  },
  {
    name: 'Killifish',
    price: 300,
    location: 'Pond',
    timesActive: 'All',
    monthsActive: 'April, May, June, July, August',
  },
  {
    name: 'Crawfish',
    price: 200,
    location: 'Pond',
    timesActive: 'All',
    monthsActive: 'April, May, June, July, August, September',
  },
  {
    name: 'Soft-shelled Turtle',
    price: 3750,
    location: 'River',
    timesActive: '4PM-9AM',
    monthsActive: 'August, September',
  },
  {
    name: 'Snapping Turtle',
    price: 5000,
    location: 'River',
    timesActive: '9PM-4AM',
    monthsActive: 'April, May, June, July, August, September, October',
  },
  {
    name: 'Tadpole',
    price: 100,
    location: 'Pond',
    timesActive: 'All',
    monthsActive: 'March, April, May, June, July',
  },
  {
    name: 'Frog',
    price: 120,
    location: 'Pond',
    timesActive: 'All',
    monthsActive: 'May, June, July, August',
  },
  {
    name: 'Freshwater Goby',
    price: 400,
    location: 'River',
    timesActive: '4PM-9AM',
    monthsActive: 'All',
  },
  {
    name: 'Loach',
    price: 400,
    location: 'River',
    timesActive: 'All',
    monthsActive: 'March, April, May',
  },
  {
    name: 'Catfish',
    price: 800,
    location: 'Pond',
    timesActive: '4PM-9AM',
    monthsActive: 'May, June, July, August, September, October',
  },
  {
    name: 'Giant Snakehead',
    price: 5500,
    location: 'Pond',
    timesActive: '9AM-4PM',
    monthsActive: 'June, July, August',
  },
  {
    name: 'Bluegill',
    price: 180,
    location: 'River',
    timesActive: '9AM-4PM',
    monthsActive: 'All',
  },
  {
    name: 'Yellow Perch',
    price: 300,
    location: 'River',
    timesActive: 'All',
    monthsActive: 'January, February, March, October, November, December',
  },
  {
    name: 'Black Bass',
    price: 400,
    location: 'River',
    timesActive: 'All',
    monthsActive: 'All',
  },
  {
    name: 'Tilapia',
    price: 800,
    location: 'River',
    timesActive: 'All',
    monthsActive: 'June, July, August, September, October',
  },
  {
    name: 'Pike',
    price: 1800,
    location: 'River',
    timesActive: 'All',
    monthsActive: 'September, October, November, December',
  },
  {
    name: 'Pond Smelt',
    price: 500,
    location: 'River',
    timesActive: 'All',
    monthsActive: 'January, February, December',
  },
  {
    name: 'Sweetfish',
    price: 900,
    location: 'River',
    timesActive: 'All',
    monthsActive: 'July, August, September',
  },
  {
    name: 'Cherry Salmon',
    price: 1000,
    location: 'River (clifftop)',
    timesActive: '4PM-9AM',
    monthsActive: 'March, April, May, June, September, October, November',
  },
  {
    name: 'Char',
    price: 3800,
    location: 'River (clifftop)',
    timesActive: '4PM-9AM',
    monthsActive: 'March, April, May, June, September, October, November',
  },
  {
    name: 'Golden Trout',
    price: 15000,
    location: 'River (clifftop)',
    timesActive: '4PM-9AM',
    monthsActive: 'March, April, May, September, October, November',
  },
  {
    name: 'Stringfish',
    price: 15000,
    location: 'River (clifftop)',
    timesActive: '4PM-9AM',
    monthsActive: 'January, February, March, December',
  },
  {
    name: 'Salmon',
    price: 700,
    location: 'River (mouth)',
    timesActive: 'All',
    monthsActive: 'September',
  },
  {
    name: 'King Salmon',
    price: 1800,
    location: 'River (mouth)',
    timesActive: 'All',
    monthsActive: 'September',
  },
  {
    name: 'Mitten Crab',
    price: 2000,
    location: 'River',
    timesActive: '4PM-9AM',
    monthsActive: 'September, October, November',
  },
  {
    name: 'Guppy',
    price: 1300,
    location: 'River',
    timesActive: '9AM-4PM',
    monthsActive:
      'April, May, June, July, August, September, October, November',
  },
  {
    name: 'Nibble Fish',
    price: 1500,
    location: 'River',
    timesActive: '9AM-4PM',
    monthsActive: 'May, June, July, August, September',
  },
  {
    name: 'Angelfish',
    price: 3000,
    location: 'River',
    timesActive: '4PM-9AM',
    monthsActive: 'May, June, July, August, September, October',
  },
  {
    name: 'Betta',
    price: 2500,
    location: 'River',
    timesActive: '9AM-4PM',
    monthsActive: 'May, June, July, August, September, October',
  },
  {
    name: 'Neon Tetra',
    price: 500,
    location: 'River',
    timesActive: '9AM-4PM',
    monthsActive:
      'April, May, June, July, August, September, October, November',
  },
  {
    name: 'Rainbowfish',
    price: 800,
    location: 'River',
    timesActive: '9AM-4PM',
    monthsActive: 'May, June, July, August, September, October',
  },
  {
    name: 'Piranha',
    price: 2500,
    location: 'River',
    timesActive: '9AM-4PM, 9PM-4AM',
    monthsActive: 'June, July, August, September',
  },
  {
    name: 'Arowana',
    price: 10000,
    location: 'River',
    timesActive: '4PM-9AM',
    monthsActive: 'June, July, August, September',
  },
  {
    name: 'Dorado',
    price: 15000,
    location: 'River',
    timesActive: '4AM-9PM',
    monthsActive: 'June, July, August, September',
  },
  {
    name: 'Gar',
    price: 6000,
    location: 'Pond',
    timesActive: '4PM-9AM',
    monthsActive: 'June, July, August, September',
  },
  {
    name: 'Arapaima',
    price: 10000,
    location: 'River',
    timesActive: '4PM-9AM',
    monthsActive: 'June, July, August, September',
  },
  {
    name: 'Saddled Bichir',
    price: 4000,
    location: 'River',
    timesActive: '9PM-4AM',
    monthsActive: 'June, July, August, September',
  },
  {
    name: 'Sturgeon',
    price: 10000,
    location: 'River (mouth)',
    timesActive: 'All',
    monthsActive:
      'January, February, March, September, October, November, December',
  },
  {
    name: 'Sea Butterfly',
    price: 1000,
    location: 'Sea',
    timesActive: 'All',
    monthsActive: 'January, February, March, December',
  },
  {
    name: 'Sea Horse',
    price: 1100,
    location: 'Sea',
    timesActive: 'All',
    monthsActive:
      'April, May, June, July, August, September, October, November',
  },
  {
    name: 'Clown Fish',
    price: 650,
    location: 'Sea',
    timesActive: 'All',
    monthsActive: 'April, May, June, July, August, September',
  },
  {
    name: 'Surgeonfish',
    price: 1000,
    location: 'Sea',
    timesActive: 'All',
    monthsActive: 'April, May, June, July, August, September',
  },
  {
    name: 'Butterfly Fish',
    price: 1000,
    location: 'Sea',
    timesActive: 'All',
    monthsActive: 'April, May, June, July, August, September',
  },
  {
    name: 'Napoleonfish',
    price: 10000,
    location: 'Sea',
    timesActive: '4AM-9PM',
    monthsActive: 'July, August',
  },
  {
    name: 'Zebra Turkeyfish',
    price: 500,
    location: 'Sea',
    timesActive: 'All',
    monthsActive:
      'April, May, June, July, August, September, October, November',
  },
  {
    name: 'Blowfish',
    price: 5000,
    location: 'Sea',
    timesActive: '9PM-4AM',
    monthsActive: 'January, February, November, December',
  },
  {
    name: 'Puffer Fish',
    price: 250,
    location: 'Sea',
    timesActive: 'All',
    monthsActive: 'July, August, September',
  },
  {
    name: 'Anchovy',
    price: 200,
    location: 'Sea',
    timesActive: '4AM-9PM',
    monthsActive: 'All',
  },
  {
    name: 'Horse Mackerel',
    price: 150,
    location: 'Sea',
    timesActive: 'All',
    monthsActive: 'All',
  },
  {
    name: 'Barred Knifejaw',
    price: 5000,
    location: 'Sea',
    timesActive: 'All',
    monthsActive:
      'March, April, May, June, July, August, September, October, November',
  },
  {
    name: 'Sea Bass',
    price: 400,
    location: 'Sea',
    timesActive: 'All',
    monthsActive: 'All',
  },
  {
    name: 'Red Snapper',
    price: 3000,
    location: 'Sea',
    timesActive: 'All',
    monthsActive: 'All',
  },
  {
    name: 'Dab',
    price: 300,
    location: 'Sea',
    timesActive: 'All',
    monthsActive:
      'January, February, March, April, October, November, December',
  },
  {
    name: 'Olive Flounder',
    price: 800,
    location: 'Sea',
    timesActive: 'All',
    monthsActive: 'All',
  },
  {
    name: 'Squid',
    price: 500,
    location: 'Sea',
    timesActive: 'All',
    monthsActive:
      'January, February, March, April, May, June, July, August, December',
  },
  {
    name: 'Moray Eel',
    price: 2000,
    location: 'Sea',
    timesActive: 'All',
    monthsActive: 'August, September, October',
  },
  {
    name: 'Ribbon Eel',
    price: 600,
    location: 'Sea',
    timesActive: 'All',
    monthsActive: 'June, July, August, September, October',
  },
  {
    name: 'Tuna',
    price: 7000,
    location: 'Pier',
    timesActive: 'All',
    monthsActive: 'January, February, March, April, November, December',
  },
  {
    name: 'Blue Marlin',
    price: 10000,
    location: 'Pier',
    timesActive: 'All',
    monthsActive:
      'January, February, March, April, July, August, September, November, December',
  },
  {
    name: 'Giant Trevally',
    price: 4500,
    location: 'Pier',
    timesActive: 'All',
    monthsActive: 'May, June, July, August, September, October',
  },
  {
    name: 'Mahi-mahi',
    price: 6000,
    location: 'Pier',
    timesActive: 'All',
    monthsActive: 'May, June, July, August, September, October',
  },
  {
    name: 'Ocean Sunfish',
    price: 4000,
    location: 'Sea',
    timesActive: '4AM-9PM',
    monthsActive: 'July, August, September',
  },
  {
    name: 'Ray',
    price: 3000,
    location: 'Sea',
    timesActive: '4AM-9PM',
    monthsActive: 'August, September, October, November',
  },
  {
    name: 'Saw Shark',
    price: 12000,
    location: 'Sea',
    timesActive: '4PM-9AM',
    monthsActive: 'June, July, August, September',
  },
  {
    name: 'Hammerhead Shark',
    price: 8000,
    location: 'Sea',
    timesActive: '4PM-9AM',
    monthsActive: 'June, July, August, September',
  },
  {
    name: 'Great White Shark',
    price: 15000,
    location: 'Sea',
    timesActive: '4PM-9AM',
    monthsActive: 'June, July, August, September',
  },
  {
    name: 'Whale Shark',
    price: 13000,
    location: 'Sea',
    timesActive: 'All',
    monthsActive: 'June, July, August, September',
  },
  {
    name: 'Suckerfish',
    price: 1500,
    location: 'Sea',
    timesActive: 'All',
    monthsActive: 'June, July, August, September',
  },
  {
    name: 'Football Fish',
    price: 2500,
    location: 'Sea',
    timesActive: '4PM-9AM',
    monthsActive: 'January, February, March, November, December',
  },
  {
    name: 'Oarfish',
    price: 9000,
    location: 'Sea',
    timesActive: 'All',
    monthsActive: 'January, February, March, April, May, December',
  },
  {
    name: 'Barreleye',
    price: 15000,
    location: 'Sea',
    timesActive: '9PM-4AM',
    monthsActive: 'All',
  },
  {
    name: 'Coelacanth',
    price: 15000,
    location: 'Sea (rainy day)',
    timesActive: 'All',
    monthsActive: 'All',
  },
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
