export const lerp = (
  num: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outmax: number
) => {
  return ((num - inMin) * (outmax - outMin)) / (inMax - inMin) + outMin;
};
