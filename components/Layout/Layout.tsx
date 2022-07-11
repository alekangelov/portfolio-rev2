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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap`}
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Background>
        <main>{children}</main>
      </Background>
    </>
  );
};
