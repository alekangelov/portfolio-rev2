import { useAspect } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export const useContainer = () => {
  const {
    viewport: { width, height, aspect },
  } = useThree();
  useAspect(width, height, 1);
  return {
    width: width * 0.9,
    height,
  };
};
