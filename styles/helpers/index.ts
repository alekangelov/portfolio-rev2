const breakpoints = {
  mobile: 0,
  tablet: 776,
  desktop: 1200,
};

export const media = {
  mobile: `screen and (min-width: ${breakpoints.mobile}px)`,
  tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
  desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
};

export const getVariantBaseClass = (variant: string) => {
  return variant.split(" ").at(0);
};

export * from "./color";

export * from "./transition";
