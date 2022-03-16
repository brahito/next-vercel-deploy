import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithlayout = AppProps & {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithlayout) {
  const getLayout = Component.getLayout || (page => page);
  return getLayout (<Component {...pageProps} />)
}

export default MyApp
