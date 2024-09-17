"use client";
import "./globals.css";
import { Canvas } from "@react-three/fiber";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          {children}
        </Canvas>
      </body>
    </html>
  );
}
