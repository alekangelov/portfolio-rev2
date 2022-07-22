export const makeGradient = (colors: string[]) =>
  `linear-gradient(to top right, ${colors.join(", ")})`;
