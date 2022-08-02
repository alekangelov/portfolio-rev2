import { scrollHeights, useObservable } from "@stores";
import { useResponsiveValue } from "@utils";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import { PropsWithChildren, useEffect, useLayoutEffect, useRef } from "react";
import useMeasure from "react-use-measure";
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
  factor: xFactor,
  debug: xDebug,
  children,
  key,
}: PropsWithChildren<{
  factor?: number;
  debug?: boolean;
  key?: keyof typeof scrollHeights;
}>) => (
  <div
    className={clsx(threePage, xDebug && debug)}
    children={children}
    style={{
      ...assignInlineVars(
        {
          factor,
        },
        { factor: `${xFactor || ""}` }
      ),
    }}
  />
);

function HeightReporter({
  keyX: key,
  children,
}: PropsWithChildren<{ keyX: keyof typeof scrollHeights }>) {
  const [_, set] = useObservable(scrollHeights[key]);
  const [ref, bounds] = useMeasure();
  useLayoutEffect(() => {
    set(() => bounds.height);
  }, [bounds.height]);
  return <div ref={ref} children={children} />;
}

export const HtmlPages = () => {
  return (
    <>
      <Page factor={1}>
        <HeightReporter keyX="home">
          <Landing />
        </HeightReporter>
      </Page>
      <Page>
        <Spacing factor={1} />
        <HeightReporter keyX="about">
          <About />
          <Spacing factor={0.1} />
        </HeightReporter>
      </Page>
      <Page>
        <Spacing factor={0.35} />
        <HeightReporter keyX="projects">
          <Projects />
        </HeightReporter>
        <Spacing factor={1.5} />
      </Page>
      <Page factor={1}>
        <Spacing factor={0.35} />
        <HeightReporter keyX="blog">
          <Blog />
        </HeightReporter>
        <Spacing factor={0.35} />
      </Page>
      <Page>
        <Spacing factor={0.5} />

        <HeightReporter keyX="contact">
          <Contact />
        </HeightReporter>
      </Page>
    </>
  );
};
