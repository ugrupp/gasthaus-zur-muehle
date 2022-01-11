import classNames from "classnames";
import parse from "html-react-parser";
import React from "react";
import data from "../data/index.json";
import richtextStyles from "../styles/richtext.module.css";
import Container from "./container";
import SectionHeading from "./section-heading";

interface HostsSectionProps {
  hostsData: typeof data.hosts;
  className?: string;
}

const HostsSection: React.FC<HostsSectionProps> = ({
  hostsData,
  className,
}) => {
  const { id, headline, intro__html } = hostsData;

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
              richtextStyles["size-lg"],
              "leading-snug",
            ])}
          >
            {parse(intro__html)}
          </div>
        </div>
      </Container>

      {/* Carousel */}
      <div className="mt-50 md:mt-80">
        <div className="bg-brown-ci-light h-280">Carousel</div>
      </div>
    </section>
  );
};

export default HostsSection;
