import classNames from "classnames";
import parse from "html-react-parser";
import React from "react";
import OpentimesIcon from "../assets/icons/opentimes.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import data from "../data/static.json";
import richtextStyles from "../styles/richtext.module.css";

interface ContactProps {
  phoneLink: typeof data.topbar.phoneLink;
  opentimes__html: typeof data.topbar.opentimes__html;
}

const Contact: React.FC<ContactProps> = ({ phoneLink, opentimes__html }) => {
  return (
    <div className="space-y-24 md:space-y-20 lg:space-y-24">
      {[
        {
          key: "phone",
          Icon: PhoneIcon,
          content: (
            <a
              href={phoneLink.href}
              className="transition-colors hover:text-red-ci"
            >
              {phoneLink.label}
            </a>
          ),
        },
        {
          key: "opentimes",
          Icon: OpentimesIcon,
          content: parse(opentimes__html),
        },
      ].map(({ key, Icon, content }) => (
        <div className="flex gap-10 md:gap-12" key={key}>
          <Icon className="md:h-30 md:w-30 lg:h-[33px] lg:w-[33px] translate-y-[-17%]" />
          <div
            className={classNames(
              richtextStyles.root,
              "text-17 md:text-15 xl:text-17 leading-tight whitespace-nowrap"
            )}
          >
            {content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
