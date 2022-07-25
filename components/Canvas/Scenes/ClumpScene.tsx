import { useSphere } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useEventListener } from "usehooks-ts";
import { PlasmaMaterial } from "../Materials/PlasmaMaterial";

const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "#3d3d3d",
  roughness: 0.5,
  envMapIntensity: 1,
  bumpScale: 0.1,
});

export function Clump({
  mat = new THREE.Matrix4(),
  vec = new THREE.Vector3(),
  ...props
}) {
  const [texture, texture2, bump] = useTexture([
    "/cross2.jpg",
    "/cross.jpg",
    "/cross_bump.jpg",
  ]);
  const getTexture = useRef(Math.random() > 0.5);
  const [ref, api] = useSphere(() => ({
    args: [1],
    mass: 1,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), rfs(20), rfs(20)],
  }));

  useFrame(() => {
    for (let i = 0; i < 20; i++) {
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
      args={[null, null, 20] as any}
      geometry={sphereGeometry}
      onClick={(e) => {
        getTexture.current = !getTexture.current;
      }}
      material={baubleMaterial}
      material-map={getTexture.current ? texture : texture2}
      material-bumpMap={bump}
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
