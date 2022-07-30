import { Text } from "@react-three/drei";
import { Box, useSyncGeometrySize } from "@react-three/flex";
import { useResponsiveValue } from "@utils";
import { Contact } from "components/Pages/Contact";
import { fontPaths } from "styles/fonts";
import { FlexedHtml } from "../components/FlexedHtml";
import { BoxDebug } from "../Helpers/Debug";

function Title() {
  const onSync = useSyncGeometrySize();
  const child = useResponsiveValue({
    base: `LET'S GET\nIN TOUCH`,
    tablet: `LET'S GET\nIN TOUCH`,
    desktop: `LET'S GET IN TOUCH`,
  });
  const size = useResponsiveValue({
    base: 0.5,
    tablet: 0.6,
    desktop: 0.7,
  });
  return (
    <Text
      onSync={onSync}
      letterSpacing={-0.1}
      fontSize={size}
      lineHeight={1}
      font={fontPaths.manofa.bold}
      color="white"
    >
      {child}
    </Text>
  );
}

function SubTitle() {
  const onSync = useSyncGeometrySize();
  const size = useResponsiveValue({
    base: 0.15,
    tablet: 0.25,
  });
  return (
    <Text
      onSync={onSync}
      letterSpacing={-0.1}
      fontSize={size}
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
        {/* <BoxDebug /> */}
        <Box centerAnchor align="flex-start" justify="flex-start">
          {/* <BoxDebug /> */}
          <Title />
        </Box>
        <Box mt={0.25} centerAnchor align="flex-start" justify="flex-start">
          {/* <BoxDebug /> */}
          <SubTitle />
        </Box>
        <Box width="100%" height={6}>
          <mesh />
        </Box>
      </Box>
    </Box>
  );
};
