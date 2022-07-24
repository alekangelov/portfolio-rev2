import { Text } from "@react-three/drei";
import { Box, useSyncGeometrySize } from "@react-three/flex";
import { Projects } from "components";
import { fontPaths } from "styles/fonts";
import { FlexedHtml } from "../components/FlexedHtml";

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
  return (
    <Box width="100%" dir="column" align="flex-start" justify="center">
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
