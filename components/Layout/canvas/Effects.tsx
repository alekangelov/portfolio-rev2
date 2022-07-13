import { extend, useThree } from "@react-three/fiber";
import {
  BloomPass,
  SSAOPass,
  RenderPass,
  UnrealBloomPass,
  GlitchPass,
  FilmPass,
} from "three-stdlib";
import { Effects as EffectComposer } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

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
  const ref = useRef();
  const b = useRef();
  console.log({ ref, b });
  const { gl, scene, camera } = useThree();
  // return null;
  return (
    <EffectComposer
      renderIndex={1}
      disableGamma={false}
      disableRenderPass={false}
      disableRender={false}
    >
      <renderPass ref={b} clear clearAlpha={1} scene={scene} camera={camera} />
      {/* <bloomPass ref={ref} attachArray="passes" args={[2, 100, 10, 512]} />{" "} */}
      <filmPass attachArray="passes" args={[1, 0, 0, false]} />
    </EffectComposer>
  );
}
