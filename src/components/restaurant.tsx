import classNames from "classnames";
import parse from "html-react-parser";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ArrowsRight from "../assets/icons/arrows-right.svg";
import data from "../data/index.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import richtextStyles from "../styles/richtext.module.css";
import Container from "./container";
import Dot from "./dot";
import SectionHeading from "./section-heading";

interface RestaurantSectionProps {
  restaurantData: typeof data.restaurant;
  className?: string;
}

const RestaurantSection: React.FC<RestaurantSectionProps> = ({
  restaurantData,
  className,
}) => {
  const { id, headline, intro__html, body__html, contentImage, outro__html } =
    restaurantData;

  const topSentinelRef = useRef<HTMLDivElement>(null);
  const [heroImageHeight, setHeroImageHeight] = useState(0);

  const updateHeroImageHeight = () => {
    !!topSentinelRef.current &&
      setHeroImageHeight(
        window.innerHeight -
          (topSentinelRef.current.getBoundingClientRect().top + window.scrollY)
      );
  };

  useEffect(() => {
    updateHeroImageHeight();

    window.addEventListener("resize", () => {
      window.requestAnimationFrame(() => {
        updateHeroImageHeight();
      });
    });
  }, []);

  return (
    <section className={className}>
      {/* Top images */}
      <Container>
        <div className="relative">
          {/* Hero image */}
          <div
            className="px-20 md:px-100 max-w-2xl mx-auto box-content relative"
            ref={topSentinelRef}
          >
            <div
              className="w-full h-[570px] max-h-[570px] bg-red-ci text-white flex items-center justify-center"
              style={{
                height: !!heroImageHeight ? `${heroImageHeight}px` : undefined,
              }}
            >
              Hero-Bild
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute right-0 bottom-30 hidden md:block">
            <a href="#gasthaus" className="block text-red-ci">
              {/* Label */}
              <span className="sr-only">Nach unten scrollen</span>

              {/* Decor */}
              <div className="flex flex-col items-center gap-15">
                {/* Dots */}
                <div className="flex flex-col gap-10">
                  <Dot />
                  <Dot />
                  <Dot />
                  <Dot />
                  <Dot />
                  <Dot />
                </div>

                {/* Icon */}
                <ArrowsRight className="block h-40 w-40 rotate-90" />
              </div>
            </a>
          </div>
        </div>

        {/* Images 2 & 3 */}
        <div
          className={classNames([
            "-mt-90 xl:-mt-220",
            "grid grid-cols-[repeat(2,minmax(0,480px))] justify-between items-end",
            "gap-x-20 sm:gap-x-30 md:gap-x-60",
            "gap-y-40",
          ])}
        >
          <div
            className={classNames([
              "col-span-2 md:col-start-1 md:col-end-2",
              "md:mb-150 xl:mb-280",
            ])}
          >
            <div className="w-3/4 md:w-auto">
              {/* TODO */}
              <div className="aspect-[255/212] bg-brown-ci text-white flex items-center justify-center">
                Bild 2
              </div>
            </div>
          </div>

          <div
            className={classNames(["col-span-2 md:col-start-2 md:col-end-3"])}
          >
            <div className="w-3/4 ml-auto md:w-auto md:ml-0">
              {/* TODO */}
              <div className="aspect-[255/212] bg-brown-ci-light flex items-center justify-center">
                Bild 3
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Headline */}
      <Container className="mt-40 md:-mt-112 relative" id={id}>
        <SectionHeading heading={headline} />
      </Container>

      {/* Intro */}
      <Container className="mt-40 md:mt-60 mb-50 md:mb-100">
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

      {/* 2 col content */}
      <Container>
        <div
          className={classNames([
            "grid grid-cols-[repeat(2,minmax(0,480px))] justify-between items-end",
            "gap-x-20 sm:gap-x-30 md:gap-x-60",
            "gap-y-50 md:gap-y-120",
          ])}
        >
          {/* Body */}
          <div
            className={classNames([
              "col-span-2 lg:col-start-2 lg:col-end-3",
              "lg:row-start-1",
              "px-20 md:px-100 max-w-2xl mx-auto box-content lg:p-0 lg:max-w-none lg:m-0",
            ])}
          >
            <div
              className={classNames([
                richtextStyles.root,
                richtextStyles["size-base"],
                "leading-tight",
              ])}
            >
              {parse(body__html)}
            </div>
          </div>

          {/* Image */}
          <div
            className={classNames([
              "col-span-2 md:col-start-1 md:col-end-2",
              "lg:row-start-1",
            ])}
          >
            <div className="w-3/4 md:w-auto">
              <Image
                quality={NEXT_IMAGE_DEFAULT_QUALITY}
                layout="responsive"
                src={contentImage.src}
                alt={contentImage.alt}
                width={contentImage.width}
                height={contentImage.height}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Outro */}
      <Container className="my-70 md:my-120">
        <div className="px-20 md:px-100 max-w-2xl mx-auto box-content">
          <div
            className={classNames([
              richtextStyles.root,
              richtextStyles["size-lg"],
              "leading-tight",
            ])}
          >
            {parse(outro__html)}
          </div>
        </div>
      </Container>

      {/* Gallery */}
      <Container>
        <div className="px-20 md:px-100 max-w-2xl mx-auto box-content">
          <div className="aspect-square bg-brown-ci-light flex items-center justify-center">
            Galerie
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RestaurantSection;
