import { useSphere } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useEventListener } from "usehooks-ts";

const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "#3d3d3d",
  roughness: 0,
  envMapIntensity: 1,
});

export function Clump({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
  ...props
}) {
  const texture = useTexture("/cross.jpg");
  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
  }));
  useFrame((state) => {
    for (let i = 0; i < 60; i++) {
      // Get current whereabouts of the instanced sphere
      (ref.current as any)?.getMatrixAt(i, mat);
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      api
        .at(i)
        .applyForce(
          vec
            .setFromMatrixPosition(mat)
            .normalize()
            .multiplyScalar(-50)
            .toArray(),
          [0, 0, 0]
        );
    }
  });
  return (
    <instancedMesh
      ref={ref as any}
      castShadow
      receiveShadow
      args={[null, null, 60] as any}
      geometry={sphereGeometry}
      material={baubleMaterial}
      material-map={texture}
    />
  );
}

export function Pointer() {
  const viewport = useThree((state) => state.viewport);
  const [ref, api] = useSphere(() => ({
    type: "Kinematic",
    args: [6],
    position: [0, 0, 0],
  }));
  useFrame((state) => {
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      0
    );
  });
  return null;
}
