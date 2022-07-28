import {
  Flex,
  Box,
  useFlexSize,
  useReflow,
  useSyncGeometrySize,
} from "@react-three/flex";
import { useContainer } from "../Helpers/hooks";
import { Text, Image } from "@react-three/drei";
import { forwardRef, useRef } from "react";
import { SceneProps } from "./types";
import { useFrame } from "@react-three/fiber";
import { scroll } from "@stores";
import { fontPaths } from "styles/fonts";
import { About } from "components/Pages";
import { Group, Vector3 } from "three";
import { FlexedHtml } from "../components/FlexedHtml";
import { BoxDebug } from "../Helpers/Debug";

const id = (() => {
  let i = 0;
  return () => i++;
})();

const HoverableImage: typeof Image = forwardRef((props, ref) => {
  return <Image {...(props as any)} ref={ref} />;
});

function TopText() {
  const onSync = useSyncGeometrySize();
  return (
    <Text
      onSync={onSync}
      letterSpacing={-0.1}
      fontSize={0.5}
      lineHeight={1}
      font={fontPaths.manofa.regular}
      color="white"
    >{`BUT WHO MAKES ALL THIS`}</Text>
  );
}

function BottomText() {
  const onSync = useSyncGeometrySize();
  return (
    <Text
      onSync={onSync}
      letterSpacing={-0.1}
      fontSize={1.25}
      lineHeight={1}
      font={fontPaths.manofa.bold}
      color="white"
    >{`\nDOPE SHIT`}</Text>
  );
}

function TextBox() {
  const [width] = useFlexSize();

  return (
    <Box width="100%">
      <Box
        centerAnchor
        mt={-0.5}
        height={2}
        alignSelf="flex-end"
        alignItems={"flex-end"}
        dir="column"
      >
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
const vx = new Vector3();

function ImageBox() {
  const ref = useRef<Group>(null);
  useFrame(() => {
    ref.current?.position.lerp(vx.set(-(scroll.top - 700) / 100, 0, 0), 0.1);
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
  return (
    <Box width="100%" dir="column">
      <Box dir="column" alignItems="flex-start" justifyContent="flex-start">
        <Box width="100%">
          <TextBox />
        </Box>
        <Box width="100%">
          <ImageBox />
        </Box>
      </Box>
      <Box centerAnchor>
        <Box mt={0.5} mb={2} width="100%" justify="center">
          <FlexedHtml>
            <About />
          </FlexedHtml>
        </Box>
      </Box>
    </Box>
  );
};
