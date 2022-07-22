export const splitInHalf = <T>(arr: T[]) => {
  const half = Math.floor(arr.length / 2);
  return [arr.slice(0, half), arr.slice(half)];
};
