import { style } from "@vanilla-extract/css";

export const loader = {
  wrapper: style({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "black",
    zIndex: 500,
  }),
  inner: style({}),
  text: style({}),
  spinner: style({}),
};
