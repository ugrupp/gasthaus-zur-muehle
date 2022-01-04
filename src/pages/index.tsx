import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React from "react";
import RestaurantSection from "../components/restaurant";
import data from "../data/index.json";

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
  return (
    <>
      <Head>
        <title>Gasthaus »zur Mühle« in Buggingen, Familie Löffler</title>
      </Head>

      <h1 className="text-3xl font-bold">Startseite</h1>
      <RestaurantSection restaurantData={data.restaurant} />
    </>
  );
};

export default Home;
