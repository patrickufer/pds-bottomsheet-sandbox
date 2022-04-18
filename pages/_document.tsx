import Document, { Html, Main, Head, NextScript } from 'next/document';
import React from 'react';
import { FONTS_CDN_BASE_URL, FONTS_MANIFEST } from '@porsche-design-system/assets'

const fontUrl = `${FONTS_CDN_BASE_URL}/${FONTS_MANIFEST.porscheNextWLaRegular.woff2}`

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" key="favicon" />  

          {/* Porsche Design System fonts & styles */}
          <link href={fontUrl} rel='stylesheet' />
          <link rel='preconnect' href='https://cdn.ui.porsche.com/' key='porscheui-cdn-preconnect' />
          <link rel='preconnect' href='https://aws.designsystem.porsche.com' key='porscheui-aws-preconnect' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
