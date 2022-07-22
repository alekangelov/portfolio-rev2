import { createVar } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "@styles";
import { media } from "styles/helpers";
import { createVariation } from "@utils";
import { columns } from "styles";

export const gap = createVar();
const { spacing } = vars;

export const gridContainer = recipe({
  base: {
    display: "flex",
    rowGap: gap,
    marginLeft: `calc(0px - ${gap} / 2)`,
    marginRight: `calc(0px - ${gap} / 2)`,
  },
  variants: {
    wrap: {
      true: {
        flexWrap: "wrap",
      },
      false: {
        flexWrap: "nowrap",
      },
    },
    justify: {
      center: {
        justifyContent: "center",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
      stretch: {
        alignItems: "stretch",
      },
      between: {
        alignItems: "space-between",
      },
      around: {
        alignItems: "space-around",
      },
    },
  },
});

export const gridCol = recipe({
  base: {
    flex: "0 0 auto",
    paddingLeft: `calc(${gap} / 2)`,
    paddingRight: `calc(${gap} / 2)`,
  },
  variants: {
    size: createVariation(columns, (value, key) => ({
      flex: `0 0 ${value}%`,
    })),
    tabletSize: createVariation(columns, (value, key) => ({
      "@media": {
        [media.tablet]: {
          flex: `0 0 ${value}%`,
        },
      },
    })),
    desktopSize: createVariation(columns, (value, key) => ({
      "@media": {
        [media.desktop]: {
          flex: `0 0 ${value}%`,
        },
      },
    })),
    offset: createVariation(columns, (value, key) => ({
      marginLeft: `${value}%`,
    })),
    tabletOffset: createVariation(columns, (value, key) => ({
      "@media": {
        [media.tablet]: {
          marginLeft: `${value}%`,
        },
      },
    })),
    desktopOffset: createVariation(columns, (value, key) => ({
      "@media": {
        [media.desktop]: {
          marginLeft: `${value}%`,
        },
      },
    })),
  },
  defaultVariants: {},
});

export type GridProps = {
  gap?: keyof typeof spacing;
} & RecipeVariants<typeof gridContainer>;

export type GridItemProps = {
  size?: keyof typeof columns;
  tabletSize?: keyof typeof columns;
  desktopSize?: keyof typeof columns;
  offset?: keyof typeof columns;
  tabletOffset?: keyof typeof columns;
  desktopOffset?: keyof typeof columns;
};
