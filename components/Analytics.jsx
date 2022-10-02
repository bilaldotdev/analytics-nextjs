import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
const gtag = {
  GA_TRACKING_ID: '123zxy',
};
const Analytics = () => {
  /* create a file in src or public or directory
  use fn to write that file with the content from api */
  return (
    <>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-J172X0MJJB'
        id='analytics-src'
      />
      <Script
        strategy='afterInteractive'
        id='analytics-js'
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J172X0MJJB');
          `,
        }}
      />
    </>
  );
};

export default Analytics;
