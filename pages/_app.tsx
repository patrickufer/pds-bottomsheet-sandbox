import { AppProps } from 'next/app';
import Head from 'next/head'
import { Fragment } from 'react';
import '../styles.scss';
import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react';


export default function Application({ Component, pageProps }: AppProps) {

  return (
      <PorscheDesignSystemProvider>
        <Fragment>
          <Head>
            <title>PDS + react-spring-bottom-sheet + NextJS - Minimal Repo</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          </Head>
          <Component {...pageProps} />
        </Fragment>
      </PorscheDesignSystemProvider>
    );
  
}
