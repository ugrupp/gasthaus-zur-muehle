import classNames from "classnames";
import parse from "html-react-parser";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ArrowsRight from "../assets/icons/arrows-right.svg";
import data from "../data/index.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import bgStyles from "../styles/bg.module.css";
import richtextStyles from "../styles/richtext.module.css";
import Container from "./container";
import Dot from "./dot";
import SectionHeading from "./section-heading";

interface FoodSectionProps {
  foodData: typeof data.food;
  className?: string;
}

const FoodSection: React.FC<FoodSectionProps> = ({ foodData, className }) => {
  const {
    id,
    headline,
    intro__html,
    image1,
    image2,
    body__html,
    menu__html,
    menuFood,
    menuDrinks,
  } = foodData;

  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselHeight, setCarouselHeight] = useState(0);
  const updateCarouselHeight = () => {
    !!carouselRef.current &&
      setCarouselHeight(carouselRef.current.offsetHeight);
  };

  useEffect(() => {
    updateCarouselHeight();

    window.addEventListener("resize", () => {
      window.requestAnimationFrame(() => {
        updateCarouselHeight();
      });
    });
  }, []);

  return (
    <section className={classNames(className, "pt-80 md:pt-120 relative")}>
      {/* Background */}
      <div
        className="bg-gray-ci absolute inset-0"
        style={{
          bottom: !!carouselHeight ? carouselHeight * 0.5 : undefined,
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
            bgStyles.gray,
            "absolute inset-x-0 top-full h-[670px]"
          )}
        />
      </div>

      {/* Section content */}
      <div className="relative">
        {/* Headline */}
        <Container id={id}>
          <SectionHeading heading={headline} />
        </Container>

        {/* Intro */}
        <Container className="mt-40 md:mt-60 relative z-10">
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
        <Container className="-mt-50 md:-mt-70">
          <div
            className={classNames([
              "grid grid-cols-[repeat(2,minmax(0,480px))] justify-between",
              "gap-x-20 sm:gap-x-30 md:gap-x-60",
              "gap-y-40",
            ])}
          >
            {/* Images */}
            <div
              className={classNames(["col-span-2 md:col-start-1 md:col-end-2"])}
            >
              <div className="w-3/4 md:w-auto">
                <Image
                  quality={NEXT_IMAGE_DEFAULT_QUALITY}
                  layout="responsive"
                  src={image1.src}
                  alt={image1.alt}
                  width={image1.width}
                  height={image1.height}
                  objectFit="cover"
                  objectPosition={image1.objectPosition}
                  placeholder="blur"
                  blurDataURL={image1.blurDataURL}
                />
              </div>
            </div>

            <div
              className={classNames([
                "col-span-2 md:col-start-2 md:col-end-3",
                "md:mt-120 lg:mt-200 lg:row-span-2",
              ])}
            >
              <div className="w-3/4 ml-auto md:w-auto md:ml-0">
                <Image
                  quality={NEXT_IMAGE_DEFAULT_QUALITY}
                  layout="responsive"
                  src={image2.src}
                  alt={image2.alt}
                  width={image2.width}
                  height={image2.height}
                  objectFit="cover"
                  objectPosition={image2.objectPosition}
                  placeholder="blur"
                  blurDataURL={image2.blurDataURL}
                />
              </div>
            </div>

            {/* Body */}
            <div
              className={classNames([
                "mt-20 lg:mt-80",
                "col-span-2 lg:col-start-1 lg:col-end-2",
                "px-20 md:px-100 max-w-2xl mx-auto box-content lg:p-0 lg:max-w-none lg:mx-0",
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
          </div>
        </Container>

        {/* Menu */}
        <Container className="mt-70 md:mt-100 xl:mt-112">
          <div className="px-20 md:px-100 max-w-lg mx-auto box-content space-y-40 md:space-y-50">
            {/* Menu intro */}
            <div
              className={classNames([
                richtextStyles.root,
                richtextStyles["size-lg"],
                "leading-snug",
              ])}
            >
              {parse(menu__html)}
            </div>

            {/* Menu links */}
            <div className="space-y-10">
              <FoodMenuLink menu={menuFood} />
              <FoodMenuLink menu={menuDrinks} />
            </div>
          </div>
        </Container>

        {/* Carousel */}
        <div className="mt-80 md:mt-120" ref={carouselRef}>
          <Container>
            <div className="bg-brown-ci-light h-280">Carousel</div>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;

// Menu link
interface FoodMenuLinkProps {
  menu: {
    label: string;
    href: string;
  };
}

const FoodMenuLink: React.FC<FoodMenuLinkProps> = ({ menu }) => {
  const { label, href } = menu;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={classNames([
        "flex items-center gap-x-20 justify-between",
        "border-current border-b py-10 md:py-12",
        "text-red-ci font-fracture font-normal leading-supertight text-25 md:text-30",
        "transition-colors hover:text-brown-ci",
      ])}
    >
      {/* Label */}
      <span>{label}</span>

      {/* Decor */}
      <div className="flex items-center gap-15">
        {/* Dots */}
        <div className="flex gap-10">
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </div>

        {/* Icon */}
        <ArrowsRight className="block h-40 w-40" />
      </div>
    </a>
  );
};
