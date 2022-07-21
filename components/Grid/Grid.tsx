import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import {
  gridContainer,
  gridCol,
  GridProps,
  gap,
  GridItemProps,
} from "./styles.css";
import { assignGap } from "./helpers";

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

function GridItem({
  size,
  tabletSize,
  desktopSize,
  offset,
  tabletOffset,
  desktopOffset,
  ...props
}: GridItemProps & JSX.IntrinsicElements["div"]) {
  return (
    <div
      {...props}
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

Grid.Item = GridItem;
