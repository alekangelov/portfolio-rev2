import { globalFontFace } from "@vanilla-extract/css";

export const manofa = [
  globalFontFace("Manofa", {
    src: `url('/fonts/Manofa-Regular.ttf') format('truetype')`,
    fontWeight: "400",
    fontStyle: "italic",
    fontDisplay: "swap",
  }),
  globalFontFace("Manofa", {
    src: `url('/fonts/Manofa-Medium.ttf') format('truetype')`,
    fontWeight: "600",
    fontStyle: "normal",
    fontDisplay: "swap",
  }),
  globalFontFace("Manofa", {
    src: `url('/fonts/Manofa-Bold.ttf') format('truetype')`,
    fontWeight: "800",
    fontStyle: "normal",
    fontDisplay: "swap",
  }),
  globalFontFace("Manofa", {
    src: `url('/fonts/Manofa-Light.ttf') format('truetype')`,
    fontWeight: "100",
    fontStyle: "normal",
    fontDisplay: "swap",
  }),
];
