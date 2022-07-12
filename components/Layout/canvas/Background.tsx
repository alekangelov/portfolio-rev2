import React, { memo, Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useDepthBuffer,
  ContactShadows,
  useHelper,
  OrbitControls,
  Environment,
  SpotLight,
  Plane,
  Center,
  Float,
} from "@react-three/drei";
import { Effects } from "./Effects";
import { Physics } from "@react-three/cannon";
import Bust from "./Bust";
import { Light, PointLight } from "three";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";

const AnimatedBust = animated(Bust);

const Scene = () => {
  const light = useRef<PointLight>(null);
  // useHelper(light, THREE.PointLightHelper, 0.5, "hotpink");\
  const [{ scale }, api] = useSpring(() => ({
    scale: 1,
  }));
  return (
    <group position={[0, -3, 0]}>
      {/* <pointLight
        ref={light}
        intensity={0.5}
        position={[0, 5, 3]}
        color="#e92fab"
        castShadow
      /> */}
      <pointLight
        ref={light}
        intensity={50}
        position={[10, 10, -5]}
        color="#0059ff"
        castShadow
      />
      <AnimatedBust
        onClick={() => {
          api.set({
            scale: 1.5,
          });
          api.start({
            scale: 1,
          });
        }}
        scale={scale}
        position={[3, 0, 0]}
      />
      <ContactShadows
        position={[0, -0.5, 0]}
        blur={10}
        far={100}
        width={2}
        height={2}
      />
      <Physics iterations={10} allowSleep={false}></Physics>
    </group>
  );
};

// eslint-disable-next-line react/display-name
export const Background = memo(() => {
  const ref = useRef<any>();
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        // pointerEvents: "none",
      }}
      shadows
      dpr={[1, 2]}
      camera={ref.current}
    >
      <Rig />
      <Environment preset="studio" />
      <Scene />

      {/* <OrbitControls position={[0, 0, 0]} ref={ref} /> */}
      <Effects />
    </Canvas>
  );
});

function Rig({ v = new THREE.Vector3() }) {
  var vec = new THREE.Vector3(); // create once and reuse
  var pos = new THREE.Vector3(); // create once and reuse
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 3, state.mouse.y / 3, 5),
      0.05
    );
  });
}
