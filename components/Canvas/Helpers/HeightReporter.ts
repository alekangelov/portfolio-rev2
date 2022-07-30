import { useThree } from "@react-three/fiber";
import { useFlexSize } from "@react-three/flex";
import { scroll } from "@stores";
import { useEffect, useMemo, useRef, useState } from "react";
import { useEventListener } from "usehooks-ts";
import { lerp } from "utils/lerp";

export const HeightReporter = ({
  i,
  factor = 1,
}: {
  i: number;
  factor?: number;
}) => {
  const [_, height] = useFlexSize();
  useEffect(() => {
    scroll.height.set((prev) => {
      const x = [...prev];
      x[i] = height * factor;
      return x;
    });
  }, [height]);
  return null;
};

const useWindowSize = () => {
  const [size] = useState(window.innerHeight);
  return size;
};
const useHeight = () => {
  const x = useThree((state) => state.viewport.height);
  const [height] = useState(x);
  return height;
};

export const useDomHeight = () => {
  const [canvasHeight, setCanvasHeight] = useState(0);
  const height = useHeight();
  const clientHeight = useWindowSize();
  const actualDomHeight = useMemo(() => {
    console.log({ canvasHeight, height, clientHeight });
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
  useEffect(() => {
    console.log("TRIGGERED:", actualDomHeight);
    document.body.style.height = `${actualDomHeight}px`;
    // scroll.maxHeight = actualDomHeight;
  }, [actualDomHeight]);
};
