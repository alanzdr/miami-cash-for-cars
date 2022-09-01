import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import Loading from 'components/Loading';
const View = dynamic(() => import('views/Tankyou'), {
  loading: () => <Loading />,
});

const TankyouPage: React.FC = () => {
  const title = 'Tankyou | Miami Cash for Cars';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          property="og:title"
          content={title}
        />
        <meta name="title" content={title} />
      </Head>
      <View />
    </>
  );
};

export default TankyouPage;
