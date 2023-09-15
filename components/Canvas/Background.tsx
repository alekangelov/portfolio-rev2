import { memo, PropsWithChildren, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Cloud, Environment, Scroll, ScrollControls } from "@react-three/drei";
import { HomeScene } from "./Scenes/HomeScene";
import Effects from "./Effects";
import * as THREE from "three";
import { Box, Flex } from "@react-three/flex";
import { useContainer } from "./hooks/useContainer";
import { AboutScene } from "./Scenes/AboutScene";
import Color from "color";
import { ProjectsScene } from "./Scenes/ProjectsScene";
import { BlogScene } from "./Scenes/BlogScene";
import { ContactScene } from "./Scenes/ContactScene";
import { LaptopScene } from "./Scenes/LaptopScene";
import { FooterScene } from "./Scenes/FooterScene";
import { HtmlPages } from "components/Pages";

const style = {
  width: "100%",
  height: "100%",
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
  const [scrollPages, setScrollPages] = useState(1);
  function handleReflow(_: number, flexHeight: number) {
    setScrollPages(Math.ceil(flexHeight / height));
  }
  return (
    <Suspense>
      <Environment files="/studio.hdr" encoding={THREE.LinearEncoding} />
      <ScrollControls enabled pages={scrollPages}>
        <Flex
          size={[width, 0, 0]}
          position={[-width / 2, height / 2, 0]}
          dir="column"
          onReflow={handleReflow}
        >
          {/* <Stats showPanel={0} className="stats" /> */}
          <Scroll html>
            <HtmlPages />
          </Scroll>
          <Scroll>
            <Box width="100%" height={height}>
              <Box dir="column" width="100%" height="100%">
                <Box renderOrder={0} width="100%" minHeight={height}>
                  {/* <ambientLight color="white" intensity={0.2} /> */}
                  <Scroll>
                    <Box centerAnchor width="100%" height={0}>
                      <Cloud
                        texture="/cloud.png"
                        color="#0077ff"
                        speed={0.5}
                        opacity={0.1}
                        segments={10}
                      />
                    </Box>
                  </Scroll>
                  <HomeScene />
                </Box>
                <Box renderOrder={1} width="100%">
                  <AboutScene />
                </Box>
                <Box renderOrder={2} width="100%">
                  <ProjectsScene />
                </Box>
                <Box renderOrder={3} width="100%">
                  <LaptopScene />
                </Box>
                <Box renderOrder={4} width="100%">
                  <BlogScene />
                </Box>
                <Box renderOrder={5} width="100%">
                  <ContactScene />
                </Box>
                <Box renderOrder={6}>
                  <FooterScene />
                </Box>
              </Box>
            </Box>
          </Scroll>
          <Effects />
          {/* <OrbitControls /> */}
          {children}
        </Flex>
      </ScrollControls>
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
