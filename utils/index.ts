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

export const getPageSize = (length = 1, colSize = "12") => {
  const perPage = 12 / parseInt(colSize ?? "12");
  const pageSize = Math.ceil(length / perPage);
  return pageSize;
};

type X = (e: any) => void;

const clickCache = new Map<string, X>();

export const generateClick = (url: string): X => {
  if (clickCache.has(url)) {
    return clickCache.get(url) as X;
  }
  const click = (e: any) => {
    e.preventDefault();
    window.open(url, "_blank");
  };
  clickCache.set(url, click);
  return click;
};

export const clientHeight = {
  set: "--client-height",
  get: "var(--client-height)",
};
