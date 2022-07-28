import clsx from "clsx";
import { input } from "./index.css";

type P = {
  name?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  type?: JSX.IntrinsicElements["input"]["type"];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
};

type T = {
  name?: string;
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  disabled?: boolean;
  rows?: number;
};

export const Input = ({
  name,
  value,
  label,
  placeholder,
  type,
  onChange,
  onBlur,
  onFocus,
  error,
  disabled,
}: P) => {
  return (
    <div className={input.container}>
      {label && (
        <label className={input.label} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        className={input.input}
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
      />
    </div>
  );
};

export const Textarea = ({
  name,
  value,
  label,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  error,
  rows = 4,
  disabled,
}: T) => {
  return (
    <div className={input.container}>
      {label && (
        <label className={input.label} htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        className={input.input}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        rows={rows}
      />
    </div>
  );
};

type B = Omit<JSX.IntrinsicElements["button"], "color"> &
  Parameters<typeof input.button>[0];

export const Button = ({ color, ...props }: B) => {
  return (
    <button
      {...props}
      className={clsx(input.button({ color }), props.className)}
    />
  );
};
