import classNames from "classnames";
import parse from "html-react-parser";
import richtextStyles from "../styles/richtext.module.css";
import Container from "./container";

interface TwoColContentProps {
  col1: string;
  col2: string;
}

const TwoColContent: React.FC<TwoColContentProps> = ({ col1, col2 }) => {
  return (
    <Container>
      <div
        className={classNames(
          "grid grid-cols-[minmax(0,480px)] lg:grid-cols-[repeat(2,minmax(0,480px))] justify-center lg:justify-between",
          "gap-x-20 sm:gap-x-30 md:gap-x-60",
          "gap-y-40"
        )}
      >
        <div
          className={classNames(
            richtextStyles.root,
            richtextStyles["size-base"],
            "leading-snug"
          )}
        >
          {parse(col1)}
        </div>
        <div
          className={classNames(
            richtextStyles.root,
            richtextStyles["size-base"],
            "leading-snug"
          )}
        >
          {parse(col2)}
        </div>
      </div>
    </Container>
  );
};

export default TwoColContent;
