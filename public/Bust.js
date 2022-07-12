/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/bust2/bust.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.67, 0.79, 0.24]}>
        <mesh geometry={nodes.Object_2_cell105.geometry} material={materials.Outer} />
        <mesh geometry={nodes.Object_2_cell105_1.geometry} material={materials.Inner} />
      </group>
      <group position={[0.59, 3.77, -0.36]}>
        <mesh geometry={nodes.Object_2_cell106.geometry} material={materials.Outer} />
        <mesh geometry={nodes.Object_2_cell106_1.geometry} material={materials.Inner} />
      </group>
      <group position={[-0.36, 5.09, 0.05]}>
        <mesh geometry={nodes.Object_2_cell099.geometry} material={materials.Outer} />
        <mesh geometry={nodes.Object_2_cell099_1.geometry} material={materials.Inner} />
      </group>
      <group position={[-0.18, 3.23, 0.49]}>
        <mesh geometry={nodes.Object_2_cell102.geometry} material={materials.Outer} />
        <mesh geometry={nodes.Object_2_cell102_1.geometry} material={materials.Inner} />
      </group>
      <group position={[-0.54, 1.25, -0.21]}>
        <mesh geometry={nodes.Object_2_cell103.geometry} material={materials.Outer} />
        <mesh geometry={nodes.Object_2_cell103_1.geometry} material={materials.Inner} />
      </group>
    </group>
  )
}

useGLTF.preload('/bust2/bust.gltf')
