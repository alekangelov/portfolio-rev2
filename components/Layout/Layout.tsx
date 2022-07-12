import { Navbar } from "components";
import Head from "next/head";
import { PropsWithChildren, useEffect } from "react";
import { useDarkMode } from "usehooks-ts";
import { Background } from "./canvas";

export const Layout = ({ children }: PropsWithChildren) => {
  const darkMode = useDarkMode(false);
  useEffect(() => {
    console.log(darkMode);
    if (darkMode.isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <Head>
        <title>Alek Angelov</title>
      </Head>
      <Navbar />
      <Background />
      <main style={{ zIndex: 1 }}>{children}</main>
    </>
  );
};
