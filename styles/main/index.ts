export const makeGradient = (colors: string[], where = "top right") =>
  `linear-gradient(to ${where}, ${colors.join(", ")})`;
