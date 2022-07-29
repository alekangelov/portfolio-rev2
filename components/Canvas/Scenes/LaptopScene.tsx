import { useSpring } from "@react-spring/three";
import { ContactShadows, Float, Text } from "@react-three/drei";
import { Box } from "@react-three/flex";
import { useResponsiveValue } from "@utils";
import { useState } from "react";
import { useBoolean } from "usehooks-ts";
import { BoxDebug } from "../Helpers/Debug";
import Laptop from "../Models/Laptop";
import Phone from "../Models/Phone";

export const LaptopScene = () => {
  const scale = useResponsiveValue({
    base: [1.5, 1.5, 1.5],
    tablet: [1.75, 1.75, 1.75],
    desktop: [2, 2, 2],
  } as const);
  return (
    <Box width="100%" height={10} align="center" justify="center">
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
