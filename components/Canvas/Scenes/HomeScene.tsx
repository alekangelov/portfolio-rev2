import * as THREE from "three";
import {
  ContactShadows,
  Plane,
  Box as DDBox,
  Html,
  Center,
} from "@react-three/drei";
import { SceneProps } from "./types";
import Bust from "../Models/Bust";
import { Box, useFlexSize } from "@react-three/flex";
import { BoxDebug } from "../Helpers/Debug";
import { Landing } from "components/Landing";
import { PropsWithChildren } from "react";

const Main = () => (
  <group position={[0, -2.75, 0]}>
    <Bust position={[0, 0, 0]} />
    <ContactShadows
      position={[0, -0.5, 0]}
      blur={10}
      far={100}
      width={2}
      height={2}
    />
  </group>
);

const Debug = () => {
  const [width, height] = useFlexSize();
  return (
    <Plane scale={[width, height, 2]}>
      <meshStandardMaterial color="red" />
    </Plane>
  );
};

export const HomeScene = ({}: SceneProps) => {
  return (
    <Box
      width="100%"
      height={"100%"}
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-end"
    >
      <Box centerAnchor width="40%" height="100%">
        <Main />
      </Box>
    </Box>
  );
};
