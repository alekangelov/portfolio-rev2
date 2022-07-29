import { Text } from "@react-three/drei";
import { Box, useSyncGeometrySize } from "@react-three/flex";
import { useResponsiveValue } from "@utils";
import { Blog } from "components/Pages";
import { fontPaths } from "styles/fonts";
import { FlexedHtml } from "../components/FlexedHtml";
import { BoxDebug } from "../Helpers/Debug";
function TitleText() {
  const onSync = useSyncGeometrySize();
  const size = useResponsiveValue({
    base: 0.3,
    tablet: 0.5,
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
    >{`SH#T I WROTE`}</Text>
  );
}

function BottomText() {
  const onSync = useSyncGeometrySize();
  const size = useResponsiveValue({
    base: 0.2,
    tablet: 0.2,
    desktop: 0.25,
  });
  const child = useResponsiveValue({
    base: `While maybe succeeding\nat sounding smart`,
    tablet: `While maybe succeeding at sounding smart`,
  });
  return (
    <Text
      onSync={onSync}
      letterSpacing={-0.1}
      fontSize={size}
      lineHeight={1}
      font={fontPaths.inter}
      color="white"
      textAlign="right"
    >
      {child}
    </Text>
  );
}
export const BlogScene = () => {
  const mt = useResponsiveValue({
    base: 0.1,
    tablet: 0.2,
    desktop: 0.25,
  });
  const mb = useResponsiveValue({
    base: 0.5,
    tablet: 0.25,
    desktop: 0,
  });
  return (
    <Box width="100%">
      <Box dir="column" align="flex-end">
        {/* <BoxDebug /> */}
        <Box renderOrder={0} centerAnchor>
          {/* <BoxDebug /> */}
          <TitleText />
        </Box>
        <Box mt={mt} mb={mb} centerAnchor>
          {/* <BoxDebug /> */}
          <BottomText />
        </Box>
      </Box>
      <Box centerAnchor width="100%">
        <FlexedHtml>
          <Blog />
        </FlexedHtml>
      </Box>
    </Box>
  );
};
