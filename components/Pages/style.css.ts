import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { container, vars } from "@styles";

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
  parent: style({}),
  name: style({}),
  amount: style({}),
  description: style({}),
  track: style({}),
  fill: style({}),
  thumb: style({}),
};
