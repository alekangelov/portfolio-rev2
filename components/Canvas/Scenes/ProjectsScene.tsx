import { Text } from "@react-three/drei";
import { Box, useSyncGeometrySize } from "@react-three/flex";
import { useResponsiveValue } from "@utils";
import { Projects } from "components";
import { fontPaths } from "styles/fonts";
import { FlexedHtml } from "../components/FlexedHtml";
import { useContainer } from "../Helpers/hooks";

const Title = () => {
  const onSync = useSyncGeometrySize();
  const size = useResponsiveValue({
    base: 0.5,
    tablet: 0.7,
    desktop: 1,
  });
  return (
    <Box centerAnchor>
      <Text onSync={onSync} font={fontPaths.manofa.bold} fontSize={size}>
        PROJECTS
      </Text>
    </Box>
  );
};

export const ProjectsScene = () => {
  const {
    viewport: { height },
  } = useContainer();
  return (
    <Box
      width="100%"
      dir="column"
      align="flex-start"
      justify="center"
      height={height}
    >
      <Box width="100%" align="flex-start">
        <Title />
      </Box>
      <Box centerAnchor width="100%">
        <Box width="100%" height={6}>
          <mesh />
        </Box>
      </Box>
    </Box>
  );
};
