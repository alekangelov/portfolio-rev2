import { useThree } from "@react-three/fiber";

const maxWidth = 1200;

export const useContainer = () => {
  const {
    viewport: { width, height },
  } = useThree();
  const fullWidth = width - width * 0.2;
  const actualWidth = Math.min(fullWidth, maxWidth);
  console.log({ width: actualWidth, viewport: { width, height } });
  return { width: actualWidth, viewport: { width, height } };
};
