import React, {
  memo,
  PropsWithChildren,
  Suspense,
  useRef,
  useState,
} from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { HomeScene } from "./Scenes/HomeScene";
import Effects from "./Effects";
import { Location } from "react-router-dom";

const style = {
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
};

const dpr = [1, 1];
// eslint-disable-next-line react/display-name
export const Background = memo(
  ({ children, location }: PropsWithChildren<{ location: Location }>) => {
    const ref = useRef<any>();
    return (
      <Canvas
        // gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        style={style as any}
        shadows
        dpr={dpr as any}
        camera={ref.current}
      >
        <Suspense>
          <Environment preset="studio" />
          <HomeScene />
          <Effects />
        </Suspense>
        <OrbitControls />
        {children}
      </Canvas>
    );
  }
);
