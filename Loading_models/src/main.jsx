import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";

createRoot(document.getElementById("root")).render(
  <Canvas
    shadows
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
    }}
  >
    <App />
  </Canvas>
);
