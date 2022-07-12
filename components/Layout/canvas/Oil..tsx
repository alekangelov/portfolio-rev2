import { Displace, LayerMaterial } from "lamina";
import { useFrame } from "@react-three/fiber";
import { Displace as VDisplace } from "lamina/vanilla";

import React, { useRef } from "react";

function Oil() {
  const displace = useRef<any>(null);
  useFrame((state, delta) => {
    if (!displace.current) return;
    displace.current.offset.set(state.clock.elapsedTime / 5, 0, 0);
    displace.current.strength = 1 + Math.sin(state.clock.elapsedTime);
  });
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[20, 20, 1]}
      position={[0, 0, 0]}
    >
      <planeGeometry args={[1, 1, 128, 128]} />
      <LayerMaterial
        lighting="standard"
        roughness={0.175}
        metalness={0}
        color="#555"
      >
        <Displace ref={displace} type="simplex" mapping="world" scale={0.25} />
      </LayerMaterial>
    </mesh>
  );
}
