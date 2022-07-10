import { CSSProperties } from "react";
type Kebab<
  T extends string,
  A extends string = ""
> = T extends `${infer F}${infer R}`
  ? Kebab<R, `${A}${F extends Lowercase<F> ? "" : "-"}${Lowercase<F>}`>
  : A;
export const transition = (...args: Kebab<keyof CSSProperties>[]) =>
  args.map((e) => `${e} 0.2s cubic-bezier(0.65, 0.05, 0.36, 1)`).join(", ");
