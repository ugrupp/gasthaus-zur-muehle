import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React from "react";
import NotFoundBanner from "../components/not-found-banner";
import data from "../data/404.json";

export const getStaticProps = async () => {
  return {
    props: {
      data,
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  const { text__html, bgImage } = data;

  return (
    <>
      <Head>
        <title>Gasthaus »zur Mühle« in Buggingen, Familie Löffler</title>
      </Head>

      <NotFoundBanner text__html={text__html} bgImage={bgImage} />
    </>
  );
};

export default Home;