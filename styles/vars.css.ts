import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";
import { contract, darkTheme, lightTheme } from "./themes.css";

export const vars = createGlobalThemeContract(contract);

createGlobalTheme("html:root", vars, lightTheme);

createGlobalTheme("html.dark:root", vars, darkTheme);
