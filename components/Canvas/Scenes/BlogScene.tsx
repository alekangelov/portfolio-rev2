import { Text } from "@react-three/drei";
import { Box, useSyncGeometrySize } from "@react-three/flex";
import { Blog } from "components/Pages";
import { fontPaths } from "styles/fonts";
import { FlexedHtml } from "../components/FlexedHtml";
import { BoxDebug } from "../Helpers/Debug";
function TitleText() {
  const onSync = useSyncGeometrySize();
  return (
    <Text
      onSync={onSync}
      letterSpacing={-0.1}
      fontSize={0.7}
      lineHeight={1}
      font={fontPaths.manofa.bold}
      color="white"
    >{`SH#T I WROTE`}</Text>
  );
}

function BottomText() {
  const onSync = useSyncGeometrySize();
  return (
    <Text
      onSync={onSync}
      letterSpacing={-0.1}
      fontSize={0.25}
      lineHeight={1}
      font={fontPaths.inter}
      color="white"
    >{`While maybe succeeding at sounding smart`}</Text>
  );
}
export const BlogScene = () => {
  return (
    <Box width="100%">
      <Box dir="column" align="flex-end">
        {/* <BoxDebug /> */}
        <Box renderOrder={0} centerAnchor>
          {/* <BoxDebug /> */}
          <TitleText />
        </Box>
        <Box centerAnchor>
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
