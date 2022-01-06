import classNames from "classnames";
import parse from "html-react-parser";
import React from "react";
import data from "../data/index.json";
import richtextStyles from "../styles/richtext.module.css";
import Container from "./container";
import SectionHeading from "./section-heading";

interface HistorySectionProps {
  historyData: typeof data.history;
  className?: string;
}

const HistorySection: React.FC<HistorySectionProps> = ({
  historyData,
  className,
}) => {
  const { id, headline, intro__html, body__html } = historyData;

  return (
    <section id={id} className={className}>
      {/* Headline */}
      <Container>
        <SectionHeading heading={headline} />
      </Container>

      {/* Intro */}
      <Container className="mt-40 md:mt-60">
        <div className="px-20 md:px-100 max-w-2xl mx-auto box-content">
          <div
            className={classNames([
              richtextStyles.root,
              richtextStyles["size-4xl"],
              "leading-supertight font-fracture",
              "text-red-ci",
            ])}
          >
            {parse(intro__html)}
          </div>
        </div>
      </Container>

      {/* Images */}
      <Container className="mt-40 md:mt-50">
        <div className="px-20 md:px-100 max-w-2xl mx-auto box-content">
          {/* TODO */}
          <div className="w-3/4 max-w-lg relative">
            <div className="aspect-[480/400] bg-brown-ci-light flex items-center justify-center">
              Bild 1
            </div>
          </div>

          {/* TODO */}
          <div className="w-1/2 ml-auto -mt-30 md:-mt-60">
            <div className="aspect-[340/283] bg-red-ci text-white flex items-center justify-center">
              Bild 2
            </div>
          </div>
        </div>
      </Container>

      {/* Body */}
      <Container className="mt-50 md:mt-60">
        <div className="px-20 md:px-100 max-w-2xl mx-auto box-content">
          <div
            className={classNames([
              richtextStyles.root,
              richtextStyles["size-lg"],
              "leading-tight",
            ])}
          >
            {parse(body__html)}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HistorySection;
