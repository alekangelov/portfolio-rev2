import { extend, useFrame, useThree } from "@react-three/fiber";
import {
  BloomPass,
  SSAOPass,
  RenderPass,
  GlitchPass,
  FilmPass,
  UnrealBloomPass,
  FXAAShader,
  ShaderPass,
} from "three-stdlib";
import { useRef } from "react";
import { EffectPass } from "./Helpers/EffectPass";
import { WaterPass } from "./Helpers/WaterPass";
import { scroll } from "@stores";
import { Effects as EffectsComposer } from "@react-three/drei";
import * as THREE from "three";

extend({
  BloomPass,
  UnrealBloomPass,
  SSAOPass,
  RenderPass,
  FilmPass,
  GlitchPass,
  WaterPass,
  EffectPass,
  ShaderPass,
});

export default function Effects() {
  // useEffect(
  //   () => void composer.current.setSize(size.width, size.height),
  //   [size]
  // );
  // useFrame(() => composer.current.render(), 2);
  const b = useRef<any>();
  const { scene, camera, size, gl } = useThree();
  const composer = useRef<any>(null);
  const effect = useRef<any>(null);
  const water = useRef<any>(null);
  const bloom = useRef<any>(null);
  let last = scroll.top;
  // return null;
  useFrame(() => {
    const { top } = scroll;
    if (!effect.current || !water.current || !bloom.current) return;
    effect.current.factor = THREE.MathUtils.lerp(
      effect.current.factor,
      (top - last) / -30,
      0.1
    );
    bloom.current.strength = THREE.MathUtils.lerp(
      bloom.current.strength,
      Math.abs((top - last) / 100),
      0.1
    );
    water.current.factor = THREE.MathUtils.lerp(
      water.current.factor,
      Math.abs((top - last) / 30),
      0.1
    );
    last = top;
    // gl.autoClear = true;
    // composer.current.render();
  }, 1);
  return (
    <EffectsComposer ref={composer}>
      <renderPass
        {...{ attachArray: "passes" }}
        ref={b}
        clear
        clearAlpha={1}
        scene={scene}
        camera={camera}
      />
      {/* @ts-ignore */}
      <sSAOPass
        attachArray="passes"
        args={[scene, camera, 1024, 1024]}
        kernelRadius={0.1}
        maxDistance={0.4}
      />
      <shaderPass
        {...{ attachArray: "passes" }}
        args={[FXAAShader]}
        material-uniforms-resolution-value={[1 / size.width, 1 / size.height]}
      />
      {/* @ts-ignore */}
      <filmPass attachArray="passes" args={[1, 0, 0, 0]} />
      {/* @ts-ignore */}
      <unrealBloomPass
        attachArray="passes"
        ref={bloom}
        args={[undefined, 0.3, 1.6, 0.5]}
      />
      {/* @ts-ignore */}
      <effectPass attachArray="passes" ref={effect} />
      {/* @ts-ignore */}
      <waterPass attachArray="passes" ref={water} />
      {/* <unrealBloomPass args={[1, 0.25, 3, 0.2]} /> */}
    </EffectsComposer>
  );
}
