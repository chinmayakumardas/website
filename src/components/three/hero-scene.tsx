
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.35) * 0.25;

    meshRef.current.rotation.y += 0.003;
  });

  return (
    <Float
      speed={1.8}
      rotationIntensity={0.7}
      floatIntensity={1.2}
    >
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 32]} />

        <MeshDistortMaterial
          color="#d8ff3e"
          roughness={0.18}
          metalness={0.7}
          distort={0.32}
          speed={1.8}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      <ambientLight intensity={1.8} />

      <directionalLight
        position={[4, 4, 5]}
        intensity={3}
      />

      <pointLight
        position={[-4, -3, 3]}
        intensity={20}
        color="#ffffff"
      />

      <AnimatedOrb />
    </Canvas>
  );
}

