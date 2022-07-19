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
import { columns } from "../Helpers/sizing";

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
    ref.current?.position.lerp(v.set(-normalized + 6, -2, 0), 0.2);
  });

  return (
    <Box
      width="100%"
      height="100%"
      wrap="no-wrap"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      {/* <BoxDebug /> */}
      <Box
        centerAnchor
        width={columns[7]}
        height={2}
        alignSelf="flex-end"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        {/* <BoxDebug /> */}
        <Box mb={0.2}>
          <Text
            letterSpacing={-0.1}
            fontSize={0.5}
            lineHeight={2}
            font={fontPaths.manofa.bold}
          >{`BUT WHO MAKES ALL THIS`}</Text>
        </Box>
        <Box>
          <Text
            letterSpacing={-0.1}
            fontSize={1.25}
            lineHeight={1}
            font={fontPaths.manofa.bold}
          >{`\nDOPE SHIT`}</Text>
        </Box>
      </Box>
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
  );
};
