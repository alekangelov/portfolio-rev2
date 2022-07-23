import { parseColor, vars } from "@styles";
import {
  ComplexStyleRule,
  createVar,
  keyframes,
  style,
} from "@vanilla-extract/css";

const spinnerAnimation = keyframes({
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
  },
});

export const size = createVar();

export const spinner = style({
  color: "official",
  display: "inline-block",
  position: "relative",
  width: size,
  height: size,
});
const makeChildren = (
  _: any,
  index: number
): Record<`&:nth-child(${number})`, ComplexStyleRule> => {
  return {
    [`&:nth-child(${index + 1})`]: {
      transform: `rotate(${(index * 30).toFixed(0)}deg)`,
      animationDelay: `${(index / 10 - 1.1).toFixed(1)}s`,
    },
  };
};

const children = Array.from({ length: 12 }).reduce((acc: any, curr, index) => {
  return { ...acc, ...makeChildren(curr, index) };
}, {}) as Record<`&:nth-child(${number})`, ComplexStyleRule>;

export const spinnerInner = style({
  transformOrigin: `calc(${size} / 2) calc(${size} / 2)`,
  animation: `${spinnerAnimation} 1.2s linear infinite`,
  selectors: {
    "&:after": {
      content: " ",
      display: "block",
      position: "absolute",
      top: "3px",
      left: "37px",
      width: "6px",
      height: "18px",
      borderRadius: "20%",
      background: parseColor(vars.onColors.surface),
    },
    ...children,
  },
});
