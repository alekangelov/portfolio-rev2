import { useFlexSize } from "@react-three/flex";
import { scroll } from "@stores";
import { useLayoutEffect } from "react";

export const HeightReporter = ({
  name,
}: {
  name: keyof typeof scroll["height"];
}) => {
  const [_, height] = useFlexSize();
  useLayoutEffect(() => {
    scroll.height[name] = height;
  }, [height]);
  return null;
};
