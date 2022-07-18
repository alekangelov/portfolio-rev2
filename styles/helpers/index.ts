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

export const columns = {
  "1": ((1 / 12) * 100).toFixed(2),
  "2": ((2 / 12) * 100).toFixed(2),
  "3": ((3 / 12) * 100).toFixed(2),
  "4": ((4 / 12) * 100).toFixed(2),
  "5": ((5 / 12) * 100).toFixed(2),
  "6": ((6 / 12) * 100).toFixed(2),
  "7": ((7 / 12) * 100).toFixed(2),
  "8": ((8 / 12) * 100).toFixed(2),
  "9": ((9 / 12) * 100).toFixed(2),
  "10": ((10 / 12) * 100).toFixed(2),
  "11": ((11 / 12) * 100).toFixed(2),
  "12": ((12 / 12) * 100).toFixed(2),
};

export const calculateColumnWidth = (column: keyof typeof columns) => {
  const fullWidthWithoutMargin = window.innerWidth - window.innerWidth * 0.1;
  const oneColumnWidth = fullWidthWithoutMargin / 12;
  return oneColumnWidth * parseInt(column);
};
