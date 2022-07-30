import { style } from "@vanilla-extract/css";
import { parseColor } from "styles/helpers";
import { vars } from "styles/vars.css";

export const container = style({
  width: "90%",
  margin: "0 auto",
});

export const textGradient = {
  primarySecondary: style({
    background: `linear-gradient(to top right, ${parseColor(
      vars.colors.primary
    )}, ${parseColor(vars.colors.secondary)})`,
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
  }),
  primaryTerciary: style({
    background: `linear-gradient(to top right, ${parseColor(
      vars.colors.primary
    )}, ${parseColor(vars.colors.terciary)})`,
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
  }),
  secondaryTerciary: style({
    background: `linear-gradient(to top right, ${parseColor(
      vars.colors.secondary
    )}, ${parseColor(vars.colors.terciary)})`,
    backgroundClip: "text",
    color: "transparent",
    WebkitBackgroundClip: "text",
  }),
};

export const gradients = {
  primarySecondary: [
    parseColor(vars.colors.primary),
    parseColor(vars.colors.secondary),
  ],
  primaryTerciary: [
    parseColor(vars.colors.primary),
    parseColor(vars.colors.terciary),
  ],
  secondaryTerciary: [
    parseColor(vars.colors.secondary),
    parseColor(vars.colors.terciary),
  ],
};

export const threeContainer = style({
  width: "90vw",
  marginLeft: "5vw",
});
