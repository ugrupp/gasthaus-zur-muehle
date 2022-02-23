import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React from "react";
import FoodSection from "../components/food";
import HistorySection from "../components/history";
import HostsSection from "../components/hosts";
import RestaurantSection from "../components/restaurant";
import data from "../data/index.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";

export const getStaticProps = async () => {
  return {
    props: {
      data: await generateImagePlaceholders(data),
      staticData: await generateImagePlaceholders(staticData),
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  return (
    <>
      <Head>
        <title>
          Gasthaus »zur Mühle« : Das traditionsreiche Gasthaus in Buggingen mit
          badischer Küche
        </title>
      </Head>

      <h1 className="sr-only">Gasthaus »zur Mühle«</h1>

      <RestaurantSection restaurantData={data.restaurant} />
      <HostsSection hostsData={data.hosts} className="mt-80 md:mt-120" />
      <FoodSection foodData={data.food} className="mt-112 md:mt-150" />
      <HistorySection historyData={data.history} className="mt-80 md:mt-120" />
    </>
  );
};

export default Home;
