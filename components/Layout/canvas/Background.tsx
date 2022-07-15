import React, {
  memo,
  PropsWithChildren,
  Suspense,
  useRef,
  useState,
} from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useContextBridge,
} from "@react-three/drei";
import { a, useTransition } from "@react-spring/three";
import { HomeScene } from "./Scenes/HomeScene";
import Effects from "./Effects";
import {
  Location,
  Route,
  Routes,
  UNSAFE_RouteContext,
  UNSAFE_LocationContext,
  UNSAFE_NavigationContext,
} from "react-router-dom";
import { AboutScene } from "./Scenes/AboutScene";

const style = {
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
};
const dpr = [1, 2];

const Wrapper = ({ children }: PropsWithChildren<unknown>) => {
  const ContextBridge = useContextBridge(
    UNSAFE_RouteContext,
    UNSAFE_LocationContext,
    UNSAFE_NavigationContext
  );
  return (
    <Canvas
      // gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
      style={style as any}
      shadows
      dpr={dpr as any}
    >
      <ContextBridge>{children}</ContextBridge>
    </Canvas>
  );
};

const Scenes = ({ children }: PropsWithChildren<unknown>) => {
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
        <Routes>
          <Route path="/" element={<HomeScene />} />
          <Route path="/about" element={<AboutScene />} />
        </Routes>
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
