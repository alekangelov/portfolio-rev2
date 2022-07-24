import { gradients, makeGradient, parseColor, transition, vars } from "@styles";
import { style } from "@vanilla-extract/css";
const wrapper = style({
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  background: parseColor(vars.onColors.surface, 0.025),
  borderRadius: 8,
  overflow: "hidden",
  transition: transition("transform"),
  position: "relative",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      transform: "translateY(-6px)",
    },
    "&:active": {
      transform: "translateY(6px) scale(0.95)",
      transition: "none",
    },
  },
});
export const card = {
  wrapper,
  image: style({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: transition("transform"),
    selectors: {
      [`${wrapper}:hover &`]: {
        transform: `scale(1.1)`,
      },
    },
  }),
  imageWrapper: style({
    width: "100%",
    overflow: "hidden",
    aspectRatio: "3 / 2",
    background: parseColor(vars.onColors.surface, 0.025),
    borderRadius: 8,
  }),
  content: style({
    padding: vars.spacing.lg,
    display: "flex",
    alignItems: "stretch",
    justifyContent: "flex-start",
    flexFlow: "column",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    transform: "translate(0px, 24px) scale(1)",
    opacity: 0,
    transition: transition("opacity", "transform"),
    background: makeGradient(
      [parseColor("0,0,0", 0.75), parseColor("0,0,0", 0)],
      "top"
    ),
    selectors: {
      [`${wrapper}:hover &`]: {
        transform: "translate(0px, 0px) scale(1)",
        opacity: 1,
      },
    },
  }),
  title: style({
    paddingTop: 24,
  }),
  topContent: style({
    flex: 1,
  }),
  description: style({}),
  link: style({
    display: "flex",
    justifySelf: "flex-end",
    background: "none",
    border: "none",
    alignItems: "center",
    gap: vars.spacing.lg,
    color: vars.onColors.surface,
  }),
  tag: style({
    padding: `${vars.spacing.sm} ${vars.spacing.md}`,
    background: parseColor(vars.onColors.surface, 0.05),
    borderRadius: 4,
    border: `1px solid ${parseColor(vars.onColors.surface, 0.1)}`,
    fontSize: vars.font.size.sm,
    fontWeight: 900,
  }),
  tagWrapper: style({
    marginBottom: vars.spacing.lg,
    gap: vars.spacing.sm,
    rowGap: vars.spacing.sm,
    display: "flex",
    flexFlow: "row wrap",
  }),
};

export const arrow = {
  parent: style({
    width: 24,
    height: 16,
    display: "flex",
    alignItems: "center",
    position: "relative",
  }),
  line: style({
    width: 24,
    height: 2,
    background: parseColor(vars.onColors.surface, 1),
    transform: "translateX(-2px)",
  }),
  top: style({
    width: 8,
    height: 2,
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translate(0%,-50%) rotate(0deg)",
    transition: transition("opacity", "transform"),
    background: parseColor(vars.onColors.surface, 1),
    transformOrigin: "center right",
    opacity: 0,
    selectors: {
      [`${card.link}:hover &`]: {
        opacity: 1,
        transform: "translate(0%,-50%) rotate(45deg)",
      },
    },
  }),
  bottom: style({
    width: 8,
    height: 2,
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translate(0%,-50%) rotate(0deg)",
    transition: transition("opacity", "transform"),
    background: parseColor(vars.onColors.surface, 1),
    transformOrigin: "center right",
    opacity: 0,
    selectors: {
      [`${card.link}:hover &`]: {
        opacity: 1,
        transform: "translate(0%,-50%) rotate(-45deg)",
      },
    },
  }),
};
