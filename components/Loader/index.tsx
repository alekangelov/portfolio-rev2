import { useSpring } from "@react-spring/web";
import { useProgress } from "@react-three/drei";
import { useDelayedUnmount } from "@utils";
import { useLoading } from "stores/loading";
import { loader } from "./index.css";

export const Loader = () => {
  const { active, progress } = useProgress();
  const realActive = useDelayedUnmount(active, 500);
  const { animate } = useSpring({
    animate: realActive ? 1 : 0,
  });
  return (
    <div className={loader.wrapper}>
      <div className={loader.inner}>
        <div className={loader.text}>{progress.toFixed(2)}%</div>
        <div className={loader.spinner}></div>
      </div>
    </div>
  );
};
