import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { GOOGLE_MAPS_STYLES, LAT_LNG } from "../lib/constants";

interface MapProps {
  options?: google.maps.MapOptions;
}

const Map: React.FC<MapProps & React.HTMLProps<HTMLDivElement>> = ({
  options = {
    center: LAT_LNG,
    zoom: 14,
    styles: GOOGLE_MAPS_STYLES,
    disableDefaultUI: true,
  },
  className,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    const onLoad = () =>
      !!ref.current && setMap(new window.google.maps.Map(ref.current, options));

    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}`;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else {
      onLoad();
    }
  }, []);

  if (map) {
    // execute when map object is ready
    new window.google.maps.Marker({
      map,
      position: LAT_LNG,
      title: "Untere Mühlenstraße 18",
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 12.5,
        fillColor: "#F9F8F7",
        fillOpacity: 1,
        strokeColor: "",
        strokeWeight: 0,
      },
    });
  }

  return (
    <div
      className={classNames("h-full w-full", className)}
      ref={ref}
      {...props}
    />
  );
};

export default Map;
