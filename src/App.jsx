import {
  KeyboardControls,
  Loader,
  PerformanceMonitor,
  useFont,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Leva } from "leva";
import { Suspense, useMemo, useState } from "react";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Listeners } from "@manapotion/react";
import { DevTools } from "./components/DevTools";

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
  run: "run",
};

function App() {
  useFont.preload("./fonts/Noto Sans JP ExtraBold_Regular.json");
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
      { name: Controls.run, keys: ["Shift"] },
    ],
    []
  );

  const [dpr, setDpr] = useState(1.5);
  const { progress } = useProgress();
  return (
      <KeyboardControls map={map}>
      <Leva hidden />
      <Listeners />
      <Canvas frameloop="demand" shadows camera={{ position: [5, 20, 14], fov: 42, far:50}} dpr={dpr}>
        <color attach="background" args={["#e3daf7"]} />
        <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)}>
          <Suspense>
            <Physics>
              <Experience />
            </Physics>
          </Suspense>
        </PerformanceMonitor>
      </Canvas>
      <Interface />
      <DevTools />
      <Loader />
      {progress === 100}
      </KeyboardControls>
  );
}

export default App;
