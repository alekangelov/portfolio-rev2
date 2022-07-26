import { Text } from "@react-three/drei";
import { Box, useSyncGeometrySize } from "@react-three/flex";
import { fontPaths } from "styles/fonts";
import { BoxDebug } from "../Helpers/Debug";

function Title() {
  const onSync = useSyncGeometrySize();
  return (
    <Text
      onSync={onSync}
      letterSpacing={-0.1}
      fontSize={0.7}
      lineHeight={1}
      font={fontPaths.manofa.regular}
      color="white"
    >{`LET'S GET IN TOUCH`}</Text>
  );
}

function SubTitle() {
  const onSync = useSyncGeometrySize();
  return (
    <Text
      onSync={onSync}
      letterSpacing={-0.1}
      fontSize={0.25}
      lineHeight={1}
      font={fontPaths.inter}
      color="white"
    >{`And chop it up or something idk`}</Text>
  );
}

export const ContactScene = () => {
  return (
    <Box width="100%" dir="column" align="flex-start" justify="flex-start">
      <Box
        height="auto"
        width="100%"
        mt={1}
        dir="column"
        align="flex-start"
        justify="flex-start"
      >
        <BoxDebug />
        <Box centerAnchor align="flex-start" justify="flex-start">
          <BoxDebug />
          <Title />
        </Box>
        <Box mt={0.25} centerAnchor align="flex-start" justify="flex-start">
          <BoxDebug />
          <SubTitle />
        </Box>
      </Box>
    </Box>
  );
};
