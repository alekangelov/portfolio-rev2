import React, { Suspense, useRef } from "react";
import { Canvas, GroupProps, useFrame, useThree } from "@react-three/fiber";
import {
  useDepthBuffer,
  ContactShadows,
  useHelper,
  Sky,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import Model from "./Model";
import * as THREE from "three";
import { Group } from "three";
import { Effects } from "./Effects";
import { Physics } from "@react-three/cannon";

// import { Bloom, EffectComposer } from "@react-three/postprocessing";
// import { KernelSize } from "postprocessing";

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
      <pointLight intensity={1} ref={light} position={[10, 5, 5]} castShadow />
      <ContactShadows
        blur={3}
        position={[0, -3.5, 0]}
        scale={40 / 2}
        far={40 / 2}
        opacity={0.5}
      />
      <Physics>
        <Model scale={0.3} position={[5, -1.2, -4]} rotation={[0, 3, 0]} />
      </Physics>
      {/* <ambientLight  /> */}
    </>
  );
};

function Rig({ ...props }: GroupProps) {
  const ref = useRef<Group>(null);
  const vec = new THREE.Vector3();
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05);
    if (!ref.current) return;
    ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1);
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (-mouse.x * Math.PI) / 20,
      0.1
    );
  });
  return <group ref={ref} {...props} />;
}

export function Background() {
  const ref = useRef<any>();
  if (typeof window === "undefined") return;
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
        <Environment preset="studio" />
        <Scene />

        <OrbitControls position={[0, 0, 0]} ref={ref} />
        {/* <EffectComposer multisampling={8}>
          <Bloom
            kernelSize={3}
            luminanceThreshold={0}
            luminanceSmoothing={0.4}
            intensity={0.6}
          />
          <Bloom
            kernelSize={KernelSize.HUGE}
            luminanceThreshold={0}
            luminanceSmoothing={0}
            intensity={0.5}
          />
        </EffectComposer> */}
        <Effects />
      </Suspense>
    </Canvas>
  );
}
