/* eslint-disable react/no-unknown-property */
import { useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  Environment,
  useHelper,
  Stage,
} from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useControls } from "leva";

function App() {
  const cube = useRef();
  const directionalLight = useRef();

  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  useFrame((state, delta) => {
    // const time = state.clock.getElapsedTime();
    cube.current.rotation.y += delta * 0.2;
    // cube.current.position.x = 2 + Math.sin(time);
  });

  const { color, opacity, blur } = useControls("Contact Shadows", {
    color: "#1dbf75",
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });

  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
    useControls("Env", {
      envMapIntensity: { value: 1, min: 0, max: 12 },
      envMapHeight: { value: 7, min: 0, max: 100 },
      envMapRadius: { value: 28, min: 10, max: 1000 },
      envMapScale: { value: 100, min: 10, max: 1000 },
    });
  return (
    <>
      {/* <Environment
        environmentIntensity={envMapIntensity}
        preset="sunset"
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
      > */}
      {/* <color args={["black"]} attach="background" />
        <Lightformer
          position-z={-5}
          scale={10}
          color={"red"}
          intensity={10}
          form={"ring"}
        /> */}
      {/* <mesh position-z={-5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color={[10, 0, 0]} />
        </mesh> */}
      {/* </Environment> */}
      {/* <SoftShadows /> */}
      {/* <Sky sunPosition={sunPosition} /> */}

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color="#316d39"
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}
      >
        <RandomizedLight
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          position={[1, 2, 3]}
          bias={0.001}
        />
      </AccumulativeShadows> */}

      {/* <ContactShadows
        position={[0, 0, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
        frames={1}
      /> */}

      {/* <directionalLight
        ref={directionalLight}
        castShadow
        position={sunPosition}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />
      <ambientLight intensity={0.5} /> */}

      {/* <mesh position-x={-2} position-y={1} castShadow>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh ref={cube} position-x={2} position-y={1} scale={1.5} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh> */}
      <Stage
        shadows={{
          type: "contact",
          opacity: 0.2,
          blur: 2,
        }}
        environment="sunset"
        preset="portrait"
        intensity={2}
      >
        <mesh position-x={-2} position-y={1} castShadow>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>

        <mesh ref={cube} position-x={2} position-y={1} scale={1.5} castShadow>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </Stage>

      {/* <mesh position-y={0} rotation-x={-Math.PI * 0.5} scale={10} receiveShadow>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh> */}
    </>
  );
}

export default App;
