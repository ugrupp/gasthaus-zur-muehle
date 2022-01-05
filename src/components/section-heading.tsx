import classNames from "classnames";
import Dot from "./dot";

const DotLine = () => (
  <div className="h-24 flex flex-col justify-between">
    <Dot />
    <Dot />
    <Dot />
    <Dot />
  </div>
);

interface SectionHeadingProps {
  heading: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  className,
}) => {
  return (
    <h2
      className={classNames(
        className,
        "text-center text-red-ci",
        "flex justify-center items-center gap-x-20 md:gap-x-30"
      )}
    >
      <DotLine />
      {heading}
      <DotLine />
    </h2>
  );
};

export default SectionHeading;
