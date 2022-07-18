import { extend, useThree } from "@react-three/fiber";
import {
  BloomPass,
  SSAOPass,
  RenderPass,
  GlitchPass,
  FilmPass,
  EffectComposer as EC,
  Water,
  UnrealBloomPass,
} from "three-stdlib";
import { Effects as EffectComposer } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { EffectPass } from "./Helpers/EffectPass";
import { WaterPass } from "./Helpers/WaterPass";
extend({
  BloomPass,
  UnrealBloomPass,
  SSAOPass,
  RenderPass,
  FilmPass,
  GlitchPass,
  WaterPass,
  EffectPass,
});

export default function Effects() {
  // useEffect(
  //   () => void composer.current.setSize(size.width, size.height),
  //   [size]
  // );
  // useFrame(() => composer.current.render(), 2);
  const b = useRef<any>();
  const { scene, camera, size, gl } = useThree();
  const composer = useRef<EC>(null);
  const effect = useRef<EffectPass>(null);
  const water = useRef<WaterPass>(null);
  // return null;

  return (
    <EffectComposer
      ref={composer}
      renderIndex={1}
      disableGamma={false}
      disableRenderPass={false}
      disableRender={false}
    >
      <renderPass ref={b} clear clearAlpha={1} scene={scene} camera={camera} />
      <unrealBloomPass args={[1, 0.25, 3, 0.2]} />
    </EffectComposer>
  );
}
