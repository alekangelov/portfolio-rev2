import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { scroll } from "@stores";
import { useRef } from "react";
import { Group, Vector3 } from "three";
const v = new Vector3();

export const useScrollPosition = () => {
  const ref = useRef<Group>(null);
  useFrame(() => {
    const normalized = scroll.top.getValue() / 100;
    console.log(normalized);
    ref.current?.position.set(0, normalized, 0);
  });
  return ref;
};
