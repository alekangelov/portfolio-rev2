import clsx from "clsx";
import { useEffect, useState } from "react";
import { switchStyle } from "./style.css";

type SwitchProps<T> = {
  value?: T;
  options: [T, T];
  onChange?: (value: T) => void;
  icons?: [JSX.Element, JSX.Element];
  id?: string;
  name?: string;
};

export const Switch = <T,>(props: SwitchProps<T>) => {
  const [value, setValue] = useState<T>(props.value || props.options[0]);
  const toggle = () => {
    const newValue =
      value === props.options[0] ? props.options[1] : props.options[0];
    setValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };
  const { name, id } = props;
  const active = value === props.options[1];
  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);
  return (
    <div
      onClick={toggle}
      className={clsx({ [switchStyle.parent]: true, active })}
    >
      <input type="checkbox" value="" {...{ name, id }} hidden />
      <div className={switchStyle.track}>
        <div className={switchStyle.thumb} />
        <div className={switchStyle.background}>
          {props.icons?.map((e, i) => (
            <div key={`${props.id}-icon-${i}`}>{e}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
