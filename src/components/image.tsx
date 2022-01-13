import { Transition } from "@headlessui/react";
import classNames from "classnames";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import React, { useState } from "react";
import { Image as ImageType } from "../types/image";

interface ImageProps {
  wrapperProps?: React.HTMLProps<HTMLDivElement>;
  image?: ImageType;
  useOverlay?: boolean;
  dominantColor?: string;
  placeholderType?: "dominant" | "blur";
}

const Image: React.FC<
  ImageProps & Omit<NextImageProps, "onLoadingComplete">
> = ({
  wrapperProps,
  image,
  dominantColor,
  placeholderType = "dominant",
  ...props
}) => {
  // Handle loading state
  const [isLoadingComplete, setIsLoadingComplete] = useState<boolean>(false);
  const onLoadingComplete: NextImageProps["onLoadingComplete"] = () => {
    setIsLoadingComplete(true);
  };

  return (
    // Wrapper
    <div
      {...wrapperProps}
      className={classNames("relative", wrapperProps?.className)}
    >
      {/* Image */}
      <NextImage {...props} onLoadingComplete={onLoadingComplete} />

      {/* Dominant color overlay */}
      {placeholderType === "dominant" && !!dominantColor && (
        <Transition
          as="div"
          className="absolute inset-0"
          style={{ backgroundColor: dominantColor }}
          show={!isLoadingComplete}
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        />
      )}
    </div>
  );
};

export default Image;
