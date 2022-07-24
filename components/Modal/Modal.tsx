import { useDelayedUnmount } from "@utils";
import { PropsWithChildren, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useEventListener } from "usehooks-ts";
import { Portal } from "./Helpers";
import { animateIn, animateOut, modal } from "./styles.css";

type P = PropsWithChildren<{
  title?: string;
  visible?: boolean;
  onVisibilityChange?: (newVisible: boolean) => void;
}>;

type C = PropsWithChildren<{
  visible?: boolean;
  onCancel?: () => void;
}>;

const getAnimation = (visible?: boolean) => {
  let animation = animateOut;
  if (visible) animation = animateIn;
  return `${animation} 200ms ease-in-out`;
};

const Mask = ({ children, visible, onCancel }: C) => {
  return (
    <div
      className={modal.mask}
      style={{
        animation: getAnimation(visible),
      }}
      onClick={onCancel}
    >
      {children}
    </div>
  );
};

export const Modal = ({ visible, title, onVisibilityChange, children }: P) => {
  const [isVisible, setIsVisible] = useState(visible || false);
  const realVisible = useDelayedUnmount(isVisible, 200);
  useEffect(() => {
    if (visible === undefined) return;
    setIsVisible(visible);
  }, [visible]);

  useEffect(() => {
    if (onVisibilityChange) onVisibilityChange(isVisible);
    if (visible) {
      document.body.classList.add("blocker");
    }
    if (!visible) {
      document.body.classList.remove("blocker");
    }
  }, [isVisible]);
  useEventListener("keydown", (e) => {
    if (isVisible && e.key.toUpperCase() === "ESCAPE") {
      setIsVisible(false);
    }
  });
  return (
    <Portal>
      {realVisible && (
        <Mask onCancel={() => setIsVisible(false)} visible={isVisible}>
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className={modal.container}
          >
            <div className={modal.header}>
              <div className={modal.title}>{title}</div>
              <button
                onClick={() => setIsVisible(false)}
                className={modal.close}
              >
                <MdClose color="white" />
              </button>
            </div>
            <div className={modal.content}>{children}</div>
          </div>
        </Mask>
      )}
    </Portal>
  );
};
