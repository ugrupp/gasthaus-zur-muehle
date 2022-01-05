import classNames from "classnames";
import parse from "html-react-parser";
import React from "react";
import data from "../data/index.json";
import Container from "./container";
import Dot from "./dot";
import SectionHeading from "./section-heading";
import ArrowsRight from "../assets/icons/arrows-right.svg";

interface FoodSectionProps {
  foodData: typeof data.food;
  className?: string;
}

const FoodSection: React.FC<FoodSectionProps> = ({ foodData, className }) => {
  const {
    id,
    headline,
    intro__html,
    body__html,
    menu__html,
    menuFood,
    menuDrinks,
  } = foodData;

  return (
    <section id={id} className={classNames(className, "pt-80 md:pt-120")}>
      {/* Headline */}
      <Container>
        <SectionHeading heading={headline} />
      </Container>

      {/* Intro */}
      <Container className="mt-40 md:mt-60 relative">
        <div className="px-20 md:px-100 max-w-2xl mx-auto box-content">
          <p className="text-3xl font-bold">{parse(intro__html)}</p>
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
              {/* TODO */}
              <div className="aspect-[255/212] bg-ci-brown-light flex items-center justify-center">
                Bild 1
              </div>
            </div>
          </div>

          <div
            className={classNames([
              "col-span-2 md:col-start-2 md:col-end-3",
              "md:mt-120 lg:mt-200 lg:row-span-2",
            ])}
          >
            <div className="w-3/4 ml-auto md:w-auto md:ml-0">
              {/* TODO */}
              <div className="aspect-[255/212] bg-ci-red text-white flex items-center justify-center">
                Bild 2
              </div>
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
            <p>{parse(body__html)}</p>
          </div>
        </div>
      </Container>

      {/* Menu */}
      <Container className="mt-70 md:mt-100 xl:mt-112">
        <div className="px-20 md:px-100 max-w-lg mx-auto box-content space-y-40 md:space-y-50">
          {/* Menu intro */}
          <p className="text-2xl">{parse(menu__html)}</p>

          {/* Menu links */}
          <div className="space-y-10">
            <FoodMenuLink menu={menuFood} />
            <FoodMenuLink menu={menuDrinks} />
          </div>
        </div>
      </Container>
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
        "text-ci-red",
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
