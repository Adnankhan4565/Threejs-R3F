/* eslint-disable react/no-unknown-property */
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  Text,
  Html,
  OrbitControls,
  PivotControls,
  TransformControls,
  MeshReflectorMaterial,
  Float,
} from "@react-three/drei";

// import CustomObject from "./CustomObject";

function App() {
  const cubeRef = useRef();
  const sceneRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    // sceneRef.current.rotation.y += delta * 0.5;
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group ref={sceneRef}>
        <PivotControls
          anchor={[0, 0, 0]}
          depthTest={false}
          lineWidth={4}
          axisColors={["#9381ff", "#ff4d6d", "#78e582"]}
          scale={2}
        >
          <mesh position-x={-2}>
            <sphereGeometry scale={1.5} />
            <meshStandardMaterial color={"hotpink"} />
          </mesh>
        </PivotControls>

        <TransformControls position-x={2}>
          <mesh ref={cubeRef} scale={1.5}>
            <boxGeometry scale={1.5} />
            <meshStandardMaterial color={"mediumpurple"} />
          </mesh>
        </TransformControls>
      </group>

      <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color={"lightgreen"} /> */}
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
        />
      </mesh>

      {/* <Html>Test</Html> */}
      {/* <CustomObject /> */}
      <Float speed={5} intensity={0.5}>
        <Text fontSize={0.5} position-y={2} color={"salmon"}>
          Hello
        </Text>
      </Float>
    </>
  );
}

export default App;
