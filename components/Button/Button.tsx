import clsx from "clsx";
import { createElement, forwardRef, Ref, useEffect } from "react";
import { useRef } from "react";
import { mergeRefs } from "@utils";
import { createRipple } from "./ripple";
import { ButtonProps, button } from "./styles.css";

// eslint-disable-next-line react/display-name
export const Button = forwardRef(
  (
    {
      size,
      color,
      as = "button",
      ...props
    }: ButtonProps & {
      as?: keyof JSX.IntrinsicElements;
    } & JSX.IntrinsicElements["button"],
    outerRef: Ref<HTMLButtonElement>
  ) => {
    const ref = useRef<HTMLButtonElement>(null);
    useEffect(() => {
      const currentRef = ref.current;
      if (!currentRef) return;
      const { listener, cleanup } = createRipple();
      currentRef.addEventListener("mousedown", listener);
      return () => {
        currentRef.removeEventListener("mousedown", listener);
        cleanup();
      };
    }, [ref]);
    return createElement(as, {
      ...props,
      ref: mergeRefs([ref, outerRef]),
      className: clsx(
        button({ size, color }),
        "ripple-target",
        props.className
      ),
    });
  }
);
