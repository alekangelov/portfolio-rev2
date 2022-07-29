import { ComplexStyleRule } from "@vanilla-extract/css";
import { vars } from "@styles";

export const objectForEach = <T>(
  obj: T,
  callback: (value: T[keyof T], key: keyof T) => void
) => {
  Object.keys(obj).forEach((key) => {
    callback((obj as any)[key], key as keyof T);
  });
};

export const objectReduce = <T, X>(
  obj: T,
  callback: (acc: X, value: T[keyof T], key: keyof T) => Partial<X>,
  initialValue: Partial<X>
) => {
  let acc = initialValue;
  objectForEach(obj, (value, key) => {
    acc = callback(acc as X, value, key);
  });
  return acc as X;
};

export const createVariation = <X, T extends ComplexStyleRule>(
  base: X,
  fn: (value: X[keyof X], key: keyof X) => T
) => {
  type R = Record<keyof X, T>;
  const variants: Partial<R> = {};
  objectForEach(base, (value, key) => {
    variants[key] = fn(value, key);
  });
  return variants as R;
};

const smallerMap = {
  none: "none",
  sm: "none",
  md: "sm",
  lg: "md",
  xl: "lg",
  xxl: "xl",
};

const biggerMap = {
  none: "sm",
  sm: "md",
  md: "lg",
  lg: "xl",
  xl: "xxl",
  xxl: "xxl",
};

export const getSmaller = (
  current: keyof typeof vars.spacing
): keyof typeof vars.spacing => {
  return smallerMap[current] as keyof typeof vars.spacing;
};
export const getBigger = (
  current: keyof typeof vars.spacing
): keyof typeof vars.spacing => {
  return biggerMap[current] as keyof typeof vars.spacing;
};
