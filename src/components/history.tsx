import classNames from "classnames";
import parse from "html-react-parser";
import Image from "next/image";
import React from "react";
import data from "../data/index.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
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
  const { id, headline, intro__html, image1, image2, body__html } = historyData;

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
          <div className="w-3/4 max-w-lg relative">
            <Image
              quality={NEXT_IMAGE_DEFAULT_QUALITY}
              layout="responsive"
              src={image1.src}
              alt={image1.alt}
              width={image1.width}
              height={image1.height}
              objectFit="cover"
              objectPosition={image1.objectPosition}
            />
          </div>

          <div className="w-1/2 ml-auto -mt-30 md:-mt-60">
            <Image
              quality={NEXT_IMAGE_DEFAULT_QUALITY}
              layout="responsive"
              src={image2.src}
              alt={image2.alt}
              width={image2.width}
              height={image2.height}
              objectFit="cover"
              objectPosition={image2.objectPosition}
            />
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
