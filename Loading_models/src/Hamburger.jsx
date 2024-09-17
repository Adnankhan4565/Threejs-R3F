/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";

export default function Hamburger(props) {
  const { nodes, materials } = useGLTF("./hamburger.glb");
  const bottomBunRef = useRef();
  const meatRef = useRef();
  const cheeseRef = useRef();
  const topBunRef = useRef();

  // Animate the meshes using GSAP when the component mounts
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate all the meshes at the same time
    tl.from(
      [
        bottomBunRef.current.position,
        cheeseRef.current.position,
        topBunRef.current.position,
      ],
      {
        y: (i) => [-5, 4, 5][i], // Animate from different positions
        duration: 1,
        ease: "sine.out",
        stagger: 0, // All animations happen at the same time
      }
    );
  }, []);

  return (
    <group {...props} scale={0.5} dispose={null} position-x={2}>
      <mesh
        ref={bottomBunRef}
        castShadow
        receiveShadow
        geometry={nodes.bottomBun.geometry}
        material={materials.BunMaterial}
      />
      <mesh
        ref={meatRef}
        castShadow
        receiveShadow
        geometry={nodes.meat.geometry}
        material={materials.SteakMaterial}
        position={[0, 2.817, 0]}
      />
      <mesh
        ref={cheeseRef}
        castShadow
        receiveShadow
        geometry={nodes.cheese.geometry}
        material={materials.CheeseMaterial}
        position={[0, 3.04, 0]}
      />
      <mesh
        ref={topBunRef}
        castShadow
        receiveShadow
        geometry={nodes.topBun.geometry}
        material={materials.BunMaterial}
        position={[0, 1.771, 0]}
      />
    </group>
  );
}

useGLTF.preload("/hamburger.glb");
