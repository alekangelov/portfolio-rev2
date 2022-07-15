import { Navbar, Footer, Background } from "@components";
import { PropsWithChildren, useEffect, useRef } from "react";
import { ThemeStore, useTheme, scroll } from "@stores";

const selector = (store: ThemeStore) => {
  return {
    theme: store.theme,
  };
};

const handleScroll: React.UIEventHandler<HTMLElement> = (event) => {
  scroll.top = (event.target as HTMLElement).scrollTop;
};

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  const { theme } = useTheme(selector);
  const scrollRef = useRef<HTMLElement>(null);
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
      <Background key="bg" />
      <main ref={scrollRef} onScroll={handleScroll}>
        {children}
      </main>
      <Footer />
    </>
  );
};
