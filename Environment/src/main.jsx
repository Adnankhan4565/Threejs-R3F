import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";

const created = ({ gl }) => {
  gl.setClearColor("ivory", 1);
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas
      shadows
      camera={{
        fov: 75,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
      onCreated={created}
    >
      <App />
    </Canvas>
  </StrictMode>
);
