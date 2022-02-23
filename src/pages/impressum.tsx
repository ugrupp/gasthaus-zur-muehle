import classNames from "classnames";
import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React from "react";
import TwoColContent from "../components/two-col-content";
import data from "../data/impressum.json";
import staticData from "../data/static.json";
import { generateImagePlaceholders } from "../lib/helpers";
import bgStyles from "../styles/bg.module.css";

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
  const { col1, col2 } = data;

  return (
    <>
      <Head>
        <title>Impressum – Gasthaus »zur Mühle«</title>
      </Head>

      <h1 className="sr-only">Impressum</h1>

      <div className="pt-60 lg:pt-120 mt-20 lg:mt-120 bg-gradient-to-b from-gray-ci relative">
        {/* Bg pattern */}
        <div
          className={classNames(
            bgStyles.root,
            bgStyles.white,
            "absolute inset-x-0 top-0 h-[670px]"
          )}
        />

        <div className="relative">
          <TwoColContent col1={col1} col2={col2} />
        </div>
      </div>
    </>
  );
};

export default Home;
