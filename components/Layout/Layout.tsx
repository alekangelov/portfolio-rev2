import { Html } from "@react-three/drei";
import { Navbar } from "@components";
import { PropsWithChildren, useEffect } from "react";
import { ThemeStore, useTheme } from "@stores";
import { Background } from "./canvas";
import { Location } from "react-router-dom";

const selector = (store: ThemeStore) => {
  return {
    theme: store.theme,
  };
};

export const Layout = ({
  children,
  location,
}: PropsWithChildren<{ location: Location }>) => {
  const { theme } = useTheme(selector);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      return;
    }
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }, [theme]);
  return (
    <>
      <Navbar />
      <Background location={location} key="bg" />
      <main>{children}</main>
    </>
  );
};
