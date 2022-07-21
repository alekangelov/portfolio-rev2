import { Flex, Box, useFlexSize, useReflow } from "@react-three/flex";
import { useContainer } from "../Helpers/hooks";
import {
  Box as BBox,
  Environment,
  Text,
  Plane,
  Image,
  Float,
  Html,
  ImageProps,
  useHelper,
} from "@react-three/drei";
import { forwardRef, memo, useEffect, useRef } from "react";
import { SceneProps } from "./types";
import { BoxDebug } from "../Helpers/Debug";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scroll } from "@stores";
import { fontPaths } from "styles/fonts";
import { columns } from "../Helpers/sizing";
import { About } from "components/Pages";
import { useScrollPosition } from "../hooks/useScroll";
import { HeightReporter } from "../Helpers/HeightReporter";
import { PointLight, PointLightHelper } from "three";

const id = (() => {
  let i = 0;
  return () => i++;
})();

const HoverableImage: typeof Image = forwardRef((props, ref) => {
  return <Image {...(props as any)} ref={ref} />;
});

const v = new THREE.Vector3();

function TextBox() {
  const [width] = useFlexSize();
  return (
    <Box width="100%" height={2} mb={-1}>
      <Box
        centerAnchor
        mt={-0.5}
        width={6.25}
        height={2}
        alignSelf="flex-end"
        alignItems={"flex-end"}
        dir="column"
      >
        <Box width={6} mb={0.25}>
          <Text
            letterSpacing={-0.1}
            fontSize={0.5}
            lineHeight={1}
            font={fontPaths.manofa.regular}
            maxWidth={width / 1.5}
            color="white"
          >{`BUT WHO MAKES ALL THIS`}</Text>
        </Box>
        <Box width={6}>
          <Text
            letterSpacing={-0.1}
            fontSize={1.25}
            lineHeight={1}
            font={fontPaths.manofa.bold}
            maxWidth={width / 1.5}
            color="white"
          >{`\nDOPE SHIT`}</Text>
        </Box>
      </Box>
    </Box>
  );
}

function ImageBox() {
  return (
    <Box
      height={5}
      mb={0}
      dir="row"
      width="100%"
      flexWrap="no-wrap"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Box width={4} centerAnchor height="100%" mr={0.5}>
        <HoverableImage scale={[4, 5, 0] as any} url="/images/me/5.jpg" />
      </Box>
      <Box width={6} centerAnchor height="100%" mr={0.5}>
        <HoverableImage scale={[6, 5, 0] as any} url="/images/me/2.jpg" />
      </Box>
      <Box width={4} centerAnchor height="100%" mr={0.5}>
        <HoverableImage scale={[4, 5, 0] as any} url="/images/abstract/2.jpg" />
      </Box>
      <Box width={6} centerAnchor height="100%" mr={0.5}>
        <HoverableImage scale={[6, 5, 0] as any} url="/images/me/3.jpg" />
      </Box>
      <Box width={4} centerAnchor height="100%" mr={0.5}>
        <HoverableImage scale={[4, 5, 0] as any} url="/images/abstract/4.jpg" />
      </Box>
    </Box>
  );
}

export const AboutScene = ({}: SceneProps) => {
  const ref = useScrollPosition();
  return (
    <Box ref={ref} width="100%" dir="column">
      <HeightReporter name="about" />
      <Box
        mt={-2}
        dir="column"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Box width="100%">
          <TextBox />
        </Box>
        <Box width="100%">
          <ImageBox />
        </Box>
      </Box>
      <Box centerAnchor alignSelf="center" width="100%" height={5}>
        <Html center>
          <About />
        </Html>
      </Box>
    </Box>
  );
};
