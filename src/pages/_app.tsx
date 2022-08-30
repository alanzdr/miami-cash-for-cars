import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('components/Header'))
const Footer = dynamic(() => import('components/Footer'))

import 'styles/globals.css';
// import '../styles/hamburgers.css';
// import 'slick-carousel/slick/slick.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  useEffect(() => {
    // Tag Manager
    if ('dataLayer' in window) {
      window.dataLayer.push({
        event: 'pageview',
      });
    }
  }, [router.pathname]);


  return (
    <>
      <Header path={router.pathname} />
      <main id="main">
        <Component {...pageProps} />
      </main>
      <Footer />
      {/* {process.env.NODE_ENV !== 'development' ? (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NNL25SG');
          `}
        </Script>
      ) : null} */}
    </>
  );
};

export default MyApp;
