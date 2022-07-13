import React, { memo, Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { HomeScene } from "./Scenes/HomeScene";
import Effects from "./Effects";

const style = {
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
};

const dpr = [1, 1];
// eslint-disable-next-line react/display-name
export const Background = memo(({ children }: any) => {
  const ref = useRef<any>();
  return (
    <Canvas
      // gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
      style={style as any}
      shadows
      dpr={dpr as any}
      camera={ref.current}
    >
      <fog color="#ffffff" attach="fog" near={8} far={1000} />
      <Suspense>
        <Environment preset="studio" />
        <HomeScene />
        <Effects />
      </Suspense>
      {/* <OrbitControls /> */}
      {children}
    </Canvas>
  );
});
