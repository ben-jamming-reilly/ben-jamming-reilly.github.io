import "../styles/globals.css";

import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ben</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
