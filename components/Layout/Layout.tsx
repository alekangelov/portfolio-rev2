import { Navbar, Footer, Background } from "@components";
import { PropsWithChildren, useEffect, useRef } from "react";
import { ThemeStore, useTheme, scroll } from "@stores";
import { layout, scrollContainer } from "./style.css";

const selector = (store: ThemeStore) => {
  return {
    theme: store.theme,
  };
};

const handleScroll = () => {
  // scroll.top = (event.target as HTMLElement).scrollTop;
  scroll.top = window.scrollY;
};

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  const { theme } = useTheme(selector);
  const scrollRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      return;
    }
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }, [theme]);
  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Background key="bg" />
      <main ref={bodyRef} className={layout}>
        {children}
      </main>
      <div
        style={{ height: "400rem", width: "100%" }}
        ref={scrollRef}
        className={scrollContainer}
      />
      <Footer />
    </>
  );
};
