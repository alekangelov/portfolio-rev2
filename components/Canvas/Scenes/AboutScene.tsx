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

const id = (() => {
  let i = 0;
  return () => i++;
})();

const HoverableImage: typeof Image = forwardRef((props, ref) => {
  return <Image {...(props as any)} ref={ref} />;
});

const v = new THREE.Vector3();

function TextBox() {
  const [width, height] = useFlexSize();
  return (
    <Box centerAnchor width={"100%"} height={2}>
      <Text
        letterSpacing={-0.1}
        fontSize={0.5}
        lineHeight={2}
        font={fontPaths.manofa.bold}
        maxWidth={width / 1.5}
      >{`BUT WHO MAKES ALL THIS`}</Text>
      <Text
        letterSpacing={-0.1}
        fontSize={1.25}
        lineHeight={1}
        font={fontPaths.manofa.bold}
        maxWidth={width / 1.5}
      >{`\nDOPE SHIT`}</Text>
    </Box>
  );
}

function ImageBox() {
  // const ref = useRef<THREE.Group>(null);
  // useFrame(() => {
  //   const normalized = scroll.top / 100;
  //   // ref.current?.position.lerp(v.set(-normalized + 6, -2, 0), 0.2);
  // });

  return (
    <Box
      alignItems="center"
      alignSelf="flex-start"
      width={"100%"}
      height={5}
      // ref={ref}
      dir="row"
      wrap="no-wrap"
      centerAnchor
    >
      <Box centerAnchor width={4} mr={0.5} height={5}>
        <BoxDebug />
        {/* <HoverableImage scale={[4, 5, 0] as any} url="/images/me/5.jpg" /> */}
      </Box>
      <Box centerAnchor width={6} mr={0.5} height={5}>
        <BoxDebug />

        {/* <HoverableImage scale={[6, 5, 0] as any} url="/images/me/2.jpg" /> */}
      </Box>
      {/* <Box centerAnchor width={4} mr={0.5} height={5}>
          <HoverableImage
            scale={[4, 5, 0] as any}
            url="/images/abstract/2.jpg"
          />
        </Box>
        <Box centerAnchor width={6} mr={0.5} height={5}>
          <HoverableImage scale={[6, 5, 0] as any} url="/images/me/3.jpg" />
        </Box>
        <Box centerAnchor width={4} mr={0.5} height={5}>
          <HoverableImage
            scale={[4, 5, 0] as any}
            url="/images/abstract/4.jpg"
          />
        </Box> */}
    </Box>
  );
}

export const AboutScene = ({}: SceneProps) => {
  const ref = useScrollPosition();
  return (
    <Box ref={ref} width="100%">
      <TextBox />
    </Box>
  );
};
