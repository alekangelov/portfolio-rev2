import { Text } from "@react-three/drei";
import { fontPaths } from "styles/fonts";
import { Flex, Box, useFlexSize } from "@react-three/flex";
import { useThree } from "@react-three/fiber";
import { useContainer } from "../Helpers/hooks";

export const AboutScene = () => {
  const { width, viewport } = useContainer();
  return (
    <Flex
      width={width}
      minHeight={viewport.height}
      flexDirection={"column"}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Box>
        <Text
          color="black"
          textAlign="left"
          font={fontPaths.manofa.bold}
          fontSize={1.5}
        >
          ABOUT ME
        </Text>
      </Box>
      <Box>
        <Text
          textAlign="left"
          color="black"
          font={fontPaths.inter}
          fontSize={0.2}
          children={`I said "I make cool shit",\nbut who's the person behind\nall that cool shit`}
        />
      </Box>
    </Flex>
  );
};
