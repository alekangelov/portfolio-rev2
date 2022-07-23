import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Box, BoxProps, useFlexSize } from "@react-three/flex";
import { PropsWithChildren, useLayoutEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { lerp } from "utils/lerp";
import { BoxDebug } from "../Helpers/Debug";
type P = PropsWithChildren<{}>;

export const FlexedHtml = ({ children, ...boxProps }: P & BoxProps) => {
  const [ref, bounds] = useMeasure();
  const { innerHeight, innerWidth } = window;
  const [fWidth] = useFlexSize();
  const height = lerp(bounds.height, 0, innerWidth, 0, fWidth + fWidth * 0.11);
  const width = lerp(bounds.width, 0, innerHeight, 0, fWidth);
  return (
    <Box height={height} width={width} {...boxProps}>
      <Html center ref={ref}>
        {children}
      </Html>
    </Box>
  );
};
