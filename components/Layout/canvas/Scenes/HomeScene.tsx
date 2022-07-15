import { Physics } from "@react-three/cannon";
import Bust from "../Models/Bust";
import { PointLight } from "three";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";
import { useRef } from "react";
import { ContactShadows } from "@react-three/drei";
import { SceneProps } from "./types";

const AnimatedBust = animated(Bust);
const v = new THREE.Vector3();
export const HomeScene = ({}: SceneProps) => {
  return (
    <animated.group position={[0, -3, 0]}>
      <AnimatedBust position={[3, 0, 0]} />
      {/* <ContactShadows
        position={[0, -0.5, 0]}
        blur={10}
        far={100}
        width={2}
        height={2}
      /> */}
    </animated.group>
  );
};
