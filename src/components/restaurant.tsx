import Image from "next/image";
import React from "react";
import data from "../data/index.json";

interface RestaurantSectionProps {
  restaurantData: typeof data.restaurant;
}

const RestaurantSection: React.FC<RestaurantSectionProps> = ({
  restaurantData,
}) => {
  // Dummy image
  const image = restaurantData.images?.[0];

  return (
    <section>
      {!!image && (
        <div className="h-96 w-96 relative">
          <Image
            quality={85}
            layout="fill"
            src={image.src}
            alt={image.alt}
            objectFit="cover"
            objectPosition={image.objectPosition}
            loading="lazy"
            lazyBoundary="0px 100% 0px 0px" // TODO: Not working...
          />
        </div>
      )}
    </section>
  );
};

export default RestaurantSection;
