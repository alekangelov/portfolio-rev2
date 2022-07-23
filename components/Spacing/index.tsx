import clsx from "clsx";
import { spacing, SpacingProps } from "./index.css";

export const Spacing = ({
  space,
  ...props
}: SpacingProps & JSX.IntrinsicElements["div"]) => (
  <div {...props} className={clsx(spacing({ space }), props.className)} />
);
