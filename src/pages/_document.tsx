import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

import { resolvePath } from 'utils/path';

const Document = () => {
  return (
    <Html lang="en-US">
      <Head>
        <meta property="og:site_name" content="Pontoweb" />
        <meta name="theme-color" content="#240054" />
        <meta
          property="og:image"
          content={resolvePath('thumbnail.png')}
        />
        <meta property="og:image:width" content='1280' />
        <meta property="og:image:height" content='628' />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:locale" content="en-US" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin=''
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&family=Oxanium:wght@700&family=Press+Start+2P&display=swap" 
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
