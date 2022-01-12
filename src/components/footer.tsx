import classNames from "classnames";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import OpentimesIcon from "../assets/icons/opentimes.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import staticData from "../data/static.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import styles from "../styles/footer.module.css";
import richtextStyles from "../styles/richtext.module.css";
import Container from "./container";
import Dot from "./dot";
import Map from "./map";

interface FooterProps {
  data: typeof staticData.footer;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const {
    id,
    bgImage,
    menu,
    phoneLink,
    opentimes__html,
    address__html,
    imprint__html,
  } = data;

  return (
    <footer className="bg-white">
      {/* Image */}
      <Container>
        <div
          className={classNames(
            styles["bg-image"],
            "w-full h-[450px] md:h-[900px] relative"
          )}
        >
          <Image
            quality={NEXT_IMAGE_DEFAULT_QUALITY}
            layout="fill"
            src={bgImage.src}
            alt={bgImage.alt}
            objectFit="cover"
            objectPosition={bgImage.objectPosition}
            placeholder="blur"
            blurDataURL={bgImage.blurDataURL}
          />
        </div>
      </Container>

      <div className="mt-[-225px] md:mt-[-450px] min-h-[225px] md:min-h-[450px] text-gray-ci selection-inverted relative">
        {/* Background */}
        <div className="bg-red-ci mix-blend-multiply absolute inset-0"></div>

        {/* Content */}
        <div className="relative">
          <Container className="pt-80 md:pt-120 pb-40 md:pb-60">
            <div
              id={id}
              className={classNames(
                "px-20 md:px-100 max-w-2xl mx-auto box-content",
                "flex flex-col items-center"
              )}
            >
              {/* Logo */}
              <Link href="/">
                <a className="w-[200px] md:w-[305px] block">
                  <Image
                    src="/images/logo-white.svg"
                    alt="Zur Mühle"
                    width={305.232}
                    height={170.052}
                    layout="responsive"
                  />
                </a>
              </Link>

              {/* Address */}
              <div
                className={classNames(
                  "mt-50 text-center relative z-10",
                  richtextStyles.root,
                  richtextStyles["size-lg"],
                  "leading-snug"
                )}
              >
                {parse(address__html)}
              </div>

              {/* Map */}
              <div className="w-full h-[355px] md:h-[422px] lg:h-[570px] bg-zinc-800 text-white -mt-30 md:-mt-40 mb-30 md:mb-40">
                <Map />
              </div>

              {/* Contact */}
              <div className="relative z-10 space-y-12 md:space-y-30">
                {[
                  {
                    key: "phone",
                    Icon: PhoneIcon,
                    content: <a href={phoneLink.href}>{phoneLink.label}</a>,
                  },
                  {
                    key: "opentimes",
                    Icon: OpentimesIcon,
                    content: parse(opentimes__html),
                  },
                ].map(({ key, Icon, content }) => (
                  <div className="flex gap-20 md:gap-30" key={key}>
                    <Icon className="h-40 w-40 md:h-50 md:w-50 text-brown-ci-light translate-y-[-17%]" />
                    <div
                      className={classNames(
                        richtextStyles.root,
                        richtextStyles.inverted,
                        richtextStyles["size-lg"],
                        "leading-snug"
                      )}
                    >
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div
              className={classNames(
                "mt-70 md:mt-112 grid grid-cols-2",
                "text-brown-ci-light",
                styles.info
              )}
            >
              {/* Menu */}
              <InfoContent>
                <nav className="flex flex-col items-start">
                  {menu.map(({ href, label }) => (
                    <Link href={href} key={href}>
                      <a className="inline-block">{label}</a>
                    </Link>
                  ))}
                </nav>
              </InfoContent>

              {/* Imprint */}
              <InfoContent className="justify-self-end">
                <div>{parse(imprint__html)}</div>
              </InfoContent>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Info content
interface InfoContentProps {}

const InfoContent: React.FC<
  InfoContentProps & React.HTMLProps<HTMLDivElement>
> = ({ children, className, ...props }) => (
  <div
    className={classNames("flex items-center gap-20 md:gap-30", className)}
    {...props}
  >
    <DotLine />
    {children}
    <DotLine />
  </div>
);

const DotLine = () => (
  <div className="h-40 md:h-50 flex flex-col justify-between">
    <Dot />
    <Dot />
    <Dot />
    <Dot />
    <Dot />
    <Dot />
    <Dot />
    <Dot />
  </div>
);
