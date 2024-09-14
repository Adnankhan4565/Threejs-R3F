import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas
      gl={{ antialias: true }}
      camera={{
        fov: 75,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
    >
      <App />
    </Canvas>
  </StrictMode>
);
