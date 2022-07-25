import clsx from "clsx";
import { gridContainer, gridCol, GridProps, GridItemProps } from "./styles.css";
import { assignGap } from "./helpers";
import { Children, forwardRef, Ref, useMemo } from "react";
import { makeMasonryFromArray, useResponsiveValue } from "@utils";

export function Grid({
  gap,
  wrap,
  align,
  justify,
  ...props
}: GridProps & JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...props}
      className={clsx(gridContainer({ wrap, align, justify }), props.className)}
      style={{
        ...assignGap(gap),
        ...props.style,
      }}
    />
  );
}

type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColumnProps = {
  base: Columns;
  tablet?: Columns;
  desktop?: Columns;
};

function MasonryGrid({
  gap,
  wrap,
  align,
  justify,
  columns,
  ...props
}: GridProps & {
  columns?: ColumnProps;
} & JSX.IntrinsicElements["div"]) {
  const children = Children.toArray(props.children);
  const responsiveColumns = useResponsiveValue(columns);
  const masonryChildren = useMemo(() => {
    return makeMasonryFromArray(children, responsiveColumns);
  }, [children, responsiveColumns]);
  const colSize = `${12 / (responsiveColumns || 1)}` as any;
  return (
    <Grid {...{ ...props, gap, wrap: true, align, justify }}>
      {masonryChildren.map((column, i) => {
        return (
          <Grid.Item size={colSize} key={i}>
            <Grid wrap gap={gap}>
              {column.map((child) => {
                return child;
              })}
            </Grid>
          </Grid.Item>
        );
      })}
    </Grid>
  );
}

function GridItem(
  {
    size,
    tabletSize,
    desktopSize,
    offset,
    tabletOffset,
    desktopOffset,
    ...props
  }: GridItemProps & JSX.IntrinsicElements["div"],
  ref: Ref<HTMLDivElement>
) {
  return (
    <div
      {...props}
      ref={ref}
      className={clsx(
        gridCol({
          size,
          tabletSize,
          desktopSize,
          offset,
          tabletOffset,
          desktopOffset,
        }),
        props.className
      )}
    />
  );
}

Grid.Item = forwardRef(GridItem);
Grid.Masonry = MasonryGrid;
