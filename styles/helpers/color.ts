import Color from "color";

export const prepColor = (color: string) => {
  const c = Color(color);
  return c.array().join(", ");
};

export const parseColor = (colorVar: string, alpha = 1) => {
  return `rgba(${colorVar}, ${alpha})`;
};
