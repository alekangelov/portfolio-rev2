import { useFrame } from "@react-three/fiber";
import { scroll } from "@stores";
import { useRef } from "react";
import { Group, Vector3 } from "three";
const v = new Vector3();

export const useScrollPosition = () => {
  const ref = useRef<any>(null);
  useFrame((state) => {
    const normalized = scroll.top / 100;
    state.camera.position.lerp(v.set(0, -normalized, 5), 0.1);
  });
  return ref;
};
