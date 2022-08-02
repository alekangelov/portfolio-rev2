import { parseColor, transition, vars } from "@styles";
import { keyframes, style } from "@vanilla-extract/css";
const invisible = {
  opacity: 0,
  transform: "translateY(24px) scale(0.95)",
};
const visible = {
  opacity: 1,
  transform: "translateY(0px) scale(1)",
};
export const animateIn = keyframes({
  "0%": invisible,
  "100%": visible,
});

export const animateOut = keyframes({
  "0%": visible,
  "100%": invisible,
});

export const modal = {
  mask: style({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    zIndex: 105,
    backdropFilter: "blur(10px)",
    overflowY: "scroll",
  }),
  container: style({
    margin: `24px auto`,
    position: "relative",
    borderRadius: 8,
    maxWidth: 480,
    background: parseColor("0,0,0", 0.6),
    backdropFilter: "blur(50px)",
    padding: vars.spacing.lg,
    border: `1px solid ${parseColor("255,255,255", 0.1)}`,
  }),
  header: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: vars.spacing.md,
  }),
  title: style({
    fontSize: 24,
    fontWeight: 900,
  }),
  close: style({
    border: `1px solid ${parseColor("255,255,255", 0.1)}`,
    background: "none",
    borderRadius: 8,
    padding: vars.spacing.sm,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: transition("background", "transform"),
    selectors: {
      "&:hover": {
        background: parseColor("255,255,255", 0.1),
        transform: `translateY(-2px)`,
      },
    },
  }),
  content: style({}),
};
