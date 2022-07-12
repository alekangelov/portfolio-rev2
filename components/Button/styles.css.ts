import { keyframes, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "styles";
import { parseColor, transition } from "styles/helpers";
import { createVariation, getBigger } from "utils";

export const button = recipe({
  base: {
    padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
    fontWeight: 900,
    textTransform: "uppercase",
    fontSize: vars.font.size.md,
    letterSpacing: calc.multiply(vars.font.size.md, -0.05),
    borderRadius: 24,
    background: parseColor(vars.onColors.surface),
    border: "none",
    color: parseColor(vars.colors.surface),
    cursor: "pointer",
    overflow: "hidden",
    transition: transition(
      "background",
      "filter",
      "color",
      "transform",
      "box-shadow"
    ),
    boxShadow: `0 0 0 0 ${parseColor(vars.colors.surface, 0)}`,
    selectors: {
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: `0 10px 20px -10px ${parseColor(
          vars.onColors.surface,
          0.2
        )}`,
      },
      "&:active": {
        transform: "translateY(0px)",
        transition: "none",
        boxShadow: "none",
        filter: "brightness(0.8)",
      },
    },
  },
  variants: {
    color: {
      transparent: {
        background: "transparent",
        color: parseColor(vars.onColors.surface),
        boxShadow: "none",
        selectors: {
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
      ...createVariation(vars.colors, (value, key) => ({
        background: parseColor(value, 1),
        color: parseColor(vars.onColors[key], 1),
        selectors: {
          "&:hover": {
            boxShadow: `0 10px 20px -10px ${parseColor(value, 0.2)}`,
          },
        },
      })),
    },
    size: {
      ...createVariation(vars.font.size, (value, key) => ({
        fontSize: value,
        letterSpacing: calc.multiply(value, -0.05),
        padding: `${vars.spacing[key]} ${vars.spacing[getBigger(key)]}`,
      })),
    },
  },
});

export const rippleVars = {
  top: `--ripple-top`,
  left: `--ripple-left`,
};

export const rippleAnimation = keyframes({
  "0%": {
    opacity: 1,
    transform: "translate(-50%,-50%) scale(0)",
  },
  "100%": {
    opacity: 0,
    transform: "translate(-50%,-50%) scale(2)",
  },
});

export const ripple = style({
  zIndex: 1,
  top: `var(${rippleVars.top})`,
  left: `var(${rippleVars.left})`,
  position: "absolute",
  width: "100%",
  borderRadius: "100%",
  aspectRatio: "1 / 1",
  transform: `translate(-50%,-50%)`,
  backgroundColor: parseColor(vars.colors.surface),
});

export type ButtonProps = RecipeVariants<typeof button>;
