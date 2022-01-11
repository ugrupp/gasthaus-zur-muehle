import { getPlaiceholder } from "plaiceholder";

// Set up blur data URLs for images
export const generateBlurDataURLs = async (data: any) => {
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
        const blurDataURL = (await getPlaiceholder(value.src))?.base64;
        if (!!blurDataURL) {
          value = {
            ...value,
            blurDataURL,
          };
        }
      }

      outObject[key] = await deepCustomize(value);
    }

    return outObject;
  };

  return await deepCustomize(data);
};
