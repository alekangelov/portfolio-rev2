import { memo, PropsWithChildren, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { HomeScene } from "./Scenes/HomeScene";
import Effects from "./Effects";
import * as THREE from "three";
import { Box, Flex, useReflow } from "@react-three/flex";
import { useContainer } from "./hooks/useContainer";
import { scroll } from "@stores";
import { AboutScene } from "./Scenes/AboutScene";
import { BoxDebug, FlexDebug } from "./Helpers/Debug";
import { darkTheme } from "styles/themes.css";
import Color from "color";
import { ProjectsScene } from "./Scenes/ProjectsScene";
import { useEventListener } from "usehooks-ts";
import { useScrollPosition } from "./hooks/useScroll";

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
      camera={{ position: [0, 0, 5], far: 1000 }}
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
  useEventListener("resize", reflow);
  return (
    <Suspense>
      <Environment preset="studio" />
      <pointLight
        intensity={0.5}
        position={[0, 5, 3]}
        color="#e92fab"
        castShadow
      />
      <pointLight
        intensity={1}
        position={[10, 10, -5]}
        color="#0059ff"
        castShadow
      />
      <ambientLight color="white" intensity={0.25} />
      <Flex
        size={[width, 0, 0]}
        position={[-width / 2, height / 2, 0]}
        dir="column"
      >
        <Box ref={ref}>
          <Box dir="column" width="100%" height={10}>
            <Box renderOrder={0} mt={-2} width="100%" minHeight={height}>
              <HomeScene />
            </Box>
            <Box renderOrder={1} width="100%">
              <AboutScene />
            </Box>
            <Box renderOrder={2} width="100%">
              <ProjectsScene />
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
