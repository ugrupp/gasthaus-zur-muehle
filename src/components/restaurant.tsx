import classNames from "classnames";
import parse from "html-react-parser";
import Image from "next/image";
import React from "react";
import data from "../data/index.json";
import Container from "./container";

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

  return (
    <section id={id} className={className}>
      {/* Top images */}
      <Container>
        {/* Image 1 */}
        <div className="px-20 md:px-100 max-w-2xl mx-auto box-content relative">
          {/* TODO (image & responsive dimensions) */}
          <div className="aspect-[295/425] bg-ci-red text-white flex items-center justify-center">
            Bild 1
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
              <div className="aspect-[255/212] bg-ci-brown text-white flex items-center justify-center">
                Bild 2
              </div>
            </div>
          </div>

          <div
            className={classNames(["col-span-2 md:col-start-2 md:col-end-3"])}
          >
            <div className="w-3/4 ml-auto md:w-auto md:ml-0">
              {/* TODO */}
              <div className="aspect-[255/212] bg-ci-brown-light flex items-center justify-center">
                Bild 3
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Headline */}
      <Container className="mt-40 md:-mt-112 relative">
        <h2 className="text-center">{headline}</h2>
      </Container>

      {/* Intro */}
      <Container className="mt-40 md:mt-60 mb-50 md:mb-100">
        <div className="px-20 md:px-100 max-w-2xl mx-auto box-content">
          <p className="text-3xl font-bold">{parse(intro__html)}</p>
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
            <p>{parse(body__html)}</p>
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
                // TODO: global quality config?
                quality={85}
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
          <p className="text-2xl">{parse(outro__html)}</p>
        </div>
      </Container>

      {/* Gallery */}
      <Container>
        <div className="px-20 md:px-100 max-w-2xl mx-auto box-content">
          <div className="aspect-square bg-ci-brown-light flex items-center justify-center">
            Galerie
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RestaurantSection;
