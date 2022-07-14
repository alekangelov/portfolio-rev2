import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { transition } from "styles/helpers";
import { parseColor } from "styles/helpers/color";
import { vars } from "../../styles/vars.css";

export const navbar = {
  wrapper: style({
    background: parseColor(vars.colors.surface, 0.5),
    color: parseColor(vars.onColors.surface),
    border: `1px solid ${parseColor(vars.onColors.surface, 0.2)}`,
    backdropFilter: "blur(24px)",
    position: "fixed",
    top: vars.spacing.md,
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    maxWidth: calc.add(vars.size.container),
    borderRadius: 16,
    zIndex: 10,
    boxShadow: `0 30px 50px -25px ${parseColor("0,0,0", 0.5)}`,
  }),
  container: style({
    width: "100%",
    // padding: `${vars.spacing.md} ${calc.multiply(vars.spacing.lg, 2)}`,
    // border: `1px solid ${parseColor(vars.onColors.surface, 0.05)}`,
    // borderRadius: 16,
    // boxShadow: `0 20px 64px -24px ${`black`}`,
    margin: "0 auto",
    padding: `${vars.spacing.md} ${calc.multiply(vars.spacing.lg, 2)}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }),
  title: style({
    display: "flex",
    alignItems: "center",
    gap: vars.spacing.md,
    fontSize: vars.font.size.lg,
    fontWeight: 900,
    letterSpacing: calc.multiply(vars.font.size.lg, -0.005),
    maxWidth: "100%",
    textOverflow: "ellipsis",
    color: parseColor(vars.onColors.surface),
    textDecoration: "none",
  }),
  nav: {
    wrapper: style({
      display: "flex",
      alignItems: "center",
      gap: vars.spacing.sm,
      zIndex: 1,
    }),
    item: style({
      fontWeight: 600,
      fontSize: vars.font.size.md,
      letterSpacing: calc.multiply(vars.font.size.md, -0.005),
      display: "flex",
    }),
    link: style({
      display: "flex",
      padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
      borderRadius: 16,
      cursor: "pointer",
      transition: transition("font-weight"),
      color: parseColor(vars.onColors.surface),
      textDecoration: "none",
      selectors: {
        "&:hover": {
          background: parseColor(vars.onColors.surface, 1),
          color: parseColor(vars.colors.surface),
        },
        "&:active": {
          background: parseColor(vars.onColors.surface, 0.8),
          transition: "none",
        },
        "&.active": {
          background: parseColor(vars.onColors.surface, 1),
          color: parseColor(vars.colors.surface),
        },
      },
    }),
    button: style({
      background: parseColor(vars.onColors.surface, 0.1),
      color: parseColor(vars.onColors.surface),
      padding: `${vars.spacing.sm} ${vars.spacing.sm}`,
      border: "none",
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: transition("color", "background"),
      selectors: {
        "&:hover": {
          background: parseColor(vars.onColors.surface, 1),
          color: parseColor(vars.colors.surface),
        },
        "&:active": {
          background: parseColor(vars.onColors.surface, 0.8),
          transition: "none",
        },
      },
    }),
  },
};
