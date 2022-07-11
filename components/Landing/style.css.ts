import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { container, vars } from "styles";

export const landing = {
  container: style([
    container,
    {
      minHeight: "100vh",
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
  }),
  titleMain: style({
    fontSize: "128px",
    fontWeight: 900,
  }),
  sub: style({
    fontWeight: 100,
    fontSize: vars.font.size.lg,
    marginBottom: vars.spacing.xl,
    letterSpacing: calc.multiply(vars.font.size.lg, -0.02),
  }),
};