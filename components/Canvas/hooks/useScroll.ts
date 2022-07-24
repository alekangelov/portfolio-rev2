import { useFrame } from "@react-three/fiber";
import { scroll } from "@stores";
import { useRef } from "react";
import { Group, Vector3 } from "three";
const v = new Vector3();

export const useScrollPosition = () => {
  const ref = useRef<Group>(null);
  useFrame(() => {
    const normalized = scroll.top / 100;
    ref.current?.position.set(0, normalized, 0);
  });
  return ref;
};
