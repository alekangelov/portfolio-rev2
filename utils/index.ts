export * from "./object";
export * from "./refs";
export * from "./array";
export * from "./hooks";
export * from "./string";

const extractVariableName = (str: string) => {
  const [, name] = str.split("var(");
  return name.substring(0, name.length - 1);
};

let styleCache: CSSStyleDeclaration | undefined;

export const getCSSVarValue = (name: string) => {
  if (!styleCache) {
    styleCache = window.getComputedStyle(document.body);
  }
  return parseInt(styleCache.getPropertyValue(`${extractVariableName(name)}`));
};
