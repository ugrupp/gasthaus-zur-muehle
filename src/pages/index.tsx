import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React from "react";
import FoodSection from "../components/food";
import HostsSection from "../components/hosts";
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

      <RestaurantSection restaurantData={data.restaurant} />
      <HostsSection hostsData={data.hosts} className="mt-80 md:mt-120" />
      <FoodSection foodData={data.food} />
    </>
  );
};

export default Home;
