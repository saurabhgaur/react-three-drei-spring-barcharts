import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls, Plane } from "@react-three/drei";
import { useSprings, animated } from "@react-spring/three";

const R3fChart = () => {
  const AnimatedBox = animated(Box);
  const gap = 3;

  const items = [300, 500, 600, 250, 700];
  const [springs, api] = useSprings(items.length, (i) => ({
    from: { position: [(i - 2) * 3, 0.5, 0], scale: [1, 1, 1] },
  }));

  const showChart = () => {
    api((i) => ({
      to: {
        position: [(i - 2) * 3, 0.5, -items[i] / 100],
        scale: [1, 1, items[i] / 50],
      },
    }));
  };

  const hideChart = () => {
    api((i) => ({
      to: { position: [(i - 2) * 3, 0.5, 0], scale: [1, 1, 1] },
    }));
  };

  const alignChart = () => {
    api((i) => ({ to: { position: [(i - 2) * 3, 0.5, -items[i] / 100] } }));
  };

  //   useEffect(
  //     () =>
  //       void setInterval(() => api((i) => ({ to: { scale: [1, 1, 3] } })), 3000),
  //     []
  //   );

  return (
    <div className="relative h-600px " style={{ height: 650 }}>
      <div className="flex flex-row gap-2 px-2 py-2">
        <button
          onClick={showChart}
          className="px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500"
        >
          Show Chart
        </button>
        <button
          onClick={hideChart}
          className="px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500"
        >
          Hide Chart
        </button>

        <button
          onClick={alignChart}
          className="px-4 py-2 font-bold text-white bg-blue-500 border-b-4 border-blue-700 rounded hover:bg-blue-400 hover:border-blue-500"
        >
          Align Chart
        </button>
      </div>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 5, 20], fov: 50 }}
        className="border border-green-200"
      >
        <OrbitControls />
        <axesHelper args={[20]} />
        <gridHelper args={[50, 50, 0xff0000, "teal"]} />

        <ambientLight />
        <spotLight
          angle={0.25}
          penumbra={0.5}
          position={[10, 10, 5]}
          castShadow
        />
        <Plane
          args={[50, 50]}
          rotation-x={-Math.PI / 2}
          position-y={-0.01}
          receiveShadow
        >
          <meshStandardMaterial color="#f0f0f0" />
        </Plane>
        {/* <Box castShadow position={[2, 0.5, 0]}>
          <meshStandardMaterial color="orange" />
        </Box>
        <Box castShadow position={[-2, 0.5, 0]}>
          <meshStandardMaterial color="orange" />
        </Box>
        <Box castShadow position={[0, 0.5, 0]}>
          <meshStandardMaterial color="orange" />
        </Box> */}

        {springs.map((animation, i) => (
          <AnimatedBox key={i} castShadow {...animation}>
            <meshStandardMaterial color="orange" />
          </AnimatedBox>
        ))}
      </Canvas>
    </div>
  );
};

export default R3fChart;
