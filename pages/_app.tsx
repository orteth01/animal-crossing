import 'antd/dist/antd.css';
import 'styles/main.scss';

type AppPropsType = {
  Component: any;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: AppPropsType) {
  return <Component {...pageProps} />;
}
