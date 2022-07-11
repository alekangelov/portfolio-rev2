import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  Html,
  OrbitControls,
  SpotLight,
  Stage,
  useDepthBuffer,
} from "@react-three/drei";
import Model, { Bg } from "./Model";

const Scene = () => {
  const depthBuffer = useDepthBuffer({ size: 256 });

  return (
    <Float>
      {/* <SpotLight
        penumbra={0.1}
        depthBuffer={depthBuffer}
        position={[1, 2, 3]}
        intensity={1}
        angle={0.5}
        color="#ffffff"
        castShadow
      /> */}
      <Environment preset="lobby" />
      <Model />
      <ambientLight intensity={0} />
    </Float>
  );
};

export function Background({ children }: { children: React.ReactNode }) {
  const ref = useRef<any>();
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
      shadows
      dpr={[1, 2]}
      camera={ref.current}
    >
      <Bg />
      <Suspense fallback={null}>
        <Scene />
        <OrbitControls position={[0, 0, 0]} ref={ref} />
      </Suspense>
      <Html position={[0, 0, 0]}>{children}</Html>
    </Canvas>
  );
}
