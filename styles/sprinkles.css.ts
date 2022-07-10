import { createSprinkles } from "@vanilla-extract/sprinkles";
import { paddingProperties, marginProperties } from "./properties/space.css";

export const styled = createSprinkles(paddingProperties, marginProperties);
