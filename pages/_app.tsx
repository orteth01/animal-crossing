import Head from 'next/head';
import 'antd/dist/antd.css';

type AppPropsType = {
  Component: any;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: AppPropsType) {
  return (
    <>
      <Head>
        <title>Animal Crossing Helper</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
