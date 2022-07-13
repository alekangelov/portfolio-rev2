import React, { memo, Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Effects } from "./Effects";
import { HomeScene } from "./Scenes/HomeScene";

const style = {
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
};

const dpr = [1, 2];
// eslint-disable-next-line react/display-name
export const Background = memo(({ children }: any) => {
  const ref = useRef<any>();
  return (
    <Canvas style={style as any} shadows dpr={dpr as any} camera={ref.current}>
      <Suspense>
        <Environment preset="studio" />
        <HomeScene />
      </Suspense>
      <OrbitControls />
      <Effects />

      {children}
    </Canvas>
  );
});
