import { useSpring } from "@react-spring/web";
import { useProgress } from "@react-three/drei";
import { useDelayedUnmount } from "@utils";
import { loader } from "./index.css";

export const Loader = () => {
  const { progress } = useProgress();
  const hidden = progress === 100;
  const realHidden = useDelayedUnmount(hidden, 500);
  const { animate } = useSpring({
    animate: realHidden ? 1 : 0,
  });
  return !realHidden ? (
    <div className={loader.wrapper}>
      <div className={loader.spinner}>
        <div
          className={loader.spinnerTrack}
          style={{
            width: `${progress.toFixed(0)}%`,
          }}
        />
      </div>
      <div className={loader.background[0]} />
      <div className={loader.background[0]} />
      <div className={loader.inner}>
        <div className={loader.text}>{progress.toFixed(2)}%</div>
      </div>
    </div>
  ) : null;
};
