import clsx from "clsx";
import { fullscreen } from "./style.css";

export const FullScreen = (props: JSX.IntrinsicElements["div"]) => {
  return <div {...props} className={clsx(fullscreen, props.className)} />;
};
