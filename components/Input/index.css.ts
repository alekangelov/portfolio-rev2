import { parseColor, transition, vars } from "@styles";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const input = {
  container: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: vars.spacing.md,
  }),
  label: style({
    width: "100%",
    display: "block",
    font: vars.font.family.primary,
  }),
  input: style({
    width: "100%",
    display: "block",
    font: vars.font.family.primary,
    padding: `${vars.spacing.md} ${vars.spacing.lg}`,
    borderRadius: 8,
    background: parseColor(vars.colors.surface, 0.1),
    color: parseColor(vars.onColors.surface),
    border: `1px solid ${parseColor(vars.onColors.surface, 0.1)}`,
    outline: "none",
    transition: transition("background", "border"),
    selectors: {
      "&:focus": {
        background: parseColor(vars.onColors.surface, 0.05),
        border: `1px solid ${parseColor(vars.colors.primary, 1)}`,
      },
    },
  }),
  button: recipe({
    base: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: `${vars.spacing.md} ${vars.spacing.lg}`,
      background: parseColor(vars.onColors.surface, 0.05),
      borderRadius: 8,
      border: `1px solid ${parseColor(vars.onColors.surface, 0.1)}`,
      transition: transition("background", "border"),
      width: "100%",
    },
    variants: {
      color: {
        primary: {
          background: parseColor(vars.colors.primary),
          color: parseColor(vars.onColors.primary, 1),
          border: `1px solid ${parseColor(vars.colors.primary, 1)}`,
          selectors: {
            "&:hover": {
              background: parseColor(vars.onColors.primary, 0.1),
              border: `1px solid ${parseColor(vars.colors.surface, 1)}`,
            },
          },
        },
        secondary: {
          background: parseColor(vars.colors.secondary),
          color: parseColor(vars.onColors.secondary, 1),
          border: `1px solid ${parseColor(vars.colors.secondary, 1)}`,
          selectors: {
            "&:hover": {
              background: parseColor(vars.onColors.secondary, 0.1),
              border: `1px solid ${parseColor(vars.colors.surface, 1)}`,
            },
          },
        },
        error: {
          background: parseColor(vars.colors.error),
          color: parseColor(vars.onColors.error, 1),
          border: `1px solid ${parseColor(vars.colors.error, 1)}`,
          selectors: {
            "&:hover": {
              background: parseColor(vars.onColors.error, 0.1),
              border: `1px solid ${parseColor(vars.colors.surface, 1)}`,
            },
          },
        },
      },
    },
  }),
};
