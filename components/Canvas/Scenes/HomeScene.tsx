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
import { MeshProps, useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { HeightReporter } from "../Helpers/HeightReporter";
import { WaveMaterial } from "../Materials/WaveMaterial";
import { useRef } from "react";

const colors = [
  ["#FF00C7", "#0066FF"],
  ["#ff0080", "#f7b955"],
];

const getColor = (() => {
  let a = -1;
  return (): string[] => {
    a = a + 1;
    return colors[a];
  };
})();

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
    <ContactShadows
      position={[0, -0.5, 0]}
      blur={10}
      far={100}
      width={2}
      height={2}
    />
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
const v = new Vector3();

function ShaderPlane() {
  const ref = useRef<any>();
  const { width, height } = useThree((state) => state.viewport);
  useFrame((state, delta) => (ref.current.time += delta));
  return (
    <mesh scale={[width, height, 1]}>
      <planeGeometry />
      {/* @ts-ignore */}
      <waveMaterial
        ref={ref}
        key={WaveMaterial.key}
        toneMapped={true}
        colorStart={"#505050"}
        colorEnd={"black"}
      />
    </mesh>
  );
}
export const HomeScene = ({}: SceneProps) => {
  return (
    <Box width={`${columns[12]}%`} height="100%" flexDirection="row">
      <ShaderPlane />
      <HeightReporter name="landing" />
      <Box
        flexDirection="row"
        minHeight={"100%"}
        centerAnchor
        width={`${columns[8]}%`}
      >
        <Html
          center
          style={{
            width: calculateColumnWidth("8"),
          }}
        >
          <Landing />
        </Html>
      </Box>
      <Box centerAnchor width={`${columns[4]}%`} height="auto">
        <Main />
      </Box>
    </Box>
  );
};
