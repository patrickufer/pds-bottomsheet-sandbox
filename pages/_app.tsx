import { AppProps } from 'next/app';
import { init as initMatomo } from "@socialgouv/matomo-next";
import Head from 'next/head'
import { useEffect, Fragment } from 'react';
import '../styles.scss';
import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react';

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL + '';
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID + '';


export default function Application({ Component, pageProps }: AppProps) {

  useEffect(() => {
    initMatomo({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, [])

  return (
      <PorscheDesignSystemProvider>
        <Fragment>
          <Head>
            <title>Matomo PII bug + NextJS minimal repo</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          </Head>
          <Component {...pageProps} />
        </Fragment>
      </PorscheDesignSystemProvider>
    );
  
}
