import Document, { Html, Main, Head, NextScript } from 'next/document';
import React from 'react';
class MyDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" key="favicon" />  
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
