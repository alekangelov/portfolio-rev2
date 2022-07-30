import { useThree } from "@react-three/fiber";

export const useContainer = () => {
  const {
    viewport: { width, height, aspect },
  } = useThree();
  return {
    width: width * 0.9,
    height,
  };
};
