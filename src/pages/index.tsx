import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React from "react";
import FoodSection from "../components/food";
import HistorySection from "../components/history";
import HostsSection from "../components/hosts";
import RestaurantSection from "../components/restaurant";
import data from "../data/index.json";
import staticData from "../data/static.json";
import { generateBlurDataURLs } from "../lib/helpers";

export const getStaticProps = async () => {
  return {
    props: {
      data: await generateBlurDataURLs(data),
      staticData: await generateBlurDataURLs(staticData),
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

      <h1 className="sr-only">Gasthaus »zur Mühle«</h1>

      <RestaurantSection restaurantData={data.restaurant} />
      <HostsSection hostsData={data.hosts} className="mt-80 md:mt-120" />
      <FoodSection foodData={data.food} className="mt-112 md:mt-150" />
      <HistorySection historyData={data.history} className="mt-80 md:mt-120" />
    </>
  );
};

export default Home;
