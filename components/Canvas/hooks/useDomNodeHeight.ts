import { scrollHeights, useObservable } from "@stores";
import { useMemo } from "react";
import { lerp } from "utils/lerp";
import { useContainer } from "./useContainer";

export const useDomNodeHeight = (key: keyof typeof scrollHeights) => {
  const [val] = useObservable(scrollHeights[key]);
  return val;
};

export const useDomNodeThreeHeight = (key: keyof typeof scrollHeights) => {
  const [val] = useObservable(scrollHeights[key]);
  const { height } = useContainer();
  return useMemo(
    () => lerp(val, 0, document.body.clientHeight, 0, height),
    [val, height]
  );
};
