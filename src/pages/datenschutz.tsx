import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React from "react";
import TwoColContent from "../components/two-col-content";
import data from "../data/datenschutz.json";

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
  const { col1, col2 } = data;

  return (
    <>
      <Head>
        <title>
          Datenschutz – Gasthaus »zur Mühle« in Buggingen, Familie Löffler
        </title>
      </Head>

      <h1 className="sr-only">Datenschutz</h1>

      <div className="pt-60 lg:pt-120 mt-20 lg:mt-120 bg-gray-ci">
        <TwoColContent col1={col1} col2={col2} />
      </div>
    </>
  );
};

export default Home;
