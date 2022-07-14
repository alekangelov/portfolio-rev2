import { parseColor, transition, vars } from "@styles";
import { style } from "@vanilla-extract/css";

const parent = style({
  height: vars.spacing.lg,
  background: parseColor(vars.onColors.surface, 0.1),
  aspectRatio: "2 / 1",
  borderRadius: 24,
  padding: 2,
  cursor: "pointer",
  transition: transition("background", "transform"),
  selectors: {
    "&:hover": {
      // transform: "translate(0, -2px)",
      background: parseColor(vars.onColors.surface, 0.2),
    },
  },
});
const track = style({
  position: "relative",
  background: parseColor(vars.colors.surface, 0.2),
  width: "100%",
  height: "100%",
  borderRadius: 24,
  padding: 2,
});
const thumb = style({
  height: "calc(100% - 4px)",
  aspectRatio: "1 / 1",
  background: parseColor(vars.onColors.surface, 1),
  borderRadius: 24,
  position: "absolute",
  top: "50%",
  left: 2,
  padding: 2,
  transform: `translate(0%,-50%)`,
  transition: transition("left", "transform"),
  selectors: {
    [`${parent}.active &`]: {
      left: "calc(100% - 2px)",
      transform: `translate(-100%,-50%)`,
    },
  },
});
const background = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const switchStyle = {
  parent,
  thumb,
  track,
  background,
};
