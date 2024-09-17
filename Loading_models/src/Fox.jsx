/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { useControls } from "leva";

const Fox = () => {
  const fox = useGLTF("./Fox/glTF/Fox.gltf");
  const animations = useAnimations(fox.animations, fox.scene);

  const { animationsName } = useControls({
    animationsName: {
      options: ["Run", "Walk", "Survey"],
    },
  });

  useEffect(() => {
    const action = animations.actions[animationsName];
    console.log(action);
    action.reset().fadeIn(0.5).play();

    return () => {
      console.log("dispose");
      action.fadeOut(2);
    };
  }, [animationsName]);

  return (
    <primitive
      object={fox.scene}
      scale={0.02}
      position={[-2.5, 0, 2.5]}
      rotation-y={0.3}
    />
  );
};

export default Fox;
