import { Html } from "@react-three/drei";
import { Navbar } from "components";
import Head from "next/head";
import { PropsWithChildren, useEffect } from "react";
import { ThemeStore, useTheme } from "stores";
import { useDarkMode } from "usehooks-ts";
import { Background } from "./canvas";

const selector = (store: ThemeStore) => {
  return {
    theme: store.theme,
    getSystemTheme: store.getSystemTheme,
  };
};

export const Layout = ({ children }: PropsWithChildren) => {
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
      <Head>
        <title>Alek Angelov</title>
      </Head>
      <Navbar />
      <Background key="bg">
        <Html fullscreen>
          <main>{children}</main>
        </Html>
      </Background>
    </>
  );
};
