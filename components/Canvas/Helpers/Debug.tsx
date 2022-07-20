import { Box, useFlexSize } from "@react-three/flex";
import { useContainer } from "../hooks/useContainer";

export const BoxDebug = ({ color = "red" }) => {
  const [width, height] = useFlexSize();
  return (
    <mesh>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

export const FlexDebug = () => {
  const [width, heightX] = useFlexSize();
  const height = heightX || 25;
  return (
    <mesh position={[width / 2, -height / 2, -0.01]}>
      <planeGeometry args={[width, height, 12, 12]} />
      <meshBasicMaterial wireframe color="white" />
    </mesh>
  );
};
