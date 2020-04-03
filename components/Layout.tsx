import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GithubOutlined } from '@ant-design/icons';
import css from './Layout.module.scss';

type LinkObj = {
  href: string;
  Label: () => JSX.Element;
};

const links: LinkObj[] = [
  {
    href: 'https://github.com/orteth01/animal-crossing',
    Label: () => <GithubOutlined className={css.githubIcon} />,
  },
  { href: '/', Label: () => <span>home</span> },
  { href: '/items', Label: () => <span>items</span> },
];

type PricingProps = {
  children: React.ReactNode;
};

export function Layout({ children }: PricingProps) {
  const router = useRouter();
  return (
    <AntLayout className={css.layout}>
      <AntLayout.Header className={css.header}>
        <div className={css.icon}>TOAC</div>
        <Menu
          theme="dark"
          mode="horizontal"
          className={css.menu}
          selectedKeys={[router.pathname]}
        >
          {links.map(({ href, Label }) => (
            <Menu.Item key={href} className={css.menuItem}>
              <Link href={href}>
                <a>
                  <Label />
                </a>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </AntLayout.Header>
      <AntLayout.Content className={css.content}>{children}</AntLayout.Content>
      <AntLayout.Footer className={css.footer}>
        Made for me - might be useful for you! <br /> 💖 Teddy 💖
      </AntLayout.Footer>
    </AntLayout>
  );
}
