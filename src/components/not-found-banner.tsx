import classNames from "classnames";
import parse from "html-react-parser";
import { useRecoilValue } from "recoil";
import data from "../data/404.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import { topbarHeightState } from "../lib/state";
import richtextStyles from "../styles/richtext.module.css";
import Container from "./container";
import Image from "./image";

interface NotFoundBannerProps {
  bgImage: typeof data.bgImage;
  text__html: typeof data.text__html;
}

const NotFoundBanner: React.FC<NotFoundBannerProps> = ({
  bgImage,
  text__html,
}) => {
  const topbarHeight = useRecoilValue(topbarHeightState);

  return (
    <div
      className="w-full h-[570px] bg-red-ci text-brown-ci-light flex items-center justify-center selection-inverted relative"
      style={{
        height: `calc(100vh - ${topbarHeight}px)`,
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0 mix-blend-multiply">
        <Image
          wrapperProps={{ className: "h-full w-full" }}
          quality={NEXT_IMAGE_DEFAULT_QUALITY}
          layout="fill"
          src={bgImage.src}
          alt={bgImage.alt}
          objectFit="cover"
          objectPosition={bgImage.objectPosition}
          priority={true}
          placeholder="blur"
          blurDataURL={bgImage.blurDataURL}
          dominantColor={bgImage.dominantColor}
        />
      </div>

      {/* Text */}
      <Container className="relative">
        <div className="max-w-lg">
          <div
            className={classNames(
              richtextStyles.root,
              richtextStyles["size-4xl"],
              "leading-supertight"
            )}
          >
            {parse(text__html)}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundBanner;
