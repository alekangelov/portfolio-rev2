import { useThree } from "@react-three/fiber";

const normaliationFactor = 12.5;

const fudgedLerp = (
  num: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  // this shouldn't be too expensive to calculate
  // maybe rewrite in rust
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

function getMaxWidth(maxWidth: number) {
  // get the difference between maxwidth of container and viewport
  // and lerp it with the viewport width
  // should consistently get the max container width in three units
  const margin = window.innerWidth - 1200;
  return fudgedLerp(margin, 0, window.innerWidth, 0, maxWidth);
}

function getOnePercent(maxWidth: number) {
  return maxWidth / 100;
}

export const useContainer = () => {
  const { viewport, size } = useThree();
  const { width: viewportWidth, height: viewportHeight, aspect } = viewport;
  const marginedWidth = viewportWidth - viewportWidth * 0.1;
  const x = getMaxWidth(viewportWidth);
  const y = viewportWidth - x;
  const width = Math.min(marginedWidth, y);
  const percent = getOnePercent(width);
  return { width, viewport, percent };
};
