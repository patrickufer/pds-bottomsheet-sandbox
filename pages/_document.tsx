import Document, { Html, Main, Head, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" key="favicon" />  

          {/* Porsche Design System fonts & styles */}
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
