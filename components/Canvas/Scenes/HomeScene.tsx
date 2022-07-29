import {
  ContactShadows,
  Plane,
  GradientTexture,
  Html,
  Float,
} from "@react-three/drei";
import { SceneProps } from "./types";
import Bust from "../Models/Bust";
import { Box, useFlexSize } from "@react-three/flex";
import { Landing } from "components/Pages";
import { calculateColumnWidth, columns } from "styles";
import { MeshProps } from "@react-three/fiber";
import { BoxDebug } from "../Helpers/Debug";
import { useResponsiveValue } from "@utils";

const colors = [
  ["#FF00C7", "#0066FF"],
  ["#ff0080", "#f7b955"],
];

const BgPlane = ({
  position,
  color,
  ...rest
}: MeshProps & { color: 0 | 1 }) => {
  return (
    <Float>
      <mesh position={position} {...rest}>
        <planeGeometry args={[3, 4]} />
        <meshBasicMaterial>
          <GradientTexture stops={[0, 1]} colors={colors[color]} size={512} />
        </meshBasicMaterial>
      </mesh>
    </Float>
  );
};

const Main = () => (
  <group position={[0, -2.75, 0]}>
    <BgPlane position={[0, 2, -2]} color={0} />
    <BgPlane position={[1, 3, -2]} color={1} />
    <Bust position={[0, 0, 0]} />
  </group>
);

const Debug = () => {
  const [width, height] = useFlexSize();
  return (
    <Plane scale={[width, height, 2]}>
      <meshStandardMaterial color="red" />
    </Plane>
  );
};
export const HomeScene = ({}: SceneProps) => {
  const firstColumn = useResponsiveValue({
    base: "12",
    tablet: "8",
  } as const);
  const secondColumn = useResponsiveValue({
    base: "12",
    tablet: "4",
  } as const);
  const isMobile = useResponsiveValue({
    base: true,
    tablet: true,
    desktop: false,
  } as const);
  console.log(isMobile);
  if (isMobile) {
    return (
      <Box
        width={`${columns[12]}%`}
        centerAnchor
        height="100%"
        flexDirection="row"
      >
        <Html
          center
          style={{
            width: "90vw",
          }}
        >
          <Landing />
        </Html>
        <Main />
      </Box>
    );
  }
  return (
    <Box width={`${columns[12]}%`} height="100%" flexDirection="row">
      <Box
        flexDirection="row"
        minHeight={"100%"}
        centerAnchor
        width={`${columns[firstColumn || "12"]}%`}
      >
        <Html
          center
          style={{
            width: calculateColumnWidth(firstColumn || "12"),
          }}
        >
          <Landing />
        </Html>
      </Box>
      <Box
        centerAnchor
        width={`${columns[secondColumn || "12"]}%`}
        height="auto"
      >
        <Main />
      </Box>
    </Box>
  );
};
