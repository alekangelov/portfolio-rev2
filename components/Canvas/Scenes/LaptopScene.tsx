import { useSpring } from "@react-spring/three";
import { ContactShadows, Float, Text } from "@react-three/drei";
import { Box } from "@react-three/flex";
import { useResponsiveValue } from "@utils";
import { useState } from "react";
import { useBoolean } from "usehooks-ts";
import { BoxDebug } from "../Helpers/Debug";
import { useContainer } from "../Helpers/hooks";
import Laptop from "../Models/Laptop";
import Phone from "../Models/Phone";

export const LaptopScene = () => {
  const {
    viewport: { height: vh },
  } = useContainer();
  const scale = useResponsiveValue({
    base: [1.5, 1.5, 1.5],
    tablet: [1.75, 1.75, 1.75],
    desktop: [2, 2, 2],
  } as const);
  const height = useResponsiveValue({
    base: vh * 1.5,
  });
  return (
    <Box width="100%" height={height} align="center" justify="center">
      {/* <BoxDebug /> */}
      <Box centerAnchor mt={1} mb={-4}>
        {/* <BoxDebug /> */}
        <group scale={scale as any}>
          <Phone />
        </group>
      </Box>
    </Box>
  );
};
