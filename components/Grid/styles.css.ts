import { createVar } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "@styles";
import { media } from "styles/helpers";
import { createVariation } from "@utils";

export const gap = createVar();
const { spacing } = vars;

const columns = {
  "1": ((1 / 12) * 100).toFixed(2),
  "2": ((2 / 12) * 100).toFixed(2),
  "3": ((3 / 12) * 100).toFixed(2),
  "4": ((4 / 12) * 100).toFixed(2),
  "5": ((5 / 12) * 100).toFixed(2),
  "6": ((6 / 12) * 100).toFixed(2),
  "7": ((7 / 12) * 100).toFixed(2),
  "8": ((8 / 12) * 100).toFixed(2),
  "9": ((9 / 12) * 100).toFixed(2),
  "10": ((10 / 12) * 100).toFixed(2),
  "11": ((11 / 12) * 100).toFixed(2),
  "12": ((12 / 12) * 100).toFixed(2),
};

export const gridContainer = recipe({
  base: {
    display: "flex",
    rowGap: gap,
    width: "100%",
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
