import { style } from "@vanilla-extract/css";

export const page = style({
  background: "white",
  color: "black",
  width: 968,
  aspectRatio: "16 / 10",
  borderRadius: 8,
});

export const container = style({
  maxWidth: "960px",
  margin: "0 auto",
  width: "90%",
});
