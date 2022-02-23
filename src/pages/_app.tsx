import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/default";
import Head from "next/head";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="In unserem Gasthaus in Buggingen bewirten wir Sie mit klassischer, badischer Küche – saisonal wechselnde Gerichte mit Spargel, Pfifferlingen, Wild"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gasthaus zur Mühle" />
        <meta property="og:url" content="https://www.mühle-buggingen.de/" />
        <meta property="og:image" content="/images/social-share.jpg" />
        <meta
          property="og:description"
          content="In unserem Gasthaus in Buggingen bewirten wir Sie mit klassischer, badischer Küche – saisonal wechselnde Gerichte mit Spargel, Pfifferlingen, Wild"
        />
        <meta
          name="keywords"
          content="Gasthaus, Restaurant, Buggingen, Badische Küche, Spargeln, Pfifferlinge, Wild"
        />
      </Head>

      <Layout id={pageProps?.data?.id} staticData={pageProps.staticData}>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
