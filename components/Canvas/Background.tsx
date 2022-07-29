import { memo, PropsWithChildren, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Cloud, Environment, Sparkles } from "@react-three/drei";
import { HomeScene } from "./Scenes/HomeScene";
import Effects from "./Effects";
import * as THREE from "three";
import { Box, Flex, useReflow } from "@react-three/flex";
import { useContainer } from "./hooks/useContainer";
import { AboutScene } from "./Scenes/AboutScene";
import { BoxDebug } from "./Helpers/Debug";
import Color from "color";
import { ProjectsScene } from "./Scenes/ProjectsScene";
import { useEventListener } from "usehooks-ts";
import { useScrollPosition } from "./hooks/useScroll";
import { Clump, Pointer } from "./Scenes/ClumpScene";
import { Physics } from "@react-three/cannon";
import { BlogScene } from "./Scenes/BlogScene";
import { HeightReporter, useDomHeight } from "./Helpers/HeightReporter";
import { ContactScene } from "./Scenes/ContactScene";
import { LaptopScene } from "./Scenes/LaptopScene";
import { FooterScene } from "./Scenes/FooterScene";

const style = {
  width: "100%",
  height: document.documentElement.clientHeight,
  position: "fixed",
  top: 0,
  left: 0,
};
const dpr = [1, 1];

const Wrapper = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
        id="dom-content"
      />

      <Canvas
        style={style as any}
        camera={{ position: [0, 0, 5], far: 500 }}
        shadows
        dpr={dpr as any}
        flat
        linear
        gl={{
          antialias: true,
          outputEncoding: THREE.sRGBEncoding,
          alpha: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          autoClear: false,
          logarithmicDepthBuffer: true,
        }}
      >
        <color attach="background" args={[Color(`#343434`).hex()]} />
        {children}
      </Canvas>
    </>
  );
};

const v = new THREE.Vector3();

const Scenes = ({ children }: PropsWithChildren<unknown>) => {
  const { width, height } = useContainer();
  const ref = useScrollPosition();
  const domHeight = useDomHeight();
  useEffect(() => {
    (
      document.querySelector("#scrollbody") as HTMLElement
    ).style.height = `${domHeight}px`;
  }, [domHeight]);
  return (
    <Suspense>
      <Environment files="/studio.hdr" encoding={THREE.LinearEncoding} />
      <Flex
        size={[width, 0, 0]}
        position={[-width / 2, height / 2, 0]}
        dir="column"
      >
        <Box ref={ref} width="100%" height={height}>
          <Box dir="column" width="100%" height="100%">
            <Box renderOrder={0} width="100%" minHeight={height}>
              {/* <ambientLight color="white" intensity={0.2} /> */}
              <HeightReporter i={0} />
              <Box centerAnchor width="100%" height={0}>
                <Cloud color="#0077ff" speed={0.5} opacity={0.1} />
              </Box>
              <HomeScene />
            </Box>
            <Box renderOrder={1} width="100%">
              <HeightReporter i={1} />
              <AboutScene />
            </Box>
            <Box renderOrder={2} width="100%">
              <HeightReporter i={2} />
              <ProjectsScene />
            </Box>
            <Box renderOrder={3} width="100%">
              <HeightReporter i={3} />
              <LaptopScene />
            </Box>
            <Box renderOrder={4} width="100%">
              <HeightReporter i={4} />
              <BlogScene />
            </Box>
            <Box renderOrder={5} width="100%">
              <HeightReporter i={5} />
              <ContactScene />
            </Box>
            <Box renderOrder={6}>
              <HeightReporter i={6} factor={1} />
              <FooterScene />
            </Box>
          </Box>
        </Box>
        <Effects />
        {/* <OrbitControls /> */}
        {children}
      </Flex>
    </Suspense>
  );
};

// eslint-disable-next-line react/display-name
export const Background = memo(({ children }: PropsWithChildren<unknown>) => {
  return (
    <Wrapper>
      <Scenes {...{ children }} />
    </Wrapper>
  );
});
