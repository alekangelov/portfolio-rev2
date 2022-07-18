import { memo, PropsWithChildren, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, GradientTexture, Sky } from "@react-three/drei";
import { HomeScene } from "./Scenes/HomeScene";
import Effects from "./Effects";
import * as THREE from "three";
import { Flex } from "@react-three/flex";
import { useContainer } from "./hooks/useContainer";
import { scroll } from "@stores";

const style = {
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
};
const dpr = [1, 2];

const Wrapper = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Canvas
      camera={{}}
      // gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
      style={style as any}
      shadows
      dpr={dpr as any}
      performance={{ min: 0.1 }}
      gl={{ antialias: false, autoClearColor: true }}
    >
      {children}
    </Canvas>
  );
};

const v = new THREE.Vector3();
const sunPos = new THREE.Vector3(0.2, -5, 12);

const Scenes = ({ children }: PropsWithChildren<unknown>) => {
  const { width, height } = useContainer();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    state.camera.position.lerp(v.set(0, -scroll.top / 100, 5), 0.2);
  });
  return (
    <>
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={["#212121", "black"]} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
        </meshBasicMaterial>
      </mesh>{" "}
      <Flex
        width={width}
        minHeight={height}
        position={[-width / 2, height / 2, 0]}
      >
        {/* <FlexDebug /> */}
        <Suspense>
          <Environment preset="studio" />
          <pointLight
            intensity={0.5}
            position={[0, 5, 3]}
            color="#e92fab"
            castShadow
          />
          <pointLight
            intensity={50}
            position={[10, 10, -5]}
            color="#0059ff"
            castShadow
          />
          <HomeScene />
          <Effects />
        </Suspense>
        {/* <OrbitControls /> */}
        {children}
      </Flex>
    </>
  );
};

// eslint-disable-next-line react/display-name
export const Background = memo(({ children }: PropsWithChildren<unknown>) => {
  return (
    <Wrapper>
      <Scenes {...{ children }} />
    </Wrapper>
  );
});
