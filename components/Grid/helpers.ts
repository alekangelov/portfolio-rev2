import { gap } from "./styles.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { vars } from "@styles";

export const assignGap = (props?: keyof typeof vars.spacing) => {
  return assignInlineVars(
    {
      gap,
    },
    {
      gap: vars.spacing[props || "md"],
    }
  );
};
