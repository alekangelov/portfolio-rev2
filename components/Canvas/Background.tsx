import { memo, PropsWithChildren, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { HomeScene } from "./Scenes/HomeScene";
import Effects from "./Effects";
import { scroll } from "@stores";
import * as THREE from "three";

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
      // gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
      style={style as any}
      shadows
      dpr={dpr as any}
    >
      {children}
    </Canvas>
  );
};

const v = new THREE.Vector3();

const Scenes = ({ children }: PropsWithChildren<unknown>) => {
  useFrame((state) => {
    console.log(scroll.top);
    state.camera.position.lerp(v.set(0, scroll.top, 0), 1);
  });
  return (
    <>
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
