import { vars } from "@styles";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const spacing = recipe({
  base: {
    width: "100%",
  },
  variants: {
    space: {
      sm: {
        marginTop: vars.spacing.sm,
      },
      md: {
        marginTop: vars.spacing.md,
      },
      lg: {
        marginTop: vars.spacing.lg,
      },
      xl: {
        marginTop: vars.spacing.xl,
      },
    },
  },
});

export type SpacingProps = RecipeVariants<typeof spacing>;
