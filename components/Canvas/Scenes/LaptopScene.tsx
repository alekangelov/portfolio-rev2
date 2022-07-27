import { useSpring } from "@react-spring/three";
import { ContactShadows, Float, Text } from "@react-three/drei";
import { Box } from "@react-three/flex";
import { useState } from "react";
import { useBoolean } from "usehooks-ts";
import { BoxDebug } from "../Helpers/Debug";
import Laptop from "../Models/Laptop";
import Phone from "../Models/Phone";

export const LaptopScene = () => {
  return (
    <Box width="100%" height={10} align="center" justify="center">
      {/* <BoxDebug /> */}
      <Box centerAnchor mt={2} mb={-2}>
        {/* <BoxDebug /> */}
        <group scale={[1.5, 1.5, 1.5]}>
          <Phone />
        </group>
      </Box>
    </Box>
  );
};
