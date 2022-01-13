import path from "path";
import { getPlaiceholder } from "plaiceholder";
import sharp from "sharp";

// Set up blur data URL and dominant color for images
export const generateImagePlaceholders = async (data: any) => {
  const deepCustomize = async (inObject: any): Promise<any> => {
    if (typeof inObject !== "object" || inObject === null) {
      return inObject; // Return the value if inObject is not an object
    }

    let value,
      key,
      outObject: any = Array.isArray(inObject) ? [] : {};

    for (key in inObject) {
      value = inObject[key];

      // Update blur data url values
      if (typeof value?.blurDataURL !== "undefined" && !!value?.src) {
        const blurDataURL = (await getPlaiceholder(value.src, { size: 32 }))
          ?.base64;
        if (!!blurDataURL) {
          value = {
            ...value,
            blurDataURL,
          };
        }
      }

      // Update dominant color values
      if (typeof value?.dominantColor !== "undefined" && !!value?.src) {
        const {
          dominant: { r, g, b },
        } = await sharp(path.join("./public/", value.src)).stats();
        const dominantColor = `rgb(${r},${g},${b})`;

        if (!!dominantColor) {
          value = {
            ...value,
            dominantColor,
          };
        }
      }

      outObject[key] = await deepCustomize(value);
    }

    return outObject;
  };

  return await deepCustomize(data);
};
