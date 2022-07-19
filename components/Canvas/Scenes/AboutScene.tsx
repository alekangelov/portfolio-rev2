import { Flex, Box, useFlexSize } from "@react-three/flex";
import { useContainer } from "../Helpers/hooks";
import {
  Box as BBox,
  Environment,
  Text,
  Plane,
  Image,
  Float,
} from "@react-three/drei";
import { memo, useRef } from "react";
import { SceneProps } from "./types";
import { BoxDebug } from "../Helpers/Debug";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scroll } from "@stores";
import { fontPaths } from "styles/fonts";

const id = (() => {
  let i = 0;
  return () => i++;
})();

const Title = () => {
  const [width, height] = useFlexSize();
  const color = useRef(id() % 2 ? "red" : "blue");
  return (
    <group>
      <Text textAlign="left">ABOUT ME</Text>
    </group>
  );
};
const v = new THREE.Vector3();
export const AboutScene = ({}: SceneProps) => {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    const normalized = scroll.top / 100;
    ref.current?.position.lerp(v.set(-normalized + 6, 0, 0), 0.2);
  });

  return (
    <Box
      mt={2}
      wrap="no-wrap"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <BoxDebug />
      <Box>
        <BoxDebug />

        <Box alignSelf="flex-start" height={5} ref={ref} flexDirection="row">
          <Box centerAnchor width={4} mr={0.5} height={5} position={[0, 0, 0]}>
            <Image scale={[4, 5, 0] as any} url="/images/me/5.jpg" />
          </Box>
          <Box centerAnchor width={6} mr={0.5} height={5} position={[0, 0, 3]}>
            <Image scale={[6, 5, 0] as any} url="/images/me/2.jpg" />
          </Box>
          <Box centerAnchor width={4} mr={0.5} height={5} position={[0, 0, 3]}>
            <Image scale={[4, 5, 0] as any} url="/images/abstract/2.jpg" />
          </Box>
          <Box centerAnchor width={6} mr={0.5} height={5} position={[0, 0, -3]}>
            <Image scale={[6, 5, 0] as any} url="/images/me/3.jpg" />
          </Box>
          <Box centerAnchor width={4} mr={0.5} height={5} position={[0, 0, 3]}>
            <Image scale={[4, 5, 0] as any} url="/images/abstract/4.jpg" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
