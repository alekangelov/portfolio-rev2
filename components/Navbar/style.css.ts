import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { transition } from "styles/helpers";
import { parseColor } from "styles/helpers/color";
import { vars } from "../../styles/vars.css";

export const navbar = {
  container: style({
    background: parseColor(vars.colors.surface, 0.2),
    color: parseColor(vars.onColors.surface),
    backdropFilter: "blur(24px)",
    width: "100%",
    maxWidth: vars.size.container,
    position: "fixed",
    top: "0",
    left: "50%",
    transform: "translateX(-50%)",
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
