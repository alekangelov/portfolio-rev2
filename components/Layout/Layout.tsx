import { Navbar, Footer, Background } from "@components";
import { PropsWithChildren, useEffect, useRef } from "react";
import { ThemeStore, useTheme, scroll } from "@stores";
import { layout, scrollContainer } from "./style.css";
import { useEventListener } from "usehooks-ts";

const selector = (store: ThemeStore) => {
  return {
    theme: store.theme,
  };
};

const handleScroll: React.DOMAttributes<HTMLDivElement>["onScroll"] = (
  event
) => {
  const t = event.target as HTMLDivElement;
  scroll.top.set((e) => {
    return t.scrollTop;
  });
};

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div
      onScroll={handleScroll}
      style={{
        maxHeight: document.documentElement.clientHeight,
        overflow: "hidden scroll",
      }}
    >
      <div id="scrollbody" style={{}}></div>

      <div style={{ width: "100%", height: "100%" }}>
        <Background key="bg" />
      </div>
      <Navbar />

      <Footer />
    </div>
  );
};
