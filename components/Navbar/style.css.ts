import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { transition } from "styles/helpers";
import { parseColor } from "styles/helpers/color";
import { vars } from "../../styles/vars.css";

export const navbar = {
  scrolled: style({
    backdropFilter: "blur(10px)",
    background: parseColor(vars.colors.surface, 0.8),
  }),
  wrapper: style({
    // background: parseColor(vars.colors.surface, 0.5),
    top: 0,
    color: parseColor(vars.onColors.surface),
    // border: `1px solid ${parseColor(vars.onColors.surface, 0.2)}`,
    // backdropFilter: "blur(24px)",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    position: "absolute",
    padding: `${vars.spacing.md} 5%`,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    zIndex: 100,
    transition: transition("background", "backdrop-filter"),
  }),
  container: style({
    width: "100%",
    // padding: `${vars.spacing.md} ${calc.multiply(vars.spacing.lg, 2)}`,
    // border: `1px solid ${parseColor(vars.onColors.surface, 0.05)}`,
    // borderRadius: 16,
    // boxShadow: `0 20px 64px -24px ${`black`}`,
    margin: "0 auto",
    // padding: `${vars.spacing.md} ${calc.multiply(vars.spacing.lg, 2)}`,
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
      gap: vars.spacing.md,
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
      padding: `${vars.spacing.sm} ${vars.spacing.sm}`,
      backgroundImage: "none",
      borderRadius: 16,
      cursor: "pointer",
      color: parseColor(vars.onColors.surface),
      textDecoration: "none",
      fontWeight: "600 !important",
      position: "relative",
      selectors: {
        "&:before": {
          content: "",
          position: "absolute",
          top: "90%",
          left: 0,
          width: "100%",
          height: 2,
          background: parseColor(vars.onColors.surface),
          transformOrigin: "center left",
          transform: "scaleX(0)",
          transition: transition("transform"),
        },
        "&:hover:before": {
          transform: "scaleX(1)",
        },
        "&.active:hover": {
          transform: "scaleX(1)",
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
      backdropFilter: "blur(24px)",
      fontSize: vars.font.size.md,
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
