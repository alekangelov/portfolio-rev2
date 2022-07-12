import { extend, useThree } from "@react-three/fiber";
import { Effects as EffectComposer } from "@react-three/drei";

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
    </EffectComposer>
  );
}
