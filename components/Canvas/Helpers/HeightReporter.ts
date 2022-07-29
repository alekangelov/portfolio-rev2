import { useThree } from "@react-three/fiber";
import { useFlexSize } from "@react-three/flex";
import { scroll } from "@stores";
import { useEffect, useMemo, useRef, useState } from "react";
import { lerp } from "utils/lerp";

export const HeightReporter = ({
  i,
  factor = 1,
}: {
  i: number;
  factor?: number;
}) => {
  const [_, height] = useFlexSize();
  console.log(height);
  useEffect(() => {
    scroll.height.set((prev) => {
      const x = [...prev];
      x[i] = height * factor;
      return x;
    });
  }, [height]);
  return null;
};

export const useDomHeight = () => {
  const [canvasHeight, setCanvasHeight] = useState(0);
  const { clientHeight } = document.documentElement;
  const height = useThree((state) => state.viewport.height);
  const actualDomHeight = useMemo(() => {
    return lerp(canvasHeight, 0, height, 0, clientHeight);
  }, [canvasHeight, height, clientHeight]);
  useEffect(() => {
    const unsubscribe = scroll.height.subscribe((e) => {
      setCanvasHeight(e.reduce((a, b) => a + b, 0));
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return actualDomHeight;
};
