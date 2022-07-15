import { extend, useThree } from "@react-three/fiber";
import {
  BloomPass,
  SSAOPass,
  RenderPass,
  GlitchPass,
  FilmPass,
} from "three-stdlib";
import { Effects as EffectComposer } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { UnrealBloomPass } from "./Helpers/BloomPass";

extend({
  BloomPass,
  UnrealBloomPass,
  SSAOPass,
  RenderPass,
  FilmPass,
  GlitchPass,
});

export default function Effects() {
  // useEffect(
  //   () => void composer.current.setSize(size.width, size.height),
  //   [size]
  // );
  // useFrame(() => composer.current.render(), 2);
  const b = useRef<any>();
  const { scene, camera, size } = useThree();
  // return null;
  return (
    <EffectComposer
      renderIndex={1}
      disableGamma={false}
      disableRenderPass={false}
      disableRender={false}
    >
      <renderPass ref={b} clear clearAlpha={1} scene={scene} camera={camera} />
      {/* @ts-ignore */}
      {/* <filmPass attachArray="passes" args={[0.3, 0, 0, false]} /> */}
      {/* @ts-ignore */}
      {/* <unrealBloomPass attachArray="passes" args={[aspect, 5, 0.5, 0.9]} /> */}
    </EffectComposer>
  );
}
