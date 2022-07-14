import { Physics } from "@react-three/cannon";
import Bust from "../Models/Bust";
import { PointLight } from "three";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";
import { useRef } from "react";
import { ContactShadows } from "@react-three/drei";

const AnimatedBust = animated(Bust);
const v = new THREE.Vector3();
export const HomeScene = () => {
  const light = useRef<PointLight>(null);
  return (
    <group position={[0, -3, 0]}>
      <pointLight
        ref={light}
        intensity={0.5}
        position={[0, 5, 3]}
        color="#e92fab"
        castShadow
      />
      <pointLight
        ref={light}
        intensity={50}
        position={[10, 10, -5]}
        color="#0059ff"
        castShadow
      />

      <AnimatedBust position={[3, 0, 0]} />
      {/* <ContactShadows
        position={[0, -0.5, 0]}
        blur={10}
        far={100}
        width={2}
        height={2}
      /> */}
    </group>
  );
};
