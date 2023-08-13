// pages/_app.js

import Head from 'next/head';
import './globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Caauri Consulting</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
