import React from 'react';
import dynamic from 'next/dynamic';

import Loading from 'components/Loading';
import Head from 'next/head';
const View = dynamic(() => import('views/Sell'), {
  loading: () => <Loading />,
});

const Sell: React.FC = () => {
  const title = 'Miami Cash for Cars';

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

export default Sell;
