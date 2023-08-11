// pages/_app.js

import Head from 'next/head';
import '../styles/global.css'; // Importez vos styles globaux

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>John &amp; Doe | Architectes d&apos;Intérieur</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
