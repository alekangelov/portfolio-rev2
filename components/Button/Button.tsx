import clsx from "clsx";
import { ButtonProps, button } from "./styles.css";

export const Button = ({
  size,
  color,
  ...props
}: ButtonProps & JSX.IntrinsicElements["button"]) => {
  return (
    <button
      {...props}
      className={clsx(button({ size, color }), props.className)}
    />
  );
};
