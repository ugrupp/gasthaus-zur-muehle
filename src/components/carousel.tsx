import classNames from "classnames";
import { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import Image from "../components/image";
import data from "../data/index.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";
import richtextStyles from "../styles/richtext.module.css";

interface CarouselProps {
  carousel: typeof data.hosts.carousel;
  useIntrinsicRatio?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  carousel,
  useIntrinsicRatio = false,
}) => {
  const [swiperEl, setSwiper] = useState<SwiperType>();

  useEffect(() => {
    const setSlideWidth = () => {
      window.requestAnimationFrame(() => {
        swiperEl?.slides.each((slide, index) => {
          const image = (slide as HTMLElement).querySelector<HTMLImageElement>(
            ".swiper-image"
          );

          if (image) {
            (slide as HTMLElement).style.width = `${image.offsetWidth}px`;
          }
        });
        swiperEl?.update();
      });
    };

    setSlideWidth();
    swiperEl?.on("resize", setSlideWidth);
  }, [swiperEl]);

  return (
    <div className="relative">
      <Swiper
        loop={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        autoHeight={false}
        speed={1000}
        grabCursor={true}
        spaceBetween={20}
        breakpoints={{
          768: {
            spaceBetween: 60,
          },
        }}
        preloadImages={false}
        onInit={(swiperEl) => {
          setSwiper(swiperEl);
        }}
      >
        {carousel.map(({ image, caption }, idx) => (
          <SwiperSlide key={idx}>
            <Image
              wrapperProps={{
                className:
                  "swiper-image h-[212px] md:h-[270px] lg:h-[400px] aspect-[480/400]",
                style: useIntrinsicRatio
                  ? { aspectRatio: `${image.width}/${image.height}` }
                  : undefined,
              }}
              quality={NEXT_IMAGE_DEFAULT_QUALITY}
              layout="fill"
              src={image.src}
              alt={image.alt}
              placeholder="blur"
              blurDataURL={image.blurDataURL}
              objectFit="cover"
              objectPosition={image.objectPosition}
              dominantColor={image.dominantColor}
            />

            {/* Caption */}
            {!!caption && (
              <figcaption
                className={classNames(
                  "text-center mt-20 md:mt-30",
                  richtextStyles.root,
                  richtextStyles["size-base"],
                  "leading-snug"
                )}
              >
                {caption}
              </figcaption>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
