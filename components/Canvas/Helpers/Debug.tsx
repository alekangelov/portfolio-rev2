import { useFlexSize } from "@react-three/flex";
import { useContainer } from "../hooks/useContainer";

export const BoxDebug = ({ color = "red" }) => {
  const [width, height] = useFlexSize();
  return (
    <mesh>
      <planeGeometry args={[width, height, 2, 2]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

export const FlexDebug = () => {
  const { width, height } = useContainer();
  return (
    <mesh position={[width / 2, -height / 2, -0.01]}>
      <planeGeometry args={[width, height, 2, 2]} />
      <meshBasicMaterial wireframe color="white" />
    </mesh>
  );
};
