import classNames from "classnames";
import { useState } from "react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowsRightBg from "../assets/icons/arrows-right-bg.svg";
import Image from "../components/image";
import data from "../data/index.json";
import { NEXT_IMAGE_DEFAULT_QUALITY } from "../lib/constants";

interface GalleryProps {
  gallery: typeof data.restaurant.gallery;
}

const Gallery: React.FC<GalleryProps> = ({ gallery }) => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        speed={1000}
        grabCursor={true}
        autoHeight={true}
        slidesPerView={1}
        spaceBetween={30}
        preloadImages={false}
        navigation={{
          prevEl,
          nextEl,
        }}
        pagination={{
          el: paginationEl,
          type: "fraction",
        }}
      >
        {gallery.map(({ image }, idx) => (
          <SwiperSlide key={idx}>
            <Image
              quality={NEXT_IMAGE_DEFAULT_QUALITY}
              layout="responsive"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              placeholder="blur"
              blurDataURL={image.blurDataURL}
              dominantColor={image.dominantColor}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls */}
      <button
        ref={(node) => setPrevEl(node)}
        className={classNames(
          "absolute top-1/2 z-10 left-0 -translate-y-1/2 -translate-x-1/2",
          "h-40 w-40 md:h-60 md:w-60 lg:w-70 lg:h-70",
          "text-red-ci transition-colors hover:text-brown-ci"
        )}
      >
        <ArrowsRightBg className="block h-full w-full rotate-180" />
        <span className="sr-only">Rückwärts</span>
      </button>

      <button
        ref={(node) => setNextEl(node)}
        className={classNames(
          "absolute top-1/2 z-10 right-0 -translate-y-1/2 translate-x-1/2",
          "h-40 w-40 md:h-60 md:w-60 lg:w-70 lg:h-70",
          "text-red-ci transition-colors hover:text-brown-ci"
        )}
      >
        <ArrowsRightBg className="block h-full w-full" />
        <span className="sr-only">Vorwärts</span>
      </button>

      {/* Pagination */}
      <div
        className="absolute z-10 bottom-0 right-0 bg-white px-10 py-8 md:px-15 md:py-12 text-12 md:text-17 leading-snug pointer-events-none"
        ref={(node) => setPaginationEl(node)}
      />
    </div>
  );
};

export default Gallery;
