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
  const ref = useRef<PointLight>(null);
  useHelper(ref, PointLightHelper, 1, "white");
  const [width, height] = useFlexSize();
  return (
    <Box width={"100%"} height={2}>
      {/* <pointLight position={[2, 0, 2]} ref={ref} intensity={10} color="white" /> */}
      <Text
        letterSpacing={-0.1}
        fontSize={0.5}
        lineHeight={2}
        font={fontPaths.manofa.bold}
        maxWidth={width / 1.5}
        color="white"
      >{`BUT WHO MAKES ALL THIS`}</Text>
      <Text
        letterSpacing={-0.1}
        fontSize={1.25}
        lineHeight={1}
        font={fontPaths.manofa.bold}
        maxWidth={width / 1.5}
        color="white"
      >{`\nDOPE SHIT`}</Text>
    </Box>
  );
}

function ImageBox() {
  return (
    <Box
      width={"100%"}
      height={5}
      wrap="no-wrap"
      dir="row"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Box width={4} height={5}>
        <HoverableImage scale={[4, 5, 0] as any} url="/images/me/5.jpg" />
      </Box>
      <Box width={6} height={5}>
        <HoverableImage scale={[6, 5, 0] as any} url="/images/me/2.jpg" />
      </Box>
      <Box width={4} height={5}>
        <HoverableImage scale={[4, 5, 0] as any} url="/images/abstract/2.jpg" />
      </Box>
      <Box width={6} height={5}>
        <HoverableImage scale={[6, 5, 0] as any} url="/images/me/3.jpg" />
      </Box>
      <Box width={4} height={5}>
        <HoverableImage scale={[4, 5, 0] as any} url="/images/abstract/4.jpg" />
      </Box>
    </Box>
  );
}

export const AboutScene = ({}: SceneProps) => {
  const ref = useScrollPosition();
  return (
    <Box ref={ref} width="100%">
      <HeightReporter name="about" />
      <BoxDebug />
      <Box centerAnchor>
        <TextBox />
        <ImageBox />
      </Box>
    </Box>
  );
};
