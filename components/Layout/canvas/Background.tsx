import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  useDepthBuffer,
  ContactShadows,
  SpotLight,
  useHelper,
} from "@react-three/drei";
import { Model } from "./Model";
import * as THREE from "three";
import { PointLight } from "three";

const Scene = () => {
  const depthBuffer = useDepthBuffer({ size: 1024 });
  const light = useRef<THREE.PointLight>(null);
  useHelper(light, THREE.PointLightHelper, 0.5, "hotpink");

  return (
    <>
      {/* <SpotLight
        depthBuffer={depthBuffer}
        position={[6, 5, 3]}
        angle={0.5}
        intensity={50}
        color="white"
        castShadow={false}
      /> */}
      <pointLight intensity={3} ref={light} position={[2, 5, 5]} />

      <ContactShadows
        blur={3}
        position={[0, -3.5, 0]}
        scale={40 / 2}
        far={40 / 2}
        opacity={1}
      />
      <Model scale={3.5} position={[2.5, -3.5, 0]} rotation={[0, -0.7, 0]} />

      {/* <ambientLight  /> */}
    </>
  );
};

export function Background() {
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
      <Suspense fallback={null}>
        <Environment preset="lobby" />
        <Scene />
        <OrbitControls position={[0, 0, 0]} ref={ref} />
      </Suspense>
    </Canvas>
  );
}
