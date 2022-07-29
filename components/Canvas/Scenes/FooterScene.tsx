import {
  Float,
  MeshDistortMaterial,
  Plane,
  Sphere,
  Text,
  useEnvironment,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/flex";
import { useResponsiveValue } from "@utils";
import { useRef } from "react";
import { fontPaths } from "styles/fonts";
import {
  Color,
  LinearEncoding,
  MathUtils,
  PointLightHelper,
  Vector3,
} from "three";
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
  const roseText = useRef<any>(null);
  const envmap = useEnvironment({
    files: "/fire.hdr",
    encoding: LinearEncoding,
  });
  const bump = useTexture("/images/concrete.jpeg");
  const light = useRef(null);
  const rose = useRef<any>(null);
  const text = useRef<any>(null);
  const hovered = useRef(false);
  useFrame((_, delta) => {
    if (!ref.current || !rose.current || !text.current) return;
    const h = hovered.current;
    ref.current.distort = MathUtils.lerp(
      ref.current.distort,
      !h ? 1 : 0,
      h ? 0.05 : 0.01
    );
    ref.current.bumpScale = MathUtils.lerp(
      ref.current.bumpScale,
      !h ? 0.01 : 0,
      h ? 0.05 : 0.01
    );
    text.current.position.z = MathUtils.lerp(
      text.current.position.z,
      h ? 2.2 : 0,
      h ? 0.1 : 0.01
    );
    rose.current.iTime += delta / 4;
    // roseText.current.iTime += delta / 10;
  });
  useHelper(light, PointLightHelper, 1, "white");
  const sphereSize = useResponsiveValue({
    base: 1,
    tablet: 1,
    desktop: 1.5,
  });
  const fontSize = useResponsiveValue({
    base: 0.3,
    tablet: 0.35,
    desktop: 0.7,
  });
  const bgSize = useResponsiveValue({
    base: [3, 6],
    tablet: [5, 6],
    desktop: [10, 10],
  } as const);
  const resolution = useResponsiveValue({
    base: [3, 6, 10],
    tablet: [5, 6, 10],
    desktop: [10, 10, 10],
  });
  const position = useResponsiveValue({
    base: [0, 0, 0],
    tablet: [0, 0, 0],
    desktop: [0, 0, 0],
  } as const);
  return (
    <Box centerAnchor width="100%" height={30}>
      <group position={position as any}>
        <pointLight
          distance={10}
          ref={light}
          position={[2, 0, 5]}
          intensity={10}
          color={lights.key}
        />
        <pointLight
          distance={10}
          position={[-4, -1, -5]}
          intensity={10}
          color={lights.back}
        />
        <pointLight
          distance={10}
          position={[-4, 5, -5]}
          intensity={10}
          color={lights.fill}
        />

        <Box>
          <group position={[0, 0, 0]}>
            <Float>
              <Sphere
                onPointerEnter={() => (hovered.current = true)}
                onPointerLeave={() => (hovered.current = false)}
                onPointerDown={() => (hovered.current = true)}
                onPointerUp={() => (hovered.current = false)}
                args={[sphereSize, 50, 50]}
              >
                <MeshDistortMaterial
                  ref={ref}
                  envMap={envmap}
                  distort={0}
                  roughness={0.8}
                  color="#101526"
                  bumpMap={bump}
                  bumpScale={0}
                ></MeshDistortMaterial>
              </Sphere>
            </Float>
            <Text
              ref={text}
              position={[0, 0, 0]}
              fontSize={fontSize}
              font={fontPaths.manofa.bold}
              color="black"
            >
              <meshStandardMaterial
                roughness={0.9}
                envMap={envmap}
                color="Black"
              />
              {`NITIMUR\nIN\nVETITUM`}
            </Text>
            {/* <Float speed={2} floatIntensity={2}> */}
            <Plane args={[...(bgSize || [2, 2]), 1, 1]} position={[0, 0, -2]}>
              {/* @ts-ignore */}
              <roseMatterMaterial
                iResolution={new Vector3(...(resolution as any))}
                key={RoseMatterMaterial.key}
                ref={rose}
              />
            </Plane>
            {/* </Float> */}
          </group>
        </Box>
      </group>
    </Box>
  );
};
