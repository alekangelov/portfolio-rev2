import { parseColor, vars } from "@styles";
import { style } from "@vanilla-extract/css";

export const layout = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  minHeight: "100%",
});

export const scrollContainer = style({});

export const hr = style({
  marginBottom: vars.spacing.md,
  marginTop: vars.spacing.md,
  border: 0,
  height: 1,
  background: parseColor(vars.onColors.surface, 0.1),
});
