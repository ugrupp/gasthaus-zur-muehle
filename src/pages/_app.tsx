import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/default";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Das Gasthaus &raquo;zur Mühle&laquo; bietet frische badische Gerichte mit Weinen aus der Region."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gasthaus zur Mühle" />
        <meta property="og:url" content="https://www.mühle-buggingen.de/" />
        {/* TODO
        <meta property="og:image" content="/images/limonate-share.png" /> */}
        <meta
          property="og:description"
          content="Das Gasthaus &raquo;zur Mühle&laquo; bietet frische badische Gerichte mit Weinen aus der Region."
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
