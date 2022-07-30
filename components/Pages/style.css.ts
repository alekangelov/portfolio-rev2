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
      width: "90vw",
      height: "100vh",
      marginLeft: "5vw",
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
    maxWidth: "100%",
    margin: "0 auto",
    width: 640,
    marginTop: "120vh",
    "@media": {
      [`${media.tablet}`]: {
        marginTop: "90vh",
      },
      [`${media.desktop}`]: {
        marginTop: "90vh",
      },
    },
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
    color: parseColor(vars.onColors.surface),
    fontWeight: 900,
  }),
  description: style({
    fontSize: 14,
  }),
  parent: style({}),
  track: style({
    height: 24,
    minWidth: 256,
  }),
  fill: style({
    borderRadius: 24,
    background: makeGradient(gradients.secondaryTerciary),
    width: "100%",
    height: "100%",
    position: "relative",
    minWidth: 48,
  }),
  thumb: style({
    height: "100%",
    maxWidth: "100%",
    padding: 8,
    background: parseColor(vars.onColors.surface, 0.2),
    borderRadius: 24,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
  }),
};

export const projectStyles = {
  container: style({
    margin: "0 auto",
    width: "90vw",
    marginTop: "50vh",
    marginLeft: "5vw",
    "@media": {
      [`${media.tablet}`]: {
        marginTop: "60vh",
      },
    },
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
    marginLeft: "5vw",
    marginTop: "100vh",
    "@media": {
      [`${media.tablet}`]: {
        marginTop: "60vh",
      },
    },
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

export const blogStyles = {
  wrapper: style({
    maxWidth: "90vw",
    margin: "0 auto",
    width: "90vw",
    marginTop: "150vh",
    marginLeft: "5vw",
    "@media": {
      [`${media.tablet}`]: {
        marginTop: "140vh",
      },
    },
  }),
};
