import { useResponsiveValue } from "@utils";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import { PropsWithChildren } from "react";
import { About } from "./About";
import { Blog } from "./Blog";
import { Contact } from "./Contact";
import { Landing } from "./Landing";
import { Projects } from "./Projects";
import { threeSpacing, factor, threePage, debug } from "./style.css";

const Spacing = ({
  factor: xFactor = 1,
  debug: xDebug,
}: {
  factor: number;
  debug?: boolean;
}) => (
  <div
    className={clsx(threeSpacing, xDebug && debug)}
    style={{
      ...assignInlineVars(
        {
          factor,
        },
        { factor: `${xFactor}` }
      ),
    }}
  />
);

const Page = ({
  factor: xFactor = 1,
  debug: xDebug,
  children,
}: PropsWithChildren<{ factor?: number; debug?: boolean }>) => (
  <div
    className={clsx(threePage, xDebug && debug)}
    children={children}
    style={{
      ...assignInlineVars(
        {
          factor,
        },
        { factor: `${xFactor}` }
      ),
    }}
  />
);

export const HtmlPages = () => {
  const aboutFactor = useResponsiveValue({
    base: 4,
    tablet: 3,
  });
  return (
    <>
      <Page>
        <Landing />
      </Page>
      <Page factor={aboutFactor}>
        <Spacing factor={1.2} />
        <About />
      </Page>
      <Page factor={1}>
        <Spacing factor={0.3} />
        <Projects />
      </Page>
      <Spacing factor={1.5} />
      <Page>
        <Spacing factor={0.3} />
        <Blog />
      </Page>
      <Page>
        <Spacing factor={0.3} />
        <Contact />
      </Page>
    </>
  );
};
