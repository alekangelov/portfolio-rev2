import { SSAOPass } from "three-stdlib";
import { extend, useThree } from "@react-three/fiber";
import { Effects as EffectComposer } from "@react-three/drei";
import { Bloom } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";

extend({ SSAOPass });

type ComponentProps<T extends (...args: any) => any> = Parameters<T>[0];

export function Effects(props: ComponentProps<typeof EffectComposer>) {
  const { scene, camera } = useThree();
  return (
    <EffectComposer {...props}>
      {/* @ts-ignore */}
      {/* <sSAOPass
        args={[scene, camera, 100, 100]}
        kernelRadius={1.2}
        kernelSize={6}
        opacity={0.1}
      /> */}
      {props.children}
      <Bloom
        kernelSize={3}
        luminanceThreshold={0}
        luminanceSmoothing={0.4}
        intensity={0.6}
      />
      <Bloom
        kernelSize={KernelSize.HUGE}
        luminanceThreshold={0}
        luminanceSmoothing={0}
        intensity={0.5}
      />
    </EffectComposer>
  );
}
