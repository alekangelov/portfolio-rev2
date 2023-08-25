import {
  Flex,
  Box,
  useFlexSize,
  useReflow,
  useSyncGeometrySize,
} from "@react-three/flex";
import { useContainer } from "../Helpers/hooks";
import { Text, Image, useScroll } from "@react-three/drei";
import { forwardRef, useRef } from "react";
import { SceneProps } from "./types";
import { useFrame } from "@react-three/fiber";
import { fontPaths } from "styles/fonts";
import { Group, Vector3 } from "three";
import { mergeRefs, useResponsiveValue } from "@utils";
import { useDomNodeThreeHeight } from "../hooks/useDomNodeHeight";

const id = (() => {
  let i = 0;
  return () => i++;
})();

const HoverableImage: typeof Image = forwardRef((props, ref) => {
  const random = useRef(Math.random());
  const x = useRef<any>();
  const data = useScroll();
  useFrame(() => {
    if (!x.current) return;
    x.current.material.zoom = 1 + data.range(0, 1 / 3) * random.current * 2;
  });
  return <Image {...(props as any)} ref={mergeRefs([ref, x])} />;
});

function TopText() {
  const onSync = useSyncGeometrySize();
  const size = useResponsiveValue({
    base: 0.25,
    tablet: 0.33,
    desktop: 0.5,
  });
  return (
    <Text
      onSync={onSync}
      letterSpacing={-0.1}
      fontSize={size}
      lineHeight={1}
      font={fontPaths.manofa.regular}
      color="white"
    >{`BUT WHO MAKES ALL THIS`}</Text>
  );
}

function BottomText() {
  const onSync = useSyncGeometrySize();
  const size = useResponsiveValue({
    base: 0.5,
    tablet: 0.7,
    desktop: 1.25,
  });
  return (
    <Text
      onSync={onSync}
      letterSpacing={-0.1}
      fontSize={size}
      lineHeight={1}
      font={fontPaths.manofa.bold}
      color="white"
    >{`\nDOPE SHIT`}</Text>
  );
}

function TextBox() {
  return (
    <Box width="100%">
      <Box width="100%" centerAnchor mt={-0.5} height={2} dir="column">
        <Box mb={-0.2}>
          <TopText />
        </Box>
        <Box>
          <BottomText />
        </Box>
      </Box>
    </Box>
  );
}

function ImageBox() {
  const ref = useRef<Group>(null);
  const data = useScroll();
  useFrame(() => {
    ref.current?.position.set(-data.range(0.05, 1 / 3) * 100 + 10, 0, 0);
  });
  return (
    <Box
      height={5}
      dir="row"
      width="100%"
      flexWrap="no-wrap"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Box
        ref={ref}
        height={5}
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
          <HoverableImage
            scale={[4, 5, 0] as any}
            url="/images/abstract/2.jpg"
          />
        </Box>
        <Box width={6} centerAnchor height="100%" mr={0.5}>
          <HoverableImage scale={[6, 5, 0] as any} url="/images/me/3.jpg" />
        </Box>
        <Box width={4} centerAnchor height="100%" mr={0.5}>
          <HoverableImage
            scale={[4, 5, 0] as any}
            url="/images/abstract/4.jpg"
          />
        </Box>
      </Box>
    </Box>
  );
}

export const AboutScene = ({}: SceneProps) => {
  const {
    viewport: { height },
  } = useContainer();
  const textSize = useDomNodeThreeHeight("about");
  return (
    <Box width="100%" dir="column">
      <Box
        dir="column"
        alignItems="flex-start"
        height={height}
        justifyContent="flex-start"
      >
        <Box width="100%">
          <TextBox />
        </Box>
        <Box width="100%">
          <ImageBox />
        </Box>
      </Box>
      <Box centerAnchor height={textSize}>
        <Box mt={0.5} mb={2} width="100%" justify="center">
          <mesh />
        </Box>
      </Box>
    </Box>
  );
};
