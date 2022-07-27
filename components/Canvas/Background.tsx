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

const style = {
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: 0,
  left: 0,
};
const dpr = [1, 1];

const Wrapper = ({ children }: PropsWithChildren<unknown>) => {
  return (
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
  );
};

const v = new THREE.Vector3();

const Scenes = ({ children }: PropsWithChildren<unknown>) => {
  const { width, height } = useContainer();
  const ref = useScrollPosition();
  const reflow = useReflow();
  const domHeight = useDomHeight();
  useEffect(() => {
    document.body.style.height = `${domHeight}px`;
  }, [domHeight]);
  useEventListener("resize", reflow);
  return (
    <Suspense>
      <Environment files="studio.hdr" encoding={THREE.LinearEncoding} />
      <Flex
        size={[width, 0, 0]}
        position={[-width / 2, height / 2, 0]}
        dir="column"
      >
        <Box ref={ref} width="100%" height={10}>
          <Box dir="column" width="100%" height="100%">
            <Box renderOrder={0} mt={-2} width="100%" minHeight={height}>
              <ambientLight color="white" intensity={0.2} />
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
              <Box centerAnchor width={"100%"} height={0}>
                <group position={[0, 0, 0]}>
                  <Sparkles
                    speed={2}
                    noise={50}
                    count={1000}
                    scale={[50, 70, 10]}
                    color={"white"}
                    size={1}
                    opacity={1}
                  />
                </group>
              </Box>
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
