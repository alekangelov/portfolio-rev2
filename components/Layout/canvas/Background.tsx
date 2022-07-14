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

const Scenes = ({
  children,
  location,
}: PropsWithChildren<{ location: Location }>) => {
  const transition = useTransition(location, {
    from: {
      // scale: 0,
      position: [0, 0, 0],
      opacity: 0,
    },
    enter: {
      // scale: 1,
      position: [0, 0, 0],
      opacity: 1,
    },
    leave: {
      // scale: 0,
      position: [0, -10, 0],
      opacity: 0,
    },
  });
  return (
    <>
      <Suspense>
        <Environment preset="studio" />
        {transition((props, location) => (
          <a.group {...(props as any)}>
            <Routes location={location}>
              <Route path="/" element={<HomeScene />} />
              <Route path="/about" element={<AboutScene />} />
            </Routes>
          </a.group>
        ))}
        <Effects />
      </Suspense>
      {/* <OrbitControls /> */}
      {children}
    </>
  );
};

const dpr = [1, 1];
// eslint-disable-next-line react/display-name
export const Background = memo(
  ({ children, location }: PropsWithChildren<{ location: Location }>) => {
    return (
      <Wrapper>
        <Scenes {...{ children, location }} />
      </Wrapper>
    );
  }
);
