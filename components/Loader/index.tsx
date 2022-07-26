import { useSpring, animated } from "@react-spring/web";
import { useProgress } from "@react-three/drei";
import { useDelayedUnmount } from "@utils";
import { loader } from "./index.css";

export const Loader = () => {
  const { progress } = useProgress();
  const hidden = progress === 100;
  const realHidden = useDelayedUnmount(hidden, 1000);
  const { animate, progress: animatedProgress } = useSpring({
    to: {
      animate: realHidden ? 1 : 0,
      progress: progress,
    },
  });
  console.log(animatedProgress.to((e) => `${e}%`));
  return (
    <div className={loader.wrapper}>
      <div className={loader.spinner}>
        <animated.div
          className={loader.spinnerTrack}
          style={{
            width: animatedProgress.to((e) => `${e}%`),
          }}
        />
      </div>
      <animated.div
        className={loader.background[0]}
        style={{
          transform: animate.to((e) => `translate(${e * 100}%, 0)`),
        }}
      />
      <animated.div
        className={loader.background[0]}
        style={{
          transform: animate.to((e) => `translate(${e * -100}%, 0)`),
        }}
      />
      <div className={loader.inner}>
        <div className={loader.text}>{progress.toFixed(2)}%</div>
      </div>
    </div>
  );
};
