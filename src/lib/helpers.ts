import path from "path";
const ColorThief = require("colorthief");

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

      // Update dominant color values
      if (typeof value?.dominantColor !== "undefined" && !!value?.src) {
        const [r, g, b] = await ColorThief.getColor(
          path.join("./public/", value.src)
        );
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
