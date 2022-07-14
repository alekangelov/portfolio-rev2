import { Html } from "@react-three/drei";
import { Navbar } from "@components";
import { PropsWithChildren, useEffect } from "react";
import { ThemeStore, useTheme } from "@stores";
import { Background } from "./canvas";
import { Location } from "react-router-dom";

const selector = (store: ThemeStore) => {
  return {
    theme: store.theme,
    getSystemTheme: store.getSystemTheme,
  };
};

export const Layout = ({
  children,
  location,
}: PropsWithChildren<{ location: Location }>) => {
  const { theme, getSystemTheme } = useTheme(selector);
  useEffect(() => {
    const mainTheme = theme === "system" ? getSystemTheme() : theme;
    console.log(mainTheme);
    if (mainTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      return;
    }
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }, [theme, getSystemTheme]);
  return (
    <>
      <Navbar />
      <Background location={location} key="bg" />
      <main>{children}</main>
    </>
  );
};
