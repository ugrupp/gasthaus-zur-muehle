import classNames from "classnames";
import parse from "html-react-parser";
import Image from "../components/image";
import React, { useEffect, useRef, useState } from "react";
import ArrowsRight from "../assets/icons/arrows-right.svg";
import data from "../data/index.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import bgStyles from "../styles/bg.module.css";
import richtextStyles from "../styles/richtext.module.css";
import Container from "./container";
import Dot from "./dot";
import Gallery from "./gallery";
import SectionHeading from "./section-heading";

interface RestaurantSectionProps {
  restaurantData: typeof data.restaurant;
  className?: string;
}

const RestaurantSection: React.FC<RestaurantSectionProps> = ({
  restaurantData,
  className,
}) => {
  const {
    id,
    heroImage,
    image2,
    image3,
    headline,
    intro__html,
    body__html,
    contentImage,
    outro__html,
    gallery,
  } = restaurantData;

  const topSentinelRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [heroImageHeight, setHeroImageHeight] = useState(0);
  const [galleryHeight, setGalleryHeight] = useState(0);

  const updateHeroImageHeight = () => {
    !!topSentinelRef.current &&
      setHeroImageHeight(
        window.innerHeight -
          (topSentinelRef.current.getBoundingClientRect().top + window.scrollY)
      );
  };

  const updateGalleryHeight = () => {
    !!galleryRef.current && setGalleryHeight(galleryRef.current.offsetHeight);
  };

  useEffect(() => {
    updateHeroImageHeight();
    updateGalleryHeight();

    window.addEventListener("resize", () => {
      window.requestAnimationFrame(() => {
        updateHeroImageHeight();
        updateGalleryHeight();
      });
    });
  }, []);

  return (
    <section className={classNames(className, "relative")}>
      {/* Background */}
      <div
        className="bg-gray-ci absolute inset-0"
        style={{
          top: !!heroImageHeight
            ? `${Math.min(heroImageHeight, 570) * (1 / 3)}px`
            : undefined,
          bottom: !!galleryHeight ? galleryHeight * 0.5 : undefined,
        }}
      >
        {/* Bg pattern */}
        <div
          className={classNames(
            bgStyles.root,
            bgStyles.white,
            "absolute inset-x-0 top-0 h-[670px]"
          )}
        />

        {/* Bg pattern */}
        <div
          className={classNames(
            bgStyles.root,
            bgStyles.white,
            bgStyles.reverse,
            "absolute inset-x-0 bottom-0 h-[670px]"
          )}
        />
      </div>

      {/* Section content */}
      <div className="relative">
        {/* Top images */}
        <Container>
          <div className="relative z-10">
            {/* Hero image */}
            <div
              className="px-20 md:px-100 max-w-2xl mx-auto box-content"
              ref={topSentinelRef}
            >
              <Image
                wrapperProps={{
                  className: "w-full h-[570px] max-h-[570px]",
                  style: {
                    height: !!heroImageHeight
                      ? `${heroImageHeight}px`
                      : undefined,
                  },
                }}
                quality={NEXT_IMAGE_DEFAULT_QUALITY}
                layout="fill"
                src={heroImage.src}
                alt={heroImage.alt}
                objectFit="cover"
                objectPosition={heroImage.objectPosition}
                priority={true}
                placeholder="blur"
                blurDataURL={heroImage.blurDataURL}
                dominantColor={heroImage.dominantColor}
              />
            </div>

            {/* Scroll indicator */}
            <div className="absolute right-0 bottom-30 hidden md:block">
              <a
                href="#gasthaus"
                className="block text-red-ci transition-colors hover:text-brown-ci"
              >
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
              <Image
                wrapperProps={{ className: "w-3/4 md:w-auto" }}
                quality={NEXT_IMAGE_DEFAULT_QUALITY}
                layout="responsive"
                src={image2.src}
                alt={image2.alt}
                width={image2.width}
                height={image2.height}
                objectFit="cover"
                objectPosition={image2.objectPosition}
                priority={true}
                placeholder="blur"
                blurDataURL={image2.blurDataURL}
                dominantColor={image2.dominantColor}
              />
            </div>

            <div
              className={classNames(["col-span-2 md:col-start-2 md:col-end-3"])}
            >
              <Image
                wrapperProps={{ className: "w-3/4 ml-auto md:w-auto md:ml-0" }}
                quality={NEXT_IMAGE_DEFAULT_QUALITY}
                layout="responsive"
                src={image3.src}
                alt={image3.alt}
                width={image3.width}
                height={image3.height}
                objectFit="cover"
                objectPosition={image3.objectPosition}
                priority={true}
                placeholder="blur"
                blurDataURL={image3.blurDataURL}
                dominantColor={image3.dominantColor}
              />
            </div>
          </div>
        </Container>

        {/* Headline */}
        <Container className="mt-40 md:-mt-112 relative" id={id}>
          <SectionHeading heading={headline} />
        </Container>

        {/* Intro */}
        <Container className="mt-40 md:mt-60 mb-50 md:mb-100 relative">
          <div className="px-20 md:px-100 max-w-2xl mx-auto box-content">
            <div
              className={classNames([
                richtextStyles.root,
                richtextStyles["size-4xl"],
                "leading-supertight font-fracture font-normal",
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
                  "leading-snug",
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
              <Image
                wrapperProps={{ className: "w-3/4 md:w-auto" }}
                quality={NEXT_IMAGE_DEFAULT_QUALITY}
                layout="responsive"
                src={contentImage.src}
                alt={contentImage.alt}
                width={contentImage.width}
                height={contentImage.height}
                placeholder="blur"
                blurDataURL={contentImage.blurDataURL}
                dominantColor={contentImage.dominantColor}
              />
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
                "leading-snug",
              ])}
            >
              {parse(outro__html)}
            </div>
          </div>
        </Container>

        {/* Gallery */}
        <div ref={galleryRef}>
          <Container>
            <div className="px-20 md:px-100 max-w-2xl mx-auto box-content">
              <Gallery gallery={gallery} />
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
