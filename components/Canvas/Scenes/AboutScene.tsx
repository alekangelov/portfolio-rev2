import { Flex, Box, useFlexSize } from "@react-three/flex";
import { useContainer } from "../Helpers/hooks";
import {
  Box as BBox,
  Environment,
  Text,
  Plane,
  Image,
} from "@react-three/drei";
import { memo, useRef } from "react";
import { SceneProps } from "./types";
import { BoxDebug } from "../Helpers/Debug";

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

export const AboutScene = ({}: SceneProps) => {
  const {
    width: innerWidth,
    percent,
    viewport: { width, height },
  } = useContainer();
  const w = width < 10 ? 1.5 / 3 : 1 / 3;

  return (
    <Box
      width="100%"
      height="auto"
      flexDirection={"row"}
      centerAnchor
      alignItems="center"
      justifyContent="flex-start"
    >
      <BoxDebug />
      <Box width="100%" minHeight="100%">
        <BoxDebug />
        <Image
          url="/images/abstract/1.jpg"
          scale={[width * w - 0.4 * 2, 5, 1] as any}
        />
      </Box>
    </Box>
  );
};
