import {
  Float,
  MeshDistortMaterial,
  Plane,
  Sphere,
  Text,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/flex";
import { useRef } from "react";
import { fontPaths } from "styles/fonts";
import { Color, MathUtils, Vector3 } from "three";
import { RoseMatterMaterial } from "../Materials/RoseMaterial";

const lights = {
  key: "#ffffff",
  fill: "#eb8c34",
  back: "#346eeb",
};

const Colors = [
  new Color("#e63946"),
  new Color("#f1faee"),
  new Color("#a8dadc"),
];

export const FooterScene = () => {
  const ref = useRef<any>(null);
  const rose = useRef<any>(null);
  const text = useRef<any>(null);
  const hovered = useRef(false);
  useFrame((_, delta) => {
    if (!ref.current || !rose.current || !text.current) return;
    const h = hovered.current;
    ref.current.distort = MathUtils.lerp(
      ref.current.distort,
      h ? 1 : 0,
      h ? 0.05 : 0.01
    );
    text.current.position.z = MathUtils.lerp(
      text.current.position.z,
      h ? 1.5 : 0,
      h ? 0.05 : 0.1
    );
    rose.current.iTime += delta;
  });
  return (
    <Box centerAnchor width="100%" height={10}>
      {/* <pointLight
        ref={light}
        position={[2, 0, 5]}
        intensity={1}
        color={lights.key}
      />
      <pointLight position={[-4, -1, -5]} intensity={1} color={lights.back} />
      <pointLight position={[-4, 5, -5]} intensity={1} color={lights.fill} /> */}

      <Box>
        <group position={[0, -2, 0]}>
          <Float>
            <Sphere
              onPointerEnter={() => (hovered.current = true)}
              onPointerLeave={() => (hovered.current = false)}
              args={[1.5, 50, 50]}
            >
              <MeshDistortMaterial
                ref={ref}
                distort={0}
                roughness={0.5}
                color="black"
              ></MeshDistortMaterial>
            </Sphere>
          </Float>
          <Text
            ref={text}
            position={[0, 0, 0]}
            fontSize={1}
            font={fontPaths.manofa.bold}
          >
            {`NITIMUR\nIN\nVETITUM`}
          </Text>
          {/* <Float speed={2} floatIntensity={2}> */}
          <Plane args={[10, 10, 1, 1]} position={[0, 0, -2]}>
            <meshBasicMaterial color="white" />
            {/* @ts-ignore */}
            <roseMatterMaterial
              iResolution={new Vector3(50, 50, 50)}
              key={RoseMatterMaterial.key}
              ref={rose}
            />
          </Plane>
          {/* </Float> */}
        </group>
      </Box>
    </Box>
  );
};
