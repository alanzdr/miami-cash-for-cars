import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="pt-BR">
      <Head>
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
