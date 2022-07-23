import { Text as DreiText } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useReflow } from "@react-three/flex";
import { ComponentProps, useLayoutEffect, useRef } from "react";

type P = ComponentProps<typeof DreiText>;

export const Text = (props: P) => {
  const { invalidate } = useThree();
  const reflow = useReflow();
  const text = useRef<unknown>(null);
  useLayoutEffect(() => {
    if (text.current) {
      invalidate();
      reflow();
    }
  });
  return <DreiText {...props} ref={text} />;
};
