/* eslint-disable react/no-unknown-property */
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

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
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <group ref={sceneRef}>
        <mesh position-x={-2}>
          <sphereGeometry scale={1.5} />
          <meshStandardMaterial color={"hotpink"} />
        </mesh>

        <mesh ref={cubeRef} position-x={2} scale={1.5}>
          <boxGeometry scale={1.5} />
          <meshStandardMaterial color={"mediumpurple"} />
        </mesh>
      </group>

      <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={"lightgreen"} />
      </mesh>

      {/* <CustomObject /> */}
    </>
  );
}

export default App;
