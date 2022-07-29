import { media, vars } from "@styles";
import { style } from "@vanilla-extract/css";

export const footer = style({
  position: "fixed",
  bottom: 10,
  left: "50%",
  transform: "translateX(-50%)",
  opacity: 0.2,
  fontSize: vars.font.size.sm,
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.spacing.sm,
  width: "90%",
  maxWidth: vars.size.container,
  zIndex: 1,
  "@media": {
    [`${media.tablet}`]: {
      justifyContent: "space-between",
    },
  },
});
