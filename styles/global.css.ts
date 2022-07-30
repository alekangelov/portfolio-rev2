import { globalStyle } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { transition } from "./helpers";
import { parseColor } from "./helpers/color";
import { vars } from "./vars.css";

export const resets = [
  globalStyle(
    `html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video`,
    {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: "100%",
      font: "inherit",
      verticalAlign: "baseline",
    }
  ),

  globalStyle(
    `article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section`,
    {
      display: "block",
    }
  ),

  globalStyle("body", {
    lineHeight: 1,
  }),

  globalStyle(`ol, ul`, {
    listStyle: "none",
  }),

  globalStyle(`blockquote, q`, {
    quotes: "none",
  }),

  globalStyle(
    `blockquote:before, blockquote:after,
q:before, q:after`,
    {
      content: "",
    }
  ),

  globalStyle(`table`, {
    borderCollapse: "collapse",
    borderSpacing: 0,
  }),
];

export const globals = [
  globalStyle("*", {
    boxSizing: "border-box",
    lineHeight: 1.5,
  }),

  globalStyle("html", {
    fontSize: 14,
    background: parseColor(vars.colors.surface),
    color: parseColor(vars.onColors.surface),
    fontFamily: `${vars.font.family.primary}, --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  }),
  globalStyle("h1", {
    fontSize: calc.multiply(vars.font.size.xxl, 3),
  }),
  globalStyle("h2", {
    fontSize: calc.multiply(vars.font.size.xxl, 0.5),
    fontWeight: 900,
    marginTop: vars.spacing.md,
    marginBottom: vars.spacing.md,
  }),
  globalStyle("h3", {
    fontSize: vars.font.size.md,
    fontWeight: 700,
    lineHeight: 2,
  }),
  globalStyle("hgroup", {
    margin: `${vars.spacing.lg} 0`,
  }),
  globalStyle("hgroup > *:nth-child(1)", {
    marginBottom: vars.spacing.sm,
  }),
  globalStyle("hgroup > *:nth-child(2)", {
    opacity: 0.75,
  }),
  globalStyle("p", {
    fontSize: vars.font.size.md,
    lineHeight: 2,
    // textAlign: "justify",
    letterSpacing: calc.multiply(vars.font.size.md, -0.05),
  }),
  globalStyle("a", {
    color: parseColor(vars.colors.primary),
    textDecoration: "none",
    fontWeight: 900,
    backgroundImage: "linear-gradient(currentColor, currentColor)",
    backgroundPosition: "0% 100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "0% 2px",
    transition: transition("background-size"),
  }),
  globalStyle("a:hover", {
    backgroundSize: "100% 2px",
  }),
  globalStyle("body.blocker", {
    overflow: "hidden",
  }),
  // globalStyle("::-webkit-scrollbar", {
  //   width: 8,
  // }),
  // globalStyle("::-webkit-scrollbar-track", {
  //   background: parseColor(vars.colors.surface, 0),
  // }),
  // globalStyle("::-webkit-scrollbar-thumb", {
  //   borderRadius: 4,
  //   transition: transition("background"),
  //   background: parseColor(vars.onColors.primary, 0.5),
  //   cursor: "grab",
  // }),
  // globalStyle("::-webkit-scrollbar-thumb:hover", {
  //   background: parseColor(vars.onColors.primary, 1),
  // }),
  // globalStyle("::-webkit-scrollbar-thumb:active", {
  //   cursor: "grabbing",
  // }),
  globalStyle("body", {
    overflow: "overlay",
  }),
  globalStyle("html, body, #root", {
    width: "100%",
    height: "100%",
    WebkitOverflowScrolling: "touch",
    overscrollBehaviorY: "none",
  }),
];
