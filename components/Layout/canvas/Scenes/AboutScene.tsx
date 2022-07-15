import { Flex, Box, useFlexSize } from "@react-three/flex";
import { useContainer } from "../Helpers/hooks";
import { Box as BBox, Environment, Text, Plane } from "@react-three/drei";
import { memo, useRef } from "react";

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

export const AboutScene = () => {
  const {
    width: innerWidth,
    percent,
    viewport: { width, height },
  } = useContainer();
  console.log(innerWidth);
  return (
    <>
      <Flex size={[innerWidth, height, 0]} position={[-innerWidth, height, 0]}>
        <Box
          width="100%"
          height="auto"
          flexDirection={"row"}
          justify="space-around"
          centerAnchor
        >
          <Box
            mt={1.3}
            width="50%"
            height={3}
            centerAnchor
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Title />
          </Box>
          <Box mt={1.3} width="50%" height={3} centerAnchor>
            <Title />
          </Box>
        </Box>
      </Flex>
    </>
  );
};
