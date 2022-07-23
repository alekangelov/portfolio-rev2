import { Text } from "@react-three/drei";
import { Box, useSyncGeometrySize } from "@react-three/flex";
import { fontPaths } from "styles/fonts";
import { BoxDebug } from "../Helpers/Debug";
import { useScrollPosition } from "../hooks/useScroll";

export const ProjectsScene = () => {
  const ref = useScrollPosition();
  const onSync = useSyncGeometrySize();

  return (
    <Box ref={ref} width="100%">
      <Box centerAnchor>
        <Text onSync={onSync} font={fontPaths.manofa.bold} fontSize={1}>
          PROJECTS
        </Text>
      </Box>
    </Box>
  );
};
