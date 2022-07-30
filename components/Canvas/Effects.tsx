import { extend, useFrame, useThree } from "@react-three/fiber";
import {
  BloomPass,
  SSAOPass,
  RenderPass,
  GlitchPass,
  FilmPass,
  UnrealBloomPass,
  FXAAShader,
  ColorCorrectionShader,
  ShaderPass,
} from "three-stdlib";
import { useRef } from "react";
import { EffectPass } from "./Helpers/EffectPass";
import { WaterPass } from "./Helpers/WaterPass";
import { scroll, useObservable } from "@stores";
import {
  Effects as EffectsComposer,
  useDetectGPU,
  useScroll,
} from "@react-three/drei";
import * as THREE from "three";
import { useResponsiveValue } from "@utils";

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
  const gpu = useDetectGPU();
  const { delta } = useScroll();

  // return null;
  useFrame(() => {
    if (gpu.tier <= 2 || gpu.isMobile) return;

    if (!effect.current || !water.current || !bloom.current) return;
    effect.current.factor = THREE.MathUtils.lerp(
      effect.current.factor,
      delta,
      0.1
    );
    bloom.current.strength = THREE.MathUtils.lerp(
      bloom.current.strength,
      Math.abs(delta) + 0.15,
      0.1
    );
    water.current.factor = THREE.MathUtils.lerp(
      water.current.factor,
      Math.abs(delta),
      0.1
    );
    // gl.autoClear = true;
    // composer.current.render();
  }, 1);
  if (gpu.tier <= 2 || gpu.isMobile)
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
      </EffectsComposer>
    );
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
      {/* <sSAOPass
        attachArray="passes"
        args={[scene, camera, 1024, 1024]}
        kernelRadius={0.1}
        maxDistance={0.4}
      /> */}
      {/* <shaderPass
        {...{ attachArray: "passes" }}
        args={[FXAAShader]}
        material-uniforms-resolution-value={[1 / size.width, 1 / size.height]}
      /> */}
      {/* @ts-ignore */}
      <filmPass attachArray="passes" args={[0.3, 0, 0, 0]} />
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
      {/* @ts-ignore */}
      {/* <sSAOPass
        args={[scene, camera, 100, 100]}
        kernelRadius={1.2}
        kernelSize={0}
      /> */}

      {/* <unrealBloomPass args={[1, 0.25, 3, 0.2]} /> */}
    </EffectsComposer>
  );
}
