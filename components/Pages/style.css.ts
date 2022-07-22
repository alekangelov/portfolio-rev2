import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import {
  textGradient,
  parseColor,
  vars,
  makeGradient,
  gradients,
} from "@styles";

export const landing = {
  container: style([
    {
      zIndex: 10,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      flexDirection: "column",
    },
  ]),
  title: style({
    fontSize: "48px",
    fontFamily: "Manofa",
    lineHeight: 1.2,
    marginBottom: vars.spacing.lg,
    opacity: "1 !important",
  }),
  titleMain: style({
    fontSize: "128px",
    fontWeight: 900,
    overflow: "hidden",
    position: "relative",
    display: "block",
  }),
  firstTitle: style({
    position: "relative",
    overflow: "hidden",
    height: "max-content",
    display: "block",
    marginBottom: 0,
    fontWeight: 600,
  }),
  innerSpan: style({
    position: "absolute",
    top: "100%",
    left: "0%",
  }),
  sub: style({
    fontWeight: 100,
    fontSize: vars.font.size.lg,
    marginBottom: vars.spacing.xl,
    letterSpacing: calc.multiply(vars.font.size.lg, 0.5),
    textTransform: "uppercase",
  }),
};

export const about = {
  container: style({
    maxWidth: "90vw",
    width: 640,
  }),
  title: style({
    fontSize: "48px",
    lineHeight: 1.2,
    fontWeight: 900,
    letterSpacing: calc.multiply(vars.font.size.lg, -0.05),
    marginBottom: vars.spacing.lg,
  }),
};

export const li = {
  name: style({
    fontSize: 18,
    fontWeight: 900,
  }),
  amount: style({
    color: parseColor(vars.colors.secondary),
    fontWeight: 900,
  }),
  description: style({
    fontSize: 14,
  }),
  parent: style({}),
  track: style({
    width: "100%",
    height: 12,
  }),
  fill: style({
    borderRadius: 24,
    background: makeGradient(gradients.secondaryTerciary),
    width: "100%",
    height: "100%",
    position: "relative",
  }),
  thumb: style({
    height: "100%",
    aspectRatio: "1 / 1",
    background: parseColor(vars.onColors.surface),
    borderRadius: 24,
    position: "absolute",
    right: 0,
    opacity: 0.5,
  }),
};
