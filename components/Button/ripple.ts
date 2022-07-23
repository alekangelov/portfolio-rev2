import {
  rippleAnimation,
  rippleVars,
  ripple as rippleClass,
} from "./styles.css";

export const createRipple = (animationDuration = 0.2) => {
  let timeout: NodeJS.Timeout;
  return {
    listener: (e: MouseEvent) => {
      clearTimeout(timeout);
      const maybeTarget = e.target as HTMLElement;
      const target = maybeTarget.closest(".ripple-target");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement("span");
      ripple.classList.add(rippleClass);
      ripple.style.setProperty(rippleVars.top, `${y}px`);
      ripple.style.setProperty(rippleVars.left, `${x}px`);
      ripple.style.setProperty(
        "animation",
        `${rippleAnimation} ${animationDuration}s ease-out`
      );
      target.appendChild(ripple);
      setTimeout(() => {
        target.removeChild(ripple);
      }, animationDuration * 1000);
    },
    cleanup: () => {
      clearTimeout(timeout);
    },
  };
};
