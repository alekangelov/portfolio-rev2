import { useSpring, animated } from "@react-spring/web";
import { useProgress } from "@react-three/drei";
import { useDelayedUnmount } from "@utils";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { lerp } from "utils/lerp";
import { loader } from "./index.css";

export const Loader = () => {
  const { progress: progressPrecursor } = useProgress();
  const loaded = progressPrecursor === 100;
  const [realHidden, setRealHidden] = useState(true);
  const [mounted, setMounted] = useState(true);
  const { animate, progress } = useSpring({
    to: {
      animate: realHidden ? 0 : 1,

      progress: progressPrecursor,
    },
  });
  useEffect(() => {
    if (!loaded) return;
    let otherId: NodeJS.Timeout;
    const id = setTimeout(() => {
      setRealHidden(false);
      otherId = setTimeout(() => {
        setMounted(false);
      }, 1000);
    }, 1000);
    return () => {
      clearTimeout(id);
      clearTimeout(otherId);
    };
  }, [loaded]);
  if (!mounted) return null;
  return (
    <div className={loader.wrapper}>
      <animated.div
        className={loader.spinner}
        style={{
          opacity: animate.to((e) => lerp(e, 0, 1, 1, 0)),
        }}
      >
        <animated.div
          className={loader.spinnerTrack}
          style={{
            width: progress.to((e) => `${e}%`),
          }}
        />
      </animated.div>
      <animated.div
        className={clsx(loader.background.base, loader.background.top)}
        style={{
          transform: animate.to((e) => `translate(0%, -${e * 100}%)`),
        }}
      />
      <animated.div
        className={clsx(loader.background.base, loader.background.bottom)}
        style={{
          transform: animate.to((e) => `translate(0%, ${e * 100}%)`),
        }}
      />
      <animated.div
        className={loader.inner}
        style={{
          opacity: animate.to((e) => lerp(e, 0, 1, 1, 0)),
        }}
      >
        <animated.div className={loader.text}>
          {progress.to((e) => `${e.toFixed(0)}%`)}
        </animated.div>
      </animated.div>
    </div>
  );
};
