import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import {
  textGradient,
  parseColor,
  vars,
  makeGradient,
  gradients,
  transition,
  media,
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
    fontFamily: "Manofa",
    lineHeight: 1.2,
    marginBottom: vars.spacing.lg,
    opacity: "1 !important",
    fontSize: 22,
    "@media": {
      [`${media.tablet}`]: { fontSize: 36 },
      [`${media.desktop}`]: { fontSize: 48 },
    },
  }),
  titleMain: style({
    fontWeight: 900,
    overflow: "hidden",
    position: "relative",
    display: "block",
    fontSize: 48,
    "@media": {
      [`${media.tablet}`]: { fontSize: 86 },
      [`${media.desktop}`]: { fontSize: 128 },
    },
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
    marginBottom: vars.spacing.xl,
    textTransform: "uppercase",
    fontSize: vars.font.size.sm,
    letterSpacing: calc.multiply(vars.font.size.sm, 0.5),
    "@media": {
      [`${media.tablet}`]: {
        fontSize: vars.font.size.lg,
        letterSpacing: calc.multiply(vars.font.size.lg, 0.5),
      },
    },
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

export const projectStyles = {
  container: style({
    maxWidth: "90vw",
    margin: "0 auto",
    width: "90vw",
  }),
};

export const draggable = style({
  cursor: "grab",
  userSelect: "none",
  width: "max-content",
  selectors: {
    "&:active": {
      cursor: "grabbing",
    },
  },
});

export const draggableInner = style({
  maxWidth: "90vw",
});

export const projectModal = {
  image: style({
    maxWidth: "100%",
    borderRadius: 8,
    objectFit: "cover",
    aspectRatio: "3 / 1.5",
  }),
};

export const arrowButton = style({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: vars.spacing.md,
  background: parseColor(vars.onColors.surface, 0.1),
  borderRadius: 8,
  border: `1px solid ${parseColor(vars.onColors.surface, 0.1)}`,
  transition: transition("background", "transform"),
  color: parseColor(vars.onColors.surface),
  selectors: {
    "&:hover": {
      background: parseColor(vars.onColors.surface, 0.2),
      transform: "translate(0, -2px)",
    },
    "&:active": {
      background: parseColor(vars.onColors.surface, 0.3),
      transform: "scale(0.95)",
      transition: "none",
    },
  },
});

export const contact = {
  container: style({
    maxWidth: "90vw",
    margin: "0 auto",
    width: "90vw",
  }),
  button: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(10px)",
    padding: `${vars.spacing.md} ${vars.spacing.lg}`,
    background: parseColor(vars.onColors.surface, 0.05),
    borderRadius: 8,
    border: `1px solid ${parseColor(vars.onColors.surface, 0.05)}`,
    transition: transition("background", "transform"),
    color: parseColor(vars.onColors.surface),
    gap: vars.spacing.md,
    cursor: "pointer",
    fontWeight: 900,

    selectors: {
      "&:hover": {
        background: parseColor(vars.onColors.surface, 0.1),
        transform: "translate(0, -2px)",
      },
      "&:active": {
        background: parseColor(vars.onColors.surface, 0.2),
        transform: "scale(0.95)",
        transition: "none",
      },
    },
  }),
  text: style({
    fontWeight: 600,
  }),
};
