"use client";
import Text from "@/components/Text";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Text />
    </Canvas>
  );
}
