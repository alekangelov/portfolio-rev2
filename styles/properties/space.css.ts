import { defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "../vars.css";

export const paddingProperties = defineProperties({
  properties: {
    paddingTop: vars.spacing,
    paddingRight: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

export const marginProperties = defineProperties({
  properties: {
    marginTop: vars.spacing,
    marginRight: vars.spacing,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
  },
  shorthands: {
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
});
