import { globalFontFace } from "@vanilla-extract/css";

export const inter = [
  globalFontFace("Inter", {
    src: `url('/fonts/Inter.ttf') format('truetype-variations')`,
    fontDisplay: "swap",
    fontWeight: "1 999",
  }),
];
