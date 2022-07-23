import { Text } from "@react-three/drei";
import { Box, Flex, useSyncGeometrySize } from "@react-three/flex";
import { Projects } from "components/Pages/Projects";
import { fontPaths } from "styles/fonts";
import { FlexedHtml } from "../components/FlexedHtml";
import { BoxDebug } from "../Helpers/Debug";
import { useScrollPosition } from "../hooks/useScroll";

const Title = () => {
  const onSync = useSyncGeometrySize();
  return (
    <Box centerAnchor>
      <Text onSync={onSync} font={fontPaths.manofa.bold} fontSize={1}>
        PROJECTS
      </Text>
    </Box>
  );
};

export const ProjectsScene = () => {
  const ref = useScrollPosition();

  return (
    <Box
      ref={ref}
      width="100%"
      dir="column"
      align="flex-start"
      justify="center"
    >
      <Box width="100%" align="flex-start">
        <Title />
      </Box>
      <Box centerAnchor width="100%">
        <Box width="100%">
          <FlexedHtml width="100%">
            <Projects />
          </FlexedHtml>
        </Box>
      </Box>
    </Box>
  );
};
