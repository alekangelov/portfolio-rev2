import { gradients, makeGradient, transition, vars } from "@styles";
import { style } from "@vanilla-extract/css";

export const loader = {
  background: {
    base: style({
      position: "absolute",
      width: "100%",
      height: "50%",
      background: "black",
    }),
    top: style({
      top: 0,
    }),
    bottom: style({
      bottom: 0,
    }),
  },
  wrapper: style({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 500,
  }),
  inner: style({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 3,
    fontWeight: 900,
    fontSize: vars.font.size.xl,
    textShadow: `0 0 20px rgba(0, 0, 0, 0.5)`,
  }),
  text: style({}),
  spinner: style({
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "100%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    height: 4,
  }),
  spinnerTrack: style({
    height: "100%",
    width: "100%",
    background: makeGradient(gradients.secondaryTerciary),
  }),
};
