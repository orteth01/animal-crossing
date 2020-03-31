import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import css from './Layout.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
const { Header, Content, Footer } = AntLayout;

const links = [
  { href: '/', label: 'home' },
  { href: '/items', label: 'items' },
];

type PricingProps = {
  children: React.ReactNode;
};

export function Layout({ children }: PricingProps) {
  const router = useRouter();
  return (
    <AntLayout className={css.layout}>
      <Header className={css.header}>
        <div className={css.icon}>TOAC</div>
        <Menu
          theme="dark"
          mode="horizontal"
          className={css.menu}
          selectedKeys={[router.pathname]}
        >
          {links.map(({ href, label }) => (
            <Menu.Item key={href}>
              <Link href={href}>{label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content className={css.content}>{children}</Content>
      <Footer className={css.footer}>
        Made for me - might be useful for you! <br /> 💖 Teddy 💖
      </Footer>
    </AntLayout>
  );
}
